// smithy-typescript generated code
import type {
  AlertTargetType,
  ApplicationProtocol,
  AuditFrequency,
  AuditNotificationType,
  AuthenticationType,
  AuthorizerStatus,
  AutoRegistrationStatus,
  BehaviorCriteriaType,
  CACertificateStatus,
  CertificateMode,
  CertificateProviderOperation,
  CertificateStatus,
  CustomMetricType,
  DayOfWeek,
  DimensionType,
  DomainConfigurationStatus,
  EncryptionType,
  EventType,
  FleetMetricUnit,
  InfluxDBSecretType,
  InfluxDBVersion,
  LogLevel,
  LogTargetType,
  PackageVersionAction,
  ReportType,
  Status,
  ThingPrincipalType,
  TopicRuleDestinationStatus,
  VerificationState,
  ViolationEventType,
} from "./enums";
import type {
  AbortConfig,
  AggregationType,
  AlertTarget,
  AttributePayload,
  AuditCheckConfiguration,
  AuditMitigationActionsTaskTarget,
  AuditNotificationTarget,
  AuthInfo,
  AuthorizerConfig,
  AuthResult,
  Behavior,
  BillingGroupProperties,
  ClientCertificateConfig,
  JobExecutionsRetryConfig,
  JobExecutionsRolloutConfig,
  MetricsExportConfig,
  MetricToRetain,
  MetricValue,
  MitigationActionParams,
  PackageVersionArtifact,
  PresignedUrlConfig,
  ProvisioningHook,
  ResourceIdentifier,
  ServerCertificateConfig,
  StreamFile,
  Tag,
  ThingGroupProperties,
  ThingTypeProperties,
  TimeoutConfig,
  TlsConfig,
  TopicRulePayload,
  ViolationEventAdditionalInfo,
} from "./models_0";
import type {
  Configuration,
  DetectMitigationActionsTaskTarget,
  GroupNameAndArn,
  LogEventConfiguration,
  RegistrationConfig,
  SecurityProfileTarget,
  StreamSummary,
  ThingGroupIndexingConfiguration,
  ThingIndexingConfiguration,
  ThingTypeMetadata,
  VersionUpdateByJobsConfig,
  ViolationEventOccurrenceRange,
} from "./models_1";

/**
 * @public
 */
export interface ListStreamsResponse {
  /**
   * A list of streams.
   *
   * @public
   */
  streams?: StreamSummary[] | undefined;

  /**
   * A token used to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  marker?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  pageSize?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetsForPolicyResponse {
  /**
   * The policy targets.
   *
   * @public
   */
  targets?: string[] | undefined;

