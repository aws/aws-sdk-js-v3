// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KafkaServiceException as __BaseException } from "./KafkaServiceException";

/**
 * <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
 */
export interface ProvisionedThroughput {
  /**
   * <p>Provisioned throughput is enabled or not.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.</p>
   */
  VolumeThroughput?: number;
}

/**
 * <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 */
export interface BrokerEBSVolumeInfo {
  /**
   * <p>The ID of the broker to update.</p>
   */
  KafkaBrokerNodeId: string | undefined;

  /**
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>Size of the EBS volume to update.</p>
   */
  VolumeSizeGB?: number;
}

export enum ClusterType {
  PROVISIONED = "PROVISIONED",
  SERVERLESS = "SERVERLESS",
}

export enum BrokerAZDistribution {
  DEFAULT = "DEFAULT",
}

/**
 * Public access control for brokers.
 */
export interface PublicAccess {
  /**
   * <p>The value DISABLED indicates that public access is turned off. SERVICE_PROVIDED_EIPS indicates that public access is turned on.</p>
   */
  Type?: string;
}

/**
 * <p>Information about the broker access configuration.</p>
 */
export interface ConnectivityInfo {
  /**
   * <p>Public access control for brokers.</p>
   */
  PublicAccess?: PublicAccess;
}

/**
 * <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>
 */
export interface EBSStorageInfo {
  /**
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   */
  VolumeSize?: number;
}

/**
 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
 */
export interface StorageInfo {
  /**
   * <p>EBS volume information.</p>
   */
  EbsStorageInfo?: EBSStorageInfo;
}

/**
 * <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
 */
export interface BrokerNodeGroupInfo {
  /**
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   */
  BrokerAZDistribution?: BrokerAZDistribution | string;

  /**
   * <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.</p>
   */
  ClientSubnets: string[] | undefined;

  /**
   * <p>The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
   * kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   */
  StorageInfo?: StorageInfo;

  /**
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo?: ConnectivityInfo;
}

/**
 * <p>Details for IAM access control.</p>
 */
export interface Iam {
  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Details for SASL/SCRAM client authentication.</p>
 */
export interface Scram {
  /**
   * <p>SASL/SCRAM authentication is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Details for client authentication using SASL.</p>
 */
export interface Sasl {
  /**
   * <p>Details for SASL/SCRAM client authentication.</p>
   */
  Scram?: Scram;

  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Iam?: Iam;
}

/**
 * <p>Details for client authentication using TLS.</p>
 */
export interface Tls {
  /**
   * <p>List of ACM Certificate Authority ARNs.</p>
   */
  CertificateAuthorityArnList?: string[];

  /**
   * <p>Specifies whether you want to turn on or turn off TLS authentication.</p>
   */
  Enabled?: boolean;
}

export interface Unauthenticated {
  /**
   * <p>Specifies whether you want to turn on or turn off unauthenticated traffic to your cluster.</p>
   */
  Enabled?: boolean;
}

/**
 * <p>Includes all client authentication information.</p>
 */
export interface ClientAuthentication {
  /**
   * <p>Details for ClientAuthentication using SASL.</p>
   */
  Sasl?: Sasl;

  /**
   * <p>Details for ClientAuthentication using TLS.</p>
   */
  Tls?: Tls;

  /**
   * <p>Contains information about unauthenticated traffic to the cluster.</p>
   */
  Unauthenticated?: Unauthenticated;
}

/**
 * <p>Information about the current software installed on the cluster.</p>
 */
export interface BrokerSoftwareInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>
   */
  ConfigurationArn?: string;

  /**
   * <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>
   */
  ConfigurationRevision?: number;

