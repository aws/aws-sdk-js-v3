import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 */
export interface BrokerEBSVolumeInfo {
  /**
   * <p>The ID of the broker to update.</p>
   */
  KafkaBrokerNodeId: string | undefined;

  /**
   * <p>Size of the EBS volume to update.</p>
   */
  VolumeSizeGB: number | undefined;
}

export namespace BrokerEBSVolumeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerEBSVolumeInfo): any => ({
    ...obj,
  });
}

export enum BrokerAZDistribution {
  DEFAULT = "DEFAULT",
}

/**
 * <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
 */
export interface EBSStorageInfo {
  /**
   * <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   */
  VolumeSize?: number;
}

export namespace EBSStorageInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EBSStorageInfo): any => ({
    ...obj,
  });
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

export namespace StorageInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StorageInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
 */
export interface BrokerNodeGroupInfo {
  /**
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   */
  BrokerAZDistribution?: BrokerAZDistribution | string;

  /**
   * <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.</p>
   */
  ClientSubnets: string[] | undefined;

  /**
   * <p>The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
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
}

export namespace BrokerNodeGroupInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerNodeGroupInfo): any => ({
    ...obj,
  });
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

export namespace Iam {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Iam): any => ({
    ...obj,
  });
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

export namespace Scram {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Scram): any => ({
    ...obj,
  });
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

export namespace Sasl {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Sasl): any => ({
    ...obj,
  });
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
   * <p>Specifies whether you want to enable or disable TLS authentication.</p>
   */
  Enabled?: boolean;
}

export namespace Tls {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tls): any => ({
    ...obj,
  });
}

export interface Unauthenticated {
  /**
   * <p>Specifies whether you want to enable or disable unauthenticated traffic to your cluster.</p>
   */
  Enabled?: boolean;
}

export namespace Unauthenticated {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Unauthenticated): any => ({
    ...obj,
  });
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

export namespace ClientAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClientAuthentication): any => ({
    ...obj,
  });
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

export namespace BrokerSoftwareInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerSoftwareInfo): any => ({
    ...obj,
  });
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

export namespace EncryptionAtRest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionAtRest): any => ({
    ...obj,
  });
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

export namespace EncryptionInTransit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionInTransit): any => ({
    ...obj,
  });
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

export namespace EncryptionInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionInfo): any => ({
    ...obj,
  });
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

export namespace CloudWatchLogs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogs): any => ({
    ...obj,
  });
}

export interface Firehose {
  DeliveryStream?: string;
  Enabled: boolean | undefined;
}

export namespace Firehose {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Firehose): any => ({
    ...obj,
  });
}

export interface S3 {
  Bucket?: string;
  Enabled: boolean | undefined;
  Prefix?: string;
}

export namespace S3 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3): any => ({
    ...obj,
  });
}

export interface BrokerLogs {
  CloudWatchLogs?: CloudWatchLogs;
  Firehose?: Firehose;
  S3?: S3;
}

export namespace BrokerLogs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerLogs): any => ({
    ...obj,
  });
}

export interface LoggingInfo {
  BrokerLogs: BrokerLogs | undefined;
}

export namespace LoggingInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
 */
export interface JmxExporter {
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace JmxExporter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JmxExporter): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
 */
export interface NodeExporter {
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace NodeExporter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeExporter): any => ({
    ...obj,
  });
}

/**
 * <p>Prometheus settings.</p>
 */
export interface Prometheus {
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporter;

  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  NodeExporter?: NodeExporter;
}

export namespace Prometheus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Prometheus): any => ({
    ...obj,
  });
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

export namespace OpenMonitoring {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenMonitoring): any => ({
    ...obj,
  });
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

export namespace StateInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StateInfo): any => ({
    ...obj,
  });
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
   * <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
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
  Tags?: { [key: string]: string };

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * <p>The connection string to use to connect to zookeeper cluster on Tls port.</p>
   */
  ZookeeperConnectStringTls?: string;
}

export namespace ClusterInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterInfo): any => ({
    ...obj,
  });
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

export namespace ErrorInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
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

export namespace ClusterOperationStepInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterOperationStepInfo): any => ({
    ...obj,
  });
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

export namespace ClusterOperationStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterOperationStep): any => ({
    ...obj,
  });
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

export namespace ConfigurationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationInfo): any => ({
    ...obj,
  });
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
   * <p>The Kafka version.</p>
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
}

export namespace MutableClusterInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MutableClusterInfo): any => ({
    ...obj,
  });
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

export namespace ClusterOperationInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClusterOperationInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Contains source Kafka versions and compatible target Kafka versions.</p>
 */
export interface CompatibleKafkaVersion {
  /**
   * <p>A Kafka version.</p>
   */
  SourceVersion?: string;

  /**
   * <p>A list of Kafka versions.</p>
   */
  TargetVersions?: string[];
}

export namespace CompatibleKafkaVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompatibleKafkaVersion): any => ({
    ...obj,
  });
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

export namespace ConfigurationRevision {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationRevision): any => ({
    ...obj,
  });
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

export namespace Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

export enum KafkaVersionStatus {
  ACTIVE = "ACTIVE",
  DEPRECATED = "DEPRECATED",
}

export interface KafkaVersion {
  Version?: string;
  Status?: KafkaVersionStatus | string;
}

export namespace KafkaVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaVersion): any => ({
    ...obj,
  });
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
   * <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>Endpoints for accessing the broker.</p>
   */
  Endpoints?: string[];
}

