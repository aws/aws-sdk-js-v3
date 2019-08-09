import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A policy with the same name already exists.</p>
 */
export interface DuplicatePolicyException
  extends __ServiceException__<_DuplicatePolicyExceptionDetails> {
  name: "DuplicatePolicyException";
}

export interface _DuplicatePolicyExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
