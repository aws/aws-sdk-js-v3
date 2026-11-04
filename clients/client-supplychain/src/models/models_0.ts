// smithy-typescript generated code
import type {
  ConfigurationJobStatus,
  DataIntegrationEventDatasetLoadStatus,
  DataIntegrationEventDatasetOperationType,
  DataIntegrationEventType,
  DataIntegrationFlowDedupeStrategyType,
  DataIntegrationFlowExecutionStatus,
  DataIntegrationFlowFieldPriorityDedupeSortOrder,
  DataIntegrationFlowFileType,
  DataIntegrationFlowLoadType,
  DataIntegrationFlowSourceType,
  DataIntegrationFlowTargetType,
  DataIntegrationFlowTransformationType,
  DataLakeDatasetPartitionTransformType,
  DataLakeDatasetSchemaFieldType,
  InstanceState,
} from "./enums";

/**
 * The BillOfMaterialsImportJob details.
 *
 * @public
 */
export interface BillOfMaterialsImportJob {
  /**
   * The BillOfMaterialsImportJob instanceId.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The BillOfMaterialsImportJob jobId.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The BillOfMaterialsImportJob ConfigurationJobStatus.
   *
   * @public
   */
  status: ConfigurationJobStatus | undefined;

  /**
   * The S3 URI from which the CSV is read.
   *
   * @public
   */
  s3uri: string | undefined;

  /**
   * When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The request parameters for CreateBillOfMaterialsImportJob.
 *
 * @public
 */
export interface CreateBillOfMaterialsImportJobRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file.
   *
   * @public
   */
  s3uri: string | undefined;

  /**
   * An idempotency token ensures the API request is only completed no more than once. This way, retrying the request will not trigger the operation multiple times. A client token is a unique, case-sensitive string of 33 to 128 ASCII characters. To make an idempotent API request, specify a client token in the request. You should not reuse the same client token for other requests. If you retry a successful request with the same client token, the request will succeed with no further actions being taken, and you will receive the same API response as the original successful request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The response parameters of CreateBillOfMaterialsImportJob.
 *
 * @public
 */
export interface CreateBillOfMaterialsImportJobResponse {
  /**
   * The new BillOfMaterialsImportJob identifier.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * The request parameters for GetBillOfMaterialsImportJob.
 *
 * @public
 */
export interface GetBillOfMaterialsImportJobRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The BillOfMaterialsImportJob identifier.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * The response parameters for GetBillOfMaterialsImportJob.
 *
 * @public
 */
export interface GetBillOfMaterialsImportJobResponse {
  /**
   * The BillOfMaterialsImportJob.
   *
   * @public
   */
  job: BillOfMaterialsImportJob | undefined;
}

/**
 * The field used in the field priority deduplication strategy.
 *
 * @public
 */
export interface DataIntegrationFlowFieldPriorityDedupeField {
  /**
   * The name of the deduplication field. Must exist in the dataset and not be a primary key.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The sort order for the deduplication field.
   *
   * @public
   */
  sortOrder: DataIntegrationFlowFieldPriorityDedupeSortOrder | undefined;
}

/**
 * The field priority deduplication strategy details.
 *
 * @public
 */
export interface DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration {
  /**
   * The list of field names and their sort order for deduplication, arranged in descending priority from highest to lowest.
   *
   * @public
   */
  fields: DataIntegrationFlowFieldPriorityDedupeField[] | undefined;
}

/**
 * The deduplication strategy details.
 *
 * @public
 */
export interface DataIntegrationFlowDedupeStrategy {
  /**
   * The type of the deduplication strategy.
   *
   * - **FIELD_PRIORITY** - Field priority configuration for the deduplication strategy specifies an ordered list of fields used to tie-break the data records sharing the same primary key values. Fields earlier in the list have higher priority for evaluation. For each field, the sort order determines whether to retain data record with larger or smaller field value.
   *
   * @public
   */
  type: DataIntegrationFlowDedupeStrategyType | undefined;

  /**
   * The field priority deduplication strategy.
   *
   * @public
   */
  fieldPriority?: DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration | undefined;
}

/**
 * The dataset options used in dataset source and target configurations.
 *
 * @public
 */
export interface DataIntegrationFlowDatasetOptions {
  /**
   * The target dataset's data load type. This only affects how source S3 files are selected in the S3-to-dataset flow.
   *
   * - **REPLACE** - Target dataset will get replaced with the new file added under the source s3 prefix.
   * - **INCREMENTAL** - Target dataset will get updated with the up-to-date content under S3 prefix incorporating any file additions or removals there.
   *
   * @public
   */
  loadType?: DataIntegrationFlowLoadType | undefined;