  /**
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion?: string;
}

/**
 * <p>The data-volume encryption details.</p>
 */
export interface EncryptionAtRest {
  /**
   * <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>
   */
  DataVolumeKMSKeyId: string | undefined;
}

export enum ClientBroker {
  PLAINTEXT = "PLAINTEXT",
  TLS = "TLS",
  TLS_PLAINTEXT = "TLS_PLAINTEXT",
}

/**
 * <p>The settings for encrypting data in transit.</p>
 */
export interface EncryptionInTransit {
  /**
   * <p>Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.</p>
   *             <p>
   *                TLS means that client-broker communication is enabled with TLS only.</p>
   *             <p>
   *                TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.</p>
   *             <p>
   *                PLAINTEXT means that client-broker communication is enabled in plaintext only.</p>
   *             <p>The default value is TLS_PLAINTEXT.</p>
   */
  ClientBroker?: ClientBroker | string;

  /**
   * <p>When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.</p>
   *             <p>The default value is true.</p>
   */
  InCluster?: boolean;
}

/**
 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 */
export interface EncryptionInfo {
  /**
   * <p>The data-volume encryption details.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * <p>The details for encryption in transit.</p>
   */
  EncryptionInTransit?: EncryptionInTransit;
}

export enum EnhancedMonitoring {
  DEFAULT = "DEFAULT",
  PER_BROKER = "PER_BROKER",
  PER_TOPIC_PER_BROKER = "PER_TOPIC_PER_BROKER",
  PER_TOPIC_PER_PARTITION = "PER_TOPIC_PER_PARTITION",
}

export interface CloudWatchLogs {
  Enabled: boolean | undefined;
  LogGroup?: string;
}

export interface Firehose {
  DeliveryStream?: string;
  Enabled: boolean | undefined;
}

export interface S3 {
  Bucket?: string;
  Enabled: boolean | undefined;
  Prefix?: string;
}

export interface BrokerLogs {
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
  S3?: S3;
}

export interface LoggingInfo {
  BrokerLogs: BrokerLogs | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 */
export interface JmxExporterInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 */
export interface NodeExporterInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Prometheus settings.</p>
 */
export interface PrometheusInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporterInfo;

  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  NodeExporter?: NodeExporterInfo;
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoringInfo {
  /**
   * <p>Prometheus settings.</p>
   */
  Prometheus: PrometheusInfo | undefined;
}

export enum StorageMode {
  LOCAL = "LOCAL",
  TIERED = "TIERED",
}

/**
 * <p>Provisioned cluster.</p>
 */
export interface Provisioned {
  /**
   * <p>Information about the brokers.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Information about the Apache Kafka version deployed on the brokers.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * <p>Log delivery information for the cluster.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster on a TLS port.</p>
   */
  ZookeeperConnectStringTls?: string;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;
}

/**
 * <p>Details for client authentication using SASL.</p>
 */
export interface ServerlessSasl {
  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Iam?: Iam;
}

/**
 * <p>Includes all client authentication information.</p>
 */
export interface ServerlessClientAuthentication {
  /**
   * <p>Details for ClientAuthentication using SASL.</p>
   */
  Sasl?: ServerlessSasl;
}

/**
 * <p>The configuration of the Amazon VPCs for the cluster.</p>
 */
export interface VpcConfig {
  /**
   * <p>The IDs of the subnets associated with the cluster.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the cluster.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * <p>Serverless cluster.</p>
 */
export interface Serverless {
  /**
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ServerlessClientAuthentication;
}

export enum ClusterState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  HEALING = "HEALING",
  MAINTENANCE = "MAINTENANCE",
  REBOOTING_BROKER = "REBOOTING_BROKER",
  UPDATING = "UPDATING",
}

export interface StateInfo {
  Code?: string;
  Message?: string;
}

/**
 * <p>Returns information about a cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</p>
   */
  ActiveOperationArn?: string;

  /**
   * <p>Cluster Type.</p>
   */
  ClusterType?: ClusterType | string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The time when the cluster was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>State Info for the Amazon MSK cluster.</p>
   */
  StateInfo?: StateInfo;

  /**
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Information about the provisioned cluster.</p>
   */
  Provisioned?: Provisioned;

