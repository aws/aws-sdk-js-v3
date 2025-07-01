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
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the audience generation job that you are interested in.</p>
   * @public
   */
  audienceGenerationJobArn?: string | undefined;
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
   * <p>Whether the audience size is defined in absolute terms or as a percentage. You can use the <code>ABSOLUTE</code> <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code> <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
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
  statusCode?: string | undefined;

  /**
   * <p>The error message that was returned. The message is intended for human consumption and can change at any time. Use the <code>statusCode</code> for programmatic error handling.</p>
   * @public
   */
  message?: string | undefined;
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
  description?: string | undefined;

  /**
   * <p>The status of the audience export job.</p>
   * @public
   */
  status: AudienceExportJobStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The Amazon S3 bucket where the audience export is stored.</p>
   * @public
   */
  outputLocation?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceExportJobsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

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
   * The name of the service quota limit that was exceeded
   * @public
   */
  quotaName?: string | undefined;

  /**
   * The current limit on the service quota that was exceeded
   * @public
   */
  quotaValue?: number | undefined;

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
    this.quotaName = opts.quotaName;
    this.quotaValue = opts.quotaValue;
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
  description?: string | undefined;
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
  score?: number | undefined;
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
   * <p>The recall score of the generated audience. Recall is the percentage of the most similar users (by default, the most similar 20%) from a sample of the training data that are included in the seed audience by the audience generation job. Values range from 0-1, larger values indicate a better audience. A recall value approximately equal to the maximum bin size indicates that the audience model is equivalent to random selection. </p>
   * @public
   */
  recallMetric?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;

/**
 * @public
 */
export type WorkerComputeType = (typeof WorkerComputeType)[keyof typeof WorkerComputeType];

/**
 * <p>Configuration information about the compute workers that perform the transform job.</p>
 * @public
 */
export interface WorkerComputeConfiguration {
  /**
   * <p>The instance type of the compute workers that are used.</p>
   * @public
   */
  type?: WorkerComputeType | undefined;

  /**
   * <p>The number of compute workers that are used.</p>
   * @public
   */
  number?: number | undefined;
}

/**
 * <p>Provides configuration information for the instances that will perform the compute work.</p>
 * @public
 */
