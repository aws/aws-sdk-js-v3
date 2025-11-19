// smithy-typescript generated code
import {
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
 * <p>The BillOfMaterialsImportJob details.</p>
 * @public
 */
export interface BillOfMaterialsImportJob {
  /**
   * <p>The BillOfMaterialsImportJob instanceId.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob jobId.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob ConfigurationJobStatus.</p>
   * @public
   */
  status: ConfigurationJobStatus | undefined;

  /**
   * <p>The S3 URI from which the CSV is read.</p>
   * @public
   */
  s3uri: string | undefined;

  /**
   * <p>When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The request parameters for CreateBillOfMaterialsImportJob.</p>
 * @public
 */
export interface CreateBillOfMaterialsImportJobRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file.</p>
   * @public
   */
  s3uri: string | undefined;

  /**
   * <p>An idempotency token ensures the API request is only completed no more than once. This way, retrying the request will not trigger the operation multiple times. A client token is a unique, case-sensitive string of 33 to 128 ASCII characters. To make an idempotent API request, specify a client token in the request. You should not reuse the same client token for other requests. If you retry a successful request with the same client token, the request will succeed with no further actions being taken, and you will receive the same API response as the original successful request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The response parameters of CreateBillOfMaterialsImportJob.</p>
 * @public
 */
export interface CreateBillOfMaterialsImportJobResponse {
  /**
   * <p>The new BillOfMaterialsImportJob identifier.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>The request parameters for GetBillOfMaterialsImportJob.</p>
 * @public
 */
export interface GetBillOfMaterialsImportJobRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob identifier.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>The response parameters for GetBillOfMaterialsImportJob.</p>
 * @public
 */
export interface GetBillOfMaterialsImportJobResponse {
  /**
   * <p>The BillOfMaterialsImportJob.</p>
   * @public
   */
  job: BillOfMaterialsImportJob | undefined;
}

/**
 * <p>The field used in the field priority deduplication strategy.</p>
 * @public
 */
export interface DataIntegrationFlowFieldPriorityDedupeField {
  /**
   * <p>The name of the deduplication field. Must exist in the dataset and not be a primary key.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The sort order for the deduplication field.</p>
   * @public
   */
  sortOrder: DataIntegrationFlowFieldPriorityDedupeSortOrder | undefined;
}

/**
 * <p>The field priority deduplication strategy details.</p>
 * @public
 */
export interface DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration {
  /**
   * <p>The list of field names and their sort order for deduplication, arranged in descending priority from highest to lowest.</p>
   * @public
   */
  fields: DataIntegrationFlowFieldPriorityDedupeField[] | undefined;
}

/**
 * <p>The deduplication strategy details.</p>
 * @public
 */
export interface DataIntegrationFlowDedupeStrategy {
  /**
   * <p>The type of the deduplication strategy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>FIELD_PRIORITY</b> - Field priority configuration for the deduplication strategy specifies an ordered list of fields used to tie-break the data records sharing the same primary key values. Fields earlier in the list have higher priority for evaluation. For each field, the sort order determines whether to retain data record with larger or smaller field value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: DataIntegrationFlowDedupeStrategyType | undefined;

  /**
   * <p>The field priority deduplication strategy.</p>
   * @public
   */
  fieldPriority?: DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration | undefined;
}

/**
 * <p>The dataset options used in dataset source and target configurations.</p>
 * @public
 */
export interface DataIntegrationFlowDatasetOptions {
  /**
   * <p>The target dataset's data load type. This only affects how source S3 files are selected in the S3-to-dataset flow.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>REPLACE</b> - Target dataset will get replaced with the new file added under the source s3 prefix.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INCREMENTAL</b> - Target dataset will get updated with the up-to-date content under S3 prefix incorporating any file additions or removals there.</p>
   *             </li>
   *          </ul>
   * @public
   */
  loadType?: DataIntegrationFlowLoadType | undefined;

  /**
   * <p>The option to perform deduplication on data records sharing same primary key values. If disabled, transformed data with duplicate primary key values will ingest into dataset, for datasets within <b>asc</b> namespace, such duplicates will cause ingestion fail. If enabled without dedupeStrategy, deduplication is done by retaining a random data record among those sharing the same primary key values. If enabled with dedupeStragtegy, the deduplication is done following the strategy.</p>
   *          <p>Note that target dataset may have partition configured, when dedupe is enabled, it only dedupe against primary keys and retain only one record out of those duplicates regardless of its partition status.</p>
   * @public
   */
  dedupeRecords?: boolean | undefined;

  /**
   * <p>The deduplication strategy to dedupe the data records sharing same primary key values of the target dataset. This strategy only applies to target dataset with primary keys and with dedupeRecords option enabled. If transformed data still got duplicates after the dedupeStrategy evaluation, a random data record is chosen to be retained.</p>
   * @public
   */
  dedupeStrategy?: DataIntegrationFlowDedupeStrategy | undefined;
}

/**
 * <p>The dataset DataIntegrationFlow source configuration parameters.</p>
 * @public
 */
export interface DataIntegrationFlowDatasetSourceConfiguration {
  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * <p>The dataset DataIntegrationFlow source options.</p>
   * @public
   */
  options?: DataIntegrationFlowDatasetOptions | undefined;
}

/**
 * <p>The Amazon S3 options used in S3 source and target configurations.</p>
 * @public
 */
export interface DataIntegrationFlowS3Options {
  /**
   * <p>The Amazon S3 file type in S3 options.</p>
   * @public
   */
  fileType?: DataIntegrationFlowFileType | undefined;
}

/**
 * <p>The S3 DataIntegrationFlow source configuration parameters.</p>
 * @public
 */
export interface DataIntegrationFlowS3SourceConfiguration {
  /**
   * <p>The bucketName of the S3 source objects.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 source objects. To trigger data ingestion, S3 files need to be put under <code>s3://<i>bucketName</i>/<i>prefix</i>/</code>.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The other options of the S3 DataIntegrationFlow source.</p>
   * @public
   */
  options?: DataIntegrationFlowS3Options | undefined;
}

/**
 * <p>The DataIntegrationFlow source parameters.</p>
 * @public
 */
export interface DataIntegrationFlowSource {
  /**
   * <p>The DataIntegrationFlow source type.</p>
   * @public
   */
  sourceType: DataIntegrationFlowSourceType | undefined;

  /**
   * <p>The DataIntegrationFlow source name that can be used as table alias in SQL transformation query.</p>
   * @public
   */
  sourceName: string | undefined;

  /**
   * <p>The S3 DataIntegrationFlow source.</p>
   * @public
   */
  s3Source?: DataIntegrationFlowS3SourceConfiguration | undefined;

  /**
   * <p>The dataset DataIntegrationFlow source.</p>
   * @public
   */
  datasetSource?: DataIntegrationFlowDatasetSourceConfiguration | undefined;
}

/**
 * <p>The dataset DataIntegrationFlow target configuration parameters.</p>
 * @public
 */
export interface DataIntegrationFlowDatasetTargetConfiguration {
  /**
   * <p>The dataset ARN.</p>
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * <p>The dataset DataIntegrationFlow target options.</p>
   * @public
   */
  options?: DataIntegrationFlowDatasetOptions | undefined;
}

/**
 * <p>The S3 DataIntegrationFlow target configuration parameters.</p>
 * @public
 */
export interface DataIntegrationFlowS3TargetConfiguration {
  /**
   * <p>The bucketName of the S3 target objects.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the S3 target objects.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The S3 DataIntegrationFlow target options.</p>
   * @public
   */
  options?: DataIntegrationFlowS3Options | undefined;
}

/**
 * <p>The DataIntegrationFlow target parameters.</p>
 * @public
 */
export interface DataIntegrationFlowTarget {
  /**
   * <p>The DataIntegrationFlow target type.</p>
   * @public
   */
  targetType: DataIntegrationFlowTargetType | undefined;

  /**
   * <p>The S3 DataIntegrationFlow target.</p>
   * @public
   */
  s3Target?: DataIntegrationFlowS3TargetConfiguration | undefined;

  /**
   * <p>The dataset DataIntegrationFlow target. Note that for AWS Supply Chain dataset under <b>asc</b> namespace, it has a connection_id internal field that is not allowed to be provided by client directly, they will be auto populated.</p>
   * @public
   */
  datasetTarget?: DataIntegrationFlowDatasetTargetConfiguration | undefined;
}

/**
 * <p>The SQL DataIntegrationFlow transformation configuration parameters.</p>
 * @public
 */
export interface DataIntegrationFlowSQLTransformationConfiguration {
  /**
   * <p>The transformation SQL query body based on SparkSQL.</p>
   * @public
   */
  query: string | undefined;
}

/**
 * <p>The DataIntegrationFlow transformation parameters.</p>
 * @public
 */
export interface DataIntegrationFlowTransformation {
  /**
   * <p>The DataIntegrationFlow transformation type.</p>
   * @public
   */
  transformationType: DataIntegrationFlowTransformationType | undefined;

  /**
   * <p>The SQL DataIntegrationFlow transformation configuration.</p>
   * @public
   */
  sqlTransformation?: DataIntegrationFlowSQLTransformationConfiguration | undefined;
}

/**
 * <p>The request parameters for CreateDataIntegrationFlow.</p>
 * @public
 */
export interface CreateDataIntegrationFlowRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>Name of the DataIntegrationFlow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The source configurations for DataIntegrationFlow.</p>
   * @public
   */
  sources: DataIntegrationFlowSource[] | undefined;

  /**
   * <p>The transformation configurations for DataIntegrationFlow.</p>
   * @public
   */
  transformation: DataIntegrationFlowTransformation | undefined;

  /**
   * <p>The target configurations for DataIntegrationFlow.</p>
   * @public
   */
  target: DataIntegrationFlowTarget | undefined;

  /**
   * <p>The tags of the DataIntegrationFlow to be created</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The response parameters for CreateDataIntegrationFlow.</p>
 * @public
 */
export interface CreateDataIntegrationFlowResponse {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the DataIntegrationFlow created.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The detail of the partition field transformation.</p>
 * @public
 */
export interface DataLakeDatasetPartitionFieldTransform {
  /**
   * <p>The type of partitioning transformation for this field. The available options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>IDENTITY</b> - Partitions data on a given field by its exact values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>YEAR</b> - Partitions data on a timestamp field using year granularity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>MONTH</b> - Partitions data on a timestamp field using month granularity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DAY</b> - Partitions data on a timestamp field using day granularity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>HOUR</b> - Partitions data on a timestamp field using hour granularity.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: DataLakeDatasetPartitionTransformType | undefined;
}

/**
 * <p>The detail of the partition field.</p>
 * @public
 */
export interface DataLakeDatasetPartitionField {
  /**
   * <p>The name of the partition field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The transformation of the partition field. A transformation specifies how to partition on a given field. For example, with timestamp you can specify that you'd like to partition fields by day, e.g. data record with value 2025-01-03T00:00:00Z in partition field is in 2025-01-03 partition. Also noted that data record without any value in optional partition field is in NULL partition.</p>
   * @public
   */
  transform: DataLakeDatasetPartitionFieldTransform | undefined;
}

/**
 * <p>The partition specification for a dataset.</p>
 * @public
 */
export interface DataLakeDatasetPartitionSpec {
  /**
   * <p>The fields on which to partition a dataset. The partitions will be applied hierarchically based on the order of this list.</p>
   * @public
   */
  fields: DataLakeDatasetPartitionField[] | undefined;
}

/**
 * <p>The dataset field details.</p>
 * @public
 */
export interface DataLakeDatasetSchemaField {
  /**
   * <p>The dataset field name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The dataset field type.</p>
   * @public
   */
  type: DataLakeDatasetSchemaFieldType | undefined;

  /**
   * <p>Indicate if the field is required or not.</p>
   * @public
   */
  isRequired: boolean | undefined;
}

/**
 * <p>The detail of the primary key field.</p>
 * @public
 */
export interface DataLakeDatasetPrimaryKeyField {
  /**
   * <p>The name of the primary key field.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The schema details of the dataset. Note that for AWS Supply Chain dataset under <b>asc</b> namespace, it may have internal fields like connection_id that will be auto populated by data ingestion methods.</p>
 * @public
 */
export interface DataLakeDatasetSchema {
  /**
   * <p>The name of the dataset schema.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The list of field details of the dataset schema.</p>
   * @public
   */
  fields: DataLakeDatasetSchemaField[] | undefined;

  /**
   * <p>The list of primary key fields for the dataset. Primary keys defined can help data ingestion methods to ensure data uniqueness: CreateDataIntegrationFlow's dedupe strategy will leverage primary keys to perform records deduplication before write to dataset; SendDataIntegrationEvent's UPSERT and DELETE can only work with dataset with primary keys. For more details, refer to those data ingestion documentations.</p>
   *          <p>Note that defining primary keys does not necessarily mean the dataset cannot have duplicate records, duplicate records can still be ingested if CreateDataIntegrationFlow's dedupe disabled or through SendDataIntegrationEvent's APPEND operation.</p>
   * @public
   */
  primaryKeys?: DataLakeDatasetPrimaryKeyField[] | undefined;
}

/**
 * <p>The request parameters for CreateDataLakeDataset.</p>
 * @public
 */
export interface CreateDataLakeDatasetRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. For <b>asc</b> name space, the name must be one of the supported data entities under <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The custom schema of the data lake dataset and required for dataset in <b>default</b> and custom namespaces.</p>
   * @public
   */
  schema?: DataLakeDatasetSchema | undefined;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The partition specification of the dataset. Partitioning can effectively improve the dataset query performance by reducing the amount of data scanned during query execution. But partitioning or not will affect how data get ingested by data ingestion methods, such as SendDataIntegrationEvent's dataset UPSERT will upsert records within partition (instead of within whole dataset). For more details, refer to those data ingestion documentations.</p>
   * @public
   */
  partitionSpec?: DataLakeDatasetPartitionSpec | undefined;

  /**
   * <p>The tags of the dataset.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The data lake dataset details.</p>
 * @public
 */
export interface DataLakeDataset {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. For <b>asc</b> namespace, the name must be one of the supported data entities under <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The arn of the dataset.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The schema of the dataset.</p>
   * @public
   */
  schema: DataLakeDatasetSchema | undefined;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The partition specification for a dataset.</p>
   * @public
   */
  partitionSpec?: DataLakeDatasetPartitionSpec | undefined;

  /**
   * <p>The creation time of the dataset.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The last modified time of the dataset.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * <p>The response parameters of CreateDataLakeDataset.</p>
 * @public
 */
export interface CreateDataLakeDatasetResponse {
  /**
   * <p>The detail of created dataset.</p>
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * <p>The request parameters for CreateDataLakeNamespace.</p>
 * @public
 */
export interface CreateDataLakeNamespaceRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the namespace. Noted you cannot create namespace with name starting with <b>asc</b>, <b>default</b>, <b>scn</b>, <b>aws</b>, <b>amazon</b>, <b>amzn</b>
   *          </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags of the namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The data lake namespace details.</p>
 * @public
 */
export interface DataLakeNamespace {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The arn of the namespace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the namespace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation time of the namespace.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The last modified time of the namespace.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * <p>The response parameters of CreateDataLakeNamespace.</p>
 * @public
 */
export interface CreateDataLakeNamespaceResponse {
  /**
   * <p>The detail of created namespace.</p>
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * <p>The request parameters for CreateInstance.</p>
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * <p>The AWS Supply Chain instance name.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The AWS Supply Chain instance description.</p>
   * @public
   */
  instanceDescription?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon Web Services owned KMS key. If you don't provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The DNS subdomain of the web app. This would be "example" in the URL "example.scn.global.on.aws". You can set this to a custom value, as long as the domain isn't already being used by someone else. The name may only include alphanumeric characters and hyphens.</p>
   * @public
   */
  webAppDnsDomain?: string | undefined;

  /**
   * <p>The Amazon Web Services tags of an instance to be created.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The client token for idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The details of the instance.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the instance.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  state: InstanceState | undefined;

  /**
   * <p>The Amazon Web Services Supply Chain instance error message. If the instance results in an unhealthy state, customers need to check the error message, delete the current instance, and recreate a new one based on the mitigation from the error message.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The WebApp DNS domain name of the instance.</p>
   * @public
   */
  webAppDnsDomain?: string | undefined;

  /**
   * <p>The instance creation timestamp.</p>
   * @public
   */
  createdTime?: Date | undefined;

  /**
   * <p>The instance last modified timestamp.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Supply Chain instance name.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The Amazon Web Services Supply Chain instance description.</p>
   * @public
   */
  instanceDescription?: string | undefined;

  /**
   * <p>The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you optionally provided for encryption. If you did not provide anything here, AWS Supply Chain uses the Amazon Web Services owned KMS key and nothing is returned.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The version number of the instance.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * <p>The response parameters for CreateInstance.</p>
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * <p>The AWS Supply Chain instance resource data details.</p>
   * @public
   */
  instance: Instance | undefined;
}

/**
 * <p>The target dataset load execution details.</p>
 * @public
 */
export interface DataIntegrationEventDatasetLoadExecutionDetails {
  /**
   * <p>The event load execution status to target dataset.</p>
   * @public
   */
  status: DataIntegrationEventDatasetLoadStatus | undefined;

  /**
   * <p>The failure message (if any) of failed event load execution to dataset.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>The target dataset details for a DATASET event type.</p>
 * @public
 */
export interface DataIntegrationEventDatasetTargetDetails {
  /**
   * <p>The datalake dataset ARN identifier.</p>
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * <p>The target dataset load operation type. The available options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>APPEND</b> - Add new records to the dataset. Noted that this operation type will just try to append records as-is without any primary key or partition constraints.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPSERT</b> - Modify existing records in the dataset with primary key configured, events for datasets without primary keys are not allowed. If event data contains primary keys that match records in the dataset within same partition, then those existing records (in that partition) will be updated. If primary keys do not match, new records will be added. Note that if dataset contain records with duplicate primary key values in the same partition, those duplicate records will be deduped into one updated record.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETE</b> - Remove existing records in the dataset with primary key configured, events for datasets without primary keys are not allowed. If event data contains primary keys that match records in the dataset within same partition, then those existing records (in that partition) will be deleted. If primary keys do not match, no actions will be done. Note that if dataset contain records with duplicate primary key values in the same partition, all those duplicates will be removed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  operationType: DataIntegrationEventDatasetOperationType | undefined;

  /**
   * <p>The target dataset load execution.</p>
   * @public
   */
  datasetLoadExecution: DataIntegrationEventDatasetLoadExecutionDetails | undefined;
}

/**
 * <p>The data integration event details.</p>
 * @public
 */
export interface DataIntegrationEvent {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique event identifier.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The data event type.</p>
   * @public
   */
  eventType: DataIntegrationEventType | undefined;

  /**
   * <p>Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning.</p>
   * @public
   */
  eventGroupId: string | undefined;

  /**
   * <p>The event timestamp (in epoch seconds).</p>
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * <p>The target dataset details for a DATASET event type.</p>
   * @public
   */
  datasetTargetDetails?: DataIntegrationEventDatasetTargetDetails | undefined;
}

/**
 * <p>The target dataset configuration for a DATASET event type.</p>
 * @public
 */
export interface DataIntegrationEventDatasetTargetConfiguration {
  /**
   * <p>The datalake dataset ARN identifier.</p>
   * @public
   */
  datasetIdentifier: string | undefined;

  /**
   * <p>The target dataset load operation type.</p>
   * @public
   */
  operationType: DataIntegrationEventDatasetOperationType | undefined;
}

/**
 * <p>The DataIntegrationFlow details.</p>
 * @public
 */
export interface DataIntegrationFlow {
  /**
   * <p>The DataIntegrationFlow instance ID.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The DataIntegrationFlow name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The DataIntegrationFlow source configurations.</p>
   * @public
   */
  sources: DataIntegrationFlowSource[] | undefined;

  /**
   * <p>The DataIntegrationFlow transformation configurations.</p>
   * @public
   */
  transformation: DataIntegrationFlowTransformation | undefined;

  /**
   * <p>The DataIntegrationFlow target configuration.</p>
   * @public
   */
  target: DataIntegrationFlowTarget | undefined;

  /**
   * <p>The DataIntegrationFlow creation timestamp.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The DataIntegrationFlow last modified timestamp.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * <p>The details of a flow execution with dataset source.</p>
 * @public
 */
export interface DataIntegrationFlowDatasetSource {
  /**
   * <p>The ARN of the dataset source.</p>
   * @public
   */
  datasetIdentifier: string | undefined;
}

/**
 * <p>The output metadata of the flow execution.</p>
 * @public
 */
export interface DataIntegrationFlowExecutionOutputMetadata {
  /**
   * <p>The S3 URI under which all diagnostic files (such as deduped records if any) are stored.</p>
   * @public
   */
  diagnosticReportsRootS3URI?: string | undefined;
}

/**
 * <p>The details of a flow execution with S3 source.</p>
 * @public
 */
export interface DataIntegrationFlowS3Source {
  /**
   * <p>The S3 bucket name of the S3 source.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The S3 object key of the S3 source.</p>
   * @public
   */
  key: string | undefined;
}

/**
 * <p>The source information of a flow execution.</p>
 * @public
 */
export interface DataIntegrationFlowExecutionSourceInfo {
  /**
   * <p>The data integration flow execution source type.</p>
   * @public
   */
  sourceType: DataIntegrationFlowSourceType | undefined;

  /**
   * <p>The source details of a flow execution with S3 source.</p>
   * @public
   */
  s3Source?: DataIntegrationFlowS3Source | undefined;

  /**
   * <p>The source details of a flow execution with dataset source.</p>
   * @public
   */
  datasetSource?: DataIntegrationFlowDatasetSource | undefined;
}

/**
 * <p>The flow execution details.</p>
 * @public
 */
export interface DataIntegrationFlowExecution {
  /**
   * <p>The flow execution's instanceId.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The flow execution's flowName.</p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p>The flow executionId.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The status of flow execution.</p>
   * @public
   */
  status?: DataIntegrationFlowExecutionStatus | undefined;

  /**
   * <p>The source information for a flow execution.</p>
   * @public
   */
  sourceInfo?: DataIntegrationFlowExecutionSourceInfo | undefined;

  /**
   * <p>The failure message (if any) of failed flow execution.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The flow execution start timestamp.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The flow execution end timestamp.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The flow execution output metadata.</p>
   * @public
   */
  outputMetadata?: DataIntegrationFlowExecutionOutputMetadata | undefined;
}

/**
 * <p>The request parameters for DeleteDataIntegrationFlow.</p>
 * @public
 */
export interface DeleteDataIntegrationFlowRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the DataIntegrationFlow to be deleted.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters for DeleteDataIntegrationFlow.</p>
 * @public
 */
export interface DeleteDataIntegrationFlowResponse {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the DataIntegrationFlow deleted.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The request parameters for GetDataIntegrationFlow.</p>
 * @public
 */
export interface GetDataIntegrationFlowRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the DataIntegrationFlow created.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters for GetDataIntegrationFlow.</p>
 * @public
 */
export interface GetDataIntegrationFlowResponse {
  /**
   * <p>The details of the DataIntegrationFlow returned.</p>
   * @public
   */
  flow: DataIntegrationFlow | undefined;
}

/**
 * <p>The request parameters for ListDataIntegrationFlows.</p>
 * @public
 */
export interface ListDataIntegrationFlowsRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The pagination token to fetch the next page of the DataIntegrationFlows.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specify the maximum number of DataIntegrationFlows to fetch in one paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response parameters for ListDataIntegrationFlows.</p>
 * @public
 */
export interface ListDataIntegrationFlowsResponse {
  /**
   * <p>The response parameters for ListDataIntegrationFlows.</p>
   * @public
   */
  flows: DataIntegrationFlow[] | undefined;

  /**
   * <p>The pagination token to fetch the next page of the DataIntegrationFlows.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters for UpdateDataIntegrationFlow.</p>
 * @public
 */
export interface UpdateDataIntegrationFlowRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the DataIntegrationFlow to be updated.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new source configurations for the DataIntegrationFlow.</p>
   * @public
   */
  sources?: DataIntegrationFlowSource[] | undefined;

  /**
   * <p>The new transformation configurations for the DataIntegrationFlow.</p>
   * @public
   */
  transformation?: DataIntegrationFlowTransformation | undefined;

  /**
   * <p>The new target configurations for the DataIntegrationFlow.</p>
   * @public
   */
  target?: DataIntegrationFlowTarget | undefined;
}

/**
 * <p>The response parameters for UpdateDataIntegrationFlow.</p>
 * @public
 */
export interface UpdateDataIntegrationFlowResponse {
  /**
   * <p>The details of the updated DataIntegrationFlow.</p>
   * @public
   */
  flow: DataIntegrationFlow | undefined;
}

/**
 * <p>The request parameters of DeleteDataLakeDataset.</p>
 * @public
 */
export interface DeleteDataLakeDatasetRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. For <b>asc</b> namespace, the name must be one of the supported data entities under <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters of DeleteDataLakeDataset.</p>
 * @public
 */
export interface DeleteDataLakeDatasetResponse {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of deleted dataset.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of deleted dataset.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The request parameters for GetDataLakeDataset.</p>
 * @public
 */
export interface GetDataLakeDatasetRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. For <b>asc</b> namespace, the name must be one of the supported data entities under <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters for GetDataLakeDataset.</p>
 * @public
 */
export interface GetDataLakeDatasetResponse {
  /**
   * <p>The fetched dataset details.</p>
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * <p>The request parameters of ListDataLakeDatasets.</p>
 * @public
 */
export interface ListDataLakeDatasetsRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The pagination token to fetch next page of datasets.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The max number of datasets to fetch in this paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response parameters of ListDataLakeDatasets.</p>
 * @public
 */
export interface ListDataLakeDatasetsResponse {
  /**
   * <p>The list of fetched dataset details.</p>
   * @public
   */
  datasets: DataLakeDataset[] | undefined;

  /**
   * <p>The pagination token to fetch next page of datasets.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters of UpdateDataLakeDataset.</p>
 * @public
 */
export interface UpdateDataLakeDatasetRequest {
  /**
   * <p>The Amazon Web Services Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - For information on the  Amazon Web Services Supply Chain supported datasets see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - For datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. For <b>asc</b> namespace, the name must be one of the supported data entities under <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description of the data lake dataset.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The response parameters of UpdateDataLakeDataset.</p>
 * @public
 */
export interface UpdateDataLakeDatasetResponse {
  /**
   * <p>The updated dataset details.</p>
   * @public
   */
  dataset: DataLakeDataset | undefined;
}

/**
 * <p>The request parameters of DeleteDataLakeNamespace.</p>
 * @public
 */
export interface DeleteDataLakeNamespaceRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the namespace. Noted you cannot delete pre-defined namespace like <b>asc</b>, <b>default</b> which are only deleted through instance deletion.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters of DeleteDataLakeNamespace.</p>
 * @public
 */
export interface DeleteDataLakeNamespaceResponse {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of deleted namespace.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The request parameters for GetDataLakeNamespace.</p>
 * @public
 */
export interface GetDataLakeNamespaceRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the namespace. Besides the namespaces user created, you can also specify the pre-defined namespaces:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>asc</b> - Pre-defined namespace containing Amazon Web Services Supply Chain supported datasets, see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>default</b> - Pre-defined namespace containing datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The response parameters for GetDataLakeNamespace.</p>
 * @public
 */
export interface GetDataLakeNamespaceResponse {
  /**
   * <p>The fetched namespace details.</p>
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * <p>The request parameters of ListDataLakeNamespaces.</p>
 * @public
 */
export interface ListDataLakeNamespacesRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The pagination token to fetch next page of namespaces.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The max number of namespaces to fetch in this paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response parameters of ListDataLakeNamespaces.</p>
 * @public
 */
export interface ListDataLakeNamespacesResponse {
  /**
   * <p>The list of fetched namespace details. Noted it only contains custom namespaces, pre-defined namespaces are not included.</p>
   * @public
   */
  namespaces: DataLakeNamespace[] | undefined;

  /**
   * <p>The pagination token to fetch next page of namespaces.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters of UpdateDataLakeNamespace.</p>
 * @public
 */
export interface UpdateDataLakeNamespaceRequest {
  /**
   * <p>The Amazon Web Services Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The name of the namespace. Noted you cannot update namespace with name starting with <b>asc</b>, <b>default</b>, <b>scn</b>, <b>aws</b>, <b>amazon</b>, <b>amzn</b>
   *          </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description of the data lake namespace.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The response parameters of UpdateDataLakeNamespace.</p>
 * @public
 */
export interface UpdateDataLakeNamespaceResponse {
  /**
   * <p>The updated namespace details.</p>
   * @public
   */
  namespace: DataLakeNamespace | undefined;
}

/**
 * <p>The request parameters for DeleteInstance.</p>
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;
}

/**
 * <p>The response parameters for DeleteInstance.</p>
 * @public
 */
export interface DeleteInstanceResponse {
  /**
   * <p>The AWS Supply Chain instance resource data details.</p>
   * @public
   */
  instance: Instance | undefined;
}

/**
 * <p>The request parameters for GetDataIntegrationEvent.</p>
 * @public
 */
export interface GetDataIntegrationEventRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The unique event identifier.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * <p>The response parameters for GetDataIntegrationEvent.</p>
 * @public
 */
export interface GetDataIntegrationEventResponse {
  /**
   * <p>The details of the DataIntegrationEvent returned.</p>
   * @public
   */
  event: DataIntegrationEvent | undefined;
}

/**
 * <p>The request parameters of GetFlowExecution.</p>
 * @public
 */
export interface GetDataIntegrationFlowExecutionRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The flow name.</p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p>The flow execution identifier.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * <p>The response parameters of GetFlowExecution.</p>
 * @public
 */
export interface GetDataIntegrationFlowExecutionResponse {
  /**
   * <p>The flow execution details.</p>
   * @public
   */
  flowExecution: DataIntegrationFlowExecution | undefined;
}

/**
 * <p>The request parameters for GetInstance.</p>
 * @public
 */
export interface GetInstanceRequest {
  /**
   * <p>The AWS Supply Chain instance identifier</p>
   * @public
   */
  instanceId: string | undefined;
}

/**
 * <p>The response parameters for GetInstance.</p>
 * @public
 */
export interface GetInstanceResponse {
  /**
   * <p>The instance resource data details.</p>
   * @public
   */
  instance: Instance | undefined;
}

/**
 * <p>The request parameters for ListInstances.</p>
 * @public
 */
export interface ListInstancesRequest {
  /**
   * <p>The pagination token to fetch the next page of instances.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specify the maximum number of instances to fetch in this paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter to ListInstances based on their names.</p>
   * @public
   */
  instanceNameFilter?: string[] | undefined;

  /**
   * <p>The filter to ListInstances based on their state.</p>
   * @public
   */
  instanceStateFilter?: InstanceState[] | undefined;
}

/**
 * <p>The response parameters for ListInstances.</p>
 * @public
 */
export interface ListInstancesResponse {
  /**
   * <p>The list of instances resource data details.</p>
   * @public
   */
  instances: Instance[] | undefined;

  /**
   * <p>The pagination token to fetch the next page of instances.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters for UpdateInstance.</p>
 * @public
 */
export interface UpdateInstanceRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The AWS Supply Chain instance name.</p>
   * @public
   */
  instanceName?: string | undefined;

  /**
   * <p>The AWS Supply Chain instance description.</p>
   * @public
   */
  instanceDescription?: string | undefined;
}

/**
 * <p>The response parameters for UpdateInstance.</p>
 * @public
 */
export interface UpdateInstanceResponse {
  /**
   * <p>The instance resource data details.</p>
   * @public
   */
  instance: Instance | undefined;
}

/**
 * <p>The request parameters for ListDataIntegrationEvents.</p>
 * @public
 */
export interface ListDataIntegrationEventsRequest {
  /**
   * <p>The Amazon Web Services Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>List data integration events for the specified eventType.</p>
   * @public
   */
  eventType?: DataIntegrationEventType | undefined;

  /**
   * <p>The pagination token to fetch the next page of the data integration events.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specify the maximum number of data integration events to fetch in one paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response parameters for ListDataIntegrationEvents.</p>
 * @public
 */
export interface ListDataIntegrationEventsResponse {
  /**
   * <p>The list of data integration events.</p>
   * @public
   */
  events: DataIntegrationEvent[] | undefined;

  /**
   * <p>The pagination token to fetch the next page of the ListDataIntegrationEvents.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters of ListFlowExecutions.</p>
 * @public
 */
export interface ListDataIntegrationFlowExecutionsRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The flow name.</p>
   * @public
   */
  flowName: string | undefined;

  /**
   * <p>The pagination token to fetch next page of flow executions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The number to specify the max number of flow executions to fetch in this paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The response parameters of ListFlowExecutions.</p>
 * @public
 */
export interface ListDataIntegrationFlowExecutionsResponse {
  /**
   * <p>The list of flow executions.</p>
   * @public
   */
  flowExecutions: DataIntegrationFlowExecution[] | undefined;

  /**
   * <p>The pagination token to fetch next page of flow executions.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request parameters of ListTagsForResource.</p>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Web Services Supply chain resource ARN that needs tags to be listed.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>The response parameters of ListTagsForResource.</p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags added to an Amazon Web Services Supply Chain resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The request parameters for SendDataIntegrationEvent.</p>
 * @public
 */
export interface SendDataIntegrationEventRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The data event type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>scn.data.dataset</b> - Send data directly to any specified dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.supplyplan</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/supply-plan-entity.html">supply_plan</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.shipmentstoporder</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-stop-order-entity.html">shipment_stop_order</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.shipmentstop</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-stop-entity.html">shipment_stop</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.shipment</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-shipment-entity.html">shipment</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.reservation</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/planning-reservation-entity.html">reservation</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.processproduct</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-product-entity.html">process_product</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.processoperation</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-operation-entity.html">process_operation</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.processheader</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/operation-process-header-entity.html">process_header</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.forecast</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/forecast-forecast-entity.html">forecast</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.inventorylevel</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/inventory_mgmnt-inv-level-entity.html">inv_level</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.inboundorder</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-entity.html">inbound_order</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.inboundorderline</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-line-entity.html">inbound_order_line</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.inboundorderlineschedule</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/replenishment-inbound-order-line-schedule-entity.html">inbound_order_line_schedule</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.outboundorderline</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/outbound-fulfillment-order-line-entity.html">outbound_order_line</a> dataset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>scn.data.outboundshipment</b> - Send data to <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/outbound-fulfillment-shipment-entity.html">outbound_shipment</a> dataset.</p>
   *             </li>
   *          </ul>
   * @public
   */
  eventType: DataIntegrationEventType | undefined;

  /**
   * <p>The data payload of the event, should follow the data schema of the target dataset, or see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">Data entities supported in AWS Supply Chain</a>. To send single data record, use JsonObject format; to send multiple data records, use JsonArray format.</p>
   *          <p>Note that for AWS Supply Chain dataset under <b>asc</b> namespace, it has a connection_id internal field that is not allowed to be provided by client directly, they will be auto populated.</p>
   * @public
   */
  data: string | undefined;

  /**
   * <p>Event identifier (for example, orderId for InboundOrder) used for data sharding or partitioning. Noted under one eventGroupId of same eventType and instanceId, events are processed sequentially in the order they are received by the server.</p>
   * @public
   */
  eventGroupId: string | undefined;

  /**
   * <p>The timestamp (in epoch seconds) associated with the event. If not provided, it will be assigned with current timestamp.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * <p>The idempotent client token. The token is active for 8 hours, and within its lifetime, it ensures the request completes only once upon retry with same client token. If omitted, the AWS SDK generates a unique value so that AWS SDK can safely retry the request upon network errors.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The target dataset configuration for <b>scn.data.dataset</b> event type.</p>
   * @public
   */
  datasetTarget?: DataIntegrationEventDatasetTargetConfiguration | undefined;
}

/**
 * <p>The response parameters for SendDataIntegrationEvent.</p>
 * @public
 */
export interface SendDataIntegrationEventResponse {
  /**
   * <p>The unique event identifier.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * <p>The request parameters of TagResource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Web Services Supply chain resource ARN that needs to be tagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags of the Amazon Web Services Supply chain resource to be created.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The response parameters for TagResource.</p>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request parameters of UntagResource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Web Services Supply chain resource ARN that needs to be untagged.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to be deleted for an Amazon Web Services Supply Chain resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The response parameters of UntagResource.</p>
 * @public
 */
export interface UntagResourceResponse {}