  /**
   * <p>Information about the serverless cluster.</p>
   */
  Serverless?: Serverless;
}

/**
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 */
export interface JmxExporter {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 */
export interface NodeExporter {
  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Prometheus settings.</p>
 */
export interface Prometheus {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporter;

  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  NodeExporter?: NodeExporter;
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoring {
  /**
   * <p>Prometheus settings.</p>
   */
  Prometheus: Prometheus | undefined;
}

/**
 * <p>Returns information about a cluster.</p>
 */
export interface ClusterInfo {
  /**
   * <p>Arn of active cluster operation.</p>
   */
  ActiveOperationArn?: string;

  /**
   * <p>Information about the broker nodes.</p>
   */
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The time when the cluster was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>Settings for open monitoring using Prometheus.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  LoggingInfo?: LoggingInfo;
  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState | string;

  StateInfo?: StateInfo;
  /**
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * <p>The connection string to use to connect to zookeeper cluster on Tls port.</p>
   */
  ZookeeperConnectStringTls?: string;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;
}

/**
 * <p>Returns information about an error state of the cluster.</p>
 */
export interface ErrorInfo {
  /**
   * <p>A number describing the error programmatically.</p>
   */
  ErrorCode?: string;

  /**
   * <p>An optional field to provide more details about the error.</p>
   */
  ErrorString?: string;
}

/**
 * <p>State information about the operation step.</p>
 */
export interface ClusterOperationStepInfo {
  /**
   * <p>The steps current status.</p>
   */
  StepStatus?: string;
}

/**
 * <p>Step taken during a cluster operation.</p>
 */
export interface ClusterOperationStep {
  /**
   * <p>Information about the step and its status.</p>
   */
  StepInfo?: ClusterOperationStepInfo;

  /**
   * <p>The name of the step.</p>
   */
  StepName?: string;
}

/**
 * <p>Specifies the configuration to use for the brokers.</p>
 */
export interface ConfigurationInfo {
  /**
   * <p>ARN of the configuration to use.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The revision of the configuration to use.</p>
   */
  Revision: number | undefined;
}

/**
 * <p>Information about cluster attributes that can be updated via update APIs.</p>
 */
export interface MutableClusterInfo {
  /**
   * <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   */
  BrokerEBSVolumeInfo?: BrokerEBSVolumeInfo[];

  /**
   * <p>Information about the changes in the configuration of the brokers.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  /**
   * <p>The Apache Kafka version.</p>
   */
  KafkaVersion?: string;

  /**
   * <p>You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>Information about the Amazon MSK broker type.</p>
   */
  InstanceType?: string;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo?: ConnectivityInfo;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;
}

/**
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationInfo {
  /**
   * <p>The ID of the API request that triggered this operation.</p>
   */
  ClientRequestId?: string;

  /**
   * <p>ARN of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The time that the operation was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time at which the operation finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>Describes the error if the operation fails.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>ARN of the cluster operation.</p>
   */
  OperationArn?: string;

  /**
   * <p>State of the cluster operation.</p>
   */
  OperationState?: string;

  /**
   * <p>Steps completed during the operation.</p>
   */
  OperationSteps?: ClusterOperationStep[];

  /**
   * <p>Type of the cluster operation.</p>
   */
  OperationType?: string;

  /**
   * <p>Information about cluster attributes before a cluster is updated.</p>
   */
  SourceClusterInfo?: MutableClusterInfo;

  /**
   * <p>Information about cluster attributes after a cluster is updated.</p>
   */
  TargetClusterInfo?: MutableClusterInfo;
}

/**
 * <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>
 */
export interface CompatibleKafkaVersion {
  /**
   * <p>An Apache Kafka version.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A list of Apache Kafka versions.</p>
   */
  TargetVersions?: string[];
}

/**
 * <p>Describes a configuration revision.</p>
 */
export interface ConfigurationRevision {
  /**
   * <p>The time when the configuration revision was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * <p>The revision number.</p>
   */
  Revision: number | undefined;
}

export enum ConfigurationState {
  ACTIVE = "ACTIVE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

/**
 * <p>Represents an MSK Configuration.</p>
 */
export interface Configuration {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the configuration.</p>
   */
  Description: string | undefined;

