import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>StartTaskExecutionResponse</p>
 */
export interface StartTaskExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific task execution that was started.</p>
   */
  TaskExecutionArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
