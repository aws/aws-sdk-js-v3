/**
 * <p>Access log settings, including the access log format and access log destination ARN.</p>
 */
export interface _AccessLogSettings {
  /**
   * <p>A single line format of the access logs of data, as specified by selected <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference">$context variables</a>. The format must include at least <code>$context.requestId</code>.</p>
   */
  format?: string;

  /**
   * <p>The ARN of the CloudWatch Logs log group to receive access logs.</p>
   */
  destinationArn?: string;
}

export type _UnmarshalledAccessLogSettings = _AccessLogSettings;
