import {
  _AwsVpcConfiguration,
  _UnmarshalledAwsVpcConfiguration
} from "./_AwsVpcConfiguration";

/**
 * <p>This structure specifies the network configuration for an ECS task.</p>
 */
export interface _NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: _AwsVpcConfiguration;
}

export interface _UnmarshalledNetworkConfiguration
  extends _NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: _UnmarshalledAwsVpcConfiguration;
}
