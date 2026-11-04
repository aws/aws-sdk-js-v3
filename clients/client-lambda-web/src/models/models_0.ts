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
 * The quotas that apply to web functions in your account in the current AWS Region.
 *
 * @public
 */
export interface AccountQuotas {
  /**
   * The maximum total number of Arm vCPUs that you can allocate across all of your web functions in the current AWS Region.
   *
   * @public
   */
  maxTotalArmVCpus: number | undefined;

  /**
   * The maximum number of requests per second allowed across all of your web function endpoints in your account in the current AWS Region.
   *
   * @public
   */
  maxTotalRateLimit: number | undefined;

  /**
   * The maximum number of revisions that a single web function can have.
   *
   * @public
   */
  maxRevisionsPerFunction: number | undefined;

  /**
   * The maximum number of endpoints that a single web function can have.
   *
   * @public
   */
  maxEndpointsPerFunction: number | undefined;
}

/**
 * Contains your current web function usage for the current AWS Region.
 *
 * @public
 */
export interface AccountUsage {
  /**
   * The number of web functions in your account in the current AWS Region. This count includes web functions in all states, not only functions in the `Active` state.
   *
   * @public
   */
  functionCount: number | undefined;
}

/**
 * The Amazon S3 location of a deployment artifact.
 *
 * @public
 */
export interface S3Object {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The Amazon S3 object key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The version ID of the Amazon S3 object.
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * The code configuration specifying the location of the deployment artifact.
 *
 * @public
 */
export interface CodeConfig {
  /**
   * The Amazon S3 location of the deployment artifact.
   *
   * @public
   */
  s3Object: S3Object | undefined;
}

/**
 * The runtime configuration for a web function revision.
 *
 * @public
 */
export interface RuntimeConfig {
  /**
   * The runtime identifier for the web function (for example, a Node.js runtime identifier).
   *
   * @public
   */
  runtime: string | undefined;
}

/**
 * The build configuration for a web function revision, including code location and runtime settings.
 *
 * @public
 */
export interface BuildConfig {
  /**
   * The code configuration specifying where the deployment artifact is stored.
   *
   * @public
   */
  codeConfig: CodeConfig | undefined;

  /**
   * The runtime configuration for the revision.
   *
   * @public
   */
  runtimeConfig: RuntimeConfig | undefined;
}

/**
 * The scaling configuration for a web function endpoint.
 *
 * @public
 */
export interface ScalingConfig {
  /**
   * The maximum number of concurrent execution environments for the endpoint. Minimum value of 2, maximum value of 10000. There is no default value. If you don't specify a value, the scaling configuration is absent from the response. On an update, omit `scalingConfig` to keep the current value, or specify an empty object to clear a previously set value.
   *
   * @public
   */
  maxEnvironments?: number | undefined;
}

/**
 * The throttling configuration for a web function endpoint.
 *
 * @public
 */
export interface ThrottleConfig {
  /**
   * The maximum request rate per second for the endpoint. The value must be one of the following supported values: `0`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `1000`, `2000`, `3000`, `4000`, `5000`, `6000`, `7000`, `8000`, `9000`, or `10000`. The maximum effective value is also bounded by your account-level maximum total rate limit. There is no default value. If you don't specify a value, the throttling configuration is absent from the response. On an update, omit `throttleConfig` to keep the current value, or specify an empty object to clear a previously set value.
   *
   * @public
   */
  rateLimit?: number | undefined;
}

/**
 * The configuration for a web function endpoint.
 *
 * @public
 */
export interface EndpointConfig {
  /**
   * The name of the endpoint. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The name is limited to 64 characters in length.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of endpoint. Determines how traffic is served and routed across Regions.
   *
   * Valid values:
   *
   * - `HomeRegion` – Serves traffic from the Region where you created the web function.
   * - `MultiRegion` – Replicates across the Regions that you choose and routes each request to the nearest one.
   * - `PerRegion` – Creates a separate endpoint in each Region that you choose.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The authorization type for the endpoint.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for the endpoint. If you don't specify a value, the default is `Disabled`, and this default is returned in the response.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * The list of Regions for the endpoint. Required when the endpoint type is `MultiRegion` or `PerRegion`: specify at least one Region other than the Region where you create the endpoint (the home Region). The home Region is added automatically if you don't include it; specifying only the home Region isn't allowed. When the endpoint type is `HomeRegion`, omit this field or specify only the home Region.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The scaling configuration for the endpoint.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for the endpoint.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * The logging configuration for a web function revision.
 *
 * @public
 */
export interface LoggingConfig {
  /**
   * The name of the Amazon CloudWatch Logs log group the web function sends logs to. If you don't specify a value, the default is `/aws/lambda/web/\{functionName\}`, and this default is returned in the response.
   *
   * @public
   */
  logGroup?: string | undefined;

