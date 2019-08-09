import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The merge cannot be completed because the target branch has been modified. Another user might have modified the target branch while the merge was in progress. Wait a few minutes, and then try again.</p>
 */
export interface ConcurrentReferenceUpdateException
  extends __ServiceException__<_ConcurrentReferenceUpdateExceptionDetails> {
  name: "ConcurrentReferenceUpdateException";
}

export interface _ConcurrentReferenceUpdateExceptionDetails {}
