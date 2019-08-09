import {
  _DetectorDebugOption,
  _UnmarshalledDetectorDebugOption
} from "./_DetectorDebugOption";

/**
 * <p>The values of the AWS IoT Events logging options.</p>
 */
export interface _LoggingOptions {
  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform logging.</p>
   */
  roleArn: string;

  /**
   * <p>The logging level.</p>
   */
  level: "ERROR" | "INFO" | "DEBUG" | string;

  /**
   * <p>If TRUE, logging is enabled for AWS IoT Events.</p>
   */
  enabled: boolean;

  /**
   * <p>Information that identifies those detector models and their detectors (instances) for which the logging level is given.</p>
   */
  detectorDebugOptions?:
    | Array<_DetectorDebugOption>
    | Iterable<_DetectorDebugOption>;
}

export interface _UnmarshalledLoggingOptions extends _LoggingOptions {
  /**
   * <p>Information that identifies those detector models and their detectors (instances) for which the logging level is given.</p>
   */
  detectorDebugOptions?: Array<_UnmarshalledDetectorDebugOption>;
}
