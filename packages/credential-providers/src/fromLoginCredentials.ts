import type { FromLoginCredentialsInit } from "@aws-sdk/credential-provider-login";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * Creates a credential provider that sources credentials from `aws login` cached tokens
 * @public
 */
export const fromLoginCredentials = (init?: FromLoginCredentialsInit): RuntimeConfigAwsCredentialIdentityProvider => {
  return async (args?: AwsIdentityProperties) => {
    const { fromLoginCredentials: _fromLoginCredentials } = await import("@aws-sdk/credential-provider-login");
    return _fromLoginCredentials({ ...init })(args);
  };
};
