import { _Geometry, _UnmarshalledGeometry } from "./_Geometry";

/**
 * <p>Information about a word or line of text detected by <a>DetectText</a>.</p> <p>The <code>DetectedText</code> field contains the text that Amazon Rekognition detected in the image. </p> <p>Every word and line has an identifier (<code>Id</code>). Each word belongs to a line and has a parent identifier (<code>ParentId</code>) that identifies the line of text in which the word appears. The word <code>Id</code> is also an index for the word within a line of words. </p> <p>For more information, see Detecting Text in the Amazon Rekognition Developer Guide.</p>
 */
export interface _TextDetection {
  /**
   * <p>The word or line of text recognized by Amazon Rekognition. </p>
   */
  DetectedText?: string;

  /**
   * <p>The type of text that was detected.</p>
   */
  Type?: "LINE" | "WORD" | string;

  /**
   * <p>The identifier for the detected text. The identifier is only unique for a single call to <code>DetectText</code>. </p>
   */
  Id?: number;

  /**
   * <p>The Parent identifier for the detected text identified by the value of <code>ID</code>. If the type of detected text is <code>LINE</code>, the value of <code>ParentId</code> is <code>Null</code>. </p>
   */
  ParentId?: number;

  /**
   * <p>The confidence that Amazon Rekognition has in the accuracy of the detected text and the accuracy of the geometry points around the detected text.</p>
   */
  Confidence?: number;

  /**
   * <p>The location of the detected text on the image. Includes an axis aligned coarse bounding box surrounding the text and a finer grain polygon for more accurate spatial information.</p>
   */
  Geometry?: _Geometry;
}

export interface _UnmarshalledTextDetection extends _TextDetection {
  /**
   * <p>The location of the detected text on the image. Includes an axis aligned coarse bounding box surrounding the text and a finer grain polygon for more accurate spatial information.</p>
   */
  Geometry?: _UnmarshalledGeometry;
}
