import { CredentialProvider } from "@aws-sdk/types";
import {
  RemoteProviderInit,
  providerConfigFromInit
} from "./remoteProvider/RemoteProviderInit";
import { httpGet } from "./remoteProvider/httpGet";
import {
  fromImdsCredentials,
  isImdsCredentials
} from "./remoteProvider/ImdsCredentials";
import { retry } from "./remoteProvider/retry";
import { ProviderError } from "@aws-sdk/property-provider";

/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
export const fromInstanceMetadata = (
  init: RemoteProviderInit = {}
): CredentialProvider => {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return async () => {
    const profile = (
      await retry<string>(
        async () => await requestFromEc2Imds(timeout),
        maxRetries
      )
    ).trim();

    return retry(async () => {
      const credsResponse = JSON.parse(
        await requestFromEc2Imds(timeout, profile)
      );
      if (!isImdsCredentials(credsResponse)) {
        throw new ProviderError(
          "Invalid response received from instance metadata service."
        );
      }

      return fromImdsCredentials(credsResponse);
    }, maxRetries);
  };
};

const IMDS_IP = "169.254.169.254";
const IMDS_PATH = "latest/meta-data/iam/security-credentials";

const requestFromEc2Imds = async (
  timeout: number,
  path?: string
): Promise<string> => {
  const buffer = await httpGet({
    host: IMDS_IP,
    path: `/${IMDS_PATH}/${path ? path : ""}`,
    timeout
  });
  return buffer.toString();
};
