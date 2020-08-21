import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export enum BrokerAZDistribution {
  DEFAULT = "DEFAULT",
}

/**
 * <p>Specifies the EBS volume upgrade information. The broker identifier must be set to the keyword ALL. This means the changes apply to all the brokers in the cluster.</p>
 */
export interface BrokerEBSVolumeInfo {
  __type?: "BrokerEBSVolumeInfo";
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
  export const filterSensitiveLog = (obj: BrokerEBSVolumeInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BrokerEBSVolumeInfo => __isa(o, "BrokerEBSVolumeInfo");
}

export interface BrokerLogs {
  __type?: "BrokerLogs";
  Firehose?: Firehose;
  CloudWatchLogs?: CloudWatchLogs;
  S3?: S3;
}

export namespace BrokerLogs {
  export const filterSensitiveLog = (obj: BrokerLogs): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BrokerLogs => __isa(o, "BrokerLogs");
}

/**
 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
 */
export interface BrokerNodeGroupInfo {
  __type?: "BrokerNodeGroupInfo";
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
   * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   */
  StorageInfo?: StorageInfo;

  /**
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   */
  BrokerAZDistribution?: BrokerAZDistribution | string;

  /**
   * <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   */
  SecurityGroups?: string[];
}

export namespace BrokerNodeGroupInfo {
  export const filterSensitiveLog = (obj: BrokerNodeGroupInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BrokerNodeGroupInfo => __isa(o, "BrokerNodeGroupInfo");
}

/**
 * <p>BrokerNodeInfo</p>
 */
export interface BrokerNodeInfo {
  __type?: "BrokerNodeInfo";
  /**
   * <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * <p>Endpoints for accessing the broker.</p>
   */
  Endpoints?: string[];

  /**
   * <p>The virtual private cloud (VPC) of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * <p>The ID of the broker.</p>
   */
  BrokerId?: number;

  /**
   * <p>The client subnet to which this broker node belongs.</p>
   */
  ClientSubnet?: string;
}

export namespace BrokerNodeInfo {
  export const filterSensitiveLog = (obj: BrokerNodeInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BrokerNodeInfo => __isa(o, "BrokerNodeInfo");
}

/**
 * <p>Information about the current software installed on the cluster.</p>
 */
export interface BrokerSoftwareInfo {
  __type?: "BrokerSoftwareInfo";
  /**
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion?: string;

  /**
   * <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>
   */
  ConfigurationRevision?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>
   */
  ConfigurationArn?: string;
}

export namespace BrokerSoftwareInfo {
  export const filterSensitiveLog = (obj: BrokerSoftwareInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BrokerSoftwareInfo => __isa(o, "BrokerSoftwareInfo");
}

/**
 * <p>Includes all client authentication information.</p>
 */
export interface ClientAuthentication {
  __type?: "ClientAuthentication";
  /**
   * <p>Details for ClientAuthentication using TLS.</p>
   */
  Tls?: Tls;
}

export namespace ClientAuthentication {
  export const filterSensitiveLog = (obj: ClientAuthentication): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClientAuthentication => __isa(o, "ClientAuthentication");
}

export enum ClientBroker {
  PLAINTEXT = "PLAINTEXT",
  TLS = "TLS",
  TLS_PLAINTEXT = "TLS_PLAINTEXT",
}

export interface CloudWatchLogs {
  __type?: "CloudWatchLogs";
  Enabled: boolean | undefined;
  LogGroup?: string;
}

export namespace CloudWatchLogs {
  export const filterSensitiveLog = (obj: CloudWatchLogs): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudWatchLogs => __isa(o, "CloudWatchLogs");
}

/**
 * <p>Returns information about a cluster.</p>
 */
export interface ClusterInfo {
  __type?: "ClusterInfo";
  LoggingInfo?: LoggingInfo;
  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   */
  CurrentBrokerSoftwareInfo?: BrokerSoftwareInfo;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;

  /**
   * <p>Settings for open monitoring using Prometheus.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  /**
   * <p>Arn of active cluster operation.</p>
   */
  ActiveOperationArn?: string;

