import {
  _BurninDestinationSettings,
  _UnmarshalledBurninDestinationSettings
} from "./_BurninDestinationSettings";
import {
  _DvbSubDestinationSettings,
  _UnmarshalledDvbSubDestinationSettings
} from "./_DvbSubDestinationSettings";
import {
  _EmbeddedDestinationSettings,
  _UnmarshalledEmbeddedDestinationSettings
} from "./_EmbeddedDestinationSettings";
import {
  _SccDestinationSettings,
  _UnmarshalledSccDestinationSettings
} from "./_SccDestinationSettings";
import {
  _TeletextDestinationSettings,
  _UnmarshalledTeletextDestinationSettings
} from "./_TeletextDestinationSettings";
import {
  _TtmlDestinationSettings,
  _UnmarshalledTtmlDestinationSettings
} from "./_TtmlDestinationSettings";

/**
 * Specific settings required by destination type. Note that burnin_destination_settings are not available if the source of the caption data is Embedded or Teletext.
 */
export interface _CaptionDestinationSettings {
  /**
   * Burn-In Destination Settings.
   */
  BurninDestinationSettings?: _BurninDestinationSettings;

  /**
   * Specify the format for this set of captions on this output. The default format is embedded without SCTE-20. Other options are embedded with SCTE-20, burn-in, DVB-sub, SCC, SRT, teletext, TTML, and web-VTT. If you are using SCTE-20, choose SCTE-20 plus embedded (SCTE20_PLUS_EMBEDDED) to create an output that complies with the SCTE-43 spec. To create a non-compliant output where the embedded captions come first, choose Embedded plus SCTE-20 (EMBEDDED_PLUS_SCTE20).
   */
  DestinationType?:
    | "BURN_IN"
    | "DVB_SUB"
    | "EMBEDDED"
    | "EMBEDDED_PLUS_SCTE20"
    | "SCTE20_PLUS_EMBEDDED"
    | "SCC"
    | "SRT"
    | "SMI"
    | "TELETEXT"
    | "TTML"
    | "WEBVTT"
    | string;

  /**
   * DVB-Sub Destination Settings
   */
  DvbSubDestinationSettings?: _DvbSubDestinationSettings;

  /**
   * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
   */
  EmbeddedDestinationSettings?: _EmbeddedDestinationSettings;

  /**
   * Settings for SCC caption output.
   */
  SccDestinationSettings?: _SccDestinationSettings;

  /**
   * Settings for Teletext caption output
   */
  TeletextDestinationSettings?: _TeletextDestinationSettings;

  /**
   * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
   */
  TtmlDestinationSettings?: _TtmlDestinationSettings;
}

export interface _UnmarshalledCaptionDestinationSettings
  extends _CaptionDestinationSettings {
  /**
   * Burn-In Destination Settings.
   */
  BurninDestinationSettings?: _UnmarshalledBurninDestinationSettings;

  /**
   * DVB-Sub Destination Settings
   */
  DvbSubDestinationSettings?: _UnmarshalledDvbSubDestinationSettings;

  /**
   * Settings specific to embedded/ancillary caption outputs, including 608/708 Channel destination number.
   */
  EmbeddedDestinationSettings?: _UnmarshalledEmbeddedDestinationSettings;

  /**
   * Settings for SCC caption output.
   */
  SccDestinationSettings?: _UnmarshalledSccDestinationSettings;

  /**
   * Settings for Teletext caption output
   */
  TeletextDestinationSettings?: _UnmarshalledTeletextDestinationSettings;

  /**
   * Settings specific to TTML caption outputs, including Pass style information (TtmlStylePassthrough).
   */
  TtmlDestinationSettings?: _UnmarshalledTtmlDestinationSettings;
}
