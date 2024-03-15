// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { KafkaConnectServiceException as __BaseException } from "./KafkaConnectServiceException";

/**
 * <p>The description of the scale-in policy for the connector.</p>
 * @public
 */
export interface ScaleInPolicyDescription {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage?: number;
}

/**
 * <p>The description of the scale-out policy for the connector.</p>
 * @public
 */
export interface ScaleOutPolicyDescription {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   * @public
   */
  cpuUtilizationPercentage?: number;
}

/**
 * <p>Information about the auto scaling parameters for the connector.</p>
 * @public
 */
export interface AutoScalingDescription {
  /**
   * <p>The maximum number of workers allocated to the connector.</p>
   * @public
   */
  maxWorkerCount?: number;

  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   * @public
   */
  mcuCount?: number;

  /**
   * <p>The minimum number of workers allocated to the connector.</p>
   * @public
   */
  minWorkerCount?: number;

  /**
   * <p>The sacle-in policy for the connector.</p>
   * @public
   */
  scaleInPolicy?: ScaleInPolicyDescription;

  /**
   * <p>The sacle-out policy for the connector.&gt;</p>
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicyDescription;
}

/**
 * <p>The description of a connector's provisioned capacity.</p>
 * @public
 */
export interface ProvisionedCapacityDescription {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   * @public
   */
  mcuCount?: number;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   * @public
   */
  workerCount?: number;
}

/**
 * <p>A description of the connector's capacity.</p>
 * @public
 */
export interface CapacityDescription {
  /**
   * <p>Describes the connector's auto scaling capacity.</p>
   * @public
   */
  autoScaling?: AutoScalingDescription;

  /**
   * <p>Describes a connector's provisioned capacity.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityDescription;
}

/**
 * @public
 * @enum
 */
export const ConnectorState = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ConnectorState = (typeof ConnectorState)[keyof typeof ConnectorState];

/**
 * <p>The description of the VPC in which the connector resides.</p>
 * @public
 */
export interface VpcDescription {
  /**
   * <p>The security groups for the connector.</p>
   * @public
   */
  securityGroups?: string[];

  /**
   * <p>The subnets for the connector.</p>
   * @public
   */
  subnets?: string[];
}

/**
 * <p>The description of the Apache Kafka cluster to which the connector is connected.</p>
 * @public
 */
export interface ApacheKafkaClusterDescription {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   * @public
   */
  bootstrapServers?: string;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   * @public
   */
  vpc?: VpcDescription;
}

/**
 * <p>Details of how to connect to the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterDescription {
  /**
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   * @public
   */
  apacheKafkaCluster?: ApacheKafkaClusterDescription;
}

/**
 * @public
 * @enum
 */
export const KafkaClusterClientAuthenticationType = {
  IAM: "IAM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type KafkaClusterClientAuthenticationType =
  (typeof KafkaClusterClientAuthenticationType)[keyof typeof KafkaClusterClientAuthenticationType];

/**
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   * @public
   */
  authenticationType?: KafkaClusterClientAuthenticationType;
}

/**
 * @public
 * @enum
 */
export const KafkaClusterEncryptionInTransitType = {
  PLAINTEXT: "PLAINTEXT",
  TLS: "TLS",
} as const;

/**
 * @public
 */
export type KafkaClusterEncryptionInTransitType =
  (typeof KafkaClusterEncryptionInTransitType)[keyof typeof KafkaClusterEncryptionInTransitType];

/**
 * <p>The description of the encryption in transit to the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterEncryptionInTransitDescription {
  /**
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  encryptionType?: KafkaClusterEncryptionInTransitType;
}

/**
 * <p>A description of the log delivery settings.</p>
 * @public
 */
export interface CloudWatchLogsLogDeliveryDescription {
  /**
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   * @public
   */
  logGroup?: string;
}

/**
 * <p>A description of the settings for delivering logs to Amazon Kinesis Data
 *          Firehose.</p>
 * @public
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   * @public
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * <p>The description of the details about delivering logs to Amazon S3.</p>
 * @public
 */
export interface S3LogDeliveryDescription {
  /**
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   * @public
   */
  bucket?: string;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
 * @public
 */
export interface WorkerLogDeliveryDescription {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  firehose?: FirehoseLogDeliveryDescription;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   * @public
   */
  s3?: S3LogDeliveryDescription;
}

/**
 * <p>The description of the log delivery settings.</p>
 * @public
 */
export interface LogDeliveryDescription {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   * @public
   */
  workerLogDelivery?: WorkerLogDeliveryDescription;
}

/**
 * <p>Details about a custom plugin.</p>
 * @public
 */
export interface CustomPluginDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn?: string;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number;
}

/**
 * <p>The description of the plugin.</p>
 * @public
 */
export interface PluginDescription {
  /**
   * <p>Details about a custom plugin.</p>
   * @public
   */
  customPlugin?: CustomPluginDescription;
}

/**
 * <p>The description of the worker configuration.</p>
 * @public
 */
export interface WorkerConfigurationDescription {
  /**
   * <p>The revision of the worker configuration.</p>
   * @public
   */
  revision?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string;
}

/**
 * <p>Summary of a connector.</p>
 * @public
 */
export interface ConnectorSummary {
  /**
   * <p>The connector's compute capacity settings.</p>
   * @public
   */
  capacity?: CapacityDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string;

