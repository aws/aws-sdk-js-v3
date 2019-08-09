/**
 * <p>Information about the approval status of a patch.</p>
 */
export interface _PatchStatus {
  /**
   * <p>The approval status of a patch (APPROVED, PENDING_APPROVAL, EXPLICIT_APPROVED, EXPLICIT_REJECTED).</p>
   */
  DeploymentStatus?:
    | "APPROVED"
    | "PENDING_APPROVAL"
    | "EXPLICIT_APPROVED"
    | "EXPLICIT_REJECTED"
    | string;

  /**
   * <p>The compliance severity level for a patch.</p>
   */
  ComplianceLevel?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>The date the patch was approved (or will be approved if the status is PENDING_APPROVAL).</p>
   */
  ApprovalDate?: Date | string | number;
}

export interface _UnmarshalledPatchStatus extends _PatchStatus {
  /**
   * <p>The date the patch was approved (or will be approved if the status is PENDING_APPROVAL).</p>
   */
  ApprovalDate?: Date;
}
