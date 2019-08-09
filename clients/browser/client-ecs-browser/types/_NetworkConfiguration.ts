import {
  _AwsVpcConfiguration,
  _UnmarshalledAwsVpcConfiguration
} from "./_AwsVpcConfiguration";

/**
 * <p>An object representing the network configuration for a task or service.</p>
 */
export interface _NetworkConfiguration {
  /**
   * <p>The VPC subnets and security groups associated with a task.</p> <note> <p>All specified subnets and security groups must be from the same VPC.</p> </note>
   */
  awsvpcConfiguration?: _AwsVpcConfiguration;
}

export interface _UnmarshalledNetworkConfiguration
  extends _NetworkConfiguration {
  /**
   * <p>The VPC subnets and security groups associated with a task.</p> <note> <p>All specified subnets and security groups must be from the same VPC.</p> </note>
   */
  awsvpcConfiguration?: _UnmarshalledAwsVpcConfiguration;
}
