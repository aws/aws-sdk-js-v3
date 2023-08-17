import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromContainerMetadata, fromInstanceMetadata } from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";

import { resolveCredentialSource } from "./resolveCredentialSource";

jest.mock("@aws-sdk/credential-provider-env");
jest.mock("@smithy/credential-provider-imds");

describe(resolveCredentialSource.name, () => {
  const mockProfileName = "mockProfileName";

  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  const mockFakeCreds = {
    accessKeyId: "mockFakeAccessKeyId",
    secretAccessKey: "mockFakeSecretAccessKey",
  };

  beforeEach(() => {
    (fromEnv as jest.Mock).mockReturnValue(() => Promise.resolve(mockFakeCreds));
    (fromContainerMetadata as jest.Mock).mockReturnValue(() => Promise.resolve(mockFakeCreds));
    (fromInstanceMetadata as jest.Mock).mockReturnValue(() => Promise.resolve(mockFakeCreds));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each([
    ["EcsContainer", fromContainerMetadata],
    ["Ec2InstanceMetadata", fromInstanceMetadata],
    ["Environment", fromEnv],
  ])("when credentialSource=%s, calls %p", async (credentialSource, fromFn) => {
    (fromFn as jest.Mock).mockReturnValue(() => Promise.resolve(mockCreds));
    const receivedCreds = await resolveCredentialSource(credentialSource, mockProfileName)();
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(fromFn).toHaveBeenCalledWith();
    [fromContainerMetadata, fromInstanceMetadata, fromEnv]
      .filter((fn) => fn !== fromFn)
      .forEach((fnNotCalled) => {
        expect(fnNotCalled).not.toHaveBeenCalled();
      });
  });

  it("throws error if credentialSource is not one of ['EcsContainer','Ec2InstanceMetadata','Environment']", async () => {
    const mockCredentialSource = "mockCredentialSource";
    const expectedError = new CredentialsProviderError(
      `Unsupported credential source in profile ${mockProfileName}. Got ${mockCredentialSource}, ` +
        `expected EcsContainer or Ec2InstanceMetadata or Environment.`
    );
    try {
      await resolveCredentialSource(mockCredentialSource, mockProfileName)();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    [fromContainerMetadata, fromInstanceMetadata, fromEnv].forEach((fnNotCalled) => {
      expect(fnNotCalled).not.toHaveBeenCalled();
    });
  });
});
