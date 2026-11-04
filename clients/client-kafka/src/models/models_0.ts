// smithy-typescript generated code
import type {
  BrokerAZDistribution,
  ChannelDestinationType,
  ChannelStatus,
  ClientBroker,
  ClusterState,
  ClusterType,
  ConfigurationState,
  ConsumerGroupOffsetSyncMode,
  CustomerActionStatus,
  EnhancedMonitoring,
  IcebergCompressionType,
  JwtSigningAlgorithm,
  KafkaClusterEncryptionInTransitType,
  KafkaClusterSaslScramMechanism,
  KafkaVersionStatus,
  NetworkType,
  NodeType,
  PartitionStrategy,
  RebalancingStatus,
  ReplicationStartingPositionType,
  ReplicationTopicNameConfigurationType,
  ReplicatorState,
  S3CompressionType,
  S3StorageClass,
  StorageMode,
  TargetCompressionType,
  TokenEndpointAuthenticationMethod,
  TopicState,
  UserIdentityType,
  ValueConverter,
  VpcConnectionState,
} from "./enums";

/**
 * Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.
 *
 * @public
 */
export interface ProvisionedThroughput {
  /**
   * Provisioned throughput is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.
   *
   * @public
   */
  VolumeThroughput?: number | undefined;
}

/**
 * Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.
 *
 * @public
 */
export interface BrokerEBSVolumeInfo {
  /**
   * The ID of the broker to update.
   *
   * @public
   */
  KafkaBrokerNodeId: string | undefined;

  /**
   * EBS volume provisioned throughput information.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * Size of the EBS volume to update.
   *
   * @public
   */
  VolumeSizeGB?: number | undefined;
}

/**
 * Summary information about a channel returned by ListChannels.
 *
 * @public
 */
export interface ChannelInfo {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The current lifecycle state of the channel.
   *
   * @public
   */
  Status: ChannelStatus | undefined;

  /**
   * The time when the channel was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The type of destination configured for the channel.
   *
   * @public
   */
  DestinationType: ChannelDestinationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the in-flight cluster operation. Returned only while the channel is in CREATING, UPDATING, or DELETING.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * The client VPC connection object.
 *
 * @public
 */
export interface ClientVpcConnection {
  /**
   * Information about the auth scheme of Vpc Connection.
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * Creation time of the Vpc Connection.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * State of the Vpc Connection.
   *
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * The ARN that identifies the Vpc Connection.
   *
   * @public
   */
  VpcConnectionArn: string | undefined;

  /**
   * The Owner of the Vpc Connection.
   *
   * @public
   */
  Owner?: string | undefined;
}

/**
 * Public access control for brokers.
 * @public
 */
export interface PublicAccess {
  /**
   * The value DISABLED indicates that public access is turned off. SERVICE_PROVIDED_EIPS indicates that public access is turned on.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * Details for IAM access control for VPC connectivity.
 *
 * @public
 */
export interface VpcConnectivityIam {
  /**
   * SASL/IAM authentication is on or off for VPC connectivity.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Details for SASL/SCRAM client authentication for VPC connectivity.
 *
 * @public
 */
export interface VpcConnectivityScram {
  /**
   * SASL/SCRAM authentication is on or off for VPC connectivity.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Details for SASL client authentication for VPC connectivity.
 *
 * @public
 */
export interface VpcConnectivitySasl {
  /**
   * Details for SASL/SCRAM client authentication for VPC connectivity.
   *
   * @public
   */
  Scram?: VpcConnectivityScram | undefined;

  /**
   * Details for SASL/IAM client authentication for VPC connectivity.
   *
   * @public
   */
  Iam?: VpcConnectivityIam | undefined;
}

/**
 * Details for TLS client authentication for VPC connectivity.
 *
 * @public
 */
export interface VpcConnectivityTls {
  /**
   * TLS authentication is on or off for VPC connectivity.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Includes all client authentication information for VPC connectivity.
 *
 * @public
 */
export interface VpcConnectivityClientAuthentication {
  /**
   * SASL authentication type details for VPC connectivity.
   *
   * @public
   */
  Sasl?: VpcConnectivitySasl | undefined;

  /**
   * TLS authentication type details for VPC connectivity.
   *
   * @public
   */
  Tls?: VpcConnectivityTls | undefined;
}

/**
 * VPC connectivity access control for brokers.
 * @public
 */
export interface VpcConnectivity {
  /**
   * Includes all client authentication information for VPC connectivity.
   *
   * @public
   */
  ClientAuthentication?: VpcConnectivityClientAuthentication | undefined;
}

/**
 * Information about the broker access configuration.
 *
 * @public
 */
export interface ConnectivityInfo {
  /**
   * Public access control for brokers.
   *
   * @public
   */
  PublicAccess?: PublicAccess | undefined;

  /**
   * VPC connectivity access control for brokers.
   *
   * @public
   */
  VpcConnectivity?: VpcConnectivity | undefined;

  /**
   * The network type of the cluster, which is IPv4 or DUAL. The DUAL network type uses both IPv4 and IPv6 addresses for your cluster and its resources.
   *
   * By default, a cluster uses the IPv4 network type.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.
 *
 * @public
 */
export interface EBSStorageInfo {
  /**
   * EBS volume provisioned throughput information.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * The size in GiB of the EBS volume for the data drive on each broker node.
   *
   * @public
   */
  VolumeSize?: number | undefined;
}

/**
 * Contains information about storage volumes attached to MSK broker nodes.
 *
 * @public
 */
export interface StorageInfo {
  /**
   * EBS volume information.
   *
   * @public
   */
  EbsStorageInfo?: EBSStorageInfo | undefined;
}

/**
 * Describes the setup to be used for Apache Kafka broker nodes in the cluster.
 *
 * @public
 */
export interface BrokerNodeGroupInfo {
  /**
   * The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.
   *
   * Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.
   *
   * @public
   */
  BrokerAZDistribution?: BrokerAZDistribution | undefined;

  /**
   * The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.
   *
   * @public
   */
  ClientSubnets: string[] | undefined;

  /**
   * The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Contains information about storage volumes attached to MSK broker nodes.
   *
   * @public
   */
  StorageInfo?: StorageInfo | undefined;

  /**
   * Information about the broker access configuration.
   *
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo | undefined;

  /**
   * The list of zoneIds for the cluster in the virtual private cloud (VPC).
   *
   * @public
   */
  ZoneIds?: string[] | undefined;
}

/**
 * Details for IAM access control.
 *
 * @public
 */
export interface Iam {
  /**
   * Indicates whether IAM access control is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Details for SASL/SCRAM client authentication.
 *
 * @public
 */
export interface Scram {
  /**
   * SASL/SCRAM authentication is enabled or not.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Details for client authentication using SASL.
 *
 * @public
 */
export interface Sasl {
  /**
   * Details for SASL/SCRAM client authentication.
   *
   * @public
   */
  Scram?: Scram | undefined;

  /**
   * Indicates whether IAM access control is enabled.
   *
   * @public
   */
  Iam?: Iam | undefined;
}

/**
 * Details for client authentication using TLS.
 *
 * @public
 */
export interface Tls {
  /**
   * List of ACM Certificate Authority ARNs.
   *
   * @public
   */
  CertificateAuthorityArnList?: string[] | undefined;

  /**
   * Specifies whether you want to turn on or turn off TLS authentication.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface Unauthenticated {
  /**
   * Specifies whether you want to turn on or turn off unauthenticated traffic to your cluster.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Includes all client authentication information.
 *
 * @public
 */
export interface ClientAuthentication {
  /**
   * Details for ClientAuthentication using SASL.
   *
   * @public
   */
  Sasl?: Sasl | undefined;

  /**
   * Details for ClientAuthentication using TLS.
   *
   * @public
   */
  Tls?: Tls | undefined;

  /**
   * Contains information about unauthenticated traffic to the cluster.
   *
   * @public
   */
  Unauthenticated?: Unauthenticated | undefined;
}

/**
 * Information about the current software installed on the cluster.
 *
 * @public
 */
export interface BrokerSoftwareInfo {
  /**
   * The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.
   *
   * @public
   */
  ConfigurationArn?: string | undefined;

  /**
   * The revision of the configuration to use. This field isn't visible in this preview release.
   *
   * @public
   */
  ConfigurationRevision?: number | undefined;

  /**
   * The version of Apache Kafka.
   *
   * @public
   */
  KafkaVersion?: string | undefined;
}

/**
 * The data-volume encryption details.
 *
 * @public
 */
export interface EncryptionAtRest {
  /**
   * The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.
   *
   * @public
   */
  DataVolumeKMSKeyId: string | undefined;
}

/**
 * The settings for encrypting data in transit.
 *
 * @public
 */
export interface EncryptionInTransit {
  /**
   * Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.
   *
   * TLS means that client-broker communication is enabled with TLS only.
   *
   * TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.
   *
   * PLAINTEXT means that client-broker communication is enabled in plaintext only.
   *
   * The default value is TLS_PLAINTEXT.
   *
   * @public
   */
  ClientBroker?: ClientBroker | undefined;

  /**
   * When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.
   *
   * The default value is true.
   *
   * @public
   */
  InCluster?: boolean | undefined;
}

/**
 * Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
 *
 * @public
 */
export interface EncryptionInfo {
  /**
   * The data-volume encryption details.
   *
   * @public
   */
  EncryptionAtRest?: EncryptionAtRest | undefined;

  /**
   * The details for encryption in transit.
   *
   * @public
   */
  EncryptionInTransit?: EncryptionInTransit | undefined;
}

/**
 * @public
 */
export interface CloudWatchLogs {
  Enabled: boolean | undefined;
  LogGroup?: string | undefined;
}

/**
 * @public
 */
export interface Firehose {
  DeliveryStream?: string | undefined;
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface S3 {
  Bucket?: string | undefined;
  Enabled: boolean | undefined;
  Prefix?: string | undefined;
}

/**
 * The authorizer logs configuration for this MSK cluster.
 *
 * @public
 */
export interface AuthorizerLogs {
  /**
   * Details of the CloudWatch Logs destination for authorizer logs.
   *
   * @public
   */
  CloudWatchLogs?: CloudWatchLogs | undefined;

