/**
 * <p>Input face recognition parameters for an Amazon Rekognition stream processor. <code>FaceRecognitionSettings</code> is a request parameter for <a>CreateStreamProcessor</a>.</p>
 */
export interface _FaceSearchSettings {
  /**
   * <p>The ID of a collection that contains faces that you want to search for.</p>
   */
  CollectionId?: string;

  /**
   * <p>Minimum face match confidence score that must be met to return a result for a recognized face. Default is 70. 0 is the lowest confidence. 100 is the highest confidence.</p>
   */
  FaceMatchThreshold?: number;
}

export type _UnmarshalledFaceSearchSettings = _FaceSearchSettings;
