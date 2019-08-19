import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateWebsiteAuthorizationProviderOutput shape
 */
export interface AssociateWebsiteAuthorizationProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier for the authorization provider.</p>
   */
  AuthorizationProviderId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
