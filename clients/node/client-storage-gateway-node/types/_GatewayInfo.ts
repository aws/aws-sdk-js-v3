/**
 * <p>Describes a gateway object.</p>
 */
export interface _GatewayInfo {
  /**
   * <p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p>
   */
  GatewayId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The type of the gateway.</p>
   */
  GatewayType?: string;

  /**
   * <p>The state of the gateway.</p> <p>Valid Values: DISABLED or ACTIVE</p>
   */
  GatewayOperationalState?: string;

  /**
   * <p>The name of the gateway.</p>
   */
  GatewayName?: string;

  /**
   * <p>The ID of the Amazon EC2 instance that was used to launch the gateway.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The AWS Region where the Amazon EC2 instance is located.</p>
   */
  Ec2InstanceRegion?: string;
}

export type _UnmarshalledGatewayInfo = _GatewayInfo;
