import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The approval request already received a response or has expired.</p>
 */
export interface InvalidApprovalTokenException
  extends __ServiceException__<_InvalidApprovalTokenExceptionDetails> {
  name: "InvalidApprovalTokenException";
}

export interface _InvalidApprovalTokenExceptionDetails {}
