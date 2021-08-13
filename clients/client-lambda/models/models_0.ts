import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>Limits that are related to concurrency and storage. All file and storage sizes are in bytes.</p>
 */
export interface AccountLimit {
  /**
   * <p>The amount of storage space that you can use for all deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The maximum size of a function's deployment package and layers when they're extracted.</p>
   */
  CodeSizeUnzipped?: number;

  /**
   * <p>The maximum size of a deployment package when it's uploaded directly to Lambda. Use Amazon S3 for larger
   *       files.</p>
   */
  CodeSizeZipped?: number;

  /**
   * <p>The maximum number of simultaneous function executions.</p>
   */
  ConcurrentExecutions?: number;

  /**
   * <p>The maximum number of simultaneous function executions, minus the capacity that's reserved for individual
   *       functions with <a>PutFunctionConcurrency</a>.</p>
   */
  UnreservedConcurrentExecutions?: number;
}

export namespace AccountLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj,
  });
}

/**
 * <p>The number of functions and amount of storage in use.</p>
 */
export interface AccountUsage {
  /**
   * <p>The amount of storage space, in bytes, that's being used by deployment packages and layer archives.</p>
   */
  TotalCodeSize?: number;

  /**
   * <p>The number of Lambda functions.</p>
   */
  FunctionCount?: number;
}

export namespace AccountUsage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountUsage): any => ({
    ...obj,
  });
}

export interface AddLayerVersionPermissionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>An identifier that distinguishes the policy from others on the same layer version.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>The API action that grants access to the layer. For example, <code>lambda:GetLayerVersion</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>An account ID, or <code>*</code> to grant layer usage permission to all
   *       accounts in an organization, or all Amazon Web Services accounts (if <code>organizationId</code> is not specified).
   *       For the last case, make sure that you really do want all Amazon Web Services accounts to have usage permission to this layer.
   *     </p>
   */
  Principal: string | undefined;

  /**
   * <p>With the principal set to <code>*</code>, grant permission to all accounts in the specified
   *       organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace AddLayerVersionPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddLayerVersionPermissionRequest): any => ({
    ...obj,
  });
}

export interface AddLayerVersionPermissionResponse {
  /**
   * <p>The permission statement.</p>
   */
  Statement?: string;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;
}

export namespace AddLayerVersionPermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddLayerVersionPermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export interface InvalidParameterValueException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValueException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace InvalidParameterValueException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterValueException): any => ({
    ...obj,
  });
}

/**
 * <p>The permissions policy for the resource is too large. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface PolicyLengthExceededException extends __SmithyException, $MetadataBearer {
  name: "PolicyLengthExceededException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace PolicyLengthExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PolicyLengthExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the
 *         <code>GetFunction</code> or the <code>GetAlias</code> API to retrieve the latest RevisionId for your
 *       resource.</p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace PreconditionFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists, or another operation is in progress.</p>
 */
export interface ResourceConflictException extends __SmithyException, $MetadataBearer {
  name: "ResourceConflictException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace ResourceConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The Lambda service encountered an internal error.</p>
 */
export interface ServiceException extends __SmithyException, $MetadataBearer {
  name: "ServiceException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace ServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceException): any => ({
    ...obj,
  });
}

export enum ThrottleReason {
  CallerRateLimitExceeded = "CallerRateLimitExceeded",
  ConcurrentInvocationLimitExceeded = "ConcurrentInvocationLimitExceeded",
  FunctionInvocationRateLimitExceeded = "FunctionInvocationRateLimitExceeded",
  ReservedFunctionConcurrentInvocationLimitExceeded = "ReservedFunctionConcurrentInvocationLimitExceeded",
  ReservedFunctionInvocationRateLimitExceeded = "ReservedFunctionInvocationRateLimitExceeded",
}

/**
 * <p>The request throughput limit was exceeded.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  retryAfterSeconds?: string;

  Type?: string;
  message?: string;
  Reason?: ThrottleReason | string;
}

export namespace TooManyRequestsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

export interface AddPermissionRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A statement identifier that differentiates the statement from others in the same policy.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>The action that the principal can use on the function. For example, <code>lambda:InvokeFunction</code> or
   *         <code>lambda:GetFunction</code>.</p>
   */
  Action: string | undefined;

  /**
   * <p>The Amazon Web Services service or account that invokes the function. If you specify a service, use <code>SourceArn</code> or
   *         <code>SourceAccount</code> to limit who can invoke the function through that service.</p>
   */
  Principal: string | undefined;

  /**
   * <p>For Amazon Web Services services, the ARN of the Amazon Web Services resource that invokes the function. For example, an Amazon S3 bucket or
   *       Amazon SNS topic.</p>
   */
  SourceArn?: string;

  /**
   * <p>For Amazon S3, the ID of the account that owns the resource. Use this together with <code>SourceArn</code> to
   *       ensure that the resource is owned by the specified account. It is possible for an Amazon S3 bucket to be deleted
   *       by its owner and recreated by another account.</p>
   */
  SourceAccount?: string;

  /**
   * <p>For Alexa Smart Home functions, a token that must be supplied by the invoker.</p>
   */
  EventSourceToken?: string;

  /**
   * <p>Specify a version or alias to add permissions to a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace AddPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddPermissionRequest): any => ({
    ...obj,
  });
}

export interface AddPermissionResponse {
  /**
   * <p>The permission statement that's added to the function policy.</p>
   */
  Statement?: string;
}

export namespace AddPermissionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddPermissionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.</p>
 */
export interface AliasRoutingConfiguration {
  /**
   * <p>The second version, and the percentage of traffic that's routed to it.</p>
   */
  AdditionalVersionWeights?: { [key: string]: number };
}

export namespace AliasRoutingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AliasRoutingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.</p>
 */
export interface AliasConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias.</p>
   */
  AliasArn?: string;

  /**
   * <p>The name of the alias.</p>
   */
  Name?: string;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;

  /**
   * <p>A unique identifier that changes when you update the alias.</p>
   */
  RevisionId?: string;
}

export namespace AliasConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AliasConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>List of signing profiles that can sign a code package. </p>
 */
export interface AllowedPublishers {
  /**
   * <p>The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user
   *       who can sign a code package. </p>
   */
  SigningProfileVersionArns: string[] | undefined;
}

export namespace AllowedPublishers {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllowedPublishers): any => ({
    ...obj,
  });
}

export interface CreateAliasRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion: string | undefined;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;
}

export namespace CreateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAliasRequest): any => ({
    ...obj,
  });
}

export enum CodeSigningPolicy {
  Enforce = "Enforce",
  Warn = "Warn",
}

/**
 * <p>Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or
 *        expiry.</p>
 */
export interface CodeSigningPolicies {
  /**
   * <p>Code signing configuration policy for deployment validation failure. If you set the policy to
   *       <code>Enforce</code>, Lambda blocks the deployment request if signature validation checks fail. If you set the
   *       policy to <code>Warn</code>, Lambda allows the deployment and creates a CloudWatch log. </p>
   *          <p>Default value: <code>Warn</code>
   *          </p>
   */
  UntrustedArtifactOnDeployment?: CodeSigningPolicy | string;
}

export namespace CodeSigningPolicies {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigningPolicies): any => ({
    ...obj,
  });
}

export interface CreateCodeSigningConfigRequest {
  /**
   * <p>Descriptive name for this code signing configuration.</p>
   */
  Description?: string;

  /**
   * <p>Signing profiles for this code signing configuration.</p>
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * <p>The code signing policies define the actions to take if the validation checks fail. </p>
   */
  CodeSigningPolicies?: CodeSigningPolicies;
}

