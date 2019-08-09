import {
  _VideoSelectorSettings,
  _UnmarshalledVideoSelectorSettings
} from "./_VideoSelectorSettings";

/**
 * Specifies a particular video stream within an input source. An input may have only a single video selector.
 */
export interface _VideoSelector {
  /**
   * Specifies the colorspace of an input. This setting works in tandem with colorSpaceConversion to determine if any conversion will be performed.
   */
  ColorSpace?: "FOLLOW" | "REC_601" | "REC_709" | string;

  /**
   * Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   */
  ColorSpaceUsage?: "FALLBACK" | "FORCE" | string;

  /**
   * The video selector settings.
   */
  SelectorSettings?: _VideoSelectorSettings;
}

export interface _UnmarshalledVideoSelector extends _VideoSelector {
  /**
   * The video selector settings.
   */
  SelectorSettings?: _UnmarshalledVideoSelectorSettings;
}
