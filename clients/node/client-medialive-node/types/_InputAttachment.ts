import { _InputSettings, _UnmarshalledInputSettings } from "./_InputSettings";

/**
 * Placeholder documentation for InputAttachment
 */
export interface _InputAttachment {
  /**
   * User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.
   */
  InputAttachmentName?: string;

  /**
   * The ID of the input
   */
  InputId?: string;

  /**
   * Settings of an input (caption selector, etc.)
   */
  InputSettings?: _InputSettings;
}

export interface _UnmarshalledInputAttachment extends _InputAttachment {
  /**
   * Settings of an input (caption selector, etc.)
   */
  InputSettings?: _UnmarshalledInputSettings;
}
