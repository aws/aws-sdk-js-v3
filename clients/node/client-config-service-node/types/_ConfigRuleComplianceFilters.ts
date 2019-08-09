/**
 * <p>Filters the compliance results based on account ID, region, compliance type, and rule name.</p>
 */
export interface _ConfigRuleComplianceFilters {
  /**
   * <p>The name of the AWS Config rule.</p>
   */
  ConfigRuleName?: string;

  /**
   * <p>The rule compliance status.</p> <p>For the <code>ConfigRuleComplianceFilters</code> data type, AWS Config supports only <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. AWS Config does not support the <code>NOT_APPLICABLE</code> and the <code>INSUFFICIENT_DATA</code> values.</p>
   */
  ComplianceType?:
    | "COMPLIANT"
    | "NON_COMPLIANT"
    | "NOT_APPLICABLE"
    | "INSUFFICIENT_DATA"
    | string;

  /**
   * <p>The 12-digit account ID of the source account. </p>
   */
  AccountId?: string;

  /**
   * <p>The source region where the data is aggregated. </p>
   */
  AwsRegion?: string;
}

export type _UnmarshalledConfigRuleComplianceFilters = _ConfigRuleComplianceFilters;
