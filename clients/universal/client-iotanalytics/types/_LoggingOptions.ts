/**
 * <p>Information about logging options.</p>
 */
export interface _LoggingOptions {
  /**
   * <p>The ARN of the role that grants permission to AWS IoT Analytics to perform logging.</p>
   */
  roleArn: string;

  /**
   * <p>The logging level. Currently, only "ERROR" is supported.</p>
   */
  level: "ERROR" | string;

  /**
   * <p>If true, logging is enabled for AWS IoT Analytics.</p>
   */
  enabled: boolean;
}

export type _UnmarshalledLoggingOptions = _LoggingOptions;
