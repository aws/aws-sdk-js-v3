// smithy-typescript generated code
import {
  ConnectorOperationState,
  ConnectorOperationStepState,
  ConnectorOperationStepType,
  ConnectorOperationType,
  ConnectorState,
  CustomPluginContentType,
  CustomPluginState,
  KafkaClusterClientAuthenticationType,
  KafkaClusterEncryptionInTransitType,
  NetworkType,
  WorkerConfigurationState,
} from "./enums";

/**
 * <p>Details of a step that is involved in a connector's operation.</p>
 * @public
 */
export interface ConnectorOperationStep {
  /**
   * <p>The step type of the operation.</p>
   * @public
   */
  stepType?: ConnectorOperationStepType | undefined;

  /**
   * <p>The step state of the operation.</p>
   * @public
   */
  stepState?: ConnectorOperationStepState | undefined;
}

/**
 * <p>Summary of a connector operation.</p>
 * @public
 */
export interface ConnectorOperationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector operation.</p>
   * @public
   */
  connectorOperationArn?: string | undefined;

  /**
   * <p>The type of connector operation performed.</p>
   * @public
   */
  connectorOperationType?: ConnectorOperationType | undefined;

  /**
   * <p>The state of the connector operation.</p>
   * @public
   */
  connectorOperationState?: ConnectorOperationState | undefined;

  /**
   * <p>The time when operation was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time when operation ended.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * <p>The description of the scale-in policy for the connector.</p>
 * @public
 */
export interface ScaleInPolicyDescription {
  /**
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage?: number | undefined;
}

/**
 * <p>The description of the scale-out policy for the connector.</p>
 * @public
 */
export interface ScaleOutPolicyDescription {
  /**
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
   * @public
   */
  cpuUtilizationPercentage?: number | undefined;
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
  maxWorkerCount?: number | undefined;

  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   * @public
   */
  mcuCount?: number | undefined;

  /**
   * <p>The minimum number of workers allocated to the connector.</p>
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * <p>The sacle-in policy for the connector.</p>
   * @public
   */
  scaleInPolicy?: ScaleInPolicyDescription | undefined;

  /**
   * <p>The sacle-out policy for the connector.&gt;</p>
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicyDescription | undefined;
}

/**
 * <p>The description of a connector's provisioned capacity.</p>
 * @public
 */
export interface ProvisionedCapacityDescription {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
   * @public
   */
  mcuCount?: number | undefined;

  /**
   * <p>The number of workers that are allocated to the connector.</p>
   * @public
   */
  workerCount?: number | undefined;
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
  autoScaling?: AutoScalingDescription | undefined;

  /**
   * <p>Describes a connector's provisioned capacity.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityDescription | undefined;
}

/**
 * <p>The description of the VPC in which the connector resides.</p>
 * @public
 */
export interface VpcDescription {
  /**
   * <p>The security groups for the connector.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The subnets for the connector.</p>
   * @public
   */
  subnets?: string[] | undefined;
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
  bootstrapServers?: string | undefined;

  /**
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
   * @public
   */
  vpc?: VpcDescription | undefined;
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
  apacheKafkaCluster?: ApacheKafkaClusterDescription | undefined;
}

/**
 * <p>The client authentication information used in order to authenticate with the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.</p>
   * @public
   */
  authenticationType?: KafkaClusterClientAuthenticationType | undefined;
}

/**
 * <p>The description of the encryption in transit to the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterEncryptionInTransitDescription {
  /**
   * <p>The type of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  encryptionType?: KafkaClusterEncryptionInTransitType | undefined;
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
  enabled?: boolean | undefined;

  /**
   * <p>The name of the CloudWatch log group that is the destination for log delivery.</p>
   * @public
   */
  logGroup?: string | undefined;
}

/**
 * <p>A description of the settings for delivering logs to Amazon Kinesis Data Firehose.</p>
 * @public
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.</p>
   * @public
   */
  deliveryStream?: string | undefined;

  /**
   * <p>Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  enabled?: boolean | undefined;
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
  bucket?: string | undefined;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
 * @public
 */
export interface WorkerLogDeliveryDescription {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription | undefined;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  firehose?: FirehoseLogDeliveryDescription | undefined;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   * @public
   */
  s3?: S3LogDeliveryDescription | undefined;
}

/**
 * <p>The description of the log delivery settings.</p>
 * @public
 */
export interface LogDeliveryDescription {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
   * @public
   */
  workerLogDelivery?: WorkerLogDeliveryDescription | undefined;
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
  customPluginArn?: string | undefined;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number | undefined;
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
  customPlugin?: CustomPluginDescription | undefined;
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
  revision?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string | undefined;
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
  capacity?: CapacityDescription | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The description of the connector.</p>
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string | undefined;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * <p>The time that the connector was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The current version of the connector.</p>
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * <p>The details of the Apache Kafka cluster to which the connector is connected.</p>
   * @public
   */
  kafkaCluster?: KafkaClusterDescription | undefined;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</p>
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription | undefined;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription | undefined;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion?: string | undefined;

