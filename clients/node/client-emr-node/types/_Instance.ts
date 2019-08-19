import {
  _InstanceStatus,
  _UnmarshalledInstanceStatus
} from "./_InstanceStatus";
import { _EbsVolume, _UnmarshalledEbsVolume } from "./_EbsVolume";

/**
 * <p>Represents an EC2 instance provisioned as part of cluster.</p>
 */
export interface _Instance {
  /**
   * <p>The unique identifier for the instance in Amazon EMR.</p>
   */
  Id?: string;

  /**
   * <p>The unique identifier of the instance in Amazon EC2.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The public DNS name of the instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address of the instance.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The private DNS name of the instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The current status of the instance.</p>
   */
  Status?: _InstanceStatus;

  /**
   * <p>The identifier of the instance group to which this instance belongs.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The unique identifier of the instance fleet to which an EC2 instance belongs.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The instance purchasing option. Valid values are <code>ON_DEMAND</code> or <code>SPOT</code>. </p>
   */
  Market?: "ON_DEMAND" | "SPOT" | string;

  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The list of EBS volumes that are attached to this instance.</p>
   */
  EbsVolumes?: Array<_EbsVolume> | Iterable<_EbsVolume>;
}

export interface _UnmarshalledInstance extends _Instance {
  /**
   * <p>The current status of the instance.</p>
   */
  Status?: _UnmarshalledInstanceStatus;

  /**
   * <p>The list of EBS volumes that are attached to this instance.</p>
   */
  EbsVolumes?: Array<_UnmarshalledEbsVolume>;
}
