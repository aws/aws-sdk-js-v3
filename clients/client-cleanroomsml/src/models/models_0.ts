// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CleanRoomsMLServiceException as __BaseException } from "./CleanRoomsMLServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>Provides information about an Amazon S3 bucket and path.</p>
 * @public
 */
export interface S3ConfigMap {
  /**
   * <p>The Amazon S3 location URI.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Defines the Amazon S3 bucket where the configured audience is stored.</p>
 * @public
 */
export interface AudienceDestination {
  /**
   * <p>The Amazon S3 bucket and path for the configured audience.</p>
   * @public
   */
  s3Destination: S3ConfigMap | undefined;
}

/**
 * @public
 */
export interface ListAudienceExportJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</p>
   * @public
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
 * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
 * @public
 */
export interface AudienceSize {
  /**
   * <p>Whether the audience size is defined in absolute terms or as a percentage. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   * @public
   */
  type: AudienceSizeType | undefined;

  /**
   * <p>Specify an audience size value.</p>
   * @public
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
 * <p>Details about the status of a resource.</p>
 * @public
 */
export interface StatusDetails {
  /**
   * <p>The status code that was returned. The status code is intended for programmatic error handling. Clean Rooms ML will not change the status code for existing error conditions.</p>
   * @public
   */
  statusCode?: string;

  /**
   * <p>The error message that was returned. The message is intended for human consumption and can change at any time. Use the <code>statusCode</code> for programmatic error handling.</p>
   * @public
   */
  message?: string;
}

/**
 * <p>Provides information about the audience export job.</p>
 * @public
 */
export interface AudienceExportJobSummary {
  /**
   * <p>The time at which the audience export job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the audience export job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The name of the audience export job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that was exported.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * <p>The description of the audience export job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the audience export job.</p>
   * @public
   */
  status: AudienceExportJobStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails;

  /**
   * <p>The Amazon S3 bucket where the audience export is stored.</p>
   * @public
   */
  outputLocation?: string;
}

/**
 * @public
 */
export interface ListAudienceExportJobsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The audience export jobs that match the request.</p>
   * @public
   */
  audienceExportJobs: AudienceExportJobSummary[] | undefined;
}

/**
 * <p>The request parameters for this request are incorrect.</p>
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
 * <p>You can't complete this action because another resource depends on this resource.</p>
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
 * <p>The resource you are requesting does not exist.</p>
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
 * <p>You have exceeded your service quota.</p>
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
 * @public
 */
export interface StartAudienceExportJobRequest {
  /**
   * <p>The name of the audience export job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you want to export.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * <p>The description of the audience export job.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface DeleteAudienceGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you want to delete.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceGenerationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * <p>The relevance score of a generated audience.</p>
 * @public
 */
export interface RelevanceMetric {
  /**
   * <p>The size of the generated audience. Must match one of the sizes in the configured audience model.</p>
   * @public
   */
  audienceSize: AudienceSize | undefined;

  /**
   * <p>The relevance score of the generated audience.</p>
   * @public
   */
  score?: number;
}

/**
 * <p>Metrics that describe the quality of the generated audience.</p>
 * @public
 */
export interface AudienceQualityMetrics {
  /**
   * <p>The relevance scores of the generated audience.</p>
   * @public
   */
  relevanceMetrics: RelevanceMetric[] | undefined;

  /**
   * <p>The recall score of the generated audience. Recall is the percentage of the most similar users (by default, the most similar 20%) from a sample of the training data that are included in the seed audience by the audience generation job. Values range from 0-1, larger values indicate a better audience. A recall value approximately equal to the maximum bin size indicates that the audience model is equivalent to random selection.
   *       </p>
   * @public
   */
  recallMetric?: number;
}

/**
 * <p>The parameters for the SQL type Protected Query.</p>
 * @public
 */
export interface ProtectedQuerySQLParameters {
  /**
   * <p>The query string to be submitted.</p>
   * @public
   */
  queryString?: string;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a
   *          collaboration.</p>
   * @public
   */
  analysisTemplateArn?: string;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  parameters?: Record<string, string>;
}

/**
 * <p>Defines the Amazon S3 bucket where the seed audience for the generating audience is stored.</p>
 * @public
 */
export interface AudienceGenerationJobDataSource {
  /**
   * <p>Defines the Amazon S3 bucket where the seed audience for the generating audience is stored. A valid data source is a JSON line file in the following format:</p>
   *          <p>
   *             <code>\{"user_id": "111111"\}</code>
   *          </p>
   *          <p>
   *             <code>\{"user_id": "222222"\}</code>
   *          </p>
   *          <p>
   *             <code>...</code>
   *          </p>
   * @public
   */
  dataSource?: S3ConfigMap;

