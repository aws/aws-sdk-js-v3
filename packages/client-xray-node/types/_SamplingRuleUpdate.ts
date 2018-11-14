/**
 * _SamplingRuleUpdate shape
 */
export interface _SamplingRuleUpdate {
    /**
     * _RuleName shape
     */
    RuleName?: string;

    /**
     * _String shape
     */
    RuleARN?: string;

    /**
     * _ResourceARN shape
     */
    ResourceARN?: string;

    /**
     * _NullableInteger shape
     */
    Priority?: number;

    /**
     * _NullableDouble shape
     */
    FixedRate?: number;

    /**
     * _NullableInteger shape
     */
    ReservoirSize?: number;

    /**
     * _Host shape
     */
    Host?: string;

    /**
     * _ServiceName shape
     */
    ServiceName?: string;

    /**
     * _ServiceType shape
     */
    ServiceType?: string;

    /**
     * _HTTPMethod shape
     */
    HTTPMethod?: string;

    /**
     * _URLPath shape
     */
    URLPath?: string;

    /**
     * _AttributeMap shape
     */
    Attributes?: {[key: string]: string}|Iterable<[string, string]>;
}

export interface _UnmarshalledSamplingRuleUpdate extends _SamplingRuleUpdate {
    /**
     * _AttributeMap shape
     */
    Attributes?: {[key: string]: string};
}