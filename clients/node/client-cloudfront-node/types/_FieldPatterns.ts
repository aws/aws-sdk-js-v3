/**
 * <p>A complex data type that includes the field patterns to match for field-level encryption.</p>
 */
export interface _FieldPatterns {
  /**
   * <p>The number of field-level encryption field patterns.</p>
   */
  Quantity: number;

  /**
   * <p>An array of the field-level encryption field patterns.</p>
   */
  Items?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledFieldPatterns extends _FieldPatterns {
  /**
   * <p>An array of the field-level encryption field patterns.</p>
   */
  Items?: Array<string>;
}
