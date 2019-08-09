import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetOpenIDConnectProvider</a> request. </p>
 */
export interface GetOpenIDConnectProviderOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The URL that the IAM OIDC provider resource object is associated with. For more information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  Url?: string;

  /**
   * <p>A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientIDList?: Array<string>;

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList?: Array<string>;

  /**
   * <p>The date and time when the IAM OIDC provider resource object was created in the AWS account.</p>
   */
  CreateDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