export namespace CreateCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. </p>
 */
export interface CodeSigningConfig {
  /**
   * <p>Unique identifer for the Code signing configuration.</p>
   */
  CodeSigningConfigId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Code signing configuration description.</p>
   */
  Description?: string;

  /**
   * <p>List of allowed publishers.</p>
   */
  AllowedPublishers: AllowedPublishers | undefined;

  /**
   * <p>The code signing policy controls the validation failure action for signature mismatch or expiry.</p>
   */
  CodeSigningPolicies: CodeSigningPolicies | undefined;

  /**
   * <p>The date and time that the Code signing configuration was last modified, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD). </p>
   */
  LastModified: string | undefined;
}

export namespace CodeSigningConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigningConfig): any => ({
    ...obj,
  });
}

export interface CreateCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration.</p>
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

export namespace CreateCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A destination for events that failed processing.</p>
 */
export interface OnFailure {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
   */
  Destination?: string;
}

export namespace OnFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnFailure): any => ({
    ...obj,
  });
}

/**
 * <p>A destination for events that were processed successfully.</p>
 */
export interface OnSuccess {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination resource.</p>
   */
  Destination?: string;
}

export namespace OnSuccess {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OnSuccess): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration object that specifies the destination of an event after Lambda processes it.</p>
 */
export interface DestinationConfig {
  /**
   * <p>The destination configuration for successful invocations.</p>
   */
  OnSuccess?: OnSuccess;

  /**
   * <p>The destination configuration for failed invocations.</p>
   */
  OnFailure?: OnFailure;
}

export namespace DestinationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationConfig): any => ({
    ...obj,
  });
}

export enum FunctionResponseType {
  ReportBatchItemFailures = "ReportBatchItemFailures",
}

export enum EndPointType {
  KAFKA_BOOTSTRAP_SERVERS = "KAFKA_BOOTSTRAP_SERVERS",
}

/**
 * <p>The self-managed Apache Kafka cluster for your event source.</p>
 */
export interface SelfManagedEventSource {
  /**
   * <p>The list of bootstrap servers for your Kafka brokers in the following format: <code>"KAFKA_BOOTSTRAP_SERVERS":
   *         ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]</code>.</p>
   */
  Endpoints?: { [key: string]: string[] };
}

export namespace SelfManagedEventSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelfManagedEventSource): any => ({
    ...obj,
  });
}

export enum SourceAccessType {
  BASIC_AUTH = "BASIC_AUTH",
  SASL_SCRAM_256_AUTH = "SASL_SCRAM_256_AUTH",
  SASL_SCRAM_512_AUTH = "SASL_SCRAM_512_AUTH",
  VIRTUAL_HOST = "VIRTUAL_HOST",
  VPC_SECURITY_GROUP = "VPC_SECURITY_GROUP",
  VPC_SUBNET = "VPC_SUBNET",
}

/**
 * <p>To secure and define access to your event source, you can specify the authentication protocol, VPC components, or virtual host.</p>
 */
export interface SourceAccessConfiguration {
  /**
   * <p>The type of authentication protocol, VPC components, or virtual host for your event source. For example: <code>"Type":"SASL_SCRAM_512_AUTH"</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BASIC_AUTH</code> - (Amazon MQ) The Secrets Manager secret that stores your broker credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASIC_AUTH</code> - (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VPC_SUBNET</code> - The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VPC_SECURITY_GROUP</code> - The VPC security group used to manage access to your self-managed Apache Kafka brokers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SASL_SCRAM_256_AUTH</code> - The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SASL_SCRAM_512_AUTH</code> - The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VIRTUAL_HOST</code> - (Amazon MQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source.</p>
   *             </li>
   *          </ul>
   */
  Type?: SourceAccessType | string;

  /**
   * <p>The value for your chosen configuration in <code>Type</code>. For example: <code>"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"</code>.</p>
   */
  URI?: string;
}

export namespace SourceAccessConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceAccessConfiguration): any => ({
    ...obj,
  });
}

export enum EventSourcePosition {
  AT_TIMESTAMP = "AT_TIMESTAMP",
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

export interface CreateEventSourceMappingRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
   *             </li>
   *          </ul>
   */
  EventSourceArn?: string;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *          </ul>
   */
  BatchSize?: number;

  /**
   * <p>(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) The number of batches to process from each shard concurrently.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK Streams
   *       sources. <code>AT_TIMESTAMP</code> is only supported for Amazon Kinesis streams.</p>
   */
  StartingPosition?: EventSourcePosition | string;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
   *       reading.</p>
   */
  StartingPositionTimestamp?: Date;

  /**
   * <p>(Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.</p>
   */
  TumblingWindowInSeconds?: number;

  /**
   * <p>The name of the Kafka topic.</p>
   */
  Topics?: string[];

  /**
   * <p>
   *       (MQ) The name of the Amazon MQ broker destination queue to consume.
   *     </p>
   */
  Queues?: string[];

  /**
   * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];

  /**
   * <p>The Self-Managed Apache Kafka cluster to send records.</p>
   */
  SelfManagedEventSource?: SelfManagedEventSource;

  /**
   * <p>(Streams only) A list of current response type enums applied to the event source mapping.</p>
   */
  FunctionResponseTypes?: (FunctionResponseType | string)[];
}

export namespace CreateEventSourceMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventSourceMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.</p>
 */
export interface EventSourceMappingConfiguration {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID?: string;

  /**
   * <p>The position in a stream from which to start reading. Required for Amazon Kinesis, Amazon DynamoDB, and Amazon MSK stream sources. <code>AT_TIMESTAMP</code> is supported only for Amazon Kinesis
   *       streams.</p>
   */
  StartingPosition?: EventSourcePosition | string;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start
   *       reading.</p>
   */
  StartingPositionTimestamp?: Date;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>(Streams and Amazon SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds. The default value is zero.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The ARN of the Lambda function.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The date that the event source mapping was last updated or that its state changed.</p>
   */
  LastModified?: Date;

  /**
   * <p>The result of the last Lambda invocation of your function.</p>
   */
  LastProcessingResult?: string;

  /**
   * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>,
   *         <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>,
   *         <code>Updating</code>, or <code>Deleting</code>.</p>
   */
  State?: string;

  /**
   * <p>Indicates whether a user or Lambda made the last change to the event source mapping.</p>
   */
  StateTransitionReason?: string;

  /**
   * <p>(Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>The name of the Kafka topic.</p>
   */
  Topics?: string[];

  /**
   * <p> (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.</p>
   */
  Queues?: string[];

  /**
   * <p>An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.</p>
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];

  /**
   * <p>The self-managed Apache Kafka cluster for your event source.</p>
   */
  SelfManagedEventSource?: SelfManagedEventSource;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is -1,
   * which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.  </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) If the function returns an error, split the batch in two and retry. The default value is false.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1,
   * which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The duration in seconds of a processing window. The range is 1–900 seconds.</p>
   */
  TumblingWindowInSeconds?: number;

  /**
   * <p>(Streams only) A list of current response type enums applied to the event source mapping.</p>
   */
  FunctionResponseTypes?: (FunctionResponseType | string)[];
}

export namespace EventSourceMappingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSourceMappingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The specified code signing configuration does not exist.</p>
 */
