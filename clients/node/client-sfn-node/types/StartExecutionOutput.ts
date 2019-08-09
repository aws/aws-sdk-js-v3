import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartExecutionOutput shape
 */
export interface StartExecutionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string;

  /**
   * <p>The date the execution is started.</p>
   */
  startDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
