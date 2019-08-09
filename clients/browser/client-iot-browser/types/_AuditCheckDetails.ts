/**
 * <p>Information about the audit check.</p>
 */
export interface _AuditCheckDetails {
  /**
   * <p>The completion status of this check. One of "IN_PROGRESS", "WAITING_FOR_DATA_COLLECTION", "CANCELED", "COMPLETED_COMPLIANT", "COMPLETED_NON_COMPLIANT", or "FAILED".</p>
   */
  checkRunStatus?:
    | "IN_PROGRESS"
    | "WAITING_FOR_DATA_COLLECTION"
    | "CANCELED"
    | "COMPLETED_COMPLIANT"
    | "COMPLETED_NON_COMPLIANT"
    | "FAILED"
    | string;

  /**
   * <p>True if the check is complete and found all resources compliant.</p>
   */
  checkCompliant?: boolean;

  /**
   * <p>The number of resources on which the check was performed.</p>
   */
  totalResourcesCount?: number;

  /**
   * <p>The number of resources that were found noncompliant during the check.</p>
   */
  nonCompliantResourcesCount?: number;

  /**
   * <p>The code of any error encountered when this check is performed during this audit. One of "INSUFFICIENT_PERMISSIONS" or "AUDIT_CHECK_DISABLED".</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with any error encountered when this check is performed during this audit.</p>
   */
  message?: string;
}

export type _UnmarshalledAuditCheckDetails = _AuditCheckDetails;
