import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The description of the scale-in policy for the connector.</p>
 */
export interface ScaleInPolicyDescription {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
   */
  cpuUtilizationPercentage?: number;
}

export namespace ScaleInPolicyDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleInPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicyDescription {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
   */
  cpuUtilizationPercentage?: number;
}

export namespace ScaleOutPolicyDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleOutPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the auto scaling parameters for the connector.</p>
 */
export interface AutoScalingDescription {
  /**
   * <p>The maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount?: number;

  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount?: number;

  /**
   * <p>The minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount?: number;

  /**
   * <p>The sacle-in policy for the connector.</p>
   */
  scaleInPolicy?: ScaleInPolicyDescription;

  /**
   * <p>The sacle-out policy for the connector.&gt;</p>
   */
  scaleOutPolicy?: ScaleOutPolicyDescription;
}

export namespace AutoScalingDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacityDescription {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount?: number;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount?: number;
}

export namespace ProvisionedCapacityDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedCapacityDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the connector's capacity.</p>
 */
export interface CapacityDescription {
  /**
   * <p>Describes the connector's auto scaling capacity.</p>
   */
  autoScaling?: AutoScalingDescription;

  /**
   * <p>Describes a connector's provisioned capacity.</p>
   */
  provisionedCapacity?: ProvisionedCapacityDescription;
}

export namespace CapacityDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityDescription): any => ({
    ...obj,
  });
}

export enum ConnectorState {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  UPDATING = "UPDATING",
}

/**
 * <p>The description of the VPC in which the connector resides.</p>
 */
export interface VpcDescription {
  /**
   * <p>The security groups for the connector.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The subnets for the connector.</p>
   */
  subnets?: string[];
}

export namespace VpcDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaClusterDescription {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers?: string;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   */
  vpc?: VpcDescription;
}

export namespace ApacheKafkaClusterDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApacheKafkaClusterDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Details of how to connect to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterDescription {
  /**
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   */
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}

export namespace KafkaClusterDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaClusterDescription): any => ({
    ...obj,
  });
}

export enum KafkaClusterClientAuthenticationType {
  IAM = "IAM",
  NONE = "NONE",
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.</p>
   */
  authenticationType?: KafkaClusterClientAuthenticationType | string;
}

export namespace KafkaClusterClientAuthenticationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaClusterClientAuthenticationDescription): any => ({
    ...obj,
  });
}

export enum KafkaClusterEncryptionInTransitType {
  PLAINTEXT = "PLAINTEXT",
  TLS = "TLS",
}

/**
 * <p>The description of the encryption in transit to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterEncryptionInTransitDescription {
  /**
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   */
  encryptionType?: KafkaClusterEncryptionInTransitType | string;
}

export namespace KafkaClusterEncryptionInTransitDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaClusterEncryptionInTransitDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the log delivery settings.</p>
 */
export interface CloudWatchLogsLogDeliveryDescription {
  /**
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   */
  logGroup?: string;
}

export namespace CloudWatchLogsLogDeliveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogsLogDeliveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.</p>
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled?: boolean;
}

export namespace FirehoseLogDeliveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirehoseLogDeliveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the details about delivering logs to Amazon S3.</p>
 */
export interface S3LogDeliveryDescription {
  /**
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   */
  bucket?: string;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   */
  enabled?: boolean;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   */
  prefix?: string;
}

export namespace S3LogDeliveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3LogDeliveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
 */
export interface WorkerLogDeliveryDescription {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   */
  firehose?: FirehoseLogDeliveryDescription;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   */
  s3?: S3LogDeliveryDescription;
}

export namespace WorkerLogDeliveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerLogDeliveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the log delivery settings.</p>
 */
export interface LogDeliveryDescription {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
   */
  workerLogDelivery?: WorkerLogDeliveryDescription;
}

export namespace LogDeliveryDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogDeliveryDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a custom plugin.</p>
 */
export interface CustomPluginDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

export namespace CustomPluginDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the plugin.</p>
 */
export interface PluginDescription {
  /**
   * <p>Details about a custom plugin.</p>
   */
  customPlugin?: CustomPluginDescription;
}

export namespace PluginDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PluginDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the worker configuration.</p>
 */