  /**
   * <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   */
  KafkaVersions: string[] | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State: ConfigurationState | string | undefined;
}

export enum KafkaVersionStatus {
  ACTIVE = "ACTIVE",
  DEPRECATED = "DEPRECATED",
}

export interface KafkaVersion {
  Version?: string;
  Status?: KafkaVersionStatus | string;
}

/**
 * <p>BrokerNodeInfo</p>
 */
export interface BrokerNodeInfo {
  /**
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * <p>The ID of the broker.</p>
   */
  BrokerId?: number;

  /**
   * <p>The client subnet to which this broker node belongs.</p>
   */
  ClientSubnet?: string;

  /**
   * <p>The virtual private cloud (VPC) of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>Endpoints for accessing the broker.</p>
   */
  Endpoints?: string[];
}

export enum NodeType {
  BROKER = "BROKER",
}

/**
 * <p>Zookeeper node information.</p>
 */
export interface ZookeeperNodeInfo {
  /**
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * <p>The virtual private cloud (VPC) IP address of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * <p>Endpoints for accessing the ZooKeeper.</p>
   */
  Endpoints?: string[];

  /**
   * <p>The role-specific ID for Zookeeper.</p>
   */
  ZookeeperId?: number;

  /**
   * <p>The version of Zookeeper.</p>
   */
  ZookeeperVersion?: string;
}

/**
 * <p>The node information object.</p>
 */
export interface NodeInfo {
  /**
   * <p>The start time.</p>
   */
  AddedToClusterTime?: string;

  /**
   * <p>The broker node info.</p>
   */
  BrokerNodeInfo?: BrokerNodeInfo;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the node.</p>
   */
  NodeARN?: string;

  /**
   * <p>The node type.</p>
   */
  NodeType?: NodeType | string;

  /**
   * <p>The ZookeeperNodeInfo.</p>
   */
  ZookeeperNodeInfo?: ZookeeperNodeInfo;
}

/**
 * <p>Error info for scram secret associate/disassociate failure.</p>
 */
export interface UnprocessedScramSecret {
  /**
   * <p>Error code for associate/disassociate failure.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Error message for associate/disassociate failure.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>AWS Secrets Manager secret ARN.</p>
   */
  SecretArn?: string;
}

/**
 * <p>Returns information about an error.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Associates sasl scram secrets to cluster.</p>
 */
export interface BatchAssociateScramSecretRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   */
  SecretArnList: string[] | undefined;
}

export interface BatchAssociateScramSecretResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>List of errors when associating secrets to cluster.</p>
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[];
}

/**
 * <p>Returns information about an error.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

/**
 * <p>Disassociates sasl scram secrets to cluster.</p>
 */
export interface BatchDisassociateScramSecretRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   */
  SecretArnList: string[] | undefined;
}

export interface BatchDisassociateScramSecretResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>List of errors when disassociating secrets to cluster.</p>
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[];
}

/**
 * <p>Returns information about an error.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.InvalidParameter = opts.InvalidParameter;
    this.Message = opts.Message;
  }
}

export interface CreateClusterRequest {
  /**
   * <p>Information about the broker nodes in the cluster.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all client authentication related information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion: string | undefined;

  LoggingInfo?: LoggingInfo;
  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>Create tags when creating the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;
}

export interface CreateClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState | string;
}

/**
 * <p>Provisioned cluster request.</p>
 */
export interface ProvisionedRequest {
  /**
   * <p>Information about the brokers.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * <p>The Apache Kafka version that you want for the cluster.</p>
   */
  KafkaVersion: string | undefined;

  /**
   * <p>Log delivery information for the cluster.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;
}

/**
 * <p>Serverless cluster request.</p>
 */
export interface ServerlessRequest {
  /**
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ServerlessClientAuthentication;
}

export interface CreateClusterV2Request {
  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>A map of tags that you want the cluster to have.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Information about the provisioned cluster.</p>
   */
  Provisioned?: ProvisionedRequest;

