import { _Server, _UnmarshalledServer } from "./_Server";
import { _UserData, _UnmarshalledUserData } from "./_UserData";

/**
 * <p>Launch configuration for a server.</p>
 */
export interface _ServerLaunchConfiguration {
  /**
   * <p>Identifier of the server the launch configuration is associated with.</p>
   */
  server?: _Server;

  /**
   * <p>Logical ID of the server in the Amazon CloudFormation template.</p>
   */
  logicalId?: string;

  /**
   * <p>Identifier of the VPC the server should be launched into.</p>
   */
  vpc?: string;

  /**
   * <p>Identifier of the subnet the server should be launched into.</p>
   */
  subnet?: string;

  /**
   * <p>Identifier of the security group that applies to the launched server.</p>
   */
  securityGroup?: string;

  /**
   * <p>Name of the EC2 SSH Key to be used for connecting to the launched server.</p>
   */
  ec2KeyName?: string;

  /**
   * <p>Location of the user-data script to be executed when launching the server.</p>
   */
  userData?: _UserData;

  /**
   * <p>Instance type to be used for launching the server.</p>
   */
  instanceType?: string;

  /**
   * <p>If true, a publicly accessible IP address is created when launching the server.</p>
   */
  associatePublicIpAddress?: boolean;
}

export interface _UnmarshalledServerLaunchConfiguration
  extends _ServerLaunchConfiguration {
  /**
   * <p>Identifier of the server the launch configuration is associated with.</p>
   */
  server?: _UnmarshalledServer;

  /**
   * <p>Location of the user-data script to be executed when launching the server.</p>
   */
  userData?: _UnmarshalledUserData;
}
