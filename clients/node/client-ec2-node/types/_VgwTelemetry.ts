/**
 * <p>Describes telemetry for a VPN tunnel.</p>
 */
export interface _VgwTelemetry {
  /**
   * <p>The number of accepted routes.</p>
   */
  AcceptedRouteCount?: number;

  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date | string | number;

  /**
   * <p>The Internet-routable IP address of the virtual private gateway's outside interface.</p>
   */
  OutsideIpAddress?: string;

  /**
   * <p>The status of the VPN tunnel.</p>
   */
  Status?: "UP" | "DOWN" | string;

  /**
   * <p>If an error occurs, a description of the error.</p>
   */
  StatusMessage?: string;
}

export interface _UnmarshalledVgwTelemetry extends _VgwTelemetry {
  /**
   * <p>The date and time of the last change in status.</p>
   */
  LastStatusChange?: Date;
}
