import {
  _AncillarySourceSettings,
  _UnmarshalledAncillarySourceSettings
} from "./_AncillarySourceSettings";
import {
  _DvbSubSourceSettings,
  _UnmarshalledDvbSubSourceSettings
} from "./_DvbSubSourceSettings";
import {
  _EmbeddedSourceSettings,
  _UnmarshalledEmbeddedSourceSettings
} from "./_EmbeddedSourceSettings";
import {
  _FileSourceSettings,
  _UnmarshalledFileSourceSettings
} from "./_FileSourceSettings";
import {
  _TeletextSourceSettings,
  _UnmarshalledTeletextSourceSettings
} from "./_TeletextSourceSettings";
import {
  _TrackSourceSettings,
  _UnmarshalledTrackSourceSettings
} from "./_TrackSourceSettings";

/**
 * Source settings (SourceSettings) contains the group of settings for captions in the input.
 */
export interface _CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   */
  AncillarySourceSettings?: _AncillarySourceSettings;

  /**
   * DVB Sub Source Settings
   */
  DvbSubSourceSettings?: _DvbSubSourceSettings;

  /**
   * Settings for embedded captions Source
   */
  EmbeddedSourceSettings?: _EmbeddedSourceSettings;

  /**
   * Settings for File-based Captions in Source
   */
  FileSourceSettings?: _FileSourceSettings;

  /**
   * Use Source (SourceType) to identify the format of your input captions.  The service cannot auto-detect caption format.
   */
  SourceType?:
    | "ANCILLARY"
    | "DVB_SUB"
    | "EMBEDDED"
    | "SCTE20"
    | "SCC"
    | "TTML"
    | "STL"
    | "SRT"
    | "SMI"
    | "TELETEXT"
    | "NULL_SOURCE"
    | "IMSC"
    | string;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   */
  TeletextSourceSettings?: _TeletextSourceSettings;

  /**
   * Settings specific to caption sources that are specfied by track number. Sources include IMSC in IMF.
   */
  TrackSourceSettings?: _TrackSourceSettings;
}

export interface _UnmarshalledCaptionSourceSettings
  extends _CaptionSourceSettings {
  /**
   * Settings for ancillary captions source.
   */
  AncillarySourceSettings?: _UnmarshalledAncillarySourceSettings;

  /**
   * DVB Sub Source Settings
   */
  DvbSubSourceSettings?: _UnmarshalledDvbSubSourceSettings;

  /**
   * Settings for embedded captions Source
   */
  EmbeddedSourceSettings?: _UnmarshalledEmbeddedSourceSettings;

  /**
   * Settings for File-based Captions in Source
   */
  FileSourceSettings?: _UnmarshalledFileSourceSettings;

  /**
   * Settings specific to Teletext caption sources, including Page number.
   */
  TeletextSourceSettings?: _UnmarshalledTeletextSourceSettings;

  /**
   * Settings specific to caption sources that are specfied by track number. Sources include IMSC in IMF.
   */
  TrackSourceSettings?: _UnmarshalledTrackSourceSettings;
}