  /**
   * The option to perform deduplication on data records sharing same primary key values. If disabled, transformed data with duplicate primary key values will ingest into dataset, for datasets within **asc** namespace, such duplicates will cause ingestion fail. If enabled without dedupeStrategy, deduplication is done by retaining a random data record among those sharing the same primary key values. If enabled with dedupeStragtegy, the deduplication is done following the strategy.
   *
   * Note that target dataset may have partition configured, when dedupe is enabled, it only dedupe against primary keys and retain only one record out of those duplicates regardless of its partition status.
   *
   * @public
   */
  dedupeRecords?: boolean | undefined;

  /**
   * The deduplication strategy to dedupe the data records sharing same primary key values of the target dataset. This strategy only applies to target dataset with primary keys and with dedupeRecords option enabled. If transformed data still got duplicates after the dedupeStrategy evaluation, a random data record is chosen to be retained.
   *
   * @public
   */
  dedupeStrategy?: DataIntegrationFlowDedupeStrategy | undefined;
}

/**
 * The dataset DataIntegrationFlow source configuration parameters.
 *
 * @public
 */
export interface DataIntegrationFlowDatasetSourceConfiguration {
  /**
   * The ARN of the dataset.
   *
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * The dataset DataIntegrationFlow source options.
   *
   * @public
   */
  options?: DataIntegrationFlowDatasetOptions | undefined;
}

/**
 * The Amazon S3 options used in S3 source and target configurations.
 *
 * @public
 */
export interface DataIntegrationFlowS3Options {
  /**
   * The Amazon S3 file type in S3 options.
   *
   * @public
   */
  fileType?: DataIntegrationFlowFileType | undefined;
}

/**
 * The S3 DataIntegrationFlow source configuration parameters.
 *
 * @public
 */
export interface DataIntegrationFlowS3SourceConfiguration {
  /**
   * The bucketName of the S3 source objects.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The prefix of the S3 source objects. To trigger data ingestion, S3 files need to be put under `s3://bucketName/prefix/`.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The other options of the S3 DataIntegrationFlow source.
   *
   * @public
   */
  options?: DataIntegrationFlowS3Options | undefined;
}

/**
 * The DataIntegrationFlow source parameters.
 *
 * @public
 */
export interface DataIntegrationFlowSource {
  /**
   * The DataIntegrationFlow source type.
   *
   * @public
   */
  sourceType: DataIntegrationFlowSourceType | undefined;

  /**
   * The DataIntegrationFlow source name that can be used as table alias in SQL transformation query.
   *
   * @public
   */
  sourceName: string | undefined;

  /**
   * The S3 DataIntegrationFlow source.
   *
   * @public
   */
  s3Source?: DataIntegrationFlowS3SourceConfiguration | undefined;

  /**
   * The dataset DataIntegrationFlow source.
   *
   * @public
   */
  datasetSource?: DataIntegrationFlowDatasetSourceConfiguration | undefined;
}

/**
 * The dataset DataIntegrationFlow target configuration parameters.
 *
 * @public
 */
export interface DataIntegrationFlowDatasetTargetConfiguration {
  /**
   * The dataset ARN.
   *
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * The dataset DataIntegrationFlow target options.
   *
   * @public
   */
  options?: DataIntegrationFlowDatasetOptions | undefined;
}

/**
 * The S3 DataIntegrationFlow target configuration parameters.
 *
 * @public
 */
export interface DataIntegrationFlowS3TargetConfiguration {
  /**
   * The bucketName of the S3 target objects.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The prefix of the S3 target objects.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The S3 DataIntegrationFlow target options.
   *
   * @public
   */
  options?: DataIntegrationFlowS3Options | undefined;
}

/**
 * The DataIntegrationFlow target parameters.
 *
 * @public
 */
export interface DataIntegrationFlowTarget {
  /**
   * The DataIntegrationFlow target type.
   *
   * @public
   */
  targetType: DataIntegrationFlowTargetType | undefined;

  /**
   * The S3 DataIntegrationFlow target.
   *
   * @public
   */
  s3Target?: DataIntegrationFlowS3TargetConfiguration | undefined;

  /**
   * The dataset DataIntegrationFlow target. Note that for AWS Supply Chain dataset under **asc** namespace, it has a connection_id internal field that is not allowed to be provided by client directly, they will be auto populated.
   *
   * @public
   */
  datasetTarget?: DataIntegrationFlowDatasetTargetConfiguration | undefined;
}

/**
 * The SQL DataIntegrationFlow transformation configuration parameters.
 *
 * @public
 */
export interface DataIntegrationFlowSQLTransformationConfiguration {
  /**
   * The transformation SQL query body based on SparkSQL.
   *
   * @public
   */
  query: string | undefined;
}

/**
 * The DataIntegrationFlow transformation parameters.
 *
 * @public
 */
export interface DataIntegrationFlowTransformation {
  /**
   * The DataIntegrationFlow transformation type.
   *
   * @public
   */
  transformationType: DataIntegrationFlowTransformationType | undefined;

