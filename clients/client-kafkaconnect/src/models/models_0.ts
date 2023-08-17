// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { KafkaConnectServiceException as __BaseException } from "./KafkaConnectServiceException";

/**
 * @public
 * <p>The description of the scale-in policy for the connector.</p>
 */
export interface ScaleInPolicyDescription {
  /**
   * @public
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   */
  cpuUtilizationPercentage?: number;
}

/**
 * @public
 * <p>The description of the scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicyDescription {
  /**
   * @public
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   */
  cpuUtilizationPercentage?: number;
}

/**
 * @public
 * <p>Information about the auto scaling parameters for the connector.</p>
 */
export interface AutoScalingDescription {
  /**
   * @public
   * <p>The maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount?: number;

  /**
   * @public
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount?: number;

  /**
   * @public
   * <p>The minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount?: number;

  /**
   * @public
   * <p>The sacle-in policy for the connector.</p>
   */
  scaleInPolicy?: ScaleInPolicyDescription;

  /**
   * @public
   * <p>The sacle-out policy for the connector.&gt;</p>
   */
  scaleOutPolicy?: ScaleOutPolicyDescription;
}

/**
 * @public
 * <p>The description of a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacityDescription {
  /**
   * @public
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount?: number;

  /**
   * @public
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount?: number;
}

/**
 * @public
 * <p>A description of the connector's capacity.</p>
 */
export interface CapacityDescription {
  /**
   * @public
   * <p>Describes the connector's auto scaling capacity.</p>
   */
  autoScaling?: AutoScalingDescription;

  /**
   * @public
   * <p>Describes a connector's provisioned capacity.</p>
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
 * @public
 * <p>The description of the VPC in which the connector resides.</p>
 */
export interface VpcDescription {
  /**
   * @public
   * <p>The security groups for the connector.</p>
   */
  securityGroups?: string[];

  /**
   * @public
   * <p>The subnets for the connector.</p>
   */
  subnets?: string[];
}

/**
 * @public
 * <p>The description of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaClusterDescription {
  /**
   * @public
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers?: string;

  /**
   * @public
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   */
  vpc?: VpcDescription;
}

/**
 * @public
 * <p>Details of how to connect to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterDescription {
  /**
   * @public
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
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
 * @public
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * @public
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   */
  authenticationType?: KafkaClusterClientAuthenticationType | string;
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
 * @public
 * <p>The description of the encryption in transit to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterEncryptionInTransitDescription {
  /**
   * @public
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   */
  encryptionType?: KafkaClusterEncryptionInTransitType | string;
}

/**
 * @public
 * <p>A description of the log delivery settings.</p>
 */
export interface CloudWatchLogsLogDeliveryDescription {
  /**
   * @public
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   */
  logGroup?: string;
}

/**
 * @public
 * <p>A description of the settings for delivering logs to Amazon Kinesis Data
 *          Firehose.</p>
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * @public
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   */
  deliveryStream?: string;

  /**
   * @public
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled?: boolean;
}

/**
 * @public
 * <p>The description of the details about delivering logs to Amazon S3.</p>
 */
export interface S3LogDeliveryDescription {
  /**
   * @public
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The S3 prefix that is the destination for log delivery.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
 */
export interface WorkerLogDeliveryDescription {
  /**
   * @public
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription;

  /**
   * @public
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   */
  firehose?: FirehoseLogDeliveryDescription;

  /**
   * @public
   * <p>Details about delivering logs to Amazon S3.</p>
   */
  s3?: S3LogDeliveryDescription;
}

/**
 * @public
 * <p>The description of the log delivery settings.</p>
 */
export interface LogDeliveryDescription {
  /**
   * @public
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   */
  workerLogDelivery?: WorkerLogDeliveryDescription;
}

/**
 * @public
 * <p>Details about a custom plugin.</p>
 */
export interface CustomPluginDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * @public
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

/**
 * @public
 * <p>The description of the plugin.</p>
 */
export interface PluginDescription {
  /**
   * @public
   * <p>Details about a custom plugin.</p>
   */
  customPlugin?: CustomPluginDescription;
}

/**
 * @public
 * <p>The description of the worker configuration.</p>
 */
export interface WorkerConfigurationDescription {
  /**
   * @public
   * <p>The revision of the worker configuration.</p>
   */
  revision?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

/**
 * @public
 * <p>Summary of a connector.</p>
 */
export interface ConnectorSummary {
  /**
   * @public
   * <p>The connector's compute capacity settings.</p>
   */
  capacity?: CapacityDescription;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>The description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * @public
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * @public
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;

