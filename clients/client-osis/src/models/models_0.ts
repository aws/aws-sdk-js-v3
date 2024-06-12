// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OSISServiceException as __BaseException } from "./OSISServiceException";

/**
 * <p>You don't have permissions to access the resource.</p>
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
 * <p>Options that specify the configuration of a persistent buffer.
 *    To configure how OpenSearch Ingestion encrypts this data, set the <code>EncryptionAtRestOptions</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering">Persistent buffering</a>.</p>
 * @public
 */
export interface BufferOptions {
  /**
   * <p>Whether persistent buffering should be enabled.</p>
   * @public
   */
  PersistentBufferEnabled: boolean | undefined;
}

/**
 * <p>Options to control how OpenSearch encrypts buffer data.</p>
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * <p>The ARN of the KMS key used to encrypt buffer data.
   *    By default, data is encrypted using an Amazon Web Services owned key.</p>
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * <p>The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch.</p>
 * @public
 */
export interface CloudWatchLogDestination {
  /**
   * <p>The name of the CloudWatch Logs group to send pipeline logs to. You can specify an existing
   *    log group or create a new one. For example,
   *    <code>/aws/vendedlogs/OpenSearchService/pipelines</code>.</p>
   * @public
   */
  LogGroup: string | undefined;
}

/**
 * <p>Container for the values required to configure logging for the pipeline. If you don't
 *    specify these values, OpenSearch Ingestion will not publish logs from your application to
 *    CloudWatch Logs.</p>
 * @public
 */
export interface LogPublishingOptions {
  /**
   * <p>Whether logs should be published.</p>
   * @public
   */
  IsLoggingEnabled?: boolean;

  /**
   * <p>The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This
   *    parameter is required if <code>IsLoggingEnabled</code> is set to <code>true</code>.</p>
   * @public
   */
  CloudWatchLogDestination?: CloudWatchLogDestination;
}

/**
 * <p>A tag (key-value pair) for an OpenSearch Ingestion pipeline.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key. Tag keys must be unique for the pipeline to which they are attached.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value assigned to the corresponding tag key. Tag values can be null and don't have to
   *    be unique in a tag set. For example, you can have a key value pair in a tag set of
   *    <code>project : Trinity</code> and <code>cost-center : Trinity</code>
   *          </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Options for attaching a VPC to pipeline.</p>
 * @public
 */
export interface VpcAttachmentOptions {
  /**
   * <p>Whether a VPC is attached to the pipeline.</p>
   * @public
   */
  AttachToVpc: boolean | undefined;

  /**
   * <p>The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).</p>
   * @public
   */
  CidrBlock?: string;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointManagement = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;

/**
 * @public
 */
export type VpcEndpointManagement = (typeof VpcEndpointManagement)[keyof typeof VpcEndpointManagement];

/**
 * <p>Options that specify the subnets and security groups for an OpenSearch Ingestion
 *    VPC endpoint.</p>
 * @public
 */
export interface VpcOptions {
  /**
   * <p>A list of subnet IDs associated with the VPC endpoint.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>A list of security groups associated with the VPC endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[];

  /**
   * <p>Options for attaching a VPC to a pipeline.</p>
   * @public
   */
  VpcAttachmentOptions?: VpcAttachmentOptions;

  /**
   * <p>Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.</p>
   * @public
   */
  VpcEndpointManagement?: VpcEndpointManagement;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * <p>The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines
   *    owned by an account within an Amazon Web Services Region.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits: number | undefined;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MaxUnits: number | undefined;

  /**
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   * @public
   */
  PipelineConfigurationBody: string | undefined;

  /**
   * <p>Key-value pairs to configure log publishing.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions;

  /**
   * <p>Container for the values required to configure VPC access for the pipeline. If you don't specify
   *    these values, OpenSearch Ingestion creates the pipeline with a public endpoint.</p>
   * @public
   */
  VpcOptions?: VpcOptions;

  /**
   * <p>Key-value pairs to configure persistent buffering for the pipeline.</p>
   * @public
   */
  BufferOptions?: BufferOptions;

  /**
   * <p>Key-value pairs to configure encryption for data that is written to a persistent buffer.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>List of tags to add to the pipeline upon creation.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * <p>An object representing the destination of a pipeline.</p>
 * @public
 */
export interface PipelineDestination {
  /**
   * <p>The name of the service receiving data from the pipeline.</p>
   * @public
   */
  ServiceName?: string;

  /**
   * <p>The endpoint receiving data from the pipeline.</p>
   * @public
   */
  Endpoint?: string;
}

/**
 * @public
 * @enum
 */
export const VpcEndpointServiceName = {
  OPENSEARCH_SERVERLESS: "OPENSEARCH_SERVERLESS",
} as const;

/**
 * @public
 */
export type VpcEndpointServiceName = (typeof VpcEndpointServiceName)[keyof typeof VpcEndpointServiceName];

/**
 * <p>A container for information about VPC endpoints that were created to other services</p>
 * @public
 */
export interface ServiceVpcEndpoint {
  /**
   * <p>The name of the service for which a VPC endpoint was created.</p>
   * @public
   */
  ServiceName?: VpcEndpointServiceName;

