import {
  _Recommendation,
  _UnmarshalledRecommendation
} from "./_Recommendation";

/**
 * <p>Details about the remediation steps for a finding.</p>
 */
export interface _Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: _Recommendation;
}

export interface _UnmarshalledRemediation extends _Remediation {
  /**
   * <p>A recommendation on the steps to take to remediate the issue identified by a finding.</p>
   */
  Recommendation?: _UnmarshalledRecommendation;
}
