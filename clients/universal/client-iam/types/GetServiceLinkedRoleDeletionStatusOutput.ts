import { _UnmarshalledDeletionTaskFailureReasonType } from "./_DeletionTaskFailureReasonType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceLinkedRoleDeletionStatusOutput shape
 */
export interface GetServiceLinkedRoleDeletionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the deletion.</p>
   */
  Status: "SUCCEEDED" | "IN_PROGRESS" | "FAILED" | "NOT_STARTED" | string;

  /**
   * <p>An object that contains details about the reason the deletion failed.</p>
   */
  Reason?: _UnmarshalledDeletionTaskFailureReasonType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
