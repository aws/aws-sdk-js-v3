/**
 * Settings for the action to deactivate the image in a specific layer.
 */
export interface _StaticImageDeactivateScheduleActionSettings {
  /**
   * The time in milliseconds for the image to fade out. Default is 0 (no fade-out).
   */
  FadeOut?: number;

  /**
   * The image overlay layer to deactivate, 0 to 7. Default is 0.
   */
  Layer?: number;
}

export type _UnmarshalledStaticImageDeactivateScheduleActionSettings = _StaticImageDeactivateScheduleActionSettings;
