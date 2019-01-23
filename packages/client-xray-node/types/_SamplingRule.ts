/**
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.</p>
 */
export interface _SamplingRule {
    /**
     * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
     */
    RuleName?: string;

    /**
     * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
     */
    RuleARN?: string;

    /**
     * <p>Matches the ARN of the AWS resource on which the service runs.</p>
     */
    ResourceARN: string;

    /**
     * <p>The priority of the sampling rule.</p>
     */
    Priority: number;

    /**
     * <p>The percentage of matching requests to instrument, after the reservoir is exhausted.</p>
     */
    FixedRate: number;

    /**
     * <p>A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
     */
    ReservoirSize: number;

    /**
     * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
     */
    ServiceName: string;

    /**
     * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
     */
    ServiceType: string;

    /**
     * <p>Matches the hostname from a request URL.</p>
     */
    Host: string;

    /**
     * <p>Matches the HTTP method of a request.</p>
     */
    HTTPMethod: string;

    /**
     * <p>Matches the path from a request URL.</p>
     */
    URLPath: string;

    /**
     * <p>The version of the sampling rule format (<code>1</code>).</p>
     */
    Version: number;

    /**
     * <p>Matches attributes derived from the request.</p>
     */
    Attributes?: {[key: string]: string}|Iterable<[string, string]>;
}

export interface _UnmarshalledSamplingRule extends _SamplingRule {
    /**
     * <p>Matches attributes derived from the request.</p>
     */
    Attributes?: {[key: string]: string};
}