  /**
   * @public
   * <p>The time that the connector was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The current version of the connector.</p>
   */
  currentVersion?: string;

  /**
   * @public
   * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * @public
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * @public
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * @public
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   */
  kafkaConnectVersion?: string;

  /**
   * @public
   * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * @public
   * <p>Specifies which plugins were used for this connector.</p>
   */
  plugins?: PluginDescription[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * @public
   * <p>The worker configurations that are in use with the connector.</p>
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
 * @public
 * <p>Details about a custom plugin file.</p>
 */
export interface CustomPluginFileDescription {
  /**
   * @public
   * <p>The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the
   *          file.</p>
   */
  fileMd5?: string;

  /**
   * @public
   * <p>The size in bytes of the custom plugin file. You can use it to validate the file.</p>
   */
  fileSize?: number;
}

/**
 * @public
 * <p>The description of the location of an object in Amazon S3.</p>
 */
export interface S3LocationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   */
  bucketArn?: string;

  /**
   * @public
   * <p>The file key for an object in an S3 bucket.</p>
   */
  fileKey?: string;

  /**
   * @public
   * <p>The version of an object in an S3 bucket.</p>
   */
  objectVersion?: string;
}

/**
 * @public
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocationDescription {
  /**
   * @public
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   */
  s3Location?: S3LocationDescription;
}

/**
 * @public
 * <p>Details about the revision of a custom plugin.</p>
 */
export interface CustomPluginRevisionSummary {
  /**
   * @public
   * <p>The format of the plugin file.</p>
   */
  contentType?: CustomPluginContentType | string;

  /**
   * @public
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of the custom plugin.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Details about the custom plugin file.</p>
   */
  fileDescription?: CustomPluginFileDescription;

  /**
   * @public
   * <p>Information about the location of the custom plugin.</p>
   */
  location?: CustomPluginLocationDescription;

  /**
   * @public
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

/**
 * @public
 * <p>A summary of the custom plugin.</p>
 */
export interface CustomPluginSummary {
  /**
   * @public
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * @public
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * @public
   * <p>A description of the custom plugin.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The latest revision of the custom plugin.</p>
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * @public
   * <p>The name of the custom plugin.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>A plugin is an AWS resource that contains the code that defines a connector's
 *          logic.</p>
 */
export interface CustomPlugin {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn: string | undefined;

  /**
   * @public
   * <p>The revision of the custom plugin.</p>
   */
  revision: number | undefined;
}

/**
 * @public
 * <p>A plugin is an AWS resource that contains the code that defines your connector logic.
 *       </p>
 */
export interface Plugin {
  /**
   * @public
   * <p>Details about a custom plugin.</p>
   */
  customPlugin: CustomPlugin | undefined;
}

/**
 * @public
 * <p>The summary of a worker configuration revision.</p>
 */
export interface WorkerConfigurationRevisionSummary {
  /**
   * @public
   * <p>The time that a worker configuration revision was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of a worker configuration revision.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The revision of a worker configuration.</p>
   */
  revision?: number;
}

/**
 * @public
 * <p>The summary of a worker configuration.</p>
 */
export interface WorkerConfigurationSummary {
  /**
   * @public
   * <p>The time that a worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of a worker configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The latest revision of a worker configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * @public
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

/**
 * @public
 * <p>Information about the VPC in which the connector resides.</p>
 */
export interface Vpc {
  /**
   * @public
   * <p>The security groups for the connector.</p>
   */
  securityGroups?: string[];

  /**
   * @public
   * <p>The subnets for the connector.</p>
   */
  subnets: string[] | undefined;
}

/**
 * @public
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaCluster {
  /**
   * @public
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers: string | undefined;

  /**
   * @public
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   */
  vpc: Vpc | undefined;
}

/**
 * @public
 * <p>The scale-in policy for the connector.</p>
 */
export interface ScaleInPolicy {
  /**
   * @public
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * @public
 * <p>The scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicy {
  /**
   * @public
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * @public
 * <p>Specifies how the connector scales.</p>
 */
export interface AutoScaling {
  /**
   * @public
   * <p>The maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount: number | undefined;

  /**
   * @public
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * @public
   * <p>The minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount: number | undefined;

  /**
   * @public
   * <p>The sacle-in policy for the connector.</p>
   */
  scaleInPolicy?: ScaleInPolicy;

