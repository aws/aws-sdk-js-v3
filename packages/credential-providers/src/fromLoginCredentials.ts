import {
  type FromLoginCredentialsInit,
  fromLoginCredentials as _fromLoginCredentials,
} from "@aws-sdk/credential-provider-login";
import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * Creates a credential provider that sources credentials from `aws login` cached tokens
 * @public
 */
export const fromLoginCredentials = (init?: FromLoginCredentialsInit): RuntimeConfigAwsCredentialIdentityProvider =>
  _fromLoginCredentials({
    ...init,
  });
