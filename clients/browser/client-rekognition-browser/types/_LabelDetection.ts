import { _Label, _UnmarshalledLabel } from "./_Label";

/**
 * <p>Information about a label detected in a video analysis request and the time the label was detected in the video. </p>
 */
export interface _LabelDetection {
  /**
   * <p>Time, in milliseconds from the start of the video, that the label was detected.</p>
   */
  Timestamp?: number;

  /**
   * <p>Details about the detected label.</p>
   */
  Label?: _Label;
}

export interface _UnmarshalledLabelDetection extends _LabelDetection {
  /**
   * <p>Details about the detected label.</p>
   */
  Label?: _UnmarshalledLabel;
}
