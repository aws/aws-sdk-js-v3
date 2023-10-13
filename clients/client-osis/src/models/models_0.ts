// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OSISServiceException as __BaseException } from "./OSISServiceException";

/**
 * @public
 * <p>You don't have permissions to access the resource.</p>
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
 * <p>The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch.</p>
 */
export interface CloudWatchLogDestination {
  /**
   * @public
   * <p>The name of the CloudWatch Logs group to send pipeline logs to. You can specify an existing
   *    log group or create a new one. For example,
   *     <code>/aws/OpenSearchService/IngestionService/my-pipeline</code>.</p>
   */
  LogGroup: string | undefined;
}

/**
 * @public
 * <p>Container for the values required to configure logging for the pipeline. If you don't
 *    specify these values, OpenSearch Ingestion will not publish logs from your application to
 *    CloudWatch Logs.</p>
 */
export interface LogPublishingOptions {
  /**
   * @public
   * <p>Whether logs should be published.</p>
   */
  IsLoggingEnabled?: boolean;

  /**
   * @public
   * <p>The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This
   *    parameter is required if <code>IsLoggingEnabled</code> is set to <code>true</code>.</p>
   */
  CloudWatchLogDestination?: CloudWatchLogDestination;
}

/**
 * @public
 * <p>A tag (key-value pair) for an OpenSearch Ingestion pipeline.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag key. Tag keys must be unique for the pipeline to which they are attached.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value assigned to the corresponding tag key. Tag values can be null and don't have to
   *    be unique in a tag set. For example, you can have a key value pair in a tag set of
   *    <code>project : Trinity</code> and <code>cost-center : Trinity</code>
   *          </p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>Options that specify the subnets and security groups for an OpenSearch Ingestion
 *    VPC endpoint.</p>
 */
export interface VpcOptions {
  /**
   * @public
   * <p>A list of subnet IDs associated with the VPC endpoint.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of security groups associated with the VPC endpoint.</p>
   */
  SecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * @public
   * <p>The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines
   *    owned by an account within an Amazon Web Services Region.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MinUnits: number | undefined;

  /**
   * @public
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MaxUnits: number | undefined;

  /**
   * @public
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   */
  PipelineConfigurationBody: string | undefined;

  /**
   * @public
   * <p>Key-value pairs to configure log publishing.</p>
   */
  LogPublishingOptions?: LogPublishingOptions;

  /**
   * @public
   * <p>Container for the values required to configure VPC access for the pipeline. If you don't specify
   *    these values, OpenSearch Ingestion creates the pipeline with a public endpoint.</p>
   */
  VpcOptions?: VpcOptions;

  /**
   * @public
   * <p>List of tags to add to the pipeline upon creation.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 * <p>Information about a pipeline's current status.</p>
 */
export interface PipelineStatusReason {
  /**
   * @public
   * <p>A description of why a pipeline has a certain status.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>An OpenSearch Ingestion-managed VPC endpoint that will access one or more
 *    pipelines.</p>
 */
export interface VpcEndpoint {
  /**
   * @public
   * <p>The unique identifier of the endpoint.</p>
   */
  VpcEndpointId?: string;

  /**
   * @public
   * <p>The ID for your VPC. Amazon Web Services PrivateLink generates this value when you create a
   *    VPC.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>Information about the VPC, including associated subnets and security groups.</p>
   */
  VpcOptions?: VpcOptions;
}

/**
 * @public
 * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
 */
export interface Pipeline {
  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MinUnits?: number;

  /**
   * @public
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MaxUnits?: number;

  /**
   * @public
   * <p>The current status of the pipeline.</p>
   */
  Status?: PipelineStatus;

  /**
   * @public
   * <p>The reason for the current status of the pipeline.</p>
   */
  StatusReason?: PipelineStatusReason;

  /**
   * @public
   * <p>The Data Prepper pipeline configuration in YAML format.</p>
   */
  PipelineConfigurationBody?: string;

  /**
   * @public
   * <p>The date and time when the pipeline was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time when the pipeline was last updated.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * @public
   * <p>The ingestion endpoints for the pipeline, which you can send data to.</p>
   */
  IngestEndpointUrls?: string[];

  /**
   * @public
   * <p>Key-value pairs that represent log publishing settings.</p>
   */
  LogPublishingOptions?: LogPublishingOptions;

  /**
   * @public
   * <p>The VPC interface endpoints that have access to the pipeline.</p>
   */
  VpcEndpoints?: VpcEndpoint[];
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * @public
   * <p>Container for information about the created pipeline.</p>
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 * <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * @public
 * <p>You attempted to create more than the allowed number of tags.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>You attempted to create a resource that already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 * <p>An exception for missing or invalid input fields.</p>
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
 * <p>The client attempted to remove a resource that is currently in use.</p>
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
 */
export interface DeletePipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to delete.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineResponse {}

/**
 * @public
 * <p>You attempted to access or delete a resource that does not exist.</p>
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
 */
export interface GetPipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to get information about.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineResponse {
  /**
   * @public
   * <p>Detailed information about the requested pipeline.</p>
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface GetPipelineBlueprintRequest {
  /**
   * @public
   * <p>The name of the blueprint to retrieve.</p>
   */
  BlueprintName: string | undefined;
}

/**
 * @public
 * <p>Container for information about an OpenSearch Ingestion blueprint.</p>
 */
export interface PipelineBlueprint {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;

