import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { isSsoProfile, resolveSsoCredentials } from "./resolveSsoCredentials";

vi.mock("@aws-sdk/credential-provider-sso");

describe(isSsoProfile.name, () => {
  it("returns false for empty profile", () => {
    expect(isSsoProfile({})).toEqual(false);
  });

  it.each(["sso_start_url", "sso_account_id", "sso_region", "sso_session", "sso_role_name"])(
    "returns true if value at '%s' is of type string",
    (key) => {
      expect(isSsoProfile({ [key]: "string" })).toEqual(true);
    }
  );
});

describe(resolveSsoCredentials.name, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("throws error when fromSSO throws error", async () => {
    const mockProfileName = "mockProfileName";
    const expectedError = new Error("error from fromSSO");

    vi.mocked(fromSSO).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveSsoCredentials(mockProfileName, {});
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("calls fromSSO", async () => {
    const mockProfileName = "mockProfileName";
    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };

    vi.mocked(fromSSO).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveSsoCredentials(mockProfileName, {});
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("passes through clientConfig and parentClientConfig to the fromSSO provider", async () => {
    const mockProfileName = "mockProfileName";
    const mockCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    const requestHandler = vi.fn();
    const logger = vi.fn();

    vi.mocked(fromSSO).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveSsoCredentials(
      mockProfileName,
      {},
      {
        clientConfig: {
          requestHandler,
        },
        parentClientConfig: {
          logger,
        },
      }
    );
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromSSO).toHaveBeenCalledWith({
      profile: mockProfileName,
      clientConfig: {
        requestHandler,
      },
      parentClientConfig: {
        logger,
      },
    });
  });
});