export interface WorkerConfigurationDescription {
  /**
   * <p>The revision of the worker configuration.</p>
   */
  revision?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

export namespace WorkerConfigurationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerConfigurationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Summary of a connector.</p>
 */
export interface ConnectorSummary {
  /**
   * <p>The connector's compute capacity settings.</p>
   */
  capacity?: CapacityDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>The description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;

  /**
   * <p>The time that the connector was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The current version of the connector.</p>
   */
  currentVersion?: string;

  /**
   * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   */
  kafkaConnectVersion?: string;

  /**
   * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   */
  plugins?: PluginDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>The worker configurations that are in use with the connector.</p>
   */
  workerConfiguration?: WorkerConfigurationDescription;
}

export namespace ConnectorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectorSummary): any => ({
    ...obj,
  });
}

export enum CustomPluginState {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export enum CustomPluginContentType {
  JAR = "JAR",
  ZIP = "ZIP",
}

/**
 * <p>Details about a custom plugin file.</p>
 */
export interface CustomPluginFileDescription {
  /**
   * <p>The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.</p>
   */
  fileMd5?: string;

  /**
   * <p>The size in bytes of the custom plugin file. You can use it to validate the file.</p>
   */
  fileSize?: number;
}

export namespace CustomPluginFileDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginFileDescription): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the location of an object in Amazon S3.</p>
 */
export interface S3LocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   */
  bucketArn?: string;

  /**
   * <p>The file key for an object in an S3 bucket.</p>
   */
  fileKey?: string;

  /**
   * <p>The version of an object in an S3 bucket.</p>
   */
  objectVersion?: string;
}

export namespace S3LocationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3LocationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocationDescription {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.</p>
   */
  s3Location?: S3LocationDescription;
}

export namespace CustomPluginLocationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginLocationDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the revision of a custom plugin.</p>
 */
export interface CustomPluginRevisionSummary {
  /**
   * <p>The format of the plugin file.</p>
   */
  contentType?: CustomPluginContentType | string;

  /**
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of the custom plugin.</p>
   */
  description?: string;

  /**
   * <p>Details about the custom plugin file.</p>
   */
  fileDescription?: CustomPluginFileDescription;

  /**
   * <p>Information about the location of the custom plugin.</p>
   */
  location?: CustomPluginLocationDescription;

  /**
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

export namespace CustomPluginRevisionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginRevisionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of the custom plugin.</p>
 */
export interface CustomPluginSummary {
  /**
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * <p>A description of the custom plugin.</p>
   */
  description?: string;

  /**
   * <p>The latest revision of the custom plugin.</p>
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * <p>The name of the custom plugin.</p>
   */
  name?: string;
}

export namespace CustomPluginSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A plugin is an AWS resource that contains the code that defines a connector's logic.</p>
 */
export interface CustomPlugin {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn: string | undefined;

  /**
   * <p>The revision of the custom plugin.</p>
   */
  revision: number | undefined;
}

export namespace CustomPlugin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPlugin): any => ({
    ...obj,
  });
}

/**
 * <p>A plugin is an AWS resource that contains the code that defines your connector logic. </p>
 */
export interface Plugin {
  /**
   * <p>Details about a custom plugin.</p>
   */
  customPlugin: CustomPlugin | undefined;
}

export namespace Plugin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Plugin): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a worker configuration revision.</p>
 */
export interface WorkerConfigurationRevisionSummary {
  /**
   * <p>The time that a worker configuration revision was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of a worker configuration revision.</p>
   */
  description?: string;

  /**
   * <p>The revision of a worker configuration.</p>
   */
  revision?: number;
}

export namespace WorkerConfigurationRevisionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerConfigurationRevisionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of a worker configuration.</p>
 */
export interface WorkerConfigurationSummary {
  /**
   * <p>The time that a worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of a worker configuration.</p>
   */
  description?: string;

  /**
   * <p>The latest revision of a worker configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

export namespace WorkerConfigurationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerConfigurationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the VPC in which the connector resides.</p>
 */
export interface Vpc {
  /**
   * <p>The security groups for the connector.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The subnets for the connector.</p>
   */
  subnets: string[] | undefined;
}

export namespace Vpc {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vpc): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaCluster {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers: string | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   */
  vpc: Vpc | undefined;
}

export namespace ApacheKafkaCluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApacheKafkaCluster): any => ({
    ...obj,
  });
}