  /**
   * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>Information about the broker nodes.</p>
   */
  BrokerNodeGroupInfo?: BrokerNodeGroupInfo;

  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The current version of the MSK cluster.</p>
   */
  CurrentVersion?: string;

  StateInfo?: StateInfo;
  /**
   * <p>Includes all client authentication information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The time when the cluster was created.</p>
   */
  CreationTime?: Date;
}

export namespace ClusterInfo {
  export const filterSensitiveLog = (obj: ClusterInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClusterInfo => __isa(o, "ClusterInfo");
}

/**
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationInfo {
  __type?: "ClusterOperationInfo";
  /**
   * <p>ARN of the cluster operation.</p>
   */
  OperationArn?: string;

  /**
   * <p>The ID of the API request that triggered this operation.</p>
   */
  ClientRequestId?: string;

  /**
   * <p>Information about cluster attributes before a cluster is updated.</p>
   */
  SourceClusterInfo?: MutableClusterInfo;

  /**
   * <p>Describes the error if the operation fails.</p>
   */
  ErrorInfo?: ErrorInfo;

  /**
   * <p>Type of the cluster operation.</p>
   */
  OperationType?: string;

  /**
   * <p>State of the cluster operation.</p>
   */
  OperationState?: string;

  /**
   * <p>The time that the operation was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>ARN of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The time at which the operation finished.</p>
   */
  EndTime?: Date;

  /**
   * <p>Steps completed during the operation.</p>
   */
  OperationSteps?: ClusterOperationStep[];

  /**
   * <p>Information about cluster attributes after a cluster is updated.</p>
   */
  TargetClusterInfo?: MutableClusterInfo;
}

export namespace ClusterOperationInfo {
  export const filterSensitiveLog = (obj: ClusterOperationInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClusterOperationInfo => __isa(o, "ClusterOperationInfo");
}

/**
 * <p>Step taken during a cluster operation.</p>
 */
export interface ClusterOperationStep {
  __type?: "ClusterOperationStep";
  /**
   * <p>The name of the step.</p>
   */
  StepName?: string;

  /**
   * <p>Information about the step and its status.</p>
   */
  StepInfo?: ClusterOperationStepInfo;
}

export namespace ClusterOperationStep {
  export const filterSensitiveLog = (obj: ClusterOperationStep): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClusterOperationStep => __isa(o, "ClusterOperationStep");
}

/**
 * <p>State information about the operation step.</p>
 */
export interface ClusterOperationStepInfo {
  __type?: "ClusterOperationStepInfo";
  /**
   * <p>The steps current status.</p>
   */
  StepStatus?: string;
}

export namespace ClusterOperationStepInfo {
  export const filterSensitiveLog = (obj: ClusterOperationStepInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ClusterOperationStepInfo => __isa(o, "ClusterOperationStepInfo");
}

export enum ClusterState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Contains source Kafka versions and compatible target Kafka versions.</p>
 */
export interface CompatibleKafkaVersion {
  __type?: "CompatibleKafkaVersion";
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
  export const filterSensitiveLog = (obj: CompatibleKafkaVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CompatibleKafkaVersion => __isa(o, "CompatibleKafkaVersion");
}

/**
 * <p>Represents an MSK Configuration.</p>
 */
export interface Configuration {
  __type?: "Configuration";
  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>The description of the configuration.</p>
   */
  Description: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   */
  KafkaVersions: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime: Date | undefined;
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Configuration => __isa(o, "Configuration");
}

/**
 * <p>Specifies the configuration to use for the brokers.</p>
 */
export interface ConfigurationInfo {
  __type?: "ConfigurationInfo";
  /**
   * <p>The revision of the configuration to use.</p>
   */
  Revision: number | undefined;

