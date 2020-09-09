import {
  AbortConfig,
  AlertTarget,
  AttributePayload,
  AuditFrequency,
  AuthorizerConfig,
  AutoRegistrationStatus,
  Behavior,
  BillingGroupProperties,
  CACertificateStatus,
  DayOfWeek,
  DimensionType,
  JobExecutionsRolloutConfig,
  MetricToRetain,
  MitigationActionParams,
  PresignedUrlConfig,
  ProvisioningHook,
  StreamFile,
  ThingGroupProperties,
  TimeoutConfig,
  TopicRuleDestinationStatus,
} from "./models_0";
import {
  CertificateStatus,
  Configuration,
  DomainConfigurationStatus,
  RegistrationConfig,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
} from "./models_1";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

export interface UpdateBillingGroupRequest {
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

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
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
   * <p>If true, removes auto registration.</p>
   */
  removeAutoRegistration?: boolean;

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
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType | string;

  /**
   * <p>The date and time, in milliseconds since epoch, when the dimension was initially created.</p>
   */
  creationDate?: Date;

  /**
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * <p>The ARN (Amazon resource name) of the created dimension.</p>
   */
  arn?: string;

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
   * <p>The status to which the domain configuration should be updated.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

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
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionRequest {
  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.</p>
   */
  actionName: string | undefined;
}

export namespace UpdateMitigationActionRequest {
  export const filterSensitiveLog = (obj: UpdateMitigationActionRequest): any => ({
    ...obj,
  });
}

export interface UpdateMitigationActionResponse {
  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  actionId?: string;

  /**
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;
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
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>Removes pre-provisioning hook template.</p>
   */
  removePreProvisioningHook?: boolean;

  /**
   * <p>Updates the pre-provisioning hook template.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;
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
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

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
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;
}

export namespace UpdateRoleAliasResponse {
  export const filterSensitiveLog = (obj: UpdateRoleAliasResponse): any => ({
    ...obj,
  });
}

export interface UpdateScheduledAuditRequest {
  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the
   *             "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1"
   *             through "31" or "LAST". This field is required if the "frequency" parameter is
   *             set to "MONTHLY". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;
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
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   *          <p>
   *             <b>Note:</b> This API field is deprecated. Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];
}

export namespace UpdateSecurityProfileRequest {
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileResponse {
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the security profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   *          <p>
   *             <b>Note:</b> This API field is deprecated. Please use <a>UpdateSecurityProfileResponse$additionalMetricsToRetainV2</a> instead.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The updated version of the security profile.</p>
   */
  version?: number;

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };
}

export namespace UpdateSecurityProfileResponse {
  export const filterSensitiveLog = (obj: UpdateSecurityProfileResponse): any => ({
    ...obj,
  });
}

export interface UpdateStreamRequest {
  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn?: string;

  /**
   * <p>The files associated with the stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;
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
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>UpdateThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the thing to update.</p>
   * 		       <p>You can't change a thing's name. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

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
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;
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
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: string[];

  /**
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;

  /**
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: string[];
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
