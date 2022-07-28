// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { Readable } from "stream";

import { LookoutVisionServiceException as __BaseException } from "./LookoutVisionServiceException";

/**
 * <p>You are not authorized to perform the action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about the pixels in an anomaly mask. For more information, see <a>Anomaly</a>.
 *       <code>PixelAnomaly</code> is only returned by image segmentation models.</p>
 */
export interface PixelAnomaly {
  /**
   * <p>The percentage area of the image that the anomaly type covers.</p>
   */
  TotalPercentageArea?: number;

  /**
   * <p>A hex color value for the mask that covers an anomaly type. Each anomaly type has
   *          a different mask color. The color maps to the color of the anomaly type used in the
   *          training dataset. </p>
   */
  Color?: string;
}

/**
 * <p>Information about an anomaly type found on an image by an image segmentation model.
 *          For more information, see <a>DetectAnomalies</a>.</p>
 */
export interface Anomaly {
  /**
   * <p>The name of an anomaly type found in an image.
   *          <code>Name</code> maps to an anomaly type in the training dataset, apart from the anomaly type <code>background</code>.
   *       The service automatically inserts the <code>background</code> anomaly type into the response from <code>DetectAnomalies</code>. </p>
   */
  Name?: string;

  /**
   * <p>Information about the pixel mask that covers an anomaly type.</p>
   */
  PixelAnomaly?: PixelAnomaly;
}

export enum ResourceType {
  DATASET = "DATASET",
  MODEL = "MODEL",
  MODEL_PACKAGE_JOB = "MODEL_PACKAGE_JOB",
  PROJECT = "PROJECT",
  TRIAL = "TRIAL",
}

/**
 * <p>The update or deletion of a resource caused an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: ResourceType | string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
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

/**
 * <p>Information about the location of a manifest file that Amazon Lookout for Vision uses to to create a dataset.</p>
 */
export interface DatasetSource {
  /**
   * <p>Location information for the manifest file.</p>
   */
  GroundTruthManifest?: DatasetGroundTruthManifest;
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
   *       completes only once.  You choose the value to pass. For example, An issue might prevent you
   *       from getting a response from <code>CreateDataset</code>.
   *       In this case, safely retry your call
   *        to <code>CreateDataset</code> by using the same <code>ClientToken</code> parameter value.</p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple dataset creation requests. You'll need to
   *          provide your own value for other use cases. </p>
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateDataset</code>. An idempotency
   *        token is active for 8 hours.
   *     </p>
   */
  ClientToken?: string;
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
 * <p>Summary information for an Amazon Lookout for Vision dataset. For more information,
 *       see <a>DescribeDataset</a> and <a>ProjectDescription</a>.</p>
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

export interface CreateDatasetResponse {
  /**
   * <p>Information about the dataset.</p>
   */
  DatasetMetadata?: DatasetMetadata;
}

/**
 * <p>Amazon Lookout for Vision experienced a service issue. Try your call again.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * <p>The period of time, in seconds, before the operation can be retried.</p>
   */
  RetryAfterSeconds?: number;
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
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: ResourceType | string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>A service quota was exceeded the allowed limit. For more information, see
 *         Limits in Amazon Lookout for Vision in the Amazon Lookout for Vision Developer Guide. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>Amazon Lookout for Vision is temporarily unable to process the request. Try your call again.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>An input validation error occured. For example, invalid characters in a project name,
 *       or if a pagination token is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Information about the location of training output or the output of a model packaging job.</p>
 */
export interface S3Location {
  /**
   * <p>The S3 bucket that contains the training or model packaging job output. If you are training a model,
   *          the bucket must in your AWS account. If you use an S3 bucket for a model packaging job,
   *       the S3 bucket must be in the same AWS Region and AWS account in which you use AWS IoT Greengrass.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The path of the folder, within the S3 bucket, that contains the output.</p>
   */
  Prefix?: string;
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

/**
 * <p>A key and value pair that is attached to the specified Amazon Lookout for Vision model.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag that is attached to the specified model.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag that is attached to the specified model.</p>
   */
  Value: string | undefined;
}

export interface CreateModelRequest {
  /**
   * <p>The name of the project in which you want to create a model version.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>A description for the version of the model.</p>
   */
  Description?: string;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>CreateModel</code>
   *       completes only once.  You choose the value to pass. For example, An issue
   *       might prevent you from getting a response from <code>CreateModel</code>.
   *       In this case, safely retry your call
   *        to <code>CreateModel</code> by using the same <code>ClientToken</code> parameter value. </p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *             This prevents retries after a network error from starting multiple training jobs. You'll need to
   *             provide your own value for other use cases. </p>
   *         <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateModel</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;