  /**
   * @public
   * <p>The sacle-out policy for the connector.</p>
   */
  scaleOutPolicy?: ScaleOutPolicy;
}

/**
 * @public
 * <p>An update to the connector's scale-in policy.</p>
 */
export interface ScaleInPolicyUpdate {
  /**
   * @public
   * <p>The target CPU utilization percentage threshold at which you want connector scale in to
   *          be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * @public
 * <p>An update to the connector's scale-out policy.</p>
 */
export interface ScaleOutPolicyUpdate {
  /**
   * @public
   * <p>The target CPU utilization percentage threshold at which you want connector scale out to
   *          be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * @public
 * <p>The updates to the auto scaling parameters for the connector.</p>
 */
export interface AutoScalingUpdate {
  /**
   * @public
   * <p>The target maximum number of workers allocated to the connector.</p>
   */
  maxWorkerCount: number | undefined;

  /**
   * @public
   * <p>The target number of microcontroller units (MCUs) allocated to each connector worker.
   *          The valid values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * @public
   * <p>The target minimum number of workers allocated to the connector.</p>
   */
  minWorkerCount: number | undefined;

  /**
   * @public
   * <p>The target sacle-in policy for the connector.</p>
   */
  scaleInPolicy: ScaleInPolicyUpdate | undefined;

  /**
   * @public
   * <p>The target sacle-out policy for the connector.</p>
   */
  scaleOutPolicy: ScaleOutPolicyUpdate | undefined;
}

/**
 * @public
 * <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
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
 * @public
 * <p>Details about a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacity {
  /**
   * @public
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * @public
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

/**
 * @public
 * <p>Information about the capacity of the connector, whether it is auto scaled or
 *          provisioned.</p>
 */
export interface Capacity {
  /**
   * @public
   * <p>Information about the auto scaling parameters for the connector.</p>
   */
  autoScaling?: AutoScaling;

  /**
   * @public
   * <p>Details about a fixed capacity allocated to a connector.</p>
   */
  provisionedCapacity?: ProvisionedCapacity;
}

/**
 * @public
 * <p>An update to a connector's fixed capacity.</p>
 */
export interface ProvisionedCapacityUpdate {
  /**
   * @public
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * @public
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

/**
 * @public
 * <p>The target capacity for the connector. The capacity can be auto scaled or
 *          provisioned.</p>
 */
export interface CapacityUpdate {
  /**
   * @public
   * <p>The target auto scaling setting.</p>
   */
  autoScaling?: AutoScalingUpdate;

  /**
   * @public
   * <p>The target settings for provisioned capacity.</p>
   */
  provisionedCapacity?: ProvisionedCapacityUpdate;
}

/**
 * @public
 * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
 */
export interface CloudWatchLogsLogDelivery {
  /**
   * @public
   * <p>Whether log delivery to Amazon CloudWatch Logs is enabled.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   */
  logGroup?: string;
}

/**
 * @public
 * <p>HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your
 *          request with another name.</p>
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
 * @public
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface KafkaCluster {
  /**
   * @public
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   */
  apacheKafkaCluster: ApacheKafkaCluster | undefined;
}

/**
 * @public
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthentication {
  /**
   * @public
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   */
  authenticationType: KafkaClusterClientAuthenticationType | string | undefined;
}

/**
 * @public
 * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
 */
export interface KafkaClusterEncryptionInTransit {
  /**
   * @public
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   */
  encryptionType: KafkaClusterEncryptionInTransitType | string | undefined;
}

/**
 * @public
 * <p>The settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 */
export interface FirehoseLogDelivery {
  /**
   * @public
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   */
  deliveryStream?: string;

  /**
   * @public
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled: boolean | undefined;
}

/**
 * @public
 * <p>Details about delivering logs to Amazon S3.</p>
 */
export interface S3LogDelivery {
  /**
   * @public
   * <p>The name of the S3 bucket that is the destination for log delivery.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   */
  enabled: boolean | undefined;