  /**
   * Details of the Kinesis Data Firehose delivery stream that is the destination for authorizer logs.
   *
   * @public
   */
  Firehose?: Firehose | undefined;

  /**
   * Details of the Amazon S3 destination for authorizer logs.
   *
   * @public
   */
  S3?: S3 | undefined;
}

/**
 * @public
 */
export interface BrokerLogs {
  CloudWatchLogs?: CloudWatchLogs | undefined;
  Firehose?: Firehose | undefined;
  S3?: S3 | undefined;
}

/**
 * @public
 */
export interface LoggingInfo {
  /**
   * You can configure your MSK cluster to send authorizer logs to different destination types.
   *
   * @public
   */
  AuthorizerLogs?: AuthorizerLogs | undefined;

  BrokerLogs: BrokerLogs | undefined;
}

/**
 * Indicates whether you want to turn on or turn off the JMX Exporter.
 *
 * @public
 */
export interface JmxExporterInfo {
  /**
   * Indicates whether you want to turn on or turn off the JMX Exporter.
   *
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * Indicates whether you want to turn on or turn off the Node Exporter.
 *
 * @public
 */
export interface NodeExporterInfo {
  /**
   * Indicates whether you want to turn on or turn off the Node Exporter.
   *
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * Prometheus settings.
 *
 * @public
 */
export interface PrometheusInfo {
  /**
   * Indicates whether you want to turn on or turn off the JMX Exporter.
   *
   * @public
   */
  JmxExporter?: JmxExporterInfo | undefined;

  /**
   * Indicates whether you want to turn on or turn off the Node Exporter.
   *
   * @public
   */
  NodeExporter?: NodeExporterInfo | undefined;
}

/**
 * JMX and Node monitoring for the MSK cluster.
 *
 * @public
 */
export interface OpenMonitoringInfo {
  /**
   * Prometheus settings.
   *
   * @public
   */
  Prometheus: PrometheusInfo | undefined;
}

/**
 * Specifies whether or not intelligent rebalancing is turned on for a newly created MSK Provisioned cluster with Express brokers. Intelligent rebalancing performs automatic partition balancing operations when you scale your clusters up or down. By default, intelligent rebalancing is ACTIVE for all new Express-based clusters.
 *
 * @public
 */
export interface Rebalancing {
  /**
   * Intelligent rebalancing status. The default intelligent rebalancing status is ACTIVE for all new Express-based clusters.
   *
   * @public
   */
  Status?: RebalancingStatus | undefined;
}

/**
 * Provisioned cluster.
 *
 * @public
 */
export interface Provisioned {
  /**
   * Information about the brokers.
   *
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * Specifies whether or not intelligent rebalancing is turned on for a newly created MSK Provisioned cluster with Express brokers. Intelligent rebalancing performs automatic partition balancing operations when you scale your clusters up or down. By default, intelligent rebalancing is ACTIVE for all new Express-based clusters.
   *
   * @public
   */
  Rebalancing?: Rebalancing | undefined;

  /**
   * Information about the Apache Kafka version deployed on the brokers.
   *
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * The settings for open monitoring.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * Log delivery information for the cluster.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * The connection string to use to connect to the Apache ZooKeeper cluster.
   *
   * @public
   */
  ZookeeperConnectString?: string | undefined;

  /**
   * The connection string to use to connect to the Apache ZooKeeper cluster on a TLS port.
   *
   * @public
   */
  ZookeeperConnectStringTls?: string | undefined;

  /**
   * This controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * Determines if there is an action required from the customer.
   *
   * @public
   */
  CustomerActionStatus?: CustomerActionStatus | undefined;
}

/**
 * Details for client authentication using SASL.
 *
 * @public
 */
export interface ServerlessSasl {
  /**
   * Indicates whether IAM access control is enabled.
   *
   * @public
   */
  Iam?: Iam | undefined;
}

/**
 * Includes all client authentication information.
 *
 * @public
 */
export interface ServerlessClientAuthentication {
  /**
   * Details for ClientAuthentication using SASL.
   *
   * @public
   */
  Sasl?: ServerlessSasl | undefined;
}

/**
 * Describes the cluster's connectivity information, such as its network type, which is IPv4 or DUAL.
 *
 * @public
 */
export interface ServerlessConnectivityInfo {
  /**
   * The network type of the cluster, which is IPv4 or DUAL. The DUAL network type uses both IPv4 and IPv6 addresses for your cluster and its resources.
   *
   * By default, a cluster uses the IPv4 network type.
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * The configuration of the Amazon VPCs for the cluster.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The IDs of the subnets associated with the cluster.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The IDs of the security groups associated with the cluster.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * Serverless cluster.
 *
 * @public
 */
export interface Serverless {
  /**
   * The configuration of the Amazon VPCs for the cluster.
   *
   * @public
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ServerlessClientAuthentication | undefined;

  /**
   * Describes the cluster's connectivity information, such as its network type, which is IPv4 or DUAL.
   *
   * @public
   */
  ConnectivityInfo?: ServerlessConnectivityInfo | undefined;
}

/**
 * @public
 */
export interface StateInfo {
  Code?: string | undefined;
  Message?: string | undefined;
}

/**
 * Returns information about a cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.
   *
   * @public
   */
  ActiveOperationArn?: string | undefined;

  /**
   * Cluster Type.
   *
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The time when the cluster was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The current version of the MSK cluster.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.
   *
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * State Info for the Amazon MSK cluster.
   *
   * @public
   */
  StateInfo?: StateInfo | undefined;

  /**
   * Tags attached to the cluster.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Information about the provisioned cluster.
   *
   * @public
   */
  Provisioned?: Provisioned | undefined;

  /**
   * Information about the serverless cluster.
   *
   * @public
   */
  Serverless?: Serverless | undefined;
}

/**
 * Indicates whether you want to turn on or turn off the JMX Exporter.
 *
 * @public
 */
export interface JmxExporter {
  /**
   * Indicates whether you want to turn on or turn off the JMX Exporter.
   *
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * Indicates whether you want to turn on or turn off the Node Exporter.
 *
 * @public
 */
export interface NodeExporter {
  /**
   * Indicates whether you want to turn on or turn off the Node Exporter.
   *
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * Prometheus settings.
 *
 * @public
 */
export interface Prometheus {
  /**
   * Indicates whether you want to turn on or turn off the JMX Exporter.
   *
   * @public
   */
  JmxExporter?: JmxExporter | undefined;

  /**
   * Indicates whether you want to turn on or turn off the Node Exporter.
   *
   * @public
   */
  NodeExporter?: NodeExporter | undefined;
}

/**
 * JMX and Node monitoring for the MSK cluster.
 *
 * @public
 */
export interface OpenMonitoring {
  /**
   * Prometheus settings.
   *
   * @public
   */
  Prometheus: Prometheus | undefined;
}

/**
 * Returns information about a cluster.
 *
 * @public
 */
export interface ClusterInfo {
  /**
   * Arn of active cluster operation.
   *
   * @public
   */
  ActiveOperationArn?: string | undefined;

  /**
   * Information about the broker nodes.
   *
   * @public
   */
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo | undefined;

  /**
   * Contains information about intelligent rebalancing for new MSK Provisioned clusters with Express brokers. By default, intelligent rebalancing status is ACTIVE.
   *
   * @public
   */
  Rebalancing?: Rebalancing | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The time when the cluster was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.
   *
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * The current version of the MSK cluster.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see [Monitoring](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html).
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * Settings for open monitoring using Prometheus.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoring | undefined;

  LoggingInfo?: LoggingInfo | undefined;
  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.
   *
   * @public
   */
  State?: ClusterState | undefined;

  StateInfo?: StateInfo | undefined;
  /**
   * Tags attached to the cluster.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The connection string to use to connect to the Apache ZooKeeper cluster.
   *
   * @public
   */
  ZookeeperConnectString?: string | undefined;

  /**
   * The connection string to use to connect to zookeeper cluster on Tls port.
   *
   * @public
   */
  ZookeeperConnectStringTls?: string | undefined;

  /**
   * This controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * Determines if there is an action required from the customer.
   *
   * @public
   */
  CustomerActionStatus?: CustomerActionStatus | undefined;
}

/**
 * Returns information about an error state of the cluster.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * A number describing the error programmatically.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * An optional field to provide more details about the error.
   *
   * @public
   */
  ErrorString?: string | undefined;
}

/**
 * State information about the operation step.
 *
 * @public
 */
export interface ClusterOperationStepInfo {
  /**
   * The steps current status.
   *
   * @public
   */
  StepStatus?: string | undefined;
}

/**
 * Step taken during a cluster operation.
 *
 * @public
 */
export interface ClusterOperationStep {
  /**
   * Information about the step and its status.
   *
   * @public
   */
  StepInfo?: ClusterOperationStepInfo | undefined;

  /**
   * The name of the step.
   *
   * @public
   */
  StepName?: string | undefined;
}

/**
 * Information regarding UpdateBrokerCount.
 *
 * @public
 */
export interface BrokerCountUpdateInfo {
  /**
   * Kafka Broker IDs of brokers being created.
   *
   * @public
   */
  CreatedBrokerIds?: number[] | undefined;

  /**
   * Kafka Broker IDs of brokers being deleted.
   *
   * @public
   */
  DeletedBrokerIds?: number[] | undefined;
}

/**
 * Specifies the configuration to use for the brokers.
 *
 * @public
 */
export interface ConfigurationInfo {
  /**
   * ARN of the configuration to use.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The revision of the configuration to use.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * Access control settings for zookeeper
 *
 * @public
 */
export interface ZookeeperAccess {
  /**
   * Zookeeper Access was on or off for the cluster
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Information about cluster attributes that can be updated via update APIs.
 *
 * @public
 */
export interface MutableClusterInfo {
  /**
   * Specifies the size of the EBS volume and the ID of the associated broker.
   *
   * @public
   */
  BrokerEBSVolumeInfo?: BrokerEBSVolumeInfo[] | undefined;

  /**
   * Information about the changes in the configuration of the brokers.
   *
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * The settings for open monitoring.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoring | undefined;

  /**
   * Access control settings for zookeeper
   *
   * @public
   */
  ZookeeperAccess?: ZookeeperAccess | undefined;