  /**
   * <p>The ARN of the IAM role that can read the Amazon S3 bucket where the seed audience is stored.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters;
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
   * <p>The time at which the audience generation job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the audience generation job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * <p>The name of the audience generation job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the audience generation job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the audience generation job.</p>
   * @public
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * <p>Details about the status of the audience generation job.</p>
   * @public
   */
  statusDetails?: StatusDetails;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job. </p>
   * @public
   */
  seedAudience?: AudienceGenerationJobDataSource;

  /**
   * <p>Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify <code>TRUE</code>, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first <code>minimumSeedSize</code> count of users are from the seed.</p>
   * @public
   */
  includeSeedInOutput?: boolean;

  /**
   * <p>The identifier of the collaboration that this audience generation job is associated with.</p>
   * @public
   */
  collaborationId?: string;

  /**
   * <p>The relevance scores for different audience sizes and the recall score of the generated audience. </p>
   * @public
   */
  metrics?: AudienceQualityMetrics;

  /**
   * <p>The AWS account that started this audience generation job.</p>
   * @public
   */
  startedBy?: string;

  /**
   * <p>The tags that are associated to this audience generation job.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The unique identifier of the protected query for this audience generation job.</p>
   * @public
   */
  protectedQueryIdentifier?: string;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.</p>
   * @public
   */
  configuredAudienceModelArn?: string;

  /**
   * <p>The identifier of the collaboration that contains the audience generation jobs that you are interested in.</p>
   * @public
   */
  collaborationId?: string;
}

/**
 * <p>Provides information about the configured audience generation job.</p>
 * @public
 */
export interface AudienceGenerationJobSummary {
  /**
   * <p>The time at which the audience generation job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the audience generation job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;

  /**
   * <p>The name of the audience generation job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the audience generation job.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the audience generation job.</p>
   * @public
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for this audience generation job.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The identifier of the collaboration that contains this audience generation job.</p>
   * @public
   */
  collaborationId?: string;

