import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.</p>
 */
export interface ManualMergeRequiredException
  extends __ServiceException__<_ManualMergeRequiredExceptionDetails> {
  name: "ManualMergeRequiredException";
}

export interface _ManualMergeRequiredExceptionDetails {}