  /**
   * A marker used to get the next set of results.
   *
   * @public
   */
  nextMarker?: string | undefined;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileRequest {
  /**
   * The security profile.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTargetsForSecurityProfileResponse {
  /**
   * The thing groups to which the security profile is attached.
   *
   * @public
   */
  securityProfileTargets?: SecurityProfileTarget[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingGroupsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A filter that limits the results to those with the specified parent group.
   *
   * @public
   */
  parentGroup?: string | undefined;

  /**
   * A filter that limits the results to those with the specified name prefix.
   *
   * @public
   */
  namePrefixFilter?: string | undefined;

  /**
   * If true, return child groups as well.
   *
   * @public
   */
  recursive?: boolean | undefined;
}

/**
 * @public
 */
export interface ListThingGroupsResponse {
  /**
   * The thing groups.
   *
   * @public
   */
  thingGroups?: GroupNameAndArn[] | undefined;

  /**
   * The token to use to get the next set of results. Will not be returned if operation has returned all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingGroupsForThingRequest {
  /**
   * The thing name.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListThingGroupsForThingResponse {
  /**
   * The thing groups.
   *
   * @public
   */
  thingGroups?: GroupNameAndArn[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListThingPrincipal operation.
 *
 * @public
 */
export interface ListThingPrincipalsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * The output from the ListThingPrincipals operation.
 *
 * @public
 */
export interface ListThingPrincipalsResponse {
  /**
   * The principals associated with the thing.
   *
   * @public
   */
  principals?: string[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingPrincipalsV2Request {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The type of the relation you want to filter in the response. If no value is provided in this field, the response will list all principals, including both the `EXCLUSIVE_THING` and `NON_EXCLUSIVE_THING` attachment types.
   *
   * - `EXCLUSIVE_THING` - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal.
   *
   * - `NON_EXCLUSIVE_THING` - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.
   *
   * @public
   */
  thingPrincipalType?: ThingPrincipalType | undefined;
}

/**
 * An object that represents the principal and the type of relation it has with the thing.
 *
 * @public
 */
export interface ThingPrincipalObject {
  /**
   * The principal of the thing principal object.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * The type of the relation you want to specify when you attach a principal to a thing. The value defaults to `NON_EXCLUSIVE_THING`.
   *
   * - `EXCLUSIVE_THING` - Attaches the specified principal to the specified thing, exclusively. The thing will be the only thing that’s attached to the principal.
   *
   * - `NON_EXCLUSIVE_THING` - Attaches the specified principal to the specified thing. Multiple things can be attached to the principal.
   *
   * @public
   */
  thingPrincipalType?: ThingPrincipalType | undefined;
}

/**
 * @public
 */
export interface ListThingPrincipalsV2Response {
  /**
   * A list of `thingPrincipalObject` that represents the principal and the type of relation it has with the thing.
   *
   * @public
   */
  thingPrincipalObjects?: ThingPrincipalObject[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsRequest {
  /**
   * The id of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The type of task report.
   *
   * @public
   */
  reportType: ReportType | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListThingRegistrationTaskReportsResponse {
  /**
   * Links to the task resources.
   *
   * @public
   */
  resourceLinks?: string[] | undefined;

  /**
   * The type of task report.
   *
   * @public
   */
  reportType?: ReportType | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The status of the bulk thing provisioning task.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface ListThingRegistrationTasksResponse {
  /**
   * A list of bulk thing provisioning task IDs.
   *
   * @public
   */
  taskIds?: string[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListThings operation.
 *
 * @public
 */
export interface ListThingsRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The attribute name used to search for things.
   *
   * @public
   */
  attributeName?: string | undefined;

  /**
   * The attribute value used to search for things.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * The name of the thing type used to search for things.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * When `true`, the action returns the thing resources with attribute values that start with the `attributeValue` provided.
   *
   * When `false`, or not present, the action returns only the thing resources with attribute values that match the entire `attributeValue` provided.
   *
   * @public
   */
  usePrefixAttributeValue?: boolean | undefined;
}

/**
 * The properties of the thing, including thing name, thing type name, and a list of thing attributes.
 *
 * @public
 */
export interface ThingAttribute {
  /**
   * The name of the thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The name of the thing type, if the thing has been associated with a type.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The thing ARN.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * A list of thing attributes which are name-value pairs.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The version of the thing record in the registry.
   *
   * @public
   */
  version?: number | undefined;
}

/**
 * The output from the ListThings operation.
 *
 * @public
 */
export interface ListThingsResponse {
  /**
   * The things.
   *
   * @public
   */
  things?: ThingAttribute[] | undefined;

  /**
   * The token to use to get the next set of results. Will not be returned if operation has returned all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListThingsInBillingGroupResponse {
  /**
   * A list of things in the billing group.
   *
   * @public
   */
  things?: string[] | undefined;

  /**
   * The token to use to get the next set of results. Will not be returned if operation has returned all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThingsInThingGroupRequest {
  /**
   * The thing group name.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * When true, list things in this thing group and in all child groups as well.
   *
   * @public
   */
  recursive?: boolean | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListThingsInThingGroupResponse {
  /**
   * The things in the specified thing group.
   *
   * @public
   */
  things?: string[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListThingTypes operation.
 *
 * @public
 */
export interface ListThingTypesRequest {
  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in this operation.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName?: string | undefined;
}

/**
 * The definition of the thing type, including thing type name and description.
 *
 * @public
 */
export interface ThingTypeDefinition {
  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * The thing type ARN.
   *
   * @public
   */
  thingTypeArn?: string | undefined;

  /**
   * The ThingTypeProperties for the thing type.
   *
   * @public
   */
  thingTypeProperties?: ThingTypeProperties | undefined;

  /**
   * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
   *
   * @public
   */
  thingTypeMetadata?: ThingTypeMetadata | undefined;
}

/**
 * The output for the ListThingTypes operation.
 *
 * @public
 */
export interface ListThingTypesResponse {
  /**
   * The thing types.
   *
   * @public
   */
  thingTypes?: ThingTypeDefinition[] | undefined;

  /**
   * The token for the next set of results. Will not be returned if operation has returned all results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsRequest {
  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about an HTTP URL destination.
 *
 * @public
 */
export interface HttpUrlDestinationSummary {
  /**
   * The URL used to confirm ownership of or access to the HTTP topic rule destination URL.
   *
   * @public
   */
  confirmationUrl?: string | undefined;
}

/**
 * A summary of an InfluxDB topic rule destination, as returned by `ListTopicRuleDestinations`. For the full set of destination properties, see `InfluxDBDestinationProperties`.
 *
 * @public
 */
export interface InfluxDBDestinationSummary {
  /**
   * The URL of the InfluxDB instance that the destination writes to.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The major version of the InfluxDB instance. Valid values are `V2` and `V3`.
   *
   * @public
   */
  influxDBVersion?: InfluxDBVersion | undefined;

  /**
   * The ARN or name of the Amazon Web Services Secrets Manager secret that contains the InfluxDB API token.
   *
   * @public
   */
  secretId?: string | undefined;

  /**
   * The type of the secret that contains the InfluxDB API token. Valid values are `SecretString` and `SecretBinary`.
   *
   * @public
   */
  secretType?: InfluxDBSecretType | undefined;

  /**
   * The key that is read from the secret value when the secret contains a JSON object.
   *
   * @public
   */
  secretKey?: string | undefined;
}

/**
 * The summary of a virtual private cloud (VPC) destination.
 *
 * @public
 */
export interface VpcDestinationSummary {
  /**
   * The subnet IDs of the VPC destination.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security groups of the VPC destination.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * Information about the topic rule destination.
 *
 * @public
 */
export interface TopicRuleDestinationSummary {
  /**
   * The topic rule destination ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the topic rule destination. Valid values are:
   *
   * - **IN_PROGRESS**
   *
   *   A topic rule destination was created but has not been confirmed. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * - **ENABLED**
   *
   *   Confirmation was completed, and traffic to this destination is allowed. You can set `status` to `DISABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **DISABLED**
   *
   *   Confirmation was completed, and traffic to this destination is not allowed. You can set `status` to `ENABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **ERROR**
   *
   *   Confirmation could not be completed, for example if the confirmation timed out. You can call `GetTopicRuleDestination` for details about the error. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * @public
   */
  status?: TopicRuleDestinationStatus | undefined;

  /**
   * The date and time when the topic rule destination was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the topic rule destination was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The reason the topic rule destination is in the current status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Information about the HTTP URL.
   *
   * @public
   */
  httpUrlSummary?: HttpUrlDestinationSummary | undefined;

  /**
   * Information about the virtual private cloud (VPC) connection.
   *
   * @public
   */
  vpcDestinationSummary?: VpcDestinationSummary | undefined;

  /**
   * A summary of an InfluxDB topic rule destination, as returned by `ListTopicRuleDestinations`.
   *
   * @public
   */
  influxDBSummary?: InfluxDBDestinationSummary | undefined;
}

/**
 * @public
 */
export interface ListTopicRuleDestinationsResponse {
  /**
   * Information about a topic rule destination.
   *
   * @public
   */
  destinationSummaries?: TopicRuleDestinationSummary[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for the ListTopicRules operation.
 *
 * @public
 */
export interface ListTopicRulesRequest {
  /**
   * The topic.
   *
   * @public
   */
  topic?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies whether the rule is disabled.
   *
   * @public
   */
  ruleDisabled?: boolean | undefined;
}

/**
 * Describes a rule.
 *
 * @public
 */
export interface TopicRuleListItem {
  /**
   * The rule ARN.
   *
   * @public
   */
  ruleArn?: string | undefined;

  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName?: string | undefined;

  /**
   * The pattern for the topic names that apply.
   *
   * @public
   */
  topicPattern?: string | undefined;

  /**
   * The date and time the rule was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Specifies whether the rule is disabled.
   *
   * @public
   */
  ruleDisabled?: boolean | undefined;
}

/**
 * The output from the ListTopicRules operation.
 *
 * @public
 */
export interface ListTopicRulesResponse {
  /**
   * The rules.
   *
   * @public
   */
  rules?: TopicRuleListItem[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsRequest {
  /**
   * The type of resource for which you are configuring logging. Must be `DEFAULT`, `THING_GROUP`, `CLIENT_ID`, `SOURCE_IP`, or `PRINCIPAL_ID`.
   *
   * @public
   */
  targetType?: LogTargetType | undefined;

  /**
   * To retrieve the next set of results, the `nextToken` value from a previous response; otherwise **null** to receive the first set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A log target.
 *
 * @public
 */
export interface LogTarget {
  /**
   * The target type.
   *
   * @public
   */
  targetType: LogTargetType | undefined;

  /**
   * The target name.
   *
   * @public
   */
  targetName?: string | undefined;
}

/**
 * The target configuration.
 *
 * @public
 */
export interface LogTargetConfiguration {
  /**
   * A log target
   *
   * @public
   */
  logTarget?: LogTarget | undefined;

  /**
   * The logging level.
   *
   * @public
   */
  logLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface ListV2LoggingLevelsResponse {
  /**
   * The logging configuration for a target.
   *
   * @public
   */
  logTargetConfigurations?: LogTargetConfiguration[] | undefined;

  /**
   * The token to use to get the next set of results, or **null** if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListViolationEventsRequest {
  /**
   * The start time for the alerts to be listed.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time for the alerts to be listed.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * A filter to limit results to those alerts caused by the specified thing.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * A filter to limit results to those alerts generated by the specified security profile.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The criteria for a behavior.
   *
   * @public
   */
  behaviorCriteriaType?: BehaviorCriteriaType | undefined;

  /**
   * A list of all suppressed alerts.
   *
   * @public
   */
  listSuppressedAlerts?: boolean | undefined;

  /**
   * The verification state of the violation (detect alarm).
   *
   * @public
   */
  verificationState?: VerificationState | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return at one time.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a Device Defender security profile behavior violation.
 *
 * @public
 */
export interface ViolationEvent {
  /**
   * The ID of the violation event.
   *
   * @public
   */
  violationId?: string | undefined;

  /**
   * The name of the thing responsible for the violation event.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The name of the security profile whose behavior was violated.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The behavior that was violated.
   *
   * @public
   */
  behavior?: Behavior | undefined;

  /**
   * The value of the metric (the measurement).
   *
   * @public
   */
  metricValue?: MetricValue | undefined;

  /**
   * The details of a violation event.
   *
   * @public
   */
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo | undefined;

  /**
   * The type of violation event.
   *
   * @public
   */
  violationEventType?: ViolationEventType | undefined;

  /**
   * The verification state of the violation (detect alarm).
   *
   * @public
   */
  verificationState?: VerificationState | undefined;

  /**
   * The description of the verification state of the violation.
   *
   * @public
   */
  verificationStateDescription?: string | undefined;

  /**
   * The time the violation event occurred.
   *
   * @public
   */
  violationEventTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListViolationEventsResponse {
  /**
   * The security profile violation alerts issued for this account during the given time period, potentially filtered by security profile, behavior violated, or thing (device) violating.
   *
   * @public
   */
  violationEvents?: ViolationEvent[] | undefined;

  /**
   * A token that can be used to retrieve the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationRequest {
  /**
   * The violation ID.
   *
   * @public
   */
  violationId: string | undefined;

  /**
   * The verification state of the violation.
   *
   * @public
   */
  verificationState: VerificationState | undefined;

  /**
   * The description of the verification state of the violation (detect alarm).
   *
   * @public
   */
  verificationStateDescription?: string | undefined;
}

/**
 * @public
 */
export interface PutVerificationStateOnViolationResponse {}

/**
 * The input to the RegisterCACertificate operation.
 *
 * @public
 */
export interface RegisterCACertificateRequest {
  /**
   * The CA certificate.
   *
   * @public
   */
  caCertificate: string | undefined;

  /**
   * The private key verification certificate. If `certificateMode` is `SNI_ONLY`, the `verificationCertificate` field must be empty. If `certificateMode` is `DEFAULT` or not provided, the `verificationCertificate` field must not be empty.
   *
   * @public
   */
  verificationCertificate?: string | undefined;

  /**
   * A boolean value that specifies if the CA certificate is set to active.
   *
   * Valid values: `ACTIVE | INACTIVE`
   *
   * @public
   */
  setAsActive?: boolean | undefined;

  /**
   * Allows this CA certificate to be used for auto registration of device certificates.
   *
   * @public
   */
  allowAutoRegistration?: boolean | undefined;

  /**
   * Information about the registration configuration.
   *
   * @public
   */
  registrationConfig?: RegistrationConfig | undefined;

  /**
   * Metadata which can be used to manage the CA certificate.
   *
   * > **Note:**
   * >
   * > For URI Request parameters use format: ...key1=value1&key2=value2...
   * >
   * > For the CLI command-line parameter use format: &&tags "key1=value1&key2=value2..."
   * >
   * > For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * Describes the certificate mode in which the Certificate Authority (CA) will be registered. If the `verificationCertificate` field is not provided, set `certificateMode` to be `SNI_ONLY`. If the `verificationCertificate` field is provided, set `certificateMode` to be `DEFAULT`. When `certificateMode` is not provided, it defaults to `DEFAULT`. All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA. For more information about certificate mode for device certificates, see [certificate mode](https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode).
   *
   * @public
   */
  certificateMode?: CertificateMode | undefined;
}

/**
 * The output from the RegisterCACertificateResponse operation.
 *
 * @public
 */
export interface RegisterCACertificateResponse {
  /**
   * The CA certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The CA certificate identifier.
   *
   * @public
   */
  certificateId?: string | undefined;
}

/**
 * The input to the RegisterCertificate operation.
 *
 * @public
 */
export interface RegisterCertificateRequest {
  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem: string | undefined;

  /**
   * The CA certificate used to sign the device certificate being registered.
   *
   * @public
   */
  caCertificatePem?: string | undefined;

  /**
   * A boolean value that specifies if the certificate is set to active.
   *
   * Valid values: `ACTIVE | INACTIVE`
   *
   * @deprecated deprecated.
   * @public
   */
  setAsActive?: boolean | undefined;

  /**
   * The status of the register certificate request. Valid values that you can use include `ACTIVE`, `INACTIVE`, and `REVOKED`.
   *
   * @public
   */
  status?: CertificateStatus | undefined;
}

/**
 * The output from the RegisterCertificate operation.
 *
 * @public
 */
export interface RegisterCertificateResponse {
  /**
   * The certificate ARN.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The certificate identifier.
   *
   * @public
   */
  certificateId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCARequest {
  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem: string | undefined;

  /**
   * The status of the register certificate request.
   *
   * @public
   */
  status?: CertificateStatus | undefined;
}

/**
 * @public
 */
export interface RegisterCertificateWithoutCAResponse {
  /**
   * The Amazon Resource Name (ARN) of the registered certificate.
   *
   * @public
   */
  certificateArn?: string | undefined;

  /**
   * The ID of the registered certificate. (The last part of the certificate ARN contains the certificate ID.
   *
   * @public
   */
  certificateId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterThingRequest {
  /**
   * The provisioning template. See [Provisioning Devices That Have Device Certificates](https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html) for more information.
   *
   * @public
   */
  templateBody: string | undefined;

  /**
   * The parameters for provisioning a thing. See [Provisioning Templates](https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html) for more information.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterThingResponse {
  /**
   * The certificate data, in PEM format.
   *
   * @public
   */
  certificatePem?: string | undefined;

  /**
   * ARNs for the generated resources.
   *
   * @public
   */
  resourceArns?: Record<string, string> | undefined;
}

/**
 * The input for the RejectCertificateTransfer operation.
 *
 * @public
 */
export interface RejectCertificateTransferRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * The reason the certificate transfer was rejected.
   *
   * @public
   */
  rejectReason?: string | undefined;
}

/**
 * @public
 */
export interface RemoveThingFromBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName?: string | undefined;

  /**
   * The ARN of the billing group.
   *
   * @public
   */
  billingGroupArn?: string | undefined;

  /**
   * The name of the thing to be removed from the billing group.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ARN of the thing to be removed from the billing group.
   *
   * @public
   */
  thingArn?: string | undefined;
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
   * The group name.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The group ARN.
   *
   * @public
   */
  thingGroupArn?: string | undefined;

  /**
   * The name of the thing to remove from the group.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The ARN of the thing to remove from the group.
   *
   * @public
   */
  thingArn?: string | undefined;
}

/**
 * @public
 */
export interface RemoveThingFromThingGroupResponse {}

/**
 * The input for the ReplaceTopicRule operation.
 *
 * @public
 */
export interface ReplaceTopicRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  ruleName: string | undefined;

  /**
   * The rule payload.
   *
   * @public
   */
  topicRulePayload: TopicRulePayload | undefined;
}

/**
 * @public
 */
export interface SearchIndexRequest {
  /**
   * The search index name.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The search query string. For more information about the search query syntax, see [Query syntax](https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html).
   *
   * @public
   */
  queryString: string | undefined;

  /**
   * The token used to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page at one time. This maximum number cannot exceed 100. The response might contain fewer results but will never contain more. You can use [`nextToken`](https://docs.aws.amazon.com/iot/latest/apireference/API_SearchIndex.html#iot-SearchIndex-request-nextToken) to retrieve the next set of results until `nextToken` returns `NULL`.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The query version.
   *
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * The thing group search index document.
 *
 * @public
 */
export interface ThingGroupDocument {
  /**
   * The thing group name.
   *
   * @public
   */
  thingGroupName?: string | undefined;

  /**
   * The thing group ID.
   *
   * @public
   */
  thingGroupId?: string | undefined;

  /**
   * The thing group description.
   *
   * @public
   */
  thingGroupDescription?: string | undefined;

  /**
   * The thing group attributes.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * Parent group names.
   *
   * @public
   */
  parentGroupNames?: string[] | undefined;
}

/**
 * The connectivity status of the thing.
 *
 * @public
 */
export interface ThingConnectivity {
  /**
   * True if the thing is connected to the Amazon Web Services IoT Core service; false if it is not connected.
   *
   * @public
   */
  connected?: boolean | undefined;

  /**
   * The epoch time (in milliseconds) when the thing last connected or disconnected.
   *
   * @public
   */
  timestamp?: number | undefined;

  /**
   * The reason that the client is disconnected.
   *
   * @public
   */
  disconnectReason?: string | undefined;

  /**
   * The keep-alive interval in seconds that the client specified when establishing the connection.
   *
   * @public
   */
  keepAliveDuration?: number | undefined;

  /**
   * Indicates whether the client is using a clean session. Returns `true` for clean sessions.
   *
   * @public
   */
  cleanSession?: boolean | undefined;

  /**
   * The session expiry interval in seconds for the MQTT client connection. This value indicates how long the session will remain active after the client disconnects.
   *
   * @public
   */
  sessionExpiry?: number | undefined;

  /**
   * The unique identifier of the MQTT client.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * The thing search index document.
 *
 * @public
 */
export interface ThingDocument {
  /**
   * The thing name.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The thing ID.
   *
   * @public
   */
  thingId?: string | undefined;

  /**
   * The thing type name.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * Thing group and billing group names.
   *
   * @public
   */
  thingGroupNames?: string[] | undefined;

  /**
   * The attributes.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The unnamed shadow and named shadow.
   *
   * For more information about shadows, see [IoT Device Shadow service.](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html)
   *
   * @public
   */
  shadow?: string | undefined;

  /**
   * Contains Device Defender data.
   *
   * For more information about Device Defender, see [Device Defender](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html).
   *
   * @public
   */
  deviceDefender?: string | undefined;

  /**
   * Indicates whether the thing is connected to the Amazon Web Services IoT Core service.
   *
   * @public
   */
  connectivity?: ThingConnectivity | undefined;
}

/**
 * @public
 */
export interface SearchIndexResponse {
  /**
   * The token used to get the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The things that match the search query.
   *
   * @public
   */
  things?: ThingDocument[] | undefined;

  /**
   * The thing groups that match the search query.
   *
   * @public
   */
  thingGroups?: ThingGroupDocument[] | undefined;
}

/**
 * @public
 */
export interface SetDefaultAuthorizerRequest {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName: string | undefined;
}

/**
 * @public
 */
export interface SetDefaultAuthorizerResponse {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName?: string | undefined;

  /**
   * The authorizer ARN.
   *
   * @public
   */
  authorizerArn?: string | undefined;
}

/**
 * The input for the SetDefaultPolicyVersion operation.
 *
 * @public
 */
export interface SetDefaultPolicyVersionRequest {
  /**
   * The policy name.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * The policy version ID.
   *
   * @public
   */
  policyVersionId: string | undefined;
}

/**
 * Describes the logging options payload.
 *
 * @public
 */
export interface LoggingOptionsPayload {
  /**
   * The ARN of the IAM role that grants access.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The log level.
   *
   * @public
   */
  logLevel?: LogLevel | undefined;
}

/**
 * The input for the SetLoggingOptions operation.
 *
 * @public
 */
export interface SetLoggingOptionsRequest {
  /**
   * The logging options payload.
   *
   * @public
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingLevelRequest {
  /**
   * The log target.
   *
   * @public
   */
  logTarget: LogTarget | undefined;

  /**
   * The log level.
   *
   * @public
   */
  logLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface SetV2LoggingOptionsRequest {
  /**
   * The ARN of the role that allows IoT to write to Cloudwatch logs.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The default logging level.
   *
   * @public
   */
  defaultLogLevel?: LogLevel | undefined;

  /**
   * If true all logs are disabled. The default is false.
   *
   * @public
   */
  disableAllLogs?: boolean | undefined;

  /**
   * The list of event configurations that override account-level logging.
   *
   * @public
   */
  eventConfigurations?: LogEventConfiguration[] | undefined;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskRequest {
  /**
   * A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Specifies the audit findings to which the mitigation actions are applied. You can apply them to a type of audit check, to all findings from an audit, or to a specific set of findings.
   *
   * @public
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.
   *
   * @public
   */
  auditCheckToActionsMapping: Record<string, string[]> | undefined;

  /**
   * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAuditMitigationActionsTaskResponse {
  /**
   * The unique identifier for the audit mitigation task. This matches the `taskId` that you specified in the request.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskRequest {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Specifies the ML Detect findings to which the mitigation actions are applied.
   *
   * @public
   */
  target: DetectMitigationActionsTaskTarget | undefined;

  /**
   * The actions to be performed when a device has unexpected behavior.
   *
   * @public
   */
  actions: string[] | undefined;

  /**
   * Specifies the time period of which violation events occurred between.
   *
   * @public
   */
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange | undefined;

  /**
   * Specifies to list only active violations.
   *
   * @public
   */
  includeOnlyActiveViolations?: boolean | undefined;

  /**
   * Specifies to include suppressed alerts.
   *
   * @public
   */
  includeSuppressedAlerts?: boolean | undefined;

  /**
   * Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDetectMitigationActionsTaskResponse {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskRequest {
  /**
   * Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or `UpdateAccountAuditConfiguration` to select which checks are enabled.
   *
   * @public
   */
  targetCheckNames: string[] | undefined;
}

/**
 * @public
 */
export interface StartOnDemandAuditTaskResponse {
  /**
   * The ID of the on-demand audit you started.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskRequest {
  /**
   * The provisioning template.
   *
   * @public
   */
  templateBody: string | undefined;

  /**
   * The S3 bucket that contains the input file.
   *
   * @public
   */
  inputFileBucket: string | undefined;

  /**
   * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
   *
   * @public
   */
  inputFileKey: string | undefined;

  /**
   * The IAM role ARN that grants permission the input file.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface StartThingRegistrationTaskResponse {
  /**
   * The bulk thing provisioning task ID.
   *
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface StopThingRegistrationTaskRequest {
  /**
   * The bulk thing provisioning task ID.
   *
   * @public
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
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The new or modified tags for the resource.
   *
   * @public
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
   * The principal. Valid principals are CertificateArn (arn:aws:iot:*region*:*accountId*:cert/*certificateId*) and CognitoId (*region*:*id*).
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * The Cognito identity pool ID.
   *
   * @public
   */
  cognitoIdentityPoolId?: string | undefined;

  /**
   * A list of authorization info objects. Simulating authorization will create a response for each `authInfo` object in the list.
   *
   * @public
   */
  authInfos: AuthInfo[] | undefined;

  /**
   * The MQTT client ID.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.
   *
   * @public
   */
  policyNamesToAdd?: string[] | undefined;

  /**
   * When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.
   *
   * @public
   */
  policyNamesToSkip?: string[] | undefined;
}

/**
 * @public
 */
export interface TestAuthorizationResponse {
  /**
   * The authentication results.
   *
   * @public
   */
  authResults?: AuthResult[] | undefined;
}

/**
 * Specifies the HTTP context to use for the test authorizer request.
 *
 * @public
 */
export interface HttpContext {
  /**
   * The header keys and values in an HTTP authorization request.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * The query string keys and values in an HTTP authorization request.
   *
   * @public
   */
  queryString?: string | undefined;
}

/**
 * Specifies the MQTT context to use for the test authorizer request
 *
 * @public
 */
export interface MqttContext {
  /**
   * The value of the `username` key in an MQTT authorization request.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The value of the `password` key in an MQTT authorization request.
   *
   * @public
   */
  password?: Uint8Array | undefined;

  /**
   * The value of the `clientId` key in an MQTT authorization request.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Specifies the TLS context to use for the test authorizer request.
 *
 * @public
 */
export interface TlsContext {
  /**
   * The value of the `serverName` key in a TLS authorization request.
   *
   * @public
   */
  serverName?: string | undefined;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerRequest {
  /**
   * The custom authorizer name.
   *
   * @public
   */
  authorizerName: string | undefined;

  /**
   * The token returned by your custom authentication service.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
   *
   * @public
   */
  tokenSignature?: string | undefined;

  /**
   * Specifies a test HTTP authorization request.
   *
   * @public
   */
  httpContext?: HttpContext | undefined;

  /**
   * Specifies a test MQTT authorization request.
   *
   * @public
   */
  mqttContext?: MqttContext | undefined;

  /**
   * Specifies a test TLS authorization request.
   *
   * @public
   */
  tlsContext?: TlsContext | undefined;
}

/**
 * @public
 */
export interface TestInvokeAuthorizerResponse {
  /**
   * True if the token is authenticated, otherwise false.
   *
   * @public
   */
  isAuthenticated?: boolean | undefined;

  /**
   * The principal ID.
   *
   * @public
   */
  principalId?: string | undefined;

  /**
   * IAM policy documents.
   *
   * @public
   */
  policyDocuments?: string[] | undefined;

  /**
   * The number of seconds after which the temporary credentials are refreshed.
   *
   * @public
   */
  refreshAfterInSeconds?: number | undefined;

  /**
   * The number of seconds after which the connection is terminated.
   *
   * @public
   */
  disconnectAfterInSeconds?: number | undefined;
}

/**
 * The input for the TransferCertificate operation.
 *
 * @public
 */
export interface TransferCertificateRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * The Amazon Web Services account.
   *
   * @public
   */
  targetAwsAccount: string | undefined;

  /**
   * The transfer message.
   *
   * @public
   */
  transferMessage?: string | undefined;
}

/**
 * The output from the TransferCertificate operation.
 *
 * @public
 */
export interface TransferCertificateResponse {
  /**
   * The ARN of the certificate.
   *
   * @public
   */
  transferredCertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of the keys of the tags to be removed from the resource.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the role that grants permission to IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Information about the targets to which audit notifications are sent.
   *
   * @public
   */
  auditNotificationTargetConfigurations?: Partial<Record<AuditNotificationType, AuditNotificationTarget>> | undefined;

  /**
   * Specifies which audit checks are enabled and disabled for this account. Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are currently enabled.
   *
   * Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.
   *
   * You cannot disable a check if it's used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.
   *
   * On the first call to `UpdateAccountAuditConfiguration`, this parameter is required and must specify at least one enabled check.
   *
   * @public
   */
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration> | undefined;
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
   * An audit check name. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  checkName: string | undefined;

  /**
   * Information that identifies the noncompliant resource.
   *
   * @public
   */
  resourceIdentifier: ResourceIdentifier | undefined;

  /**
   * The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * Indicates whether a suppression should exist indefinitely or not.
   *
   * @public
   */
  suppressIndefinitely?: boolean | undefined;

  /**
   * The description of the audit suppression.
   *
   * @public
   */
  description?: string | undefined;
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
   * The authorizer name.
   *
   * @public
   */
  authorizerName: string | undefined;

  /**
   * The ARN of the authorizer's Lambda function.
   *
   * @public
   */
  authorizerFunctionArn?: string | undefined;

  /**
   * The key used to extract the token from the HTTP headers.
   *
   * @public
   */
  tokenKeyName?: string | undefined;

  /**
   * The public keys used to verify the token signature.
   *
   * @public
   */
  tokenSigningPublicKeys?: Record<string, string> | undefined;

  /**
   * The status of the update authorizer request.
   *
   * @public
   */
  status?: AuthorizerStatus | undefined;

  /**
   * When `true`, the result from the authorizer’s Lambda function is cached for the time specified in `refreshAfterInSeconds`. The cached result is used while the device reuses the same HTTP connection.
   *
   * @public
   */
  enableCachingForHttp?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * The authorizer name.
   *
   * @public
   */
  authorizerName?: string | undefined;

  /**
   * The authorizer ARN.
   *
   * @public
   */
  authorizerArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupRequest {
  /**
   * The name of the billing group.
   *
   * @public
   */
  billingGroupName: string | undefined;

  /**
   * The properties of the billing group.
   *
   * @public
   */
  billingGroupProperties: BillingGroupProperties | undefined;

  /**
   * The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the `UpdateBillingGroup` request is rejected with a `VersionConflictException`.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateBillingGroupResponse {
  /**
   * The latest version of the billing group.
   *
   * @public
   */
  version?: number | undefined;
}

/**
 * The input to the UpdateCACertificate operation.
 *
 * @public
 */
export interface UpdateCACertificateRequest {
  /**
   * The CA certificate identifier.
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * The updated status of the CA certificate.
   *
   * **Note:** The status value REGISTER_INACTIVE is deprecated and should not be used.
   *
   * @public
   */
  newStatus?: CACertificateStatus | undefined;

  /**
   * The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
   *
   * @public
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus | undefined;

  /**
   * Information about the registration configuration.
   *
   * @public
   */
  registrationConfig?: RegistrationConfig | undefined;

  /**
   * If true, removes auto registration.
   *
   * @public
   */
  removeAutoRegistration?: boolean | undefined;
}

/**
 * The input for the UpdateCertificate operation.
 *
 * @public
 */
export interface UpdateCertificateRequest {
  /**
   * The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
   *
   * @public
   */
  certificateId: string | undefined;

  /**
   * The new status.
   *
   * **Note:** Setting the status to PENDING_TRANSFER or PENDING_ACTIVATION will result in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They are not intended for developer use.
   *
   * **Note:** The status value REGISTER_INACTIVE is deprecated and should not be used.
   *
   * @public
   */
  newStatus: CertificateStatus | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateProviderRequest {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName: string | undefined;

  /**
   * The Lambda function ARN that's associated with the certificate provider.
   *
   * @public
   */
  lambdaFunctionArn?: string | undefined;

  /**
   * A list of the operations that the certificate provider will use to generate certificates. Valid value: `CreateCertificateFromCsr`.
   *
   * @public
   */
  accountDefaultForOperations?: CertificateProviderOperation[] | undefined;
}

/**
 * @public
 */
export interface UpdateCertificateProviderResponse {
  /**
   * The name of the certificate provider.
   *
   * @public
   */
  certificateProviderName?: string | undefined;

  /**
   * The ARN of the certificate provider.
   *
   * @public
   */
  certificateProviderArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCommandRequest {
  /**
   * The unique identifier of the command to be updated.
   *
   * @public
   */
  commandId: string | undefined;

  /**
   * The new user-friendly name to use in the console for the command.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A short text description of the command.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A boolean that you can use to specify whether to deprecate a command.
   *
   * @public
   */
  deprecated?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateCommandResponse {
  /**
   * The unique identifier of the command.
   *
   * @public
   */
  commandId?: string | undefined;

  /**
   * The updated user-friendly display name in the console for the command.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The updated text description of the command.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The boolean that indicates whether the command was deprecated.
   *
   * @public
   */
  deprecated?: boolean | undefined;

  /**
   * The date and time (epoch timestamp in seconds) when the command was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateCustomMetricRequest {
  /**
   * The name of the custom metric. Cannot be updated.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * Field represents a friendly name in the console for the custom metric, it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
   *
   * @public
   */
  displayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomMetricResponse {
  /**
   * The name of the custom metric.
   *
   * @public
   */
  metricName?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the custom metric.
   *
   * @public
   */
  metricArn?: string | undefined;

  /**
   * The type of the custom metric.
   *
   * > **Important:** The type `number` only takes a single metric value as an input, but while submitting the metrics value in the DeviceMetrics report, it must be passed as an array with a single value.
   *
   * @public
   */
  metricType?: CustomMetricType | undefined;

  /**
   * A friendly name in the console for the custom metric
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The creation date of the custom metric in milliseconds since epoch.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The time the custom metric was last modified in milliseconds since epoch.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDimensionRequest {
  /**
   * A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies the value or list of values for the dimension. For `TOPIC_FILTER` dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
   *
   * @public
   */
  stringValues: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDimensionResponse {
  /**
   * A unique identifier for the dimension.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN)of the created dimension.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of the dimension.
   *
   * @public
   */
  type?: DimensionType | undefined;

  /**
   * The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.
   *
   * @public
   */
  stringValues?: string[] | undefined;

  /**
   * The date and time, in milliseconds since epoch, when the dimension was initially created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date and time, in milliseconds since epoch, when the dimension was most recently updated.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationRequest {
  /**
   * The name of the domain configuration to be updated.
   *
   * @public
   */
  domainConfigurationName: string | undefined;

  /**
   * An object that specifies the authorization service for a domain.
   *
   * @public
   */
  authorizerConfig?: AuthorizerConfig | undefined;

  /**
   * The status to which the domain configuration should be updated.
   *
   * @public
   */
  domainConfigurationStatus?: DomainConfigurationStatus | undefined;

  /**
   * Removes the authorization configuration from a domain.
   *
   * @public
   */
  removeAuthorizerConfig?: boolean | undefined;

  /**
   * An object that specifies the TLS configuration for a domain.
   *
   * @public
   */
  tlsConfig?: TlsConfig | undefined;

  /**
   * The server certificate configuration.
   *
   * @public
   */
  serverCertificateConfig?: ServerCertificateConfig | undefined;

  /**
   * An enumerated string that speciﬁes the authentication type.
   *
   * - `CUSTOM_AUTH_X509` - Use custom authentication and authorization with additional details from the X.509 client certificate.
   *
   * - `CUSTOM_AUTH` - Use custom authentication and authorization. For more information, see [Custom authentication and authorization](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `AWS_X509` - Use X.509 client certificates without custom authentication and authorization. For more information, see [X.509 client certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html).
   *
   * - `AWS_SIGV4` - Use Amazon Web Services Signature Version 4. For more information, see [IAM users, groups, and roles](https://docs.aws.amazon.com/iot/latest/developerguide/custom-authentication.html).
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify authentication type. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  authenticationType?: AuthenticationType | undefined;

  /**
   * An enumerated string that speciﬁes the application-layer protocol.
   *
   * - `SECURE_MQTT` - MQTT over TLS.
   *
   * - `MQTT_WSS` - MQTT over WebSocket.
   *
   * - `HTTPS` - HTTP over TLS.
   *
   * - `DEFAULT` - Use a combination of port and Application Layer Protocol Negotiation (ALPN) to specify application_layer protocol. For more information, see [Device communication protocols](https://docs.aws.amazon.com/iot/latest/developerguide/protocols.html).
   *
   * @public
   */
  applicationProtocol?: ApplicationProtocol | undefined;

  /**
   * An object that speciﬁes the client certificate conﬁguration for a domain.
   *
   * @public
   */
  clientCertificateConfig?: ClientCertificateConfig | undefined;
}

/**
 * @public
 */
export interface UpdateDomainConfigurationResponse {
  /**
   * The name of the domain configuration that was updated.
   *
   * @public
   */
  domainConfigurationName?: string | undefined;

  /**
   * The ARN of the domain configuration that was updated.
   *
   * @public
   */
  domainConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupRequest {
  /**
   * The name of the dynamic thing group to update.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The dynamic thing group properties to update.
   *
   * @public
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * The expected version of the dynamic thing group to update.
   *
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * The dynamic thing group index to update.
   *
   * > **Note:** Currently one index is supported: `AWS_Things`.
   *
   * @public
   */
  indexName?: string | undefined;

  /**
   * The dynamic thing group search query string to update.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The dynamic thing group query version to update.
   *
   * > **Note:** Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.
   *
   * @public
   */
  queryVersion?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDynamicThingGroupResponse {
  /**
   * The dynamic thing group version.
   *
   * @public
   */
  version?: number | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionConfigurationRequest {
  /**
   * The type of the KMS key.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The ARN of the customer managedKMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role assumed by Amazon Web Services IoT Core to call KMS on behalf of the customer.
   *
   * @public
   */
  kmsAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionConfigurationResponse {}

/**
 * @public
 */
export interface UpdateEventConfigurationsRequest {
  /**
   * The new event configuration values.
   *
   * @public
   */
  eventConfigurations?: Partial<Record<EventType, Configuration>> | undefined;
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
   * The name of the fleet metric to update.
   *
   * @public
   */
  metricName: string | undefined;

  /**
   * The search query string.
   *
   * @public
   */
  queryString?: string | undefined;

  /**
   * The type of the aggregation query.
   *
   * @public
   */
  aggregationType?: AggregationType | undefined;

  /**
   * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
   *
   * @public
   */
  period?: number | undefined;

  /**
   * The field to aggregate.
   *
   * @public
   */
  aggregationField?: string | undefined;

  /**
   * The description of the fleet metric.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the query.
   *
   * @public
   */
  queryVersion?: string | undefined;

  /**
   * The name of the index to search.
   *
   * @public
   */
  indexName: string | undefined;

  /**
   * Used to support unit transformation such as milliseconds to seconds. The unit must be supported by [CW metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html).
   *
   * @public
   */
  unit?: FleetMetricUnit | undefined;

  /**
   * The expected version of the fleet metric record in the registry.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateIndexingConfigurationRequest {
  /**
   * Thing indexing configuration.
   *
   * @public
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration | undefined;

  /**
   * Thing group indexing configuration.
   *
   * @public
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration | undefined;
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
   * The ID of the job to be updated.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * A short text description of the job.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Configuration information for pre-signed S3 URLs.
   *
   * @public
   */
  presignedUrlConfig?: PresignedUrlConfig | undefined;

  /**
   * Allows you to create a staged rollout of the job.
   *
   * @public
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig | undefined;

  /**
   * Allows you to create criteria to abort a job.
   *
   * @public
   */
  abortConfig?: AbortConfig | undefined;

  /**
   * Specifies the amount of time each device has to finish its execution of the job. The timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the time expires, it will be automatically set to `TIMED_OUT`.
   *
   * @public
   */
  timeoutConfig?: TimeoutConfig | undefined;

  /**
   * The namespace used to indicate that a job is a customer-managed job.
   *
   * When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.
   *
   * `$aws/things/THING_NAME/jobs/JOB_ID/notify-namespace-NAMESPACE_ID/`
   *
   * > **Note:** The `namespaceId` feature is only supported by IoT Greengrass at this time. For more information, see [Setting up IoT Greengrass core devices.](https://docs.aws.amazon.com/greengrass/v2/developerguide/setting-up.html)
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * Allows you to create the criteria to retry a job.
   *
   * @public
   */
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig | undefined;
}

/**
 * @public
 */
export interface UpdateMitigationActionRequest {
  /**
   * The friendly name for the mitigation action. You cannot change the name by using `UpdateMitigationAction`. Instead, you must delete and recreate the mitigation action with the new name.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * The ARN of the IAM role that is used to apply the mitigation action.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Defines the type of action and the parameters for that action.
   *
   * @public
   */
  actionParams?: MitigationActionParams | undefined;
}

/**
 * @public
 */
export interface UpdateMitigationActionResponse {
  /**
   * The ARN for the new mitigation action.
   *
   * @public
   */
  actionArn?: string | undefined;

  /**
   * A unique identifier for the mitigation action.
   *
   * @public
   */
  actionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackageRequest {
  /**
   * The name of the target software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The package description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the default package version.
   *
   * **Note:** You cannot name a `defaultVersion` and set `unsetDefaultVersion` equal to `true` at the same time.
   *
   * @public
   */
  defaultVersionName?: string | undefined;

  /**
   * Indicates whether you want to remove the named default package version from the software package. Set as `true` to remove the default package version.
   *
   * **Note:** You cannot name a `defaultVersion` and set `unsetDefaultVersion` equal to `true` at the same time.
   *
   * @public
   */
  unsetDefaultVersion?: boolean | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * Configuration to manage job's package version reporting. This updates the thing's reserved named shadow that the job targets.
   *
   * @public
   */
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePackageConfigurationResponse {}

/**
 * @public
 */
export interface UpdatePackageVersionRequest {
  /**
   * The name of the associated software package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The name of the target package version.
   *
   * @public
   */
  versionName: string | undefined;

  /**
   * The package version description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Metadata that can be used to define a package version’s configuration. For example, the Amazon S3 file location, configuration options that are being sent to the device or fleet.
   *
   * **Note:** Attributes can be updated only when the package version is in a draft state.
   *
   * The combined size of all the attributes on a package version is limited to 3KB.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;

  /**
   * The various components that make up a software package version.
   *
   * @public
   */
  artifact?: PackageVersionArtifact | undefined;

  /**
   * The status that the package version should be assigned. For more information, see [Package version lifecycle](https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle).
   *
   * @public
   */
  action?: PackageVersionAction | undefined;

  /**
   * The inline job document associated with a software package version used for a quick job deployment.
   *
   * @public
   */
  recipe?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * The name of the provisioning template.
   *
   * @public
   */
  templateName: string | undefined;

  /**
   * The description of the provisioning template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * True to enable the provisioning template, otherwise false.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The ID of the default provisioning template version.
   *
   * @public
   */
  defaultVersionId?: number | undefined;

  /**
   * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
   *
   * @public
   */
  provisioningRoleArn?: string | undefined;

  /**
   * Updates the pre-provisioning hook template. Only supports template of type `FLEET_PROVISIONING`. For more information about provisioning template types, see [type](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateProvisioningTemplate.html#iot-CreateProvisioningTemplate-request-type).
   *
   * @public
   */
  preProvisioningHook?: ProvisioningHook | undefined;

  /**
   * Removes pre-provisioning hook template.
   *
   * @public
   */
  removePreProvisioningHook?: boolean | undefined;
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
   * The role alias to update.
   *
   * @public
   */
  roleAlias: string | undefined;

  /**
   * The role ARN.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The number of seconds the credential will be valid.
   *
   * This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.
   *
   * @public
   */
  credentialDurationSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRoleAliasResponse {
  /**
   * The role alias.
   *
   * @public
   */
  roleAlias?: string | undefined;

  /**
   * The role alias ARN.
   *
   * @public
   */
  roleAliasArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledAuditRequest {
  /**
   * How often the scheduled audit takes place, either `DAILY`, `WEEKLY`, `BIWEEKLY`, or `MONTHLY`. The start time of each audit is determined by the system.
   *
   * @public
   */
  frequency?: AuditFrequency | undefined;

  /**
   * The day of the month on which the scheduled audit takes place. This can be `1` through `31` or `LAST`. This field is required if the `frequency` parameter is set to `MONTHLY`. If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
   *
   * @public
   */
  dayOfMonth?: string | undefined;

  /**
   * The day of the week on which the scheduled audit takes place. This can be one of `SUN`, `MON`, `TUE`, `WED`, `THU`, `FRI`, or `SAT`. This field is required if the "frequency" parameter is set to `WEEKLY` or `BIWEEKLY`.
   *
   * @public
   */
  dayOfWeek?: DayOfWeek | undefined;

  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * @public
   */
  targetCheckNames?: string[] | undefined;

  /**
   * The name of the scheduled audit. (Max. 128 chars)
   *
   * @public
   */
  scheduledAuditName: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledAuditResponse {
  /**
   * The ARN of the scheduled audit.
   *
   * @public
   */
  scheduledAuditArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * The name of the security profile you want to update.
   *
   * @public
   */
  securityProfileName: string | undefined;

  /**
   * A description of the security profile.
   *
   * @public
   */
  securityProfileDescription?: string | undefined;

  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * @public
   */
  behaviors?: Behavior[] | undefined;

  /**
   * Where the alerts are sent. (Alerts are always sent to the console.)
   *
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>> | undefined;

  /**
   * *Please use UpdateSecurityProfileRequest$additionalMetricsToRetainV2 instead.*
   *
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
   *
   * @deprecated Use additionalMetricsToRetainV2.
   * @public
   */
  additionalMetricsToRetain?: string[] | undefined;

  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
   *
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[] | undefined;

  /**
   * If true, delete all `behaviors` defined for this security profile. If any `behaviors` are defined in the current invocation, an exception occurs.
   *
   * @public
   */
  deleteBehaviors?: boolean | undefined;

  /**
   * If true, delete all `alertTargets` defined for this security profile. If any `alertTargets` are defined in the current invocation, an exception occurs.
   *
   * @public
   */
  deleteAlertTargets?: boolean | undefined;

  /**
   * If true, delete all `additionalMetricsToRetain` defined for this security profile. If any `additionalMetricsToRetain` are defined in the current invocation, an exception occurs.
   *
   * @public
   */
  deleteAdditionalMetricsToRetain?: boolean | undefined;

  /**
   * The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a `VersionConflictException` is thrown.
   *
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * Specifies the MQTT topic and role ARN required for metric export.
   *
   * @public
   */
  metricsExportConfig?: MetricsExportConfig | undefined;

  /**
   * Set the value as true to delete metrics export related configurations.
   *
   * @public
   */
  deleteMetricsExportConfig?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityProfileResponse {
  /**
   * The name of the security profile that was updated.
   *
   * @public
   */
  securityProfileName?: string | undefined;

  /**
   * The ARN of the security profile that was updated.
   *
   * @public
   */
  securityProfileArn?: string | undefined;

  /**
   * The description of the security profile.
   *
   * @public
   */
  securityProfileDescription?: string | undefined;

  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * @public
   */
  behaviors?: Behavior[] | undefined;

  /**
   * Where the alerts are sent. (Alerts are always sent to the console.)
   *
   * @public
   */
  alertTargets?: Partial<Record<AlertTargetType, AlertTarget>> | undefined;

  /**
   * *Please use UpdateSecurityProfileResponse$additionalMetricsToRetainV2 instead.*
   *
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the security profile's `behaviors`, but it is also retained for any metric specified here.
   *
   * @deprecated Use additionalMetricsToRetainV2.
   * @public
   */
  additionalMetricsToRetain?: string[] | undefined;

  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.
   *
   * @public
   */
  additionalMetricsToRetainV2?: MetricToRetain[] | undefined;

  /**
   * The updated version of the security profile.
   *
   * @public
   */
  version?: number | undefined;

  /**
   * The time the security profile was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The time the security profile was last modified.
   *
   * @public
   */
  lastModifiedDate?: Date | undefined;

  /**
   * Specifies the MQTT topic and role ARN required for metric export.
   *
   * @public
   */
  metricsExportConfig?: MetricsExportConfig | undefined;
}

/**
 * @public
 */
export interface UpdateStreamRequest {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId: string | undefined;

  /**
   * The description of the stream.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The files associated with the stream.
   *
   * @public
   */
  files?: StreamFile[] | undefined;

  /**
   * An IAM role that allows the IoT service principal assumes to access your S3 files.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamResponse {
  /**
   * The stream ID.
   *
   * @public
   */
  streamId?: string | undefined;

  /**
   * The stream ARN.
   *
   * @public
   */
  streamArn?: string | undefined;

  /**
   * A description of the stream.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The stream version.
   *
   * @public
   */
  streamVersion?: number | undefined;
}

/**
 * The input for the UpdateThing operation.
 *
 * @public
 */
export interface UpdateThingRequest {
  /**
   * The name of the thing to update.
   *
   * You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The name of the thing type.
   *
   * @public
   */
  thingTypeName?: string | undefined;

  /**
   * A list of thing attributes, a JSON string containing name-value pairs. For example:
   *
   * `\{\"attributes\":\{\"name1\":\"value2\"\}\}`
   *
   * This data is used to add new attributes or update existing attributes.
   *
   * @public
   */
  attributePayload?: AttributePayload | undefined;

  /**
   * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the `UpdateThing` request is rejected with a `VersionConflictException`.
   *
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * Remove a thing type association. If **true**, the association is removed.
   *
   * @public
   */
  removeThingType?: boolean | undefined;
}

/**
 * The output from the UpdateThing operation.
 *
 * @public
 */
export interface UpdateThingResponse {}

/**
 * @public
 */
export interface UpdateThingGroupRequest {
  /**
   * The thing group to update.
   *
   * @public
   */
  thingGroupName: string | undefined;

  /**
   * The thing group properties.
   *
   * @public
   */
  thingGroupProperties: ThingGroupProperties | undefined;

  /**
   * The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.
   *
   * @public
   */
  expectedVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateThingGroupResponse {
  /**
   * The version of the updated thing group.
   *
   * @public
   */
  version?: number | undefined;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingRequest {
  /**
   * The thing whose group memberships will be updated.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The groups to which the thing will be added.
   *
   * @public
   */
  thingGroupsToAdd?: string[] | undefined;

  /**
   * The groups from which the thing will be removed.
   *
   * @public
   */
  thingGroupsToRemove?: string[] | undefined;

  /**
   * Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
   *
   * @public
   */
  overrideDynamicGroups?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateThingGroupsForThingResponse {}

/**
 * @public
 */
export interface UpdateThingTypeRequest {
  /**
   * The name of a thing type.
   *
   * @public
   */
  thingTypeName: string | undefined;

  /**
   * The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.
   *
   * @public
   */
  thingTypeProperties?: ThingTypeProperties | undefined;
}

/**
 * @public
 */
export interface UpdateThingTypeResponse {}

/**
 * @public
 */
export interface UpdateTopicRuleDestinationRequest {
  /**
   * The ARN of the topic rule destination.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the topic rule destination. Valid values are:
   *
   * - **IN_PROGRESS**
   *
   *   A topic rule destination was created but has not been confirmed. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * - **ENABLED**
   *
   *   Confirmation was completed, and traffic to this destination is allowed. You can set `status` to `DISABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **DISABLED**
   *
   *   Confirmation was completed, and traffic to this destination is not allowed. You can set `status` to `ENABLED` by calling `UpdateTopicRuleDestination`.
   *
   * - **ERROR**
   *
   *   Confirmation could not be completed, for example if the confirmation timed out. You can call `GetTopicRuleDestination` for details about the error. You can set `status` to `IN_PROGRESS` by calling `UpdateTopicRuleDestination`. Calling `UpdateTopicRuleDestination` causes a new confirmation challenge to be sent to your confirmation endpoint.
   *
   * @public
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
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * @public
   */
  behaviors: Behavior[] | undefined;
}

/**
 * Information about an error found in a behavior specification.
 *
 * @public
 */
export interface ValidationError {
  /**
   * The description of an error found in the behaviors.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface ValidateSecurityProfileBehaviorsResponse {
  /**
   * True if the behaviors were valid.
   *
   * @public
   */
  valid?: boolean | undefined;

  /**
   * The list of any errors found in the behaviors.
   *
   * @public
   */
  validationErrors?: ValidationError[] | undefined;
}
