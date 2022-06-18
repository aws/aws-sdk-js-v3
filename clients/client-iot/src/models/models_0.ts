// smithy-typescript generated code
import {
  AbortConfig,
  ActiveViolation,
  AggregationType,
  AlertTarget,
  AttributePayload,
  AuditCheckConfiguration,
  AuditCheckDetails,
  AuditFinding,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditSuppression,
  AuditTaskMetadata,
  AuthorizerConfig,
  AuthorizerDescription,
  AuthorizerSummary,
  AwsJobAbortConfig,
  AwsJobExecutionsRolloutConfig,
  AwsJobPresignedUrlConfig,
  AwsJobTimeoutConfig,
  Behavior,
  BehaviorModelTrainingSummary,
  BillingGroupMetadata,
  BillingGroupProperties,
  Bucket,
  BucketsAggregationType,
  CACertificate,
  CACertificateDescription,
  Certificate,
  CertificateDescription,
  Configuration,
  DetectMitigationActionExecution,
  DetectMitigationActionsTaskSummary,
  DocumentParameter,
  DomainConfigurationSummary,
  EffectivePolicy,
  FleetMetricNameAndArn,
  GroupNameAndArn,
  Job,
  JobExecution,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  JobExecutionSummaryForJob,
  JobExecutionSummaryForThing,
  JobSummary,
  JobTemplateSummary,
  KeyPair,
  ManagedJobTemplateSummary,
  MetricDatum,
  MetricToRetain,
  MitigationAction,
  MitigationActionIdentifier,
  MitigationActionParams,
  OTAUpdateFile,
  OTAUpdateInfo,
  OTAUpdateSummary,
  OutgoingCertificate,
  PercentPair,
  Policy,
  PresignedUrlConfig,
  Protocol,
  ProvisioningHook,
  RegistrationConfig,
  ResourceIdentifier,
  RoleAliasDescription,
  ServerCertificateSummary,
  Statistics,
  StreamFile,
  StreamInfo,
  Tag,
  TaskStatistics,
  TaskStatisticsForAuditCheck,
  ThingGroupIndexingConfiguration,
  ThingGroupMetadata,
  ThingGroupProperties,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  ThingTypeProperties,
  TimeoutConfig,
  TopicRule,
  TopicRuleDestination,
  TopicRuleDestinationConfiguration,
  TopicRulePayload,
} from "./models_1";
import {
  AuditFrequency,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskStatus,
  AuditTaskStatus,
  AuditTaskType,
  AuthorizerStatus,
  BehaviorCriteriaType,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  DimensionValueOperator,
  DomainConfigurationStatus,
  DomainType,
  DynamicGroupStatus,
  FleetMetricUnit,
  IndexStatus,
  JobExecutionStatus,
  JobStatus,
  LogLevel,
  LogTargetType,
  MitigationActionType,
  OTAUpdateStatus,
  ServiceType,
  Status,
  TargetSelection,
  VerificationState,
} from "./models_2";

/**
 * <p>The input for the AcceptCertificateTransfer operation.</p>
 */
export interface AcceptCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

export namespace AcceptCertificateTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface AddThingToBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * 		       <note>
   *             <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p>
   *          </note>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the thing to be added to the billing group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to be added to the billing group.</p>
   */
  thingArn?: string;
}

export namespace AddThingToBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface AddThingToBillingGroupResponse {}

export namespace AddThingToBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToBillingGroupResponse): any => ({
    ...obj,
  });
}

export interface AddThingToThingGroupRequest {
  /**
   * <p>The name of the group to which you are adding a thing.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The ARN of the group to which you are adding a thing.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the thing to add to a group.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the thing to add to a group.</p>
   */
  thingArn?: string;

  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;
}

export namespace AddThingToThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToThingGroupRequest): any => ({
    ...obj,
  });
}

export interface AddThingToThingGroupResponse {}

export namespace AddThingToThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddThingToThingGroupResponse): any => ({
    ...obj,
  });
}

export interface AssociateTargetsWithJobRequest {
  /**
   * <p>A list of thing group ARNs that define the targets of the job.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>An optional comment string describing why the job was associated with the targets.</p>
   */
  comment?: string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
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

export namespace AssociateTargetsWithJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTargetsWithJobRequest): any => ({
    ...obj,
  });
}

export interface AssociateTargetsWithJobResponse {
  /**
   * <p>An ARN identifying the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;
}

export namespace AssociateTargetsWithJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateTargetsWithJobResponse): any => ({
    ...obj,
  });
}

export interface AttachPolicyRequest {
  /**
   * <p>The name of the policy to attach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html">identity</a> to which the policy is attached. For example, a thing group or a certificate.</p>
   */
  target: string | undefined;
}

export namespace AttachPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the AttachPrincipalPolicy operation.</p>
 */
export interface AttachPrincipalPolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal, which can be a certificate ARN (as returned from the CreateCertificate
   *          operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;
}

export namespace AttachPrincipalPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachPrincipalPolicyRequest): any => ({
    ...obj,
  });
}

export interface AttachSecurityProfileRequest {
  /**
   * <p>The security profile that is attached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the target (thing group) to which the security profile is attached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace AttachSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface AttachSecurityProfileResponse {}

export namespace AttachSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachSecurityProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The principal, which can be a certificate ARN (as returned from the
   * 			CreateCertificate operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;
}

export namespace AttachThingPrincipalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachThingPrincipalRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalResponse {}

export namespace AttachThingPrincipalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachThingPrincipalResponse): any => ({
    ...obj,
  });
}

export interface CancelAuditMitigationActionsTaskRequest {
  /**
   * <p>The unique identifier for the task that you want to cancel. </p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelAuditMitigationActionsTaskResponse {}

export namespace CancelAuditMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface CancelAuditTaskRequest {
  /**
   * <p>The ID of the audit you want to cancel. You can only cancel an
   *               audit that is "IN_PROGRESS".</p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelAuditTaskResponse {}

export namespace CancelAuditTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelAuditTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CancelCertificateTransfer operation.</p>
 */
export interface CancelCertificateTransferRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace CancelCertificateTransferRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelCertificateTransferRequest): any => ({
    ...obj,
  });
}

export interface CancelDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;
}

export namespace CancelDetectMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDetectMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface CancelDetectMitigationActionsTaskResponse {}

export namespace CancelDetectMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelDetectMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface CancelJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional)A reason code string that explains why the job was canceled.</p>
   */
  reasonCode?: string;

  /**
   * <p>An optional comment string describing why the job was canceled.</p>
   */
  comment?: string;

  /**
   * <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED"
   *           are canceled, otherwise only job executions with status "QUEUED" are canceled. The default
   *           is <code>false</code>.</p>
   *         <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing
   *           the job to be unable to update the job execution status.  Use caution and ensure that each
   *           device executing a job which is canceled is able to recover to a valid state.</p>
   */
  force?: boolean;
}

export namespace CancelJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj,
  });
}

export interface CancelJobResponse {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;
}

export namespace CancelJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj,
  });
}

export interface CancelJobExecutionRequest {
  /**
   * <p>The ID of the job to be canceled.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose execution of the job will be canceled.</p>
   */
  thingName: string | undefined;

  /**
   * <p>(Optional) If <code>true</code> the job execution will be canceled if it has status
   *           IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status
   *           QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set
   *           <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code>
   *           will be thrown. The default is <code>false</code>.</p>
   *         <p>Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable
   *           to update the job execution status.  Use caution and ensure that the device is able to
   *           recover to a valid state.</p>
   */
  force?: boolean;

