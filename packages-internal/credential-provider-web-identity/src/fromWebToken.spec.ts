import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients/sts";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { fromWebToken } from "./fromWebToken";

const mockToken = "exampletoken";
const mockRoleArn = "mockRoleArn";
const mockRoleSessionName = "mockRoleSessionName";
const mockPolicy = "mockPolicy";
const mockPolicyArns = [{ arn: "policyArn" }];
const mockProviderId = "mockProviderId";
const mockDurationSeconds = 7200;
const MOCK_CREDS = {
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  sessionToken: "sessionToken",
};

vi.mock("@aws-sdk/nested-clients/sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockReturnValue(() => Promise.resolve(MOCK_CREDS)),
}));

describe("fromWebToken", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });
  it("returns a provider that owns the credential refresh lifecycle", () => {
    const provider = fromWebToken({ webIdentityToken: mockToken, roleArn: mockRoleArn });

    expect((provider as any).memoized).toBe(true);
    expect(typeof (provider as any).invalidate).toBe("function");
  });

  it("dynamically imports roleAssumerWithWebIdentity if not provided", async () => {
    await fromWebToken({
      webIdentityToken: mockToken,
      roleArn: mockRoleArn,
    })();

    expect(getDefaultRoleAssumerWithWebIdentity).toHaveBeenCalled();
  });

  it("passes values to roleAssumerWithWebIdentity", async () => {
    expect.assertions(2);
    const init = {
      webIdentityToken: mockToken,
      roleArn: mockRoleArn,
      roleSessionName: mockRoleSessionName,
      providerId: mockProviderId,
      policyArns: mockPolicyArns,
      policy: mockPolicy,
      durationSeconds: mockDurationSeconds,
    };
    const creds = await fromWebToken({
      ...init,
      roleAssumerWithWebIdentity: async (params) => {
        expect(params).toMatchObject({
          WebIdentityToken: mockToken,
          RoleArn: mockRoleArn,
          RoleSessionName: mockRoleSessionName,
          ProviderId: mockProviderId,
          PolicyArns: mockPolicyArns,
          Policy: mockPolicy,
          DurationSeconds: mockDurationSeconds,
        });
        return MOCK_CREDS;
      },
    })();
    expect(creds).toEqual(MOCK_CREDS);
  });

  it("generates a random value for RoleSessionName if not available", async () => {
    const mockDateNow = Date.now();
    const spyDateNow = vi.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);

    const creds = await fromWebToken({
      webIdentityToken: mockToken,
      roleArn: mockRoleArn,
      roleAssumerWithWebIdentity: async (params) => {
        expect(params.RoleSessionName).toEqual(`aws-sdk-js-session-${mockDateNow}`);
        return MOCK_CREDS;
      },
    })();
    expect(creds).toEqual(MOCK_CREDS);
    expect(spyDateNow).toHaveBeenCalledTimes(1);
  });

  describe("non-recoverable STS failures", () => {
    const assumeFails = (failure: unknown) =>
      fromWebToken({
        webIdentityToken: mockToken,
        roleArn: mockRoleArn,
        roleAssumerWithWebIdentity: async () => {
          throw failure;
        },
      })().catch((error) => error);

    it.each(["AccessDenied", "IDPRejectedClaim", "InvalidIdentityToken", "RegionDisabledException"])(
      "marks %s, which cannot succeed until the customer acts",
      async (name) => {
        const failure = Object.assign(new Error("sts rejected the request"), { name });

        const error = await assumeFails(failure);

        expect(error).toBe(failure);
        expect(error.$nonRecoverable).toBe(true);
      }
    );

    it.each(["ThrottlingException", "TimeoutError"])(
      "leaves %s recoverable, so the lifecycle keeps using cached credentials",
      async (name) => {
        const failure = Object.assign(new Error("sts is unwell"), { name });

        const error = await assumeFails(failure);

        expect(error).toBe(failure);
        expect(error.$nonRecoverable).toBeUndefined();
      }
    );
  });
});
