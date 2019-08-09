import { _StorageInfo, _UnmarshalledStorageInfo } from "./_StorageInfo";

/**
 *
 *             <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
 *
 */
export interface _BrokerNodeGroupInfo {
  /**
   *
   *             <p>The distribution of broker nodes across Availability Zones.</p>
   *
   */
  BrokerAZDistribution?: "DEFAULT" | string;

  /**
   *
   *             <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.</p>
   *
   */
  ClientSubnets: Array<string> | Iterable<string>;

  /**
   *
   *             <p>The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
   * kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>
   *
   */
  InstanceType: string;

  /**
   *
   *             <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   *
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   *
   *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   *
   */
  StorageInfo?: _StorageInfo;
}

export interface _UnmarshalledBrokerNodeGroupInfo extends _BrokerNodeGroupInfo {
  /**
   *
   *             <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.</p>
   *
   */
  ClientSubnets: Array<string>;

  /**
   *
   *             <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   *
   */
  SecurityGroups?: Array<string>;

  /**
   *
   *             <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   *
   */
  StorageInfo?: _UnmarshalledStorageInfo;
}