  /**
   * The log level for application logs emitted by the web function. If you don't specify a value, the default is `INFO`, and this default is returned in the response.
   *
   * @public
   */
  applicationLogLevel?: ApplicationLogLevel | undefined;

  /**
   * The log level for system logs emitted by the Lambda runtime. If you don't specify a value, the default is `INFO`, and this default is returned in the response.
   *
   * @public
   */
  systemLogLevel?: SystemLogLevel | undefined;
}

/**
 * The telemetry configuration for a web function revision.
 *
 * @public
 */
export interface TelemetryConfig {
  /**
   * The logging configuration for the web function.
   *
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;
}

/**
 * The service configuration for a web function revision, including execution role, timeout, VPC network access, concurrency, and telemetry settings.
 *
 * @public
 */
export interface ServiceConfig {
  /**
   * The ARN of the IAM role that the web function assumes when it runs. This role provides permissions to access AWS services and resources.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The amount of time (in seconds) that Lambda allows the web function to run before stopping it. Minimum value of 3, maximum value of 900. If you don't specify a value, the default is 30, and this default is returned in the response.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda network connector that gives the web function access to resources in your VPC. You must specify the fully qualified ARN, including the connector version, which pins the revision to that version. If the network connector is deleted, invocations of revisions that reference it fail. Revisions that specify a network connector support only `HomeRegion` endpoints, not `MultiRegion` or `PerRegion`.
   *
   * @public
   */
  egressNetworkConnectorArn?: string | undefined;

  /**
   * The maximum number of concurrent requests handled per execution environment. Minimum value of 1, maximum value of 128. If you don't specify a value, the default is 64, and this default is returned in the response.
   *
   * @public
   */
  maxConcurrencyPerEnvironment?: number | undefined;

  /**
   * A map of environment variable key-value pairs available to the web function at runtime. Environment variable values are sensitive.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The telemetry configuration for the web function, including logging settings.
   *
   * @public
   */
  telemetryConfig?: TelemetryConfig | undefined;
}

/**
 * The configuration for a web function revision, including code build settings and service configuration.
 *
 * @public
 */
export interface RevisionConfig {
  /**
   * A description of the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the revision's code and environment variables.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The build configuration for the revision.
   *
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * The service configuration for the revision.
   *
   * @public
   */
  serviceConfig: ServiceConfig | undefined;
}

/**
 * The request to create a web function.
 *
 * @public
 */
export interface CreateWebFunctionRequest {
  /**
   * The name of the web function. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The name is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The configuration for the initial revision of the web function, including code and service settings.
   *
   * @public
   */
  revisionConfig?: RevisionConfig | undefined;

  /**
   * The configuration for the initial endpoint of the web function.
   *
   * @public
   */
  endpointConfig?: EndpointConfig | undefined;

  /**
   * A map of tag keys and values to apply to the web function.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Specifies a revision and its traffic weight for an endpoint. You can assign weights to up to two revisions to split traffic for canary or blue-green deployments.
 *
 * @public
 */
export interface RevisionWeight {
  /**
   * The identifier of the revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The percentage of traffic to route to this revision. Minimum value of 1, maximum value of 100.
   *
   * @public
   */
  weight: number | undefined;
}

/**
 * A summary of a web function endpoint.
 *
 * @public
 */
export interface FunctionEndpointSummary {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the endpoint.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The domain name of the endpoint.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The authorization type for the endpoint.
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for the endpoint.
   *
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * The revision weights for the endpoint.
   *
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * The list of Regions for the endpoint.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The scaling configuration for the endpoint. This field is absent if the endpoint has no scaling configuration.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for the endpoint. This field is absent if the endpoint has no throttling configuration.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * The current state of the endpoint.
   *
   * @public
   */
  state: EndpointState | undefined;

  /**
   * The reason for the current state of the endpoint.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The status of the most recent update to the endpoint.
   *
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * The reason for the current update status of the endpoint.
   *
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * The date and time the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * A summary of a web function revision.
 *
 * @public
 */
export interface FunctionRevisionSummary {
  /**
   * The Amazon Resource Name (ARN) of the revision.
   *
   * @public
   */
  revisionArn: string | undefined;

