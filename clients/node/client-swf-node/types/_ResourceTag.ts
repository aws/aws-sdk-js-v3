/**
 * <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
 */
export interface _ResourceTag {
  /**
   * <p>The key of a tag.</p>
   */
  key: string;

  /**
   * <p>The value of a tag.</p>
   */
  value?: string;
}

export type _UnmarshalledResourceTag = _ResourceTag;