  /**
   * <p>(Optional) The expected current version of the job execution. Each time you update the job
   *           execution, its version is incremented. If the version of the job execution stored in Jobs does
   *           not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that
   *           contains the current job execution status data is returned. (This makes it unnecessary to
   *           perform a separate DescribeJobExecution request in order to obtain the job execution status
   *           data.)</p>
   */
  expectedVersion?: number;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If not
   *           specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.</p>
   */
  statusDetails?: Record<string, string>;
}

export namespace CancelJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelJobExecutionRequest): any => ({
    ...obj,
  });
}

export interface ClearDefaultAuthorizerRequest {}

export namespace ClearDefaultAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClearDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface ClearDefaultAuthorizerResponse {}

export namespace ClearDefaultAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClearDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface ConfirmTopicRuleDestinationRequest {
  /**
   * <p>The token used to confirm ownership or access to the topic rule confirmation URL.</p>
   */
  confirmationToken: string | undefined;
}

export namespace ConfirmTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface ConfirmTopicRuleDestinationResponse {}

export namespace ConfirmTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfirmTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface CreateAuditSuppressionRequest {
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
   *       The epoch timestamp in seconds at which this suppression expires.
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

  /**
   * <p>
   *       Each audit supression must have a unique client request token. If you try to create a new audit
   *       suppression with the same token as one that already exists, an exception occurs. If you omit this
   *       value, Amazon Web Services SDKs will automatically generate a unique client request.</p>
   */
  clientRequestToken?: string;
}

export namespace CreateAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface CreateAuditSuppressionResponse {}

export namespace CreateAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface CreateAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn: string | undefined;

  /**
   * <p>The name of the token key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the digital signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the create authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>Metadata which can be used to manage the custom authorizer.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for clients that use persistent HTTP connections. The results are cached for the time
   * 	  specified by the Lambda function in <code>refreshAfterInSeconds</code>. This value
   *      does not affect authorization of clients that use MQTT connections.</p>
   *          <p>The default value is <code>false</code>.</p>
   */
  enableCachingForHttp?: boolean;
}

export namespace CreateAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface CreateAuthorizerResponse {
  /**
   * <p>The authorizer's name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

export namespace CreateAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface CreateBillingGroupRequest {
  /**
   * <p>The name you wish to give to the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>Metadata which can be used to manage the billing group.</p>
   */
  tags?: Tag[];
}

export namespace CreateBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateBillingGroupResponse {
  /**
   * <p>The name you gave to the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;
}

export namespace CreateBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrRequest {
  /**
   * <p>The certificate signing request (CSR).</p>
   */
  certificateSigningRequest: string | undefined;

  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

export namespace CreateCertificateFromCsrRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateFromCsrRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal
   *          for policy operations.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. Certificate management operations only take a
   *          certificateId.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;
}

export namespace CreateCertificateFromCsrResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCertificateFromCsrResponse): any => ({
    ...obj,
  });
}

export interface CreateCustomMetricRequest {
  /**
   * <p> The name of the custom metric. This will be used in the metric report submitted from the
   *       device/thing. The name can't begin with <code>aws:</code>. You can't change the name after you
   *       define it.</p>
   */
  metricName: string | undefined;

  /**
   * <p> The friendly name in the console for the custom metric. This name doesn't have to be
   *       unique. Don't use this name as the metric identifier in the device metric report. You can
   *       update the friendly name after you define it.</p>
   */
  displayName?: string;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but when you
   *         submit the metrics value in the DeviceMetrics report, you must pass it as an array with a
   *         single value.</p>
   *          </important>
   */
  metricType: CustomMetricType | string | undefined;

  /**
   * <p>
   *       Metadata that can be used to manage the custom metric.
   *     </p>
   */
  tags?: Tag[];

  /**
   * <p>Each custom
   *       metric must have a unique client request token. If you try to create a new custom metric that
   *       already exists with a different token,
   *       an exception
   *       occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request. </p>
   */
  clientRequestToken?: string;
}

export namespace CreateCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface CreateCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric to be used in the metric report.
   *     </p>
   */
  metricName?: string;

  /**
   * <p> The Amazon Resource Number (ARN) of the custom metric. For example,
   *           <code>arn:<i>aws-partition</i>:iot:<i>region</i>:<i>accountId</i>:custommetric/<i>metricName</i>
   *             </code>
   *          </p>
   */
  metricArn?: string;
}

export namespace CreateCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface CreateDimensionRequest {
  /**
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   */
  name: string | undefined;

  /**
   * <p>Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
   *          </p>
   */
  type: DimensionType | string | undefined;

  /**
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   */
  stringValues: string[] | undefined;

  /**
   * <p>Metadata that can be used to manage the dimension.</p>
   */
  tags?: Tag[];

  /**
   * <p>Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs.
   *       If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.</p>
   */
  clientRequestToken?: string;
}

export namespace CreateDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDimensionRequest): any => ({
    ...obj,
  });
}

export interface CreateDimensionResponse {
  /**
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name
   *       (ARN)
   *       of
   *       the created dimension.</p>
   */
  arn?: string;
}

export namespace CreateDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDimensionResponse): any => ({
    ...obj,
  });
}

export interface CreateDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN.
   *       This value is not required for Amazon Web Services-managed domains.</p>
   */
  serverCertificateArns?: string[];

  /**
   * <p>The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority.
   *          This value is not required for Amazon Web Services-managed domains.</p>
   */
  validationCertificateArn?: string;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   *          <note>
   *             <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p>
   *          </note>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>Metadata which can be used to manage the domain configuration.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace CreateDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;
}

export namespace CreateDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDomainConfigurationResponse): any => ({
    ...obj,
  });
}

export interface CreateDynamicThingGroupRequest {
  /**
   * <p>The dynamic thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>The dynamic thing group index name.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: <code>AWS_Things</code>.</p>
   * 		       </note>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   * 		       <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The dynamic thing group query version.</p>
   * 		       <note>
   * 			         <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   * 		       </note>
   */
  queryVersion?: string;

  /**
   * <p>Metadata which can be used to manage the dynamic thing group.</p>
   */
  tags?: Tag[];
}

export namespace CreateDynamicThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDynamicThingGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The dynamic thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The dynamic thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;
}

export namespace CreateDynamicThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to create.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The type of the aggregation query.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period: number | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField: string | undefined;

  /**
   * <p>The fleet metric description.</p>
   */
  description?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>Metadata, which can be used to manage the fleet metric.</p>
   */
  tags?: Tag[];
}

export namespace CreateFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetMetricRequest): any => ({
    ...obj,
  });
}

export interface CreateFleetMetricResponse {
  /**
   * <p>The name of the fleet metric to create.</p>
   */
  metricName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the new fleet metric.</p>
   */
  metricArn?: string;
}

export namespace CreateFleetMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFleetMetricResponse): any => ({
    ...obj,
  });
}

export interface CreateJobRequest {
  /**
   * <p>A job identifier which must be unique for your Amazon Web Services account. We recommend using a UUID. Alpha-numeric
   *             characters, "-" and "_" are valid for use here.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A list of things and thing groups to which the job should be sent.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>An S3 link to the job document. Required if you don't specify a value for <code>document</code>.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  documentSource?: string;

  /**
   * <p>The job document. Required if you don't specify a value for <code>documentSource</code>.</p>
   */
  document?: string;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   *         <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *         </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create the criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the time expires, it will be
   *            automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>Metadata which can be used to manage the job.</p>
   */
  tags?: Tag[];

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The ARN of the job template used to create the job.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;

  /**
   * <p>Parameters of an Amazon Web Services managed template that you can specify to create the job document.</p>
   *         <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *         </note>
   */
  documentParameters?: Record<string, string>;
}

export namespace CreateJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj,
  });
}

export interface CreateJobResponse {
  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job.</p>
   */
  jobId?: string;

  /**
   * <p>The job description.</p>
   */
  description?: string;
}

export namespace CreateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj,
  });
}