  /**
   * <p>The description of the connector.</p>
   * @public
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState;

  /**
   * <p>The time that the connector was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The current version of the connector.</p>
   * @public
   */
  currentVersion?: string;

  /**
   * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
   * @public
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion?: string;

  /**
   * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   * @public
   */
  plugins?: PluginDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   * @public
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>The worker configurations that are in use with the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription;
}

/**
 * @public
 * @enum
 */
export const CustomPluginState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type CustomPluginState = (typeof CustomPluginState)[keyof typeof CustomPluginState];

/**
 * @public
 * @enum
 */
export const CustomPluginContentType = {
  JAR: "JAR",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type CustomPluginContentType = (typeof CustomPluginContentType)[keyof typeof CustomPluginContentType];

/**
 * <p>Details about a custom plugin file.</p>
 * @public
 */
export interface CustomPluginFileDescription {
  /**
   * <p>The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the
   *          file.</p>
   * @public
   */
  fileMd5?: string;

  /**
   * <p>The size in bytes of the custom plugin file. You can use it to validate the file.</p>
   * @public
   */
  fileSize?: number;
}

/**
 * <p>The description of the location of an object in Amazon S3.</p>
 * @public
 */
export interface S3LocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   * @public
   */
  bucketArn?: string;

  /**
   * <p>The file key for an object in an S3 bucket.</p>
   * @public
   */
  fileKey?: string;

  /**
   * <p>The version of an object in an S3 bucket.</p>
   * @public
   */
  objectVersion?: string;
}

/**
 * <p>Information about the location of a custom plugin.</p>
 * @public
 */
export interface CustomPluginLocationDescription {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   * @public
   */
  s3Location?: S3LocationDescription;
}

/**
 * <p>Details about the revision of a custom plugin.</p>
 * @public
 */
export interface CustomPluginRevisionSummary {
  /**
   * <p>The format of the plugin file.</p>
   * @public
   */
  contentType?: CustomPluginContentType;

  /**
   * <p>The time that the custom plugin was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The description of the custom plugin.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Details about the custom plugin file.</p>
   * @public
   */
  fileDescription?: CustomPluginFileDescription;

  /**
   * <p>Information about the location of the custom plugin.</p>
   * @public
   */
  location?: CustomPluginLocationDescription;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number;
}

/**
 * <p>A summary of the custom plugin.</p>
 * @public
 */
export interface CustomPluginSummary {
  /**
   * <p>The time that the custom plugin was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState;

  /**
   * <p>A description of the custom plugin.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The latest revision of the custom plugin.</p>
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string;
}

/**
 * <p>A plugin is an Amazon Web Services resource that contains the code that defines a connector's logic.</p>
 * @public
 */
export interface CustomPlugin {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn: string | undefined;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision: number | undefined;
}

/**
 * <p>A plugin is an Amazon Web Services resource that contains the code that defines your connector logic. </p>
 * @public
 */
export interface Plugin {
  /**
   * <p>Details about a custom plugin.</p>
   * @public
   */
  customPlugin: CustomPlugin | undefined;
}

/**
 * <p>The summary of a worker configuration revision.</p>
 * @public
 */
export interface WorkerConfigurationRevisionSummary {
  /**
   * <p>The time that a worker configuration revision was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The description of a worker configuration revision.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The revision of a worker configuration.</p>
   * @public
   */
  revision?: number;
}

/**
 * @public
 * @enum
 */
export const WorkerConfigurationState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type WorkerConfigurationState = (typeof WorkerConfigurationState)[keyof typeof WorkerConfigurationState];

/**
 * <p>The summary of a worker configuration.</p>
 * @public
 */
export interface WorkerConfigurationSummary {
  /**
   * <p>The time that a worker configuration was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The description of a worker configuration.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The latest revision of a worker configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState;
}

/**
 * <p>Information about the VPC in which the connector resides.</p>
 * @public
 */
export interface Vpc {
  /**
   * <p>The security groups for the connector.</p>
   * @public
   */
  securityGroups?: string[];

