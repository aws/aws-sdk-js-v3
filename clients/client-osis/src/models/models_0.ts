// smithy-typescript generated code
import type {
  ChangeProgressStageStatuses,
  ChangeProgressStatuses,
  PipelineEndpointStatus,
  PipelineStatus,
  VpcEndpointManagement,
  VpcEndpointServiceName,
} from "./enums";

/**
 * Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions`. For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering).
 *
 * @public
 */
export interface BufferOptions {
  /**
   * Whether persistent buffering should be enabled.
   *
   * @public
   */
  PersistentBufferEnabled: boolean | undefined;
}

/**
 * Options to control how OpenSearch encrypts buffer data.
 *
 * @public
 */
export interface EncryptionAtRestOptions {
  /**
   * The ARN of the KMS key used to encrypt buffer data. By default, data is encrypted using an Amazon Web Services owned key.
   *
   * @public
   */
  KmsKeyArn: string | undefined;
}

/**
 * The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch.
 *
 * @public
 */
export interface CloudWatchLogDestination {
  /**
   * The name of the CloudWatch Logs group to send pipeline logs to. You can specify an existing log group or create a new one. For example, `/aws/vendedlogs/OpenSearchService/pipelines`.
   *
   * @public
   */
  LogGroup: string | undefined;
}

/**
 * Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs.
 *
 * @public
 */
export interface LogPublishingOptions {
  /**
   * Whether logs should be published.
   *
   * @public
   */
  IsLoggingEnabled?: boolean | undefined;

  /**
   * The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This parameter is required if `IsLoggingEnabled` is set to `true`.
   *
   * @public
   */
  CloudWatchLogDestination?: CloudWatchLogDestination | undefined;
}

/**
 * A tag (key-value pair) for an OpenSearch Ingestion pipeline.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key. Tag keys must be unique for the pipeline to which they are attached.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key value pair in a tag set of `project : Trinity` and `cost-center : Trinity`
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Options for attaching a VPC to pipeline.
 *
 * @public
 */
export interface VpcAttachmentOptions {
  /**
   * Whether a VPC is attached to the pipeline.
   *
   * @public
   */
  AttachToVpc: boolean | undefined;

  /**
   * The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).
   *
   * @public
   */
  CidrBlock?: string | undefined;
}

/**
 * Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
 *
 * @public
 */
export interface VpcOptions {
  /**
   * A list of subnet IDs associated with the VPC endpoint.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of security groups associated with the VPC endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Options for attaching a VPC to a pipeline.
   *
   * @public
   */
  VpcAttachmentOptions?: VpcAttachmentOptions | undefined;

  /**
   * Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.
   *
   * @public
   */
  VpcEndpointManagement?: VpcEndpointManagement | undefined;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an Amazon Web Services Region.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MinUnits: number | undefined;

  /**
   * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MaxUnits: number | undefined;

  /**
   * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with `\n`.
   *
   * @public
   */
  PipelineConfigurationBody: string | undefined;

  /**
   * Key-value pairs to configure log publishing.
   *
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint.
   *
   * @public
   */
  VpcOptions?: VpcOptions | undefined;

  /**
   * Key-value pairs to configure persistent buffering for the pipeline.
   *
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * Key-value pairs to configure encryption for data that is written to a persistent buffer.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * List of tags to add to the pipeline upon creation.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants the pipeline permission to access Amazon Web Services resources.
   *
   * @public
   */
  PipelineRoleArn?: string | undefined;
}

/**
 * An object representing the destination of a pipeline.
 *
 * @public
 */
export interface PipelineDestination {
  /**
   * The name of the service receiving data from the pipeline.
   *
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * The endpoint receiving data from the pipeline.
   *
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * A container for information about VPC endpoints that were created to other services
 *
 * @public
 */
export interface ServiceVpcEndpoint {
  /**
   * The name of the service for which a VPC endpoint was created.
   *
   * @public
   */
  ServiceName?: VpcEndpointServiceName | undefined;

  /**
   * The unique identifier of the VPC endpoint that was created.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * Information about a pipeline's current status.
 *
 * @public
 */
export interface PipelineStatusReason {
  /**
   * A description of why a pipeline has a certain status.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * An OpenSearch Ingestion-managed VPC endpoint that will access one or more pipelines.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The unique identifier of the endpoint.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;

  /**
   * The ID for your VPC. Amazon Web Services PrivateLink generates this value when you create a VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Information about the VPC, including associated subnets and security groups.
   *
   * @public
   */
  VpcOptions?: VpcOptions | undefined;
}

/**
 * Information about an existing OpenSearch Ingestion pipeline.
 *
 * @public
 */
export interface Pipeline {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MinUnits?: number | undefined;

  /**
   * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * The current status of the pipeline.
   *
   * @public
   */
  Status?: PipelineStatus | undefined;

  /**
   * The reason for the current status of the pipeline.
   *
   * @public
   */
  StatusReason?: PipelineStatusReason | undefined;

  /**
   * The Data Prepper pipeline configuration in YAML format.
   *
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * The date and time when the pipeline was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the pipeline was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The ingestion endpoints for the pipeline, which you can send data to.
   *
   * @public
   */
  IngestEndpointUrls?: string[] | undefined;

