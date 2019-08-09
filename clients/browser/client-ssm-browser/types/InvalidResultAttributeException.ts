import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified inventory item result attribute is not valid.</p>
 */
export interface InvalidResultAttributeException
  extends __ServiceException__<_InvalidResultAttributeExceptionDetails> {
  name: "InvalidResultAttributeException";
}

export interface _InvalidResultAttributeExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
