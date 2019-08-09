import { _FaceDetail, _UnmarshalledFaceDetail } from "./_FaceDetail";

/**
 * <p>A face that <a>IndexFaces</a> detected, but didn't index. Use the <code>Reasons</code> response attribute to determine why a face wasn't indexed.</p>
 */
export interface _UnindexedFace {
  /**
   * <p>An array of reasons that specify why a face wasn't indexed. </p> <ul> <li> <p>EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned too far away from the camera.</p> </li> <li> <p>EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the <code>MaxFaces</code> input parameter for <code>IndexFaces</code>.</p> </li> <li> <p>LOW_BRIGHTNESS - The image is too dark.</p> </li> <li> <p>LOW_SHARPNESS - The image is too blurry.</p> </li> <li> <p>LOW_CONFIDENCE - The face was detected with a low confidence.</p> </li> <li> <p>SMALL_BOUNDING_BOX - The bounding box around the face is too small.</p> </li> </ul>
   */
  Reasons?:
    | Array<
        | "EXCEEDS_MAX_FACES"
        | "EXTREME_POSE"
        | "LOW_BRIGHTNESS"
        | "LOW_SHARPNESS"
        | "LOW_CONFIDENCE"
        | "SMALL_BOUNDING_BOX"
        | string
      >
    | Iterable<
        | "EXCEEDS_MAX_FACES"
        | "EXTREME_POSE"
        | "LOW_BRIGHTNESS"
        | "LOW_SHARPNESS"
        | "LOW_CONFIDENCE"
        | "SMALL_BOUNDING_BOX"
        | string
      >;

  /**
   * <p>The structure that contains attributes of a face that <code>IndexFaces</code>detected, but didn't index. </p>
   */
  FaceDetail?: _FaceDetail;
}

export interface _UnmarshalledUnindexedFace extends _UnindexedFace {
  /**
   * <p>An array of reasons that specify why a face wasn't indexed. </p> <ul> <li> <p>EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned too far away from the camera.</p> </li> <li> <p>EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the <code>MaxFaces</code> input parameter for <code>IndexFaces</code>.</p> </li> <li> <p>LOW_BRIGHTNESS - The image is too dark.</p> </li> <li> <p>LOW_SHARPNESS - The image is too blurry.</p> </li> <li> <p>LOW_CONFIDENCE - The face was detected with a low confidence.</p> </li> <li> <p>SMALL_BOUNDING_BOX - The bounding box around the face is too small.</p> </li> </ul>
   */
  Reasons?: Array<
    | "EXCEEDS_MAX_FACES"
    | "EXTREME_POSE"
    | "LOW_BRIGHTNESS"
    | "LOW_SHARPNESS"
    | "LOW_CONFIDENCE"
    | "SMALL_BOUNDING_BOX"
    | string
  >;

  /**
   * <p>The structure that contains attributes of a face that <code>IndexFaces</code>detected, but didn't index. </p>
   */
  FaceDetail?: _UnmarshalledFaceDetail;
}
