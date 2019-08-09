/**
 * <p>Values for use in <a>Player</a> attribute key:value pairs. This object lets you specify an attribute value using any of the valid data types: string, number, string array, or data map. Each <code>AttributeValue</code> object can use only one of the available properties.</p>
 */
export interface _AttributeValue {
  /**
   * <p>For single string values. Maximum string length is 100 characters.</p>
   */
  S?: string;

  /**
   * <p>For number values, expressed as double.</p>
   */
  N?: number;

  /**
   * <p>For a list of up to 10 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.</p>
   */
  SL?: Array<string> | Iterable<string>;

  /**
   * <p>For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters. </p>
   */
  SDM?: { [key: string]: number } | Iterable<[string, number]>;
}

export interface _UnmarshalledAttributeValue extends _AttributeValue {
  /**
   * <p>For a list of up to 10 strings. Maximum length for each string is 100 characters. Duplicate values are not recognized; all occurrences of the repeated value after the first of a repeated value are ignored.</p>
   */
  SL?: Array<string>;

  /**
   * <p>For a map of up to 10 data type:value pairs. Maximum length for each string value is 100 characters. </p>
   */
  SDM?: { [key: string]: number };
}
