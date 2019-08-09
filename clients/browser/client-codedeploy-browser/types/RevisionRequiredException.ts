import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The revision ID was not specified.</p>
 */
export interface RevisionRequiredException
  extends __ServiceException__<_RevisionRequiredExceptionDetails> {
  name: "RevisionRequiredException";
}

export interface _RevisionRequiredExceptionDetails {}
