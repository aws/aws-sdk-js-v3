import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of items to compare between the source or destination branches and the merge base has exceeded the maximum allowed.</p>
 */
export interface MaximumItemsToCompareExceededException
  extends __ServiceException__<_MaximumItemsToCompareExceededExceptionDetails> {
  name: "MaximumItemsToCompareExceededException";
}

export interface _MaximumItemsToCompareExceededExceptionDetails {}
