import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetActivityTaskOutput shape
 */
export interface GetActivityTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A token that identifies the scheduled task. This token must be copied and included in subsequent calls to <a>SendTaskHeartbeat</a>, <a>SendTaskSuccess</a> or <a>SendTaskFailure</a> in order to report the progress or completion of the task.</p>
   */
  taskToken?: string;

  /**
   * <p>The string that contains the JSON input data for the task.</p>
   */
  input?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