  /**
   * <p>The location where Amazon Lookout for Vision saves the training results.</p>
   */
  OutputConfig: OutputConfig | undefined;

  /**
   * <p>The identifier for your AWS KMS key.
   *          The key is used to encrypt training and test images copied into the service for model training. Your
   *          source images are unaffected.
   *          If this parameter is not specified, the copied images are encrypted by a key that AWS owns and manages.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A set of tags (key-value pairs) that you want to attach to the model.</p>
   */
  Tags?: Tag[];
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
   * <p>Performance metrics for the model. Not available until training has successfully completed.</p>
   */
  Performance?: ModelPerformance;
}

export interface CreateModelResponse {
  /**
   * <p>The response from a call to <code>CreateModel</code>.</p>
   */
  ModelMetadata?: ModelMetadata;
}

export interface CreateProjectRequest {
  /**
   * <p>The name for the project.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>CreateProject</code>
   *       completes only once.  You choose the value to pass. For example, An issue might prevent you from
   *       getting a response from <code>CreateProject</code>.
   *       In this case, safely retry your call
   *        to <code>CreateProject</code> by using the same <code>ClientToken</code> parameter value. </p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *           This prevents retries after a network error from making multiple project creation requests. You'll need to
   *            provide your own value for other use cases. </p>
   *          <p>An error occurs
   *        if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>CreateProject</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
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

export interface CreateProjectResponse {
  /**
   * <p>Information about the project.</p>
   */
  ProjectMetadata?: ProjectMetadata;
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
   * <p>Statistics about the images in a dataset.</p>
   */
  ImageStats?: DatasetImageStats;
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
   *       completes only once.  You choose the value to pass. For example, An issue might prevent you from getting a response from <code>DeleteDataset</code>.
   *       In this case, safely retry your call
   *        to <code>DeleteDataset</code> by using the same <code>ClientToken</code> parameter value. </p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *                  This prevents retries after a network error from making multiple deletetion requests. You'll need to
   *                  provide your own value for other use cases. </p>
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>DeleteDataset</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export interface DeleteDatasetResponse {}

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
   *       completes only once.  You choose the value to pass. For example, an issue might prevent
   *       you from getting a response from <code>DeleteModel</code>.
   *       In this case, safely retry your call
   *        to <code>DeleteModel</code> by using the same <code>ClientToken</code> parameter value.</p>
   *          <p>If you don't supply a value for ClientToken, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple model deletion requests. You'll need to
   *          provide your own value for other use cases. </p>
   *
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *        value for <code>ClientToken</code> is considered a new call to <code>DeleteModel</code>. An idempotency
   *        token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export interface DeleteModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model that was deleted.</p>
   */
  ModelArn?: string;
}

export interface DeleteProjectRequest {
  /**
   * <p>The name of the project to delete.</p>
   */
  ProjectName: string | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>DeleteProject</code>
   *          completes only once.  You choose the value to pass. For example, An issue
   *          might prevent you from getting a response from <code>DeleteProject</code>.
   *          In this case, safely retry your call
   *          to <code>DeleteProject</code> by using the same <code>ClientToken</code> parameter value. </p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple project deletion requests. You'll need to
   *          provide your own value for other use cases. </p>
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>DeleteProject</code>. An idempotency
   *          token is active for 8 hours.</p>
   */
  ClientToken?: string;
}

export interface DeleteProjectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the project that was deleted.</p>
   */
  ProjectArn?: string;
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

export interface DescribeDatasetResponse {
  /**
   * <p>The description of the requested dataset. </p>
   */
  DatasetDescription?: DatasetDescription;
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

  /**
   * <p>The minimum number of inference units used by the model. For more information,
   *          see <a>StartModel</a>
   *          </p>
   */
  MinInferenceUnits?: number;