  /**
   * <p>Information about the serverless cluster.</p>
   */
  Serverless?: ServerlessRequest;
}

export interface CreateClusterV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The type of the cluster. The possible states are PROVISIONED or SERVERLESS.</p>
   */
  ClusterType?: ClusterType | string;
}

export interface CreateConfigurationRequest {
  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties: Uint8Array | undefined;
}

export interface CreateConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>The name of the configuration.</p>
   */
  Name?: string;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState | string;
}

export interface DeleteClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;
}

export interface DeleteClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState | string;
}

export interface DeleteConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   */
  Arn: string | undefined;
}

export interface DeleteConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState | string;
}

export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export interface DescribeClusterResponse {
  /**
   * <p>The cluster information.</p>
   */
  ClusterInfo?: ClusterInfo;
}

export interface DescribeClusterOperationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   */
  ClusterOperationArn: string | undefined;
}

export interface DescribeClusterOperationResponse {
  /**
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationInfo;
}

export interface DescribeClusterV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export interface DescribeClusterV2Response {
  /**
   * <p>The cluster information.</p>
   */
  ClusterInfo?: Cluster;
}

export interface DescribeConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

export interface DescribeConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>The name of the configuration.</p>
   */
  Name?: string;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState | string;
}

export interface DescribeConfigurationRevisionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A string that uniquely identifies a revision of an MSK configuration.</p>
   */
  Revision: number | undefined;
}

export interface DescribeConfigurationRevisionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The revision number.</p>
   */
  Revision?: number;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties?: Uint8Array;
}

export interface GetBootstrapBrokersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export interface GetBootstrapBrokersResponse {
  /**
   * <p>A string containing one or more hostname:port pairs.</p>
   */
  BootstrapBrokerString?: string;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringTls?: string;

  /**
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   */
  BootstrapBrokerStringSaslScram?: string;

  /**
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   */
  BootstrapBrokerStringSaslIam?: string;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringPublicTls?: string;

  /**
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   */
  BootstrapBrokerStringPublicSaslScram?: string;

  /**
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   */
  BootstrapBrokerStringPublicSaslIam?: string;
}

export interface GetCompatibleKafkaVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster check.</p>
   */
  ClusterArn?: string;
}

export interface GetCompatibleKafkaVersionsResponse {
  /**
   * <p>A list of CompatibleKafkaVersion objects.</p>
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[];
}

export interface ListClusterOperationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListClusterOperationsResponse {
  /**
   * <p>An array of cluster operation information objects.</p>
   */
  ClusterOperationInfoList?: ClusterOperationInfo[];

  /**
   * <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>
   */
  NextToken?: string;
}

