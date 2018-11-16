import {_SamplingRule, _UnmarshalledSamplingRule} from './_SamplingRule';

/**
 * _SamplingRuleRecord shape
 */
export interface _SamplingRuleRecord {
    /**
     * _SamplingRule shape
     */
    SamplingRule?: _SamplingRule;

    /**
     * _Timestamp shape
     */
    CreatedAt?: Date|string|number;

    /**
     * _Timestamp shape
     */
    ModifiedAt?: Date|string|number;
}

export interface _UnmarshalledSamplingRuleRecord extends _SamplingRuleRecord {
    /**
     * _SamplingRule shape
     */
    SamplingRule?: _UnmarshalledSamplingRule;

    /**
     * _Timestamp shape
     */
    CreatedAt?: Date;

    /**
     * _Timestamp shape
     */
    ModifiedAt?: Date;
}