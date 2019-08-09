/**
 * <p>Identifies face image brightness and sharpness. </p>
 */
export interface _ImageQuality {
  /**
   * <p>Value representing brightness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a brighter face image.</p>
   */
  Brightness?: number;

  /**
   * <p>Value representing sharpness of the face. The service returns a value between 0 and 100 (inclusive). A higher value indicates a sharper face image.</p>
   */
  Sharpness?: number;
}

export type _UnmarshalledImageQuality = _ImageQuality;
