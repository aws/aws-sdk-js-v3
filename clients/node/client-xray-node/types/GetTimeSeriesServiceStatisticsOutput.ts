import { _UnmarshalledTimeSeriesServiceStatistics } from "./_TimeSeriesServiceStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTimeSeriesServiceStatisticsOutput shape
 */
export interface GetTimeSeriesServiceStatisticsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The collection of statistics.</p>
   */
  TimeSeriesServiceStatistics?: Array<_UnmarshalledTimeSeriesServiceStatistics>;

  /**
   * <p>A flag indicating whether or not a group's filter expression has been consistent, or if a returned aggregation may show statistics from an older version of the group's filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token. Not used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
