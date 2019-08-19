import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a schema could not be created due to a naming conflict. Please select a different name and then try again.</p>
 */
export interface SchemaAlreadyExistsException
  extends __ServiceException__<_SchemaAlreadyExistsExceptionDetails> {
  name: "SchemaAlreadyExistsException";
}

export interface _SchemaAlreadyExistsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