  /**
   * The Apache Kafka version.
   *
   * @public
   */
  KafkaVersion?: string | undefined;

  /**
   * You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * Information about the Amazon MSK broker type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * Information about the broker access configuration.
   *
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo | undefined;

  /**
   * This controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * Describes brokers being changed during a broker count update.
   *
   * @public
   */
  BrokerCountUpdateInfo?: BrokerCountUpdateInfo | undefined;

  /**
   * Describes the intelligent rebalancing configuration of an MSK Provisioned cluster with Express brokers.
   *
   * @public
   */
  Rebalancing?: Rebalancing | undefined;
}

/**
 * Description of the requester that calls the API operation.
 *
 * @public
 */
export interface UserIdentity {
  /**
   * The identity type of the requester that calls the API operation.
   *
   * @public
   */
  Type?: UserIdentityType | undefined;

  /**
   * A unique identifier for the requester that calls the API operation.
   *
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * Description of the VPC connection.
 *
 * @public
 */
export interface VpcConnectionInfo {
  /**
   * The Amazon Resource Name (ARN) of the VPC connection.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * The owner of the VPC Connection.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * Description of the requester that calls the API operation.
   *
   * @public
   */
  UserIdentity?: UserIdentity | undefined;

  /**
   * The time when Amazon MSK creates the VPC Connnection.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * Returns information about a cluster operation.
 *
 * @public
 */
export interface ClusterOperationInfo {
  /**
   * The ID of the API request that triggered this operation.
   *
   * @public
   */
  ClientRequestId?: string | undefined;

  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The time that the operation was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time at which the operation finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Describes the error if the operation fails.
   *
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * ARN of the cluster operation.
   *
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * State of the cluster operation.
   *
   * @public
   */
  OperationState?: string | undefined;

  /**
   * Steps completed during the operation.
   *
   * @public
   */
  OperationSteps?: ClusterOperationStep[] | undefined;

  /**
   * Type of the cluster operation.
   *
   * @public
   */
  OperationType?: string | undefined;

  /**
   * Information about cluster attributes before a cluster is updated.
   *
   * @public
   */
  SourceClusterInfo?: MutableClusterInfo | undefined;

  /**
   * Information about cluster attributes after a cluster is updated.
   *
   * @public
   */
  TargetClusterInfo?: MutableClusterInfo | undefined;

  /**
   * Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.
   *
   * @public
   */
  VpcConnectionInfo?: VpcConnectionInfo | undefined;
}

/**
 * Returns information about a cluster operation.
 *
 * @public
 */
export interface ClusterOperationV2Summary {
  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Type of the backend cluster.
   *
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The time at which operation was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the operation finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * ARN of the cluster operation.
   *
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * State of the cluster operation.
   *
   * @public
   */
  OperationState?: string | undefined;

  /**
   * Type of the cluster operation.
   *
   * @public
   */
  OperationType?: string | undefined;
}

/**
 * Contains source Apache Kafka versions and compatible target Apache Kafka versions.
 *
 * @public
 */
export interface CompatibleKafkaVersion {
  /**
   * An Apache Kafka version.
   *
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * A list of Apache Kafka versions.
   *
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * Describes a configuration revision.
 *
 * @public
 */
export interface ConfigurationRevision {
  /**
   * The time when the configuration revision was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The description of the configuration revision.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The revision number.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * Represents an MSK Configuration.
 *
 * @public
 */
export interface Configuration {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The time when the configuration was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.
   *
   * @public
   */
  KafkaVersions: string[] | undefined;

  /**
   * Latest revision of the configuration.
   *
   * @public
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED.
   *
   * @public
   */
  State: ConfigurationState | undefined;
}

/**
 * A source column used by an Apache Iceberg destination table's partition specification.
 *
 * @public
 */
export interface PartitionSource {
  /**
   * Source name.
   *
   * @public
   */
  SourceName?: string | undefined;
}

/**
 * Partition specification for an Apache Iceberg destination table.
 *
 * @public
 */
export interface PartitionSpec {
  /**
   * The partitioning strategy applied to records written to the table.
   *
   * @public
   */
  PartitionStrategy: PartitionStrategy | undefined;

  /**
   * The source columns used by the partitioning strategy. For TIME_HOUR, must contain exactly one source column whose value is a timestamp.
   *
   * @public
   */
  SourceList?: PartitionSource[] | undefined;
}

/**
 * Configuration of an Apache Iceberg destination table.
 *
 * @public
 */
export interface DestinationTable {
  /**
   * The name of the destination namespace (database) in the AWS Glue Data Catalog.
   *
   * @public
   */
  DestinationDatabaseName?: string | undefined;

  /**
   * The name of the destination Apache Iceberg table.
   *
   * @public
   */
  DestinationTableName?: string | undefined;

  /**
   * The partition specification for the destination table.
   *
   * @public
   */
  PartitionSpec?: PartitionSpec | undefined;
}

/**
 * Details of an Amazon MSK Cluster.
 *
 * @public
 */
export interface AmazonMskCluster {
  /**
   * The Amazon Resource Name (ARN) of an Amazon MSK cluster.
   *
   * @public
   */
  MskClusterArn: string | undefined;
}

/**
 * Details of an Apache Kafka Cluster.
 *
 * @public
 */
export interface ApacheKafkaCluster {
  /**
   * The ID of the Apache Kafka cluster.
   *
   * @public
   */
  ApacheKafkaClusterId: string | undefined;

  /**
   * The bootstrap broker string of the Apache Kafka cluster.
   *
   * @public
   */
  BootstrapBrokerString: string | undefined;
}

/**
 * Details for mTLS client authentication.
 *
 * @public
 */
export interface KafkaClusterMTLSAuthentication {
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * Details for SASL/OAUTHBEARER using standard client_credentials grant.
 *
 * @public
 */
export interface KafkaClusterOAuthClientCredentials {
  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the OAuth client credentials.
   *
   * @public
   */
  TokenRequestSecretArn: string | undefined;
}

/**
 * Details for SASL/OAUTHBEARER using client credentials grant with JWT client assertion.
 *
 * @public
 */
export interface KafkaClusterOAuthClientCredentialsAssertion {
  /**
   * The audience for the JWT client assertion.
   *
   * @public
   */
  Audience: string | undefined;

  /**
   * The signing algorithm for the JWT client assertion.
   *
   * @public
   */
  SigningAlgorithm: JwtSigningAlgorithm | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the signing key.
   *
   * @public
   */
  TokenRequestSecretArn?: string | undefined;
}

/**
 * Details for SASL/OAUTHBEARER using JWT Bearer assertion grant.
 *
 * @public
 */
export interface KafkaClusterOAuthIamJwtBearer {
  /**
   * The audience for the JWT Bearer assertion.
   *
   * @public
   */
  Audience: string | undefined;

  /**
   * The signing algorithm for the JWT Bearer assertion.
   *
   * @public
   */
  SigningAlgorithm: JwtSigningAlgorithm | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the signing key.
   *
   * @public
   */
  TokenRequestSecretArn?: string | undefined;
}

/**
 * Details for SASL/OAUTHBEARER client authentication.
 *
 * @public
 */
export interface KafkaClusterSaslOAuthBearerAuthentication {
  /**
   * The HTTPS URL of the OAuth token endpoint that vends OAuth Bearer tokens per RFC 6749.
   *
   * @public
   */
  TokenEndpointUrl: string | undefined;

  /**
   * Details for SASL/OAUTHBEARER using standard client_credentials grant.
   *
   * @public
   */
  ClientCredentials?: KafkaClusterOAuthClientCredentials | undefined;

  /**
   * Details for SASL/OAUTHBEARER using JWT Bearer assertion grant (RFC 7523).
   *
   * @public
   */
  IamJwtBearer?: KafkaClusterOAuthIamJwtBearer | undefined;

  /**
   * Details for SASL/OAUTHBEARER using client credentials grant with JWT client assertion.
   *
   * @public
   */
  ClientCredentialsAssertion?: KafkaClusterOAuthClientCredentialsAssertion | undefined;

  /**
   * How client credentials are sent to the identity provider. Valid values are POST, BASIC, or NONE.
   *
   * @public
   */
  TokenEndpointAuthenticationMethod: TokenEndpointAuthenticationMethod | undefined;

  /**
   * OAuth scope to request.
   *
   * @public
   */
  Scope?: string | undefined;

  /**
   * Secrets Manager ARN containing a custom CA certificate for the identity provider.
   *
   * @public
   */
  TokenEndpointTlsCertificateArn?: string | undefined;
}

/**
 * Details for SASL/SCRAM client authentication.
 *
 * @public
 */
export interface KafkaClusterSaslScramAuthentication {
  /**
   * The SASL/SCRAM authentication mechanism.
   *
   * @public
   */
  Mechanism: KafkaClusterSaslScramMechanism | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret.
   *
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * Details of the client authentication used by the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterClientAuthentication {
  /**
   * Details for SASL/SCRAM client authentication.
   *
   * @public
   */
  SaslScram?: KafkaClusterSaslScramAuthentication | undefined;

  /**
   * Details for mTLS client authentication.
   *
   * @public
   */
  MTLS?: KafkaClusterMTLSAuthentication | undefined;

  /**
   * Details for SASL/OAUTHBEARER client authentication.
   *
   * @public
   */
  SaslOAuthBearer?: KafkaClusterSaslOAuthBearerAuthentication | undefined;
}

/**
 * Details of encryption in transit to the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterEncryptionInTransit {
  /**
   * The type of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  EncryptionType: KafkaClusterEncryptionInTransitType | undefined;

  /**
   * The root CA certificate.
   *
   * @public
   */
  RootCaCertificate?: string | undefined;
}

/**
 * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterClientVpcConfig {
  /**
   * The security groups to attach to the ENIs for the broker nodes.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The list of subnets in the client VPC to connect to.
   *
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * Information about Kafka Cluster to be used as source / target for replication.
 *
 * @public
 */
export interface KafkaCluster {
  /**
   * Details of an Amazon MSK Cluster.
   *
   * @public
   */
  AmazonMskCluster?: AmazonMskCluster | undefined;

