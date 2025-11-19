// smithy-typescript generated code
import { StreamingBlobTypes } from "@smithy/types";

import {
  ApplicationLogLevel,
  Architecture,
  CodeSigningPolicy,
  EndPointType,
  EventSourceMappingMetric,
  EventSourcePosition,
  FullDocument,
  FunctionResponseType,
  FunctionUrlAuthType,
  FunctionVersion,
  InvocationType,
  InvokeMode,
  KafkaSchemaRegistryAuthType,
  KafkaSchemaValidationAttribute,
  LastUpdateStatus,
  LastUpdateStatusReasonCode,
  LogFormat,
  LogType,
  PackageType,
  ProvisionedConcurrencyStatusEnum,
  RecursiveLoop,
  ResponseStreamingInvocationType,
  Runtime,
  SchemaRegistryEventRecordFormat,
  SnapStartApplyOn,
  SnapStartOptimizationStatus,
  SourceAccessType,
  State,
  StateReasonCode,
  SystemLogLevel,
  TracingMode,
  UpdateRuntimeOn,
} from "./enums";

/**
 * <p>Limits that are related to concurrency and storage. All file and storage sizes are in bytes.</p>
 * @public
 */
export interface AccountLimit {
  /**
   * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
   * @public
   */
  TotalCodeSize?: number | undefined;

  /**
   * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
   * @public
   */
  CodeSizeUnzipped?: number | undefined;

  /**
   * <p>The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger files.</p>
   * @public
   */
  CodeSizeZipped?: number | undefined;

  /**
   * <p>The maximum number of simultaneous function executions.</p>
   * @public
   */
  ConcurrentExecutions?: number | undefined;

  /**
   * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with <a>PutFunctionConcurrency</a>.</p>
   * @public
   */
  UnreservedConcurrentExecutions?: number | undefined;
}

/**
 * <p>The number of functions and amount of storage in use.</p>
 * @public
 */
export interface AccountUsage {
  /**
   * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
   * @public
   */
  TotalCodeSize?: number | undefined;

  /**
   * <p>The number of Lambda functions.</p>
   * @public
   */
  FunctionCount?: number | undefined;
}

/**
 * @public
 */
export interface AddLayerVersionPermissionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
   * @public
   */
  StatementId: string | undefined;

  /**
   * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
   * @public
   */
  Action: string | undefined;

  /**
   * <p>An account ID, or <code>*</code> to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer. </p>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface AddLayerVersionPermissionResponse {
  /**
   * <p>The permission statement.</p>
   * @public
   */
  Statement?: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface AddPermissionRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
   * @public
   */
  StatementId: string | undefined;

  /**
   * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or <code>lambda:GetFunction</code>.</p>
   * @public
   */
  Action: string | undefined;

  /**
   * <p>The Amazon Web Services service, Amazon Web Services account, IAM user, or IAM role that invokes the function. If you specify a service, use <code>SourceArn</code> or <code>SourceAccount</code> to limit who can invoke the function through that service.</p>
   * @public
   */
  Principal: string | undefined;

  /**
   * <p>For Amazon Web Services services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.</p> <p>Note that Lambda configures the comparison using the <code>StringLike</code> operator.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>For Amazon Web Services service, the ID of the Amazon Web Services account that owns the resource. Use this together with <code>SourceArn</code> to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.</p>
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * <p>For Alexa Smart Home functions, a token that the invoker must supply.</p>
   * @public
   */
  EventSourceToken?: string | undefined;

  /**
   * <p>Specify a version or alias to add permissions to a published version of the function.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.</p>
   * @public
   */
  PrincipalOrgID?: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  FunctionUrlAuthType?: FunctionUrlAuthType | undefined;

  /**
   * <p>Restricts the <code>lambda:InvokeFunction</code> action to function URL calls. When set to <code>true</code>, this prevents the principal from invoking the function by any means other than the function URL. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  InvokedViaFunctionUrl?: boolean | undefined;
}

/**
 * @public
 */
export interface AddPermissionResponse {
  /**
   * <p>The permission statement that's added to the function policy.</p>
   * @public
   */
  Statement?: string | undefined;
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.</p>
 * @public
 */
export interface AliasRoutingConfiguration {
  /**
   * <p>The second version, and the percentage of traffic that's routed to it.</p>
   * @public
   */
  AdditionalVersionWeights?: Record<string, number> | undefined;
}

/**
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html">alias</a>.</p>
 * @public
 */
export interface AliasConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   * @public
   */
  AliasArn?: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing configuration</a> of the alias.</p>
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;

  /**
   * <p>A unique identifier that changes when you update the alias.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * <p>List of signing profiles that can sign a code package. </p>
 * @public
 */
export interface AllowedPublishers {
  /**
   * <p>The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. </p>
   * @public
   */
  SigningProfileVersionArns: string[] | undefined;
}

/**
 * <p>Specific access configuration settings that tell Lambda how to authenticate with your schema registry.</p> <p>If you're working with an Glue schema registry, don't provide authentication details in this object. Instead, ensure that your execution role has the required permissions for Lambda to access your cluster.</p> <p>If you're working with a Confluent schema registry, choose the authentication method in the <code>Type</code> field, and provide the Secrets Manager secret ARN in the <code>URI</code> field.</p>
 * @public
 */
export interface KafkaSchemaRegistryAccessConfig {
  /**
   * <p> The type of authentication Lambda uses to access your schema registry. </p>
   * @public
   */
  Type?: KafkaSchemaRegistryAuthType | undefined;

  /**
   * <p> The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry. </p>
   * @public
   */
  URI?: string | undefined;
}

/**
 * <p>Specific schema validation configuration settings that tell Lambda the message attributes you want to validate and filter using your schema registry.</p>
 * @public
 */
export interface KafkaSchemaValidationConfig {
  /**
   * <p> The attributes you want your schema registry to validate and filter for. If you selected <code>JSON</code> as the <code>EventRecordFormat</code>, Lambda also deserializes the selected message attributes. </p>
   * @public
   */
  Attribute?: KafkaSchemaValidationAttribute | undefined;
}

/**
 * <p>Specific configuration settings for a Kafka schema registry.</p>
 * @public
 */
export interface KafkaSchemaRegistryConfig {
  /**
   * <p>The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.</p> <ul> <li> <p>For Glue schema registries, use the ARN of the registry.</p> </li> <li> <p>For Confluent schema registries, use the URL of the registry.</p> </li> </ul>
   * @public
   */
  SchemaRegistryURI?: string | undefined;

  /**
   * <p>The record format that Lambda delivers to your function after schema validation.</p> <ul> <li> <p>Choose <code>JSON</code> to have Lambda deliver the record to your function as a standard JSON object.</p> </li> <li> <p>Choose <code>SOURCE</code> to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.</p> </li> </ul>
   * @public
   */
  EventRecordFormat?: SchemaRegistryEventRecordFormat | undefined;

