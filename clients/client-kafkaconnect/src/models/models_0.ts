// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { KafkaConnectServiceException as __BaseException } from "./KafkaConnectServiceException";

/**
 * <p>The description of the scale-in policy for the connector.</p>
 */
export interface ScaleInPolicyDescription {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   */
  cpuUtilizationPercentage?: number;
}

/**
 * <p>The description of the scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicyDescription {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   */
  cpuUtilizationPercentage?: number;
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
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
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

/**
 * <p>The description of a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacityDescription {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount?: number;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount?: number;
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

/**
 * <p>The description of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaClusterDescription {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers?: string;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   */
  vpc?: VpcDescription;
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

export enum KafkaClusterClientAuthenticationType {
  IAM = "IAM",
  NONE = "NONE",
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   */
  authenticationType?: KafkaClusterClientAuthenticationType | string;
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

/**
 * <p>A description of the settings for delivering logs to Amazon Kinesis Data
 *          Firehose.</p>
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled?: boolean;
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

/**
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
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

/**
 * <p>The description of the log delivery settings.</p>
 */
export interface LogDeliveryDescription {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   */
  workerLogDelivery?: WorkerLogDeliveryDescription;
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

/**
 * <p>The description of the plugin.</p>
 */
export interface PluginDescription {
  /**
   * <p>Details about a custom plugin.</p>
   */
  customPlugin?: CustomPluginDescription;
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
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>The worker configurations that are in use with the connector.</p>
   */
  workerConfiguration?: WorkerConfigurationDescription;
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
   * <p>The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the
   *          file.</p>
   */
  fileMd5?: string;

  /**
   * <p>The size in bytes of the custom plugin file. You can use it to validate the file.</p>
   */
  fileSize?: number;
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

/**
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocationDescription {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   */
  s3Location?: S3LocationDescription;
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

/**
 * <p>A plugin is an AWS resource that contains the code that defines a connector's
 *          logic.</p>
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

/**
 * <p>A plugin is an AWS resource that contains the code that defines your connector logic.
 *       </p>
 */
export interface Plugin {
  /**
   * <p>Details about a custom plugin.</p>
   */
  customPlugin: CustomPlugin | undefined;
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

/**
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface ApacheKafkaCluster {
  /**
   * <p>The bootstrap servers of the cluster.</p>
   */
  bootstrapServers: string | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka
   *          cluster.</p>
   */
  vpc: Vpc | undefined;
}

/**
 * <p>The scale-in policy for the connector.</p>
 */
export interface ScaleInPolicy {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in
   *          to be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>The scale-out policy for the connector.</p>
 */
export interface ScaleOutPolicy {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be
   *          triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
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
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
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

/**
 * <p>An update to the connector's scale-in policy.</p>
 */
export interface ScaleInPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale in to
   *          be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * <p>An update to the connector's scale-out policy.</p>
 */
export interface ScaleOutPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale out to
   *          be triggered.</p>
   */
  cpuUtilizationPercentage: number | undefined;
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
   * <p>The target number of microcontroller units (MCUs) allocated to each connector worker.
   *          The valid values are 1,2,4,8.</p>
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

/**
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
 * <p>Details about a connector's provisioned capacity.</p>
 */
export interface ProvisionedCapacity {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

/**
 * <p>Information about the capacity of the connector, whether it is auto scaled or
 *          provisioned.</p>
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

/**
 * <p>An update to a connector's fixed capacity.</p>
 */
export interface ProvisionedCapacityUpdate {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid
   *          values are 1,2,4,8.</p>
   */
  mcuCount: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   */
  workerCount: number | undefined;
}

/**
 * <p>The target capacity for the connector. The capacity can be auto scaled or
 *          provisioned.</p>
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

/**
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
 * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
 */
export interface KafkaCluster {
  /**
   * <p>The Apache Kafka cluster to which the connector is connected.</p>
   */
  apacheKafkaCluster: ApacheKafkaCluster | undefined;
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache
 *          Kafka cluster.</p>
 */
export interface KafkaClusterClientAuthentication {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value
   *          NONE means that no client authentication is used.</p>
   */
  authenticationType: KafkaClusterClientAuthenticationType | string | undefined;
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

/**
 * <p>The settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 */
export interface FirehoseLogDelivery {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log
   *          delivery.</p>
   */
  deliveryStream?: string;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   */
  enabled: boolean | undefined;
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

/**
 * <p>Workers can send worker logs to different destination types. This configuration
 *          specifies the details of these destinations.</p>
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

/**
 * <p>Details about log delivery.</p>
 */
export interface LogDelivery {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration
   *          specifies the details of these destinations.</p>
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

/**
 * <p>The configuration of the workers, which are the processes that run the connector
 *          logic.</p>
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

export interface CreateConnectorRequest {
  /**
   * <p>Information about the capacity allocated to the connector. Exactly one of the two
   *          properties must be specified.</p>
   */
  capacity: Capacity | undefined;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration: Record<string, string> | undefined;

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
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access the
   *          Amazon Web Services resources that it needs. The types of resources depends on the logic of
   *          the connector. For example, a connector that has Amazon S3 as a destination must have
   *          permissions that allow it to write to the S3 destination bucket.</p>
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies which worker configuration to use with the connector.</p>
   */
  workerConfiguration?: WorkerConfiguration;
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

/**
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

/**
 * <p>Information about the location of a custom plugin.</p>
 */
export interface CustomPluginLocation {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin
   *          file stored in Amazon S3.</p>
   */
  s3Location: S3Location | undefined;
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

export interface DeleteCustomPluginRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you want to delete.</p>
   */
  customPluginArn: string | undefined;
}

export interface DeleteCustomPluginResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin that you requested to delete.</p>
   */
  customPluginArn?: string;

