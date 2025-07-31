// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";

import {
  AbortConfig,
  Action,
  ActiveViolation,
  AggregationType,
  AlertTarget,
  AlertTargetType,
  ApplicationProtocol,
  AuditCheckConfiguration,
  AuditCheckDetails,
  AuditFinding,
  AuditFrequency,
  AuditMitigationActionExecutionMetadata,
  AuditMitigationActionsExecutionStatus,
  AuditMitigationActionsTaskMetadata,
  AuditMitigationActionsTaskStatus,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditNotificationType,
  AuditSuppression,
  AuditTaskMetadata,
  AuditTaskStatus,
  AuditTaskType,
  AuthenticationType,
  AuthorizerConfig,
  AuthorizerDescription,
  AuthorizerStatus,
  AuthorizerSummary,
  AutoRegistrationStatus,
  AwsJobExecutionsRolloutConfig,
  AwsJobPresignedUrlConfig,
  Behavior,
  BillingGroupProperties,
  CertificateProviderOperation,
  ClientCertificateConfig,
  CommandNamespace,
  CommandParameter,
  CommandParameterValue,
  CommandPayload,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  FleetMetricUnit,
  HttpUrlDestinationProperties,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  LogLevel,
  MaintenanceWindow,
  MetricsExportConfig,
  MetricToRetain,
  MitigationActionParams,
  OTAUpdateFile,
  OTAUpdateStatus,
  PackageVersionArtifact,
  PackageVersionStatus,
  Policy,
  PresignedUrlConfig,
  Protocol,
  ProvisioningHook,
  ResourceIdentifier,
  Sbom,
  SbomValidationStatus,
  SchedulingConfig,
  ServerCertificateConfig,
  ServiceType,
  StreamFile,
  TargetSelection,
  TaskStatisticsForAuditCheck,
  TemplateType,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
  TopicRuleDestinationStatus,
  VerificationState,
} from "./models_0";

/**
 * <p>The properties of a virtual private cloud (VPC) destination.</p>
 * @public
 */
export interface VpcDestinationProperties {
  /**
   * <p>The subnet IDs of the VPC destination.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The security groups of the VPC destination.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>A topic rule destination.</p>
 * @public
 */
export interface TopicRuleDestination {
  /**
   * <p>The topic rule destination URL.</p>
   * @public
   */
  arn?: string | undefined;

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
   * @public
   */
  status?: TopicRuleDestinationStatus | undefined;

  /**
   * <p>The date and time when the topic rule destination was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the topic rule destination was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>Additional details or reason why the topic rule destination is in the current
   *          status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Properties of the HTTP URL.</p>
   * @public
   */
  httpUrlProperties?: HttpUrlDestinationProperties | undefined;