  /**
   * <p>An array of access configuration objects that tell Lambda how to authenticate with your schema registry.</p>
   * @public
   */
  AccessConfigs?: KafkaSchemaRegistryAccessConfig[] | undefined;

  /**
   * <p>An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.</p>
   * @public
   */
  SchemaValidationConfigs?: KafkaSchemaValidationConfig[] | undefined;
}

/**
 * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
 * @public
 */
export interface AmazonManagedKafkaEventSourceConfig {
  /**
   * <p>The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id">Customizable consumer group ID</a>.</p>
   * @public
   */
  ConsumerGroupId?: string | undefined;

  /**
   * <p>Specific configuration settings for a Kafka schema registry.</p>
   * @public
   */
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;
}

/**
 * <p>Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.</p>
 * @public
 */
export interface CodeSigningPolicies {
  /**
   * <p>Code signing configuration policy for deployment validation failure. If you set the policy to <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to <code>Warn</code>, Lambda allows the deployment and issues a new Amazon CloudWatch metric (<code>SignatureValidationErrors</code>) and also stores the warning in the CloudTrail log.</p> <p>Default value: <code>Warn</code> </p>
   * @public
   */
  UntrustedArtifactOnDeployment?: CodeSigningPolicy | undefined;
}

/**
 * @public
 */
export interface CreateCodeSigningConfigRequest {
  /**
   * <p>Descriptive name for this code signing configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Signing profiles for this code signing configuration.</p>
   * @public
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * <p>The code signing policies define the actions to take if the validation checks fail. </p>
   * @public
   */
  CodeSigningPolicies?: CodeSigningPolicies | undefined;

  /**
   * <p>A list of tags to add to the code signing configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. </p>
 * @public
 */
export interface CodeSigningConfig {
  /**
   * <p>Unique identifer for the Code signing configuration.</p>
   * @public
   */
  CodeSigningConfigId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Code signing configuration description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>List of allowed publishers.</p>
   * @public
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * <p>The code signing policy controls the validation failure action for signature mismatch or expiry.</p>
   * @public
   */
  CodeSigningPolicies: CodeSigningPolicies | undefined;

