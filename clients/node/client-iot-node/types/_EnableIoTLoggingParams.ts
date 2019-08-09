/**
 * <p>Parameters used when defining a mitigation action that enable AWS IoT logging.</p>
 */
export interface _EnableIoTLoggingParams {
  /**
   * <p>The ARN of the IAM role used for logging.</p>
   */
  roleArnForLogging: string;

  /**
   * <p>Specifies the types of information to be logged.</p>
   */
  logLevel: "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | string;
}

export type _UnmarshalledEnableIoTLoggingParams = _EnableIoTLoggingParams;
