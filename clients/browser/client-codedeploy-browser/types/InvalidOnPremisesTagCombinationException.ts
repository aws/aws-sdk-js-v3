import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A call was submitted that specified both OnPremisesTagFilters and OnPremisesTagSet, but only one of these data types can be used in a single call.</p>
 */
export interface InvalidOnPremisesTagCombinationException
  extends __ServiceException__<
    _InvalidOnPremisesTagCombinationExceptionDetails
  > {
  name: "InvalidOnPremisesTagCombinationException";
}

export interface _InvalidOnPremisesTagCombinationExceptionDetails {}
