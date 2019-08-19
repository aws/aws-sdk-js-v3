import {
  _ComputeCapacityStatus,
  _UnmarshalledComputeCapacityStatus
} from "./_ComputeCapacityStatus";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";
import { _FleetError, _UnmarshalledFleetError } from "./_FleetError";
import {
  _DomainJoinInfo,
  _UnmarshalledDomainJoinInfo
} from "./_DomainJoinInfo";

/**
 * <p>Describes a fleet.</p>
 */
export interface _Fleet {
  /**
   * <p>The ARN for the fleet.</p>
   */
  Arn: string;

  /**
   * <p>The name of the fleet.</p>
   */
  Name: string;

  /**
   * <p>The fleet name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The description to display.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image used to create the fleet.</p>
   */
  ImageName?: string;

  /**
   * <p>The ARN for the public, private, or shared image.</p>
   */
  ImageArn?: string;

  /**
   * <p>The instance type to use when launching fleet instances.</p>
   */
  InstanceType: string;

  /**
   * <p>The fleet type.</p> <dl> <dt>ALWAYS_ON</dt> <dd> <p>Provides users with instant-on access to their apps. You are charged for all running instances in your fleet, even if no users are streaming apps.</p> </dd> <dt>ON_DEMAND</dt> <dd> <p>Provide users with access to applications after they connect, which takes one to two minutes. You are charged for instance streaming when users are connected and a small hourly fee for instances that are not streaming apps.</p> </dd> </dl>
   */
  FleetType?: "ALWAYS_ON" | "ON_DEMAND" | string;

  /**
   * <p>The capacity status for the fleet.</p>
   */
  ComputeCapacityStatus: _ComputeCapacityStatus;

  /**
   * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. </p> <p>Specify a value between 600 and 360000.</p>
   */
  MaxUserDurationInSeconds?: number;

  /**
   * <p>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.</p> <p>Specify a value between 60 and 360000.</p>
   */
  DisconnectTimeoutInSeconds?: number;

  /**
   * <p>The current state for the fleet.</p>
   */
  State: "STARTING" | "RUNNING" | "STOPPING" | "STOPPED" | string;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>The time the fleet was created.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The fleet errors.</p>
   */
  FleetErrors?: Array<_FleetError> | Iterable<_FleetError>;

  /**
   * <p>Indicates whether default internet access is enabled for the fleet.</p>
   */
  EnableDefaultInternetAccess?: boolean;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: _DomainJoinInfo;

  /**
   * <p>The amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time interval begins. Users are notified before they are disconnected due to inactivity. If users try to reconnect to the streaming session before the time interval specified in <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their previous session. Users are considered idle when they stop providing keyboard or mouse input during their streaming session. File uploads and downloads, audio in, audio out, and pixels changing do not qualify as user activity. If users continue to be idle after the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are disconnected.</p> <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p> <note> <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p> </note>
   */
  IdleDisconnectTimeoutInSeconds?: number;
}

export interface _UnmarshalledFleet extends _Fleet {
  /**
   * <p>The capacity status for the fleet.</p>
   */
  ComputeCapacityStatus: _UnmarshalledComputeCapacityStatus;

  /**
   * <p>The VPC configuration for the fleet.</p>
   */
  VpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>The time the fleet was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The fleet errors.</p>
   */
  FleetErrors?: Array<_UnmarshalledFleetError>;

  /**
   * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
   */
  DomainJoinInfo?: _UnmarshalledDomainJoinInfo;
}