  /**
   * The SQL DataIntegrationFlow transformation configuration.
   *
   * @public
   */
  sqlTransformation?: DataIntegrationFlowSQLTransformationConfiguration | undefined;
}

/**
 * The request parameters for CreateDataIntegrationFlow.
 *
 * @public
 */
export interface CreateDataIntegrationFlowRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * Name of the DataIntegrationFlow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The source configurations for DataIntegrationFlow.
   *
   * @public
   */
  sources: DataIntegrationFlowSource[] | undefined;

  /**
   * The transformation configurations for DataIntegrationFlow.
   *
   * @public
   */
  transformation: DataIntegrationFlowTransformation | undefined;

  /**
   * The target configurations for DataIntegrationFlow.
   *
   * @public
   */
  target: DataIntegrationFlowTarget | undefined;

  /**
   * The tags of the DataIntegrationFlow to be created
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The response parameters for CreateDataIntegrationFlow.
 *
 * @public
 */
export interface CreateDataIntegrationFlowResponse {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the DataIntegrationFlow created.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The detail of the partition field transformation.
 *
 * @public
 */
export interface DataLakeDatasetPartitionFieldTransform {
  /**
   * The type of partitioning transformation for this field. The available options are:
   *
   * - **IDENTITY** - Partitions data on a given field by its exact values.
   * - **YEAR** - Partitions data on a timestamp field using year granularity.
   * - **MONTH** - Partitions data on a timestamp field using month granularity.
   * - **DAY** - Partitions data on a timestamp field using day granularity.
   * - **HOUR** - Partitions data on a timestamp field using hour granularity.
   *
   * @public
   */
  type: DataLakeDatasetPartitionTransformType | undefined;
}

/**
 * The detail of the partition field.
 *
 * @public
 */
export interface DataLakeDatasetPartitionField {
  /**
   * The name of the partition field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The transformation of the partition field. A transformation specifies how to partition on a given field. For example, with timestamp you can specify that you'd like to partition fields by day, e.g. data record with value 2025-01-03T00:00:00Z in partition field is in 2025-01-03 partition. Also noted that data record without any value in optional partition field is in NULL partition.
   *
   * @public
   */
  transform: DataLakeDatasetPartitionFieldTransform | undefined;
}

/**
 * The partition specification for a dataset.
 *
 * @public
 */
export interface DataLakeDatasetPartitionSpec {
  /**
   * The fields on which to partition a dataset. The partitions will be applied hierarchically based on the order of this list.
   *
   * @public
   */
  fields: DataLakeDatasetPartitionField[] | undefined;
}

/**
 * The dataset field details.
 *
 * @public
 */
export interface DataLakeDatasetSchemaField {
  /**
   * The dataset field name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The dataset field type.
   *
   * @public
   */
  type: DataLakeDatasetSchemaFieldType | undefined;

  /**
   * Indicate if the field is required or not.
   *
   * @public
   */
  isRequired: boolean | undefined;
}

/**
 * The detail of the primary key field.
 *
 * @public
 */
export interface DataLakeDatasetPrimaryKeyField {
  /**
   * The name of the primary key field.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The schema details of the dataset. Note that for AWS Supply Chain dataset under **asc** namespace, it may have internal fields like connection_id that will be auto populated by data ingestion methods.
 *
 * @public
 */
export interface DataLakeDatasetSchema {
  /**
   * The name of the dataset schema.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The list of field details of the dataset schema.
   *
   * @public
   */
  fields: DataLakeDatasetSchemaField[] | undefined;