  /**
   * <p>The subnets for the connector.</p>
   * @public
   */
  subnets: string[] | undefined;
}

/**
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 * @public
 */
export interface ApacheKafkaCluster {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   * @public
   */
  bootstrapServers: string | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   * @public
   */
  vpc: Vpc | undefined;
}

/**
 * <p>The scale-in policy for the connector.</p>
 * @public
 */
export interface ScaleInPolicy {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>The scale-out policy for the connector.</p>
 * @public
 */
export interface ScaleOutPolicy {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>Specifies how the connector scales.</p>
 * @public
 */
export interface AutoScaling {
  /**
   * <p>The maximum number of workers allocated to the connector.</p>
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   * @public
   */
  mcuCount: number | undefined;

  /**
   * <p>The minimum number of workers allocated to the connector.</p>
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The sacle-in policy for the connector.</p>
   * @public
   */
  scaleInPolicy?: ScaleInPolicy;

  /**
   * <p>The sacle-out policy for the connector.</p>
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicy;
}

/**
 * <p>An update to the connector's scale-in policy.</p>
 * @public
 */
export interface ScaleInPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale in to
   *          be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>An update to the connector's scale-out policy.</p>
 * @public
 */
export interface ScaleOutPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale out to
   *          be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>The updates to the auto scaling parameters for the connector.</p>
 * @public
 */
export interface AutoScalingUpdate {
  /**
   * <p>The target maximum number of workers allocated to the connector.</p>
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * <p>The target number of microcontroller units (MCUs) allocated to each connector worker.
   *          The valid values are 1,2,4,8.</p>
   * @public
   */
  mcuCount: number | undefined;

  /**
   * <p>The target minimum number of workers allocated to the connector.</p>
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * <p>The target sacle-in policy for the connector.</p>
   * @public
   */
  scaleInPolicy: ScaleInPolicyUpdate | undefined;

  /**
   * <p>The target sacle-out policy for the connector.</p>
   * @public
   */
  scaleOutPolicy: ScaleOutPolicyUpdate | undefined;
}

/**
 * <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Details about a connector's provisioned capacity.</p>
 * @public
 */
export interface ProvisionedCapacity {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   * @public
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   * @public
   */
  workerCount: number | undefined;
}

/**
 * <p>Information about the capacity of the connector, whether it is auto scaled or
 *          provisioned.</p>
 * @public
 */
export interface Capacity {
  /**
   * <p>Information about the auto scaling parameters for the connector.</p>
   * @public
   */
  autoScaling?: AutoScaling;

  /**
   * <p>Details about a fixed capacity allocated to a connector.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacity;
}

/**
 * <p>An update to a connector's fixed capacity.</p>
 * @public
 */
export interface ProvisionedCapacityUpdate {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   * @public
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   * @public
   */
  workerCount: number | undefined;
}

/**
 * <p>The target capacity for the connector. The capacity can be auto scaled or
 *          provisioned.</p>
 * @public
 */
export interface CapacityUpdate {
  /**
   * <p>The target auto scaling setting.</p>
   * @public
   */
  autoScaling?: AutoScalingUpdate;

  /**
   * <p>The target settings for provisioned capacity.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityUpdate;
}

/**
 * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchLogsLogDelivery {
  /**
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   * @public
   */
  logGroup?: string;
}

/**
 * <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your
 *          request with another name.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 * @public
 */
export interface KafkaCluster {
  /**
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   * @public
   */
  apacheKafkaCluster: ApacheKafkaCluster | undefined;
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterClientAuthentication {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   * @public
   */
  authenticationType: KafkaClusterClientAuthenticationType | undefined;
}

/**
 * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterEncryptionInTransit {
  /**
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  encryptionType: KafkaClusterEncryptionInTransitType | undefined;
}

/**
 * <p>The settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 * @public
 */
export interface FirehoseLogDelivery {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   * @public
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Details about delivering logs to Amazon S3.</p>
 * @public
 */
export interface S3LogDelivery {
  /**
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   * @public
   */
  bucket?: string;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
 * @public
 */
export interface WorkerLogDelivery {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDelivery;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  firehose?: FirehoseLogDelivery;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   * @public
   */
  s3?: S3LogDelivery;
}

/**
 * <p>Details about log delivery.</p>
 * @public
 */
export interface LogDelivery {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   * @public
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

/**
 * <p>The configuration of the workers, which are the processes that run the connector
 *          logic.</p>
 * @public
 */
export interface WorkerConfiguration {
  /**
   * <p>The revision of the worker configuration.</p>
   * @public
   */
  revision: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * <p>Information about the capacity allocated to the connector. Exactly one of the two
   *          properties must be specified.</p>
   * @public
   */
  capacity: Capacity | undefined;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   * @public
   */
  connectorConfiguration: Record<string, string> | undefined;

