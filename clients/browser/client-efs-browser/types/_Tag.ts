/**
 * <p>A tag is a key-value pair. Allowed characters are letters, white space, and numbers that can be represented in UTF-8, and the following characters:<code> + - = . _ : /</code> </p>
 */
export interface _Tag {
  /**
   * <p>The tag key (String). The key can't start with <code>aws:</code>.</p>
   */
  Key: string;

  /**
   * <p>The value of the tag key.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
