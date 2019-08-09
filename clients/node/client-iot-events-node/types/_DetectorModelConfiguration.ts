/**
 * <p>Information about how the detector model is configured.</p>
 */
export interface _DetectorModelConfiguration {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The version of the detector model.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The ARN of the detector model.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn?: string;

  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p>The status of the detector model.</p>
   */
  status?:
    | "ACTIVE"
    | "ACTIVATING"
    | "INACTIVE"
    | "DEPRECATED"
    | "DRAFT"
    | "PAUSED"
    | "FAILED"
    | string;

  /**
   * <p>The input attribute key used to identify a device or system in order to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression to specify the attribute-value pair in the message payload of each input that is used to identify the device associated with the input.</p>
   */
  key?: string;
}

export interface _UnmarshalledDetectorModelConfiguration
  extends _DetectorModelConfiguration {
  /**
   * <p>The time the detector model was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector model was last updated.</p>
   */
  lastUpdateTime?: Date;
}
