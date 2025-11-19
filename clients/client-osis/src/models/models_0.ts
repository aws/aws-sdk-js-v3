// smithy-typescript generated code
import {
  ChangeProgressStageStatuses,
  ChangeProgressStatuses,
  PipelineEndpointStatus,
  PipelineStatus,
  VpcEndpointManagement,
  VpcEndpointServiceName,
} from "./enums";

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
  IsLoggingEnabled?: boolean | undefined;

  /**
   * <p>The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch Logs. This
   *    parameter is required if <code>IsLoggingEnabled</code> is set to <code>true</code>.</p>
   * @public
   */
  CloudWatchLogDestination?: CloudWatchLogDestination | undefined;
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
  CidrBlock?: string | undefined;
}

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
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Options for attaching a VPC to a pipeline.</p>
   * @public
   */
  VpcAttachmentOptions?: VpcAttachmentOptions | undefined;

  /**
   * <p>Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.</p>
   * @public
   */
  VpcEndpointManagement?: VpcEndpointManagement | undefined;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * <p>The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the
   *    pipelines owned by an account within an Amazon Web Services Region.</p>
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
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * <p>Container for the values required to configure VPC access for the pipeline. If you don't
   *    specify these values, OpenSearch Ingestion creates the pipeline with a public endpoint.</p>
   * @public
   */
  VpcOptions?: VpcOptions | undefined;

  /**
   * <p>Key-value pairs to configure persistent buffering for the pipeline.</p>
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * <p>Key-value pairs to configure encryption for data that is written to a persistent
   *    buffer.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>List of tags to add to the pipeline upon creation.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants the pipeline permission to access
   *     Amazon Web Services resources.</p>
   * @public
   */
  PipelineRoleArn?: string | undefined;
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
  ServiceName?: string | undefined;

  /**
   * <p>The endpoint receiving data from the pipeline.</p>
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * <p>A container for information about VPC endpoints that were created to other services</p>
 * @public
 */
export interface ServiceVpcEndpoint {
  /**
   * <p>The name of the service for which a VPC endpoint was created.</p>
   * @public
   */
  ServiceName?: VpcEndpointServiceName | undefined;

  /**
   * <p>The unique identifier of the VPC endpoint that was created.</p>
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * <p>Information about a pipeline's current status.</p>
 * @public
 */
export interface PipelineStatusReason {
  /**
   * <p>A description of why a pipeline has a certain status.</p>
   * @public
   */
  Description?: string | undefined;
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
  VpcEndpointId?: string | undefined;

  /**
   * <p>The ID for your VPC. Amazon Web Services PrivateLink generates this value when you create a
   *    VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Information about the VPC, including associated subnets and security groups.</p>
   * @public
   */
  VpcOptions?: VpcOptions | undefined;
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
  PipelineName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits?: number | undefined;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * <p>The current status of the pipeline.</p>
   * @public
   */
  Status?: PipelineStatus | undefined;

  /**
   * <p>The reason for the current status of the pipeline.</p>
   * @public
   */
  StatusReason?: PipelineStatusReason | undefined;

  /**
   * <p>The Data Prepper pipeline configuration in YAML format.</p>
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * <p>The date and time when the pipeline was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the pipeline was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The ingestion endpoints for the pipeline, which you can send data to.</p>
   * @public
   */
  IngestEndpointUrls?: string[] | undefined;

  /**
   * <p>Key-value pairs that represent log publishing settings.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * <p>The VPC interface endpoints that have access to the pipeline.</p>
   * @public
   */
  VpcEndpoints?: VpcEndpoint[] | undefined;

  /**
   * <p>Options that specify the configuration of a persistent buffer.
   *    To configure how OpenSearch Ingestion encrypts this data, set the <code>EncryptionAtRestOptions</code>. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/osis-features-overview.html#persistent-buffering">Persistent buffering</a>.</p>
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * <p>Options to control how OpenSearch encrypts buffer data.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>The VPC endpoint service name for the pipeline.</p>
   * @public
   */
  VpcEndpointService?: string | undefined;

  /**
   * <p>A list of VPC endpoints that OpenSearch Ingestion has created to other Amazon Web Services services.</p>
   * @public
   */
  ServiceVpcEndpoints?: ServiceVpcEndpoint[] | undefined;

  /**
   * <p>Destinations to which the pipeline writes data.</p>
   * @public
   */
  Destinations?: PipelineDestination[] | undefined;

