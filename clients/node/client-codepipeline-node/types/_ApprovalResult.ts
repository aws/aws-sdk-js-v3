/**
 * <p>Represents information about the result of an approval request.</p>
 */
export interface _ApprovalResult {
  /**
   * <p>The summary of the current status of the approval request.</p>
   */
  summary: string;

  /**
   * <p>The response submitted by a reviewer assigned to an approval action request.</p>
   */
  status: "Approved" | "Rejected" | string;
}

export type _UnmarshalledApprovalResult = _ApprovalResult;