  /**
   * <p>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). </p>
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration.</p>
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSigningConfigResponse {}

/**
 * @public
 */
export interface GetCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration. </p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration</p>
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * @public
 */
export interface ListCodeSigningConfigsRequest {
  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Maximum number of items to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSigningConfigsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The code signing configurations</p>
   * @public
   */
  CodeSigningConfigs?: CodeSigningConfig[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Maximum number of items to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>The function ARNs. </p>
   * @public
   */
  FunctionArns?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Descriptive name for this code signing configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Signing profiles for this code signing configuration.</p>
   * @public
   */
  AllowedPublishers?: AllowedPublishers | undefined;

  /**
   * <p>The code signing policy.</p>
   * @public
   */
  CodeSigningPolicies?: CodeSigningPolicies | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration</p>
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * <p>A destination for events that failed processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations">Adding a destination</a>.</p>
 * @public
 */
export interface OnFailure {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p> <p>To retain records of unsuccessful <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">asynchronous invocations</a>, you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, Lambda function, or Amazon EventBridge event bus as the destination.</p> <note> <p>Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending <code>OnFailure</code> event to the destination. For details on this behavior, refer to <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html">Retaining records of asynchronous invocations</a>.</p> </note> <p>To retain records of failed invocations from <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html">Kinesis</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html">DynamoDB</a>, <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination">self-managed Kafka</a> or <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination">Amazon MSK</a>, you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.</p>
   * @public
   */
  Destination?: string | undefined;
}

/**
 * <p>A destination for events that were processed successfully.</p> <p>To retain records of successful <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations">asynchronous invocations</a>, you can configure an Amazon SNS topic, Amazon SQS queue, Lambda function, or Amazon EventBridge event bus as the destination.</p> <note> <p> <code>OnSuccess</code> is not supported in <code>CreateEventSourceMapping</code> or <code>UpdateEventSourceMapping</code> requests.</p> </note>
 * @public
 */
export interface OnSuccess {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p> <note> <p>Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending <code>OnFailure</code> event to the destination. For details on this behavior, refer to <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html">Retaining records of asynchronous invocations</a>.</p> </note>
   * @public
   */
  Destination?: string | undefined;
}

/**
 * <p>A configuration object that specifies the destination of an event after Lambda processes it. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations">Adding a destination</a>.</p>
 * @public
 */
export interface DestinationConfig {
  /**
   * <p>The destination configuration for successful invocations. Not supported in <code>CreateEventSourceMapping</code> or <code>UpdateEventSourceMapping</code>.</p>
   * @public
   */
  OnSuccess?: OnSuccess | undefined;

  /**
   * <p>The destination configuration for failed invocations.</p>
   * @public
   */
  OnFailure?: OnFailure | undefined;
}

/**
 * <p> Specific configuration settings for a DocumentDB event source. </p>
 * @public
 */
export interface DocumentDBEventSourceConfig {
  /**
   * <p> The name of the database to consume within the DocumentDB cluster. </p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p> The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. </p>
   * @public
   */
  CollectionName?: string | undefined;

  /**
   * <p> Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. </p>
   * @public
   */
  FullDocument?: FullDocument | undefined;
}

/**
 * <p> A structure within a <code>FilterCriteria</code> object that defines an event filtering pattern. </p>
 * @public
 */
export interface Filter {
  /**
   * <p> A filter pattern. For more information on the syntax of a filter pattern, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax"> Filter rule syntax</a>. </p>
   * @public
   */
  Pattern?: string | undefined;
}

/**
 * <p> An object that contains the filters for an event source. </p>
 * @public
 */
export interface FilterCriteria {
  /**
   * <p> A list of filters. </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.</p>
 * @public
 */
export interface EventSourceMappingMetricsConfig {
  /**
   * <p> The metrics you want your event source mapping to produce. Include <code>EventCount</code> to receive event source mapping metrics related to the number of events processed by your event source mapping. For more information about these metrics, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics"> Event source mapping metrics</a>. </p>
   * @public
   */
  Metrics?: EventSourceMappingMetric[] | undefined;
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode"> provisioned mode</a> configuration for the event source. Use Provisioned Mode to customize the minimum and maximum number of event pollers for your event source. An event poller is a compute unit that provides approximately 5 MBps of throughput.</p>
 * @public
 */
export interface ProvisionedPollerConfig {
  /**
   * <p>The minimum number of event pollers this event source can scale down to.</p>
   * @public
   */
  MinimumPollers?: number | undefined;

  /**
   * <p>The maximum number of event pollers this event source can scale up to.</p>
   * @public
   */
  MaximumPollers?: number | undefined;
}

/**
 * <p>(Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.</p>
 * @public
 */
export interface ScalingConfig {
  /**
   * <p>Limits the number of concurrent instances that the Amazon SQS event source can invoke.</p>
   * @public
   */
  MaximumConcurrency?: number | undefined;
}

/**
 * <p>The self-managed Apache Kafka cluster for your event source.</p>
 * @public
 */
export interface SelfManagedEventSource {
  /**
   * <p>The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.</p>
   * @public
   */
  Endpoints?: Partial<Record<EndPointType, string[]>> | undefined;
}

/**
 * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
 * @public
 */
export interface SelfManagedKafkaEventSourceConfig {
  /**
   * <p> The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add">Customizable consumer group ID</a>.</p>
   * @public
   */
  ConsumerGroupId?: string | undefined;

  /**
   * <p>Specific configuration settings for a Kafka schema registry.</p>
   * @public
   */
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;
}

/**
 * <p>To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.</p>
 * @public
 */
export interface SourceAccessConfiguration {
  /**
   * <p>The type of authentication protocol, VPC components, or virtual host for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p> <ul> <li> <p> <code>BASIC_AUTH</code> – (Amazon MQ) The Secrets Manager secret that stores your broker credentials.</p> </li> <li> <p> <code>BASIC_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.</p> </li> <li> <p> <code>VPC_SUBNET</code> – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.</p> </li> <li> <p> <code>VPC_SECURITY_GROUP</code> – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_256_AUTH</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>SASL_SCRAM_512_AUTH</code> – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.</p> </li> <li> <p> <code>VIRTUAL_HOST</code> –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.</p> </li> <li> <p> <code>CLIENT_CERTIFICATE_TLS_AUTH</code> – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.</p> </li> <li> <p> <code>SERVER_ROOT_CA_CERTIFICATE</code> – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers. </p> </li> </ul>
   * @public
   */
  Type?: SourceAccessType | undefined;

  /**
   * <p>The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.</p>
   * @public
   */
  URI?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventSourceMappingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster or the ARN of the VPC connection (for <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc">cross-account event source mappings</a>).</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For Kinesis, DynamoDB, and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For Kinesis, DynamoDB, and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * <p>The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.</p>
   * @public
   */
  StartingPosition?: EventSourcePosition | undefined;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.</p>
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Kafka only) A configuration object that specifies the destination of an event after Lambda processes it.</p>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.</p>
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>A list of tags to apply to the event source mapping.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * <p>The name of the Kafka topic.</p>
   * @public
   */
  Topics?: string[] | undefined;

  /**
   * <p> (MQ) The name of the Amazon MQ broker destination queue to consume. </p>
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * <p>The self-managed Apache Kafka cluster to receive records from.</p>
   * @public
   */
  SelfManagedEventSource?: SelfManagedEventSource | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * <p>Specific configuration settings for a DocumentDB event source.</p>
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * <p> The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics">filter criteria</a>. By default, Lambda does not encrypt your filter criteria object. Specify this property to encrypt data using your own customer managed key. </p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>The metrics configuration for your event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics">Event source mapping metrics</a>.</p>
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * <p>(Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode">provisioned mode</a>.</p>
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * <p>An object that contains details about an error related to filter criteria encryption.</p>
 * @public
 */
export interface FilterCriteriaError {
  /**
   * <p>The KMS exception that resulted from filter criteria encryption or decryption.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.</p>
 * @public
 */
export interface EventSourceMappingConfiguration {
  /**
   * <p>The identifier of the event source mapping.</p>
   * @public
   */
  UUID?: string | undefined;

  /**
   * <p>The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.</p>
   * @public
   */
  StartingPosition?: EventSourcePosition | undefined;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading. <code>StartingPositionTimestamp</code> cannot be in the future.</p>
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;

  /**
   * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <p>Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100.</p> <p>Related setting: When you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For streams and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p> <p>If filter criteria is encrypted, this field shows up as <code>null</code> in the response of ListEventSourceMapping API calls. You can view this field in plaintext in the response of GetEventSourceMapping and DeleteEventSourceMapping calls if you have <code>kms:Decrypt</code> permissions for the correct KMS key.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The ARN of the Lambda function.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>The date that the event source mapping was last updated or that its state changed.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The result of the event source mapping's last processing attempt.</p>
   * @public
   */
  LastProcessingResult?: string | undefined;

  /**
   * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>, <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>, <code>Updating</code>, or <code>Deleting</code>.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Indicates whether a user or Lambda made the last change to the event source mapping.</p>
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.</p>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * <p>The name of the Kafka topic.</p>
   * @public
   */
  Topics?: string[] | undefined;

  /**
   * <p> (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</p>
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * <p>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</p>
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * <p>The self-managed Apache Kafka cluster for your event source.</p>
   * @public
   */
  SelfManagedEventSource?: SelfManagedEventSource | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.</p> <note> <p>The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed</p> </note>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.</p>
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * <p>Specific configuration settings for a DocumentDB event source.</p>
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * <p> The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics">filter criteria</a>.</p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>An object that contains details about an error related to filter criteria encryption.</p>
   * @public
   */
  FilterCriteriaError?: FilterCriteriaError | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source mapping.</p>
   * @public
   */
  EventSourceMappingArn?: string | undefined;

  /**
   * <p>The metrics configuration for your event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics">Event source mapping metrics</a>.</p>
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * <p>(Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode">provisioned mode</a>.</p>
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * @public
 */
export interface DeleteEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   * @public
   */
  UUID: string | undefined;
}

/**
 * @public
 */
export interface GetEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   * @public
   */
  UUID: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourceMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p> <ul> <li> <p> <b>Amazon Kinesis</b> – The ARN of the data stream or a stream consumer.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – The ARN of the stream.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – The ARN of the queue.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – The ARN of the cluster or the ARN of the VPC connection (for <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc">cross-account event source mappings</a>).</p> </li> <li> <p> <b>Amazon MQ</b> – The ARN of the broker.</p> </li> <li> <p> <b>Amazon DocumentDB</b> – The ARN of the DocumentDB change stream.</p> </li> </ul>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>A pagination token returned by a previous call.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListEventSourceMappingsResponse {
  /**
   * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of event source mappings.</p>
   * @public
   */
  EventSourceMappings?: EventSourceMappingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   * @public
   */
  UUID: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Version or Alias ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>When true, the event source mapping is active. When false, Lambda pauses polling and invocation.</p> <p>Default: True</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).</p> <ul> <li> <p> <b>Amazon Kinesis</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon DynamoDB Streams</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon Simple Queue Service</b> – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p> </li> <li> <p> <b>Amazon Managed Streaming for Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Self-managed Apache Kafka</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>Amazon MQ (ActiveMQ and RabbitMQ)</b> – Default 100. Max 10,000.</p> </li> <li> <p> <b>DocumentDB</b> – Default 100. Max 10,000.</p> </li> </ul>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html">Lambda event filtering</a>.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure <code>MaximumBatchingWindowInSeconds</code> to any value from 0 seconds to 300 seconds in increments of seconds.</p> <p>For Kinesis, DynamoDB, and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change <code>MaximumBatchingWindowInSeconds</code> in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.</p> <p>Related setting: For Kinesis, DynamoDB, and Amazon SQS event sources, when you set <code>BatchSize</code> to a value greater than 10, you must set <code>MaximumBatchingWindowInSeconds</code> to at least 1.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Kafka only) A configuration object that specifies the destination of an event after Lambda processes it.</p>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry.</p>
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * <p>(Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.</p>
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * <p>(Kinesis, DynamoDB Streams, and Amazon SQS) A list of current response type enums applied to the event source mapping.</p>
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * <p>(Amazon SQS only) The scaling configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency">Configuring maximum concurrency for Amazon SQS event sources</a>.</p>
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * <p>Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.</p>
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>Specific configuration settings for a self-managed Apache Kafka event source.</p>
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * <p>Specific configuration settings for a DocumentDB event source.</p>
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * <p> The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics">filter criteria</a>. By default, Lambda does not encrypt your filter criteria object. Specify this property to encrypt data using your own customer managed key. </p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>The metrics configuration for your event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics">Event source mapping metrics</a>.</p>
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * <p>(Amazon MSK and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode">provisioned mode</a>.</p>
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * <p>The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.</p>
 * @public
 */
export interface FunctionCode {
  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you.</p>
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * <p>URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p>
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>.</p>
   * @public
   */
  SourceKMSKeyArn?: string | undefined;
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-dlq">dead-letter queue</a> for failed asynchronous invocations.</p>
 * @public
 */
export interface DeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * <p>A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>Environment variable key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.</p>
   * @public
   */
  Variables?: Record<string, string> | undefined;
}

/**
 * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage">Configuring ephemeral storage (console)</a>.</p>
 * @public
 */
export interface EphemeralStorage {
  /**
   * <p>The size of the function's <code>/tmp</code> directory.</p>
   * @public
   */
  Size: number | undefined;
}

/**
 * <p>Details about the connection between a Lambda function and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
 * @public
 */
export interface FileSystemConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
   * @public
   */
  LocalMountPath: string | undefined;
}

/**
 * <p>Configuration values that override the container image Dockerfile settings. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image settings</a>.</p>
 * @public
 */
export interface ImageConfig {
  /**
   * <p>Specifies the entry point to their application, which is typically the location of the runtime executable.</p>
   * @public
   */
  EntryPoint?: string[] | undefined;

  /**
   * <p>Specifies parameters that you want to pass in with ENTRYPOINT.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>Specifies the working directory.</p>
   * @public
   */
  WorkingDirectory?: string | undefined;
}

/**
 * <p>The function's Amazon CloudWatch Logs configuration settings.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.</p>
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * <p>Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where <code>TRACE</code> is the highest level and <code>FATAL</code> is the lowest.</p>
   * @public
   */
  ApplicationLogLevel?: ApplicationLogLevel | undefined;

  /**
   * <p>Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where <code>DEBUG</code> is the highest level and <code>WARN</code> is the lowest.</p>
   * @public
   */
  SystemLogLevel?: SystemLogLevel | undefined;

  /**
   * <p>The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named <code>/aws/lambda/&lt;function name&gt;</code>. To use a different log group, enter an existing log group or enter a new log group name.</p>
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Lambda SnapStart</a> setting. Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.</p>
 * @public
 */
export interface SnapStart {
  /**
   * <p>Set to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version.</p>
   * @public
   */
  ApplyOn?: SnapStartApplyOn | undefined;
}

/**
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration. To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.</p>
 * @public
 */
export interface TracingConfig {
  /**
   * <p>The tracing mode.</p>
   * @public
   */
  Mode?: TracingMode | undefined;
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A list of VPC security group IDs.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.</p>
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"> runtime</a>. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.</p> <p>The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.</p>
   * @public
   */
  Handler?: string | undefined;

  /**
   * <p>The code for the function.</p>
   * @public
   */
  Code: FunctionCode | undefined;

  /**
   * <p>A description of the function.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * <p>Set to true to publish the first version of the function during creation.</p>
   * @public
   */
  Publish?: boolean | undefined;

  /**
   * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set to <code>Zip</code> for .zip file archive.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   * @public
   */
  Environment?: Environment | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:</p> <ul> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>.</p> </li> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> snapshots.</p> </li> <li> <p>When used with <code>SourceKMSKeyArn</code>, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption"> Specifying a customer managed key for Lambda</a>.</p> </li> <li> <p>The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle">Function lifecycle</a>.</p> </li> </ul> <p>If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
   * @public
   */
  TracingConfig?: TracingConfig | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the function.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   * @public
   */
  Layers?: string[] | undefined;

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * <p>Container image <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">configuration values</a> that override the values in the container image Dockerfile.</p>
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * <p>To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.</p>
   * @public
   */
  CodeSigningConfigArn?: string | undefined;

  /**
   * <p>The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.</p>
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage">Configuring ephemeral storage (console)</a>.</p>
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
   * @public
   */
  SnapStart?: SnapStart | undefined;

  /**
   * <p>The function's Amazon CloudWatch Logs configuration settings.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;
}

/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 * @public
 */
export interface EnvironmentError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error.</p>
 * @public
 */
export interface EnvironmentResponse {
  /**
   * <p>Environment variable key-value pairs. Omitted from CloudTrail logs.</p>
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * <p>Error messages for environment variables that couldn't be applied.</p>
   * @public
   */
  Error?: EnvironmentError | undefined;
}

/**
 * <p>Error response to <code>GetFunctionConfiguration</code>.</p>
 * @public
 */
export interface ImageConfigError {
  /**
   * <p>Error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Response to a <code>GetFunctionConfiguration</code> request.</p>
 * @public
 */
export interface ImageConfigResponse {
  /**
   * <p>Configuration values that override the container image Dockerfile.</p>
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * <p>Error response to <code>GetFunctionConfiguration</code>.</p>
   * @public
   */
  Error?: ImageConfigError | undefined;
}

/**
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.</p>
 * @public
 */
export interface Layer {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The size of the layer archive in bytes.</p>
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a signing job.</p>
   * @public
   */
  SigningJobArn?: string | undefined;
}

/**
 * <p>Any error returned when the runtime version information for the function could not be retrieved.</p>
 * @public
 */
export interface RuntimeVersionError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The ARN of the runtime and any errors that occured.</p>
 * @public
 */
export interface RuntimeVersionConfig {
  /**
   * <p>The ARN of the runtime version you want the function to use.</p>
   * @public
   */
  RuntimeVersionArn?: string | undefined;

  /**
   * <p>Error response when Lambda is unable to retrieve the runtime version for a function.</p>
   * @public
   */
  Error?: RuntimeVersionError | undefined;
}

/**
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
 * @public
 */
export interface SnapStartResponse {
  /**
   * <p>When set to <code>PublishedVersions</code>, Lambda creates a snapshot of the execution environment when you publish a function version.</p>
   * @public
   */
  ApplyOn?: SnapStartApplyOn | undefined;

  /**
   * <p>When you provide a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using">qualified Amazon Resource Name (ARN)</a>, this response element indicates whether SnapStart is activated for the specified function version.</p>
   * @public
   */
  OptimizationStatus?: SnapStartOptimizationStatus | undefined;
}

/**
 * <p>The function's X-Ray tracing configuration.</p>
 * @public
 */
export interface TracingConfigResponse {
  /**
   * <p>The tracing mode.</p>
   * @public
   */
  Mode?: TracingMode | undefined;
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 * @public
 */
export interface VpcConfigResponse {
  /**
   * <p>A list of VPC subnet IDs.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>A list of VPC security group IDs.</p>
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.</p>
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * <p>Details about a function's configuration.</p>
 * @public
 */
export interface FunctionConfiguration {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"> runtime</a>. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.</p> <p>The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * <p>The function's execution role.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The function that Lambda calls to begin running your function.</p>
   * @public
   */
  Handler?: string | undefined;

  /**
   * <p>The size of the function's deployment package, in bytes.</p>
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * <p>The function's description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The amount of memory available to the function at runtime.</p>
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModified?: string | undefined;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * <p>The version of the Lambda function.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The function's networking configuration.</p>
   * @public
   */
  VpcConfig?: VpcConfigResponse | undefined;

  /**
   * <p>The function's dead letter queue.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">environment variables</a>. Omitted from CloudTrail logs.</p>
   * @public
   */
  Environment?: EnvironmentResponse | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:</p> <ul> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>.</p> </li> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> snapshots.</p> </li> <li> <p>When used with <code>SourceKMSKeyArn</code>, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption"> Specifying a customer managed key for Lambda</a>.</p> </li> <li> <p>The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle">Function lifecycle</a>.</p> </li> </ul> <p>If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>The function's X-Ray tracing configuration.</p>
   * @public
   */
  TracingConfig?: TracingConfigResponse | undefined;

  /**
   * <p>For Lambda@Edge functions, the ARN of the main function.</p>
   * @public
   */
  MasterArn?: string | undefined;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">layers</a>.</p>
   * @public
   */
  Layers?: Layer[] | undefined;

  /**
   * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by invoking it.</p>
   * @public
   */
  State?: State | undefined;

  /**
   * <p>The reason for the function's current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or modify the function.</p>
   * @public
   */
  StateReasonCode?: StateReasonCode | undefined;

  /**
   * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code> after function creation completes.</p>
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * <p>The reason for the last update that was performed on the function.</p>
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * <p>The reason code for the last update that was performed on the function.</p>
   * @public
   */
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | undefined;

  /**
   * <p>Connection settings for an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * <p>The function's image configuration values.</p>
   * @public
   */
  ImageConfigResponse?: ImageConfigResponse | undefined;

  /**
   * <p>The ARN of the signing profile version.</p>
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * <p>The ARN of the signing job.</p>
   * @public
   */
  SigningJobArn?: string | undefined;

  /**
   * <p>The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is <code>x86_64</code>.</p>
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage">Configuring ephemeral storage (console)</a>.</p>
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>Set <code>ApplyOn</code> to <code>PublishedVersions</code> to create a snapshot of the initialized execution environment when you publish a function version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">Improving startup performance with Lambda SnapStart</a>.</p>
   * @public
   */
  SnapStart?: SnapStartResponse | undefined;

  /**
   * <p>The ARN of the runtime and any errors that occured.</p>
   * @public
   */
  RuntimeVersionConfig?: RuntimeVersionConfig | undefined;

  /**
   * <p>The function's Amazon CloudWatch Logs configuration settings.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;
}

/**
 * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.</p>
 * @public
 */
export interface Cors {
  /**
   * <p>Whether to allow cookies or other credentials in requests to your function URL. The default is <code>false</code>.</p>
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * <p>The HTTP headers that origins can include in requests to your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.</p>
   * @public
   */
  AllowHeaders?: string[] | undefined;

  /**
   * <p>The HTTP methods that are allowed when calling your function URL. For example: <code>GET</code>, <code>POST</code>, <code>DELETE</code>, or the wildcard character (<code>*</code>).</p>
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * <p>The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: <code>https://www.example.com</code>, <code>http://localhost:60905</code>.</p> <p>Alternatively, you can grant access to all origins using the wildcard character (<code>*</code>).</p>
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * <p>The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: <code>Date</code>, <code>Keep-Alive</code>, <code>X-Custom-Header</code>.</p>
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * <p>The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to <code>0</code>, which means that the browser doesn't cache results.</p>
   * @public
   */
  MaxAge?: number | undefined;
}

/**
 * @public
 */
export interface CreateFunctionUrlConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface CreateFunctionUrlConfigResponse {
  /**
   * <p>The HTTP URL endpoint for your function.</p>
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your function.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * <p>The name or ARN of the Lambda function or version.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version to delete. You can't delete a version that an alias references.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionCodeSigningConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionConcurrencyRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionEventInvokeConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionUrlConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * <p>Details about a function's deployment package.</p>
 * @public
 */
export interface FunctionCodeLocation {
  /**
   * <p>The service that's hosting the file.</p>
   * @public
   */
  RepositoryType?: string | undefined;

  /**
   * <p>A presigned URL that you can use to download the deployment package.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>URI of a container image in the Amazon ECR registry.</p>
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * <p>The resolved URI for the image.</p>
   * @public
   */
  ResolvedImageUri?: string | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a>.</p>
   * @public
   */
  SourceKMSKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface Concurrency {
  /**
   * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html">Managing Lambda reserved concurrency</a>.</p>
   * @public
   */
  ReservedConcurrentExecutions?: number | undefined;
}

/**
 * <p>An object that contains details about an error related to retrieving tags.</p>
 * @public
 */
export interface TagsError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionResponse {
  /**
   * <p>The configuration of the function or version.</p>
   * @public
   */
  Configuration?: FunctionConfiguration | undefined;

  /**
   * <p>The deployment package of the function or version.</p>
   * @public
   */
  Code?: FunctionCodeLocation | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>. Lambda returns tag data only if you have explicit allow permissions for <a href="https://docs.aws.amazon.com/lambda/latest/api/API_ListTags.html">lambda:ListTags</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>An object that contains details about an error related to retrieving tags.</p>
   * @public
   */
  TagsError?: TagsError | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved concurrency</a>.</p>
   * @public
   */
  Concurrency?: Concurrency | undefined;
}

/**
 * @public
 */
export interface GetFunctionCodeSigningConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionCodeSigningConfigResponse {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionConcurrencyRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionConcurrencyResponse {
  /**
   * <p>The number of simultaneous executions that are reserved for the function.</p>
   * @public
   */
  ReservedConcurrentExecutions?: number | undefined;
}

/**
 * @public
 */
export interface GetFunctionConfigurationRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface FunctionEventInvokeConfig {
  /**
   * <p>The date and time that the configuration was last updated.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Bucket</b> - The ARN of an Amazon S3 bucket.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul> <note> <p>S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.</p> </note>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface GetFunctionEventInvokeConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRecursionConfigRequest {
  /**
   * <p/>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRecursionConfigResponse {
  /**
   * <p>If your function's recursive loop detection configuration is <code>Allow</code>, Lambda doesn't take any action when it detects your function being invoked as part of a recursive loop.</p> <p>If your function's recursive loop detection configuration is <code>Terminate</code>, Lambda stops your function being invoked and notifies you when it detects your function being invoked as part of a recursive loop.</p> <p>By default, Lambda sets your function's configuration to <code>Terminate</code>. You can update this configuration using the <a>PutFunctionRecursionConfig</a> action.</p>
   * @public
   */
  RecursiveLoop?: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface GetFunctionUrlConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionUrlConfigResponse {
  /**
   * <p>The HTTP URL endpoint for your function.</p>
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your function.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get the policy for that resource.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeManagementConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeManagementConfigResponse {
  /**
   * <p>The current runtime update mode of the function.</p>
   * @public
   */
  UpdateRuntimeOn?: UpdateRuntimeOn | undefined;

  /**
   * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>Manual</b>, the ARN is returned, otherwise <code>null</code> is returned.</p>
   * @public
   */
  RuntimeVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your function.</p>
   * @public
   */
  FunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface InvocationRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Choose from the following options.</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.</p> </li> <li> <p> <code>Event</code> – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the user or role has permission to invoke the function.</p> </li> </ul>
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * <p>Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.</p>
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * <p>Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object. Lambda passes the <code>ClientContext</code> object to your function for synchronous invocations only.</p>
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input. The maximum payload size is 6 MB for synchronous invocations and 1 MB for asynchronous invocations.</p> <p>You can enter the JSON directly. For example, <code>--payload '\{ "key": "value" \}'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;

  /**
   * <p>Specify a version or alias to invoke a published version of the function.</p>
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface InvocationResponse {
  /**
   * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For the <code>DryRun</code> invocation type, the status code is 204.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>If present, indicates that an error occurred during function execution. Details about the error are included in the response payload.</p>
   * @public
   */
  FunctionError?: string | undefined;

  /**
   * <p>The last 4 KB of the execution log, which is base64-encoded.</p>
   * @public
   */
  LogResult?: string | undefined;

  /**
   * <p>The response from the function, or an error object.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;

  /**
   * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.</p>
   * @public
   */
  ExecutedVersion?: string | undefined;
}

/**
 * @public
 */
export interface InvokeAsyncRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p>
   * @public
   */
  InvokeArgs: StreamingBlobTypes | undefined;
}

/**
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation.</p>
 *
 * @deprecated deprecated
 * @public
 */
export interface InvokeAsyncResponse {
  /**
   * <p>The status code.</p>
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface InvokeWithResponseStreamRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>RequestResponse</code> (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data.</p> </li> <li> <p> <code>DryRun</code> – Validate parameter values and verify that the IAM user or role has permission to invoke the function.</p> </li> </ul>
   * @public
   */
  InvocationType?: ResponseStreamingInvocationType | undefined;

  /**
   * <p>Set to <code>Tail</code> to include the execution log in the response. Applies to synchronously invoked functions only.</p>
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * <p>Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.</p>
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p> <p>You can enter the JSON directly. For example, <code>--payload '\{ "key": "value" \}'</code>. You can also specify a file path. For example, <code>--payload file://payload.json</code>.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * <p>A response confirming that the event stream is complete.</p>
 * @public
 */
export interface InvokeWithResponseStreamCompleteEvent {
  /**
   * <p>An error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The details of any returned error.</p>
   * @public
   */
  ErrorDetails?: string | undefined;

  /**
   * <p>The last 4 KB of the execution log, which is base64-encoded.</p>
   * @public
   */
  LogResult?: string | undefined;
}

/**
 * <p>A chunk of the streamed response payload.</p>
 * @public
 */
export interface InvokeResponseStreamUpdate {
  /**
   * <p>Data returned by your Lambda function.</p>
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * <p>An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a <code>InvokeComplete</code> object.</p>
 * @public
 */
export type InvokeWithResponseStreamResponseEvent =
  | InvokeWithResponseStreamResponseEvent.InvokeCompleteMember
  | InvokeWithResponseStreamResponseEvent.PayloadChunkMember
  | InvokeWithResponseStreamResponseEvent.$UnknownMember;

/**
 * @public
 */
export namespace InvokeWithResponseStreamResponseEvent {
  /**
   * <p>A chunk of the streamed response payload.</p>
   * @public
   */
  export interface PayloadChunkMember {
    PayloadChunk: InvokeResponseStreamUpdate;
    InvokeComplete?: never;
    $unknown?: never;
  }

  /**
   * <p>An object that's returned when the stream has ended and all the payload chunks have been returned.</p>
   * @public
   */
  export interface InvokeCompleteMember {
    PayloadChunk?: never;
    InvokeComplete: InvokeWithResponseStreamCompleteEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PayloadChunk?: never;
    InvokeComplete?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    PayloadChunk: (value: InvokeResponseStreamUpdate) => T;
    InvokeComplete: (value: InvokeWithResponseStreamCompleteEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeWithResponseStreamResponse {
  /**
   * <p>For a successful request, the HTTP status code is in the 200 range. For the <code>RequestResponse</code> invocation type, this status code is 200. For the <code>DryRun</code> invocation type, this status code is 204.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.</p>
   * @public
   */
  ExecutedVersion?: string | undefined;

  /**
   * <p>The stream of response payloads.</p>
   * @public
   */
  EventStream?: AsyncIterable<InvokeWithResponseStreamResponseEvent> | undefined;

  /**
   * <p>The type of data the stream is returning.</p>
   * @public
   */
  ResponseStreamContentType?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of configurations to return.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsResponse {
  /**
   * <p>A list of configurations.</p>
   * @public
   */
  FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * <p>For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.</p>
   * @public
   */
  MasterRegion?: string | undefined;

  /**
   * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
   * @public
   */
  FunctionVersion?: FunctionVersion | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response, even if you set the number higher.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>A list of Lambda functions.</p>
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of Lambda functions.</p>
   * @public
   */
  Functions?: FunctionConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionUrlConfigsRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of function URLs to return in the response. Note that <code>ListFunctionUrlConfigs</code> returns a maximum of 50 items in each response, even if you set the number higher.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Details about a Lambda function URL.</p>
 * @public
 */
export interface FunctionUrlConfig {
  /**
   * <p>The HTTP URL endpoint for your function.</p>
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your function.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Security and auth model for Lambda function URLs</a>.</p>
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface ListFunctionUrlConfigsResponse {
  /**
   * <p>A list of function URL configurations.</p>
   * @public
   */
  FunctionUrlConfigs: FunctionUrlConfig[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Specify a number to limit the number of configurations returned.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>Details about the provisioned concurrency configuration for a function alias or version.</p>
 * @public
 */
export interface ProvisionedConcurrencyConfigListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>The amount of provisioned concurrency requested.</p>
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The status of the allocation process.</p>
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsResponse {
  /**
   * <p>A list of provisioned concurrency configurations.</p>
   * @public
   */
  ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionCodeSigningConfigResponse {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionConcurrencyRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The number of simultaneous executions to reserve for the function.</p>
   * @public
   */
  ReservedConcurrentExecutions: number | undefined;
}

/**
 * @public
 */
export interface PutFunctionEventInvokeConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Bucket</b> - The ARN of an Amazon S3 bucket.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul> <note> <p>S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.</p> </note>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface PutFunctionRecursionConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>If you set your function's recursive loop detection configuration to <code>Allow</code>, Lambda doesn't take any action when it detects your function being invoked as part of a recursive loop. We recommend that you only use this setting if your design intentionally uses a Lambda function to write data back to the same Amazon Web Services resource that invokes it.</p> <p>If you set your function's recursive loop detection configuration to <code>Terminate</code>, Lambda stops your function being invoked and notifies you when it detects your function being invoked as part of a recursive loop.</p> <p>By default, Lambda sets your function's configuration to <code>Terminate</code>.</p> <important> <p>If your design intentionally uses a Lambda function to write data back to the same Amazon Web Services resource that invokes the function, then use caution and implement suitable guard rails to prevent unexpected charges being billed to your Amazon Web Services account. To learn more about best practices for using recursive invocation patterns, see <a href="https://serverlessland.com/content/service/lambda/guides/aws-lambda-operator-guide/recursive-runaway">Recursive patterns that cause run-away Lambda functions</a> in Serverless Land.</p> </important>
   * @public
   */
  RecursiveLoop: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface PutFunctionRecursionConfigResponse {
  /**
   * <p>The status of your function's recursive loop detection configuration.</p> <p>When this value is set to <code>Allow</code>and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.</p> <p>When this value is set to <code>Terminate</code> and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you. </p>
   * @public
   */
  RecursiveLoop?: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface PutRuntimeManagementConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version of the function. This can be <code>$LATEST</code> or a published version number. If no value is specified, the configuration for the <code>$LATEST</code> version is returned.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>
   * @public
   */
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;

  /**
   * <p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>
   * @public
   */
  RuntimeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface PutRuntimeManagementConfigResponse {
  /**
   * <p>The runtime update mode.</p>
   * @public
   */
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;

  /**
   * <p>The ARN of the function</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>The ARN of the runtime the function is configured to use. If the runtime update mode is <b>manual</b>, the ARN is returned, otherwise <code>null</code> is returned.</p>
   * @public
   */
  RuntimeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionCodeRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.</p>
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * <p>URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.</p>
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as calling <a>PublishVersion</a> separately.</p>
   * @public
   */
  Publish?: boolean | undefined;

  /**
   * <p>Set to true to validate the request parameters and access permissions without modifying the function code.</p>
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * <p>Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is <code>x86_64</code>.</p>
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an Amazon Web Services managed key.</p>
   * @public
   */
  SourceKMSKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionConfigurationRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html">Lambda programming model</a>.</p>
   * @public
   */
  Handler?: string | undefined;

  /**
   * <p>A description of the function.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>The amount of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console">memory available to the function</a> at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">Configuring a Lambda function to access resources in a VPC</a>.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   * @public
   */
  Environment?: Environment | undefined;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html"> runtime</a>. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.</p> <p>The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * <p>A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq">Dead-letter queues</a>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:</p> <ul> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption">environment variables</a>.</p> </li> <li> <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html">Lambda SnapStart</a> snapshots.</p> </li> <li> <p>When used with <code>SourceKMSKeyArn</code>, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption"> Specifying a customer managed key for Lambda</a>.</p> </li> <li> <p>The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle">Function lifecycle</a>.</p> </li> </ul> <p>If you don't provide a customer managed key, Lambda uses an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned key</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed key</a>.</p>
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
   * @public
   */
  TracingConfig?: TracingConfig | undefined;

  /**
   * <p>Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   * @public
   */
  Layers?: string[] | undefined;

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * <p> <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container image configuration values</a> that override the values in the container image Docker file.</p>
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * <p>The size of the function's <code>/tmp</code> directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage">Configuring ephemeral storage (console)</a>.</p>
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.</p>
   * @public
   */
  SnapStart?: SnapStart | undefined;

  /**
   * <p>The function's Amazon CloudWatch Logs configuration settings.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionEventInvokeConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p> <p class="title"> <b>Destinations</b> </p> <ul> <li> <p> <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p> </li> <li> <p> <b>Queue</b> - The ARN of a standard SQS queue.</p> </li> <li> <p> <b>Bucket</b> - The ARN of an Amazon S3 bucket.</p> </li> <li> <p> <b>Topic</b> - The ARN of a standard SNS topic.</p> </li> <li> <p> <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p> </li> </ul> <note> <p>S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.</p> </note>
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionUrlConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The alias name.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  AuthType?: FunctionUrlAuthType | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionUrlConfigResponse {
  /**
   * <p>The HTTP URL endpoint for your function.</p>
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of your function.</p>
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * <p>The type of authentication that your function URL uses. Set to <code>AWS_IAM</code> if you want to restrict access to authenticated users only. Set to <code>NONE</code> if you want to bypass IAM authentication to create a public endpoint. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html">Control access to Lambda function URLs</a>.</p>
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">cross-origin resource sharing (CORS)</a> settings for your function URL.</p>
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * <p>When the function URL was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreationTime: string | undefined;

  /**
   * <p>When the function URL configuration was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * <p>Use one of the following options:</p> <ul> <li> <p> <code>BUFFERED</code> – This is the default option. Lambda invokes your function using the <code>Invoke</code> API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.</p> </li> <li> <p> <code>RESPONSE_STREAM</code> – Your function streams payload results as they become available. Lambda invokes your function using the <code>InvokeWithResponseStream</code> API operation. The maximum response payload size is 200 MB.</p> </li> </ul>
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface CreateAliasRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   * @public
   */
  FunctionVersion: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing configuration</a> of the alias.</p>
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAliasRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAliasRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a function version to only list aliases that invoke that version.</p>
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Limit the number of aliases returned.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of aliases.</p>
   * @public
   */
  Aliases?: AliasConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateAliasRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing configuration</a> of the alias.</p>
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;

  /**
   * <p>Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsByFunctionRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response, even if you set the number higher.</p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListVersionsByFunctionResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of Lambda function versions.</p>
   * @public
   */
  Versions?: FunctionConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PublishVersionRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>MyFunction</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of <a>UpdateFunctionCode</a>.</p>
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * <p>A description for the version to override the description in the function configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * <p>Limits that are related to concurrency and code storage.</p>
   * @public
   */
  AccountLimit?: AccountLimit | undefined;

  /**
   * <p>The number of functions and amount of storage in use.</p>
   * @public
   */
  AccountUsage?: AccountUsage | undefined;
}

/**
 * @public
 */
export interface ListLayersRequest {
  /**
   * <p>A runtime identifier.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  CompatibleRuntime?: Runtime | undefined;

  /**
   * <p>A pagination token returned by a previous call.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of layers to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
   * @public
   */
  CompatibleArchitecture?: Architecture | undefined;
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.</p>
 * @public
 */
export interface LayerVersionsListItem {
  /**
   * <p>The ARN of the layer version.</p>
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * <p>The layer's open-source license.</p>
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;
}

/**
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.</p>
 * @public
 */
export interface LayersListItem {
  /**
   * <p>The name of the layer.</p>
   * @public
   */
  LayerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * <p>The newest version of the layer.</p>
   * @public
   */
  LatestMatchingVersion?: LayerVersionsListItem | undefined;
}

/**
 * @public
 */
export interface ListLayersResponse {
  /**
   * <p>A pagination token returned when the response doesn't contain all layers.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of function layers.</p>
   * @public
   */
  Layers?: LayersListItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.</p>
 * @public
 */
export interface LayerVersionContentOutput {
  /**
   * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The SHA-256 hash of the layer archive.</p>
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * <p>The size of the layer archive in bytes.</p>
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a signing job.</p>
   * @public
   */
  SigningJobArn?: string | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionResponse {
  /**
   * <p>Details about the layer version.</p>
   * @public
   */
  Content?: LayerVersionContentOutput | undefined;

  /**
   * <p>The ARN of the layer.</p>
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * <p>The ARN of the layer version.</p>
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * <p>The layer's software license.</p>
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionByArnRequest {
  /**
   * <p>The ARN of the layer version.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionPolicyRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionPolicyResponse {
  /**
   * <p>The policy document.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListLayerVersionsRequest {
  /**
   * <p>A runtime identifier.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  CompatibleRuntime?: Runtime | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>A pagination token returned by a previous call.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of versions to return.</p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>The compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
   * @public
   */
  CompatibleArchitecture?: Architecture | undefined;
}

/**
 * @public
 */
export interface ListLayerVersionsResponse {
  /**
   * <p>A pagination token returned when the response doesn't contain all versions.</p>
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * <p>A list of versions.</p>
   * @public
   */
  LayerVersions?: LayerVersionsListItem[] | undefined;
}

/**
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.</p>
 * @public
 */
export interface LayerVersionContentInput {
  /**
   * <p>The Amazon S3 bucket of the layer archive.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon S3 key of the layer archive.</p>
   * @public
   */
  S3Key?: string | undefined;

  /**
   * <p>For versioned objects, the version of the layer archive object to use.</p>
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * <p>The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.</p>
   * @public
   */
  ZipFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PublishLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The function layer archive.</p>
   * @public
   */
  Content: LayerVersionContentInput | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy">Runtime deprecation policy</a>.</p>
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * <p>The layer's software license. It can be any of the following:</p> <ul> <li> <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example, <code>MIT</code>.</p> </li> <li> <p>The URL of a license hosted on the internet. For example, <code>https://opensource.org/licenses/MIT</code>.</p> </li> <li> <p>The full text of the license.</p> </li> </ul>
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;
}

/**
 * @public
 */
export interface PublishLayerVersionResponse {
  /**
   * <p>Details about the layer version.</p>
   * @public
   */
  Content?: LayerVersionContentOutput | undefined;

  /**
   * <p>The ARN of the layer.</p>
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * <p>The ARN of the layer version.</p>
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * <p>The description of the version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The layer's compatible runtimes.</p> <p>The following list includes deprecated runtimes. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels">Runtime use after deprecation</a>.</p> <p>For a list of all currently supported runtimes, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported">Supported runtimes</a>.</p>
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * <p>The layer's software license.</p>
   * @public
   */
  LicenseInfo?: string | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architectures</a>.</p>
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;
}

/**
 * @public
 */
export interface RemoveLayerVersionPermissionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   * @public
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * <p>The identifier that was specified when the statement was added.</p>
   * @public
   */
  StatementId: string | undefined;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN). Note: Lambda does not support adding tags to function aliases or versions.</p>
   * @public
   */
  Resource: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>The function's tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * <p>The name or ARN of the Lambda function, version, or alias.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>Statement ID of the permission to remove.</p>
   * @public
   */
  StatementId: string | undefined;

  /**
   * <p>Specify a version or alias to remove permissions from a published version of the function.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   * @public
   */
  Qualifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   * @public
   */
  Qualifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * <p>The amount of provisioned concurrency requested.</p>
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The status of the allocation process.</p>
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name or ARN of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> – <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> – <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> – <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   * @public
   */
  Qualifier: string | undefined;

  /**
   * <p>The amount of provisioned concurrency to allocate for the version or alias.</p>
   * @public
   */
  ProvisionedConcurrentExecutions: number | undefined;
}

/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * <p>The amount of provisioned concurrency requested.</p>
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.</p>
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * <p>The status of the allocation process.</p>
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A list of tags to apply to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource's Amazon Resource Name (ARN).</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}