export interface ListClustersRequest {
  /**
   * <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   */
  ClusterNameFilter?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListClustersResponse {
  /**
   * <p>Information on each of the MSK clusters in the response.</p>
   */
  ClusterInfoList?: ClusterInfo[];

  /**
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListClustersV2Request {
  /**
   * <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   */
  ClusterNameFilter?: string;

  /**
   * <p>Specify either PROVISIONED or SERVERLESS.</p>
   */
  ClusterTypeFilter?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListClustersV2Response {
  /**
   * <p>Information on each of the MSK clusters in the response.</p>
   */
  ClusterInfoList?: Cluster[];

  /**
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListConfigurationRevisionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListConfigurationRevisionsResponse {
  /**
   * <p>Paginated results marker.</p>
   */
  NextToken?: string;

  /**
   * <p>List of ConfigurationRevision objects.</p>
   */
  Revisions?: ConfigurationRevision[];
}

export interface ListConfigurationsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListConfigurationsResponse {
  /**
   * <p>An array of MSK configurations.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListKafkaVersionsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListKafkaVersionsResponse {
  KafkaVersions?: KafkaVersion[];
  NextToken?: string;
}

export interface ListNodesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export interface ListNodesResponse {
  /**
   * <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>List containing a NodeInfo object.</p>
   */
  NodeInfoList?: NodeInfo[];
}

export interface ListScramSecretsRequest {
  /**
   * <p>The arn of the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maxResults of the query.</p>
   */
  MaxResults?: number;

  /**
   * <p>The nextToken of the query.</p>
   */
  NextToken?: string;
}

export interface ListScramSecretsResponse {
  /**
   * <p>Paginated results marker.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of scram secrets associated with the cluster.</p>
   */
  SecretArnList?: string[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * Reboots a node.
 */
export interface RebootBrokerRequest {
  /**
   * <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>
   */
  BrokerIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;
}

export interface RebootBrokerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tag keys must be unique for a given cluster. In addition, the following restrictions apply:</p>
   *             <ul>
   *                <li>
   *                   <p>Each tag key must be unique. If you add a tag with a key that's already in
   *                   use, your new tag overwrites the existing key-value pair. </p>
   *                </li>
   *                <li>
   *                   <p>You can't start a tag key with aws: because this prefix is reserved for use
   *                   by  AWS.  AWS creates tags that begin with this prefix on your behalf, but
   *                   you can't edit or delete them.</p>
   *                </li>
   *                <li>
   *                   <p>Tag keys must be between 1 and 128 Unicode characters in length.</p>
   *                </li>
   *                <li>
   *                   <p>Tag keys must consist of the following characters: Unicode letters, digits,
   *                   white space, and the following special characters: _ . / = + -
   *                      @.</p>
   *                </li>
   *             </ul>
   */
  TagKeys: string[] | undefined;
}

export interface UpdateBrokerCountRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
   */
  TargetNumberOfBrokerNodes: number | undefined;
}

export interface UpdateBrokerCountResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateBrokerStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
   */
  TargetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] | undefined;
}

export interface UpdateBrokerStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateBrokerTypeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>
   */
  TargetInstanceType: string | undefined;
}

export interface UpdateBrokerTypeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateClusterConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo: ConfigurationInfo | undefined;

  /**
   * <p>The version of the cluster that needs to be updated.</p>
   */
  CurrentVersion: string | undefined;
}

export interface UpdateClusterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateClusterKafkaVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The custom configuration that should be applied on the new version of cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>Current cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Target Kafka version.</p>
   */
  TargetKafkaVersion: string | undefined;
}

export interface UpdateClusterKafkaVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties: Uint8Array | undefined;
}

export interface UpdateConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;
}

/**
 * Request body for UpdateConnectivity.
 */
export interface UpdateConnectivityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo: ConnectivityInfo | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;
}

export interface UpdateConnectivityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * Request body for UpdateMonitoring.
 */
export interface UpdateMonitoringRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  LoggingInfo?: LoggingInfo;
}

export interface UpdateMonitoringResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

export interface UpdateSecurityRequest {
  /**
   * <p>Includes all client authentication related information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;
}

export interface UpdateSecurityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>
 */
export interface UpdateStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * <p>Controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode | string;

  /**
   * <p>size of the EBS volume to update.</p>
   */
  VolumeSizeGB?: number;
}

export interface UpdateStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @internal
 */