  /**
   * Details of an Apache Kafka Cluster.
   *
   * @public
   */
  ApacheKafkaCluster?: ApacheKafkaCluster | undefined;

  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   *
   * @public
   */
  VpcConfig?: KafkaClusterClientVpcConfig | undefined;

  /**
   * Details of the client authentication used by the Apache Kafka cluster.
   *
   * @public
   */
  ClientAuthentication?: KafkaClusterClientAuthentication | undefined;

  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  EncryptionInTransit?: KafkaClusterEncryptionInTransit | undefined;
}

/**
 * Information about Kafka Cluster used as source / target for replication.
 *
 * @public
 */
export interface KafkaClusterDescription {
  /**
   * Details of an Amazon MSK Cluster.
   *
   * @public
   */
  AmazonMskCluster?: AmazonMskCluster | undefined;

  /**
   * Details of an Apache Kafka Cluster.
   *
   * @public
   */
  ApacheKafkaCluster?: ApacheKafkaCluster | undefined;

  /**
   * The alias of the Kafka cluster. Used to prefix names of replicated topics.
   *
   * @public
   */
  KafkaClusterAlias?: string | undefined;

  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   *
   * @public
   */
  VpcConfig?: KafkaClusterClientVpcConfig | undefined;

  /**
   * Details of the client authentication used by the Apache Kafka cluster.
   *
   * @public
   */
  ClientAuthentication?: KafkaClusterClientAuthentication | undefined;

  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  EncryptionInTransit?: KafkaClusterEncryptionInTransit | undefined;
}

/**
 * Summarized information about Kafka Cluster used as source / target for replication.
 *
 * @public
 */
export interface KafkaClusterSummary {
  /**
   * Details of an Amazon MSK Cluster.
   *
   * @public
   */
  AmazonMskCluster?: AmazonMskCluster | undefined;

  /**
   * Details of an Apache Kafka Cluster.
   *
   * @public
   */
  ApacheKafkaCluster?: ApacheKafkaCluster | undefined;

  /**
   * The alias of the Kafka cluster. Used to prefix names of replicated topics.
   *
   * @public
   */
  KafkaClusterAlias?: string | undefined;
}

/**
 * @public
 */
export interface KafkaVersion {
  Version?: string | undefined;
  Status?: KafkaVersionStatus | undefined;
}

/**
 * BrokerNodeInfo
 *
 * @public
 */
export interface BrokerNodeInfo {
  /**
   * The attached elastic network interface of the broker.
   *
   * @public
   */
  AttachedENIId?: string | undefined;

  /**
   * The ID of the broker.
   *
   * @public
   */
  BrokerId?: number | undefined;

  /**
   * The client subnet to which this broker node belongs.
   *
   * @public
   */
  ClientSubnet?: string | undefined;

  /**
   * The virtual private cloud (VPC) of the client.
   *
   * @public
   */
  ClientVpcIpAddress?: string | undefined;

  /**
   * Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.
   *
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * Endpoints for accessing the broker.
   *
   * @public
   */
  Endpoints?: string[] | undefined;
}

/**
 * Controller node information.
 *
 * @public
 */
export interface ControllerNodeInfo {
  /**
   * Endpoints for accessing the Controller.
   *
   * @public
   */
  Endpoints?: string[] | undefined;
}

/**
 * Zookeeper node information.
 *
 * @public
 */
export interface ZookeeperNodeInfo {
  /**
   * The attached elastic network interface of the broker.
   *
   * @public
   */
  AttachedENIId?: string | undefined;

  /**
   * The virtual private cloud (VPC) IP address of the client.
   *
   * @public
   */
  ClientVpcIpAddress?: string | undefined;

  /**
   * Endpoints for accessing the ZooKeeper.
   *
   * @public
   */
  Endpoints?: string[] | undefined;

  /**
   * The role-specific ID for Zookeeper.
   *
   * @public
   */
  ZookeeperId?: number | undefined;

  /**
   * The version of Zookeeper.
   *
   * @public
   */
  ZookeeperVersion?: string | undefined;
}

/**
 * The node information object.
 *
 * @public
 */
export interface NodeInfo {
  /**
   * The start time.
   *
   * @public
   */
  AddedToClusterTime?: string | undefined;

  /**
   * The broker node info.
   *
   * @public
   */
  BrokerNodeInfo?: BrokerNodeInfo | undefined;

  /**
   * The ControllerNodeInfo.
   *
   * @public
   */
  ControllerNodeInfo?: ControllerNodeInfo | undefined;

  /**
   * The instance type.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the node.
   *
   * @public
   */
  NodeARN?: string | undefined;

  /**
   * The node type.
   *
   * @public
   */
  NodeType?: NodeType | undefined;

  /**
   * The ZookeeperNodeInfo.
   *
   * @public
   */
  ZookeeperNodeInfo?: ZookeeperNodeInfo | undefined;
}

/**
 * Details about consumer group replication.
 *
 * @public
 */
export interface ConsumerGroupReplication {
  /**
   * List of regular expression patterns indicating the consumer groups that should not be replicated.
   *
   * @public
   */
  ConsumerGroupsToExclude?: string[] | undefined;

  /**
   * List of regular expression patterns indicating the consumer groups to copy.
   *
   * @public
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * Enables synchronization of consumer groups to target cluster.
   *
   * @public
   */
  DetectAndCopyNewConsumerGroups?: boolean | undefined;

  /**
   * Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.
   *
   * @public
   */
  SynchroniseConsumerGroupOffsets?: boolean | undefined;

  /**
   * The consumer group offset synchronization mode. With LEGACY, offsets are synchronized when producers write to the source cluster. With ENHANCED, consumer offsets are synchronized regardless of producer location. ENHANCED requires a corresponding replicator that replicates data from the target cluster to the source cluster.
   *
   * @public
   */
  ConsumerGroupOffsetSyncMode?: ConsumerGroupOffsetSyncMode | undefined;
}

/**
 * Configuration for specifying the position in the topics to start replicating from.
 *
 * @public
 */
export interface ReplicationStartingPosition {
  /**
   * The type of replication starting position.
   *
   * @public
   */
  Type?: ReplicationStartingPositionType | undefined;
}

/**
 * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
 *
 * @public
 */
export interface ReplicationTopicNameConfiguration {
  /**
   * The type of replicated topic name.
   *
   * @public
   */
  Type?: ReplicationTopicNameConfigurationType | undefined;
}

/**
 * Details about topic replication.
 *
 * @public
 */
export interface TopicReplication {
  /**
   * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
   *
   * @public
   */
  CopyAccessControlListsForTopics?: boolean | undefined;

  /**
   * Whether to periodically configure remote topics to match their corresponding upstream topics.
   *
   * @public
   */
  CopyTopicConfigurations?: boolean | undefined;

  /**
   * Whether to periodically check for new topics and partitions.
   *
   * @public
   */
  DetectAndCopyNewTopics?: boolean | undefined;

  /**
   * Configuration for specifying the position in the topics to start replicating from.
   *
   * @public
   */
  StartingPosition?: ReplicationStartingPosition | undefined;

  /**
   * Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
   *
   * @public
   */
  TopicNameConfiguration?: ReplicationTopicNameConfiguration | undefined;

  /**
   * List of regular expression patterns indicating the topics that should not be replicated.
   *
   * @public
   */
  TopicsToExclude?: string[] | undefined;

  /**
   * List of regular expression patterns indicating the topics to copy.
   *
   * @public
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * Specifies configuration for replication between a source and target Kafka cluster.
 *
 * @public
 */
export interface ReplicationInfo {
  /**
   * Configuration relating to consumer group replication.
   *
   * @public
   */
  ConsumerGroupReplication: ConsumerGroupReplication | undefined;

  /**
   * The ARN of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterArn?: string | undefined;

  /**
   * The ID of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterId?: string | undefined;

  /**
   * The compression type to use when producing records to target cluster.
   *
   * @public
   */
  TargetCompressionType: TargetCompressionType | undefined;

  /**
   * The ARN of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterArn?: string | undefined;

  /**
   * The ID of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterId?: string | undefined;

  /**
   * Configuration relating to topic replication.
   *
   * @public
   */
  TopicReplication: TopicReplication | undefined;
}

/**
 * Specifies configuration for replication between a source and target Kafka cluster (sourceKafkaClusterAlias -> targetKafkaClusterAlias)
 *
 * @public
 */
export interface ReplicationInfoDescription {
  /**
   * Configuration relating to consumer group replication.
   *
   * @public
   */
  ConsumerGroupReplication?: ConsumerGroupReplication | undefined;

  /**
   * The alias of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterAlias?: string | undefined;

  /**
   * The compression type to use when producing records to target cluster.
   *
   * @public
   */
  TargetCompressionType?: TargetCompressionType | undefined;

  /**
   * The alias of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterAlias?: string | undefined;

  /**
   * Configuration relating to topic replication.
   *
   * @public
   */
  TopicReplication?: TopicReplication | undefined;
}

/**
 * Summarized information of replication between clusters.
 *
 * @public
 */
export interface ReplicationInfoSummary {
  /**
   * The alias of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterAlias?: string | undefined;

  /**
   * The alias of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterAlias?: string | undefined;
}

/**
 * Information about a replicator.
 *
 * @public
 */
export interface ReplicatorSummary {
  /**
   * The time the replicator was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The current version of the replicator.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * Whether this resource is a replicator reference.
   *
   * @public
   */
  IsReplicatorReference?: boolean | undefined;

  /**
   * Kafka Clusters used in setting up sources / targets for replication.
   *
   * @public
   */
  KafkaClustersSummary?: KafkaClusterSummary[] | undefined;