export interface CodeSigningConfigNotFoundException extends __SmithyException, $MetadataBearer {
  name: "CodeSigningConfigNotFoundException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace CodeSigningConfigNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeSigningConfigNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded your maximum total code size per account. <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Learn more</a>
 *          </p>
 */
export interface CodeStorageExceededException extends __SmithyException, $MetadataBearer {
  name: "CodeStorageExceededException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  message?: string;
}

export namespace CodeStorageExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeStorageExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code signing policy
 *       is set to ENFORCE. Lambda blocks the deployment. </p>
 */
export interface CodeVerificationFailedException extends __SmithyException, $MetadataBearer {
  name: "CodeVerificationFailedException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace CodeVerificationFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeVerificationFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>The code for the Lambda function. You can specify either an object in Amazon S3, upload a .zip file archive deployment
 *       package directly, or specify the URI of a container image.</p>
 */
export interface FunctionCode {
  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for
   *   you.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p>
   */
  ImageUri?: string;
}

export namespace FunctionCode {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionCode): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

/**
 * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for
 *       failed asynchronous invocations.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
   */
  TargetArn?: string;
}

export namespace DeadLetterConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeadLetterConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A function's environment variable settings.
 *     You can use environment variables to adjust your function's behavior without updating code.
 *     An environment variable is a pair of strings that are stored in a function's version-specific configuration. </p>
 */
export interface Environment {
  /**
   * <p>Environment variable key-value pairs. For more information, see
   *     <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">Using Lambda environment variables</a>.</p>
   */
  Variables?: { [key: string]: string };
}

export namespace Environment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Environment): any => ({
    ...obj,
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
  });
}

/**
 * <p>Details about the connection between a Lambda function and an
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
 */
export interface FileSystemConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The path where the function can access the file system, starting with <code>/mnt/</code>.</p>
   */
  LocalMountPath: string | undefined;
}

export namespace FileSystemConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileSystemConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration values that override the container image Dockerfile settings. See
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>. </p>
 */
export interface ImageConfig {
  /**
   * <p>Specifies the entry point to their application, which is typically the location of the runtime
   *       executable.</p>
   */
  EntryPoint?: string[];

  /**
   * <p>Specifies parameters that you want to pass in with ENTRYPOINT. </p>
   */
  Command?: string[];

  /**
   * <p>Specifies the working directory.</p>
   */
  WorkingDirectory?: string;
}

export namespace ImageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfig): any => ({
    ...obj,
  });
}

export enum PackageType {
  Image = "Image",
  Zip = "Zip",
}

export enum Runtime {
  dotnetcore10 = "dotnetcore1.0",
  dotnetcore20 = "dotnetcore2.0",
  dotnetcore21 = "dotnetcore2.1",
  dotnetcore31 = "dotnetcore3.1",
  go1x = "go1.x",
  java11 = "java11",
  java8 = "java8",
  java8al2 = "java8.al2",
  nodejs = "nodejs",
  nodejs10x = "nodejs10.x",
  nodejs12x = "nodejs12.x",
  nodejs14x = "nodejs14.x",
  nodejs43 = "nodejs4.3",
  nodejs43edge = "nodejs4.3-edge",
  nodejs610 = "nodejs6.10",
  nodejs810 = "nodejs8.10",
  provided = "provided",
  providedal2 = "provided.al2",
  python27 = "python2.7",
  python36 = "python3.6",
  python37 = "python3.7",
  python38 = "python3.8",
  python39 = "python3.9",
  ruby25 = "ruby2.5",
  ruby27 = "ruby2.7",
}

export enum TracingMode {
  Active = "Active",
  PassThrough = "PassThrough",
}

/**
 * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a> tracing configuration.
 *       To sample and record incoming requests, set <code>Mode</code> to <code>Active</code>.</p>
 */
export interface TracingConfig {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: TracingMode | string;
}

export namespace TracingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TracingConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 */
export interface VpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];
}

export namespace VpcConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
}

export interface CreateFunctionRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
   */
  Runtime?: Runtime | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   */
  Role: string | undefined;

  /**
   * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
   *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
   *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
   */
  Handler?: string;

  /**
   * <p>The code for the function.</p>
   */
  Code: FunctionCode | undefined;

  /**
   * <p>A description of the function.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
   *       maximum allowed value is 900 seconds. For additional information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
   */
  Timeout?: number;

  /**
   * <p>The amount of  <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html">memory available to the function</a> at runtime.
   *       Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
   */
  MemorySize?: number;

  /**
   * <p>Set to true to publish the first version of the function during creation.</p>
   */
  Publish?: boolean;

  /**
   * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC.
   *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
   *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for ZIP archive.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
   *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   */
  Environment?: Environment;

  /**
   * <p>The ARN of the Amazon Web Services Key Management Service (KMS) key that's used to encrypt your function's environment
   *       variables. If it's not provided, Lambda uses a default service key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with
   * <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
   */
  TracingConfig?: TracingConfig;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a> to apply to the
   *       function.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
   *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   */
  Layers?: string[];

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>Container image <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-images.html#configuration-images-settings">configuration
   *       values</a> that override the values in the container image Dockerfile.</p>
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
   * includes a set of signing profiles, which define the trusted publishers for this function.</p>
   */
  CodeSigningConfigArn?: string;
}

export namespace CreateFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFunctionRequest): any => ({
    ...obj,
    ...(obj.Code && { Code: FunctionCode.filterSensitiveLog(obj.Code) }),
    ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
  });
}

/**
 * <p>Error messages for environment variables that couldn't be applied.</p>
 */
export interface EnvironmentError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace EnvironmentError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentError): any => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
  });
}

/**
 * <p>The results of an operation to update or read environment variables. If the operation is successful, the
 *       response contains the environment variables. If it failed, the response contains details about the error.</p>
 */
export interface EnvironmentResponse {
  /**
   * <p>Environment variable key-value pairs.</p>
   */
  Variables?: { [key: string]: string };

  /**
   * <p>Error messages for environment variables that couldn't be applied.</p>
   */
  Error?: EnvironmentError;
}

export namespace EnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentResponse): any => ({
    ...obj,
    ...(obj.Variables && { Variables: SENSITIVE_STRING }),
    ...(obj.Error && { Error: EnvironmentError.filterSensitiveLog(obj.Error) }),
  });
}

/**
 * <p>Error response to GetFunctionConfiguration.</p>
 */
export interface ImageConfigError {
  /**
   * <p>Error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Error message.</p>
   */
  Message?: string;
}

export namespace ImageConfigError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfigError): any => ({
    ...obj,
    ...(obj.Message && { Message: SENSITIVE_STRING }),
  });
}

/**
 * <p>Response to GetFunctionConfiguration request.</p>
 */
export interface ImageConfigResponse {
  /**
   * <p>Configuration values that override the container image Dockerfile.</p>
   */
  ImageConfig?: ImageConfig;

  /**
   * <p>Error response to GetFunctionConfiguration.</p>
   */
  Error?: ImageConfigError;
}

export namespace ImageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageConfigResponse): any => ({
    ...obj,
    ...(obj.Error && { Error: ImageConfigError.filterSensitiveLog(obj.Error) }),
  });
}

export enum LastUpdateStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Successful = "Successful",
}

export enum LastUpdateStatusReasonCode {
  EniLimitExceeded = "EniLimitExceeded",
  ImageAccessDenied = "ImageAccessDenied",
  ImageDeleted = "ImageDeleted",
  InsufficientRolePermissions = "InsufficientRolePermissions",
  InternalError = "InternalError",
  InvalidConfiguration = "InvalidConfiguration",
  InvalidImage = "InvalidImage",
  InvalidSecurityGroup = "InvalidSecurityGroup",
  InvalidSubnet = "InvalidSubnet",
  SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses",
}

/**
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface Layer {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
   */
  SigningProfileVersionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
   */
  SigningJobArn?: string;
}

