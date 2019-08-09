import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Status information about an activity task.</p>
 */
export interface RecordActivityTaskHeartbeatOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Set to <code>true</code> if cancellation of the task is requested.</p>
   */
  cancelRequested: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
