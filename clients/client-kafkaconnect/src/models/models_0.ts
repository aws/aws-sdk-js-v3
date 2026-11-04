// smithy-typescript generated code
import type {
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
 * Details of a step that is involved in a connector's operation.
 *
 * @public
 */
export interface ConnectorOperationStep {
  /**
   * The step type of the operation.
   *
   * @public
   */
  stepType?: ConnectorOperationStepType | undefined;

  /**
   * The step state of the operation.
   *
   * @public
   */
  stepState?: ConnectorOperationStepState | undefined;
}

/**
 * Summary of a connector operation.
 *
 * @public
 */
export interface ConnectorOperationSummary {
  /**
   * The Amazon Resource Name (ARN) of the connector operation.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;

  /**
   * The type of connector operation performed.
   *
   * @public
   */
  connectorOperationType?: ConnectorOperationType | undefined;

  /**
   * The state of the connector operation.
   *
   * @public
   */
  connectorOperationState?: ConnectorOperationState | undefined;

  /**
   * The time when operation was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time when operation ended.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * The description of the scale-in policy for the connector.
 *
 * @public
 */
export interface ScaleInPolicyDescription {
  /**
   * Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage?: number | undefined;
}

/**
 * The description of the scale-out policy for the connector.
 *
 * @public
 */
export interface ScaleOutPolicyDescription {
  /**
   * The CPU utilization percentage threshold at which you want connector scale out to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage?: number | undefined;
}

/**
 * Information about the auto scaling parameters for the connector.
 *
 * @public
 */
export interface AutoScalingDescription {
  /**
   * The maximum number of workers allocated to the connector.
   *
   * @public
   */
  maxWorkerCount?: number | undefined;

  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount?: number | undefined;

  /**
   * The minimum number of workers allocated to the connector.
   *
   * @public
   */
  minWorkerCount?: number | undefined;

  /**
   * The scale-in policy for the connector.
   *
   * @public
   */
  scaleInPolicy?: ScaleInPolicyDescription | undefined;

  /**
   * The scale-out policy for the connector.
   *
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicyDescription | undefined;

  /**
   * The maximum number of tasks allocated to the connector during autoscaling operations. Must be at least equal to maxWorkerCount.
   *
   * @public
   */
  maxAutoscalingTaskCount?: number | undefined;
}

/**
 * The description of a connector's provisioned capacity.
 *
 * @public
 */
export interface ProvisionedCapacityDescription {
  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount?: number | undefined;

  /**
   * The number of workers that are allocated to the connector.
   *
   * @public
   */
  workerCount?: number | undefined;
}

/**
 * A description of the connector's capacity.
 *
 * @public
 */
export interface CapacityDescription {
  /**
   * Describes the connector's auto scaling capacity.
   *
   * @public
   */
  autoScaling?: AutoScalingDescription | undefined;

  /**
   * Describes a connector's provisioned capacity.
   *
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityDescription | undefined;
}

/**
 * The description of the VPC in which the connector resides.
 *
 * @public
 */
export interface VpcDescription {
  /**
   * The security groups for the connector.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The subnets for the connector.
   *
   * @public
   */
  subnets?: string[] | undefined;
}

/**
 * The description of the Apache Kafka cluster to which the connector is connected.
 *
 * @public
 */
export interface ApacheKafkaClusterDescription {
  /**
   * The bootstrap servers of the cluster.
   *
   * @public
   */
  bootstrapServers?: string | undefined;

  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   *
   * @public
   */
  vpc?: VpcDescription | undefined;
}

/**
 * Details of how to connect to the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterDescription {
  /**
   * The Apache Kafka cluster to which the connector is connected.
   *
   * @public
   */
  apacheKafkaCluster?: ApacheKafkaClusterDescription | undefined;
}

/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterClientAuthenticationDescription {
  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.
   *
   * @public
   */
  authenticationType?: KafkaClusterClientAuthenticationType | undefined;
}

/**
 * The description of the encryption in transit to the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterEncryptionInTransitDescription {
  /**
   * The type of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  encryptionType?: KafkaClusterEncryptionInTransitType | undefined;
}

/**
 * A description of the log delivery settings.
 *
 * @public
 */
export interface CloudWatchLogsLogDeliveryDescription {
  /**
   * Whether log delivery to Amazon CloudWatch Logs is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The name of the CloudWatch log group that is the destination for log delivery.
   *
   * @public
   */
  logGroup?: string | undefined;
}

/**
 * A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
 *
 * @public
 */
export interface FirehoseLogDeliveryDescription {
  /**
   * The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
   *
   * @public
   */
  deliveryStream?: string | undefined;

  /**
   * Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * The description of the details about delivering logs to Amazon S3.
 *
 * @public
 */
export interface S3LogDeliveryDescription {
  /**
   * The name of the S3 bucket that is the destination for log delivery.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * Specifies whether connector logs get sent to the specified Amazon S3 destination.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The S3 prefix that is the destination for log delivery.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
 *
 * @public
 */
export interface WorkerLogDeliveryDescription {
  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDeliveryDescription | undefined;

  /**
   * Details about delivering logs to Amazon Kinesis Data Firehose.
   *
   * @public
   */
  firehose?: FirehoseLogDeliveryDescription | undefined;

  /**
   * Details about delivering logs to Amazon S3.
   *
   * @public
   */
  s3?: S3LogDeliveryDescription | undefined;
}

/**
 * The description of the log delivery settings.
 *
 * @public
 */
export interface LogDeliveryDescription {
  /**
   * The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
   *
   * @public
   */
  workerLogDelivery?: WorkerLogDeliveryDescription | undefined;
}

/**
 * Details about a custom plugin.
 *
 * @public
 */
export interface CustomPluginDescription {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * The revision of the custom plugin.
   *
   * @public
   */
  revision?: number | undefined;
}

/**
 * The description of the plugin.
 *
 * @public
 */
export interface PluginDescription {
  /**
   * Details about a custom plugin.
   *
   * @public
   */
  customPlugin?: CustomPluginDescription | undefined;
}

/**
 * The description of the worker configuration.
 *
 * @public
 */
export interface WorkerConfigurationDescription {
  /**
   * The revision of the worker configuration.
   *
   * @public
   */
  revision?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the worker configuration.
   *
   * @public
   */
  workerConfigurationArn?: string | undefined;
}

/**
 * Summary of a connector.
 *
 * @public
 */
export interface ConnectorSummary {
  /**
   * The connector's compute capacity settings.
   *
   * @public
   */
  capacity?: CapacityDescription | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The description of the connector.
   *
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  connectorName?: string | undefined;

  /**
   * The state of the connector.
   *
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * The time that the connector was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The current version of the connector.
   *
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * The details of the Apache Kafka cluster to which the connector is connected.
   *
   * @public
   */
  kafkaCluster?: KafkaClusterDescription | undefined;

  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.
   *
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription | undefined;

  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription | undefined;

  /**
   * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
   *
   * @public
   */
  kafkaConnectVersion?: string | undefined;

  /**
   * The settings for delivering connector logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  logDelivery?: LogDeliveryDescription | undefined;

  /**
   * The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * Specifies which plugins were used for this connector.
   *
   * @public
   */
  plugins?: PluginDescription[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
   *
   * @public
   */
  serviceExecutionRoleArn?: string | undefined;

  /**
   * The worker configurations that are in use with the connector.
   *
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription | undefined;
}

/**
 * Details about a custom plugin file.
 *
 * @public
 */
export interface CustomPluginFileDescription {
  /**
   * The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.
   *
   * @public
   */
  fileMd5?: string | undefined;

  /**
   * The size in bytes of the custom plugin file. You can use it to validate the file.
   *
   * @public
   */
  fileSize?: number | undefined;
}

/**
 * The description of the location of an object in Amazon S3.
 *
 * @public
 */
export interface S3LocationDescription {
  /**
   * The Amazon Resource Name (ARN) of an S3 bucket.
   *
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * The file key for an object in an S3 bucket.
   *
   * @public
   */
  fileKey?: string | undefined;

  /**
   * The version of an object in an S3 bucket.
   *
   * @public
   */
  objectVersion?: string | undefined;
}

/**
 * Information about the location of a custom plugin.
 *
 * @public
 */
export interface CustomPluginLocationDescription {
  /**
   * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
   *
   * @public
   */
  s3Location?: S3LocationDescription | undefined;
}

/**
 * Details about the revision of a custom plugin.
 *
 * @public
 */
export interface CustomPluginRevisionSummary {
  /**
   * The format of the plugin file.
   *
   * @public
   */
  contentType?: CustomPluginContentType | undefined;

  /**
   * The time that the custom plugin was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The description of the custom plugin.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Details about the custom plugin file.
   *
   * @public
   */
  fileDescription?: CustomPluginFileDescription | undefined;

  /**
   * Information about the location of the custom plugin.
   *
   * @public
   */
  location?: CustomPluginLocationDescription | undefined;

  /**
   * The revision of the custom plugin.
   *
   * @public
   */
  revision?: number | undefined;
}

/**
 * A summary of the custom plugin.
 *
 * @public
 */
export interface CustomPluginSummary {
  /**
   * The time that the custom plugin was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * The state of the custom plugin.
   *
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * A description of the custom plugin.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The latest revision of the custom plugin.
   *
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary | undefined;

  /**
   * The name of the custom plugin.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * A plugin is an Amazon Web Services resource that contains the code that defines a connector's logic.
 *
 * @public
 */
export interface CustomPlugin {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * @public
   */
  customPluginArn: string | undefined;

  /**
   * The revision of the custom plugin.
   *
   * @public
   */
  revision: number | undefined;
}

/**
 * A plugin is an Amazon Web Services resource that contains the code that defines your connector logic.
 *
 * @public
 */
export interface Plugin {
  /**
   * Details about a custom plugin.
   *
   * @public
   */
  customPlugin: CustomPlugin | undefined;
}

/**
 * Details about a custom plugin to use when you update a connector via `UpdateConnector`.
 *
 * @public
 */
export interface CustomPluginUpdate {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * @public
   */
  customPluginArn: string | undefined;

  /**
   * The revision of the custom plugin.
   *
   * @public
   */
  revision: number | undefined;
}

/**
 * A custom plugin to use when you update a connector via `UpdateConnector`.
 *
 * @public
 */
export interface PluginUpdate {
  /**
   * The custom plugin to use for the connector.
   *
   * @public
   */
  customPlugin: CustomPluginUpdate | undefined;
}

/**
 * The summary of a worker configuration revision.
 *
 * @public
 */
export interface WorkerConfigurationRevisionSummary {
  /**
   * The time that a worker configuration revision was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The description of a worker configuration revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The revision of a worker configuration.
   *
   * @public
   */
  revision?: number | undefined;
}

/**
 * The summary of a worker configuration.
 *
 * @public
 */
export interface WorkerConfigurationSummary {
  /**
   * The time that a worker configuration was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The description of a worker configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The latest revision of a worker configuration.
   *
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary | undefined;

  /**
   * The name of the worker configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the worker configuration.
   *
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * The state of the worker configuration.
   *
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
}

/**
 * Information about the VPC in which the connector resides.
 *
 * @public
 */
export interface Vpc {
  /**
   * The security groups for the connector.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The subnets for the connector.
   *
   * @public
   */
  subnets: string[] | undefined;
}

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 *
 * @public
 */
export interface ApacheKafkaCluster {
  /**
   * The bootstrap servers of the cluster.
   *
   * @public
   */
  bootstrapServers: string | undefined;

  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   *
   * @public
   */
  vpc: Vpc | undefined;
}

/**
 * The scale-in policy for the connector.
 *
 * @public
 */
export interface ScaleInPolicy {
  /**
   * Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * The scale-out policy for the connector.
 *
 * @public
 */
export interface ScaleOutPolicy {
  /**
   * The CPU utilization percentage threshold at which you want connector scale out to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * Specifies how the connector scales.
 *
 * @public
 */
export interface AutoScaling {
  /**
   * The maximum number of workers allocated to the connector.
   *
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount: number | undefined;

  /**
   * The minimum number of workers allocated to the connector.
   *
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * The scale-in policy for the connector.
   *
   * @public
   */
  scaleInPolicy?: ScaleInPolicy | undefined;

  /**
   * The scale-out policy for the connector.
   *
   * @public
   */
  scaleOutPolicy?: ScaleOutPolicy | undefined;

  /**
   * The maximum number of tasks allocated to the connector during autoscaling operations. Must be at least equal to maxWorkerCount.
   *
   * @public
   */
  maxAutoscalingTaskCount?: number | undefined;
}

/**
 * An update to the connector's scale-in policy.
 *
 * @public
 */
export interface ScaleInPolicyUpdate {
  /**
   * The target CPU utilization percentage threshold at which you want connector scale in to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * An update to the connector's scale-out policy.
 *
 * @public
 */
export interface ScaleOutPolicyUpdate {
  /**
   * The target CPU utilization percentage threshold at which you want connector scale out to be triggered.
   *
   * @public
   */
  cpuUtilizationPercentage: number | undefined;
}

/**
 * The updates to the auto scaling parameters for the connector.
 *
 * @public
 */
export interface AutoScalingUpdate {
  /**
   * The target maximum number of workers allocated to the connector.
   *
   * @public
   */
  maxWorkerCount: number | undefined;

  /**
   * The target number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount: number | undefined;

  /**
   * The target minimum number of workers allocated to the connector.
   *
   * @public
   */
  minWorkerCount: number | undefined;

  /**
   * The target scale-in policy for the connector.
   *
   * @public
   */
  scaleInPolicy: ScaleInPolicyUpdate | undefined;

  /**
   * The target scale-out policy for the connector.
   *
   * @public
   */
  scaleOutPolicy: ScaleOutPolicyUpdate | undefined;

  /**
   * The maximum number of tasks allocated to the connector during autoscaling operations. Must be at least equal to maxWorkerCount.
   *
   * @public
   */
  maxAutoscalingTaskCount?: number | undefined;
}

/**
 * Details about a connector's provisioned capacity.
 *
 * @public
 */
export interface ProvisionedCapacity {
  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount: number | undefined;

  /**
   * The number of workers that are allocated to the connector.
   *
   * @public
   */
  workerCount: number | undefined;
}

/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
 *
 * @public
 */
export interface Capacity {
  /**
   * Information about the auto scaling parameters for the connector.
   *
   * @public
   */
  autoScaling?: AutoScaling | undefined;

  /**
   * Details about a fixed capacity allocated to a connector.
   *
   * @public
   */
  provisionedCapacity?: ProvisionedCapacity | undefined;
}

/**
 * An update to a connector's fixed capacity.
 *
 * @public
 */
export interface ProvisionedCapacityUpdate {
  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * @public
   */
  mcuCount: number | undefined;

  /**
   * The number of workers that are allocated to the connector.
   *
   * @public
   */
  workerCount: number | undefined;
}

/**
 * The target capacity for the connector. The capacity can be auto scaled or provisioned.
 *
 * @public
 */
export interface CapacityUpdate {
  /**
   * The target auto scaling setting.
   *
   * @public
   */
  autoScaling?: AutoScalingUpdate | undefined;

  /**
   * The target settings for provisioned capacity.
   *
   * @public
   */
  provisionedCapacity?: ProvisionedCapacityUpdate | undefined;
}

/**
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchLogsLogDelivery {
  /**
   * Whether log delivery to Amazon CloudWatch Logs is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The name of the CloudWatch log group that is the destination for log delivery.
   *
   * @public
   */
  logGroup?: string | undefined;
}

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 *
 * @public
 */
export interface KafkaCluster {
  /**
   * The Apache Kafka cluster to which the connector is connected.
   *
   * @public
   */
  apacheKafkaCluster: ApacheKafkaCluster | undefined;
}

/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterClientAuthentication {
  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.
   *
   * @public
   */
  authenticationType: KafkaClusterClientAuthenticationType | undefined;
}

/**
 * Details of encryption in transit to the Apache Kafka cluster.
 *
 * @public
 */
export interface KafkaClusterEncryptionInTransit {
  /**
   * The type of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  encryptionType: KafkaClusterEncryptionInTransitType | undefined;
}

/**
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
 *
 * @public
 */
export interface FirehoseLogDelivery {
  /**
   * The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
   *
   * @public
   */
  deliveryStream?: string | undefined;

  /**
   * Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Details about delivering logs to Amazon S3.
 *
 * @public
 */
export interface S3LogDelivery {
  /**
   * The name of the S3 bucket that is the destination for log delivery.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * Specifies whether connector logs get sent to the specified Amazon S3 destination.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The S3 prefix that is the destination for log delivery.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
 *
 * @public
 */
export interface WorkerLogDelivery {
  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsLogDelivery | undefined;

  /**
   * Details about delivering logs to Amazon Kinesis Data Firehose.
   *
   * @public
   */
  firehose?: FirehoseLogDelivery | undefined;

  /**
   * Details about delivering logs to Amazon S3.
   *
   * @public
   */
  s3?: S3LogDelivery | undefined;
}

/**
 * Details about log delivery.
 *
 * @public
 */
export interface LogDelivery {
  /**
   * The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
   *
   * @public
   */
  workerLogDelivery: WorkerLogDelivery | undefined;
}

/**
 * The configuration of the workers, which are the processes that run the connector logic.
 *
 * @public
 */
export interface WorkerConfiguration {
  /**
   * The revision of the worker configuration.
   *
   * @public
   */
  revision: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the worker configuration.
   *
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * Information about the capacity allocated to the connector. Exactly one of the two properties must be specified.
   *
   * @public
   */
  capacity: Capacity | undefined;

  /**
   * A map of keys to values that represent the configuration for the connector.
   *
   * @public
   */
  connectorConfiguration: Record<string, string> | undefined;

  /**
   * A summary description of the connector.
   *
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  connectorName: string | undefined;

  /**
   * Specifies which Apache Kafka cluster to connect to.
   *
   * @public
   */
  kafkaCluster: KafkaCluster | undefined;

  /**
   * Details of the client authentication used by the Apache Kafka cluster.
   *
   * @public
   */
  kafkaClusterClientAuthentication: KafkaClusterClientAuthentication | undefined;

  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  kafkaClusterEncryptionInTransit: KafkaClusterEncryptionInTransit | undefined;

  /**
   * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
   *
   * @public
   */
  kafkaConnectVersion: string | undefined;

  /**
   * Details about log delivery.
   *
   * @public
   */
  logDelivery?: LogDelivery | undefined;

  /**
   * The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * > **Important:** Amazon MSK Connect does not currently support specifying multiple plugins as a list. To use more than one plugin for your connector, you can create a single custom plugin using a ZIP file that bundles multiple plugins together.
   *
   * Specifies which plugin to use for the connector. You must specify a single-element list containing one `customPlugin` object.
   *
   * @public
   */
  plugins: Plugin[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
   *
   * @public
   */
  serviceExecutionRoleArn: string | undefined;

  /**
   * Specifies which worker configuration to use with the connector.
   *
   * @public
   */
  workerConfiguration?: WorkerConfiguration | undefined;

  /**
   * The tags you want to attach to the connector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) that Amazon assigned to the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  connectorName?: string | undefined;

  /**
   * The state of the connector.
   *
   * @public
   */
  connectorState?: ConnectorState | undefined;
}

/**
 * The location of an object in Amazon S3.
 *
 * @public
 */
export interface S3Location {
  /**
   * The Amazon Resource Name (ARN) of an S3 bucket.
   *
   * @public
   */
  bucketArn: string | undefined;

  /**
   * The file key for an object in an S3 bucket.
   *
   * @public
   */
  fileKey: string | undefined;

  /**
   * The version of an object in an S3 bucket.
   *
   * @public
   */
  objectVersion?: string | undefined;
}

/**
 * Information about the location of a custom plugin.
 *
 * @public
 */
export interface CustomPluginLocation {
  /**
   * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the plugin file stored in Amazon S3.
   *
   * @public
   */
  s3Location: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginRequest {
  /**
   * The type of the plugin file.
   *
   * @public
   */
  contentType: CustomPluginContentType | undefined;

  /**
   * A summary description of the custom plugin.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the location of a custom plugin.
   *
   * @public
   */
  location: CustomPluginLocation | undefined;

  /**
   * The name of the custom plugin.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The tags you want to attach to the custom plugin.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomPluginResponse {
  /**
   * The Amazon Resource Name (ARN) that Amazon assigned to the custom plugin.
   *
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * The state of the custom plugin.
   *
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * The name of the custom plugin.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The revision of the custom plugin.
   *
   * @public
   */
  revision?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationRequest {
  /**
   * A summary description of the worker configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the worker configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Base64 encoded contents of connect-distributed.properties file.
   *
   * @public
   */
  propertiesFileContent: string | undefined;

  /**
   * The tags you want to attach to the worker configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkerConfigurationResponse {
  /**
   * The time that the worker configuration was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The latest revision of the worker configuration.
   *
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionSummary | undefined;

  /**
   * The name of the worker configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that Amazon assigned to the worker configuration.
   *
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * The state of the worker configuration.
   *
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to delete.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * The current version of the connector that you want to delete.
   *
   * @public
   */
  currentVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector that you requested to delete.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The state of the connector that you requested to delete.
   *
   * @public
   */
  connectorState?: ConnectorState | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPluginRequest {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin that you want to delete.
   *
   * @public
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomPluginResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin that you requested to delete.
   *
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * The state of the custom plugin.
   *
   * @public
   */
  customPluginState?: CustomPluginState | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the worker configuration that you want to delete.
   *
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkerConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the worker configuration that you requested to delete.
   *
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * The state of the worker configuration.
   *
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to describe.
   *
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * Details about the state of a resource.
 *
 * @public
 */
export interface StateDescription {
  /**
   * A code that describes the state of a resource.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A message that describes the state of a resource.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorResponse {
  /**
   * Information about the capacity of the connector, whether it is auto scaled or provisioned.
   *
   * @public
   */
  capacity?: CapacityDescription | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * A map of keys to values that represent the configuration for the connector.
   *
   * @public
   */
  connectorConfiguration?: Record<string, string> | undefined;

  /**
   * A summary description of the connector.
   *
   * @public
   */
  connectorDescription?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  connectorName?: string | undefined;

  /**
   * The state of the connector.
   *
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * The time the connector was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The current version of the connector.
   *
   * @public
   */
  currentVersion?: string | undefined;

  /**
   * The Apache Kafka cluster that the connector is connected to.
   *
   * @public
   */
  kafkaCluster?: KafkaClusterDescription | undefined;

  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.
   *
   * @public
   */
  kafkaClusterClientAuthentication?: KafkaClusterClientAuthenticationDescription | undefined;

  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * @public
   */
  kafkaClusterEncryptionInTransit?: KafkaClusterEncryptionInTransitDescription | undefined;

  /**
   * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
   *
   * @public
   */
  kafkaConnectVersion?: string | undefined;

  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   *
   * @public
   */
  logDelivery?: LogDeliveryDescription | undefined;

  /**
   * The network type of the connector. It gives connectors connectivity to either IPv4 (IPV4) or IPv4 and IPv6 (DUAL) destinations. Defaults to IPV4.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * Specifies which plugins were used for this connector.
   *
   * @public
   */
  plugins?: PluginDescription[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
   *
   * @public
   */
  serviceExecutionRoleArn?: string | undefined;

  /**
   * Specifies which worker configuration was used for the connector.
   *
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription | undefined;

  /**
   * Details about the state of a connector.
   *
   * @public
   */
  stateDescription?: StateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorOperationRequest {
  /**
   * ARN of the connector operation to be described.
   *
   * @public
   */
  connectorOperationArn: string | undefined;
}

/**
 * Details about worker setting of a connector
 *
 * @public
 */
export interface WorkerSetting {
  /**
   * Specifies the compute capacity settings of the connector.
   *
   * @public
   */
  capacity?: CapacityDescription | undefined;

  /**
   * Specifies which plugins the connector uses.
   *
   * @public
   */
  plugins?: PluginDescription[] | undefined;

  /**
   * Specifies which worker configuration the connector uses.
   *
   * @public
   */
  workerConfiguration?: WorkerConfigurationDescription | undefined;

  /**
   * Specifies whether the connector uses the default worker configuration instead of a custom worker configuration.
   *
   * @public
   */
  useDefaultWorkerConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeConnectorOperationResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector operation.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;

  /**
   * The state of the connector operation.
   *
   * @public
   */
  connectorOperationState?: ConnectorOperationState | undefined;

  /**
   * The type of connector operation performed.
   *
   * @public
   */
  connectorOperationType?: ConnectorOperationType | undefined;

  /**
   * The array of operation steps taken.
   *
   * @public
   */
  operationSteps?: ConnectorOperationStep[] | undefined;

  /**
   * The origin worker setting.
   *
   * @public
   */
  originWorkerSetting?: WorkerSetting | undefined;

  /**
   * The origin connector configuration.
   *
   * @public
   */
  originConnectorConfiguration?: Record<string, string> | undefined;

  /**
   * The target worker setting.
   *
   * @public
   */
  targetWorkerSetting?: WorkerSetting | undefined;

  /**
   * The target connector configuration.
   *
   * @public
   */
  targetConnectorConfiguration?: Record<string, string> | undefined;

  /**
   * Details about the state of a resource.
   *
   * @public
   */
  errorInfo?: StateDescription | undefined;

  /**
   * The time when the operation was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The time when the operation ended.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPluginRequest {
  /**
   * Returns information about a custom plugin.
   *
   * @public
   */
  customPluginArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomPluginResponse {
  /**
   * The time that the custom plugin was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * @public
   */
  customPluginArn?: string | undefined;

  /**
   * The state of the custom plugin.
   *
   * @public
   */
  customPluginState?: CustomPluginState | undefined;

  /**
   * The description of the custom plugin.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The latest successfully created revision of the custom plugin. If there are no successfully created revisions, this field will be absent.
   *
   * @public
   */
  latestRevision?: CustomPluginRevisionSummary | undefined;

  /**
   * The name of the custom plugin.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Details about the state of a custom plugin.
   *
   * @public
   */
  stateDescription?: StateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the worker configuration that you want to get information about.
   *
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * The description of the worker configuration revision.
 *
 * @public
 */
export interface WorkerConfigurationRevisionDescription {
  /**
   * The time that the worker configuration was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The description of the worker configuration revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Base64 encoded contents of the connect-distributed.properties file.
   *
   * @public
   */
  propertiesFileContent?: string | undefined;

  /**
   * The description of a revision of the worker configuration.
   *
   * @public
   */
  revision?: number | undefined;
}

/**
 * @public
 */
export interface DescribeWorkerConfigurationResponse {
  /**
   * The time that the worker configuration was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * The description of the worker configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The latest revision of the custom configuration.
   *
   * @public
   */
  latestRevision?: WorkerConfigurationRevisionDescription | undefined;

  /**
   * The name of the worker configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom configuration.
   *
   * @public
   */
  workerConfigurationArn?: string | undefined;

  /**
   * The state of the worker configuration.
   *
   * @public
   */
  workerConfigurationState?: WorkerConfigurationState | undefined;
}

/**
 * @public
 */
export interface ListConnectorOperationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector for which to list operations.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * Maximum number of connector operations to fetch in one get request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response is truncated, it includes a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorOperationsResponse {
  /**
   * An array of connector operation descriptions.
   *
   * @public
   */
  connectorOperations?: ConnectorOperationSummary[] | undefined;

  /**
   * If the response is truncated, it includes a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsRequest {
  /**
   * The name prefix that you want to use to search for and list connectors.
   *
   * @public
   */
  connectorNamePrefix?: string | undefined;

  /**
   * The maximum number of connectors to list in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectorsResponse {
  /**
   * An array of connector descriptions.
   *
   * @public
   */
  connectors?: ConnectorSummary[] | undefined;

  /**
   * If the response of a ListConnectors operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where it left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPluginsRequest {
  /**
   * The maximum number of custom plugins to list in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Lists custom plugin names that start with the specified text string.
   *
   * @public
   */
  namePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomPluginsResponse {
  /**
   * An array of custom plugin descriptions.
   *
   * @public
   */
  customPlugins?: CustomPluginSummary[] | undefined;

  /**
   * If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to list all attached tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Lists the tags attached to the specified resource in the corresponding request.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsRequest {
  /**
   * The maximum number of worker configurations to list in one response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Lists worker configuration names that start with the specified text string.
   *
   * @public
   */
  namePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkerConfigurationsResponse {
  /**
   * If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of worker configuration descriptions.
   *
   * @public
   */
  workerConfigurations?: WorkerConfigurationSummary[] | undefined;
}

/**
 * @public
 */
export interface PauseConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to pause.
   *
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * @public
 */
export interface PauseConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector operation created to perform the pause.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface RestartConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to restart.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * Specifies whether to restart only the connector's failed tasks. If `true`, the operation restarts only the tasks that are currently in a failed state, and healthy tasks continue running. If `false` or not specified, the operation restarts the connector and all of its tasks.
   *
   * @public
   */
  onlyFailedTasks?: boolean | undefined;
}

/**
 * @public
 */
export interface RestartConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector operation created to perform the restart.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface ResumeConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector that you want to resume.
   *
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * @public
 */
export interface ResumeConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector operation created to perform the resume.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which you want to attach tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags that you want to attach to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which you want to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags that you want to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * The worker configuration to use when you update a connector via `UpdateConnector`.
 *
 * @public
 */
export interface WorkerConfigurationUpdate {
  /**
   * The revision of the worker configuration.
   *
   * @public
   */
  revision: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the worker configuration.
   *
   * @public
   */
  workerConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorRequest {
  /**
   * The target capacity.
   *
   * @public
   */
  capacity?: CapacityUpdate | undefined;

  /**
   * A map of keys to values that represent the configuration for the connector.
   *
   * @public
   */
  connectorConfiguration?: Record<string, string> | undefined;

  /**
   * Specifies whether the update bypasses connector-level and task-level health checks. If `true`, the update skips the health checks. The update stays in effect even if the connector or its tasks are unhealthy, and Amazon MSK Connect doesn't roll it back. If `false` or not specified, the health checks run. If they fail, MSK Connect automatically rolls the connector back to its previous configuration, and the update doesn't take effect. To update a connector that is in the `PAUSED` state, you must set this parameter to `true`.
   *
   * @public
   */
  skipHealthValidation?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector that you want to update.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * The current version of the connector that you want to update.
   *
   * @public
   */
  currentVersion: string | undefined;

  /**
   * > **Important:** Amazon MSK Connect does not currently support specifying multiple plugins as a list. To use more than one plugin for your connector, you can create a single custom plugin using a ZIP file that bundles multiple plugins together.
   *
   * Specifies which plugin to use for the connector. You must specify a single-element list containing one `customPlugin` object. If you don't specify this parameter, the connector keeps its current plugin.
   *
   * @public
   */
  plugins?: PluginUpdate[] | undefined;

  /**
   * The worker configuration to use with the connector. Specify the Amazon Resource Name (ARN) and the revision of the worker configuration. You can't specify both `workerConfiguration` and `useDefaultWorkerConfiguration` in the same request. If you specify neither parameter, the connector keeps its current worker configuration.
   *
   * @public
   */
  workerConfiguration?: WorkerConfigurationUpdate | undefined;

  /**
   * Specifies whether to switch the connector to the default worker configuration that Amazon MSK Connect provides. If `true`, the connector stops using its custom worker configuration and uses the default worker configuration instead. If `false` or not specified, the connector keeps its current worker configuration. You can't specify both `useDefaultWorkerConfiguration` and `workerConfiguration` in the same request.
   *
   * @public
   */
  useDefaultWorkerConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn?: string | undefined;

  /**
   * The state of the connector.
   *
   * @public
   */
  connectorState?: ConnectorState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the connector operation.
   *
   * @public
   */
  connectorOperationArn?: string | undefined;
}
