// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CleanRoomsMLServiceException as __BaseException } from "./CleanRoomsMLServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>Provides information about an Amazon S3 bucket and path.</p>
 */
export interface S3ConfigMap {
  /**
   * @public
   * <p>The Amazon S3 location URI.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>Defines the Amazon S3 bucket where the configured audience is stored.</p>
 */
export interface AudienceDestination {
  /**
   * @public
   * <p>The Amazon S3 bucket and path for the configured audience.</p>
   */
  s3Destination: S3ConfigMap | undefined;
}

/**
 * @public
 */
export interface ListAudienceExportJobsRequest {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</p>
   */
  audienceGenerationJobArn?: string;
}

/**
 * @public
 * @enum
 */
export const AudienceSizeType = {
  ABSOLUTE: "ABSOLUTE",
  PERCENTAGE: "PERCENTAGE",
} as const;

/**
 * @public
 */
export type AudienceSizeType = (typeof AudienceSizeType)[keyof typeof AudienceSizeType];

/**
 * @public
 * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
 */
export interface AudienceSize {
  /**
   * @public
   * <p>Whether the audience size is defined in absolute terms or as a percentage. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   */
  type: AudienceSizeType | undefined;

  /**
   * @public
   * <p>Specify an audience size value.</p>
   */
  value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AudienceExportJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
} as const;

/**
 * @public
 */
export type AudienceExportJobStatus = (typeof AudienceExportJobStatus)[keyof typeof AudienceExportJobStatus];

/**
 * @public
 * <p>Details about the status of a resource.</p>
 */
export interface StatusDetails {
  /**
   * @public
   * <p>The status code that was returned. The status code is intended for programmatic error handling. Clean Rooms ML will not change the status code for existing error conditions.</p>
   */
  statusCode?: string;

  /**
   * @public
   * <p>The error message that was returned. The message is intended for human consumption and can change at any time. Use the <code>statusCode</code> for programmatic error handling.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Provides information about the audience export job.</p>
 */
export interface AudienceExportJobSummary {
  /**
   * @public
   * <p>The time at which the audience export job was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the audience export job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The name of the audience export job.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job that was exported.</p>
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * @public
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   */
  audienceSize: AudienceSize | undefined;

  /**
   * @public
   * <p>The description of the audience export job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the audience export job.</p>
   */
  status: AudienceExportJobStatus | undefined;

  /**
   * @public
   * <p>Details about the status of a resource.</p>
   */
  statusDetails?: StatusDetails;

  /**
   * @public
   * <p>The Amazon S3 bucket where the audience export is stored.</p>
   */
  outputLocation?: string;
}

/**
 * @public
 */
export interface ListAudienceExportJobsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The audience export jobs that match the request.</p>
   */
  audienceExportJobs: AudienceExportJobSummary[] | undefined;
}

/**
 * @public
 * <p>The request parameters for this request are incorrect.</p>
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
 * @public
 * <p>A resource with that name already exists in this region.</p>
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
 * <p>The resource you are requesting does not exist.</p>
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
 * @public
 * <p>You have exceeded your service quota.</p>
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
 * @public
 */
export interface StartAudienceExportJobRequest {
  /**
   * @public
   * <p>The name of the audience export job.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you want to export.</p>
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * @public
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   */
  audienceSize: AudienceSize | undefined;

  /**
   * @public
   * <p>The description of the audience export job.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface DeleteAudienceGenerationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you want to delete.</p>
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceGenerationJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</p>
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 * <p>The relevance score of a generated audience.</p>
 */
export interface RelevanceMetric {
  /**
   * @public
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   */
  audienceSize: AudienceSize | undefined;

