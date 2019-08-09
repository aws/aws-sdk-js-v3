/**
 * <p>A structure that contains details of a service principal that is enabled to integrate with AWS Organizations.</p>
 */
export interface _EnabledServicePrincipal {
  /**
   * <p>The name of the service principal. This is typically in the form of a URL, such as: <code> <i>servicename</i>.amazonaws.com</code>.</p>
   */
  ServicePrincipal?: string;

  /**
   * <p>The date that the service principal was enabled for integration with AWS Organizations.</p>
   */
  DateEnabled?: Date | string | number;
}

export interface _UnmarshalledEnabledServicePrincipal
  extends _EnabledServicePrincipal {
  /**
   * <p>The date that the service principal was enabled for integration with AWS Organizations.</p>
   */
  DateEnabled?: Date;
}
