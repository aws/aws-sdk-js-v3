// smithy-typescript generated code
import type {
  ApplicationLogLevel,
  AuthType,
  AutoDeploymentMode,
  EndpointState,
  EndpointType,
  EndpointUpdateStatus,
  FunctionState,
  RevisionState,
  SystemLogLevel,
} from "./enums";

/**
 * <p>The quotas that apply to web functions in your account in the current AWS Region.</p>
 * @public
 */
export interface AccountQuotas {
  /**
   * <p>The maximum total number of Arm vCPUs that you can allocate across all of your web functions in the current AWS Region.</p>
   * @public
   */
  maxTotalArmVCpus: number | undefined;

  /**
   * <p>The maximum number of requests per second allowed across all of your web function endpoints in your account in the current AWS Region.</p>
   * @public
   */
  maxTotalRateLimit: number | undefined;

  /**
   * <p>The maximum number of revisions that a single web function can have.</p>
   * @public
   */
  maxRevisionsPerFunction: number | undefined;

  /**
   * <p>The maximum number of endpoints that a single web function can have.</p>
   * @public
   */
  maxEndpointsPerFunction: number | undefined;
}

/**
 * <p>Contains your current web function usage for the current AWS Region.</p>
 * @public
 */
export interface AccountUsage {
  /**
   * <p>The number of web functions in your account in the current AWS Region.</p>
   * @public
   */
  functionCount: number | undefined;
}

/**
 * <p>The Amazon S3 location of a deployment artifact.</p>
 * @public
 */
export interface S3Object {
  /**
   * <p>The name of the Amazon S3 bucket. Must be between 3 and 63 characters.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The Amazon S3 object key. Must be between 1 and 1024 characters.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The version ID of the Amazon S3 object.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>The code configuration specifying the location of the deployment artifact.</p>
 * @public
 */
export interface CodeConfig {
  /**
   * <p>The Amazon S3 location of the deployment artifact.</p>
   * @public
   */
  s3Object: S3Object | undefined;
}

/**
 * <p>The runtime configuration for a web function revision.</p>
 * @public
 */
export interface RuntimeConfig {
  /**
   * <p>The runtime identifier for the web function (for example, a Node.js runtime identifier).</p>
   * @public
   */
  runtime: string | undefined;
}

/**
 * <p>The build configuration for a web function revision, including code location and runtime settings.</p>
 * @public
 */
export interface BuildConfig {
  /**
   * <p>The code configuration specifying where the deployment artifact is stored.</p>
   * @public
   */
  codeConfig: CodeConfig | undefined;

  /**
   * <p>The runtime configuration for the revision.</p>
   * @public
   */
  runtimeConfig: RuntimeConfig | undefined;
}

/**
 * <p>The scaling configuration for a web function endpoint.</p>
 * @public
 */
export interface ScalingConfig {
  /**
   * <p>The maximum number of concurrent execution environments for the endpoint. Minimum value of 2, maximum value of 10000. There is no default value. If you don't specify a value, the scaling configuration is absent from the response. On an update, omit <code>scalingConfig</code> to keep the current value, or specify an empty object to clear a previously set value.</p>
   * @public
   */
  maxEnvironments?: number | undefined;
}

/**
 * <p>The throttling configuration for a web function endpoint.</p>
 * @public
 */
export interface ThrottleConfig {
  /**
   * <p>The maximum request rate per second for the endpoint. The value must be one of the following supported values: <code>0</code>, <code>100</code>, <code>200</code>, <code>300</code>, <code>400</code>, <code>500</code>, <code>600</code>, <code>700</code>, <code>800</code>, <code>900</code>, <code>1000</code>, <code>2000</code>, <code>3000</code>, <code>4000</code>, <code>5000</code>, <code>6000</code>, <code>7000</code>, <code>8000</code>, <code>9000</code>, or <code>10000</code>. The maximum effective value is also bounded by your account-level maximum total rate limit. There is no default value. If you don't specify a value, the throttling configuration is absent from the response. On an update, omit <code>throttleConfig</code> to keep the current value, or specify an empty object to clear a previously set value.</p>
   * @public
   */
  rateLimit?: number | undefined;
}

/**
 * <p>The configuration for a web function endpoint.</p>
 * @public
 */
export interface EndpointConfig {
  /**
   * <p>The name of the endpoint. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of endpoint. Determines how traffic is served and routed across Regions.</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The authorization type for the endpoint.</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for the endpoint. If you don't specify a value, the default is <code>Disabled</code>, and this default is returned in the response.</p>
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * <p>The list of Regions for the endpoint. Required when the endpoint type is <code>MultiRegion</code> or <code>PerRegion</code>: specify at least one Region other than the Region where you create the endpoint (the home Region). The home Region is added automatically if you don't include it; specifying only the home Region isn't allowed. When the endpoint type is <code>HomeRegion</code>, omit this field or specify only the home Region.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The scaling configuration for the endpoint.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for the endpoint.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * <p>The logging configuration for a web function revision.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>The name of the Amazon CloudWatch Logs log group the web function sends logs to. If you don't specify a value, the default is <code>/aws/lambda/web/\{functionName\}</code>, and this default is returned in the response.</p>
   * @public
   */
  logGroup?: string | undefined;

