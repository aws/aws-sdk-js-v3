import {
  _AnalyticsFilter,
  _UnmarshalledAnalyticsFilter
} from "./_AnalyticsFilter";
import {
  _StorageClassAnalysis,
  _UnmarshalledStorageClassAnalysis
} from "./_StorageClassAnalysis";

/**
 * <p> Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETAnalyticsConfig.html">GET Bucket analytics</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>
 */
export interface _AnalyticsConfiguration {
  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string;

  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
   */
  Filter?: _AnalyticsFilter;

  /**
   * <p> Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes. </p>
   */
  StorageClassAnalysis: _StorageClassAnalysis;
}

export interface _UnmarshalledAnalyticsConfiguration
  extends _AnalyticsConfiguration {
  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
   */
  Filter?: _UnmarshalledAnalyticsFilter;

  /**
   * <p> Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes. </p>
   */
  StorageClassAnalysis: _UnmarshalledStorageClassAnalysis;
}