  /**
   * @public
   * <p>The relevance score of the generated audience.</p>
   */
  score?: number;
}

/**
 * @public
 * <p>Metrics that describe the quality of the generated audience.</p>
 */
export interface AudienceQualityMetrics {
  /**
   * @public
   * <p>The relevance scores of the generated audience.</p>
   */
  relevanceMetrics: RelevanceMetric[] | undefined;
}

/**
 * @public
 * <p>Defines the Amazon S3 bucket where the training data for the configured audience is stored.</p>
 */
export interface AudienceGenerationJobDataSource {
  /**
   * @public
   * <p>The Amazon S3 bucket where the training data for the configured audience is stored.</p>
   */
  dataSource: S3ConfigMap | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that can read the Amazon S3 bucket where the training data is stored.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AudienceGenerationJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
} as const;

/**
 * @public
 */
export type AudienceGenerationJobStatus =
  (typeof AudienceGenerationJobStatus)[keyof typeof AudienceGenerationJobStatus];

/**
 * @public
 */
export interface GetAudienceGenerationJobResponse {
  /**
   * @public
   * <p>The time at which the audience generation job was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the audience generation job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * @public
   * <p>The name of the audience generation job.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the audience generation job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the audience generation job.</p>
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * @public
   * <p>Details about the status of the audience generation job.</p>
   */
  statusDetails?: StatusDetails;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job. </p>
   */
  seedAudience?: AudienceGenerationJobDataSource;

  /**
   * @public
   * <p>Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify <code>TRUE</code>, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first <code>minimumSeedSize</code> count of users are from the seed.</p>
   */
  includeSeedInOutput?: boolean;

  /**
   * @public
   * <p>The identifier of the collaboration that this audience generation job is associated with.</p>
   */
  collaborationId?: string;

  /**
   * @public
   * <p>The relevance scores for different audience sizes. </p>
   */
  metrics?: AudienceQualityMetrics;

  /**
   * @public
   * <p>The AWS account that started this audience generation job.</p>
   */
  startedBy?: string;

  /**
   * @public
   * <p>The tags that are associated to this audience generation job.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsRequest {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.</p>
   */
  configuredAudienceModelArn?: string;

  /**
   * @public
   * <p>The identifier of the collaboration that contains the audience generation jobs that you are interested in.</p>
   */
  collaborationId?: string;
}

/**
 * @public
 * <p>Provides information about the configured audience generation job.</p>
 */
export interface AudienceGenerationJobSummary {
  /**
   * @public
   * <p>The time at which the audience generation job was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the audience generation job was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * @public
   * <p>The name of the audience generation job.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the audience generation job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the audience generation job.</p>
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for this audience generation job.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the collaboration that contains this audience generation job.</p>
   */
  collaborationId?: string;

