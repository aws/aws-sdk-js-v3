import {_MetricsFilter, _UnmarshalledMetricsFilter} from './_MetricsFilter';

/**
 * _MetricsConfiguration shape
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

export interface _UnmarshalledMetricsConfiguration extends _MetricsConfiguration {
    /**
     * <p>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction (MetricsAndOperator).</p>
     */
    Filter?: _UnmarshalledMetricsFilter;
}