  /**
   * The identifier of the revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * A description of the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current state of the revision.
   *
   * @public
   */
  state: RevisionState | undefined;

  /**
   * The reason for the current state of the revision.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The date and time the revision was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Contains details about the created web function.
 *
 * @public
 */
export interface CreateWebFunctionResponse {
  /**
   * The name of the web function.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The current state of the web function.
   *
   * @public
   */
  state: FunctionState | undefined;

  /**
   * The reason for the current state of the web function.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The date and time the web function was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the web function was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A summary of the initial revision created with the web function.
   *
   * @public
   */
  revision?: FunctionRevisionSummary | undefined;

  /**
   * A summary of the initial endpoint created with the web function.
   *
   * @public
   */
  endpoint?: FunctionEndpointSummary | undefined;

  /**
   * A map of tag keys and values associated with the web function.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request to create a web function endpoint.
 *
 * @public
 */
export interface CreateWebFunctionEndpointRequest {
  /**
   * The web function to create the endpoint for.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The name of the endpoint to create. The name can contain letters, numbers, hyphens (-), and underscores (_), and can't begin or end with a hyphen or an underscore. The name is limited to 64 characters in length.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of endpoint to create. Determines how traffic is served and routed across Regions.
   *
   * Valid values:
   *
   * - `HomeRegion` – Serves traffic from the Region where you created the web function.
   * - `MultiRegion` – Replicates across the Regions that you choose and routes each request to the nearest one.
   * - `PerRegion` – Creates a separate endpoint in each Region that you choose.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The authorization type for the endpoint.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for the endpoint. Controls whether the endpoint automatically serves the newest revision. If you don't specify a value, the default is `Disabled`, and this default is returned in the response.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * A list of revision weights that determine how traffic is distributed across revisions. You can specify up to two revisions for canary or blue-green deployments.
   *
   * @public
   */
  revisionWeights?: RevisionWeight[] | undefined;

  /**
   * The list of Regions for the endpoint. Required when the endpoint type is `MultiRegion` or `PerRegion`: specify at least one Region other than the Region where you create the endpoint (the home Region). The home Region is added automatically if you don't include it; specifying only the home Region isn't allowed. When the endpoint type is `HomeRegion`, omit this field or specify only the home Region.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The scaling configuration for the endpoint. There is no default value. If you don't specify a scaling configuration, it is absent from the response.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for the endpoint. There is no default value. If you don't specify a throttling configuration, it is absent from the response.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * Represents the endpoint configuration and state in a specific Region.
 *
 * @public
 */
export interface RegionalEndpoint {
  /**
   * The domain name of the regional endpoint.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The authorization type for the regional endpoint.
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The revision weights for the regional endpoint.
   *
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * The scaling configuration for the regional endpoint. This field is absent if the endpoint has no scaling configuration.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for the regional endpoint. This field is absent if the endpoint has no throttling configuration.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * The current state of the regional endpoint.
   *
   * @public
   */
  state: EndpointState | undefined;

  /**
   * The reason for the current state of the regional endpoint.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The status of the most recent update to the regional endpoint.
   *
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * The reason for the current update status of the regional endpoint.
   *
   * @public
   */
  updateStatusReason?: string | undefined;
}

/**
 * Contains details about the created endpoint.
 *
 * @public
 */
export interface CreateWebFunctionEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of a web function endpoint.
   *
   * Valid values:
   *
   * - `HomeRegion` – Serves traffic from the Region where you created the web function.
   * - `MultiRegion` – Replicates across the Regions that you choose and routes each request to the nearest one.
   * - `PerRegion` – Creates a separate endpoint in each Region that you choose.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The domain name assigned to the endpoint.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The authorization type for a web function endpoint.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for a web function endpoint.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.
   *
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * The Regions configured for the endpoint.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The scaling configuration for a web function endpoint.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for a web function endpoint.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * The current state of the endpoint.
   *
   * @public
   */
  state: EndpointState | undefined;

