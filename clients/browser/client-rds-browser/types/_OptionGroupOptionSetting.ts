import {
  _MinimumEngineVersionPerAllowedValue,
  _UnmarshalledMinimumEngineVersionPerAllowedValue
} from "./_MinimumEngineVersionPerAllowedValue";

/**
 * <p>Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.</p>
 */
export interface _OptionGroupOptionSetting {
  /**
   * <p>The name of the option group option.</p>
   */
  SettingName?: string;

  /**
   * <p>The description of the option group option.</p>
   */
  SettingDescription?: string;

  /**
   * <p>The default value for the option group option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The DB engine specific parameter type for the option group option.</p>
   */
  ApplyType?: string;

  /**
   * <p>Indicates the acceptable values for the option group option.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Boolean value where true indicates that this option group option can be changed from the default value.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>Boolean value where true indicates that a value must be specified for this option setting of the option group option.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The minimum DB engine version required for the corresponding allowed value for this option setting.</p>
   */
  MinimumEngineVersionPerAllowedValue?:
    | Array<_MinimumEngineVersionPerAllowedValue>
    | Iterable<_MinimumEngineVersionPerAllowedValue>;
}

export interface _UnmarshalledOptionGroupOptionSetting
  extends _OptionGroupOptionSetting {
  /**
   * <p>The minimum DB engine version required for the corresponding allowed value for this option setting.</p>
   */
  MinimumEngineVersionPerAllowedValue?: Array<
    _UnmarshalledMinimumEngineVersionPerAllowedValue
  >;
}
