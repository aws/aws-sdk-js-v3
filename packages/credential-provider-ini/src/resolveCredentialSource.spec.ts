import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/credential-provider-env");
vi.mock("@aws-sdk/credential-provider-http");
vi.mock("@smithy/credential-provider-imds");

import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromHttp } from "@aws-sdk/credential-provider-http";
import { fromContainerMetadata, fromInstanceMetadata } from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";

import { resolveCredentialSource } from "./resolveCredentialSource";

describe(resolveCredentialSource.name, () => {
  const mockProfileName = "mockProfileName";

  const mockFakeCreds = {
    accessKeyId: "mockFakeAccessKeyId",
    secretAccessKey: "mockFakeSecretAccessKey",
  };

  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };

  beforeEach(() => {
    vi.mocked(fromEnv).mockReturnValue(() => Promise.resolve(mockFakeCreds));
    vi.mocked(fromContainerMetadata).mockReturnValue(() => Promise.resolve(mockFakeCreds));
    vi.mocked(fromHttp).mockReturnValue(() => {
      throw new CredentialsProviderError("try next", {});
    });
    vi.mocked(fromInstanceMetadata).mockReturnValue(() => Promise.resolve(mockFakeCreds));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it.each([
    ["EcsContainer", fromContainerMetadata],
    ["Ec2InstanceMetadata", fromInstanceMetadata],
    ["Environment", fromEnv],
  ])("when credentialSource=%s, calls %p", async (credentialSource, fromFn) => {
    vi.mocked(fromFn).mockReturnValue(() => Promise.resolve(mockCreds));
    const providerFactory = resolveCredentialSource(credentialSource, mockProfileName);
    expect(typeof providerFactory).toEqual("function");

    const provider = await providerFactory();
    expect(typeof provider).toEqual("function");

    const receivedCreds = await provider();
    expect(receivedCreds).toStrictEqual(mockCreds);

    expect(fromFn).toHaveBeenCalled();
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
      await (
        await resolveCredentialSource(mockCredentialSource, mockProfileName)()
      )();
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    [fromContainerMetadata, fromInstanceMetadata, fromEnv].forEach((fnNotCalled) => {
      expect(fnNotCalled).not.toHaveBeenCalled();
    });
  });
});