  /**
   * @public
   * <p>The S3 prefix that is the destination for log delivery.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
 */
export interface WorkerLogDelivery {
  /**
   * @public
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  cloudWatchLogs?: CloudWatchLogsLogDelivery;

  /**
   * @public
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   */
  firehose?: FirehoseLogDelivery;

  /**
   * @public
   * <p>Details about delivering logs to Amazon S3.</p>
   */
  s3?: S3LogDelivery;
}

/**
 * @public
 * <p>Details about log delivery.</p>
 */
export interface LogDelivery {
  /**
   * @public
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

/**
 * @public
 * <p>The configuration of the workers, which are the processes that run the connector
 *          logic.</p>
 */
export interface WorkerConfiguration {
  /**
   * @public
   * <p>The revision of the worker configuration.</p>
   */
  revision: number | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * @public
   * <p>Information about the capacity allocated to the connector. Exactly one of the two
   *          properties must be specified.</p>
   */
  capacity: Capacity | undefined;

  /**
   * @public
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration: Record<string, string> | undefined;

  /**
   * @public
   * <p>A summary description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * @public
   * <p>The name of the connector.</p>
   */
  connectorName: string | undefined;

  /**
   * @public
   * <p>Specifies which Apache Kafka cluster to connect to.</p>
   */
  kafkaCluster: KafkaCluster | undefined;

  /**
   * @public
   * <p>Details of the client authentication used by the Apache Kafka cluster.</p>
   */
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication | undefined;

  /**
   * @public
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit | undefined;

  /**
   * @public
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   */
  kafkaConnectVersion: string | undefined;

  /**
   * @public
   * <p>Details about log delivery.</p>
   */
  logDelivery?: LogDelivery;

  /**
   * @public
   * <p>Specifies which plugins to use for the connector.</p>
   */
  plugins: Plugin[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access the
   *          Amazon Web Services resources that it needs. The types of resources depends on the logic of
   *          the connector. For example, a connector that has Amazon S3 as a destination must have
   *          permissions that allow it to write to the S3 destination bucket.</p>
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * @public
   * <p>Specifies which worker configuration to use with the connector.</p>
   */
  workerConfiguration?: WorkerConfiguration;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the connector.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * @public
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;
}

/**
 * @public
 * <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
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
 * @public
 * <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
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
 * @public
 * <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
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
 * @public
 * <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
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
 * @public
 * <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
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
 * @public
 * <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
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
 * @public
 * <p>The location of an object in Amazon S3.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an S3 bucket.</p>
   */
  bucketArn: string | undefined;

  /**
   * @public
   * <p>The file key for an object in an S3 bucket.</p>
   */
  fileKey: string | undefined;

