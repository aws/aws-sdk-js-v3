import {
  _FaceSearchSettings,
  _UnmarshalledFaceSearchSettings
} from "./_FaceSearchSettings";

/**
 * <p>Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.</p>
 */
export interface _StreamProcessorSettings {
  /**
   * <p>Face search settings to use on a streaming video. </p>
   */
  FaceSearch?: _FaceSearchSettings;
}

export interface _UnmarshalledStreamProcessorSettings
  extends _StreamProcessorSettings {
  /**
   * <p>Face search settings to use on a streaming video. </p>
   */
  FaceSearch?: _UnmarshalledFaceSearchSettings;
}
