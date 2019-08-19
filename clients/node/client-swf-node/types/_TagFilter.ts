/**
 * <p>Used to filter the workflow executions in visibility APIs based on a tag.</p>
 */
export interface _TagFilter {
  /**
   * <p> Specifies the tag that must be associated with the execution for it to meet the filter criteria.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
   */
  tag: string;
}

export type _UnmarshalledTagFilter = _TagFilter;
