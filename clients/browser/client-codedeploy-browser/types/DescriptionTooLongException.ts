import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The description is too long.</p>
 */
export interface DescriptionTooLongException
  extends __ServiceException__<_DescriptionTooLongExceptionDetails> {
  name: "DescriptionTooLongException";
}

export interface _DescriptionTooLongExceptionDetails {}
