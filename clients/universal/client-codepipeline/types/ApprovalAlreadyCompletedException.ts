import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The approval action has already been approved or rejected.</p>
 */
export interface ApprovalAlreadyCompletedException
  extends __ServiceException__<_ApprovalAlreadyCompletedExceptionDetails> {
  name: "ApprovalAlreadyCompletedException";
}

export interface _ApprovalAlreadyCompletedExceptionDetails {}
