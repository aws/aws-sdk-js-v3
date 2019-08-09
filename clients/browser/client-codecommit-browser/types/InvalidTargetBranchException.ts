import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified target branch is not valid.</p>
 */
export interface InvalidTargetBranchException
  extends __ServiceException__<_InvalidTargetBranchExceptionDetails> {
  name: "InvalidTargetBranchException";
}

export interface _InvalidTargetBranchExceptionDetails {}
