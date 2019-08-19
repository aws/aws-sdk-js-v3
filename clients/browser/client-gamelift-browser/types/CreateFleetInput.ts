import { _IpPermission } from "./_IpPermission";
import { _RuntimeConfiguration } from "./_RuntimeConfiguration";
import { _ResourceCreationLimitPolicy } from "./_ResourceCreationLimitPolicy";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface CreateFleetInput {
  /**
   * <p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   */
  Name: string;

  /**
   * <p>Human-readable description of a fleet.</p>
   */
  Description?: string;

  /**
   * <p>Unique identifier for a build to be deployed on the new fleet. The custom game server build must have been successfully uploaded to Amazon GameLift and be in a <code>READY</code> status. This fleet setting cannot be changed once the fleet is created.</p>
   */
  BuildId?: string;

  /**
   * <p>Unique identifier for a Realtime script to be deployed on the new fleet. The Realtime script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.</p>
   */
  ScriptId?: string;

  /**
   * <p>This parameter is no longer used. Instead, specify a server launch path using the <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch path and launch parameters instead of a run-time configuration will continue to work.)</p>
   */
  ServerLaunchPath?: string;

  /**
   * <p>This parameter is no longer used. Instead, specify server launch parameters in the <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch path and launch parameters instead of a run-time configuration will continue to work.)</p>
   */
  ServerLaunchParameters?: string;

  /**
   * <p>This parameter is no longer used. Instead, to specify where Amazon GameLift should store log files once a server process shuts down, use the Amazon GameLift server API <code>ProcessReady()</code> and specify one or more directory paths in <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. </p>
   */
  LogPaths?: Array<string> | Iterable<string>;

  /**
   * <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a> for detailed descriptions.</p>
   */
  EC2InstanceType:
    | "t2.micro"
    | "t2.small"
    | "t2.medium"
    | "t2.large"
    | "c3.large"
    | "c3.xlarge"
    | "c3.2xlarge"
    | "c3.4xlarge"
    | "c3.8xlarge"
    | "c4.large"
    | "c4.xlarge"
    | "c4.2xlarge"
    | "c4.4xlarge"
    | "c4.8xlarge"
    | "r3.large"
    | "r3.xlarge"
    | "r3.2xlarge"
    | "r3.4xlarge"
    | "r3.8xlarge"
    | "r4.large"
    | "r4.xlarge"
    | "r4.2xlarge"
    | "r4.4xlarge"
    | "r4.8xlarge"
    | "r4.16xlarge"
    | "m3.medium"
    | "m3.large"
    | "m3.xlarge"
    | "m3.2xlarge"
    | "m4.large"
    | "m4.xlarge"
    | "m4.2xlarge"
    | "m4.4xlarge"
    | "m4.10xlarge"
    | string;

  /**
   * <p>Range of IP addresses and port settings that permit inbound traffic to access game sessions that running on the fleet. For fleets using a custom game build, this parameter is required before game sessions running on the fleet can accept connections. For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges for use by the Realtime servers. You can specify multiple permission settings or add more by updating the fleet.</p>
   */
  EC2InboundPermissions?: Array<_IpPermission> | Iterable<_IpPermission>;

  /**
   * <p>Game session protection policy to apply to all instances in this fleet. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy using <a>UpdateFleetAttributes</a>, but this change will only affect sessions created after the policy change. You can also set protection for individual instances using <a>UpdateGameSession</a>.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>
   */
  NewGameSessionProtectionPolicy?: "NoProtection" | "FullProtection" | string;

  /**
   * <p>Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime Servers script. The run-time configuration lists the types of server processes to run on an instance and includes the following configuration settings: the server executable or launch script file, launch parameters, and the number of processes to run concurrently on each instance. A CreateFleet request must include a run-time configuration with at least one server process configuration.</p>
   */
  RuntimeConfiguration?: _RuntimeConfiguration;

  /**
   * <p>Policy that limits the number of game sessions an individual player can create over a span of time for this fleet.</p>
   */
  ResourceCreationLimitPolicy?: _ResourceCreationLimitPolicy;

  /**
   * <p>Name of an Amazon CloudWatch metric group to add this fleet to. A metric group aggregates the metrics for all fleets in the group. Specify an existing metric group name, or provide a new name to create a new metric group. A fleet can only be included in one metric group at a time. </p>
   */
  MetricGroups?: Array<string> | Iterable<string>;

  /**
   * <p>Unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account settings. </p>
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>. </p>
   */
  PeerVpcId?: string;

  /**
   * <p>Indicates whether to use on-demand instances or spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. </p>
   */
  FleetType?: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>Unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, daemons (background processes). Create a role or look up a role's ARN using the <a href="https://console.aws.amazon.com/iam/">IAM dashboard</a> in the AWS Management Console. Learn more about using on-box credentials for your game servers at <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html"> Access external resources from a game server</a>.</p>
   */
  InstanceRoleArn?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
