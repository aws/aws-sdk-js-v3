/**
 * <p>Specifies which files, folders and objects to include or exclude when transferring files from source to destination.</p>
 */
export interface _FilterRule {
  /**
   * <p>The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.</p>
   */
  FilterType?: "SIMPLE_PATTERN" | string;

  /**
   * <p>A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|" (that is, a pipe), for example: <code>/folder1|/folder2</code> </p> <p> </p>
   */
  Value?: string;
}

export type _UnmarshalledFilterRule = _FilterRule;
