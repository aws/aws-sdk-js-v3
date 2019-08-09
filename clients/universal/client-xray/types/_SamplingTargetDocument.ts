/**
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a>GetSamplingTargets</a>.</p>
 */
export interface _SamplingTargetDocument {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>The number of requests per second that X-Ray allocated this service.</p>
   */
  ReservoirQuota?: number;

  /**
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date | string | number;

  /**
   * <p>The number of seconds for the service to wait before getting sampling targets again.</p>
   */
  Interval?: number;
}

export interface _UnmarshalledSamplingTargetDocument
  extends _SamplingTargetDocument {
  /**
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date;
}
