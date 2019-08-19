import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopExecutionOutput shape
 */
export interface StopExecutionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The date the execution is stopped.</p>
   */
  stopDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
