import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Returns information about an error.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

export enum BrokerAZDistribution {
  DEFAULT = "DEFAULT"
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
  export function isa(o: any): o is BrokerEBSVolumeInfo {
    return __isa(o, "BrokerEBSVolumeInfo");
  }
}

/**
 * <p>Describes the setup to be used for Kafka broker nodes in the cluster.</p>
 */
export interface BrokerNodeGroupInfo {
  __type?: "BrokerNodeGroupInfo";
  /**
   * <p>The distribution of broker nodes across Availability Zones. This is an optional parameter. If you don't specify it, Amazon MSK gives it the value DEFAULT. You can also explicitly set this parameter to the value DEFAULT. No other values are currently allowed.</p>
   *          <p>Amazon MSK distributes the broker nodes evenly across the Availability Zones that correspond to the subnets you provide when you create the cluster.</p>
   */
  BrokerAZDistribution?: BrokerAZDistribution | string;

  /**
   * <p>The list of subnets to connect to in the client virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data. Client subnets can't be in Availability Zone us-east-1e.</p>
   */
  ClientSubnets: Array<string> | undefined;

  /**
   * <p>The type of Amazon EC2 instances to use for Kafka brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge,
   * kafka.m5.4xlarge, kafka.m5.12xlarge, and kafka.m5.24xlarge.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC.</p>
   */
  SecurityGroups?: Array<string>;

  /**
   * <p>Contains information about storage volumes attached to MSK broker nodes.</p>
   */
  StorageInfo?: StorageInfo;
}

export namespace BrokerNodeGroupInfo {
  export function isa(o: any): o is BrokerNodeGroupInfo {
    return __isa(o, "BrokerNodeGroupInfo");
  }
}

/**
 * <p>BrokerNodeInfo</p>
 */
export interface BrokerNodeInfo {
  __type?: "BrokerNodeInfo";
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
  Endpoints?: Array<string>;
}

export namespace BrokerNodeInfo {
  export function isa(o: any): o is BrokerNodeInfo {
    return __isa(o, "BrokerNodeInfo");
  }
}

/**
 * <p>Information about the current software installed on the cluster.</p>
 */
export interface BrokerSoftwareInfo {
  __type?: "BrokerSoftwareInfo";
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
  export function isa(o: any): o is BrokerSoftwareInfo {
    return __isa(o, "BrokerSoftwareInfo");
  }
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
  export function isa(o: any): o is ClientAuthentication {
    return __isa(o, "ClientAuthentication");
  }
}

export enum ClientBroker {
  PLAINTEXT = "PLAINTEXT",
  TLS = "TLS",
  TLS_PLAINTEXT = "TLS_PLAINTEXT"
}

/**
 * <p>Returns information about a cluster.</p>
 */
export interface ClusterInfo {
  __type?: "ClusterInfo";
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
   * <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>Settings for open monitoring using Prometheus.</p>
   */
  OpenMonitoring?: OpenMonitoring;

  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>Tags attached to the cluster.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   */
  ZookeeperConnectString?: string;
}

export namespace ClusterInfo {
  export function isa(o: any): o is ClusterInfo {
    return __isa(o, "ClusterInfo");
  }
}

/**
 * <p>Returns information about a cluster operation.</p>
 */
export interface ClusterOperationInfo {
  __type?: "ClusterOperationInfo";
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
  export function isa(o: any): o is ClusterOperationInfo {
    return __isa(o, "ClusterOperationInfo");
  }
}

export enum ClusterState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING"
}

/**
 * <p>Represents an MSK Configuration.</p>
 */
export interface Configuration {
  __type?: "Configuration";
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
  KafkaVersions: Array<string> | undefined;

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration.</p>
   */
  Name: string | undefined;
}

export namespace Configuration {
  export function isa(o: any): o is Configuration {
    return __isa(o, "Configuration");
  }
}

