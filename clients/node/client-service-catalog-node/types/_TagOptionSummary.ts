/**
 * <p>Summary information about a TagOption.</p>
 */
export interface _TagOptionSummary {
  /**
   * <p>The TagOption key.</p>
   */
  Key?: string;

  /**
   * <p>The TagOption value.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagOptionSummary extends _TagOptionSummary {
  /**
   * <p>The TagOption value.</p>
   */
  Values?: Array<string>;
}
