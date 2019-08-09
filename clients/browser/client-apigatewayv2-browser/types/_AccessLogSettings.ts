/**
 * <p>Settings for logging access in a stage.</p>
 */
export interface _AccessLogSettings {
  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   */
  DestinationArn?: string;

  /**
   * <p>A single line format of the access logs of data, as specified by selected $context
   *  variables. The format must include at least $context.requestId.</p>
   */
  Format?: string;
}

export type _UnmarshalledAccessLogSettings = _AccessLogSettings;
