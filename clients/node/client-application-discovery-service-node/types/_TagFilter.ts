/**
 * <p>The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>.</p>
 */
export interface _TagFilter {
  /**
   * <p>A name of the tag filter.</p>
   */
  name: string;

  /**
   * <p>Values for the tag filter.</p>
   */
  values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledTagFilter extends _TagFilter {
  /**
   * <p>Values for the tag filter.</p>
   */
  values: Array<string>;
}
