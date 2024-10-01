// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SupplyChainServiceException as __BaseException } from "./SupplyChainServiceException";

/**
 * <p>You do not have the required privileges to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ConfigurationJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  QUEUED: "QUEUED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ConfigurationJobStatus = (typeof ConfigurationJobStatus)[keyof typeof ConfigurationJobStatus];

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
  message?: string;
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
  clientToken?: string;
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
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The input does not satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
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
 * @public
 * @enum
 */
export const DataIntegrationFlowLoadType = {
  INCREMENTAL: "INCREMENTAL",
  REPLACE: "REPLACE",
} as const;

/**
 * @public
 */
export type DataIntegrationFlowLoadType =
  (typeof DataIntegrationFlowLoadType)[keyof typeof DataIntegrationFlowLoadType];

/**
 * <p>The dataset options used in dataset source and target configurations.</p>
 * @public
 */
export interface DataIntegrationFlowDatasetOptions {
  /**
   * <p>The dataset data load type in dataset options.</p>
   * @public
   */
  loadType?: DataIntegrationFlowLoadType;

  /**
   * <p>The dataset load option to remove duplicates.</p>
   * @public
   */
  dedupeRecords?: boolean;
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
  options?: DataIntegrationFlowDatasetOptions;
}

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowFileType = {
  CSV: "CSV",
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type DataIntegrationFlowFileType =
  (typeof DataIntegrationFlowFileType)[keyof typeof DataIntegrationFlowFileType];

/**
 * <p>The Amazon S3 options used in S3 source and target configurations.</p>
 * @public
 */
export interface DataIntegrationFlowS3Options {
  /**
   * <p>The Amazon S3 file type in S3 options.</p>
   * @public
   */
  fileType?: DataIntegrationFlowFileType;
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
   * <p>The prefix of the S3 source objects.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The other options of the S3 DataIntegrationFlow source.</p>
   * @public
   */
  options?: DataIntegrationFlowS3Options;
}

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowSourceType = {
  DATASET: "DATASET",
  S3: "S3",
} as const;

/**
 * @public
 */
export type DataIntegrationFlowSourceType =
  (typeof DataIntegrationFlowSourceType)[keyof typeof DataIntegrationFlowSourceType];

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
  s3Source?: DataIntegrationFlowS3SourceConfiguration;

  /**
   * <p>The dataset DataIntegrationFlow source.</p>
   * @public
   */
  datasetSource?: DataIntegrationFlowDatasetSourceConfiguration;
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
  options?: DataIntegrationFlowDatasetOptions;
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
  options?: DataIntegrationFlowS3Options;
}

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowTargetType = {
  DATASET: "DATASET",
  S3: "S3",
} as const;

/**
 * @public
 */
export type DataIntegrationFlowTargetType =
  (typeof DataIntegrationFlowTargetType)[keyof typeof DataIntegrationFlowTargetType];

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
  s3Target?: DataIntegrationFlowS3TargetConfiguration;

  /**
   * <p>The dataset DataIntegrationFlow target.</p>
   * @public
   */
  datasetTarget?: DataIntegrationFlowDatasetTargetConfiguration;
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
 * @public
 * @enum
 */
