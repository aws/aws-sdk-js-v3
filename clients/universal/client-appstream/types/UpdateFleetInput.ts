import { _ComputeCapacity } from "./_ComputeCapacity";
import { _VpcConfig } from "./_VpcConfig";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFleetInput shape
 */
export interface UpdateFleetInput {
  /**
   * <p>The name of the image used to create the fleet.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN of the public, private, or shared image to use.</p>
   */
  ImageArn?: string;

  /**
   * <p>A unique name for the fleet.</p>
   */
  Name?: string;

  /**
   * <p>The instance type to use when launching fleet instances. The following instance types are available:</p> <ul> <li> <p>stream.standard.medium</p> </li> <li> <p>stream.standard.large</p> </li> <li> <p>stream.compute.large</p> </li> <li> <p>stream.compute.xlarge</p> </li> <li> <p>stream.compute.2xlarge</p> </li> <li> <p>stream.compute.4xlarge</p> </li> <li> <p>stream.compute.8xlarge</p> </li> <li> <p>stream.memory.large</p> </li> <li> <p>stream.memory.xlarge</p> </li> <li> <p>stream.memory.2xlarge</p> </li> <li> <p>stream.memory.4xlarge</p> </li> <li> <p>stream.memory.8xlarge</p> </li> <li> <p>stream.graphics-design.large</p> </li> <li> <p>stream.graphics-design.xlarge</p> </li> <li> <p>stream.graphics-design.2xlarge</p> </li> <li> <p>stream.graphics-design.4xlarge</p> </li> <li> <p>stream.graphics-desktop.2xlarge</p> </li> <li> <p>stream.graphics-pro.4xlarge</p> </li> <li> <p>stream.graphics-pro.8xlarge</p> </li> <li> <p>stream.graphics-pro.16xlarge</p> </li> </ul>
   */
  InstanceType?: string;

  /**
   * <p>The desired capacity for the fleet.</p>
   */
  ComputeCapacity?: _ComputeCapacity;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p> <p>Specify a value between 600 and 360000.</p>
   */
  MaxUserDurationInSeconds?: number;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p> <p>Specify a value between 60 and 360000.</p>
   */
  DisconnectTimeoutInSeconds?: number;

  /**
   * <p>Deletes the VPC association for the specified fleet.</p>
   */
  DeleteVpcConfig?: boolean;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>Enables or disables default internet access for the fleet.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: _DomainJoinInfo;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are disconnected. </p> <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p> <note> <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p> </note>
   */
  IdleDisconnectTimeoutInSeconds?: number;

  /**
   * <p>The fleet attributes to delete.</p>
   */
  AttributesToDelete?:
    | Array<
        | "VPC_CONFIGURATION"
        | "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
        | "DOMAIN_JOIN_INFO"
        | string
      >
    | Iterable<
        | "VPC_CONFIGURATION"
        | "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
        | "DOMAIN_JOIN_INFO"
        | string
      >;

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
