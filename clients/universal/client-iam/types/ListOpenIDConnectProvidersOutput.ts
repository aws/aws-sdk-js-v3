import { _UnmarshalledOpenIDConnectProviderListEntry } from "./_OpenIDConnectProviderListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>ListOpenIDConnectProviders</a> request. </p>
 */
export interface ListOpenIDConnectProvidersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of IAM OIDC provider resource objects defined in the AWS account.</p>
   */
  OpenIDConnectProviderList?: Array<
    _UnmarshalledOpenIDConnectProviderListEntry
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
