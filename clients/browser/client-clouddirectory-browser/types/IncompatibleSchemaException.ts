import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.</p>
 */
export interface IncompatibleSchemaException
  extends __ServiceException__<_IncompatibleSchemaExceptionDetails> {
  name: "IncompatibleSchemaException";
}

export interface _IncompatibleSchemaExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
