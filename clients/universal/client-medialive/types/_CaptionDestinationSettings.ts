import {
  _AribDestinationSettings,
  _UnmarshalledAribDestinationSettings
} from "./_AribDestinationSettings";
import {
  _BurnInDestinationSettings,
  _UnmarshalledBurnInDestinationSettings
} from "./_BurnInDestinationSettings";
import {
  _DvbSubDestinationSettings,
  _UnmarshalledDvbSubDestinationSettings
} from "./_DvbSubDestinationSettings";
import {
  _EmbeddedDestinationSettings,
  _UnmarshalledEmbeddedDestinationSettings
} from "./_EmbeddedDestinationSettings";
import {
  _EmbeddedPlusScte20DestinationSettings,
  _UnmarshalledEmbeddedPlusScte20DestinationSettings
} from "./_EmbeddedPlusScte20DestinationSettings";
import {
  _RtmpCaptionInfoDestinationSettings,
  _UnmarshalledRtmpCaptionInfoDestinationSettings
} from "./_RtmpCaptionInfoDestinationSettings";
import {
  _Scte20PlusEmbeddedDestinationSettings,
  _UnmarshalledScte20PlusEmbeddedDestinationSettings
} from "./_Scte20PlusEmbeddedDestinationSettings";
import {
  _Scte27DestinationSettings,
  _UnmarshalledScte27DestinationSettings
} from "./_Scte27DestinationSettings";
import {
  _SmpteTtDestinationSettings,
  _UnmarshalledSmpteTtDestinationSettings
} from "./_SmpteTtDestinationSettings";
import {
  _TeletextDestinationSettings,
  _UnmarshalledTeletextDestinationSettings
} from "./_TeletextDestinationSettings";
import {
  _TtmlDestinationSettings,
  _UnmarshalledTtmlDestinationSettings
} from "./_TtmlDestinationSettings";
import {
  _WebvttDestinationSettings,
  _UnmarshalledWebvttDestinationSettings
} from "./_WebvttDestinationSettings";

/**
 * Caption Destination Settings
 */
export interface _CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   */
  AribDestinationSettings?: _AribDestinationSettings;

  /**
   * Burn In Destination Settings
   */
  BurnInDestinationSettings?: _BurnInDestinationSettings;

  /**
   * Dvb Sub Destination Settings
   */
  DvbSubDestinationSettings?: _DvbSubDestinationSettings;

  /**
   * Embedded Destination Settings
   */
  EmbeddedDestinationSettings?: _EmbeddedDestinationSettings;

  /**
   * Embedded Plus Scte20 Destination Settings
   */
  EmbeddedPlusScte20DestinationSettings?: _EmbeddedPlusScte20DestinationSettings;

  /**
   * Rtmp Caption Info Destination Settings
   */
  RtmpCaptionInfoDestinationSettings?: _RtmpCaptionInfoDestinationSettings;

  /**
   * Scte20 Plus Embedded Destination Settings
   */
  Scte20PlusEmbeddedDestinationSettings?: _Scte20PlusEmbeddedDestinationSettings;

  /**
   * Scte27 Destination Settings
   */
  Scte27DestinationSettings?: _Scte27DestinationSettings;

  /**
   * Smpte Tt Destination Settings
   */
  SmpteTtDestinationSettings?: _SmpteTtDestinationSettings;

  /**
   * Teletext Destination Settings
   */
  TeletextDestinationSettings?: _TeletextDestinationSettings;

  /**
   * Ttml Destination Settings
   */
  TtmlDestinationSettings?: _TtmlDestinationSettings;

  /**
   * Webvtt Destination Settings
   */
  WebvttDestinationSettings?: _WebvttDestinationSettings;
}

export interface _UnmarshalledCaptionDestinationSettings
  extends _CaptionDestinationSettings {
  /**
   * Arib Destination Settings
   */
  AribDestinationSettings?: _UnmarshalledAribDestinationSettings;

  /**
   * Burn In Destination Settings
   */
  BurnInDestinationSettings?: _UnmarshalledBurnInDestinationSettings;

  /**
   * Dvb Sub Destination Settings
   */
  DvbSubDestinationSettings?: _UnmarshalledDvbSubDestinationSettings;

  /**
   * Embedded Destination Settings
   */
  EmbeddedDestinationSettings?: _UnmarshalledEmbeddedDestinationSettings;

  /**
   * Embedded Plus Scte20 Destination Settings
   */
  EmbeddedPlusScte20DestinationSettings?: _UnmarshalledEmbeddedPlusScte20DestinationSettings;

  /**
   * Rtmp Caption Info Destination Settings
   */
  RtmpCaptionInfoDestinationSettings?: _UnmarshalledRtmpCaptionInfoDestinationSettings;

  /**
   * Scte20 Plus Embedded Destination Settings
   */
  Scte20PlusEmbeddedDestinationSettings?: _UnmarshalledScte20PlusEmbeddedDestinationSettings;

  /**
   * Scte27 Destination Settings
   */
  Scte27DestinationSettings?: _UnmarshalledScte27DestinationSettings;

  /**
   * Smpte Tt Destination Settings
   */
  SmpteTtDestinationSettings?: _UnmarshalledSmpteTtDestinationSettings;

  /**
   * Teletext Destination Settings
   */
  TeletextDestinationSettings?: _UnmarshalledTeletextDestinationSettings;

  /**
   * Ttml Destination Settings
   */
  TtmlDestinationSettings?: _UnmarshalledTtmlDestinationSettings;

  /**
   * Webvtt Destination Settings
   */
  WebvttDestinationSettings?: _UnmarshalledWebvttDestinationSettings;
}