  /**
   * The reason for the current state of the endpoint.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The status of the most recent update to an endpoint. Possible values:
   *
   * - `InProgress` – The update is in progress.
   * - `Successful` – The update completed successfully.
   * - `Failed` – The update failed.
   *
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * The reason for the endpoint's most recent update status.
   *
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * The list of regional endpoint configurations.
   *
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * The date and time the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The request to create a web function revision.
 *
 * @public
 */
export interface CreateWebFunctionRevisionRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * A description of the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) key used to encrypt the revision's code and environment variables.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The build configuration for the revision, including code location and runtime settings.
   *
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * The service configuration for the revision, including execution role, timeout, and concurrency settings.
   *
   * @public
   */
  serviceConfig: ServiceConfig | undefined;
}

/**
 * A single error encountered while creating or reading a web function revision. The error describes the affected attribute, an error code, and a human-readable message. This structure is present only when the revision has errors.
 *
 * @public
 */
export interface RevisionError {
  /**
   * The name of the revision attribute that the error applies to.
   *
   * @public
   */
  attribute: string | undefined;

  /**
   * A short, machine-readable code that identifies the error.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * A human-readable message describing the error.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Contains details about the created revision.
 *
 * @public
 */
export interface CreateWebFunctionRevisionResponse {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the revision.
   *
   * @public
   */
  revisionArn: string | undefined;

  /**
   * The identifier of the revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The description of the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the revision's code and environment variables.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The build configuration for a web function revision, including code location and runtime settings.
   *
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * The service configuration for a web function revision, including execution role, timeout, VPC network access, concurrency, and telemetry settings.
   *
   * @public
   */
  serviceConfig: ServiceConfig | undefined;

  /**
   * The current state of the revision.
   *
   * @public
   */
  state: RevisionState | undefined;

  /**
   * The reason for the current state of the revision.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * A list of errors encountered during revision creation. This field is absent when the revision has no errors.
   *
   * @public
   */
  errors?: RevisionError[] | undefined;

  /**
   * The date and time the revision was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * The request to delete a resource-based policy.
 *
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The revision ID of the policy. Use this to prevent deleting a policy that has been updated since you last retrieved it. If you don't specify a value, the policy is deleted regardless of its current revision.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * The request to delete a web function.
 *
 * @public
 */
export interface DeleteWebFunctionRequest {
  /**
   * The web function to delete.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;
}

/**
 * The request to delete a web function endpoint.
 *
 * @public
 */
export interface DeleteWebFunctionEndpointRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The endpoint to delete.
   *
   * You can specify either of the following:
   *
   * - The endpoint name, for example `my-endpoint`.
   * - The endpoint ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * The request to delete a web function revision.
 *
 * @public
 */
export interface DeleteWebFunctionRevisionRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The revision to delete.
   *
   * You can specify either of the following:
   *
   * - The revision identifier.
   * - The revision ARN.
   *
   * The length constraint applies only to the full ARN.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * A filter to apply when listing resources.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values to match for the filter.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * A summary of a web function.
 *
 * @public
 */
export interface FunctionSummary {
  /**
   * The name of the web function.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The current state of the web function.
   *
   * @public
   */
  state: FunctionState | undefined;

  /**
   * The reason for the current state of the web function.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The date and time the web function was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the web function was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The request to retrieve a resource-based policy.
 *
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Contains the resource-based policy and its revision ID.
 *
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The JSON-formatted resource-based policy attached to the web function.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The revision ID of the policy.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface GetWebAccountSettingsRequest {}

/**
 * Contains your AWS Lambda Web Functions account quotas and usage for the current AWS Region.
 *
 * @public
 */
export interface GetWebAccountSettingsResponse {
  /**
   * The quotas that apply to web functions in your account in the current AWS Region.
   *
   * @public
   */
  accountQuotas: AccountQuotas | undefined;

  /**
   * The current web function usage for your account in the current AWS Region.
   *
   * @public
   */
  accountUsage: AccountUsage | undefined;
}

/**
 * The request to retrieve a web function.
 *
 * @public
 */
export interface GetWebFunctionRequest {
  /**
   * The web function to retrieve.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;
}

/**
 * Contains details about the web function.
 *
 * @public
 */
export interface GetWebFunctionResponse {
  /**
   * The name of the web function.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The current state of the web function.
   *
   * @public
   */
  state: FunctionState | undefined;

