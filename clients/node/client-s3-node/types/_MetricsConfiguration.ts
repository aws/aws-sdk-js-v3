import { _MetricsFilter, _UnmarshalledMetricsFilter } from "./_MetricsFilter";

/**
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface _MetricsConfiguration {
  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string;

  /**
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).</p>
   */
  Filter?: _MetricsFilter;
}

export interface _UnmarshalledMetricsConfiguration
  extends _MetricsConfiguration {
  /**
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).</p>
   */
  Filter?: _UnmarshalledMetricsFilter;
}
