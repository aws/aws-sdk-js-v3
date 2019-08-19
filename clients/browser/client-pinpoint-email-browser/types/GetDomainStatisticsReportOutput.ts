import { _UnmarshalledOverallVolume } from "./_OverallVolume";
import { _UnmarshalledDailyVolume } from "./_DailyVolume";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An object that includes statistics that are related to the domain that you specified.</p>
 */
export interface GetDomainStatisticsReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. The data in this object is a summary of all of the data that was collected from the <code>StartDate</code> to the <code>EndDate</code>.</p>
   */
  OverallVolume: _UnmarshalledOverallVolume;

  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. This object contains data for each day, starting on the <code>StartDate</code> and ending on the <code>EndDate</code>.</p>
   */
  DailyVolumes: Array<_UnmarshalledDailyVolume>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
