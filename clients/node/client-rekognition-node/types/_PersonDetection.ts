import { _PersonDetail, _UnmarshalledPersonDetail } from "./_PersonDetail";

/**
 * <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
 */
export interface _PersonDetection {
  /**
   * <p>The time, in milliseconds from the start of the video, that the person's path was tracked.</p>
   */
  Timestamp?: number;

  /**
   * <p>Details about a person whose path was tracked in a video.</p>
   */
  Person?: _PersonDetail;
}

export interface _UnmarshalledPersonDetection extends _PersonDetection {
  /**
   * <p>Details about a person whose path was tracked in a video.</p>
   */
  Person?: _UnmarshalledPersonDetail;
}
