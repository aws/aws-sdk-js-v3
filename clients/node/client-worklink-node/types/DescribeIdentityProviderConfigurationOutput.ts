import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeIdentityProviderConfigurationOutput shape
 */
export interface DescribeIdentityProviderConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The type of identity provider.</p>
   */
  IdentityProviderType?: "SAML" | string;

  /**
   * <p>The SAML metadata document uploaded to the user’s identity provider.</p>
   */
  ServiceProviderSamlMetadata?: string;

  /**
   * <p>The SAML metadata document provided by the user’s identity provider.</p>
   */
  IdentityProviderSamlMetadata?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
