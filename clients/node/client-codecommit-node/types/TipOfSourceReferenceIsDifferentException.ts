import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.</p>
 */
export interface TipOfSourceReferenceIsDifferentException
  extends __ServiceException__<
    _TipOfSourceReferenceIsDifferentExceptionDetails
  > {
  name: "TipOfSourceReferenceIsDifferentException";
}

export interface _TipOfSourceReferenceIsDifferentExceptionDetails {}