  /**
   * Key-value pairs that represent log publishing settings.
   *
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * The VPC interface endpoints that have access to the pipeline.
   *
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;

  /**
   * Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the `EncryptionAtRestOptions`. For more information, see [Persistent buffering](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering).
   *
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * Options to control how OpenSearch encrypts buffer data.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * The VPC endpoint service name for the pipeline.
   *
   * @public
   */
  VpcEndpointService?: string | undefined;

  /**
   * A list of VPC endpoints that OpenSearch Ingestion has created to other Amazon Web Services services.
   *
   * @public
   */
  ServiceVpcEndpoints?: ServiceVpcEndpoint[] | undefined;

  /**
   * Destinations to which the pipeline writes data.
   *
   * @public
   */
  Destinations?: PipelineDestination[] | undefined;

  /**
   * A list of tags associated with the given pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the pipeline uses to access AWS resources.
   *
   * @public
   */
  PipelineRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * Container for information about the created pipeline.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * Configuration settings for the VPC endpoint, specifying network access controls.
 *
 * @public
 */
export interface PipelineEndpointVpcOptions {
  /**
   * A list of subnet IDs where the pipeline endpoint network interfaces are created.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of security group IDs that control network access to the pipeline endpoint.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePipelineEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline to create the endpoint for.
   *
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * Container for the VPC configuration for the pipeline endpoint, including subnet IDs and security group IDs.
   *
   * @public
   */
  VpcOptions: PipelineEndpointVpcOptions | undefined;
}

/**
 * @public
 */
export interface CreatePipelineEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline associated with the endpoint.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The unique identifier of the pipeline endpoint.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The current status of the pipeline endpoint.
   *
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * The ID of the VPC where the pipeline endpoint was created.
   *
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * The name of the pipeline to delete.
   *
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
export interface DeletePipelineEndpointRequest {
  /**
   * The unique identifier of the pipeline endpoint to delete.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineEndpointResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource from which to delete the policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface GetPipelineRequest {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineResponse {
  /**
   * Detailed information about the requested pipeline.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * @public
 */
export interface GetPipelineBlueprintRequest {
  /**
   * The name of the blueprint to retrieve.
   *
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * The format format of the blueprint to retrieve.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * Container for information about an OpenSearch Ingestion blueprint.
 *
 * @public
 */
export interface PipelineBlueprint {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * The YAML configuration of the blueprint.
   *
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * The display name of the blueprint.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A description of the blueprint.
   *
   * @public
   */
  DisplayDescription?: string | undefined;

