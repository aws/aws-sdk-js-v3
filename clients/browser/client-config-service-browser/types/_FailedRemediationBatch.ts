import {
  _RemediationConfiguration,
  _UnmarshalledRemediationConfiguration
} from "./_RemediationConfiguration";

/**
 * <p>List of each of the failed remediations with specific reasons.</p>
 */
export interface _FailedRemediationBatch {
  /**
   * <p>Returns a failure message. For example, the resource is already compliant.</p>
   */
  FailureMessage?: string;

  /**
   * <p>Returns remediation configurations of the failed items.</p>
   */
  FailedItems?:
    | Array<_RemediationConfiguration>
    | Iterable<_RemediationConfiguration>;
}

export interface _UnmarshalledFailedRemediationBatch
  extends _FailedRemediationBatch {
  /**
   * <p>Returns remediation configurations of the failed items.</p>
   */
  FailedItems?: Array<_UnmarshalledRemediationConfiguration>;
}