  /**
   * <p>The AWS Account that submitted the job.</p>
   * @public
   */
  startedBy?: string;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The audience generation jobs that match the request.</p>
   * @public
   */
  audienceGenerationJobs: AudienceGenerationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobRequest {
  /**
   * <p>The name of the audience generation job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that is used for this audience generation job.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The seed audience that is used to generate the audience.</p>
   * @public
   */
  seedAudience: AudienceGenerationJobDataSource | undefined;

  /**
   * <p>Whether the seed audience is included in the audience generation output.</p>
   * @public
   */
  includeSeedInOutput?: boolean;

  /**
   * <p>The identifier of the collaboration that contains the audience generation job.</p>
   * @public
   */
  collaborationId?: string;

  /**
   * <p>The description of the audience generation job.</p>
   * @public
   */
  description?: string;

  /**
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
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAudienceGenerationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job.</p>
   * @public
   */
  audienceGenerationJobArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAudienceModelRequest {
  /**
   * <p>The start date and time of the training window.</p>
   * @public
   */
  trainingDataStartTime?: Date;

  /**
   * <p>The end date and time of the training window.</p>
   * @public
   */
  trainingDataEndTime?: Date;

  /**
   * <p>The name of the audience model resource.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset for this audience model.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.</p>
   * @public
   */
  kmsKeyArn?: string;

  /**
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
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the audience model.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateAudienceModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAudienceModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience model that you want to delete.</p>
   * @public
   */
  audienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetAudienceModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the audience model that you are interested in.</p>
   * @public
   */
  audienceModelArn: string | undefined;
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
   * <p>The time at which the audience model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the audience model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The start date specified for the training window.</p>
   * @public
   */
  trainingDataStartTime?: Date;

  /**
   * <p>The end date specified for the training window.</p>
   * @public
   */
  trainingDataEndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * <p>The name of the audience model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset that was used for this audience model.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * <p>The status of the audience model.</p>
   * @public
   */
  status: AudienceModelStatus | undefined;

  /**
   * <p>Details about the status of the audience model.</p>
   * @public
   */
  statusDetails?: StatusDetails;

  /**
   * <p>The KMS key ARN used for the audience model.</p>
   * @public
   */
  kmsKeyArn?: string;

  /**
   * <p>The tags that are assigned to the audience model.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the audience model.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAudienceModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about the audience model.</p>
 * @public
 */
export interface AudienceModelSummary {
  /**
   * <p>The time at which the audience model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the audience model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * <p>The name of the audience model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset that was used for the audience model.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * <p>The status of the audience model.</p>
   * @public
   */
  status: AudienceModelStatus | undefined;

  /**
   * <p>The description of the audience model.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListAudienceModelsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The audience models that match the request.</p>
   * @public
   */
  audienceModels: AudienceModelSummary[] | undefined;
}

/**
 * <p>Returns the relevance scores at these audience sizes when used in the <a>GetAudienceGenerationJob</a> for a specified audience generation job and configured audience model.</p>
 *          <p>Specifies the list of allowed <code>audienceSize</code> values when used in the <a>StartAudienceExportJob</a> for an audience generation job. You can use the <code>ABSOLUTE</code>
 *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
 *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
 * @public
 */
export interface AudienceSizeConfig {
  /**
   * <p>Whether the audience output sizes are defined as an absolute number or a percentage.</p>
   * @public
   */
  audienceSizeType: AudienceSizeType | undefined;

  /**
   * <p>An array of the different audience output sizes.</p>
   * @public
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
 * <p>Configuration information necessary for the configure audience model output.</p>
 * @public
 */
export interface ConfiguredAudienceModelOutputConfig {
  /**
   * <p>Defines the Amazon S3 bucket where the configured audience is stored.</p>
   * @public
   */
  destination: AudienceDestination | undefined;

  /**
   * <p>The ARN of the IAM role that can write the Amazon S3 bucket.</p>
   * @public
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
   * <p>The name of the configured audience model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience model to use for the configured audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * <p>Configure the Amazon S3 location and IAM Role for audiences created using this configured audience model. Each audience will have a unique location. The IAM Role must have <code>s3:PutObject</code> permission on the destination Amazon S3 location. If the destination is protected with Amazon S3 KMS-SSE, then the Role must also have the required KMS permissions.</p>
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * <p>The description of the configured audience model.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Whether audience metrics are shared.</p>
   * @public
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model. The default value is 500.</p>
   * @public
   */
  minMatchingSeedSize?: number;

  /**
   * <p>Configure the list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
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
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Configure how the service tags audience generation jobs created using this configured audience model. If you specify <code>NONE</code>, the tags from the <a>StartAudienceGenerationJob</a> request determine the tags of the audience generation job. If you specify <code>FROM_PARENT_RESOURCE</code>, the audience generation job inherits the tags from the configured audience model, by default. Tags in the <a>StartAudienceGenerationJob</a> will override the default.</p>
   *          <p>When the client is in a different account than the configured audience model, the tags from the client are never applied to a resource in the caller's account.</p>
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}

/**
 * @public
 */
export interface CreateConfiguredAudienceModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you want to delete.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   * @public
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
   * <p>The time at which the configured audience model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured audience model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The name of the configured audience model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience model used for this configured audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * <p>The output configuration of the configured audience model</p>
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * <p>The description of the configured audience model.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the configured audience model.</p>
   * @public
   */
  status: ConfiguredAudienceModelStatus | undefined;

  /**
   * <p>Whether audience metrics are shared.</p>
   * @public
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   * @public
   */
  minMatchingSeedSize?: number;

  /**
   * <p>The list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code>
   *             <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code>
   *             <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
   * <p>The tags that are associated to this configured audience model.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Provides the <code>childResourceTagOnCreatePolicy</code> that was used for this configured audience model.</p>
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Information about the configured audience model.</p>
 * @public
 */
export interface ConfiguredAudienceModelSummary {
  /**
   * <p>The time at which the configured audience model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured audience model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The name of the configured audience model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience model that was used to create the configured audience model.</p>
   * @public
   */
  audienceModelArn: string | undefined;

  /**
   * <p>The output configuration of the configured audience model.</p>
   * @public
   */
  outputConfig: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * <p>The description of the configured audience model.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The status of the configured audience model.</p>
   * @public
   */
  status: ConfiguredAudienceModelStatus | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The configured audience models.</p>
   * @public
   */
  configuredAudienceModels: ConfiguredAudienceModelSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you want to update.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The new output configuration.</p>
   * @public
   */
  outputConfig?: ConfiguredAudienceModelOutputConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the new audience model that you want to use.</p>
   * @public
   */
  audienceModelArn?: string;

  /**
   * <p>The new value for whether to share audience metrics.</p>
   * @public
   */
  sharedAudienceMetrics?: SharedAudienceMetrics[];

  /**
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   * @public
   */
  minMatchingSeedSize?: number;

  /**
   * <p>The new audience size configuration.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig;

  /**
   * <p>The new description of the configured audience model.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateConfiguredAudienceModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was updated.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredAudienceModelPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model policy that you want to delete.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that you are interested in.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredAudienceModelPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The configured audience model policy. This is a JSON IAM resource policy.</p>
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the configured audience model that the resource policy will govern.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The IAM resource policy.</p>
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   * @public
   */
  previousPolicyHash?: string;

  /**
   * <p>Use this to prevent unexpected concurrent modification of the policy.</p>
   * @public
   */
  policyExistenceCondition?: PolicyExistenceCondition;
}

/**
 * @public
 */
export interface PutConfiguredAudienceModelPolicyResponse {
  /**
   * <p>The IAM resource policy.</p>
   * @public
   */
  configuredAudienceModelPolicy: string | undefined;

  /**
   * <p>A cryptographic hash of the contents of the policy used to prevent unexpected concurrent modification of the policy.</p>
   * @public
   */
  policyHash: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you are interested in.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are associated with the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to assign tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
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
   *                <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>Defines the Glue data source that contains the training data.</p>
 * @public
 */
export interface GlueDataSource {
  /**
   * <p>The Glue table that contains the training data.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The Glue database that contains the training data.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The Glue catalog that contains the training data.</p>
   * @public
   */
  catalogId?: string;
}

/**
 * <p>Defines information about the Glue data source that contains the training data.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>A GlueDataSource object that defines the catalog ID, database name, and table name for the training data.</p>
   * @public
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
 * <p>Metadata for a column.</p>
 * @public
 */
export interface ColumnSchema {
  /**
   * <p>The name of a column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The data type of column.</p>
   * @public
   */
  columnTypes: ColumnType[] | undefined;
}

/**
 * <p>Defines the Glue data source and schema mapping information.</p>
 * @public
 */
export interface DatasetInputConfig {
  /**
   * <p>The schema information for the training data.</p>
   * @public
   */
  schema: ColumnSchema[] | undefined;

  /**
   * <p>A DataSource object that specifies the Glue data source for the training data.</p>
   * @public
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
 * <p>Defines where the training dataset is located, what type of data it contains, and how to access the data.</p>
 * @public
 */
export interface Dataset {
  /**
   * <p>What type of information is found in the dataset.</p>
   * @public
   */
  type: DatasetType | undefined;

  /**
   * <p>A DatasetInputConfig object that defines the data source and schema mapping.</p>
   * @public
   */
  inputConfig: DatasetInputConfig | undefined;
}

/**
 * @public
 */
export interface CreateTrainingDatasetRequest {
  /**
   * <p>The name of the training dataset. This name must be unique in your account and region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the <code>dataSource</code> field of each dataset.</p>
   *          <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an <code>AccessDeniedException</code> error.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema. You must provide a role that has read access to these tables.</p>
   * @public
   */
  trainingData: Dataset[] | undefined;

  /**
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
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the training dataset.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateTrainingDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset resource.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrainingDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset that you want to delete.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset that you are interested in.</p>
   * @public
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
   * <p>The time at which the training dataset was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the training dataset was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * <p>The name of the training dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Metadata about the requested training data. </p>
   * @public
   */
  trainingData: Dataset[] | undefined;

  /**
   * <p>The status of the training dataset.</p>
   * @public
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * <p>The IAM role used to read the training data.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The tags that are assigned to this training dataset.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the training dataset.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTrainingDatasetsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Provides information about the training dataset.</p>
 * @public
 */
export interface TrainingDatasetSummary {
  /**
   * <p>The time at which the training dataset was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the training dataset was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the training dataset.</p>
   * @public
   */
  trainingDatasetArn: string | undefined;

  /**
   * <p>The name of the training dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the training dataset.</p>
   * @public
   */
  status: TrainingDatasetStatus | undefined;

  /**
   * <p>The description of the training dataset.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListTrainingDatasetsResponse {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The training datasets that match the request.</p>
   * @public
   */
  trainingDatasets: TrainingDatasetSummary[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key values of tags that you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @internal
 */
export const ProtectedQuerySQLParametersFilterSensitiveLog = (obj: ProtectedQuerySQLParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudienceGenerationJobDataSourceFilterSensitiveLog = (obj: AudienceGenerationJobDataSource): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAudienceGenerationJobResponseFilterSensitiveLog = (obj: GetAudienceGenerationJobResponse): any => ({
  ...obj,
  ...(obj.seedAudience && { seedAudience: AudienceGenerationJobDataSourceFilterSensitiveLog(obj.seedAudience) }),
});

/**
 * @internal
 */
export const StartAudienceGenerationJobRequestFilterSensitiveLog = (obj: StartAudienceGenerationJobRequest): any => ({
  ...obj,
  ...(obj.seedAudience && { seedAudience: AudienceGenerationJobDataSourceFilterSensitiveLog(obj.seedAudience) }),
});
