// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTServiceException as __BaseException } from "./IoTServiceException";
import {
  AbortConfig,
  AggregationType,
  AlertTarget,
  AlertTargetType,
  AttributePayload,
  AuditCheckConfiguration,
  AuditFrequency,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuditNotificationType,
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
  Policy,
  PresignedUrlConfig,
  ProvisioningHook,
  RelatedResource,
  ResourceIdentifier,
  StreamFile,
  Tag,
  TemplateType,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
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
  EventType,
  GroupNameAndArn,
  LogTargetType,
  RegistrationConfig,
  Status,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  VersionUpdateByJobsConfig,
  ViolationEventOccurrenceRange,
} from "./models_1";

/**
 * @public
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  /**
   * @public
   * <p>The policy version ID.</p>
   */
  versionId?: string;

  /**
   * @public
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * @public
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;
}

/**
 * @public
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
  /**
   * @public
   * <p>The policy versions.</p>
   */
  policyVersions?: PolicyVersion[];
}

/**
 * @public
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
  /**
   * @public
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal: string | undefined;

  /**
   * @public
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * @public
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
  /**
   * @public
   * <p>The policies.</p>
   */
  policies?: Policy[];

  /**
   * @public
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

/**
 * @public
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
  /**
   * @public
   * <p>The things.</p>
   */
  things?: string[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesRequest {
  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of information about a provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
  /**
   * @public
   * <p>The ARN of the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * @public
   * <p>The name of the provisioning template.</p>
   */
  templateName?: string;

  /**
   * @public
   * <p>The description of the provisioning template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date when the provisioning template summary was created.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date when the provisioning template summary was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * @public
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The type you define in a provisioning template. You can create a template with only one type.
   *          You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>.
   *          For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>.
   *       </p>
   */
  type?: TemplateType;
}

/**
 * @public
 */
export interface ListProvisioningTemplatesResponse {
  /**
   * @public
   * <p>A list of provisioning templates</p>
   */
  templates?: ProvisioningTemplateSummary[];

  /**
   * @public
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsRequest {
  /**
   * @public
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
  /**
   * @public
   * <p>The ID of the fleet provisioning template version.</p>
   */
  versionId?: number;

  /**
   * @public
   * <p>The date when the provisioning template version was created</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>True if the provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;
}

/**
 * @public
 */
export interface ListProvisioningTemplateVersionsResponse {
  /**
   * @public
   * <p>The list of provisioning template versions.</p>
   */
  versions?: ProvisioningTemplateVersionSummary[];

  /**
   * @public
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingRequest {
  /**
   * @public
   * <p>The finding Id.</p>
   */
  findingId: string | undefined;

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results,
   *       or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListRelatedResourcesForAuditFindingResponse {
  /**
   * @public
   * <p>The related resources.</p>
   */
  relatedResources?: RelatedResource[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results,
   *       or <code>null</code> for the first API call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRoleAliasesRequest {
  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * @public
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 */
export interface ListRoleAliasesResponse {
  /**
   * @public
   * <p>The role aliases.</p>
   */
  roleAliases?: string[];

  /**
   * @public
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListScheduledAuditsRequest {
  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
  /**
   * @public
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * @public
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * @public
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: AuditFrequency;

  /**
   * @public
   * <p>The day of the month on which the scheduled audit is run (if the
   *           <code>frequency</code> is "MONTHLY").
   *         If days 29-31 are specified, and the month does not have that many
   *         days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * @public
   * <p>The day of the week on which the scheduled audit is run (if the
   *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   */
  dayOfWeek?: DayOfWeek;
}

/**
 * @public
 */
export interface ListScheduledAuditsResponse {
  /**
   * @public
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: ScheduledAuditMetadata[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A filter to limit results to the security profiles that use the defined dimension.
   *       Cannot be used with <code>metricName</code>
   *          </p>
   */
  dimensionName?: string;

  /**
   * @public
   * <p> The name of the custom metric.
   *       Cannot be used with <code>dimensionName</code>. </p>
   */
  metricName?: string;
}

/**
 * @public
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
  /**
   * @public
   * <p>The name you've given to the security profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * @public
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetRequest {
  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>If true, return child groups too.</p>
   */
  recursive?: boolean;

  /**
   * @public
   * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
   */
  securityProfileTargetArn: string | undefined;
}

/**
 * @public
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
  /**
   * @public
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
  /**
   * @public
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * @public
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: SecurityProfileTarget;
}

/**
 * @public
 */
export interface ListSecurityProfilesForTargetResponse {
  /**
   * @public
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStreamsRequest {
  /**
   * @public
   * <p>The maximum number of results to return at a time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Set to true to return the list of streams in ascending order.</p>
   */
  ascendingOrder?: boolean;
}

/**
 * @public
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
  /**
   * @public
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * @public
   * <p>The stream version.</p>
   */
  streamVersion?: number;

  /**
   * @public
   * <p>A description of the stream.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * @public
   * <p>A list of streams.</p>
   */
  streams?: StreamSummary[];

  /**
   * @public
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * @public
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * @public
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * @public
   * <p>The policy targets.</p>
   */
  targets?: string[];

  /**
   * @public
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileRequest {
  /**
   * @public
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileResponse {
  /**
   * @public
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: SecurityProfileTarget[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingGroupsRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * @public
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * @public
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

/**
 * @public
 */
export interface ListThingGroupsResponse {
  /**
   * @public
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * @public
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingGroupsForThingRequest {
  /**
   * @public
   * <p>The thing name.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingGroupsForThingResponse {
  /**
   * @public
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  /**
   * @public
   * <p>The principals associated with the thing.</p>
   */
  principals?: string[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReportType = {
  ERRORS: "ERRORS",
  RESULTS: "RESULTS",
} as const;

/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsRequest {
  /**
   * @public
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>The type of task report.</p>
   */
  reportType: ReportType | undefined;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 		the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsResponse {
  /**
   * @public
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: string[];

  /**
   * @public
   * <p>The type of task report.</p>
   */
  reportType?: ReportType;

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksResponse {
  /**
   * @public
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: string[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * @public
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * @public
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;

  /**
   * @public
   * <p>When <code>true</code>, the action returns the thing resources with attribute values
   *                      that start with the <code>attributeValue</code> provided.</p>
   *          <p>When <code>false</code>, or not present, the action returns only the thing
   * 			resources with attribute values that match the entire <code>attributeValue</code>
   * 			provided. </p>
   */
  usePrefixAttributeValue?: boolean;
}

/**
 * @public
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  /**
   * @public
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * @public
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * @public
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

/**
 * @public
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  /**
   * @public
   * <p>The things.</p>
   */
  things?: ThingAttribute[];

  /**
   * @public
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupRequest {
  /**
   * @public
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupResponse {
  /**
   * @public
   * <p>A list of things in the billing group.</p>
   */
  things?: string[];

  /**
   * @public
   * <p>The token to use to get the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListThingsInThingGroupRequest {
  /**
   * @public
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;

  /**
   * @public
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListThingsInThingGroupResponse {
  /**
   * @public
   * <p>The things in the specified thing group.</p>
   */
  things?: string[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   * 			value from a previous response; otherwise <b>null</b> to receive
   * 			the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

/**
 * @public
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  /**
   * @public
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * @public
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * @public
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;

  /**
   * @public
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;
}

/**
 * @public
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  /**
   * @public
   * <p>The thing types.</p>
   */
  thingTypes?: ThingTypeDefinition[];

  /**
   * @public
   * <p>The token for the next set of results. Will not be returned if operation has returned all results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  /**
   * @public
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

/**
 * @public
 * <p>The summary of a virtual private cloud (VPC) destination.</p>
 */
export interface VpcDestinationSummary {
  /**
   * @public
   * <p>The subnet IDs of the VPC destination.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The security groups of the VPC destination.</p>
   */
  securityGroups?: string[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).</p>
   */
  roleArn?: string;
}

/**
 * @public
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  /**
   * @public
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

  /**
   * @public
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
  status?: TopicRuleDestinationStatus;

  /**
   * @public
   * <p>The date and time when the topic rule destination was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The date and time when the topic rule destination was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * @public
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

  /**
   * @public
   * <p>Information about the virtual private cloud (VPC) connection.</p>
   */
  vpcDestinationSummary?: VpcDestinationSummary;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsResponse {
  /**
   * @public
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  /**
   * @public
   * <p>The topic.</p>
   */
  topic?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

/**
 * @public
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  /**
   * @public
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * @public
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * @public
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;

  /**
   * @public
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;
}

/**
 * @public
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  /**
   * @public
   * <p>The rules.</p>
   */
  rules?: TopicRuleListItem[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsRequest {
  /**
   * @public
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType;

  /**
   * @public
   * <p>To retrieve the next set of results, the <code>nextToken</code>
   *          value from a previous response; otherwise <b>null</b> to receive
   *          the first set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A log target.</p>
 */
export interface LogTarget {
  /**
   * @public
   * <p>The target type.</p>
   */
  targetType: LogTargetType | undefined;

  /**
   * @public
   * <p>The target name.</p>
   */
  targetName?: string;
}

/**
 * @public
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  /**
   * @public
   * <p>A log target</p>
   */
  logTarget?: LogTarget;

  /**
   * @public
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsResponse {
  /**
   * @public
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * @public
   * <p>The token to use to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListViolationEventsRequest {
  /**
   * @public
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The end time for the alerts to be listed.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   */
  securityProfileName?: string;

  /**
   * @public
   * <p>
   *       The criteria for a behavior.
   *     </p>
   */
  behaviorCriteriaType?: BehaviorCriteriaType;

  /**
   * @public
   * <p>
   *       A list of all suppressed alerts.
   *     </p>
   */
  listSuppressedAlerts?: boolean;

  /**
   * @public
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState;

  /**
   * @public
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const ViolationEventType = {
  ALARM_CLEARED: "alarm-cleared",
  ALARM_INVALIDATED: "alarm-invalidated",
  IN_ALARM: "in-alarm",
} as const;

/**
 * @public
 */
export type ViolationEventType = (typeof ViolationEventType)[keyof typeof ViolationEventType];

/**
 * @public
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  /**
   * @public
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;

  /**
   * @public
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * @public
   * <p>The behavior that was violated.</p>
   */
  behavior?: Behavior;

  /**
   * @public
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * @public
   * <p>
   *             The details of a violation event.
   *         </p>
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;

  /**
   * @public
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType;

  /**
   * @public
   * <p>The verification state of the violation (detect alarm).</p>
   */
  verificationState?: VerificationState;

  /**
   * @public
   * <p>The description of the verification state of the violation.</p>
   */
  verificationStateDescription?: string;

  /**
   * @public
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;
}

/**
 * @public
 */
export interface ListViolationEventsResponse {
  /**
   * @public
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: ViolationEvent[];

  /**
   * @public
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationRequest {
  /**
   * @public
   * <p>The violation ID.</p>
   */
  violationId: string | undefined;

  /**
   * @public
   * <p>The verification state of the violation.</p>
   */
  verificationState: VerificationState | undefined;

  /**
   * @public
   * <p>The description of the verification state of the violation (detect alarm).</p>
   */
  verificationStateDescription?: string;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationResponse {}

/**
 * @public
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  /**
   * @public
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * @public
   * <p>The private key verification certificate. If <code>certificateMode</code> is
   *             <code>SNI_ONLY</code>, the <code>verificationCertificate</code> field must be empty. If
   *             <code>certificateMode</code> is <code>DEFAULT</code> or not provided, the
   *             <code>verificationCertificate</code> field must not be empty. </p>
   */
  verificationCertificate?: string;

  /**
   * @public
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * @public
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * @public
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * @public
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
   * @public
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
  certificateMode?: CertificateMode;
}

/**
 * @public
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  /**
   * @public
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  /**
   * @public
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * @public
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * @public
   * @deprecated
   *
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   *          <p>Valid values: <code>ACTIVE | INACTIVE</code>
   *          </p>
   */
  setAsActive?: boolean;

  /**
   * @public
   * <p>The status of the register certificate request. Valid values that you can use include
   *          <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>.</p>
   */
  status?: CertificateStatus;
}

/**
 * @public
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  /**
   * @public
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCARequest {
  /**
   * @public
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * @public
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCAResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registered certificate.</p>
   */
  certificateArn?: string;

  /**
   * @public
   * <p>The ID of the registered certificate. (The last part of the certificate ARN contains the
   *          certificate ID.</p>
   */
  certificateId?: string;
}

/**
 * @public
 */
export interface RegisterThingRequest {
  /**
   * @public
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.</p>
   */
  templateBody: string | undefined;

  /**
   * @public
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information.</p>
   */
  parameters?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterThingResponse {
  /**
   * @public
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * @public
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: Record<string, string>;
}

/**
 * @public
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
 * @public
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  /**
   * @public
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * @public
   * <p>The reason the certificate transfer was rejected.</p>
   */
  rejectReason?: string;
}

/**
 * @public
 */
export interface RemoveThingFromBillingGroupRequest {
  /**
   * @public
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * @public
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * @public
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface RemoveThingFromBillingGroupResponse {}

/**
 * @public
 */
export interface RemoveThingFromThingGroupRequest {
  /**
   * @public
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * @public
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * @public
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;
}

/**
 * @public
 */
export interface RemoveThingFromThingGroupResponse {}

/**
 * @public
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

  /**
   * @public
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

/**
 * @public
 */
export interface SearchIndexRequest {
  /**
   * @public
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * @public
   * <p>The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query
   *       syntax</a>.</p>
   */
  queryString: string | undefined;

  /**
   * @public
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

/**
 * @public
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  /**
   * @public
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;

  /**
   * @public
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * @public
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * @public
   * <p>The thing group attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];
}

/**
 * @public
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  /**
   * @public
   * <p>True if the thing is connected to the Amazon Web Services IoT Core service; false if it is not
   *       connected.</p>
   */
  connected?: boolean;

  /**
   * @public
   * <p>The epoch time (in milliseconds) when the thing last connected or disconnected. If the
   *       thing has been disconnected for approximately an hour, the time value might be missing.</p>
   */
  timestamp?: number;

  /**
   * @public
   * <p>The reason why the client is disconnected. If the thing has been disconnected for approximately an hour, the <code>disconnectReason</code> value might be missing.</p>
   */
  disconnectReason?: string;
}

/**
 * @public
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  /**
   * @public
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * @public
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * @public
   * <p>Thing group names.</p>
   */
  thingGroupNames?: string[];

  /**
   * @public
   * <p>The attributes.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>The unnamed shadow and named shadow.</p>
   *          <p>For more information about shadows, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html">IoT Device Shadow service.</a>
   *          </p>
   */
  shadow?: string;

  /**
   * @public
   * <p>Contains Device Defender data.</p>
   *          <p>For more information about Device Defender, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html">Device Defender</a>. </p>
   */
  deviceDefender?: string;

  /**
   * @public
   * <p>Indicates whether the thing is connected to the Amazon Web Services IoT Core service.</p>
   */
  connectivity?: ThingConnectivity;
}

/**
 * @public
 */
export interface SearchIndexResponse {
  /**
   * @public
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The things that match the search query.</p>
   */
  things?: ThingDocument[];

  /**
   * @public
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: ThingGroupDocument[];
}

/**
 * @public
 */
export interface SetDefaultAuthorizerRequest {
  /**
   * @public
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultAuthorizerResponse {
  /**
   * @public
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * @public
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

/**
 * @public
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * @public
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * @public
   * <p>The policy version ID.</p>
   */
  policyVersionId: string | undefined;
}

/**
 * @public
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  /**
   * @public
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The log level.</p>
   */
  logLevel?: LogLevel;
}

/**
 * @public
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  /**
   * @public
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingLevelRequest {
  /**
   * @public
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;

  /**
   * @public
   * <p>The log level.</p>
   */
  logLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingOptionsRequest {
  /**
   * @public
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel;

  /**
   * @public
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskRequest {
  /**
   * @public
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply
   *       them to a type of audit check, to all findings from an audit, or to a
   *       specific set of
   *       findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * @public
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.</p>
   */
  auditCheckToActionsMapping: Record<string, string[]> | undefined;

  /**
   * @public
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskResponse {
  /**
   * @public
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskRequest {
  /**
   * @public
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId: string | undefined;

  /**
   * @public
   * <p>
   *       Specifies the ML Detect findings to which the mitigation actions are applied.
   *     </p>
   */
  target: DetectMitigationActionsTaskTarget | undefined;

  /**
   * @public
   * <p>
   *       The actions to be performed when a device has unexpected behavior.
   *     </p>
   */
  actions: string[] | undefined;

  /**
   * @public
   * <p>
   *       Specifies the time period of which violation events occurred between.
   *     </p>
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;

  /**
   * @public
   * <p>
   *       Specifies to list only active violations.
   *     </p>
   */
  includeOnlyActiveViolations?: boolean;

  /**
   * @public
   * <p>
   *       Specifies to include suppressed alerts.
   *     </p>
   */
  includeSuppressedAlerts?: boolean;

  /**
   * @public
   * <p>
   *       Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *     </p>
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskResponse {
  /**
   * @public
   * <p>
   *       The unique identifier of the task.
   *     </p>
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskRequest {
  /**
   * @public
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: string[] | undefined;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskResponse {
  /**
   * @public
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskRequest {
  /**
   * @public
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * @public
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket: string | undefined;

  /**
   * @public
   * <p>The name of input file within the S3 bucket. This file contains a newline delimited
   * 			JSON file. Each line contains the parameter values to provision one device
   * 			(thing).</p>
   */
  inputFileKey: string | undefined;

  /**
   * @public
   * <p>The IAM role ARN that grants permission the input file.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskResponse {
  /**
   * @public
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

/**
 * @public
 */
export interface StopThingRegistrationTaskRequest {
  /**
   * @public
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface StopThingRegistrationTaskResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestAuthorizationRequest {
  /**
   * @public
   * <p>The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).</p>
   */
  principal?: string;

  /**
   * @public
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * @public
   * <p>A list of authorization info objects. Simulating authorization will create a response
   *          for each <code>authInfo</code> object in the list.</p>
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * @public
   * <p>The MQTT client ID.</p>
   */
  clientId?: string;

  /**
   * @public
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are attached to the principal being authorized.</p>
   */
  policyNamesToAdd?: string[];

  /**
   * @public
   * <p>When testing custom authorization, the policies specified here are treated as if they
   *          are not attached to the principal being authorized.</p>
   */
  policyNamesToSkip?: string[];
}

/**
 * @public
 */
export interface TestAuthorizationResponse {
  /**
   * @public
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

/**
 * @public
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
 * @public
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  /**
   * @public
   * <p>The header keys and values in an HTTP authorization request.</p>
   */
  headers?: Record<string, string>;

  /**
   * @public
   * <p>The query string keys and values in an HTTP authorization request.</p>
   */
  queryString?: string;
}

/**
 * @public
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  /**
   * @public
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;

  /**
   * @public
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * @public
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;
}

/**
 * @public
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  /**
   * @public
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * @public
   * <p>The custom authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * @public
   * <p>The token returned by your custom authentication service.</p>
   */
  token?: string;

  /**
   * @public
   * <p>The signature made with the token and your custom authentication service's private
   *          key. This value must be Base-64-encoded.</p>
   */
  tokenSignature?: string;

  /**
   * @public
   * <p>Specifies a test HTTP authorization request.</p>
   */
  httpContext?: HttpContext;

  /**
   * @public
   * <p>Specifies a test MQTT authorization request.</p>
   */
  mqttContext?: MqttContext;

  /**
   * @public
   * <p>Specifies a test TLS authorization request.</p>
   */
  tlsContext?: TlsContext;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * @public
   * <p>True if the token is authenticated, otherwise false.</p>
   */
  isAuthenticated?: boolean;

  /**
   * @public
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * @public
   * <p>IAM policy documents.</p>
   */
  policyDocuments?: string[];

  /**
   * @public
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   */
  refreshAfterInSeconds?: number;

  /**
   * @public
   * <p>The number of seconds after which the connection is terminated.</p>
   */
  disconnectAfterInSeconds?: number;
}

/**
 * @public
 * <p>The input for the TransferCertificate operation.</p>
 */
export interface TransferCertificateRequest {
  /**
   * @public
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account.</p>
   */
  targetAwsAccount: string | undefined;

  /**
   * @public
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

/**
 * @public
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateResponse {
  /**
   * @public
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of the keys of the tags to be removed from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountAuditConfigurationRequest {
  /**
   * @public
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
   * @public
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: Partial<Record<AuditNotificationType, AuditNotificationTarget>>;

  /**
   * @public
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *          <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *          <p>You
   *       cannot
   *       disable a check if
   *       it's
   *       used by any scheduled audit. You must first delete the check from the scheduled audit or
   *       delete the scheduled audit itself.</p>
   *          <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}

/**
 * @public
 */
export interface UpdateAccountAuditConfigurationResponse {}

/**
 * @public
 */
export interface UpdateAuditSuppressionRequest {
  /**
   * @public
   * <p>An audit check name. Checks must be enabled
   *         for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *         of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *         to select which checks are enabled.)</p>
   */
  checkName: string | undefined;

  /**
   * @public
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * @public
   * <p>
   *       The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *     </p>
   */
  expirationDate?: Date;

  /**
   * @public
   * <p>
   *       Indicates whether a suppression should exist indefinitely or not.
   *     </p>
   */
  suppressIndefinitely?: boolean;

  /**
   * @public
   * <p>
   *       The description of the audit suppression.
   *     </p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateAuditSuppressionResponse {}

/**
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * @public
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * @public
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * @public
   * <p>The key used to extract the token from the HTTP headers. </p>
   */
  tokenKeyName?: string;

  /**
   * @public
   * <p>The public keys used to verify the token signature.</p>
   */
  tokenSigningPublicKeys?: Record<string, string>;

  /**
   * @public
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus;

  /**
   * @public
   * <p>When <code>true</code>, the result from the authorizer’s Lambda function is
   * 	  cached for the time specified in <code>refreshAfterInSeconds</code>. The cached
   * 	  result is used while the device reuses the same HTTP connection.</p>
   */
  enableCachingForHttp?: boolean;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * @public
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * @public
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;
}

/**
 * @public
 */
export interface UpdateBillingGroupRequest {
  /**
   * @public
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * @public
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties: BillingGroupProperties | undefined;

  /**
   * @public
   * <p>The expected version of the billing group. If the version of the billing group does
   * 			not match the expected version specified in the request, the
   * 				<code>UpdateBillingGroup</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateBillingGroupResponse {
  /**
   * @public
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
}

/**
 * @public
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateRequest {
  /**
   * @public
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;

  /**
   * @public
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus?: CACertificateStatus;

  /**
   * @public
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus;

  /**
   * @public
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * @public
   * <p>If true, removes auto registration.</p>
   */
  removeAutoRegistration?: boolean;
}

/**
 * @public
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateRequest {
  /**
   * @public
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * @public
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER  or PENDING_ACTIVATION will result
   *          in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They
   *          are not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCustomMetricRequest {
  /**
   * @public
   * <p> The name of the custom metric.
   *       Cannot be updated. </p>
   */
  metricName: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface UpdateCustomMetricResponse {
  /**
   * @public
   * <p>
   *       The name of the custom metric.
   *     </p>
   */
  metricName?: string;

  /**
   * @public
   * <p>
   *       The Amazon Resource Number (ARN) of the custom metric.
   *     </p>
   */
  metricArn?: string;

  /**
   * @public
   * <p> The type of the custom metric. </p>
   *          <important>
   *             <p>The type <code>number</code> only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.</p>
   *          </important>
   */
  metricType?: CustomMetricType;

  /**
   * @public
   * <p>
   *       A friendly name in the console for the custom metric
   *     </p>
   */
  displayName?: string;

  /**
   * @public
   * <p>
   *       The creation date of the custom metric in milliseconds since epoch.
   *     </p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>
   *       The time the custom metric was last modified in milliseconds since epoch.
   *     </p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface UpdateDimensionRequest {
  /**
   * @public
   * <p>A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").</p>
   */
  stringValues: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDimensionResponse {
  /**
   * @public
   * <p>A unique identifier for the dimension.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource
   *       Name (ARN)of
   *       the created dimension.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The type of the dimension.</p>
   */
  type?: DimensionType;

  /**
   * @public
   * <p>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</p>
   */
  stringValues?: string[];

  /**
   * @public
   * <p>The date and time, in milliseconds since epoch, when the dimension was initially created.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date and time, in milliseconds since epoch, when the dimension was most recently updated.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationRequest {
  /**
   * @public
   * <p>The name of the domain configuration to be updated.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * @public
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * @public
   * <p>The status to which the domain configuration should be updated.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus;

  /**
   * @public
   * <p>Removes the authorization configuration from a domain.</p>
   */
  removeAuthorizerConfig?: boolean;

  /**
   * @public
   * <p>An object that specifies the TLS configuration for a domain.</p>
   */
  tlsConfig?: TlsConfig;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationResponse {
  /**
   * @public
   * <p>The name of the domain configuration that was updated.</p>
   */
  domainConfigurationName?: string;

  /**
   * @public
   * <p>The ARN of the domain configuration that was updated.</p>
   */
  domainConfigurationArn?: string;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupRequest {
  /**
   * @public
   * <p>The name of the dynamic thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * @public
   * <p>The dynamic thing group properties to update.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * @public
   * <p>The expected version of the dynamic thing group to update.</p>
   */
  expectedVersion?: number;

  /**
   * @public
   * <p>The dynamic thing group index to update.</p>
   *          <note>
   *             <p>Currently one index is supported: <code>AWS_Things</code>.</p>
   *          </note>
   */
  indexName?: string;

  /**
   * @public
   * <p>The dynamic thing group search query string to update.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The dynamic thing group query version to update.</p>
   *          <note>
   *             <p>Currently one query version is supported: "2017-09-30". If not specified, the
   * 				query version defaults to this value.</p>
   *          </note>
   */
  queryVersion?: string;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupResponse {
  /**
   * @public
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

/**
 * @public
 */
export interface UpdateEventConfigurationsRequest {
  /**
   * @public
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: Partial<Record<EventType, Configuration>>;
}

/**
 * @public
 */
export interface UpdateEventConfigurationsResponse {}

/**
 * @public
 */
export interface UpdateFleetMetricRequest {
  /**
   * @public
   * <p>The name of the fleet metric to update.</p>
   */
  metricName: string | undefined;

  /**
   * @public
   * <p>The search query string.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The type of the aggregation query.</p>
   */
  aggregationType?: AggregationType;

  /**
   * @public
   * <p>The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.</p>
   */
  period?: number;

  /**
   * @public
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * @public
   * <p>The description of the fleet metric.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The version of the query.</p>
   */
  queryVersion?: string;

  /**
   * @public
   * <p>The name of the index to search.</p>
   */
  indexName: string | undefined;

  /**
   * @public
   * <p>Used to support unit transformation such as milliseconds to seconds. The unit must be
   *       supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>.</p>
   */
  unit?: FleetMetricUnit;

  /**
   * @public
   * <p>The expected version of the fleet metric record in the registry.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateIndexingConfigurationRequest {
  /**
   * @public
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;

  /**
   * @public
   * <p>Thing group indexing configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}

/**
 * @public
 */
export interface UpdateIndexingConfigurationResponse {}

/**
 * @public
 */
export interface UpdateJobRequest {
  /**
   * @public
   * <p>The ID of the job to be updated.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * @public
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * @public
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * @public
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to <code>IN_PROGRESS</code>.
   *             If the job execution status is not set to another terminal state before the time expires, it will be automatically set to <code>TIMED_OUT</code>. </p>
   */
  timeoutConfig?: TimeoutConfig;

  /**
   * @public
   * <p>The namespace used to indicate that a job is a customer-managed job.</p>
   *          <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that
   *             contain the value in the following format.</p>
   *          <p>
   *             <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code>
   *          </p>
   *          <note>
   *             <p>The <code>namespaceId</code> feature is in public preview.</p>
   *          </note>
   */
  namespaceId?: string;

  /**
   * @public
   * <p>Allows you to create the criteria to retry a job.</p>
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}

/**
 * @public
 */
export interface UpdateMitigationActionRequest {
  /**
   * @public
   * <p>The friendly name for the mitigation action. You cannot change the name by using
   *         <code>UpdateMitigationAction</code>. Instead, you must delete and
   *       recreate the
   *       mitigation action with the new name.</p>
   */
  actionName: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;
}

/**
 * @public
 */
export interface UpdateMitigationActionResponse {
  /**
   * @public
   * <p>The ARN for the new mitigation action.</p>
   */
  actionArn?: string;

  /**
   * @public
   * <p>A unique identifier for the mitigation action.</p>
   */
  actionId?: string;
}

/**
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * @public
   * <p>The name of the target software package.</p>
   */
  packageName: string | undefined;

  /**
   * @public
   * <p>The package description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name of the default package version.</p>
   *          <p>
   *             <b>Note:</b> You cannot name a <code>defaultVersion</code>
   *        and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
   */
  defaultVersionName?: string;

  /**
   * @public
   * <p>Indicates whether you want to remove the named default package version from the software package.
   *       Set as <code>true</code> to remove the default package version. </p>
   *          <p>
   *             <b>Note:</b> You cannot name a <code>defaultVersion</code>
   *        and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
   */
  unsetDefaultVersion?: boolean;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageResponse {}

/**
 * @public
 */
export interface UpdatePackageConfigurationRequest {
  /**
   * @public
   * <p>Configuration to manage job's package version reporting. This updates the thing's reserved named shadow that the job targets.</p>
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageConfigurationResponse {}

/**
 * @public
 * @enum
 */
export const PackageVersionAction = {
  DEPRECATE: "DEPRECATE",
  PUBLISH: "PUBLISH",
} as const;

/**
 * @public
 */
export type PackageVersionAction = (typeof PackageVersionAction)[keyof typeof PackageVersionAction];

/**
 * @public
 */
export interface UpdatePackageVersionRequest {
  /**
   * @public
   * <p>The name of the associated software package.</p>
   */
  packageName: string | undefined;

  /**
   * @public
   * <p>The name of the target package version.</p>
   */
  versionName: string | undefined;

  /**
   * @public
   * <p>The package version description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Metadata that can be used to define a package version’s configuration. For example, the Amazon S3 file location, configuration options that are being sent to the device or fleet. </p>
   *          <p>
   *             <b>Note:</b> Attributes can be updated only when the package version
   *       is in a draft state.</p>
   *          <p>The combined size of all the attributes on a package version is limited to 3KB.</p>
   */
  attributes?: Record<string, string>;

  /**
   * @public
   * <p>The status that the package version should be assigned. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.</p>
   */
  action?: PackageVersionAction;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *       Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdatePackageVersionResponse {}

/**
 * @public
 */
export interface UpdateProvisioningTemplateRequest {
  /**
   * @public
   * <p>The name of the provisioning template.</p>
   */
  templateName: string | undefined;

  /**
   * @public
   * <p>The description of the provisioning template.</p>
   */
  description?: string;

  /**
   * @public
   * <p>True to enable the provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * @public
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * @public
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * @public
   * <p>Updates the pre-provisioning hook template. Only supports template of type
   *             <code>FLEET_PROVISIONING</code>. For more information about provisioning template types,
   *          see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type">type</a>.</p>
   */
  preProvisioningHook?: ProvisioningHook;

  /**
   * @public
   * <p>Removes pre-provisioning hook template.</p>
   */
  removePreProvisioningHook?: boolean;
}

/**
 * @public
 */
export interface UpdateProvisioningTemplateResponse {}

/**
 * @public
 */
export interface UpdateRoleAliasRequest {
  /**
   * @public
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

  /**
   * @public
   * <p>The role ARN.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The number of seconds the credential will be valid.</p>
   *          <p>This value must be less than or equal to the maximum session duration of the IAM role
   *          that the role alias references.</p>
   */
  credentialDurationSeconds?: number;
}

/**
 * @public
 */
export interface UpdateRoleAliasResponse {
  /**
   * @public
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * @public
   * <p>The role alias ARN.</p>
   */
  roleAliasArn?: string;
}

/**
 * @public
 */
export interface UpdateScheduledAuditRequest {
  /**
   * @public
   * <p>How often the scheduled audit takes
   *       place,
   *       either <code>DAILY</code>,
   *       <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the
   *       system.</p>
   */
  frequency?: AuditFrequency;

  /**
   * @public
   * <p>The day of the month on which the scheduled audit takes place.
   *       This
   *       can
   *       be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to
   *             <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit
   *       takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * @public
   * <p>The day of the week on which the scheduled audit takes place.
   *       This
   *       can
   *       be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the
   *             "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.</p>
   */
  dayOfWeek?: DayOfWeek;

  /**
   * @public
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];

  /**
   * @public
   * <p>The name of the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledAuditResponse {
  /**
   * @public
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * @public
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;

  /**
   * @public
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * @public
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * @public
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>>;

  /**
   * @public
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
   * @public
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @public
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * @public
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * @public
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * @public
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateSecurityProfileResponse {
  /**
   * @public
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * @public
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * @public
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * @public
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>>;

  /**
   * @public
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
   * @public
   * <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p>
   */
  additionalMetricsToRetainV2?: MetricToRetain[];

  /**
   * @public
   * <p>The updated version of the security profile.</p>
   */
  version?: number;

  /**
   * @public
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;
}

/**
 * @public
 */
export interface UpdateStreamRequest {
  /**
   * @public
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * @public
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The files associated with the stream.</p>
   */
  files?: StreamFile[];

  /**
   * @public
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface UpdateStreamResponse {
  /**
   * @public
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * @public
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

/**
 * @public
 * <p>The input for the UpdateThing operation.</p>
 */
export interface UpdateThingRequest {
  /**
   * @public
   * <p>The name of the thing to update.</p>
   *          <p>You can't change a thing's name. To change a thing's name, you must create a
   * 			new thing, give it the new name, and then delete the old thing.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * @public
   * <p>A list of thing attributes, a JSON string containing name-value pairs. For
   * 			example:</p>
   *          <p>
   *             <code>\{\"attributes\":\{\"name1\":\"value2\"\}\}</code>
   *          </p>
   *          <p>This data is used to add new attributes or update existing attributes.</p>
   */
  attributePayload?: AttributePayload;

  /**
   * @public
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>UpdateThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * @public
   * <p>Remove a thing type association. If <b>true</b>, the
   * 			association is removed.</p>
   */
  removeThingType?: boolean;
}

/**
 * @public
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {}

/**
 * @public
 */
export interface UpdateThingGroupRequest {
  /**
   * @public
   * <p>The thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * @public
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * @public
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;
}

/**
 * @public
 */
export interface UpdateThingGroupResponse {
  /**
   * @public
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingRequest {
  /**
   * @public
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: string[];

  /**
   * @public
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: string[];

  /**
   * @public
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingResponse {}

/**
 * @public
 */
export interface UpdateTopicRuleDestinationRequest {
  /**
   * @public
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;

  /**
   * @public
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
  status: TopicRuleDestinationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateTopicRuleDestinationResponse {}

/**
 * @public
 */
export interface ValidateSecurityProfileBehaviorsRequest {
  /**
   * @public
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Behavior[] | undefined;
}

/**
 * @public
 * <p>Information about an error found in a behavior specification.</p>
 */
export interface ValidationError {
  /**
   * @public
   * <p>The description of an error found in the behaviors.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * @public
   * <p>True if the behaviors were valid.</p>
   */
  valid?: boolean;

  /**
   * @public
   * <p>The list of any errors found in the behaviors.</p>
   */
  validationErrors?: ValidationError[];
}

/**
 * @internal
 */
export const UpdatePackageRequestFilterSensitiveLog = (obj: UpdatePackageRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePackageVersionRequestFilterSensitiveLog = (obj: UpdatePackageVersionRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});
