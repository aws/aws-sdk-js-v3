import type { FromLoginCredentialsInit } from "@aws-sdk/credential-provider-login";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";

import { createLazyCredentialProvider } from "./createLazyCredentialProvider";

/**
 * Creates a credential provider that sources credentials from `aws login` cached tokens
 * @public
 */
export const fromLoginCredentials = (init?: FromLoginCredentialsInit): RuntimeConfigAwsCredentialIdentityProvider => {
  return createLazyCredentialProvider(async () => {
    const { fromLoginCredentials: _fromLoginCredentials } = await import("@aws-sdk/credential-provider-login");
    return _fromLoginCredentials({ ...init });
  });
};
