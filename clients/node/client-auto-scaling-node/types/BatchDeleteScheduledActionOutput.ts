import { _UnmarshalledFailedScheduledUpdateGroupActionRequest } from "./_FailedScheduledUpdateGroupActionRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteScheduledActionOutput shape
 */
export interface BatchDeleteScheduledActionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the scheduled actions that could not be deleted, including an error message. </p>
   */
  FailedScheduledActions?: Array<
    _UnmarshalledFailedScheduledUpdateGroupActionRequest
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