export const ProvisionedThroughputFilterSensitiveLog = (obj: ProvisionedThroughput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrokerEBSVolumeInfoFilterSensitiveLog = (obj: BrokerEBSVolumeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublicAccessFilterSensitiveLog = (obj: PublicAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectivityInfoFilterSensitiveLog = (obj: ConnectivityInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EBSStorageInfoFilterSensitiveLog = (obj: EBSStorageInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StorageInfoFilterSensitiveLog = (obj: StorageInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrokerNodeGroupInfoFilterSensitiveLog = (obj: BrokerNodeGroupInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IamFilterSensitiveLog = (obj: Iam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScramFilterSensitiveLog = (obj: Scram): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SaslFilterSensitiveLog = (obj: Sasl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TlsFilterSensitiveLog = (obj: Tls): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnauthenticatedFilterSensitiveLog = (obj: Unauthenticated): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientAuthenticationFilterSensitiveLog = (obj: ClientAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrokerSoftwareInfoFilterSensitiveLog = (obj: BrokerSoftwareInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionAtRestFilterSensitiveLog = (obj: EncryptionAtRest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionInTransitFilterSensitiveLog = (obj: EncryptionInTransit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionInfoFilterSensitiveLog = (obj: EncryptionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsFilterSensitiveLog = (obj: CloudWatchLogs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirehoseFilterSensitiveLog = (obj: Firehose): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3FilterSensitiveLog = (obj: S3): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrokerLogsFilterSensitiveLog = (obj: BrokerLogs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingInfoFilterSensitiveLog = (obj: LoggingInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JmxExporterInfoFilterSensitiveLog = (obj: JmxExporterInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeExporterInfoFilterSensitiveLog = (obj: NodeExporterInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrometheusInfoFilterSensitiveLog = (obj: PrometheusInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenMonitoringInfoFilterSensitiveLog = (obj: OpenMonitoringInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedFilterSensitiveLog = (obj: Provisioned): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerlessSaslFilterSensitiveLog = (obj: ServerlessSasl): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerlessClientAuthenticationFilterSensitiveLog = (obj: ServerlessClientAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigFilterSensitiveLog = (obj: VpcConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerlessFilterSensitiveLog = (obj: Serverless): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StateInfoFilterSensitiveLog = (obj: StateInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JmxExporterFilterSensitiveLog = (obj: JmxExporter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeExporterFilterSensitiveLog = (obj: NodeExporter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrometheusFilterSensitiveLog = (obj: Prometheus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OpenMonitoringFilterSensitiveLog = (obj: OpenMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterInfoFilterSensitiveLog = (obj: ClusterInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorInfoFilterSensitiveLog = (obj: ErrorInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterOperationStepInfoFilterSensitiveLog = (obj: ClusterOperationStepInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterOperationStepFilterSensitiveLog = (obj: ClusterOperationStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationInfoFilterSensitiveLog = (obj: ConfigurationInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MutableClusterInfoFilterSensitiveLog = (obj: MutableClusterInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterOperationInfoFilterSensitiveLog = (obj: ClusterOperationInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompatibleKafkaVersionFilterSensitiveLog = (obj: CompatibleKafkaVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationRevisionFilterSensitiveLog = (obj: ConfigurationRevision): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationFilterSensitiveLog = (obj: Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaVersionFilterSensitiveLog = (obj: KafkaVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BrokerNodeInfoFilterSensitiveLog = (obj: BrokerNodeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZookeeperNodeInfoFilterSensitiveLog = (obj: ZookeeperNodeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeInfoFilterSensitiveLog = (obj: NodeInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedScramSecretFilterSensitiveLog = (obj: UnprocessedScramSecret): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateScramSecretRequestFilterSensitiveLog = (obj: BatchAssociateScramSecretRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateScramSecretResponseFilterSensitiveLog = (obj: BatchAssociateScramSecretResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateScramSecretRequestFilterSensitiveLog = (
  obj: BatchDisassociateScramSecretRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateScramSecretResponseFilterSensitiveLog = (
  obj: BatchDisassociateScramSecretResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterRequestFilterSensitiveLog = (obj: CreateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterResponseFilterSensitiveLog = (obj: CreateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedRequestFilterSensitiveLog = (obj: ProvisionedRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServerlessRequestFilterSensitiveLog = (obj: ServerlessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterV2RequestFilterSensitiveLog = (obj: CreateClusterV2Request): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterV2ResponseFilterSensitiveLog = (obj: CreateClusterV2Response): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationRequestFilterSensitiveLog = (obj: CreateConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationResponseFilterSensitiveLog = (obj: CreateConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterRequestFilterSensitiveLog = (obj: DeleteClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterResponseFilterSensitiveLog = (obj: DeleteClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationRequestFilterSensitiveLog = (obj: DeleteConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationResponseFilterSensitiveLog = (obj: DeleteConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterRequestFilterSensitiveLog = (obj: DescribeClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterResponseFilterSensitiveLog = (obj: DescribeClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterOperationRequestFilterSensitiveLog = (obj: DescribeClusterOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterOperationResponseFilterSensitiveLog = (obj: DescribeClusterOperationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterV2RequestFilterSensitiveLog = (obj: DescribeClusterV2Request): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterV2ResponseFilterSensitiveLog = (obj: DescribeClusterV2Response): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationRequestFilterSensitiveLog = (obj: DescribeConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationResponseFilterSensitiveLog = (obj: DescribeConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationRevisionRequestFilterSensitiveLog = (
  obj: DescribeConfigurationRevisionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationRevisionResponseFilterSensitiveLog = (
  obj: DescribeConfigurationRevisionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBootstrapBrokersRequestFilterSensitiveLog = (obj: GetBootstrapBrokersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBootstrapBrokersResponseFilterSensitiveLog = (obj: GetBootstrapBrokersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleKafkaVersionsRequestFilterSensitiveLog = (obj: GetCompatibleKafkaVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCompatibleKafkaVersionsResponseFilterSensitiveLog = (obj: GetCompatibleKafkaVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClusterOperationsRequestFilterSensitiveLog = (obj: ListClusterOperationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClusterOperationsResponseFilterSensitiveLog = (obj: ListClusterOperationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersRequestFilterSensitiveLog = (obj: ListClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersResponseFilterSensitiveLog = (obj: ListClustersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersV2RequestFilterSensitiveLog = (obj: ListClustersV2Request): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersV2ResponseFilterSensitiveLog = (obj: ListClustersV2Response): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationRevisionsRequestFilterSensitiveLog = (obj: ListConfigurationRevisionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationRevisionsResponseFilterSensitiveLog = (obj: ListConfigurationRevisionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationsRequestFilterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationsResponseFilterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKafkaVersionsRequestFilterSensitiveLog = (obj: ListKafkaVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListKafkaVersionsResponseFilterSensitiveLog = (obj: ListKafkaVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesRequestFilterSensitiveLog = (obj: ListNodesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodesResponseFilterSensitiveLog = (obj: ListNodesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListScramSecretsRequestFilterSensitiveLog = (obj: ListScramSecretsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListScramSecretsResponseFilterSensitiveLog = (obj: ListScramSecretsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootBrokerRequestFilterSensitiveLog = (obj: RebootBrokerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootBrokerResponseFilterSensitiveLog = (obj: RebootBrokerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerCountRequestFilterSensitiveLog = (obj: UpdateBrokerCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerCountResponseFilterSensitiveLog = (obj: UpdateBrokerCountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerStorageRequestFilterSensitiveLog = (obj: UpdateBrokerStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerStorageResponseFilterSensitiveLog = (obj: UpdateBrokerStorageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerTypeRequestFilterSensitiveLog = (obj: UpdateBrokerTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBrokerTypeResponseFilterSensitiveLog = (obj: UpdateBrokerTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterConfigurationRequestFilterSensitiveLog = (obj: UpdateClusterConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterConfigurationResponseFilterSensitiveLog = (obj: UpdateClusterConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterKafkaVersionRequestFilterSensitiveLog = (obj: UpdateClusterKafkaVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterKafkaVersionResponseFilterSensitiveLog = (obj: UpdateClusterKafkaVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationRequestFilterSensitiveLog = (obj: UpdateConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationResponseFilterSensitiveLog = (obj: UpdateConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectivityRequestFilterSensitiveLog = (obj: UpdateConnectivityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectivityResponseFilterSensitiveLog = (obj: UpdateConnectivityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringRequestFilterSensitiveLog = (obj: UpdateMonitoringRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMonitoringResponseFilterSensitiveLog = (obj: UpdateMonitoringResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityRequestFilterSensitiveLog = (obj: UpdateSecurityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityResponseFilterSensitiveLog = (obj: UpdateSecurityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStorageRequestFilterSensitiveLog = (obj: UpdateStorageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStorageResponseFilterSensitiveLog = (obj: UpdateStorageResponse): any => ({
  ...obj,
});
