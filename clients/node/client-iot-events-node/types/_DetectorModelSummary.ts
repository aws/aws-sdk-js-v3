/**
 * <p>Information about the detector model.</p>
 */
export interface _DetectorModelSummary {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date | string | number;
}

export interface _UnmarshalledDetectorModelSummary
  extends _DetectorModelSummary {
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;
}