  /**
   * The reason for the current state of the web function.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The date and time the web function was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the web function was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The request to retrieve a web function endpoint.
 *
 * @public
 */
export interface GetWebFunctionEndpointRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The endpoint to retrieve.
   *
   * You can specify either of the following:
   *
   * - The endpoint name, for example `my-endpoint`.
   * - The endpoint ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * Contains details about the web function endpoint.
 *
 * @public
 */
export interface GetWebFunctionEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of a web function endpoint.
   *
   * Valid values:
   *
   * - `HomeRegion` – Serves traffic from the Region where you created the web function.
   * - `MultiRegion` – Replicates across the Regions that you choose and routes each request to the nearest one.
   * - `PerRegion` – Creates a separate endpoint in each Region that you choose.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The domain name assigned to the endpoint.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The authorization type for a web function endpoint.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for a web function endpoint.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.
   *
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * The Regions configured for the endpoint.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The scaling configuration for a web function endpoint.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for a web function endpoint.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * The current state of the endpoint.
   *
   * @public
   */
  state: EndpointState | undefined;

  /**
   * The reason for the current state of the endpoint.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The status of the most recent update to an endpoint. Possible values:
   *
   * - `InProgress` – The update is in progress.
   * - `Successful` – The update completed successfully.
   * - `Failed` – The update failed.
   *
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * The reason for the endpoint's most recent update status.
   *
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * The list of regional endpoint configurations.
   *
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * The date and time the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The request to retrieve a web function revision.
 *
 * @public
 */
export interface GetWebFunctionRevisionRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The revision to retrieve.
   *
   * You can specify either of the following:
   *
   * - The revision identifier.
   * - The revision ARN.
   *
   * The length constraint applies only to the full ARN.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * Contains details about the web function revision.
 *
 * @public
 */
export interface GetWebFunctionRevisionResponse {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the revision.
   *
   * @public
   */
  revisionArn: string | undefined;

  /**
   * The identifier of the revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The description of the revision.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the revision's code and environment variables.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The build configuration for a web function revision, including code location and runtime settings.
   *
   * @public
   */
  buildConfig: BuildConfig | undefined;

  /**
   * The service configuration for a web function revision, including execution role, timeout, VPC network access, concurrency, and telemetry settings.
   *
   * @public
   */
  serviceConfig: ServiceConfig | undefined;

  /**
   * The current state of the revision.
   *
   * @public
   */
  state: RevisionState | undefined;

  /**
   * The reason for the current state of the revision.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * A list of errors encountered during revision creation. This field is absent when the revision has no errors.
   *
   * @public
   */
  errors?: RevisionError[] | undefined;

  /**
   * The date and time the revision was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * The request to list tags for a resource.
 *
 * @public
 */
export interface ListTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resource: string | undefined;
}

/**
 * Contains the list of tags.
 *
 * @public
 */
export interface ListTagsResponse {
  /**
   * A map of tag keys and values associated with the web function.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request to add or update a resource-based policy.
 *
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The JSON-formatted resource-based policy to attach to the web function.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The revision ID of the existing policy. Use this to prevent conflicts when updating a policy concurrently. If you don't specify a value, the update proceeds without checking the current revision.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * Contains the resource-based policy and its revision ID.
 *
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The JSON-formatted resource-based policy attached to the web function.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The revision ID of the policy. Use this value in subsequent `PutResourcePolicy` or `DeleteResourcePolicy` requests to prevent conflicts.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * The request to add tags to a resource.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * A map of tag keys and values to add to the web function.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The request to remove tags from a resource.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * A list of tag keys to remove from the web function.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * The request to list web functions.
 *
 * @public
 */
export interface ListWebFunctionsRequest {
  /**
   * A list of filters to apply to the results. The only supported filter name is `state`. If you don't specify a filter, the operation returns all web functions.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the list of web functions.
 *
 * @public
 */
export interface ListWebFunctionsResponse {
  /**
   * A list of web function summaries.
   *
   * @public
   */
  functions: FunctionSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available. Use this value as the `nextToken` request parameter in a subsequent call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request to list web function endpoints.
 *
 * @public
 */
export interface ListWebFunctionEndpointsRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * A list of filters to apply to the results. Supported filter names: `authType`, `autoDeploymentMode`, `endpointType`, `state`, and `updateStatus`. If you don't specify a filter, the operation returns all endpoints for the web function.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the list of web function endpoints.
 *
 * @public
 */
export interface ListWebFunctionEndpointsResponse {
  /**
   * A list of endpoint summaries for the web function.
   *
   * @public
   */
  endpoints: FunctionEndpointSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available. Use this value as the `nextToken` request parameter in a subsequent call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The request to update a web function endpoint.
 *
 * @public
 */
export interface UpdateWebFunctionEndpointRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The endpoint to update.
   *
   * You can specify either of the following:
   *
   * - The endpoint name, for example `my-endpoint`.
   * - The endpoint ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the endpoint name, it is limited to 64 characters in length.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A description of the endpoint. Omit this field to keep the current description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The authorization type for the endpoint. Omit this field to keep the current authorization type.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The auto-deployment mode for the endpoint. Omit this field to keep the current auto-deployment mode.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode?: AutoDeploymentMode | undefined;

