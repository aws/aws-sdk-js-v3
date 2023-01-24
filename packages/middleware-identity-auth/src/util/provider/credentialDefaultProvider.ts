import { decorateDefaultCredentialProvider } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";

export const credentialDefaultProvider = decorateDefaultCredentialProvider(defaultProvider);
