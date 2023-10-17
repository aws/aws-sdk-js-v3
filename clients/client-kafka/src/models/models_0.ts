// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KafkaServiceException as __BaseException } from "./KafkaServiceException";

/**
 * @public
 * <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
 */
export interface ProvisionedThroughput {
  /**
   * @public
   * <p>Provisioned throughput is enabled or not.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.</p>
   */
  VolumeThroughput?: number;
}

/**
 * @public
 * <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 */
export interface BrokerEBSVolumeInfo {
  /**
   * @public
   * <p>The ID of the broker to update.</p>
   */
  KafkaBrokerNodeId: string | undefined;

  /**
   * @public
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * @public
   * <p>Size of the EBS volume to update.</p>
   */
  VolumeSizeGB?: number;
}

/**
 * @public
 * @enum
 */
export const VpcConnectionState = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DEACTIVATING: "DEACTIVATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  REJECTED: "REJECTED",
  REJECTING: "REJECTING",
} as const;

/**
 * @public
 */
export type VpcConnectionState = (typeof VpcConnectionState)[keyof typeof VpcConnectionState];

/**
 * @public
 * <p>The client VPC connection object.</p>
 */
export interface ClientVpcConnection {
  /**
   * @public
   * <p>Information about the auth scheme of Vpc Connection.</p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>Creation time of the Vpc Connection.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>State of the Vpc Connection.</p>
   */
  State?: VpcConnectionState;

  /**
   * @public
   * <p>The ARN that identifies the Vpc Connection.</p>
   */
  VpcConnectionArn: string | undefined;

  /**
   * @public
   * <p>The Owner of the Vpc Connection.</p>
   */
  Owner?: string;
}

/**
 * @public
 * @enum
 */
export const ClusterType = {
  PROVISIONED: "PROVISIONED",
  SERVERLESS: "SERVERLESS",
} as const;

/**
 * @public
 */
export type ClusterType = (typeof ClusterType)[keyof typeof ClusterType];

/**
 * @public
 * @enum
 */
