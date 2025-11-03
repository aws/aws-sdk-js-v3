import { setCredentialFeature } from "@aws-sdk/core/client";
import { fromLoginCredentials } from "@aws-sdk/credential-provider-login";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { isLoginProfile, resolveLoginCredentials } from "./resolveLoginCredentials";

vi.mock("@aws-sdk/credential-provider-login", () => ({
  fromLoginCredentials: vi.fn(),
}));

vi.mock("@aws-sdk/core/client", () => ({
  setCredentialFeature: vi.fn(),
}));

describe(isLoginProfile.name, () => {
  it("returns false for empty profile", () => {
    expect(isLoginProfile({})).toEqual(false);
  });

  it("returns false for profile without login_session", () => {
    expect(isLoginProfile({ region: "us-west-2" })).toEqual(false);
  });

  it("returns true for profile with login_session", () => {
    expect(isLoginProfile({ login_session: "arn:aws:sts::123456789101:assumed-role/MyRole/user" })).toEqual(true);
  });
});

describe(resolveLoginCredentials.name, () => {
  const mockCreds: AwsCredentialIdentity = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
    sessionToken: "mockSessionToken",
    accountId: "123456789101",
  };

  const mockCredsWithFeature = {
    ...mockCreds,
    $source: { CREDENTIALS_PROFILE_LOGIN: "AC" as const },
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("calls fromLoginCredentials and adds profile feature", async () => {
    const mockProfileName = "mockProfileName";
    const mockOptions = {
      logger: {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      },
    };

    vi.mocked(fromLoginCredentials).mockReturnValue(() => Promise.resolve(mockCreds));
    vi.mocked(setCredentialFeature).mockReturnValue(mockCredsWithFeature);

    const receivedCreds = await resolveLoginCredentials(mockProfileName, mockOptions);

    expect(receivedCreds).toStrictEqual(mockCredsWithFeature);
    expect(fromLoginCredentials).toHaveBeenCalledWith({
      ...mockOptions,
      profile: mockProfileName,
    });
    expect(setCredentialFeature).toHaveBeenCalledWith(mockCreds, "CREDENTIALS_PROFILE_LOGIN", "AC");
  });

  it("throws error when fromLoginCredentials throws error", async () => {
    const mockProfileName = "mockProfileName";
    const expectedError = new Error("error from fromLoginCredentials");

    vi.mocked(fromLoginCredentials).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveLoginCredentials(mockProfileName, {});
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromLoginCredentials).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("passes options to fromLoginCredentials", async () => {
    const mockProfileName = "mockProfileName";
    const mockOptions = {
      logger: {
        debug: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
      },
      clientConfig: { region: "us-east-1" },
    };

    vi.mocked(fromLoginCredentials).mockReturnValue(() => Promise.resolve(mockCreds));
    vi.mocked(setCredentialFeature).mockReturnValue(mockCredsWithFeature);

    await resolveLoginCredentials(mockProfileName, mockOptions);

    expect(fromLoginCredentials).toHaveBeenCalledWith({
      ...mockOptions,
      profile: mockProfileName,
    });
  });
});
