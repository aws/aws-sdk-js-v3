import { _UnmarshalledBusinessReportSchedule } from "./_BusinessReportSchedule";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBusinessReportSchedulesOutput shape
 */
export interface ListBusinessReportSchedulesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The schedule of the reports.</p>
   */
  BusinessReportSchedules?: Array<_UnmarshalledBusinessReportSchedule>;

  /**
   * <p>The token used to list the remaining schedules from the previous API call.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
