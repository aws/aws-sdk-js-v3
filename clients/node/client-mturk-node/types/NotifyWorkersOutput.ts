import { _UnmarshalledNotifyWorkersFailureStatus } from "./_NotifyWorkersFailureStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * NotifyWorkersOutput shape
 */
export interface NotifyWorkersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> When MTurk sends notifications to the list of Workers, it returns back any failures it encounters in this list of NotifyWorkersFailureStatus objects. </p>
   */
  NotifyWorkersFailureStatuses?: Array<_UnmarshalledNotifyWorkersFailureStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
