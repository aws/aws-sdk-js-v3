import {
  _AnalyticsFilter,
  _UnmarshalledAnalyticsFilter
} from "./_AnalyticsFilter";
import {
  _StorageClassAnalysis,
  _UnmarshalledStorageClassAnalysis
} from "./_StorageClassAnalysis";

/**
 * _AnalyticsConfiguration shape
 */
export interface _AnalyticsConfiguration {
  /**
   * <p>The identifier used to represent an analytics configuration.</p>
   */
  Id: string;

  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided, all objects will be considered in any analysis.</p>
   */
  Filter?: _AnalyticsFilter;

  /**
   * <p>If present, it indicates that data related to access patterns will be collected and made available to analyze the tradeoffs between different storage classes.</p>
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
   * <p>If present, it indicates that data related to access patterns will be collected and made available to analyze the tradeoffs between different storage classes.</p>
   */
  StorageClassAnalysis: _UnmarshalledStorageClassAnalysis;
}
