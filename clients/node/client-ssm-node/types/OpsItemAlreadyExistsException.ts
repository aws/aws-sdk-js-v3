import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The OpsItem already exists.</p>
 */
export interface OpsItemAlreadyExistsException
  extends __ServiceException__<_OpsItemAlreadyExistsExceptionDetails> {
  name: "OpsItemAlreadyExistsException";
}

export interface _OpsItemAlreadyExistsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * _String shape
   */
  OpsItemId?: string;
}
