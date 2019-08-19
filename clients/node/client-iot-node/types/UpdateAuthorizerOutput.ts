import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAuthorizerOutput shape
 */
export interface UpdateAuthorizerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
