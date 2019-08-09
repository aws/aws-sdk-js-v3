import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could not be determined from the codec IDs of the tracks in the first fragment for a playback session. The codec ID for track 1 should be <code>V_MPEG/ISO/AVC</code> and, optionally, the codec ID for track 2 should be <code>A_AAC</code>.</p>
 */
export interface UnsupportedStreamMediaTypeException
  extends __ServiceException__<_UnsupportedStreamMediaTypeExceptionDetails> {
  name: "UnsupportedStreamMediaTypeException";
}

export interface _UnsupportedStreamMediaTypeExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