  /**
   * <p>The unique identifier of the VPC endpoint that was created.</p>
   * @public
   */
  VpcEndpointId?: string;
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
 * <p>Information about a pipeline's current status.</p>
 * @public
 */
export interface PipelineStatusReason {
  /**
   * <p>A description of why a pipeline has a certain status.</p>
   * @public
   */
  Description?: string;
}

/**
 * <p>An OpenSearch Ingestion-managed VPC endpoint that will access one or more
 *    pipelines.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The unique identifier of the endpoint.</p>
   * @public
   */
  VpcEndpointId?: string;

  /**
   * <p>The ID for your VPC. Amazon Web Services PrivateLink generates this value when you create a
   *    VPC.</p>
   * @public
   */
  VpcId?: string;

  /**
   * <p>Information about the VPC, including associated subnets and security groups.</p>
   * @public
   */
  VpcOptions?: VpcOptions;
}

/**
 * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
 * @public
 */
export interface Pipeline {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits?: number;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MaxUnits?: number;

  /**
   * <p>The current status of the pipeline.</p>
   * @public
   */
  Status?: PipelineStatus;

  /**
   * <p>The reason for the current status of the pipeline.</p>
   * @public
   */
  StatusReason?: PipelineStatusReason;

  /**
   * <p>The Data Prepper pipeline configuration in YAML format.</p>
   * @public
   */
  PipelineConfigurationBody?: string;

  /**
   * <p>The date and time when the pipeline was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time when the pipeline was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The ingestion endpoints for the pipeline, which you can send data to.</p>
   * @public
   */
  IngestEndpointUrls?: string[];

  /**
   * <p>Key-value pairs that represent log publishing settings.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions;

  /**
   * <p>The VPC interface endpoints that have access to the pipeline.</p>
   * @public
   */
  VpcEndpoints?: VpcEndpoint[];

  /**
   * <p>Options that specify the configuration of a persistent buffer.
   *    To configure how OpenSearch Ingestion encrypts this data, set the <code>EncryptionAtRestOptions</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering">Persistent buffering</a>.</p>
   * @public
   */
  BufferOptions?: BufferOptions;

  /**
   * <p>Options to control how OpenSearch encrypts buffer data.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;

  /**
   * <p>The VPC endpoint service name for the pipeline.</p>
   * @public
   */
  VpcEndpointService?: string;

  /**
   * <p>A list of VPC endpoints that OpenSearch Ingestion has created to other Amazon Web Services services.</p>
   * @public
   */
  ServiceVpcEndpoints?: ServiceVpcEndpoint[];

  /**
   * <p>Destinations to which the pipeline writes data.</p>
   * @public
   */
  Destinations?: PipelineDestination[];

  /**
   * <p>A list of tags associated with the given pipeline.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * <p>Container for information about the created pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline;
}

/**
 * <p>Exception is thrown when an operation has been disabled.</p>
 * @public
 */
export class DisabledOperationException extends __BaseException {
  readonly name: "DisabledOperationException" = "DisabledOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
  }
}

/**
 * <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 * @public
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
 * <p>You attempted to create more than the allowed number of tags.</p>
 * @public
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
 * <p>You attempted to create a resource that already exists.</p>
 * @public
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
 * <p>You attempted to access or delete a resource that does not exist.</p>
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
 * <p>An exception for missing or invalid input fields.</p>
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
 * <p>The client attempted to remove a resource that is currently in use.</p>
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
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineResponse {}

/**
 * @public
 */
export interface GetPipelineRequest {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineResponse {
  /**
   * <p>Detailed information about the requested pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface GetPipelineBlueprintRequest {
  /**
   * <p>The name of the blueprint to retrieve.</p>
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * <p>The format format of the blueprint to retrieve.</p>
   * @public
   */
  Format?: string;
}

/**
 * <p>Container for information about an OpenSearch Ingestion blueprint.</p>
 * @public
 */
export interface PipelineBlueprint {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName?: string;

  /**
   * <p>The YAML configuration of the blueprint.</p>
   * @public
   */
  PipelineConfigurationBody?: string;

  /**
   * <p>The display name of the blueprint.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  DisplayDescription?: string;

  /**
   * <p>The name of the service that the blueprint is associated with.</p>
   * @public
   */
  Service?: string;

  /**
   * <p>The use case that the blueprint relates to.</p>
   * @public
   */
  UseCase?: string;
}

/**
 * @public
 */
export interface GetPipelineBlueprintResponse {
  /**
   * <p>The requested blueprint in YAML format.</p>
   * @public
   */
  Blueprint?: PipelineBlueprint;

