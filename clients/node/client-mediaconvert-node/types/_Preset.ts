import {
  _PresetSettings,
  _UnmarshalledPresetSettings
} from "./_PresetSettings";

/**
 * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
 */
export interface _Preset {
  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * An optional category you create to organize your presets.
   */
  Category?: string;

  /**
   * The timestamp in epoch seconds for preset creation.
   */
  CreatedAt?: Date | string | number;

  /**
   * An optional description you create for each preset.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds when the preset was last updated.
   */
  LastUpdated?: Date | string | number;

  /**
   * A name you create for each preset. Each name must be unique within your account.
   */
  Name: string;

  /**
   * Settings for preset
   */
  Settings: _PresetSettings;

  /**
   * A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user.
   */
  Type?: "SYSTEM" | "CUSTOM" | string;
}

export interface _UnmarshalledPreset extends _Preset {
  /**
   * The timestamp in epoch seconds for preset creation.
   */
  CreatedAt?: Date;

  /**
   * The timestamp in epoch seconds when the preset was last updated.
   */
  LastUpdated?: Date;

  /**
   * Settings for preset
   */
  Settings: _UnmarshalledPresetSettings;
}
