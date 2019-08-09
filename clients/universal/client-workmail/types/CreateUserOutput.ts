import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserOutput shape
 */
export interface CreateUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier for the new user.</p>
   */
  UserId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
