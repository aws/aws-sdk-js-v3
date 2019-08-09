import { _UnmarshalledMetricKeyDataPoints } from "./_MetricKeyDataPoints";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourceMetricsOutput shape
 */
export interface GetResourceMetricsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The start time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>The end time for the returned metrics, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source.</p> <p>To use an Amazon RDS instance as a data source, you specify its <code>DbiResourceId</code> value - for example: <code>db-FAIHNTYBKTGAUSUZQYPDS2GW4A</code> </p>
   */
  Identifier?: string;

  /**
   * <p>An array of metric results,, where each array element contains all of the data points for a particular dimension.</p>
   */
  MetricList?: Array<_UnmarshalledMetricKeyDataPoints>;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
