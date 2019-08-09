/**
 * <p>Contains information about a Remote Authentication Dial In User Service (RADIUS) server.</p>
 */
export interface _RadiusSettings {
  /**
   * <p>An array of strings that contains the IP addresses of the RADIUS server endpoints, or the IP addresses of your RADIUS server load balancer.</p>
   */
  RadiusServers?: Array<string> | Iterable<string>;

  /**
   * <p>The port that your RADIUS server is using for communications. Your on-premises network must allow inbound traffic over this port from the AWS Directory Service servers.</p>
   */
  RadiusPort?: number;

  /**
   * <p>The amount of time, in seconds, to wait for the RADIUS server to respond.</p>
   */
  RadiusTimeout?: number;

  /**
   * <p>The maximum number of times that communication with the RADIUS server is attempted.</p>
   */
  RadiusRetries?: number;

  /**
   * <p>Required for enabling RADIUS on the directory.</p>
   */
  SharedSecret?: string;

  /**
   * <p>The protocol specified for your RADIUS endpoints.</p>
   */
  AuthenticationProtocol?: "PAP" | "CHAP" | "MS-CHAPv1" | "MS-CHAPv2" | string;

  /**
   * <p>Not currently used.</p>
   */
  DisplayLabel?: string;

  /**
   * <p>Not currently used.</p>
   */
  UseSameUsername?: boolean;
}

export interface _UnmarshalledRadiusSettings extends _RadiusSettings {
  /**
   * <p>An array of strings that contains the IP addresses of the RADIUS server endpoints, or the IP addresses of your RADIUS server load balancer.</p>
   */
  RadiusServers?: Array<string>;
}