export interface CreateJobTemplateRequest {
  /**
   * <p>A unique identifier for the job template. We recommend using a UUID. Alpha-numeric
   *         characters, "-", and "_" are valid for use here.</p>
   */
  jobTemplateId: string | undefined;

  /**
   * <p>The ARN of the job to use as the basis for the job template.</p>
   */
  jobArn?: string;

  /**
   * <p>An S3 link to the job document to use in the template. Required if you don't specify a value for <code>document</code>.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  documentSource?: string;

  /**
   * <p>The job document. Required if you don't specify a value for <code>documentSource</code>.</p>
   */
  document?: string;

  /**
   * <p>A description of the job document.</p>
   */
  description: string | undefined;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>Metadata that can be used to manage the job template.</p>
   */
  tags?: Tag[];

  /**
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

export namespace CreateJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateJobTemplateResponse {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;
}

export namespace CreateJobTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJobTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreateKeysAndCertificate operation.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificateRequest</a> action.</p>
 */
export interface CreateKeysAndCertificateRequest {
  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

export namespace CreateKeysAndCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeysAndCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateResponse {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. IoT issues a default subject name for the certificate
   *          (for example, IoT Certificate).</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The generated key pair.</p>
   */
  keyPair?: KeyPair;
}

export namespace CreateKeysAndCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKeysAndCertificateResponse): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
  });
}

export interface CreateMitigationActionRequest {
  /**
   * <p>A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).</p>
   */
  actionName: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams: MitigationActionParams | undefined;

  /**
   * <p>Metadata that can be used to manage the mitigation action.</p>
   */
  tags?: Tag[];
}

export namespace CreateMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface CreateMitigationActionResponse {
  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for the new mitigation action.</p>
   */
  actionId?: string;
}

export namespace CreateMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface CreateOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to be created.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>The description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The devices targeted to receive OTA updates.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *            HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things
   *             specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a
   *             thing when a change is detected in a target. For example, an update will run on a thing when the thing is
   *             added to a target group, even after the update was completed by all things originally in the group. Valid
   *             values: CONTINUOUS | SNAPSHOT.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  awsJobAbortConfig?: AwsJobAbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer is
   *             started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution
   *             status is not set to another terminal state before the timer expires, it will be automatically
   *             set to <code>TIMED_OUT</code>.</p>
   */
  awsJobTimeoutConfig?: AwsJobTimeoutConfig;

  /**
   * <p>The files to be streamed by the OTA update.</p>
   */
  files: OTAUpdateFile[] | undefined;

  /**
   * <p>The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources
   *             to create an OTA update job.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of additional OTA update parameters which are name-value pairs.</p>
   */
  additionalParameters?: Record<string, string>;

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Tag[];
}

export namespace CreateOTAUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOTAUpdateRequest): any => ({
    ...obj,
  });
}

export interface CreateOTAUpdateResponse {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The OTA update status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace CreateOTAUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateOTAUpdateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreatePolicy operation.</p>
 */
export interface CreatePolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>Metadata which can be used to manage the policy.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace CreatePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the CreatePolicy operation.</p>
 */
export interface CreatePolicyResponse {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
}

export namespace CreatePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The JSON document that describes the policy. Minimum length of 1. Maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>Specifies whether the policy version is set as the default. When this parameter is
   *          true, the new policy version becomes the operative version (that is, the version that is in
   *          effect for the certificates to which the policy is attached).</p>
   */
  setAsDefault?: boolean;
}

export namespace CreatePolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace CreatePolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePolicyVersionResponse): any => ({
    ...obj,
  });
}

export interface CreateProvisioningClaimRequest {
  /**
   * <p>The name of the provisioning template to use.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningClaimRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningClaimRequest): any => ({
    ...obj,
  });
}

export interface CreateProvisioningClaimResponse {
  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The provisioning claim certificate.</p>
   */
  certificatePem?: string;

  /**
   * <p>The provisioning claim key pair.</p>
   */
  keyPair?: KeyPair;

  /**
   * <p>The provisioning claim expiration time.</p>
   */
  expiration?: Date;
}

export namespace CreateProvisioningClaimResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningClaimResponse): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) }),
  });
}

export interface CreateProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The role ARN for the role associated with the fleet provisioning template. This IoT role
   *          grants permission to provision a device.</p>
   */
  provisioningRoleArn: string | undefined;

  /**
   * <p>Creates a pre-provisioning hook template.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Metadata which can be used to manage the fleet provisioning template.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace CreateProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The default version of the fleet provisioning template.</p>
   */
  defaultVersionId?: number;
}

export namespace CreateProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>Sets a fleet provision template version as the default version.</p>
   */
  setAsDefault?: boolean;
}

export namespace CreateProvisioningTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateProvisioningTemplateVersionResponse {
  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The version of the fleet provisioning template.</p>
   */
  versionId?: number;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace CreateProvisioningTemplateVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
}

export interface CreateRoleAliasRequest {
  /**
   * <p>The role alias that points to a role ARN. This allows you to change the role without
   *          having to update the device.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.</p>
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *       that the role alias references.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>Metadata which can be used to manage the role alias.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: &&tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: Tag[];
}

export namespace CreateRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateRoleAliasResponse {
  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;
}

export namespace CreateRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface CreateScheduledAuditRequest {
  /**
   * <p>How often the scheduled audit takes
   *       place, either
   *       <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is
   *       determined by the system.</p>
   */
  frequency: AuditFrequency | string | undefined;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can be "1" through "31" or "LAST". This field is required if the "frequency"
   *       parameter is set to <code>MONTHLY</code>. If days
   *       29
   *       to 31 are specified, and the month
   *       doesn't
   *       have that many days, the audit takes place on the <code>LAST</code> day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes
   *       place,
   *       either
   *       <code>SUN</code>,
   *       <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code>
   *       parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames: string[] | undefined;

  /**
   * <p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the scheduled audit.</p>
   */
  tags?: Tag[];
}

export namespace CreateScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface CreateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace CreateScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface CreateSecurityProfileRequest {
  /**
   * <p>The name you are giving to the security profile.</p>
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
   * <p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the
   *         console.) Alerts are generated when a device (thing) violates a behavior.</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i>
   *          </p>
   *          <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>Metadata that can be used to manage the security profile.</p>
   */
  tags?: Tag[];
}

export namespace CreateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface CreateSecurityProfileResponse {
  /**
   * <p>The name you gave to the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;
}

export namespace CreateSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface CreateStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files: StreamFile[] | undefined;

  /**
   * <p>An IAM role that allows the IoT service principal to access your S3 files.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Tag[];
}

export namespace CreateStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamRequest): any => ({
    ...obj,
  });
}

export interface CreateStreamResponse {
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
   * <p>The version of the stream.</p>
   */
  streamVersion?: number;
}

export namespace CreateStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreateThing operation.</p>
 */
export interface CreateThingRequest {
  /**
   * <p>The name of the thing to create.</p>
   * 		       <p>You can't change a thing's name after you create it. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type associated with the new thing.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The attribute payload, which consists of up to three name/value pairs in a JSON
   * 			document. For example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"string1\":\"string2\"}}</code>
   * 		       </p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The name of the billing group the thing will be added to.</p>
   */
  billingGroupName?: string;
}

export namespace CreateThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the CreateThing operation.</p>
 */
export interface CreateThingResponse {
  /**
   * <p>The name of the new thing.</p>
   */
  thingName?: string;

  /**
   * <p>The ARN of the new thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;
}

export namespace CreateThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingResponse): any => ({
    ...obj,
  });
}

export interface CreateThingGroupRequest {
  /**
   * <p>The thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The name of the parent thing group.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>Metadata which can be used to manage the thing group.</p>
   */
  tags?: Tag[];
}

