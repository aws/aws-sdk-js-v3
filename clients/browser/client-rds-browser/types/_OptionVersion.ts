/**
 * <p>The version for an option. Option group option versions are returned by the <code>DescribeOptionGroupOptions</code> action.</p>
 */
export interface _OptionVersion {
  /**
   * <p>The version of the option.</p>
   */
  Version?: string;

  /**
   * <p>True if the version is the default version of the option, and otherwise false.</p>
   */
  IsDefault?: boolean;
}

export type _UnmarshalledOptionVersion = _OptionVersion;
