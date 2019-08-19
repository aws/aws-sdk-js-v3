/**
 * <p>Describes the logging options payload.</p>
 */
export interface _LoggingOptionsPayload {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string;

  /**
   * <p>The log level.</p>
   */
  logLevel?: "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED" | string;
}

export type _UnmarshalledLoggingOptionsPayload = _LoggingOptionsPayload;
