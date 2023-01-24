import { decorateDefaultCredentialProvider } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
/**
 * TODO(identityandauth)
 */
export const credentialDefaultProvider = decorateDefaultCredentialProvider(defaultProvider);
