import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter type name is not valid.</p>
 */
export interface InvalidTypeNameException
  extends __ServiceException__<_InvalidTypeNameExceptionDetails> {
  name: "InvalidTypeNameException";
}

export interface _InvalidTypeNameExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
