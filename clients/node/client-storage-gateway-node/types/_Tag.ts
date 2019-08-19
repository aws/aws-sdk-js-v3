/**
 * <p>A key-value pair that helps you manage, filter, and search for your resource. Allowed characters: letters, white space, and numbers, representable in UTF-8, and the following characters: + - = . _ : /</p>
 */
export interface _Tag {
  /**
   * <p>Tag key (String). The key can't start with aws:. </p>
   */
  Key: string;

  /**
   * <p>Value of the tag key.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
