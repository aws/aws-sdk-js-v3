import { _UnmarshalledSAMLProviderListEntry } from "./_SAMLProviderListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>ListSAMLProviders</a> request. </p>
 */
export interface ListSAMLProvidersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this AWS account.</p>
   */
  SAMLProviderList?: Array<_UnmarshalledSAMLProviderListEntry>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
