/**
 * <p>Indicates the location of the landmark on the face.</p>
 */
export interface _Landmark {
  /**
   * <p>Type of landmark.</p>
   */
  Type?:
    | "eyeLeft"
    | "eyeRight"
    | "nose"
    | "mouthLeft"
    | "mouthRight"
    | "leftEyeBrowLeft"
    | "leftEyeBrowRight"
    | "leftEyeBrowUp"
    | "rightEyeBrowLeft"
    | "rightEyeBrowRight"
    | "rightEyeBrowUp"
    | "leftEyeLeft"
    | "leftEyeRight"
    | "leftEyeUp"
    | "leftEyeDown"
    | "rightEyeLeft"
    | "rightEyeRight"
    | "rightEyeUp"
    | "rightEyeDown"
    | "noseLeft"
    | "noseRight"
    | "mouthUp"
    | "mouthDown"
    | "leftPupil"
    | "rightPupil"
    | "upperJawlineLeft"
    | "midJawlineLeft"
    | "chinBottom"
    | "midJawlineRight"
    | "upperJawlineRight"
    | string;

  /**
   * <p>The x-coordinate from the top left of the landmark expressed as the ratio of the width of the image. For example, if the image is 700 x 200 and the x-coordinate of the landmark is at 350 pixels, this value is 0.5. </p>
   */
  X?: number;

  /**
   * <p>The y-coordinate from the top left of the landmark expressed as the ratio of the height of the image. For example, if the image is 700 x 200 and the y-coordinate of the landmark is at 100 pixels, this value is 0.5.</p>
   */
  Y?: number;
}

export type _UnmarshalledLandmark = _Landmark;
