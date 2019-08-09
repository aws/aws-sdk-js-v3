import {
  _CaptionDestinationSettings,
  _UnmarshalledCaptionDestinationSettings
} from "./_CaptionDestinationSettings";

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface _CaptionDescription {
  /**
   * Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.
   */
  CaptionSelectorName: string;

  /**
   * Additional settings for captions destination that depend on the destination type.
   */
  DestinationSettings?: _CaptionDestinationSettings;

  /**
   * ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/
   */
  LanguageCode?: string;

  /**
   * Human readable information to indicate captions available for players (eg. English, or Spanish).
   */
  LanguageDescription?: string;

  /**
   * Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.
   */
  Name: string;
}

export interface _UnmarshalledCaptionDescription extends _CaptionDescription {
  /**
   * Additional settings for captions destination that depend on the destination type.
   */
  DestinationSettings?: _UnmarshalledCaptionDestinationSettings;
}
