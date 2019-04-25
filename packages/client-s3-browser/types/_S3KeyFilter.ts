import {_FilterRule, _UnmarshalledFilterRule} from './_FilterRule';

/**
 * <p>Container for object key name prefix and suffix filtering rules.</p>
 */
export interface _S3KeyFilter {
    /**
     * <p>A list of containers for key value pair that defines the criteria for the filter rule.</p>
     */
    FilterRules?: Array<_FilterRule>|Iterable<_FilterRule>;
}

export interface _UnmarshalledS3KeyFilter extends _S3KeyFilter {
    /**
     * <p>A list of containers for key value pair that defines the criteria for the filter rule.</p>
     */
    FilterRules?: Array<_UnmarshalledFilterRule>;
}