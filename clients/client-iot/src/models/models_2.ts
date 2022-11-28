// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";
import {
  AbortConfig,
  AggregationType,
  AlertTarget,
  AttributePayload,
  AuditCheckConfiguration,
  AuditFrequency,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuthInfo,
  AuthorizerConfig,
  AuthorizerStatus,
  AuthResult,
  AutoRegistrationStatus,
  Behavior,
  BillingGroupProperties,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  FleetMetricUnit,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  LogLevel,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  PresignedUrlConfig,
  ProvisioningHook,
  ResourceIdentifier,
  StreamFile,
  Tag,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TopicRuleDestinationStatus,
  TopicRulePayload,
  VerificationState,
  ViolationEventAdditionalInfo,
} from "./models_0";
import {
  BehaviorCriteriaType,
  CACertificateStatus,
  CertificateMode,
  CertificateStatus,
  Configuration,
  DetectMitigationActionsTaskTarget,
  DomainConfigurationStatus,
  GroupNameAndArn,
  LogTargetType,
  RegistrationConfig,
  SecurityProfileTarget,
  Status,
  StreamSummary,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  ViolationEventOccurrenceRange,
} from "./models_1";

export interface ListStreamsResponse {
  /**
   * <p>A list of streams.</p>
   */
  streams?: StreamSummary[];

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListTargetsForPolicyRequest {
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

export interface ListTargetsForPolicyResponse {
  /**
   * <p>The policy targets.</p>
   */
  targets?: string[];

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

export interface ListTargetsForSecurityProfileRequest {
  /**
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export interface ListTargetsForSecurityProfileResponse {
  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: SecurityProfileTarget[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export interface ListThingGroupsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

export interface ListThingGroupsResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export interface ListThingGroupsForThingRequest {
  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export interface ListThingGroupsForThingResponse {
  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum ReportType {
  ERRORS = "ERRORS",
  RESULTS = "RESULTS",
}

export interface ListThingRegistrationTaskReportsRequest {
  /**
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>The type of task report.</p>
   */
  reportType: ReportType | string | undefined;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 		the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

export interface ListThingRegistrationTaskReportsResponse {
  /**
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: string[];

  /**
   * <p>The type of task report.</p>
   */
  reportType?: ReportType | string;

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListThingRegistrationTasksRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;
}

export interface ListThingRegistrationTasksResponse {
  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;

  /**
   * <p>When <code>true</code>, the action returns the thing resources with attribute values
   *                      that start with the <code>attributeValue</code> provided.</p>
   *             <p>When <code>false</code>, or not present, the action returns only the thing
   * 			resources with attribute values that match the entire <code>attributeValue</code>
   * 			provided. </p>
   */
  usePrefixAttributeValue?: boolean;
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: Record<string, string>;

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  /**
   * <p>The things.</p>
   */
  things?: ThingAttribute[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export interface ListThingsInBillingGroupRequest {
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

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
}

export interface ListThingsInBillingGroupResponse {
  /**
   * <p>A list of things in the billing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export interface ListThingsInThingGroupRequest {
  /**
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

export interface ListThingsInThingGroupResponse {
  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: string[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  /**
   * <p>The thing types.</p>
   */
  thingTypes?: ThingTypeDefinition[];

  /**
   * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

export interface ListTopicRuleDestinationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

/**
 * <p>The summary of a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationSummary {
  /**
   * <p>The subnet IDs of the VPC destination.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The security groups of the VPC destination.</p>
   */
  securityGroups?: string[];

  /**
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;

  /**
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   */
  roleArn?: string;
}

/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  /**
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

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
  status?: TopicRuleDestinationStatus | string;

  /**
   * <p>The date and time when the topic rule destination was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the topic rule destination was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

  /**
   * <p>Information about the virtual private cloud (VPC) connection.</p>
   */
  vpcDestinationSummary?: VpcDestinationSummary;
}

export interface ListTopicRuleDestinationsResponse {
  /**
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  /**
   * <p>The topic.</p>
   */
  topic?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  /**
   * <p>The rules.</p>
   */
  rules?: TopicRuleListItem[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListV2LoggingLevelsRequest {
  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType | string;

  /**
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * <p>A log target.</p>
 */
export interface LogTarget {
  /**
   * <p>The target type.</p>
   */
  targetType: LogTargetType | string | undefined;

  /**
   * <p>The target name.</p>
   */
  targetName?: string;
}

/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  /**
   * <p>A log target</p>
   */
  logTarget?: LogTarget;

  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;
}

export interface ListV2LoggingLevelsResponse {
  /**
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListViolationEventsRequest {
  /**
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the alerts to be listed.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
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

export enum ViolationEventType {
  ALARM_CLEARED = "alarm-cleared",
  ALARM_INVALIDATED = "alarm-invalidated",
  IN_ALARM = "in-alarm",
}

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior that was violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * <p>
   *             The details of a violation event.
   *         </p>
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType | string;

  /**
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState | string;

  /**
   * <p>The description of the verification state of the violation.</p>
   */
  verificationStateDescription?: string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;
}

export interface ListViolationEventsResponse {
  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: ViolationEvent[];

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

export interface PutVerificationStateOnViolationRequest {
  /**
   * <p>The violation ID.</p>
   */
  violationId: string | undefined;

  /**
   * <p>The verification state of the violation.</p>
   */
  verificationState: VerificationState | string | undefined;

  /**
   * <p>The description of the verification state of the violation (detect alarm).</p>
   */
  verificationStateDescription?: string;
}

export interface PutVerificationStateOnViolationResponse {}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  /**
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * <p>The private key verification certificate. If <code>certificateMode</code> is
   *             <code>SNI_ONLY</code>, the <code>verificationCertificate</code> field must be empty. If
   *             <code>certificateMode</code> is <code>DEFAULT</code> or not provided, the
   *             <code>verificationCertificate</code> field must not be empty. </p>
   */
  verificationCertificate?: string;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>Metadata which can be used to manage the CA certificate.</p>
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
   * <p>Describes the certificate mode in which the Certificate Authority (CA) will be
   *          registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>.
   *          If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>.
   *          When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>.
   *          All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA.
   *          For more information about certificate mode for device certificates, see
   *          <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">
   *             certificate mode</a>.
   *       </p>
   */
  certificateMode?: CertificateMode | string;
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;
}

/**
 * <p>The registration code is invalid.</p>
 */
export class RegistrationCodeValidationException extends __BaseException {
  readonly name: "RegistrationCodeValidationException" = "RegistrationCodeValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegistrationCodeValidationException, __BaseException>) {
    super({
      name: "RegistrationCodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegistrationCodeValidationException.prototype);
  }
}

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 */
export class CertificateConflictException extends __BaseException {
  readonly name: "CertificateConflictException" = "CertificateConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateConflictException, __BaseException>) {
    super({
      name: "CertificateConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateConflictException.prototype);
  }
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * @deprecated
   *
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request. Valid values that you can use include
   *          <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>.</p>
   */
  status?: CertificateStatus | string;
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;
}

export interface RegisterCertificateWithoutCARequest {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export interface RegisterCertificateWithoutCAResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registered certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the registered certificate. (The last part of the certificate ARN contains the
   *          certificate ID.</p>
   */
  certificateId?: string;
}

export interface RegisterThingRequest {
  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.</p>
   */
  parameters?: Record<string, string>;
}

export interface RegisterThingResponse {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: Record<string, string>;
}

/**
 * <p>The resource registration failed.</p>
 */
export class ResourceRegistrationFailureException extends __BaseException {
  readonly name: "ResourceRegistrationFailureException" = "ResourceRegistrationFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceRegistrationFailureException, __BaseException>) {
    super({
      name: "ResourceRegistrationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceRegistrationFailureException.prototype);
  }
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

export interface RemoveThingFromBillingGroupResponse {}

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

export interface RemoveThingFromThingGroupResponse {}

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

export interface SearchIndexRequest {
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query
   *       syntax</a>.</p>
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
  attributes?: Record<string, string>;

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  /**
   * <p>True if the thing is connected to the Amazon Web Services IoT Core service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for approximately an hour, the time value might be missing.</p>
   */
  timestamp?: number;

  /**
   * <p>The reason why the client is disconnected. If the thing has been disconnected for approximately an hour, the <code>disconnectReason</code> value might be missing.</p>
   */
  disconnectReason?: string;
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
  attributes?: Record<string, string>;

  /**
   * <p>The unnamed shadow and named shadow.</p>
   *          <p>For more information about shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   */
  shadow?: string;

  /**
   * <p>Contains Device Defender data.</p>
   *          <p>For more information about Device Defender, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html">Device Defender</a>. </p>
   */
  deviceDefender?: string;

  /**
   * <p>Indicates whether the thing is connected to the Amazon Web Services IoT Core service.</p>
   */
  connectivity?: ThingConnectivity;
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

export interface SetDefaultAuthorizerRequest {
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
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

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
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
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.</p>
   */
  auditCheckToActionsMapping: Record<string, string[]> | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;
}

export interface StartAuditMitigationActionsTaskResponse {
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

/**
 * <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 */
export class TaskAlreadyExistsException extends __BaseException {
  readonly name: "TaskAlreadyExistsException" = "TaskAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskAlreadyExistsException, __BaseException>) {
    super({
      name: "TaskAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskAlreadyExistsException.prototype);
  }
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
   *       Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *     </p>
   */
  clientRequestToken?: string;
}

export interface StartDetectMitigationActionsTaskResponse {
  /**
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;
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

export interface StartOnDemandAuditTaskResponse {
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
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

export interface StartThingRegistrationTaskResponse {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export interface StopThingRegistrationTaskRequest {
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export interface StopThingRegistrationTaskResponse {}

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

export interface TagResourceResponse {}

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

export interface TestAuthorizationResponse {
  /**
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

/**
 * <p>The response is invalid.</p>
 */
export class InvalidResponseException extends __BaseException {
  readonly name: "InvalidResponseException" = "InvalidResponseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResponseException, __BaseException>) {
    super({
      name: "InvalidResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResponseException.prototype);
  }
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  /**
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: Record<string, string>;

  /**
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
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

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
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
   * <p>The Amazon Web Services account.</p>
   */
  targetAwsAccount: string | undefined;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
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

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 */
export class TransferConflictException extends __BaseException {
  readonly name: "TransferConflictException" = "TransferConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransferConflictException, __BaseException>) {
    super({
      name: "TransferConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransferConflictException.prototype);
  }
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

export interface UntagResourceResponse {}

export interface UpdateAccountAuditConfigurationRequest {
  /**
   * <p>The Amazon
   *       Resource Name
   *       (ARN)
   *       of the role that grants permission
   *       to
   *       IoT to access information about your devices, policies,
   *       certificates,
   *       and other items as required when performing an audit.</p>
   */
  roleArn?: string;

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: Record<string, AuditNotificationTarget>;

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
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

export interface UpdateAccountAuditConfigurationResponse {}

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

export interface UpdateAuditSuppressionResponse {}

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
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for the time specified in <code>refreshAfterInSeconds</code>. The cached
   * 	  result is used while the device reuses the same HTTP connection.</p>
   */
  enableCachingForHttp?: boolean;
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

export interface UpdateBillingGroupResponse {
  /**
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
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
   *          in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They
   *          are not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | string | undefined;
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
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
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
   * 			         <p>Currently one index is supported: <code>AWS_Things</code>.</p>
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

export interface UpdateDynamicThingGroupResponse {
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

export interface UpdateEventConfigurationsRequest {
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: Record<string, Configuration>;
}

export interface UpdateEventConfigurationsResponse {}

export interface UpdateFleetMetricRequest {
  /**
   * <p>The name of the fleet metric to update.</p>
   */
  metricName: string | undefined;

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
   * <p>The description of the fleet metric.</p>
   */
  description?: string;

  /**
   * <p>The version of the query.</p>
   */
  queryVersion?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName: string | undefined;

  /**
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   */
  unit?: FleetMetricUnit | string;

  /**
   * <p>The expected version of the fleet metric record in the registry.</p>
   */
  expectedVersion?: number;
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

export interface UpdateIndexingConfigurationResponse {}

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
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
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

export interface UpdateProvisioningTemplateRequest {
  /**
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * <p>The description of the provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True to enable the provisioning template, otherwise false.</p>
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
   * <p>Updates the pre-provisioning hook template. Only supports template of type
   *             <code>FLEET_PROVISIONING</code>. For more information about provisioning template types,
   *          see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type">type</a>.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * <p>Removes pre-provisioning hook template.</p>
   */
  removePreProvisioningHook?: boolean;
}

export interface UpdateProvisioningTemplateResponse {}

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
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *          that the role alias references.</p>
   */
  credentialDurationSeconds?: number;
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

export interface UpdateScheduledAuditResponse {
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
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
  alertTargets?: Record<string, AlertTarget>;

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
  alertTargets?: Record<string, AlertTarget>;

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

/**
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {}

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

export interface UpdateThingGroupResponse {
  /**
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
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

export interface UpdateThingGroupsForThingResponse {}

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

export interface UpdateTopicRuleDestinationResponse {}

export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Behavior[] | undefined;
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

/**
 * @internal
 */
export const ListStreamsResponseFilterSensitiveLog = (obj: ListStreamsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsForPolicyRequestFilterSensitiveLog = (obj: ListTargetsForPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsForPolicyResponseFilterSensitiveLog = (obj: ListTargetsForPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsForSecurityProfileRequestFilterSensitiveLog = (
  obj: ListTargetsForSecurityProfileRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsForSecurityProfileResponseFilterSensitiveLog = (
  obj: ListTargetsForSecurityProfileResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingGroupsRequestFilterSensitiveLog = (obj: ListThingGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingGroupsResponseFilterSensitiveLog = (obj: ListThingGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingGroupsForThingRequestFilterSensitiveLog = (obj: ListThingGroupsForThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingGroupsForThingResponseFilterSensitiveLog = (obj: ListThingGroupsForThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingPrincipalsRequestFilterSensitiveLog = (obj: ListThingPrincipalsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingPrincipalsResponseFilterSensitiveLog = (obj: ListThingPrincipalsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingRegistrationTaskReportsRequestFilterSensitiveLog = (
  obj: ListThingRegistrationTaskReportsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingRegistrationTaskReportsResponseFilterSensitiveLog = (
  obj: ListThingRegistrationTaskReportsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingRegistrationTasksRequestFilterSensitiveLog = (obj: ListThingRegistrationTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingRegistrationTasksResponseFilterSensitiveLog = (obj: ListThingRegistrationTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsRequestFilterSensitiveLog = (obj: ListThingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingAttributeFilterSensitiveLog = (obj: ThingAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsResponseFilterSensitiveLog = (obj: ListThingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsInBillingGroupRequestFilterSensitiveLog = (obj: ListThingsInBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsInBillingGroupResponseFilterSensitiveLog = (obj: ListThingsInBillingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsInThingGroupRequestFilterSensitiveLog = (obj: ListThingsInThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingsInThingGroupResponseFilterSensitiveLog = (obj: ListThingsInThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingTypesRequestFilterSensitiveLog = (obj: ListThingTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingTypeDefinitionFilterSensitiveLog = (obj: ThingTypeDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListThingTypesResponseFilterSensitiveLog = (obj: ListThingTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicRuleDestinationsRequestFilterSensitiveLog = (obj: ListTopicRuleDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpUrlDestinationSummaryFilterSensitiveLog = (obj: HttpUrlDestinationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcDestinationSummaryFilterSensitiveLog = (obj: VpcDestinationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicRuleDestinationSummaryFilterSensitiveLog = (obj: TopicRuleDestinationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicRuleDestinationsResponseFilterSensitiveLog = (obj: ListTopicRuleDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicRulesRequestFilterSensitiveLog = (obj: ListTopicRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicRuleListItemFilterSensitiveLog = (obj: TopicRuleListItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTopicRulesResponseFilterSensitiveLog = (obj: ListTopicRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListV2LoggingLevelsRequestFilterSensitiveLog = (obj: ListV2LoggingLevelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogTargetFilterSensitiveLog = (obj: LogTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogTargetConfigurationFilterSensitiveLog = (obj: LogTargetConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListV2LoggingLevelsResponseFilterSensitiveLog = (obj: ListV2LoggingLevelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListViolationEventsRequestFilterSensitiveLog = (obj: ListViolationEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViolationEventFilterSensitiveLog = (obj: ViolationEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListViolationEventsResponseFilterSensitiveLog = (obj: ListViolationEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVerificationStateOnViolationRequestFilterSensitiveLog = (
  obj: PutVerificationStateOnViolationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutVerificationStateOnViolationResponseFilterSensitiveLog = (
  obj: PutVerificationStateOnViolationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCACertificateRequestFilterSensitiveLog = (obj: RegisterCACertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCACertificateResponseFilterSensitiveLog = (obj: RegisterCACertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateRequestFilterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateResponseFilterSensitiveLog = (obj: RegisterCertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateWithoutCARequestFilterSensitiveLog = (
  obj: RegisterCertificateWithoutCARequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterCertificateWithoutCAResponseFilterSensitiveLog = (
  obj: RegisterCertificateWithoutCAResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterThingRequestFilterSensitiveLog = (obj: RegisterThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterThingResponseFilterSensitiveLog = (obj: RegisterThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectCertificateTransferRequestFilterSensitiveLog = (obj: RejectCertificateTransferRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveThingFromBillingGroupRequestFilterSensitiveLog = (obj: RemoveThingFromBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveThingFromBillingGroupResponseFilterSensitiveLog = (
  obj: RemoveThingFromBillingGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveThingFromThingGroupRequestFilterSensitiveLog = (obj: RemoveThingFromThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveThingFromThingGroupResponseFilterSensitiveLog = (obj: RemoveThingFromThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplaceTopicRuleRequestFilterSensitiveLog = (obj: ReplaceTopicRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchIndexRequestFilterSensitiveLog = (obj: SearchIndexRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingGroupDocumentFilterSensitiveLog = (obj: ThingGroupDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingConnectivityFilterSensitiveLog = (obj: ThingConnectivity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThingDocumentFilterSensitiveLog = (obj: ThingDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchIndexResponseFilterSensitiveLog = (obj: SearchIndexResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultAuthorizerRequestFilterSensitiveLog = (obj: SetDefaultAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultAuthorizerResponseFilterSensitiveLog = (obj: SetDefaultAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDefaultPolicyVersionRequestFilterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingOptionsPayloadFilterSensitiveLog = (obj: LoggingOptionsPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetLoggingOptionsRequestFilterSensitiveLog = (obj: SetLoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetV2LoggingLevelRequestFilterSensitiveLog = (obj: SetV2LoggingLevelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetV2LoggingOptionsRequestFilterSensitiveLog = (obj: SetV2LoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAuditMitigationActionsTaskRequestFilterSensitiveLog = (
  obj: StartAuditMitigationActionsTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAuditMitigationActionsTaskResponseFilterSensitiveLog = (
  obj: StartAuditMitigationActionsTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDetectMitigationActionsTaskRequestFilterSensitiveLog = (
  obj: StartDetectMitigationActionsTaskRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDetectMitigationActionsTaskResponseFilterSensitiveLog = (
  obj: StartDetectMitigationActionsTaskResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandAuditTaskRequestFilterSensitiveLog = (obj: StartOnDemandAuditTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOnDemandAuditTaskResponseFilterSensitiveLog = (obj: StartOnDemandAuditTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartThingRegistrationTaskRequestFilterSensitiveLog = (obj: StartThingRegistrationTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartThingRegistrationTaskResponseFilterSensitiveLog = (obj: StartThingRegistrationTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopThingRegistrationTaskRequestFilterSensitiveLog = (obj: StopThingRegistrationTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopThingRegistrationTaskResponseFilterSensitiveLog = (obj: StopThingRegistrationTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestAuthorizationRequestFilterSensitiveLog = (obj: TestAuthorizationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestAuthorizationResponseFilterSensitiveLog = (obj: TestAuthorizationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpContextFilterSensitiveLog = (obj: HttpContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MqttContextFilterSensitiveLog = (obj: MqttContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TlsContextFilterSensitiveLog = (obj: TlsContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestInvokeAuthorizerRequestFilterSensitiveLog = (obj: TestInvokeAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestInvokeAuthorizerResponseFilterSensitiveLog = (obj: TestInvokeAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferCertificateRequestFilterSensitiveLog = (obj: TransferCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferCertificateResponseFilterSensitiveLog = (obj: TransferCertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountAuditConfigurationRequestFilterSensitiveLog = (
  obj: UpdateAccountAuditConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccountAuditConfigurationResponseFilterSensitiveLog = (
  obj: UpdateAccountAuditConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuditSuppressionRequestFilterSensitiveLog = (obj: UpdateAuditSuppressionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuditSuppressionResponseFilterSensitiveLog = (obj: UpdateAuditSuppressionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuthorizerRequestFilterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAuthorizerResponseFilterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBillingGroupRequestFilterSensitiveLog = (obj: UpdateBillingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBillingGroupResponseFilterSensitiveLog = (obj: UpdateBillingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCACertificateRequestFilterSensitiveLog = (obj: UpdateCACertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCertificateRequestFilterSensitiveLog = (obj: UpdateCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomMetricRequestFilterSensitiveLog = (obj: UpdateCustomMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomMetricResponseFilterSensitiveLog = (obj: UpdateCustomMetricResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDimensionRequestFilterSensitiveLog = (obj: UpdateDimensionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDimensionResponseFilterSensitiveLog = (obj: UpdateDimensionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainConfigurationRequestFilterSensitiveLog = (obj: UpdateDomainConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainConfigurationResponseFilterSensitiveLog = (obj: UpdateDomainConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDynamicThingGroupRequestFilterSensitiveLog = (obj: UpdateDynamicThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDynamicThingGroupResponseFilterSensitiveLog = (obj: UpdateDynamicThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventConfigurationsRequestFilterSensitiveLog = (obj: UpdateEventConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventConfigurationsResponseFilterSensitiveLog = (obj: UpdateEventConfigurationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFleetMetricRequestFilterSensitiveLog = (obj: UpdateFleetMetricRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIndexingConfigurationRequestFilterSensitiveLog = (obj: UpdateIndexingConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIndexingConfigurationResponseFilterSensitiveLog = (
  obj: UpdateIndexingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateJobRequestFilterSensitiveLog = (obj: UpdateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMitigationActionRequestFilterSensitiveLog = (obj: UpdateMitigationActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMitigationActionResponseFilterSensitiveLog = (obj: UpdateMitigationActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProvisioningTemplateRequestFilterSensitiveLog = (obj: UpdateProvisioningTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProvisioningTemplateResponseFilterSensitiveLog = (obj: UpdateProvisioningTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoleAliasRequestFilterSensitiveLog = (obj: UpdateRoleAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoleAliasResponseFilterSensitiveLog = (obj: UpdateRoleAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduledAuditRequestFilterSensitiveLog = (obj: UpdateScheduledAuditRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduledAuditResponseFilterSensitiveLog = (obj: UpdateScheduledAuditResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityProfileRequestFilterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityProfileResponseFilterSensitiveLog = (obj: UpdateSecurityProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamRequestFilterSensitiveLog = (obj: UpdateStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamResponseFilterSensitiveLog = (obj: UpdateStreamResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingRequestFilterSensitiveLog = (obj: UpdateThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingResponseFilterSensitiveLog = (obj: UpdateThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingGroupRequestFilterSensitiveLog = (obj: UpdateThingGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingGroupResponseFilterSensitiveLog = (obj: UpdateThingGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingGroupsForThingRequestFilterSensitiveLog = (obj: UpdateThingGroupsForThingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateThingGroupsForThingResponseFilterSensitiveLog = (obj: UpdateThingGroupsForThingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTopicRuleDestinationRequestFilterSensitiveLog = (obj: UpdateTopicRuleDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTopicRuleDestinationResponseFilterSensitiveLog = (obj: UpdateTopicRuleDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateSecurityProfileBehaviorsRequestFilterSensitiveLog = (
  obj: ValidateSecurityProfileBehaviorsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationErrorFilterSensitiveLog = (obj: ValidationError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateSecurityProfileBehaviorsResponseFilterSensitiveLog = (
  obj: ValidateSecurityProfileBehaviorsResponse
): any => ({
  ...obj,
});