  /**
   * <p>The settings for delivering connector logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  logDelivery?: LogDeliveryDescription | undefined;

  /**
   * <p>The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   * @public
   */
  plugins?: PluginDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</p>
   * @public
   */
  serviceExecutionRoleArn?: string | undefined;

  /**
   * <p>The worker configurations that are in use with the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription | undefined;
}

/**
 * <p>Details about a custom plugin file.</p>
 * @public
 */
export interface CustomPluginFileDescription {
  /**
   * <p>The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.</p>
   * @public
   */
  fileMd5?: string | undefined;

  /**
   * <p>The size in bytes of the custom plugin file. You can use it to validate the file.</p>
   * @public
   */
  fileSize?: number | undefined;
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
  bucketArn?: string | undefined;

  /**
   * <p>The file key for an object in an S3 bucket.</p>
   * @public
   */
  fileKey?: string | undefined;

  /**
   * <p>The version of an object in an S3 bucket.</p>
   * @public
   */
  objectVersion?: string | undefined;
}

/**
 * <p>Information about the location of a custom plugin.</p>
 * @public
 */
export interface CustomPluginLocationDescription {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.</p>
   * @public
   */
  s3Location?: S3LocationDescription | undefined;
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
  contentType?: CustomPluginContentType | undefined;

  /**
   * <p>The time that the custom plugin was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The description of the custom plugin.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Details about the custom plugin file.</p>
   * @public
   */
  fileDescription?: CustomPluginFileDescription | undefined;

  /**
   * <p>Information about the location of the custom plugin.</p>
   * @public
   */
  location?: CustomPluginLocationDescription | undefined;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number | undefined;
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
  creationTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * <p>A description of the custom plugin.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The latest revision of the custom plugin.</p>
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary | undefined;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string | undefined;
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
  creationTime?: Date | undefined;

  /**
   * <p>The description of a worker configuration revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The revision of a worker configuration.</p>
   * @public
   */
  revision?: number | undefined;
}

/**
 * <p>The summary of a worker configuration.</p>
 * @public
 */
export interface WorkerConfigurationSummary {
  /**
   * <p>The time that a worker configuration was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The description of a worker configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The latest revision of a worker configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary | undefined;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
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
  securityGroups?: string[] | undefined;

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
   * <p>Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.</p>
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
   * <p>Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
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
   * <p>The CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
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
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
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
  scaleInPolicy?: ScaleInPolicy | undefined;

  /**
   * <p>The sacle-out policy for the connector.</p>
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicy | undefined;
}

/**
 * <p>An update to the connector's scale-in policy.</p>
 * @public
 */
export interface ScaleInPolicyUpdate {
  /**
   * <p>The target CPU utilization percentage threshold at which you want connector scale in to be triggered.</p>
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
   * <p>The target CPU utilization percentage threshold at which you want connector scale out to be triggered.</p>
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
   * <p>The target number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
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
 * <p>Details about a connector's provisioned capacity.</p>
 * @public
 */
export interface ProvisionedCapacity {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
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
 * <p>Information about the capacity of the connector, whether it is auto scaled or provisioned.</p>
 * @public
 */
export interface Capacity {
  /**
   * <p>Information about the auto scaling parameters for the connector.</p>
   * @public
   */
  autoScaling?: AutoScaling | undefined;

  /**
   * <p>Details about a fixed capacity allocated to a connector.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacity | undefined;
}

/**
 * <p>An update to a connector's fixed capacity.</p>
 * @public
 */
export interface ProvisionedCapacityUpdate {
  /**
   * <p>The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.</p>
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
 * <p>The target capacity for the connector. The capacity can be auto scaled or provisioned.</p>
 * @public
 */
export interface CapacityUpdate {
  /**
   * <p>The target auto scaling setting.</p>
   * @public
   */
  autoScaling?: AutoScalingUpdate | undefined;

