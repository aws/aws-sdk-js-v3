import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserOutput shape
 */
export interface CreateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier for the user account in Amazon Connect</p>
   */
  UserId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account created.</p>
   */
  UserArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
