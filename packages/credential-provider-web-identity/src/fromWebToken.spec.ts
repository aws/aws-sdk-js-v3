import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients";
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

vi.mock("@aws-sdk/nested-clients", () => ({
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockReturnValue(() => {}),
}));

describe("fromWebToken", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
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
});