/**
 * <p>The scale-in policy for the connector.</p>
 */
export interface ScaleInPolicy {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

export namespace ScaleInPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleInPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>The scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicy {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

export namespace ScaleOutPolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleOutPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies how the connector scales.</p>
 */
export interface AutoScaling {
  /**
   * <p>The maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The sacle-in policy for the connector.</p>
   */
  scaleInPolicy?: ScaleInPolicy;

  /**
   * <p>The sacle-out policy for the connector.</p>
   */
  scaleOutPolicy?: ScaleOutPolicy;
}

export namespace AutoScaling {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScaling): any => ({
    ...obj,
  });
}

/**
 * <p>An update to the connector's scale-in policy.</p>
 */
export interface ScaleInPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

export namespace ScaleInPolicyUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleInPolicyUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>An update to the connector's scale-out policy.</p>
 */
export interface ScaleOutPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

export namespace ScaleOutPolicyUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScaleOutPolicyUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The updates to the auto scaling parameters for the connector.</p>
 */
export interface AutoScalingUpdate {
  /**
   * <p>The target maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The target number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The target minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The target sacle-in policy for the connector.</p>
   */
  scaleInPolicy: ScaleInPolicyUpdate | undefined;

  /**
   * <p>The target sacle-out policy for the connector.</p>
   */
  scaleOutPolicy: ScaleOutPolicyUpdate | undefined;
}

export namespace AutoScalingUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoScalingUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
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
 * <p>Details about a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacity {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

export namespace ProvisionedCapacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the capacity of the connector, whether it is auto scaled or provisioned.</p>
 */
export interface Capacity {
  /**
   * <p>Information about the auto scaling parameters for the connector.</p>
   */
  autoScaling?: AutoScaling;

  /**
   * <p>Details about a fixed capacity allocated to a connector.</p>
   */
  provisionedCapacity?: ProvisionedCapacity;
}

export namespace Capacity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Capacity): any => ({
    ...obj,
  });
}

/**
 * <p>An update to a connector's fixed capacity.</p>
 */
export interface ProvisionedCapacityUpdate {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

export namespace ProvisionedCapacityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedCapacityUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The target capacity for the connector. The capacity can be auto scaled or provisioned.</p>
 */
export interface CapacityUpdate {
  /**
   * <p>The target auto scaling setting.</p>
   */
  autoScaling?: AutoScalingUpdate;

  /**
   * <p>The target settings for provisioned capacity.</p>
   */
  provisionedCapacity?: ProvisionedCapacityUpdate;
}

export namespace CapacityUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CapacityUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
 */
export interface CloudWatchLogsLogDelivery {
  /**
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   */
  logGroup?: string;
}

export namespace CloudWatchLogsLogDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogsLogDelivery): any => ({
    ...obj,
  });
}

/**
 * <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your request with another name.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
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
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface KafkaCluster {
  /**
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   */
  apacheKafkaCluster: ApacheKafkaCluster | undefined;
}

export namespace KafkaCluster {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaCluster): any => ({
    ...obj,
  });
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthentication {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.</p>
   */
  authenticationType: KafkaClusterClientAuthenticationType | string | undefined;
}

export namespace KafkaClusterClientAuthentication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaClusterClientAuthentication): any => ({
    ...obj,
  });
}

/**
 * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterEncryptionInTransit {
  /**
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   */
  encryptionType: KafkaClusterEncryptionInTransitType | string | undefined;
}

export namespace KafkaClusterEncryptionInTransit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KafkaClusterEncryptionInTransit): any => ({
    ...obj,
  });
}

/**
 * <p>The settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 */
export interface FirehoseLogDelivery {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.</p>
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled: boolean | undefined;
}

export namespace FirehoseLogDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FirehoseLogDelivery): any => ({
    ...obj,
  });
}

/**
 * <p>Details about delivering logs to Amazon S3.</p>
 */
export interface S3LogDelivery {
  /**
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   */
  bucket?: string;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   */
  prefix?: string;
}

export namespace S3LogDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3LogDelivery): any => ({
    ...obj,
  });
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
 */