  /**
   * <p>ARN of the configuration to use.</p>
   */
  Arn: string | undefined;
}

export namespace ConfigurationInfo {
  export const filterSensitiveLog = (obj: ConfigurationInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConfigurationInfo => __isa(o, "ConfigurationInfo");
}

/**
 * <p>Describes a configuration revision.</p>
 */
export interface ConfigurationRevision {
  __type?: "ConfigurationRevision";
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
  export const filterSensitiveLog = (obj: ConfigurationRevision): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConfigurationRevision => __isa(o, "ConfigurationRevision");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CreateClusterRequest {
  __type?: "CreateClusterRequest";
  /**
   * <p>Includes all client authentication related information.</p>
   */
  ClientAuthentication?: ClientAuthentication;

  /**
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion: string | undefined;

  /**
   * <p>The name of the cluster.</p>
   */
  ClusterName: string | undefined;

  /**
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>Create tags when creating the cluster.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  LoggingInfo?: LoggingInfo;
  /**
   * <p>Information about the broker nodes in the cluster.</p>
   */
  BrokerNodeGroupInfo: BrokerNodeGroupInfo | undefined;

  /**
   * <p>Includes all encryption-related information.</p>
   */
  EncryptionInfo?: EncryptionInfo;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;
}

export namespace CreateClusterRequest {
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateClusterRequest => __isa(o, "CreateClusterRequest");
}

export interface CreateClusterResponse {
  __type?: "CreateClusterResponse";
  /**
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace CreateClusterResponse {
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateClusterResponse => __isa(o, "CreateClusterResponse");
}

export interface CreateConfigurationRequest {
  __type?: "CreateConfigurationRequest";
  /**
   * <p>Contents of the <filename>server.properties</filename> file. When using the API, you must ensure that the contents of the file are base64 encoded.
   *                When using the AWS Management Console, the SDK, or the AWS CLI, the contents of <filename>server.properties</filename> can be in plaintext.</p>
   */
  ServerProperties: Uint8Array | undefined;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;
}

export namespace CreateConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationRequest => __isa(o, "CreateConfigurationRequest");
}

export interface CreateConfigurationResponse {
  __type?: "CreateConfigurationResponse";
  /**
   * <p>The name of the configuration.</p>
   */
  Name?: string;

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
}

export namespace CreateConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationResponse => __isa(o, "CreateConfigurationResponse");
}

export interface DeleteClusterRequest {
  __type?: "DeleteClusterRequest";
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
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteClusterRequest => __isa(o, "DeleteClusterRequest");
}

export interface DeleteClusterResponse {
  __type?: "DeleteClusterResponse";
  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace DeleteClusterResponse {
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteClusterResponse => __isa(o, "DeleteClusterResponse");
}

export interface DescribeClusterOperationRequest {
  __type?: "DescribeClusterOperationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   */
  ClusterOperationArn: string | undefined;
}

export namespace DescribeClusterOperationRequest {
  export const filterSensitiveLog = (obj: DescribeClusterOperationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeClusterOperationRequest => __isa(o, "DescribeClusterOperationRequest");
}

export interface DescribeClusterOperationResponse {
  __type?: "DescribeClusterOperationResponse";
  /**
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationInfo;
}

export namespace DescribeClusterOperationResponse {
  export const filterSensitiveLog = (obj: DescribeClusterOperationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeClusterOperationResponse => __isa(o, "DescribeClusterOperationResponse");
}

export interface DescribeClusterRequest {
  __type?: "DescribeClusterRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace DescribeClusterRequest {
  export const filterSensitiveLog = (obj: DescribeClusterRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeClusterRequest => __isa(o, "DescribeClusterRequest");
}

export interface DescribeClusterResponse {
  __type?: "DescribeClusterResponse";
  /**
   * <p>The cluster information.</p>
   */
  ClusterInfo?: ClusterInfo;
}

export namespace DescribeClusterResponse {
  export const filterSensitiveLog = (obj: DescribeClusterResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeClusterResponse => __isa(o, "DescribeClusterResponse");
}

export interface DescribeConfigurationRequest {
  __type?: "DescribeConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

export namespace DescribeConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeConfigurationRequest => __isa(o, "DescribeConfigurationRequest");
}

export interface DescribeConfigurationResponse {
  __type?: "DescribeConfigurationResponse";
  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions?: string[];

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time when the configuration was created.</p>
   */
  CreationTime?: Date;
}

export namespace DescribeConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeConfigurationResponse => __isa(o, "DescribeConfigurationResponse");
}

export interface DescribeConfigurationRevisionRequest {
  __type?: "DescribeConfigurationRevisionRequest";
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
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeConfigurationRevisionRequest =>
    __isa(o, "DescribeConfigurationRevisionRequest");
}

export interface DescribeConfigurationRevisionResponse {
  __type?: "DescribeConfigurationRevisionResponse";
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
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeConfigurationRevisionResponse =>
    __isa(o, "DescribeConfigurationRevisionResponse");
}

/**
 * <p>Contains information about the EBS storage volumes attached to Kafka broker nodes.</p>
 */
export interface EBSStorageInfo {
  __type?: "EBSStorageInfo";
  /**
   * <p>The size in GiB of the EBS volume for the data drive on each broker node.</p>
   */
  VolumeSize?: number;
}

export namespace EBSStorageInfo {
  export const filterSensitiveLog = (obj: EBSStorageInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EBSStorageInfo => __isa(o, "EBSStorageInfo");
}

/**
 * <p>The data-volume encryption details.</p>
 */
export interface EncryptionAtRest {
  __type?: "EncryptionAtRest";
  /**
   * <p>The ARN of the AWS KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it.</p>
   */
  DataVolumeKMSKeyId: string | undefined;
}

export namespace EncryptionAtRest {
  export const filterSensitiveLog = (obj: EncryptionAtRest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionAtRest => __isa(o, "EncryptionAtRest");
}

/**
 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 */
export interface EncryptionInfo {
  __type?: "EncryptionInfo";
  /**
   * <p>The details for encryption in transit.</p>
   */
  EncryptionInTransit?: EncryptionInTransit;

