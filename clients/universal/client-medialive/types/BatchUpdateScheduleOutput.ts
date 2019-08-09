import { _UnmarshalledBatchScheduleActionCreateResult } from "./_BatchScheduleActionCreateResult";
import { _UnmarshalledBatchScheduleActionDeleteResult } from "./_BatchScheduleActionDeleteResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for BatchUpdateScheduleResponse
 */
export interface BatchUpdateScheduleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Schedule actions created in the schedule.
   */
  Creates?: _UnmarshalledBatchScheduleActionCreateResult;

  /**
   * Schedule actions deleted from the schedule.
   */
  Deletes?: _UnmarshalledBatchScheduleActionDeleteResult;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