  /**
   * <p>A list of tags associated with the given pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the pipeline uses to access AWS
   *    resources.</p>
   * @public
   */
  PipelineRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * <p>Container for information about the created pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;
}

/**
 * <p>Configuration settings for the VPC endpoint, specifying network access controls.</p>
 * @public
 */
export interface PipelineEndpointVpcOptions {
  /**
   * <p>A list of subnet IDs where the pipeline endpoint network interfaces are created.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A list of security group IDs that control network access to the pipeline endpoint.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePipelineEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline to create the endpoint for.</p>
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * <p>Container for the VPC configuration for the pipeline endpoint, including subnet IDs and
   *    security group IDs.</p>
   * @public
   */
  VpcOptions: PipelineEndpointVpcOptions | undefined;
}

/**
 * @public
 */
export interface CreatePipelineEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline associated with the endpoint.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The unique identifier of the pipeline endpoint.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The current status of the pipeline endpoint.</p>
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * <p>The ID of the VPC where the pipeline endpoint was created.</p>
   * @public
   */
  VpcId?: string | undefined;
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
export interface DeletePipelineEndpointRequest {
  /**
   * <p>The unique identifier of the pipeline endpoint to delete.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete the policy.</p>
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
  Pipeline?: Pipeline | undefined;
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
  Format?: string | undefined;
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
  BlueprintName?: string | undefined;

  /**
   * <p>The YAML configuration of the blueprint.</p>
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * <p>The display name of the blueprint.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  DisplayDescription?: string | undefined;

  /**
   * <p>The name of the service that the blueprint is associated with.</p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The use case that the blueprint relates to.</p>
   * @public
   */
  UseCase?: string | undefined;
}

/**
 * @public
 */
export interface GetPipelineBlueprintResponse {
  /**
   * <p>The requested blueprint in YAML format.</p>
   * @public
   */
  Blueprint?: PipelineBlueprint | undefined;

  /**
   * <p>The format of the blueprint.</p>
   * @public
   */
  Format?: string | undefined;
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
 * <p>Progress details for a specific stage of a pipeline configuration change.</p>
 * @public
 */
export interface ChangeProgressStage {
  /**
   * <p>The name of the stage.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The current status of the stage that the change is in.</p>
   * @public
   */
  Status?: ChangeProgressStageStatuses | undefined;

  /**
   * <p>A description of the stage.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The most recent updated timestamp of the stage.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;
}

/**
 * <p>The progress details of a pipeline configuration change.</p>
 * @public
 */
export interface ChangeProgressStatus {
  /**
   * <p>The time at which the configuration change is made on the pipeline.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The overall status of the pipeline configuration change.</p>
   * @public
   */
  Status?: ChangeProgressStatuses | undefined;

  /**
   * <p>The total number of stages required for the pipeline configuration change.</p>
   * @public
   */
  TotalNumberOfStages?: number | undefined;