  /**
   * <p>The target settings for provisioned capacity.</p>
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityUpdate | undefined;
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
  logGroup?: string | undefined;
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
 * <p>The client authentication information used in order to authenticate with the Apache Kafka cluster.</p>
 * @public
 */
export interface KafkaClusterClientAuthentication {
  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.</p>
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
   * <p>The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.</p>
   * @public
   */
  deliveryStream?: string | undefined;

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
  bucket?: string | undefined;

  /**
   * <p>Specifies whether connector logs get sent to the specified Amazon S3 destination.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>The S3 prefix that is the destination for log delivery.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * <p>Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
 * @public
 */
export interface WorkerLogDelivery {
  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDelivery | undefined;

  /**
   * <p>Details about delivering logs to Amazon Kinesis Data Firehose.</p>
   * @public
   */
  firehose?: FirehoseLogDelivery | undefined;

  /**
   * <p>Details about delivering logs to Amazon S3.</p>
   * @public
   */
  s3?: S3LogDelivery | undefined;
}

/**
 * <p>Details about log delivery.</p>
 * @public
 */
export interface LogDelivery {
  /**
   * <p>The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.</p>
   * @public
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

/**
 * <p>The configuration of the workers, which are the processes that run the connector logic.</p>
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
   * <p>Information about the capacity allocated to the connector. Exactly one of the two properties must be specified.</p>
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
  connectorDescription?: string | undefined;

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
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion: string | undefined;

  /**
   * <p>Details about log delivery.</p>
   * @public
   */
  logDelivery?: LogDelivery | undefined;