  /**
   * <p>A summary description of the connector.</p>
   * @public
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName: string | undefined;

  /**
   * <p>Specifies which Apache Kafka cluster to connect to.</p>
   * @public
   */
  kafkaCluster: KafkaCluster | undefined;

  /**
   * <p>Details of the client authentication used by the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication | undefined;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit | undefined;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion: string | undefined;

  /**
   * <p>Details about log delivery.</p>
   * @public
   */
  logDelivery?: LogDelivery;

  /**
   * <important>
   *             <p>Amazon MSK Connect does not currently support specifying multiple plugins as a list. To use more than one plugin for your connector, you can create a single custom plugin using a ZIP file that bundles multiple plugins together.</p>
   *          </important>
   *          <p>Specifies which plugin to use for the connector. You must specify a single-element list containing one <code>customPlugin</code> object.</p>
   * @public
   */
  plugins: Plugin[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access the
   *          Amazon Web Services resources that it needs. The types of resources depends on the logic of
   *          the connector. For example, a connector that has Amazon S3 as a destination must have
   *          permissions that allow it to write to the S3 destination bucket.</p>
   * @public
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies which worker configuration to use with the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfiguration;

  /**
   * <p>The tags you want to attach to the connector.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the connector.</p>
   * @public
   */
  connectorArn?: string;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState;
}

/**
 * <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The location of an object in Amazon S3.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>The file key for an object in an S3 bucket.</p>
   * @public
   */
  fileKey: string | undefined;

  /**
   * <p>The version of an object in an S3 bucket.</p>
   * @public
   */
  objectVersion?: string;
}

/**
 * <p>Information about the location of a custom plugin.</p>
 * @public
 */
export interface CustomPluginLocation {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginRequest {
  /**
   * <p>The type of the plugin file.</p>
   * @public
   */
  contentType: CustomPluginContentType | undefined;

  /**
   * <p>A summary description of the custom plugin.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Information about the location of a custom plugin.</p>
   * @public
   */
  location: CustomPluginLocation | undefined;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The tags you want to attach to the custom plugin.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCustomPluginResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the custom plugin.</p>
   * @public
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationRequest {
  /**
   * <p>A summary description of the worker configuration.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Base64 encoded contents of connect-distributed.properties file.</p>
   * @public
   */
  propertiesFileContent: string | undefined;

  /**
   * <p>The tags you want to attach to the worker configuration.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The latest revision of the worker configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to delete.</p>
   * @public
   */
  connectorArn: string | undefined;

  /**
   * <p>The current version of the connector that you want to delete.</p>
   * @public
   */
  currentVersion?: string;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you requested to delete.</p>
   * @public
   */
  connectorArn?: string;

  /**
   * <p>The state of the connector that you requested to delete.</p>
   * @public
   */
  connectorState?: ConnectorState;
}

/**
 * @public
 */
export interface DeleteCustomPluginRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you want to delete.</p>
   * @public
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPluginResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you requested to delete.</p>
   * @public
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState;
}

/**
 * @public
 */
export interface DeleteWorkerConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to delete.</p>
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you requested to delete.</p>
   * @public
   */
  workerConfigurationArn?: string;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState;
}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to describe.</p>
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * <p>Details about the state of a resource.</p>
 * @public
 */
export interface StateDescription {
  /**
   * <p>A code that describes the state of a resource.</p>
   * @public
   */
  code?: string;

  /**
   * <p>A message that describes the state of a resource.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * <p>Information about the capacity of the connector, whether it is auto scaled or
   *          provisioned.</p>
   * @public
   */
  capacity?: CapacityDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   * @public
   */
  connectorConfiguration?: Record<string, string>;

