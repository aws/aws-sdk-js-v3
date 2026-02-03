import { fromProcess } from "@aws-sdk/credential-provider-process";
import { Credentials } from "@aws-sdk/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { isProcessProfile, resolveProcessCredentials } from "./resolveProcessCredentials";

vi.mock("@aws-sdk/credential-provider-process");

const getMockProcessProfile = () => ({
  credential_process: "mock_command",
});

describe(isProcessProfile.name, () => {
  describe("returns false for falsy values", () => {
    it.each([false, 0, -0, "", null, undefined, NaN])("%s:", (falsyValue) => {
      expect(isProcessProfile(falsyValue)).toEqual(false);
    });
  });

  describe("returns false for data type which is not an object", () => {
    it.each([true, 1, "string"])("%s:", (notObject) => {
      expect(isProcessProfile(notObject)).toEqual(false);
    });
  });

  it.each(["credential_process"])("value at '%s' is not of type string", (key) => {
    [true, null, undefined, 1, NaN, {}].forEach((value) => {
      expect(isProcessProfile({ ...getMockProcessProfile(), [key]: value })).toEqual(false);
    });
  });

  it("returns true for ProcessProfile", () => {
    expect(isProcessProfile(getMockProcessProfile())).toEqual(true);
  });
});

describe(resolveProcessCredentials.name, () => {
  const mockCreds: Credentials = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  beforeEach(() => {
    vi.mocked(fromProcess).mockReturnValue(() => Promise.resolve(mockCreds));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("throws error when fromProcess throws", async () => {
    const mockProfileName = "mockProfileName";
    const mockOptions = {};
    const expectedError = new Error("error from fromProcess");

    vi.mocked(fromProcess).mockReturnValue(() => Promise.reject(expectedError));

    try {
      await resolveProcessCredentials(mockOptions, mockProfileName);
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(fromProcess).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });

  it("returns creds from fromProcess", async () => {
    const mockProfileName = "mockProfileName";
    const mockOptions = {};

    vi.mocked(fromProcess).mockReturnValue(() => Promise.resolve(mockCreds));

    const receivedCreds = await resolveProcessCredentials(mockOptions, mockProfileName);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromProcess).toHaveBeenCalledWith({
      profile: mockProfileName,
    });
  });
});