export namespace Layer {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Layer): any => ({
    ...obj,
  });
}

export enum State {
  Active = "Active",
  Failed = "Failed",
  Inactive = "Inactive",
  Pending = "Pending",
}

export enum StateReasonCode {
  Creating = "Creating",
  EniLimitExceeded = "EniLimitExceeded",
  Idle = "Idle",
  ImageAccessDenied = "ImageAccessDenied",
  ImageDeleted = "ImageDeleted",
  InsufficientRolePermissions = "InsufficientRolePermissions",
  InternalError = "InternalError",
  InvalidConfiguration = "InvalidConfiguration",
  InvalidImage = "InvalidImage",
  InvalidSecurityGroup = "InvalidSecurityGroup",
  InvalidSubnet = "InvalidSubnet",
  Restoring = "Restoring",
  SubnetOutOfIPAddresses = "SubnetOutOfIPAddresses",
}

/**
 * <p>The function's X-Ray tracing configuration.</p>
 */
export interface TracingConfigResponse {
  /**
   * <p>The tracing mode.</p>
   */
  Mode?: TracingMode | string;
}

export namespace TracingConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TracingConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The VPC security groups and subnets that are attached to a Lambda function.</p>
 */
export interface VpcConfigResponse {
  /**
   * <p>A list of VPC subnet IDs.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>A list of VPC security groups IDs.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace VpcConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VpcConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's configuration.</p>
 */
export interface FunctionConfiguration {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  FunctionArn?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?: Runtime | string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The size of the function's deployment package, in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The function's description.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time in seconds that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The amount of memory available to the function at runtime. </p>
   */
  MemorySize?: number;

  /**
   * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModified?: string;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: VpcConfigResponse;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html">environment variables</a>.</p>
   */
  Environment?: EnvironmentResponse;

  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've
   *       configured a customer managed CMK.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>The function's X-Ray tracing configuration.</p>
   */
  TracingConfig?: TracingConfigResponse;

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *       layers</a>.</p>
   */
  Layers?: Layer[];

  /**
   * <p>The current state of the function. When the state is <code>Inactive</code>, you can reactivate the function by
   *       invoking it.</p>
   */
  State?: State | string;

  /**
   * <p>The reason for the function's current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The reason code for the function's current state. When the code is <code>Creating</code>, you can't invoke or
   *       modify the function.</p>
   */
  StateReasonCode?: StateReasonCode | string;

  /**
   * <p>The status of the last update that was performed on the function. This is first set to <code>Successful</code>
   *       after function creation completes.</p>
   */
  LastUpdateStatus?: LastUpdateStatus | string;

  /**
   * <p>The reason for the last update that was performed on the function.</p>
   */
  LastUpdateStatusReason?: string;

  /**
   * <p>The reason code for the last update that was performed on the function.</p>
   */
  LastUpdateStatusReasonCode?: LastUpdateStatusReasonCode | string;

  /**
   * <p>Connection settings for an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-filesystem.html">Amazon EFS file system</a>.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
   */
  PackageType?: PackageType | string;

  /**
   * <p>The function's image configuration values.</p>
   */
  ImageConfigResponse?: ImageConfigResponse;

  /**
   * <p>The ARN of the signing profile version.</p>
   */
  SigningProfileVersionArn?: string;

  /**
   * <p>The ARN of the signing job.</p>
   */
  SigningJobArn?: string;
}

export namespace FunctionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionConfiguration): any => ({
    ...obj,
    ...(obj.Environment && { Environment: EnvironmentResponse.filterSensitiveLog(obj.Environment) }),
    ...(obj.ImageConfigResponse && {
      ImageConfigResponse: ImageConfigResponse.filterSensitiveLog(obj.ImageConfigResponse),
    }),
  });
}

/**
 * <p>The code signature failed the integrity check. Lambda always blocks deployment if the integrity check
 *       fails, even if code signing policy is set to WARN.</p>
 */
export interface InvalidCodeSignatureException extends __SmithyException, $MetadataBearer {
  name: "InvalidCodeSignatureException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace InvalidCodeSignatureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidCodeSignatureException): any => ({
    ...obj,
  });
}

export interface DeleteAliasRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;
}

export namespace DeleteAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;
}

export namespace DeleteCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteCodeSigningConfigResponse {}

export namespace DeleteCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface DeleteEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;
}

export namespace DeleteEventSourceMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventSourceMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to update an EventSource
 *       Mapping in CREATING, or tried to delete a EventSource mapping currently in the UPDATING state.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteFunctionRequest {
  /**
   * <p>The name of the Lambda function or version.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:1</code> (with version).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version to delete. You can't delete a version that's referenced by an alias.</p>
   */
  Qualifier?: string;
}

export namespace DeleteFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionCodeSigningConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteFunctionCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionConcurrencyRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteFunctionConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface DeleteFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace DeleteFunctionEventInvokeConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface DeleteLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;
}

export namespace DeleteLayerVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLayerVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;
}

export namespace DeleteProvisionedConcurrencyConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsRequest {}

export namespace GetAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsResponse {
  /**
   * <p>Limits that are related to concurrency and code storage.</p>
   */
  AccountLimit?: AccountLimit;

  /**
   * <p>The number of functions and amount of storage in use.</p>
   */
  AccountUsage?: AccountUsage;
}

export namespace GetAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAliasRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;
}

export namespace GetAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAliasRequest): any => ({
    ...obj,
  });
}

export interface GetCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration. </p>
   */
  CodeSigningConfigArn: string | undefined;
}

export namespace GetCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface GetCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration</p>
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

export namespace GetCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface GetEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;
}

export namespace GetEventSourceMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventSourceMappingRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   */
  Qualifier?: string;
}

export namespace GetFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a function's deployment package.</p>
 */
export interface FunctionCodeLocation {
  /**
   * <p>The service that's hosting the file.</p>
   */
  RepositoryType?: string;

  /**
   * <p>A presigned URL that you can use to download the deployment package.</p>
   */
  Location?: string;

  /**
   * <p>URI of a container image in the Amazon ECR registry.</p>
   */
  ImageUri?: string;

  /**
   * <p>The resolved URI for the image.</p>
   */
  ResolvedImageUri?: string;
}

export namespace FunctionCodeLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionCodeLocation): any => ({
    ...obj,
  });
}

export interface Concurrency {
  /**
   * <p>The number of concurrent executions that are reserved for this function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">Managing Concurrency</a>.</p>
   */
  ReservedConcurrentExecutions?: number;
}

export namespace Concurrency {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Concurrency): any => ({
    ...obj,
  });
}

export interface GetFunctionResponse {
  /**
   * <p>The configuration of the function or version.</p>
   */
  Configuration?: FunctionConfiguration;

  /**
   * <p>The deployment package of the function or version.</p>
   */
  Code?: FunctionCodeLocation;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/tagging.html">tags</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html">reserved
   *         concurrency</a>.</p>
   */
  Concurrency?: Concurrency;
}

export namespace GetFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionResponse): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: FunctionConfiguration.filterSensitiveLog(obj.Configuration) }),
  });
}

export interface GetFunctionCodeSigningConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionCodeSigningConfigResponse {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionConcurrencyRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetFunctionConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface GetFunctionConcurrencyResponse {
  /**
   * <p>The number of simultaneous executions that are reserved for the function.</p>
   */
  ReservedConcurrentExecutions?: number;
}

export namespace GetFunctionConcurrencyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionConcurrencyResponse): any => ({
    ...obj,
  });
}