export const BrokerAZDistribution = {
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type BrokerAZDistribution = (typeof BrokerAZDistribution)[keyof typeof BrokerAZDistribution];

/**
 * @public
 * Public access control for brokers.
 */
export interface PublicAccess {
  /**
   * @public
   * <p>The value DISABLED indicates that public access is turned off. SERVICE_PROVIDED_EIPS indicates that public access is turned on.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Details for IAM access control for VPC connectivity.</p>
 */
export interface VpcConnectivityIam {
  /**
   * @public
   * <p>SASL/IAM authentication is on or off for VPC connectivity.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
 */
export interface VpcConnectivityScram {
  /**
   * @public
   * <p>SASL/SCRAM authentication is on or off for VPC connectivity.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Details for SASL client authentication for VPC connectivity.</p>
 */
export interface VpcConnectivitySasl {
  /**
   * @public
   * <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
   */
  Scram?: VpcConnectivityScram;

  /**
   * @public
   * <p>Details for SASL/IAM client authentication for VPC connectivity.</p>
   */
  Iam?: VpcConnectivityIam;
}

/**
 * @public
 * <p>Details for TLS client authentication for VPC connectivity.</p>
 */
export interface VpcConnectivityTls {
  /**
   * @public
   * <p>TLS authentication is on or off for VPC connectivity.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Includes all client authentication information for VPC connectivity.</p>
 */
export interface VpcConnectivityClientAuthentication {
  /**
   * @public
   * <p>SASL authentication type details for VPC connectivity.</p>
   */
  Sasl?: VpcConnectivitySasl;

  /**
   * @public
   * <p>TLS authentication type details for VPC connectivity.</p>
   */
  Tls?: VpcConnectivityTls;
}

/**
 * @public
 * VPC connectivity access control for brokers.
 */
export interface VpcConnectivity {
  /**
   * @public
   * <p>Includes all client authentication information for VPC connectivity.</p>
   */
  ClientAuthentication?: VpcConnectivityClientAuthentication;
}

/**
 * @public
 * <p>Information about the broker access configuration.</p>
 */
export interface ConnectivityInfo {
  /**
   * @public
   * <p>Public access control for brokers.</p>
   */
  PublicAccess?: PublicAccess;

  /**
   * @public
   * <p>VPC connectivity access control for brokers.</p>
   */
  VpcConnectivity?: VpcConnectivity;
}

/**
 * @public
 * <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>
 */
export interface EBSStorageInfo {
  /**
   * @public
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * @public
   * <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   */
  VolumeSize?: number;
}

/**
 * @public
 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
 */
export interface StorageInfo {
  /**
   * @public
   * <p>EBS volume information.</p>
   */
  EbsStorageInfo?: EBSStorageInfo;
}

/**
 * @public
 * <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
 */
export interface BrokerNodeGroupInfo {
  /**
   * @public
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   */
  BrokerAZDistribution?: BrokerAZDistribution;

  /**
   * @public
   * <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.</p>
   */
  ClientSubnets: string[] | undefined;

  /**
   * @public
   * <p>The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
   * kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>
   */
  InstanceType: string | undefined;

  /**
   * @public
   * <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   */
  StorageInfo?: StorageInfo;

  /**
   * @public
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo?: ConnectivityInfo;

  /**
   * @public
   * <p>The list of zoneIds for the cluster in the virtual private cloud (VPC).</p>
   */
  ZoneIds?: string[];
}

/**
 * @public
 * <p>Details for IAM access control.</p>
 */
export interface Iam {
  /**
   * @public
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Details for SASL/SCRAM client authentication.</p>
 */
export interface Scram {
  /**
   * @public
   * <p>SASL/SCRAM authentication is enabled or not.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Details for client authentication using SASL.</p>
 */
export interface Sasl {
  /**
   * @public
   * <p>Details for SASL/SCRAM client authentication.</p>
   */
  Scram?: Scram;

  /**
   * @public
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Iam?: Iam;
}

/**
 * @public
 * <p>Details for client authentication using TLS.</p>
 */
export interface Tls {
  /**
   * @public
   * <p>List of ACM Certificate Authority ARNs.</p>
   */
  CertificateAuthorityArnList?: string[];

  /**
   * @public
   * <p>Specifies whether you want to turn on or turn off TLS authentication.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 */
export interface Unauthenticated {
  /**
   * @public
   * <p>Specifies whether you want to turn on or turn off unauthenticated traffic to your cluster.</p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p>Includes all client authentication information.</p>
 */
export interface ClientAuthentication {
  /**
   * @public
   * <p>Details for ClientAuthentication using SASL.</p>
   */
  Sasl?: Sasl;

  /**
   * @public
   * <p>Details for ClientAuthentication using TLS.</p>
   */
  Tls?: Tls;

  /**
   * @public
   * <p>Contains information about unauthenticated traffic to the cluster.</p>
   */
  Unauthenticated?: Unauthenticated;
}

/**
 * @public
 * <p>Information about the current software installed on the cluster.</p>
 */
export interface BrokerSoftwareInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>
   */
  ConfigurationArn?: string;

  /**
   * @public
   * <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>
   */
  ConfigurationRevision?: number;

  /**
   * @public
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion?: string;
}

/**
 * @public
 * <p>The data-volume encryption details.</p>
 */
export interface EncryptionAtRest {
  /**
   * @public
   * <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>
   */
  DataVolumeKMSKeyId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ClientBroker = {
  PLAINTEXT: "PLAINTEXT",
  TLS: "TLS",
  TLS_PLAINTEXT: "TLS_PLAINTEXT",
} as const;

/**
 * @public
 */
export type ClientBroker = (typeof ClientBroker)[keyof typeof ClientBroker];

/**
 * @public
 * <p>The settings for encrypting data in transit.</p>
 */
export interface EncryptionInTransit {
  /**
   * @public
   * <p>Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.</p>
   *             <p>
   *                TLS means that client-broker communication is enabled with TLS only.</p>
   *             <p>
   *                TLS_PLAINTEXT means that client-broker communication is enabled for both TLS-encrypted, as well as plaintext data.</p>
   *             <p>
   *                PLAINTEXT means that client-broker communication is enabled in plaintext only.</p>
   *             <p>The default value is TLS_PLAINTEXT.</p>
   */
  ClientBroker?: ClientBroker;

  /**
   * @public
   * <p>When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.</p>
   *             <p>The default value is true.</p>
   */
  InCluster?: boolean;
}

/**
 * @public
 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 */
export interface EncryptionInfo {
  /**
   * @public
   * <p>The data-volume encryption details.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * @public
   * <p>The details for encryption in transit.</p>
   */
  EncryptionInTransit?: EncryptionInTransit;
}

/**
 * @public
 * @enum
 */
export const EnhancedMonitoring = {
  DEFAULT: "DEFAULT",
  PER_BROKER: "PER_BROKER",
  PER_TOPIC_PER_BROKER: "PER_TOPIC_PER_BROKER",
  PER_TOPIC_PER_PARTITION: "PER_TOPIC_PER_PARTITION",
} as const;

/**
 * @public
 */
export type EnhancedMonitoring = (typeof EnhancedMonitoring)[keyof typeof EnhancedMonitoring];

/**
 * @public
 */
export interface CloudWatchLogs {
  Enabled: boolean | undefined;
  LogGroup?: string;
}

/**
 * @public
 */
export interface Firehose {
  DeliveryStream?: string;
  Enabled: boolean | undefined;
}

/**
 * @public
 */
export interface S3 {
  Bucket?: string;
  Enabled: boolean | undefined;
  Prefix?: string;
}

/**
 * @public
 */
export interface BrokerLogs {
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
  S3?: S3;
}

/**
 * @public
 */
export interface LoggingInfo {
  BrokerLogs: BrokerLogs | undefined;
}

/**
 * @public
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 */
export interface JmxExporterInfo {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * @public
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 */
export interface NodeExporterInfo {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * @public
 * <p>Prometheus settings.</p>
 */
export interface PrometheusInfo {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporterInfo;

  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  NodeExporter?: NodeExporterInfo;
}

/**
 * @public
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoringInfo {
  /**
   * @public
   * <p>Prometheus settings.</p>
   */
  Prometheus: PrometheusInfo | undefined;
}

/**
 * @public
 * @enum
 */
export const StorageMode = {
  LOCAL: "LOCAL",
  TIERED: "TIERED",
} as const;

/**
 * @public
 */
export type StorageMode = (typeof StorageMode)[keyof typeof StorageMode];

/**
 * @public
 * <p>Provisioned cluster.</p>
 */
export interface Provisioned {
  /**
   * @public
   * <p>Information about the brokers.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * @public
   * <p>Information about the Apache Kafka version deployed on the brokers.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * @public
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * @public
   * <p>Log delivery information for the cluster.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * @public
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * @public
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * @public
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster on a TLS port.</p>
   */
  ZookeeperConnectStringTls?: string;

  /**
   * @public
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;
}

/**
 * @public
 * <p>Details for client authentication using SASL.</p>
 */
export interface ServerlessSasl {
  /**
   * @public
   * <p>Indicates whether IAM access control is enabled.</p>
   */
  Iam?: Iam;
}

/**
 * @public
 * <p>Includes all client authentication information.</p>
 */
export interface ServerlessClientAuthentication {
  /**
   * @public
   * <p>Details for ClientAuthentication using SASL.</p>
   */
  Sasl?: ServerlessSasl;
}

/**
 * @public
 * <p>The configuration of the Amazon VPCs for the cluster.</p>
 */
export interface VpcConfig {
  /**
   * @public
   * <p>The IDs of the subnets associated with the cluster.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The IDs of the security groups associated with the cluster.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 * <p>Serverless cluster.</p>
 */
export interface Serverless {
  /**
   * @public
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ServerlessClientAuthentication;
}

/**
 * @public
 * @enum
 */
export const ClusterState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  HEALING: "HEALING",
  MAINTENANCE: "MAINTENANCE",
  REBOOTING_BROKER: "REBOOTING_BROKER",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 */
export interface StateInfo {
  Code?: string;
  Message?: string;
}

/**
 * @public
 * <p>Returns information about a cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</p>
   */
  ActiveOperationArn?: string;

  /**
   * @public
   * <p>Cluster Type.</p>
   */
  ClusterType?: ClusterType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The time when the cluster was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState;

  /**
   * @public
   * <p>State Info for the Amazon MSK cluster.</p>
   */
  StateInfo?: StateInfo;

  /**
   * @public
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Information about the provisioned cluster.</p>
   */
  Provisioned?: Provisioned;

  /**
   * @public
   * <p>Information about the serverless cluster.</p>
   */
  Serverless?: Serverless;
}

/**
 * @public
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 */
export interface JmxExporter {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * @public
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 */
export interface NodeExporter {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * @public
 * <p>Prometheus settings.</p>
 */
export interface Prometheus {
  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporter;

  /**
   * @public
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   */
  NodeExporter?: NodeExporter;
}

/**
 * @public
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoring {
  /**
   * @public
   * <p>Prometheus settings.</p>
   */
  Prometheus: Prometheus | undefined;
}

/**
 * @public
 * <p>Returns information about a cluster.</p>
 */
export interface ClusterInfo {
  /**
   * @public
   * <p>Arn of active cluster operation.</p>
   */
  ActiveOperationArn?: string;

  /**
   * @public
   * <p>Information about the broker nodes.</p>
   */
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The time when the cluster was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * @public
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * @public
   * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>Settings for open monitoring using Prometheus.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  LoggingInfo?: LoggingInfo;
  /**
   * @public
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * @public
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState;

  StateInfo?: StateInfo;
  /**
   * @public
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * @public
   * <p>The connection string to use to connect to zookeeper cluster on Tls port.</p>
   */
  ZookeeperConnectStringTls?: string;

  /**
   * @public
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;
}

/**
 * @public
 * <p>Returns information about an error state of the cluster.</p>
 */
export interface ErrorInfo {
  /**
   * @public
   * <p>A number describing the error programmatically.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>An optional field to provide more details about the error.</p>
   */
  ErrorString?: string;
}

/**
 * @public
 * <p>State information about the operation step.</p>
 */
export interface ClusterOperationStepInfo {
  /**
   * @public
   * <p>The steps current status.</p>
   */
  StepStatus?: string;
}

/**
 * @public
 * <p>Step taken during a cluster operation.</p>
 */
export interface ClusterOperationStep {
  /**
   * @public
   * <p>Information about the step and its status.</p>
   */
  StepInfo?: ClusterOperationStepInfo;

  /**
   * @public
   * <p>The name of the step.</p>
   */
  StepName?: string;
}

/**
 * @public
 * <p>Specifies the configuration to use for the brokers.</p>
 */
export interface ConfigurationInfo {
  /**
   * @public
   * <p>ARN of the configuration to use.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The revision of the configuration to use.</p>
   */
  Revision: number | undefined;
}

/**
 * @public
 * <p>Information about cluster attributes that can be updated via update APIs.</p>
 */
export interface MutableClusterInfo {
  /**
   * @public
   * <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   */
  BrokerEBSVolumeInfo?: BrokerEBSVolumeInfo[];

  /**
   * @public
   * <p>Information about the changes in the configuration of the brokers.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * @public
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * @public
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  /**
   * @public
   * <p>The Apache Kafka version.</p>
   */
  KafkaVersion?: string;

  /**
   * @public
   * <p>You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * @public
   * <p>Information about the Amazon MSK broker type.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * @public
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo?: ConnectivityInfo;

  /**
   * @public
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;
}

/**
 * @public
 * @enum
 */
export const UserIdentityType = {
  AWSACCOUNT: "AWSACCOUNT",
  AWSSERVICE: "AWSSERVICE",
} as const;

/**
 * @public
 */
export type UserIdentityType = (typeof UserIdentityType)[keyof typeof UserIdentityType];

/**
 * @public
 * <p>Description of the requester that calls the API operation.</p>
 */
export interface UserIdentity {
  /**
   * @public
   * <p>The identity type of the requester that calls the API operation.</p>
   */
  Type?: UserIdentityType;

  /**
   * @public
   * <p>A unique identifier for the requester that calls the API operation.</p>
   */
  PrincipalId?: string;
}

/**
 * @public
 * <p>Description of the VPC connection.</p>
 */
export interface VpcConnectionInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  VpcConnectionArn?: string;

  /**
   * @public
   * <p>The owner of the VPC Connection.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>Description of the requester that calls the API operation.</p>
   */
  UserIdentity?: UserIdentity;

  /**
   * @public
   * <p>The time when Amazon MSK creates the VPC Connnection.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationInfo {
  /**
   * @public
   * <p>The ID of the API request that triggered this operation.</p>
   */
  ClientRequestId?: string;

  /**
   * @public
   * <p>ARN of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The time that the operation was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time at which the operation finished.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Describes the error if the operation fails.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * @public
   * <p>ARN of the cluster operation.</p>
   */
  OperationArn?: string;

  /**
   * @public
   * <p>State of the cluster operation.</p>
   */
  OperationState?: string;

  /**
   * @public
   * <p>Steps completed during the operation.</p>
   */
  OperationSteps?: ClusterOperationStep[];

  /**
   * @public
   * <p>Type of the cluster operation.</p>
   */
  OperationType?: string;

  /**
   * @public
   * <p>Information about cluster attributes before a cluster is updated.</p>
   */
  SourceClusterInfo?: MutableClusterInfo;

  /**
   * @public
   * <p>Information about cluster attributes after a cluster is updated.</p>
   */
  TargetClusterInfo?: MutableClusterInfo;

  /**
   * @public
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
   */
  VpcConnectionInfo?: VpcConnectionInfo;
}

/**
 * @public
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationV2Summary {
  /**
   * @public
   * <p>ARN of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>Type of the backend cluster.</p>
   */
  ClusterType?: ClusterType;

  /**
   * @public
   * <p>The time at which operation was started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time at which the operation finished.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>ARN of the cluster operation.</p>
   */
  OperationArn?: string;

  /**
   * @public
   * <p>State of the cluster operation.</p>
   */
  OperationState?: string;

  /**
   * @public
   * <p>Type of the cluster operation.</p>
   */
  OperationType?: string;
}

/**
 * @public
 * <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>
 */
export interface CompatibleKafkaVersion {
  /**
   * @public
   * <p>An Apache Kafka version.</p>
   */
  SourceVersion?: string;

  /**
   * @public
   * <p>A list of Apache Kafka versions.</p>
   */
  TargetVersions?: string[];
}

/**
 * @public
 * <p>Describes a configuration revision.</p>
 */
export interface ConfigurationRevision {
  /**
   * @public
   * <p>The time when the configuration revision was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The revision number.</p>
   */
  Revision: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ACTIVE: "ACTIVE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * @public
 * <p>Represents an MSK Configuration.</p>
 */
export interface Configuration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The time when the configuration was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   */
  KafkaVersions: string[] | undefined;

  /**
   * @public
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State: ConfigurationState | undefined;
}

/**
 * @public
 * <p>Details of an Amazon MSK Cluster.</p>
 */
export interface AmazonMskCluster {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Amazon MSK cluster.</p>
   */
  MskClusterArn: string | undefined;
}

/**
 * @public
 * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterClientVpcConfig {
  /**
   * @public
   * <p>The security groups to attach to the ENIs for the broker nodes.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The list of subnets in the client VPC to connect to.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * <p>Information about Kafka Cluster to be used as source / target for replication.</p>
 */
export interface KafkaCluster {
  /**
   * @public
   * <p>Details of an Amazon MSK Cluster.</p>
   */
  AmazonMskCluster: AmazonMskCluster | undefined;

  /**
   * @public
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   */
  VpcConfig: KafkaClusterClientVpcConfig | undefined;
}

/**
 * @public
 * <p>Information about Kafka Cluster used as source / target for replication.</p>
 */
export interface KafkaClusterDescription {
  /**
   * @public
   * <p>Details of an Amazon MSK Cluster.</p>
   */
  AmazonMskCluster?: AmazonMskCluster;

  /**
   * @public
   * <p>The alias of the Kafka cluster. Used to prefix names of replicated topics.</p>
   */
  KafkaClusterAlias?: string;

  /**
   * @public
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   */
  VpcConfig?: KafkaClusterClientVpcConfig;
}

/**
 * @public
 * <p>Summarized information about Kafka Cluster used as source / target for replication.</p>
 */
export interface KafkaClusterSummary {
  /**
   * @public
   * <p>Details of an Amazon MSK Cluster.</p>
   */
  AmazonMskCluster?: AmazonMskCluster;

  /**
   * @public
   * <p>The alias of the Kafka cluster. Used to prefix names of replicated topics.</p>
   */
  KafkaClusterAlias?: string;
}

/**
 * @public
 * @enum
 */
export const KafkaVersionStatus = {
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
} as const;

/**
 * @public
 */
export type KafkaVersionStatus = (typeof KafkaVersionStatus)[keyof typeof KafkaVersionStatus];

/**
 * @public
 */
export interface KafkaVersion {
  Version?: string;
  Status?: KafkaVersionStatus;
}

/**
 * @public
 * <p>BrokerNodeInfo</p>
 */
export interface BrokerNodeInfo {
  /**
   * @public
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * @public
   * <p>The ID of the broker.</p>
   */
  BrokerId?: number;

  /**
   * @public
   * <p>The client subnet to which this broker node belongs.</p>
   */
  ClientSubnet?: string;

  /**
   * @public
   * <p>The virtual private cloud (VPC) of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * @public
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * @public
   * <p>Endpoints for accessing the broker.</p>
   */
  Endpoints?: string[];
}

/**
 * @public
 * @enum
 */
export const NodeType = {
  BROKER: "BROKER",
} as const;

/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * <p>Zookeeper node information.</p>
 */
export interface ZookeeperNodeInfo {
  /**
   * @public
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * @public
   * <p>The virtual private cloud (VPC) IP address of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * @public
   * <p>Endpoints for accessing the ZooKeeper.</p>
   */
  Endpoints?: string[];

  /**
   * @public
   * <p>The role-specific ID for Zookeeper.</p>
   */
  ZookeeperId?: number;

  /**
   * @public
   * <p>The version of Zookeeper.</p>
   */
  ZookeeperVersion?: string;
}

/**
 * @public
 * <p>The node information object.</p>
 */
export interface NodeInfo {
  /**
   * @public
   * <p>The start time.</p>
   */
  AddedToClusterTime?: string;

  /**
   * @public
   * <p>The broker node info.</p>
   */
  BrokerNodeInfo?: BrokerNodeInfo;

  /**
   * @public
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the node.</p>
   */
  NodeARN?: string;

  /**
   * @public
   * <p>The node type.</p>
   */
  NodeType?: NodeType;

  /**
   * @public
   * <p>The ZookeeperNodeInfo.</p>
   */
  ZookeeperNodeInfo?: ZookeeperNodeInfo;
}

/**
 * @public
 * <p>Details about consumer group replication.</p>
 */
export interface ConsumerGroupReplication {
  /**
   * @public
   * <p>List of regular expression patterns indicating the consumer groups that should not be replicated.</p>
   */
  ConsumerGroupsToExclude?: string[];

  /**
   * @public
   * <p>List of regular expression patterns indicating the consumer groups to copy.</p>
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * @public
   * <p>Enables synchronization of consumer groups to target cluster.</p>
   */
  DetectAndCopyNewConsumerGroups?: boolean;

  /**
   * @public
   * <p>Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.</p>
   */
  SynchroniseConsumerGroupOffsets?: boolean;
}

/**
 * @public
 * @enum
 */
export const TargetCompressionType = {
  GZIP: "GZIP",
  LZ4: "LZ4",
  NONE: "NONE",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;

/**
 * @public
 */
export type TargetCompressionType = (typeof TargetCompressionType)[keyof typeof TargetCompressionType];

/**
 * @public
 * <p>Details about topic replication.</p>
 */
export interface TopicReplication {
  /**
   * @public
   * <p>Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.</p>
   */
  CopyAccessControlListsForTopics?: boolean;

  /**
   * @public
   * <p>Whether to periodically configure remote topics to match their corresponding upstream topics.</p>
   */
  CopyTopicConfigurations?: boolean;

  /**
   * @public
   * <p>Whether to periodically check for new topics and partitions.</p>
   */
  DetectAndCopyNewTopics?: boolean;

  /**
   * @public
   * <p>List of regular expression patterns indicating the topics that should not be replicated.</p>
   */
  TopicsToExclude?: string[];

  /**
   * @public
   * <p>List of regular expression patterns indicating the topics to copy.</p>
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * @public
 * <p>Specifies configuration for replication between a source and target Kafka cluster.</p>
 */
export interface ReplicationInfo {
  /**
   * @public
   * <p>Configuration relating to consumer group replication.</p>
   */
  ConsumerGroupReplication: ConsumerGroupReplication | undefined;

  /**
   * @public
   * <p>The ARN of the source Kafka cluster.</p>
   */
  SourceKafkaClusterArn: string | undefined;

  /**
   * @public
   * <p>The compression type to use when producing records to target cluster.</p>
   */
  TargetCompressionType: TargetCompressionType | undefined;

  /**
   * @public
   * <p>The ARN of the target Kafka cluster.</p>
   */
  TargetKafkaClusterArn: string | undefined;

  /**
   * @public
   * <p>Configuration relating to topic replication.</p>
   */
  TopicReplication: TopicReplication | undefined;
}

/**
 * @public
 * <p>Specifies configuration for replication between a source and target Kafka cluster (sourceKafkaClusterAlias -> targetKafkaClusterAlias)</p>
 */
export interface ReplicationInfoDescription {
  /**
   * @public
   * <p>Configuration relating to consumer group replication.</p>
   */
  ConsumerGroupReplication?: ConsumerGroupReplication;

  /**
   * @public
   * <p>The alias of the source Kafka cluster.</p>
   */
  SourceKafkaClusterAlias?: string;

  /**
   * @public
   * <p>The compression type to use when producing records to target cluster.</p>
   */
  TargetCompressionType?: TargetCompressionType;

  /**
   * @public
   * <p>The alias of the target Kafka cluster.</p>
   */
  TargetKafkaClusterAlias?: string;

  /**
   * @public
   * <p>Configuration relating to topic replication.</p>
   */
  TopicReplication?: TopicReplication;
}

/**
 * @public
 * <p>Summarized information of replication between clusters.</p>
 */
export interface ReplicationInfoSummary {
  /**
   * @public
   * <p>The alias of the source Kafka cluster.</p>
   */
  SourceKafkaClusterAlias?: string;

  /**
   * @public
   * <p>The alias of the target Kafka cluster.</p>
   */
  TargetKafkaClusterAlias?: string;
}

/**
 * @public
 * @enum
 */
export const ReplicatorState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ReplicatorState = (typeof ReplicatorState)[keyof typeof ReplicatorState];

/**
 * @public
 * <p>Information about a replicator.</p>
 */
export interface ReplicatorSummary {
  /**
   * @public
   * <p>The time the replicator was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The current version of the replicator.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>Whether this resource is a replicator reference.</p>
   */
  IsReplicatorReference?: boolean;

  /**
   * @public
   * <p>Kafka Clusters used in setting up sources / targets for replication.</p>
   */
  KafkaClustersSummary?: KafkaClusterSummary[];

  /**
   * @public
   * <p>A list of summarized information of replications between clusters.</p>
   */
  ReplicationInfoSummaryList?: ReplicationInfoSummary[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   */
  ReplicatorArn?: string;

  /**
   * @public
   * <p>The name of the replicator.</p>
   */
  ReplicatorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</p>
   */
  ReplicatorResourceArn?: string;

  /**
   * @public
   * <p>State of the replicator.</p>
   */
  ReplicatorState?: ReplicatorState;
}

/**
 * @public
 * <p>Error info for scram secret associate/disassociate failure.</p>
 */
export interface UnprocessedScramSecret {
  /**
   * @public
   * <p>Error code for associate/disassociate failure.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>Error message for associate/disassociate failure.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>AWS Secrets Manager secret ARN.</p>
   */
  SecretArn?: string;
}

/**
 * @public
 * <p>The VPC connection object.</p>
 */
export interface VpcConnection {
  /**
   * @public
   * <p>The ARN that identifies the Vpc Connection.</p>
   */
  VpcConnectionArn: string | undefined;

  /**
   * @public
   * <p>The ARN that identifies the Cluster which the Vpc Connection belongs to.</p>
   */
  TargetClusterArn: string | undefined;

  /**
   * @public
   * <p>Creation time of the Vpc Connection.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Information about the auth scheme of Vpc Connection.</p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>The vpcId that belongs to the Vpc Connection.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>State of the Vpc Connection.</p>
   */
  State?: VpcConnectionState;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Associates sasl scram secrets to cluster.</p>
 */
export interface BatchAssociateScramSecretRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateScramSecretResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>List of errors when associating secrets to cluster.</p>
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[];
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Returns information about an error.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Returns information about an error.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Returns information about an error.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Returns information about an error.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Returns information about an error.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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
 * @public
 * <p>Disassociates sasl scram secrets to cluster.</p>
 */
export interface BatchDisassociateScramSecretRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateScramSecretResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>List of errors when disassociating secrets to cluster.</p>
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[];
}

/**
 * @public
 * <p>Returns information about a provisioned cluster operation.</p>
 */
export interface ClusterOperationV2Provisioned {
  /**
   * @public
   * <p>Steps completed during the operation.</p>
   */
  OperationSteps?: ClusterOperationStep[];

  /**
   * @public
   * <p>Information about cluster attributes before a cluster is updated.</p>
   */
  SourceClusterInfo?: MutableClusterInfo;

  /**
   * @public
   * <p>Information about cluster attributes after a cluster is updated.</p>
   */
  TargetClusterInfo?: MutableClusterInfo;

  /**
   * @public
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
   */
  VpcConnectionInfo?: VpcConnectionInfo;
}

/**
 * @public
 * Description of the VPC connection.
 */
export interface VpcConnectionInfoServerless {
  /**
   * @public
   * <p>The time when Amazon MSK creates the VPC Connnection.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The owner of the VPC Connection.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>Description of the requester that calls the API operation.</p>
   */
  UserIdentity?: UserIdentity;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   */
  VpcConnectionArn?: string;
}

/**
 * @public
 * <p>Returns information about a serverless cluster operation.</p>
 */
export interface ClusterOperationV2Serverless {
  /**
   * @public
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
   */
  VpcConnectionInfo?: VpcConnectionInfoServerless;
}

/**
 * @public
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationV2 {
  /**
   * @public
   * <p>ARN of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>Type of the backend cluster.</p>
   */
  ClusterType?: ClusterType;

  /**
   * @public
   * <p>The time at which operation was started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time at which the operation finished.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>If cluster operation failed from an error, it describes the error.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * @public
   * <p>ARN of the cluster operation.</p>
   */
  OperationArn?: string;

  /**
   * @public
   * <p>State of the cluster operation.</p>
   */
  OperationState?: string;

  /**
   * @public
   * <p>Type of the cluster operation.</p>
   */
  OperationType?: string;

  /**
   * @public
   * <p>Properties of a provisioned cluster.</p>
   */
  Provisioned?: ClusterOperationV2Provisioned;

  /**
   * @public
   * <p>Properties of a serverless cluster.</p>
   */
  Serverless?: ClusterOperationV2Serverless;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * @public
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

/**
 * @public
 * <p>Details about consumer group replication.</p>
 */
export interface ConsumerGroupReplicationUpdate {
  /**
   * @public
   * <p>List of regular expression patterns indicating the consumer groups that should not be replicated.</p>
   */
  ConsumerGroupsToExclude: string[] | undefined;

  /**
   * @public
   * <p>List of regular expression patterns indicating the consumer groups to copy.</p>
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * @public
   * <p>Enables synchronization of consumer groups to target cluster.</p>
   */
  DetectAndCopyNewConsumerGroups: boolean | undefined;

  /**
   * @public
   * <p>Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.</p>
   */
  SynchroniseConsumerGroupOffsets: boolean | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * @public
   * <p>Information about the broker nodes in the cluster.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * @public
   * <p>Includes all client authentication related information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * @public
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * @public
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion: string | undefined;

  LoggingInfo?: LoggingInfo;
  /**
   * @public
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * @public
   * <p>Create tags when creating the cluster.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState;
}

/**
 * @public
 * <p>Provisioned cluster request.</p>
 */
export interface ProvisionedRequest {
  /**
   * @public
   * <p>Information about the brokers.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * @public
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * @public
   * <p>The Apache Kafka version that you want for the cluster.</p>
   */
  KafkaVersion: string | undefined;

  /**
   * @public
   * <p>Log delivery information for the cluster.</p>
   */
  LoggingInfo?: LoggingInfo;

  /**
   * @public
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * @public
   * <p>This controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;
}

/**
 * @public
 * <p>Serverless cluster request.</p>
 */
export interface ServerlessRequest {
  /**
   * @public
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * @public
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ServerlessClientAuthentication;
}

/**
 * @public
 */
export interface CreateClusterV2Request {
  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * @public
   * <p>A map of tags that you want the cluster to have.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Information about the provisioned cluster.</p>
   */
  Provisioned?: ProvisionedRequest;

  /**
   * @public
   * <p>Information about the serverless cluster.</p>
   */
  Serverless?: ServerlessRequest;
}

/**
 * @public
 */
export interface CreateClusterV2Response {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * @public
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState;

  /**
   * @public
   * <p>The type of the cluster. The possible states are PROVISIONED or SERVERLESS.</p>
   */
  ClusterType?: ClusterType;
}

/**
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState;
}

/**
 * @public
 * <p>Creates a replicator using the specified configuration.</p>
 */
export interface CreateReplicatorRequest {
  /**
   * @public
   * <p>A summary description of the replicator.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Kafka Clusters to use in setting up sources / targets for replication.</p>
   */
  KafkaClusters: KafkaCluster[] | undefined;

  /**
   * @public
   * <p>A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.</p>
   */
  ReplicationInfoList: ReplicationInfo[] | undefined;

  /**
   * @public
   * <p>The name of the replicator. Alpha-numeric characters with '-' are allowed.</p>
   */
  ReplicatorName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)</p>
   */
  ServiceExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>List of tags to attach to created Replicator.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateReplicatorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   */
  ReplicatorArn?: string;

  /**
   * @public
   * <p>Name of the replicator provided by the customer.</p>
   */
  ReplicatorName?: string;

  /**
   * @public
   * <p>State of the replicator.</p>
   */
  ReplicatorState?: ReplicatorState;
}

/**
 * @public
 */
export interface CreateVpcConnectionRequest {
  /**
   * @public
   * <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>
   */
  TargetClusterArn: string | undefined;

  /**
   * @public
   * <p>The authentication type of VPC connection.</p>
   */
  Authentication: string | undefined;

  /**
   * @public
   * <p>The VPC ID of VPC connection.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The list of client subnets.</p>
   */
  ClientSubnets: string[] | undefined;

  /**
   * @public
   * <p>The list of security groups.</p>
   */
  SecurityGroups: string[] | undefined;

  /**
   * @public
   * <p>A map of tags for the VPC connection.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateVpcConnectionResponse {
  /**
   * @public
   * <p>The VPC connection ARN.</p>
   */
  VpcConnectionArn?: string;

  /**
   * @public
   * <p>The State of Vpc Connection.</p>
   */
  State?: VpcConnectionState;

  /**
   * @public
   * <p>The authentication type of VPC connection.</p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>The VPC ID of the VPC connection.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The list of client subnets.</p>
   */
  ClientSubnets?: string[];

  /**
   * @public
   * <p>The list of security groups.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The creation time of VPC connection.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A map of tags for the VPC connection.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   */
  State?: ClusterState;
}

/**
 * @public
 */
export interface DeleteClusterPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState;
}

/**
 * @public
 */
export interface DeleteReplicatorRequest {
  /**
   * @public
   * <p>The current version of the replicator.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator to be deleted.</p>
   */
  ReplicatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicatorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   */
  ReplicatorArn?: string;

  /**
   * @public
   * <p>The state of the replicator.</p>
   */
  ReplicatorState?: ReplicatorState;
}

/**
 * @public
 */
export interface DeleteVpcConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>
   */
  VpcConnectionArn?: string;

  /**
   * @public
   * <p>The state of the VPC connection.</p>
   */
  State?: VpcConnectionState;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * @public
   * <p>The cluster information.</p>
   */
  ClusterInfo?: ClusterInfo;
}

/**
 * @public
 */
export interface DescribeClusterOperationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   */
  ClusterOperationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationResponse {
  /**
   * @public
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationInfo;
}

/**
 * @public
 */
export interface DescribeClusterOperationV2Request {
  /**
   * @public
   * ARN of the cluster operation to describe.
   */
  ClusterOperationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationV2Response {
  /**
   * @public
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationV2;
}

/**
 * @public
 */
export interface DescribeClusterV2Request {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterV2Response {
  /**
   * @public
   * <p>The cluster information.</p>
   */
  ClusterInfo?: Cluster;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * @public
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * @public
   * <p>The name of the configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   */
  State?: ConfigurationState;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>A string that uniquely identifies a revision of an MSK configuration.</p>
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The revision number.</p>
   */
  Revision?: number;

  /**
   * @public
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties?: Uint8Array;
}

/**
 * @public
 */
export interface DescribeReplicatorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator to be described.</p>
   */
  ReplicatorArn: string | undefined;
}

/**
 * @public
 * Details about the state of a replicator
 */
export interface ReplicationStateInfo {
  /**
   * @public
   * Code that describes the current state of the replicator.
   */
  Code?: string;

  /**
   * @public
   * Message that describes the state of the replicator.
   */
  Message?: string;
}

/**
 * @public
 */
export interface DescribeReplicatorResponse {
  /**
   * @public
   * <p>The time when the replicator was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The current version number of the replicator.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>Whether this resource is a replicator reference.</p>
   */
  IsReplicatorReference?: boolean;

  /**
   * @public
   * <p>Kafka Clusters used in setting up sources / targets for replication.</p>
   */
  KafkaClusters?: KafkaClusterDescription[];

  /**
   * @public
   * <p>A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.</p>
   */
  ReplicationInfoList?: ReplicationInfoDescription[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   */
  ReplicatorArn?: string;

  /**
   * @public
   * <p>The description of the replicator.</p>
   */
  ReplicatorDescription?: string;

  /**
   * @public
   * <p>The name of the replicator.</p>
   */
  ReplicatorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</p>
   */
  ReplicatorResourceArn?: string;

  /**
   * @public
   * <p>State of the replicator.</p>
   */
  ReplicatorState?: ReplicatorState;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)</p>
   */
  ServiceExecutionRoleArn?: string;

  /**
   * @public
   * <p>Details about the state of the replicator.</p>
   */
  StateInfo?: ReplicationStateInfo;

  /**
   * @public
   * <p>List of tags attached to the Replicator.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVpcConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>
   */
  VpcConnectionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK cluster.</p>
   */
  TargetClusterArn?: string;

  /**
   * @public
   * <p>The state of VPC connection.</p>
   */
  State?: VpcConnectionState;

  /**
   * @public
   * <p>The authentication type of VPC connection.</p>
   */
  Authentication?: string;

  /**
   * @public
   * <p>The VPC Id for the VPC connection.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The list of subnets for the VPC connection.</p>
   */
  Subnets?: string[];

  /**
   * @public
   * <p>The list of security groups for the VPC connection.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The creation time of the VPC connection.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A map of tags for the VPC connection.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetBootstrapBrokersRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetBootstrapBrokersResponse {
  /**
   * @public
   * <p>A string containing one or more hostname:port pairs.</p>
   */
  BootstrapBrokerString?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringTls?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   */
  BootstrapBrokerStringSaslScram?: string;

  /**
   * @public
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   */
  BootstrapBrokerStringSaslIam?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringPublicTls?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   */
  BootstrapBrokerStringPublicSaslScram?: string;

  /**
   * @public
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   */
  BootstrapBrokerStringPublicSaslIam?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs for VPC connectivity.</p>
   */
  BootstrapBrokerStringVpcConnectivityTls?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and SASL/SCRAM port pairs for VPC connectivity.</p>
   */
  BootstrapBrokerStringVpcConnectivitySaslScram?: string;

  /**
   * @public
   * <p>A string containing one or more DNS names (or IP) and SASL/IAM port pairs for VPC connectivity.</p>
   */
  BootstrapBrokerStringVpcConnectivitySaslIam?: string;
}

/**
 * @public
 */
export interface GetClusterPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyResponse {
  /**
   * @public
   * <p>The version of cluster policy.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The cluster policy.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster check.</p>
   */
  ClusterArn?: string;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsResponse {
  /**
   * @public
   * <p>A list of CompatibleKafkaVersion objects.</p>
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[];
}

/**
 * @public
 */
export interface ListClientVpcConnectionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClientVpcConnectionsResponse {
  /**
   * @public
   * <p>List of client VPC connections.</p>
   */
  ClientVpcConnections?: ClientVpcConnection[];

  /**
   * @public
   * <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterOperationsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterOperationsResponse {
  /**
   * @public
   * <p>An array of cluster operation information objects.</p>
   */
  ClusterOperationInfoList?: ClusterOperationInfo[];

  /**
   * @public
   * <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterOperationsV2Request {
  /**
   * @public
   * The arn of the cluster whose operations are being requested.
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * The maxResults of the query.
   */
  MaxResults?: number;

  /**
   * @public
   * The nextToken of the query.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClusterOperationsV2Response {
  /**
   * @public
   * <p>An array of cluster operation information objects.</p>
   */
  ClusterOperationInfoList?: ClusterOperationV2Summary[];

  /**
   * @public
   * <p>If the response of ListClusterOperationsV2 is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListClusterOperationsV2.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * @public
   * <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   */
  ClusterNameFilter?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * @public
   * <p>Information on each of the MSK clusters in the response.</p>
   */
  ClusterInfoList?: ClusterInfo[];

  /**
   * @public
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersV2Request {
  /**
   * @public
   * <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   */
  ClusterNameFilter?: string;

  /**
   * @public
   * <p>Specify either PROVISIONED or SERVERLESS.</p>
   */
  ClusterTypeFilter?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListClustersV2Response {
  /**
   * @public
   * <p>Information on each of the MSK clusters in the response.</p>
   */
  ClusterInfoList?: Cluster[];

  /**
   * @public
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * @public
   * <p>Paginated results marker.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List of ConfigurationRevision objects.</p>
   */
  Revisions?: ConfigurationRevision[];
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * @public
   * <p>An array of MSK configurations.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListKafkaVersionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListKafkaVersionsResponse {
  KafkaVersions?: KafkaVersion[];
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNodesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListNodesResponse {
  /**
   * @public
   * <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List containing a NodeInfo object.</p>
   */
  NodeInfoList?: NodeInfo[];
}

/**
 * @public
 */
export interface ListReplicatorsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Returns replicators starting with given name.</p>
   */
  ReplicatorNameFilter?: string;
}

/**
 * @public
 */
export interface ListReplicatorsResponse {
  /**
   * @public
   * <p>If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>List containing information of each of the replicators in the account.</p>
   */
  Replicators?: ReplicatorSummary[];
}

/**
 * @public
 */
export interface ListScramSecretsRequest {
  /**
   * @public
   * <p>The arn of the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The maxResults of the query.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The nextToken of the query.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListScramSecretsResponse {
  /**
   * @public
   * <p>Paginated results marker.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of scram secrets associated with the cluster.</p>
   */
  SecretArnList?: string[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListVpcConnectionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListVpcConnectionsResponse {
  /**
   * @public
   * <p>List of VPC connections.</p>
   */
  VpcConnections?: VpcConnection[];

  /**
   * @public
   * <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutClusterPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The policy version.</p>
   */
  CurrentVersion?: string;

  /**
   * @public
   * <p>The policy.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyResponse {
  /**
   * @public
   * <p>The policy version.</p>
   */
  CurrentVersion?: string;
}

/**
 * @public
 * Reboots a node.
 */
export interface RebootBrokerRequest {
  /**
   * @public
   * <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>
   */
  BrokerIds: string[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface RejectClientVpcConnectionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The VPC connection ARN.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateBrokerCountRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
   */
  TargetNumberOfBrokerNodes: number | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerCountResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface UpdateBrokerStorageRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
   */
  TargetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerStorageResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface UpdateBrokerTypeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>
   */
  TargetInstanceType: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerTypeResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo: ConfigurationInfo | undefined;

  /**
   * @public
   * <p>The version of the cluster that needs to be updated.</p>
   */
  CurrentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The custom configuration that should be applied on the new version of cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * @public
   * <p>Current cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>Target Kafka version.</p>
   */
  TargetKafkaVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;
}

/**
 * @public
 * Request body for UpdateConnectivity.
 */
export interface UpdateConnectivityRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>Information about the broker access configuration.</p>
   */
  ConnectivityInfo: ConnectivityInfo | undefined;

  /**
   * @public
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 * Request body for UpdateMonitoring.
 */
export interface UpdateMonitoringRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring;

  /**
   * @public
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  LoggingInfo?: LoggingInfo;
}

/**
 * @public
 */
export interface UpdateMonitoringResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 * <p>Details for updating the topic replication of a replicator.</p>
 */
export interface TopicReplicationUpdate {
  /**
   * @public
   * <p>Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.</p>
   */
  CopyAccessControlListsForTopics: boolean | undefined;

  /**
   * @public
   * <p>Whether to periodically configure remote topics to match their corresponding upstream topics.</p>
   */
  CopyTopicConfigurations: boolean | undefined;

  /**
   * @public
   * <p>Whether to periodically check for new topics and partitions.</p>
   */
  DetectAndCopyNewTopics: boolean | undefined;

  /**
   * @public
   * <p>List of regular expression patterns indicating the topics that should not be replicated.</p>
   */
  TopicsToExclude: string[] | undefined;

  /**
   * @public
   * <p>List of regular expression patterns indicating the topics to copy.</p>
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * @public
 * <p>Update information relating to replication between a given source and target Kafka cluster.</p>
 */
export interface UpdateReplicationInfoRequest {
  /**
   * @public
   * <p>Updated consumer group replication information.</p>
   */
  ConsumerGroupReplication?: ConsumerGroupReplicationUpdate;

  /**
   * @public
   * <p>Current replicator version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator to be updated.</p>
   */
  ReplicatorArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the source Kafka cluster.</p>
   */
  SourceKafkaClusterArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the target Kafka cluster.</p>
   */
  TargetKafkaClusterArn: string | undefined;

  /**
   * @public
   * <p>Updated topic replication information.</p>
   */
  TopicReplication?: TopicReplicationUpdate;
}

/**
 * @public
 */
export interface UpdateReplicationInfoResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   */
  ReplicatorArn?: string;

  /**
   * @public
   * <p>State of the replicator.</p>
   */
  ReplicatorState?: ReplicatorState;
}

/**
 * @public
 */
export interface UpdateSecurityRequest {
  /**
   * @public
   * <p>Includes all client authentication related information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;
}

/**
 * @public
 */
export interface UpdateSecurityResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}

/**
 * @public
 * <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>
 */
export interface UpdateStorageRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * @public
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * @public
   * <p>EBS volume provisioned throughput information.</p>
   */
  ProvisionedThroughput?: ProvisionedThroughput;

  /**
   * @public
   * <p>Controls storage mode for supported storage tiers.</p>
   */
  StorageMode?: StorageMode;

  /**
   * @public
   * <p>size of the EBS volume to update.</p>
   */
  VolumeSizeGB?: number;
}

/**
 * @public
 */
export interface UpdateStorageResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;
}
