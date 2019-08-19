import { _BoundingBox, _UnmarshalledBoundingBox } from "./_BoundingBox";
import { _FaceDetail, _UnmarshalledFaceDetail } from "./_FaceDetail";

/**
 * <p>Information about a recognized celebrity.</p>
 */
export interface _CelebrityDetail {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   */
  Urls?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier for the celebrity. </p>
   */
  Id?: string;

  /**
   * <p>The confidence, in percentage, that Amazon Rekognition has that the recognized face is the celebrity. </p>
   */
  Confidence?: number;

  /**
   * <p>Bounding box around the body of a celebrity.</p>
   */
  BoundingBox?: _BoundingBox;

  /**
   * <p>Face details for the recognized celebrity.</p>
   */
  Face?: _FaceDetail;
}

export interface _UnmarshalledCelebrityDetail extends _CelebrityDetail {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   */
  Urls?: Array<string>;

  /**
   * <p>Bounding box around the body of a celebrity.</p>
   */
  BoundingBox?: _UnmarshalledBoundingBox;

  /**
   * <p>Face details for the recognized celebrity.</p>
   */
  Face?: _UnmarshalledFaceDetail;
}