export const DataIntegrationFlowTransformationType = {
  NONE: "NONE",
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type DataIntegrationFlowTransformationType =
  (typeof DataIntegrationFlowTransformationType)[keyof typeof DataIntegrationFlowTransformationType];

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
  sqlTransformation?: DataIntegrationFlowSQLTransformationConfiguration;
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
  tags?: Record<string, string>;
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
 * @public
 * @enum
 */
export const DataLakeDatasetSchemaFieldType = {
  DOUBLE: "DOUBLE",
  INT: "INT",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type DataLakeDatasetSchemaFieldType =
  (typeof DataLakeDatasetSchemaFieldType)[keyof typeof DataLakeDatasetSchemaFieldType];

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
 * <p>The schema details of the dataset.</p>
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
   * <p>The name space of the dataset.</p>
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
   * <p>The custom schema of the data lake dataset and is only required when the name space is <i>default</i>.</p>
   * @public
   */
  schema?: DataLakeDatasetSchema;

  /**
   * <p>The description of the dataset.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The tags of the dataset.</p>
   * @public
   */
  tags?: Record<string, string>;
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
   * <p>The name space of the dataset. The available values are:</p>
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
  description?: string;

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
 * @public
 * @enum
 */
export const DataIntegrationEventType = {
  FORECAST: "scn.data.forecast",
  INBOUND_ORDER: "scn.data.inboundorder",
  INBOUND_ORDER_LINE: "scn.data.inboundorderline",
  INBOUND_ORDER_LINE_SCHEDULE: "scn.data.inboundorderlineschedule",
  INVENTORY_LEVEL: "scn.data.inventorylevel",
  OUTBOUND_ORDER_LINE: "scn.data.outboundorderline",
  OUTBOUND_SHIPMENT: "scn.data.outboundshipment",
  PROCESS_HEADER: "scn.data.processheader",
  PROCESS_OPERATION: "scn.data.processoperation",
  PROCESS_PRODUCT: "scn.data.processproduct",
  RESERVATION: "scn.data.reservation",
  SHIPMENT: "scn.data.shipment",
  SHIPMENT_STOP: "scn.data.shipmentstop",
  SHIPMENT_STOP_ORDER: "scn.data.shipmentstoporder",
  SUPPLY_PLAN: "scn.data.supplyplan",
} as const;

/**
 * @public
 */
export type DataIntegrationEventType = (typeof DataIntegrationEventType)[keyof typeof DataIntegrationEventType];

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
   * @public
   */
  eventType: DataIntegrationEventType | undefined;

  /**
   * <p>The data payload of the event. For more information on the data schema to use, see <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">Data entities supported in AWS Supply Chain
   *         </a>.</p>
   * @public
   */
  data: string | undefined;

  /**
   * <p>Event identifier (for example, orderId for InboundOrder) used for data sharing or partitioning.</p>
   * @public
   */
  eventGroupId: string | undefined;

  /**
   * <p>The event timestamp (in epoch seconds).</p>
   * @public
   */
  eventTimestamp?: Date;

  /**
   * <p>The idempotent client token.</p>
   * @public
   */
  clientToken?: string;
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
  nextToken?: string;

  /**
   * <p>Specify the maximum number of DataIntegrationFlows to fetch in one paginated request.</p>
   * @public
   */
  maxResults?: number;
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
  nextToken?: string;
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
  sources?: DataIntegrationFlowSource[];

  /**
   * <p>The new transformation configurations for the DataIntegrationFlow.</p>
   * @public
   */
  transformation?: DataIntegrationFlowTransformation;

  /**
   * <p>The new target configurations for the DataIntegrationFlow.</p>
   * @public
   */
  target?: DataIntegrationFlowTarget;
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
   * <p>The namespace of the dataset. The available values are:</p>
   *          <ul>
   *             <li>
   *                <p>asc: for <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">
   *                 AWS Supply Chain supported datasets
   *             </a>.</p>
   *             </li>
   *             <li>
   *                <p>default: for datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the dataset. If the namespace is <i>asc</i>, the name must be one of the supported <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">data entities
   *         </a>.</p>
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
   * <p>The name space of the dataset. The available values are:</p>
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
}

/**
 * <p>The response parameters for UpdateDataLakeDataset.</p>
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
   * <p>The namespace of the dataset. The available values are:</p>
   *          <ul>
   *             <li>
   *                <p>asc: for <a href="https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html">
   *                 AWS Supply Chain supported datasets
   *             </a>.</p>
   *             </li>
   *             <li>
   *                <p>default: for datasets with custom user-defined schemas.</p>
   *             </li>
   *          </ul>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The pagination token to fetch next page of datasets.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The max number of datasets to fetch in this paginated request.</p>
   * @public
   */
  maxResults?: number;
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
  nextToken?: string;
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
   * <p>The name space of the dataset. The available values are:</p>
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
   * <p>The updated description of the data lake dataset.</p>
   * @public
   */
  description?: string;
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

/**
 * @internal
 */
export const SendDataIntegrationEventRequestFilterSensitiveLog = (obj: SendDataIntegrationEventRequest): any => ({
  ...obj,
  ...(obj.data && { data: SENSITIVE_STRING }),
});