  /**
   * A list of revision weights that determine how traffic is distributed across revisions.
   *
   * @public
   */
  revisionWeights?: RevisionWeight[] | undefined;

  /**
   * The scaling configuration for the endpoint. Omit this field to keep the current scaling configuration. To clear a previously set `maxEnvironments` value, specify an empty object.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for the endpoint. Omit this field to keep the current throttling configuration. To clear a previously set `rateLimit` value, specify an empty object.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;
}

/**
 * Contains details about the updated endpoint.
 *
 * @public
 */
export interface UpdateWebFunctionEndpointResponse {
  /**
   * The Amazon Resource Name (ARN) of the web function.
   *
   * @public
   */
  functionArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of a web function endpoint.
   *
   * Valid values:
   *
   * - `HomeRegion` – Serves traffic from the Region where you created the web function.
   * - `MultiRegion` – Replicates across the Regions that you choose and routes each request to the nearest one.
   * - `PerRegion` – Creates a separate endpoint in each Region that you choose.
   *
   * @public
   */
  endpointType: EndpointType | undefined;

  /**
   * The domain name assigned to the endpoint.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The authorization type for a web function endpoint.
   *
   * Valid values:
   *
   * - `ApplicationManaged` – Your application handles authorization.
   * - `IamAuth` – Lambda uses IAM to authorize requests, which must be signed with Signature Version 4 (SigV4).
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * The auto-deployment mode for a web function endpoint.
   *
   * Valid values:
   *
   * - `LatestRevision` – The endpoint automatically serves the newest revision.
   * - `Disabled` – Revision routing stays fixed until you change it.
   *
   * @public
   */
  autoDeploymentMode: AutoDeploymentMode | undefined;

  /**
   * The traffic distribution across revisions for the endpoint. Each entry maps a revision to a weight from 1 to 100.
   *
   * @public
   */
  revisionWeights: RevisionWeight[] | undefined;

  /**
   * The Regions configured for the endpoint.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The scaling configuration for a web function endpoint.
   *
   * @public
   */
  scalingConfig?: ScalingConfig | undefined;

  /**
   * The throttling configuration for a web function endpoint.
   *
   * @public
   */
  throttleConfig?: ThrottleConfig | undefined;

  /**
   * The current state of the endpoint.
   *
   * @public
   */
  state: EndpointState | undefined;

  /**
   * The reason for the current state of the endpoint.
   *
   * @public
   */
  stateReason: string | undefined;

  /**
   * The status of the most recent update to an endpoint. Possible values:
   *
   * - `InProgress` – The update is in progress.
   * - `Successful` – The update completed successfully.
   * - `Failed` – The update failed.
   *
   * @public
   */
  updateStatus?: EndpointUpdateStatus | undefined;

  /**
   * The reason for the endpoint's most recent update status.
   *
   * @public
   */
  updateStatusReason?: string | undefined;

  /**
   * The list of regional endpoint configurations.
   *
   * @public
   */
  regionalEndpoints: Record<string, RegionalEndpoint> | undefined;

  /**
   * The date and time the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The request to list web function revisions.
 *
 * @public
 */
export interface ListWebFunctionRevisionsRequest {
  /**
   * The web function.
   *
   * You can specify either of the following:
   *
   * - The function name, for example `my-function`.
   * - The function ARN.
   *
   * The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * A list of filters to apply to the results. The only supported filter name is `state`. If you don't specify a filter, the operation returns all revisions for the web function.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of results to return in a single call. Minimum value of 1, maximum value of 50. Default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token that's returned by a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains the list of web function revisions.
 *
 * @public
 */
export interface ListWebFunctionRevisionsResponse {
  /**
   * A list of revision summaries for the web function.
   *
   * @public
   */
  revisions: FunctionRevisionSummary[] | undefined;

  /**
   * The pagination token that's included if more results are available. Use this value as the `nextToken` request parameter in a subsequent call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}