  /**
   * <p>The maximum number of inference units Amazon Lookout for Vision uses to auto-scale the model.
   *          For more information, see <a>StartModel</a>.</p>
   */
  MaxInferenceUnits?: number;
}

export interface DescribeModelResponse {
  /**
   * <p>Contains the description of the model.</p>
   */
  ModelDescription?: ModelDescription;
}

export interface DescribeModelPackagingJobRequest {
  /**
   * <p>The name of the project that contains the model packaging job that you want to describe.
   * </p>
   */
  ProjectName: string | undefined;

  /**
   * <p>The job name for the model packaging job.
   *
   * </p>
   */
  JobName: string | undefined;
}

export enum TargetDevice {
  JETSON_XAVIER = "jetson_xavier",
}

export enum TargetPlatformAccelerator {
  NVIDIA = "NVIDIA",
}

export enum TargetPlatformArch {
  ARM64 = "ARM64",
  X86_64 = "X86_64",
}

export enum TargetPlatformOs {
  LINUX = "LINUX",
}

/**
 * <p>The platform on which a model runs on an AWS IoT Greengrass core device.</p>
 */
export interface TargetPlatform {
  /**
   * <p>The target operating system for the model. Linux is the only operating system
   *          that is currently supported.
   *       </p>
   */
  Os: TargetPlatformOs | string | undefined;

  /**
   * <p>The target architecture for the model. The currently supported architectures are
   *          X86_64 (64-bit version of the x86 instruction set) and ARM_64 (ARMv8 64-bit CPU).
   *       </p>
   */
  Arch: TargetPlatformArch | string | undefined;

  /**
   * <p>The target accelerator for the model. Currently, Amazon Lookout for Vision only supports NVIDIA (Nvidia graphics processing unit)
   *          and CPU accelerators. If you specify NVIDIA as an accelerator, you must also specify the <code>gpu-code</code>, <code>trt-ver</code>,
   *          and <code>cuda-ver</code> compiler options. If you don't specify an accelerator, Lookout for Vision uses the CPU for compilation and we highly recommend that you use the
   *          <a>GreengrassConfiguration$CompilerOptions</a> field. For example, you can use the following compiler options for CPU: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mcpu</code>: CPU micro-architecture. For example, <code>{'mcpu': 'skylake-avx512'}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mattr</code>: CPU flags. For example, <code>{'mattr': ['+neon', '+vfpv4']}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Accelerator?: TargetPlatformAccelerator | string;
}

/**
 * <p>Configuration information for the AWS IoT Greengrass component created in a model packaging job.
 *    For more information, see <a>StartModelPackagingJob</a>.
 * </p>
 *          <note>
 *             <p>You can't specify a component with the same <code>ComponentName</code> and <code>Componentversion</code> as
 *       an existing component with the same component name and component version.</p>
 *          </note>
 */
export interface GreengrassConfiguration {
  /**
   * <p>Additional compiler options for the Greengrass component. Currently,
   *    only NVIDIA Graphics Processing Units (GPU) and CPU accelerators are supported.
   *    If you specify <code>TargetDevice</code>, don't specify <code>CompilerOptions</code>.</p>
   *
   *
   *          <p>For more information, see
   *       <i>Compiler options</i> in the  Amazon Lookout for Vision Developer Guide. </p>
   */
  CompilerOptions?: string;

  /**
   * <p>The target device for the model. Currently the only supported value is <code>jetson_xavier</code>.
   *       If you specify <code>TargetDevice</code>, you can't specify
   *       <code>TargetPlatform</code>.
   *
   * </p>
   */
  TargetDevice?: TargetDevice | string;

  /**
   * <p>The target platform for the model. If you specify <code>TargetPlatform</code>, you can't specify
   *          <code>TargetDevice</code>.
   *       </p>
   */
  TargetPlatform?: TargetPlatform;

  /**
   * <p>
   *          An S3 location in which Lookout for Vision stores the component artifacts.
   *       </p>
   */
  S3OutputLocation: S3Location | undefined;

  /**
   * <p>
   *    A name for the AWS IoT Greengrass component.
   * </p>
   */
  ComponentName: string | undefined;

  /**
   * <p>A Version for the AWS IoT Greengrass component. If you don't provide a
   *       value, a default value of <code>
   *                <i>Model Version</i>.0.0</code> is used.
   * </p>
   */
  ComponentVersion?: string;

  /**
   * <p>
   *    A description for the AWS IoT Greengrass component.
   * </p>
   */
  ComponentDescription?: string;

