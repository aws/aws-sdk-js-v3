/**
 * <p>The emotions detected on the face, and the confidence level in the determination. For example, HAPPY, SAD, and ANGRY.</p>
 */
export interface _Emotion {
  /**
   * <p>Type of emotion detected.</p>
   */
  Type?:
    | "HAPPY"
    | "SAD"
    | "ANGRY"
    | "CONFUSED"
    | "DISGUSTED"
    | "SURPRISED"
    | "CALM"
    | "UNKNOWN"
    | string;

  /**
   * <p>Level of confidence in the determination.</p>
   */
  Confidence?: number;
}

export type _UnmarshalledEmotion = _Emotion;