  /**
   * The name of the service that the blueprint is associated with.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The use case that the blueprint relates to.
   *
   * @public
   */
  UseCase?: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineBlueprintResponse {
  /**
   * The requested blueprint in YAML format.
   *
   * @public
   */
  Blueprint?: PipelineBlueprint | undefined;

  /**
   * The format of the blueprint.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineChangeProgressRequest {
  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * Progress details for a specific stage of a pipeline configuration change.
 *
 * @public
 */
export interface ChangeProgressStage {
  /**
   * The name of the stage.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the stage that the change is in.
   *
   * @public
   */
  Status?: ChangeProgressStageStatuses | undefined;

  /**
   * A description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The most recent updated timestamp of the stage.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * The progress details of a pipeline configuration change.
 *
 * @public
 */
export interface ChangeProgressStatus {
  /**
   * The time at which the configuration change is made on the pipeline.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The overall status of the pipeline configuration change.
   *
   * @public
   */
  Status?: ChangeProgressStatuses | undefined;

  /**
   * The total number of stages required for the pipeline configuration change.
   *
   * @public
   */
  TotalNumberOfStages?: number | undefined;

  /**
   * Information about the stages that the pipeline is going through to perform the configuration change.
   *
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[] | undefined;
}

/**
 * @public
 */
export interface GetPipelineChangeProgressResponse {
  /**
   * The current status of the change happening on the pipeline.
   *
   * @public
   */
  ChangeProgressStatuses?: ChangeProgressStatus[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to retrieve the policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource-based policy document in JSON format.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineBlueprintsRequest {}

/**
 * A summary of an OpenSearch Ingestion blueprint.
 *
 * @public
 */
export interface PipelineBlueprintSummary {
  /**
   * The name of the blueprint.
   *
   * @public
   */
  BlueprintName?: string | undefined;

  /**
   * The display name of the blueprint.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A description of the blueprint.
   *
   * @public
   */
  DisplayDescription?: string | undefined;

  /**
   * The name of the service that the blueprint is associated with.
   *
   * @public
   */
  Service?: string | undefined;

  /**
   * The use case that the blueprint relates to.
   *
   * @public
   */
  UseCase?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineBlueprintsResponse {
  /**
   * A list of available blueprints for Data Prepper.
   *
   * @public
   */
  Blueprints?: PipelineBlueprintSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointConnectionsRequest {
  /**
   * The maximum number of pipeline endpoint connections to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListPipelineEndpointConnections` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListPipelineEndpointConnections` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a connection to a pipeline endpoint, containing details about the endpoint association.
 *
 * @public
 */
export interface PipelineEndpointConnection {
  /**
   * The Amazon Resource Name (ARN) of the pipeline in the endpoint connection.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The unique identifier of the endpoint in the connection.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The current status of the pipeline endpoint connection.
   *
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * The Amazon Web Services account ID that owns the VPC endpoint used in this connection.
   *
   * @public
   */
  VpcEndpointOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointConnectionsResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of pipeline endpoint connections.
   *
   * @public
   */
  PipelineEndpointConnections?: PipelineEndpointConnection[] | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointsRequest {
  /**
   * The maximum number of pipeline endpoints to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListPipelineEndpoints` operation returns a `NextToken`, you can include the returned `NextToken` in subsequent `ListPipelineEndpoints` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a VPC endpoint for an OpenSearch Ingestion pipeline, enabling private connectivity between your VPC and the pipeline.
 *
 * @public
 */
export interface PipelineEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the pipeline associated with this endpoint.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The unique identifier for the pipeline endpoint.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The current status of the pipeline endpoint.
   *
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * The ID of the VPC where the pipeline endpoint is created.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Configuration options for the VPC endpoint, including subnet and security group settings.
   *
   * @public
   */
  VpcOptions?: PipelineEndpointVpcOptions | undefined;

  /**
   * The URL used to ingest data to the pipeline through the VPC endpoint.
   *
   * @public
   */
  IngestEndpointUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointsResponse {
  /**
   * When `NextToken` is returned, there are more results available. The value of `NextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of pipeline endpoints.
   *
   * @public
   */
  PipelineEndpoints?: PipelineEndpoint[] | undefined;
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If your initial `ListPipelines` operation returns a `nextToken`, you can include the returned `nextToken` in subsequent `ListPipelines` operations, which returns results in the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information for an OpenSearch Ingestion pipeline.
 *
 * @public
 */
export interface PipelineSummary {
  /**
   * The current status of the pipeline.
   *
   * @public
   */
  Status?: PipelineStatus | undefined;

  /**
   * Information about a pipeline's current status.
   *
   * @public
   */
  StatusReason?: PipelineStatusReason | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the pipeline.
   *
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MinUnits?: number | undefined;

  /**
   * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * The date and time when the pipeline was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time when the pipeline was last updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A list of destinations to which the pipeline writes data.
   *
   * @public
   */
  Destinations?: PipelineDestination[] | undefined;

  /**
   * A list of tags associated with the given pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of all existing Data Prepper pipelines.
   *
   * @public
   */
  Pipelines?: PipelineSummary[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline to retrieve tags for.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags associated with the given pipeline.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to attach the policy to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource-based policy document in JSON format.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The resource-based policy document that was attached to the resource.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RevokePipelineEndpointConnectionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline from which to revoke endpoint connections.
   *
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * A list of endpoint IDs for which to revoke access to the pipeline.
   *
   * @public
   */
  EndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RevokePipelineEndpointConnectionsResponse {
  /**
   * The Amazon Resource Name (ARN) of the pipeline from which endpoint connections were revoked.
   *
   * @public
   */
  PipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineRequest {
  /**
   * The name of the pipeline to start.
   *
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StartPipelineResponse {
  /**
   * Information about an existing OpenSearch Ingestion pipeline.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * @public
 */
export interface StopPipelineRequest {
  /**
   * The name of the pipeline to stop.
   *
   * @public
   */
  PipelineName: string | undefined;
}

/**
 * @public
 */
export interface StopPipelineResponse {
  /**
   * Information about an existing OpenSearch Ingestion pipeline.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the pipeline to tag.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The list of key-value tags to add to the pipeline.
   *
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
   * The Amazon Resource Name (ARN) of the pipeline to remove tags from.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The tag keys to remove.
   *
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
   * The name of the pipeline to update.
   *
   * @public
   */
  PipelineName: string | undefined;

  /**
   * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
   *
   * @public
   */
  MinUnits?: number | undefined;

  /**
   * The maximum pipeline capacity, in Ingestion Compute Units (ICUs)
   *
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with `\n`.
   *
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * Key-value pairs to configure log publishing.
   *
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * Key-value pairs to configure persistent buffering for the pipeline.
   *
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * Key-value pairs to configure encryption for data that is written to a persistent buffer.
   *
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants the pipeline permission to access Amazon Web Services resources.
   *
   * @public
   */
  PipelineRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * Container for information about the updated pipeline.
   *
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * @public
 */
export interface ValidatePipelineRequest {
  /**
   * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with `\n`.
   *
   * @public
   */
  PipelineConfigurationBody: string | undefined;
}

/**
 * A validation message associated with a `ValidatePipeline` request in OpenSearch Ingestion.
 *
 * @public
 */
export interface ValidationMessage {
  /**
   * The validation message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ValidatePipelineResponse {
  /**
   * A boolean indicating whether or not the pipeline configuration is valid.
   *
   * @public
   */
  isValid?: boolean | undefined;

  /**
   * A list of errors if the configuration is invalid.
   *
   * @public
   */
  Errors?: ValidationMessage[] | undefined;
}
