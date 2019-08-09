import { _UnmarshalledTask } from "./_Task";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopTaskOutput shape
 */
export interface StopTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The task that was stopped.</p>
   */
  task?: _UnmarshalledTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
