import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>CreateUserProfile</code> request.</p>
 */
export interface CreateUserProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The user's IAM ARN.</p>
   */
  IamUserArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
