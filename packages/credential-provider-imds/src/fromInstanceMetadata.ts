import { ProviderError } from "@aws-sdk/property-provider";
import { CredentialProvider } from "@aws-sdk/types";

import { httpRequest } from "./remoteProvider/httpRequest";
import { fromImdsCredentials, isImdsCredentials } from "./remoteProvider/ImdsCredentials";
import { providerConfigFromInit,RemoteProviderInit } from "./remoteProvider/RemoteProviderInit";
import { retry } from "./remoteProvider/retry";

const IMDS_IP = "169.254.169.254";
const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";

/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
export const fromInstanceMetadata = (init: RemoteProviderInit = {}): CredentialProvider => {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return async () => {
    const profile = (
      await retry<string>(
        async () => (await httpRequest({ host: IMDS_IP, path: IMDS_PATH, timeout })).toString(),
        maxRetries
      )
    ).trim();

    return retry(async () => {
      const credsResponse = JSON.parse(
        (
          await httpRequest({
            host: IMDS_IP,
            path: IMDS_PATH + profile,
            timeout,
          })
        ).toString()
      );
      if (!isImdsCredentials(credsResponse)) {
        throw new ProviderError("Invalid response received from instance metadata service.");
      }

      return fromImdsCredentials(credsResponse);
    }, maxRetries);
  };
};