  /**
   * <p>
   *    A set of tags (key-value pairs) that you want to attach to the AWS IoT Greengrass component.
   * </p>
   */
  Tags?: Tag[];
}

/**
 * <p>
 * Configuration information for a Amazon Lookout for Vision model packaging job. For more information,
 * see <a>StartModelPackagingJob</a>.
 * </p>
 */
export interface ModelPackagingConfiguration {
  /**
   * <p>
   * Configuration information for the AWS IoT Greengrass component in a model packaging job.
   * </p>
   */
  Greengrass: GreengrassConfiguration | undefined;
}

/**
 * <p>Information about the AWS IoT Greengrass component created by a model packaging job.
 *
 * </p>
 */
export interface GreengrassOutputDetails {
  /**
   * <p>
   * The Amazon Resource Name (ARN) of the component.
   * </p>
   */
  ComponentVersionArn?: string;

  /**
   * <p>
   * The name of the component.
   * </p>
   */
  ComponentName?: string;

  /**
   * <p>
   * The version of the component.
   * </p>
   */
  ComponentVersion?: string;
}

/**
 * <p>
 * Information about the output from a model packaging job.
 * </p>
 */
export interface ModelPackagingOutputDetails {
  /**
   * <p>
   * Information about the AWS IoT Greengrass component in a model packaging job.
   * </p>
   */
  Greengrass?: GreengrassOutputDetails;
}

export enum ModelPackagingJobStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>
 * Information about a model packaging job. For more information, see
 * <a>DescribeModelPackagingJob</a>.
 * </p>
 */
export interface ModelPackagingDescription {
  /**
   * <p>
   * The name of the model packaging job.
   * </p>
   */
  JobName?: string;

  /**
   * <p>The name of the project that's associated with a model that's in the model package.
   *
   * </p>
   */
  ProjectName?: string;

  /**
   * <p>The version of the model used in the model packaging job.
   *
   * </p>
   */
  ModelVersion?: string;

  /**
   * <p>
   * The configuration information used in the model packaging job.
   * </p>
   */
  ModelPackagingConfiguration?: ModelPackagingConfiguration;

  /**
   * <p>The description for the model packaging job.
   *
   * </p>
   */
  ModelPackagingJobDescription?: string;

  /**
   * <p>The AWS service used to package the job. Currently Lookout for Vision can package
   * jobs with AWS IoT Greengrass.
   * </p>
   */
  ModelPackagingMethod?: string;

  /**
   * <p>Information about the output of the model packaging job. For more information,
   *    see <a>DescribeModelPackagingJob</a>.
   * </p>
   */
  ModelPackagingOutputDetails?: ModelPackagingOutputDetails;

  /**
   * <p>
   * The status of the model packaging job.
   * </p>
   */
  Status?: ModelPackagingJobStatus | string;

  /**
   * <p>
   * The status message for the model packaging job.
   * </p>
   */
  StatusMessage?: string;

  /**
   * <p>
   *    The Unix timestamp for the time and date that the model packaging job was created.
   * </p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>
   *    The Unix timestamp for the time and date that the model packaging job was last updated.
   * </p>
   */
  LastUpdatedTimestamp?: Date;
}

export interface DescribeModelPackagingJobResponse {
  /**
   * <p>The description of the model packaging job.
   * </p>
   */
  ModelPackagingDescription?: ModelPackagingDescription;
}

export interface DescribeProjectRequest {
  /**
   * <p>The name of the project that you want to describe.</p>
   */
  ProjectName: string | undefined;
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

export interface DescribeProjectResponse {
  /**
   * <p>The description of the project.</p>
   */
  ProjectDescription?: ProjectDescription;
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

/**
 * <p>The source for an image.</p>
 */
export interface ImageSource {
  /**
   * <p>The type of the image.</p>
   */
  Type?: string;
}

/**
 * <p>The prediction results from a call to <a>DetectAnomalies</a>.
 *       <code>DetectAnomalyResult</code> includes classification information for the prediction (<code>IsAnomalous</code> and <code>Confidence</code>).
 *          If the model you use is an image segementation model, <code>DetectAnomalyResult</code> also includes segmentation information (<code>Anomalies</code>
 *          and <code>AnomalyMask</code>). Classification information is calculated separately from segmentation information
 *          and you shouldn't assume a relationship between them.</p>
 */
export interface DetectAnomalyResult {
  /**
   * <p>The source of the image that was analyzed. <code>direct</code> means that the
   *       images was supplied from the local computer. No other values are supported.</p>
   */
  Source?: ImageSource;

