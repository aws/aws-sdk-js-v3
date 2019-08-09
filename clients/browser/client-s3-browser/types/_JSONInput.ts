/**
 * <p/>
 */
export interface _JSONInput {
  /**
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   */
  Type?: "DOCUMENT" | "LINES" | string;
}

export type _UnmarshalledJSONInput = _JSONInput;
