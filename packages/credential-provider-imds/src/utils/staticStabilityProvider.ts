import { AwsCredentialIdentity, Logger, Provider } from "@aws-sdk/types";

import { InstanceMetadataCredentials } from "../types";
import { getExtendedInstanceMetadataCredentials } from "./getExtendedInstanceMetadataCredentials";

/**
 * IMDS credential supports static stability feature. When used, the expiration
 * of recently issued credentials is extended. The server side allows using
 * the recently expired credentials. This mitigates impact when clients using
 * refreshable credentials are unable to retrieve updates.
 *
 * @param provider Credential provider
 * @returns A credential provider that supports static stability
 */
export const staticStabilityProvider = (
  provider: Provider<InstanceMetadataCredentials>,
  options: {
    logger?: Logger;
  } = {}
): Provider<InstanceMetadataCredentials> => {
  // Unlike normal SDK logger message, the key extension message must be transparent to users.
  // When customer doesn't supply a custom logger, we need to log the warnings to console.
  const logger = options?.logger || console;
  let pastCredentials: InstanceMetadataCredentials;
  return async () => {
    let credentials: InstanceMetadataCredentials;
    try {
      credentials = await provider();
      if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
        credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
      }
    } catch (e) {
      if (pastCredentials) {
        logger.warn("Credential renew failed: ", e);
        credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
      } else {
        throw e;
      }
    }
    pastCredentials = credentials;
    return credentials;
  };
};