export namespace BrokerNodeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerNodeInfo): any => ({
    ...obj,
  });
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

export namespace ZookeeperNodeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ZookeeperNodeInfo): any => ({
    ...obj,
  });
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

export namespace NodeInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeInfo): any => ({
    ...obj,
  });
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

export namespace UnprocessedScramSecret {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessedScramSecret): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
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

export namespace BatchAssociateScramSecretRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateScramSecretRequest): any => ({
    ...obj,
  });
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

export namespace BatchAssociateScramSecretResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateScramSecretResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
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

export namespace BatchDisassociateScramSecretRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateScramSecretRequest): any => ({
    ...obj,
  });
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

export namespace BatchDisassociateScramSecretResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateScramSecretResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;

  /**
   * <p>The description of the error.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
 */
export interface JmxExporterInfo {
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace JmxExporterInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JmxExporterInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
 */
export interface NodeExporterInfo {
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace NodeExporterInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NodeExporterInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Prometheus settings.</p>
 */
export interface PrometheusInfo {
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporterInfo;

  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  NodeExporter?: NodeExporterInfo;
}

export namespace PrometheusInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PrometheusInfo): any => ({
    ...obj,
  });
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

export namespace OpenMonitoringInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OpenMonitoringInfo): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
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

export namespace CreateClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
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

export namespace CreateConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace CreateConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DeleteClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
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

export namespace DeleteClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</p>
   */
  Arn: string | undefined;
}

export namespace DeleteConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeClusterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace DescribeClusterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterRequest): any => ({
    ...obj,
  });
}

export interface DescribeClusterResponse {
  /**
   * <p>The cluster information.</p>
   */
  ClusterInfo?: ClusterInfo;
}

export namespace DescribeClusterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterResponse): any => ({
    ...obj,
  });
}

export interface DescribeClusterOperationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   */
  ClusterOperationArn: string | undefined;
}

export namespace DescribeClusterOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterOperationRequest): any => ({
    ...obj,
  });
}

export interface DescribeClusterOperationResponse {
  /**
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationInfo;
}

export namespace DescribeClusterOperationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeClusterOperationResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

export namespace DescribeConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DescribeConfigurationRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionRequest): any => ({
    ...obj,
  });
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

export namespace DescribeConfigurationRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionResponse): any => ({
    ...obj,
  });
}

export interface GetBootstrapBrokersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace GetBootstrapBrokersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBootstrapBrokersRequest): any => ({
    ...obj,
  });
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
}

export namespace GetBootstrapBrokersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBootstrapBrokersResponse): any => ({
    ...obj,
  });
}

export interface GetCompatibleKafkaVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster check.</p>
   */
  ClusterArn?: string;
}

export namespace GetCompatibleKafkaVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCompatibleKafkaVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetCompatibleKafkaVersionsResponse {
  /**
   * <p>A list of CompatibleKafkaVersion objects.</p>
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[];
}

export namespace GetCompatibleKafkaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCompatibleKafkaVersionsResponse): any => ({
    ...obj,
  });
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

export namespace ListClusterOperationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClusterOperationsRequest): any => ({
    ...obj,
  });
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

export namespace ListClusterOperationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClusterOperationsResponse): any => ({
    ...obj,
  });
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

export namespace ListClustersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj,
  });
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

export namespace ListClustersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListClustersResponse): any => ({
    ...obj,
  });
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

export namespace ListConfigurationRevisionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsRequest): any => ({
    ...obj,
  });
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

export namespace ListConfigurationRevisionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsResponse): any => ({
    ...obj,
  });
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

export namespace ListConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
    ...obj,
  });
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

export namespace ListConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
    ...obj,
  });
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

export namespace ListKafkaVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKafkaVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListKafkaVersionsResponse {
  KafkaVersions?: KafkaVersion[];
  NextToken?: string;
}

export namespace ListKafkaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKafkaVersionsResponse): any => ({
    ...obj,
  });
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

export namespace ListNodesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodesRequest): any => ({
    ...obj,
  });
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

export namespace ListNodesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListNodesResponse): any => ({
    ...obj,
  });
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

export namespace ListScramSecretsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScramSecretsRequest): any => ({
    ...obj,
  });
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

export namespace ListScramSecretsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListScramSecretsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace RebootBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootBrokerRequest): any => ({
    ...obj,
  });
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

export namespace RebootBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootBrokerResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerCountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerCountRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerCountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerCountResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerStorageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerStorageRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerStorageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerStorageResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerTypeRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBrokerTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerTypeResponse): any => ({
    ...obj,
  });
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

export namespace UpdateClusterConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UpdateClusterConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace UpdateClusterKafkaVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterKafkaVersionRequest): any => ({
    ...obj,
  });
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

export namespace UpdateClusterKafkaVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateClusterKafkaVersionResponse): any => ({
    ...obj,
  });
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

export namespace UpdateConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UpdateConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace UpdateMonitoringRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringRequest): any => ({
    ...obj,
  });
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

export namespace UpdateMonitoringResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMonitoringResponse): any => ({
    ...obj,
  });
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

export namespace UpdateSecurityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityRequest): any => ({
    ...obj,
  });
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

export namespace UpdateSecurityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityResponse): any => ({
    ...obj,
  });
}
