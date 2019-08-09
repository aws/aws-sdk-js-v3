import { _InputLocation, _UnmarshalledInputLocation } from "./_InputLocation";

/**
 * Avail Blanking
 */
export interface _AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: _InputLocation;

  /**
   * When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.
   */
  State?: "DISABLED" | "ENABLED" | string;
}

export interface _UnmarshalledAvailBlanking extends _AvailBlanking {
  /**
   * Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.
   */
  AvailBlankingImage?: _UnmarshalledInputLocation;
}
