import {
  _InstanceGroupDetail,
  _UnmarshalledInstanceGroupDetail
} from "./_InstanceGroupDetail";
import { _PlacementType, _UnmarshalledPlacementType } from "./_PlacementType";

/**
 * <p>Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.</p>
 */
export interface _JobFlowInstancesDetail {
  /**
   * <p>The Amazon EC2 master node instance type.</p>
   */
  MasterInstanceType: string;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>The Amazon EC2 instance identifier of the master node.</p>
   */
  MasterInstanceId?: string;

  /**
   * <p>The Amazon EC2 core and task node instance type.</p>
   */
  SlaveInstanceType: string;

  /**
   * <p>The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance serves as both the master and core and task node. If the value is greater than 1, one instance is the master node and all others are core and task nodes.</p>
   */
  InstanceCount: number;

  /**
   * <p>Details about the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<_InstanceGroupDetail> | Iterable<_InstanceGroupDetail>;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour that an m1.small runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The name of an Amazon EC2 key pair that can be used to ssh to the master node.</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the subnet where the cluster was launched.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>The Amazon EC2 Availability Zone for the cluster.</p>
   */
  Placement?: _PlacementType;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>Specifies whether the Amazon EC2 instances in the cluster are protected from termination by API calls, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>The Hadoop version for the cluster.</p>
   */
  HadoopVersion?: string;
}

export interface _UnmarshalledJobFlowInstancesDetail
  extends _JobFlowInstancesDetail {
  /**
   * <p>Details about the instance groups in a cluster.</p>
   */
  InstanceGroups?: Array<_UnmarshalledInstanceGroupDetail>;

  /**
   * <p>The Amazon EC2 Availability Zone for the cluster.</p>
   */
  Placement?: _UnmarshalledPlacementType;
}
