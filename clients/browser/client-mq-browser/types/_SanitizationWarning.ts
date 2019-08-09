/**
 * Returns information about the XML element or attribute that was sanitized in the configuration.
 */
export interface _SanitizationWarning {
  /**
   * The name of the XML attribute that has been sanitized.
   */
  AttributeName?: string;

  /**
   * The name of the XML element that has been sanitized.
   */
  ElementName?: string;

  /**
   * Required. The reason for which the XML elements or attributes were sanitized.
   */
  Reason?:
    | "DISALLOWED_ELEMENT_REMOVED"
    | "DISALLOWED_ATTRIBUTE_REMOVED"
    | "INVALID_ATTRIBUTE_VALUE_REMOVED"
    | string;
}

export type _UnmarshalledSanitizationWarning = _SanitizationWarning;
