/**
 * Settings for deinterlacer
 */
export interface _Deinterlacer {
  /**
   * Only applies when you set Deinterlacer (DeinterlaceMode) to Deinterlace (DEINTERLACE) or Adaptive (ADAPTIVE). Motion adaptive interpolate (INTERPOLATE) produces sharper pictures, while blend (BLEND) produces smoother motion. Use (INTERPOLATE_TICKER) OR (BLEND_TICKER) if your source file includes a ticker, such as a scrolling headline at the bottom of the frame.
   */
  Algorithm?:
    | "INTERPOLATE"
    | "INTERPOLATE_TICKER"
    | "BLEND"
    | "BLEND_TICKER"
    | string;

  /**
   * - When set to NORMAL (default), the deinterlacer does not convert frames that are tagged  in metadata as progressive. It will only convert those that are tagged as some other type. - When set to FORCE_ALL_FRAMES, the deinterlacer converts every frame to progressive - even those that are already tagged as progressive. Turn Force mode on only if there is  a good chance that the metadata has tagged frames as progressive when they are not  progressive. Do not turn on otherwise; processing frames that are already progressive  into progressive will probably result in lower quality video.
   */
  Control?: "FORCE_ALL_FRAMES" | "NORMAL" | string;

  /**
   * Use Deinterlacer (DeinterlaceMode) to choose how the service will do deinterlacing. Default is Deinterlace. - Deinterlace converts interlaced to progressive. - Inverse telecine converts Hard Telecine 29.97i to progressive 23.976p. - Adaptive auto-detects and converts to progressive.
   */
  Mode?: "DEINTERLACE" | "INVERSE_TELECINE" | "ADAPTIVE" | string;
}

export type _UnmarshalledDeinterlacer = _Deinterlacer;
