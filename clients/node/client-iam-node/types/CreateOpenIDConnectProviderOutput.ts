import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateOpenIDConnectProvider</a> request. </p>
 */
export interface CreateOpenIDConnectProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created. For more information, see <a>OpenIDConnectProviderListEntry</a>. </p>
   */
  OpenIDConnectProviderArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