/**
 * <p>Specifies the configuration to use for the brokers.</p>
 */
export interface ConfigurationInfo {
  __type?: "ConfigurationInfo";
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
  export function isa(o: any): o is ConfigurationInfo {
    return __isa(o, "ConfigurationInfo");
  }
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
  export function isa(o: any): o is ConfigurationRevision {
    return __isa(o, "ConfigurationRevision");
  }
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
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

export interface CreateClusterRequest {
  __type?: "CreateClusterRequest";
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
   * <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The version of Apache Kafka.</p>
   */
  KafkaVersion: string | undefined;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes: number | undefined;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoringInfo;

  /**
   * <p>Create tags when creating the cluster.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateClusterRequest {
  export function isa(o: any): o is CreateClusterRequest {
    return __isa(o, "CreateClusterRequest");
  }
}

export interface CreateClusterResponse {
  __type?: "CreateClusterResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The name of the MSK cluster.</p>
   */
  ClusterName?: string;

  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;
}

export namespace CreateClusterResponse {
  export function isa(o: any): o is CreateClusterResponse {
    return __isa(o, "CreateClusterResponse");
  }
}

export interface CreateConfigurationRequest {
  __type?: "CreateConfigurationRequest";
  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   */
  KafkaVersions: Array<string> | undefined;

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
  export function isa(o: any): o is CreateConfigurationRequest {
    return __isa(o, "CreateConfigurationRequest");
  }
}

export interface CreateConfigurationResponse {
  __type?: "CreateConfigurationResponse";
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
}

export namespace CreateConfigurationResponse {
  export function isa(o: any): o is CreateConfigurationResponse {
    return __isa(o, "CreateConfigurationResponse");
  }
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
  export function isa(o: any): o is DeleteClusterRequest {
    return __isa(o, "DeleteClusterRequest");
  }
}

export interface DeleteClusterResponse {
  __type?: "DeleteClusterResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   */
  State?: ClusterState | string;
}

export namespace DeleteClusterResponse {
  export function isa(o: any): o is DeleteClusterResponse {
    return __isa(o, "DeleteClusterResponse");
  }
}

export interface DescribeClusterOperationRequest {
  __type?: "DescribeClusterOperationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the MSK cluster operation.</p>
   */
  ClusterOperationArn: string | undefined;
}

export namespace DescribeClusterOperationRequest {
  export function isa(o: any): o is DescribeClusterOperationRequest {
    return __isa(o, "DescribeClusterOperationRequest");
  }
}

export interface DescribeClusterOperationResponse {
  __type?: "DescribeClusterOperationResponse";
  /**
   * <p>Cluster operation information</p>
   */
  ClusterOperationInfo?: ClusterOperationInfo;
}

export namespace DescribeClusterOperationResponse {
  export function isa(o: any): o is DescribeClusterOperationResponse {
    return __isa(o, "DescribeClusterOperationResponse");
  }
}

export interface DescribeClusterRequest {
  __type?: "DescribeClusterRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace DescribeClusterRequest {
  export function isa(o: any): o is DescribeClusterRequest {
    return __isa(o, "DescribeClusterRequest");
  }
}

export interface DescribeClusterResponse {
  __type?: "DescribeClusterResponse";
  /**
   * <p>The cluster information.</p>
   */
  ClusterInfo?: ClusterInfo;
}

export namespace DescribeClusterResponse {
  export function isa(o: any): o is DescribeClusterResponse {
    return __isa(o, "DescribeClusterResponse");
  }
}

export interface DescribeConfigurationRequest {
  __type?: "DescribeConfigurationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration and all of its revisions.</p>
   */
  Arn: string | undefined;
}

export namespace DescribeConfigurationRequest {
  export function isa(o: any): o is DescribeConfigurationRequest {
    return __isa(o, "DescribeConfigurationRequest");
  }
}

export interface DescribeConfigurationResponse {
  __type?: "DescribeConfigurationResponse";
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
  KafkaVersions?: Array<string>;