export namespace CreateThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateThingGroupResponse {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;
}

export namespace CreateThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreateThingType operation.</p>
 */
export interface CreateThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;

  /**
   * <p>The ThingTypeProperties for the thing type to create. It contains information about
   * 			the new thing type including a description, and a list of searchable thing attribute
   * 			names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>Metadata which can be used to manage the thing type.</p>
   */
  tags?: Tag[];
}

export namespace CreateThingTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the CreateThingType operation.</p>
 */
export interface CreateThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the thing type.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;
}

export namespace CreateThingTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateThingTypeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the CreateTopicRule operation.</p>
 */
export interface CreateTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;

  /**
   * <p>Metadata which can be used to manage the topic rule.</p>
   *          <note>
   *             <p>For URI Request parameters use format: ...key1=value1&key2=value2...</p>
   *             <p>For the CLI command-line parameter use format: --tags
   *             "key1=value1&key2=value2..."</p>
   *             <p>For the cli-input-json file use format: "tags":
   *             "key1=value1&key2=value2..."</p>
   *          </note>
   */
  tags?: string;
}

export namespace CreateTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface CreateTopicRuleDestinationRequest {
  /**
   * <p>The topic rule destination configuration.</p>
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

export namespace CreateTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface CreateTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace CreateTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAccountAuditConfigurationRequest {
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   */
  deleteScheduledAudits?: boolean;
}

export namespace DeleteAccountAuditConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountAuditConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountAuditConfigurationResponse {}

export namespace DeleteAccountAuditConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountAuditConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteAuditSuppressionRequest {
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
}

export namespace DeleteAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface DeleteAuditSuppressionResponse {}

export namespace DeleteAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface DeleteAuthorizerRequest {
  /**
   * <p>The name of the authorizer to delete.</p>
   */
  authorizerName: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DeleteAuthorizerResponse {}

export namespace DeleteAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface DeleteBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>DeleteBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteBillingGroupResponse {}

export namespace DeleteBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateRequest {
  /**
   * <p>The ID of the certificate to delete. (The last part of the certificate ARN contains
   *          the certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DeleteCACertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateResponse {}

export namespace DeleteCACertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCACertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteCertificate operation.</p>
 */
export interface DeleteCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>Forces the deletion of a certificate if it is inactive and is not attached to an IoT
   *          thing.</p>
   */
  forceDelete?: boolean;
}

export namespace DeleteCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName: string | undefined;
}

export namespace DeleteCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomMetricResponse {}

export namespace DeleteCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface DeleteDimensionRequest {
  /**
   * <p>The unique identifier for the dimension that you want to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDimensionRequest): any => ({
    ...obj,
  });
}

export interface DeleteDimensionResponse {}

export namespace DeleteDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDimensionResponse): any => ({
    ...obj,
  });
}

export interface DeleteDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DeleteDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDomainConfigurationResponse {}

export namespace DeleteDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDomainConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to delete.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the dynamic thing group to delete.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteDynamicThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDynamicThingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteDynamicThingGroupResponse {}

export namespace DeleteDynamicThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDynamicThingGroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to delete.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The expected version of the fleet metric to delete.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFleetMetricRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new job.
   *         However, this is not recommended, and you must ensure that your devices are not using the
   *         jobId to refer to the deleted job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can
   *         only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception
   *         will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing
   *         the job to be unable to access job information or update the job execution status.
   *         Use caution and ensure that each device executing a job which is deleted is able to recover to
   *         a valid state.</p>
   *          </note>
   */
  force?: boolean;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
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

export namespace DeleteJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobExecutionRequest {
  /**
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the
   *         execution of a particular job on a particular device.</p>
   *          <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused
   *         by IoT, so be sure you get and use the correct value here.</p>
   */
  executionNumber: number | undefined;

  /**
   * <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise,
   *         you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED",
   *         "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job execution which is "IN_PROGRESS", will cause the device
   *         to be unable to access job information or update the job execution status.
   *         Use caution and ensure that the device is able to recover to a valid state.</p>
   *          </note>
   */
  force?: boolean;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
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

export namespace DeleteJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobExecutionRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template to delete.</p>
   */
  jobTemplateId: string | undefined;
}

export namespace DeleteJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteMitigationActionRequest {
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

export namespace DeleteMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface DeleteMitigationActionResponse {}

export namespace DeleteMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface DeleteOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to delete.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted.
   *             Ignored if the stream specified in the OTAUpdate is supplied by the user.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the
   *             job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.</p>
   */
  forceDeleteAWSJob?: boolean;
}

export namespace DeleteOTAUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOTAUpdateRequest): any => ({
    ...obj,
  });
}

export interface DeleteOTAUpdateResponse {}

export namespace DeleteOTAUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteOTAUpdateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

export namespace DeletePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeletePolicyVersion operation.</p>
 */
export interface DeletePolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace DeletePolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provision template to delete.</p>
   */
  templateName: string | undefined;
}

export namespace DeleteProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateResponse {}

export namespace DeleteProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the fleet provisioning template version to delete.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The fleet provisioning template version ID to delete.</p>
   */
  versionId: number | undefined;
}

export namespace DeleteProvisioningTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteProvisioningTemplateVersionResponse {}

export namespace DeleteProvisioningTemplateVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeRequest {}

export namespace DeleteRegistrationCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistrationCodeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeResponse {}

export namespace DeleteRegistrationCodeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistrationCodeResponse): any => ({
    ...obj,
  });
}

export interface DeleteRoleAliasRequest {
  /**
   * <p>The role alias to delete.</p>
   */
  roleAlias: string | undefined;
}

export namespace DeleteRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoleAliasResponse {}

export namespace DeleteRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DeleteScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface DeleteScheduledAuditResponse {}

export namespace DeleteScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface DeleteSecurityProfileRequest {
  /**
   * <p>The name of the security profile to be deleted.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityProfileResponse {}

export namespace DeleteSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DeleteStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamRequest): any => ({
    ...obj,
  });
}

export interface DeleteStreamResponse {}

export namespace DeleteStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteThing operation.</p>
 */
export interface DeleteThingRequest {
  /**
   * <p>The name of the thing to delete.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>DeleteThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the DeleteThing operation.</p>
 */
export interface DeleteThingResponse {}

export namespace DeleteThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingResponse): any => ({
    ...obj,
  });
}

export interface DeleteThingGroupRequest {
  /**
   * <p>The name of the thing group to delete.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the thing group to delete.</p>
   */
  expectedVersion?: number;
}

export namespace DeleteThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteThingGroupResponse {}

export namespace DeleteThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DeleteThingTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeResponse {}

export namespace DeleteThingTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteThingTypeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteTopicRule operation.</p>
 */
export interface DeleteTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace DeleteTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface DeleteTopicRuleDestinationResponse {}

export namespace DeleteTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface DeleteV2LoggingLevelRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType: LogTargetType | string | undefined;

  /**
   * <p>The name of the resource for which you are configuring logging.</p>
   */
  targetName: string | undefined;
}

export namespace DeleteV2LoggingLevelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteV2LoggingLevelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeRequest {
  /**
   * <p>The name of the thing type to deprecate.</p>
   */
  thingTypeName: string | undefined;

  /**
   * <p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can
   * 			associate it with things.</p>
   */
  undoDeprecate?: boolean;
}

export namespace DeprecateThingTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeprecateThingTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeResponse {}

export namespace DeprecateThingTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeprecateThingTypeResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountAuditConfigurationRequest {}

