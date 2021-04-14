import {
  AbortConfig,
  AlertTarget,
  AttributePayload,
  AuditCheckConfiguration,
  AuditFrequency,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuthInfo,
  AuthResult,
  AuthorizerConfig,
  AuthorizerStatus,
  AutoRegistrationStatus,
  Behavior,
  BillingGroupProperties,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  JobExecutionsRolloutConfig,
  LogLevel,
  MetricToRetain,
  MitigationActionParams,
  PresignedUrlConfig,
  ProvisioningHook,
  ResourceIdentifier,
  StreamFile,
  Tag,
  ThingGroupProperties,
  TimeoutConfig,
  TopicRuleDestinationStatus,
  TopicRulePayload,
} from "./models_0";
import {
  CACertificateStatus,
  CertificateStatus,
  Configuration,
  DetectMitigationActionsTaskTarget,
  DomainConfigurationStatus,
  LogTarget,
  RegistrationConfig,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
  ViolationEventOccurrenceRange,
} from "./models_1";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface RegisterThingResponse {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: { [key: string]: string };
}

export namespace RegisterThingResponse {
  export const filterSensitiveLog = (obj: RegisterThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource registration failed.</p>
 */
export interface ResourceRegistrationFailureException extends __SmithyException, $MetadataBearer {
  name: "ResourceRegistrationFailureException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceRegistrationFailureException {
  export const filterSensitiveLog = (obj: ResourceRegistrationFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The reason the certificate transfer was rejected.</p>
   */
  rejectReason?: string;
}

export namespace RejectCertificateTransferRequest {
  export const filterSensitiveLog = (obj: RejectCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromBillingGroupRequest {
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromBillingGroupResponse {}

export namespace RemoveThingFromBillingGroupResponse {
  export const filterSensitiveLog = (obj: RemoveThingFromBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupRequest {
  /**
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;
}

export namespace RemoveThingFromThingGroupRequest {
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveThingFromThingGroupResponse {}

export namespace RemoveThingFromThingGroupResponse {
  export const filterSensitiveLog = (obj: RemoveThingFromThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

export namespace ReplaceTopicRuleRequest {
  export const filterSensitiveLog = (obj: ReplaceTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface SearchIndexRequest {
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace SearchIndexRequest {
  export const filterSensitiveLog = (obj: SearchIndexRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];
}

export namespace ThingGroupDocument {
  export const filterSensitiveLog = (obj: ThingGroupDocument): any => ({
    ...obj,
  });
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  /**
   * <p>True if the thing is connected to the AWS IoT service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for more than a few weeks, the time value might be missing.</p>
   */
  timestamp?: number;
}

export namespace ThingConnectivity {
  export const filterSensitiveLog = (obj: ThingConnectivity): any => ({
    ...obj,
  });
}

/**
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: string[];

  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The shadow.</p>
   */
  shadow?: string;

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: ThingConnectivity;
}

export namespace ThingDocument {
  export const filterSensitiveLog = (obj: ThingDocument): any => ({
    ...obj,
  });
}

export interface SearchIndexResponse {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things that match the search query.</p>
   */
  things?: ThingDocument[];

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: ThingGroupDocument[];
}

export namespace SearchIndexResponse {
  export const filterSensitiveLog = (obj: SearchIndexResponse): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

export namespace SetDefaultAuthorizerRequest {
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface SetDefaultAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace SetDefaultAuthorizerResponse {
  export const filterSensitiveLog = (obj: SetDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  export const filterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace LoggingOptionsPayload {
  export const filterSensitiveLog = (obj: LoggingOptionsPayload): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

export namespace SetLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingLevelRequest {
  /**
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;

  /**
   * <p>The log level.</p>
   */
  logLevel: LogLevel | string | undefined;
}

export namespace SetV2LoggingLevelRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingLevelRequest): any => ({
    ...obj,
  });
}

export interface SetV2LoggingOptionsRequest {
  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;
}

export namespace SetV2LoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskRequest {
  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply
   *       them to a type of audit check, to all findings from an audit, or to a
   *       specific set of
   *       findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.</p>
   */
  auditCheckToActionsMapping: { [key: string]: string[] } | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;
}

export namespace StartAuditMitigationActionsTaskRequest {
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface StartAuditMitigationActionsTaskResponse {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

export namespace StartAuditMitigationActionsTaskResponse {
  export const filterSensitiveLog = (obj: StartAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 */
export interface TaskAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "TaskAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TaskAlreadyExistsException {
  export const filterSensitiveLog = (obj: TaskAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface StartDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;

  /**
   * <p>
   *       Specifies the ML Detect findings to which the mitigation actions are applied.
   *     </p>
   */
  target: DetectMitigationActionsTaskTarget | undefined;

  /**
   * <p>
   *       The actions to be performed when a device has unexpected behavior.
   *     </p>
   */
  actions: string[] | undefined;

  /**
   * <p>
   *       Specifies the time period of which violation events occurred between.
   *     </p>
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * <p>
   *       Specifies to list only active violations.
   *     </p>
   */
  includeOnlyActiveViolations?: boolean;

  /**
   * <p>
   *       Specifies to include suppressed alerts.
   *     </p>
   */
  includeSuppressedAlerts?: boolean;

  /**
   * <p>
   *       Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
   *     </p>
   */
  clientRequestToken?: string;
}

export namespace StartDetectMitigationActionsTaskRequest {
  export const filterSensitiveLog = (obj: StartDetectMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface StartDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;
}

export namespace StartDetectMitigationActionsTaskResponse {
  export const filterSensitiveLog = (obj: StartDetectMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskRequest {
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: string[] | undefined;
}

export namespace StartOnDemandAuditTaskRequest {
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface StartOnDemandAuditTaskResponse {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

export namespace StartOnDemandAuditTaskResponse {
  export const filterSensitiveLog = (obj: StartOnDemandAuditTaskResponse): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskRequest {
  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket: string | undefined;

  /**
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited
   * 			JSON file. Each line contains the parameter values to provision one device
   * 			(thing).</p>
   */
  inputFileKey: string | undefined;

  /**
   * <p>The IAM role ARN that grants permission the input file.</p>
   */
  roleArn: string | undefined;
}

export namespace StartThingRegistrationTaskRequest {
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StartThingRegistrationTaskResponse {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export namespace StartThingRegistrationTaskResponse {
  export const filterSensitiveLog = (obj: StartThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskRequest {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export namespace StopThingRegistrationTaskRequest {
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface StopThingRegistrationTaskResponse {}

export namespace StopThingRegistrationTaskResponse {
  export const filterSensitiveLog = (obj: StopThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface TestAuthorizationRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: string[];

  /**
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: string[];
}

export namespace TestAuthorizationRequest {
  export const filterSensitiveLog = (obj: TestAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface TestAuthorizationResponse {
  /**
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

export namespace TestAuthorizationResponse {
  export const filterSensitiveLog = (obj: TestAuthorizationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response is invalid.</p>
 */
export interface InvalidResponseException extends __SmithyException, $MetadataBearer {
  name: "InvalidResponseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidResponseException {
  export const filterSensitiveLog = (obj: InvalidResponseException): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: { [key: string]: string };

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
}

export namespace HttpContext {
  export const filterSensitiveLog = (obj: HttpContext): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;
}

export namespace MqttContext {
  export const filterSensitiveLog = (obj: MqttContext): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
}

export namespace TlsContext {
  export const filterSensitiveLog = (obj: TlsContext): any => ({
    ...obj,
  });
}

export interface TestInvokeAuthorizerRequest {
  /**
   * <p>The custom authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The token returned by your custom authentication service.</p>
   */
  token?: string;

  /**
   * <p>The signature made with the token and your custom authentication service's private
   *          key. This value must be Base-64-encoded.</p>
   */
  tokenSignature?: string;

  /**
   * <p>Specifies a test HTTP authorization request.</p>
   */
  httpContext?: HttpContext;

  /**
   * <p>Specifies a test MQTT authorization request.</p>
   */
  mqttContext?: MqttContext;

  /**
   * <p>Specifies a test TLS authorization request.</p>
   */
  tlsContext?: TlsContext;
}

export namespace TestInvokeAuthorizerRequest {
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface TestInvokeAuthorizerResponse {
  /**
   * <p>True if the token is authenticated, otherwise false.</p>
   */
  isAuthenticated?: boolean;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * <p>IAM policy documents.</p>
   */
  policyDocuments?: string[];

  /**
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   */
  refreshAfterInSeconds?: number;

  /**
   * <p>The number of seconds after which the connection is terminated.</p>
   */
  disconnectAfterInSeconds?: number;
}

export namespace TestInvokeAuthorizerResponse {
  export const filterSensitiveLog = (obj: TestInvokeAuthorizerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the TransferCertificate operation.</p>
 */
export interface TransferCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The AWS account.</p>
   */
  targetAwsAccount: string | undefined;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

export namespace TransferCertificateRequest {
  export const filterSensitiveLog = (obj: TransferCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateResponse {
  /**
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;
}

export namespace TransferCertificateResponse {
  export const filterSensitiveLog = (obj: TransferCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 */
export interface TransferConflictException extends __SmithyException, $MetadataBearer {
  name: "TransferConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferConflictException {
  export const filterSensitiveLog = (obj: TransferConflictException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountAuditConfigurationRequest {
  /**
   * <p>The Amazon
   *       Resource Name
   *       (ARN)
   *       of the role that grants permission
   *       to
   *       AWS IoT to access information about your devices, policies,
   *       certificates,
   *       and other items as required when performing an audit.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: { [key: string]: AuditNotificationTarget };

  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *           <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *           <p>You
   *       cannot
   *       disable a check if
   *       it's
   *       used by any scheduled audit. You must first delete the check from the scheduled audit or
   *       delete the scheduled audit itself.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };
}

export namespace UpdateAccountAuditConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateAccountAuditConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountAuditConfigurationResponse {}

export namespace UpdateAccountAuditConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateAccountAuditConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * <p>
   *       The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *     </p>
   */
  expirationDate?: Date;

  /**
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   */
  suppressIndefinitely?: boolean;

  /**
   * <p>
   *       The description of the audit suppression.
   *     </p>
   */
  description?: string;
}

export namespace UpdateAuditSuppressionRequest {
  export const filterSensitiveLog = (obj: UpdateAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuditSuppressionResponse {}

export namespace UpdateAuditSuppressionResponse {
  export const filterSensitiveLog = (obj: UpdateAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface UpdateAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The key used to extract the token from the HTTP headers. </p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the token signature.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };

  /**
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus | string;
}

export namespace UpdateAuthorizerRequest {
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface UpdateAuthorizerResponse {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace UpdateAuthorizerResponse {
  export const filterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface UpdateBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties: BillingGroupProperties | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>UpdateBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateBillingGroupRequest {
  export const filterSensitiveLog = (obj: UpdateBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateBillingGroupResponse {
  /**
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
}

export namespace UpdateBillingGroupResponse {
  export const filterSensitiveLog = (obj: UpdateBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus?: CACertificateStatus | string;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>If true, removes auto registration.</p>
   */
  removeAutoRegistration?: boolean;
}

export namespace UpdateCACertificateRequest {
  export const filterSensitiveLog = (obj: UpdateCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER  or PENDING_ACTIVATION will result
   *          in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by AWS IoT. They
   *          are not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | string | undefined;
}

export namespace UpdateCertificateRequest {
  export const filterSensitiveLog = (obj: UpdateCertificateRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomMetricRequest {
  /**
   * <p> The name of the custom metric.
   *       Cannot be updated. </p>
   */
  metricName: string | undefined;

  /**
   * <p>
   *       Field
   *       represents a friendly name in the console for the custom metric,
   *       it
   *       doesn't have to be unique. Don't use this name as the metric identifier in
   *       the device metric report.
   *       Can
   *       be updated. </p>
   */
  displayName: string | undefined;
}

export namespace UpdateCustomMetricRequest {
  export const filterSensitiveLog = (obj: UpdateCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface UpdateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName?: string;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   */
  metricArn?: string;

  /**
   * <p>
   *       The type of the custom metric. Types include <code>string-list</code>, <code>ip-address-list</code>, <code>number-list</code>, and <code>number</code>.
   *     </p>
   */
  metricType?: CustomMetricType | string;

  /**
   * <p>
   *       A friendly name in the console for the custom metric
   *     </p>
   */
  displayName?: string;

  /**
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   */
  creationDate?: Date;

  /**
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateCustomMetricResponse {
  export const filterSensitiveLog = (obj: UpdateCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface UpdateDimensionRequest {
  /**
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   */
  stringValues: string[] | undefined;
}

export namespace UpdateDimensionRequest {
  export const filterSensitiveLog = (obj: UpdateDimensionRequest): any => ({
    ...obj,
  });
}

export interface UpdateDimensionResponse {
  /**
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource
   *       Name (ARN)of
   *       the created dimension.</p>
   */
  arn?: string;

  /**
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType | string;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was initially created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was most recently updated.</p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateDimensionResponse {
  export const filterSensitiveLog = (obj: UpdateDimensionResponse): any => ({
    ...obj,
  });
}

export interface UpdateDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be updated.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The status to which the domain configuration should be updated.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>Removes the authorization configuration from a domain.</p>
   */
  removeAuthorizerConfig?: boolean;
}

export namespace UpdateDomainConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration that was updated.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration that was updated.</p>
   */
  domainConfigurationArn?: string;
}

export namespace UpdateDomainConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateDomainConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties to update.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the dynamic thing group to update.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The dynamic thing group index to update.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: 'AWS_Things'.</p>
   * 		       </note>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string to update.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version to update.</p>
   * 		       <note>
   * 			         <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   * 		       </note>
   */
  queryVersion?: string;
}

export namespace UpdateDynamicThingGroupRequest {
  export const filterSensitiveLog = (obj: UpdateDynamicThingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

export namespace UpdateDynamicThingGroupResponse {
  export const filterSensitiveLog = (obj: UpdateDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationsRequest {
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };
}

export namespace UpdateEventConfigurationsRequest {
  export const filterSensitiveLog = (obj: UpdateEventConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventConfigurationsResponse {}

export namespace UpdateEventConfigurationsResponse {
  export const filterSensitiveLog = (obj: UpdateEventConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface UpdateIndexingConfigurationRequest {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>Thing group indexing configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

export namespace UpdateIndexingConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateIndexingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateIndexingConfigurationResponse {}

export namespace UpdateIndexingConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateIndexingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateJobRequest {
  /**
   * <p>The ID of the job to be updated.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, AWS IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionRequest {
  /**
   * <p>The friendly name for the mitigation action. You cannot change the name by using
   *         <code>UpdateMitigationAction</code>. Instead, you must delete and
   *       recreate the
   *       mitigation action with the new name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;
}

export namespace UpdateMitigationActionRequest {
  export const filterSensitiveLog = (obj: UpdateMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionResponse {
  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  actionId?: string;
}

export namespace UpdateMitigationActionResponse {
  export const filterSensitiveLog = (obj: UpdateMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>Updates the pre-provisioning hook template.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Removes pre-provisioning hook template.</p>
   */
  removePreProvisioningHook?: boolean;
}

export namespace UpdateProvisioningTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateProvisioningTemplateResponse {}

export namespace UpdateProvisioningTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateRoleAliasRequest {
  /**
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The number of seconds the credential will be valid.</p>
   */
  credentialDurationSeconds?: number;
}

export namespace UpdateRoleAliasRequest {
  export const filterSensitiveLog = (obj: UpdateRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoleAliasResponse {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;
}

export namespace UpdateRoleAliasResponse {
  export const filterSensitiveLog = (obj: UpdateRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateScheduledAuditRequest {
  /**
   * <p>How often the scheduled audit takes
   *       place,
   *       either <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can
   *       be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to
   *             <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit
   *       takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place.
   *       This
   *       can
   *       be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the
   *             "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace UpdateScheduledAuditRequest {
  export const filterSensitiveLog = (obj: UpdateScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface UpdateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace UpdateScheduledAuditResponse {
  export const filterSensitiveLog = (obj: UpdateScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileRequest {
  /**
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *      whose data is retained (stored). By default, data is retained for any metric
   *       used in the profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateSecurityProfileRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileResponse {
  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>UpdateSecurityProfileResponse$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *       whose data is retained (stored). By default, data is retained for any metric
   *       used in the security profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The updated version of the security profile.</p>
   */
  version?: number;

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace UpdateSecurityProfileResponse {
  export const filterSensitiveLog = (obj: UpdateSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files associated with the stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

export namespace UpdateStreamRequest {
  export const filterSensitiveLog = (obj: UpdateStreamRequest): any => ({
    ...obj,
  });
}

export interface UpdateStreamResponse {
  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace UpdateStreamResponse {
  export const filterSensitiveLog = (obj: UpdateStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the UpdateThing operation.</p>
 */
export interface UpdateThingRequest {
  /**
   * <p>The name of the thing to update.</p>
   * 		       <p>You can't change a thing's name. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>A list of thing attributes, a JSON string containing name-value pairs. For
   * 			example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"name1\":\"value2\"}}</code>
   * 		       </p>
   * 		       <p>This data is used to add new attributes or update existing attributes.</p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>UpdateThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * <p>Remove a thing type association. If <b>true</b>, the
   * 			association is removed.</p>
   */
  removeThingType?: boolean;
}

export namespace UpdateThingRequest {
  export const filterSensitiveLog = (obj: UpdateThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {}

export namespace UpdateThingResponse {
  export const filterSensitiveLog = (obj: UpdateThingResponse): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupRequest {
  /**
   * <p>The thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;
}

export namespace UpdateThingGroupRequest {
  export const filterSensitiveLog = (obj: UpdateThingGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupResponse {
  /**
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
}

export namespace UpdateThingGroupResponse {
  export const filterSensitiveLog = (obj: UpdateThingGroupResponse): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupsForThingRequest {
  /**
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;

  /**
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: string[];

  /**
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: string[];

  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;
}

export namespace UpdateThingGroupsForThingRequest {
  export const filterSensitiveLog = (obj: UpdateThingGroupsForThingRequest): any => ({
    ...obj,
  });
}

export interface UpdateThingGroupsForThingResponse {}

export namespace UpdateThingGroupsForThingResponse {
  export const filterSensitiveLog = (obj: UpdateThingGroupsForThingResponse): any => ({
    ...obj,
  });
}

export interface UpdateTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;

  /**
   * <p>The status of the topic rule destination. Valid values are:</p>
   *          <dl>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>A topic rule destination was created but has not been confirmed. You can set
   *                      <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *             <dt>ENABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is allowed. You can
   *                   set <code>status</code> to <code>DISABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>DISABLED</dt>
   *             <dd>
   *                <p>Confirmation was completed, and traffic to this destination is not allowed. You
   *                   can set <code>status</code> to <code>ENABLED</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>.</p>
   *             </dd>
   *             <dt>ERROR</dt>
   *             <dd>
   *                <p>Confirmation could not be completed, for example if the confirmation timed out.
   *                   You can call <code>GetTopicRuleDestination</code> for details about the error. You
   *                   can set <code>status</code> to <code>IN_PROGRESS</code> by calling
   *                      <code>UpdateTopicRuleDestination</code>. Calling
   *                      <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to
   *                   be sent to your confirmation endpoint.</p>
   *             </dd>
   *          </dl>
   */
  status: TopicRuleDestinationStatus | string | undefined;
}

export namespace UpdateTopicRuleDestinationRequest {
  export const filterSensitiveLog = (obj: UpdateTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface UpdateTopicRuleDestinationResponse {}

export namespace UpdateTopicRuleDestinationResponse {
  export const filterSensitiveLog = (obj: UpdateTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Behavior[] | undefined;
}

export namespace ValidateSecurityProfileBehaviorsRequest {
  export const filterSensitiveLog = (obj: ValidateSecurityProfileBehaviorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an error found in a behavior specification.</p>
 */
export interface ValidationError {
  /**
   * <p>The description of an error found in the behaviors.</p>
   */
  errorMessage?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * <p>True if the behaviors were valid.</p>
   */
  valid?: boolean;

  /**
   * <p>The list of any errors found in the behaviors.</p>
   */
  validationErrors?: ValidationError[];
}

export namespace ValidateSecurityProfileBehaviorsResponse {
  export const filterSensitiveLog = (obj: ValidateSecurityProfileBehaviorsResponse): any => ({
    ...obj,
  });
}