  /**
   * <p>Latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>The name of the configuration.</p>
   */
  Name?: string;
}

export namespace DescribeConfigurationResponse {
  export function isa(o: any): o is DescribeConfigurationResponse {
    return __isa(o, "DescribeConfigurationResponse");
  }
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
  export function isa(o: any): o is DescribeConfigurationRevisionRequest {
    return __isa(o, "DescribeConfigurationRevisionRequest");
  }
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
  export function isa(o: any): o is DescribeConfigurationRevisionResponse {
    return __isa(o, "DescribeConfigurationRevisionResponse");
  }
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
  export function isa(o: any): o is EBSStorageInfo {
    return __isa(o, "EBSStorageInfo");
  }
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
  export function isa(o: any): o is EncryptionAtRest {
    return __isa(o, "EncryptionAtRest");
  }
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
  export function isa(o: any): o is EncryptionInTransit {
    return __isa(o, "EncryptionInTransit");
  }
}

/**
 * <p>Includes encryption-related information, such as the AWS KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.</p>
 */
export interface EncryptionInfo {
  __type?: "EncryptionInfo";
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
  export function isa(o: any): o is EncryptionInfo {
    return __isa(o, "EncryptionInfo");
  }
}

export enum EnhancedMonitoring {
  DEFAULT = "DEFAULT",
  PER_BROKER = "PER_BROKER",
  PER_TOPIC_PER_BROKER = "PER_TOPIC_PER_BROKER"
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
  export function isa(o: any): o is ErrorInfo {
    return __isa(o, "ErrorInfo");
  }
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
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

export interface GetBootstrapBrokersRequest {
  __type?: "GetBootstrapBrokersRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   */
  ClusterArn: string | undefined;
}

export namespace GetBootstrapBrokersRequest {
  export function isa(o: any): o is GetBootstrapBrokersRequest {
    return __isa(o, "GetBootstrapBrokersRequest");
  }
}

export interface GetBootstrapBrokersResponse {
  __type?: "GetBootstrapBrokersResponse";
  /**
   * <p>A string containing one or more hostname:port pairs.</p>
   */
  BootstrapBrokerString?: string;

  /**
   * <p>A string containing one or more DNS names (or IP) and TLS port pairs.</p>
   */
  BootstrapBrokerStringTls?: string;
}

export namespace GetBootstrapBrokersResponse {
  export function isa(o: any): o is GetBootstrapBrokersResponse {
    return __isa(o, "GetBootstrapBrokersResponse");
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
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
  export function isa(o: any): o is JmxExporter {
    return __isa(o, "JmxExporter");
  }
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
  export function isa(o: any): o is JmxExporterInfo {
    return __isa(o, "JmxExporterInfo");
  }
}

export interface ListClusterOperationsRequest {
  __type?: "ListClusterOperationsRequest";
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
  export function isa(o: any): o is ListClusterOperationsRequest {
    return __isa(o, "ListClusterOperationsRequest");
  }
}

export interface ListClusterOperationsResponse {
  __type?: "ListClusterOperationsResponse";
  /**
   * <p>An array of cluster operation information objects.</p>
   */
  ClusterOperationInfoList?: Array<ClusterOperationInfo>;

  /**
   * <p>If the response of ListClusterOperations is truncated, it returns a NextToken in the response. This Nexttoken should be sent in the subsequent request to ListClusterOperations.</p>
   */
  NextToken?: string;
}

export namespace ListClusterOperationsResponse {
  export function isa(o: any): o is ListClusterOperationsResponse {
    return __isa(o, "ListClusterOperationsResponse");
  }
}

export interface ListClustersRequest {
  __type?: "ListClustersRequest";
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
  export function isa(o: any): o is ListClustersRequest {
    return __isa(o, "ListClustersRequest");
  }
}

export interface ListClustersResponse {
  __type?: "ListClustersResponse";
  /**
   * <p>Information on each of the MSK clusters in the response.</p>
   */
  ClusterInfoList?: Array<ClusterInfo>;

