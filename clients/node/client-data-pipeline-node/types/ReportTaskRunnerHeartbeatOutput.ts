import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ReportTaskRunnerHeartbeat.</p>
 */
export interface ReportTaskRunnerHeartbeatOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the calling task runner should terminate.</p>
   */
  terminate: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
