import { _OptionSetting, _UnmarshalledOptionSetting } from "./_OptionSetting";

/**
 * <p>A list of all available options</p>
 */
export interface _OptionConfiguration {
  /**
   * <p>The configuration of options to include in a group.</p>
   */
  OptionName: string;

  /**
   * <p>The optional port for the option.</p>
   */
  Port?: number;

  /**
   * <p>The version for the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>A list of DBSecurityGroupMembership name strings used for this option.</p>
   */
  DBSecurityGroupMemberships?: Array<string> | Iterable<string>;

  /**
   * <p>A list of VpcSecurityGroupMembership name strings used for this option.</p>
   */
  VpcSecurityGroupMemberships?: Array<string> | Iterable<string>;

  /**
   * <p>The option settings to include in an option group.</p>
   */
  OptionSettings?: Array<_OptionSetting> | Iterable<_OptionSetting>;
}

export interface _UnmarshalledOptionConfiguration extends _OptionConfiguration {
  /**
   * <p>A list of DBSecurityGroupMembership name strings used for this option.</p>
   */
  DBSecurityGroupMemberships?: Array<string>;

  /**
   * <p>A list of VpcSecurityGroupMembership name strings used for this option.</p>
   */
  VpcSecurityGroupMemberships?: Array<string>;

  /**
   * <p>The option settings to include in an option group.</p>
   */
  OptionSettings?: Array<_UnmarshalledOptionSetting>;
}
