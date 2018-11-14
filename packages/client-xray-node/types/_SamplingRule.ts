/**
 * _SamplingRule shape
 */
export interface _SamplingRule {
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
    ResourceARN: string;

    /**
     * _Priority shape
     */
    Priority: number;

    /**
     * _FixedRate shape
     */
    FixedRate: number;

    /**
     * _ReservoirSize shape
     */
    ReservoirSize: number;

    /**
     * _ServiceName shape
     */
    ServiceName: string;

    /**
     * _ServiceType shape
     */
    ServiceType: string;

    /**
     * _Host shape
     */
    Host: string;

    /**
     * _HTTPMethod shape
     */
    HTTPMethod: string;

    /**
     * _URLPath shape
     */
    URLPath: string;

    /**
     * _Version shape
     */
    Version: number;

    /**
     * _AttributeMap shape
     */
    Attributes?: {[key: string]: string}|Iterable<[string, string]>;
}

export interface _UnmarshalledSamplingRule extends _SamplingRule {
    /**
     * _AttributeMap shape
     */
    Attributes?: {[key: string]: string};
}