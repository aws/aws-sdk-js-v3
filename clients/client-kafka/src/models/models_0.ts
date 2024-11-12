// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KafkaServiceException as __BaseException } from "./KafkaServiceException";

/**
 * <p>Contains information about provisioned throughput for EBS storage volumes attached to kafka broker nodes.</p>
 * @public
 */
export interface ProvisionedThroughput {
  /**
   * <p>Provisioned throughput is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Throughput value of the EBS volumes for the data drive on each kafka broker node in MiB per second.</p>
   * @public
   */
  VolumeThroughput?: number | undefined;
}

/**
 * <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 * @public
 */
export interface BrokerEBSVolumeInfo {
  /**
   * <p>The ID of the broker to update.</p>
   * @public
   */
  KafkaBrokerNodeId: string | undefined;

  /**
   * <p>EBS volume provisioned throughput information.</p>
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * <p>Size of the EBS volume to update.</p>
   * @public
   */
  VolumeSizeGB?: number | undefined;
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
 * <p>The client VPC connection object.</p>
 * @public
 */
export interface ClientVpcConnection {
  /**
   * <p>Information about the auth scheme of Vpc Connection.</p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>Creation time of the Vpc Connection.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>State of the Vpc Connection.</p>
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * <p>The ARN that identifies the Vpc Connection.</p>
   * @public
   */
  VpcConnectionArn: string | undefined;

  /**
   * <p>The Owner of the Vpc Connection.</p>
   * @public
   */
  Owner?: string | undefined;
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
 * Public access control for brokers.
 * @public
 */
export interface PublicAccess {
  /**
   * <p>The value DISABLED indicates that public access is turned off. SERVICE_PROVIDED_EIPS indicates that public access is turned on.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Details for IAM access control for VPC connectivity.</p>
 * @public
 */
export interface VpcConnectivityIam {
  /**
   * <p>SASL/IAM authentication is on or off for VPC connectivity.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
 * @public
 */
export interface VpcConnectivityScram {
  /**
   * <p>SASL/SCRAM authentication is on or off for VPC connectivity.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Details for SASL client authentication for VPC connectivity.</p>
 * @public
 */
export interface VpcConnectivitySasl {
  /**
   * <p>Details for SASL/SCRAM client authentication for VPC connectivity.</p>
   * @public
   */
  Scram?: VpcConnectivityScram | undefined;

  /**
   * <p>Details for SASL/IAM client authentication for VPC connectivity.</p>
   * @public
   */
  Iam?: VpcConnectivityIam | undefined;
}

/**
 * <p>Details for TLS client authentication for VPC connectivity.</p>
 * @public
 */
export interface VpcConnectivityTls {
  /**
   * <p>TLS authentication is on or off for VPC connectivity.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Includes all client authentication information for VPC connectivity.</p>
 * @public
 */
export interface VpcConnectivityClientAuthentication {
  /**
   * <p>SASL authentication type details for VPC connectivity.</p>
   * @public
   */
  Sasl?: VpcConnectivitySasl | undefined;

  /**
   * <p>TLS authentication type details for VPC connectivity.</p>
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
   * <p>Includes all client authentication information for VPC connectivity.</p>
   * @public
   */
  ClientAuthentication?: VpcConnectivityClientAuthentication | undefined;
}

/**
 * <p>Information about the broker access configuration.</p>
 * @public
 */
export interface ConnectivityInfo {
  /**
   * <p>Public access control for brokers.</p>
   * @public
   */
  PublicAccess?: PublicAccess | undefined;

  /**
   * <p>VPC connectivity access control for brokers.</p>
   * @public
   */
  VpcConnectivity?: VpcConnectivity | undefined;
}

/**
 * <p>Contains information about the EBS storage volumes attached to Apache Kafka broker nodes.</p>
 * @public
 */
export interface EBSStorageInfo {
  /**
   * <p>EBS volume provisioned throughput information.</p>
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   * @public
   */
  VolumeSize?: number | undefined;
}

/**
 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
 * @public
 */
export interface StorageInfo {
  /**
   * <p>EBS volume information.</p>
   * @public
   */
  EbsStorageInfo?: EBSStorageInfo | undefined;
}

/**
 * <p>Describes the setup to be used for Apache Kafka broker nodes in the cluster.</p>
 * @public
 */
export interface BrokerNodeGroupInfo {
  /**
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   * @public
   */
  BrokerAZDistribution?: BrokerAZDistribution | undefined;

  /**
   * <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't occupy the Availability Zone with ID use use1-az3.</p>
   * @public
   */
  ClientSubnets: string[] | undefined;

  /**
   * <p>The type of Amazon EC2 instances to use for Apache Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
   * kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>
   * @public
   */
  InstanceType: string | undefined;

  /**
   * <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   * @public
   */
  StorageInfo?: StorageInfo | undefined;

  /**
   * <p>Information about the broker access configuration.</p>
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo | undefined;

  /**
   * <p>The list of zoneIds for the cluster in the virtual private cloud (VPC).</p>
   * @public
   */
  ZoneIds?: string[] | undefined;
}

/**
 * <p>Details for IAM access control.</p>
 * @public
 */
export interface Iam {
  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Details for SASL/SCRAM client authentication.</p>
 * @public
 */
export interface Scram {
  /**
   * <p>SASL/SCRAM authentication is enabled or not.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Details for client authentication using SASL.</p>
 * @public
 */
export interface Sasl {
  /**
   * <p>Details for SASL/SCRAM client authentication.</p>
   * @public
   */
  Scram?: Scram | undefined;

  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   * @public
   */
  Iam?: Iam | undefined;
}

/**
 * <p>Details for client authentication using TLS.</p>
 * @public
 */
export interface Tls {
  /**
   * <p>List of ACM Certificate Authority ARNs.</p>
   * @public
   */
  CertificateAuthorityArnList?: string[] | undefined;

  /**
   * <p>Specifies whether you want to turn on or turn off TLS authentication.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface Unauthenticated {
  /**
   * <p>Specifies whether you want to turn on or turn off unauthenticated traffic to your cluster.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>Includes all client authentication information.</p>
 * @public
 */
export interface ClientAuthentication {
  /**
   * <p>Details for ClientAuthentication using SASL.</p>
   * @public
   */
  Sasl?: Sasl | undefined;