export namespace DescribeAccountAuditConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAuditConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountAuditConfigurationResponse {
  /**
   * <p>The ARN of the role that grants permission to IoT to access information
   *             about your devices, policies, certificates, and other items as required when
   *             performing an audit.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent for
   *             this account.</p>
   */
  auditNotificationTargetConfigurations?: Record<string, AuditNotificationTarget>;

  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

export namespace DescribeAccountAuditConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountAuditConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuditFindingRequest {
  /**
   * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
   */
  findingId: string | undefined;
}

export namespace DescribeAuditFindingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditFindingRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuditFindingResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  finding?: AuditFinding;
}

export namespace DescribeAuditFindingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditFindingResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuditMitigationActionsTaskRequest {
  /**
   * <p>The unique identifier for the audit mitigation task.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuditMitigationActionsTaskResponse {
  /**
   * <p>The current status of the task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   */
  endTime?: Date;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   */
  taskStatistics?: Record<string, TaskStatisticsForAuditCheck>;

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   */
  target?: AuditMitigationActionsTaskTarget;

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   */
  auditCheckToActionsMapping?: Record<string, string[]>;

  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   */
  actionsDefinition?: MitigationAction[];
}

export namespace DescribeAuditMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuditSuppressionRequest {
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
}

export namespace DescribeAuditSuppressionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditSuppressionRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuditSuppressionResponse {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName?: string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>
   *       The epoch timestamp in seconds at which this suppression expires.
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

export namespace DescribeAuditSuppressionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditSuppressionResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuditTaskRequest {
  /**
   * <p>The ID of the audit whose information you want to get.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditTaskRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuditTaskResponse {
  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: TaskStatistics;

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: Record<string, AuditCheckDetails>;
}

export namespace DescribeAuditTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuditTaskResponse): any => ({
    ...obj,
  });
}

export interface DescribeAuthorizerRequest {
  /**
   * <p>The name of the authorizer to describe.</p>
   */
  authorizerName: string | undefined;
}

export namespace DescribeAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DescribeAuthorizerResponse {
  /**
   * <p>The authorizer description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface DescribeBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
}

export namespace DescribeBillingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBillingGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeBillingGroupResponse {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: BillingGroupMetadata;
}

export namespace DescribeBillingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBillingGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCACertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCACertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
  /**
   * <p>The CA certificate description.</p>
   */
  certificateDescription?: CACertificateDescription;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;
}

export namespace DescribeCACertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCACertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCertificateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
  /**
   * <p>The description of the certificate.</p>
   */
  certificateDescription?: CertificateDescription;
}

export namespace DescribeCertificateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCertificateResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName: string | undefined;
}

export namespace DescribeCustomMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomMetricRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomMetricResponse {
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
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   */
  metricType?: CustomMetricType | string;

  /**
   * <p>
   *       Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
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

export namespace DescribeCustomMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomMetricResponse): any => ({
    ...obj,
  });
}

export interface DescribeDefaultAuthorizerRequest {}

export namespace DescribeDefaultAuthorizerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultAuthorizerRequest): any => ({
    ...obj,
  });
}

export interface DescribeDefaultAuthorizerResponse {
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeDefaultAuthorizerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultAuthorizerResponse): any => ({
    ...obj,
  });
}

export interface DescribeDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;
}

export namespace DescribeDetectMitigationActionsTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectMitigationActionsTaskRequest): any => ({
    ...obj,
  });
}

export interface DescribeDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The description of a task.
   *     </p>
   */
  taskSummary?: DetectMitigationActionsTaskSummary;
}

export namespace DescribeDetectMitigationActionsTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDetectMitigationActionsTaskResponse): any => ({
    ...obj,
  });
}

export interface DescribeDimensionRequest {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name: string | undefined;
}

export namespace DescribeDimensionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDimensionRequest): any => ({
    ...obj,
  });
}

export interface DescribeDimensionResponse {
  /**
   * <p>The unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name
   *       (ARN)
   *       for
   *       the dimension.</p>
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
   * <p>The date the dimension was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the dimension was last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeDimensionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDimensionResponse): any => ({
    ...obj,
  });
}

export interface DescribeDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DescribeDomainConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   */
  serverCertificates?: ServerCertificateSummary[];

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>The type of the domain.</p>
   */
  domainType?: DomainType | string;

  /**
   * <p>The date and time the domain configuration's status was last changed.</p>
   */
  lastStatusChangeDate?: Date;
}

export namespace DescribeDomainConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDomainConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The endpoint type. Valid endpoint types include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:CredentialProvider</code> - Returns an IoT credentials provider API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Jobs</code> - Returns an IoT device management Jobs API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid
   *          issues related to the widespread distrust of Symantec certificate authorities.</p>
   */
  endpointType?: string;
}

export namespace DescribeEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;
}

export namespace DescribeEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEndpointResponse): any => ({
    ...obj,
  });
}

export interface DescribeEventConfigurationsRequest {}

export namespace DescribeEventConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeEventConfigurationsResponse {
  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: Record<string, Configuration>;

  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeEventConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface DescribeFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to describe.</p>
   */
  metricName: string | undefined;
}

export namespace DescribeFleetMetricRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetMetricRequest): any => ({
    ...obj,
  });
}

export interface DescribeFleetMetricResponse {
  /**
   * <p>The name of the fleet metric to describe.</p>
   */
  metricName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The type of the aggregation query.</p>
   */
  aggregationType?: AggregationType;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period?: number;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The fleet metric description.</p>
   */
  description?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The date when the fleet metric is created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet metric is last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>The version of the fleet metric.</p>
   */
  version?: number;

  /**
   * <p>The ARN of the fleet metric to describe.</p>
   */
  metricArn?: string;
}

export namespace DescribeFleetMetricResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeFleetMetricResponse): any => ({
    ...obj,
  });
}

export interface DescribeIndexRequest {
  /**
   * <p>The index name.</p>
   */
  indexName: string | undefined;
}

export namespace DescribeIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIndexRequest): any => ({
    ...obj,
  });
}

export interface DescribeIndexResponse {
  /**
   * <p>The index name.</p>
   */
  indexName?: string;

  /**
   * <p>The index status.</p>
   */
  indexStatus?: IndexStatus | string;

  /**
   * <p>Contains a value that specifies the type of indexing performed. Valid values
   *       are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains only registry data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and
   *           thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry
   *           data, shadow data, and thing connectivity status data.</p>
   *             </li>
   *             <li>
   *                <p>MULTI_INDEXING_MODE - Your thing index contains multiple data sources. For more information, see
   *           <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_GetIndexingConfiguration.html">GetIndexingConfiguration</a>.</p>
   *             </li>
   *          </ul>
   */
  schema?: string;
}

export namespace DescribeIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIndexResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeJobResponse {
  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Information about the job.</p>
   */
  job?: Job;
}

export namespace DescribeJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobExecutionRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string | undefined;

  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
   *             on a particular device.</p>
   */
  executionNumber?: number;
}

export namespace DescribeJobExecutionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobExecutionRequest): any => ({
    ...obj,
  });
}

export interface DescribeJobExecutionResponse {
  /**
   * <p>Information about the job execution.</p>
   */
  execution?: JobExecution;
}

export namespace DescribeJobExecutionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobExecutionResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId: string | undefined;
}

export namespace DescribeJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeJobTemplateResponse {
  /**
   * <p>The ARN of the job template.</p>
   */
  jobTemplateArn?: string;

  /**
   * <p>The unique identifier of the job template.</p>
   */
  jobTemplateId?: string;

  /**
   * <p>A description of the job template.</p>
   */
  description?: string;

  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>The job document.</p>
   */
  document?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job template was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>The configuration that determines how many retries are allowed for each failure type
   *             for a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

export namespace DescribeJobTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeManagedJobTemplateRequest {
  /**
   * <p>The unique name of a managed job template, which is required.</p>
   */
  templateName: string | undefined;

