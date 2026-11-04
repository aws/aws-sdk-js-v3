// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type {
  ApplicationLogLevel,
  Architecture,
  CapacityProviderPredefinedMetricType,
  CapacityProviderScalingMode,
  CapacityProviderState,
  CodeSigningPolicy,
  DirectS3Read,
  EndPointType,
  EventSourceMappingMetric,
  EventSourceMappingSystemLogLevel,
  EventSourcePosition,
  EventType,
  ExecutionStatus,
  FullDocument,
  FunctionResponseType,
  FunctionUrlAuthType,
  FunctionVersion,
  FunctionVersionLatestPublished,
  InvocationType,
  InvokeMode,
  KafkaEventSourceMappingConsumptionMode,
  KafkaSchemaRegistryAuthType,
  KafkaSchemaValidationAttribute,
  LastUpdateStatus,
  LastUpdateStatusReasonCode,
  LogFormat,
  LogType,
  OperationAction,
  OperationStatus,
  OperationType,
  PackageType,
  PropagateTagsMode,
  ProvisionedConcurrencyStatusEnum,
  RecursiveLoop,
  ResponseStreamingInvocationType,
  Runtime,
  S3ObjectStorageMode,
  SchemaRegistryEventRecordFormat,
  SnapStartApplyOn,
  SnapStartOptimizationStatus,
  SourceAccessType,
  State,
  StateReasonCode,
  SystemLogLevel,
  TenantIsolationMode,
  TracingMode,
  UpdateRuntimeOn,
} from "./enums";

/**
 * Limits that are related to concurrency and storage. All file and storage sizes are in bytes.
 *
 * @public
 */
export interface AccountLimit {
  /**
   * The amount of storage space that you can use for all deployment packages and layer archives.
   *
   * @public
   */
  TotalCodeSize?: number | undefined;

  /**
   * The maximum size of a function's deployment package and layers when they're extracted.
   *
   * @public
   */
  CodeSizeUnzipped?: number | undefined;

  /**
   * The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger files.
   *
   * @public
   */
  CodeSizeZipped?: number | undefined;

  /**
   * The maximum number of simultaneous function executions.
   *
   * @public
   */
  ConcurrentExecutions?: number | undefined;

  /**
   * The maximum number of simultaneous function executions, minus the capacity that's reserved for individual functions with PutFunctionConcurrency.
   *
   * @public
   */
  UnreservedConcurrentExecutions?: number | undefined;
}

/**
 * The number of functions and amount of storage in use.
 *
 * @public
 */
export interface AccountUsage {
  /**
   * The amount of storage space, in bytes, that's being used by deployment packages and layer archives.
   *
   * @public
   */
  TotalCodeSize?: number | undefined;

  /**
   * The number of Lambda functions.
   *
   * @public
   */
  FunctionCount?: number | undefined;
}

/**
 * @public
 */
export interface AddLayerVersionPermissionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * An identifier that distinguishes the policy from others on the same layer version.
   *
   * @public
   */
  StatementId: string | undefined;

  /**
   * The API action that grants access to the layer. For example, `lambda:GetLayerVersion`.
   *
   * @public
   */
  Action: string | undefined;

  /**
   * An account ID, or `*` to grant layer usage permission to all accounts in an organization, or all Amazon Web Services accounts (if `organizationId` is not specified). For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
   *
   * @public
   */
  Principal: string | undefined;

  /**
   * With the principal set to `*`, grant permission to all accounts in the specified organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface AddLayerVersionPermissionResponse {
  /**
   * The permission statement.
   *
   * @public
   */
  Statement?: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface AddPermissionRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A statement identifier that differentiates the statement from others in the same policy.
   *
   * @public
   */
  StatementId: string | undefined;

  /**
   * The action that the principal can use on the function. For example, `lambda:InvokeFunction` or `lambda:GetFunction`.
   *
   * @public
   */
  Action: string | undefined;

  /**
   * The Amazon Web Services service, Amazon Web Services account, IAM user, or IAM role that invokes the function. If you specify a service, use `SourceArn` or `SourceAccount` to limit who can invoke the function through that service.
   *
   * @public
   */
  Principal: string | undefined;

  /**
   * For Amazon Web Services services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
   *
   * Note that Lambda configures the comparison using the `StringLike` operator.
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  FunctionUrlAuthType?: FunctionUrlAuthType | undefined;

  /**
   * Indicates whether the permission applies when the function is invoked through a function URL.
   *
   * @public
   */
  InvokedViaFunctionUrl?: boolean | undefined;

  /**
   * For Amazon Web Services service, the ID of the Amazon Web Services account that owns the resource. Use this together with `SourceArn` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
   *
   * @public
   */
  SourceAccount?: string | undefined;

  /**
   * For Alexa Smart Home functions, a token that the invoker must supply.
   *
   * @public
   */
  EventSourceToken?: string | undefined;

  /**
   * Specify a version or alias to add permissions to a published version of the function.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The identifier for your organization in Organizations. Use this to grant permissions to all the Amazon Web Services accounts under this organization.
   *
   * @public
   */
  PrincipalOrgID?: string | undefined;
}

/**
 * @public
 */
export interface AddPermissionResponse {
  /**
   * The permission statement that's added to the function policy.
   *
   * @public
   */
  Statement?: string | undefined;
}

/**
 * The [traffic-shifting](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) configuration of a Lambda function alias.
 *
 * @public
 */
export interface AliasRoutingConfiguration {
  /**
   * The second version, and the percentage of traffic that's routed to it.
   *
   * @public
   */
  AdditionalVersionWeights?: Record<string, number> | undefined;
}

/**
 * Provides configuration information about a Lambda function [alias](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html).
 *
 * @public
 */
export interface AliasConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the alias.
   *
   * @public
   */
  AliasArn?: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The function version that the alias invokes.
   *
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html) of the alias.
   *
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;

  /**
   * A unique identifier that changes when you update the alias.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * List of signing profiles that can sign a code package.
 *
 * @public
 */
export interface AllowedPublishers {
  /**
   * The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package.
   *
   * @public
   */
  SigningProfileVersionArns: string[] | undefined;
}

/**
 * Specific access configuration settings that tell Lambda how to authenticate with your schema registry.
 *
 * If you're working with an Glue schema registry, don't provide authentication details in this object. Instead, ensure that your execution role has the required permissions for Lambda to access your cluster.
 *
 * If you're working with a Confluent schema registry, choose the authentication method in the `Type` field, and provide the Secrets Manager secret ARN in the `URI` field.
 *
 * @public
 */
export interface KafkaSchemaRegistryAccessConfig {
  /**
   * The type of authentication Lambda uses to access your schema registry.
   *
   * - `BASIC_AUTH` – The Secrets Manager ARN of your secret key used for basic authentication with your Confluent schema registry.
   * - `CLIENT_CERTIFICATE_TLS_AUTH` – The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication with your Confluent schema registry.
   * - `SERVER_ROOT_CA_CERTIFICATE` – The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption with your Confluent schema registry.
   * - `OAUTHBEARER_AUTH` – The Secrets Manager ARN of your secret key containing the OAuth 2.0 credentials that Lambda uses to acquire an access token for your Confluent schema registry. For the contents of the secret, see [Configuring the OAuth secret](https://docs.aws.amazon.com/lambda/latest/dg/kafka-cluster-auth.html#smaa-auth-oauth-secret).
   *
   * @public
   */
  Type?: KafkaSchemaRegistryAuthType | undefined;

  /**
   * The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.
   *
   * @public
   */
  URI?: string | undefined;
}

/**
 * Specific schema validation configuration settings that tell Lambda the message attributes you want to validate and filter using your schema registry.
 *
 * @public
 */
export interface KafkaSchemaValidationConfig {
  /**
   * The attributes you want your schema registry to validate and filter for. If you selected `JSON` as the `EventRecordFormat`, Lambda also deserializes the selected message attributes.
   *
   * @public
   */
  Attribute?: KafkaSchemaValidationAttribute | undefined;
}

/**
 * Specific configuration settings for a Kafka schema registry.
 *
 * @public
 */
export interface KafkaSchemaRegistryConfig {
  /**
   * The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.
   *
   * - For Glue schema registries, use the ARN of the registry.
   * - For Confluent schema registries, use the URL of the registry.
   *
   * @public
   */
  SchemaRegistryURI?: string | undefined;

  /**
   * The record format that Lambda delivers to your function after schema validation.
   *
   * - Choose `JSON` to have Lambda deliver the record to your function as a standard JSON object.
   * - Choose `SOURCE` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.
   *
   * @public
   */
  EventRecordFormat?: SchemaRegistryEventRecordFormat | undefined;

  /**
   * An array of access configuration objects that tell Lambda how to authenticate with your schema registry.
   *
   * @public
   */
  AccessConfigs?: KafkaSchemaRegistryAccessConfig[] | undefined;

  /**
   * An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.
   *
   * @public
   */
  SchemaValidationConfigs?: KafkaSchemaValidationConfig[] | undefined;
}

/**
 * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 *
 * @public
 */
export interface AmazonManagedKafkaEventSourceConfig {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
   *
   * @public
   */
  ConsumerGroupId?: string | undefined;

  /**
   * Specific configuration settings for a Kafka schema registry.
   *
   * @public
   */
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;
}

/**
 * A scaling policy for the capacity provider that automatically adjusts capacity to maintain a target value for a specific metric.
 *
 * @public
 */
export interface TargetTrackingScalingPolicy {
  /**
   * The predefined metric type to track for scaling decisions.
   *
   * @public
   */
  PredefinedMetricType: CapacityProviderPredefinedMetricType | undefined;

  /**
   * The target value for the metric that the scaling policy attempts to maintain through scaling actions.
   *
   * @public
   */
  TargetValue: number | undefined;
}

/**
 * Configuration that defines how the capacity provider scales compute instances based on demand and policies.
 *
 * @public
 */
export interface CapacityProviderScalingConfig {
  /**
   * The maximum number of vCPUs that the capacity provider can provision across all compute instances.
   *
   * @public
   */
  MaxVCpuCount?: number | undefined;

  /**
   * The scaling mode that determines how the capacity provider responds to changes in demand.
   *
   * @public
   */
  ScalingMode?: CapacityProviderScalingMode | undefined;

  /**
   * A list of scaling policies that define how the capacity provider scales compute instances based on metrics and thresholds.
   *
   * @public
   */
  ScalingPolicies?: TargetTrackingScalingPolicy[] | undefined;
}

/**
 * Specifications that define the characteristics and constraints for compute instances used by the capacity provider.
 *
 * @public
 */
export interface InstanceRequirements {
  /**
   * A list of supported CPU architectures for compute instances. Valid values include `x86_64` and `arm64`.
   *
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * A list of EC2 instance types that the capacity provider is allowed to use. If not specified, all compatible instance types are allowed.
   *
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.
   *
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;
}

/**
 * Configuration that specifies the permissions required for the capacity provider to manage compute resources.
 *
 * @public
 */
export interface CapacityProviderPermissionsConfig {
  /**
   * The ARN of the IAM role that the capacity provider uses to manage compute instances and other Amazon Web Services resources.
   *
   * @public
   */
  CapacityProviderOperatorRoleArn: string | undefined;
}

/**
 * Configuration for tag propagation to managed resources launched by the capacity provider.
 *
 * @public
 */
export interface PropagateTags {
  /**
   * The tag propagation mode. Set to `Explicit` to propagate the tags specified in `ExplicitTags` to managed resources. Set to `None` to disable tag propagation.
   *
   * @public
   */
  Mode?: PropagateTagsMode | undefined;

  /**
   * A list of tags to apply to managed resources when `Mode` is set to `Explicit`. You can specify up to 40 tags.
   *
   * @public
   */
  ExplicitTags?: Record<string, string> | undefined;
}

/**
 * The capacity provider's Amazon CloudWatch Logs configuration settings.
 *
 * @public
 */
export interface CapacityProviderLoggingConfig {
  /**
   * Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.
   *
   * @public
   */
  SystemLogLevel?: SystemLogLevel | undefined;

  /**
   * The name of the Amazon CloudWatch log group the capacity provider sends logs to. By default, Lambda capacity providers send logs to a default log group named `/aws/lambda/capacity-provider/<capacity provider name>`. To use a different log group, enter an existing log group or enter a new log group name.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * Configuration that specifies the telemetry collection for the capacity provider.
 *
 * @public
 */
export interface CapacityProviderTelemetryConfig {
  /**
   * The capacity provider's Amazon CloudWatch Logs configuration settings.
   *
   * @public
   */
  LoggingConfig?: CapacityProviderLoggingConfig | undefined;
}

/**
 * VPC configuration that specifies the network settings for compute instances managed by the capacity provider.
 *
 * @public
 */
export interface CapacityProviderVpcConfig {
  /**
   * A list of subnet IDs where the capacity provider launches compute instances.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of security group IDs that control network access for compute instances managed by the capacity provider.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderRequest {
  /**
   * The name of the capacity provider.
   *
   * @public
   */
  CapacityProviderName: string | undefined;

  /**
   * The VPC configuration for the capacity provider, including subnet IDs and security group IDs where compute instances will be launched.
   *
   * @public
   */
  VpcConfig: CapacityProviderVpcConfig | undefined;

  /**
   * The permissions configuration that specifies the IAM role ARN used by the capacity provider to manage compute resources.
   *
   * @public
   */
  PermissionsConfig: CapacityProviderPermissionsConfig | undefined;

  /**
   * The instance requirements that specify the compute instance characteristics, including architectures and allowed or excluded instance types.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The scaling configuration that defines how the capacity provider scales compute instances, including maximum vCPU count and scaling policies.
   *
   * @public
   */
  CapacityProviderScalingConfig?: CapacityProviderScalingConfig | undefined;

  /**
   * The ARN of the KMS key used to encrypt data associated with the capacity provider.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * A list of tags to associate with the capacity provider.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The tag propagation configuration for the capacity provider. Specifies tags to apply to managed resources at launch.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The telemetry configuration for the capacity provider. Specifies logging settings for managed resources.
   *
   * @public
   */
  TelemetryConfig?: CapacityProviderTelemetryConfig | undefined;
}

/**
 * A capacity provider manages compute resources for Lambda functions.
 *
 * @public
 */
export interface CapacityProvider {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  CapacityProviderArn: string | undefined;

  /**
   * The current state of the capacity provider.
   *
   * @public
   */
  State: CapacityProviderState | undefined;

  /**
   * The VPC configuration for the capacity provider.
   *
   * @public
   */
  VpcConfig: CapacityProviderVpcConfig | undefined;

  /**
   * The permissions configuration for the capacity provider.
   *
   * @public
   */
  PermissionsConfig: CapacityProviderPermissionsConfig | undefined;

  /**
   * The instance requirements for compute resources managed by the capacity provider.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The scaling configuration for the capacity provider.
   *
   * @public
   */
  CapacityProviderScalingConfig?: CapacityProviderScalingConfig | undefined;

