import {_CORSRule, _UnmarshalledCORSRule} from './_CORSRule';

/**
 * _CORSConfiguration shape
 */
export interface _CORSConfiguration {
    /**
     * _CORSRules shape
     */
    CORSRules: Array<_CORSRule>|Iterable<_CORSRule>;
}

export interface _UnmarshalledCORSConfiguration extends _CORSConfiguration {
    /**
     * _CORSRules shape
     */
    CORSRules: Array<_UnmarshalledCORSRule>;
}