  /**
   * <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export namespace ListClustersResponse {
  export function isa(o: any): o is ListClustersResponse {
    return __isa(o, "ListClustersResponse");
  }
}

export interface ListConfigurationRevisionsRequest {
  __type?: "ListConfigurationRevisionsRequest";
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
  export function isa(o: any): o is ListConfigurationRevisionsRequest {
    return __isa(o, "ListConfigurationRevisionsRequest");
  }
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
  Revisions?: Array<ConfigurationRevision>;
}

export namespace ListConfigurationRevisionsResponse {
  export function isa(o: any): o is ListConfigurationRevisionsResponse {
    return __isa(o, "ListConfigurationRevisionsResponse");
  }
}

export interface ListConfigurationsRequest {
  __type?: "ListConfigurationsRequest";
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
  export function isa(o: any): o is ListConfigurationsRequest {
    return __isa(o, "ListConfigurationsRequest");
  }
}

export interface ListConfigurationsResponse {
  __type?: "ListConfigurationsResponse";
  /**
   * <p>An array of MSK configurations.</p>
   */
  Configurations?: Array<Configuration>;

  /**
   * <p>The paginated results marker. When the result of a ListConfigurations operation is truncated, the call returns NextToken in the response.
   *                To get another batch of configurations, provide this token in your next request.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationsResponse {
  export function isa(o: any): o is ListConfigurationsResponse {
    return __isa(o, "ListConfigurationsResponse");
  }
}

export interface ListNodesRequest {
  __type?: "ListNodesRequest";
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
  export function isa(o: any): o is ListNodesRequest {
    return __isa(o, "ListNodesRequest");
  }
}

export interface ListNodesResponse {
  __type?: "ListNodesResponse";
  /**
   * <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   */
  NextToken?: string;