export type ComputeConfiguration = ComputeConfiguration.WorkerMember | ComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ComputeConfiguration {
  /**
   * <p>The worker instances that will perform the compute work.</p>
   * @public
   */
  export interface WorkerMember {
    worker: WorkerComputeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    worker?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    worker: (value: WorkerComputeConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ComputeConfiguration, visitor: Visitor<T>): T => {
    if (value.worker !== undefined) return visitor.worker(value.worker);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  queryString?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the analysis template within a collaboration.</p>
   * @public
   */
  analysisTemplateArn?: string | undefined;

  /**
   * <p>The protected query SQL parameters.</p>
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * <p>Defines the Amazon S3 bucket where the seed audience for the generating audience is stored.</p>
 * @public
 */
export interface AudienceGenerationJobDataSource {
  /**
   * <p>Defines the Amazon S3 bucket where the seed audience for the generating audience is stored. A valid data source is a JSON line file in the following format:</p> <p> <code>\{"user_id": "111111"\}</code> </p> <p> <code>\{"user_id": "222222"\}</code> </p> <p> <code>...</code> </p>
   * @public
   */
  dataSource?: S3ConfigMap | undefined;

  /**
   * <p>The ARN of the IAM role that can read the Amazon S3 bucket where the seed audience is stored.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The protected SQL query parameters.</p>
   * @public
   */
  sqlParameters?: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>Provides configuration information for the instances that will perform the compute work.</p>
   * @public
   */
  sqlComputeConfiguration?: ComputeConfiguration | undefined;
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
  description?: string | undefined;

  /**
   * <p>The status of the audience generation job.</p>
   * @public
   */
  status: AudienceGenerationJobStatus | undefined;

  /**
   * <p>Details about the status of the audience generation job.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.</p>
   * @public
   */
  configuredAudienceModelArn: string | undefined;

  /**
   * <p>The seed audience that was used for this audience generation job. This field will be null if the account calling the API is the account that started this audience generation job. </p>
   * @public
   */
  seedAudience?: AudienceGenerationJobDataSource | undefined;

  /**
   * <p>Configure whether the seed users are included in the output audience. By default, Clean Rooms ML removes seed users from the output audience. If you specify <code>TRUE</code>, the seed users will appear first in the output. Clean Rooms ML does not explicitly reveal whether a user was in the seed, but the recipient of the audience will know that the first <code>minimumSeedSize</code> count of users are from the seed.</p>
   * @public
   */
  includeSeedInOutput?: boolean | undefined;

  /**
   * <p>The identifier of the collaboration that this audience generation job is associated with.</p>
   * @public
   */
  collaborationId?: string | undefined;

  /**
   * <p>The relevance scores for different audience sizes and the recall score of the generated audience. </p>
   * @public
   */
  metrics?: AudienceQualityMetrics | undefined;

  /**
   * <p>The AWS account that started this audience generation job.</p>
   * @public
   */
  startedBy?: string | undefined;

  /**
   * <p>The tags that are associated to this audience generation job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The unique identifier of the protected query for this audience generation job.</p>
   * @public
   */
  protectedQueryIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured audience model that was used for the audience generation jobs that you are interested in.</p>
   * @public
   */
  configuredAudienceModelArn?: string | undefined;

  /**
   * <p>The identifier of the collaboration that contains the audience generation jobs that you are interested in.</p>
   * @public
   */
  collaborationId?: string | undefined;
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
  description?: string | undefined;

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
  collaborationId?: string | undefined;

  /**
   * <p>The AWS Account that submitted the job.</p>
   * @public
   */
  startedBy?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceGenerationJobsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

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
  includeSeedInOutput?: boolean | undefined;

  /**
   * <p>The identifier of the collaboration that contains the audience generation job.</p>
   * @public
   */
  collaborationId?: string | undefined;

  /**
   * <p>The description of the audience generation job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface CreateAudienceModelRequest {
  /**
   * <p>The start date and time of the training window.</p>
   * @public
   */
  trainingDataStartTime?: Date | undefined;

  /**
   * <p>The end date and time of the training window.</p>
   * @public
   */
  trainingDataEndTime?: Date | undefined;

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
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the audience model.</p>
   * @public
   */
  description?: string | undefined;
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
  trainingDataStartTime?: Date | undefined;

  /**
   * <p>The end date specified for the training window.</p>
   * @public
   */
  trainingDataEndTime?: Date | undefined;

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
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The KMS key ARN used for the audience model.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The tags that are assigned to the audience model.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the audience model.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListAudienceModelsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The audience models that match the request.</p>
   * @public
   */
  audienceModels: AudienceModelSummary[] | undefined;
}

/**
 * <p>Returns the relevance scores at these audience sizes when used in the <a>GetAudienceGenerationJob</a> for a specified audience generation job and configured audience model.</p> <p>Specifies the list of allowed <code>audienceSize</code> values when used in the <a>StartAudienceExportJob</a> for an audience generation job. You can use the <code>ABSOLUTE</code> <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code> <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
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
  description?: string | undefined;

  /**
   * <p>Whether audience metrics are shared.</p>
   * @public
   */
  sharedAudienceMetrics: SharedAudienceMetrics[] | undefined;

  /**
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model. The default value is 500.</p>
   * @public
   */
  minMatchingSeedSize?: number | undefined;

  /**
   * <p>Configure the list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code> <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code> <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Configure how the service tags audience generation jobs created using this configured audience model. If you specify <code>NONE</code>, the tags from the <a>StartAudienceGenerationJob</a> request determine the tags of the audience generation job. If you specify <code>FROM_PARENT_RESOURCE</code>, the audience generation job inherits the tags from the configured audience model, by default. Tags in the <a>StartAudienceGenerationJob</a> will override the default.</p> <p>When the client is in a different account than the configured audience model, the tags from the client are never applied to a resource in the caller's account.</p>
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy | undefined;
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
  description?: string | undefined;

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
  minMatchingSeedSize?: number | undefined;

  /**
   * <p>The list of output sizes of audiences that can be created using this configured audience model. A request to <a>StartAudienceGenerationJob</a> that uses this configured audience model must have an <code>audienceSize</code> selected from this list. You can use the <code>ABSOLUTE</code> <a>AudienceSize</a> to configure out audience sizes using the count of identifiers in the output. You can use the <code>Percentage</code> <a>AudienceSize</a> to configure sizes in the range 1-100 percent.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * <p>The tags that are associated to this configured audience model.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Provides the <code>childResourceTagOnCreatePolicy</code> that was used for this configured audience model.</p>
   * @public
   */
  childResourceTagOnCreatePolicy?: TagOnCreatePolicy | undefined;
}

/**
 * @public
 */
export interface ListConfiguredAudienceModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  description?: string | undefined;

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
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

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
  outputConfig?: ConfiguredAudienceModelOutputConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new audience model that you want to use.</p>
   * @public
   */
  audienceModelArn?: string | undefined;

  /**
   * <p>The new value for whether to share audience metrics.</p>
   * @public
   */
  sharedAudienceMetrics?: SharedAudienceMetrics[] | undefined;

  /**
   * <p>The minimum number of users from the seed audience that must match with users in the training data of the audience model.</p>
   * @public
   */
  minMatchingSeedSize?: number | undefined;

  /**
   * <p>The new audience size configuration.</p>
   * @public
   */
  audienceSizeConfig?: AudienceSizeConfig | undefined;

  /**
   * <p>The new description of the configured audience model.</p>
   * @public
   */
  description?: string | undefined;
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
  previousPolicyHash?: string | undefined;

  /**
   * <p>Use this to prevent unexpected concurrent modification of the policy.</p>
   * @public
   */
  policyExistenceCondition?: PolicyExistenceCondition | undefined;
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
 * <p>Provides configuration information for the inference container.</p>
 * @public
 */
export interface InferenceContainerConfig {
  /**
   * <p>The registry path of the docker image that contains the inference algorithm. Clean Rooms ML currently only supports the <code>registry/repository[:tag]</code> image path format. For more information about using images in Clean Rooms ML, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html#sagemaker-Type-AlgorithmSpecification-TrainingImage">Sagemaker API reference</a>.</p>
   * @public
   */
  imageUri: string | undefined;
}

/**
 * <p>Information about the model metric that is reported for a trained model.</p>
 * @public
 */
export interface MetricDefinition {
  /**
   * <p>The name of the model metric.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The regular expression statement that defines how the model metric is reported.</p>
   * @public
   */
  regex: string | undefined;
}

/**
 * <p>Provides configuration information for the dockerized container where the model algorithm is stored.</p>
 * @public
 */
export interface ContainerConfig {
  /**
   * <p>The registry path of the docker image that contains the algorithm. Clean Rooms ML currently only supports the <code>registry/repository[:tag]</code> image path format. For more information about using images in Clean Rooms ML, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AlgorithmSpecification.html#sagemaker-Type-AlgorithmSpecification-TrainingImage">Sagemaker API reference</a>.</p>
   * @public
   */
  imageUri: string | undefined;

  /**
   * <p>The entrypoint script for a Docker container used to run a training job. This script takes precedence over the default train processing instructions. See How Amazon SageMaker Runs Your Training Image for additional information. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Sagemaker runs your training image</a>.</p>
   * @public
   */
  entrypoint?: string[] | undefined;

  /**
   * <p>The arguments for a container used to run a training job. See How Amazon SageMaker Runs Your Training Image for additional information. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-training-algo-dockerfile.html">How Sagemaker runs your training image</a>.</p>
   * @public
   */
  arguments?: string[] | undefined;

  /**
   * <p>A list of metric definition objects. Each object specifies the metric name and regular expressions used to parse algorithm logs. Amazon Web Services Clean Rooms ML publishes each metric to all members' Amazon CloudWatch using IAM role configured in <a>PutMLConfiguration</a>.</p>
   * @public
   */
  metricDefinitions?: MetricDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmRequest {
  /**
   * <p>The name of the configured model algorithm.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used to access the repository.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Configuration information for the training container, including entrypoints and arguments.</p>
   * @public
   */
  trainingContainerConfig?: ContainerConfig | undefined;

  /**
   * <p>Configuration information for the inference container that is used when you run an inference job on a configured model algorithm.</p>
   * @public
   */
  inferenceContainerConfig?: InferenceContainerConfig | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the configured ML model algorithm and associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredModelAlgorithmRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that you want to delete.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that you want to return information about.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmResponse {
  /**
   * <p>The time at which the configured model algorithm was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration information of the training container for the configured model algorithm.</p>
   * @public
   */
  trainingContainerConfig?: ContainerConfig | undefined;

  /**
   * <p>Configuration information for the inference container.</p>
   * @public
   */
  inferenceContainerConfig?: InferenceContainerConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role that was used to create the configured model algorithm.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The description of the configured model algorithm.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the configured ML model and associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides summary information about a configured model algorithm.</p>
 * @public
 */
export interface ConfiguredModelAlgorithmSummary {
  /**
   * <p>The time at which the configured model algorithm was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of configured model algorithms.</p>
   * @public
   */
  configuredModelAlgorithms: ConfiguredModelAlgorithmSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelExportFileType = {
  MODEL: "MODEL",
  OUTPUT: "OUTPUT",
} as const;

/**
 * @public
 */
export type TrainedModelExportFileType = (typeof TrainedModelExportFileType)[keyof typeof TrainedModelExportFileType];

/**
 * @public
 * @enum
 */
export const TrainedModelExportsMaxSizeUnitType = {
  GB: "GB",
} as const;

/**
 * @public
 */
export type TrainedModelExportsMaxSizeUnitType =
  (typeof TrainedModelExportsMaxSizeUnitType)[keyof typeof TrainedModelExportsMaxSizeUnitType];

/**
 * <p>The maximum size of the trained model metrics that can be exported. If the trained model metrics dataset is larger than this value, it will not be exported.</p>
 * @public
 */
export interface TrainedModelExportsMaxSize {
  /**
   * <p>The unit of measurement for the data size.</p>
   * @public
   */
  unit: TrainedModelExportsMaxSizeUnitType | undefined;

  /**
   * <p>The maximum size of the dataset to export.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>Information about how the trained model exports are configured.</p>
 * @public
 */
export interface TrainedModelExportsConfigurationPolicy {
  /**
   * <p>The maximum size of the data that can be exported.</p>
   * @public
   */
  maxSize: TrainedModelExportsMaxSize | undefined;

  /**
   * <p>The files that are exported during the trained model export job.</p>
   * @public
   */
  filesToExport: TrainedModelExportFileType[] | undefined;
}

/**
 * <p>Provides the information necessary for a user to access the logs.</p>
 * @public
 */
export interface LogsConfigurationPolicy {
  /**
   * <p>A list of account IDs that are allowed to access the logs.</p>
   * @public
   */
  allowedAccountIds: string[] | undefined;

  /**
   * <p>A regular expression pattern that is used to parse the logs and return information that matches the pattern.</p>
   * @public
   */
  filterPattern?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelInferenceMaxOutputSizeUnitType = {
  GB: "GB",
} as const;

/**
 * @public
 */
export type TrainedModelInferenceMaxOutputSizeUnitType =
  (typeof TrainedModelInferenceMaxOutputSizeUnitType)[keyof typeof TrainedModelInferenceMaxOutputSizeUnitType];

/**
 * <p>Information about the maximum output size for a trained model inference job.</p>
 * @public
 */
export interface TrainedModelInferenceMaxOutputSize {
  /**
   * <p>The measurement unit to use.</p>
   * @public
   */
  unit: TrainedModelInferenceMaxOutputSizeUnitType | undefined;

  /**
   * <p>The maximum output size value.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>Provides configuration information for the trained model inference job.</p>
 * @public
 */
export interface TrainedModelInferenceJobsConfigurationPolicy {
  /**
   * <p>The logs container for the trained model inference job.</p>
   * @public
   */
  containerLogs?: LogsConfigurationPolicy[] | undefined;

  /**
   * <p>The maximum allowed size of the output of the trained model inference job.</p>
   * @public
   */
  maxOutputSize?: TrainedModelInferenceMaxOutputSize | undefined;
}

/**
 * @public
 * @enum
 */
export const NoiseLevelType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type NoiseLevelType = (typeof NoiseLevelType)[keyof typeof NoiseLevelType];

/**
 * <p>Provides the configuration policy for metrics generation.</p>
 * @public
 */
export interface MetricsConfigurationPolicy {
  /**
   * <p>The noise level for the generated metrics.</p>
   * @public
   */
  noiseLevel: NoiseLevelType | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelArtifactMaxSizeUnitType = {
  GB: "GB",
} as const;

/**
 * @public
 */
export type TrainedModelArtifactMaxSizeUnitType =
  (typeof TrainedModelArtifactMaxSizeUnitType)[keyof typeof TrainedModelArtifactMaxSizeUnitType];

/**
 * <p>Specifies the maximum size limit for trained model artifacts. This configuration helps control storage costs and ensures that trained models don't exceed specified size constraints. The size limit applies to the total size of all artifacts produced by the training job.</p>
 * @public
 */
export interface TrainedModelArtifactMaxSize {
  /**
   * <p>The unit of measurement for the maximum artifact size. Valid values include common storage units such as bytes, kilobytes, megabytes, gigabytes, and terabytes.</p>
   * @public
   */
  unit: TrainedModelArtifactMaxSizeUnitType | undefined;

  /**
   * <p>The numerical value for the maximum artifact size limit. This value is interpreted according to the specified unit.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * <p>The configuration policy for the trained models.</p>
 * @public
 */
export interface TrainedModelsConfigurationPolicy {
  /**
   * <p>The container for the logs of the trained model.</p>
   * @public
   */
  containerLogs?: LogsConfigurationPolicy[] | undefined;

  /**
   * <p>The container for the metrics of the trained model.</p>
   * @public
   */
  containerMetrics?: MetricsConfigurationPolicy | undefined;

  /**
   * <p>The maximum size limit for trained model artifacts as defined in the configuration policy. This setting helps enforce consistent size limits across trained models in the collaboration.</p>
   * @public
   */
  maxArtifactSize?: TrainedModelArtifactMaxSize | undefined;
}

/**
 * <p>Information about the privacy configuration policies for a configured model algorithm association.</p>
 * @public
 */
export interface PrivacyConfigurationPolicies {
  /**
   * <p>Specifies who will receive the trained models.</p>
   * @public
   */
  trainedModels?: TrainedModelsConfigurationPolicy | undefined;

  /**
   * <p>Specifies who will receive the trained model export.</p>
   * @public
   */
  trainedModelExports?: TrainedModelExportsConfigurationPolicy | undefined;

  /**
   * <p>Specifies who will receive the trained model inference jobs.</p>
   * @public
   */
  trainedModelInferenceJobs?: TrainedModelInferenceJobsConfigurationPolicy | undefined;
}

/**
 * <p>Information about the privacy configuration for a configured model algorithm association.</p>
 * @public
 */
export interface PrivacyConfiguration {
  /**
   * <p>The privacy configuration policies for a configured model algorithm association.</p>
   * @public
   */
  policies: PrivacyConfigurationPolicies | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmAssociationRequest {
  /**
   * <p>The membership ID of the member who is associating this configured model algorithm.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that you want to associate.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm association.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies the privacy configuration information for the configured model algorithm association. This information includes the maximum data size that can be exported.</p>
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfiguredModelAlgorithmAssociationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfiguredModelAlgorithmAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that you want to delete.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The membership ID of the member that is deleting the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that you want to return information about.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The collaboration ID for the collaboration that contains the configured model algorithm association that you want to return information about.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationResponse {
  /**
   * <p>The time at which the configured model algorithm association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the configured model algorithm association.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm association.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The account ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>Information about the privacy configuration for a configured model algorithm association.</p>
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmAssociationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that you want to return information about.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfiguredModelAlgorithmAssociationResponse {
  /**
   * <p>The time at which the configured model algorithm association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the configured model algorithm association.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that was associated to the collaboration.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The privacy configuration information for the configured model algorithm association.</p>
   * @public
   */
  privacyConfiguration?: PrivacyConfiguration | undefined;

  /**
   * <p>The description of the configured model algorithm association.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmAssociationsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm associations you are interested in.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * <p>Provides summary information about the configured model algorithm association.</p>
 * @public
 */
export interface ConfiguredModelAlgorithmAssociationSummary {
  /**
   * <p>The time at which the configured model algorithm association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that is being associated.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm association.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the configured model algorithm association.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListConfiguredModelAlgorithmAssociationsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of configured model algorithm associations.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: ConfiguredModelAlgorithmAssociationSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the configured model algorithm associations that you are interested in.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * <p>Provides summary information about a configured model algorithm in a collaboration.</p>
 * @public
 */
export interface CollaborationConfiguredModelAlgorithmAssociationSummary {
  /**
   * <p>The time at which the configured model algorithm association was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the configured model algorithm association was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The name of the configured model algorithm association.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the configured model algorithm association.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The membership ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the configured model algorithm association.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm that is associated to the collaboration.</p>
   * @public
   */
  configuredModelAlgorithmArn: string | undefined;

  /**
   * <p>The account ID of the member that created the configured model algorithm association.</p>
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The configured model algorithm associations that belong to this collaboration.</p>
   * @public
   */
  collaborationConfiguredModelAlgorithmAssociations:
    | CollaborationConfiguredModelAlgorithmAssociationSummary[]
    | undefined;
}

/**
 * @public
 */
export interface ListCollaborationMLInputChannelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channels that you want to list.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MLInputChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type MLInputChannelStatus = (typeof MLInputChannelStatus)[keyof typeof MLInputChannelStatus];

/**
 * <p>Provides summary information about an ML input channel in a collaboration.</p>
 * @public
 */
export interface CollaborationMLInputChannelSummary {
  /**
   * <p>The time at which the ML input channel was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the ML input channel was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channel.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the ML input channel.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The associated configured model algorithms used to create the ML input channel.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The status of the ML input channel.</p>
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * <p>The account ID of the member who created the ML input channel.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The description of the ML input channel.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationMLInputChannelsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of ML input channels that you wanted.</p>
   * @public
   */
  collaborationMLInputChannelsList: CollaborationMLInputChannelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelExportJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model export jobs that you are interested in.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that was used to create the export jobs that you are interested in.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model to filter export jobs by. When specified, only export jobs for this specific version of the trained model are returned.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * <p>Provides information about the member who will receive trained model exports.</p>
 * @public
 */
export interface TrainedModelExportReceiverMember {
  /**
   * <p>The account ID of the member who will receive trained model exports.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Information about the output of the trained model export job.</p>
 * @public
 */
export interface TrainedModelExportOutputConfiguration {
  /**
   * <p>The members that will received the exported trained model output.</p>
   * @public
   */
  members: TrainedModelExportReceiverMember[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelExportJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
} as const;

/**
 * @public
 */
export type TrainedModelExportJobStatus =
  (typeof TrainedModelExportJobStatus)[keyof typeof TrainedModelExportJobStatus];

/**
 * <p>Provides summary information about a trained model export job in a collaboration.</p>
 * @public
 */
export interface CollaborationTrainedModelExportJobSummary {
  /**
   * <p>The time at which the trained model export job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model export job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The name of the trained model export job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Information about the output of the trained model export job.</p>
   * @public
   */
  outputConfiguration: TrainedModelExportOutputConfiguration | undefined;

  /**
   * <p>The status of the trained model.</p>
   * @public
   */
  status: TrainedModelExportJobStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The account ID of the member that created the trained model.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that is being exported.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model that was exported in this job.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The membership ID of the member that created the trained model export job.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model export job.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelExportJobsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The exports jobs that exist for the requested trained model in the requested collaboration.</p>
   * @public
   */
  collaborationTrainedModelExportJobs: CollaborationTrainedModelExportJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelInferenceJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model inference jobs that you are interested in.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that was used to create the trained model inference jobs that you are interested in.</p>
   * @public
   */
  trainedModelArn?: string | undefined;

  /**
   * <p>The version identifier of the trained model to filter inference jobs by. When specified, only inference jobs that used this specific version of the trained model are returned.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogsStatus = {
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_SUCCEEDED: "PUBLISH_SUCCEEDED",
} as const;

/**
 * @public
 */
export type LogsStatus = (typeof LogsStatus)[keyof typeof LogsStatus];

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_SUCCEEDED: "PUBLISH_SUCCEEDED",
} as const;

/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * <p>Defines who will receive inference results.</p>
 * @public
 */
export interface InferenceReceiverMember {
  /**
   * <p>The account ID of the member that can receive inference results.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Configuration information about how the inference output is stored.</p>
 * @public
 */
export interface InferenceOutputConfiguration {
  /**
   * <p>The MIME type used to specify the output data.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>Defines the members that can receive inference output.</p>
   * @public
   */
  members: InferenceReceiverMember[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelInferenceJobStatus = {
  ACTIVE: "ACTIVE",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_PENDING: "CANCEL_PENDING",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TrainedModelInferenceJobStatus =
  (typeof TrainedModelInferenceJobStatus)[keyof typeof TrainedModelInferenceJobStatus];

/**
 * <p>Provides summary information about a trained model inference job in a collaboration.</p>
 * @public
 */
export interface CollaborationTrainedModelInferenceJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model inference job.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * <p>The membership ID of the membership that contains the trained model inference job.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model that was used for inference in this job.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model inference job.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The status of the trained model inference job.</p>
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * <p>Returns output configuration information for the trained model inference job.</p>
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>The name of the trained model inference job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the trained model inference job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>the trained model inference job metrics status.</p>
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * <p>Details about the metrics status for trained model inference job.</p>
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * <p>The trained model inference job logs status.</p>
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * <p>Details about the logs status for the trained model inference job.</p>
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * <p>The time at which the trained model inference job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model inference job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The account ID that created the trained model inference job.</p>
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelInferenceJobsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The trained model inference jobs that you are interested in.</p>
   * @public
   */
  collaborationTrainedModelInferenceJobs: CollaborationTrainedModelInferenceJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained models you are interested in.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * <p>Contains information about an incremental training data channel that was used to create a trained model. This structure provides details about the base model and channel configuration used during incremental training.</p>
 * @public
 */
export interface IncrementalTrainingDataChannelOutput {
  /**
   * <p>The name of the incremental training data channel that was used.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The version identifier of the trained model that was used for incremental training.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>The name of the base trained model that was used for incremental training.</p>
   * @public
   */
  modelName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainedModelStatus = {
  ACTIVE: "ACTIVE",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_PENDING: "CANCEL_PENDING",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TrainedModelStatus = (typeof TrainedModelStatus)[keyof typeof TrainedModelStatus];

/**
 * <p>Provides summary information about a trained model in a collaboration.</p>
 * @public
 */
export interface CollaborationTrainedModelSummary {
  /**
   * <p>The time at which the trained model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The name of the trained model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version identifier of this trained model version.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>Information about the incremental training data channels used to create this version of the trained model.</p>
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The membership ID of the member that created the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The status of the trained model.</p>
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for this trained model.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The account ID of the member that created the trained model.</p>
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface ListCollaborationTrainedModelsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The trained models in the collaboration that you requested.</p>
   * @public
   */
  collaborationTrainedModels: CollaborationTrainedModelSummary[] | undefined;
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
export interface DeleteMLConfigurationRequest {
  /**
   * <p>The membership ID of the of the member that is deleting the ML modeling configuration.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMLConfigurationRequest {
  /**
   * <p>The membership ID of the member that owns the ML configuration you want to return information about.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * <p>The Amazon S3 location where the exported model artifacts are stored.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>Provides information about an Amazon S3 bucket and path.</p>
   * @public
   */
  s3Destination: S3ConfigMap | undefined;
}

/**
 * <p>Configuration information about how the exported model artifacts are stored.</p>
 * @public
 */
export interface MLOutputConfiguration {
  /**
   * <p>The Amazon S3 location where exported model artifacts are stored.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service access role that is used to store the model artifacts.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface GetMLConfigurationResponse {
  /**
   * <p>The membership ID of the member that owns the ML configuration you requested.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon S3 location where ML model output is stored.</p>
   * @public
   */
  defaultOutputLocation: MLOutputConfiguration | undefined;

  /**
   * <p>The time at which the ML configuration was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the ML configuration was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface PutMLConfigurationRequest {
  /**
   * <p>The membership ID of the member that is being configured.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The default Amazon S3 location where ML output is stored for the specified member.</p>
   * @public
   */
  defaultOutputLocation: MLOutputConfiguration | undefined;
}

/**
 * <p>Provides information necessary to perform the protected query.</p>
 * @public
 */
export interface ProtectedQueryInputParameters {
  /**
   * <p>The parameters for the SQL type Protected Query.</p>
   * @public
   */
  sqlParameters: ProtectedQuerySQLParameters | undefined;

  /**
   * <p>Provides configuration information for the workers that will perform the protected query.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;
}

/**
 * <p>Provides the data source that is used to define an input channel.</p>
 * @public
 */
export type InputChannelDataSource =
  | InputChannelDataSource.ProtectedQueryInputParametersMember
  | InputChannelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace InputChannelDataSource {
  /**
   * <p>Provides information necessary to perform the protected query.</p>
   * @public
   */
  export interface ProtectedQueryInputParametersMember {
    protectedQueryInputParameters: ProtectedQueryInputParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    protectedQueryInputParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    protectedQueryInputParameters: (value: ProtectedQueryInputParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InputChannelDataSource, visitor: Visitor<T>): T => {
    if (value.protectedQueryInputParameters !== undefined)
      return visitor.protectedQueryInputParameters(value.protectedQueryInputParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Provides information about the data source that is used to create an ML input channel.</p>
 * @public
 */
export interface InputChannel {
  /**
   * <p>The data source that is used to create the ML input channel.</p>
   * @public
   */
  dataSource: InputChannelDataSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used to run the query specified in the <code>dataSource</code> field of the input channel.</p> <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an <code>AccessDeniedException</code> error.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMLInputChannelRequest {
  /**
   * <p>The membership ID of the member that is creating the ML input channel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The associated configured model algorithms that are necessary to create this ML input channel.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * <p>The input data that is used to create this ML input channel.</p>
   * @public
   */
  inputChannel: InputChannel | undefined;

  /**
   * <p>The name of the ML input channel.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The number of days that the data in the ML input channel is retained.</p>
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * <p>The description of the ML input channel.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to access the input channel.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMLInputChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLInputChannelDataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel that you want to delete.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel you want to delete.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationMLInputChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel that you want to get.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channel that you want to get.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationMLInputChannelResponse {
  /**
   * <p>The time at which the ML input channel was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the ML input channel was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The account ID of the member who created the ML input channel.</p>
   * @public
   */
  creatorAccountId: string | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channel.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The name of the ML input channel.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configured model algorithm associations that were used to create the ML input channel.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * <p>The status of the ML input channel.</p>
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The number of days to retain the data for the ML input channel.</p>
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * <p>The number of records in the ML input channel.</p>
   * @public
   */
  numberOfRecords?: number | undefined;

  /**
   * <p>The description of the ML input channel.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetMLInputChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel that you want to get.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel that you want to get.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetMLInputChannelResponse {
  /**
   * <p>The time at which the ML input channel was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the ML input channel was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channel.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The input channel that was used to create the ML input channel.</p>
   * @public
   */
  inputChannel: InputChannel | undefined;

  /**
   * <p>The ID of the protected query that was used to create the ML input channel.</p>
   * @public
   */
  protectedQueryIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The name of the ML input channel.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configured model algorithm associations that were used to create the ML input channel.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * <p>The status of the ML input channel.</p>
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The number of days to keep the data in the ML input channel.</p>
   * @public
   */
  retentionInDays: number | undefined;

  /**
   * <p>The number of records in the ML input channel.</p>
   * @public
   */
  numberOfRecords?: number | undefined;

  /**
   * <p>The number of files in the ML input channel.</p>
   * @public
   */
  numberOfFiles?: number | undefined;

  /**
   * <p>The size, in GB, of the ML input channel.</p>
   * @public
   */
  sizeInGb?: number | undefined;

  /**
   * <p>The description of the ML input channel.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that was used to create the ML input channel.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMLInputChannelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of ML input channels to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channels that you want to list.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * <p>Provides summary information about the ML input channel.</p>
 * @public
 */
export interface MLInputChannelSummary {
  /**
   * <p>The time at which the ML input channel was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the ML input channel was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The membership ID of the membership that contains the ML input channel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the ML input channel.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The name of the ML input channel.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The associated configured model algorithms used to create the ML input channel.</p>
   * @public
   */
  configuredModelAlgorithmAssociations: string[] | undefined;

  /**
   * <p>The ID of the protected query that was used to create the ML input channel.</p>
   * @public
   */
  protectedQueryIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The status of the ML input channel.</p>
   * @public
   */
  status: MLInputChannelStatus | undefined;

  /**
   * <p>The description of the ML input channel.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListMLInputChannelsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of ML input channels that you wanted.</p>
   * @public
   */
  mlInputChannelsList: MLInputChannelSummary[] | undefined;
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
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
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
export interface CancelTrainedModelRequest {
  /**
   * <p>The membership ID of the trained model job that you want to cancel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model job that you want to cancel.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model to cancel. This parameter allows you to specify which version of the trained model you want to cancel when multiple versions exist.</p> <p>If <code>versionIdentifier</code> is not specified, the base model will be cancelled.</p>
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const S3DataDistributionType = {
  FULLY_REPLICATED: "FullyReplicated",
  SHARDED_BY_S3_KEY: "ShardedByS3Key",
} as const;

/**
 * @public
 */
export type S3DataDistributionType = (typeof S3DataDistributionType)[keyof typeof S3DataDistributionType];

/**
 * <p>Information about the model training data channel. A training data channel is a named data source that the training algorithms can consume. </p>
 * @public
 */
export interface ModelTrainingDataChannel {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel for this model training data channel.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;

  /**
   * <p>The name of the training data channel.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>Specifies how the training data stored in Amazon S3 should be distributed to training instances. This parameter controls the data distribution strategy for the training job:</p> <ul> <li> <p> <code>FullyReplicated</code> - The entire dataset is replicated on each training instance. This is suitable for smaller datasets and algorithms that require access to the complete dataset.</p> </li> <li> <p> <code>ShardedByS3Key</code> - The dataset is distributed across training instances based on Amazon S3 key names. This is suitable for larger datasets and distributed training scenarios where each instance processes a subset of the data.</p> </li> </ul>
   * @public
   */
  s3DataDistributionType?: S3DataDistributionType | undefined;
}

/**
 * <p>Defines an incremental training data channel that references a previously trained model. Incremental training allows you to update an existing trained model with new data, building upon the knowledge from a base model rather than training from scratch. This can significantly reduce training time and computational costs while improving model performance with additional data.</p>
 * @public
 */
export interface IncrementalTrainingDataChannel {
  /**
   * <p>The Amazon Resource Name (ARN) of the base trained model to use for incremental training. This model serves as the starting point for the incremental training process.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the base trained model to use for incremental training. If not specified, the latest version of the trained model is used.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>The name of the incremental training data channel. This name is used to identify the channel during the training process and must be unique within the training job.</p>
   * @public
   */
  channelName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_XLARGE: "ml.c5n.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_R5D_12XLARGE: "ml.r5d.12xlarge",
  ML_R5D_16XLARGE: "ml.r5d.16xlarge",
  ML_R5D_24XLARGE: "ml.r5d.24xlarge",
  ML_R5D_2XLARGE: "ml.r5d.2xlarge",
  ML_R5D_4XLARGE: "ml.r5d.4xlarge",
  ML_R5D_8XLARGE: "ml.r5d.8xlarge",
  ML_R5D_LARGE: "ml.r5d.large",
  ML_R5D_XLARGE: "ml.r5d.xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * <p>Information about the EC2 resources that are used to train the model.</p>
 * @public
 */
export interface ResourceConfig {
  /**
   * <p>The number of resources that are used to train the model.</p>
   * @public
   */
  instanceCount?: number | undefined;

  /**
   * <p>The instance type that is used to train the model.</p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The maximum size of the instance that is used to train the model.</p>
   * @public
   */
  volumeSizeInGB: number | undefined;
}

/**
 * <p>The criteria used to stop model training.</p>
 * @public
 */
export interface StoppingCondition {
  /**
   * <p>The maximum amount of time, in seconds, that model training can run before it is terminated.</p>
   * @public
   */
  maxRuntimeInSeconds?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const TrainingInputMode = {
  FAST_FILE: "FastFile",
  FILE: "File",
  PIPE: "Pipe",
} as const;

/**
 * @public
 */
export type TrainingInputMode = (typeof TrainingInputMode)[keyof typeof TrainingInputMode];

/**
 * @public
 */
export interface CreateTrainedModelRequest {
  /**
   * <p>The membership ID of the member that is creating the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The name of the trained model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The associated configured model algorithm used to train this model.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>Algorithm-specific parameters that influence the quality of the model. You set hyperparameters before you start the learning process.</p>
   * @public
   */
  hyperparameters?: Record<string, string> | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * <p>Information about the EC2 resources that are used to train this model.</p>
   * @public
   */
  resourceConfig: ResourceConfig | undefined;

  /**
   * <p>The criteria that is used to stop model training.</p>
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * <p>Specifies the incremental training data channels for the trained model. </p> <p>Incremental training allows you to create a new trained model with updates without retraining from scratch. You can specify up to one incremental training data channel that references a previously trained model and its version.</p> <p>Limit: Maximum of 20 channels total (including both <code>incrementalTrainingDataChannels</code> and <code>dataChannels</code>).</p>
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannel[] | undefined;

  /**
   * <p>Defines the data channels that are used as input for the trained model request.</p> <p>Limit: Maximum of 20 channels total (including both <code>dataChannels</code> and <code>incrementalTrainingDataChannels</code>).</p>
   * @public
   */
  dataChannels: ModelTrainingDataChannel[] | undefined;

  /**
   * <p>The input mode for accessing the training data. This parameter determines how the training data is made available to the training algorithm. Valid values are:</p> <ul> <li> <p> <code>File</code> - The training data is downloaded to the training instance and made available as files.</p> </li> <li> <p> <code>FastFile</code> - The training data is streamed directly from Amazon S3 to the training algorithm, providing faster access for large datasets.</p> </li> <li> <p> <code>Pipe</code> - The training data is streamed to the training algorithm using named pipes, which can improve performance for certain algorithms.</p> </li> </ul>
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateTrainedModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The unique version identifier assigned to the newly created trained model. This identifier can be used to reference this specific version of the trained model in subsequent operations such as inference jobs or incremental training.</p> <p>The initial version identifier for the base version of the trained model is "NULL".</p>
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * <p>An internal service error occurred. Retry your request. If the problem persists, contact AWS Support.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteTrainedModelOutputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model whose output you want to delete.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The membership ID of the member that is deleting the trained model output.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The version identifier of the trained model to delete. If not specified, the operation will delete the base version of the trained model. When specified, only the particular version will be deleted.</p>
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationTrainedModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that you want to return information about.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The collaboration ID that contains the trained model that you want to return information about.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The version identifier of the trained model to retrieve. If not specified, the operation returns information about the latest version of the trained model.</p>
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetCollaborationTrainedModelResponse {
  /**
   * <p>The membership ID of the member that created the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.</p>
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * <p>The name of the trained model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the trained model.</p>
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The EC2 resource configuration that was used to train this model.</p>
   * @public
   */
  resourceConfig?: ResourceConfig | undefined;

  /**
   * <p>The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm.</p>
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * <p>The stopping condition that determined when model training ended.</p>
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * <p>The status of the model metrics.</p>
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * <p>Details about the status information for the model metrics.</p>
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * <p>Status information for the logs.</p>
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * <p>Details about the status information for the logs.</p>
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * <p>Information about the training container image.</p>
   * @public
   */
  trainingContainerImageDigest?: string | undefined;

  /**
   * <p>The time at which the trained model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The account ID of the member that created the trained model.</p>
   * @public
   */
  creatorAccountId: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that you are interested in.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The membership ID of the member that created the trained model that you are interested in.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The version identifier of the trained model to retrieve. If not specified, the operation returns information about the latest version of the trained model.</p>
   * @public
   */
  versionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelResponse {
  /**
   * <p>The membership ID of the member that created the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model. This unique identifier distinguishes this version from other versions of the same trained model.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>Information about the incremental training data channels used to create this version of the trained model. This includes details about the base model that was used for incremental training and the channel configuration.</p>
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * <p>The name of the trained model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the trained model.</p>
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create the trained model.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;

  /**
   * <p>The EC2 resource configuration that was used to create the trained model.</p>
   * @public
   */
  resourceConfig?: ResourceConfig | undefined;

  /**
   * <p>The input mode that was used for accessing the training data when this trained model was created. This indicates how the training data was made available to the training algorithm.</p>
   * @public
   */
  trainingInputMode?: TrainingInputMode | undefined;

  /**
   * <p>The stopping condition that was used to terminate model training.</p>
   * @public
   */
  stoppingCondition?: StoppingCondition | undefined;

  /**
   * <p>The status of the model metrics.</p>
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * <p>Details about the metrics status for the trained model.</p>
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * <p>The logs status for the trained model.</p>
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * <p>Details about the logs status for the trained model.</p>
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * <p>Information about the training image container.</p>
   * @public
   */
  trainingContainerImageDigest?: string | undefined;

  /**
   * <p>The time at which the trained model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The hyperparameters that were used to create the trained model.</p>
   * @public
   */
  hyperparameters?: Record<string, string> | undefined;

  /**
   * <p>The EC2 environment that was used to create the trained model.</p>
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The data channels that were used for the trained model.</p>
   * @public
   */
  dataChannels: ModelTrainingDataChannel[] | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The membership ID of the member that created the trained models you are interested in.</p>
   * @public
   */
  membershipIdentifier: string | undefined;
}

/**
 * <p>Summary information about the trained model.</p>
 * @public
 */
export interface TrainedModelSummary {
  /**
   * <p>The time at which the trained model was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of this trained model version.</p>
   * @public
   */
  versionIdentifier?: string | undefined;

  /**
   * <p>Information about the incremental training data channels used to create this version of the trained model.</p>
   * @public
   */
  incrementalTrainingDataChannels?: IncrementalTrainingDataChannelOutput[] | undefined;

  /**
   * <p>The name of the trained model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the trained model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The membership ID of the member that created the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The status of the trained model.</p>
   * @public
   */
  status: TrainedModelStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that was used to create this trained model.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn: string | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of trained models.</p>
   * @public
   */
  trainedModels: TrainedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelVersionsRequest {
  /**
   * <p>The pagination token from a previous <code>ListTrainedModelVersions</code> request. Use this token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of trained model versions to return in a single page. The default value is 10, and the maximum value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The membership identifier for the collaboration that contains the trained model.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model for which to list versions.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>Filter the results to only include trained model versions with the specified status. Valid values include <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>ACTIVE</code>, <code>CREATE_FAILED</code>, and others.</p>
   * @public
   */
  status?: TrainedModelStatus | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelVersionsResponse {
  /**
   * <p>The pagination token to use in a subsequent <code>ListTrainedModelVersions</code> request to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of trained model versions that match the specified criteria. Each entry contains summary information about a trained model version, including its version identifier, status, and creation details.</p>
   * @public
   */
  trainedModels: TrainedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelExportJobRequest {
  /**
   * <p>The name of the trained model export job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that you want to export.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model to export. This specifies which version of the trained model should be exported to the specified destination.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The membership ID of the member that is receiving the exported trained model artifacts.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The output configuration information for the trained model export job.</p>
   * @public
   */
  outputConfiguration: TrainedModelExportOutputConfiguration | undefined;

  /**
   * <p>The description of the trained model export job.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CancelTrainedModelInferenceJobRequest {
  /**
   * <p>The membership ID of the trained model inference job that you want to cancel.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model inference job that you want to cancel.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelInferenceJobRequest {
  /**
   * <p>Provides the membership ID of the membership that contains the trained model inference job that you are interested in.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>Provides the Amazon Resource Name (ARN) of the trained model inference job that you are interested in.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

/**
 * <p>Provides execution parameters for the inference container.</p>
 * @public
 */
export interface InferenceContainerExecutionParameters {
  /**
   * <p>The maximum size of the inference container payload, specified in MB. </p>
   * @public
   */
  maxPayloadInMB?: number | undefined;
}

/**
 * <p>Defines information about the data source used for model inference.</p>
 * @public
 */
export interface ModelInferenceDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML input channel for this model inference data source.</p>
   * @public
   */
  mlInputChannelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_R6I_12XLARGE: "ml.r6i.12xlarge",
  ML_R6I_16XLARGE: "ml.r6i.16xlarge",
  ML_R6I_24XLARGE: "ml.r6i.24xlarge",
  ML_R6I_2XLARGE: "ml.r6i.2xlarge",
  ML_R6I_32XLARGE: "ml.r6i.32xlarge",
  ML_R6I_4XLARGE: "ml.r6i.4xlarge",
  ML_R6I_8XLARGE: "ml.r6i.8xlarge",
  ML_R6I_LARGE: "ml.r6i.large",
  ML_R6I_XLARGE: "ml.r6i.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
} as const;

/**
 * @public
 */
export type InferenceInstanceType = (typeof InferenceInstanceType)[keyof typeof InferenceInstanceType];

/**
 * <p>Defines the resources used to perform model inference.</p>
 * @public
 */
export interface InferenceResourceConfig {
  /**
   * <p>The type of instance that is used to perform model inference.</p>
   * @public
   */
  instanceType: InferenceInstanceType | undefined;

  /**
   * <p>The number of instances to use.</p>
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * @public
 */
export interface GetTrainedModelInferenceJobResponse {
  /**
   * <p>The time at which the trained model inference job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model inference job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model inference job.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that was used for the trained model inference job.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * <p>The name of the trained model inference job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the trained model inference job.</p>
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the trained model that was used for the trained model inference job.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model used for this inference job. This identifies the specific version of the trained model that was used to generate the inference results.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The resource configuration information for the trained model inference job.</p>
   * @public
   */
  resourceConfig: InferenceResourceConfig | undefined;

  /**
   * <p>The output configuration information for the trained model inference job.</p>
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>The membership ID of the membership that contains the trained model inference job.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The data source that was used for the trained model inference job.</p>
   * @public
   */
  dataSource: ModelInferenceDataSource | undefined;

  /**
   * <p>The execution parameters for the model inference job container.</p>
   * @public
   */
  containerExecutionParameters?: InferenceContainerExecutionParameters | undefined;

  /**
   * <p>Details about the status of a resource.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>The description of the trained model inference job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information about the training container image.</p>
   * @public
   */
  inferenceContainerImageDigest?: string | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the ML inference job and associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The metrics status for the trained model inference job.</p>
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * <p>Details about the metrics status for the trained model inference job.</p>
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * <p>The logs status for the trained model inference job.</p>
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * <p>Details about the logs status for the trained model inference job.</p>
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * <p>The optional metadata that you applied to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelInferenceJobsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The membership </p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a trained model that was used to create the trained model inference jobs that you are interested in.</p>
   * @public
   */
  trainedModelArn?: string | undefined;

  /**
   * <p>The version identifier of the trained model to filter inference jobs by. When specified, only inference jobs that used this specific version of the trained model are returned.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;
}

/**
 * <p>Provides information about the trained model inference job.</p>
 * @public
 */
export interface TrainedModelInferenceJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model inference job.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for the trained model inference job.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * <p>The membership ID of the membership that contains the trained model inference job.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that is used for the trained model inference job.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model that was used for inference in this job.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The collaboration ID of the collaboration that contains the trained model inference job.</p>
   * @public
   */
  collaborationIdentifier: string | undefined;

  /**
   * <p>The status of the trained model inference job.</p>
   * @public
   */
  status: TrainedModelInferenceJobStatus | undefined;

  /**
   * <p>The output configuration information of the trained model job.</p>
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>The name of the trained model inference job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the trained model inference job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The metric status of the trained model inference job.</p>
   * @public
   */
  metricsStatus?: MetricsStatus | undefined;

  /**
   * <p>Details about the metrics status for the trained model inference job.</p>
   * @public
   */
  metricsStatusDetails?: string | undefined;

  /**
   * <p>The log status of the trained model inference job.</p>
   * @public
   */
  logsStatus?: LogsStatus | undefined;

  /**
   * <p>Details about the log status for the trained model inference job.</p>
   * @public
   */
  logsStatusDetails?: string | undefined;

  /**
   * <p>The time at which the trained model inference job was created.</p>
   * @public
   */
  createTime: Date | undefined;

  /**
   * <p>The most recent time at which the trained model inference job was updated.</p>
   * @public
   */
  updateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTrainedModelInferenceJobsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Returns the requested trained model inference jobs.</p>
   * @public
   */
  trainedModelInferenceJobs: TrainedModelInferenceJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelInferenceJobRequest {
  /**
   * <p>The membership ID of the membership that contains the trained model inference job.</p>
   * @public
   */
  membershipIdentifier: string | undefined;

  /**
   * <p>The name of the trained model inference job.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the trained model that is used for this trained model inference job.</p>
   * @public
   */
  trainedModelArn: string | undefined;

  /**
   * <p>The version identifier of the trained model to use for inference. This specifies which version of the trained model should be used to generate predictions on the input data.</p>
   * @public
   */
  trainedModelVersionIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the configured model algorithm association that is used for this trained model inference job.</p>
   * @public
   */
  configuredModelAlgorithmAssociationArn?: string | undefined;

  /**
   * <p>Defines the resource configuration for the trained model inference job.</p>
   * @public
   */
  resourceConfig: InferenceResourceConfig | undefined;

  /**
   * <p>Defines the output configuration information for the trained model inference job.</p>
   * @public
   */
  outputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>Defines the data source that is used for the trained model inference job.</p>
   * @public
   */
  dataSource: ModelInferenceDataSource | undefined;

  /**
   * <p>The description of the trained model inference job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The execution parameters for the container.</p>
   * @public
   */
  containerExecutionParameters?: InferenceContainerExecutionParameters | undefined;

  /**
   * <p>The environment variables to set in the Docker container.</p>
   * @public
   */
  environment?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the ML inference job and associated data.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartTrainedModelInferenceJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the trained model inference job.</p>
   * @public
   */
  trainedModelInferenceJobArn: string | undefined;
}

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
  catalogId?: string | undefined;
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
   * <p>The ARN of the IAM role that Clean Rooms ML can assume to read the data referred to in the <code>dataSource</code> field of each dataset.</p> <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an <code>AccessDeniedException</code> error.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>An array of information that lists the Dataset objects, which specifies the dataset type and details on its location and schema. You must provide a role that has read access to these tables.</p>
   * @public
   */
  trainingData: Dataset[] | undefined;

  /**
   * <p>The optional metadata that you apply to the resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p> <p>The following basic restrictions apply to tags:</p> <ul> <li> <p>Maximum number of tags per resource - 50.</p> </li> <li> <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p> </li> <li> <p>Maximum key length - 128 Unicode characters in UTF-8.</p> </li> <li> <p>Maximum value length - 256 Unicode characters in UTF-8.</p> </li> <li> <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Clean Rooms ML considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.</p> </li> </ul>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the training dataset.</p>
   * @public
   */
  description?: string | undefined;
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
  tags?: Record<string, string> | undefined;

  /**
   * <p>The description of the training dataset.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingDatasetsRequest {
  /**
   * <p>The token value retrieved from a previous call to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum size of the results that is returned per call.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListTrainingDatasetsResponse {
  /**
   * <p>The token value used to access the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

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
  ...(obj.sqlComputeConfiguration && { sqlComputeConfiguration: obj.sqlComputeConfiguration }),
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

/**
 * @internal
 */
export const ProtectedQueryInputParametersFilterSensitiveLog = (obj: ProtectedQueryInputParameters): any => ({
  ...obj,
  ...(obj.sqlParameters && { sqlParameters: SENSITIVE_STRING }),
  ...(obj.computeConfiguration && { computeConfiguration: obj.computeConfiguration }),
});

/**
 * @internal
 */
export const InputChannelDataSourceFilterSensitiveLog = (obj: InputChannelDataSource): any => {
  if (obj.protectedQueryInputParameters !== undefined)
    return {
      protectedQueryInputParameters: ProtectedQueryInputParametersFilterSensitiveLog(obj.protectedQueryInputParameters),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InputChannelFilterSensitiveLog = (obj: InputChannel): any => ({
  ...obj,
  ...(obj.dataSource && { dataSource: InputChannelDataSourceFilterSensitiveLog(obj.dataSource) }),
});

/**
 * @internal
 */
export const CreateMLInputChannelRequestFilterSensitiveLog = (obj: CreateMLInputChannelRequest): any => ({
  ...obj,
  ...(obj.inputChannel && { inputChannel: InputChannelFilterSensitiveLog(obj.inputChannel) }),
});

/**
 * @internal
 */
export const GetMLInputChannelResponseFilterSensitiveLog = (obj: GetMLInputChannelResponse): any => ({
  ...obj,
  ...(obj.inputChannel && { inputChannel: InputChannelFilterSensitiveLog(obj.inputChannel) }),
});