  /**
   * The ARN of the KMS key used to encrypt the capacity provider's resources.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The date and time when the capacity provider was last modified.
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * Configuration for tag propagation to managed resources launched by the capacity provider.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The telemetry configuration for the capacity provider, including logging settings.
   *
   * @public
   */
  TelemetryConfig?: CapacityProviderTelemetryConfig | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderResponse {
  /**
   * Information about the capacity provider that was created.
   *
   * @public
   */
  CapacityProvider: CapacityProvider | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderRequest {
  /**
   * The name of the capacity provider to delete.
   *
   * @public
   */
  CapacityProviderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderResponse {
  /**
   * Information about the deleted capacity provider.
   *
   * @public
   */
  CapacityProvider: CapacityProvider | undefined;
}

/**
 * @public
 */
export interface GetCapacityProviderRequest {
  /**
   * The name of the capacity provider to retrieve.
   *
   * @public
   */
  CapacityProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityProviderResponse {
  /**
   * Information about the capacity provider, including its configuration and current state.
   *
   * @public
   */
  CapacityProvider: CapacityProvider | undefined;
}

/**
 * @public
 */
export interface ListCapacityProvidersRequest {
  /**
   * Filter capacity providers by their current state.
   *
   * @public
   */
  State?: CapacityProviderState | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of capacity providers to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCapacityProvidersResponse {
  /**
   * A list of capacity providers in your account.
   *
   * @public
   */
  CapacityProviders: CapacityProvider[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionVersionsByCapacityProviderRequest {
  /**
   * The name of the capacity provider to list function versions for.
   *
   * @public
   */
  CapacityProviderName: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of function versions to return in the response.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Information about a function version that uses a specific capacity provider, including its ARN and current state.
 *
 * @public
 */
export interface FunctionVersionsByCapacityProviderListItem {
  /**
   * The Amazon Resource Name (ARN) of the function version.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The current state of the function version.
   *
   * @public
   */
  State: State | undefined;
}

/**
 * @public
 */
export interface ListFunctionVersionsByCapacityProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  CapacityProviderArn: string | undefined;

  /**
   * A list of function versions that use the specified capacity provider.
   *
   * @public
   */
  FunctionVersions: FunctionVersionsByCapacityProviderListItem[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderRequest {
  /**
   * The name of the capacity provider to update.
   *
   * @public
   */
  CapacityProviderName: string | undefined;

  /**
   * The updated scaling configuration for the capacity provider.
   *
   * @public
   */
  CapacityProviderScalingConfig?: CapacityProviderScalingConfig | undefined;

  /**
   * Configuration for tag propagation to managed resources launched by the capacity provider.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The updated telemetry configuration for the capacity provider.
   *
   * @public
   */
  TelemetryConfig?: CapacityProviderTelemetryConfig | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderResponse {
  /**
   * Information about the updated capacity provider.
   *
   * @public
   */
  CapacityProvider: CapacityProvider | undefined;
}

/**
 * Code signing configuration [policies](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies) specify the validation failure action for signature mismatch or expiry.
 *
 * @public
 */
export interface CodeSigningPolicies {
  /**
   * Code signing configuration policy for deployment validation failure. If you set the policy to `Enforce`, Lambda blocks the deployment request if signature validation checks fail. If you set the policy to `Warn`, Lambda allows the deployment and issues a new Amazon CloudWatch metric (`SignatureValidationErrors`) and also stores the warning in the CloudTrail log.
   *
   * Default value: `Warn`
   *
   * @public
   */
  UntrustedArtifactOnDeployment?: CodeSigningPolicy | undefined;
}

/**
 * @public
 */
export interface CreateCodeSigningConfigRequest {
  /**
   * Descriptive name for this code signing configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Signing profiles for this code signing configuration.
   *
   * @public
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * The code signing policies define the actions to take if the validation checks fail.
   *
   * @public
   */
  CodeSigningPolicies?: CodeSigningPolicies | undefined;

  /**
   * A list of tags to add to the code signing configuration.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Details about a [Code signing configuration](https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html).
 *
 * @public
 */
export interface CodeSigningConfig {
  /**
   * Unique identifer for the Code signing configuration.
   *
   * @public
   */
  CodeSigningConfigId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * Code signing configuration description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * List of allowed publishers.
   *
   * @public
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * The code signing policy controls the validation failure action for signature mismatch or expiry.
   *
   * @public
   */
  CodeSigningPolicies: CodeSigningPolicies | undefined;

  /**
   * The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModified: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeSigningConfigResponse {
  /**
   * The code signing configuration.
   *
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSigningConfigRequest {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
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
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSigningConfigResponse {
  /**
   * The code signing configuration
   *
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * @public
 */
export interface ListCodeSigningConfigsRequest {
  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Maximum number of items to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSigningConfigsResponse {
  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The code signing configurations
   *
   * @public
   */
  CodeSigningConfigs?: CodeSigningConfig[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigRequest {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Maximum number of items to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionsByCodeSigningConfigResponse {
  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * The function ARNs.
   *
   * @public
   */
  FunctionArns?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSigningConfigRequest {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * Descriptive name for this code signing configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Signing profiles for this code signing configuration.
   *
   * @public
   */
  AllowedPublishers?: AllowedPublishers | undefined;

  /**
   * The code signing policy.
   *
   * @public
   */
  CodeSigningPolicies?: CodeSigningPolicies | undefined;
}

/**
 * @public
 */
export interface UpdateCodeSigningConfigResponse {
  /**
   * The code signing configuration
   *
   * @public
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionRequest {
  /**
   * The name or ARN of the Lambda function or version.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:1` (with version).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version to delete. You can't delete a version that an alias references.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionResponse {
  /**
   * The HTTP status code returned by the operation.
   *
   * @public
   */
  StatusCode?: number | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionEventInvokeConfigRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** - `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** - `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A version number or alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Lambda resource you want to delete the policy from. You can use a qualified or an unqualified ARN. The value must be a complete ARN, and the operation does not accept wildcard characters.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The revision ID that the existing policy must match for the deletion to proceed. If the revision ID doesn't match, the operation fails with a `PreconditionFailedException` error. To retrieve the current revision ID, use the GetResourcePolicy operation.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * Configuration options for callback operations in durable executions, including timeout settings and retry behavior.
 *
 * @public
 */
export interface CallbackOptions {
  /**
   * The timeout for the callback operation in seconds. If not specified or set to 0, the callback has no timeout.
   *
   * @public
   */
  TimeoutSeconds?: number | undefined;

  /**
   * The heartbeat timeout for the callback operation, in seconds. If not specified or set to 0, heartbeat timeout is disabled.
   *
   * @public
   */
  HeartbeatTimeoutSeconds?: number | undefined;
}

/**
 * Configuration options for chained function invocations in durable executions, including retry settings and timeout configuration.
 *
 * @public
 */
export interface ChainedInvokeOptions {
  /**
   * The name or ARN of the Lambda function to invoke.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The tenant identifier for the chained invocation.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The X-Ray trace header to use when starting the chained invocation. This parameter is optional. If you omit this value, the child invocation inherits the parent durable execution's trace header.
   *
   * Specify this value on the `START` update for the chained invocation operation. For more information about the header format, see [Tracing header](https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader) in the *X-Ray Developer Guide*.
   *
   * @public
   */
  XAmznTraceId?: string | undefined;
}

/**
 * Configuration options for a durable execution context.
 *
 * @public
 */
export interface ContextOptions {
  /**
   * Whether the state data of children of the completed context should be included in the invoke payload and `GetDurableExecutionState` response.
   *
   * @public
   */
  ReplayChildren?: boolean | undefined;
}

/**
 * An object that contains error information.
 *
 * @public
 */
export interface ErrorObject {
  /**
   * A human-readable error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error type.
   *
   * @public
   */
  ErrorType?: string | undefined;

  /**
   * Machine-readable error data.
   *
   * @public
   */
  ErrorData?: string | undefined;

  /**
   * Stack trace information for the error.
   *
   * @public
   */
  StackTrace?: string[] | undefined;
}

/**
 * Configuration options for a step operation.
 *
 * @public
 */
export interface StepOptions {
  /**
   * The delay in seconds before the next retry attempt.
   *
   * @public
   */
  NextAttemptDelaySeconds?: number | undefined;
}

/**
 * Specifies how long to pause the durable execution.
 *
 * @public
 */
export interface WaitOptions {
  /**
   * The duration to wait, in seconds.
   *
   * @public
   */
  WaitSeconds?: number | undefined;
}

/**
 * An update to be applied to an operation during checkpointing.
 *
 * @public
 */
export interface OperationUpdate {
  /**
   * The unique identifier for this operation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the parent operation, if this operation is running within a child context.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * The customer-provided name for this operation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of operation to update.
   *
   * @public
   */
  Type: OperationType | undefined;

  /**
   * The subtype of the operation, providing additional categorization.
   *
   * @public
   */
  SubType?: string | undefined;

  /**
   * The action to take on the operation.
   *
   * @public
   */
  Action: OperationAction | undefined;

  /**
   * The payload for successful operations. The maximum payload size is 6 MB for synchronous `EXECUTION` operations (RequestResponse invocationType), and 1 MB for asynchronous `EXECUTION` (Event invocationType), `CHAINED_INVOKE`, `CONTEXT`, `STEP`, `WAIT`, and `CALLBACK` operations.
   *
   * @public
   */
  Payload?: string | undefined;

  /**
   * The error information for failed operations. The combined size of all error fields is limited to 1 MB.
   *
   * @public
   */
  Error?: ErrorObject | undefined;

  /**
   * Options for context operations.
   *
   * @public
   */
  ContextOptions?: ContextOptions | undefined;

  /**
   * Options for step operations.
   *
   * @public
   */
  StepOptions?: StepOptions | undefined;

  /**
   * Options for wait operations.
   *
   * @public
   */
  WaitOptions?: WaitOptions | undefined;

  /**
   * Configuration options for callback operations in durable executions, including timeout settings and retry behavior.
   *
   * @public
   */
  CallbackOptions?: CallbackOptions | undefined;

  /**
   * Configuration options for chained function invocations in durable executions, including retry settings and timeout configuration.
   *
   * @public
   */
  ChainedInvokeOptions?: ChainedInvokeOptions | undefined;
}

/**
 * @public
 */
export interface CheckpointDurableExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * A unique token that identifies the current checkpoint state. This token is provided by the Lambda runtime and must be used to ensure checkpoints are applied in the correct order. Each checkpoint operation consumes this token and returns a new one.
   *
   * @public
   */
  CheckpointToken: string | undefined;

  /**
   * An array of state updates to apply during this checkpoint. Each update represents a change to the execution state, such as completing a step, starting a callback, or scheduling a timer. Updates are applied atomically as part of the checkpoint operation.
   *
   * @public
   */
  Updates?: OperationUpdate[] | undefined;

  /**
   * An optional idempotency token to ensure that duplicate checkpoint requests are handled correctly. If provided, Lambda uses this token to detect and handle duplicate requests within a 15-minute window.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Contains details about a callback operation in a durable execution, including the callback token and timeout configuration.
 *
 * @public
 */
export interface CallbackDetails {
  /**
   * The callback ID. Callback IDs are generated by the `DurableContext` when a durable function calls `ctx.waitForCallback`.
   *
   * @public
   */
  CallbackId?: string | undefined;

  /**
   * The response payload from the callback operation as a string.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * An error object that contains details about the failure.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * Contains details about a chained function invocation in a durable execution, including the target function and invocation parameters.
 *
 * @public
 */
export interface ChainedInvokeDetails {
  /**
   * The response payload from the chained invocation.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * Details about the chained invocation failure.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * Details about a durable execution context.
 *
 * @public
 */
export interface ContextDetails {
  /**
   * Whether the state data of child operations of this completed context should be included in the invoke payload and `GetDurableExecutionState` response.
   *
   * @public
   */
  ReplayChildren?: boolean | undefined;

  /**
   * The response payload from the context.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * Details about the context failure.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * Details about a [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html).
 *
 * @public
 */
export interface ExecutionDetails {
  /**
   * The original input payload provided for the durable execution.
   *
   * @public
   */
  InputPayload?: string | undefined;
}

/**
 * Details about a step operation.
 *
 * @public
 */
export interface StepDetails {
  /**
   * The current attempt number for this step.
   *
   * @public
   */
  Attempt?: number | undefined;

  /**
   * The date and time when the next attempt is scheduled, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD). Only populated when the step is in a pending state.
   *
   * @public
   */
  NextAttemptTimestamp?: Date | undefined;

  /**
   * The JSON response payload from the step operation.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * Details about the step failure.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * Details about a wait operation.
 *
 * @public
 */
export interface WaitDetails {
  /**
   * The date and time when the wait operation is scheduled to complete, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  ScheduledEndTimestamp?: Date | undefined;
}

/**
 * Information about an operation within a durable execution.
 *
 * @public
 */
export interface Operation {
  /**
   * The unique identifier for this operation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The unique identifier of the parent operation, if this operation is running within a child context.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * The customer-provided name for this operation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of operation.
   *
   * @public
   */
  Type: OperationType | undefined;

  /**
   * The subtype of the operation, providing additional categorization.
   *
   * @public
   */
  SubType?: string | undefined;

  /**
   * The date and time when the operation started, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The date and time when the operation ended, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The current status of the operation.
   *
   * @public
   */
  Status: OperationStatus | undefined;

  /**
   * Details about the execution, if this operation represents an execution.
   *
   * @public
   */
  ExecutionDetails?: ExecutionDetails | undefined;

  /**
   * Details about the context, if this operation represents a context.
   *
   * @public
   */
  ContextDetails?: ContextDetails | undefined;

  /**
   * Details about the step, if this operation represents a step.
   *
   * @public
   */
  StepDetails?: StepDetails | undefined;

  /**
   * Details about the wait operation, if this operation represents a wait.
   *
   * @public
   */
  WaitDetails?: WaitDetails | undefined;

  /**
   * Contains details about a callback operation in a durable execution, including the callback token and timeout configuration.
   *
   * @public
   */
  CallbackDetails?: CallbackDetails | undefined;

  /**
   * Contains details about a chained function invocation in a durable execution, including the target function and invocation parameters.
   *
   * @public
   */
  ChainedInvokeDetails?: ChainedInvokeDetails | undefined;
}

/**
 * Contains operations that have been updated since the last checkpoint, such as completed asynchronous work like timers or callbacks.
 *
 * @public
 */
export interface CheckpointUpdatedExecutionState {
  /**
   * A list of operations that have been updated since the last checkpoint.
   *
   * @public
   */
  Operations?: Operation[] | undefined;

  /**
   * Indicates that more results are available. Use this value in a subsequent call to retrieve the next page of results.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * The response from the CheckpointDurableExecution operation.
 *
 * @public
 */
export interface CheckpointDurableExecutionResponse {
  /**
   * A new checkpoint token to use for the next checkpoint operation. This token replaces the one provided in the request and must be used for subsequent checkpoints to maintain proper ordering.
   *
   * @public
   */
  CheckpointToken?: string | undefined;

  /**
   * Updated execution state information that includes any changes that occurred since the last checkpoint, such as completed callbacks or expired timers. This allows the SDK to update its internal state during replay.
   *
   * @public
   */
  NewExecutionState: CheckpointUpdatedExecutionState | undefined;
}

/**
 * @public
 */
export interface GetDurableExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * Specifies whether to include execution data such as input payload, result, and error information in the response. Set to `false` for a more compact response that includes only execution metadata. The default value is set to `true`.
   *
   * @public
   */
  IncludeExecutionData?: boolean | undefined;
}

/**
 * Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout, retention period for execution history, and an optional ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
 *
 * @public
 */
export interface DurableConfig {
  /**
   * The ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * The number of days to retain execution history after a durable execution completes. After this period, execution history is no longer available through the GetDurableExecutionHistory API.
   *
   * @public
   */
  RetentionPeriodInDays?: number | undefined;

  /**
   * The maximum time (in seconds) that a durable execution can run before timing out. This timeout applies to the entire durable execution, not individual function invocations.
   *
   * @public
   */
  ExecutionTimeout?: number | undefined;
}

/**
 * Contains trace headers for the Lambda durable execution.
 *
 * @public
 */
export interface TraceHeader {
  /**
   * The X-Ray trace header associated with the durable execution.
   *
   * @public
   */
  XAmznTraceId?: string | undefined;
}

/**
 * The response from the GetDurableExecution operation, containing detailed information about the durable execution.
 *
 * @public
 */
export interface GetDurableExecutionResponse {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * The name of the durable execution. This is either the name you provided when invoking the function, or a system-generated unique identifier if no name was provided.
   *
   * @public
   */
  DurableExecutionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function that was invoked to start this durable execution.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The JSON input payload that you provided when you started the durable execution. Asynchronous invocations support up to 1 MB, and synchronous invocations support up to 6 MB.
   *
   * @public
   */
  InputPayload?: string | undefined;

  /**
   * The JSON result returned by the durable execution if it completed successfully. This field is only present when the execution status is `SUCCEEDED`. Asynchronous invocations support up to 1 MB, and synchronous invocations support up to 6 MB.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * Error information if the durable execution failed. This field is only present when the execution status is `FAILED`, `TIMED_OUT`, or `STOPPED`. The combined size of all error fields is limited to 1 MB.
   *
   * @public
   */
  Error?: ErrorObject | undefined;

  /**
   * The date and time when the durable execution started, in Unix timestamp format.
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The current status of the durable execution. Valid values are `RUNNING`, `SUCCEEDED`, `FAILED`, `TIMED_OUT`, and `STOPPED`.
   *
   * @public
   */
  Status: ExecutionStatus | undefined;

  /**
   * The date and time when the durable execution ended, in Unix timestamp format. This field is only present if the execution has completed (status is `SUCCEEDED`, `FAILED`, `TIMED_OUT`, or `STOPPED`).
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The version of the Lambda function that was invoked for this durable execution. This ensures that all replays during the execution use the same function version.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The trace headers associated with the durable execution.
   *
   * @public
   */
  TraceHeader?: TraceHeader | undefined;

  /**
   * Indicates whether execution data is included in this response. Returns `false` when `IncludeExecutionData` is set to `false` in the request.
   *
   * @public
   */
  ExecutionDataIncluded?: boolean | undefined;

  /**
   * Configuration settings for the durable execution, including execution timeout, retention period for execution history, and an optional ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
   *
   * @public
   */
  DurableConfig?: DurableConfig | undefined;
}

/**
 * @public
 */
export interface GetDurableExecutionHistoryRequest {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * Specifies whether to include execution data such as step results and callback payloads in the history events. Set to `true` to include data, or `false` to exclude it for a more compact response. The default is `true`.
   *
   * @public
   */
  IncludeExecutionData?: boolean | undefined;

  /**
   * The maximum number of history events to return per call. You can use `Marker` to retrieve additional pages of results. The default is 100 and the maximum allowed is 1000. A value of 0 uses the default.
   *
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * If `NextMarker` was returned from a previous request, use this value to retrieve the next page of results. Each pagination token expires after 24 hours.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * When set to `true`, returns the history events in reverse chronological order (newest first). By default, events are returned in chronological order (oldest first).
   *
   * @public
   */
  ReverseOrder?: boolean | undefined;
}

/**
 * Error information for an event.
 *
 * @public
 */
export interface EventError {
  /**
   * The error payload.
   *
   * @public
   */
  Payload?: ErrorObject | undefined;

  /**
   * Indicates if the error payload was truncated due to size limits.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * Contains details about a failed callback operation, including error information and the reason for failure.
 *
 * @public
 */
export interface CallbackFailedDetails {
  /**
   * An error object that contains details about the failure.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Contains details about a callback operation that has started, including timing information and callback metadata.
 *
 * @public
 */
export interface CallbackStartedDetails {
  /**
   * The callback ID. Callback IDs are generated by the `DurableContext` when a durable function calls `ctx.waitForCallback`.
   *
   * @public
   */
  CallbackId: string | undefined;

  /**
   * The heartbeat timeout value, in seconds.
   *
   * @public
   */
  HeartbeatTimeout?: number | undefined;

  /**
   * The timeout value, in seconds.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * Result information for an event.
 *
 * @public
 */
export interface EventResult {
  /**
   * The result payload.
   *
   * @public
   */
  Payload?: string | undefined;

  /**
   * Indicates if the error payload was truncated due to size limits.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * Contains details about a successfully completed callback operation, including the result data and completion timestamp.
 *
 * @public
 */
export interface CallbackSucceededDetails {
  /**
   * The response payload from the successful operation.
   *
   * @public
   */
  Result: EventResult | undefined;
}

/**
 * Contains details about a callback operation that timed out, including timeout duration and any partial results.
 *
 * @public
 */
export interface CallbackTimedOutDetails {
  /**
   * Details about the callback timeout.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Contains details about a failed chained function invocation, including error information and failure reason.
 *
 * @public
 */
export interface ChainedInvokeFailedDetails {
  /**
   * Details about the chained invocation failure.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Input information for an event.
 *
 * @public
 */
export interface EventInput {
  /**
   * The input payload.
   *
   * @public
   */
  Payload?: string | undefined;

  /**
   * Indicates if the error payload was truncated due to size limits.
   *
   * @public
   */
  Truncated?: boolean | undefined;
}

/**
 * Contains details about a chained function invocation that has started execution, including start time and execution context.
 *
 * @public
 */
export interface ChainedInvokeStartedDetails {
  /**
   * The name or ARN of the Lambda function being invoked.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The tenant identifier for the chained invocation.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The JSON input payload provided to the chained invocation.
   *
   * @public
   */
  Input?: EventInput | undefined;

  /**
   * The version of the function that was executed.
   *
   * @public
   */
  ExecutedVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the durable execution.
   *
   * @public
   */
  DurableExecutionArn?: string | undefined;
}

/**
 * Details about a chained invocation that was stopped.
 *
 * @public
 */
export interface ChainedInvokeStoppedDetails {
  /**
   * Details about why the chained invocation stopped.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Details about a chained invocation that succeeded.
 *
 * @public
 */
export interface ChainedInvokeSucceededDetails {
  /**
   * The response payload from the successful operation.
   *
   * @public
   */
  Result: EventResult | undefined;
}

/**
 * Details about a chained invocation that timed out.
 *
 * @public
 */
export interface ChainedInvokeTimedOutDetails {
  /**
   * Details about the chained invocation timeout.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Details about a context that failed.
 *
 * @public
 */
export interface ContextFailedDetails {
  /**
   * Details about the context failure.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Details about a context that has started.
 *
 * @public
 */
export interface ContextStartedDetails {}

/**
 * Details about a context that succeeded.
 *
 * @public
 */
export interface ContextSucceededDetails {
  /**
   * The JSON response payload from the successful context.
   *
   * @public
   */
  Result: EventResult | undefined;
}

/**
 * Details about a failed [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html).
 *
 * @public
 */
export interface ExecutionFailedDetails {
  /**
   * Details about the execution failure.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Details about a durable execution that started.
 *
 * @public
 */
export interface ExecutionStartedDetails {
  /**
   * The input payload provided for the durable execution.
   *
   * @public
   */
  Input: EventInput | undefined;

  /**
   * The maximum amount of time that the durable execution is allowed to run, in seconds.
   *
   * @public
   */
  ExecutionTimeout: number | undefined;
}

/**
 * Details about a [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html) that stopped.
 *
 * @public
 */
export interface ExecutionStoppedDetails {
  /**
   * Details about why the execution stopped.
   *
   * @public
   */
  Error: EventError | undefined;
}

/**
 * Details about a [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html) that succeeded.
 *
 * @public
 */
export interface ExecutionSucceededDetails {
  /**
   * The response payload from the successful operation.
   *
   * @public
   */
  Result: EventResult | undefined;
}

/**
 * Details about a [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html) that timed out.
 *
 * @public
 */
export interface ExecutionTimedOutDetails {
  /**
   * Details about the execution timeout.
   *
   * @public
   */
  Error?: EventError | undefined;
}

/**
 * Details about a function invocation that completed.
 *
 * @public
 */
export interface InvocationCompletedDetails {
  /**
   * The date and time when the invocation started, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The date and time when the invocation ended, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  EndTimestamp: Date | undefined;

  /**
   * The request ID for the invocation.
   *
   * @public
   */
  RequestId: string | undefined;

  /**
   * Details about the invocation failure.
   *
   * @public
   */
  Error?: EventError | undefined;
}

/**
 * Information about retry attempts for an operation.
 *
 * @public
 */
export interface RetryDetails {
  /**
   * The current attempt number for this operation.
   *
   * @public
   */
  CurrentAttempt?: number | undefined;

  /**
   * The delay before the next retry attempt, in seconds.
   *
   * @public
   */
  NextAttemptDelaySeconds?: number | undefined;
}

/**
 * Details about a step that failed.
 *
 * @public
 */
export interface StepFailedDetails {
  /**
   * Details about the step failure.
   *
   * @public
   */
  Error: EventError | undefined;

  /**
   * Information about retry attempts for this step operation.
   *
   * @public
   */
  RetryDetails: RetryDetails | undefined;
}

/**
 * Details about a step that has started.
 *
 * @public
 */
export interface StepStartedDetails {}

/**
 * Details about a step that succeeded.
 *
 * @public
 */
export interface StepSucceededDetails {
  /**
   * The response payload from the successful operation.
   *
   * @public
   */
  Result: EventResult | undefined;

  /**
   * Information about retry attempts for this step operation.
   *
   * @public
   */
  RetryDetails: RetryDetails | undefined;
}

/**
 * Details about a wait operation that was cancelled.
 *
 * @public
 */
export interface WaitCancelledDetails {
  /**
   * Details about why the wait operation was cancelled.
   *
   * @public
   */
  Error?: EventError | undefined;
}

/**
 * Details about a wait operation that has started.
 *
 * @public
 */
export interface WaitStartedDetails {
  /**
   * The duration to wait, in seconds.
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * The date and time when the wait operation is scheduled to complete, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  ScheduledEndTimestamp: Date | undefined;
}

/**
 * Details about a wait operation that succeeded.
 *
 * @public
 */
export interface WaitSucceededDetails {
  /**
   * The wait duration, in seconds.
   *
   * @public
   */
  Duration?: number | undefined;
}

/**
 * An event that occurred during the execution of a durable function.
 *
 * @public
 */
export interface Event {
  /**
   * The type of event that occurred.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The subtype of the event, providing additional categorization.
   *
   * @public
   */
  SubType?: string | undefined;

  /**
   * The unique identifier for this event. Event IDs increment sequentially.
   *
   * @public
   */
  EventId?: number | undefined;

  /**
   * The unique identifier for this operation.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The customer-provided name for this operation.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time when this event occurred, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  EventTimestamp?: Date | undefined;

  /**
   * The unique identifier of the parent operation, if this operation is running within a child context.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * Details about an execution that started.
   *
   * @public
   */
  ExecutionStartedDetails?: ExecutionStartedDetails | undefined;

  /**
   * Details about an execution that succeeded.
   *
   * @public
   */
  ExecutionSucceededDetails?: ExecutionSucceededDetails | undefined;

  /**
   * Details about an execution that failed.
   *
   * @public
   */
  ExecutionFailedDetails?: ExecutionFailedDetails | undefined;

  /**
   * Details about an execution that timed out.
   *
   * @public
   */
  ExecutionTimedOutDetails?: ExecutionTimedOutDetails | undefined;

  /**
   * Details about an execution that was stopped.
   *
   * @public
   */
  ExecutionStoppedDetails?: ExecutionStoppedDetails | undefined;

  /**
   * Details about a context that started.
   *
   * @public
   */
  ContextStartedDetails?: ContextStartedDetails | undefined;

  /**
   * Details about a context that succeeded.
   *
   * @public
   */
  ContextSucceededDetails?: ContextSucceededDetails | undefined;

  /**
   * Details about a context that failed.
   *
   * @public
   */
  ContextFailedDetails?: ContextFailedDetails | undefined;

  /**
   * Details about a wait operation that started.
   *
   * @public
   */
  WaitStartedDetails?: WaitStartedDetails | undefined;

  /**
   * Details about a wait operation that succeeded.
   *
   * @public
   */
  WaitSucceededDetails?: WaitSucceededDetails | undefined;

  /**
   * Details about a wait operation that was cancelled.
   *
   * @public
   */
  WaitCancelledDetails?: WaitCancelledDetails | undefined;

  /**
   * Details about a step that started.
   *
   * @public
   */
  StepStartedDetails?: StepStartedDetails | undefined;

  /**
   * Details about a step that succeeded.
   *
   * @public
   */
  StepSucceededDetails?: StepSucceededDetails | undefined;

  /**
   * Details about a step that failed.
   *
   * @public
   */
  StepFailedDetails?: StepFailedDetails | undefined;

  /**
   * Contains details about a chained function invocation that has started execution, including start time and execution context.
   *
   * @public
   */
  ChainedInvokeStartedDetails?: ChainedInvokeStartedDetails | undefined;

  /**
   * Details about a chained invocation that succeeded.
   *
   * @public
   */
  ChainedInvokeSucceededDetails?: ChainedInvokeSucceededDetails | undefined;

  /**
   * Contains details about a failed chained function invocation, including error information and failure reason.
   *
   * @public
   */
  ChainedInvokeFailedDetails?: ChainedInvokeFailedDetails | undefined;

  /**
   * Details about a chained invocation that timed out.
   *
   * @public
   */
  ChainedInvokeTimedOutDetails?: ChainedInvokeTimedOutDetails | undefined;

  /**
   * Details about a chained invocation that was stopped.
   *
   * @public
   */
  ChainedInvokeStoppedDetails?: ChainedInvokeStoppedDetails | undefined;

  /**
   * Contains details about a callback operation that has started, including timing information and callback metadata.
   *
   * @public
   */
  CallbackStartedDetails?: CallbackStartedDetails | undefined;

  /**
   * Contains details about a successfully completed callback operation, including the result data and completion timestamp.
   *
   * @public
   */
  CallbackSucceededDetails?: CallbackSucceededDetails | undefined;

  /**
   * Contains details about a failed callback operation, including error information and the reason for failure.
   *
   * @public
   */
  CallbackFailedDetails?: CallbackFailedDetails | undefined;

  /**
   * Contains details about a callback operation that timed out, including timeout duration and any partial results.
   *
   * @public
   */
  CallbackTimedOutDetails?: CallbackTimedOutDetails | undefined;

  /**
   * Details about a function invocation that completed.
   *
   * @public
   */
  InvocationCompletedDetails?: InvocationCompletedDetails | undefined;
}

/**
 * The response from the GetDurableExecutionHistory operation, containing the execution history and events.
 *
 * @public
 */
export interface GetDurableExecutionHistoryResponse {
  /**
   * An array of execution history events, ordered chronologically unless `ReverseOrder` is set to `true`. Each event represents a significant occurrence during the execution, such as step completion or callback resolution.
   *
   * @public
   */
  Events: Event[] | undefined;

  /**
   * If present, indicates that more history events are available. Use this value as the `Marker` parameter in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface GetDurableExecutionStateRequest {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * A checkpoint token that identifies the current state of the execution. This token is provided by the Lambda runtime and ensures that state retrieval is consistent with the current execution context.
   *
   * @public
   */
  CheckpointToken: string | undefined;

  /**
   * If `NextMarker` was returned from a previous request, use this value to retrieve the next page of operations. Each pagination token expires after 24 hours.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of operations to return per call. You can use `Marker` to retrieve additional pages of results. The default is 100 and the maximum allowed is 1000. A value of 0 uses the default.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The response from the GetDurableExecutionState operation, containing the current execution state for replay.
 *
 * @public
 */
export interface GetDurableExecutionStateResponse {
  /**
   * An array of operations that represent the current state of the durable execution. Operations are ordered by their start sequence number in ascending order and include information needed for replay processing.
   *
   * @public
   */
  Operations: Operation[] | undefined;

  /**
   * If present, indicates that more operations are available. Use this value as the `Marker` parameter in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface StopDurableExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * Optional error details explaining why the execution is being stopped. The combined size of all error fields is limited to 1 MB.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * @public
 */
export interface StopDurableExecutionResponse {
  /**
   * The timestamp when the execution was stopped (ISO 8601 format).
   *
   * @public
   */
  StopTimestamp: Date | undefined;
}

/**
 * A destination for events that failed processing. For more information, see [Adding a destination](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations).
 *
 * @public
 */
export interface OnFailure {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   *
   * To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
   *
   * > **Note:** Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending `OnFailure` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
   *
   * To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * A destination for events that were processed successfully.
 *
 * To retain records of successful [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Lambda function, or Amazon EventBridge event bus as the destination.
 *
 * > **Note:** `OnSuccess` is not supported in `CreateEventSourceMapping` or `UpdateEventSourceMapping` requests.
 *
 * @public
 */
export interface OnSuccess {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   *
   * > **Note:** Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending `OnFailure` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
   *
   * @public
   */
  Destination?: string | undefined;
}

/**
 * A configuration object that specifies the destination of an event after Lambda processes it. For more information, see [Adding a destination](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations).
 *
 * @public
 */
export interface DestinationConfig {
  /**
   * The destination configuration for successful invocations. Not supported in `CreateEventSourceMapping` or `UpdateEventSourceMapping`.
   *
   * @public
   */
  OnSuccess?: OnSuccess | undefined;

  /**
   * The destination configuration for failed invocations.
   *
   * @public
   */
  OnFailure?: OnFailure | undefined;
}

/**
 * Specific configuration settings for a DocumentDB event source.
 *
 * @public
 */
export interface DocumentDBEventSourceConfig {
  /**
   * The name of the database to consume within the DocumentDB cluster.
   *
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
   *
   * @public
   */
  CollectionName?: string | undefined;

  /**
   * Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
   *
   * @public
   */
  FullDocument?: FullDocument | undefined;
}

/**
 * A structure within a `FilterCriteria` object that defines an event filtering pattern.
 *
 * @public
 */
export interface Filter {
  /**
   * A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).
   *
   * @public
   */
  Pattern?: string | undefined;
}

/**
 * An object that contains the filters for an event source.
 *
 * @public
 */
export interface FilterCriteria {
  /**
   * A list of filters.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. Use this configuration object to define the level of logs for your event source mapping.
 *
 * @public
 */
export interface EventSourceMappingLoggingConfig {
  /**
   * The log level you want your event source mapping to use. Lambda event poller only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest. For more information about these metrics, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).
   *
   * @public
   */
  SystemLogLevel?: EventSourceMappingSystemLogLevel | undefined;
}

/**
 * The metrics configuration for your event source. Use this configuration object to define which metrics you want your event source mapping to produce.
 *
 * @public
 */
export interface EventSourceMappingMetricsConfig {
  /**
   * The metrics you want your event source mapping to produce, including `EventCount`, `ErrorCount`, `KafkaMetrics`.
   *
   * - `EventCount` to receive metrics related to the number of events processed by your event source mapping.
   * - `ErrorCount` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
   * - `KafkaMetrics` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.
   *
   * For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   *
   * @public
   */
  Metrics?: EventSourceMappingMetric[] | undefined;
}

/**
 * The [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode) configuration for the event source. Use Provisioned Mode to customize the minimum and maximum number of event pollers for your event source.
 *
 * @public
 */
export interface ProvisionedPollerConfig {
  /**
   * The minimum number of event pollers this event source can scale down to. For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.
   *
   * @public
   */
  MinimumPollers?: number | undefined;

  /**
   * The maximum number of event pollers this event source can scale up to. For Amazon SQS event source mappings, the accepted range is between 2 and 10,000, with a default of 200. For Amazon MSK and self-managed Apache Kafka event source mappings, the accepted range is between 1 and 2,000, with a default of 200.
   *
   * @public
   */
  MaximumPollers?: number | undefined;

  /**
   * (Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.
   *
   * @public
   */
  PollerGroupName?: string | undefined;
}

/**
 * (Amazon SQS only) The scaling configuration for the event source. To remove the configuration, pass an empty value.
 *
 * @public
 */
export interface ScalingConfig {
  /**
   * Limits the number of concurrent instances that the Amazon SQS event source can invoke.
   *
   * @public
   */
  MaximumConcurrency?: number | undefined;
}

/**
 * The self-managed Apache Kafka cluster for your event source.
 *
 * @public
 */
export interface SelfManagedEventSource {
  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: `"KAFKA_BOOTSTRAP_SERVERS": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
   *
   * @public
   */
  Endpoints?: Partial<Record<EndPointType, string[]>> | undefined;
}

/**
 * Specific configuration settings for a self-managed Apache Kafka event source.
 *
 * @public
 */
export interface SelfManagedKafkaEventSourceConfig {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).
   *
   * @public
   */
  ConsumerGroupId?: string | undefined;

  /**
   * Specific configuration settings for a Kafka schema registry.
   *
   * @public
   */
  SchemaRegistryConfig?: KafkaSchemaRegistryConfig | undefined;

  /**
   * The mode that Lambda uses to consume records from your self-managed Apache Kafka topic. The default is `Stream`.
   *
   * - `Stream` – Lambda consumes records using a Kafka consumer group and preserves the order of records within each partition. This is the default when you omit `ConsumptionMode`.
   * - `Queue` – Lambda consumes records using a Kafka share group. Multiple consumers can process records from the same partitions concurrently. Queue mode does not preserve per-partition order. Queue mode requires an Apache Kafka cluster running version 4.2 or later with share groups enabled.
   *
   * You cannot change `ConsumptionMode` after you create the event source mapping. To use a different consumption mode, create a new event source mapping.
   *
   * When `ConsumptionMode` is `Queue`, the `StartingPosition`, `StartingPositionTimestamp`, and `MaximumBatchingWindowInSeconds` parameters are not supported.
   *
   * @public
   */
  ConsumptionMode?: KafkaEventSourceMappingConsumptionMode | undefined;
}

/**
 * To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.
 *
 * @public
 */
export interface SourceAccessConfiguration {
  /**
   * The type of authentication protocol, VPC components, or virtual host for your event source. For example: `"Type":"SASL_SCRAM_512_AUTH"`.
   *
   * - `BASIC_AUTH` – (Amazon MQ) The Secrets Manager secret that stores your broker credentials.
   * - `BASIC_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
   * - `VPC_SUBNET` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
   * - `VPC_SECURITY_GROUP` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
   * - `SASL_SCRAM_256_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
   * - `SASL_SCRAM_512_AUTH` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
   * - `VIRTUAL_HOST` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
   * - `CLIENT_CERTIFICATE_TLS_AUTH` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
   * - `SERVER_ROOT_CA_CERTIFICATE` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
   * - `OAUTHBEARER_AUTH` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the OAuth 2.0 credentials that Lambda uses for SASL/OAUTHBEARER authentication with your Apache Kafka brokers. For the contents of the secret, see [Configuring the OAuth secret](https://docs.aws.amazon.com/lambda/latest/dg/kafka-cluster-auth.html#smaa-auth-oauth-secret).
   * - `OAUTHBEARER_SCOPE` – (Self-managed Apache Kafka) The OAuth 2.0 scope that Lambda requests when it acquires an access token. The `URI` field holds the scope value, not a secret ARN. This type requires `OAUTHBEARER_AUTH`.
   * - `OAUTHBEARER_AUDIENCE` – (Self-managed Apache Kafka) The OAuth 2.0 audience that Lambda requests when it acquires an access token. The `URI` field holds the audience value, not a secret ARN. This type requires either `OAUTHBEARER_AUTH` or `IAM_OAUTHBEARER_AUTH`.
   * - `OAUTHBEARER_LOGICAL_CLUSTER` – (Self-managed Apache Kafka) The logical cluster identifier that Lambda sends to a Confluent Cloud broker. The `URI` field holds the identifier, not a secret ARN. This type requires `OAUTHBEARER_AUTH`.
   * - `OAUTHBEARER_IDENTITY_POOL` – (Self-managed Apache Kafka) The identity pool identifier that Lambda sends to a Confluent Cloud broker. The `URI` field holds the identifier, not a secret ARN. This type requires `OAUTHBEARER_AUTH`.
   * - `IAM_AUTH` – (Self-managed Apache Kafka) Authenticate with Identity and Access Management (IAM). Your function's execution role signs each connection, so there is no secret to provide. Omit the `URI` field for this type.
   * - `IAM_OAUTHBEARER_AUTH` – (Self-managed Apache Kafka) Authenticate with an Amazon Web Services web identity token over SASL/OAUTHBEARER. Lambda requests the token for your function's execution role, so there is no secret to provide. Omit the `URI` field for this type. This type requires `OAUTHBEARER_AUDIENCE` and does not support the other `OAUTHBEARER` types.
   *
   * @public
   */
  Type?: SourceAccessType | undefined;

  /**
   * The value for your chosen configuration in `Type`. For example: `"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"`.
   *
   * @public
   */
  URI?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventSourceMappingRequest {
  /**
   * The Amazon Resource Name (ARN) of the event source.
   *
   * - **Amazon Kinesis** – The ARN of the data stream or a stream consumer.
   * - **Amazon DynamoDB Streams** – The ARN of the stream.
   * - **Amazon Simple Queue Service** – The ARN of the queue.
   * - **Amazon Managed Streaming for Apache Kafka** – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
   * - **Amazon MQ** – The ARN of the broker.
   * - **Amazon DocumentDB** – The ARN of the DocumentDB change stream.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `MyFunction`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Version or Alias ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
   * - **Partial ARN** – `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
   *
   * Default: True
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
   *
   * - **Amazon Kinesis** – Default 100. Max 10,000.
   * - **Amazon DynamoDB Streams** – Default 100. Max 10,000.
   * - **Amazon Simple Queue Service** – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
   * - **Amazon Managed Streaming for Apache Kafka** – Default 100. Max 10,000.
   * - **Self-managed Apache Kafka** – Default 100. Max 10,000.
   * - **Amazon MQ (ActiveMQ and RabbitMQ)** – Default 100. Max 10,000.
   * - **DocumentDB** – Default 100. Max 10,000.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics). By default, Lambda does not encrypt your filter criteria object. Specify this property to encrypt data using your own customer managed key.
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   *
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).
   *
   * @public
   */
  LoggingConfig?: EventSourceMappingLoggingConfig | undefined;

  /**
   * (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
   *
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure `MaximumBatchingWindowInSeconds` to any value from 0 seconds to 300 seconds in increments of seconds.
   *
   * For Kinesis, DynamoDB, and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change `MaximumBatchingWindowInSeconds` in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.
   *
   * Related setting: For Kinesis, DynamoDB, and Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
   *
   * Not supported for Kafka event source mappings when `ConsumptionMode` is `Queue`.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. `AT_TIMESTAMP` is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.
   *
   * Not supported for Kafka event source mappings when `ConsumptionMode` is `Queue`.
   *
   * @public
   */
  StartingPosition?: EventSourcePosition | undefined;

  /**
   * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading. `StartingPositionTimestamp` cannot be in the future.
   *
   * Not supported for Kafka event source mappings when `ConsumptionMode` is `Queue`.
   *
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is infinite (-1).
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry.
   *
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
   *
   * For Kafka `Stream` consumption mode, the default is `-1` (infinite retries; capped at 10 when an on-failure destination is configured). For Kafka `Queue` consumption mode, the default is `0`, and if no on-failure destination is configured the Kafka broker performs retries.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * A list of tags to apply to the event source mapping.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
   *
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * The name of the Kafka topic.
   *
   * @public
   */
  Topics?: string[] | undefined;

  /**
   * (MQ) The name of the Amazon MQ broker destination queue to consume.
   *
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * An array of authentication protocols or VPC components required to secure your event source.
   *
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * The self-managed Apache Kafka cluster to receive records from.
   *
   * @public
   */
  SelfManagedEventSource?: SelfManagedEventSource | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.
   *
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   *
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   *
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a DocumentDB event source.
   *
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
   *
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * An object that contains details about an error related to filter criteria encryption.
 *
 * @public
 */
export interface FilterCriteriaError {
  /**
   * The KMS exception that resulted from filter criteria encryption or decryption.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * A mapping between an Amazon Web Services resource and a Lambda function. For details, see CreateEventSourceMapping.
 *
 * @public
 */
export interface EventSourceMappingConfiguration {
  /**
   * The identifier of the event source mapping.
   *
   * @public
   */
  UUID?: string | undefined;

  /**
   * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Stream event sources. `AT_TIMESTAMP` is supported only for Amazon Kinesis streams, Amazon DocumentDB, Amazon MSK, and self-managed Apache Kafka.
   *
   * @public
   */
  StartingPosition?: EventSourcePosition | undefined;

  /**
   * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading. `StartingPositionTimestamp` cannot be in the future.
   *
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;

  /**
   * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
   *
   * Default value: Varies by service. For Amazon SQS, the default is 10. For all other services, the default is 100.
   *
   * Related setting: When you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure `MaximumBatchingWindowInSeconds` to any value from 0 seconds to 300 seconds in increments of seconds.
   *
   * For streams and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change `MaximumBatchingWindowInSeconds` in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.
   *
   * Related setting: For streams and Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the event source.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
   *
   * If filter criteria is encrypted, this field shows up as `null` in the response of ListEventSourceMapping API calls. You can view this field in plaintext in the response of GetEventSourceMapping and DeleteEventSourceMapping calls if you have `kms:Decrypt` permissions for the correct KMS key.
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * An object that contains details about an error related to filter criteria encryption.
   *
   * @public
   */
  FilterCriteriaError?: FilterCriteriaError | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   *
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).
   *
   * @public
   */
  LoggingConfig?: EventSourceMappingLoggingConfig | undefined;

  /**
   * (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
   *
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * The ARN of the Lambda function.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The date that the event source mapping was last updated or that its state changed.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The result of the event source mapping's last processing attempt.
   *
   * @public
   */
  LastProcessingResult?: string | undefined;

  /**
   * The state of the event source mapping. It can be one of the following: `Creating`, `Enabling`, `Enabled`, `Disabling`, `Disabled`, `Updating`, or `Deleting`.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Indicates whether a user or Lambda made the last change to the event source mapping.
   *
   * @public
   */
  StateTransitionReason?: string | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * The name of the Kafka topic.
   *
   * @public
   */
  Topics?: string[] | undefined;

  /**
   * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
   *
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
   *
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * The self-managed Apache Kafka cluster for your event source.
   *
   * @public
   */
  SelfManagedEventSource?: SelfManagedEventSource | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
   *
   * > **Note:** The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry. The default value is false.
   *
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
   *
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.
   *
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   *
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   *
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a DocumentDB event source.
   *
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the event source mapping.
   *
   * @public
   */
  EventSourceMappingArn?: string | undefined;

  /**
   * (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
   *
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * @public
 */
export interface DeleteEventSourceMappingRequest {
  /**
   * The identifier of the event source mapping.
   *
   * @public
   */
  UUID: string | undefined;
}

/**
 * @public
 */
export interface GetEventSourceMappingRequest {
  /**
   * The identifier of the event source mapping.
   *
   * @public
   */
  UUID: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourceMappingsRequest {
  /**
   * The Amazon Resource Name (ARN) of the event source.
   *
   * - **Amazon Kinesis** – The ARN of the data stream or a stream consumer.
   * - **Amazon DynamoDB Streams** – The ARN of the stream.
   * - **Amazon Simple Queue Service** – The ARN of the queue.
   * - **Amazon Managed Streaming for Apache Kafka** – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
   * - **Amazon MQ** – The ARN of the broker.
   * - **Amazon DocumentDB** – The ARN of the DocumentDB change stream.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `MyFunction`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Version or Alias ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
   * - **Partial ARN** – `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * A pagination token returned by a previous call.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of event source mappings to return. Note that ListEventSourceMappings returns a maximum of 100 items in each response, even if you set the number higher.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListEventSourceMappingsResponse {
  /**
   * A pagination token that's returned when the response doesn't contain all event source mappings.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of event source mappings.
   *
   * @public
   */
  EventSourceMappings?: EventSourceMappingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceMappingRequest {
  /**
   * The identifier of the event source mapping.
   *
   * @public
   */
  UUID: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `MyFunction`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Version or Alias ARN** – `arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD`.
   * - **Partial ARN** – `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
   *
   * Default: True
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
   *
   * - **Amazon Kinesis** – Default 100. Max 10,000.
   * - **Amazon DynamoDB Streams** – Default 100. Max 10,000.
   * - **Amazon Simple Queue Service** – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
   * - **Amazon Managed Streaming for Apache Kafka** – Default 100. Max 10,000.
   * - **Self-managed Apache Kafka** – Default 100. Max 10,000.
   * - **Amazon MQ (ActiveMQ and RabbitMQ)** – Default 100. Max 10,000.
   * - **DocumentDB** – Default 100. Max 10,000.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics). By default, Lambda does not encrypt your filter criteria object. Specify this property to encrypt data using your own customer managed key.
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
   *
   * @public
   */
  MetricsConfig?: EventSourceMappingMetricsConfig | undefined;

  /**
   * (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. Use this configuration object to define the level of logs for your event source mapping.
   *
   * @public
   */
  LoggingConfig?: EventSourceMappingLoggingConfig | undefined;

  /**
   * (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
   *
   * @public
   */
  ScalingConfig?: ScalingConfig | undefined;

  /**
   * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function. You can configure `MaximumBatchingWindowInSeconds` to any value from 0 seconds to 300 seconds in increments of seconds.
   *
   * For Kinesis, DynamoDB, and Amazon SQS event sources, the default batching window is 0 seconds. For Amazon MSK, Self-managed Apache Kafka, Amazon MQ, and DocumentDB event sources, the default batching window is 500 ms. Note that because you can only change `MaximumBatchingWindowInSeconds` in increments of seconds, you cannot revert back to the 500 ms default batching window after you have changed it. To restore the default batching window, you must create a new event source mapping.
   *
   * Related setting: For Kinesis, DynamoDB, and Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
   *
   * Not supported for Kafka event source mappings when `ConsumptionMode` is `Queue`.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The number of batches to process from each shard concurrently.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is infinite (-1).
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) If the function returns an error, split the batch in two and retry.
   *
   * @public
   */
  BisectBatchOnFunctionError?: boolean | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
   *
   * For Kafka `Stream` consumption mode, the default is `-1` (infinite retries; capped at 10 when an on-failure destination is configured). For Kafka `Queue` consumption mode, the default is `0`, and if no on-failure destination is configured the Kafka broker performs retries.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
   *
   * @public
   */
  TumblingWindowInSeconds?: number | undefined;

  /**
   * An array of authentication protocols or VPC components required to secure your event source.
   *
   * @public
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[] | undefined;

  /**
   * (Kinesis, DynamoDB Streams, Amazon MSK, self-managed Apache Kafka, and Amazon SQS) A list of current response type enums applied to the event source mapping.
   *
   * @public
   */
  FunctionResponseTypes?: FunctionResponseType[] | undefined;

  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   *
   * @public
   */
  AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   *
   * @public
   */
  SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig | undefined;

  /**
   * Specific configuration settings for a DocumentDB event source.
   *
   * @public
   */
  DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig | undefined;

  /**
   * (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
   *
   * @public
   */
  ProvisionedPollerConfig?: ProvisionedPollerConfig | undefined;
}

/**
 * Configuration for Lambda-managed instances used by the capacity provider.
 *
 * @public
 */
export interface LambdaManagedInstancesCapacityProviderConfig {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  CapacityProviderArn: string | undefined;

  /**
   * The maximum number of concurrent execution environments that can run on each compute instance.
   *
   * @public
   */
  PerExecutionEnvironmentMaxConcurrency?: number | undefined;

  /**
   * The amount of memory in GiB allocated per vCPU for execution environments.
   *
   * @public
   */
  ExecutionEnvironmentMemoryGiBPerVCpu?: number | undefined;
}

/**
 * Configuration for the capacity provider that manages compute resources for Lambda functions.
 *
 * @public
 */
export interface CapacityProviderConfig {
  /**
   * Configuration for Lambda-managed instances used by the capacity provider.
   *
   * @public
   */
  LambdaManagedInstancesCapacityProviderConfig: LambdaManagedInstancesCapacityProviderConfig | undefined;
}

/**
 * The code for the Lambda function. You can either specify an object in Amazon S3, upload a .zip file archive deployment package directly, or specify the URI of a container image.
 *
 * @public
 */
export interface FunctionCode {
  /**
   * The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you.
   *
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of the deployment package.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * For versioned objects, the version of the deployment package object to use.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * Specifies how the deployment package is stored. Valid values:
   *
   * - `COPY` (default) – Uploads a copy of your deployment package to Lambda.
   * - `REFERENCE` – Lambda references the deployment package from the specified Amazon S3 bucket.
   *
   * @public
   */
  S3ObjectStorageMode?: S3ObjectStorageMode | undefined;

  /**
   * URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).
   *
   * @public
   */
  SourceKMSKeyArn?: string | undefined;
}

/**
 * The [dead-letter queue](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-dlq) for failed asynchronous invocations.
 *
 * @public
 */
export interface DeadLetterConfig {
  /**
   * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
   *
   * @public
   */
  TargetArn?: string | undefined;
}

/**
 * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
 *
 * @public
 */
export interface Environment {
  /**
   * Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
   *
   * @public
   */
  Variables?: Record<string, string> | undefined;
}

/**
 * The size of the function's `/tmp` directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see [Configuring ephemeral storage (console)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage).
 *
 * @public
 */
export interface EphemeralStorage {
  /**
   * The size of the function's `/tmp` directory.
   *
   * @public
   */
  Size: number | undefined;
}

/**
 * Setting controls how your function accesses data from an Amazon S3 file system.
 *
 * @public
 */
export interface S3FilesConfig {
  /**
   * Specifies if a function reads from the file system for the lowest latency, or through Amazon S3 Files feature "direct Amazon S3 bucket reads" for the highest throughput. Valid values:
   *
   * - `AUTO` (default) – Direct reads are active for functions you configure with 512 MB or more of memory.
   * - `ENABLED` – Enforces all reads are directly from the Amazon S3 bucket, regardless of available memory (less than 512 MB).
   * - `DISABLED` – Routes all reads through the file system, regardless of memory configuration.
   *
   * To use direct reads, you must grant the execution role the `s3:GetObject` and `s3:GetObjectVersion` permissions. If a direct read fails, Lambda automatically falls back to reading through the file system.
   *
   * @public
   */
  DirectS3Read?: DirectS3Read | undefined;
}

/**
 * Details about the connection between a Lambda function and an [Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html) or an [Amazon S3 file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html).
 *
 * @public
 */
export interface FileSystemConfig {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The path where the function can access the file system, starting with `/mnt/`.
   *
   * @public
   */
  LocalMountPath: string | undefined;

  /**
   * The configuration for how your function accesses data on an Amazon S3 file system. Valid only when the file system access point ARN is an Amazon S3 Files access point. If you specify a different access point type (for example, Amazon Elastic File System), the operation returns an `InvalidParameterException`.
   *
   * @public
   */
  S3FilesConfig?: S3FilesConfig | undefined;
}

/**
 * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
 *
 * @public
 */
export interface ImageConfig {
  /**
   * Specifies the entry point to their application, which is typically the location of the runtime executable.
   *
   * @public
   */
  EntryPoint?: string[] | undefined;

  /**
   * Specifies parameters that you want to pass in with ENTRYPOINT.
   *
   * @public
   */
  Command?: string[] | undefined;

  /**
   * Specifies the working directory.
   *
   * @public
   */
  WorkingDirectory?: string | undefined;
}

/**
 * The function's Amazon CloudWatch Logs configuration settings.
 *
 * @public
 */
export interface LoggingConfig {
  /**
   * The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
   *
   * @public
   */
  LogFormat?: LogFormat | undefined;

  /**
   * Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.
   *
   * @public
   */
  ApplicationLogLevel?: ApplicationLogLevel | undefined;

  /**
   * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.
   *
   * @public
   */
  SystemLogLevel?: SystemLogLevel | undefined;

  /**
   * The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>`. To use a different log group, enter an existing log group or enter a new log group name.
   *
   * @public
   */
  LogGroup?: string | undefined;
}

/**
 * The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting. Set `ApplyOn` to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version.
 *
 * @public
 */
export interface SnapStart {
  /**
   * Set to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version.
   *
   * @public
   */
  ApplyOn?: SnapStartApplyOn | undefined;
}

/**
 * Specifies the tenant isolation mode configuration for a Lambda function. This allows you to configure specific tenant isolation strategies for your function invocations. Tenant isolation configuration cannot be modified after function creation.
 *
 * @public
 */
export interface TenancyConfig {
  /**
   * Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.
   *
   * @public
   */
  TenantIsolationMode: TenantIsolationMode | undefined;
}

/**
 * The function's [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) tracing configuration. To sample and record incoming requests, set `Mode` to `Active`.
 *
 * @public
 */
export interface TracingConfig {
  /**
   * The tracing mode.
   *
   * @public
   */
  Mode?: TracingMode | undefined;
}

/**
 * The VPC security groups and subnets that are attached to a Lambda function. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
 *
 * @public
 */
export interface VpcConfig {
  /**
   * A list of VPC subnet IDs.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of VPC security group IDs.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
   *
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFunctionRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
   *
   * The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function's execution role.
   *
   * @public
   */
  Role: string | undefined;

  /**
   * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * The code for the function.
   *
   * @public
   */
  Code: FunctionCode | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds, and the maximum allowed value is 900 seconds. For functions using Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes). For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
   *
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * Set to true to publish the first version of the function during creation.
   *
   * @public
   */
  Publish?: boolean | undefined;

  /**
   * Specifies where to publish the function version or configuration.
   *
   * @public
   */
  PublishTo?: FunctionVersionLatestPublished | undefined;

  /**
   * For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * The type of deployment package. Set to `Image` for container image and set to `Zip` for .zip file archive.
   *
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * Environment variables that are accessible from function code during execution.
   *
   * @public
   */
  Environment?: Environment | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:
   *
   * - The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
   * - The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
   * - When used with `SourceKMSKeyArn`, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).
   * - The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).
   *
   * If you don't provide a customer managed key, Lambda uses an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * Set `Mode` to `Active` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
   *
   * @public
   */
  TracingConfig?: TracingConfig | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
   *
   * @public
   */
  Layers?: string[] | undefined;

  /**
   * Connection settings for an Amazon EFS file system or an Amazon S3 Files file system.
   *
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
   *
   * @public
   */
  CodeSigningConfigArn?: string | undefined;

  /**
   * Container image [configuration values](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms) that override the values in the container image Dockerfile.
   *
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.
   *
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * The size of the function's `/tmp` directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see [Configuring ephemeral storage (console)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage).
   *
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
   *
   * @public
   */
  SnapStart?: SnapStart | undefined;

  /**
   * The function's Amazon CloudWatch Logs configuration settings.
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * Configuration for multi-tenant applications that use Lambda functions. Defines tenant isolation settings and resource allocations. Required for functions supporting multiple tenants.
   *
   * @public
   */
  TenancyConfig?: TenancyConfig | undefined;

  /**
   * Configuration for the capacity provider that manages compute resources for Lambda functions.
   *
   * @public
   */
  CapacityProviderConfig?: CapacityProviderConfig | undefined;

  /**
   * Configuration settings for durable functions. Enables creating functions with durability that can remember their state and continue execution even after interruptions.
   *
   * @public
   */
  DurableConfig?: DurableConfig | undefined;
}

/**
 * Error messages for environment variables that couldn't be applied.
 *
 * @public
 */
export interface EnvironmentError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The results of an operation to update or read environment variables. If the operation succeeds, the response contains the environment variables. If it fails, the response contains details about the error.
 *
 * @public
 */
export interface EnvironmentResponse {
  /**
   * Environment variable key-value pairs. Omitted from CloudTrail logs.
   *
   * @public
   */
  Variables?: Record<string, string> | undefined;

  /**
   * Error messages for environment variables that couldn't be applied.
   *
   * @public
   */
  Error?: EnvironmentError | undefined;
}

/**
 * Error response to `GetFunctionConfiguration`.
 *
 * @public
 */
export interface ImageConfigError {
  /**
   * Error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Response to a `GetFunctionConfiguration` request.
 *
 * @public
 */
export interface ImageConfigResponse {
  /**
   * Configuration values that override the container image Dockerfile.
   *
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * Error response to `GetFunctionConfiguration`.
   *
   * @public
   */
  Error?: ImageConfigError | undefined;
}

/**
 * An [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).
 *
 * @public
 */
export interface Layer {
  /**
   * The Amazon Resource Name (ARN) of the function layer.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The size of the layer archive in bytes.
   *
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for a signing profile version.
   *
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a signing job.
   *
   * @public
   */
  SigningJobArn?: string | undefined;
}

/**
 * Any error returned when the runtime version information for the function could not be retrieved.
 *
 * @public
 */
export interface RuntimeVersionError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The ARN of the runtime and any errors that occured.
 *
 * @public
 */
export interface RuntimeVersionConfig {
  /**
   * The ARN of the runtime version you want the function to use.
   *
   * @public
   */
  RuntimeVersionArn?: string | undefined;

  /**
   * Error response when Lambda is unable to retrieve the runtime version for a function.
   *
   * @public
   */
  Error?: RuntimeVersionError | undefined;
}

/**
 * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
 *
 * @public
 */
export interface SnapStartResponse {
  /**
   * When set to `PublishedVersions`, Lambda creates a snapshot of the execution environment when you publish a function version.
   *
   * @public
   */
  ApplyOn?: SnapStartApplyOn | undefined;

  /**
   * When you provide a [qualified Amazon Resource Name (ARN)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using), this response element indicates whether SnapStart is activated for the specified function version.
   *
   * @public
   */
  OptimizationStatus?: SnapStartOptimizationStatus | undefined;
}

/**
 * The function's X-Ray tracing configuration.
 *
 * @public
 */
export interface TracingConfigResponse {
  /**
   * The tracing mode.
   *
   * @public
   */
  Mode?: TracingMode | undefined;
}

/**
 * The VPC security groups and subnets that are attached to a Lambda function.
 *
 * @public
 */
export interface VpcConfigResponse {
  /**
   * A list of VPC subnet IDs.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * A list of VPC security group IDs.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
   *
   * @public
   */
  Ipv6AllowedForDualStack?: boolean | undefined;
}

/**
 * Details about a function's configuration.
 *
 * @public
 */
export interface FunctionConfiguration {
  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * The function's Amazon Resource Name (ARN).
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
   *
   * The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * The function's execution role.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The function that Lambda calls to begin running your function.
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * The size of the function's deployment package, in bytes.
   *
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * The function's description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The amount of time in seconds that Lambda allows a function to run before stopping it.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The amount of memory available to the function at runtime.
   *
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * The date and time that the function was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModified?: string | undefined;

  /**
   * The SHA256 hash of the function's deployment package.
   *
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * The version of the Lambda function.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The function's networking configuration.
   *
   * @public
   */
  VpcConfig?: VpcConfigResponse | undefined;

  /**
   * The function's dead letter queue.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html). Omitted from CloudTrail logs.
   *
   * @public
   */
  Environment?: EnvironmentResponse | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:
   *
   * - The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
   * - The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
   * - When used with `SourceKMSKeyArn`, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).
   * - The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).
   *
   * If you don't provide a customer managed key, Lambda uses an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * The function's X-Ray tracing configuration.
   *
   * @public
   */
  TracingConfig?: TracingConfigResponse | undefined;

  /**
   * For Lambda@Edge functions, the ARN of the main function.
   *
   * @public
   */
  MasterArn?: string | undefined;

  /**
   * The latest updated revision of the function or alias.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The function's [layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).
   *
   * @public
   */
  Layers?: Layer[] | undefined;

  /**
   * The current state of the function. When the state is `Inactive`, you can reactivate the function by invoking it.
   *
   * @public
   */
  State?: State | undefined;

  /**
   * The reason for the function's current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The reason code for the function's current state. When the code is `Creating`, you can't invoke or modify the function.
   *
   * @public
   */
  StateReasonCode?: StateReasonCode | undefined;

  /**
   * The status of the last update that was performed on the function. This is first set to `Successful` after function creation completes.
   *
   * @public
   */
  LastUpdateStatus?: LastUpdateStatus | undefined;

  /**
   * The reason for the last update that was performed on the function.
   *
   * @public
   */
  LastUpdateStatusReason?: string | undefined;

  /**
   * The reason code for the last update that was performed on the function.
   *
   * @public
   */
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | undefined;

  /**
   * Connection settings for an [Amazon EFS file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html) or an [Amazon S3 file system](https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html).
   *
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * The ARN of the signing profile version.
   *
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * The ARN of the signing job.
   *
   * @public
   */
  SigningJobArn?: string | undefined;

  /**
   * The type of deployment package. Set to `Image` for container image and set `Zip` for .zip file archive.
   *
   * @public
   */
  PackageType?: PackageType | undefined;

  /**
   * The function's image configuration values.
   *
   * @public
   */
  ImageConfigResponse?: ImageConfigResponse | undefined;

  /**
   * The instruction set architecture that the function supports. Architecture is a string array with one of the valid values. The default architecture value is `x86_64`.
   *
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * The size of the function's `/tmp` directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see [Configuring ephemeral storage (console)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage).
   *
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * Set `ApplyOn` to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version. For more information, see [Improving startup performance with Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html).
   *
   * @public
   */
  SnapStart?: SnapStartResponse | undefined;

  /**
   * The ARN of the runtime and any errors that occured.
   *
   * @public
   */
  RuntimeVersionConfig?: RuntimeVersionConfig | undefined;

  /**
   * The function's Amazon CloudWatch Logs configuration settings.
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * The function's tenant isolation configuration settings. Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.
   *
   * @public
   */
  TenancyConfig?: TenancyConfig | undefined;

  /**
   * Configuration for the capacity provider that manages compute resources for Lambda functions.
   *
   * @public
   */
  CapacityProviderConfig?: CapacityProviderConfig | undefined;

  /**
   * The SHA256 hash of the function configuration.
   *
   * @public
   */
  ConfigSha256?: string | undefined;

  /**
   * The function's durable execution configuration settings, if the function is configured for durability.
   *
   * @public
   */
  DurableConfig?: DurableConfig | undefined;
}

/**
 * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.
 *
 * @public
 */
export interface Cors {
  /**
   * Whether to allow cookies or other credentials in requests to your function URL. The default is `false`.
   *
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * The HTTP headers that origins can include in requests to your function URL. For example: `Date`, `Keep-Alive`, `X-Custom-Header`.
   *
   * @public
   */
  AllowHeaders?: string[] | undefined;

  /**
   * The HTTP methods that are allowed when calling your function URL. For example: `GET`, `POST`, `DELETE`, or the wildcard character (`*`).
   *
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * The origins that can access your function URL. You can list any number of specific origins, separated by a comma. For example: `https://www.example.com`, `http://localhost:60905`.
   *
   * Alternatively, you can grant access to all origins using the wildcard character (`*`).
   *
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * The HTTP headers in your function response that you want to expose to origins that call your function URL. For example: `Date`, `Keep-Alive`, `X-Custom-Header`.
   *
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * The maximum amount of time, in seconds, that web browsers can cache results of a preflight request. By default, this is set to `0`, which means that the browser doesn't cache results.
   *
   * @public
   */
  MaxAge?: number | undefined;
}

/**
 * @public
 */
export interface CreateFunctionUrlConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface CreateFunctionUrlConfigResponse {
  /**
   * The HTTP URL endpoint for your function.
   *
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * When the function URL was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionCodeSigningConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionConcurrencyRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFunctionUrlConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version or alias to get details about a published version of the function.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * Contains details about an error that occurred when Lambda attempted to retrieve a function's deployment package.
 *
 * @public
 */
export interface FunctionCodeLocationError {
  /**
   * The error code that identifies why Lambda failed to retrieve the deployment package.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The human-readable message that describes why Lambda failed to retrieve the deployment package.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Details about the resolved Amazon S3 object that contains a function's deployment package.
 *
 * @public
 */
export interface ResolvedS3Object {
  /**
   * The Amazon S3 bucket that contains the deployment package.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of the deployment package.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * The version of the deployment package object.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;
}

/**
 * Details about a function's deployment package.
 *
 * @public
 */
export interface FunctionCodeLocation {
  /**
   * The service that's hosting the file.
   *
   * @public
   */
  RepositoryType?: string | undefined;

  /**
   * A presigned URL that you can use to download the deployment package.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * URI of a container image in the Amazon ECR registry.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The resolved URI for the image.
   *
   * @public
   */
  ResolvedImageUri?: string | undefined;

  /**
   * The resolved Amazon S3 object that contains the deployment package.
   *
   * @public
   */
  ResolvedS3Object?: ResolvedS3Object | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).
   *
   * @public
   */
  SourceKMSKeyArn?: string | undefined;

  /**
   * An object that contains details about an error related to function deployment package retrieval.
   *
   * @public
   */
  Error?: FunctionCodeLocationError | undefined;
}

/**
 * @public
 */
export interface Concurrency {
  /**
   * The number of concurrent executions that are reserved for this function. For more information, see [Managing Lambda reserved concurrency](https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html).
   *
   * @public
   */
  ReservedConcurrentExecutions?: number | undefined;
}

/**
 * An object that contains details about an error related to retrieving tags.
 *
 * @public
 */
export interface TagsError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionResponse {
  /**
   * The configuration of the function or version.
   *
   * @public
   */
  Configuration?: FunctionConfiguration | undefined;

  /**
   * The deployment package of the function or version.
   *
   * @public
   */
  Code?: FunctionCodeLocation | undefined;

  /**
   * The function's [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html). Lambda returns tag data only if you have explicit allow permissions for [lambda:ListTags](https://docs.aws.amazon.com/lambda/latest/api/API_ListTags.html).
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * An object that contains details about an error related to retrieving tags.
   *
   * @public
   */
  TagsError?: TagsError | undefined;

  /**
   * The function's [reserved concurrency](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html).
   *
   * @public
   */
  Concurrency?: Concurrency | undefined;
}

/**
 * @public
 */
export interface GetFunctionCodeSigningConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionCodeSigningConfigResponse {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionConcurrencyRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionConcurrencyResponse {
  /**
   * The number of simultaneous executions that are reserved for the function.
   *
   * @public
   */
  ReservedConcurrentExecutions?: number | undefined;
}

/**
 * @public
 */
export interface GetFunctionConfigurationRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version or alias to get details about a published version of the function.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRecursionConfigRequest {
  /**
   * The name of the function.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionRecursionConfigResponse {
  /**
   * If your function's recursive loop detection configuration is `Allow`, Lambda doesn't take any action when it detects your function being invoked as part of a recursive loop.
   *
   * If your function's recursive loop detection configuration is `Terminate`, Lambda stops your function being invoked and notifies you when it detects your function being invoked as part of a recursive loop.
   *
   * By default, Lambda sets your function's configuration to `Terminate`. You can update this configuration using the PutFunctionRecursionConfig action.
   *
   * @public
   */
  RecursiveLoop?: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface GetFunctionScalingConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version or alias to get the scaling configuration for a published version of the function.
   *
   * @public
   */
  Qualifier: string | undefined;
}

/**
 * Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.
 *
 * @public
 */
export interface FunctionScalingConfig {
  /**
   * The minimum number of execution environments to maintain for the function.
   *
   * @public
   */
  MinExecutionEnvironments?: number | undefined;

  /**
   * The maximum number of execution environments that can be provisioned for the function.
   *
   * @public
   */
  MaxExecutionEnvironments?: number | undefined;
}

/**
 * @public
 */
export interface GetFunctionScalingConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The scaling configuration that is currently applied to the function. This represents the actual scaling settings in effect.
   *
   * @public
   */
  AppliedFunctionScalingConfig?: FunctionScalingConfig | undefined;

  /**
   * The scaling configuration that was requested for the function.
   *
   * @public
   */
  RequestedFunctionScalingConfig?: FunctionScalingConfig | undefined;
}

/**
 * @public
 */
export interface GetFunctionUrlConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetFunctionUrlConfigResponse {
  /**
   * The HTTP URL endpoint for your function.
   *
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * When the function URL was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * When the function URL configuration was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version or alias to get the policy for that resource.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The resource-based policy.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeManagementConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version of the function. This can be `$LATEST` or a published version number. If no value is specified, the configuration for the `$LATEST` version is returned.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetRuntimeManagementConfigResponse {
  /**
   * The current runtime update mode of the function.
   *
   * @public
   */
  UpdateRuntimeOn?: UpdateRuntimeOn | undefined;

  /**
   * The Amazon Resource Name (ARN) of your function.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The ARN of the runtime the function is configured to use. If the runtime update mode is **Manual**, the ARN is returned, otherwise `null` is returned.
   *
   * @public
   */
  RuntimeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface InvocationRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Choose from the following options.
   *
   * - `RequestResponse` (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API response includes the function response and additional data.
   * - `Event` – Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if one is configured). The API response only includes a status code.
   * - `DryRun` – Validate parameter values and verify that the user or role has permission to invoke the function.
   *
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * Set to `Tail` to include the execution log in the response. Applies to synchronously invoked functions only.
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object. Lambda passes the `ClientContext` object to your function for synchronous invocations only.
   *
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * A unique name for the durable execution. If you invoke a durable function using a name that already exists with the same payload, Lambda returns the existing execution instead of creating a duplicate. If the payload differs, Lambda returns a `DurableExecutionAlreadyStartedException` error.
   *
   * If not specified, Lambda generates a unique identifier automatically. For more information, see [Execution names](https://docs.aws.amazon.com/lambda/latest/dg/durable-execution-idempotency.html#durable-idempotency-execution-names).
   *
   * @public
   */
  DurableExecutionName?: string | undefined;

  /**
   * The JSON that you want to provide to your Lambda function as input. The maximum payload size is 6 MB for synchronous invocations and 1 MB for asynchronous invocations.
   *
   * You can enter the JSON directly. For example, `--payload '\{ "key": "value" \}'`. You can also specify a file path. For example, `--payload file://payload.json`.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;

  /**
   * Specify a version or alias to invoke a published version of the function.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The identifier of the tenant in a multi-tenant Lambda function.
   *
   * @public
   */
  TenantId?: string | undefined;
}

/**
 * @public
 */
export interface InvocationResponse {
  /**
   * The HTTP status code is in the 200 range for a successful request. For the `RequestResponse` invocation type, this status code is 200. For the `Event` invocation type, this status code is 202. For the `DryRun` invocation type, the status code is 204.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * If present, indicates that an error occurred during function execution. Details about the error are included in the response payload.
   *
   * @public
   */
  FunctionError?: string | undefined;

  /**
   * The last 4 KB of the execution log, which is base64-encoded.
   *
   * @public
   */
  LogResult?: string | undefined;

  /**
   * The response from the function, or an error object.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;

  /**
   * The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.
   *
   * @public
   */
  ExecutedVersion?: string | undefined;

  /**
   * The ARN of the durable execution that was started. This is returned when invoking a durable function and provides a unique identifier for tracking the execution.
   *
   * @public
   */
  DurableExecutionArn?: string | undefined;
}

/**
 * @deprecated deprecated.
 * @public
 */
export interface InvokeAsyncRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The JSON that you want to provide to your Lambda function as input.
   *
   * @public
   */
  InvokeArgs: StreamingBlobTypes | undefined;
}

/**
 * A success response (`202 Accepted`) indicates that the request is queued for invocation.
 *
 * @deprecated deprecated.
 * @public
 */
export interface InvokeAsyncResponse {
  /**
   * The status code.
   *
   * @public
   */
  Status?: number | undefined;
}

/**
 * @public
 */
export interface InvokeWithResponseStreamRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Set to `Tail` to include the execution log in the response. Applies to synchronously invoked functions only.
   *
   * @public
   */
  LogType?: LogType | undefined;

  /**
   * Up to 3,583 bytes of base64-encoded data about the invoking client to pass to the function in the context object.
   *
   * @public
   */
  ClientContext?: string | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The JSON that you want to provide to your Lambda function as input.
   *
   * You can enter the JSON directly. For example, `--payload '\{ "key": "value" \}'`. You can also specify a file path. For example, `--payload file://payload.json`.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;

  /**
   * The identifier of the tenant in a multi-tenant Lambda function.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * Use one of the following options:
   *
   * - `RequestResponse` (default) – Invoke the function synchronously. Keep the connection open until the function returns a response or times out. The API operation response includes the function response and additional data.
   * - `DryRun` – Validate parameter values and verify that the IAM user or role has permission to invoke the function.
   *
   * @public
   */
  InvocationType?: ResponseStreamingInvocationType | undefined;
}

/**
 * A response confirming that the event stream is complete.
 *
 * @public
 */
export interface InvokeWithResponseStreamCompleteEvent {
  /**
   * An error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The details of any returned error.
   *
   * @public
   */
  ErrorDetails?: string | undefined;

  /**
   * The last 4 KB of the execution log, which is base64-encoded.
   *
   * @public
   */
  LogResult?: string | undefined;
}

/**
 * A chunk of the streamed response payload.
 *
 * @public
 */
export interface InvokeResponseStreamUpdate {
  /**
   * Data returned by your Lambda function.
   *
   * @public
   */
  Payload?: Uint8Array | undefined;
}

/**
 * An object that includes a chunk of the response payload. When the stream has ended, Lambda includes a `InvokeComplete` object.
 *
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
   * A chunk of the streamed response payload.
   *
   * @public
   */
  export interface PayloadChunkMember {
    PayloadChunk: InvokeResponseStreamUpdate;
    InvokeComplete?: never;
    $unknown?: never;
  }

  /**
   * An object that's returned when the stream has ended and all the payload chunks have been returned.
   *
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
   * For a successful request, the HTTP status code is in the 200 range. For the `RequestResponse` invocation type, this status code is 200. For the `DryRun` invocation type, this status code is 204.
   *
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * The version of the function that executed. When you invoke a function with an alias, this indicates which version the alias resolved to.
   *
   * @public
   */
  ExecutedVersion?: string | undefined;

  /**
   * The stream of response payloads.
   *
   * @public
   */
  EventStream?: AsyncIterable<InvokeWithResponseStreamResponseEvent> | undefined;

  /**
   * The type of data the stream is returning.
   *
   * @public
   */
  ResponseStreamContentType?: string | undefined;
}

/**
 * @public
 */
export interface ListDurableExecutionsByFunctionRequest {
  /**
   * The name or ARN of the Lambda function. You can specify a function name, a partial ARN, or a full ARN.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The function version to filter executions by. If you don't specify a qualifier, this operation returns executions across all versions of the Lambda function.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * Filter executions by name. Only executions with names that matches this string are returned.
   *
   * @public
   */
  DurableExecutionName?: string | undefined;

  /**
   * Filter executions by status. Valid values: RUNNING, SUCCEEDED, FAILED, TIMED_OUT, STOPPED.
   *
   * @public
   */
  Statuses?: ExecutionStatus[] | undefined;

  /**
   * Filter executions that started after this timestamp (ISO 8601 format).
   *
   * @public
   */
  StartedAfter?: Date | undefined;

  /**
   * Filter executions that started before this timestamp (ISO 8601 format).
   *
   * @public
   */
  StartedBefore?: Date | undefined;

  /**
   * Set to true to return results in chronological order (oldest first). Default is false.
   *
   * @public
   */
  ReverseOrder?: boolean | undefined;

  /**
   * Pagination token from a previous request to continue retrieving results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Maximum number of executions to return (1-1000). Default is 100.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Information about a [durable execution](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html).
 *
 * @public
 */
export interface Execution {
  /**
   * The Amazon Resource Name (ARN) of the durable execution, if this execution is a durable execution.
   *
   * @public
   */
  DurableExecutionArn: string | undefined;

  /**
   * The unique name of the durable execution, if one was provided when the execution was started.
   *
   * @public
   */
  DurableExecutionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The current status of the durable execution.
   *
   * @public
   */
  Status: ExecutionStatus | undefined;

  /**
   * The date and time when the durable execution started, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  StartTimestamp: Date | undefined;

  /**
   * The date and time when the durable execution ended, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
   *
   * @public
   */
  KMSKeyArn?: string | undefined;
}

/**
 * The response from the ListDurableExecutionsByFunction operation, containing a list of durable executions and pagination information.
 *
 * @public
 */
export interface ListDurableExecutionsByFunctionResponse {
  /**
   * List of durable execution summaries matching the filter criteria.
   *
   * @public
   */
  DurableExecutions?: Execution[] | undefined;

  /**
   * Pagination token for retrieving additional results. Present only if there are more results available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionsRequest {
  /**
   * For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, `us-east-1` filters the list of functions to include only Lambda@Edge functions replicated from a master function in US East (N. Virginia). If specified, you must set `FunctionVersion` to `ALL`.
   *
   * @public
   */
  MasterRegion?: string | undefined;

  /**
   * Set to `ALL` to include entries for all published versions of each function.
   *
   * @public
   */
  FunctionVersion?: FunctionVersion | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of functions to return in the response. Note that `ListFunctions` returns a maximum of 50 items in each response, even if you set the number higher.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A list of Lambda functions.
 *
 * @public
 */
export interface ListFunctionsResponse {
  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of Lambda functions.
   *
   * @public
   */
  Functions?: FunctionConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListFunctionUrlConfigsRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of function URLs to return in the response. Note that `ListFunctionUrlConfigs` returns a maximum of 50 items in each response, even if you set the number higher.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Details about a Lambda function URL.
 *
 * @public
 */
export interface FunctionUrlConfig {
  /**
   * The HTTP URL endpoint for your function.
   *
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * When the function URL was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * When the function URL configuration was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface ListFunctionUrlConfigsResponse {
  /**
   * A list of function URL configurations.
   *
   * @public
   */
  FunctionUrlConfigs: FunctionUrlConfig[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Specify a number to limit the number of configurations returned.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Details about the provisioned concurrency configuration for a function alias or version.
 *
 * @public
 */
export interface ProvisionedConcurrencyConfigListItem {
  /**
   * The Amazon Resource Name (ARN) of the alias or version.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The amount of provisioned concurrency requested.
   *
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency available.
   *
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.
   *
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The status of the allocation process.
   *
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * For failed allocations, the reason that provisioned concurrency could not be allocated.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The date and time that a user last updated the configuration, in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html).
   *
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisionedConcurrencyConfigsResponse {
  /**
   * A list of provisioned concurrency configurations.
   *
   * @public
   */
  ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionCodeSigningConfigRequest {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionCodeSigningConfigResponse {
  /**
   * The The Amazon Resource Name (ARN) of the code signing configuration.
   *
   * @public
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionConcurrencyRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The number of simultaneous executions to reserve for the function.
   *
   * @public
   */
  ReservedConcurrentExecutions: number | undefined;
}

/**
 * @public
 */
export interface PutFunctionRecursionConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * If you set your function's recursive loop detection configuration to `Allow`, Lambda doesn't take any action when it detects your function being invoked as part of a recursive loop. We recommend that you only use this setting if your design intentionally uses a Lambda function to write data back to the same Amazon Web Services resource that invokes it.
   *
   * If you set your function's recursive loop detection configuration to `Terminate`, Lambda stops your function being invoked and notifies you when it detects your function being invoked as part of a recursive loop.
   *
   * By default, Lambda sets your function's configuration to `Terminate`.
   *
   * > **Important:** If your design intentionally uses a Lambda function to write data back to the same Amazon Web Services resource that invokes the function, then use caution and implement suitable guard rails to prevent unexpected charges being billed to your Amazon Web Services account. To learn more about best practices for using recursive invocation patterns, see [Recursive patterns that cause run-away Lambda functions](https://serverlessland.com/content/service/lambda/guides/aws-lambda-operator-guide/recursive-runaway) in Serverless Land.
   *
   * @public
   */
  RecursiveLoop: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface PutFunctionRecursionConfigResponse {
  /**
   * The status of your function's recursive loop detection configuration.
   *
   * When this value is set to `Allow`and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
   *
   * When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
   *
   * @public
   */
  RecursiveLoop?: RecursiveLoop | undefined;
}

/**
 * @public
 */
export interface PutFunctionScalingConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version or alias to set the scaling configuration for a published version of the function.
   *
   * @public
   */
  Qualifier: string | undefined;

  /**
   * The scaling configuration to apply to the function, including minimum and maximum execution environment limits.
   *
   * @public
   */
  FunctionScalingConfig?: FunctionScalingConfig | undefined;
}

/**
 * @public
 */
export interface PutFunctionScalingConfigResponse {
  /**
   * The current state of the function after applying the scaling configuration.
   *
   * @public
   */
  FunctionState?: State | undefined;
}

/**
 * @public
 */
export interface PutRuntimeManagementConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a version of the function. This can be `$LATEST` or a published version number. If no value is specified, the configuration for the `$LATEST` version is returned.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * Specify the runtime update mode.
   *
   * - **Auto (default)** - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
   * - **Function update** - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
   * - **Manual** - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
   *
   * @public
   */
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;

  /**
   * The ARN of the runtime version you want the function to use.
   *
   * > **Note:** This is only required if you're using the **Manual** runtime update mode.
   *
   * @public
   */
  RuntimeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface PutRuntimeManagementConfigResponse {
  /**
   * The runtime update mode.
   *
   * @public
   */
  UpdateRuntimeOn: UpdateRuntimeOn | undefined;

  /**
   * The ARN of the function
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The ARN of the runtime the function is configured to use. If the runtime update mode is **manual**, the ARN is returned, otherwise `null` is returned.
   *
   * @public
   */
  RuntimeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionCodeRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The base64-encoded contents of the deployment package. Amazon Web Services SDK and CLI clients handle the encoding for you. Use only with a function defined with a .zip file archive deployment package.
   *
   * @public
   */
  ZipFile?: Uint8Array | undefined;

  /**
   * An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account. Use only with a function defined with a .zip file archive deployment package.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of the deployment package. Use only with a function defined with a .zip file archive deployment package.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * For versioned objects, the version of the deployment package object to use.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * Specifies how the deployment package is stored. Valid values:
   *
   * - `COPY` (default) – Uploads a copy of your deployment package to Lambda.
   * - `REFERENCE` – Lambda references the deployment package from the specified Amazon S3 bucket.
   *
   * @public
   */
  S3ObjectStorageMode?: S3ObjectStorageMode | undefined;

  /**
   * URI of a container image in the Amazon ECR registry. Do not use for a function defined with a .zip file archive.
   *
   * @public
   */
  ImageUri?: string | undefined;

  /**
   * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.
   *
   * @public
   */
  Architectures?: Architecture[] | undefined;

  /**
   * Set to true to publish a new version of the function after updating the code. This has the same effect as calling PublishVersion separately.
   *
   * @public
   */
  Publish?: boolean | undefined;

  /**
   * Specifies where to publish the function version or configuration.
   *
   * @public
   */
  PublishTo?: FunctionVersionLatestPublished | undefined;

  /**
   * Set to true to validate the request parameters and access permissions without modifying the function code.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an Amazon Web Services managed key.
   *
   * @public
   */
  SourceKMSKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionConfigurationRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function's execution role.
   *
   * @public
   */
  Role?: string | undefined;

  /**
   * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
   *
   * @public
   */
  Handler?: string | undefined;

  /**
   * A description of the function.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds, and the maximum allowed value is 900 seconds. For functions using Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes). For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.
   *
   * @public
   */
  MemorySize?: number | undefined;

  /**
   * For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
   *
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * Environment variables that are accessible from function code during execution.
   *
   * @public
   */
  Environment?: Environment | undefined;

  /**
   * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
   *
   * The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  Runtime?: Runtime | undefined;

  /**
   * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * The ARN of the Key Management Service (KMS) customer managed key that's used to encrypt the following resources:
   *
   * - The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
   * - The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
   * - When used with `SourceKMSKeyArn`, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).
   * - The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).
   *
   * If you don't provide a customer managed key, Lambda uses an [Amazon Web Services owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [Amazon Web Services managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
   *
   * @public
   */
  KMSKeyArn?: string | undefined;

  /**
   * Set `Mode` to `Active` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
   *
   * @public
   */
  TracingConfig?: TracingConfig | undefined;

  /**
   * Update the function only if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
   *
   * @public
   */
  Layers?: string[] | undefined;

  /**
   * Connection settings for an Amazon EFS file system or an Amazon S3 Files file system.
   *
   * @public
   */
  FileSystemConfigs?: FileSystemConfig[] | undefined;

  /**
   * [Container image configuration values](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms) that override the values in the container image Docker file.
   *
   * @public
   */
  ImageConfig?: ImageConfig | undefined;

  /**
   * The size of the function's `/tmp` directory in MB. The default value is 512, but can be any whole number between 512 and 10,240 MB. For more information, see [Configuring ephemeral storage (console)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-ephemeral-storage).
   *
   * @public
   */
  EphemeralStorage?: EphemeralStorage | undefined;

  /**
   * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
   *
   * @public
   */
  SnapStart?: SnapStart | undefined;

  /**
   * The function's Amazon CloudWatch Logs configuration settings.
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * Configuration for the capacity provider that manages compute resources for Lambda functions.
   *
   * @public
   */
  CapacityProviderConfig?: CapacityProviderConfig | undefined;

  /**
   * Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout, retention period for execution history, and an optional ARN of the Key Management Service (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
   *
   * @public
   */
  DurableConfig?: DurableConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionUrlConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType?: FunctionUrlAuthType | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionUrlConfigResponse {
  /**
   * The HTTP URL endpoint for your function.
   *
   * @public
   */
  FunctionUrl: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of your function.
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Control access to Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
   *
   * @public
   */
  AuthType: FunctionUrlAuthType | undefined;

  /**
   * The [cross-origin resource sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings for your function URL.
   *
   * @public
   */
  Cors?: Cors | undefined;

  /**
   * When the function URL was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreationTime: string | undefined;

  /**
   * When the function URL configuration was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime: string | undefined;

  /**
   * Use one of the following options:
   *
   * - `BUFFERED` – This is the default option. Lambda invokes your function using the `Invoke` API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB.
   * - `RESPONSE_STREAM` – Your function streams payload results as they become available. Lambda invokes your function using the `InvokeWithResponseStream` API operation. The maximum response payload size is 200 MB.
   *
   * @public
   */
  InvokeMode?: InvokeMode | undefined;
}

/**
 * @public
 */
export interface CreateAliasRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The function version that the alias invokes.
   *
   * @public
   */
  FunctionVersion: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing) of the alias.
   *
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteAliasRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetAliasRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListAliasesRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify a function version to only list aliases that invoke that version.
   *
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * Limit the number of aliases returned.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListAliasesResponse {
  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of aliases.
   *
   * @public
   */
  Aliases?: AliasConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateAliasRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The name of the alias.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The function version that the alias invokes.
   *
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The [routing configuration](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing) of the alias.
   *
   * @public
   */
  RoutingConfig?: AliasRoutingConfiguration | undefined;

  /**
   * Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying an alias that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListVersionsByFunctionRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of versions to return. Note that `ListVersionsByFunction` returns a maximum of 50 items in each response, even if you set the number higher.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListVersionsByFunctionResponse {
  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of Lambda function versions.
   *
   * @public
   */
  Versions?: FunctionConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PublishVersionRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `MyFunction`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:MyFunction`.
   * - **Partial ARN** - `123456789012:function:MyFunction`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. You can get the hash for the version that you uploaded from the output of UpdateFunctionCode.
   *
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * A description for the version to override the description in the function configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Only update the function if the revision ID matches the ID that's specified. Use this option to avoid publishing a version if the function configuration has changed since you last updated it.
   *
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * Specifies where to publish the function version or configuration.
   *
   * @public
   */
  PublishTo?: FunctionVersionLatestPublished | undefined;
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
   * Limits that are related to concurrency and code storage.
   *
   * @public
   */
  AccountLimit?: AccountLimit | undefined;

  /**
   * The number of functions and amount of storage in use.
   *
   * @public
   */
  AccountUsage?: AccountUsage | undefined;
}

/**
 * @public
 */
export interface FunctionEventInvokeConfig {
  /**
   * The date and time that the configuration was last updated.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function.
   *
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * The maximum number of times to retry when the function returns an error.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The maximum age of a request that Lambda sends to a function for processing.
   *
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * A destination for events after they have been sent to a function for processing.
   *
   * **Destinations**
   *
   * - **Function** - The Amazon Resource Name (ARN) of a Lambda function.
   * - **Queue** - The ARN of a standard SQS queue.
   * - **Bucket** - The ARN of an Amazon S3 bucket.
   * - **Topic** - The ARN of a standard SNS topic.
   * - **Event Bus** - The ARN of an Amazon EventBridge event bus.
   *
   * > **Note:** S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface GetFunctionEventInvokeConfigRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** - `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** - `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A version number or alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Lambda resource you want to retrieve the policy for. You can use a qualified or an unqualified ARN. The value must be a complete ARN, and the operation does not accept wildcard characters.
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
   * The resource-based policy attached to the Lambda resource you specified.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The revision ID of the policy. Pass this value as the `RevisionId` in a PutResourcePolicy or DeleteResourcePolicy request. Doing so ensures the operation acts on the expected version of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListLayersRequest {
  /**
   * The compatible [instruction set architecture](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitecture?: Architecture | undefined;

  /**
   * A runtime identifier.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  CompatibleRuntime?: Runtime | undefined;

  /**
   * A pagination token returned by a previous call.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of layers to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Details about a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).
 *
 * @public
 */
export interface LayerVersionsListItem {
  /**
   * The ARN of the layer version.
   *
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date that the version was created, in ISO 8601 format. For example, `2018-11-27T15:10:45.123+0000`.
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;

  /**
   * The layer's compatible runtimes.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * The layer's open-source license.
   *
   * @public
   */
  LicenseInfo?: string | undefined;
}

/**
 * Details about an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).
 *
 * @public
 */
export interface LayersListItem {
  /**
   * The name of the layer.
   *
   * @public
   */
  LayerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function layer.
   *
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * The newest version of the layer.
   *
   * @public
   */
  LatestMatchingVersion?: LayerVersionsListItem | undefined;
}

/**
 * @public
 */
export interface ListLayersResponse {
  /**
   * A pagination token returned when the response doesn't contain all layers.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of function layers.
   *
   * @public
   */
  Layers?: LayersListItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteLayerVersionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * Details about a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html).
 *
 * @public
 */
export interface LayerVersionContentOutput {
  /**
   * A link to the layer archive in Amazon S3 that is valid for 10 minutes.
   *
   * @public
   */
  Location?: string | undefined;

  /**
   * The SHA-256 hash of the layer archive.
   *
   * @public
   */
  CodeSha256?: string | undefined;

  /**
   * The size of the layer archive in bytes.
   *
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) for a signing profile version.
   *
   * @public
   */
  SigningProfileVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a signing job.
   *
   * @public
   */
  SigningJobArn?: string | undefined;

  /**
   * The resolved Amazon S3 object that contains the layer archive.
   *
   * @public
   */
  ResolvedS3Object?: ResolvedS3Object | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionResponse {
  /**
   * Details about the layer version.
   *
   * @public
   */
  Content?: LayerVersionContentOutput | undefined;

  /**
   * The ARN of the layer.
   *
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * The ARN of the layer version.
   *
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date that the layer version was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;

  /**
   * The layer's compatible runtimes.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * The layer's software license.
   *
   * @public
   */
  LicenseInfo?: string | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionByArnRequest {
  /**
   * The ARN of the layer version.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionPolicyRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber: number | undefined;
}

/**
 * @public
 */
export interface GetLayerVersionPolicyResponse {
  /**
   * The policy document.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * A unique identifier for the current revision of the policy.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListLayerVersionsRequest {
  /**
   * The compatible [instruction set architecture](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitecture?: Architecture | undefined;

  /**
   * A runtime identifier.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  CompatibleRuntime?: Runtime | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * A pagination token returned by a previous call.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of versions to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListLayerVersionsResponse {
  /**
   * A pagination token returned when the response doesn't contain all versions.
   *
   * @public
   */
  NextMarker?: string | undefined;

  /**
   * A list of versions.
   *
   * @public
   */
  LayerVersions?: LayerVersionsListItem[] | undefined;
}

/**
 * A ZIP archive that contains the contents of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). You can specify either an Amazon S3 location, or upload a layer archive directly.
 *
 * @public
 */
export interface LayerVersionContentInput {
  /**
   * The Amazon S3 bucket of the layer archive.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key of the layer archive.
   *
   * @public
   */
  S3Key?: string | undefined;

  /**
   * For versioned objects, the version of the layer archive object to use.
   *
   * @public
   */
  S3ObjectVersion?: string | undefined;

  /**
   * Specifies how the layer archive is stored. Valid values:
   *
   * - `COPY` (default) – Uploads a copy of your layer archive to Lambda.
   * - `REFERENCE` – Lambda references the layer archive from the specified Amazon S3 bucket.
   *
   * @public
   */
  S3ObjectStorageMode?: S3ObjectStorageMode | undefined;

  /**
   * The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for you.
   *
   * @public
   */
  ZipFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PublishLayerVersionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The function layer archive.
   *
   * @public
   */
  Content: LayerVersionContentInput | undefined;

  /**
   * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;

  /**
   * A list of compatible [function runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Used for filtering with ListLayers and ListLayerVersions.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime deprecation policy](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy).
   *
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * The layer's software license. It can be any of the following:
   *
   * - An [SPDX license identifier](https://spdx.org/licenses/). For example, `MIT`.
   * - The URL of a license hosted on the internet. For example, `https://opensource.org/licenses/MIT`.
   * - The full text of the license.
   *
   * @public
   */
  LicenseInfo?: string | undefined;
}

/**
 * @public
 */
export interface PublishLayerVersionResponse {
  /**
   * Details about the layer version.
   *
   * @public
   */
  Content?: LayerVersionContentOutput | undefined;

  /**
   * The ARN of the layer.
   *
   * @public
   */
  LayerArn?: string | undefined;

  /**
   * The ARN of the layer version.
   *
   * @public
   */
  LayerVersionArn?: string | undefined;

  /**
   * The description of the version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date that the layer version was created, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  Version?: number | undefined;

  /**
   * A list of compatible [instruction set architectures](https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html).
   *
   * @public
   */
  CompatibleArchitectures?: Architecture[] | undefined;

  /**
   * The layer's compatible runtimes.
   *
   * The following list includes deprecated runtimes. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
   *
   * For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
   *
   * @public
   */
  CompatibleRuntimes?: Runtime[] | undefined;

  /**
   * The layer's software license.
   *
   * @public
   */
  LicenseInfo?: string | undefined;
}

/**
 * @public
 */
export interface RemoveLayerVersionPermissionRequest {
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * @public
   */
  LayerName: string | undefined;

  /**
   * The version number.
   *
   * @public
   */
  VersionNumber: number | undefined;

  /**
   * The identifier that was specified when the statement was added.
   *
   * @public
   */
  StatementId: string | undefined;

  /**
   * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** - `my-function`.
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** - `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Specify the pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of configurations to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * @public
 */
export interface ListFunctionEventInvokeConfigsResponse {
  /**
   * A list of configurations.
   *
   * @public
   */
  FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[] | undefined;

  /**
   * The pagination token that's included if more results are available.
   *
   * @public
   */
  NextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The resource's Amazon Resource Name (ARN). Note: Lambda does not support adding tags to function aliases or versions.
   *
   * @public
   */
  Resource: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * The function's tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * Statement ID of the permission to remove.
   *
   * @public
   */
  StatementId: string | undefined;

  /**
   * Specify a version or alias to remove permissions from a published version of the function.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * Update the policy only if the revision ID matches the ID that's specified. Use this option to avoid modifying a policy that has changed since you last read it.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The version number or alias name.
   *
   * @public
   */
  Qualifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The version number or alias name.
   *
   * @public
   */
  Qualifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * The amount of provisioned concurrency requested.
   *
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency available.
   *
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.
   *
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The status of the allocation process.
   *
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * For failed allocations, the reason that provisioned concurrency could not be allocated.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The date and time that a user last updated the configuration, in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html).
   *
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * The name or ARN of the Lambda function.
   *
   * **Name formats**
   *
   * - **Function name** – `my-function`.
   * - **Function ARN** – `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** – `123456789012:function:my-function`.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * The version number or alias name.
   *
   * @public
   */
  Qualifier: string | undefined;

  /**
   * The amount of provisioned concurrency to allocate for the version or alias.
   *
   * @public
   */
  ProvisionedConcurrentExecutions: number | undefined;
}

/**
 * @public
 */
export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * The amount of provisioned concurrency requested.
   *
   * @public
   */
  RequestedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency allocated. When a weighted alias is used during linear and canary deployments, this value fluctuates depending on the amount of concurrency that is provisioned for the function versions.
   *
   * @public
   */
  AllocatedProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The amount of provisioned concurrency available.
   *
   * @public
   */
  AvailableProvisionedConcurrentExecutions?: number | undefined;

  /**
   * The status of the allocation process.
   *
   * @public
   */
  Status?: ProvisionedConcurrencyStatusEnum | undefined;

  /**
   * For failed allocations, the reason that provisioned concurrency could not be allocated.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The date and time that a user last updated the configuration, in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html).
   *
   * @public
   */
  LastModified?: string | undefined;
}

/**
 * @public
 */
export interface PutFunctionEventInvokeConfigRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** - `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** - `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A version number or alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The maximum number of times to retry when the function returns an error.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The maximum age of a request that Lambda sends to a function for processing.
   *
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * A destination for events after they have been sent to a function for processing.
   *
   * **Destinations**
   *
   * - **Function** - The Amazon Resource Name (ARN) of a Lambda function.
   * - **Queue** - The ARN of a standard SQS queue.
   * - **Bucket** - The ARN of an Amazon S3 bucket.
   * - **Topic** - The ARN of a standard SNS topic.
   * - **Event Bus** - The ARN of an Amazon EventBridge event bus.
   *
   * > **Note:** S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Lambda resource you want to add the policy to. You can use a qualified or an unqualified ARN. The value must be a complete ARN, and the operation does not accept wildcard characters.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The policy document you want to add to your Lambda resource. This is formatted as a JSON string.
   *
   * For more information, see [Working with resource-based policies in Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html) in the *Lambda Developer Guide*.
   *
   * @public
   */
  Policy: string | undefined;

  /**
   * The revision ID that the existing policy must match for the replacement to proceed. If the revision ID doesn't match, the operation fails with a `PreconditionFailedException` error. To retrieve the current revision ID, use the GetResourcePolicy operation.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The resource-based policy that Lambda adds to the resource.
   *
   * @public
   */
  Policy?: string | undefined;

  /**
   * The revision ID of the policy that Lambda adds to your Lambda resource.
   *
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface SendDurableExecutionCallbackFailureRequest {
  /**
   * The unique identifier for the callback operation.
   *
   * @public
   */
  CallbackId: string | undefined;

  /**
   * Error details describing why the callback operation failed. The combined size of all error fields is limited to 1 MB.
   *
   * @public
   */
  Error?: ErrorObject | undefined;
}

/**
 * @public
 */
export interface SendDurableExecutionCallbackFailureResponse {}

/**
 * @public
 */
export interface SendDurableExecutionCallbackHeartbeatRequest {
  /**
   * The unique identifier for the callback operation.
   *
   * @public
   */
  CallbackId: string | undefined;
}

/**
 * @public
 */
export interface SendDurableExecutionCallbackHeartbeatResponse {}

/**
 * @public
 */
export interface SendDurableExecutionCallbackSuccessRequest {
  /**
   * The unique identifier for the callback operation.
   *
   * @public
   */
  CallbackId: string | undefined;

  /**
   * The result data from the successful callback operation. Maximum size is 1 MB.
   *
   * @public
   */
  Result?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SendDurableExecutionCallbackSuccessResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource's Amazon Resource Name (ARN).
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A list of tags to apply to the resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The resource's Amazon Resource Name (ARN).
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * A list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateFunctionEventInvokeConfigRequest {
  /**
   * The name or ARN of the Lambda function, version, or alias.
   *
   * **Name formats**
   *
   * - **Function name** - `my-function` (name-only), `my-function:v1` (with alias).
   * - **Function ARN** - `arn:aws:lambda:us-west-2:123456789012:function:my-function`.
   * - **Partial ARN** - `123456789012:function:my-function`.
   *
   * You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  FunctionName: string | undefined;

  /**
   * A version number or alias name.
   *
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * The maximum number of times to retry when the function returns an error.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The maximum age of a request that Lambda sends to a function for processing.
   *
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;

  /**
   * A destination for events after they have been sent to a function for processing.
   *
   * **Destinations**
   *
   * - **Function** - The Amazon Resource Name (ARN) of a Lambda function.
   * - **Queue** - The ARN of a standard SQS queue.
   * - **Bucket** - The ARN of an Amazon S3 bucket.
   * - **Topic** - The ARN of a standard SNS topic.
   * - **Event Bus** - The ARN of an Amazon EventBridge event bus.
   *
   * > **Note:** S3 buckets are supported only for on-failure destinations. To retain records of successful invocations, use another destination type.
   *
   * @public
   */
  DestinationConfig?: DestinationConfig | undefined;
}