  /**
   * <p>The log level for application logs emitted by the web function. If you don't specify a value, the default is <code>INFO</code>, and this default is returned in the response.</p>
   * @public
   */
  applicationLogLevel?: ApplicationLogLevel | undefined;

  /**
   * <p>The log level for system logs emitted by the Lambda runtime. If you don't specify a value, the default is <code>INFO</code>, and this default is returned in the response.</p>
   * @public
   */
  systemLogLevel?: SystemLogLevel | undefined;
}

/**
 * <p>The telemetry configuration for a web function revision.</p>
 * @public
 */
export interface TelemetryConfig {
  /**
   * <p>The logging configuration for the web function.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;
}

/**
 * <p>The service configuration for a web function revision, including execution role, timeout, concurrency, and telemetry settings.</p>
 * @public
 */
export interface ServiceConfig {
  /**
   * <p>The ARN of the IAM role that the web function assumes when it runs. This role provides permissions to access AWS services and resources.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The amount of time (in seconds) that Lambda allows the web function to run before stopping it. Minimum value of 3, maximum value of 900. If you don't specify a value, the default is 30, and this default is returned in the response.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The maximum number of concurrent requests handled per execution environment. Minimum value of 1, maximum value of 128. If you don't specify a value, the default is 64, and this default is returned in the response.</p>
   * @public
   */
  maxConcurrencyPerEnvironment?: number | undefined;

  /**
   * <p>A map of environment variable key-value pairs available to the web function at runtime. Environment variable values are sensitive.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The telemetry configuration for the web function, including logging settings.</p>
   * @public
   */
  telemetryConfig?: TelemetryConfig | undefined;
}

/**
 * <p>The configuration for a web function revision, including code build settings and service configuration.</p>
 * @public
 */
export interface RevisionConfig {
  /**
   * <p>A description of the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the revision's code and environment variables.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The build configuration for the revision.</p>
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * <p>The service configuration for the revision.</p>
   * @public
   */
  serviceConfig: ServiceConfig | undefined;
}

/**
 * <p>The request to create a web function.</p>
 * @public
 */
export interface CreateWebFunctionRequest {
  /**
   * <p>The name of the web function. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The configuration for the initial revision of the web function, including code and service settings.</p>
   * @public
   */
  revisionConfig?: RevisionConfig | undefined;

  /**
   * <p>The configuration for the initial endpoint of the web function.</p>
   * @public
   */
  endpointConfig?: EndpointConfig | undefined;

  /**
   * <p>A map of tag keys and values to apply to the web function.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Specifies a revision and its traffic weight for an endpoint. Up to two revisions can be assigned weights to split traffic for canary or blue-green deployments.</p>
 * @public
 */
export interface RevisionWeight {
  /**
   * <p>The identifier of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The percentage of traffic to route to this revision. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  weight: number | undefined;
}

/**
 * <p>A summary of a web function endpoint.</p>
 * @public
 */
export interface FunctionEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the endpoint.</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The domain name of the endpoint.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The authorization type for the endpoint.</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for the endpoint.</p>
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * <p>The revision weights for the endpoint.</p>
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * <p>The list of Regions for the endpoint.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The scaling configuration for the endpoint. This field is absent if the endpoint has no scaling configuration.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for the endpoint. This field is absent if the endpoint has no throttling configuration.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * <p>The current state of the endpoint.</p>
   * @public
   */
  state: EndpointState | undefined;