  /**
   * A list of summarized information of replications between clusters.
   *
   * @public
   */
  ReplicationInfoSummaryList?: ReplicationInfoSummary[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator.
   *
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * The name of the replicator.
   *
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.
   *
   * @public
   */
  ReplicatorResourceArn?: string | undefined;

  /**
   * State of the replicator.
   *
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * Configuration that controls how Apache Kafka record values are deserialized for the destination.
 *
 * @public
 */
export interface RecordConverter {
  /**
   * The deserialization format applied to Apache Kafka record values.
   *
   * @public
   */
  ValueConverter: ValueConverter | undefined;
}

/**
 * Schema configuration that controls how Apache Kafka record values are validated.
 *
 * @public
 */
export interface RecordSchema {
  /**
   * The Amazon Resource Name (ARN) of the AWS Glue Schema Registry schema (not registry) used to validate records for the destination Apache Iceberg table.
   *
   * @public
   */
  GsrArn: string | undefined;
}

/**
 * Configuration of an Apache Kafka topic that feeds a channel.
 *
 * @public
 */
export interface TopicConfiguration {
  /**
   * Configuration that controls how Apache Kafka record values are deserialized for the destination.
   *
   * @public
   */
  RecordConverter: RecordConverter | undefined;

  /**
   * The schema used to validate records when the value converter requires one (for example, JSON_SCHEMA_GSR).
   *
   * @public
   */
  RecordSchema?: RecordSchema | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the topic.
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * Includes identification info about the topic.
 *
 * @public
 */
export interface TopicInfo {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * Name for a topic.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * Replication factor for a topic.
   *
   * @public
   */
  ReplicationFactor?: number | undefined;

  /**
   * Partition count for a topic.
   *
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * Number of out-of-sync replicas for a topic.
   *
   * @public
   */
  OutOfSyncReplicaCount?: number | undefined;
}

/**
 * Contains information about a topic partition.
 *
 * @public
 */
export interface TopicPartitionInfo {
  /**
   * The partition ID.
   *
   * @public
   */
  Partition?: number | undefined;

  /**
   * The leader broker ID for the partition.
   *
   * @public
   */
  Leader?: number | undefined;

  /**
   * The list of replica broker IDs for the partition.
   *
   * @public
   */
  Replicas?: number[] | undefined;

  /**
   * The list of in-sync replica broker IDs for the partition.
   *
   * @public
   */
  Isr?: number[] | undefined;
}

/**
 * Error info for scram secret associate/disassociate failure.
 *
 * @public
 */
export interface UnprocessedScramSecret {
  /**
   * Error code for associate/disassociate failure.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Error message for associate/disassociate failure.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * AWS Secrets Manager secret ARN.
   *
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * The VPC connection object.
 *
 * @public
 */
export interface VpcConnection {
  /**
   * The ARN that identifies the Vpc Connection.
   *
   * @public
   */
  VpcConnectionArn: string | undefined;

  /**
   * The ARN that identifies the Cluster which the Vpc Connection belongs to.
   *
   * @public
   */
  TargetClusterArn: string | undefined;

  /**
   * Creation time of the Vpc Connection.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Information about the auth scheme of Vpc Connection.
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * The vpcId that belongs to the Vpc Connection.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * State of the Vpc Connection.
   *
   * @public
   */
  State?: VpcConnectionState | undefined;
}

/**
 * Associates sasl scram secrets to cluster.
 *
 * @public
 */
export interface BatchAssociateScramSecretRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster to be updated.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * List of AWS Secrets Manager secret ARNs.
   *
   * @public
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateScramSecretResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * List of errors when associating secrets to cluster.
   *
   * @public
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[] | undefined;
}

/**
 * Disassociates sasl scram secrets to cluster.
 *
 * @public
 */
export interface BatchDisassociateScramSecretRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster to be updated.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * List of AWS Secrets Manager secret ARNs.
   *
   * @public
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateScramSecretResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * List of errors when disassociating secrets to cluster.
   *
   * @public
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[] | undefined;
}

/**
 * Configuration of the AWS Glue Data Catalog and S3 Tables warehouse used by the Apache Iceberg destination.
 *
 * @public
 */
export interface Catalog {
  /**
   * The Amazon Resource Name (ARN) of the federated AWS Glue Data Catalog that projects the S3 Tables bucket. If omitted, MSK derives the catalog ARN from warehouseLocation.
   *
   * @public
   */
  CatalogArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the S3 Tables bucket that backs the Apache Iceberg warehouse.
   *
   * @public
   */
  WarehouseLocation?: string | undefined;
}

/**
 * Configuration for the destinations to which the channel publishes operational logs.
 *
 * @public
 */
export interface ChannelLoggingInfo {
  /**
   * Details of the CloudWatch Logs destination for Channel logs.
   *
   * @public
   */
  CloudWatchLogs?: CloudWatchLogs | undefined;

  /**
   * Details of the Kinesis Data Firehose delivery stream that is the destination for Channel logs.
   *
   * @public
   */
  Firehose?: Firehose | undefined;

  /**
   * Details of the Amazon S3 destination for Channel logs.
   *
   * @public
   */
  S3?: S3 | undefined;
}

/**
 * Additional context for the current channel state, populated when the channel is in FAILED.
 *
 * @public
 */
export interface ChannelStateInfo {
  /**
   * A short, machine-readable code identifying the failure cause.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * A human-readable message describing the failure.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Returns information about a provisioned cluster operation.
 *
 * @public
 */
export interface ClusterOperationV2Provisioned {
  /**
   * Steps completed during the operation.
   *
   * @public
   */
  OperationSteps?: ClusterOperationStep[] | undefined;

  /**
   * Information about cluster attributes before a cluster is updated.
   *
   * @public
   */
  SourceClusterInfo?: MutableClusterInfo | undefined;

  /**
   * Information about cluster attributes after a cluster is updated.
   *
   * @public
   */
  TargetClusterInfo?: MutableClusterInfo | undefined;

  /**
   * Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.
   *
   * @public
   */
  VpcConnectionInfo?: VpcConnectionInfo | undefined;
}

/**
 * Description of the VPC connection.
 * @public
 */
export interface VpcConnectionInfoServerless {
  /**
   * The time when Amazon MSK creates the VPC Connnection.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The owner of the VPC Connection.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * Description of the requester that calls the API operation.
   *
   * @public
   */
  UserIdentity?: UserIdentity | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPC connection.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * Returns information about a serverless cluster operation.
 *
 * @public
 */
export interface ClusterOperationV2Serverless {
  /**
   * Describes the cluster's attributes before any updates are applied. For example, networkType, which can be either IPv4 or DUAL.
   *
   * @public
   */
  SourceClusterInfo?: ServerlessConnectivityInfo | undefined;

  /**
   * Describes the cluster's attributes after any updates are applied. For example, networkType, which can be either IPv4 or DUAL.
   *
   * @public
   */
  TargetClusterInfo?: ServerlessConnectivityInfo | undefined;

  /**
   * Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.
   *
   * @public
   */
  VpcConnectionInfo?: VpcConnectionInfoServerless | undefined;
}

/**
 * Returns information about a cluster operation.
 *
 * @public
 */
export interface ClusterOperationV2 {
  /**
   * ARN of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * Type of the backend cluster.
   *
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * The time at which operation was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time at which the operation finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * If cluster operation failed from an error, it describes the error.
   *
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * ARN of the cluster operation.
   *
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * State of the cluster operation.
   *
   * @public
   */
  OperationState?: string | undefined;

  /**
   * Type of the cluster operation.
   *
   * @public
   */
  OperationType?: string | undefined;

  /**
   * Properties of a provisioned cluster.
   *
   * @public
   */
  Provisioned?: ClusterOperationV2Provisioned | undefined;

  /**
   * Properties of a serverless cluster.
   *
   * @public
   */
  Serverless?: ClusterOperationV2Serverless | undefined;
}

/**
 * Details about consumer group replication.
 *
 * @public
 */
export interface ConsumerGroupReplicationUpdate {
  /**
   * List of regular expression patterns indicating the consumer groups that should not be replicated.
   *
   * @public
   */
  ConsumerGroupsToExclude: string[] | undefined;

  /**
   * List of regular expression patterns indicating the consumer groups to copy.
   *
   * @public
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * Enables synchronization of consumer groups to target cluster.
   *
   * @public
   */
  DetectAndCopyNewConsumerGroups: boolean | undefined;

  /**
   * Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.
   *
   * @public
   */
  SynchroniseConsumerGroupOffsets: boolean | undefined;
}

/**
 * The AWS KMS encryption configuration applied to data at rest.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the data.
   *
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * Configuration of the Amazon S3 bucket where records that fail to deliver are stored.
 *
 * @public
 */
export interface DeadLetterQueueS3 {
  /**
   * The Amazon Resource Name (ARN) of the dead-letter Amazon S3 bucket.
   *
   * @public
   */
  BucketArn: string | undefined;

  /**
   * An optional prefix prepended to every dead-letter Amazon S3 object key.
   *
   * @public
   */
  ErrorOutputPrefix?: string | undefined;

  /**
   * Optional 12-digit AWS account ID expected to own the dead-letter Amazon S3 bucket.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Configuration controlling whether the Apache Iceberg destination table's schema is evolved as incoming records change.
 *
 * @public
 */
export interface SchemaEvolution {
  /**
   * Whether to allow MSK to evolve the destination table's schema. Must be false for the current release.
   *
   * @public
   */
  EnableSchemaEvolution?: boolean | undefined;
}

/**
 * Configuration controlling whether MSK creates the destination Apache Iceberg table if it does not already exist.
 *
 * @public
 */
export interface TableCreation {
  /**
   * Whether MSK creates the destination table on the customer's behalf. Must be true for the current release.
   *
   * @public
   */
  EnableTableCreation?: boolean | undefined;
}

/**
 * Configuration of an Apache Iceberg destination for a channel.
 *
 * @public
 */
export interface IcebergDestinationConfiguration {
  /**
   * Whether the destination is append-only. Must be true; updates and deletes are not supported.
   *
   * @public
   */
  AppendOnly: boolean | undefined;

  /**
   * The AWS Glue Data Catalog and S3 Tables warehouse used by the destination.
   *
   * @public
   */
  Catalog?: Catalog | undefined;

  /**
   * The maximum time, in seconds, that records buffer in MSK before being flushed to the destination. Allowed range: 300 to 900. Default: 600.
   *
   * @public
   */
  DataFreshnessInSeconds?: number | undefined;

  /**
   * The Amazon S3 bucket and prefix where MSK writes records that fail to deliver.
   *
   * @public
   */
  DeadLetterQueueS3: DeadLetterQueueS3 | undefined;

  /**
   * The destination Iceberg tables. Currently exactly one table must be specified.
   *
   * @public
   */
  DestinationTableList: DestinationTable[] | undefined;

  /**
   * Configuration controlling whether the destination table's schema is evolved to match incoming records.
   *
   * @public
   */
  SchemaEvolution: SchemaEvolution | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that MSK assumes to access the destination table, the AWS Glue Data Catalog, and the dead-letter Amazon S3 bucket.
   *
   * @public
   */
  ServiceExecutionRoleArn: string | undefined;

  /**
   * Configuration controlling whether MSK creates the destination table if it does not already exist.
   *
   * @public
   */
  TableCreation: TableCreation | undefined;

  /**
   * The compression codec for Iceberg table data files. Defaults to ZSTD.
   *
   * @public
   */
  CompressionType?: IcebergCompressionType | undefined;
}

/**
 * Storage configuration for an Amazon S3 destination bucket.
 *
 * @public
 */
export interface S3Storage {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon S3 bucket.
   *
   * @public
   */
  BucketArn: string | undefined;

  /**
   * The compression codec applied to delivered Amazon S3 objects.
   *
   * @public
   */
  CompressionType: S3CompressionType | undefined;

  /**
   * An optional prefix prepended to every Amazon S3 object key written by the channel.
   *
   * @public
   */
  OutputPrefix?: string | undefined;

  /**
   * An optional template that controls the Amazon S3 object key for each delivered record. Supports the placeholders !\{partition-id\}, !\{sequence-number\}, and !\{kafka-offset\}.
   *
   * @public
   */
  OutputKeyTemplate?: string | undefined;

  /**
   * The Amazon S3 storage class for delivered objects.
   *
   * @public
   */
  StorageClass: S3StorageClass | undefined;

  /**
   * Optional 12-digit AWS account ID expected to own the Amazon S3 bucket.
   *
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * Configuration of an Amazon S3 destination for a channel.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * The maximum time, in seconds, that records buffer in MSK before being flushed to the destination. Allowed range: 300 to 900. Default: 600.
   *
   * @public
   */
  DataFreshnessInSeconds?: number | undefined;

  /**
   * The Amazon S3 bucket and prefix where MSK writes records that fail to deliver.
   *
   * @public
   */
  DeadLetterQueueS3: DeadLetterQueueS3 | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that MSK assumes to write to the destination Amazon S3 bucket and the dead-letter bucket.
   *
   * @public
   */
  ServiceExecutionRoleArn: string | undefined;

  /**
   * The Amazon S3 bucket, prefix, and storage class for delivered records.
   *
   * @public
   */
  Storage: S3Storage | undefined;
}

/**
 * Creates a Channel that streams records from an Amazon MSK Express cluster topic to Amazon S3 or Apache Iceberg.
 *
 * @public
 */
export interface CreateChannelRequest {
  /**
   * The name of the channel. Must be unique within the cluster.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The encryption configuration applied to the channel.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Apache Iceberg destination for the channel. Mutually exclusive with s3DestinationConfiguration.
   *
   * @public
   */
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration | undefined;

  /**
   * The Amazon S3 destination for the channel. Mutually exclusive with icebergDestinationConfiguration.
   *
   * @public
   */
  S3DestinationConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The tags attached to the channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of topic configurations for the channel. Currently exactly one topic must be specified.
   *
   * @public
   */
  TopicConfigurationList: TopicConfiguration[] | undefined;

  /**
   * The destinations to which the channel publishes operational logs.
   *
   * @public
   */
  LoggingInfo?: ChannelLoggingInfo | undefined;
}

/**
 * Returns the channel ARN and the cluster-operation ARN that tracks the asynchronous create.
 *
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * Information about the broker nodes in the cluster.
   *
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * Specifies if intelligent rebalancing should be turned on for the new MSK Provisioned cluster with Express brokers. By default, intelligent rebalancing status is ACTIVE for all new clusters.
   *
   * @public
   */
  Rebalancing?: Rebalancing | undefined;

  /**
   * Includes all client authentication related information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * Represents the configuration that you want MSK to use for the brokers in a cluster.
   *
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * The settings for open monitoring.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * The version of Apache Kafka.
   *
   * @public
   */
  KafkaVersion: string | undefined;

  LoggingInfo?: LoggingInfo | undefined;
  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * Create tags when creating the cluster.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * This controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The name of the MSK cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.
   *
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * Provisioned cluster request.
 *
 * @public
 */
export interface ProvisionedRequest {
  /**
   * Information about the brokers.
   *
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * Specifies if intelligent rebalancing is turned on for your MSK Provisioned cluster with Express brokers. For all new Express-based clusters that you create, intelligent rebalancing is turned on by default.
   *
   * @public
   */
  Rebalancing?: Rebalancing | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.
   *
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * The settings for open monitoring.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * The Apache Kafka version that you want for the cluster.
   *
   * @public
   */
  KafkaVersion: string | undefined;

  /**
   * Log delivery information for the cluster.
   *
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * The number of broker nodes in the cluster.
   *
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * This controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;
}

/**
 * Serverless cluster request.
 *
 * @public
 */
export interface ServerlessRequest {
  /**
   * The configuration of the Amazon VPCs for the cluster.
   *
   * @public
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * Includes all client authentication information.
   *
   * @public
   */
  ClientAuthentication?: ServerlessClientAuthentication | undefined;
}

/**
 * @public
 */
export interface CreateClusterV2Request {
  /**
   * The name of the cluster.
   *
   * @public
   */
  ClusterName: string | undefined;

  /**
   * A map of tags that you want the cluster to have.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Information about the provisioned cluster.
   *
   * @public
   */
  Provisioned?: ProvisionedRequest | undefined;

  /**
   * Information about the serverless cluster.
   *
   * @public
   */
  Serverless?: ServerlessRequest | undefined;
}

/**
 * @public
 */
export interface CreateClusterV2Response {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The name of the MSK cluster.
   *
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.
   *
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * The type of the cluster. The possible states are PROVISIONED or SERVERLESS.
   *
   * @public
   */
  ClusterType?: ClusterType | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The versions of Apache Kafka with which you can use this MSK configuration.
   *
   * @public
   */
  KafkaVersions?: string[] | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.
   *
   * @public
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time when the configuration was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED.
   *
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * Details about delivering logs to CloudWatch Logs.
 *
 * @public
 */
export interface ReplicatorCloudWatchLogs {
  /**
   * Whether log delivery to CloudWatch Logs is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The CloudWatch log group that is the destination for log delivery.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * Details about delivering logs to Firehose.
 *
 * @public
 */
export interface ReplicatorFirehose {
  /**
   * Whether log delivery to Firehose is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The Firehose delivery stream that is the destination for log delivery.
   *
   * @public
   */
  DeliveryStream?: string | undefined;
}

/**
 * Details about delivering logs to S3.
 *
 * @public
 */
export interface ReplicatorS3 {
  /**
   * Whether log delivery to S3 is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The S3 bucket that is the destination for log delivery.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The S3 prefix that is the destination for log delivery.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Configuration for replicator log delivery.
 *
 * @public
 */
export interface ReplicatorLogDelivery {
  /**
   * Configuration for CloudWatch Logs delivery.
   *
   * @public
   */
  CloudWatchLogs?: ReplicatorCloudWatchLogs | undefined;

  /**
   * Configuration for Firehose delivery.
   *
   * @public
   */
  Firehose?: ReplicatorFirehose | undefined;

  /**
   * Configuration for S3 delivery.
   *
   * @public
   */
  S3?: ReplicatorS3 | undefined;
}

/**
 * Configuration for log delivery to customer destinations.
 *
 * @public
 */
export interface LogDelivery {
  /**
   * Configuration for replicator log delivery.
   *
   * @public
   */
  ReplicatorLogDelivery?: ReplicatorLogDelivery | undefined;
}

/**
 * Creates a replicator using the specified configuration.
 *
 * @public
 */
export interface CreateReplicatorRequest {
  /**
   * A summary description of the replicator.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Kafka Clusters to use in setting up sources / targets for replication.
   *
   * @public
   */
  KafkaClusters: KafkaCluster[] | undefined;

  /**
   * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
   *
   * @public
   */
  ReplicationInfoList: ReplicationInfo[] | undefined;

  /**
   * The name of the replicator. Alpha-numeric characters with '-' are allowed.
   *
   * @public
   */
  ReplicatorName: string | undefined;

  /**
   * The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)
   *
   * @public
   */
  ServiceExecutionRoleArn: string | undefined;

  /**
   * List of tags to attach to created Replicator.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Configuration for delivering replicator logs to customer destinations.
   *
   * @public
   */
  LogDelivery?: LogDelivery | undefined;
}

/**
 * @public
 */
export interface CreateReplicatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the replicator.
   *
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * Name of the replicator provided by the customer.
   *
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * State of the replicator.
   *
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface CreateTopicRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the topic to create.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The number of partitions for the topic.
   *
   * @public
   */
  PartitionCount: number | undefined;

  /**
   * The replication factor for the topic.
   *
   * @public
   */
  ReplicationFactor: number | undefined;

  /**
   * Topic configurations encoded as a Base64 string.
   *
   * @public
   */
  Configs?: string | undefined;
}

/**
 * @public
 */
export interface CreateTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The name of the topic that was created.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The status of the topic creation.
   *
   * @public
   */
  Status?: TopicState | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectionRequest {
  /**
   * The cluster Amazon Resource Name (ARN) for the VPC connection.
   *
   * @public
   */
  TargetClusterArn: string | undefined;

  /**
   * The authentication type of VPC connection.
   *
   * @public
   */
  Authentication: string | undefined;

  /**
   * The VPC ID of VPC connection.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The list of client subnets.
   *
   * @public
   */
  ClientSubnets: string[] | undefined;

  /**
   * The list of security groups.
   *
   * @public
   */
  SecurityGroups: string[] | undefined;

  /**
   * A map of tags for the VPC connection.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectionResponse {
  /**
   * The VPC connection ARN.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * The State of Vpc Connection.
   *
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * The authentication type of VPC connection.
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * The VPC ID of the VPC connection.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The list of client subnets.
   *
   * @public
   */
  ClientSubnets?: string[] | undefined;

  /**
   * The list of security groups.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The creation time of VPC connection.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A map of tags for the VPC connection.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * Returns the channel ARN and the cluster-operation ARN that tracks the asynchronous delete.
 *
 * @public
 */
export interface DeleteChannelResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The current version of the MSK cluster.
   *
   * @public
   */
  CurrentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.
   *
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyResponse {}

/**
 * @public
 */
export interface DeleteConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED.
   *
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * @public
 */
export interface DeleteReplicatorRequest {
  /**
   * The current version of the replicator.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator to be deleted.
   *
   * @public
   */
  ReplicatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the replicator.
   *
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * The state of the replicator.
   *
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the topic to delete.
   *
   * @public
   */
  TopicName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The name of the topic that was deleted.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The status of the topic deletion.
   *
   * @public
   */
  Status?: TopicState | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectionResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * The state of the VPC connection.
   *
   * @public
   */
  State?: VpcConnectionState | undefined;
}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * Contains the current configuration and state of a channel.
 *
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  ChannelName: string | undefined;

  /**
   * The encryption configuration applied to the channel.
   *
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * The Apache Iceberg destination for the channel, if configured.
   *
   * @public
   */
  IcebergDestinationConfiguration?: IcebergDestinationConfiguration | undefined;

  /**
   * The Amazon S3 destination for the channel, if configured.
   *
   * @public
   */
  S3DestinationConfiguration?: S3DestinationConfiguration | undefined;

  /**
   * The current lifecycle state of the channel.
   *
   * @public
   */
  Status: ChannelStatus | undefined;

  /**
   * The type of destination configured for the channel.
   *
   * @public
   */
  DestinationType: ChannelDestinationType | undefined;

  /**
   * The time when the channel was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The list of topic configurations for the channel.
   *
   * @public
   */
  TopicConfigurationList: TopicConfiguration[] | undefined;

  /**
   * The destinations to which the channel publishes operational logs.
   *
   * @public
   */
  LoggingInfo?: ChannelLoggingInfo | undefined;

  /**
   * Additional context for the current channel state, populated when the channel is in FAILED.
   *
   * @public
   */
  StateInfo?: ChannelStateInfo | undefined;

  /**
   * The Amazon Resource Name (ARN) of the in-flight cluster operation. Returned only while the channel is in CREATING, UPDATING, or DELETING.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;

  /**
   * The tags attached to the channel.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * The cluster information.
   *
   * @public
   */
  ClusterInfo?: ClusterInfo | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.
   *
   * @public
   */
  ClusterOperationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationResponse {
  /**
   * Cluster operation information
   *
   * @public
   */
  ClusterOperationInfo?: ClusterOperationInfo | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationV2Request {
  /**
   * ARN of the cluster operation to describe.
   * @public
   */
  ClusterOperationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationV2Response {
  /**
   * Cluster operation information
   *
   * @public
   */
  ClusterOperationInfo?: ClusterOperationV2 | undefined;
}

/**
 * @public
 */
export interface DescribeClusterV2Request {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterV2Response {
  /**
   * The cluster information.
   *
   * @public
   */
  ClusterInfo?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time when the configuration was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The versions of Apache Kafka with which you can use this MSK configuration.
   *
   * @public
   */
  KafkaVersions?: string[] | undefined;

  /**
   * Latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED.
   *
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A string that uniquely identifies a revision of an MSK configuration.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The time when the configuration was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The revision number.
   *
   * @public
   */
  Revision?: number | undefined;

  /**
   * Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.
   *
   * @public
   */
  ServerProperties?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface DescribeReplicatorRequest {
  /**
   * The Amazon Resource Name (ARN) of the replicator to be described.
   *
   * @public
   */
  ReplicatorArn: string | undefined;
}

/**
 * Details about the state of a replicator
 * @public
 */
export interface ReplicationStateInfo {
  /**
   * Code that describes the current state of the replicator.
   * @public
   */
  Code?: string | undefined;

  /**
   * Message that describes the state of the replicator.
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplicatorResponse {
  /**
   * The time when the replicator was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The current version number of the replicator.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * Whether this resource is a replicator reference.
   *
   * @public
   */
  IsReplicatorReference?: boolean | undefined;

  /**
   * Kafka Clusters used in setting up sources / targets for replication.
   *
   * @public
   */
  KafkaClusters?: KafkaClusterDescription[] | undefined;

  /**
   * A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
   *
   * @public
   */
  ReplicationInfoList?: ReplicationInfoDescription[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator.
   *
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * The description of the replicator.
   *
   * @public
   */
  ReplicatorDescription?: string | undefined;

  /**
   * The name of the replicator.
   *
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.
   *
   * @public
   */
  ReplicatorResourceArn?: string | undefined;

  /**
   * State of the replicator.
   *
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)
   *
   * @public
   */
  ServiceExecutionRoleArn?: string | undefined;

  /**
   * Details about the state of the replicator.
   *
   * @public
   */
  StateInfo?: ReplicationStateInfo | undefined;

  /**
   * List of tags attached to the Replicator.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Configuration for log delivery.
   *
   * @public
   */
  LogDelivery?: LogDelivery | undefined;
}

/**
 * @public
 */
export interface DescribeTopicRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The Kafka topic name that uniquely identifies the topic.
   *
   * @public
   */
  TopicName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The Kafka topic name of the topic.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The replication factor of the topic.
   *
   * @public
   */
  ReplicationFactor?: number | undefined;

  /**
   * The partition count of the topic.
   *
   * @public
   */
  PartitionCount?: number | undefined;

  /**
   * Topic configurations encoded as a Base64 string.
   *
   * @public
   */
  Configs?: string | undefined;

  /**
   * The status of the topic.
   *
   * @public
   */
  Status?: TopicState | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPartitionsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The Kafka topic name that uniquely identifies the topic.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTopicPartitionsResponse {
  /**
   * The list of partition information for the topic.
   *
   * @public
   */
  Partitions?: TopicPartitionInfo[] | undefined;

  /**
   * The paginated results marker. When the result of a DescribeTopicPartitions operation is truncated, the call returns NextToken in the response. To get another batch of configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectionResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.
   *
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK cluster.
   *
   * @public
   */
  TargetClusterArn?: string | undefined;

  /**
   * The state of VPC connection.
   *
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * The authentication type of VPC connection.
   *
   * @public
   */
  Authentication?: string | undefined;

  /**
   * The VPC Id for the VPC connection.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The list of subnets for the VPC connection.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * The list of security groups for the VPC connection.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The creation time of the VPC connection.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A map of tags for the VPC connection.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetBootstrapBrokersRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetBootstrapBrokersResponse {
  /**
   * A string containing one or more hostname:port pairs.
   *
   * @public
   */
  BootstrapBrokerString?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and TLS port pairs.
   *
   * @public
   */
  BootstrapBrokerStringTls?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and Sasl Scram port pairs.
   *
   * @public
   */
  BootstrapBrokerStringSaslScram?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.
   *
   * @public
   */
  BootstrapBrokerStringSaslIam?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and TLS port pairs.
   *
   * @public
   */
  BootstrapBrokerStringPublicTls?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and Sasl Scram port pairs.
   *
   * @public
   */
  BootstrapBrokerStringPublicSaslScram?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.
   *
   * @public
   */
  BootstrapBrokerStringPublicSaslIam?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and TLS port pairs for VPC connectivity.
   *
   * @public
   */
  BootstrapBrokerStringVpcConnectivityTls?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and SASL/SCRAM port pairs for VPC connectivity.
   *
   * @public
   */
  BootstrapBrokerStringVpcConnectivitySaslScram?: string | undefined;

  /**
   * A string containing one or more DNS names (or IP) and SASL/IAM port pairs for VPC connectivity.
   *
   * @public
   */
  BootstrapBrokerStringVpcConnectivitySaslIam?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP) and port pairs for IPv6 connectivity.
   *
   * @public
   */
  BootstrapBrokerStringIpv6?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP) and TLS port pairs for IPv6 connectivity.
   *
   * @public
   */
  BootstrapBrokerStringTlsIpv6?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP) and SASL SCRAM port pairs for IPv6 connectivity.
   *
   * @public
   */
  BootstrapBrokerStringSaslScramIpv6?: string | undefined;

  /**
   * A string that contains one or more DNS names (or IP) and SASL IAM port pairs for IPv6 connectivity.
   *
   * @public
   */
  BootstrapBrokerStringSaslIamIpv6?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyResponse {
  /**
   * The version of cluster policy.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The cluster policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster check.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsResponse {
  /**
   * A list of CompatibleKafkaVersion objects.
   *
   * @public
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[] | undefined;
}

/**
 * Update payload for an Apache Iceberg destination.
 *
 * @public
 */
export interface IcebergDestinationUpdate {
  /**
   * The maximum time, in seconds, that records buffer in MSK before being flushed to the destination. Allowed range: 300 to 900.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Maximum number of channels to return in a single response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response of ListChannels is truncated, it returns a nextToken in the response. This nextToken should be sent in the subsequent request to ListChannels.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filters results to channels whose topic name matches the specified value.
   *
   * @public
   */
  TopicNameFilter?: string | undefined;
}

/**
 * Returns the list of channels in the cluster.
 *
 * @public
 */
export interface ListChannelsResponse {
  /**
   * The list of channels in the cluster.
   *
   * @public
   */
  Channels?: ChannelInfo[] | undefined;

  /**
   * If the response from ListChannels is truncated, this token is included. Send it as the nextToken parameter on a subsequent ListChannels call to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClientVpcConnectionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClientVpcConnectionsResponse {
  /**
   * List of client VPC connections.
   *
   * @public
   */
  ClientVpcConnections?: ClientVpcConnection[] | undefined;

  /**
   * The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response. To get another batch of configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsResponse {
  /**
   * An array of cluster operation information objects.
   *
   * @public
   */
  ClusterOperationInfoList?: ClusterOperationInfo[] | undefined;

  /**
   * If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsV2Request {
  /**
   * The arn of the cluster whose operations are being requested.
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maxResults of the query.
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The nextToken of the query.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsV2Response {
  /**
   * An array of cluster operation information objects.
   *
   * @public
   */
  ClusterOperationInfoList?: ClusterOperationV2Summary[] | undefined;

  /**
   * If the response of ListClusterOperationsV2 is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListClusterOperationsV2.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.
   *
   * @public
   */
  ClusterNameFilter?: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * Information on each of the MSK clusters in the response.
   *
   * @public
   */
  ClusterInfoList?: ClusterInfo[] | undefined;

  /**
   * The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. To get another batch of clusters, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersV2Request {
  /**
   * Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.
   *
   * @public
   */
  ClusterNameFilter?: string | undefined;

  /**
   * Specify either PROVISIONED or SERVERLESS.
   *
   * @public
   */
  ClusterTypeFilter?: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersV2Response {
  /**
   * Information on each of the MSK clusters in the response.
   *
   * @public
   */
  ClusterInfoList?: Cluster[] | undefined;

  /**
   * The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response. To get another batch of clusters, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * Paginated results marker.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of ConfigurationRevision objects.
   *
   * @public
   */
  Revisions?: ConfigurationRevision[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * An array of MSK configurations.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response. To get another batch of configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKafkaVersionsRequest {
  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKafkaVersionsResponse {
  KafkaVersions?: KafkaVersion[] | undefined;
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesResponse {
  /**
   * The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response. To get another batch of nodes, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List containing a NodeInfo object.
   *
   * @public
   */
  NodeInfoList?: NodeInfo[] | undefined;
}

/**
 * @public
 */
export interface ListReplicatorsRequest {
  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns replicators starting with given name.
   *
   * @public
   */
  ReplicatorNameFilter?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicatorsResponse {
  /**
   * If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List containing information of each of the replicators in the account.
   *
   * @public
   */
  Replicators?: ReplicatorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScramSecretsRequest {
  /**
   * The arn of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maxResults of the query.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The nextToken of the query.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScramSecretsResponse {
  /**
   * Paginated results marker.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of scram secrets associated with the cluster.
   *
   * @public
   */
  SecretArnList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pair for the resource tag.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTopicsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returns topics starting with given name.
   *
   * @public
   */
  TopicNameFilter?: string | undefined;
}

/**
 * @public
 */
export interface ListTopicsResponse {
  /**
   * List containing topics info.
   *
   * @public
   */
  Topics?: TopicInfo[] | undefined;

  /**
   * The paginated results marker. When the result of a ListTopics operation is truncated, the call returns NextToken in the response. To get another batch of configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectionsRequest {
  /**
   * The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectionsResponse {
  /**
   * List of VPC connections.
   *
   * @public
   */
  VpcConnections?: VpcConnection[] | undefined;

  /**
   * The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response. To get another batch of configurations, provide this token in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The policy version.
   *
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * The policy.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyResponse {
  /**
   * The policy version.
   *
   * @public
   */
  CurrentVersion?: string | undefined;
}

/**
 * Reboots a node.
 * @public
 */
export interface RebootBrokerRequest {
  /**
   * The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.
   *
   * @public
   */
  BrokerIds: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster to be updated.
   *
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface RejectClientVpcConnectionRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The VPC connection ARN.
   *
   * @public
   */
  VpcConnectionArn: string | undefined;
}

/**
 * @public
 */
export interface RejectClientVpcConnectionResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tag keys must be unique for a given cluster. In addition, the following restrictions apply:
   *
   * - Each tag key must be unique. If you add a tag with a key that's already in use, your new tag overwrites the existing key-value pair.
   * - You can't start a tag key with aws: because this prefix is reserved for use by AWS. AWS creates tags that begin with this prefix on your behalf, but you can't edit or delete them.
   * - Tag keys must be between 1 and 128 Unicode characters in length.
   * - Tag keys must consist of the following characters: Unicode letters, digits, white space, and the following special characters: _ . / = + - @.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerCountRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The version of cluster to update from. A successful operation will then generate a new version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The number of broker nodes that you want the cluster to have after this operation completes successfully.
   *
   * @public
   */
  TargetNumberOfBrokerNodes: number | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerCountResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerStorageRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The version of cluster to update from. A successful operation will then generate a new version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Describes the target volume size and the ID of the broker to apply the update to.
   *
   * @public
   */
  TargetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerStorageResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerTypeRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The Amazon MSK broker type that you want all of the brokers in this cluster to be.
   *
   * @public
   */
  TargetInstanceType: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerTypeResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * Update payload for an Amazon S3 destination.
 *
 * @public
 */
export interface S3DestinationUpdate {
  /**
   * The maximum time, in seconds, that records buffer in MSK before being flushed to the destination. Allowed range: 300 to 900.
   *
   * @public
   */
  DataFreshnessInSeconds: number | undefined;
}

/**
 * Updates an existing channel's destination configuration. You must update the same destination type the channel was created with; the destination type cannot be changed.
 *
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Updates fields on an Apache Iceberg destination. Use only when the channel was created with an Iceberg destination.
   *
   * @public
   */
  IcebergDestinationUpdate?: IcebergDestinationUpdate | undefined;

  /**
   * Updates fields on an Amazon S3 destination. Use only when the channel was created with an Amazon S3 destination.
   *
   * @public
   */
  S3DestinationUpdate?: S3DestinationUpdate | undefined;
}

/**
 * Returns the channel ARN and the cluster-operation ARN that tracks the asynchronous update.
 *
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Represents the configuration that you want MSK to use for the brokers in a cluster.
   *
   * @public
   */
  ConfigurationInfo: ConfigurationInfo | undefined;

  /**
   * The version of the cluster that needs to be updated.
   *
   * @public
   */
  CurrentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster to be updated.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The custom configuration that should be applied on the new version of cluster.
   *
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * Current cluster version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Target Kafka version.
   *
   * @public
   */
  TargetKafkaVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The description of the configuration revision.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded. When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.
   *
   * @public
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;
}

/**
 * Request body for UpdateConnectivity.
 * @public
 */
export interface UpdateConnectivityRequest {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * Information about the broker access configuration.
   *
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo | undefined;

  /**
   * The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Access control settings for zookeeper
   *
   * @public
   */
  ZookeeperAccess?: ZookeeperAccess | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * Request body for UpdateMonitoring.
 * @public
 */
export interface UpdateMonitoringRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.
   *
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * The settings for open monitoring.
   *
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  LoggingInfo?: LoggingInfo | undefined;
}

/**
 * @public
 */
export interface UpdateMonitoringResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRebalancingRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The current version of the cluster.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Specifies if intelligent rebalancing should be turned on for your cluster. The default intelligent rebalancing status is ACTIVE for all new MSK Provisioned clusters that you create with Express brokers.
   *
   * @public
   */
  Rebalancing: Rebalancing | undefined;
}

/**
 * @public
 */
export interface UpdateRebalancingResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster whose intelligent rebalancing status you've updated.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * Details for updating the topic replication of a replicator.
 *
 * @public
 */
export interface TopicReplicationUpdate {
  /**
   * Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
   *
   * @public
   */
  CopyAccessControlListsForTopics: boolean | undefined;

  /**
   * Whether to periodically configure remote topics to match their corresponding upstream topics.
   *
   * @public
   */
  CopyTopicConfigurations: boolean | undefined;

  /**
   * Whether to periodically check for new topics and partitions.
   *
   * @public
   */
  DetectAndCopyNewTopics: boolean | undefined;

  /**
   * List of regular expression patterns indicating the topics that should not be replicated.
   *
   * @public
   */
  TopicsToExclude: string[] | undefined;

  /**
   * List of regular expression patterns indicating the topics to copy.
   *
   * @public
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * Update information relating to replication between a given source and target Kafka cluster.
 *
 * @public
 */
export interface UpdateReplicationInfoRequest {
  /**
   * Updated consumer group replication information.
   *
   * @public
   */
  ConsumerGroupReplication?: ConsumerGroupReplicationUpdate | undefined;

  /**
   * Current replicator version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replicator to be updated.
   *
   * @public
   */
  ReplicatorArn: string | undefined;

  /**
   * The ARN of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterArn?: string | undefined;

  /**
   * The ID of the source Kafka cluster.
   *
   * @public
   */
  SourceKafkaClusterId?: string | undefined;

  /**
   * The ARN of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterArn?: string | undefined;

  /**
   * The ID of the target Kafka cluster.
   *
   * @public
   */
  TargetKafkaClusterId?: string | undefined;

  /**
   * Updated topic replication information.
   *
   * @public
   */
  TopicReplication?: TopicReplicationUpdate | undefined;

  /**
   * Configuration for delivering replicator logs to customer destinations.
   *
   * @public
   */
  LogDelivery?: LogDelivery | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationInfoResponse {
  /**
   * The Amazon Resource Name (ARN) of the replicator.
   *
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * State of the replicator.
   *
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityRequest {
  /**
   * Includes all client authentication related information.
   *
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * Includes all encryption-related information.
   *
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.
 *
 * @public
 */
export interface UpdateStorageRequest {
  /**
   * The Amazon Resource Name (ARN) of the cluster to be updated.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The version of cluster to update from. A successful operation will then generate a new version.
   *
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * EBS volume provisioned throughput information.
   *
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * Controls storage mode for supported storage tiers.
   *
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * size of the EBS volume to update.
   *
   * @public
   */
  VolumeSizeGB?: number | undefined;
}

/**
 * @public
 */
export interface UpdateStorageResponse {
  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster operation.
   *
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the cluster.
   *
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * The name of the topic to update configuration for.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The new topic configurations encoded as a Base64 string.
   *
   * @public
   */
  Configs?: string | undefined;

  /**
   * The new total number of partitions for the topic.
   *
   * @public
   */
  PartitionCount?: number | undefined;
}

/**
 * @public
 */
export interface UpdateTopicResponse {
  /**
   * The Amazon Resource Name (ARN) of the topic.
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The name of the topic whose configuration was updated.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * The status of the topic update.
   *
   * @public
   */
  Status?: TopicState | undefined;
}