  /**
   * <p>The data-volume encryption details.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;
}

export namespace EncryptionInfo {
  export const filterSensitiveLog = (obj: EncryptionInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionInfo => __isa(o, "EncryptionInfo");
}

/**
 * <p>The settings for encrypting data in transit.</p>
 */
export interface EncryptionInTransit {
  __type?: "EncryptionInTransit";
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
  export const filterSensitiveLog = (obj: EncryptionInTransit): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionInTransit => __isa(o, "EncryptionInTransit");
}

export enum EnhancedMonitoring {
  DEFAULT = "DEFAULT",
  PER_BROKER = "PER_BROKER",
  PER_TOPIC_PER_BROKER = "PER_TOPIC_PER_BROKER",
}

/**
 * <p>Returns information about an error state of the cluster.</p>
 */
export interface ErrorInfo {
  __type?: "ErrorInfo";
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
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ErrorInfo => __isa(o, "ErrorInfo");
}

export interface Firehose {
  __type?: "Firehose";
  Enabled: boolean | undefined;
  DeliveryStream?: string;
}

export namespace Firehose {
  export const filterSensitiveLog = (obj: Firehose): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Firehose => __isa(o, "Firehose");
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ForbiddenException => __isa(o, "ForbiddenException");
}

export interface GetBootstrapBrokersRequest {
  __type?: "GetBootstrapBrokersRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace GetBootstrapBrokersRequest {
  export const filterSensitiveLog = (obj: GetBootstrapBrokersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBootstrapBrokersRequest => __isa(o, "GetBootstrapBrokersRequest");
}

export interface GetBootstrapBrokersResponse {
  __type?: "GetBootstrapBrokersResponse";
  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringTls?: string;