  /**
   * <p>True if Amazon Lookout for Vision classifies the image as containing an anomaly, otherwise false.</p>
   */
  IsAnomalous?: boolean;

  /**
   * <p>The confidence that Lookout for Vision has in the accuracy of the classification in <code>IsAnomalous</code>.</p>
   */
  Confidence?: number;

  /**
   * <p>If the model is an image segmentation model, <code>Anomalies</code> contains a list of
   *          anomaly types found in the image. There is one entry for each type of anomaly found (even
   *          if multiple instances of an anomaly type exist on the image). The first element in the list
   *          is always an anomaly type representing the image background ('background') and shouldn't be
   *          considered an anomaly. Amazon Lookout for Vision automatically add the background anomaly type to the
   *          response, and you don't need to declare a background anomaly type in your dataset.</p>
   *          <p>If the list has one entry ('background'), no anomalies were found on the image.</p>
   *          <p></p>
   *          <p>An image classification model doesn't return an <code>Anomalies</code> list. </p>
   */
  Anomalies?: Anomaly[];

  /**
   * <p>If the model is an image segmentation model, <code>AnomalyMask</code> contains pixel masks that covers all anomaly types found on the image.
   *
   *       Each anomaly type has a different mask color. To map a color to an anomaly type, see the <code>color</code> field
   *       of the <a>PixelAnomaly</a> object.</p>
   *          <p>An image classification model doesn't return an <code>Anomalies</code> list. </p>
   */
  AnomalyMask?: Uint8Array;
}

export interface DetectAnomaliesResponse {
  /**
   * <p>The results of the <code>DetectAnomalies</code> operation.</p>
   */
  DetectAnomalyResult?: DetectAnomalyResult;
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

export interface ListModelPackagingJobsRequest {
  /**
   * <p>
   * The name of the project for which you want to list the model packaging jobs.
   * </p>
   */
  ProjectName: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more
   *       results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination
   *       token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per paginated call. The largest value you can specify is 100.
   *       If you specify a value greater than 100, a ValidationException
   *       error occurs. The default value is 100. </p>
   */
  MaxResults?: number;
}

/**
 * <p>
 *    Metadata for a model packaging job. For more information, see <a>ListModelPackagingJobs</a>.
 * </p>
 */
export interface ModelPackagingJobMetadata {
  /**
   * <p>
   * The name of the model packaging job.
   * </p>
   */
  JobName?: string;

  /**
   * <p>
   * The project that contains the model that is in the model package.
   * </p>
   */
  ProjectName?: string;

  /**
   * <p>
   * The version of the model that is in the model package.
   * </p>
   */
  ModelVersion?: string;

  /**
   * <p>
   * The description for the model packaging job.
   * </p>
   */
  ModelPackagingJobDescription?: string;

  /**
   * <p>
   * The AWS service used to package the job. Currently Lookout for Vision can package
   *       jobs with AWS IoT Greengrass.
   * </p>
   */
  ModelPackagingMethod?: string;

  /**
   * <p>The status of the model packaging job.
   * </p>
   */
  Status?: ModelPackagingJobStatus | string;

  /**
   * <p>The status message for the model packaging job.
   * </p>
   */
  StatusMessage?: string;

  /**
   * <p>The Unix timestamp for the time and date that the model packaging job was created.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The Unix timestamp for the time and date that the model packaging job was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export interface ListModelPackagingJobsResponse {
  /**
   * <p>
   * A list of the model packaging jobs created for the specified Amazon Lookout for Vision project.
   * </p>
   */
  ModelPackagingJobs?: ModelPackagingJobMetadata[];

