import { _SamplingRule, _UnmarshalledSamplingRule } from "./_SamplingRule";

/**
 * <p>A <a>SamplingRule</a> and its metadata.</p>
 */
export interface _SamplingRuleRecord {
  /**
   * <p>The sampling rule.</p>
   */
  SamplingRule?: _SamplingRule;

  /**
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date | string | number;
}

export interface _UnmarshalledSamplingRuleRecord extends _SamplingRuleRecord {
  /**
   * <p>The sampling rule.</p>
   */
  SamplingRule?: _UnmarshalledSamplingRule;

  /**
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date;
}
