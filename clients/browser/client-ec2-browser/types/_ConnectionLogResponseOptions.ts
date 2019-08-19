/**
 * <p>Information about the client connection logging options for a Client VPN endpoint.</p>
 */
export interface _ConnectionLogResponseOptions {
  /**
   * <p>Indicates whether client connection logging is enabled for the Client VPN endpoint.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the Amazon CloudWatch Logs log group to which connection logging data is published.</p>
   */
  CloudwatchLogGroup?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs log stream to which connection logging data is published.</p>
   */
  CloudwatchLogStream?: string;
}

export type _UnmarshalledConnectionLogResponseOptions = _ConnectionLogResponseOptions;
