/**
 * Settings for SCC caption output.
 */
export interface _SccDestinationSettings {
  /**
   * Set Framerate (SccDestinationFramerate) to make sure that the captions and the video are synchronized in the output. Specify a frame rate that matches the frame rate of the associated video. If the video frame rate is 29.97, choose 29.97 dropframe (FRAMERATE_29_97_DROPFRAME) only if the video has video_insertion=true and drop_frame_timecode=true; otherwise, choose 29.97 non-dropframe (FRAMERATE_29_97_NON_DROPFRAME).
   */
  Framerate?:
    | "FRAMERATE_23_97"
    | "FRAMERATE_24"
    | "FRAMERATE_29_97_DROPFRAME"
    | "FRAMERATE_29_97_NON_DROPFRAME"
    | string;
}

export type _UnmarshalledSccDestinationSettings = _SccDestinationSettings;