  /**
   * <p>A summary description of the connector.</p>
   * @public
   */
  connectorDescription?: string;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState;

  /**
   * <p>The time the connector was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The current version of the connector.</p>
   * @public
   */
  currentVersion?: string;

  /**
   * <p>The Apache Kafka cluster that the connector is connected to.</p>
   * @public
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion?: string;

  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   * @public
   */
  plugins?: PluginDescription[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   * @public
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>Specifies which worker configuration was used for the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription;

  /**
   * <p>Details about the state of a connector.</p>
   * @public
   */
  stateDescription?: StateDescription;
}

/**
 * @public
 */
export interface DescribeCustomPluginRequest {
  /**
   * <p>Returns information about a custom plugin.</p>
   * @public
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPluginResponse {
  /**
   * <p>The time that the custom plugin was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState;

  /**
   * <p>The description of the custom plugin.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The latest successfully created revision of the custom plugin. If there are no
   *          successfully created revisions, this field will be absent.</p>
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Details about the state of a custom plugin.</p>
   * @public
   */
  stateDescription?: StateDescription;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to get
   *          information about.</p>
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * <p>The description of the worker configuration revision.</p>
 * @public
 */
export interface WorkerConfigurationRevisionDescription {
  /**
   * <p>The time that the worker configuration was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The description of the worker configuration revision.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Base64 encoded contents of the connect-distributed.properties file.</p>
   * @public
   */
  propertiesFileContent?: string;

  /**
   * <p>The description of a revision of the worker configuration.</p>
   * @public
   */
  revision?: number;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>The description of the worker configuration.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The latest revision of the custom configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionDescription;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom configuration.</p>
   * @public
   */
  workerConfigurationArn?: string;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>The name prefix that you want to use to search for and list connectors.</p>
   * @public
   */
  connectorNamePrefix?: string;

  /**
   * <p>The maximum number of connectors to list in one response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where the previous
   *          operation left off.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>An array of connector descriptions.</p>
   * @public
   */
  connectors?: ConnectorSummary[];

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where it left
   *          off.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCustomPluginsRequest {
  /**
   * <p>The maximum number of custom plugins to list in one response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Lists custom plugin names that start with the specified text string.</p>
   * @public
   */
  namePrefix?: string;
}

/**
 * @public
 */
export interface ListCustomPluginsResponse {
  /**
   * <p>An array of custom plugin descriptions.</p>
   * @public
   */
  customPlugins?: CustomPluginSummary[];

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list all attached tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Lists the tags attached to the specified resource in the corresponding request.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsRequest {
  /**
   * <p>The maximum number of worker configurations to list in one response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Lists worker configuration names that start with the specified text string.</p>
   * @public
   */
  namePrefix?: string;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsResponse {
  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array of worker configuration descriptions.</p>
   * @public
   */
  workerConfigurations?: WorkerConfigurationSummary[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which you want to attach tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags that you want to attach to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you want to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags that you want to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * <p>The target capacity.</p>
   * @public
   */
  capacity: CapacityUpdate | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to update.</p>
   * @public
   */
  connectorArn: string | undefined;

  /**
   * <p>The current version of the connector that you want to update.</p>
   * @public
   */
  currentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState;
}

/**
 * @internal
 */
export const CreateConnectorRequestFilterSensitiveLog = (obj: CreateConnectorRequest): any => ({
  ...obj,
  ...(obj.connectorConfiguration && { connectorConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateWorkerConfigurationRequestFilterSensitiveLog = (obj: CreateWorkerConfigurationRequest): any => ({
  ...obj,
  ...(obj.propertiesFileContent && { propertiesFileContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeConnectorResponseFilterSensitiveLog = (obj: DescribeConnectorResponse): any => ({
  ...obj,
  ...(obj.connectorConfiguration && { connectorConfiguration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WorkerConfigurationRevisionDescriptionFilterSensitiveLog = (
  obj: WorkerConfigurationRevisionDescription
): any => ({
  ...obj,
  ...(obj.propertiesFileContent && { propertiesFileContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeWorkerConfigurationResponseFilterSensitiveLog = (
  obj: DescribeWorkerConfigurationResponse
): any => ({
  ...obj,
  ...(obj.latestRevision && {
    latestRevision: WorkerConfigurationRevisionDescriptionFilterSensitiveLog(obj.latestRevision),
  }),
});