  /**
   * <p>The state of the custom plugin.</p>
   */
  customPluginState?: CustomPluginState | string;
}

export interface DescribeConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you want to describe.</p>
   */
  connectorArn: string | undefined;
}

/**
 * <p>Details about the state of a resource.</p>
 */
export interface StateDescription {
  /**
   * <p>A code that describes the state of a resource.</p>
   */
  code?: string;

  /**
   * <p>A message that describes the state of a resource.</p>
   */
  message?: string;
}

export interface DescribeConnectorResponse {
  /**
   * <p>Information about the capacity of the connector, whether it is auto scaled or
   *          provisioned.</p>
   */
  capacity?: CapacityDescription;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   */
  connectorArn?: string;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   */
  connectorConfiguration?: Record<string, string>;

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
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value
   *          is NONE when no client authentication is used.</p>
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka
   *          cluster's version and the plugins.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon
   *          Web Services resources.</p>
   */
  serviceExecutionRoleArn?: string;

  /**
   * <p>Specifies which worker configuration was used for the connector.</p>
   */
  workerConfiguration?: WorkerConfigurationDescription;

  /**
   * <p>Details about the state of a connector.</p>
   */
  stateDescription?: StateDescription;
}

export interface DescribeCustomPluginRequest {
  /**
   * <p>Returns information about a custom plugin.</p>
   */
  customPluginArn: string | undefined;
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
   * <p>The latest successfully created revision of the custom plugin. If there are no
   *          successfully created revisions, this field will be absent.</p>
   */
  latestRevision?: CustomPluginRevisionSummary;

  /**
   * <p>The name of the custom plugin.</p>
   */
  name?: string;

