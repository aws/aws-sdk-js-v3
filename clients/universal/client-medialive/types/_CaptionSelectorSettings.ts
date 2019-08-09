import {
  _AribSourceSettings,
  _UnmarshalledAribSourceSettings
} from "./_AribSourceSettings";
import {
  _DvbSubSourceSettings,
  _UnmarshalledDvbSubSourceSettings
} from "./_DvbSubSourceSettings";
import {
  _EmbeddedSourceSettings,
  _UnmarshalledEmbeddedSourceSettings
} from "./_EmbeddedSourceSettings";
import {
  _Scte20SourceSettings,
  _UnmarshalledScte20SourceSettings
} from "./_Scte20SourceSettings";
import {
  _Scte27SourceSettings,
  _UnmarshalledScte27SourceSettings
} from "./_Scte27SourceSettings";
import {
  _TeletextSourceSettings,
  _UnmarshalledTeletextSourceSettings
} from "./_TeletextSourceSettings";

/**
 * Caption Selector Settings
 */
export interface _CaptionSelectorSettings {
  /**
   * Arib Source Settings
   */
  AribSourceSettings?: _AribSourceSettings;

  /**
   * Dvb Sub Source Settings
   */
  DvbSubSourceSettings?: _DvbSubSourceSettings;

  /**
   * Embedded Source Settings
   */
  EmbeddedSourceSettings?: _EmbeddedSourceSettings;

  /**
   * Scte20 Source Settings
   */
  Scte20SourceSettings?: _Scte20SourceSettings;

  /**
   * Scte27 Source Settings
   */
  Scte27SourceSettings?: _Scte27SourceSettings;

  /**
   * Teletext Source Settings
   */
  TeletextSourceSettings?: _TeletextSourceSettings;
}

export interface _UnmarshalledCaptionSelectorSettings
  extends _CaptionSelectorSettings {
  /**
   * Arib Source Settings
   */
  AribSourceSettings?: _UnmarshalledAribSourceSettings;

  /**
   * Dvb Sub Source Settings
   */
  DvbSubSourceSettings?: _UnmarshalledDvbSubSourceSettings;

  /**
   * Embedded Source Settings
   */
  EmbeddedSourceSettings?: _UnmarshalledEmbeddedSourceSettings;

  /**
   * Scte20 Source Settings
   */
  Scte20SourceSettings?: _UnmarshalledScte20SourceSettings;

  /**
   * Scte27 Source Settings
   */
  Scte27SourceSettings?: _UnmarshalledScte27SourceSettings;

  /**
   * Teletext Source Settings
   */
  TeletextSourceSettings?: _UnmarshalledTeletextSourceSettings;
}
