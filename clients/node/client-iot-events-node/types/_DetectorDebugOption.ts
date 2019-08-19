/**
 * <p>The detector model and the specific detectors (instances) for which the logging level is given.</p>
 */
export interface _DetectorDebugOption {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName: string;

  /**
   * <p>The value of the input attribute key used to create the detector (the instance of the detector model).</p>
   */
  keyValue?: string;
}

export type _UnmarshalledDetectorDebugOption = _DetectorDebugOption;