  /**
   * @public
   * <p>The AWS Account that submitted the job.</p>
   */
  startedBy?: string;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The audience generation jobs that match the request.</p>
   */
  audienceGenerationJobs: AudienceGenerationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobRequest {
  /**
   * @public
   * <p>The name of the audience generation job.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that is used for this audience generation job.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The seed audience that is used to generate the audience.</p>
   */
  seedAudience: AudienceGenerationJobDataSource | undefined;

  /**
   * @public
   * <p>Whether the seed audience is included in the audience generation output.</p>
   */
  includeSeedInOutput?: boolean;

  /**
   * @public
   * <p>The identifier of the collaboration that contains the audience generation job.</p>
   */
  collaborationId?: string;

  /**
   * @public
   * <p>The description of the audience generation job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAudienceModelRequest {
  /**
   * @public
   * <p>The start date and time of the training window.</p>
   */
  trainingDataStartTime?: Date;

  /**
   * @public
   * <p>The end date and time of the training window.</p>
   */
  trainingDataEndTime?: Date;

  /**
   * @public
   * <p>The name of the audience model resource.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset for this audience model.</p>
   */
  trainingDatasetArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The description of the audience model.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateAudienceModelResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAudienceModelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model that you want to delete.</p>
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceModelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model that you are interested in.</p>
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AudienceModelMetricType = {
  MEAN_RECIPROCAL_RANK: "MEAN_RECIPROCAL_RANK",
  NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN: "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN",
  PRECISION: "PRECISION",
  RECALL: "RECALL",
} as const;

/**
 * @public
 */
export type AudienceModelMetricType = (typeof AudienceModelMetricType)[keyof typeof AudienceModelMetricType];

/**
 * @public
 * <p>The audience model metrics.</p>
 */
export interface AudienceModelMetric {
  /**
   * @public
   * <p>The audience model metric.</p>
   */
  type: AudienceModelMetricType | undefined;

  /**
   * @public
   * <p>The number of users that were used to generate these model metrics.</p>
   */
  forTopKItemPredictions: number | undefined;

  /**
   * @public
   * <p>The value of the audience model metric</p>
   */
  value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const AudienceModelStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
} as const;

/**
 * @public
 */
export type AudienceModelStatus = (typeof AudienceModelStatus)[keyof typeof AudienceModelStatus];

/**
 * @public
 */
export interface GetAudienceModelResponse {
  /**
   * @public
   * <p>The time at which the audience model was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the audience model was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The start date specified for the training window.</p>
   */
  trainingDataStartTime?: Date;

  /**
   * @public
   * <p>The end date specified for the training window.</p>
   */
  trainingDataEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   */
  audienceModelArn: string | undefined;

  /**
   * @public
   * <p>The name of the audience model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset that was used for this audience model.</p>
   */
  trainingDatasetArn: string | undefined;

  /**
   * @public
   * <p>The status of the audience model.</p>
   */
  status: AudienceModelStatus | undefined;

  /**
   * @public
   * <p>Details about the status of the audience model.</p>
   */
  statusDetails?: StatusDetails;

  /**
   * @public
   * <p>Accuracy metrics for the model.</p>
   */
  metrics?: AudienceModelMetric[];

  /**
   * @public
   * <p>The KMS key ARN used for the audience model.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The tags that are assigned to the audience model.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The description of the audience model.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAudienceModelsRequest {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about the audience model.</p>
 */
export interface AudienceModelSummary {
  /**
   * @public
   * <p>The time at which the audience model was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the audience model was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   */
  audienceModelArn: string | undefined;

  /**
   * @public
   * <p>The name of the audience model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset that was used for the audience model.</p>
   */
  trainingDatasetArn: string | undefined;

  /**
   * @public
   * <p>The status of the audience model.</p>
   */
  status: AudienceModelStatus | undefined;

  /**
   * @public
   * <p>The description of the audience model.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAudienceModelsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The audience models that match the request.</p>
   */
  audienceModels: AudienceModelSummary[] | undefined;
}

/**
 * @public
 * <p>Configure the list of audience output sizes that can be created. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code>
 *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
 *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
 */
export interface AudienceSizeConfig {
  /**
   * @public
   * <p>Whether the audience output sizes are defined as an absolute number or a percentage.</p>
   */
  audienceSizeType: AudienceSizeType | undefined;

  /**
   * @public
   * <p>An array of the different audience output sizes.</p>
   */
  audienceSizeBins: number[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TagOnCreatePolicy = {
  FROM_PARENT_RESOURCE: "FROM_PARENT_RESOURCE",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TagOnCreatePolicy = (typeof TagOnCreatePolicy)[keyof typeof TagOnCreatePolicy];

/**
 * @public
 * <p>Configuration information necessary for the configure audience model output.</p>
 */
export interface ConfiguredAudienceModelOutputConfig {
  /**
   * @public
   * <p>Defines the Amazon S3 bucket where the configured audience is stored.</p>
   */
  destination: AudienceDestination | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that can write the Amazon S3 bucket.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SharedAudienceMetrics = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type SharedAudienceMetrics = (typeof SharedAudienceMetrics)[keyof typeof SharedAudienceMetrics];

/**
 * @public
 */
export interface CreateConfiguredAudienceModelRequest {
  /**
   * @public
   * <p>The name of the configured audience model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model to use for the configured audience model.</p>
   */
  audienceModelArn: string | undefined;

  /**
   * @public
   * <p>Configure the Amazon S3 location and IAM Role for audiences created using this configured audience model. Each audience will have a unique location. The IAM Role must have <code>s3:PutObject</code> permission on the destination Amazon S3 location. If the destination is protected with Amazon S3 KMS-SSE, then the Role must also have the required KMS permissions.</p>
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * @public
   * <p>The description of the configured audience model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Whether audience metrics are shared.</p>
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * @public
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   */
  minMatchingSeedSize?: number;

  /**
   * @public
   * <p>Configure the list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
   * @public
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Configure how the service tags audience generation jobs created using this configured audience model. If you specify <code>NONE</code>, the tags from the <a>StartAudienceGenerationJob</a> request determine the tags of the audience generation job. If you specify <code>FROM_PARENT_RESOURCE</code>, the audience generation job inherits the tags from the configured audience model, by default. Tags in the <a>StartAudienceGenerationJob</a> will override the default.</p>
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you want to delete.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfiguredAudienceModelStatus = {
  ACTIVE: "ACTIVE",
} as const;

/**
 * @public
 */
export type ConfiguredAudienceModelStatus =
  (typeof ConfiguredAudienceModelStatus)[keyof typeof ConfiguredAudienceModelStatus];

/**
 * @public
 */
export interface GetConfiguredAudienceModelResponse {
  /**
   * @public
   * <p>The time at which the configured audience model was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the configured audience model was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The name of the configured audience model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model used for this configured audience model.</p>
   */
  audienceModelArn: string | undefined;

  /**
   * @public
   * <p>The output configuration of the configured audience model</p>
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * @public
   * <p>The description of the configured audience model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The status of the configured audience model.</p>
   */
  status: ConfiguredAudienceModelStatus | undefined;

  /**
   * @public
   * <p>Whether audience metrics are shared.</p>
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * @public
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   */
  minMatchingSeedSize?: number;

  /**
   * @public
   * <p>The list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
   * @public
   * <p>The tags that are associated to this configured audience model.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Provides the <code>childResourceTagOnCreatePolicy</code> that was used for this configured audience model.</p>
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsRequest {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about the configured audience model.</p>
 */
export interface ConfiguredAudienceModelSummary {
  /**
   * @public
   * <p>The time at which the configured audience model was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the configured audience model was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The name of the configured audience model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the audience model that was used to create the configured audience model.</p>
   */
  audienceModelArn: string | undefined;

  /**
   * @public
   * <p>The output configuration of the configured audience model.</p>
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * @public
   * <p>The description of the configured audience model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The status of the configured audience model.</p>
   */
  status: ConfiguredAudienceModelStatus | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The configured audience models.</p>
   */
  configuredAudienceModels: ConfiguredAudienceModelSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you want to update.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The new output configuration.</p>
   */
  outputConfig?: ConfiguredAudienceModelOutputConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new audience model that you want to use.</p>
   */
  audienceModelArn?: string;

  /**
   * @public
   * <p>The new value for whether to share audience metrics.</p>
   */
  sharedAudienceMetrics?: SharedAudienceMetrics[];

  /**
   * @public
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   */
  minMatchingSeedSize?: number;

  /**
   * @public
   * <p>The new audience size configuration.</p>
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
   * @public
   * <p>The new description of the configured audience model.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was updated.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model policy that you want to delete.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The configured audience model policy. This is a JSON IAM resource policy.</p>
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * @public
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   */
  policyHash: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyExistenceCondition = {
  POLICY_MUST_EXIST: "POLICY_MUST_EXIST",
  POLICY_MUST_NOT_EXIST: "POLICY_MUST_NOT_EXIST",
} as const;

/**
 * @public
 */
export type PolicyExistenceCondition = (typeof PolicyExistenceCondition)[keyof typeof PolicyExistenceCondition];

/**
 * @public
 */
export interface PutConfiguredAudienceModelPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configured audience model that the resource policy will govern.</p>
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * @public
   * <p>The IAM resource policy.</p>
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * @public
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   */
  previousPolicyHash?: string;

  /**
   * @public
   * <p>Use this to prevent unexpected concurrent modification of the policy.</p>
   */
  policyExistenceCondition?: PolicyExistenceCondition;
}

/**
 * @public
 */
export interface PutConfiguredAudienceModelPolicyResponse {
  /**
   * @public
   * <p>The IAM resource policy.</p>
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * @public
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   */
  policyHash: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you are interested in.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags that are associated with the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to assign tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>Defines the Glue data source that contains the training data.</p>
 */
export interface GlueDataSource {
  /**
   * @public
   * <p>The Glue table that contains the training data.</p>
   */
  tableName: string | undefined;

  /**
   * @public
   * <p>The Glue database that contains the training data.</p>
   */
  databaseName: string | undefined;

  /**
   * @public
   * <p>The Glue catalog that contains the training data.</p>
   */
  catalogId?: string;
}

/**
 * @public
 * <p>Defines information about the Glue data source that contains the training data.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>A GlueDataSource object that defines the catalog ID, database name, and table name for the training data.</p>
   */
  glueDataSource: GlueDataSource | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnType = {
  CATEGORICAL_FEATURE: "CATEGORICAL_FEATURE",
  ITEM_ID: "ITEM_ID",
  NUMERICAL_FEATURE: "NUMERICAL_FEATURE",
  TIMESTAMP: "TIMESTAMP",
  USER_ID: "USER_ID",
} as const;

/**
 * @public
 */
export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

/**
 * @public
 * <p>Metadata for a column.</p>
 */
export interface ColumnSchema {
  /**
   * @public
   * <p>The name of a column.</p>
   */
  columnName: string | undefined;

  /**
   * @public
   * <p>The data type of column.</p>
   */
  columnTypes: ColumnType[] | undefined;
}

/**
 * @public
 * <p>Defines the Glue data source and schema mapping information.</p>
 */
export interface DatasetInputConfig {
  /**
   * @public
   * <p>The schema information for the training data.</p>
   */
  schema: ColumnSchema[] | undefined;

  /**
   * @public
   * <p>A DataSource object that specifies the Glue data source for the training data.</p>
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetType = {
  INTERACTIONS: "INTERACTIONS",
} as const;

/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 * <p>Defines where the training dataset is located, what type of data it contains, and how to access the data.</p>
 */
export interface Dataset {
  /**
   * @public
   * <p>What type of information is found in the dataset.</p>
   */
  type: DatasetType | undefined;

  /**
   * @public
   * <p>A DatasetInputConfig object that defines the data source and schema mapping.</p>
   */
  inputConfig: DatasetInputConfig | undefined;
}

/**
 * @public
 */
export interface CreateTrainingDatasetRequest {
  /**
   * @public
   * <p>The name of the training dataset. This name must be unique in your account and region.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the <code>dataSource</code> field of each dataset.</p>
   *          <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an <code>AccessDeniedException</code> error.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema. You must provide a role that has read access to these tables.</p>
   */
  trainingData: Dataset[] | undefined;

  /**
   * @public
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The description of the training dataset.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateTrainingDatasetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset resource.</p>
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainingDatasetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset that you want to delete.</p>
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingDatasetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset that you are interested in.</p>
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingDatasetStatus = {
  ACTIVE: "ACTIVE",
} as const;

/**
 * @public
 */
export type TrainingDatasetStatus = (typeof TrainingDatasetStatus)[keyof typeof TrainingDatasetStatus];

/**
 * @public
 */
export interface GetTrainingDatasetResponse {
  /**
   * @public
   * <p>The time at which the training dataset was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the training dataset was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset.</p>
   */
  trainingDatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the training dataset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Metadata about the requested training data. </p>
   */
  trainingData: Dataset[] | undefined;

  /**
   * @public
   * <p>The status of the training dataset.</p>
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * @public
   * <p>The IAM role used to read the training data.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The tags that are assigned to this training dataset.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The description of the training dataset.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTrainingDatasetsRequest {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum size of the results that is returned per call.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Provides information about the training dataset.</p>
 */
export interface TrainingDatasetSummary {
  /**
   * @public
   * <p>The time at which the training dataset was created.</p>
   */
  createTime: Date | undefined;

  /**
   * @public
   * <p>The most recent time at which the training dataset was updated.</p>
   */
  updateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the training dataset.</p>
   */
  trainingDatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the training dataset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The status of the training dataset.</p>
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * @public
   * <p>The description of the training dataset.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTrainingDatasetsResponse {
  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The training datasets that match the request.</p>
   */
  trainingDatasets: TrainingDatasetSummary[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key values of tags that you want to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