  /**
   * <p>The reason for the current state of the endpoint.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The status of the most recent update to the endpoint.</p>
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * <p>The reason for the current update status of the endpoint.</p>
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * <p>The date and time the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>A summary of a web function revision.</p>
 * @public
 */
export interface FunctionRevisionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the revision.</p>
   * @public
   */
  revisionArn: string | undefined;

  /**
   * <p>The identifier of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>A description of the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current state of the revision.</p>
   * @public
   */
  state: RevisionState | undefined;

  /**
   * <p>The reason for the current state of the revision.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The date and time the revision was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Contains details about the created web function.</p>
 * @public
 */
export interface CreateWebFunctionResponse {
  /**
   * <p>The name of the web function.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The current state of the web function.</p>
   * @public
   */
  state: FunctionState | undefined;

  /**
   * <p>The reason for the current state of the web function.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The date and time the web function was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the web function was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A summary of the initial revision created with the web function.</p>
   * @public
   */
  revision?: FunctionRevisionSummary | undefined;

  /**
   * <p>A summary of the initial endpoint created with the web function.</p>
   * @public
   */
  endpoint?: FunctionEndpointSummary | undefined;

  /**
   * <p>A map of tag keys and values associated with the web function.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The request to create a web function endpoint.</p>
 * @public
 */
export interface CreateWebFunctionEndpointRequest {
  /**
   * <p>The name of the web function to create the endpoint for. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The name of the endpoint to create. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of endpoint to create. Determines how traffic is served and routed across Regions.</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The authorization type for the endpoint.</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for the endpoint. Controls whether the endpoint automatically serves the newest revision. If you don't specify a value, the default is <code>Disabled</code>, and this default is returned in the response.</p>
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * <p>A list of revision weights that determine how traffic is distributed across revisions. Up to two revisions can be specified for canary or blue-green deployments.</p>
   * @public
   */
  revisionWeights?: RevisionWeight[] | undefined;

  /**
   * <p>The list of Regions for the endpoint. Required when the endpoint type is <code>MultiRegion</code> or <code>PerRegion</code>: specify at least one Region other than the Region where you create the endpoint (the home Region). The home Region is added automatically if you don't include it; specifying only the home Region isn't allowed. When the endpoint type is <code>HomeRegion</code>, omit this field or specify only the home Region.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The scaling configuration for the endpoint. There is no default value. If you don't specify a scaling configuration, it is absent from the response.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for the endpoint. There is no default value. If you don't specify a throttling configuration, it is absent from the response.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * <p>Represents the endpoint configuration and state in a specific Region.</p>
 * @public
 */
export interface RegionalEndpoint {
  /**
   * <p>The domain name of the regional endpoint.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The authorization type for the regional endpoint.</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The revision weights for the regional endpoint.</p>
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * <p>The scaling configuration for the regional endpoint. This field is absent if the endpoint has no scaling configuration.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for the regional endpoint. This field is absent if the endpoint has no throttling configuration.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * <p>The current state of the regional endpoint.</p>
   * @public
   */
  state: EndpointState | undefined;

  /**
   * <p>The reason for the current state of the regional endpoint.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The status of the most recent update to the regional endpoint.</p>
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * <p>The reason for the current update status of the regional endpoint.</p>
   * @public
   */
  updateStatusReason?: string | undefined;
}

/**
 * <p>Contains details about the created endpoint.</p>
 * @public
 */
export interface CreateWebFunctionEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of a web function endpoint. Possible values: <code>HomeRegion</code> (serves from the Region where the function was created), <code>MultiRegion</code> (replicates across chosen Regions and routes to the nearest), <code>PerRegion</code> (separate endpoint per Region).</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The domain name assigned to the endpoint.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The authorization type for a web function endpoint. Possible values: <code>ApplicationManaged</code> (the function handles authorization), <code>IamAuth</code> (Lambda authorizes requests with AWS SigV4 and IAM).</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for a web function endpoint. Possible values: <code>LatestRevision</code> (endpoint automatically serves the newest revision), <code>Disabled</code> (revision routing is fixed until explicitly changed).</p>
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * <p>The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.</p>
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * <p>The Regions configured for the endpoint.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The scaling configuration for a web function endpoint.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for a web function endpoint.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * <p>The current state of the endpoint.</p>
   * @public
   */
  state: EndpointState | undefined;

