import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified OpsItem ID doesn't exist. Verify the ID and try again.</p>
 */
export interface OpsItemNotFoundException
  extends __ServiceException__<_OpsItemNotFoundExceptionDetails> {
  name: "OpsItemNotFoundException";
}

export interface _OpsItemNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