  /**
   * <p>Properties of the virtual private cloud (VPC) connection.</p>
   * @public
   */
  vpcProperties?: VpcDestinationProperties | undefined;
}

/**
 * @public
 */
export interface CreateTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   * @public
   */
  topicRuleDestination?: TopicRuleDestination | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAuditConfigurationRequest {
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   * @public
   */
  deleteScheduledAudits?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAccountAuditConfigurationResponse {}

/**
 * @public
 */
export interface DeleteAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   * @public
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface DeleteAuditSuppressionResponse {}

/**
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * <p>The name of the authorizer to delete.</p>
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthorizerResponse {}

/**
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 * @public
 */
export class DeleteConflictException extends __BaseException {
  readonly name: "DeleteConflictException" = "DeleteConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteConflictException, __BaseException>) {
    super({
      name: "DeleteConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteConflictException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>DeleteBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteBillingGroupResponse {}

/**
 * <p>The certificate operation is not allowed.</p>
 * @public
 */
export class CertificateStateException extends __BaseException {
  readonly name: "CertificateStateException" = "CertificateStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateStateException, __BaseException>) {
    super({
      name: "CertificateStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateStateException.prototype);
  }
}

/**
 * <p>Input for the DeleteCACertificate operation.</p>
 * @public
 */
export interface DeleteCACertificateRequest {
  /**
   * <p>The ID of the certificate to delete. (The last part of the certificate ARN contains
   *          the certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 * @public
 */
export interface DeleteCACertificateResponse {}

/**
 * <p>The input for the DeleteCertificate operation.</p>
 * @public
 */
export interface DeleteCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;

  /**
   * <p>Forces the deletion of a certificate if it is inactive and is not attached to an IoT
   *          thing.</p>
   * @public
   */
  forceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateProviderRequest {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateProviderResponse {}

/**
 * @public
 */
export interface DeleteCommandRequest {
  /**
   * <p>The unique identifier of the command to be deleted.</p>
   * @public
   */
  commandId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommandResponse {
  /**
   * <p>The status code for the command deletion request. The status code is in the 200 range
   *         for a successful request.</p>
   *          <ul>
   *             <li>
   *                <p>If the command hasn't been deprecated, or has been deprecated for a duration that
   *             is shorter than the maximum time out duration of 12 hours, when calling the
   *             <code>DeleteCommand</code> request, the deletion will be scheduled and a 202 status code
   *             will be returned. While the command is being deleted, it will be in a
   *             <code>pendingDeletion</code> state. Once the time out duration has been reached,
   *             the command will be permanently removed from your account.</p>
   *             </li>
   *             <li>
   *                <p>If the command has been deprecated for a duration that is longer than the
   *             maximum time out duration of 12 hours, when calling the <code>DeleteCommand</code> request,
   *             the command will be deleted immediately and a 204 status code will be returned.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @public
 */
export interface DeleteCommandExecutionRequest {
  /**
   * <p>The unique identifier of the command execution that you want to delete from your
   *       account.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the target device for which you want to delete
   *       command executions.</p>
   * @public
   */
  targetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommandExecutionResponse {}

/**
 * @public
 */
export interface DeleteCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomMetricResponse {}

/**
 * @public
 */
export interface DeleteDimensionRequest {
  /**
   * <p>The unique identifier for the dimension that you want to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDimensionResponse {}

/**
 * @public
 */
export interface DeleteDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   * @public
   */
  domainConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainConfigurationResponse {}

/**
 * @public
 */
export interface DeleteDynamicThingGroupRequest {
  /**
   * <p>The name of the dynamic thing group to delete.</p>
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the dynamic thing group to delete.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteDynamicThingGroupResponse {}

/**
 * @public
 */
export interface DeleteFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to delete.</p>
   * @public
   */
  metricName: string | undefined;

  /**
   * <p>The expected version of the fleet metric to delete.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new
   *             job. However, this is not recommended, and you must ensure that your devices are not
   *             using the jobId to refer to the deleted job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you
   *             can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an
   *             exception will occur. The default is false.</p>
   *          <note>
   *             <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing
   *                 the job to be unable to access job information or update the job execution status.
   *                 Use caution and ensure that each device executing a job which is deleted is able to
   *                 recover to a valid state.</p>
   *          </note>
   * @public
   */
  force?: boolean | undefined;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to
   *             MQTT topics that contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is only supported by IoT Greengrass at this time. For
   *                 more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html">Setting up IoT Greengrass core devices.</a>
   *             </p>
   *          </note>
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobExecutionRequest {
  /**
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers
   *             to the execution of a particular job on a particular device.</p>
   *          <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be
   *             reused by IoT, so be sure you get and use the correct value here.</p>
   * @public
   */
  executionNumber: number | undefined;

  /**
   * <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS".
   *             Otherwise, you can only delete a job execution which is in a terminal state
   *             ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur.
   *             The default is false.</p>
   *          <note>
   *             <p>Deleting a job execution which is "IN_PROGRESS", will cause the device to be
   *                 unable to access job information or update the job execution status. Use caution and
   *                 ensure that the device is able to recover to a valid state.</p>
   *          </note>
   * @public
   */
  force?: boolean | undefined;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to
   *             MQTT topics that contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is only supported by IoT Greengrass at this time. For
   *                 more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html">Setting up IoT Greengrass core devices.</a>
   *             </p>
   *          </note>
   * @public
   */
  namespaceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template to delete.</p>
   * @public
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionRequest {
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMitigationActionResponse {}

/**
 * @public
 */
export interface DeleteOTAUpdateRequest {
  /**
   * <p>The ID of the OTA update to delete.</p>
   * @public
   */
  otaUpdateId: string | undefined;

  /**
   * <p>When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted.
   *             Ignored if the stream specified in the OTAUpdate is supplied by the user.</p>
   * @public
   */
  deleteStream?: boolean | undefined;

  /**
   * <p>When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the
   *             job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.</p>
   * @public
   */
  forceDeleteAWSJob?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteOTAUpdateResponse {}

/**
 * @public
 */
export interface DeletePackageRequest {
  /**
   * <p>The name of the target software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageResponse {}

/**
 * @public
 */
export interface DeletePackageVersionRequest {
  /**
   * <p>The name of the associated software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The name of the target package version.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePackageVersionResponse {}

/**
 * <p>The input for the DeletePolicy operation.</p>
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The name of the policy to delete.</p>
   * @public
   */
  policyName: string | undefined;
}

/**
 * <p>The input for the DeletePolicyVersion operation.</p>
 * @public
 */
export interface DeletePolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateRequest {
  /**
   * <p>The name of the fleet provision template to delete.</p>
   * @public
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateResponse {}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionRequest {
  /**
   * <p>The name of the provisioning template version to delete.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The provisioning template version ID to delete.</p>
   * @public
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningTemplateVersionResponse {}

/**
 * <p>The input for the DeleteRegistrationCode operation.</p>
 * @public
 */
export interface DeleteRegistrationCodeRequest {}

/**
 * <p>The output for the DeleteRegistrationCode operation.</p>
 * @public
 */
export interface DeleteRegistrationCodeResponse {}

/**
 * @public
 */
export interface DeleteRoleAliasRequest {
  /**
   * <p>The role alias to delete.</p>
   * @public
   */
  roleAlias: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoleAliasResponse {}

/**
 * @public
 */
export interface DeleteScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledAuditResponse {}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * <p>The name of the security profile to be deleted.</p>
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileResponse {}

/**
 * @public
 */
export interface DeleteStreamRequest {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamResponse {}

/**
 * <p>The input for the DeleteThing operation.</p>
 * @public
 */
export interface DeleteThingRequest {
  /**
   * <p>The name of the thing to delete.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>DeleteThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * <p>The output of the DeleteThing operation.</p>
 * @public
 */
export interface DeleteThingResponse {}

/**
 * @public
 */
export interface DeleteThingGroupRequest {
  /**
   * <p>The name of the thing group to delete.</p>
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * <p>The expected version of the thing group to delete.</p>
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteThingGroupResponse {}

/**
 * <p>The input for the DeleteThingType operation.</p>
 * @public
 */
export interface DeleteThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName: string | undefined;
}

/**
 * <p>The output for the DeleteThingType operation.</p>
 * @public
 */
export interface DeleteThingTypeResponse {}

/**
 * <p>The input for the DeleteTopicRule operation.</p>
 * @public
 */
export interface DeleteTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination to delete.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTopicRuleDestinationResponse {}

/**
 * @public
 * @enum
 */
export const LogTargetType = {
  CLIENT_ID: "CLIENT_ID",
  DEFAULT: "DEFAULT",
  PRINCIPAL_ID: "PRINCIPAL_ID",
  SOURCE_IP: "SOURCE_IP",
  THING_GROUP: "THING_GROUP",
} as const;

/**
 * @public
 */
export type LogTargetType = (typeof LogTargetType)[keyof typeof LogTargetType];

/**
 * @public
 */
export interface DeleteV2LoggingLevelRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   * @public
   */
  targetType: LogTargetType | undefined;

  /**
   * <p>The name of the resource for which you are configuring logging.</p>
   * @public
   */
  targetName: string | undefined;
}

/**
 * <p>The input for the DeprecateThingType operation.</p>
 * @public
 */
export interface DeprecateThingTypeRequest {
  /**
   * <p>The name of the thing type to deprecate.</p>
   * @public
   */
  thingTypeName: string | undefined;

  /**
   * <p>Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can
   * 			associate it with things.</p>
   * @public
   */
  undoDeprecate?: boolean | undefined;
}

/**
 * <p>The output for the DeprecateThingType operation.</p>
 * @public
 */
export interface DeprecateThingTypeResponse {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationRequest {}

/**
 * @public
 */
export interface DescribeAccountAuditConfigurationResponse {
  /**
   * <p>The ARN of the role that grants permission to IoT to access information
   *             about your devices, policies, certificates, and other items as required when
   *             performing an audit.</p>
   *          <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Information about the targets to which audit notifications are sent for
   *             this account.</p>
   * @public
   */
  auditNotificationTargetConfigurations?: Partial<Record<AuditNotificationType, AuditNotificationTarget>> | undefined;

  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   * @public
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration> | undefined;
}

/**
 * @public
 */
export interface DescribeAuditFindingRequest {
  /**
   * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
   * @public
   */
  findingId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditFindingResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   * @public
   */
  finding?: AuditFinding | undefined;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskRequest {
  /**
   * <p>The unique identifier for the audit mitigation task.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 * @public
 */
export interface MitigationAction {
  /**
   * <p>A user-friendly name for the mitigation action.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   * @public
   */
  actionParams?: MitigationActionParams | undefined;
}

/**
 * @public
 */
export interface DescribeAuditMitigationActionsTaskResponse {
  /**
   * <p>The current status of the task.</p>
   * @public
   */
  taskStatus?: AuditMitigationActionsTaskStatus | undefined;

  /**
   * <p>The date and time when the task was started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   * @public
   */
  taskStatistics?: Record<string, TaskStatisticsForAuditCheck> | undefined;

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   * @public
   */
  target?: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   * @public
   */
  auditCheckToActionsMapping?: Record<string, string[]> | undefined;

  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   * @public
   */
  actionsDefinition?: MitigationAction[] | undefined;
}

/**
 * @public
 */
export interface DescribeAuditSuppressionRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   * @public
   */
  checkName: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;
}

/**
 * @public
 */
export interface DescribeAuditSuppressionResponse {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   * @public
   */
  checkName?: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * <p>
   *       The epoch timestamp in seconds at which this suppression expires.
   *     </p>
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   * @public
   */
  suppressIndefinitely?: boolean | undefined;

  /**
   * <p>
   *       The description of the audit suppression.
   *     </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuditTaskRequest {
  /**
   * <p>The ID of the audit whose information you want to get.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * <p>Statistics for the checks performed during the audit.</p>
 * @public
 */
export interface TaskStatistics {
  /**
   * <p>The number of checks in this audit.</p>
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * <p>The number of checks in progress.</p>
   * @public
   */
  inProgressChecks?: number | undefined;

  /**
   * <p>The number of checks waiting for data collection.</p>
   * @public
   */
  waitingForDataCollectionChecks?: number | undefined;

  /**
   * <p>The number of checks that found compliant resources.</p>
   * @public
   */
  compliantChecks?: number | undefined;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   * @public
   */
  nonCompliantChecks?: number | undefined;

  /**
   * <p>The number of checks.</p>
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   * @public
   */
  canceledChecks?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAuditTaskResponse {
  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   * @public
   */
  taskStatus?: AuditTaskStatus | undefined;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   * @public
   */
  taskType?: AuditTaskType | undefined;

  /**
   * <p>The time the audit started.</p>
   * @public
   */
  taskStartTime?: Date | undefined;

  /**
   * <p>Statistical information about the audit.</p>
   * @public
   */
  taskStatistics?: TaskStatistics | undefined;

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   * @public
   */
  scheduledAuditName?: string | undefined;

  /**
   * <p>Detailed information about each check performed during this audit.</p>
   * @public
   */
  auditDetails?: Record<string, AuditCheckDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAuthorizerRequest {
  /**
   * <p>The name of the authorizer to describe.</p>
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthorizerResponse {
  /**
   * <p>The authorizer description.</p>
   * @public
   */
  authorizerDescription?: AuthorizerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName: string | undefined;
}

/**
 * <p>Additional information about the billing group.</p>
 * @public
 */
export interface BillingGroupMetadata {
  /**
   * <p>The date the billing group was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeBillingGroupResponse {
  /**
   * <p>The name of the billing group.</p>
   * @public
   */
  billingGroupName?: string | undefined;

  /**
   * <p>The ID of the billing group.</p>
   * @public
   */
  billingGroupId?: string | undefined;

  /**
   * <p>The ARN of the billing group.</p>
   * @public
   */
  billingGroupArn?: string | undefined;

  /**
   * <p>The version of the billing group.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The properties of the billing group.</p>
   * @public
   */
  billingGroupProperties?: BillingGroupProperties | undefined;

  /**
   * <p>Additional information about the billing group.</p>
   * @public
   */
  billingGroupMetadata?: BillingGroupMetadata | undefined;
}

/**
 * <p>The input for the DescribeCACertificate operation.</p>
 * @public
 */
export interface DescribeCACertificateRequest {
  /**
   * <p>The CA certificate identifier.</p>
   * @public
   */
  certificateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateMode = {
  DEFAULT: "DEFAULT",
  SNI_ONLY: "SNI_ONLY",
} as const;

/**
 * @public
 */
export type CertificateMode = (typeof CertificateMode)[keyof typeof CertificateMode];

/**
 * @public
 * @enum
 */
export const CACertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type CACertificateStatus = (typeof CACertificateStatus)[keyof typeof CACertificateStatus];

/**
 * <p>When the certificate is valid.</p>
 * @public
 */
export interface CertificateValidity {
  /**
   * <p>The certificate is not valid before this date.</p>
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * <p>The certificate is not valid after this date.</p>
   * @public
   */
  notAfter?: Date | undefined;
}

/**
 * <p>Describes a CA certificate.</p>
 * @public
 */
export interface CACertificateDescription {
  /**
   * <p>The CA certificate ARN.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The CA certificate ID.</p>
   * @public
   */
  certificateId?: string | undefined;

  /**
   * <p>The status of a CA certificate.</p>
   * @public
   */
  status?: CACertificateStatus | undefined;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * <p>The owner of the CA certificate.</p>
   * @public
   */
  ownedBy?: string | undefined;

  /**
   * <p>The date the CA certificate was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   * @public
   */
  autoRegistrationStatus?: AutoRegistrationStatus | undefined;

  /**
   * <p>The date the CA certificate was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The customer version of the CA certificate.</p>
   * @public
   */
  customerVersion?: number | undefined;

  /**
   * <p>The generation ID of the CA certificate.</p>
   * @public
   */
  generationId?: string | undefined;

  /**
   * <p>When the CA certificate is valid.</p>
   * @public
   */
  validity?: CertificateValidity | undefined;

  /**
   * <p>The mode of the CA. </p>
   *          <p>All the device certificates that are registered using this CA will be registered
   *          in the same mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a>.</p>
   * @public
   */
  certificateMode?: CertificateMode | undefined;
}

/**
 * <p>The registration configuration.</p>
 * @public
 */
export interface RegistrationConfig {
  /**
   * <p>The template body.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>The ARN of the role.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName?: string | undefined;
}

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 * @public
 */
export interface DescribeCACertificateResponse {
  /**
   * <p>The CA certificate description.</p>
   * @public
   */
  certificateDescription?: CACertificateDescription | undefined;

  /**
   * <p>Information about the registration configuration.</p>
   * @public
   */
  registrationConfig?: RegistrationConfig | undefined;
}

/**
 * <p>The input for the DescribeCertificate operation.</p>
 * @public
 */
export interface DescribeCertificateRequest {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  PENDING_TRANSFER: "PENDING_TRANSFER",
  REGISTER_INACTIVE: "REGISTER_INACTIVE",
  REVOKED: "REVOKED",
} as const;

/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * <p>Data used to transfer a certificate to an Amazon Web Services account.</p>
 * @public
 */
export interface TransferData {
  /**
   * <p>The transfer message.</p>
   * @public
   */
  transferMessage?: string | undefined;

  /**
   * <p>The reason why the transfer was rejected.</p>
   * @public
   */
  rejectReason?: string | undefined;

  /**
   * <p>The date the transfer took place.</p>
   * @public
   */
  transferDate?: Date | undefined;

  /**
   * <p>The date the transfer was accepted.</p>
   * @public
   */
  acceptDate?: Date | undefined;

  /**
   * <p>The date the transfer was rejected.</p>
   * @public
   */
  rejectDate?: Date | undefined;
}

/**
 * <p>Describes a certificate.</p>
 * @public
 */
export interface CertificateDescription {
  /**
   * <p>The ARN of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The ID of the certificate.</p>
   * @public
   */
  certificateId?: string | undefined;

  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   * @public
   */
  caCertificateId?: string | undefined;

  /**
   * <p>The status of the certificate.</p>
   * @public
   */
  status?: CertificateStatus | undefined;

  /**
   * <p>The certificate data, in PEM format.</p>
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the certificate.</p>
   * @public
   */
  ownedBy?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account of the previous owner of the certificate.</p>
   * @public
   */
  previousOwnedBy?: string | undefined;

  /**
   * <p>The date and time the certificate was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date and time the certificate was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The customer version of the certificate.</p>
   * @public
   */
  customerVersion?: number | undefined;

  /**
   * <p>The transfer data.</p>
   * @public
   */
  transferData?: TransferData | undefined;

  /**
   * <p>The generation ID of the certificate.</p>
   * @public
   */
  generationId?: string | undefined;

  /**
   * <p>When the certificate is valid.</p>
   * @public
   */
  validity?: CertificateValidity | undefined;

  /**
   * <p>The mode of the certificate.</p>
   *          <p>
   *             <code>DEFAULT</code>: A certificate in <code>DEFAULT</code> mode is either generated by
   *          Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in <code>DEFAULT</code> mode. Devices with
   *          certificates in <code>DEFAULT</code> mode aren't required to send the Server Name
   *          Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as
   *          custom domains and VPC endpoints, we recommend that you use the SNI extension when
   *          connecting to Amazon Web Services IoT Core.</p>
   *          <p>
   *             <code>SNI_ONLY</code>: A certificate in <code>SNI_ONLY</code> mode is registered without an issuer CA. Devices with certificates
   *          in <code>SNI_ONLY</code> mode must send the SNI extension when connecting to Amazon Web Services IoT Core. </p>
   *          <p>For more information about the value for SNI extension, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html">Transport security in IoT</a>.</p>
   * @public
   */
  certificateMode?: CertificateMode | undefined;
}

/**
 * <p>The output of the DescribeCertificate operation.</p>
 * @public
 */
export interface DescribeCertificateResponse {
  /**
   * <p>The description of the certificate.</p>
   * @public
   */
  certificateDescription?: CertificateDescription | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateProviderRequest {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateProviderResponse {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * <p>The ARN of the certificate provider.</p>
   * @public
   */
  certificateProviderArn?: string | undefined;

  /**
   * <p>The Lambda function ARN that's associated with the certificate provider.</p>
   * @public
   */
  lambdaFunctionArn?: string | undefined;

  /**
   * <p>A list of the operations that the certificate provider will use to generate certificates.
   *          Valid value: <code>CreateCertificateFromCsr</code>.</p>
   * @public
   */
  accountDefaultForOperations?: CertificateProviderOperation[] | undefined;

  /**
   * <p>The date-time string that indicates when the certificate provider was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date-time string that indicates when the certificate provider was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeCustomMetricRequest {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomMetricResponse {
  /**
   * <p>
   *       The name of the custom metric.
   *     </p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   * @public
   */
  metricArn?: string | undefined;

  /**
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   * @public
   */
  metricType?: CustomMetricType | undefined;

  /**
   * <p>
   *       Field represents a friendly name in the console for the custom metric; doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
   *     </p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerRequest {}

/**
 * @public
 */
export interface DescribeDefaultAuthorizerResponse {
  /**
   * <p>The default authorizer's description.</p>
   * @public
   */
  authorizerDescription?: AuthorizerDescription | undefined;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskRequest {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * <p>
 *             The target of a mitigation action task.
 *         </p>
 * @public
 */
export interface DetectMitigationActionsTaskTarget {
  /**
   * <p>
   *             The unique identifiers of the violations.
   *         </p>
   * @public
   */
  violationIds?: string[] | undefined;

  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   * @public
   */
  behaviorName?: string | undefined;
}

/**
 * <p>
 *             The statistics of a mitigation action task.
 *         </p>
 * @public
 */
export interface DetectMitigationActionsTaskStatistics {
  /**
   * <p>
   *             The actions that were performed.
   *         </p>
   * @public
   */
  actionsExecuted?: number | undefined;

  /**
   * <p>
   *             The actions that were skipped.
   *         </p>
   * @public
   */
  actionsSkipped?: number | undefined;

  /**
   * <p>
   *             The actions that failed.
   *         </p>
   * @public
   */
  actionsFailed?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DetectMitigationActionsTaskStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type DetectMitigationActionsTaskStatus =
  (typeof DetectMitigationActionsTaskStatus)[keyof typeof DetectMitigationActionsTaskStatus];

/**
 * <p>
 *             Specifies the time period of which violation events occurred between.
 *         </p>
 * @public
 */
export interface ViolationEventOccurrenceRange {
  /**
   * <p>
   *             The start date and time of a time period in which violation events occurred.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The end date and time of a time period in which violation events occurred.
   *         </p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>
 *             The summary of the mitigation action tasks.
 *         </p>
 * @public
 */
export interface DetectMitigationActionsTaskSummary {
  /**
   * <p>
   *             The unique identifier of the task.
   *         </p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>
   *             The status of the task.
   *         </p>
   * @public
   */
  taskStatus?: DetectMitigationActionsTaskStatus | undefined;

  /**
   * <p>
   *             The date the task started.
   *         </p>
   * @public
   */
  taskStartTime?: Date | undefined;

  /**
   * <p>
   *             The date the task ended.
   *         </p>
   * @public
   */
  taskEndTime?: Date | undefined;

  /**
   * <p>
   *             Specifies the ML Detect findings to which the mitigation actions are applied.
   *         </p>
   * @public
   */
  target?: DetectMitigationActionsTaskTarget | undefined;

  /**
   * <p>
   *             Specifies the time period of which violation events occurred between.
   *         </p>
   * @public
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange | undefined;

  /**
   * <p>
   *             Includes only active violations.
   *         </p>
   * @public
   */
  onlyActiveViolationsIncluded?: boolean | undefined;

  /**
   * <p>
   *             Includes suppressed alerts.
   *         </p>
   * @public
   */
  suppressedAlertsIncluded?: boolean | undefined;

  /**
   * <p>
   *             The definition of the actions.
   *         </p>
   * @public
   */
  actionsDefinition?: MitigationAction[] | undefined;

  /**
   * <p>
   *             The statistics of a mitigation action task.
   *         </p>
   * @public
   */
  taskStatistics?: DetectMitigationActionsTaskStatistics | undefined;
}

/**
 * @public
 */
export interface DescribeDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The description of a task.
   *     </p>
   * @public
   */
  taskSummary?: DetectMitigationActionsTaskSummary | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionRequest {
  /**
   * <p>The unique identifier for the dimension.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDimensionResponse {
  /**
   * <p>The unique identifier for the dimension.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name
   *       (ARN)
   *       for
   *       the dimension.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of the dimension.</p>
   * @public
   */
  type?: DimensionType | undefined;

  /**
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   * @public
   */
  stringValues?: string[] | undefined;

  /**
   * <p>The date the dimension was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the dimension was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationRequest {
  /**
   * <p>The name of the domain configuration.</p>
   * @public
   */
  domainConfigurationName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainConfigurationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DomainConfigurationStatus = (typeof DomainConfigurationStatus)[keyof typeof DomainConfigurationStatus];

/**
 * @public
 * @enum
 */
export const DomainType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  ENDPOINT: "ENDPOINT",
} as const;

/**
 * @public
 */
export type DomainType = (typeof DomainType)[keyof typeof DomainType];

/**
 * @public
 * @enum
 */
export const ServerCertificateStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type ServerCertificateStatus = (typeof ServerCertificateStatus)[keyof typeof ServerCertificateStatus];

/**
 * <p>An object that contains information about a server certificate.</p>
 * @public
 */
export interface ServerCertificateSummary {
  /**
   * <p>The ARN of the server certificate.</p>
   * @public
   */
  serverCertificateArn?: string | undefined;

  /**
   * <p>The status of the server certificate.</p>
   * @public
   */
  serverCertificateStatus?: ServerCertificateStatus | undefined;

  /**
   * <p>Details that explain the status of the server certificate.</p>
   * @public
   */
  serverCertificateStatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDomainConfigurationResponse {
  /**
   * <p>The name of the domain configuration.</p>
   * @public
   */
  domainConfigurationName?: string | undefined;

  /**
   * <p>The ARN of the domain configuration.</p>
   * @public
   */
  domainConfigurationArn?: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   * @public
   */
  serverCertificates?: ServerCertificateSummary[] | undefined;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   * @public
   */
  authorizerConfig?: AuthorizerConfig | undefined;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   * @public
   */
  domainConfigurationStatus?: DomainConfigurationStatus | undefined;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   * @public
   */
  serviceType?: ServiceType | undefined;

  /**
   * <p>The type of the domain.</p>
   * @public
   */
  domainType?: DomainType | undefined;

  /**
   * <p>The date and time the domain configuration's status was last changed.</p>
   * @public
   */
  lastStatusChangeDate?: Date | undefined;

  /**
   * <p>An object that specifies the TLS configuration for a domain.</p>
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * <p>The server certificate configuration.</p>
   * @public
   */
  serverCertificateConfig?: ServerCertificateConfig | undefined;

  /**
   * <p>An enumerated string that speciﬁes the authentication type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_AUTH_X509</code> - Use custom authentication and authorization with additional details from the X.509 client certificate.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_AUTH</code> - Use custom authentication and authorization. For more
   *                information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html">Custom authentication and authorization</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_X509</code> - Use X.509 client certificates without custom authentication and authorization. For more information,
   *                see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html">X.509 client certificates</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_SIGV4</code> - Use Amazon Web Services Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html">IAM users, groups, and roles</a>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code> - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify authentication type.
   *                For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html">Device communication protocols</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * <p>An enumerated string that speciﬁes the application-layer protocol.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SECURE_MQTT</code> - MQTT over TLS.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MQTT_WSS</code> - MQTT over WebSocket.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HTTPS</code> - HTTP over TLS.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DEFAULT</code> - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify application_layer protocol.
   *                For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html">Device communication protocols</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  applicationProtocol?: ApplicationProtocol | undefined;

  /**
   * <p>An object that speciﬁes the client certificate conﬁguration for a domain.</p>
   * @public
   */
  clientCertificateConfig?: ClientCertificateConfig | undefined;
}

/**
 * @public
 */
export interface DescribeEncryptionConfigurationRequest {}

/**
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * <p>The encryption configuration details that include the status information of the Amazon Web Services Key Management Service (KMS) key and the KMS access role.</p>
 * @public
 */
export interface ConfigurationDetails {
  /**
   * <p>The health status of KMS key and KMS access role. If either KMS key or KMS access role
   *          is <code>UNHEALTHY</code>, the return value will be <code>UNHEALTHY</code>. To use a
   *          customer-managed KMS key, the value of <code>configurationStatus</code> must be
   *             <code>HEALTHY</code>. </p>
   * @public
   */
  configurationStatus?: ConfigurationStatus | undefined;

  /**
   * <p>The error code that indicates either the KMS key or the KMS access role is <code>UNHEALTHY</code>.
   *          Valid values: <code>KMS_KEY_VALIDATION_ERROR</code> and <code>ROLE_VALIDATION_ERROR</code>.
   *       </p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The detailed error message that corresponds to the <code>errorCode</code>.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 */
export interface DescribeEncryptionConfigurationResponse {
  /**
   * <p>The type of the Amazon Web Services Key Management Service (KMS) key.</p>
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role assumed by Amazon Web Services IoT Core to call KMS on
   *          behalf of the customer.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The ARN of the customer-managed KMS key.</p>
   * @public
   */
  kmsAccessRoleArn?: string | undefined;

  /**
   * <p>The encryption configuration details that include the status information of the KMS key
   *          and the KMS access role.</p>
   * @public
   */
  configurationDetails?: ConfigurationDetails | undefined;

  /**
   * <p>The date when encryption configuration is last updated.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 * @public
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
   *          issues related to the widespread distrust of Symantec certificate authorities. ATS Signed Certificates
   *          are more secure and are trusted by most popular browsers.</p>
   * @public
   */
  endpointType?: string | undefined;
}

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   * @public
   */
  endpointAddress?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsRequest {}

/**
 * @public
 * @enum
 */
export const EventType = {
  CA_CERTIFICATE: "CA_CERTIFICATE",
  CERTIFICATE: "CERTIFICATE",
  JOB: "JOB",
  JOB_EXECUTION: "JOB_EXECUTION",
  POLICY: "POLICY",
  THING: "THING",
  THING_GROUP: "THING_GROUP",
  THING_GROUP_HIERARCHY: "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP: "THING_GROUP_MEMBERSHIP",
  THING_TYPE: "THING_TYPE",
  THING_TYPE_ASSOCIATION: "THING_TYPE_ASSOCIATION",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>Configuration.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>True to enable the configuration.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeEventConfigurationsResponse {
  /**
   * <p>The event configurations.</p>
   * @public
   */
  eventConfigurations?: Partial<Record<EventType, Configuration>> | undefined;

  /**
   * <p>The creation date of the event configuration.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the event configurations were last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to describe.</p>
   * @public
   */
  metricName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFleetMetricResponse {
  /**
   * <p>The name of the fleet metric to describe.</p>
   * @public
   */
  metricName?: string | undefined;

  /**
   * <p>The search query string.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The type of the aggregation query.</p>
   * @public
   */
  aggregationType?: AggregationType | undefined;

  /**
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   * @public
   */
  period?: number | undefined;

  /**
   * <p>The field to aggregate.</p>
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * <p>The fleet metric description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The query version.</p>
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * <p>The name of the index to search.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The date when the fleet metric is created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the fleet metric is last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   * @public
   */
  unit?: FleetMetricUnit | undefined;

  /**
   * <p>The version of the fleet metric.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The ARN of the fleet metric to describe.</p>
   * @public
   */
  metricArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeIndexRequest {
  /**
   * <p>The index name.</p>
   * @public
   */
  indexName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;

/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 */
export interface DescribeIndexResponse {
  /**
   * <p>The index name.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The index status.</p>
   * @public
   */
  indexStatus?: IndexStatus | undefined;

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
   * @public
   */
  schema?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.</p>
   * @public
   */
  beforeSubstitution?: boolean | undefined;
}

/**
 * <p>The job process details.</p>
 * @public
 */
export interface JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will
   *             be null after the job execution has finished rolling out to all the target
   *             devices.</p>
   * @public
   */
  processingTargets?: string[] | undefined;

  /**
   * <p>The number of things that cancelled the job.</p>
   * @public
   */
  numberOfCanceledThings?: number | undefined;

  /**
   * <p>The number of things which successfully completed the job.</p>
   * @public
   */
  numberOfSucceededThings?: number | undefined;

  /**
   * <p>The number of things that failed executing the job.</p>
   * @public
   */
  numberOfFailedThings?: number | undefined;

  /**
   * <p>The number of things that rejected the job.</p>
   * @public
   */
  numberOfRejectedThings?: number | undefined;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   * @public
   */
  numberOfQueuedThings?: number | undefined;

  /**
   * <p>The number of things currently executing the job.</p>
   * @public
   */
  numberOfInProgressThings?: number | undefined;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they
   *             have been deleted or have been removed from the group that was a target of the
   *             job.</p>
   * @public
   */
  numberOfRemovedThings?: number | undefined;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   * @public
   */
  numberOfTimedOutThings?: number | undefined;
}

/**
 * <p>Displays the next seven maintenance window occurrences and their start times.</p>
 * @public
 */
export interface ScheduledJobRollout {
  /**
   * <p>Displays the start times of the next seven maintenance window occurrences.</p>
   * @public
   */
  startTime?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 * @public
 */
export interface Job {
  /**
   * <p>An ARN identifying the job with format
   *             "arn:aws:iot:region:account:job/jobId".</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete
   *             after all those things specified as targets have completed the job (SNAPSHOT). If
   *             continuous, the job may also be run on a thing when a change is detected in a target.
   *             For example, a job will run on a device when the thing representing the device is added
   *             to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   *          <note>
   *             <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic
   *                 thing group targets. By using continuous jobs, devices that join the group receive
   *                 the job execution even after the job has been created.</p>
   *          </note>
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *                 <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional
   *                 <code>force</code> parameter set to <code>true</code>.</p>
   * @public
   */
  forceCanceled?: boolean | undefined;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   * @public
   */
  reasonCode?: string | undefined;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   * @public
   */
  targets?: string[] | undefined;

  /**
   * <p>A short text description of the job.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * <p>Configuration for criteria to abort the job.</p>
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>Details about the job process.</p>
   * @public
   */
  jobProcessDetails?: JobProcessDetails | undefined;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. A
   *             timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If
   *             the job execution status is not set to another terminal state before the timer expires,
   *             it will be automatically set to <code>TIMED_OUT</code>.</p>
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to
   *             MQTT topics that contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is only supported by IoT Greengrass at this time. For
   *                 more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html">Setting up IoT Greengrass core devices.</a>
   *             </p>
   *          </note>
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * <p>The ARN of the job template used to create the job.</p>
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * <p>The configuration for the criteria to retry the job.</p>
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * <p>A key-value map that pairs the patterns that need to be replaced in a managed
   *             template job document schema. You can use the description of each key as a guidance to
   *             specify the inputs during runtime when creating a job.</p>
   *          <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *          </note>
   * @public
   */
  documentParameters?: Record<string, string> | undefined;

  /**
   * <p>Indicates whether a job is concurrent. Will be true when a job is rolling out new job
   *             executions or canceling previously created executions, otherwise false.</p>
   * @public
   */
  isConcurrent?: boolean | undefined;

  /**
   * <p>The configuration that allows you to schedule a job for a future date and time in
   *             addition to specifying the end behavior for each job execution.</p>
   * @public
   */
  schedulingConfig?: SchedulingConfig | undefined;

  /**
   * <p>Displays the next seven maintenance window occurrences and their start times.</p>
   * @public
   */
  scheduledJobRollouts?: ScheduledJobRollout[] | undefined;

  /**
   * <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job
   *             successfully completes. The package version must be in either the Published or
   *             Deprecated state when the job deploys. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.The package version must be in either the
   *             Published or Deprecated state when the job deploys. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   *          <p>
   *             <b>Note:</b>The following Length Constraints relates to a
   *             single ARN. Up to 25 package version ARNs are allowed.</p>
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * <p>An S3 link to the job document.</p>
   * @public
   */
  documentSource?: string | undefined;

  /**
   * <p>Information about the job.</p>
   * @public
   */
  job?: Job | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a
   *             particular job execution on a particular device.</p>
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const JobExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type JobExecutionStatus = (typeof JobExecutionStatus)[keyof typeof JobExecutionStatus];

/**
 * <p>Details of the job execution status.</p>
 * @public
 */
export interface JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   * @public
   */
  detailsMap?: Record<string, string> | undefined;
}

/**
 * <p>The job execution object represents the execution of a job on a particular
 *             device.</p>
 * @public
 */
export interface JobExecution {
  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional
   *                 <code>force</code> parameter set to <code>true</code>.</p>
   * @public
   */
  forceCanceled?: boolean | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job
   *             execution.</p>
   * @public
   */
  statusDetails?: JobExecutionStatusDetails | undefined;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   * @public
   */
  thingArn?: string | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   * @public
   */
  queuedAt?: Date | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last
   *             updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this
   *             particular job execution on this particular device. It can be used in commands which
   *             return or update job execution information. </p>
   * @public
   */
  executionNumber?: number | undefined;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time
   *             they are updated by a device.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *             changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute
   *             and 7 days (1 to 10080 minutes). The actual job execution timeout can occur up to 60
   *             seconds later than the estimated duration. This value will not be included if the job
   *             execution has reached a terminal status.</p>
   * @public
   */
  approximateSecondsBeforeTimedOut?: number | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * <p>Information about the job execution.</p>
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateRequest {
  /**
   * <p>The unique identifier of the job template.</p>
   * @public
   */
  jobTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobTemplateResponse {
  /**
   * <p>The ARN of the job template.</p>
   * @public
   */
  jobTemplateArn?: string | undefined;

  /**
   * <p>The unique identifier of the job template.</p>
   * @public
   */
  jobTemplateId?: string | undefined;

  /**
   * <p>A description of the job template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An S3 link to the job document.</p>
   * @public
   */
  documentSource?: string | undefined;

  /**
   * <p>The job document.</p>
   * @public
   */
  document?: string | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job template was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * <p>The criteria that determine when and how a job abort takes place.</p>
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. A
   *             timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If
   *             the job execution status is not set to another terminal state before the timer expires,
   *             it will be automatically set to <code>TIMED_OUT</code>.</p>
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * <p>The configuration that determines how many retries are allowed for each failure type
   *             for a job.</p>
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;

  /**
   * <p>Allows you to configure an optional maintenance window for the rollout of a job
   *             document to all devices in the target group for a job.</p>
   * @public
   */
  maintenanceWindows?: MaintenanceWindow[] | undefined;

  /**
   * <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job
   *             successfully completes. The package version must be in either the Published or
   *             Deprecated state when the job deploys. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   *          <p>
   *             <b>Note:</b>The following Length Constraints relates to a
   *             single ARN. Up to 25 package version ARNs are allowed.</p>
   * @public
   */
  destinationPackageVersions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateRequest {
  /**
   * <p>The unique name of a managed job template, which is required.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>An optional parameter to specify version of a managed template. If not specified, the
   *             pre-defined default version is returned.</p>
   * @public
   */
  templateVersion?: string | undefined;
}

/**
 * <p>A map of key-value pairs containing the patterns that need to be replaced in a managed
 *             template job document schema. You can use the description of each key as a guidance to
 *             specify the inputs during runtime when creating a job.</p>
 *          <note>
 *             <p>
 *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
 *                 managed templates. This parameter can't be used with custom job templates or to
 *                 create jobs from them.</p>
 *          </note>
 * @public
 */
export interface DocumentParameter {
  /**
   * <p>Key of the map field containing the patterns that need to be replaced in a managed
   *             template job document schema.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>Description of the map field containing the patterns that need to be replaced in a
   *             managed template job document schema.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A regular expression of the patterns that need to be replaced in a managed template
   *             job document schema.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>An example illustrating a pattern that need to be replaced in a managed template job
   *             document schema.</p>
   * @public
   */
  example?: string | undefined;

  /**
   * <p>Specifies whether a pattern that needs to be replaced in a managed template job
   *             document schema is optional or required.</p>
   * @public
   */
  optional?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedJobTemplateResponse {
  /**
   * <p>The unique name of a managed template, such as <code>AWS-Reboot</code>.</p>
   * @public
   */
  templateName?: string | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) of the managed template.</p>
   * @public
   */
  templateArn?: string | undefined;

  /**
   * <p>The unique description of a managed template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version for a managed template.</p>
   * @public
   */
  templateVersion?: string | undefined;

  /**
   * <p>A list of environments that are supported with the managed job template.</p>
   * @public
   */
  environments?: string[] | undefined;

  /**
   * <p>A map of key-value pairs that you can use as guidance to specify the inputs for
   *             creating a job from a managed template.</p>
   *          <note>
   *             <p>
   *                <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services
   *                 managed templates. This parameter can't be used with custom job templates or to
   *                 create jobs from them.</p>
   *          </note>
   * @public
   */
  documentParameters?: DocumentParameter[] | undefined;

  /**
   * <p>The document schema for a managed job template.</p>
   * @public
   */
  document?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMitigationActionRequest {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MitigationActionType = {
  ADD_THINGS_TO_THING_GROUP: "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING: "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS: "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION: "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE: "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE: "UPDATE_DEVICE_CERTIFICATE",
} as const;

/**
 * @public
 */
export type MitigationActionType = (typeof MitigationActionType)[keyof typeof MitigationActionType];

/**
 * @public
 */
export interface DescribeMitigationActionResponse {
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>The type of mitigation action.</p>
   * @public
   */
  actionType?: MitigationActionType | undefined;

  /**
   * <p>The ARN that identifies this migration action.</p>
   * @public
   */
  actionArn?: string | undefined;

  /**
   * <p>A unique identifier for this action.</p>
   * @public
   */
  actionId?: string | undefined;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   * @public
   */
  actionParams?: MitigationActionParams | undefined;

  /**
   * <p>The date and time when the mitigation action was added to your Amazon Web Services accounts.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateRequest {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName: string | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateResponse {
  /**
   * <p>The ARN of the provisioning template.</p>
   * @public
   */
  templateArn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName?: string | undefined;

  /**
   * <p>The description of the provisioning template.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date when the provisioning template was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the provisioning template was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The default fleet template version ID.</p>
   * @public
   */
  defaultVersionId?: number | undefined;

  /**
   * <p>The JSON formatted contents of the provisioning template.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>True if the provisioning template is enabled, otherwise false.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * <p>Gets information about a pre-provisioned hook.</p>
   * @public
   */
  preProvisioningHook?: ProvisioningHook | undefined;

  /**
   * <p>The type you define in a provisioning template. You can create a template with only one type.
   *          You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>.
   *          For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
   *       </p>
   * @public
   */
  type?: TemplateType | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionRequest {
  /**
   * <p>The template name.</p>
   * @public
   */
  templateName: string | undefined;

  /**
   * <p>The provisioning template version ID.</p>
   * @public
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeProvisioningTemplateVersionResponse {
  /**
   * <p>The provisioning template version ID.</p>
   * @public
   */
  versionId?: number | undefined;

  /**
   * <p>The date when the provisioning template version was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The JSON formatted contents of the provisioning template version.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>True if the provisioning template version is the default version.</p>
   * @public
   */
  isDefaultVersion?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeRoleAliasRequest {
  /**
   * <p>The role alias to describe.</p>
   * @public
   */
  roleAlias: string | undefined;
}

/**
 * <p>Role alias description.</p>
 * @public
 */
export interface RoleAliasDescription {
  /**
   * <p>The role alias.</p>
   * @public
   */
  roleAlias?: string | undefined;

  /**
   * <p>The ARN of the role alias.</p>
   * @public
   */
  roleAliasArn?: string | undefined;

  /**
   * <p>The role ARN.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The role alias owner.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   * @public
   */
  credentialDurationSeconds?: number | undefined;

  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRoleAliasResponse {
  /**
   * <p>The role alias description.</p>
   * @public
   */
  roleAliasDescription?: RoleAliasDescription | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledAuditRequest {
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledAuditResponse {
  /**
   * <p>How often the scheduled audit takes
   *       place, either
   *       one of <code>DAILY</code>,
   *             <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   * @public
   */
  frequency?: AuditFrequency | undefined;

  /**
   * <p>The day of the month on which the scheduled audit takes place.
   *       This is
   *       will be <code>1</code>
   *             through <code>31</code> or <code>LAST</code>. If days
   *       <code>29</code>-<code>31</code>
   *       are specified, and the month does not have that many days, the audit takes place on the <code>LAST</code>
   *       day of the month.</p>
   * @public
   */
  dayOfMonth?: string | undefined;

  /**
   * <p>The day of the week on which the scheduled audit takes
   *       place,
   *       either one of
   *             <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>.</p>
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   * @public
   */
  targetCheckNames?: string[] | undefined;

  /**
   * <p>The name of the scheduled audit.</p>
   * @public
   */
  scheduledAuditName?: string | undefined;

  /**
   * <p>The ARN of the scheduled audit.</p>
   * @public
   */
  scheduledAuditArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * <p>The name of the security profile
   *       whose information you want to get.</p>
   * @public
   */
  securityProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * <p>The ARN of the security profile.</p>
   * @public
   */
  securityProfileArn?: string | undefined;

  /**
   * <p>A description of the security profile (associated with the security profile
   *         when it was created or updated).</p>
   * @public
   */
  securityProfileDescription?: string | undefined;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   * @public
   */
  behaviors?: Behavior[] | undefined;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>> | undefined;

  /**
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
   *
   * @deprecated
   * @public
   */
  additionalMetricsToRetain?: string[] | undefined;

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any
   *       metric used in the profile's behaviors, but
   *       it is
   *       also retained for any metric specified here.</p>
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[] | undefined;

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The time the security profile was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The time the security profile was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>Specifies the MQTT topic and role ARN required for metric export.</p>
   * @public
   */
  metricsExportConfig?: MetricsExportConfig | undefined;
}

/**
 * @public
 */
export interface DescribeStreamRequest {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId: string | undefined;
}

/**
 * <p>Information about a stream.</p>
 * @public
 */
export interface StreamInfo {
  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId?: string | undefined;

  /**
   * <p>The stream ARN.</p>
   * @public
   */
  streamArn?: string | undefined;

  /**
   * <p>The stream version.</p>
   * @public
   */
  streamVersion?: number | undefined;

  /**
   * <p>The description of the stream.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The files to stream.</p>
   * @public
   */
  files?: StreamFile[] | undefined;

  /**
   * <p>The date when the stream was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date when the stream was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>An IAM role IoT assumes to access your S3 files.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStreamResponse {
  /**
   * <p>Information about the stream.</p>
   * @public
   */
  streamInfo?: StreamInfo | undefined;
}

/**
 * <p>The input for the DescribeThing operation.</p>
 * @public
 */
export interface DescribeThingRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;
}

/**
 * <p>The output from the DescribeThing operation.</p>
 * @public
 */
export interface DescribeThingResponse {
  /**
   * <p>The default MQTT client ID. For a typical device, the thing name is also used as the default MQTT client ID.
   * 			Although we don’t require a mapping between a thing's registry name and its use of MQTT client IDs, certificates, or
   * 			shadow state, we recommend that you choose a thing name and use it as the MQTT client ID for the registry and the Device Shadow service.</p>
   *          <p>This lets you better organize your IoT fleet without removing the flexibility of the underlying device certificate model or shadows.</p>
   * @public
   */
  defaultClientId?: string | undefined;

  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>The ID of the thing to describe.</p>
   * @public
   */
  thingId?: string | undefined;

  /**
   * <p>The ARN of the thing to describe.</p>
   * @public
   */
  thingArn?: string | undefined;

  /**
   * <p>The thing type name.</p>
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * <p>The thing attributes.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>The current version of the thing record in the registry.</p>
   *          <note>
   *             <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   *          </note>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   * @public
   */
  billingGroupName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeThingGroupRequest {
  /**
   * <p>The name of the thing group.</p>
   * @public
   */
  thingGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DynamicGroupStatus = {
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  REBUILDING: "REBUILDING",
} as const;

/**
 * @public
 */
export type DynamicGroupStatus = (typeof DynamicGroupStatus)[keyof typeof DynamicGroupStatus];

/**
 * <p>The name and ARN of a group.</p>
 * @public
 */
export interface GroupNameAndArn {
  /**
   * <p>The group name.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The group ARN.</p>
   * @public
   */
  groupArn?: string | undefined;
}

/**
 * <p>Thing group metadata.</p>
 * @public
 */
export interface ThingGroupMetadata {
  /**
   * <p>The parent thing group name.</p>
   * @public
   */
  parentGroupName?: string | undefined;

  /**
   * <p>The root parent thing group.</p>
   * @public
   */
  rootToParentThingGroups?: GroupNameAndArn[] | undefined;

  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeThingGroupResponse {
  /**
   * <p>The name of the thing group.</p>
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * <p>The thing group ID.</p>
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * <p>The thing group ARN.</p>
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * <p>The version of the thing group.</p>
   * @public
   */
  version?: number | undefined;

  /**
   * <p>The thing group properties.</p>
   * @public
   */
  thingGroupProperties?: ThingGroupProperties | undefined;

  /**
   * <p>Thing group metadata.</p>
   * @public
   */
  thingGroupMetadata?: ThingGroupMetadata | undefined;

  /**
   * <p>The dynamic thing group index name.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The dynamic thing group search query string.</p>
   * @public
   */
  queryString?: string | undefined;

  /**
   * <p>The dynamic thing group query version.</p>
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * <p>The dynamic thing group status.</p>
   * @public
   */
  status?: DynamicGroupStatus | undefined;
}

/**
 * @public
 */
export interface DescribeThingRegistrationTaskRequest {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Completed: "Completed",
  Failed: "Failed",
  InProgress: "InProgress",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface DescribeThingRegistrationTaskResponse {
  /**
   * <p>The task ID.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The task creation date.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the task was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The task's template.</p>
   * @public
   */
  templateBody?: string | undefined;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   * @public
   */
  inputFileBucket?: string | undefined;

  /**
   * <p>The input file key.</p>
   * @public
   */
  inputFileKey?: string | undefined;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The message.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The number of things successfully provisioned.</p>
   * @public
   */
  successCount?: number | undefined;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   * @public
   */
  failureCount?: number | undefined;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   * @public
   */
  percentageProgress?: number | undefined;
}

/**
 * <p>The input for the DescribeThingType operation.</p>
 * @public
 */
export interface DescribeThingTypeRequest {
  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName: string | undefined;
}

/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 * @public
 */
export interface ThingTypeMetadata {
  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   * @public
   */
  deprecationDate?: Date | undefined;

  /**
   * <p>The date and time when the thing type was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * <p>The output for the DescribeThingType operation.</p>
 * @public
 */
export interface DescribeThingTypeResponse {
  /**
   * <p>The name of the thing type.</p>
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * <p>The thing type ID.</p>
   * @public
   */
  thingTypeId?: string | undefined;

  /**
   * <p>The thing type ARN.</p>
   * @public
   */
  thingTypeArn?: string | undefined;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, a list of searchable thing attribute names, and MQTT5 configuration.</p>
   * @public
   */
  thingTypeProperties?: ThingTypeProperties | undefined;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   * @public
   */
  thingTypeMetadata?: ThingTypeMetadata | undefined;
}

/**
 * @public
 */
export interface DetachPolicyRequest {
  /**
   * <p>The policy to detach.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The target from which the policy will be detached.</p>
   * @public
   */
  target: string | undefined;
}

/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 * @public
 */
export interface DetachPrincipalPolicyRequest {
  /**
   * <p>The name of the policy to detach.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   * @public
   */
  principal: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileRequest {
  /**
   * <p>The security profile that is detached.</p>
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * <p>The ARN of the thing group from which the security profile is detached.</p>
   * @public
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DetachSecurityProfileResponse {}

/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 * @public
 */
export interface DetachThingPrincipalRequest {
  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   * @public
   */
  principal: string | undefined;
}

/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 * @public
 */
export interface DetachThingPrincipalResponse {}

/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 * @public
 */
export interface DisableTopicRuleRequest {
  /**
   * <p>The name of the rule to disable.</p>
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSbomFromPackageVersionRequest {
  /**
   * <p>The name of the new software package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The name of the new package version.</p>
   * @public
   */
  versionName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateSbomFromPackageVersionResponse {}

/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 * @public
 */
export interface EnableTopicRuleRequest {
  /**
   * <p>The name of the topic rule to enable.</p>
   * @public
   */
  ruleName: string | undefined;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesRequest {
  /**
   * <p>
   *       The name of the security profile.
   *     </p>
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 10.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PENDING_BUILD: "PENDING_BUILD",
} as const;

/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * <p>
 *             The summary of an ML Detect behavior model.
 *         </p>
 * @public
 */
export interface BehaviorModelTrainingSummary {
  /**
   * <p>
   *             The name of the security profile.
   *         </p>
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * <p>
   *             The name of the behavior.
   *         </p>
   * @public
   */
  behaviorName?: string | undefined;

  /**
   * <p>
   *             The date a training model started collecting data.
   *         </p>
   * @public
   */
  trainingDataCollectionStartDate?: Date | undefined;

  /**
   * <p>
   *             The status of the behavior model.
   *         </p>
   * @public
   */
  modelStatus?: ModelStatus | undefined;

  /**
   * <p>
   *             The percentage of datapoints collected.
   *         </p>
   * @public
   */
  datapointsCollectionPercentage?: number | undefined;

  /**
   * <p>
   *             The date the model was last refreshed.
   *         </p>
   * @public
   */
  lastModelRefreshDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetBehaviorModelTrainingSummariesResponse {
  /**
   * <p>
   *       A list of all ML Detect behaviors and their model status for a given Security Profile.
   *     </p>
   * @public
   */
  summaries?: BehaviorModelTrainingSummary[] | undefined;

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
 * @public
 */
export interface TermsAggregation {
  /**
   * <p>The number of buckets to return in the response. Default to 10.</p>
   * @public
   */
  maxBuckets?: number | undefined;
}

/**
 * <p>The type of bucketed aggregation performed.</p>
 * @public
 */
export interface BucketsAggregationType {
  /**
   * <p>Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value.</p>
   * @public
   */
  termsAggregation?: TermsAggregation | undefined;
}

/**
 * @public
 */
export interface GetBucketsAggregationRequest {
  /**
   * <p>The name of the index to search.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The search query string.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field.</p>
   * @public
   */
  aggregationField: string | undefined;

  /**
   * <p>The version of the query.</p>
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * <p>The basic control of the response shape and the bucket aggregation type to perform. </p>
   * @public
   */
  bucketsAggregationType: BucketsAggregationType | undefined;
}

/**
 * <p>A count of documents that meets a specific aggregation criteria.</p>
 * @public
 */
export interface Bucket {
  /**
   * <p>The value counted for the particular bucket.</p>
   * @public
   */
  keyValue?: string | undefined;

  /**
   * <p>The number of documents that have the value counted for the particular bucket.</p>
   * @public
   */
  count?: number | undefined;
}

/**
 * @public
 */
export interface GetBucketsAggregationResponse {
  /**
   * <p>The total number of things that fit the query string criteria.</p>
   * @public
   */
  totalCount?: number | undefined;

  /**
   * <p>The main part of the response with a list of buckets. Each bucket contains a <code>keyValue</code> and a <code>count</code>.</p>
   *          <p>
   *             <code>keyValue</code>: The aggregation field value counted for the particular bucket.</p>
   *          <p>
   *             <code>count</code>: The number of documents that have that value.</p>
   * @public
   */
  buckets?: Bucket[] | undefined;
}

/**
 * @public
 */
export interface GetCardinalityRequest {
  /**
   * <p>The name of the index to search.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The search query string.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * <p>The query version.</p>
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetCardinalityResponse {
  /**
   * <p>The approximate count of unique values that match the query.</p>
   * @public
   */
  cardinality?: number | undefined;
}

/**
 * @public
 */
export interface GetCommandRequest {
  /**
   * <p>The unique identifier of the command for which you want to retrieve
   *             information.</p>
   * @public
   */
  commandId: string | undefined;
}

/**
 * @public
 */
export interface GetCommandResponse {
  /**
   * <p>The unique identifier of the command.</p>
   * @public
   */
  commandId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the command. For example,
   *                 <code>arn:aws:iot:<region>:<accountid>:command/<commandId></code>
   *          </p>
   * @public
   */
  commandArn?: string | undefined;

  /**
   * <p>The namespace of the command.</p>
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * <p>The user-friendly name in the console for the command.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A short text description of the command.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of parameters for the command created.</p>
   * @public
   */
  mandatoryParameters?: CommandParameter[] | undefined;

  /**
   * <p>The payload object that you provided for the command.</p>
   * @public
   */
  payload?: CommandPayload | undefined;

  /**
   * <p>The IAM role that you provided when creating the command with <code>AWS-IoT-FleetWise</code>
   *         as the namespace.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The timestamp, when the command was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp, when the command was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>Indicates whether the command has been deprecated.</p>
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * <p>Indicates whether the command is being deleted.</p>
   * @public
   */
  pendingDeletion?: boolean | undefined;
}

/**
 * @public
 */
export interface GetCommandExecutionRequest {
  /**
   * <p>The unique identifier for the command execution. This information is returned as a
   *             response of the <code>StartCommandExecution</code> API request.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the device on which the command execution is being
   *             performed.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>Can be used to specify whether to include the result of the command execution
   *             in the <code>GetCommandExecution</code> API response. Your device can use this
   *             field to provide additional information about the command execution. You only
   *             need to specify this field when using the <code>AWS-IoT</code> namespace.</p>
   * @public
   */
  includeResult?: boolean | undefined;
}

/**
 * <p>The result value of the command execution. The device can use the result field to
 *             share additional details about the execution such as a return value of a remote function
 *             call.</p>
 *          <note>
 *             <p>This field is not applicable if you use the <code>AWS-IoT-FleetWise</code>
 *                 namespace.</p>
 *          </note>
 * @public
 */
export interface CommandExecutionResult {
  /**
   * <p>An attribute of type String. For example:</p>
   *          <p>
   *             <code>"S": "Hello"</code>
   *          </p>
   * @public
   */
  S?: string | undefined;

  /**
   * <p>An attribute of type Boolean. For example:</p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
   * @public
   */
  B?: boolean | undefined;

  /**
   * <p>An attribute of type Binary.</p>
   * @public
   */
  BIN?: Uint8Array | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandExecutionStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type CommandExecutionStatus = (typeof CommandExecutionStatus)[keyof typeof CommandExecutionStatus];

/**
 * <p>Provide additional context about the status of a command execution using a reason code
 *             and description.</p>
 * @public
 */
export interface StatusReason {
  /**
   * <p>A code that provides additional context for the command execution status.</p>
   * @public
   */
  reasonCode: string | undefined;

  /**
   * <p>A literal string for devices to optionally provide additional information about the
   *             reason code for a command execution status.</p>
   * @public
   */
  reasonDescription?: string | undefined;
}

/**
 * @public
 */
export interface GetCommandExecutionResponse {
  /**
   * <p>The unique identifier of the command execution.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the command. For example,
   *             <code></code>arn:aws:iot:<region>:<accountid>:command/<commandId></p>
   * @public
   */
  commandArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the device on which the command execution is being
   *             performed.</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The status of the command execution. After your devices receive the command and start
   *             performing the operations specified in the command, it can use the
   *                 <code>UpdateCommandExecution</code> MQTT API to update the status
   *             information.</p>
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * <p>Your devices can use this parameter to provide additional context about the status of
   *             a command execution using a reason code and description.</p>
   * @public
   */
  statusReason?: StatusReason | undefined;

  /**
   * <p>The result value for the current state of the command execution. The status provides
   *             information about the progress of the command execution. The device can use the result
   *             field to share additional details about the execution such as a return value of a remote
   *             function call.</p>
   *          <note>
   *             <p>If you use the <code>AWS-IoT-FleetWise</code> namespace, then this field is not
   *                 applicable in the API response.</p>
   *          </note>
   * @public
   */
  result?: Record<string, CommandExecutionResult> | undefined;

  /**
   * <p>The list of parameters that the <code>StartCommandExecution</code> API used when
   *             performing the command on the device.</p>
   * @public
   */
  parameters?: Record<string, CommandParameterValue> | undefined;

  /**
   * <p>Specifies the amount of time in seconds that the device can take to finish a command
   *             execution. A timer starts when the command execution is created. If the command
   *             execution status is not set to another terminal state before the timer expires, it will
   *             automatically update to <code>TIMED_OUT</code>.</p>
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * <p>The timestamp, when the command execution was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp, when the command execution was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp, when the command execution was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp, when the command execution was completed.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The time to live (TTL) parameter that indicates the duration for which executions will
   *         be retained in your account. The default value is six months.</p>
   * @public
   */
  timeToLive?: Date | undefined;
}

/**
 * @public
 */
export interface GetEffectivePoliciesRequest {
  /**
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   * @public
   */
  principal?: string | undefined;

  /**
   * <p>The Cognito identity pool ID.</p>
   * @public
   */
  cognitoIdentityPoolId?: string | undefined;

  /**
   * <p>The thing name.</p>
   * @public
   */
  thingName?: string | undefined;
}

/**
 * <p>The policy that has the effect on the authorization results.</p>
 * @public
 */
export interface EffectivePolicy {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The policy ARN.</p>
   * @public
   */
  policyArn?: string | undefined;

  /**
   * <p>The IAM policy document.</p>
   * @public
   */
  policyDocument?: string | undefined;
}

/**
 * @public
 */
export interface GetEffectivePoliciesResponse {
  /**
   * <p>The effective policies.</p>
   * @public
   */
  effectivePolicies?: EffectivePolicy[] | undefined;
}

/**
 * @public
 */
export interface GetIndexingConfigurationRequest {}

/**
 * @public
 * @enum
 */
export const FieldType = {
  BOOLEAN: "Boolean",
  NUMBER: "Number",
  STRING: "String",
} as const;

/**
 * @public
 */
export type FieldType = (typeof FieldType)[keyof typeof FieldType];

/**
 * <p>Describes the name and data type at a field.</p>
 * @public
 */
export interface Field {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The data type of the field.</p>
   * @public
   */
  type?: FieldType | undefined;
}

/**
 * @public
 * @enum
 */
export const ThingGroupIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type ThingGroupIndexingMode = (typeof ThingGroupIndexingMode)[keyof typeof ThingGroupIndexingMode];

/**
 * <p>Thing group indexing configuration.</p>
 * @public
 */
export interface ThingGroupIndexingConfiguration {
  /**
   * <p>Thing group indexing mode.</p>
   * @public
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | undefined;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service. This is an optional field. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html#managed-field">Managed fields</a> in the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
   *          <note>
   *             <p>You can't modify managed fields by updating fleet indexing configuration.</p>
   *          </note>
   * @public
   */
  managedFields?: Field[] | undefined;

  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   * @public
   */
  customFields?: Field[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceDefenderIndexingMode = {
  OFF: "OFF",
  VIOLATIONS: "VIOLATIONS",
} as const;

/**
 * @public
 */
export type DeviceDefenderIndexingMode = (typeof DeviceDefenderIndexingMode)[keyof typeof DeviceDefenderIndexingMode];

/**
 * @public
 * @enum
 */
export const TargetFieldOrder = {
  LatLon: "LatLon",
  LonLat: "LonLat",
} as const;

/**
 * @public
 */
export type TargetFieldOrder = (typeof TargetFieldOrder)[keyof typeof TargetFieldOrder];

/**
 * <p>A geolocation target that you select to index. Each geolocation target contains a
 *         <code>name</code> and <code>order</code> key-value pair that specifies the geolocation
 *       target fields.</p>
 * @public
 */
export interface GeoLocationTarget {
  /**
   * <p>The <code>name</code> of the geolocation target field. If the target field is part of a
   *       named shadow, you must select the named shadow using the <code>namedShadow</code> filter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The <code>order</code> of the geolocation target field. This field is optional. The
   *       default value is <code>LatLon</code>.</p>
   * @public
   */
  order?: TargetFieldOrder | undefined;
}

/**
 * <p>Provides additional selections for named shadows and geolocation data. </p>
 *          <p>To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to
 *       be ON and specify your shadow names in <code>namedShadowNames</code> filter.</p>
 *          <p>To add geolocation data to your fleet indexing configuration: </p>
 *          <ul>
 *             <li>
 *                <p>If you store geolocation data in a class/unnamed shadow, set
 *             <code>thingIndexingMode</code> to be <code>REGISTRY_AND_SHADOW</code> and specify your
 *           geolocation data in <code>geoLocations</code> filter. </p>
 *             </li>
 *             <li>
 *                <p>If you store geolocation data in a named shadow, set
 *             <code>namedShadowIndexingMode</code> to be <code>ON</code>, add the shadow name in
 *             <code>namedShadowNames</code> filter, and specify your geolocation data in
 *             <code>geoLocations</code> filter. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html">Managing fleet
 *             indexing</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface IndexingFilter {
  /**
   * <p>The shadow names that you select to index. The default maximum number of shadow names for indexing is 10. To increase
   *       the limit, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot_device_management.html#fleet-indexing-limits">Amazon Web Services IoT Device Management
   *         Quotas</a> in the <i>Amazon Web Services General Reference</i>.
   *     </p>
   * @public
   */
  namedShadowNames?: string[] | undefined;

  /**
   * <p>The list of geolocation targets that you select to index. The default maximum number of
   *       geolocation targets for indexing is <code>1</code>. To increase the limit, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot_device_management.html#fleet-indexing-limits">Amazon Web Services IoT Device
   *         Management Quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  geoLocations?: GeoLocationTarget[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NamedShadowIndexingMode = {
  OFF: "OFF",
  ON: "ON",
} as const;

/**
 * @public
 */
export type NamedShadowIndexingMode = (typeof NamedShadowIndexingMode)[keyof typeof NamedShadowIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingConnectivityIndexingMode = {
  OFF: "OFF",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type ThingConnectivityIndexingMode =
  (typeof ThingConnectivityIndexingMode)[keyof typeof ThingConnectivityIndexingMode];

/**
 * @public
 * @enum
 */
export const ThingIndexingMode = {
  OFF: "OFF",
  REGISTRY: "REGISTRY",
  REGISTRY_AND_SHADOW: "REGISTRY_AND_SHADOW",
} as const;

/**
 * @public
 */
export type ThingIndexingMode = (typeof ThingIndexingMode)[keyof typeof ThingIndexingMode];

/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 * @public
 */
export interface ThingIndexingConfiguration {
  /**
   * <p>Thing indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>REGISTRY – Your thing index contains registry data only.</p>
   *             </li>
   *             <li>
   *                <p>REGISTRY_AND_SHADOW - Your thing index contains registry and shadow data.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing indexing is disabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  thingIndexingMode: ThingIndexingMode | undefined;

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, <i>thingIndexMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   * @public
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | undefined;

  /**
   * <p>Device Defender indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>VIOLATIONS – Your thing index contains Device Defender violations. To enable Device
   *           Defender indexing, <i>deviceDefenderIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Device Defender indexing is disabled.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Device Defender violations, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html">Device Defender Detect.</a>
   *          </p>
   * @public
   */
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode | undefined;

  /**
   * <p>Named shadow indexing mode. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>ON – Your thing index contains named shadow. To enable thing
   *           named shadow indexing, <i>namedShadowIndexingMode</i> must not be set to
   *           OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Named shadow indexing is disabled.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   * @public
   */
  namedShadowIndexingMode?: NamedShadowIndexingMode | undefined;

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service. This is an optional field. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html#managed-field">Managed fields</a> in the <i>Amazon Web Services IoT Core Developer Guide</i>.</p>
   *          <note>
   *             <p>You can't modify managed fields by updating fleet indexing configuration.</p>
   *          </note>
   * @public
   */
  managedFields?: Field[] | undefined;

  /**
   * <p>Contains custom field names and their data type.</p>
   * @public
   */
  customFields?: Field[] | undefined;

  /**
   * <p>Provides additional selections for named shadows and geolocation data. </p>
   *          <p>To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to
   *       be ON and specify your shadow names in <code>namedShadowNames</code> filter.</p>
   *          <p>To add geolocation data to your fleet indexing configuration: </p>
   *          <ul>
   *             <li>
   *                <p>If you store geolocation data in a class/unnamed shadow, set
   *           <code>thingIndexingMode</code> to be <code>REGISTRY_AND_SHADOW</code> and specify your
   *           geolocation data in <code>geoLocations</code> filter. </p>
   *             </li>
   *             <li>
   *                <p>If you store geolocation data in a named shadow, set <code>namedShadowIndexingMode</code>
   *           to be <code>ON</code>, add the shadow name in <code>namedShadowNames</code> filter, and
   *           specify your geolocation data in <code>geoLocations</code> filter. For more information, see
   *           <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-fleet-index.html">Managing fleet indexing</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  filter?: IndexingFilter | undefined;
}

/**
 * @public
 */
export interface GetIndexingConfigurationResponse {
  /**
   * <p>Thing indexing configuration.</p>
   * @public
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration | undefined;

  /**
   * <p>The index configuration.</p>
   * @public
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetJobDocumentRequest {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Provides a view of the job document before and after the substitution parameters have been resolved with their exact values.</p>
   * @public
   */
  beforeSubstitution?: boolean | undefined;
}

/**
 * @public
 */
export interface GetJobDocumentResponse {
  /**
   * <p>The job document content.</p>
   * @public
   */
  document?: string | undefined;
}

/**
 * <p>The input for the GetLoggingOptions operation.</p>
 * @public
 */
export interface GetLoggingOptionsRequest {}

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 * @public
 */
export interface GetLoggingOptionsResponse {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The logging level.</p>
   * @public
   */
  logLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetOTAUpdateRequest {
  /**
   * <p>The OTA update ID.</p>
   * @public
   */
  otaUpdateId: string | undefined;
}

/**
 * <p>Error information.</p>
 * @public
 */
export interface ErrorInfo {
  /**
   * <p>The error code.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about an OTA update.</p>
 * @public
 */
export interface OTAUpdateInfo {
  /**
   * <p>The OTA update ID.</p>
   * @public
   */
  otaUpdateId?: string | undefined;

  /**
   * <p>The OTA update ARN.</p>
   * @public
   */
  otaUpdateArn?: string | undefined;

  /**
   * <p>The date when the OTA update was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the OTA update was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>A description of the OTA update.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The targets of the OTA update.</p>
   * @public
   */
  targets?: string[] | undefined;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   * @public
   */
  protocols?: Protocol[] | undefined;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   * @public
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig | undefined;

  /**
   * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
   *              contains HTTP.</p>
   * @public
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig | undefined;

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   *             things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   *             be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   *             the thing is added to a target group, even after the OTA update was completed by all things originally in
   *             the group. </p>
   * @public
   */
  targetSelection?: TargetSelection | undefined;

  /**
   * <p>A list of files associated with the OTA update.</p>
   * @public
   */
  otaUpdateFiles?: OTAUpdateFile[] | undefined;

  /**
   * <p>The status of the OTA update.</p>
   * @public
   */
  otaUpdateStatus?: OTAUpdateStatus | undefined;

  /**
   * <p>The IoT job ID associated with the OTA update.</p>
   * @public
   */
  awsIotJobId?: string | undefined;

  /**
   * <p>The IoT job ARN associated with the OTA update.</p>
   * @public
   */
  awsIotJobArn?: string | undefined;

  /**
   * <p>Error information associated with the OTA update.</p>
   * @public
   */
  errorInfo?: ErrorInfo | undefined;

  /**
   * <p>A collection of name/value pairs</p>
   * @public
   */
  additionalParameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOTAUpdateResponse {
  /**
   * <p>The OTA update info.</p>
   * @public
   */
  otaUpdateInfo?: OTAUpdateInfo | undefined;
}

/**
 * @public
 */
export interface GetPackageRequest {
  /**
   * <p>The name of the target software package.</p>
   * @public
   */
  packageName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageResponse {
  /**
   * <p>The name of the software package.</p>
   * @public
   */
  packageName?: string | undefined;

  /**
   * <p>The ARN for the package.</p>
   * @public
   */
  packageArn?: string | undefined;

  /**
   * <p>The package description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the default package version.</p>
   * @public
   */
  defaultVersionName?: string | undefined;

  /**
   * <p>The date the package was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the package was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetPackageConfigurationRequest {}

/**
 * <p>Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.</p>
 *          <p>
 *             <b>Note:</b> For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow.
 *       </p>
 * @public
 */
export interface VersionUpdateByJobsConfig {
  /**
   * <p>Indicates whether the Job is enabled or not.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that grants permission to the IoT
   *       jobs service to update the reserved named shadow when the job successfully completes.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetPackageConfigurationResponse {
  /**
   * <p>The version that is associated to a specific job.</p>
   * @public
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionRequest {
  /**
   * <p>The name of the associated package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The name of the target package version.</p>
   * @public
   */
  versionName: string | undefined;
}

/**
 * @public
 */
export interface GetPackageVersionResponse {
  /**
   * <p>The ARN for the package version.</p>
   * @public
   */
  packageVersionArn?: string | undefined;

  /**
   * <p>The name of the software package.</p>
   * @public
   */
  packageName?: string | undefined;

  /**
   * <p>The name of the package version.</p>
   * @public
   */
  versionName?: string | undefined;

  /**
   * <p>The package version description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Metadata that were added to the package version that can be used to define a package version’s configuration.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * <p>The various components that make up a software package version.</p>
   * @public
   */
  artifact?: PackageVersionArtifact | undefined;

  /**
   * <p>The status associated to the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   * @public
   */
  status?: PackageVersionStatus | undefined;

  /**
   * <p>Error reason for a package version failure during creation or update.</p>
   * @public
   */
  errorReason?: string | undefined;

  /**
   * <p>The date when the package version was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date when the package version was last updated.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The software bill of materials for a software package version.</p>
   * @public
   */
  sbom?: Sbom | undefined;

  /**
   * <p>The status of the validation for a new software bill of materials added to a software
   *          package version.</p>
   * @public
   */
  sbomValidationStatus?: SbomValidationStatus | undefined;

  /**
   * <p>The inline job document associated with a software package version used for a quick job
   *          deployment.</p>
   * @public
   */
  recipe?: string | undefined;
}

/**
 * @public
 */
export interface GetPercentilesRequest {
  /**
   * <p>The name of the index to search.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The search query string.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The field to aggregate.</p>
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * <p>The query version.</p>
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * <p>The percentile groups returned.</p>
   * @public
   */
  percents?: number[] | undefined;
}

/**
 * <p>Describes the percentile and percentile value.</p>
 * @public
 */
export interface PercentPair {
  /**
   * <p>The percentile.</p>
   * @public
   */
  percent?: number | undefined;

  /**
   * <p>The value of the percentile.</p>
   * @public
   */
  value?: number | undefined;
}

/**
 * @public
 */
export interface GetPercentilesResponse {
  /**
   * <p>The percentile values of the aggregated fields.</p>
   * @public
   */
  percentiles?: PercentPair[] | undefined;
}

/**
 * <p>The input for the GetPolicy operation.</p>
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;
}

/**
 * <p>The output from the GetPolicy operation.</p>
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The policy ARN.</p>
   * @public
   */
  policyArn?: string | undefined;

  /**
   * <p>The JSON document that describes the policy.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The default policy version ID.</p>
   * @public
   */
  defaultVersionId?: string | undefined;

  /**
   * <p>The date the policy was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The generation ID of the policy.</p>
   * @public
   */
  generationId?: string | undefined;
}

/**
 * <p>The input for the GetPolicyVersion operation.</p>
 * @public
 */
export interface GetPolicyVersionRequest {
  /**
   * <p>The name of the policy.</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The policy version ID.</p>
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * <p>The output from the GetPolicyVersion operation.</p>
 * @public
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>The policy ARN.</p>
   * @public
   */
  policyArn?: string | undefined;

  /**
   * <p>The policy name.</p>
   * @public
   */
  policyName?: string | undefined;

  /**
   * <p>The JSON document that describes the policy.</p>
   * @public
   */
  policyDocument?: string | undefined;

  /**
   * <p>The policy version ID.</p>
   * @public
   */
  policyVersionId?: string | undefined;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   * @public
   */
  isDefaultVersion?: boolean | undefined;

  /**
   * <p>The date the policy was created.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the policy was last modified.</p>
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * <p>The generation ID of the policy version.</p>
   * @public
   */
  generationId?: string | undefined;
}

/**
 * <p>The input to the GetRegistrationCode operation.</p>
 * @public
 */
export interface GetRegistrationCodeRequest {}

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 * @public
 */
export interface GetRegistrationCodeResponse {
  /**
   * <p>The CA certificate registration code.</p>
   * @public
   */
  registrationCode?: string | undefined;
}

/**
 * @public
 */
export interface GetStatisticsRequest {
  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   * @public
   */
  indexName?: string | undefined;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your Amazon Web Services account.</p>
   * @public
   */
  queryString: string | undefined;

  /**
   * <p>The aggregation field name.</p>
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * <p>The version of the query used to search.</p>
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * <p>A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API,
 *       consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html">
 *         Fleet indexing troubleshooting guide</a>.</p>
 * @public
 */
export interface Statistics {
  /**
   * <p>The count of things that match the query string criteria and contain a valid aggregation field value.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The average of the aggregated field values.</p>
   * @public
   */
  average?: number | undefined;

  /**
   * <p>The sum of the aggregated field values.</p>
   * @public
   */
  sum?: number | undefined;

  /**
   * <p>The minimum aggregated field value.</p>
   * @public
   */
  minimum?: number | undefined;

  /**
   * <p>The maximum aggregated field value.</p>
   * @public
   */
  maximum?: number | undefined;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   * @public
   */
  sumOfSquares?: number | undefined;

  /**
   * <p>The variance of the aggregated field values.</p>
   * @public
   */
  variance?: number | undefined;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   * @public
   */
  stdDeviation?: number | undefined;
}

/**
 * @public
 */
export interface GetStatisticsResponse {
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   * @public
   */
  statistics?: Statistics | undefined;
}

/**
 * @public
 */
export interface GetThingConnectivityDataRequest {
  /**
   * <p>The name of your IoT thing.</p>
   * @public
   */
  thingName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DisconnectReasonValue = {
  AUTH_ERROR: "AUTH_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  CLIENT_INITIATED_DISCONNECT: "CLIENT_INITIATED_DISCONNECT",
  CONNECTION_LOST: "CONNECTION_LOST",
  CUSTOMAUTH_TTL_EXPIRATION: "CUSTOMAUTH_TTL_EXPIRATION",
  DUPLICATE_CLIENTID: "DUPLICATE_CLIENTID",
  FORBIDDEN_ACCESS: "FORBIDDEN_ACCESS",
  MQTT_KEEP_ALIVE_TIMEOUT: "MQTT_KEEP_ALIVE_TIMEOUT",
  NONE: "NONE",
  SERVER_ERROR: "SERVER_ERROR",
  SERVER_INITIATED_DISCONNECT: "SERVER_INITIATED_DISCONNECT",
  THROTTLED: "THROTTLED",
  UNKNOWN: "UNKNOWN",
  WEBSOCKET_TTL_EXPIRATION: "WEBSOCKET_TTL_EXPIRATION",
} as const;

/**
 * @public
 */
export type DisconnectReasonValue = (typeof DisconnectReasonValue)[keyof typeof DisconnectReasonValue];

/**
 * @public
 */
export interface GetThingConnectivityDataResponse {
  /**
   * <p>The name of your IoT thing.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>A Boolean that indicates the connectivity status.</p>
   * @public
   */
  connected?: boolean | undefined;

  /**
   * <p>The timestamp of when the event occurred.</p>
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>The reason why the client is disconnecting.</p>
   * @public
   */
  disconnectReason?: DisconnectReasonValue | undefined;
}

/**
 * <p>The input for the GetTopicRule operation.</p>
 * @public
 */
export interface GetTopicRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName: string | undefined;
}

/**
 * <p>Describes a rule.</p>
 * @public
 */
export interface TopicRule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  ruleName?: string | undefined;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   * @public
   */
  sql?: string | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date and time the rule was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The actions associated with the rule.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   * @public
   */
  ruleDisabled?: boolean | undefined;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   * @public
   */
  awsIotSqlVersion?: string | undefined;

  /**
   * <p>The action to perform when an error occurs.</p>
   * @public
   */
  errorAction?: Action | undefined;
}

/**
 * <p>The output from the GetTopicRule operation.</p>
 * @public
 */
export interface GetTopicRuleResponse {
  /**
   * <p>The rule ARN.</p>
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * <p>The rule.</p>
   * @public
   */
  rule?: TopicRule | undefined;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationRequest {
  /**
   * <p>The ARN of the topic rule destination.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetTopicRuleDestinationResponse {
  /**
   * <p>The topic rule destination.</p>
   * @public
   */
  topicRuleDestination?: TopicRuleDestination | undefined;
}

/**
 * @public
 */
export interface GetV2LoggingOptionsRequest {}

/**
 * @public
 */
export interface GetV2LoggingOptionsResponse {
  /**
   * <p>The IAM role ARN IoT uses to write to your CloudWatch logs.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The default log level.</p>
   * @public
   */
  defaultLogLevel?: LogLevel | undefined;

  /**
   * <p>Disables all logs.</p>
   * @public
   */
  disableAllLogs?: boolean | undefined;
}

/**
 * <p>The resource is not configured.</p>
 * @public
 */
export class NotConfiguredException extends __BaseException {
  readonly name: "NotConfiguredException" = "NotConfiguredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotConfiguredException, __BaseException>) {
    super({
      name: "NotConfiguredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotConfiguredException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const BehaviorCriteriaType = {
  MACHINE_LEARNING: "MACHINE_LEARNING",
  STATIC: "STATIC",
  STATISTICAL: "STATISTICAL",
} as const;

/**
 * @public
 */
export type BehaviorCriteriaType = (typeof BehaviorCriteriaType)[keyof typeof BehaviorCriteriaType];

/**
 * @public
 */
export interface ListActiveViolationsRequest {
  /**
   * <p>The name of the thing whose active violations are listed.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * <p>
   *       The criteria for a behavior.
   *     </p>
   * @public
   */
  behaviorCriteriaType?: BehaviorCriteriaType | undefined;

  /**
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   * @public
   */
  listSuppressedAlerts?: boolean | undefined;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   * @public
   */
  verificationState?: VerificationState | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListActiveViolationsResponse {
  /**
   * <p>The list of active violations.</p>
   * @public
   */
  activeViolations?: ActiveViolation[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAttachedPoliciesRequest {
  /**
   * <p>The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   * @public
   */
  target: string | undefined;

  /**
   * <p>When true, recursively list attached policies.</p>
   * @public
   */
  recursive?: boolean | undefined;

  /**
   * <p>The token to retrieve the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListAttachedPoliciesResponse {
  /**
   * <p>The policies.</p>
   * @public
   */
  policies?: Policy[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsRequest {
  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   * @public
   */
  checkName?: string | undefined;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>
   *       Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings.
   *     </p>
   * @public
   */
  listSuppressedFindings?: boolean | undefined;
}

/**
 * @public
 */
export interface ListAuditFindingsResponse {
  /**
   * <p>The findings (results) of the audit.</p>
   * @public
   */
  findings?: AuditFinding[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsRequest {
  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Specify this filter to limit results to those with a specific status.</p>
   * @public
   */
  actionStatus?: AuditMitigationActionsExecutionStatus | undefined;

  /**
   * <p>Specify this filter to limit results to those that were applied to a specific audit finding.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsExecutionsResponse {
  /**
   * <p>A set of task execution results based on the input parameters. Details include the mitigation action applied, start time, and task status.</p>
   * @public
   */
  actionsExecutions?: AuditMitigationActionExecutionMetadata[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksRequest {
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   * @public
   */
  auditTaskId?: string | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   * @public
   */
  findingId?: string | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   * @public
   */
  taskStatus?: AuditMitigationActionsTaskStatus | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that began on or after a specific date and time.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * @public
 */
export interface ListAuditMitigationActionsTasksResponse {
  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   * @public
   */
  tasks?: AuditMitigationActionsTaskMetadata[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditSuppressionsRequest {
  /**
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   * @public
   */
  checkName?: string | undefined;

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * <p>
   *       Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>.
   *     </p>
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * <p>
   *       The token for the next set of results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The maximum number of results to return at one time. The default is 25.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAuditSuppressionsResponse {
  /**
   * <p>
   *       List of audit suppressions.
   *     </p>
   * @public
   */
  suppressions?: AuditSuppression[] | undefined;

  /**
   * <p>
   *       A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuditTasksRequest {
  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (90 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end of the time period.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   * @public
   */
  taskType?: AuditTaskType | undefined;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   * @public
   */
  taskStatus?: AuditTaskStatus | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAuditTasksResponse {
  /**
   * <p>The audits that were performed during the specified time period.</p>
   * @public
   */
  tasks?: AuditTaskMetadata[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthorizersRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  pageSize?: number | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * <p>The status of the list authorizers request.</p>
   * @public
   */
  status?: AuthorizerStatus | undefined;
}

/**
 * @public
 */
export interface ListAuthorizersResponse {
  /**
   * <p>The authorizers.</p>
   * @public
   */
  authorizers?: AuthorizerSummary[] | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   * @public
   */
  namePrefixFilter?: string | undefined;
}

/**
 * @public
 */
export interface ListBillingGroupsResponse {
  /**
   * <p>The list of billing groups.</p>
   * @public
   */
  billingGroups?: GroupNameAndArn[] | undefined;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for the ListCACertificates operation.</p>
 * @public
 */
export interface ListCACertificatesRequest {
  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Determines the order of the results.</p>
   * @public
   */
  ascendingOrder?: boolean | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  templateName?: string | undefined;
}

/**
 * <p>A CA certificate.</p>
 * @public
 */
export interface CACertificate {
  /**
   * <p>The ARN of the CA certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The ID of the CA certificate.</p>
   * @public
   */
  certificateId?: string | undefined;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   * @public
   */
  status?: CACertificateStatus | undefined;

  /**
   * <p>The date the CA certificate was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * <p>The output from the ListCACertificates operation.</p>
 * @public
 */
export interface ListCACertificatesResponse {
  /**
   * <p>The CA certificates registered in your Amazon Web Services account.</p>
   * @public
   */
  certificates?: CACertificate[] | undefined;

  /**
   * <p>The current position within the list of CA certificates.</p>
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateProvidersRequest {
  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Returns the list of certificate providers in ascending alphabetical order.</p>
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * <p>The certificate provider summary.</p>
 * @public
 */
export interface CertificateProviderSummary {
  /**
   * <p>The name of the certificate provider.</p>
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * <p>The ARN of the certificate provider.</p>
   * @public
   */
  certificateProviderArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateProvidersResponse {
  /**
   * <p>The list of certificate providers in your Amazon Web Services account.</p>
   * @public
   */
  certificateProviders?: CertificateProviderSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The input for the ListCertificates operation.</p>
 * @public
 */
export interface ListCertificatesRequest {
  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * <p>Information about a certificate.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The ARN of the certificate.</p>
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   * @public
   */
  certificateId?: string | undefined;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   * @public
   */
  status?: CertificateStatus | undefined;

  /**
   * <p>The mode of the certificate.</p>
   *          <p>
   *             <code>DEFAULT</code>: A certificate in <code>DEFAULT</code> mode is either generated by
   *          Amazon Web Services IoT Core or registered with an issuer certificate authority (CA) in <code>DEFAULT</code> mode. Devices with
   *          certificates in <code>DEFAULT</code> mode aren't required to send the Server Name
   *          Indication (SNI) extension when connecting to Amazon Web Services IoT Core. However, to use features such as
   *          custom domains and VPC endpoints, we recommend that you use the SNI extension when
   *          connecting to Amazon Web Services IoT Core.</p>
   *          <p>
   *             <code>SNI_ONLY</code>: A certificate in <code>SNI_ONLY</code> mode is registered without an issuer CA. Devices with certificates
   *          in <code>SNI_ONLY</code> mode must send the SNI extension when connecting to Amazon Web Services IoT Core. </p>
   * @public
   */
  certificateMode?: CertificateMode | undefined;

  /**
   * <p>The date and time the certificate was created.</p>
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * <p>The output of the ListCertificates operation.</p>
 * @public
 */
export interface ListCertificatesResponse {
  /**
   * <p>The descriptions of the certificates.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 * @public
 */
export interface ListCertificatesByCARequest {
  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   * @public
   */
  caCertificateId: string | undefined;

  /**
   * <p>The result page size.</p>
   * @public
   */
  pageSize?: number | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  marker?: string | undefined;

  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   * @public
   */
  ascendingOrder?: boolean | undefined;
}

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 * @public
 */
export interface ListCertificatesByCAResponse {
  /**
   * <p>The device certificates signed by the specified CA certificate.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * <p>A filter that can be used to list command executions for a device that started or
 *             completed before or after a particular date and time.</p>
 * @public
 */
export interface TimeFilter {
  /**
   * <p>Filter to display command executions that started or completed only after a particular
   *             date and time.</p>
   * @public
   */
  after?: string | undefined;

  /**
   * <p>Filter to display command executions that started or completed only before a
   *             particular date and time.</p>
   * @public
   */
  before?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListCommandExecutionsRequest {
  /**
   * <p>The maximum number of results to return in this operation.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code> value from a previous
   *             response; otherwise <code>null</code> to receive the first set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The namespace of the command.</p>
   * @public
   */
  namespace?: CommandNamespace | undefined;

  /**
   * <p>List all command executions for the device that have a particular status. For example,
   *             you can filter the list to display only command executions that have failed or timed
   *             out.</p>
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * <p>Specify whether to list the command executions that were created in the
   *             ascending or descending order. By default, the API returns all commands in the
   *             descending order based on the start time or completion time of the executions, that are
   *             determined by the <code>startTimeFilter</code> and <code>completeTimeFilter</code>
   *             parameters.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>List all command executions that started any time before or after the
   *             date and time that you specify. The date and time uses the format
   *                 <code>yyyy-MM-dd'T'HH:mm</code>.</p>
   * @public
   */
  startedTimeFilter?: TimeFilter | undefined;

  /**
   * <p>List all command executions that completed any time before or after the
   *             date and time that you specify. The date and time uses the format
   *                 <code>yyyy-MM-dd'T'HH:mm</code>.</p>
   * @public
   */
  completedTimeFilter?: TimeFilter | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the target device. You can use this information to
   *             list all command executions for a particular device.</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the command. You can use this information to
   *             list all command executions for a particular command.</p>
   * @public
   */
  commandArn?: string | undefined;
}

/**
 * <p>Summary information about a particular command execution.</p>
 * @public
 */
export interface CommandExecutionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the command execution.</p>
   * @public
   */
  commandArn?: string | undefined;

  /**
   * <p>The unique identifier of the command execution.</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target device for which the command is being
   *             executed.</p>
   * @public
   */
  targetArn?: string | undefined;

  /**
   * <p>The status of the command executions.</p>
   * @public
   */
  status?: CommandExecutionStatus | undefined;

  /**
   * <p>The date and time at which the command execution was created for the target device.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time at which the command started executing on the target device.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time at which the command completed executing on the target
   *             device.</p>
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @internal
 */
export const GetPackageResponseFilterSensitiveLog = (obj: GetPackageResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPackageVersionResponseFilterSensitiveLog = (obj: GetPackageVersionResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
  ...(obj.recipe && { recipe: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetThingConnectivityDataRequestFilterSensitiveLog = (obj: GetThingConnectivityDataRequest): any => ({
  ...obj,
  ...(obj.thingName && { thingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetThingConnectivityDataResponseFilterSensitiveLog = (obj: GetThingConnectivityDataResponse): any => ({
  ...obj,
  ...(obj.thingName && { thingName: SENSITIVE_STRING }),
});
