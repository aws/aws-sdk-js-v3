import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";

/**
 * <p>An instance of a label returned by Amazon Rekognition Image (<a>DetectLabels</a>) or by Amazon Rekognition Video (<a>GetLabelDetection</a>).</p>
 */
export interface _Instance {
  /**
   * <p>The position of the label instance on the image.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the bounding box.</p>
   */
  Confidence?: number;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>The position of the label instance on the image.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;
}