  /**
   * <p>A string containing one or more hostname:port pairs.</p>
   */
  BootstrapBrokerString?: string;
}

export namespace GetBootstrapBrokersResponse {
  export const filterSensitiveLog = (obj: GetBootstrapBrokersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBootstrapBrokersResponse => __isa(o, "GetBootstrapBrokersResponse");
}

export interface GetCompatibleKafkaVersionsRequest {
  __type?: "GetCompatibleKafkaVersionsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster check.</p>
   */
  ClusterArn?: string;
}

export namespace GetCompatibleKafkaVersionsRequest {
  export const filterSensitiveLog = (obj: GetCompatibleKafkaVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCompatibleKafkaVersionsRequest => __isa(o, "GetCompatibleKafkaVersionsRequest");
}

export interface GetCompatibleKafkaVersionsResponse {
  __type?: "GetCompatibleKafkaVersionsResponse";
  /**
   * <p>A list of CompatibleKafkaVersion objects.</p>
   */
  CompatibleKafkaVersions?: CompatibleKafkaVersion[];
}

export namespace GetCompatibleKafkaVersionsResponse {
  export const filterSensitiveLog = (obj: GetCompatibleKafkaVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCompatibleKafkaVersionsResponse =>
    __isa(o, "GetCompatibleKafkaVersionsResponse");
}

/**
 * <p>Returns information about an error.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The description of the error.</p>
   */
  Message?: string;

  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerErrorException => __isa(o, "InternalServerErrorException");
}

/**
 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
 */
export interface JmxExporter {
  __type?: "JmxExporter";
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace JmxExporter {
  export const filterSensitiveLog = (obj: JmxExporter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JmxExporter => __isa(o, "JmxExporter");
}

/**
 * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
 */
export interface JmxExporterInfo {
  __type?: "JmxExporterInfo";
  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace JmxExporterInfo {
  export const filterSensitiveLog = (obj: JmxExporterInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is JmxExporterInfo => __isa(o, "JmxExporterInfo");
}

export interface KafkaVersion {
  __type?: "KafkaVersion";
  Status?: KafkaVersionStatus | string;
  Version?: string;
}

export namespace KafkaVersion {
  export const filterSensitiveLog = (obj: KafkaVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KafkaVersion => __isa(o, "KafkaVersion");
}

export enum KafkaVersionStatus {
  ACTIVE = "ACTIVE",
  DEPRECATED = "DEPRECATED",
}

export interface ListClusterOperationsRequest {
  __type?: "ListClusterOperationsRequest";
  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace ListClusterOperationsRequest {
  export const filterSensitiveLog = (obj: ListClusterOperationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListClusterOperationsRequest => __isa(o, "ListClusterOperationsRequest");
}

export interface ListClusterOperationsResponse {
  __type?: "ListClusterOperationsResponse";
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
  export const filterSensitiveLog = (obj: ListClusterOperationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListClusterOperationsResponse => __isa(o, "ListClusterOperationsResponse");
}

export interface ListClustersRequest {
  __type?: "ListClustersRequest";
  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify a prefix of the name of the clusters that you want to list. The service lists all the clusters whose names start with this prefix.</p>
   */
  ClusterNameFilter?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;
}

export namespace ListClustersRequest {
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListClustersRequest => __isa(o, "ListClustersRequest");
}

export interface ListClustersResponse {
  __type?: "ListClustersResponse";
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
  export const filterSensitiveLog = (obj: ListClustersResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListClustersResponse => __isa(o, "ListClustersResponse");
}

export interface ListConfigurationRevisionsRequest {
  __type?: "ListConfigurationRevisionsRequest";
  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

export namespace ListConfigurationRevisionsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationRevisionsRequest => __isa(o, "ListConfigurationRevisionsRequest");
}

export interface ListConfigurationRevisionsResponse {
  __type?: "ListConfigurationRevisionsResponse";
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
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationRevisionsResponse =>
    __isa(o, "ListConfigurationRevisionsResponse");
}

export interface ListConfigurationsRequest {
  __type?: "ListConfigurationsRequest";
  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;
}

export namespace ListConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationsRequest => __isa(o, "ListConfigurationsRequest");
}

export interface ListConfigurationsResponse {
  __type?: "ListConfigurationsResponse";
  /**
   * <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of MSK configurations.</p>
   */
  Configurations?: Configuration[];
}

export namespace ListConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationsResponse => __isa(o, "ListConfigurationsResponse");
}

export interface ListKafkaVersionsRequest {
  __type?: "ListKafkaVersionsRequest";
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
  export const filterSensitiveLog = (obj: ListKafkaVersionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListKafkaVersionsRequest => __isa(o, "ListKafkaVersionsRequest");
}

export interface ListKafkaVersionsResponse {
  __type?: "ListKafkaVersionsResponse";
  NextToken?: string;
  KafkaVersions?: KafkaVersion[];
}

export namespace ListKafkaVersionsResponse {
  export const filterSensitiveLog = (obj: ListKafkaVersionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListKafkaVersionsResponse => __isa(o, "ListKafkaVersionsResponse");
}

export interface ListNodesRequest {
  __type?: "ListNodesRequest";
  /**
   * <p>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response.
   *             To get the next batch, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</p>
   */
  MaxResults?: number;
}

export namespace ListNodesRequest {
  export const filterSensitiveLog = (obj: ListNodesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNodesRequest => __isa(o, "ListNodesRequest");
}

export interface ListNodesResponse {
  __type?: "ListNodesResponse";
  /**
   * <p>List containing a NodeInfo object.</p>
   */
  NodeInfoList?: NodeInfo[];

  /**
   * <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export namespace ListNodesResponse {
  export const filterSensitiveLog = (obj: ListNodesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNodesResponse => __isa(o, "ListNodesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export interface LoggingInfo {
  __type?: "LoggingInfo";
  BrokerLogs: BrokerLogs | undefined;
}

export namespace LoggingInfo {
  export const filterSensitiveLog = (obj: LoggingInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LoggingInfo => __isa(o, "LoggingInfo");
}

/**
 * <p>Information about cluster attributes that can be updated via update APIs.</p>
 */
export interface MutableClusterInfo {
  __type?: "MutableClusterInfo";
  LoggingInfo?: LoggingInfo;
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
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   */
  BrokerEBSVolumeInfo?: BrokerEBSVolumeInfo[];

  /**
   * <p>Information about the changes in the configuration of the brokers.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;
}

export namespace MutableClusterInfo {
  export const filterSensitiveLog = (obj: MutableClusterInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MutableClusterInfo => __isa(o, "MutableClusterInfo");
}

/**
 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
 */
export interface NodeExporter {
  __type?: "NodeExporter";
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace NodeExporter {
  export const filterSensitiveLog = (obj: NodeExporter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NodeExporter => __isa(o, "NodeExporter");
}

/**
 * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
 */
export interface NodeExporterInfo {
  __type?: "NodeExporterInfo";
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  EnabledInBroker: boolean | undefined;
}

export namespace NodeExporterInfo {
  export const filterSensitiveLog = (obj: NodeExporterInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NodeExporterInfo => __isa(o, "NodeExporterInfo");
}

/**
 * <p>The node information object.</p>
 */
export interface NodeInfo {
  __type?: "NodeInfo";
  /**
   * <p>The node type.</p>
   */
  NodeType?: NodeType | string;

  /**
   * <p>The start time.</p>
   */
  AddedToClusterTime?: string;

  /**
   * <p>The instance type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the node.</p>
   */
  NodeARN?: string;

  /**
   * <p>The broker node info.</p>
   */
  BrokerNodeInfo?: BrokerNodeInfo;

  /**
   * <p>The ZookeeperNodeInfo.</p>
   */
  ZookeeperNodeInfo?: ZookeeperNodeInfo;
}

export namespace NodeInfo {
  export const filterSensitiveLog = (obj: NodeInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NodeInfo => __isa(o, "NodeInfo");
}

export enum NodeType {
  BROKER = "BROKER",
}

/**
 * <p>Returns information about an error.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The description of the error.</p>
   */
  Message?: string;

  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoring {
  __type?: "OpenMonitoring";
  /**
   * <p>Prometheus settings.</p>
   */
  Prometheus: Prometheus | undefined;
}

export namespace OpenMonitoring {
  export const filterSensitiveLog = (obj: OpenMonitoring): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OpenMonitoring => __isa(o, "OpenMonitoring");
}

/**
 * <p>JMX and Node monitoring for the MSK cluster.</p>
 */
export interface OpenMonitoringInfo {
  __type?: "OpenMonitoringInfo";
  /**
   * <p>Prometheus settings.</p>
   */
  Prometheus: PrometheusInfo | undefined;
}

export namespace OpenMonitoringInfo {
  export const filterSensitiveLog = (obj: OpenMonitoringInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OpenMonitoringInfo => __isa(o, "OpenMonitoringInfo");
}

/**
 * <p>Prometheus settings.</p>
 */
export interface Prometheus {
  __type?: "Prometheus";
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  NodeExporter?: NodeExporter;

  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporter;
}

export namespace Prometheus {
  export const filterSensitiveLog = (obj: Prometheus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Prometheus => __isa(o, "Prometheus");
}

/**
 * <p>Prometheus settings.</p>
 */
export interface PrometheusInfo {
  __type?: "PrometheusInfo";
  /**
   * <p>Indicates whether you want to enable or disable the Node Exporter.</p>
   */
  NodeExporter?: NodeExporterInfo;

  /**
   * <p>Indicates whether you want to enable or disable the JMX Exporter.</p>
   */
  JmxExporter?: JmxExporterInfo;
}

export namespace PrometheusInfo {
  export const filterSensitiveLog = (obj: PrometheusInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PrometheusInfo => __isa(o, "PrometheusInfo");
}

/**
 * Reboots a node.
 */
export interface RebootBrokerRequest {
  __type?: "RebootBrokerRequest";
  /**
   * <p>The list of broker IDs to be rebooted.</p>
   */
  BrokerIds: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;
}

export namespace RebootBrokerRequest {
  export const filterSensitiveLog = (obj: RebootBrokerRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootBrokerRequest => __isa(o, "RebootBrokerRequest");
}

export interface RebootBrokerResponse {
  __type?: "RebootBrokerResponse";
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
  export const filterSensitiveLog = (obj: RebootBrokerResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RebootBrokerResponse => __isa(o, "RebootBrokerResponse");
}

export interface S3 {
  __type?: "S3";
  Prefix?: string;
  Enabled: boolean | undefined;
  Bucket?: string;
}

export namespace S3 {
  export const filterSensitiveLog = (obj: S3): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3 => __isa(o, "S3");
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The description of the error.</p>
   */
  Message?: string;

  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceUnavailableException => __isa(o, "ServiceUnavailableException");
}

export interface StateInfo {
  __type?: "StateInfo";
  Code?: string;
  Message?: string;
}

export namespace StateInfo {
  export const filterSensitiveLog = (obj: StateInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StateInfo => __isa(o, "StateInfo");
}

/**
 * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
 */
export interface StorageInfo {
  __type?: "StorageInfo";
  /**
   * <p>EBS volume information.</p>
   */
  EbsStorageInfo?: EBSStorageInfo;
}

export namespace StorageInfo {
  export const filterSensitiveLog = (obj: StorageInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StorageInfo => __isa(o, "StorageInfo");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

/**
 * <p>Details for client authentication using TLS.</p>
 */
export interface Tls {
  __type?: "Tls";
  /**
   * <p>List of ACM Certificate Authority ARNs.</p>
   */
  CertificateAuthorityArnList?: string[];
}

export namespace Tls {
  export const filterSensitiveLog = (obj: Tls): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tls => __isa(o, "Tls");
}

/**
 * <p>Returns information about an error.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The description of the error.</p>
   */
  Message?: string;

  /**
   * <p>The parameter that caused the error.</p>
   */
  InvalidParameter?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
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
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnauthorizedException => __isa(o, "UnauthorizedException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UpdateBrokerCountRequest {
  __type?: "UpdateBrokerCountRequest";
  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>The number of broker nodes that you want the cluster to have after this operation completes successfully.</p>
   */
  TargetNumberOfBrokerNodes: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace UpdateBrokerCountRequest {
  export const filterSensitiveLog = (obj: UpdateBrokerCountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBrokerCountRequest => __isa(o, "UpdateBrokerCountRequest");
}

export interface UpdateBrokerCountResponse {
  __type?: "UpdateBrokerCountResponse";
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
  export const filterSensitiveLog = (obj: UpdateBrokerCountResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBrokerCountResponse => __isa(o, "UpdateBrokerCountResponse");
}

export interface UpdateBrokerStorageRequest {
  __type?: "UpdateBrokerStorageRequest";
  /**
   * <p>Describes the target volume size and the ID of the broker to apply the update to.</p>
   */
  TargetBrokerEBSVolumeInfo: BrokerEBSVolumeInfo[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of cluster to update from. A successful operation will then generate a new version.</p>
   */
  CurrentVersion: string | undefined;
}

export namespace UpdateBrokerStorageRequest {
  export const filterSensitiveLog = (obj: UpdateBrokerStorageRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBrokerStorageRequest => __isa(o, "UpdateBrokerStorageRequest");
}

export interface UpdateBrokerStorageResponse {
  __type?: "UpdateBrokerStorageResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace UpdateBrokerStorageResponse {
  export const filterSensitiveLog = (obj: UpdateBrokerStorageResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateBrokerStorageResponse => __isa(o, "UpdateBrokerStorageResponse");
}

export interface UpdateClusterConfigurationRequest {
  __type?: "UpdateClusterConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The version of the cluster that needs to be updated.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   */
  ConfigurationInfo: ConfigurationInfo | undefined;
}

export namespace UpdateClusterConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateClusterConfigurationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateClusterConfigurationRequest => __isa(o, "UpdateClusterConfigurationRequest");
}

export interface UpdateClusterConfigurationResponse {
  __type?: "UpdateClusterConfigurationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace UpdateClusterConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateClusterConfigurationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateClusterConfigurationResponse =>
    __isa(o, "UpdateClusterConfigurationResponse");
}

export interface UpdateClusterKafkaVersionRequest {
  __type?: "UpdateClusterKafkaVersionRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster to be updated.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>Current cluster version.</p>
   */
  CurrentVersion: string | undefined;

  /**
   * <p>Target Kafka version.</p>
   */
  TargetKafkaVersion: string | undefined;

  /**
   * <p>The custom configuration that should be applied on the new version of cluster.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;
}

export namespace UpdateClusterKafkaVersionRequest {
  export const filterSensitiveLog = (obj: UpdateClusterKafkaVersionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateClusterKafkaVersionRequest => __isa(o, "UpdateClusterKafkaVersionRequest");
}

export interface UpdateClusterKafkaVersionResponse {
  __type?: "UpdateClusterKafkaVersionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace UpdateClusterKafkaVersionResponse {
  export const filterSensitiveLog = (obj: UpdateClusterKafkaVersionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateClusterKafkaVersionResponse => __isa(o, "UpdateClusterKafkaVersionResponse");
}

/**
 * Request body for UpdateMonitoring.
 */
export interface UpdateMonitoringRequest {
  __type?: "UpdateMonitoringRequest";
  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  LoggingInfo?: LoggingInfo;
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * <p>The version of the MSK cluster to update. Cluster versions aren't simple numbers. You can describe an MSK cluster to find its version. When this update operation is successful, it generates a new cluster version.</p>
   */
  CurrentVersion: string | undefined;
}

export namespace UpdateMonitoringRequest {
  export const filterSensitiveLog = (obj: UpdateMonitoringRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMonitoringRequest => __isa(o, "UpdateMonitoringRequest");
}

export interface UpdateMonitoringResponse {
  __type?: "UpdateMonitoringResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   */
  ClusterOperationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace UpdateMonitoringResponse {
  export const filterSensitiveLog = (obj: UpdateMonitoringResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateMonitoringResponse => __isa(o, "UpdateMonitoringResponse");
}

/**
 * <p>Zookeeper node information.</p>
 */
export interface ZookeeperNodeInfo {
  __type?: "ZookeeperNodeInfo";
  /**
   * <p>The role-specific ID for Zookeeper.</p>
   */
  ZookeeperId?: number;

  /**
   * <p>The virtual private cloud (VPC) IP address of the client.</p>
   */
  ClientVpcIpAddress?: string;

  /**
   * <p>The version of Zookeeper.</p>
   */
  ZookeeperVersion?: string;

  /**
   * <p>The attached elastic network interface of the broker.</p>
   */
  AttachedENIId?: string;

  /**
   * <p>Endpoints for accessing the ZooKeeper.</p>
   */
  Endpoints?: string[];
}

export namespace ZookeeperNodeInfo {
  export const filterSensitiveLog = (obj: ZookeeperNodeInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ZookeeperNodeInfo => __isa(o, "ZookeeperNodeInfo");
}