export interface WorkerLogDelivery {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogs?: CloudWatchLogsLogDelivery;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   */
  firehose?: FirehoseLogDelivery;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   */
  s3?: S3LogDelivery;
}

export namespace WorkerLogDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerLogDelivery): any => ({
    ...obj,
  });
}

/**
 * <p>Details about log delivery.</p>
 */
export interface LogDelivery {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

export namespace LogDelivery {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogDelivery): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of the workers, which are the processes that run the connector logic.</p>
 */
export interface WorkerConfiguration {
  /**
   * <p>The revision of the worker configuration.</p>
   */
  revision: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn: string | undefined;
}

export namespace WorkerConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerConfiguration): any => ({
    ...obj,
  });
}

export interface CreateConnectorRequest {
  /**
   * <p>Information about the capacity allocated to the connector. Exactly one of the two properties must be specified.</p>
   */
  capacity: Capacity | undefined;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration: { [key: string]: string } | undefined;

  /**
   * <p>A summary description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   */
  connectorName: string | undefined;

  /**
   * <p>Specifies which Apache Kafka cluster to connect to.</p>
   */
  kafkaCluster: KafkaCluster | undefined;

  /**
   * <p>Details of the client authentication used by the Apache Kafka cluster.</p>
   */
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication | undefined;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit | undefined;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   */
  kafkaConnectVersion: string | undefined;

  /**
   * <p>Details about log delivery.</p>
   */
  logDelivery?: LogDelivery;

  /**
   * <p>Specifies which plugins to use for the connector.</p>
   */
  plugins: Plugin[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.</p>
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies which worker configuration to use with the connector.</p>
   */
  workerConfiguration?: WorkerConfiguration;
}

export namespace CreateConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectorRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;
}

export namespace CreateConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConnectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  message?: string;
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
 * <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  message?: string;
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
 * <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
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
 * <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might resolve the issue.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
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
 * <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
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
 * <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message?: string;
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
 * <p>The location of an object in Amazon S3.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   */
  bucketArn: string | undefined;

  /**
   * <p>The file key for an object in an S3 bucket.</p>
   */
  fileKey: string | undefined;

  /**
   * <p>The version of an object in an S3 bucket.</p>
   */
  objectVersion?: string;
}

export namespace S3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocation {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.</p>
   */
  s3Location: S3Location | undefined;
}

export namespace CustomPluginLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPluginLocation): any => ({
    ...obj,
  });
}

export interface CreateCustomPluginRequest {
  /**
   * <p>The type of the plugin file.</p>
   */
  contentType: CustomPluginContentType | string | undefined;

  /**
   * <p>A summary description of the custom plugin.</p>
   */
  description?: string;

  /**
   * <p>Information about the location of a custom plugin.</p>
   */
  location: CustomPluginLocation | undefined;

  /**
   * <p>The name of the custom plugin.</p>
   */
  name: string | undefined;
}

export namespace CreateCustomPluginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomPluginRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomPluginResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * <p>The name of the custom plugin.</p>
   */
  name?: string;

  /**
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

export namespace CreateCustomPluginResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomPluginResponse): any => ({
    ...obj,
  });
}

export interface CreateWorkerConfigurationRequest {
  /**
   * <p>A summary description of the worker configuration.</p>
   */
  description?: string;

  /**
   * <p>The name of the worker configuration.</p>
   */
  name: string | undefined;

  /**
   * <p>Base64 encoded contents of connect-distributed.properties file.</p>
   */
  propertiesFileContent: string | undefined;
}

export namespace CreateWorkerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkerConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The latest revision of the worker configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

export namespace CreateWorkerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkerConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to delete.</p>
   */
  connectorArn: string | undefined;

  /**
   * <p>The current version of the connector that you want to delete.</p>
   */
  currentVersion?: string;
}

export namespace DeleteConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you requested to delete.</p>
   */
  connectorArn?: string;

  /**
   * <p>The state of the connector that you requested to delete.</p>
   */
  connectorState?: ConnectorState | string;
}

export namespace DeleteConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to describe.</p>
   */
  connectorArn: string | undefined;
}

export namespace DescribeConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectorResponse {
  /**
   * <p>Information about the capacity of the connector, whether it is auto scaled or provisioned.</p>
   */
  capacity?: CapacityDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration?: { [key: string]: string };

