/**
 * <p>Describes the client connection logging options for the Client VPN endpoint.</p>
 */
export interface _ConnectionLogOptions {
  /**
   * <p>Indicates whether connection logging is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the CloudWatch Logs log group.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the CloudWatch Logs log stream to which the connection data is published.</p>
   */
  CloudwatchLogStream?: string;
}

export type _UnmarshalledConnectionLogOptions = _ConnectionLogOptions;
