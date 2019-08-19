import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException
  extends __ServiceException__<_AlreadyExistsExceptionDetails> {
  name: "AlreadyExistsException";
}

export interface _AlreadyExistsExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
