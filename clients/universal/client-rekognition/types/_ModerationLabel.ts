/**
 * <p>Provides information about a single type of moderated content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. For more information, see Detecting Unsafe Content in the Amazon Rekognition Developer Guide.</p>
 */
export interface _ModerationLabel {
  /**
   * <p>Specifies the confidence that Amazon Rekognition has that the label has been correctly identified.</p> <p>If you don't specify the <code>MinConfidence</code> parameter in the call to <code>DetectModerationLabels</code>, the operation returns labels with a confidence value greater than or equal to 50 percent.</p>
   */
  Confidence?: number;

  /**
   * <p>The label name for the type of content detected in the image.</p>
   */
  Name?: string;

  /**
   * <p>The name for the parent label. Labels at the top level of the hierarchy have the parent label <code>""</code>.</p>
   */
  ParentName?: string;
}

export type _UnmarshalledModerationLabel = _ModerationLabel;