export interface GetFunctionConfigurationRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get details about a published version of the function.</p>
   */
  Qualifier?: string;
}

export namespace GetFunctionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionConfigurationRequest): any => ({
    ...obj,
  });
}

export interface FunctionEventInvokeConfig {
  /**
   * <p>The date and time that the configuration was last updated.</p>
   */
  LastModified?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;
}

export namespace FunctionEventInvokeConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FunctionEventInvokeConfig): any => ({
    ...obj,
  });
}

export interface GetFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;
}

export namespace GetFunctionEventInvokeConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;
}

export namespace GetLayerVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLayerVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionContentOutput {
  /**
   * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
   */
  Location?: string;

  /**
   * <p>The SHA-256 hash of the layer archive.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) for a signing profile version.</p>
   */
  SigningProfileVersionArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN)  of a signing job.</p>
   */
  SigningJobArn?: string;
}

export namespace LayerVersionContentOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerVersionContentOutput): any => ({
    ...obj,
  });
}

export interface GetLayerVersionResponse {
  /**
   * <p>Details about the layer version.</p>
   */
  Content?: LayerVersionContentOutput;

  /**
   * <p>The ARN of the layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  CreatedDate?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The layer's software license.</p>
   */
  LicenseInfo?: string;
}

export namespace GetLayerVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLayerVersionResponse): any => ({
    ...obj,
  });
}

export interface GetLayerVersionByArnRequest {
  /**
   * <p>The ARN of the layer version.</p>
   */
  Arn: string | undefined;
}

export namespace GetLayerVersionByArnRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLayerVersionByArnRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionPolicyRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;
}

export namespace GetLayerVersionPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLayerVersionPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetLayerVersionPolicyResponse {
  /**
   * <p>The policy document.</p>
   */
  Policy?: string;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;
}

export namespace GetLayerVersionPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLayerVersionPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a version or alias to get the policy for that resource.</p>
   */
  Qualifier?: string;
}

export namespace GetPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetPolicyResponse {
  /**
   * <p>The resource-based policy.</p>
   */
  Policy?: string;

  /**
   * <p>A unique identifier for the current revision of the policy.</p>
   */
  RevisionId?: string;
}

export namespace GetPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;
}

export namespace GetProvisionedConcurrencyConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export enum ProvisionedConcurrencyStatusEnum {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
}

export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;
}

export namespace GetProvisionedConcurrencyConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProvisionedConcurrencyConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified configuration does not exist.</p>
 */
export interface ProvisionedConcurrencyConfigNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ProvisionedConcurrencyConfigNotFoundException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace ProvisionedConcurrencyConfigNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedConcurrencyConfigNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Need additional permissions to configure VPC settings.</p>
 */
export interface EC2AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "EC2AccessDeniedException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace EC2AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was throttled by Amazon EC2 during Lambda function initialization using the execution role provided
 *       for the Lambda function.</p>
 */
export interface EC2ThrottledException extends __SmithyException, $MetadataBearer {
  name: "EC2ThrottledException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace EC2ThrottledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2ThrottledException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda received an unexpected EC2 client exception while setting up for the Lambda function.</p>
 */
export interface EC2UnexpectedException extends __SmithyException, $MetadataBearer {
  name: "EC2UnexpectedException";
  $fault: "server";
  Type?: string;
  Message?: string;
  EC2ErrorCode?: string;
}

export namespace EC2UnexpectedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EC2UnexpectedException): any => ({
    ...obj,
  });
}

/**
 * <p>An error occured when reading from or writing to a connected file system.</p>
 */
export interface EFSIOException extends __SmithyException, $MetadataBearer {
  name: "EFSIOException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSIOException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSIOException): any => ({
    ...obj,
  });
}

/**
 * <p>The function couldn't make a network connection to the configured file system.</p>
 */
export interface EFSMountConnectivityException extends __SmithyException, $MetadataBearer {
  name: "EFSMountConnectivityException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSMountConnectivityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSMountConnectivityException): any => ({
    ...obj,
  });
}

/**
 * <p>The function couldn't mount the configured file system due to a permission or configuration issue.</p>
 */
export interface EFSMountFailureException extends __SmithyException, $MetadataBearer {
  name: "EFSMountFailureException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSMountFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSMountFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The function was able to make a network connection to the configured file system, but the mount operation
 *       timed out.</p>
 */
export interface EFSMountTimeoutException extends __SmithyException, $MetadataBearer {
  name: "EFSMountTimeoutException";
  $fault: "client";
  Type?: string;
  Message?: string;
}

export namespace EFSMountTimeoutException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EFSMountTimeoutException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was not able to create an elastic network interface in the VPC, specified as part of Lambda
 *       function configuration, because the limit for network interfaces has been reached.</p>
 */
export interface ENILimitReachedException extends __SmithyException, $MetadataBearer {
  name: "ENILimitReachedException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace ENILimitReachedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ENILimitReachedException): any => ({
    ...obj,
  });
}

/**
 * <p>The request body could not be parsed as JSON.</p>
 */
export interface InvalidRequestContentException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestContentException";
  $fault: "client";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace InvalidRequestContentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestContentException): any => ({
    ...obj,
  });
}

/**
 * <p>The runtime or runtime version specified is not supported.</p>
 */
export interface InvalidRuntimeException extends __SmithyException, $MetadataBearer {
  name: "InvalidRuntimeException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace InvalidRuntimeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRuntimeException): any => ({
    ...obj,
  });
}

/**
 * <p>The Security Group ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSecurityGroupIDException extends __SmithyException, $MetadataBearer {
  name: "InvalidSecurityGroupIDException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace InvalidSecurityGroupIDException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSecurityGroupIDException): any => ({
    ...obj,
  });
}

/**
 * <p>The Subnet ID provided in the Lambda function VPC configuration is invalid.</p>
 */
export interface InvalidSubnetIDException extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnetIDException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace InvalidSubnetIDException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidSubnetIDException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda could not unzip the deployment package.</p>
 */
export interface InvalidZipFileException extends __SmithyException, $MetadataBearer {
  name: "InvalidZipFileException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace InvalidZipFileException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidZipFileException): any => ({
    ...obj,
  });
}

export enum InvocationType {
  DryRun = "DryRun",
  Event = "Event",
  RequestResponse = "RequestResponse",
}

export enum LogType {
  None = "None",
  Tail = "Tail",
}

export interface InvocationRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Choose from the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RequestResponse</code> (default) - Invoke the function synchronously. Keep the connection open until
   *           the function returns a response or times out. The API response includes the function response and additional
   *           data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Event</code> - Invoke the function asynchronously. Send events that fail multiple times to the
   *           function's dead-letter queue (if it's configured). The API response only includes a status code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DryRun</code> - Validate parameter values and verify that the user or role has permission to invoke
   *           the function.</p>
   *             </li>
   *          </ul>
   */
  InvocationType?: InvocationType | string;

  /**
   * <p>Set to <code>Tail</code> to include the execution log in the response.</p>
   */
  LogType?: LogType | string;

  /**
   * <p>Up to 3583 bytes of base64-encoded data about the invoking client to pass to the function in the context
   *       object.</p>
   */
  ClientContext?: string;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p>
   */
  Payload?: Uint8Array;

  /**
   * <p>Specify a version or alias to invoke a published version of the function.</p>
   */
  Qualifier?: string;
}

export namespace InvocationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvocationRequest): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
  });
}

export interface InvocationResponse {
  /**
   * <p>The HTTP status code is in the 200 range for a successful request. For the <code>RequestResponse</code>
   *       invocation type, this status code is 200. For the <code>Event</code> invocation type, this status code is 202. For
   *       the <code>DryRun</code> invocation type, the status code is 204.</p>
   */
  StatusCode?: number;