  /**
   * @public
   * <p>The version of an object in an S3 bucket.</p>
   */
  objectVersion?: string;
}

/**
 * @public
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocation {
  /**
   * @public
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   */
  s3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginRequest {
  /**
   * @public
   * <p>The type of the plugin file.</p>
   */
  contentType: CustomPluginContentType | string | undefined;

  /**
   * @public
   * <p>A summary description of the custom plugin.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information about the location of a custom plugin.</p>
   */
  location: CustomPluginLocation | undefined;

  /**
   * @public
   * <p>The name of the custom plugin.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * @public
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * @public
   * <p>The name of the custom plugin.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The revision of the custom plugin.</p>
   */
  revision?: number;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationRequest {
  /**
   * @public
   * <p>A summary description of the worker configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the worker configuration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Base64 encoded contents of connect-distributed.properties file.</p>
   */
  propertiesFileContent: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationResponse {
  /**
   * @public
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The latest revision of the worker configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionSummary;

  /**
   * @public
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the worker configuration.</p>
   */
  workerConfigurationArn?: string;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector that you want to delete.</p>
   */
  connectorArn: string | undefined;

  /**
   * @public
   * <p>The current version of the connector that you want to delete.</p>
   */
  currentVersion?: string;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector that you requested to delete.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>The state of the connector that you requested to delete.</p>
   */
  connectorState?: ConnectorState | string;
}

/**
 * @public
 */
export interface DeleteCustomPluginRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you want to delete.</p>
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPluginResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you requested to delete.</p>
   */
  customPluginArn?: string;

  /**
   * @public
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;
}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector that you want to describe.</p>
   */
  connectorArn: string | undefined;
}

/**
 * @public
 * <p>Details about the state of a resource.</p>
 */
export interface StateDescription {
  /**
   * @public
   * <p>A code that describes the state of a resource.</p>
   */
  code?: string;

  /**
   * @public
   * <p>A message that describes the state of a resource.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * @public
   * <p>Information about the capacity of the connector, whether it is auto scaled or
   *          provisioned.</p>
   */
  capacity?: CapacityDescription;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration?: Record<string, string>;

  /**
   * @public
   * <p>A summary description of the connector.</p>
   */
  connectorDescription?: string;

  /**
   * @public
   * <p>The name of the connector.</p>
   */
  connectorName?: string;

  /**
   * @public
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;

  /**
   * @public
   * <p>The time the connector was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The current version of the connector.</p>
   */
  currentVersion?: string;

  /**
   * @public
   * <p>The Apache Kafka cluster that the connector is connected to.</p>
   */
  kafkaCluster?: KafkaClusterDescription;

  /**
   * @public
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * @public
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * @public
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
   */
  kafkaConnectVersion?: string;

  /**
   * @public
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   */
  logDelivery?: LogDeliveryDescription;

  /**
   * @public
   * <p>Specifies which plugins were used for this connector.</p>
   */
  plugins?: PluginDescription[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * @public
   * <p>Specifies which worker configuration was used for the connector.</p>
   */
  workerConfiguration?: WorkerConfigurationDescription;

  /**
   * @public
   * <p>Details about the state of a connector.</p>
   */
  stateDescription?: StateDescription;
}

/**
 * @public
 */
export interface DescribeCustomPluginRequest {
  /**
   * @public
   * <p>Returns information about a custom plugin.</p>
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPluginResponse {
  /**
   * @public
   * <p>The time that the custom plugin was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   */
  customPluginArn?: string;

  /**
   * @public
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;

  /**
   * @public
   * <p>The description of the custom plugin.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The latest successfully created revision of the custom plugin. If there are no
   *          successfully created revisions, this field will be absent.</p>
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * @public
   * <p>The name of the custom plugin.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Details about the state of a custom plugin.</p>
   */
  stateDescription?: StateDescription;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to get
   *          information about.</p>
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 * <p>The description of the worker configuration revision.</p>
 */
export interface WorkerConfigurationRevisionDescription {
  /**
   * @public
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of the worker configuration revision.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Base64 encoded contents of the connect-distributed.properties file.</p>
   */
  propertiesFileContent?: string;

  /**
   * @public
   * <p>The description of a revision of the worker configuration.</p>
   */
  revision?: number;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationResponse {
  /**
   * @public
   * <p>The time that the worker configuration was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The description of the worker configuration.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The latest revision of the custom configuration.</p>
   */
  latestRevision?: WorkerConfigurationRevisionDescription;

  /**
   * @public
   * <p>The name of the worker configuration.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom configuration.</p>
   */
  workerConfigurationArn?: string;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * @public
   * <p>The name prefix that you want to use to search for and list connectors.</p>
   */
  connectorNamePrefix?: string;

  /**
   * @public
   * <p>The maximum number of connectors to list in one response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where the previous
   *          operation left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * @public
   * <p>An array of connector descriptions.</p>
   */
  connectors?: ConnectorSummary[];

  /**
   * @public
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where it left
   *          off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCustomPluginsRequest {
  /**
   * @public
   * <p>The maximum number of custom plugins to list in one response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCustomPluginsResponse {
  /**
   * @public
   * <p>An array of custom plugin descriptions.</p>
   */
  customPlugins?: CustomPluginSummary[];

  /**
   * @public
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsRequest {
  /**
   * @public
   * <p>The maximum number of worker configurations to list in one response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsResponse {
  /**
   * @public
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of worker configuration descriptions.</p>
   */
  workerConfigurations?: WorkerConfigurationSummary[];
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * @public
   * <p>The target capacity.</p>
   */
  capacity: CapacityUpdate | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector that you want to update.</p>
   */
  connectorArn: string | undefined;

  /**
   * @public
   * <p>The current version of the connector that you want to update.</p>
   */
  currentVersion: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * @public
   * <p>The state of the connector.</p>
   */
  connectorState?: ConnectorState | string;
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
