import {
  _OptionGroupOptionSetting,
  _UnmarshalledOptionGroupOptionSetting
} from "./_OptionGroupOptionSetting";
import { _OptionVersion, _UnmarshalledOptionVersion } from "./_OptionVersion";

/**
 * <p>Available option.</p>
 */
export interface _OptionGroupOption {
  /**
   * <p>The name of the option.</p>
   */
  Name?: string;

  /**
   * <p>The description of the option.</p>
   */
  Description?: string;

  /**
   * <p>The name of the engine that this option can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version that the option is available for.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The minimum required engine version for the option to be applied.</p>
   */
  MinimumRequiredMinorEngineVersion?: string;

  /**
   * <p>Specifies whether the option requires a port.</p>
   */
  PortRequired?: boolean;

  /**
   * <p>If the option requires a port, specifies the default port for the option.</p>
   */
  DefaultPort?: number;

  /**
   * <p>The options that are prerequisites for this option.</p>
   */
  OptionsDependedOn?: Array<string> | Iterable<string>;

  /**
   * <p>The options that conflict with this option.</p>
   */
  OptionsConflictsWith?: Array<string> | Iterable<string>;

  /**
   * <p>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</p>
   */
  Permanent?: boolean;

  /**
   * <p>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance before you can use this option. You can enable Auto Minor Version Upgrade when you first create your DB instance, or by modifying your DB instance later. </p>
   */
  RequiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * <p>If true, you can only use this option with a DB instance that is in a VPC. </p>
   */
  VpcOnly?: boolean;

  /**
   * <p>If true, you can change the option to an earlier version of the option. This only applies to options that have different versions available. </p>
   */
  SupportsOptionVersionDowngrade?: boolean;

  /**
   * <p>The option settings that are available (and the default value) for each option in an option group.</p>
   */
  OptionGroupOptionSettings?:
    | Array<_OptionGroupOptionSetting>
    | Iterable<_OptionGroupOptionSetting>;

  /**
   * <p>The versions that are available for the option.</p>
   */
  OptionGroupOptionVersions?: Array<_OptionVersion> | Iterable<_OptionVersion>;
}

export interface _UnmarshalledOptionGroupOption extends _OptionGroupOption {
  /**
   * <p>The options that are prerequisites for this option.</p>
   */
  OptionsDependedOn?: Array<string>;

  /**
   * <p>The options that conflict with this option.</p>
   */
  OptionsConflictsWith?: Array<string>;

  /**
   * <p>The option settings that are available (and the default value) for each option in an option group.</p>
   */
  OptionGroupOptionSettings?: Array<_UnmarshalledOptionGroupOptionSetting>;

  /**
   * <p>The versions that are available for the option.</p>
   */
  OptionGroupOptionVersions?: Array<_UnmarshalledOptionVersion>;
}