  /**
   * <p>Details about the state of a custom plugin.</p>
   */
  stateDescription?: StateDescription;
}

export interface DescribeWorkerConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to get
   *          information about.</p>
   */
  workerConfigurationArn: string | undefined;
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
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where the previous
   *          operation left off.</p>
   */
  nextToken?: string;
}

export interface ListConnectorsResponse {
  /**
   * <p>An array of connector descriptions.</p>
   */
  connectors?: ConnectorSummary[];

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken.
   *          Send this NextToken in a subsequent request to continue listing from where it left
   *          off.</p>
   */
  nextToken?: string;
}

export interface ListCustomPluginsRequest {
  /**
   * <p>The maximum number of custom plugins to list in one response.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

export interface ListCustomPluginsResponse {
  /**
   * <p>An array of custom plugin descriptions.</p>
   */
  customPlugins?: CustomPluginSummary[];

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

export interface ListWorkerConfigurationsRequest {
  /**
   * <p>The maximum number of worker configurations to list in one response.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;
}

export interface ListWorkerConfigurationsResponse {
  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a
   *          NextToken. Send this NextToken in a subsequent request to continue listing from where the
   *          previous operation left off.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of worker configuration descriptions.</p>
   */
  workerConfigurations?: WorkerConfigurationSummary[];
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

/**
 * @internal
 */
export const ScaleInPolicyDescriptionFilterSensitiveLog = (obj: ScaleInPolicyDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScaleOutPolicyDescriptionFilterSensitiveLog = (obj: ScaleOutPolicyDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingDescriptionFilterSensitiveLog = (obj: AutoScalingDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedCapacityDescriptionFilterSensitiveLog = (obj: ProvisionedCapacityDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityDescriptionFilterSensitiveLog = (obj: CapacityDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcDescriptionFilterSensitiveLog = (obj: VpcDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApacheKafkaClusterDescriptionFilterSensitiveLog = (obj: ApacheKafkaClusterDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterDescriptionFilterSensitiveLog = (obj: KafkaClusterDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterClientAuthenticationDescriptionFilterSensitiveLog = (
  obj: KafkaClusterClientAuthenticationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterEncryptionInTransitDescriptionFilterSensitiveLog = (
  obj: KafkaClusterEncryptionInTransitDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsLogDeliveryDescriptionFilterSensitiveLog = (
  obj: CloudWatchLogsLogDeliveryDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirehoseLogDeliveryDescriptionFilterSensitiveLog = (obj: FirehoseLogDeliveryDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LogDeliveryDescriptionFilterSensitiveLog = (obj: S3LogDeliveryDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerLogDeliveryDescriptionFilterSensitiveLog = (obj: WorkerLogDeliveryDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDeliveryDescriptionFilterSensitiveLog = (obj: LogDeliveryDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginDescriptionFilterSensitiveLog = (obj: CustomPluginDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PluginDescriptionFilterSensitiveLog = (obj: PluginDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerConfigurationDescriptionFilterSensitiveLog = (obj: WorkerConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorSummaryFilterSensitiveLog = (obj: ConnectorSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginFileDescriptionFilterSensitiveLog = (obj: CustomPluginFileDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationDescriptionFilterSensitiveLog = (obj: S3LocationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginLocationDescriptionFilterSensitiveLog = (obj: CustomPluginLocationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginRevisionSummaryFilterSensitiveLog = (obj: CustomPluginRevisionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginSummaryFilterSensitiveLog = (obj: CustomPluginSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginFilterSensitiveLog = (obj: CustomPlugin): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PluginFilterSensitiveLog = (obj: Plugin): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerConfigurationRevisionSummaryFilterSensitiveLog = (obj: WorkerConfigurationRevisionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerConfigurationSummaryFilterSensitiveLog = (obj: WorkerConfigurationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcFilterSensitiveLog = (obj: Vpc): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApacheKafkaClusterFilterSensitiveLog = (obj: ApacheKafkaCluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScaleInPolicyFilterSensitiveLog = (obj: ScaleInPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScaleOutPolicyFilterSensitiveLog = (obj: ScaleOutPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingFilterSensitiveLog = (obj: AutoScaling): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScaleInPolicyUpdateFilterSensitiveLog = (obj: ScaleInPolicyUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScaleOutPolicyUpdateFilterSensitiveLog = (obj: ScaleOutPolicyUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingUpdateFilterSensitiveLog = (obj: AutoScalingUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedCapacityFilterSensitiveLog = (obj: ProvisionedCapacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityFilterSensitiveLog = (obj: Capacity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProvisionedCapacityUpdateFilterSensitiveLog = (obj: ProvisionedCapacityUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityUpdateFilterSensitiveLog = (obj: CapacityUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsLogDeliveryFilterSensitiveLog = (obj: CloudWatchLogsLogDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterFilterSensitiveLog = (obj: KafkaCluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterClientAuthenticationFilterSensitiveLog = (obj: KafkaClusterClientAuthentication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KafkaClusterEncryptionInTransitFilterSensitiveLog = (obj: KafkaClusterEncryptionInTransit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirehoseLogDeliveryFilterSensitiveLog = (obj: FirehoseLogDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LogDeliveryFilterSensitiveLog = (obj: S3LogDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerLogDeliveryFilterSensitiveLog = (obj: WorkerLogDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogDeliveryFilterSensitiveLog = (obj: LogDelivery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkerConfigurationFilterSensitiveLog = (obj: WorkerConfiguration): any => ({
  ...obj,
});

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
export const CreateConnectorResponseFilterSensitiveLog = (obj: CreateConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPluginLocationFilterSensitiveLog = (obj: CustomPluginLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomPluginRequestFilterSensitiveLog = (obj: CreateCustomPluginRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomPluginResponseFilterSensitiveLog = (obj: CreateCustomPluginResponse): any => ({
  ...obj,
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
export const CreateWorkerConfigurationResponseFilterSensitiveLog = (obj: CreateWorkerConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorRequestFilterSensitiveLog = (obj: DeleteConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectorResponseFilterSensitiveLog = (obj: DeleteConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomPluginRequestFilterSensitiveLog = (obj: DeleteCustomPluginRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomPluginResponseFilterSensitiveLog = (obj: DeleteCustomPluginResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectorRequestFilterSensitiveLog = (obj: DescribeConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StateDescriptionFilterSensitiveLog = (obj: StateDescription): any => ({
  ...obj,
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
export const DescribeCustomPluginRequestFilterSensitiveLog = (obj: DescribeCustomPluginRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomPluginResponseFilterSensitiveLog = (obj: DescribeCustomPluginResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkerConfigurationRequestFilterSensitiveLog = (obj: DescribeWorkerConfigurationRequest): any => ({
  ...obj,
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

/**
 * @internal
 */
export const ListConnectorsRequestFilterSensitiveLog = (obj: ListConnectorsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectorsResponseFilterSensitiveLog = (obj: ListConnectorsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomPluginsRequestFilterSensitiveLog = (obj: ListCustomPluginsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomPluginsResponseFilterSensitiveLog = (obj: ListCustomPluginsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerConfigurationsRequestFilterSensitiveLog = (obj: ListWorkerConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkerConfigurationsResponseFilterSensitiveLog = (obj: ListWorkerConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorRequestFilterSensitiveLog = (obj: UpdateConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectorResponseFilterSensitiveLog = (obj: UpdateConnectorResponse): any => ({
  ...obj,
});
