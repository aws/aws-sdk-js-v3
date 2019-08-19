/**
 * Settings for MP4 container. You can create audio-only AAC outputs with this container.
 */
export interface _Mp4Settings {
  /**
   * When enabled, file composition times will start at zero, composition times in the 'ctts' (composition time to sample) box for B-frames will be negative, and a 'cslg' (composition shift least greatest) box will be included per 14496-1 amendment 1. This improves compatibility with Apple players and tools.
   */
  CslgAtom?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * Inserts a free-space box immediately after the moov box.
   */
  FreeSpaceBox?: "INCLUDE" | "EXCLUDE" | string;

  /**
   * If set to PROGRESSIVE_DOWNLOAD, the MOOV atom is relocated to the beginning of the archive as required for progressive downloading. Otherwise it is placed normally at the end.
   */
  MoovPlacement?: "PROGRESSIVE_DOWNLOAD" | "NORMAL" | string;

  /**
   * Overrides the "Major Brand" field in the output file. Usually not necessary to specify.
   */
  Mp4MajorBrand?: string;
}

export type _UnmarshalledMp4Settings = _Mp4Settings;