  /**
   * <p>Details for ClientAuthentication using TLS.</p>
   * @public
   */
  Tls?: Tls | undefined;

  /**
   * <p>Contains information about unauthenticated traffic to the cluster.</p>
   * @public
   */
  Unauthenticated?: Unauthenticated | undefined;
}

/**
 * <p>Information about the current software installed on the cluster.</p>
 * @public
 */
export interface BrokerSoftwareInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>
   * @public
   */
  ConfigurationArn?: string | undefined;

  /**
   * <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>
   * @public
   */
  ConfigurationRevision?: number | undefined;

  /**
   * <p>The version of Apache Kafka.</p>
   * @public
   */
  KafkaVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomerActionStatus = {
  ACTION_RECOMMENDED: "ACTION_RECOMMENDED",
  CRITICAL_ACTION_REQUIRED: "CRITICAL_ACTION_REQUIRED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CustomerActionStatus = (typeof CustomerActionStatus)[keyof typeof CustomerActionStatus];

/**
 * <p>The data-volume encryption details.</p>
 * @public
 */
export interface EncryptionAtRest {
  /**
   * <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>
   * @public
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
 * <p>The settings for encrypting data in transit.</p>
 * @public
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
   * @public
   */
  ClientBroker?: ClientBroker | undefined;

  /**
   * <p>When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plaintext.</p>
   *             <p>The default value is true.</p>
   * @public
   */
  InCluster?: boolean | undefined;
}

/**
 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 * @public
 */
export interface EncryptionInfo {
  /**
   * <p>The data-volume encryption details.</p>
   * @public
   */
  EncryptionAtRest?: EncryptionAtRest | undefined;

  /**
   * <p>The details for encryption in transit.</p>
   * @public
   */
  EncryptionInTransit?: EncryptionInTransit | undefined;
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
  BrokerLogs: BrokerLogs | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 * @public
 */
export interface JmxExporterInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 * @public
 */
export interface NodeExporterInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Prometheus settings.</p>
 * @public
 */
export interface PrometheusInfo {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   * @public
   */
  JmxExporter?: JmxExporterInfo | undefined;

  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   * @public
   */
  NodeExporter?: NodeExporterInfo | undefined;
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 * @public
 */
export interface OpenMonitoringInfo {
  /**
   * <p>Prometheus settings.</p>
   * @public
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
 * <p>Provisioned cluster.</p>
 * @public
 */
export interface Provisioned {
  /**
   * <p>Information about the brokers.</p>
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Information about the Apache Kafka version deployed on the brokers.</p>
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * <p>Log delivery information for the cluster.</p>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   * @public
   */
  ZookeeperConnectString?: string | undefined;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster on a TLS port.</p>
   * @public
   */
  ZookeeperConnectStringTls?: string | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * <p>Determines if there is an action required from the customer.</p>
   * @public
   */
  CustomerActionStatus?: CustomerActionStatus | undefined;
}

/**
 * <p>Details for client authentication using SASL.</p>
 * @public
 */
export interface ServerlessSasl {
  /**
   * <p>Indicates whether IAM access control is enabled.</p>
   * @public
   */
  Iam?: Iam | undefined;
}

/**
 * <p>Includes all client authentication information.</p>
 * @public
 */
export interface ServerlessClientAuthentication {
  /**
   * <p>Details for ClientAuthentication using SASL.</p>
   * @public
   */
  Sasl?: ServerlessSasl | undefined;
}

/**
 * <p>The configuration of the Amazon VPCs for the cluster.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The IDs of the subnets associated with the cluster.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The IDs of the security groups associated with the cluster.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * <p>Serverless cluster.</p>
 * @public
 */
export interface Serverless {
  /**
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   * @public
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ServerlessClientAuthentication | undefined;
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
  Code?: string | undefined;
  Message?: string | undefined;
}

/**
 * <p>Returns information about a cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a cluster operation.</p>
   * @public
   */
  ActiveOperationArn?: string | undefined;

  /**
   * <p>Cluster Type.</p>
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The time when the cluster was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The current version of the MSK cluster.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * <p>State Info for the Amazon MSK cluster.</p>
   * @public
   */
  StateInfo?: StateInfo | undefined;

  /**
   * <p>Tags attached to the cluster.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Information about the provisioned cluster.</p>
   * @public
   */
  Provisioned?: Provisioned | undefined;

  /**
   * <p>Information about the serverless cluster.</p>
   * @public
   */
  Serverless?: Serverless | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
 * @public
 */
export interface JmxExporter {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
 * @public
 */
export interface NodeExporter {
  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   * @public
   */
  EnabledInBroker: boolean | undefined;
}

/**
 * <p>Prometheus settings.</p>
 * @public
 */
export interface Prometheus {
  /**
   * <p>Indicates whether you want to turn on or turn off the JMX Exporter.</p>
   * @public
   */
  JmxExporter?: JmxExporter | undefined;

  /**
   * <p>Indicates whether you want to turn on or turn off the Node Exporter.</p>
   * @public
   */
  NodeExporter?: NodeExporter | undefined;
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 * @public
 */
export interface OpenMonitoring {
  /**
   * <p>Prometheus settings.</p>
   * @public
   */
  Prometheus: Prometheus | undefined;
}

/**
 * <p>Returns information about a cluster.</p>
 * @public
 */
export interface ClusterInfo {
  /**
   * <p>Arn of active cluster operation.</p>
   * @public
   */
  ActiveOperationArn?: string | undefined;

  /**
   * <p>Information about the broker nodes.</p>
   * @public
   */
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The time when the cluster was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * <p>The current version of the MSK cluster.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * <p>Specifies which metrics are gathered for the MSK cluster. This property has the following possible values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION. For a list of the metrics associated with each of these levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>Settings for open monitoring using Prometheus.</p>
   * @public
   */
  OpenMonitoring?: OpenMonitoring | undefined;

  LoggingInfo?: LoggingInfo | undefined;
  /**
   * <p>The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   * @public
   */
  State?: ClusterState | undefined;

  StateInfo?: StateInfo | undefined;
  /**
   * <p>Tags attached to the cluster.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   * @public
   */
  ZookeeperConnectString?: string | undefined;

  /**
   * <p>The connection string to use to connect to zookeeper cluster on Tls port.</p>
   * @public
   */
  ZookeeperConnectStringTls?: string | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * <p>Determines if there is an action required from the customer.</p>
   * @public
   */
  CustomerActionStatus?: CustomerActionStatus | undefined;
}

/**
 * <p>Returns information about an error state of the cluster.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>A number describing the error programmatically.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>An optional field to provide more details about the error.</p>
   * @public
   */
  ErrorString?: string | undefined;
}

/**
 * <p>State information about the operation step.</p>
 * @public
 */
export interface ClusterOperationStepInfo {
  /**
   * <p>The steps current status.</p>
   * @public
   */
  StepStatus?: string | undefined;
}

/**
 * <p>Step taken during a cluster operation.</p>
 * @public
 */
export interface ClusterOperationStep {
  /**
   * <p>Information about the step and its status.</p>
   * @public
   */
  StepInfo?: ClusterOperationStepInfo | undefined;

  /**
   * <p>The name of the step.</p>
   * @public
   */
  StepName?: string | undefined;
}

/**
 * <p>Information regarding UpdateBrokerCount.</p>
 * @public
 */
export interface BrokerCountUpdateInfo {
  /**
   * <p>Kafka Broker IDs of brokers being created.</p>
   * @public
   */
  CreatedBrokerIds?: number[] | undefined;

  /**
   * <p>Kafka Broker IDs of brokers being deleted.</p>
   * @public
   */
  DeletedBrokerIds?: number[] | undefined;
}

/**
 * <p>Specifies the configuration to use for the brokers.</p>
 * @public
 */
export interface ConfigurationInfo {
  /**
   * <p>ARN of the configuration to use.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The revision of the configuration to use.</p>
   * @public
   */
  Revision: number | undefined;
}

/**
 * <p>Information about cluster attributes that can be updated via update APIs.</p>
 * @public
 */
export interface MutableClusterInfo {
  /**
   * <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   * @public
   */
  BrokerEBSVolumeInfo?: BrokerEBSVolumeInfo[] | undefined;

  /**
   * <p>Information about the changes in the configuration of the brokers.</p>
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes?: number | undefined;

  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   * @public
   */
  OpenMonitoring?: OpenMonitoring | undefined;

  /**
   * <p>The Apache Kafka version.</p>
   * @public
   */
  KafkaVersion?: string | undefined;

  /**
   * <p>You can configure your MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.</p>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>Information about the Amazon MSK broker type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * <p>Information about the broker access configuration.</p>
   * @public
   */
  ConnectivityInfo?: ConnectivityInfo | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * <p>Describes brokers being changed during a broker count update.</p>
   * @public
   */
  BrokerCountUpdateInfo?: BrokerCountUpdateInfo | undefined;
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
 * <p>Description of the requester that calls the API operation.</p>
 * @public
 */
export interface UserIdentity {
  /**
   * <p>The identity type of the requester that calls the API operation.</p>
   * @public
   */
  Type?: UserIdentityType | undefined;

  /**
   * <p>A unique identifier for the requester that calls the API operation.</p>
   * @public
   */
  PrincipalId?: string | undefined;
}

/**
 * <p>Description of the VPC connection.</p>
 * @public
 */
export interface VpcConnectionInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>The owner of the VPC Connection.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>Description of the requester that calls the API operation.</p>
   * @public
   */
  UserIdentity?: UserIdentity | undefined;

  /**
   * <p>The time when Amazon MSK creates the VPC Connnection.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>Returns information about a cluster operation.</p>
 * @public
 */
export interface ClusterOperationInfo {
  /**
   * <p>The ID of the API request that triggered this operation.</p>
   * @public
   */
  ClientRequestId?: string | undefined;

  /**
   * <p>ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The time that the operation was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time at which the operation finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Describes the error if the operation fails.</p>
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * <p>ARN of the cluster operation.</p>
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * <p>State of the cluster operation.</p>
   * @public
   */
  OperationState?: string | undefined;

  /**
   * <p>Steps completed during the operation.</p>
   * @public
   */
  OperationSteps?: ClusterOperationStep[] | undefined;

  /**
   * <p>Type of the cluster operation.</p>
   * @public
   */
  OperationType?: string | undefined;

  /**
   * <p>Information about cluster attributes before a cluster is updated.</p>
   * @public
   */
  SourceClusterInfo?: MutableClusterInfo | undefined;

  /**
   * <p>Information about cluster attributes after a cluster is updated.</p>
   * @public
   */
  TargetClusterInfo?: MutableClusterInfo | undefined;

  /**
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
   * @public
   */
  VpcConnectionInfo?: VpcConnectionInfo | undefined;
}

/**
 * <p>Returns information about a cluster operation.</p>
 * @public
 */
export interface ClusterOperationV2Summary {
  /**
   * <p>ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Type of the backend cluster.</p>
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * <p>The time at which operation was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time at which the operation finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>ARN of the cluster operation.</p>
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * <p>State of the cluster operation.</p>
   * @public
   */
  OperationState?: string | undefined;

  /**
   * <p>Type of the cluster operation.</p>
   * @public
   */
  OperationType?: string | undefined;
}

/**
 * <p>Contains source Apache Kafka versions and compatible target Apache Kafka versions.</p>
 * @public
 */
export interface CompatibleKafkaVersion {
  /**
   * <p>An Apache Kafka version.</p>
   * @public
   */
  SourceVersion?: string | undefined;

  /**
   * <p>A list of Apache Kafka versions.</p>
   * @public
   */
  TargetVersions?: string[] | undefined;
}

/**
 * <p>Describes a configuration revision.</p>
 * @public
 */
export interface ConfigurationRevision {
  /**
   * <p>The time when the configuration revision was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The revision number.</p>
   * @public
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
 * <p>Represents an MSK Configuration.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   * @public
   */
  KafkaVersions: string[] | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
   * @public
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   * @public
   */
  State: ConfigurationState | undefined;
}

/**
 * <p>Details of an Amazon MSK Cluster.</p>
 * @public
 */
export interface AmazonMskCluster {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon MSK cluster.</p>
   * @public
   */
  MskClusterArn: string | undefined;
}

/**
 * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterClientVpcConfig {
  /**
   * <p>The security groups to attach to the ENIs for the broker nodes.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The list of subnets in the client VPC to connect to.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * <p>Information about Kafka Cluster to be used as source / target for replication.</p>
 * @public
 */
export interface KafkaCluster {
  /**
   * <p>Details of an Amazon MSK Cluster.</p>
   * @public
   */
  AmazonMskCluster: AmazonMskCluster | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   * @public
   */
  VpcConfig: KafkaClusterClientVpcConfig | undefined;
}

/**
 * <p>Information about Kafka Cluster used as source / target for replication.</p>
 * @public
 */
export interface KafkaClusterDescription {
  /**
   * <p>Details of an Amazon MSK Cluster.</p>
   * @public
   */
  AmazonMskCluster?: AmazonMskCluster | undefined;

  /**
   * <p>The alias of the Kafka cluster. Used to prefix names of replicated topics.</p>
   * @public
   */
  KafkaClusterAlias?: string | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   * @public
   */
  VpcConfig?: KafkaClusterClientVpcConfig | undefined;
}

/**
 * <p>Summarized information about Kafka Cluster used as source / target for replication.</p>
 * @public
 */
export interface KafkaClusterSummary {
  /**
   * <p>Details of an Amazon MSK Cluster.</p>
   * @public
   */
  AmazonMskCluster?: AmazonMskCluster | undefined;

  /**
   * <p>The alias of the Kafka cluster. Used to prefix names of replicated topics.</p>
   * @public
   */
  KafkaClusterAlias?: string | undefined;
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
  Version?: string | undefined;
  Status?: KafkaVersionStatus | undefined;
}

/**
 * <p>BrokerNodeInfo</p>
 * @public
 */
export interface BrokerNodeInfo {
  /**
   * <p>The attached elastic network interface of the broker.</p>
   * @public
   */
  AttachedENIId?: string | undefined;

  /**
   * <p>The ID of the broker.</p>
   * @public
   */
  BrokerId?: number | undefined;

  /**
   * <p>The client subnet to which this broker node belongs.</p>
   * @public
   */
  ClientSubnet?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) of the client.</p>
   * @public
   */
  ClientVpcIpAddress?: string | undefined;

  /**
   * <p>Information about the version of software currently deployed on the Apache Kafka brokers in the cluster.</p>
   * @public
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo | undefined;

  /**
   * <p>Endpoints for accessing the broker.</p>
   * @public
   */
  Endpoints?: string[] | undefined;
}

/**
 * <p>Controller node information.</p>
 * @public
 */
export interface ControllerNodeInfo {
  /**
   * <p>Endpoints for accessing the Controller.</p>
   * @public
   */
  Endpoints?: string[] | undefined;
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
 * <p>Zookeeper node information.</p>
 * @public
 */
export interface ZookeeperNodeInfo {
  /**
   * <p>The attached elastic network interface of the broker.</p>
   * @public
   */
  AttachedENIId?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) IP address of the client.</p>
   * @public
   */
  ClientVpcIpAddress?: string | undefined;

  /**
   * <p>Endpoints for accessing the ZooKeeper.</p>
   * @public
   */
  Endpoints?: string[] | undefined;

  /**
   * <p>The role-specific ID for Zookeeper.</p>
   * @public
   */
  ZookeeperId?: number | undefined;

  /**
   * <p>The version of Zookeeper.</p>
   * @public
   */
  ZookeeperVersion?: string | undefined;
}

/**
 * <p>The node information object.</p>
 * @public
 */
export interface NodeInfo {
  /**
   * <p>The start time.</p>
   * @public
   */
  AddedToClusterTime?: string | undefined;

  /**
   * <p>The broker node info.</p>
   * @public
   */
  BrokerNodeInfo?: BrokerNodeInfo | undefined;

  /**
   * <p>The ControllerNodeInfo.</p>
   * @public
   */
  ControllerNodeInfo?: ControllerNodeInfo | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the node.</p>
   * @public
   */
  NodeARN?: string | undefined;

  /**
   * <p>The node type.</p>
   * @public
   */
  NodeType?: NodeType | undefined;

  /**
   * <p>The ZookeeperNodeInfo.</p>
   * @public
   */
  ZookeeperNodeInfo?: ZookeeperNodeInfo | undefined;
}

/**
 * <p>Details about consumer group replication.</p>
 * @public
 */
export interface ConsumerGroupReplication {
  /**
   * <p>List of regular expression patterns indicating the consumer groups that should not be replicated.</p>
   * @public
   */
  ConsumerGroupsToExclude?: string[] | undefined;

  /**
   * <p>List of regular expression patterns indicating the consumer groups to copy.</p>
   * @public
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * <p>Enables synchronization of consumer groups to target cluster.</p>
   * @public
   */
  DetectAndCopyNewConsumerGroups?: boolean | undefined;

  /**
   * <p>Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.</p>
   * @public
   */
  SynchroniseConsumerGroupOffsets?: boolean | undefined;
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
 * @enum
 */
export const ReplicationStartingPositionType = {
  EARLIEST: "EARLIEST",
  LATEST: "LATEST",
} as const;

/**
 * @public
 */
export type ReplicationStartingPositionType =
  (typeof ReplicationStartingPositionType)[keyof typeof ReplicationStartingPositionType];

/**
 * <p>Configuration for specifying the position in the topics to start replicating from.</p>
 * @public
 */
export interface ReplicationStartingPosition {
  /**
   * <p>The type of replication starting position.</p>
   * @public
   */
  Type?: ReplicationStartingPositionType | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationTopicNameConfigurationType = {
  IDENTICAL: "IDENTICAL",
  PREFIXED_WITH_SOURCE_CLUSTER_ALIAS: "PREFIXED_WITH_SOURCE_CLUSTER_ALIAS",
} as const;

/**
 * @public
 */
export type ReplicationTopicNameConfigurationType =
  (typeof ReplicationTopicNameConfigurationType)[keyof typeof ReplicationTopicNameConfigurationType];

/**
 * <p>Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.</p>
 * @public
 */
export interface ReplicationTopicNameConfiguration {
  /**
   * <p>The type of replicated topic name.</p>
   * @public
   */
  Type?: ReplicationTopicNameConfigurationType | undefined;
}

/**
 * <p>Details about topic replication.</p>
 * @public
 */
export interface TopicReplication {
  /**
   * <p>Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.</p>
   * @public
   */
  CopyAccessControlListsForTopics?: boolean | undefined;

  /**
   * <p>Whether to periodically configure remote topics to match their corresponding upstream topics.</p>
   * @public
   */
  CopyTopicConfigurations?: boolean | undefined;

  /**
   * <p>Whether to periodically check for new topics and partitions.</p>
   * @public
   */
  DetectAndCopyNewTopics?: boolean | undefined;

  /**
   * <p>Configuration for specifying the position in the topics to start replicating from.</p>
   * @public
   */
  StartingPosition?: ReplicationStartingPosition | undefined;

  /**
   * <p>Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.</p>
   * @public
   */
  TopicNameConfiguration?: ReplicationTopicNameConfiguration | undefined;

  /**
   * <p>List of regular expression patterns indicating the topics that should not be replicated.</p>
   * @public
   */
  TopicsToExclude?: string[] | undefined;

  /**
   * <p>List of regular expression patterns indicating the topics to copy.</p>
   * @public
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * <p>Specifies configuration for replication between a source and target Kafka cluster.</p>
 * @public
 */
export interface ReplicationInfo {
  /**
   * <p>Configuration relating to consumer group replication.</p>
   * @public
   */
  ConsumerGroupReplication: ConsumerGroupReplication | undefined;

  /**
   * <p>The ARN of the source Kafka cluster.</p>
   * @public
   */
  SourceKafkaClusterArn: string | undefined;

  /**
   * <p>The compression type to use when producing records to target cluster.</p>
   * @public
   */
  TargetCompressionType: TargetCompressionType | undefined;

  /**
   * <p>The ARN of the target Kafka cluster.</p>
   * @public
   */
  TargetKafkaClusterArn: string | undefined;

  /**
   * <p>Configuration relating to topic replication.</p>
   * @public
   */
  TopicReplication: TopicReplication | undefined;
}

/**
 * <p>Specifies configuration for replication between a source and target Kafka cluster (sourceKafkaClusterAlias -> targetKafkaClusterAlias)</p>
 * @public
 */
export interface ReplicationInfoDescription {
  /**
   * <p>Configuration relating to consumer group replication.</p>
   * @public
   */
  ConsumerGroupReplication?: ConsumerGroupReplication | undefined;

  /**
   * <p>The alias of the source Kafka cluster.</p>
   * @public
   */
  SourceKafkaClusterAlias?: string | undefined;

  /**
   * <p>The compression type to use when producing records to target cluster.</p>
   * @public
   */
  TargetCompressionType?: TargetCompressionType | undefined;

  /**
   * <p>The alias of the target Kafka cluster.</p>
   * @public
   */
  TargetKafkaClusterAlias?: string | undefined;

  /**
   * <p>Configuration relating to topic replication.</p>
   * @public
   */
  TopicReplication?: TopicReplication | undefined;
}

/**
 * <p>Summarized information of replication between clusters.</p>
 * @public
 */
export interface ReplicationInfoSummary {
  /**
   * <p>The alias of the source Kafka cluster.</p>
   * @public
   */
  SourceKafkaClusterAlias?: string | undefined;

  /**
   * <p>The alias of the target Kafka cluster.</p>
   * @public
   */
  TargetKafkaClusterAlias?: string | undefined;
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
 * <p>Information about a replicator.</p>
 * @public
 */
export interface ReplicatorSummary {
  /**
   * <p>The time the replicator was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The current version of the replicator.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>Whether this resource is a replicator reference.</p>
   * @public
   */
  IsReplicatorReference?: boolean | undefined;

  /**
   * <p>Kafka Clusters used in setting up sources / targets for replication.</p>
   * @public
   */
  KafkaClustersSummary?: KafkaClusterSummary[] | undefined;

  /**
   * <p>A list of summarized information of replications between clusters.</p>
   * @public
   */
  ReplicationInfoSummaryList?: ReplicationInfoSummary[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * <p>The name of the replicator.</p>
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</p>
   * @public
   */
  ReplicatorResourceArn?: string | undefined;

  /**
   * <p>State of the replicator.</p>
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * <p>Error info for scram secret associate/disassociate failure.</p>
 * @public
 */
export interface UnprocessedScramSecret {
  /**
   * <p>Error code for associate/disassociate failure.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Error message for associate/disassociate failure.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>AWS Secrets Manager secret ARN.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * <p>The VPC connection object.</p>
 * @public
 */
export interface VpcConnection {
  /**
   * <p>The ARN that identifies the Vpc Connection.</p>
   * @public
   */
  VpcConnectionArn: string | undefined;

  /**
   * <p>The ARN that identifies the Cluster which the Vpc Connection belongs to.</p>
   * @public
   */
  TargetClusterArn: string | undefined;

  /**
   * <p>Creation time of the Vpc Connection.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Information about the auth scheme of Vpc Connection.</p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>The vpcId that belongs to the Vpc Connection.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>State of the Vpc Connection.</p>
   * @public
   */
  State?: VpcConnectionState | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export interface BatchAssociateScramSecretRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   * @public
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateScramSecretResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>List of errors when associating secrets to cluster.</p>
   * @public
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[] | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @public
 */
export interface BatchDisassociateScramSecretRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>List of AWS Secrets Manager secret ARNs.</p>
   * @public
   */
  SecretArnList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateScramSecretResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>List of errors when disassociating secrets to cluster.</p>
   * @public
   */
  UnprocessedScramSecrets?: UnprocessedScramSecret[] | undefined;
}

/**
 * <p>Returns information about a provisioned cluster operation.</p>
 * @public
 */
export interface ClusterOperationV2Provisioned {
  /**
   * <p>Steps completed during the operation.</p>
   * @public
   */
  OperationSteps?: ClusterOperationStep[] | undefined;

  /**
   * <p>Information about cluster attributes before a cluster is updated.</p>
   * @public
   */
  SourceClusterInfo?: MutableClusterInfo | undefined;

  /**
   * <p>Information about cluster attributes after a cluster is updated.</p>
   * @public
   */
  TargetClusterInfo?: MutableClusterInfo | undefined;

  /**
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
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
   * <p>The time when Amazon MSK creates the VPC Connnection.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The owner of the VPC Connection.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>Description of the requester that calls the API operation.</p>
   * @public
   */
  UserIdentity?: UserIdentity | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * <p>Returns information about a serverless cluster operation.</p>
 * @public
 */
export interface ClusterOperationV2Serverless {
  /**
   * <p>Description of the VPC connection for CreateVpcConnection and DeleteVpcConnection operations.</p>
   * @public
   */
  VpcConnectionInfo?: VpcConnectionInfoServerless | undefined;
}

/**
 * <p>Returns information about a cluster operation.</p>
 * @public
 */
export interface ClusterOperationV2 {
  /**
   * <p>ARN of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>Type of the backend cluster.</p>
   * @public
   */
  ClusterType?: ClusterType | undefined;

  /**
   * <p>The time at which operation was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time at which the operation finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>If cluster operation failed from an error, it describes the error.</p>
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;

  /**
   * <p>ARN of the cluster operation.</p>
   * @public
   */
  OperationArn?: string | undefined;

  /**
   * <p>State of the cluster operation.</p>
   * @public
   */
  OperationState?: string | undefined;

  /**
   * <p>Type of the cluster operation.</p>
   * @public
   */
  OperationType?: string | undefined;

  /**
   * <p>Properties of a provisioned cluster.</p>
   * @public
   */
  Provisioned?: ClusterOperationV2Provisioned | undefined;

  /**
   * <p>Properties of a serverless cluster.</p>
   * @public
   */
  Serverless?: ClusterOperationV2Serverless | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The parameter that caused the error.</p>
   * @public
   */
  InvalidParameter?: string | undefined;

  /**
   * <p>The description of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Details about consumer group replication.</p>
 * @public
 */
export interface ConsumerGroupReplicationUpdate {
  /**
   * <p>List of regular expression patterns indicating the consumer groups that should not be replicated.</p>
   * @public
   */
  ConsumerGroupsToExclude: string[] | undefined;

  /**
   * <p>List of regular expression patterns indicating the consumer groups to copy.</p>
   * @public
   */
  ConsumerGroupsToReplicate: string[] | undefined;

  /**
   * <p>Enables synchronization of consumer groups to target cluster.</p>
   * @public
   */
  DetectAndCopyNewConsumerGroups: boolean | undefined;

  /**
   * <p>Enables synchronization of consumer group offsets to target cluster. The translated offsets will be written to topic __consumer_offsets.</p>
   * @public
   */
  SynchroniseConsumerGroupOffsets: boolean | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>Information about the broker nodes in the cluster.</p>
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all client authentication related information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * <p>The version of Apache Kafka.</p>
   * @public
   */
  KafkaVersion: string | undefined;

  LoggingInfo?: LoggingInfo | undefined;
  /**
   * <p>The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>Create tags when creating the cluster.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The name of the MSK cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * <p>Provisioned cluster request.</p>
 * @public
 */
export interface ProvisionedRequest {
  /**
   * <p>Information about the brokers.</p>
   * @public
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>Represents the configuration that you want Amazon MSK to use for the brokers in a cluster.</p>
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, and PER_TOPIC_PER_PARTITION.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   * @public
   */
  OpenMonitoring?: OpenMonitoringInfo | undefined;

  /**
   * <p>The Apache Kafka version that you want for the cluster.</p>
   * @public
   */
  KafkaVersion: string | undefined;

  /**
   * <p>Log delivery information for the cluster.</p>
   * @public
   */
  LoggingInfo?: LoggingInfo | undefined;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   * @public
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>This controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;
}

/**
 * <p>Serverless cluster request.</p>
 * @public
 */
export interface ServerlessRequest {
  /**
   * <p>The configuration of the Amazon VPCs for the cluster.</p>
   * @public
   */
  VpcConfigs: VpcConfig[] | undefined;

  /**
   * <p>Includes all client authentication information.</p>
   * @public
   */
  ClientAuthentication?: ServerlessClientAuthentication | undefined;
}

/**
 * @public
 */
export interface CreateClusterV2Request {
  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName: string | undefined;

  /**
   * <p>A map of tags that you want the cluster to have.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Information about the provisioned cluster.</p>
   * @public
   */
  Provisioned?: ProvisionedRequest | undefined;

  /**
   * <p>Information about the serverless cluster.</p>
   * @public
   */
  Serverless?: ServerlessRequest | undefined;
}

/**
 * @public
 */
export interface CreateClusterV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The name of the MSK cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * <p>The type of the cluster. The possible states are PROVISIONED or SERVERLESS.</p>
   * @public
   */
  ClusterType?: ClusterType | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   * @public
   */
  KafkaVersions?: string[] | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   * @public
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * <p>Creates a replicator using the specified configuration.</p>
 * @public
 */
export interface CreateReplicatorRequest {
  /**
   * <p>A summary description of the replicator.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Kafka Clusters to use in setting up sources / targets for replication.</p>
   * @public
   */
  KafkaClusters: KafkaCluster[] | undefined;

  /**
   * <p>A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.</p>
   * @public
   */
  ReplicationInfoList: ReplicationInfo[] | undefined;

  /**
   * <p>The name of the replicator. Alpha-numeric characters with '-' are allowed.</p>
   * @public
   */
  ReplicatorName: string | undefined;

  /**
   * <p>The ARN of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)</p>
   * @public
   */
  ServiceExecutionRoleArn: string | undefined;

  /**
   * <p>List of tags to attach to created Replicator.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateReplicatorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * <p>Name of the replicator provided by the customer.</p>
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * <p>State of the replicator.</p>
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectionRequest {
  /**
   * <p>The cluster Amazon Resource Name (ARN) for the VPC connection.</p>
   * @public
   */
  TargetClusterArn: string | undefined;

  /**
   * <p>The authentication type of VPC connection.</p>
   * @public
   */
  Authentication: string | undefined;

  /**
   * <p>The VPC ID of VPC connection.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The list of client subnets.</p>
   * @public
   */
  ClientSubnets: string[] | undefined;

  /**
   * <p>The list of security groups.</p>
   * @public
   */
  SecurityGroups: string[] | undefined;

  /**
   * <p>A map of tags for the VPC connection.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVpcConnectionResponse {
  /**
   * <p>The VPC connection ARN.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>The State of Vpc Connection.</p>
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * <p>The authentication type of VPC connection.</p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>The VPC ID of the VPC connection.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The list of client subnets.</p>
   * @public
   */
  ClientSubnets?: string[] | undefined;

  /**
   * <p>The list of security groups.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The creation time of VPC connection.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A map of tags for the VPC connection.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The current version of the MSK cluster.</p>
   * @public
   */
  CurrentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The state of the cluster. The possible states are ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, and UPDATING.</p>
   * @public
   */
  State?: ClusterState | undefined;
}

/**
 * @public
 */
export interface DeleteClusterPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * @public
 */
export interface DeleteReplicatorRequest {
  /**
   * <p>The current version of the replicator.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator to be deleted.</p>
   * @public
   */
  ReplicatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReplicatorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * <p>The state of the replicator.</p>
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK VPC connection.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>The state of the VPC connection.</p>
   * @public
   */
  State?: VpcConnectionState | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * <p>The cluster information.</p>
   * @public
   */
  ClusterInfo?: ClusterInfo | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   * @public
   */
  ClusterOperationArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterOperationResponse {
  /**
   * <p>Cluster operation information</p>
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
   * <p>Cluster operation information</p>
   * @public
   */
  ClusterOperationInfo?: ClusterOperationV2 | undefined;
}

/**
 * @public
 */
export interface DescribeClusterV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterV2Response {
  /**
   * <p>The cluster information.</p>
   * @public
   */
  ClusterInfo?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   * @public
   */
  KafkaVersions?: string[] | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. </p>
   * @public
   */
  State?: ConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A string that uniquely identifies a revision of an MSK configuration.</p>
   * @public
   */
  Revision: number | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The revision number.</p>
   * @public
   */
  Revision?: number | undefined;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   * @public
   */
  ServerProperties?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface DescribeReplicatorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicator to be described.</p>
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
   * <p>The time when the replicator was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The current version number of the replicator.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>Whether this resource is a replicator reference.</p>
   * @public
   */
  IsReplicatorReference?: boolean | undefined;

  /**
   * <p>Kafka Clusters used in setting up sources / targets for replication.</p>
   * @public
   */
  KafkaClusters?: KafkaClusterDescription[] | undefined;

  /**
   * <p>A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.</p>
   * @public
   */
  ReplicationInfoList?: ReplicationInfoDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * <p>The description of the replicator.</p>
   * @public
   */
  ReplicatorDescription?: string | undefined;

  /**
   * <p>The name of the replicator.</p>
   * @public
   */
  ReplicatorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator resource in the region where the replicator was created.</p>
   * @public
   */
  ReplicatorResourceArn?: string | undefined;

  /**
   * <p>State of the replicator.</p>
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the replicator to access resources in the customer's account (e.g source and target clusters)</p>
   * @public
   */
  ServiceExecutionRoleArn?: string | undefined;

  /**
   * <p>Details about the state of the replicator.</p>
   * @public
   */
  StateInfo?: ReplicationStateInfo | undefined;

  /**
   * <p>List of tags attached to the Replicator.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeVpcConnectionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a MSK VPC connection.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK cluster.</p>
   * @public
   */
  TargetClusterArn?: string | undefined;

  /**
   * <p>The state of VPC connection.</p>
   * @public
   */
  State?: VpcConnectionState | undefined;

  /**
   * <p>The authentication type of VPC connection.</p>
   * @public
   */
  Authentication?: string | undefined;

  /**
   * <p>The VPC Id for the VPC connection.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The list of subnets for the VPC connection.</p>
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * <p>The list of security groups for the VPC connection.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The creation time of the VPC connection.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A map of tags for the VPC connection.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetBootstrapBrokersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetBootstrapBrokersResponse {
  /**
   * <p>A string containing one or more hostname:port pairs.</p>
   * @public
   */
  BootstrapBrokerString?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   * @public
   */
  BootstrapBrokerStringTls?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   * @public
   */
  BootstrapBrokerStringSaslScram?: string | undefined;

  /**
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   * @public
   */
  BootstrapBrokerStringSaslIam?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   * @public
   */
  BootstrapBrokerStringPublicTls?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and Sasl Scram port pairs.</p>
   * @public
   */
  BootstrapBrokerStringPublicSaslScram?: string | undefined;

  /**
   * <p>A string that contains one or more DNS names (or IP addresses) and SASL IAM port pairs.</p>
   * @public
   */
  BootstrapBrokerStringPublicSaslIam?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs for VPC connectivity.</p>
   * @public
   */
  BootstrapBrokerStringVpcConnectivityTls?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and SASL/SCRAM port pairs for VPC connectivity.</p>
   * @public
   */
  BootstrapBrokerStringVpcConnectivitySaslScram?: string | undefined;

  /**
   * <p>A string containing one or more DNS names (or IP) and SASL/IAM port pairs for VPC connectivity.</p>
   * @public
   */
  BootstrapBrokerStringVpcConnectivitySaslIam?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterPolicyResponse {
  /**
   * <p>The version of cluster policy.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The cluster policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster check.</p>
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * @public
 */
export interface GetCompatibleKafkaVersionsResponse {
  /**
   * <p>A list of CompatibleKafkaVersion objects.</p>
   * @public
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[] | undefined;
}

/**
 * @public
 */
export interface ListClientVpcConnectionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClientVpcConnectionsResponse {
  /**
   * <p>List of client VPC connections.</p>
   * @public
   */
  ClientVpcConnections?: ClientVpcConnection[] | undefined;

  /**
   * <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClusterOperationsResponse {
  /**
   * <p>An array of cluster operation information objects.</p>
   * @public
   */
  ClusterOperationInfoList?: ClusterOperationInfo[] | undefined;

  /**
   * <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>
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
   * <p>An array of cluster operation information objects.</p>
   * @public
   */
  ClusterOperationInfoList?: ClusterOperationV2Summary[] | undefined;

  /**
   * <p>If the response of ListClusterOperationsV2 is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListClusterOperationsV2.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   * @public
   */
  ClusterNameFilter?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>Information on each of the MSK clusters in the response.</p>
   * @public
   */
  ClusterInfoList?: ClusterInfo[] | undefined;

  /**
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersV2Request {
  /**
   * <p>Specify a prefix of the names of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   * @public
   */
  ClusterNameFilter?: string | undefined;

  /**
   * <p>Specify either PROVISIONED or SERVERLESS.</p>
   * @public
   */
  ClusterTypeFilter?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersV2Response {
  /**
   * <p>Information on each of the MSK clusters in the response.</p>
   * @public
   */
  ClusterInfoList?: Cluster[] | undefined;

  /**
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * <p>Paginated results marker.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of ConfigurationRevision objects.</p>
   * @public
   */
  Revisions?: ConfigurationRevision[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * <p>An array of MSK configurations.</p>
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKafkaVersionsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodesResponse {
  /**
   * <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List containing a NodeInfo object.</p>
   * @public
   */
  NodeInfoList?: NodeInfo[] | undefined;
}

/**
 * @public
 */
export interface ListReplicatorsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returns replicators starting with given name.</p>
   * @public
   */
  ReplicatorNameFilter?: string | undefined;
}

/**
 * @public
 */
export interface ListReplicatorsResponse {
  /**
   * <p>If the response of ListReplicators is truncated, it returns a NextToken in the response. This NextToken should be sent in the subsequent request to ListReplicators.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List containing information of each of the replicators in the account.</p>
   * @public
   */
  Replicators?: ReplicatorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListScramSecretsRequest {
  /**
   * <p>The arn of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maxResults of the query.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The nextToken of the query.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScramSecretsResponse {
  /**
   * <p>Paginated results marker.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of scram secrets associated with the cluster.</p>
   * @public
   */
  SecretArnList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pair for the resource tag.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectionsRequest {
  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListVpcConnectionsResponse {
  /**
   * <p>List of VPC connections.</p>
   * @public
   */
  VpcConnections?: VpcConnection[] | undefined;

  /**
   * <p>The paginated results marker. When the result of a ListClientVpcConnections operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The policy version.</p>
   * @public
   */
  CurrentVersion?: string | undefined;

  /**
   * <p>The policy.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutClusterPolicyResponse {
  /**
   * <p>The policy version.</p>
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
   * <p>The list of broker IDs to be rebooted. The reboot-broker operation supports rebooting one broker at a time.</p>
   * @public
   */
  BrokerIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   * @public
   */
  ClusterArn: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface RejectClientVpcConnectionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The VPC connection ARN.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair for the resource tag.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   * @public
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
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerCountRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
   * @public
   */
  TargetNumberOfBrokerNodes: number | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerCountResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
   * @public
   */
  TargetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerTypeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The cluster version that you want to change. After this operation completes successfully, the cluster will have a new version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The Amazon MSK broker type that you want all of the brokers in this cluster to be.</p>
   * @public
   */
  TargetInstanceType: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerTypeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   * @public
   */
  ConfigurationInfo: ConfigurationInfo | undefined;

  /**
   * <p>The version of the cluster that needs to be updated.</p>
   * @public
   */
  CurrentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The custom configuration that should be applied on the new version of cluster.</p>
   * @public
   */
  ConfigurationInfo?: ConfigurationInfo | undefined;

  /**
   * <p>Current cluster version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Target Kafka version.</p>
   * @public
   */
  TargetKafkaVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateClusterKafkaVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   * @public
   */
  ServerProperties: Uint8Array | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
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
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>Information about the broker access configuration.</p>
   * @public
   */
  ConnectivityInfo: ConnectivityInfo | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   * @public
   */
  CurrentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectivityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   * @public
   */
  EnhancedMonitoring?: EnhancedMonitoring | undefined;

  /**
   * <p>The settings for open monitoring.</p>
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
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * <p>Details for updating the topic replication of a replicator.</p>
 * @public
 */
export interface TopicReplicationUpdate {
  /**
   * <p>Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.</p>
   * @public
   */
  CopyAccessControlListsForTopics: boolean | undefined;

  /**
   * <p>Whether to periodically configure remote topics to match their corresponding upstream topics.</p>
   * @public
   */
  CopyTopicConfigurations: boolean | undefined;

  /**
   * <p>Whether to periodically check for new topics and partitions.</p>
   * @public
   */
  DetectAndCopyNewTopics: boolean | undefined;

  /**
   * <p>List of regular expression patterns indicating the topics that should not be replicated.</p>
   * @public
   */
  TopicsToExclude: string[] | undefined;

  /**
   * <p>List of regular expression patterns indicating the topics to copy.</p>
   * @public
   */
  TopicsToReplicate: string[] | undefined;
}

/**
 * <p>Update information relating to replication between a given source and target Kafka cluster.</p>
 * @public
 */
export interface UpdateReplicationInfoRequest {
  /**
   * <p>Updated consumer group replication information.</p>
   * @public
   */
  ConsumerGroupReplication?: ConsumerGroupReplicationUpdate | undefined;

  /**
   * <p>Current replicator version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicator to be updated.</p>
   * @public
   */
  ReplicatorArn: string | undefined;

  /**
   * <p>The ARN of the source Kafka cluster.</p>
   * @public
   */
  SourceKafkaClusterArn: string | undefined;

  /**
   * <p>The ARN of the target Kafka cluster.</p>
   * @public
   */
  TargetKafkaClusterArn: string | undefined;

  /**
   * <p>Updated topic replication information.</p>
   * @public
   */
  TopicReplication?: TopicReplicationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateReplicationInfoResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replicator.</p>
   * @public
   */
  ReplicatorArn?: string | undefined;

  /**
   * <p>State of the replicator.</p>
   * @public
   */
  ReplicatorState?: ReplicatorState | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityRequest {
  /**
   * <p>Includes all client authentication related information.</p>
   * @public
   */
  ClientAuthentication?: ClientAuthentication | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   * @public
   */
  EncryptionInfo?: EncryptionInfo | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}

/**
 * <p>Request object for UpdateStorage api. Its used to update the storage attributes for the cluster.</p>
 * @public
 */
export interface UpdateStorageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   * @public
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   * @public
   */
  CurrentVersion: string | undefined;

  /**
   * <p>EBS volume provisioned throughput information.</p>
   * @public
   */
  ProvisionedThroughput?: ProvisionedThroughput | undefined;

  /**
   * <p>Controls storage mode for supported storage tiers.</p>
   * @public
   */
  StorageMode?: StorageMode | undefined;

  /**
   * <p>size of the EBS volume to update.</p>
   * @public
   */
  VolumeSizeGB?: number | undefined;
}

/**
 * @public
 */
export interface UpdateStorageResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   * @public
   */
  ClusterOperationArn?: string | undefined;
}