  /**
   * @public
   * <p>The YAML configuration of the blueprint.</p>
   */
  PipelineConfigurationBody?: string;
}

/**
 * @public
 */
export interface GetPipelineBlueprintResponse {
  /**
   * @public
   * <p>The requested blueprint in YAML format.</p>
   */
  Blueprint?: PipelineBlueprint;
}

/**
 * @public
 */
export interface GetPipelineChangeProgressRequest {
  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChangeProgressStageStatuses = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ChangeProgressStageStatuses =
  (typeof ChangeProgressStageStatuses)[keyof typeof ChangeProgressStageStatuses];

/**
 * @public
 * <p>Progress details for a specific stage of a pipeline configuration change.</p>
 */
export interface ChangeProgressStage {
  /**
   * @public
   * <p>The name of the stage.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current status of the stage that the change is in.</p>
   */
  Status?: ChangeProgressStageStatuses;

  /**
   * @public
   * <p>A description of the stage.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The most recent updated timestamp of the stage.</p>
   */
  LastUpdatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const ChangeProgressStatuses = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ChangeProgressStatuses = (typeof ChangeProgressStatuses)[keyof typeof ChangeProgressStatuses];

/**
 * @public
 * <p>The progress details of a pipeline configuration change.</p>
 */
export interface ChangeProgressStatus {
  /**
   * @public
   * <p>The time at which the configuration change is made on the pipeline.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The overall status of the pipeline configuration change.</p>
   */
  Status?: ChangeProgressStatuses;

  /**
   * @public
   * <p>The total number of stages required for the pipeline configuration change.</p>
   */
  TotalNumberOfStages?: number;

  /**
   * @public
   * <p>Information about the stages that the pipeline is going through to perform the configuration change.</p>
   */
  ChangeProgressStages?: ChangeProgressStage[];
}

/**
 * @public
 */
export interface GetPipelineChangeProgressResponse {
  /**
   * @public
   * <p>The current status of the change happening on the pipeline.</p>
   */
  ChangeProgressStatuses?: ChangeProgressStatus[];
}

/**
 * @public
 * <p>An invalid pagination token provided in the request.</p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}

/**
 * @public
 */
export interface ListPipelineBlueprintsRequest {}

/**
 * @public
 * <p>A summary of an OpenSearch Ingestion blueprint.</p>
 */
export interface PipelineBlueprintSummary {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;
}

/**
 * @public
 */
export interface ListPipelineBlueprintsResponse {
  /**
   * @public
   * <p>A list of available blueprints for Data Prepper.</p>
   */
  Blueprints?: PipelineBlueprintSummary[];
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *    <code>nextToken</code> to get the next page of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If your initial <code>ListPipelines</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListPipelines</code>
   *    operations, which returns results in the next page.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information for an OpenSearch Ingestion pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * @public
   * <p>The current status of the pipeline.</p>
   */
  Status?: PipelineStatus;

  /**
   * @public
   * <p>Information about a pipeline's current status.</p>
   */
  StatusReason?: PipelineStatusReason;

  /**
   * @public
   * <p>The name of the pipeline.</p>
   */
  PipelineName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   */
  PipelineArn?: string;

  /**
   * @public
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MinUnits?: number;

  /**
   * @public
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MaxUnits?: number;

  /**
   * @public
   * <p>The date and time when the pipeline was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The date and time when the pipeline was last updated.</p>
   */
  LastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *    <code>nextToken</code> is a unique pagination token for each page. Make the call again using
   *    the returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of all existing Data Prepper pipelines.</p>
   */
  Pipelines?: PipelineSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline to retrieve tags for.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags associated with the given pipeline.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartPipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to start.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineResponse {
  /**
   * @public
   * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface StopPipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to stop.</p>
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineResponse {
  /**
   * @public
   * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline to tag.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The list of key-value tags to add to the pipeline.</p>
   */
  Tags: Tag[] | undefined;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the pipeline to remove tags from.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * @public
   * <p>The name of the pipeline to update.</p>
   */
  PipelineName: string | undefined;

  /**
   * @public
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   */
  MinUnits?: number;

  /**
   * @public
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs)</p>
   */
  MaxUnits?: number;

  /**
   * @public
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   */
  PipelineConfigurationBody?: string;

  /**
   * @public
   * <p>Key-value pairs to configure log publishing.</p>
   */
  LogPublishingOptions?: LogPublishingOptions;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * @public
   * <p>Container for information about the updated pipeline.</p>
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface ValidatePipelineRequest {
  /**
   * @public
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   */
  PipelineConfigurationBody: string | undefined;
}

/**
 * @public
 * <p>A validation message associated with a <code>ValidatePipeline</code> request in OpenSearch
 *    Ingestion.</p>
 */
export interface ValidationMessage {
  /**
   * @public
   * <p>The validation message.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface ValidatePipelineResponse {
  /**
   * @public
   * <p>A boolean indicating whether or not the pipeline configuration is valid.</p>
   */
  isValid?: boolean;

  /**
   * @public
   * <p>A list of errors if the configuration is invalid.</p>
   */
  Errors?: ValidationMessage[];
}
