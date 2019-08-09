import {
  _CaptionSelectorSettings,
  _UnmarshalledCaptionSelectorSettings
} from "./_CaptionSelectorSettings";

/**
 * Output groups for this Live Event. Output groups contain information about where streams should be distributed.
 */
export interface _CaptionSelector {
  /**
   * When specified this field indicates the three letter language code of the caption track to extract from the source.
   */
  LanguageCode?: string;

  /**
   * Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.
   */
  Name: string;

  /**
   * Caption selector settings.
   */
  SelectorSettings?: _CaptionSelectorSettings;
}

export interface _UnmarshalledCaptionSelector extends _CaptionSelector {
  /**
   * Caption selector settings.
   */
  SelectorSettings?: _UnmarshalledCaptionSelectorSettings;
}
