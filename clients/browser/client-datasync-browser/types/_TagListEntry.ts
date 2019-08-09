/**
 * <p>Represents a single entry in a list of AWS resource tags. <code>TagListEntry</code> returns an array that contains a list of tasks when the <a>ListTagsForResource</a> operation is called.</p>
 */
export interface _TagListEntry {
  /**
   * <p>The key for an AWS resource tag.</p>
   */
  Key: string;

  /**
   * <p>The value for an AWS resource tag.</p>
   */
  Value?: string;
}

export type _UnmarshalledTagListEntry = _TagListEntry;
