/**
 * Settings for MOV Container.
 */
export interface _MovSettings {
  /**
   * When enabled, include 'clap' atom if appropriate for the video output settings.
   */
  ClapAtom?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * When set to XDCAM, writes MPEG2 video streams into the QuickTime file using XDCAM fourcc codes. This increases compatibility with Apple editors and players, but may decrease compatibility with other players. Only applicable when the video codec is MPEG2.
   */
  Mpeg2FourCCControl?: "XDCAM" | "MPEG" | string;

  /**
   * If set to OMNEON, inserts Omneon-compatible padding
   */
  PaddingControl?: "OMNEON" | "NONE" | string;

  /**
   * Always keep the default value (SELF_CONTAINED) for this setting.
   */
  Reference?: "SELF_CONTAINED" | "EXTERNAL" | string;
}

export type _UnmarshalledMovSettings = _MovSettings;
