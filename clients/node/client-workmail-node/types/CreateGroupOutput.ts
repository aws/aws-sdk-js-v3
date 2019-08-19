import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGroupOutput shape
 */
export interface CreateGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
