import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>PutApprovalResult</code> action.</p>
 */
export interface PutApprovalResultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The timestamp showing when the approval or rejection was submitted.</p>
   */
  approvedAt?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