  /**
   * <p>List containing a NodeInfo object.</p>
   */
  NodeInfoList?: Array<NodeInfo>;
}

export namespace ListNodesResponse {
  export function isa(o: any): o is ListNodesResponse {
    return __isa(o, "ListNodesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the resource that's associated with the tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>Information about cluster attributes that can be updated via update APIs.</p>
 */
export interface MutableClusterInfo {
  __type?: "MutableClusterInfo";
  /**
   * <p>Specifies the size of the EBS volume and the ID of the associated broker.</p>
   */
  BrokerEBSVolumeInfo?: Array<BrokerEBSVolumeInfo>;

  /**
   * <p>Information about the changes in the configuration of the brokers.</p>
   */
  ConfigurationInfo?: ConfigurationInfo;

  /**
   * <p>Specifies which Apache Kafka metrics Amazon MSK gathers and sends to Amazon CloudWatch for this cluster.</p>
   */
  EnhancedMonitoring?: EnhancedMonitoring | string;

  /**
   * <p>The number of broker nodes in the cluster.</p>
   */
  NumberOfBrokerNodes?: number;

  /**
   * <p>The settings for open monitoring.</p>
   */
  OpenMonitoring?: OpenMonitoring;
}

export namespace MutableClusterInfo {
  export function isa(o: any): o is MutableClusterInfo {
    return __isa(o, "MutableClusterInfo");
  }
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
  export function isa(o: any): o is NodeExporter {
    return __isa(o, "NodeExporter");
  }
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
  export function isa(o: any): o is NodeExporterInfo {
    return __isa(o, "NodeExporterInfo");
  }
}

/**
 * <p>The node information object.</p>
 */
export interface NodeInfo {
  __type?: "NodeInfo";
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
  export function isa(o: any): o is NodeInfo {
    return __isa(o, "NodeInfo");
  }
}

export enum NodeType {
  BROKER = "BROKER"
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
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
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
  export function isa(o: any): o is OpenMonitoring {
    return __isa(o, "OpenMonitoring");
  }
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
  export function isa(o: any): o is OpenMonitoringInfo {
    return __isa(o, "OpenMonitoringInfo");
  }
}

/**
 * <p>Prometheus settings.</p>
 */
export interface Prometheus {
  __type?: "Prometheus";
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
  export function isa(o: any): o is Prometheus {
    return __isa(o, "Prometheus");
  }
}

/**
 * <p>Prometheus settings.</p>
 */
export interface PrometheusInfo {
  __type?: "PrometheusInfo";
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
  export function isa(o: any): o is PrometheusInfo {
    return __isa(o, "PrometheusInfo");
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
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
  export function isa(o: any): o is StorageInfo {
    return __isa(o, "StorageInfo");
  }
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
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

/**
 * <p>Details for client authentication using TLS.</p>
 */
export interface Tls {
  __type?: "Tls";
  /**
   * <p>List of ACM Certificate Authority ARNs.</p>
   */
  CertificateAuthorityArnList?: Array<string>;
}

export namespace Tls {
  export function isa(o: any): o is Tls {
    return __isa(o, "Tls");
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export interface TooManyRequestsException
  extends __SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is TooManyRequestsException {
    return __isa(o, "TooManyRequestsException");
  }
}

/**
 * <p>Returns information about an error.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
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
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UpdateBrokerCountRequest {
  __type?: "UpdateBrokerCountRequest";
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
  export function isa(o: any): o is UpdateBrokerCountRequest {
    return __isa(o, "UpdateBrokerCountRequest");
  }
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
  export function isa(o: any): o is UpdateBrokerCountResponse {
    return __isa(o, "UpdateBrokerCountResponse");
  }
}

export interface UpdateBrokerStorageRequest {
  __type?: "UpdateBrokerStorageRequest";
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
  TargetBrokerEBSVolumeInfo: Array<BrokerEBSVolumeInfo> | undefined;
}

export namespace UpdateBrokerStorageRequest {
  export function isa(o: any): o is UpdateBrokerStorageRequest {
    return __isa(o, "UpdateBrokerStorageRequest");
  }
}

export interface UpdateBrokerStorageResponse {
  __type?: "UpdateBrokerStorageResponse";
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
  export function isa(o: any): o is UpdateBrokerStorageResponse {
    return __isa(o, "UpdateBrokerStorageResponse");
  }
}

export interface UpdateClusterConfigurationRequest {
  __type?: "UpdateClusterConfigurationRequest";
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
  export function isa(o: any): o is UpdateClusterConfigurationRequest {
    return __isa(o, "UpdateClusterConfigurationRequest");
  }
}

export interface UpdateClusterConfigurationResponse {
  __type?: "UpdateClusterConfigurationResponse";
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
  export function isa(o: any): o is UpdateClusterConfigurationResponse {
    return __isa(o, "UpdateClusterConfigurationResponse");
  }
}

/**
 * Request body for UpdateMonitoring.
 */
export interface UpdateMonitoringRequest {
  __type?: "UpdateMonitoringRequest";
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
}

export namespace UpdateMonitoringRequest {
  export function isa(o: any): o is UpdateMonitoringRequest {
    return __isa(o, "UpdateMonitoringRequest");
  }
}

export interface UpdateMonitoringResponse {
  __type?: "UpdateMonitoringResponse";
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
  export function isa(o: any): o is UpdateMonitoringResponse {
    return __isa(o, "UpdateMonitoringResponse");
  }
}

/**
 * <p>Zookeeper node information.</p>
 */
export interface ZookeeperNodeInfo {
  __type?: "ZookeeperNodeInfo";
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
  Endpoints?: Array<string>;

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
  export function isa(o: any): o is ZookeeperNodeInfo {
    return __isa(o, "ZookeeperNodeInfo");
  }
}
