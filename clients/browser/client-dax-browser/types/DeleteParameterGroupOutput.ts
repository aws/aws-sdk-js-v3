import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteParameterGroupOutput shape
 */
export interface DeleteParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A user-specified message for this action (i.e., a reason for deleting the parameter group).</p>
   */
  DeletionMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