  /**
   * <p>An optional parameter to specify version of a managed template. If not specified, the
   *             pre-defined default version is returned.</p>
   */
  templateVersion?: string;
}

export namespace DescribeManagedJobTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeManagedJobTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeManagedJobTemplateResponse {
  /**
   * <p>The unique name of a managed template, such as <code>AWS-Reboot</code>.</p>
   */
  templateName?: string;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the managed template.</p>
   */
  templateArn?: string;

  /**
   * <p>The unique description of a managed template.</p>
   */
  description?: string;

  /**
   * <p>The version for a managed template.</p>
   */
  templateVersion?: string;

  /**
   * <p>A list of environments that are supported with the managed job template.</p>
   */
  environments?: string[];

  /**
   * <p>A map of key-value pairs that you can use as guidance to specify the inputs for creating
   *             a job from a managed template.</p>
   *         <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *         </note>
   */
  documentParameters?: DocumentParameter[];

  /**
   * <p>The document schema for a managed job template.</p>
   */
  document?: string;
}

export namespace DescribeManagedJobTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeManagedJobTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeMitigationActionRequest {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName: string | undefined;
}

export namespace DescribeMitigationActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface DescribeMitigationActionResponse {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The date and time when the mitigation action was added to your Amazon Web Services accounts.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeMitigationActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeMitigationActionResponse): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace DescribeProvisioningTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateRequest): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateResponse {
  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The date when the fleet provisioning template was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the fleet provisioning template was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The default fleet template version ID.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the fleet provisioning template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>Gets information about a pre-provisioned hook.</p>
   */
  preProvisioningHook?: ProvisioningHook;
}

export namespace DescribeProvisioningTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * <p>The template name.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId: number | undefined;
}

export namespace DescribeProvisioningTemplateVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateVersionRequest): any => ({
    ...obj,
  });
}

export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId?: number;

  /**
   * <p>The date when the fleet provisioning template version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template version.</p>
   */
  templateBody?: string;

  /**
   * <p>True if the fleet provisioning template version is the default version.</p>
   */
  isDefaultVersion?: boolean;
}

export namespace DescribeProvisioningTemplateVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProvisioningTemplateVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeRoleAliasRequest {
  /**
   * <p>The role alias to describe.</p>
   */
  roleAlias: string | undefined;
}

export namespace DescribeRoleAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoleAliasRequest): any => ({
    ...obj,
  });
}

export interface DescribeRoleAliasResponse {
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: RoleAliasDescription;
}

export namespace DescribeRoleAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DescribeScheduledAuditRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduledAuditRequest): any => ({
    ...obj,
  });
}

export interface DescribeScheduledAuditResponse {
  /**
   * <p>How often the scheduled audit takes
   *       place, either
   *       one of <code>DAILY</code>,
   *             <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This is
   *       will be <code>1</code>
   *             through <code>31</code> or <code>LAST</code>. If days
   *       <code>29</code>-<code>31</code>
   *       are specified, and the month does not have that many days, the audit takes place on the <code>LAST</code>
   *       day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes
   *       place,
   *       either one of
   *             <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>.</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace DescribeScheduledAuditResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduledAuditResponse): any => ({
    ...obj,
  });
}

export interface DescribeSecurityProfileRequest {
  /**
   * <p>The name of the security profile
   *       whose information you want to get.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DescribeSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DescribeSecurityProfileResponse {
  /**
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>A description of the security profile (associated with the security profile
   *         when it was created or updated).</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Record<string, AlertTarget>;

  /**
   * @deprecated
   *
   * <p>
   *             <i>Please use
   *           <a>DescribeSecurityProfileResponse$additionalMetricsToRetainV2</a>
   *         instead.</i>
   *          </p>
   *          <p>A list of metrics
   *       whose data is retained (stored). By default, data is retained for any metric
   *       used in the profile's <code>behaviors</code>, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any
   *       metric used in the profile's behaviors, but
   *       it is
   *       also retained for any metric specified here.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
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

export namespace DescribeSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface DescribeStreamRequest {
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DescribeStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStreamRequest): any => ({
    ...obj,
  });
}

export interface DescribeStreamResponse {
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: StreamInfo;
}

export namespace DescribeStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
  /**
   * <p>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID.
   * 			Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or
   * 			shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.</p>
   * 		       <p>This lets you better organize your IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</p>
   */
  defaultClientId?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The ID of the thing to describe.</p>
   */
  thingId?: string;

  /**
   * <p>The ARN of the thing to describe.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The current version of the thing record in the registry.</p>
   * 		       <note>
   * 			         <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   * 		       </note>
   */
  version?: number;

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   */
  billingGroupName?: string;
}

export namespace DescribeThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingResponse): any => ({
    ...obj,
  });
}

export interface DescribeThingGroupRequest {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DescribeThingGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeThingGroupResponse {
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: ThingGroupMetadata;

  /**
   * <p>The dynamic thing group index name.</p>
   */
  indexName?: string;

  /**
   * <p>The dynamic thing group search query string.</p>
   */
  queryString?: string;

  /**
   * <p>The dynamic thing group query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The dynamic thing group status.</p>
   */
  status?: DynamicGroupStatus | string;
}

export namespace DescribeThingGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeThingRegistrationTaskRequest {
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeThingRegistrationTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingRegistrationTaskRequest): any => ({
    ...obj,
  });
}

export interface DescribeThingRegistrationTaskResponse {
  /**
   * <p>The task ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date when the task was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The task's template.</p>
   */
  templateBody?: string;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket?: string;

  /**
   * <p>The input file key.</p>
   */
  inputFileKey?: string;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;

  /**
   * <p>The message.</p>
   */
  message?: string;

  /**
   * <p>The number of things successfully provisioned.</p>
   */
  successCount?: number;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   */
  failureCount?: number;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   */
  percentageProgress?: number;
}

export namespace DescribeThingRegistrationTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingRegistrationTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DescribeThingTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingTypeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

export namespace DescribeThingTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeThingTypeResponse): any => ({
    ...obj,
  });
}

export interface DetachPolicyRequest {
  /**
   * <p>The policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The target from which the policy will be detached.</p>
   */
  target: string | undefined;
}

export namespace DetachPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * <p>The name of the policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;
}

export namespace DetachPrincipalPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachPrincipalPolicyRequest): any => ({
    ...obj,
  });
}

export interface DetachSecurityProfileRequest {
  /**
   * <p>The security profile that is detached.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the thing group from which the security profile is detached.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace DetachSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DetachSecurityProfileResponse {}

export namespace DetachSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachSecurityProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   */
  principal: string | undefined;
}

export namespace DetachThingPrincipalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachThingPrincipalRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {}

export namespace DetachThingPrincipalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetachThingPrincipalResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
  /**
   * <p>The name of the rule to disable.</p>
   */
  ruleName: string | undefined;
}

export namespace DisableTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableTopicRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
  /**
   * <p>The name of the topic rule to enable.</p>
   */
  ruleName: string | undefined;
}

export namespace EnableTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableTopicRuleRequest): any => ({
    ...obj,
  });
}

export interface GetBehaviorModelTrainingSummariesRequest {
  /**
   * <p>
   *       The name of the security profile.
   *     </p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;
}

export namespace GetBehaviorModelTrainingSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBehaviorModelTrainingSummariesRequest): any => ({
    ...obj,
  });
}

export interface GetBehaviorModelTrainingSummariesResponse {
  /**
   * <p>
   *       A list of all ML Detect behaviors and their model status for a given Security Profile.
   *     </p>
   */
  summaries?: BehaviorModelTrainingSummary[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace GetBehaviorModelTrainingSummariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBehaviorModelTrainingSummariesResponse): any => ({
    ...obj,
  });
}

