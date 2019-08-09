import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteSubnetGroupOutput shape
 */
export interface DeleteSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the subnet group).</p>
   */
  DeletionMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
