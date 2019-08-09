import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided <code>SchemaDoc</code> value is not valid.</p>
 */
export interface InvalidSchemaDocException
  extends __ServiceException__<_InvalidSchemaDocExceptionDetails> {
  name: "InvalidSchemaDocException";
}

export interface _InvalidSchemaDocExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