export interface GetBucketsAggregationRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field.</p>
   */
  aggregationField: string | undefined;

  /**
   * <p>The version of the query.</p>
   */
  queryVersion?: string;

  /**
   * <p>The basic control of the response shape and the bucket aggregation type to perform. </p>
   */
  bucketsAggregationType: BucketsAggregationType | undefined;
}

export namespace GetBucketsAggregationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsAggregationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketsAggregationResponse {
  /**
   * <p>The total number of things that fit the query string criteria.</p>
   */
  totalCount?: number;

  /**
   * <p>The main part of the response with a list of buckets. Each bucket contains a <code>keyValue</code> and a <code>count</code>.</p>
   *          <p>
   *             <code>keyValue</code>: The aggregation field value counted for the particular bucket.</p>
   *          <p>
   *             <code>count</code>: The number of documents that have that value.</p>
   */
  buckets?: Bucket[];
}

export namespace GetBucketsAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBucketsAggregationResponse): any => ({
    ...obj,
  });
}

export interface GetCardinalityRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetCardinalityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCardinalityRequest): any => ({
    ...obj,
  });
}

export interface GetCardinalityResponse {
  /**
   * <p>The approximate count of unique values that match the query.</p>
   */
  cardinality?: number;
}

export namespace GetCardinalityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCardinalityResponse): any => ({
    ...obj,
  });
}

export interface GetEffectivePoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;
}

export namespace GetEffectivePoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEffectivePoliciesRequest): any => ({
    ...obj,
  });
}

export interface GetEffectivePoliciesResponse {
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: EffectivePolicy[];
}

export namespace GetEffectivePoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEffectivePoliciesResponse): any => ({
    ...obj,
  });
}

export interface GetIndexingConfigurationRequest {}

export namespace GetIndexingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIndexingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetIndexingConfigurationResponse {
  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

export namespace GetIndexingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetIndexingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetJobDocumentRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace GetJobDocumentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobDocumentRequest): any => ({
    ...obj,
  });
}

export interface GetJobDocumentResponse {
  /**
   * <p>The job document content.</p>
   */
  document?: string;
}

export namespace GetJobDocumentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobDocumentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {}

export namespace GetLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoggingOptionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

export namespace GetLoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface GetOTAUpdateRequest {
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace GetOTAUpdateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOTAUpdateRequest): any => ({
    ...obj,
  });
}

export interface GetOTAUpdateResponse {
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: OTAUpdateInfo;
}

export namespace GetOTAUpdateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetOTAUpdateResponse): any => ({
    ...obj,
  });
}

export interface GetPercentilesRequest {
  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;

  /**
   * <p>The percentile groups returned.</p>
   */
  percents?: number[];
}

export namespace GetPercentilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPercentilesRequest): any => ({
    ...obj,
  });
}

export interface GetPercentilesResponse {
  /**
   * <p>The percentile values of the aggregated fields.</p>
   */
  percentiles?: PercentPair[];
}

export namespace GetPercentilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPercentilesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;
}

export namespace GetPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The default policy version ID.</p>
   */
  defaultVersionId?: string;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy.</p>
   */
  generationId?: string;
}

export namespace GetPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

export namespace GetPolicyVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The generation ID of the policy version.</p>
   */
  generationId?: string;
}

export namespace GetPolicyVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPolicyVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {}

export namespace GetRegistrationCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistrationCodeRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;
}

export namespace GetRegistrationCodeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistrationCodeResponse): any => ({
    ...obj,
  });
}

export interface GetStatisticsRequest {
  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your Amazon Web Services account.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field name.</p>
   */
  aggregationField?: string;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;
}

export namespace GetStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatisticsRequest): any => ({
    ...obj,
  });
}

export interface GetStatisticsResponse {
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   */
  statistics?: Statistics;
}

export namespace GetStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatisticsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace GetTopicRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTopicRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The rule.</p>
   */
  rule?: TopicRule;
}

export namespace GetTopicRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTopicRuleResponse): any => ({
    ...obj,
  });
}

export interface GetTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;
}

export namespace GetTopicRuleDestinationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTopicRuleDestinationRequest): any => ({
    ...obj,
  });
}

export interface GetTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace GetTopicRuleDestinationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTopicRuleDestinationResponse): any => ({
    ...obj,
  });
}

export interface GetV2LoggingOptionsRequest {}

export namespace GetV2LoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetV2LoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface GetV2LoggingOptionsResponse {
  /**
   * <p>The IAM role ARN IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;

  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;
}

export namespace GetV2LoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetV2LoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface ListActiveViolationsRequest {
  /**
   * <p>The name of the thing whose active violations are listed.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   */
  securityProfileName?: string;

  /**
   * <p>
   *       The criteria for a behavior.
   *     </p>
   */
  behaviorCriteriaType?: BehaviorCriteriaType | string;

  /**
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   */
  listSuppressedAlerts?: boolean;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListActiveViolationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActiveViolationsRequest): any => ({
    ...obj,
  });
}

export interface ListActiveViolationsResponse {
  /**
   * <p>The list of active violations.</p>
   */
  activeViolations?: ActiveViolation[];

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListActiveViolationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListActiveViolationsResponse): any => ({
    ...obj,
  });
}

export interface ListAttachedPoliciesRequest {
  /**
   * <p>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  target: string | undefined;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;
}

export namespace ListAttachedPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttachedPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListAttachedPoliciesResponse {
  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListAttachedPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAttachedPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListAuditFindingsRequest {
  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;

  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date;

  /**
   * <p>
   *       Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
   *     </p>
   */
  listSuppressedFindings?: boolean;
}

export namespace ListAuditFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditFindingsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditFindingsResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   */
  findings?: AuditFinding[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditFindingsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   */
  findingId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsExecutionsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   */
  actionsExecutions?: AuditMitigationActionExecutionMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsExecutionsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsTasksRequest {
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   */
  findingId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   */
  endTime: Date | undefined;
}

export namespace ListAuditMitigationActionsTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsTasksRequest): any => ({
    ...obj,
  });
}

export interface ListAuditMitigationActionsTasksResponse {
  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: AuditMitigationActionsTaskMetadata[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditMitigationActionsTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditMitigationActionsTasksResponse): any => ({
    ...obj,
  });
}

export interface ListAuditSuppressionsRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName?: string;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>
   *       Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
   *     </p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;
}

export namespace ListAuditSuppressionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditSuppressionsRequest): any => ({
    ...obj,
  });
}

export interface ListAuditSuppressionsResponse {
  /**
   * <p>
   *       List of audit suppressions.
   *     </p>
   */
  suppressions?: AuditSuppression[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListAuditSuppressionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditSuppressionsResponse): any => ({
    ...obj,
  });
}

export interface ListAuditTasksRequest {
  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (90 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

export namespace ListAuditTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditTasksRequest): any => ({
    ...obj,
  });
}

export interface ListAuditTasksResponse {
  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: AuditTaskMetadata[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListAuditTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuditTasksResponse): any => ({
    ...obj,
  });
}

export interface ListAuthorizersRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The status of the list authorizers request.</p>
   */
  status?: AuthorizerStatus | string;
}

export namespace ListAuthorizersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuthorizersRequest): any => ({
    ...obj,
  });
}

export interface ListAuthorizersResponse {
  /**
   * <p>The authorizers.</p>
   */
  authorizers?: AuthorizerSummary[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListAuthorizersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAuthorizersResponse): any => ({
    ...obj,
  });
}

export interface ListBillingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;
}

export namespace ListBillingGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListBillingGroupsResponse {
  /**
   * <p>The list of billing groups.</p>
   */
  billingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBillingGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Determines the order of the results.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCACertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCACertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
  /**
   * <p>The CA certificates registered in your Amazon Web Services account.</p>
   */
  certificates?: CACertificate[];

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;
}