  /**
   * <p>If present, indicates that an error occurred during function execution. Details about the error are included
   *       in the response payload.</p>
   */
  FunctionError?: string;

  /**
   * <p>The last 4 KB of the execution log, which is base64 encoded.</p>
   */
  LogResult?: string;

  /**
   * <p>The response from the function, or an error object.</p>
   */
  Payload?: Uint8Array;

  /**
   * <p>The version of the function that executed. When you invoke a function with an alias, this indicates which
   *       version the alias resolved to.</p>
   */
  ExecutedVersion?: string;
}

export namespace InvocationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvocationResponse): any => ({
    ...obj,
    ...(obj.Payload && { Payload: SENSITIVE_STRING }),
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because KMS access was denied. Check the Lambda
 *       function's KMS permissions.</p>
 */
export interface KMSAccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "KMSAccessDeniedException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace KMSAccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSAccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is disabled. Check the Lambda
 *       function's KMS key settings.</p>
 */
export interface KMSDisabledException extends __SmithyException, $MetadataBearer {
  name: "KMSDisabledException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace KMSDisabledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSDisabledException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key used is in an invalid state for
 *       Decrypt. Check the function's KMS key settings.</p>
 */
export interface KMSInvalidStateException extends __SmithyException, $MetadataBearer {
  name: "KMSInvalidStateException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace KMSInvalidStateException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSInvalidStateException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was unable to decrypt the environment variables because the KMS key was not found. Check the function's
 *       KMS key settings. </p>
 */
export interface KMSNotFoundException extends __SmithyException, $MetadataBearer {
  name: "KMSNotFoundException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace KMSNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KMSNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input limit. For more information, see
 *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/limits.html">Limits</a>. </p>
 */
export interface RequestTooLargeException extends __SmithyException, $MetadataBearer {
  name: "RequestTooLargeException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace RequestTooLargeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestTooLargeException): any => ({
    ...obj,
  });
}

/**
 * <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 */
export interface ResourceNotReadyException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotReadyException";
  $fault: "server";
  /**
   * <p>The exception type.</p>
   */
  Type?: string;

  /**
   * <p>The exception message.</p>
   */
  message?: string;
}

export namespace ResourceNotReadyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotReadyException): any => ({
    ...obj,
  });
}

/**
 * <p>Lambda was not able to set up VPC access for the Lambda function because one or more configured subnets
 *       has no available IP addresses.</p>
 */
export interface SubnetIPAddressLimitReachedException extends __SmithyException, $MetadataBearer {
  name: "SubnetIPAddressLimitReachedException";
  $fault: "server";
  Type?: string;
  Message?: string;
}

export namespace SubnetIPAddressLimitReachedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetIPAddressLimitReachedException): any => ({
    ...obj,
  });
}

/**
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 */
export interface UnsupportedMediaTypeException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedMediaTypeException";
  $fault: "client";
  Type?: string;
  message?: string;
}

export namespace UnsupportedMediaTypeException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedMediaTypeException): any => ({
    ...obj,
  });
}

export interface InvokeAsyncRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The JSON that you want to provide to your Lambda function as input.</p>
   */
  InvokeArgs: Readable | ReadableStream | Blob | undefined;
}

export namespace InvokeAsyncRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvokeAsyncRequest): any => ({
    ...obj,
  });
}

/**
 * @deprecated
 *
 * <p>A success response (<code>202 Accepted</code>) indicates that the request is queued for invocation. </p>
 */
export interface InvokeAsyncResponse {
  /**
   * <p>The status code.</p>
   */
  Status?: number;
}

export namespace InvokeAsyncResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvokeAsyncResponse): any => ({
    ...obj,
  });
}

export interface ListAliasesRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify a function version to only list aliases that invoke that version.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Limit the number of aliases returned.</p>
   */
  MaxItems?: number;
}

export namespace ListAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListAliasesResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of aliases.</p>
   */
  Aliases?: AliasConfiguration[];
}

export namespace ListAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListCodeSigningConfigsRequest {
  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Maximum number of items to return.</p>
   */
  MaxItems?: number;
}

export namespace ListCodeSigningConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCodeSigningConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListCodeSigningConfigsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>The code signing configurations</p>
   */
  CodeSigningConfigs?: CodeSigningConfig[];
}

export namespace ListCodeSigningConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCodeSigningConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListEventSourceMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - The ARN of the data stream or a stream consumer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - The ARN of the stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - The ARN of the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - The ARN of the cluster.</p>
   *             </li>
   *          </ul>
   */
  EventSourceArn?: string;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName?: string;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of event source mappings to return. Note that ListEventSourceMappings returns
   *       a maximum of 100 items in each response, even if you set the number higher.</p>
   */
  MaxItems?: number;
}

export namespace ListEventSourceMappingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventSourceMappingsRequest): any => ({
    ...obj,
  });
}

export interface ListEventSourceMappingsResponse {
  /**
   * <p>A pagination token that's returned when the response doesn't contain all event source mappings.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of event source mappings.</p>
   */
  EventSourceMappings?: EventSourceMappingConfiguration[];
}

export namespace ListEventSourceMappingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventSourceMappingsResponse): any => ({
    ...obj,
  });
}

export interface ListFunctionEventInvokeConfigsRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of configurations to return.</p>
   */
  MaxItems?: number;
}

export namespace ListFunctionEventInvokeConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionEventInvokeConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionEventInvokeConfigsResponse {
  /**
   * <p>A list of configurations.</p>
   */
  FunctionEventInvokeConfigs?: FunctionEventInvokeConfig[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;
}

export namespace ListFunctionEventInvokeConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionEventInvokeConfigsResponse): any => ({
    ...obj,
  });
}

export enum FunctionVersion {
  ALL = "ALL",
}

export interface ListFunctionsRequest {
  /**
   * <p>For Lambda@Edge functions, the Amazon Web Services Region of the master function. For example, <code>us-east-1</code> filters
   *       the list of functions to only include Lambda@Edge functions replicated from a master function in US East (N.
   *       Virginia). If specified, you must set <code>FunctionVersion</code> to <code>ALL</code>.</p>
   */
  MasterRegion?: string;

  /**
   * <p>Set to <code>ALL</code> to include entries for all published versions of each function.</p>
   */
  FunctionVersion?: FunctionVersion | string;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of functions to return in the response. Note that <code>ListFunctions</code> returns a maximum of 50 items in each response,
   *       even if you set the number higher.</p>
   */
  MaxItems?: number;
}

export namespace ListFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of Lambda functions.</p>
 */
export interface ListFunctionsResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of Lambda functions.</p>
   */
  Functions?: FunctionConfiguration[];
}

export namespace ListFunctionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsResponse): any => ({
    ...obj,
    ...(obj.Functions && { Functions: obj.Functions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
  });
}

export interface ListFunctionsByCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Maximum number of items to return.</p>
   */
  MaxItems?: number;
}

export namespace ListFunctionsByCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsByCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface ListFunctionsByCodeSigningConfigResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>The function ARNs. </p>
   */
  FunctionArns?: string[];
}

export namespace ListFunctionsByCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFunctionsByCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface ListLayersRequest {
  /**
   * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
   */
  CompatibleRuntime?: Runtime | string;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of layers to return.</p>
   */
  MaxItems?: number;
}