  /**
   * <p>Information about the stages that the pipeline is going through to perform the configuration change.</p>
   * @public
   */
  ChangeProgressStages?: ChangeProgressStage[] | undefined;
}

/**
 * @public
 */
export interface GetPipelineChangeProgressResponse {
  /**
   * <p>The current status of the change happening on the pipeline.</p>
   * @public
   */
  ChangeProgressStatuses?: ChangeProgressStatus[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve the policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource-based policy document in JSON format.</p>
   * @public
   */
  Policy?: string | undefined;
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
  BlueprintName?: string | undefined;

  /**
   * <p>The display name of the blueprint.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  DisplayDescription?: string | undefined;

  /**
   * <p>The name of the service that the blueprint is associated with.</p>
   * @public
   */
  Service?: string | undefined;

  /**
   * <p>The use case that the blueprint relates to.</p>
   * @public
   */
  UseCase?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineBlueprintsResponse {
  /**
   * <p>A list of available blueprints for Data Prepper.</p>
   * @public
   */
  Blueprints?: PipelineBlueprintSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointConnectionsRequest {
  /**
   * <p>The maximum number of pipeline endpoint connections to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>ListPipelineEndpointConnections</code> operation returns a
   *     <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent
   *     <code>ListPipelineEndpointConnections</code> operations, which returns results in the next
   *    page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a connection to a pipeline endpoint, containing details about the endpoint
 *    association.</p>
 * @public
 */
export interface PipelineEndpointConnection {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline in the endpoint connection.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The unique identifier of the endpoint in the connection.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The current status of the pipeline endpoint connection.</p>
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the VPC endpoint used in this connection.</p>
   * @public
   */
  VpcEndpointOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointConnectionsResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of pipeline endpoint connections.</p>
   * @public
   */
  PipelineEndpointConnections?: PipelineEndpointConnection[] | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointsRequest {
  /**
   * <p>The maximum number of pipeline endpoints to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>ListPipelineEndpoints</code> operation returns a
   *     <code>NextToken</code>, you can include the returned <code>NextToken</code> in subsequent
   *     <code>ListPipelineEndpoints</code> operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a VPC endpoint for an OpenSearch Ingestion pipeline, enabling private
 *    connectivity between your VPC and the pipeline.</p>
 * @public
 */
export interface PipelineEndpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline associated with this endpoint.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The unique identifier for the pipeline endpoint.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The current status of the pipeline endpoint.</p>
   * @public
   */
  Status?: PipelineEndpointStatus | undefined;

  /**
   * <p>The ID of the VPC where the pipeline endpoint is created.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Configuration options for the VPC endpoint, including subnet and security group
   *    settings.</p>
   * @public
   */
  VpcOptions?: PipelineEndpointVpcOptions | undefined;

  /**
   * <p>The URL used to ingest data to the pipeline through the VPC endpoint.</p>
   * @public
   */
  IngestEndpointUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelineEndpointsResponse {
  /**
   * <p>When <code>NextToken</code> is returned, there are more results available. The value of
   *     <code>NextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of pipeline endpoints.</p>
   * @public
   */
  PipelineEndpoints?: PipelineEndpoint[] | undefined;
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use
   *     <code>nextToken</code> to get the next page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>If your initial <code>ListPipelines</code> operation returns a <code>nextToken</code>, you
   *    can include the returned <code>nextToken</code> in subsequent <code>ListPipelines</code>
   *    operations, which returns results in the next page.</p>
   * @public
   */
  NextToken?: string | undefined;
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
  Status?: PipelineStatus | undefined;

  /**
   * <p>Information about a pipeline's current status.</p>
   * @public
   */
  StatusReason?: PipelineStatusReason | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  PipelineName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline.</p>
   * @public
   */
  PipelineArn?: string | undefined;

  /**
   * <p>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MinUnits?: number | undefined;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</p>
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * <p>The date and time when the pipeline was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the pipeline was last updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>A list of destinations to which the pipeline writes data.</p>
   * @public
   */
  Destinations?: PipelineDestination[] | undefined;

  /**
   * <p>A list of tags associated with the given pipeline.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available. The value of
   *     <code>nextToken</code> is a unique pagination token for each page. Make the call again using the
   *    returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of all existing Data Prepper pipelines.</p>
   * @public
   */
  Pipelines?: PipelineSummary[] | undefined;
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
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to attach the policy to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The resource-based policy document in JSON format.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource-based policy document that was attached to the resource.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RevokePipelineEndpointConnectionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline from which to revoke endpoint
   *    connections.</p>
   * @public
   */
  PipelineArn: string | undefined;

  /**
   * <p>A list of endpoint IDs for which to revoke access to the pipeline.</p>
   * @public
   */
  EndpointIds: string[] | undefined;
}

/**
 * @public
 */
export interface RevokePipelineEndpointConnectionsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the pipeline from which endpoint connections were
   *    revoked.</p>
   * @public
   */
  PipelineArn?: string | undefined;
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
  Pipeline?: Pipeline | undefined;
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
  Pipeline?: Pipeline | undefined;
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
  MinUnits?: number | undefined;

  /**
   * <p>The maximum pipeline capacity, in Ingestion Compute Units (ICUs)</p>
   * @public
   */
  MaxUnits?: number | undefined;

  /**
   * <p>The pipeline configuration in YAML format. The command accepts the pipeline configuration as
   *    a string or within a .yaml file. If you provide the configuration as a string, each new line must
   *    be escaped with <code>\n</code>.</p>
   * @public
   */
  PipelineConfigurationBody?: string | undefined;

  /**
   * <p>Key-value pairs to configure log publishing.</p>
   * @public
   */
  LogPublishingOptions?: LogPublishingOptions | undefined;

  /**
   * <p>Key-value pairs to configure persistent buffering for the pipeline.</p>
   * @public
   */
  BufferOptions?: BufferOptions | undefined;

  /**
   * <p>Key-value pairs to configure encryption for data that is written to a persistent
   *    buffer.</p>
   * @public
   */
  EncryptionAtRestOptions?: EncryptionAtRestOptions | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that grants the pipeline permission to access
   *    Amazon Web Services resources.</p>
   * @public
   */
  PipelineRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineResponse {
  /**
   * <p>Container for information about the updated pipeline.</p>
   * @public
   */
  Pipeline?: Pipeline | undefined;
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
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ValidatePipelineResponse {
  /**
   * <p>A boolean indicating whether or not the pipeline configuration is valid.</p>
   * @public
   */
  isValid?: boolean | undefined;

  /**
   * <p>A list of errors if the configuration is invalid.</p>
   * @public
   */
  Errors?: ValidationMessage[] | undefined;
}