  /**
   * <p>If the previous response was incomplete (because there is more
   *    results to retrieve), Amazon Lookout for Vision returns a pagination token in the response. You can use this pagination
   *    token to retrieve the next set of results.
   * </p>
   */
  NextToken?: string;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model for which you want to list tags. </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of tag keys and values attached to the specified model.</p>
   */
  Tags?: Tag[];
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
   *          inference unit represents 1 hour of processing.
   *          Use a higher number to increase the TPS throughput of your model. You are charged for the number
   *          of inference units that you use.
   *       </p>
   */
  MinInferenceUnits: number | undefined;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>StartModel</code>
   *          completes only once.  You choose the value to pass. For example, An issue might prevent
   *          you from getting a response from <code>StartModel</code>.
   *          In this case, safely retry your call
   *          to <code>StartModel</code> by using the same <code>ClientToken</code> parameter value. </p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple start requests. You'll need to
   *          provide your own value for other use cases. </p>
   *
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>StartModel</code>. An idempotency
   *          token is active for 8 hours.
   *       </p>
   */
  ClientToken?: string;

  /**
   * <p>The maximum number of inference units to use for auto-scaling the model. If you don't
   *          specify a value, Amazon Lookout for Vision doesn't auto-scale the model.</p>
   */
  MaxInferenceUnits?: number;
}

export enum ModelHostingStatus {
  HOSTED = "HOSTED",
  HOSTING_FAILED = "HOSTING_FAILED",
  STARTING_HOSTING = "STARTING_HOSTING",
  STOPPING_HOSTING = "STOPPING_HOSTING",
  SYSTEM_UPDATING = "SYSTEM_UPDATING",
}

export interface StartModelResponse {
  /**
   * <p>The current running status of the model.</p>
   */
  Status?: ModelHostingStatus | string;
}

export interface StartModelPackagingJobRequest {
  /**
   * <p>
   * The name of the project which contains the version of the model that you want to package.
   * </p>
   */
  ProjectName: string | undefined;

  /**
   * <p>
   * The version of the model within the project that you want to package.
   * </p>
   */
  ModelVersion: string | undefined;

  /**
   * <p>A name for the model packaging job. If you don't supply a value, the service creates
   *    a job name for you.
   * </p>
   */
  JobName?: string;

  /**
   * <p>The configuration for the model packaging job.
   * </p>
   */
  Configuration: ModelPackagingConfiguration | undefined;

  /**
   * <p>A description for the model packaging job.
   * </p>
   */
  Description?: string;