  /**
   * <p>The format of the blueprint.</p>
   * @public
   */
  Format?: string;
}

/**
 * @public
 */
export interface GetPipelineChangeProgressRequest {
  /**
   * <p>The name of the pipeline.</p>
   * @public
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
 * <p>Progress details for a specific stage of a pipeline configuration change.</p>
 * @public
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The current status of the stage that the change is in.</p>
   * @public
   */
  Status?: ChangeProgressStageStatuses;

  /**
   * <p>A description of the stage.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The most recent updated timestamp of the stage.</p>
   * @public
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
 * <p>The progress details of a pipeline configuration change.</p>
 * @public
 */
export interface ChangeProgressStatus {
  /**
   * <p>The time at which the configuration change is made on the pipeline.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The overall status of the pipeline configuration change.</p>
   * @public
   */
  Status?: ChangeProgressStatuses;

  /**
   * <p>The total number of stages required for the pipeline configuration change.</p>
   * @public
   */
  TotalNumberOfStages?: number;

  /**
   * <p>Information about the stages that the pipeline is going through to perform the configuration change.</p>
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[];
}

/**
 * @public
 */
export interface GetPipelineChangeProgressResponse {
  /**
   * <p>The current status of the change happening on the pipeline.</p>
   * @public
   */
  ChangeProgressStatuses?: ChangeProgressStatus[];
}

/**
 * <p>An invalid pagination token provided in the request.</p>
 * @public
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
 * <p>A summary of an OpenSearch Ingestion blueprint.</p>
 * @public
 */
export interface PipelineBlueprintSummary {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName?: string;

  /**
   * <p>The display name of the blueprint.</p>
   * @public
   */
  DisplayName?: string;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  DisplayDescription?: string;

  /**
   * <p>The name of the service that the blueprint is associated with.</p>
   * @public
   */
  Service?: string;

  /**
   * <p>The use case that the blueprint relates to.</p>
   * @public
   */
  UseCase?: string;
}

/**
 * @public
 */
export interface ListPipelineBlueprintsResponse {
  /**
   * <p>A list of available blueprints for Data Prepper.</p>
   * @public
   */
  Blueprints?: PipelineBlueprintSummary[];
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *    <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>If your initial <code>ListPipelines</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListPipelines</code>
   *    operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Summary information for an OpenSearch Ingestion pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p>The current status of the pipeline.</p>
   * @public
   */
  Status?: PipelineStatus;

  /**
   * <p>Information about a pipeline's current status.</p>
   * @public
   */
  StatusReason?: PipelineStatusReason;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits?: number;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MaxUnits?: number;

  /**
   * <p>The date and time when the pipeline was created.</p>
   * @public
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time when the pipeline was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A list of destinations to which the pipeline writes data.</p>
   * @public
   */
  Destinations?: PipelineDestination[];

  /**
   * <p>A list of tags associated with the given pipeline.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *    <code>nextToken</code> is a unique pagination token for each page. Make the call again using
   *    the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of all existing Data Prepper pipelines.</p>
   * @public
   */
  Pipelines?: PipelineSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to retrieve tags for.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the given pipeline.</p>
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface StartPipelineRequest {
  /**
   * <p>The name of the pipeline to start.</p>
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineResponse {
  /**
   * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface StopPipelineRequest {
  /**
   * <p>The name of the pipeline to stop.</p>
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineResponse {
  /**
   * <p>Information about an existing OpenSearch Ingestion pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to tag.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The list of key-value tags to add to the pipeline.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the pipeline to remove tags from.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The tag keys to remove.</p>
   * @public
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
   * <p>The name of the pipeline to update.</p>
   * @public
   */
  PipelineName: string | undefined;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits?: number;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs)</p>
   * @public
   */
  MaxUnits?: number;

  /**
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   * @public
   */
  PipelineConfigurationBody?: string;

  /**
   * <p>Key-value pairs to configure log publishing.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions;

  /**
   * <p>Key-value pairs to configure persistent buffering for the pipeline.</p>
   * @public
   */
  BufferOptions?: BufferOptions;

  /**
   * <p>Key-value pairs to configure encryption for data that is written to a persistent buffer.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>Container for information about the updated pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline;
}

/**
 * @public
 */
export interface ValidatePipelineRequest {
  /**
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   * @public
   */
  PipelineConfigurationBody: string | undefined;
}

/**
 * <p>A validation message associated with a <code>ValidatePipeline</code> request in OpenSearch
 *    Ingestion.</p>
 * @public
 */
export interface ValidationMessage {
  /**
   * <p>The validation message.</p>
   * @public
   */
  Message?: string;
}

/**
 * @public
 */
export interface ValidatePipelineResponse {
  /**
   * <p>A boolean indicating whether or not the pipeline configuration is valid.</p>
   * @public
   */
  isValid?: boolean;

  /**
   * <p>A list of errors if the configuration is invalid.</p>
   * @public
   */
  Errors?: ValidationMessage[];
}
