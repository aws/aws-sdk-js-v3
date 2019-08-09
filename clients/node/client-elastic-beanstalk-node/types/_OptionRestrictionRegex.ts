/**
 * <p>A regular expression representing a restriction on a string configuration option value.</p>
 */
export interface _OptionRestrictionRegex {
  /**
   * <p>The regular expression pattern that a string configuration option value with this restriction must match.</p>
   */
  Pattern?: string;

  /**
   * <p>A unique name representing this regular expression.</p>
   */
  Label?: string;
}

export type _UnmarshalledOptionRestrictionRegex = _OptionRestrictionRegex;