  /**
   * <p>ClientToken is an idempotency token that ensures a call to <code>StartModelPackagingJob</code>
   *       completes only once.  You choose the value to pass. For example, An issue might prevent you
   *       from getting a response from <code>StartModelPackagingJob</code>.
   *       In this case, safely retry your call
   *       to <code>StartModelPackagingJob</code> by using the same <code>ClientToken</code> parameter value.</p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *       This prevents retries after a network error from making multiple dataset creation requests. You'll need to
   *       provide your own value for other use cases. </p>
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *       value for <code>ClientToken</code> is considered a new call to <code>StartModelPackagingJob</code>. An idempotency
   *       token is active for 8 hours.
   *    </p>
   */
  ClientToken?: string;
}

export interface StartModelPackagingJobResponse {
  /**
   * <p>The job name for the model packaging job. If you don't supply a job name in the <code>JobName</code> input parameter,
   *    the service creates a job name for you.
   *
   * </p>
   */
  JobName?: string;
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
   *          completes only once.  You choose the value to pass. For example, An issue
   *          might prevent you from getting a response from <code>StopModel</code>.
   *          In this case, safely retry your call
   *          to <code>StopModel</code> by using the same <code>ClientToken</code> parameter value.</p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple stop requests. You'll need to
   *          provide your own value for other use cases. </p>
   *          <p>An error occurs if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>StopModel</code>. An idempotency
   *          token is active for 8 hours.
   *
   *
   *       </p>
   */
  ClientToken?: string;
}

export interface StopModelResponse {
  /**
   * <p>The status of the model.</p>
   */
  Status?: ModelHostingStatus | string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model to assign the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value tags to assign to the model.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model from which you want to remove tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

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
   *          completes only once.  You choose the value to pass. For example, An issue
   *          might prevent you from getting a response from <code>UpdateDatasetEntries</code>.
   *          In this case, safely retry your call
   *          to <code>UpdateDatasetEntries</code> by using the same <code>ClientToken</code> parameter value.</p>
   *          <p>If you don't supply a value for <code>ClientToken</code>, the AWS SDK you are using inserts a value for you.
   *          This prevents retries after a network error from making multiple updates with the same dataset entries. You'll need to
   *          provide your own value for other use cases. </p>
   *          <p>An error occurs
   *          if the other input parameters are not the same as in the first request. Using a different
   *          value for <code>ClientToken</code> is considered a new call to <code>UpdateDatasetEntries</code>. An idempotency
   *          token is active for 8 hours.
   *       </p>
   */
  ClientToken?: string;
}

export interface UpdateDatasetEntriesResponse {
  /**
   * <p>The status of the dataset update.</p>
   */
  Status?: DatasetStatus | string;
}

/**
 * @internal
 */
export const PixelAnomalyFilterSensitiveLog = (obj: PixelAnomaly): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnomalyFilterSensitiveLog = (obj: Anomaly): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputS3ObjectFilterSensitiveLog = (obj: InputS3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetGroundTruthManifestFilterSensitiveLog = (obj: DatasetGroundTruthManifest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSourceFilterSensitiveLog = (obj: DatasetSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetMetadataFilterSensitiveLog = (obj: DatasetMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
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
export const OutputConfigFilterSensitiveLog = (obj: OutputConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelRequestFilterSensitiveLog = (obj: CreateModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPerformanceFilterSensitiveLog = (obj: ModelPerformance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelMetadataFilterSensitiveLog = (obj: ModelMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelResponseFilterSensitiveLog = (obj: CreateModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectMetadataFilterSensitiveLog = (obj: ProjectMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetImageStatsFilterSensitiveLog = (obj: DatasetImageStats): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetDescriptionFilterSensitiveLog = (obj: DatasetDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetResponseFilterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelRequestFilterSensitiveLog = (obj: DeleteModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelResponseFilterSensitiveLog = (obj: DeleteModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelRequestFilterSensitiveLog = (obj: DescribeModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputS3ObjectFilterSensitiveLog = (obj: OutputS3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelDescriptionFilterSensitiveLog = (obj: ModelDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelResponseFilterSensitiveLog = (obj: DescribeModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackagingJobRequestFilterSensitiveLog = (obj: DescribeModelPackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetPlatformFilterSensitiveLog = (obj: TargetPlatform): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GreengrassConfigurationFilterSensitiveLog = (obj: GreengrassConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackagingConfigurationFilterSensitiveLog = (obj: ModelPackagingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GreengrassOutputDetailsFilterSensitiveLog = (obj: GreengrassOutputDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackagingOutputDetailsFilterSensitiveLog = (obj: ModelPackagingOutputDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackagingDescriptionFilterSensitiveLog = (obj: ModelPackagingDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelPackagingJobResponseFilterSensitiveLog = (obj: DescribeModelPackagingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectDescriptionFilterSensitiveLog = (obj: ProjectDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResponseFilterSensitiveLog = (obj: DescribeProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectAnomaliesRequestFilterSensitiveLog = (obj: DetectAnomaliesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageSourceFilterSensitiveLog = (obj: ImageSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectAnomalyResultFilterSensitiveLog = (obj: DetectAnomalyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetectAnomaliesResponseFilterSensitiveLog = (obj: DetectAnomaliesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetEntriesRequestFilterSensitiveLog = (obj: ListDatasetEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetEntriesResponseFilterSensitiveLog = (obj: ListDatasetEntriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackagingJobsRequestFilterSensitiveLog = (obj: ListModelPackagingJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelPackagingJobMetadataFilterSensitiveLog = (obj: ModelPackagingJobMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelPackagingJobsResponseFilterSensitiveLog = (obj: ListModelPackagingJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsRequestFilterSensitiveLog = (obj: ListModelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsResponseFilterSensitiveLog = (obj: ListModelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResponseFilterSensitiveLog = (obj: ListProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartModelRequestFilterSensitiveLog = (obj: StartModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartModelResponseFilterSensitiveLog = (obj: StartModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartModelPackagingJobRequestFilterSensitiveLog = (obj: StartModelPackagingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartModelPackagingJobResponseFilterSensitiveLog = (obj: StartModelPackagingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopModelRequestFilterSensitiveLog = (obj: StopModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopModelResponseFilterSensitiveLog = (obj: StopModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetEntriesRequestFilterSensitiveLog = (obj: UpdateDatasetEntriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetEntriesResponseFilterSensitiveLog = (obj: UpdateDatasetEntriesResponse): any => ({
  ...obj,
});
