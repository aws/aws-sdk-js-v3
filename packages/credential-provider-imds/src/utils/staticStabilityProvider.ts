import { Credentials, Provider } from "@aws-sdk/types";

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
  provider: Provider<InstanceMetadataCredentials>
): Provider<InstanceMetadataCredentials> => {
  let pastCredentials: InstanceMetadataCredentials;
  return async () => {
    let credentials: InstanceMetadataCredentials;
    try {
      credentials = await provider();
      if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
        credentials = getExtendedInstanceMetadataCredentials(credentials);
      }
    } catch (e) {
      if (pastCredentials) {
        // ToDo: Call warn function on logger from configuration
        console.warn("Credential renew failed: ", e);
        credentials = getExtendedInstanceMetadataCredentials(pastCredentials);
      } else {
        throw e;
      }
    }
    pastCredentials = credentials;
    return credentials;
  };
};
