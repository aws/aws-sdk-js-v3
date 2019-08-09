import { _UnmarshalledTask } from "./_Task";
import { _UnmarshalledFailure } from "./_Failure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartTaskOutput shape
 */
export interface StartTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the tasks that were started. Each task that was successfully placed on your container instances is described.</p>
   */
  tasks?: Array<_UnmarshalledTask>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
