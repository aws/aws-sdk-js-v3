/**
 * <p>The details of the gateway. </p>
 */
export interface _Gateway {
  /**
   * <p>The ARN of the gateway.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  Name?: string;

  /**
   * <p>The description of the gateway.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the gateway group that the gateway is associated to.</p>
   */
  GatewayGroupArn?: string;

  /**
   * <p>The software version of the gateway. The gateway automatically updates its software version during normal operation.</p>
   */
  SoftwareVersion?: string;
}

export type _UnmarshalledGateway = _Gateway;
