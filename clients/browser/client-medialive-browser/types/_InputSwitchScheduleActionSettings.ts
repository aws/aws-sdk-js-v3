import {
  _InputClippingSettings,
  _UnmarshalledInputClippingSettings
} from "./_InputClippingSettings";

/**
 * Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.
 */
export interface _InputSwitchScheduleActionSettings {
  /**
   * The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.
   */
  InputAttachmentNameReference: string;

  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: _InputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInputSwitchScheduleActionSettings
  extends _InputSwitchScheduleActionSettings {
  /**
   * Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.
   */
  InputClippingSettings?: _UnmarshalledInputClippingSettings;

  /**
   * The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.
   */
  UrlPath?: Array<string>;
}
