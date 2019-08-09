/**
 * <p>Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.</p>
 */
export interface _ValidationWarning {
  /**
   * <p>The identifier of the object that contains the validation warning.</p>
   */
  id?: string;

  /**
   * <p>A description of the validation warning.</p>
   */
  warnings?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledValidationWarning extends _ValidationWarning {
  /**
   * <p>A description of the validation warning.</p>
   */
  warnings?: Array<string>;
}