  /**
   * The list of primary key fields for the dataset. Primary keys defined can help data ingestion methods to ensure data uniqueness: CreateDataIntegrationFlow's dedupe strategy will leverage primary keys to perform records deduplication before write to dataset; SendDataIntegrationEvent's UPSERT and DELETE can only work with dataset with primary keys. For more details, refer to those data ingestion documentations.
   *
   * Note that defining primary keys does not necessarily mean the dataset cannot have duplicate records, duplicate records can still be ingested if CreateDataIntegrationFlow's dedupe disabled or through SendDataIntegrationEvent's APPEND operation.
   *
   * @public
   */
  primaryKeys?: DataLakeDatasetPrimaryKeyField[] | undefined;
}

/**
 * The request parameters for CreateDataLakeDataset.
 *
 * @public
 */
export interface CreateDataLakeDatasetRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the dataset. For **asc** name space, the name must be one of the supported data entities under [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The custom schema of the data lake dataset and required for dataset in **default** and custom namespaces.
   *
   * @public
   */
  schema?: DataLakeDatasetSchema | undefined;

  /**
   * The description of the dataset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The partition specification of the dataset. Partitioning can effectively improve the dataset query performance by reducing the amount of data scanned during query execution. But partitioning or not will affect how data get ingested by data ingestion methods, such as SendDataIntegrationEvent's dataset UPSERT will upsert records within partition (instead of within whole dataset). For more details, refer to those data ingestion documentations.
   *
   * @public
   */
  partitionSpec?: DataLakeDatasetPartitionSpec | undefined;

  /**
   * The tags of the dataset.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The data lake dataset details.
 *
 * @public
 */
export interface DataLakeDataset {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the dataset. For **asc** namespace, the name must be one of the supported data entities under [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The arn of the dataset.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The schema of the dataset.
   *
   * @public
   */
  schema: DataLakeDatasetSchema | undefined;

  /**
   * The description of the dataset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The partition specification for a dataset.
   *
   * @public
   */
  partitionSpec?: DataLakeDatasetPartitionSpec | undefined;

  /**
   * The creation time of the dataset.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The last modified time of the dataset.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * The response parameters of CreateDataLakeDataset.
 *
 * @public
 */
export interface CreateDataLakeDatasetResponse {
  /**
   * The detail of created dataset.
   *
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * The request parameters for CreateDataLakeNamespace.
 *
 * @public
 */
export interface CreateDataLakeNamespaceRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the namespace. Noted you cannot create namespace with name starting with **asc**, **default**, **scn**, **aws**, **amazon**, **amzn**
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags of the namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The data lake namespace details.
 *
 * @public
 */
export interface DataLakeNamespace {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the namespace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The arn of the namespace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the namespace.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation time of the namespace.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The last modified time of the namespace.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * The response parameters of CreateDataLakeNamespace.
 *
 * @public
 */
export interface CreateDataLakeNamespaceResponse {
  /**
   * The detail of created namespace.
   *
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * The request parameters for CreateInstance.
 *
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * The AWS Supply Chain instance name.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The AWS Supply Chain instance description.
   *
   * @public
   */
  instanceDescription?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon Web Services owned KMS key. If you don't provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The DNS subdomain of the web app. This would be "example" in the URL "example.scn.global.on.aws". You can set this to a custom value, as long as the domain isn't already being used by someone else. The name may only include alphanumeric characters and hyphens.
   *
   * @public
   */
  webAppDnsDomain?: string | undefined;

  /**
   * The Amazon Web Services tags of an instance to be created.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The client token for idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The details of the instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the instance.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The state of the instance.
   *
   * @public
   */
  state: InstanceState | undefined;

  /**
   * The Amazon Web Services Supply Chain instance error message. If the instance results in an unhealthy state, customers need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The WebApp DNS domain name of the instance.
   *
   * @public
   */
  webAppDnsDomain?: string | undefined;

  /**
   * The instance creation timestamp.
   *
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * The instance last modified timestamp.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * The Amazon Web Services Supply Chain instance name.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The Amazon Web Services Supply Chain instance description.
   *
   * @public
   */
  instanceDescription?: string | undefined;

  /**
   * The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you optionally provided for encryption. If you did not provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key and nothing is returned.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The version number of the instance.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * The response parameters for CreateInstance.
 *
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * The AWS Supply Chain instance resource data details.
   *
   * @public
   */
  instance: Instance | undefined;
}

/**
 * The target dataset load execution details.
 *
 * @public
 */
export interface DataIntegrationEventDatasetLoadExecutionDetails {
  /**
   * The event load execution status to target dataset.
   *
   * @public
   */
  status: DataIntegrationEventDatasetLoadStatus | undefined;

  /**
   * The failure message (if any) of failed event load execution to dataset.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The target dataset details for a DATASET event type.
 *
 * @public
 */
export interface DataIntegrationEventDatasetTargetDetails {
  /**
   * The datalake dataset ARN identifier.
   *
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * The target dataset load operation type. The available options are:
   *
   * - **APPEND** - Add new records to the dataset. Noted that this operation type will just try to append records as-is without any primary key or partition constraints.
   * - **UPSERT** - Modify existing records in the dataset with primary key configured, events for datasets without primary keys are not allowed. If event data contains primary keys that match records in the dataset within same partition, then those existing records (in that partition) will be updated. If primary keys do not match, new records will be added. Note that if dataset contain records with duplicate primary key values in the same partition, those duplicate records will be deduped into one updated record.
   * - **DELETE** - Remove existing records in the dataset with primary key configured, events for datasets without primary keys are not allowed. If event data contains primary keys that match records in the dataset within same partition, then those existing records (in that partition) will be deleted. If primary keys do not match, no actions will be done. Note that if dataset contain records with duplicate primary key values in the same partition, all those duplicates will be removed.
   *
   * @public
   */
  operationType: DataIntegrationEventDatasetOperationType | undefined;

  /**
   * The target dataset load execution.
   *
   * @public
   */
  datasetLoadExecution: DataIntegrationEventDatasetLoadExecutionDetails | undefined;
}

/**
 * The data integration event details.
 *
 * @public
 */
export interface DataIntegrationEvent {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique event identifier.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The data event type.
   *
   * @public
   */
  eventType: DataIntegrationEventType | undefined;

  /**
   * Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning.
   *
   * @public
   */
  eventGroupId: string | undefined;

  /**
   * The event timestamp (in epoch seconds).
   *
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * The target dataset details for a DATASET event type.
   *
   * @public
   */
  datasetTargetDetails?: DataIntegrationEventDatasetTargetDetails | undefined;
}

/**
 * The target dataset configuration for a DATASET event type.
 *
 * @public
 */
export interface DataIntegrationEventDatasetTargetConfiguration {
  /**
   * The datalake dataset ARN identifier.
   *
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * The target dataset load operation type.
   *
   * @public
   */
  operationType: DataIntegrationEventDatasetOperationType | undefined;
}

/**
 * The DataIntegrationFlow details.
 *
 * @public
 */
export interface DataIntegrationFlow {
  /**
   * The DataIntegrationFlow instance ID.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The DataIntegrationFlow name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The DataIntegrationFlow source configurations.
   *
   * @public
   */
  sources: DataIntegrationFlowSource[] | undefined;

  /**
   * The DataIntegrationFlow transformation configurations.
   *
   * @public
   */
  transformation: DataIntegrationFlowTransformation | undefined;

  /**
   * The DataIntegrationFlow target configuration.
   *
   * @public
   */
  target: DataIntegrationFlowTarget | undefined;

  /**
   * The DataIntegrationFlow creation timestamp.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The DataIntegrationFlow last modified timestamp.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * The details of a flow execution with dataset source.
 *
 * @public
 */
export interface DataIntegrationFlowDatasetSource {
  /**
   * The ARN of the dataset source.
   *
   * @public
   */
  datasetIdentifier: string | undefined;
}

/**
 * The output metadata of the flow execution.
 *
 * @public
 */
export interface DataIntegrationFlowExecutionOutputMetadata {
  /**
   * The S3 URI under which all diagnostic files (such as deduped records if any) are stored.
   *
   * @public
   */
  diagnosticReportsRootS3URI?: string | undefined;
}

/**
 * The details of a flow execution with S3 source.
 *
 * @public
 */
export interface DataIntegrationFlowS3Source {
  /**
   * The S3 bucket name of the S3 source.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The S3 object key of the S3 source.
   *
   * @public
   */
  key: string | undefined;
}

/**
 * The source information of a flow execution.
 *
 * @public
 */
export interface DataIntegrationFlowExecutionSourceInfo {
  /**
   * The data integration flow execution source type.
   *
   * @public
   */
  sourceType: DataIntegrationFlowSourceType | undefined;

  /**
   * The source details of a flow execution with S3 source.
   *
   * @public
   */
  s3Source?: DataIntegrationFlowS3Source | undefined;

  /**
   * The source details of a flow execution with dataset source.
   *
   * @public
   */
  datasetSource?: DataIntegrationFlowDatasetSource | undefined;
}

/**
 * The flow execution details.
 *
 * @public
 */
export interface DataIntegrationFlowExecution {
  /**
   * The flow execution's instanceId.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The flow execution's flowName.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * The flow executionId.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The status of flow execution.
   *
   * @public
   */
  status?: DataIntegrationFlowExecutionStatus | undefined;

  /**
   * The source information for a flow execution.
   *
   * @public
   */
  sourceInfo?: DataIntegrationFlowExecutionSourceInfo | undefined;

  /**
   * The failure message (if any) of failed flow execution.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The flow execution start timestamp.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The flow execution end timestamp.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The flow execution output metadata.
   *
   * @public
   */
  outputMetadata?: DataIntegrationFlowExecutionOutputMetadata | undefined;
}

/**
 * The request parameters for DeleteDataIntegrationFlow.
 *
 * @public
 */
export interface DeleteDataIntegrationFlowRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the DataIntegrationFlow to be deleted.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters for DeleteDataIntegrationFlow.
 *
 * @public
 */
export interface DeleteDataIntegrationFlowResponse {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the DataIntegrationFlow deleted.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The request parameters for GetDataIntegrationFlow.
 *
 * @public
 */
export interface GetDataIntegrationFlowRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the DataIntegrationFlow created.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters for GetDataIntegrationFlow.
 *
 * @public
 */
export interface GetDataIntegrationFlowResponse {
  /**
   * The details of the DataIntegrationFlow returned.
   *
   * @public
   */
  flow: DataIntegrationFlow | undefined;
}

/**
 * The request parameters for ListDataIntegrationFlows.
 *
 * @public
 */
export interface ListDataIntegrationFlowsRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The pagination token to fetch the next page of the DataIntegrationFlows.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specify the maximum number of DataIntegrationFlows to fetch in one paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response parameters for ListDataIntegrationFlows.
 *
 * @public
 */
export interface ListDataIntegrationFlowsResponse {
  /**
   * The response parameters for ListDataIntegrationFlows.
   *
   * @public
   */
  flows: DataIntegrationFlow[] | undefined;

  /**
   * The pagination token to fetch the next page of the DataIntegrationFlows.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters for UpdateDataIntegrationFlow.
 *
 * @public
 */
export interface UpdateDataIntegrationFlowRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the DataIntegrationFlow to be updated.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new source configurations for the DataIntegrationFlow.
   *
   * @public
   */
  sources?: DataIntegrationFlowSource[] | undefined;

  /**
   * The new transformation configurations for the DataIntegrationFlow.
   *
   * @public
   */
  transformation?: DataIntegrationFlowTransformation | undefined;

  /**
   * The new target configurations for the DataIntegrationFlow.
   *
   * @public
   */
  target?: DataIntegrationFlowTarget | undefined;
}

/**
 * The response parameters for UpdateDataIntegrationFlow.
 *
 * @public
 */
export interface UpdateDataIntegrationFlowResponse {
  /**
   * The details of the updated DataIntegrationFlow.
   *
   * @public
   */
  flow: DataIntegrationFlow | undefined;
}

/**
 * The request parameters of DeleteDataLakeDataset.
 *
 * @public
 */
export interface DeleteDataLakeDatasetRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the dataset. For **asc** namespace, the name must be one of the supported data entities under [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters of DeleteDataLakeDataset.
 *
 * @public
 */
export interface DeleteDataLakeDatasetResponse {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of deleted dataset.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of deleted dataset.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The request parameters for GetDataLakeDataset.
 *
 * @public
 */
export interface GetDataLakeDatasetRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the dataset. For **asc** namespace, the name must be one of the supported data entities under [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters for GetDataLakeDataset.
 *
 * @public
 */
export interface GetDataLakeDatasetResponse {
  /**
   * The fetched dataset details.
   *
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * The request parameters of ListDataLakeDatasets.
 *
 * @public
 */
export interface ListDataLakeDatasetsRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The pagination token to fetch next page of datasets.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The max number of datasets to fetch in this paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response parameters of ListDataLakeDatasets.
 *
 * @public
 */
export interface ListDataLakeDatasetsResponse {
  /**
   * The list of fetched dataset details.
   *
   * @public
   */
  datasets: DataLakeDataset[] | undefined;

  /**
   * The pagination token to fetch next page of datasets.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters of UpdateDataLakeDataset.
 *
 * @public
 */
export interface UpdateDataLakeDatasetRequest {
  /**
   * The Amazon Web Services Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:
   *
   * - **asc** - For information on the Amazon Web Services Supply Chain supported datasets see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - For datasets with custom user-defined schemas.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the dataset. For **asc** namespace, the name must be one of the supported data entities under [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description of the data lake dataset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The response parameters of UpdateDataLakeDataset.
 *
 * @public
 */
export interface UpdateDataLakeDatasetResponse {
  /**
   * The updated dataset details.
   *
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * The request parameters of DeleteDataLakeNamespace.
 *
 * @public
 */
export interface DeleteDataLakeNamespaceRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the namespace. Noted you cannot delete pre-defined namespace like **asc**, **default** which are only deleted through instance deletion.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters of DeleteDataLakeNamespace.
 *
 * @public
 */
export interface DeleteDataLakeNamespaceResponse {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of deleted namespace.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The request parameters for GetDataLakeNamespace.
 *
 * @public
 */
export interface GetDataLakeNamespaceRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the namespace. Besides the namespaces user created, you can also specify the pre-defined namespaces:
   *
   * - **asc** - Pre-defined namespace containing Amazon Web Services Supply Chain supported datasets, see [https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html).
   * - **default** - Pre-defined namespace containing datasets with custom user-defined schemas.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The response parameters for GetDataLakeNamespace.
 *
 * @public
 */
export interface GetDataLakeNamespaceResponse {
  /**
   * The fetched namespace details.
   *
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * The request parameters of ListDataLakeNamespaces.
 *
 * @public
 */
export interface ListDataLakeNamespacesRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The pagination token to fetch next page of namespaces.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The max number of namespaces to fetch in this paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response parameters of ListDataLakeNamespaces.
 *
 * @public
 */
export interface ListDataLakeNamespacesResponse {
  /**
   * The list of fetched namespace details. Noted it only contains custom namespaces, pre-defined namespaces are not included.
   *
   * @public
   */
  namespaces: DataLakeNamespace[] | undefined;

  /**
   * The pagination token to fetch next page of namespaces.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters of UpdateDataLakeNamespace.
 *
 * @public
 */
export interface UpdateDataLakeNamespaceRequest {
  /**
   * The Amazon Web Services Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The name of the namespace. Noted you cannot update namespace with name starting with **asc**, **default**, **scn**, **aws**, **amazon**, **amzn**
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description of the data lake namespace.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The response parameters of UpdateDataLakeNamespace.
 *
 * @public
 */
export interface UpdateDataLakeNamespaceResponse {
  /**
   * The updated namespace details.
   *
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * The request parameters for DeleteInstance.
 *
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;
}

/**
 * The response parameters for DeleteInstance.
 *
 * @public
 */
export interface DeleteInstanceResponse {
  /**
   * The AWS Supply Chain instance resource data details.
   *
   * @public
   */
  instance: Instance | undefined;
}

/**
 * The request parameters for GetDataIntegrationEvent.
 *
 * @public
 */
export interface GetDataIntegrationEventRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The unique event identifier.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * The response parameters for GetDataIntegrationEvent.
 *
 * @public
 */
export interface GetDataIntegrationEventResponse {
  /**
   * The details of the DataIntegrationEvent returned.
   *
   * @public
   */
  event: DataIntegrationEvent | undefined;
}

/**
 * The request parameters of GetFlowExecution.
 *
 * @public
 */
export interface GetDataIntegrationFlowExecutionRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The flow name.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * The flow execution identifier.
   *
   * @public
   */
  executionId: string | undefined;
}

/**
 * The response parameters of GetFlowExecution.
 *
 * @public
 */
export interface GetDataIntegrationFlowExecutionResponse {
  /**
   * The flow execution details.
   *
   * @public
   */
  flowExecution: DataIntegrationFlowExecution | undefined;
}

/**
 * The request parameters for GetInstance.
 *
 * @public
 */
export interface GetInstanceRequest {
  /**
   * The AWS Supply Chain instance identifier
   *
   * @public
   */
  instanceId: string | undefined;
}

/**
 * The response parameters for GetInstance.
 *
 * @public
 */
export interface GetInstanceResponse {
  /**
   * The instance resource data details.
   *
   * @public
   */
  instance: Instance | undefined;
}

/**
 * The request parameters for ListInstances.
 *
 * @public
 */
export interface ListInstancesRequest {
  /**
   * The pagination token to fetch the next page of instances.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specify the maximum number of instances to fetch in this paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The filter to ListInstances based on their names.
   *
   * @public
   */
  instanceNameFilter?: string[] | undefined;

  /**
   * The filter to ListInstances based on their state.
   *
   * @public
   */
  instanceStateFilter?: InstanceState[] | undefined;
}

/**
 * The response parameters for ListInstances.
 *
 * @public
 */
export interface ListInstancesResponse {
  /**
   * The list of instances resource data details.
   *
   * @public
   */
  instances: Instance[] | undefined;

  /**
   * The pagination token to fetch the next page of instances.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters for UpdateInstance.
 *
 * @public
 */
export interface UpdateInstanceRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The AWS Supply Chain instance name.
   *
   * @public
   */
  instanceName?: string | undefined;

  /**
   * The AWS Supply Chain instance description.
   *
   * @public
   */
  instanceDescription?: string | undefined;
}

/**
 * The response parameters for UpdateInstance.
 *
 * @public
 */
export interface UpdateInstanceResponse {
  /**
   * The instance resource data details.
   *
   * @public
   */
  instance: Instance | undefined;
}

/**
 * The request parameters for ListDataIntegrationEvents.
 *
 * @public
 */
export interface ListDataIntegrationEventsRequest {
  /**
   * The Amazon Web Services Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * List data integration events for the specified eventType.
   *
   * @public
   */
  eventType?: DataIntegrationEventType | undefined;

  /**
   * The pagination token to fetch the next page of the data integration events.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specify the maximum number of data integration events to fetch in one paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response parameters for ListDataIntegrationEvents.
 *
 * @public
 */
export interface ListDataIntegrationEventsResponse {
  /**
   * The list of data integration events.
   *
   * @public
   */
  events: DataIntegrationEvent[] | undefined;

  /**
   * The pagination token to fetch the next page of the ListDataIntegrationEvents.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters of ListFlowExecutions.
 *
 * @public
 */
export interface ListDataIntegrationFlowExecutionsRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The flow name.
   *
   * @public
   */
  flowName: string | undefined;

  /**
   * The pagination token to fetch next page of flow executions.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The number to specify the max number of flow executions to fetch in this paginated request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The response parameters of ListFlowExecutions.
 *
 * @public
 */
export interface ListDataIntegrationFlowExecutionsResponse {
  /**
   * The list of flow executions.
   *
   * @public
   */
  flowExecutions: DataIntegrationFlowExecution[] | undefined;

  /**
   * The pagination token to fetch next page of flow executions.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request parameters of ListTagsForResource.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Web Services Supply chain resource ARN that needs tags to be listed.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * The response parameters of ListTagsForResource.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags added to an Amazon Web Services Supply Chain resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The request parameters for SendDataIntegrationEvent.
 *
 * @public
 */
export interface SendDataIntegrationEventRequest {
  /**
   * The AWS Supply Chain instance identifier.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The data event type.
   *
   * - **scn.data.dataset** - Send data directly to any specified dataset.
   * - **scn.data.supplyplan** - Send data to [supply_plan](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/supply-plan-entity.html) dataset.
   * - **scn.data.shipmentstoporder** - Send data to [shipment_stop_order](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-stop-order-entity.html) dataset.
   * - **scn.data.shipmentstop** - Send data to [shipment_stop](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-stop-entity.html) dataset.
   * - **scn.data.shipment** - Send data to [shipment](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-entity.html) dataset.
   * - **scn.data.reservation** - Send data to [reservation](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/planning-reservation-entity.html) dataset.
   * - **scn.data.processproduct** - Send data to [process_product](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-product-entity.html) dataset.
   * - **scn.data.processoperation** - Send data to [process_operation](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-operation-entity.html) dataset.
   * - **scn.data.processheader** - Send data to [process_header](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-header-entity.html) dataset.
   * - **scn.data.forecast** - Send data to [forecast](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/forecast-forecast-entity.html) dataset.
   * - **scn.data.inventorylevel** - Send data to [inv_level](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/inventory_mgmnt-inv-level-entity.html) dataset.
   * - **scn.data.inboundorder** - Send data to [inbound_order](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-entity.html) dataset.
   * - **scn.data.inboundorderline** - Send data to [inbound_order_line](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-line-entity.html) dataset.
   * - **scn.data.inboundorderlineschedule** - Send data to [inbound_order_line_schedule](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-line-schedule-entity.html) dataset.
   * - **scn.data.outboundorderline** - Send data to [outbound_order_line](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/outbound-fulfillment-order-line-entity.html) dataset.
   * - **scn.data.outboundshipment** - Send data to [outbound_shipment](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/outbound-fulfillment-shipment-entity.html) dataset.
   *
   * @public
   */
  eventType: DataIntegrationEventType | undefined;

  /**
   * The data payload of the event, should follow the data schema of the target dataset, or see [Data entities supported in AWS Supply Chain](https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html). To send single data record, use JsonObject format; to send multiple data records, use JsonArray format.
   *
   * Note that for AWS Supply Chain dataset under **asc** namespace, it has a connection_id internal field that is not allowed to be provided by client directly, they will be auto populated.
   *
   * @public
   */
  data: string | undefined;

  /**
   * Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning. Noted under one eventGroupId of same eventType and instanceId, events are processed sequentially in the order they are received by the server.
   *
   * @public
   */
  eventGroupId: string | undefined;

  /**
   * The timestamp (in epoch seconds) associated with the event. If not provided, it will be assigned with current timestamp.
   *
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * The idempotent client token. The token is active for 8 hours, and within its lifetime, it ensures the request completes only once upon retry with same client token. If omitted, the AWS SDK generates a unique value so that AWS SDK can safely retry the request upon network errors.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The target dataset configuration for **scn.data.dataset** event type.
   *
   * @public
   */
  datasetTarget?: DataIntegrationEventDatasetTargetConfiguration | undefined;
}

/**
 * The response parameters for SendDataIntegrationEvent.
 *
 * @public
 */
export interface SendDataIntegrationEventResponse {
  /**
   * The unique event identifier.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * The request parameters of TagResource.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Web Services Supply chain resource ARN that needs to be tagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags of the Amazon Web Services Supply chain resource to be created.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The response parameters for TagResource.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * The request parameters of UntagResource.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Web Services Supply chain resource ARN that needs to be untagged.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to be deleted for an Amazon Web Services Supply Chain resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * The response parameters of UntagResource.
 *
 * @public
 */
export interface UntagResourceResponse {}
