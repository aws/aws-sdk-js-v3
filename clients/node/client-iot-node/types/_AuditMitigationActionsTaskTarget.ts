/**
 * <p>Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.</p>
 */
export interface _AuditMitigationActionsTaskTarget {
  /**
   * <p>If the task will apply a mitigation action to findings from a specific audit, this value uniquely identifies the audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.</p>
   */
  findingIds?: Array<string> | Iterable<string>;

  /**
   * <p>Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.</p>
   */
  auditCheckToReasonCodeFilter?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledAuditMitigationActionsTaskTarget
  extends _AuditMitigationActionsTaskTarget {
  /**
   * <p>If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.</p>
   */
  findingIds?: Array<string>;

  /**
   * <p>Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.</p>
   */
  auditCheckToReasonCodeFilter?: { [key: string]: Array<string> };
}
