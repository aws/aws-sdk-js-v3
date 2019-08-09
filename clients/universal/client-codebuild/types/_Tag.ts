/**
 * <p>A tag, consisting of a key and a value.</p> <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p>
 */
export interface _Tag {
  /**
   * <p>The tag's key.</p>
   */
  key?: string;

  /**
   * <p>The tag's value.</p>
   */
  value?: string;
}

export type _UnmarshalledTag = _Tag;
