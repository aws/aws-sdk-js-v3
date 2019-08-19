/**
 * <p>Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface _ValidationError {
  /**
   * <p>The identifier of the object that contains the validation error.</p>
   */
  id?: string;

  /**
   * <p>A description of the validation error.</p>
   */
  errors?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledValidationError extends _ValidationError {
  /**
   * <p>A description of the validation error.</p>
   */
  errors?: Array<string>;
}