  /**
   * <p>The reason for the current state of the endpoint.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The status of the most recent update to an endpoint. Possible values: <code>InProgress</code> (update is in progress), <code>Successful</code> (update completed successfully), <code>Failed</code> (update failed).</p>
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * <p>The reason for the endpoint's most recent update status.</p>
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * <p>The list of regional endpoint configurations.</p>
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * <p>The date and time the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The request to create a web function revision.</p>
 * @public
 */
export interface CreateWebFunctionRevisionRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>A description of the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the revision's code and environment variables.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The build configuration for the revision, including code location and runtime settings.</p>
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * <p>The service configuration for the revision, including execution role, timeout, and concurrency settings.</p>
   * @public
   */
  serviceConfig: ServiceConfig | undefined;
}

/**
 * <p>A single error encountered while creating or reading a web function revision. The error describes the affected attribute, an error code, and a human-readable message. This structure is present only when the revision has errors.</p>
 * @public
 */
export interface RevisionError {
  /**
   * <p>The name of the revision attribute that the error applies to. Must be between 1 and 64 characters.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>A short, machine-readable code that identifies the error. Must be between 1 and 64 characters.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>A human-readable message describing the error. Must be between 1 and 2048 characters.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>Contains details about the created revision.</p>
 * @public
 */
export interface CreateWebFunctionRevisionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the revision.</p>
   * @public
   */
  revisionArn: string | undefined;

  /**
   * <p>The identifier of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The description of the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the revision's code and environment variables.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The build configuration for a web function revision, including code location and runtime settings.</p>
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * <p>The service configuration for a web function revision, including execution role, timeout, concurrency, and telemetry settings.</p>
   * @public
   */
  serviceConfig: ServiceConfig | undefined;

  /**
   * <p>The current state of the revision.</p>
   * @public
   */
  state: RevisionState | undefined;

  /**
   * <p>The reason for the current state of the revision.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>A list of errors encountered during revision creation. This field is absent when the revision has no errors.</p>
   * @public
   */
  errors?: RevisionError[] | undefined;

  /**
   * <p>The date and time the revision was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>The request to delete a resource-based policy.</p>
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The revision ID of the policy. Use this to prevent deleting a policy that has been updated since you last retrieved it. If you don't specify a value, the policy is deleted regardless of its current revision.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * <p>The request to delete a web function.</p>
 * @public
 */
export interface DeleteWebFunctionRequest {
  /**
   * <p>The name of the web function to delete. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;
}

/**
 * <p>The request to delete a web function endpoint.</p>
 * @public
 */
export interface DeleteWebFunctionEndpointRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The name of the endpoint to delete. You can specify the endpoint name or the endpoint ARN. The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * <p>The request to delete a web function revision.</p>
 * @public
 */
export interface DeleteWebFunctionRevisionRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The identifier of the revision to delete. You can specify the revision identifier or the revision ARN. The length constraint applies only to the full ARN.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>A filter to apply when listing resources.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values to match for the filter.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>A summary of a web function.</p>
 * @public
 */
export interface FunctionSummary {
  /**
   * <p>The name of the web function.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The current state of the web function.</p>
   * @public
   */
  state: FunctionState | undefined;

  /**
   * <p>The reason for the current state of the web function.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The date and time the web function was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the web function was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The request to retrieve a resource-based policy.</p>
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Contains the resource-based policy and its revision ID.</p>
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The JSON-formatted resource-based policy attached to the web function.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>The revision ID of the policy.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetWebAccountSettingsRequest {}

/**
 * <p>Contains your AWS Lambda Web Functions account quotas and usage for the current AWS Region.</p>
 * @public
 */
export interface GetWebAccountSettingsResponse {
  /**
   * <p>The quotas that apply to web functions in your account in the current AWS Region.</p>
   * @public
   */
  accountQuotas: AccountQuotas | undefined;

