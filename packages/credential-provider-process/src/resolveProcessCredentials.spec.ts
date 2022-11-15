import { CredentialsProviderError } from "@aws-sdk/property-provider";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { promisify } from "util";

import { getValidatedProcessCredentials } from "./getValidatedProcessCredentials";
import { resolveProcessCredentials } from "./resolveProcessCredentials";

jest.mock("util");
jest.mock("./getValidatedProcessCredentials");

describe(resolveProcessCredentials.name, () => {
  const mockExecPromise = jest.fn();
  const mockExecPromiseOutput = `{"mockCreds":true}`;
  const mockProfileName = "mockProfileName";
  const mockCredentialProcess = "/mock_cred_proc";

  const getMockProfiles = () => ({
    [mockProfileName]: {
      credential_process: mockCredentialProcess,
    },
  });

  beforeEach(() => {
    mockExecPromise.mockResolvedValue({ stdout: mockExecPromiseOutput });
    (promisify as unknown as jest.Mock).mockReturnValue(mockExecPromise);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("throws Error if profileName is not available", async () => {
    const expectedError = new CredentialsProviderError(
      `Profile ${mockProfileName} could not be found in shared credentials file.`
    );
    try {
      await resolveProcessCredentials(mockProfileName, {});
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
    expect(mockExecPromise).not.toHaveBeenCalled();
    expect(getValidatedProcessCredentials).not.toHaveBeenCalled();
  });

  it("throws Error if profile does not have value for credential_process", async () => {
    const expectedError = new CredentialsProviderError(
      `Profile ${mockProfileName} did not contain credential_process.`
    );
    try {
      await resolveProcessCredentials(mockProfileName, { [mockProfileName]: {} });
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
    expect(mockExecPromise).not.toHaveBeenCalled();
    expect(getValidatedProcessCredentials).not.toHaveBeenCalled();
  });

  it("throws Error if credential_process throws", async () => {
    const expectedErrorMessage = `${mockCredentialProcess} threw Error!`;
    const expectedError = new CredentialsProviderError(expectedErrorMessage);
    mockExecPromise.mockRejectedValue(new Error(expectedErrorMessage));

    try {
      await resolveProcessCredentials(mockProfileName, getMockProfiles());
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
    expect(mockExecPromise).toHaveBeenCalledWith(mockCredentialProcess);
    expect(getValidatedProcessCredentials).not.toHaveBeenCalled();
  });

  it("throws Error if process credentials returns invalid JSON", async () => {
    const expectedError = new CredentialsProviderError(
      `Profile ${mockProfileName} credential_process returned invalid JSON.`
    );
    mockExecPromise.mockResolvedValue({ stdout: "not a valid JSON" });

    try {
      await resolveProcessCredentials(mockProfileName, getMockProfiles());
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
    expect(mockExecPromise).toHaveBeenCalledWith(mockCredentialProcess);
    expect(getValidatedProcessCredentials).not.toHaveBeenCalled();
  });

  it("throws Error if getValidatedProcessCredentials throws", async () => {
    const expectedError = new Error("error from getValidatedProcessCredentials");
    (getValidatedProcessCredentials as jest.Mock).mockRejectedValue(expectedError);

    try {
      await resolveProcessCredentials(mockProfileName, getMockProfiles());
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
    expect(mockExecPromise).toHaveBeenCalledWith(mockCredentialProcess);
    expect(getValidatedProcessCredentials).toHaveBeenCalledWith(mockProfileName, JSON.parse(mockExecPromiseOutput));
  });

  it("returns data from getValidatedProcessCredentials", async () => {
    const expectedCreds: AwsCredentialIdentity = {
      accessKeyId: "mockAccessKeyId",
      secretAccessKey: "mockSecretAccessKey",
    };
    (getValidatedProcessCredentials as jest.Mock).mockResolvedValue(expectedCreds);
    const receivedCreds = await resolveProcessCredentials(mockProfileName, getMockProfiles());
    expect(receivedCreds).toStrictEqual(expectedCreds);
    expect(mockExecPromise).toHaveBeenCalledWith(mockCredentialProcess);
    expect(getValidatedProcessCredentials).toHaveBeenCalledWith(mockProfileName, JSON.parse(mockExecPromiseOutput));
  });
});