  /**
   * <p>A summary description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;

  /**
   * <p>The time the connector was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The current version of the connector.</p>
   */
  currentVersion?: string;

  /**
   * <p>The Apache Kafka cluster that the connector is connected to.</p>
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   */
  kafkaConnectVersion?: string;

  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   */
  plugins?: PluginDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>Specifies which worker configuration was used for the connector.</p>
   */
  workerConfiguration?: WorkerConfigurationDescription;
}

export namespace DescribeConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConnectorResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomPluginRequest {
  /**
   * <p>Returns information about a custom plugin.</p>
   */
  customPluginArn: string | undefined;
}

export namespace DescribeCustomPluginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomPluginRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomPluginResponse {
  /**
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * <p>The description of the custom plugin.</p>
   */
  description?: string;

  /**
   * <p>The latest successfully created revision of the custom plugin. If there are no successfully created revisions, this field will be absent.</p>
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * <p>The name of the custom plugin.</p>
   */
  name?: string;
}

export namespace DescribeCustomPluginResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomPluginResponse): any => ({
    ...obj,
  });
}

export interface DescribeWorkerConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to get information about.</p>
   */
  workerConfigurationArn: string | undefined;
}

export namespace DescribeWorkerConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkerConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The description of the worker configuration revision.</p>
 */
export interface WorkerConfigurationRevisionDescription {
  /**
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of the worker configuration revision.</p>
   */
  description?: string;

  /**
   * <p>Base64 encoded contents of the connect-distributed.properties file.</p>
   */
  propertiesFileContent?: string;

  /**
   * <p>The description of a revision of the worker configuration.</p>
   */
  revision?: number;
}

export namespace WorkerConfigurationRevisionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkerConfigurationRevisionDescription): any => ({
    ...obj,
  });
}

export interface DescribeWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The description of the worker configuration.</p>
   */
  description?: string;

  /**
   * <p>The latest revision of the custom configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionDescription;

  /**
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom configuration.</p>
   */
  workerConfigurationArn?: string;
}

export namespace DescribeWorkerConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkerConfigurationResponse): any => ({
    ...obj,
  });
}

export interface ListConnectorsRequest {
  /**
   * <p>The name prefix that you want to use to search for and list connectors.</p>
   */
  connectorNamePrefix?: string;

  /**
   * <p>The maximum number of connectors to list in one response.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   */
  nextToken?: string;
}

export namespace ListConnectorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectorsRequest): any => ({
    ...obj,
  });
}

export interface ListConnectorsResponse {
  /**
   * <p>An array of connector descriptions.</p>
   */
  connectors?: ConnectorSummary[];

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.</p>
   */
  nextToken?: string;
}

export namespace ListConnectorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConnectorsResponse): any => ({
    ...obj,
  });
}

export interface ListCustomPluginsRequest {
  /**
   * <p>The maximum number of custom plugins to list in one response.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   */
  nextToken?: string;
}

export namespace ListCustomPluginsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomPluginsRequest): any => ({
    ...obj,
  });
}

export interface ListCustomPluginsResponse {
  /**
   * <p>An array of custom plugin descriptions.</p>
   */
  customPlugins?: CustomPluginSummary[];

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   */
  nextToken?: string;
}

export namespace ListCustomPluginsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomPluginsResponse): any => ({
    ...obj,
  });
}

export interface ListWorkerConfigurationsRequest {
  /**
   * <p>The maximum number of worker configurations to list in one response.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   */
  nextToken?: string;
}

export namespace ListWorkerConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkerConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListWorkerConfigurationsResponse {
  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of worker configuration descriptions.</p>
   */
  workerConfigurations?: WorkerConfigurationSummary[];
}

export namespace ListWorkerConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkerConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectorRequest {
  /**
   * <p>The target capacity.</p>
   */
  capacity: CapacityUpdate | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to update.</p>
   */
  connectorArn: string | undefined;

  /**
   * <p>The current version of the connector that you want to update.</p>
   */
  currentVersion: string | undefined;
}

export namespace UpdateConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectorRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;
}

export namespace UpdateConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConnectorResponse): any => ({
    ...obj,
  });
}