  /**
   * <p>The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <important> <p>Amazon MSK Connect does not currently support specifying multiple plugins as a list. To use more than one plugin for your connector, you can create a single custom plugin using a ZIP file that bundles multiple plugins together.</p> </important> <p>Specifies which plugin to use for the connector. You must specify a single-element list containing one <code>customPlugin</code> object.</p>
   * @public
   */
  plugins: Plugin[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.</p>
   * @public
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * <p>Specifies which worker configuration to use with the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfiguration | undefined;

  /**
   * <p>The tags you want to attach to the connector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the connector.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string | undefined;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState | undefined;
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
  objectVersion?: string | undefined;
}

/**
 * <p>Information about the location of a custom plugin.</p>
 * @public
 */
export interface CustomPluginLocation {
  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.</p>
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
  description?: string | undefined;

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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the custom plugin.</p>
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The revision of the custom plugin.</p>
   * @public
   */
  revision?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationRequest {
  /**
   * <p>A summary description of the worker configuration.</p>
   * @public
   */
  description?: string | undefined;

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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The latest revision of the worker configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary | undefined;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that Amazon assigned to the worker configuration.</p>
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
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
  currentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector that you requested to delete.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The state of the connector that you requested to delete.</p>
   * @public
   */
  connectorState?: ConnectorState | undefined;
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
  customPluginArn?: string | undefined;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState | undefined;
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
  workerConfigurationArn?: string | undefined;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
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
  code?: string | undefined;

  /**
   * <p>A message that describes the state of a resource.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * <p>Information about the capacity of the connector, whether it is auto scaled or provisioned.</p>
   * @public
   */
  capacity?: CapacityDescription | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   * @public
   */
  connectorConfiguration?: Record<string, string> | undefined;

  /**
   * <p>A summary description of the connector.</p>
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  connectorName?: string | undefined;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * <p>The time the connector was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The current version of the connector.</p>
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * <p>The Apache Kafka cluster that the connector is connected to.</p>
   * @public
   */
  kafkaCluster?: KafkaClusterDescription | undefined;

  /**
   * <p>The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.</p>
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription | undefined;

  /**
   * <p>Details of encryption in transit to the Apache Kafka cluster.</p>
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription | undefined;

  /**
   * <p>The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.</p>
   * @public
   */
  kafkaConnectVersion?: string | undefined;

  /**
   * <p>Details about delivering logs to Amazon CloudWatch Logs.</p>
   * @public
   */
  logDelivery?: LogDeliveryDescription | undefined;

  /**
   * <p>The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>Specifies which plugins were used for this connector.</p>
   * @public
   */
  plugins?: PluginDescription[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.</p>
   * @public
   */
  serviceExecutionRoleArn?: string | undefined;

  /**
   * <p>Specifies which worker configuration was used for the connector.</p>
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription | undefined;

  /**
   * <p>Details about the state of a connector.</p>
   * @public
   */
  stateDescription?: StateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorOperationRequest {
  /**
   * <p>ARN of the connector operation to be described.</p>
   * @public
   */
  connectorOperationArn: string | undefined;
}

/**
 * <p>Details about worker setting of a connector</p>
 * @public
 */
export interface WorkerSetting {
  /**
   * <p>A description of the connector's capacity.</p>
   * @public
   */
  capacity?: CapacityDescription | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorOperationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector operation.</p>
   * @public
   */
  connectorOperationArn?: string | undefined;

  /**
   * <p>The state of the connector operation.</p>
   * @public
   */
  connectorOperationState?: ConnectorOperationState | undefined;

  /**
   * <p>The type of connector operation performed.</p>
   * @public
   */
  connectorOperationType?: ConnectorOperationType | undefined;

  /**
   * <p>The array of operation steps taken.</p>
   * @public
   */
  operationSteps?: ConnectorOperationStep[] | undefined;

  /**
   * <p>The origin worker setting.</p>
   * @public
   */
  originWorkerSetting?: WorkerSetting | undefined;

  /**
   * <p>The origin connector configuration.</p>
   * @public
   */
  originConnectorConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The target worker setting.</p>
   * @public
   */
  targetWorkerSetting?: WorkerSetting | undefined;

  /**
   * <p>The target connector configuration.</p>
   * @public
   */
  targetConnectorConfiguration?: Record<string, string> | undefined;

  /**
   * <p>Details about the state of a resource.</p>
   * @public
   */
  errorInfo?: StateDescription | undefined;

  /**
   * <p>The time when the operation was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time when the operation ended.</p>
   * @public
   */
  endTime?: Date | undefined;
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
  creationTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom plugin.</p>
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * <p>The state of the custom plugin.</p>
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * <p>The description of the custom plugin.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The latest successfully created revision of the custom plugin. If there are no successfully created revisions, this field will be absent.</p>
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary | undefined;

  /**
   * <p>The name of the custom plugin.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Details about the state of a custom plugin.</p>
   * @public
   */
  stateDescription?: StateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the worker configuration that you want to get information about.</p>
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
  creationTime?: Date | undefined;

  /**
   * <p>The description of the worker configuration revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Base64 encoded contents of the connect-distributed.properties file.</p>
   * @public
   */
  propertiesFileContent?: string | undefined;

  /**
   * <p>The description of a revision of the worker configuration.</p>
   * @public
   */
  revision?: number | undefined;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationResponse {
  /**
   * <p>The time that the worker configuration was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The description of the worker configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The latest revision of the custom configuration.</p>
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionDescription | undefined;

  /**
   * <p>The name of the worker configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom configuration.</p>
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * <p>The state of the worker configuration.</p>
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
}

/**
 * @public
 */
export interface ListConnectorOperationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector for which to list operations.</p>
   * @public
   */
  connectorArn: string | undefined;

  /**
   * <p>Maximum number of connector operations to fetch in one get request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the response is truncated, it includes a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorOperationsResponse {
  /**
   * <p>An array of connector operation descriptions.</p>
   * @public
   */
  connectorOperations?: ConnectorOperationSummary[] | undefined;

  /**
   * <p>If the response is truncated, it includes a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * <p>The name prefix that you want to use to search for and list connectors.</p>
   * @public
   */
  connectorNamePrefix?: string | undefined;

  /**
   * <p>The maximum number of connectors to list in one response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * <p>An array of connector descriptions.</p>
   * @public
   */
  connectors?: ConnectorSummary[] | undefined;

  /**
   * <p>If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPluginsRequest {
  /**
   * <p>The maximum number of custom plugins to list in one response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Lists custom plugin names that start with the specified text string.</p>
   * @public
   */
  namePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPluginsResponse {
  /**
   * <p>An array of custom plugin descriptions.</p>
   * @public
   */
  customPlugins?: CustomPluginSummary[] | undefined;

  /**
   * <p>If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsRequest {
  /**
   * <p>The maximum number of worker configurations to list in one response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Lists worker configuration names that start with the specified text string.</p>
   * @public
   */
  namePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsResponse {
  /**
   * <p>If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of worker configuration descriptions.</p>
   * @public
   */
  workerConfigurations?: WorkerConfigurationSummary[] | undefined;
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
  capacity?: CapacityUpdate | undefined;

  /**
   * <p>A map of keys to values that represent the configuration for the connector.</p>
   * @public
   */
  connectorConfiguration?: Record<string, string> | undefined;

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
  connectorArn?: string | undefined;

  /**
   * <p>The state of the connector.</p>
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the connector operation.</p>
   * @public
   */
  connectorOperationArn?: string | undefined;
}