export namespace ListCACertificatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCACertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
  /**
   * <p>The descriptions of the certificates.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   */
  caCertificateId: string | undefined;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListCertificatesByCARequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesByCARequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   */
  certificates?: Certificate[];

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

export namespace ListCertificatesByCAResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCertificatesByCAResponse): any => ({
    ...obj,
  });
}

export interface ListCustomMetricsRequest {
  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;
}

export namespace ListCustomMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomMetricsRequest): any => ({
    ...obj,
  });
}

export interface ListCustomMetricsResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricNames?: string[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results,
   *       or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListCustomMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomMetricsResponse): any => ({
    ...obj,
  });
}

export interface ListDetectMitigationActionsExecutionsRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;

  /**
   * <p>
   *       The unique identifier of the violation.
   *     </p>
   */
  violationId?: string;

  /**
   * <p>
   *       The name of the thing whose mitigation actions are listed.
   *     </p>
   */
  thingName?: string;

  /**
   * <p>
   *       A filter to limit results to those found after the specified time. You must
   *       specify either the startTime and endTime or the taskId, but not both.
   *     </p>
   */
  startTime?: Date;

  /**
   * <p>
   *       The end of the time period for which ML Detect mitigation actions executions are returned.
   *     </p>
   */
  endTime?: Date;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListDetectMitigationActionsExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectMitigationActionsExecutionsRequest): any => ({
    ...obj,
  });
}

export interface ListDetectMitigationActionsExecutionsResponse {
  /**
   * <p>
   *       List of actions executions.
   *     </p>
   */
  actionsExecutions?: DetectMitigationActionExecution[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListDetectMitigationActionsExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectMitigationActionsExecutionsResponse): any => ({
    ...obj,
  });
}

export interface ListDetectMitigationActionsTasksRequest {
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   */
  nextToken?: string;

  /**
   * <p>
   *       A filter to limit results to those found after the specified time. You must
   *       specify either the startTime and endTime or the taskId, but not both.
   *     </p>
   */
  startTime: Date | undefined;

  /**
   * <p>
   *       The end of the time period for which ML Detect mitigation actions tasks are returned.
   *     </p>
   */
  endTime: Date | undefined;
}

export namespace ListDetectMitigationActionsTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectMitigationActionsTasksRequest): any => ({
    ...obj,
  });
}

export interface ListDetectMitigationActionsTasksResponse {
  /**
   * <p>
   *       The collection of ML Detect mitigation tasks that matched the filter criteria.
   *     </p>
   */
  tasks?: DetectMitigationActionsTaskSummary[];

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListDetectMitigationActionsTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDetectMitigationActionsTasksResponse): any => ({
    ...obj,
  });
}

export interface ListDimensionsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to retrieve at one time.</p>
   */
  maxResults?: number;
}

export namespace ListDimensionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDimensionsRequest): any => ({
    ...obj,
  });
}

export interface ListDimensionsResponse {
  /**
   * <p>A list of the names of the defined dimensions. Use <code>DescribeDimension</code> to get details for a dimension.</p>
   */
  dimensionNames?: string[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListDimensionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDimensionsResponse): any => ({
    ...obj,
  });
}

export interface ListDomainConfigurationsRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace ListDomainConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListDomainConfigurationsResponse {
  /**
   * <p>A list of objects that contain summary information about the user's domain configurations.</p>
   */
  domainConfigurations?: DomainConfigurationSummary[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListDomainConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDomainConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListFleetMetricsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous response;
   *        otherwise <code>null</code> to receive the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;
}

export namespace ListFleetMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFleetMetricsRequest): any => ({
    ...obj,
  });
}

export interface ListFleetMetricsResponse {
  /**
   * <p>The list of fleet metrics objects.</p>
   */
  fleetMetrics?: FleetMetricNameAndArn[];

  /**
   * <p>The token for the next set of results. Will not be returned if the operation has returned
   *       all results.</p>
   */
  nextToken?: string;
}

export namespace ListFleetMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFleetMetricsResponse): any => ({
    ...obj,
  });
}

export interface ListIndicesRequest {
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export namespace ListIndicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIndicesRequest): any => ({
    ...obj,
  });
}

export interface ListIndicesResponse {
  /**
   * <p>The index names.</p>
   */
  indexNames?: string[];

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListIndicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIndicesResponse): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The status of the job.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobExecutionsForJobRequest): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForJobResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForJob[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobExecutionsForJobResponse): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *         <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *         <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace ListJobExecutionsForThingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobExecutionsForThingRequest): any => ({
    ...obj,
  });
}

export interface ListJobExecutionsForThingResponse {
  /**
   * <p>A list of job execution summaries.</p>
   */
  executionSummaries?: JobExecutionSummaryForThing[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobExecutionsForThingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobExecutionsForThingResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group. </p>
   *         <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets.
   *                 By using continuous jobs, devices that join the group receive the job execution even after the job has
   *                 been created.</p>
   *         </note>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *         <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
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

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>A list of jobs.</p>
   */
  jobs?: JobSummary[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesRequest {
  /**
   * <p>The maximum number of results to return in the list.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to use to return the next set of results in the list.</p>
   */
  nextToken?: string;
}

export namespace ListJobTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListJobTemplatesResponse {
  /**
   * <p>A list of objects that contain information about the job templates.</p>
   */
  jobTemplates?: JobTemplateSummary[];

  /**
   * <p>The token for the next set of results, or <b>null</b> if there are no
   *             additional results.</p>
   */
  nextToken?: string;
}

export namespace ListJobTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListManagedJobTemplatesRequest {
  /**
   * <p>An optional parameter for template name. If specified, only the versions of the
   *             managed job templates that have the specified template name will be returned.</p>
   */
  templateName?: string;

  /**
   * <p>Maximum number of entries that can be returned.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListManagedJobTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedJobTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListManagedJobTemplatesResponse {
  /**
   * <p>A list of managed job templates that are returned.</p>
   */
  managedJobTemplates?: ManagedJobTemplateSummary[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListManagedJobTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListManagedJobTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListMetricValuesRequest {
  /**
   * <p>The name of the thing for which security profile metric values are returned.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the security profile metric for which values are returned.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The dimension name.</p>
   */
  dimensionName?: string;

  /**
   * <p>The dimension value operator.</p>
   */
  dimensionValueOperator?: DimensionValueOperator | string;

  /**
   * <p>The start of the time period for which metric values are returned.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period for which metric values are returned.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMetricValuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMetricValuesRequest): any => ({
    ...obj,
  });
}

export interface ListMetricValuesResponse {
  /**
   * <p>The data the thing reports for the metric during the specified time period.</p>
   */
  metricDatumList?: MetricDatum[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *         if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListMetricValuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMetricValuesResponse): any => ({
    ...obj,
  });
}

export interface ListMitigationActionsRequest {
  /**
   * <p>Specify a value to limit the result to mitigation actions with a specific action type.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMitigationActionsRequest): any => ({
    ...obj,
  });
}

export interface ListMitigationActionsResponse {
  /**
   * <p>A set of actions that matched the specified filter criteria.</p>
   */
  actionIdentifiers?: MitigationActionIdentifier[];

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListMitigationActionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMitigationActionsResponse): any => ({
    ...obj,
  });
}

export interface ListOTAUpdatesRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The OTA update job status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace ListOTAUpdatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOTAUpdatesRequest): any => ({
    ...obj,
  });
}

export interface ListOTAUpdatesResponse {
  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: OTAUpdateSummary[];

  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListOTAUpdatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOTAUpdatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListOutgoingCertificatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutgoingCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: OutgoingCertificate[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;
}

export namespace ListOutgoingCertificatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListOutgoingCertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;
}

export namespace ListPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj,
  });
}
