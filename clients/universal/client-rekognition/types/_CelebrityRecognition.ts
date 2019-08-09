import {
  _CelebrityDetail,
  _UnmarshalledCelebrityDetail
} from "./_CelebrityDetail";

/**
 * <p>Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.</p>
 */
export interface _CelebrityRecognition {
  /**
   * <p>The time, in milliseconds from the start of the video, that the celebrity was recognized.</p>
   */
  Timestamp?: number;

  /**
   * <p>Information about a recognized celebrity.</p>
   */
  Celebrity?: _CelebrityDetail;
}

export interface _UnmarshalledCelebrityRecognition
  extends _CelebrityRecognition {
  /**
   * <p>Information about a recognized celebrity.</p>
   */
  Celebrity?: _UnmarshalledCelebrityDetail;
}