export namespace ListLayersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLayersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayerVersionsListItem {
  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the version was created, in ISO 8601 format. For example, <code>2018-11-27T15:10:45.123+0000</code>.</p>
   */
  CreatedDate?: string;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The layer's open-source license.</p>
   */
  LicenseInfo?: string;
}

export namespace LayerVersionsListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerVersionsListItem): any => ({
    ...obj,
  });
}

/**
 * <p>Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>.</p>
 */
export interface LayersListItem {
  /**
   * <p>The name of the layer.</p>
   */
  LayerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The newest version of the layer.</p>
   */
  LatestMatchingVersion?: LayerVersionsListItem;
}

export namespace LayersListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayersListItem): any => ({
    ...obj,
  });
}

export interface ListLayersResponse {
  /**
   * <p>A pagination token returned when the response doesn't contain all layers.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of function layers.</p>
   */
  Layers?: LayersListItem[];
}

export namespace ListLayersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLayersResponse): any => ({
    ...obj,
  });
}

export interface ListLayerVersionsRequest {
  /**
   * <p>A runtime identifier. For example, <code>go1.x</code>.</p>
   */
  CompatibleRuntime?: Runtime | string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>A pagination token returned by a previous call.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of versions to return.</p>
   */
  MaxItems?: number;
}

export namespace ListLayerVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLayerVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListLayerVersionsResponse {
  /**
   * <p>A pagination token returned when the response doesn't contain all versions.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of versions.</p>
   */
  LayerVersions?: LayerVersionsListItem[];
}

export namespace ListLayerVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLayerVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListProvisionedConcurrencyConfigsRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>Specify a number to limit the number of configurations returned.</p>
   */
  MaxItems?: number;
}

export namespace ListProvisionedConcurrencyConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisionedConcurrencyConfigsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Details about the provisioned concurrency configuration for a function alias or version.</p>
 */
export interface ProvisionedConcurrencyConfigListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the alias or version.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;
}

export namespace ProvisionedConcurrencyConfigListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProvisionedConcurrencyConfigListItem): any => ({
    ...obj,
  });
}

export interface ListProvisionedConcurrencyConfigsResponse {
  /**
   * <p>A list of provisioned concurrency configurations.</p>
   */
  ProvisionedConcurrencyConfigs?: ProvisionedConcurrencyConfigListItem[];

  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;
}

export namespace ListProvisionedConcurrencyConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProvisionedConcurrencyConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;
}

export namespace ListTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>The function's tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface ListVersionsByFunctionRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of versions to return. Note that <code>ListVersionsByFunction</code> returns a maximum of 50 items in each response,
   *       even if you set the number higher.</p>
   */
  MaxItems?: number;
}

export namespace ListVersionsByFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVersionsByFunctionRequest): any => ({
    ...obj,
  });
}

export interface ListVersionsByFunctionResponse {
  /**
   * <p>The pagination token that's included if more results are available.</p>
   */
  NextMarker?: string;

  /**
   * <p>A list of Lambda function versions.</p>
   */
  Versions?: FunctionConfiguration[];
}

export namespace ListVersionsByFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListVersionsByFunctionResponse): any => ({
    ...obj,
    ...(obj.Versions && { Versions: obj.Versions.map((item) => FunctionConfiguration.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. You can specify either an Amazon S3 location,
 *       or upload a layer archive directly.</p>
 */
export interface LayerVersionContentInput {
  /**
   * <p>The Amazon S3 bucket of the layer archive.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the layer archive.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the layer archive object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the layer archive. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for
   *       you.</p>
   */
  ZipFile?: Uint8Array;
}

export namespace LayerVersionContentInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LayerVersionContentInput): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

export interface PublishLayerVersionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The function layer archive.</p>
   */
  Content: LayerVersionContentInput | undefined;

  /**
   * <p>A list of compatible <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">function
   *         runtimes</a>. Used for filtering with <a>ListLayers</a> and <a>ListLayerVersions</a>.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The layer's software license. It can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An <a href="https://spdx.org/licenses/">SPDX license identifier</a>. For example,
   *           <code>MIT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The URL of a license hosted on the internet. For example,
   *           <code>https://opensource.org/licenses/MIT</code>.</p>
   *             </li>
   *             <li>
   *                <p>The full text of the license.</p>
   *             </li>
   *          </ul>
   */
  LicenseInfo?: string;
}

export namespace PublishLayerVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishLayerVersionRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: LayerVersionContentInput.filterSensitiveLog(obj.Content) }),
  });
}

export interface PublishLayerVersionResponse {
  /**
   * <p>Details about the layer version.</p>
   */
  Content?: LayerVersionContentOutput;

  /**
   * <p>The ARN of the layer.</p>
   */
  LayerArn?: string;

  /**
   * <p>The ARN of the layer version.</p>
   */
  LayerVersionArn?: string;

  /**
   * <p>The description of the version.</p>
   */
  Description?: string;

  /**
   * <p>The date that the layer version was created, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  CreatedDate?: string;

  /**
   * <p>The version number.</p>
   */
  Version?: number;

  /**
   * <p>The layer's compatible runtimes.</p>
   */
  CompatibleRuntimes?: (Runtime | string)[];

  /**
   * <p>The layer's software license.</p>
   */
  LicenseInfo?: string;
}

export namespace PublishLayerVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishLayerVersionResponse): any => ({
    ...obj,
  });
}

export interface PublishVersionRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Only publish a version if the hash value matches the value that's specified. Use this option to avoid
   *       publishing a version if the function code has changed since you last updated it. You can get the hash for the
   *       version that you uploaded from the output of <a>UpdateFunctionCode</a>.</p>
   */
  CodeSha256?: string;

  /**
   * <p>A description for the version to override the description in the function configuration.</p>
   */
  Description?: string;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid
   *       publishing a version if the function configuration has changed since you last updated it.</p>
   */
  RevisionId?: string;
}

export namespace PublishVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishVersionRequest): any => ({
    ...obj,
  });
}

export interface PutFunctionCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace PutFunctionCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFunctionCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface PutFunctionCodeSigningConfigResponse {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;
}

export namespace PutFunctionCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFunctionCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface PutFunctionConcurrencyRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The number of simultaneous executions to reserve for the function.</p>
   */
  ReservedConcurrentExecutions: number | undefined;
}

export namespace PutFunctionConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFunctionConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface PutFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;
}

export namespace PutFunctionEventInvokeConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}

export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The version number or alias name.</p>
   */
  Qualifier: string | undefined;

  /**
   * <p>The amount of provisioned concurrency to allocate for the version or alias.</p>
   */
  ProvisionedConcurrentExecutions: number | undefined;
}

export namespace PutProvisionedConcurrencyConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProvisionedConcurrencyConfigRequest): any => ({
    ...obj,
  });
}

export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * <p>The amount of provisioned concurrency requested.</p>
   */
  RequestedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency available.</p>
   */
  AvailableProvisionedConcurrentExecutions?: number;

  /**
   * <p>The amount of provisioned concurrency allocated.</p>
   */
  AllocatedProvisionedConcurrentExecutions?: number;

  /**
   * <p>The status of the allocation process.</p>
   */
  Status?: ProvisionedConcurrencyStatusEnum | string;

  /**
   * <p>For failed allocations, the reason that provisioned concurrency could not be allocated.</p>
   */
  StatusReason?: string;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>.</p>
   */
  LastModified?: string;
}

export namespace PutProvisionedConcurrencyConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutProvisionedConcurrencyConfigResponse): any => ({
    ...obj,
  });
}

export interface RemoveLayerVersionPermissionRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the layer.</p>
   */
  LayerName: string | undefined;

  /**
   * <p>The version number.</p>
   */
  VersionNumber: number | undefined;

  /**
   * <p>The identifier that was specified when the statement was added.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace RemoveLayerVersionPermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveLayerVersionPermissionRequest): any => ({
    ...obj,
  });
}

export interface RemovePermissionRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>Statement ID of the permission to remove.</p>
   */
  StatementId: string | undefined;

  /**
   * <p>Specify a version or alias to remove permissions from a published version of the function.</p>
   */
  Qualifier?: string;

  /**
   * <p>Only update the policy if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       policy that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace RemovePermissionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemovePermissionRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;

  /**
   * <p>A list of tags to apply to the function.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  Resource: string | undefined;

  /**
   * <p>A list of tag keys to remove from the function.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAliasRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the alias.</p>
   */
  Name: string | undefined;

  /**
   * <p>The function version that the alias invokes.</p>
   */
  FunctionVersion?: string;

  /**
   * <p>A description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html#configuring-alias-routing">routing
   *         configuration</a> of the alias.</p>
   */
  RoutingConfig?: AliasRoutingConfiguration;

  /**
   * <p>Only update the alias if the revision ID matches the ID that's specified. Use this option to avoid modifying
   *       an alias that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace UpdateAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateCodeSigningConfigRequest {
  /**
   * <p>The The Amazon Resource Name (ARN) of the code signing configuration.</p>
   */
  CodeSigningConfigArn: string | undefined;

  /**
   * <p>Descriptive name for this code signing configuration.</p>
   */
  Description?: string;

  /**
   * <p>Signing profiles for this code signing configuration.</p>
   */
  AllowedPublishers?: AllowedPublishers;

  /**
   * <p>The code signing policy.</p>
   */
  CodeSigningPolicies?: CodeSigningPolicies;
}

export namespace UpdateCodeSigningConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeSigningConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateCodeSigningConfigResponse {
  /**
   * <p>The code signing configuration</p>
   */
  CodeSigningConfig: CodeSigningConfig | undefined;
}

export namespace UpdateCodeSigningConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCodeSigningConfigResponse): any => ({
    ...obj,
  });
}

export interface UpdateEventSourceMappingRequest {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID: string | undefined;

  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Version or Alias ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:MyFunction</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64
   *       characters in length.</p>
   */
  FunctionName?: string;

  /**
   * <p>If true, the event source mapping is active. Set to false to pause polling and invocation.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Amazon Kinesis</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon DynamoDB Streams</b> - Default 100. Max 1,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Simple Queue Service</b> - Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Amazon Managed Streaming for Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Self-Managed Apache Kafka</b> - Default 100. Max 10,000.</p>
   *             </li>
   *          </ul>
   */
  BatchSize?: number;

  /**
   * <p>(Streams and SQS standard queues) The maximum amount of time to gather records before invoking the function, in seconds.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.</p>
   */
  DestinationConfig?: DestinationConfig;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is infinite (-1).</p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) If the function returns an error, split the batch in two and retry.</p>
   */
  BisectBatchOnFunctionError?: boolean;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records will be retried until the record expires.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The number of batches to process from each shard concurrently.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>An array of authentication protocols or VPC components required to secure your event source.</p>
   */
  SourceAccessConfigurations?: SourceAccessConfiguration[];

  /**
   * <p>(Streams only) The duration in seconds of a processing window. The range is between 1 second up to 900 seconds.</p>
   */
  TumblingWindowInSeconds?: number;

  /**
   * <p>(Streams only) A list of current response type enums applied to the event source mapping.</p>
   */
  FunctionResponseTypes?: (FunctionResponseType | string)[];
}

export namespace UpdateEventSourceMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventSourceMappingRequest): any => ({
    ...obj,
  });
}

export interface UpdateFunctionCodeRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The base64-encoded contents of the deployment package. Amazon Web Services SDK and Amazon Web Services CLI clients handle the encoding for
   *       you.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>An Amazon S3 bucket in the same Amazon Web Services Region as your function. The bucket can be in a different Amazon Web Services account.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the deployment package.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the deployment package object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>URI of a container image in the Amazon ECR registry.</p>
   */
  ImageUri?: string;

  /**
   * <p>Set to true to publish a new version of the function after updating the code. This has the same effect as
   *       calling <a>PublishVersion</a> separately.</p>
   */
  Publish?: boolean;

  /**
   * <p>Set to true to validate the request parameters and access permissions without modifying the function
   *       code.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       function that has changed since you last read it.</p>
   */
  RevisionId?: string;
}

export namespace UpdateFunctionCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionCodeRequest): any => ({
    ...obj,
    ...(obj.ZipFile && { ZipFile: SENSITIVE_STRING }),
  });
}

export interface UpdateFunctionConfigurationRequest {
  /**
   * <p>The name of the Lambda function.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64
   *       characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the
   *       file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information,
   *       see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
   */
  Handler?: string;

  /**
   * <p>A description of the function.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The
   *       maximum allowed value is 900 seconds. For additional information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html">Lambda execution environment</a>.</p>
   */
  Timeout?: number;

  /**
   * <p>The amount of  <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html">memory available to the function</a> at runtime.
   *       Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB.</p>
   */
  MemorySize?: number;

  /**
   * <p>For network connectivity to Amazon Web Services resources in a VPC, specify a list of security groups and subnets in the VPC.
   *       When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more
   *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  VpcConfig?: VpcConfig;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   */
  Environment?: Environment;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
   */
  Runtime?: Runtime | string;

  /**
   * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events
   *       when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">Dead Letter Queues</a>.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The ARN of the Amazon Web Services Key Management Service (KMS) key that's used to encrypt your function's environment
   *       variables. If it's not provided, Lambda uses a default service key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with
   * <a href="https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html">X-Ray</a>.</p>
   */
  TracingConfig?: TracingConfig;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a
   *       function that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a>
   *       to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   */
  Layers?: string[];

  /**
   * <p>Connection settings for an Amazon EFS file system.</p>
   */
  FileSystemConfigs?: FileSystemConfig[];

  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-parms.html">Container image configuration
   *         values</a> that override the values in the container image Dockerfile.</p>
   */
  ImageConfig?: ImageConfig;
}

export namespace UpdateFunctionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionConfigurationRequest): any => ({
    ...obj,
    ...(obj.Environment && { Environment: Environment.filterSensitiveLog(obj.Environment) }),
  });
}

export interface UpdateFunctionEventInvokeConfigRequest {
  /**
   * <p>The name of the Lambda function, version, or alias.</p>
   *          <p class="title">
   *             <b>Name formats</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function name</b> - <code>my-function</code> (name-only), <code>my-function:v1</code> (with alias).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p>
   *             </li>
   *          </ul>
   *          <p>You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN.
   *       If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A version number or alias name.</p>
   */
  Qualifier?: string;

  /**
   * <p>The maximum number of times to retry when the function returns an error.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The maximum age of a request that Lambda sends to a function for processing.</p>
   */
  MaximumEventAgeInSeconds?: number;

  /**
   * <p>A destination for events after they have been sent to a function for processing.</p>
   *          <p class="title">
   *             <b>Destinations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Function</b> - The Amazon Resource Name (ARN) of a Lambda function.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Queue</b> - The ARN of an SQS queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Topic</b> - The ARN of an SNS topic.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Event Bus</b> - The ARN of an Amazon EventBridge event bus.</p>
   *             </li>
   *          </ul>
   */
  DestinationConfig?: DestinationConfig;
}

export namespace UpdateFunctionEventInvokeConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFunctionEventInvokeConfigRequest): any => ({
    ...obj,
  });
}
