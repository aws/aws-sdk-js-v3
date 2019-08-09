import {
  _ModerationLabel,
  _UnmarshalledModerationLabel
} from "./_ModerationLabel";

/**
 * <p>Information about a moderation label detection in a stored video.</p>
 */
export interface _ContentModerationDetection {
  /**
   * <p>Time, in milliseconds from the beginning of the video, that the moderation label was detected.</p>
   */
  Timestamp?: number;

  /**
   * <p>The moderation label detected by in the stored video.</p>
   */
  ModerationLabel?: _ModerationLabel;
}

export interface _UnmarshalledContentModerationDetection
  extends _ContentModerationDetection {
  /**
   * <p>The moderation label detected by in the stored video.</p>
   */
  ModerationLabel?: _UnmarshalledModerationLabel;
}
