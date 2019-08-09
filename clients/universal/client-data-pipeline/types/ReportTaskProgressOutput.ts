import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ReportTaskProgress.</p>
 */
export interface ReportTaskProgressOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If true, the calling task runner should cancel processing of the task. The task runner does not need to call <a>SetTaskStatus</a> for canceled tasks.</p>
   */
  canceled: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