  /**
   * <p>The current web function usage for your account in the current AWS Region.</p>
   * @public
   */
  accountUsage: AccountUsage | undefined;
}

/**
 * <p>The request to retrieve a web function.</p>
 * @public
 */
export interface GetWebFunctionRequest {
  /**
   * <p>The name of the web function to retrieve. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;
}

/**
 * <p>Contains details about the web function.</p>
 * @public
 */
export interface GetWebFunctionResponse {
  /**
   * <p>The name of the web function.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The current state of the web function.</p>
   * @public
   */
  state: FunctionState | undefined;

  /**
   * <p>The reason for the current state of the web function.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The date and time the web function was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the web function was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The request to retrieve a web function endpoint.</p>
 * @public
 */
export interface GetWebFunctionEndpointRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The name of the endpoint to retrieve. You can specify the endpoint name or the endpoint ARN. The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * <p>Contains details about the web function endpoint.</p>
 * @public
 */
export interface GetWebFunctionEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of a web function endpoint. Possible values: <code>HomeRegion</code> (serves from the Region where the function was created), <code>MultiRegion</code> (replicates across chosen Regions and routes to the nearest), <code>PerRegion</code> (separate endpoint per Region).</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The domain name assigned to the endpoint.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The authorization type for a web function endpoint. Possible values: <code>ApplicationManaged</code> (the function handles authorization), <code>IamAuth</code> (Lambda authorizes requests with AWS SigV4 and IAM).</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for a web function endpoint. Possible values: <code>LatestRevision</code> (endpoint automatically serves the newest revision), <code>Disabled</code> (revision routing is fixed until explicitly changed).</p>
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * <p>The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.</p>
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * <p>The Regions configured for the endpoint.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The scaling configuration for a web function endpoint.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for a web function endpoint.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * <p>The current state of the endpoint.</p>
   * @public
   */
  state: EndpointState | undefined;

  /**
   * <p>The reason for the current state of the endpoint.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The status of the most recent update to an endpoint. Possible values: <code>InProgress</code> (update is in progress), <code>Successful</code> (update completed successfully), <code>Failed</code> (update failed).</p>
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * <p>The reason for the endpoint's most recent update status.</p>
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * <p>The list of regional endpoint configurations.</p>
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * <p>The date and time the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The request to retrieve a web function revision.</p>
 * @public
 */
export interface GetWebFunctionRevisionRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The identifier of the revision to retrieve. You can specify the revision identifier or the revision ARN. The length constraint applies only to the full ARN.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>Contains details about the web function revision.</p>
 * @public
 */
export interface GetWebFunctionRevisionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the revision.</p>
   * @public
   */
  revisionArn: string | undefined;

  /**
   * <p>The identifier of the revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The description of the revision.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the revision's code and environment variables.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The build configuration for a web function revision, including code location and runtime settings.</p>
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * <p>The service configuration for a web function revision, including execution role, timeout, concurrency, and telemetry settings.</p>
   * @public
   */
  serviceConfig: ServiceConfig | undefined;

  /**
   * <p>The current state of the revision.</p>
   * @public
   */
  state: RevisionState | undefined;

  /**
   * <p>The reason for the current state of the revision.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>A list of errors encountered during revision creation. This field is absent when the revision has no errors.</p>
   * @public
   */
  errors?: RevisionError[] | undefined;

