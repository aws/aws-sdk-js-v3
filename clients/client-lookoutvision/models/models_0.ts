import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>You are not authorized to perform the action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum ResourceType {
  DATASET = "DATASET",
  MODEL = "MODEL",
  PROJECT = "PROJECT",
  TRIAL = "TRIAL",
}

/**
 * <p>The update or deletion of a resource caused an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: ResourceType | string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon S3 Location information for an input manifest file. </p>
 */
export interface InputS3Object {
  /**
   * <p>The Amazon S3 bucket that contains the manifest.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The name and location of the manifest file withiin the bucket.</p>
   */
  Key: string | undefined;

  /**
   * <p>The version ID of the bucket.</p>
   */
  VersionId?: string;
}

export namespace InputS3Object {
  export const filterSensitiveLog = (obj: InputS3Object): any => ({
    ...obj,
  });
}

/**
 * <p>Location information about a manifest file. You can use a manifest file to
 *       create a dataset.</p>
 */
export interface DatasetGroundTruthManifest {
  /**
   * <p>The S3 bucket location for the manifest file.</p>
   */
  S3Object?: InputS3Object;
}

export namespace DatasetGroundTruthManifest {
  export const filterSensitiveLog = (obj: DatasetGroundTruthManifest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.</p>
 */
export interface DatasetSource {
  /**
   * <p>Location information for the manifest file.</p>
   */
  GroundTruthManifest?: DatasetGroundTruthManifest;
}

export namespace DatasetSource {
  export const filterSensitiveLog = (obj: DatasetSource): any => ({
    ...obj,
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>The name of the project in which you want to create a dataset.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The type of the dataset. Specify <code>train</code> for a training dataset.
   *       Specify <code>test</code> for a test dataset.</p>
   */
  DatasetType: string | undefined;

  /**
   * <p>The location of the manifest file that Amazon Lookout for Vision uses to create the dataset.</p>
   *          <p>If you don't specify <code>DatasetSource</code>, an empty dataset is created and the operation
   *       synchronously returns. Later, you can add JSON Lines by calling <a>UpdateDatasetEntries</a>.
   *      </p>
   *          <p>If you specify a value for <code>DataSource</code>, the manifest at the S3 location
   *      is validated and used to create the dataset. The call to <code>CreateDataset</code> is asynchronous
   *      and might take a while to complete. To find out the current status, Check the value of <code>Status</code>
   *      returned in a call to <a>DescribeDataset</a>.</p>
   */
  DatasetSource?: DatasetSource;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>CreateDataset</code>
   *       completes only once.  You choose the value to pass. For example, An issue,
   *       such as an network outage, might prevent you from getting a response from <code>CreateDataset</code>.
   *       In this case, safely retry your call
   *        to <code>CreateDataset</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateDataset</code>. An idempotency
   *        token is active for 8 hours.
   *     </p>
   */
  ClientToken?: string;
}

export namespace CreateDatasetRequest {
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
}

export enum DatasetStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED_ROLLBACK_COMPLETE = "UPDATE_FAILED_ROLLBACK_COMPLETE",
  UPDATE_FAILED_ROLLBACK_IN_PROGRESS = "UPDATE_FAILED_ROLLBACK_IN_PROGRESS",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Sumary information for an Amazon Lookout for Vision dataset.</p>
 */
export interface DatasetMetadata {
  /**
   * <p>The type of the dataset.</p>
   */
  DatasetType?: string;

  /**
   * <p>The Unix timestamp for the date and time that the dataset was created. </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The status for the dataset.</p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>The status message for the dataset.</p>
   */
  StatusMessage?: string;
}

export namespace DatasetMetadata {
  export const filterSensitiveLog = (obj: DatasetMetadata): any => ({
    ...obj,
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>Information about the dataset.</p>
   */
  DatasetMetadata?: DatasetMetadata;
}

export namespace CreateDatasetResponse {
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
  /**
   * <p>The period of time, in seconds, before the operation can be retried.</p>
   */
  RetryAfterSeconds?: number;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: ResourceType | string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>A service quota was exceeded the allowed limit. For more information, see
 *         Limits in Amazon Lookout for Vision in the Amazon Lookout for Vision Developer Guide. </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The quota code. </p>
   */
  QuotaCode: string | undefined;

  /**
   * <p>The service code. </p>
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  /**
   * <p>The quota code. </p>
   */
  QuotaCode?: string;

  /**
   * <p>The service code. </p>
   */
  ServiceCode?: string;

  /**
   * <p>The period of time, in seconds, before the operation can be retried. </p>
   */
  RetryAfterSeconds?: number;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 location where Amazon Lookout for Vision saves training output.</p>
 */
export interface OutputS3Object {
  /**
   * <p>The bucket that contains the training output.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The location of the training output in the bucket.</p>
   */
  Key: string | undefined;
}

export namespace OutputS3Object {
  export const filterSensitiveLog = (obj: OutputS3Object): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the location of a manifest file.</p>
 */
export interface S3Location {
  /**
   * <p>The S3 bucket that contain the manifest file.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The path and name of the manifest file with the S3 bucket.</p>
   */
  Prefix?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 location where Amazon Lookout for Vision saves model training files.</p>
 */
export interface OutputConfig {
  /**
   * <p>The S3 location for the output.</p>
   */
  S3Location: S3Location | undefined;
}

export namespace OutputConfig {
  export const filterSensitiveLog = (obj: OutputConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the evaluation performance of a trained model. </p>
 */
export interface ModelPerformance {
  /**
   * <p>The overall F1 score metric for the trained model.</p>
   */
  F1Score?: number;

  /**
   * <p>The overall recall metric value for the trained model. </p>
   */
  Recall?: number;

  /**
   * <p>The overall precision metric value for the trained model.</p>
   */
  Precision?: number;
}

export namespace ModelPerformance {
  export const filterSensitiveLog = (obj: ModelPerformance): any => ({
    ...obj,
  });
}

export enum ModelStatus {
  DELETING = "DELETING",
  HOSTED = "HOSTED",
  HOSTING_FAILED = "HOSTING_FAILED",
  STARTING_HOSTING = "STARTING_HOSTING",
  STOPPING_HOSTING = "STOPPING_HOSTING",
  SYSTEM_UPDATING = "SYSTEM_UPDATING",
  TRAINED = "TRAINED",
  TRAINING = "TRAINING",
  TRAINING_FAILED = "TRAINING_FAILED",
}

/**
 * <p>Describes an Amazon Lookout for Vision model.</p>
 */
export interface ModelDescription {
  /**
   * <p>The version of the model</p>
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn?: string;

  /**
   * <p>The unix timestamp for the date and time that the model was created. </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The description for the model.</p>
   */
  Description?: string;

  /**
   * <p>The status of the model.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The status message for the model.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Performance metrics for the model. Created during training.</p>
   */
  Performance?: ModelPerformance;

  /**
   * <p>The S3 location where Amazon Lookout for Vision saves model training files.</p>
   */
  OutputConfig?: OutputConfig;

  /**
   * <p>The S3 location where Amazon Lookout for Vision saves the manifest file
   *          that was used to test the trained model and generate the performance scores.</p>
   */
  EvaluationManifest?: OutputS3Object;

  /**
   * <p>The S3 location where Amazon Lookout for Vision saves the performance metrics.</p>
   */
  EvaluationResult?: OutputS3Object;

  /**
   * <p>The unix timestamp for the date and time that the evaluation ended. </p>
   */
  EvaluationEndTimestamp?: Date;

  /**
   * <p>The identifer for the AWS Key Management Service (AWS KMS) key that was used to encrypt the model
   *          during training.</p>
   */
  KmsKeyId?: string;
}

export namespace ModelDescription {
  export const filterSensitiveLog = (obj: ModelDescription): any => ({
    ...obj,
  });
}

export interface CreateModelRequest {
  /**
   * <p>The name of the project in which you want to create a model version.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>A description for the version of the model.</p>
   */
  Description?: ModelDescription;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>CreateModel</code>
   *       completes only once.  You choose the value to pass. For example, An issue,
   *       such as an network outage, might prevent you from getting a response from <code>CreateModel</code>.
   *       In this case, safely retry your call
   *        to <code>CreateModel</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateModel</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;

  /**
   * <p>The location where Amazon Lookout for Vision saves the training results.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK)
   *        to use for encypting the model. If this parameter is not specified, the
   *        model is encrypted by a key that AWS owns and manages.</p>
   */
  KmsKeyId?: string;
}

export namespace CreateModelRequest {
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon Lookout for Vision model.</p>
 */
export interface ModelMetadata {
  /**
   * <p>The unix timestamp for the date and time that the model was created. </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   */
  ModelArn?: string;

  /**
   * <p>The description for the model.</p>
   */
  Description?: string;

  /**
   * <p>The status of the model.</p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The status message for the model.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Performance metrics for the model. Created during training.</p>
   */
  Performance?: ModelPerformance;
}

export namespace ModelMetadata {
  export const filterSensitiveLog = (obj: ModelMetadata): any => ({
    ...obj,
  });
}

export interface CreateModelResponse {
  /**
   * <p>The response from a call to <code>CreateModel</code>.</p>
   */
  ModelMetadata?: ModelMetadata;
}

export namespace CreateModelResponse {
  export const filterSensitiveLog = (obj: CreateModelResponse): any => ({
    ...obj,
  });
}

export interface CreateProjectRequest {
  /**
   * <p>S nsme for the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>CreateProject</code>
   *       completes only once.  You choose the value to pass. For example, An issue,
   *       such as an network outage, might prevent you from getting a response from <code>CreateProject</code>.
   *       In this case, safely retry your call
   *        to <code>CreateProject</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateProject</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export namespace CreateProjectRequest {
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata about an Amazon Lookout for Vision project.</p>
 */
export interface ProjectMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName?: string;

  /**
   * <p>The unix timestamp for the date and time that the project was created. </p>
   */
  CreationTimestamp?: Date;
}

export namespace ProjectMetadata {
  export const filterSensitiveLog = (obj: ProjectMetadata): any => ({
    ...obj,
  });
}

export interface CreateProjectResponse {
  /**
   * <p>Information about the project.</p>
   */
  ProjectMetadata?: ProjectMetadata;
}

export namespace CreateProjectResponse {
  export const filterSensitiveLog = (obj: CreateProjectResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics about the images in a dataset.</p>
 */
export interface DatasetImageStats {
  /**
   * <p>The total number of images in the dataset.</p>
   */
  Total?: number;

  /**
   * <p>The total number of labeled images.</p>
   */
  Labeled?: number;

  /**
   * <p>The total number of images labeled as normal.</p>
   */
  Normal?: number;

  /**
   * <p>the total number of images labeled as an anomaly.</p>
   */
  Anomaly?: number;
}

export namespace DatasetImageStats {
  export const filterSensitiveLog = (obj: DatasetImageStats): any => ({
    ...obj,
  });
}

/**
 * <p>The description for a dataset. For more information, see <a>DescribeDataset</a>.</p>
 */
export interface DatasetDescription {
  /**
   * <p>The name of the project that contains the dataset.</p>
   */
  ProjectName?: string;

  /**
   * <p>The type of the dataset. The value <code>train</code> represents a training dataset or single dataset project.
   *       The value <code>test</code> represents a test dataset.</p>
   */
  DatasetType?: string;

  /**
   * <p>The Unix timestamp for the time and date that the dataset was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The Unix timestamp for the date and time that the dataset was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The status of the dataset.</p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>The status message for the dataset. </p>
   */
  StatusMessage?: string;

  /**
   * <p></p>
   */
  ImageStats?: DatasetImageStats;
}

export namespace DatasetDescription {
  export const filterSensitiveLog = (obj: DatasetDescription): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the project that contains the dataset that you want to delete.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The type of the dataset to delete. Specify <code>train</code> to delete the training dataset.
   *       Specify <code>test</code> to delete the test dataset. To delete the dataset in a single dataset project,
   *          specify <code>train</code>.</p>
   */
  DatasetType: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>DeleteDataset</code>
   *       completes only once.  You choose the value to pass. For example, An issue,
   *       such as an network outage, might prevent you from getting a response from <code>DeleteDataset</code>.
   *       In this case, safely retry your call
   *        to <code>DeleteDataset</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>DeleteDataset</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export namespace DeleteDatasetRequest {
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetResponse {}

export namespace DeleteDatasetResponse {
  export const filterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
    ...obj,
  });
}

export interface DeleteModelRequest {
  /**
   * <p>The name of the project that contains the model that you want to delete.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The version of the model that you want to delete.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>DeleteModel</code>
   *       completes only once.  You choose the value to pass. For example, An issue,
   *       such as an network outage, might prevent you from getting a response from <code>DeleteModel</code>.
   *       In this case, safely retry your call
   *        to <code>DeleteModel</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>DeleteModel</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export namespace DeleteModelRequest {
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model that was deleted.</p>
   */
  ModelArn?: string;
}

export namespace DeleteModelResponse {
  export const filterSensitiveLog = (obj: DeleteModelResponse): any => ({
    ...obj,
  });
}

export interface DeleteProjectRequest {
  /**
   * <p>The name of the project to delete.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>DeleteProject</code>
   *          completes only once.  You choose the value to pass. For example, An issue,
   *          such as an network outage, might prevent you from getting a response from <code>DeleteProject</code>.
   *          In this case, safely retry your call
   *          to <code>DeleteProject</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *          if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>DeleteProject</code>. An idempotency
   *          token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export namespace DeleteProjectRequest {
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProjectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that was deleted.</p>
   */
  ProjectArn?: string;
}

export namespace DeleteProjectResponse {
  export const filterSensitiveLog = (obj: DeleteProjectResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the project that contains the dataset that you want to describe.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The type of the dataset to describe. Specify <code>train</code> to describe the
   *       training dataset. Specify <code>test</code> to describe the test dataset.
   *       If you have a single dataset project, specify <code>train</code>
   *          </p>
   */
  DatasetType: string | undefined;
}

export namespace DescribeDatasetRequest {
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatasetResponse {
  /**
   * <p>The description of the requested dataset. </p>
   */
  DatasetDescription?: DatasetDescription;
}

export namespace DescribeDatasetResponse {
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelRequest {
  /**
   * <p>The project that contains the version of a model that you want to describe.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The version of the model that you want to describe.</p>
   */
  ModelVersion: string | undefined;
}

export namespace DescribeModelRequest {
  export const filterSensitiveLog = (obj: DescribeModelRequest): any => ({
    ...obj,
  });
}

export interface DescribeModelResponse {
  /**
   * <p>Contains the description of the model.</p>
   */
  ModelDescription?: ModelDescription;
}

export namespace DescribeModelResponse {
  export const filterSensitiveLog = (obj: DescribeModelResponse): any => ({
    ...obj,
  });
}

export interface DescribeProjectRequest {
  /**
   * <p>The name of the project that you want to describe.</p>
   */
  ProjectName: string | undefined;
}

export namespace DescribeProjectRequest {
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describe an Amazon Lookout for Vision project. For more information, see <a>DescribeProject</a>.</p>
 */
export interface ProjectDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ProjectArn?: string;

  /**
   * <p>The name of the project.</p>
   */
  ProjectName?: string;

  /**
   * <p>The unix timestamp for the date and time that the project was created. </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>A list of datasets in the project.</p>
   */
  Datasets?: DatasetMetadata[];
}

export namespace ProjectDescription {
  export const filterSensitiveLog = (obj: ProjectDescription): any => ({
    ...obj,
  });
}

export interface DescribeProjectResponse {
  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: ProjectDescription;
}

export namespace DescribeProjectResponse {
  export const filterSensitiveLog = (obj: DescribeProjectResponse): any => ({
    ...obj,
  });
}

export interface DetectAnomaliesRequest {
  /**
   * <p>The name of the project that contains the model version that you want to use.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The version of the model that you want to use.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The unencrypted image bytes that you want to analyze. </p>
   */
  Body: Readable | ReadableStream | Blob | undefined;

  /**
   * <p>The type of the image passed in <code>Body</code>.
   *          Valid values are <code>image/png</code> (PNG format images) and <code>image/jpeg</code> (JPG format images). </p>
   */
  ContentType: string | undefined;
}

export namespace DetectAnomaliesRequest {
  export const filterSensitiveLog = (obj: DetectAnomaliesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The source for an image.</p>
 */
export interface ImageSource {
  /**
   * <p>The type of the image.</p>
   */
  Type?: string;
}

export namespace ImageSource {
  export const filterSensitiveLog = (obj: ImageSource): any => ({
    ...obj,
  });
}

/**
 * <p>The prediction results from a call to <a>DetectAnomalies</a>.</p>
 */
export interface DetectAnomalyResult {
  /**
   * <p>The source of the image that was analyzed. <code>direct</code> means that the
   *       images was supplied from the local computer. No other values are supported.</p>
   */
  Source?: ImageSource;

  /**
   * <p>True if the image contains an anomaly, otherwise false.</p>
   */
  IsAnomalous?: boolean;

  /**
   * <p>The confidence that Amazon Lookout for Vision has in the accuracy of the prediction.</p>
   */
  Confidence?: number;
}

export namespace DetectAnomalyResult {
  export const filterSensitiveLog = (obj: DetectAnomalyResult): any => ({
    ...obj,
  });
}

export interface DetectAnomaliesResponse {
  /**
   * <p>The results of the <code>DetectAnomalies</code> operation.</p>
   */
  DetectAnomalyResult?: DetectAnomalyResult;
}

export namespace DetectAnomaliesResponse {
  export const filterSensitiveLog = (obj: DetectAnomaliesResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetEntriesRequest {
  /**
   * <p>The name of the project that contains the dataset that you want to list.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The type of the dataset that you want to list.  Specify <code>train</code> to list
   *          the training dataset. Specify <code>test</code> to list the test dataset. If you have a single dataset
   *       project, specify <code>train</code>.</p>
   */
  DatasetType: string | undefined;

  /**
   * <p>Specify <code>true</code> to include labeled entries, otherwise specify <code>false</code>. If you
   *       don't specify a value, Lookout for Vision returns all entries.</p>
   */
  Labeled?: boolean;

  /**
   * <p>Specify <code>normal</code> to include only normal images. Specify <code>anomaly</code> to only include
   *          anomalous entries. If you don't specify a value, Amazon Lookout for Vision returns normal and anomalous images.</p>
   */
  AnomalyClass?: string;

  /**
   * <p>Only includes entries before the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.</p>
   */
  BeforeCreationDate?: Date;

  /**
   * <p>Only includes entries after the specified date in the response. For example, <code>2020-06-23T00:00:00</code>.</p>
   */
  AfterCreationDate?: Date;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *          Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to
   *          retrieve the next set of dataset entries.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *          If you specify a value greater than 100, a ValidationException
   *          error occurs. The default value is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Perform a "contains" search on the  values of the <code>source-ref</code> key within the dataset.
   *          For example a value of "IMG_17"  returns all JSON Lines where the <code>source-ref</code> key value matches <i>*IMG_17*</i>.</p>
   */
  SourceRefContains?: string;
}

export namespace ListDatasetEntriesRequest {
  export const filterSensitiveLog = (obj: ListDatasetEntriesRequest): any => ({
    ...obj,
  });
}

export interface ListDatasetEntriesResponse {
  /**
   * <p>A list of the entries (JSON Lines) within the dataset.</p>
   */
  DatasetEntries?: string[];

  /**
   * <p>If the response is truncated, Amazon Lookout for Vision returns this token
   *          that you can use in the subsequent request to retrieve the next set ofdataset entries.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetEntriesResponse {
  export const filterSensitiveLog = (obj: ListDatasetEntriesResponse): any => ({
    ...obj,
  });
}

export interface ListModelsRequest {
  /**
   * <p>The name of the project that contains the model versions that you want to list.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *          Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to
   *          retrieve the next set of models.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *          If you specify a value greater than 100, a ValidationException
   *          error occurs. The default value is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListModelsRequest {
  export const filterSensitiveLog = (obj: ListModelsRequest): any => ({
    ...obj,
  });
}

export interface ListModelsResponse {
  /**
   * <p>A list of model versions in the specified project. </p>
   */
  Models?: ModelMetadata[];

  /**
   * <p>If the response is truncated, Amazon Lookout for Vision returns this token
   *          that you can use in the subsequent request to retrieve the next set of models. </p>
   */
  NextToken?: string;
}

export namespace ListModelsResponse {
  export const filterSensitiveLog = (obj: ListModelsResponse): any => ({
    ...obj,
  });
}

export interface ListProjectsRequest {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve),
   *          Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination token to
   *          retrieve the next set of projects.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *          If you specify a value greater than 100, a ValidationException
   *          error occurs. The default value is 100.</p>
   */
  MaxResults?: number;
}

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
}

export interface ListProjectsResponse {
  /**
   * <p>A list of projects in your AWS account.</p>
   */
  Projects?: ProjectMetadata[];

  /**
   * <p>If the response is truncated, Amazon Lookout for Vision returns this token
   *          that you can use in the subsequent request to retrieve the next set of projects.</p>
   */
  NextToken?: string;
}

export namespace ListProjectsResponse {
  export const filterSensitiveLog = (obj: ListProjectsResponse): any => ({
    ...obj,
  });
}

export interface StartModelRequest {
  /**
   * <p>The name of the project that contains the model that you want to start.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The version of the model that you want to start.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>The minimum number of inference units to use. A single
   *          inference unit represents 1 hour of processing and can support up to 5 Transaction Pers Second (TPS).
   *          Use a higher number to increase the TPS throughput of your model. You are charged for the number
   *          of inference units that you use.
   *       </p>
   */
  MinInferenceUnits: number | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>StartModel</code>
   *          completes only once.  You choose the value to pass. For example, An issue,
   *          such as an network outage, might prevent you from getting a response from <code>StartModel</code>.
   *          In this case, safely retry your call
   *          to <code>StartModel</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *          if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>StartModel</code>. An idempotency
   *          token is active for 8 hours.
   *       </p>
   */
  ClientToken?: string;
}

export namespace StartModelRequest {
  export const filterSensitiveLog = (obj: StartModelRequest): any => ({
    ...obj,
  });
}

export enum ModelHostingStatus {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
}

export interface StartModelResponse {
  /**
   * <p>The current running status of the model.</p>
   */
  Status?: ModelHostingStatus | string;
}

export namespace StartModelResponse {
  export const filterSensitiveLog = (obj: StartModelResponse): any => ({
    ...obj,
  });
}

export interface StopModelRequest {
  /**
   * <p>The name of the project that contains the model that you want to stop.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The version of the model that you want to stop.</p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>StopModel</code>
   *          completes only once.  You choose the value to pass. For example, An issue,
   *          such as an network outage, might prevent you from getting a response from <code>StopModel</code>.
   *          In this case, safely retry your call
   *          to <code>StopModel</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *          if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>StopModel</code>. An idempotency
   *          token is active for 8 hours.
   *
   *
   *       </p>
   */
  ClientToken?: string;
}

export namespace StopModelRequest {
  export const filterSensitiveLog = (obj: StopModelRequest): any => ({
    ...obj,
  });
}

export interface StopModelResponse {
  /**
   * <p>The status of the model.</p>
   */
  Status?: ModelHostingStatus | string;
}

export namespace StopModelResponse {
  export const filterSensitiveLog = (obj: StopModelResponse): any => ({
    ...obj,
  });
}

export interface UpdateDatasetEntriesRequest {
  /**
   * <p>The name of the project that contains the dataset that you want to update.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The type of the dataset that you want to update. Specify <code>train</code> to update
   *       the training dataset. Specify <code>test</code> to update the test dataset. If you
   *        have a single dataset project, specify <code>train</code>.</p>
   */
  DatasetType: string | undefined;

  /**
   * <p>The entries to add to the dataset.</p>
   */
  Changes: Uint8Array | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>UpdateDatasetEntries</code>
   *          completes only once.  You choose the value to pass. For example, An issue,
   *          such as an network outage, might prevent you from getting a response from <code>UpdateDatasetEntries</code>.
   *          In this case, safely retry your call
   *          to <code>UpdateDatasetEntries</code> by using the same <code>ClientToken</code> parameter value. An error occurs
   *          if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>UpdateDatasetEntries</code>. An idempotency
   *          token is active for 8 hours.
   *       </p>
   */
  ClientToken?: string;
}

export namespace UpdateDatasetEntriesRequest {
  export const filterSensitiveLog = (obj: UpdateDatasetEntriesRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatasetEntriesResponse {
  /**
   * <p>The status of the dataset update.</p>
   */
  Status?: DatasetStatus | string;
}

export namespace UpdateDatasetEntriesResponse {
  export const filterSensitiveLog = (obj: UpdateDatasetEntriesResponse): any => ({
    ...obj,
  });
}