  /**
   * <p>The date and time the revision was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>The request to list tags for a resource.</p>
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resource: string | undefined;
}

/**
 * <p>Contains the list of tags.</p>
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>A map of tag keys and values associated with the web function.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The request to add or update a resource-based policy.</p>
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The JSON-formatted resource-based policy to attach to the web function.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>The revision ID of the existing policy. Use this to prevent conflicts when updating a policy concurrently. If you don't specify a value, the update proceeds without checking the current revision.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * <p>Contains the resource-based policy and its revision ID.</p>
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The JSON-formatted resource-based policy attached to the web function.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>The revision ID of the policy. Use this value in subsequent <code>PutResourcePolicy</code> or <code>DeleteResourcePolicy</code> requests to prevent conflicts.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>The request to add tags to a resource.</p>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>A map of tag keys and values to add to the web function.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>The request to remove tags from a resource.</p>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>A list of tag keys to remove from the web function.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>The request to list web functions.</p>
 * @public
 */
export interface ListWebFunctionsRequest {
  /**
   * <p>A list of filters to apply to the results. The only supported filter name is <code>state</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the list of web functions.</p>
 * @public
 */
export interface ListWebFunctionsResponse {
  /**
   * <p>A list of web function summaries.</p>
   * @public
   */
  functions: FunctionSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request to list web function endpoints.</p>
 * @public
 */
export interface ListWebFunctionEndpointsRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>A list of filters to apply to the results. Supported filter names: <code>authType</code>, <code>autoDeploymentMode</code>, <code>endpointType</code>, <code>state</code>, and <code>updateStatus</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the list of web function endpoints.</p>
 * @public
 */
export interface ListWebFunctionEndpointsResponse {
  /**
   * <p>A list of endpoint summaries for the web function.</p>
   * @public
   */
  endpoints: FunctionEndpointSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The request to update a web function endpoint.</p>
 * @public
 */
export interface UpdateWebFunctionEndpointRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The name of the endpoint to update. You can specify the endpoint name or the endpoint ARN. The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The authorization type for the endpoint.</p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for the endpoint.</p>
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * <p>A list of revision weights that determine how traffic is distributed across revisions.</p>
   * @public
   */
  revisionWeights?: RevisionWeight[] | undefined;

  /**
   * <p>The scaling configuration for the endpoint. Omit this field to keep the current scaling configuration. To clear a previously set <code>maxEnvironments</code> value, specify an empty object.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for the endpoint. Omit this field to keep the current throttling configuration. To clear a previously set <code>rateLimit</code> value, specify an empty object.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * <p>Contains details about the updated endpoint.</p>
 * @public
 */
export interface UpdateWebFunctionEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the web function.</p>
   * @public
   */
  functionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of a web function endpoint. Possible values: <code>HomeRegion</code> (serves from the Region where the function was created), <code>MultiRegion</code> (replicates across chosen Regions and routes to the nearest), <code>PerRegion</code> (separate endpoint per Region).</p>
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * <p>The domain name assigned to the endpoint.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The authorization type for a web function endpoint. Possible values: <code>ApplicationManaged</code> (the function handles authorization), <code>IamAuth</code> (Lambda authorizes requests with AWS SigV4 and IAM).</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p>The auto-deployment mode for a web function endpoint. Possible values: <code>LatestRevision</code> (endpoint automatically serves the newest revision), <code>Disabled</code> (revision routing is fixed until explicitly changed).</p>
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * <p>The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.</p>
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * <p>The Regions configured for the endpoint.</p>
   * @public
   */
  regions: string[] | undefined;

  /**
   * <p>The scaling configuration for a web function endpoint.</p>
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * <p>The throttling configuration for a web function endpoint.</p>
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * <p>The current state of the endpoint.</p>
   * @public
   */
  state: EndpointState | undefined;

  /**
   * <p>The reason for the current state of the endpoint.</p>
   * @public
   */
  stateReason: string | undefined;

  /**
   * <p>The status of the most recent update to an endpoint. Possible values: <code>InProgress</code> (update is in progress), <code>Successful</code> (update completed successfully), <code>Failed</code> (update failed).</p>
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * <p>The reason for the endpoint's most recent update status.</p>
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * <p>The list of regional endpoint configurations.</p>
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * <p>The date and time the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The request to list web function revisions.</p>
 * @public
 */
export interface ListWebFunctionRevisionsRequest {
  /**
   * <p>The name of the web function. You can specify the function name or the function ARN. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>A list of filters to apply to the results. The only supported filter name is <code>state</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token that's returned by a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains the list of web function revisions.</p>
 * @public
 */
export interface ListWebFunctionRevisionsResponse {
  /**
   * <p>A list of revision summaries for the web function.</p>
   * @public
   */
  revisions: FunctionRevisionSummary[] | undefined;

  /**
   * <p>The pagination token that's included if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}
