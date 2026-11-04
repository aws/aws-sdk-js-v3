// smithy-typescript generated code
import type {
  AgentHealth,
  AgentHealthCode,
  AssessmentRunNotificationSnsStatusCode,
  AssessmentRunState,
  AssetType,
  FailedItemErrorCode,
  InspectorEvent,
  Locale,
  PreviewStatus,
  ReportFileFormat,
  ReportStatus,
  ReportType,
  ScopeType,
  Severity,
  StopAction,
} from "./enums";

/**
 * This data type is used as a request parameter in the AddAttributesToFindings and CreateAssessmentTemplate actions.
 *
 * @public
 */
export interface Attribute {
  /**
   * The attribute key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value assigned to the attribute key.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsRequest {
  /**
   * The ARNs that specify the findings that you want to assign attributes to.
   *
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * The array of attributes that you want to assign to specified findings.
   *
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * Includes details about the failed items.
 *
 * @public
 */
export interface FailedItemDetails {
  /**
   * The status code of a failed item.
   *
   * @public
   */
  failureCode: FailedItemErrorCode | undefined;

  /**
   * Indicates whether you can immediately retry a request for this item for a specified resource.
   *
   * @public
   */
  retryable: boolean | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsResponse {
  /**
   * Attribute details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * Used in the exception error that is thrown if you start an assessment run for an assessment target that includes an EC2 instance that is already participating in another started assessment run.
 *
 * @public
 */
export interface AgentAlreadyRunningAssessment {
  /**
   * ID of the agent that is running on an EC2 instance that is already participating in another started assessment run.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The ARN of the assessment run that has already been started.
   *
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the ListAssessmentRunAgents action.
 *
 * @public
 */
export interface AgentFilter {
  /**
   * The current health state of the agent. Values can be set to **HEALTHY** or **UNHEALTHY**.
   *
   * @public
   */
  agentHealths: AgentHealth[] | undefined;

  /**
   * The detailed health state of the agent. Values can be set to **IDLE**, **RUNNING**, **SHUTDOWN**, **UNHEALTHY**, **THROTTLED**, and **UNKNOWN**.
   *
   * @public
   */
  agentHealthCodes: AgentHealthCode[] | undefined;
}

/**
 * Used as a response element in the PreviewAgents action.
 *
 * @public
 */
export interface AgentPreview {
  /**
   * The hostname of the EC2 instance on which the Amazon Inspector Agent is installed.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * The ID of the EC2 instance where the agent is installed.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The Auto Scaling group for the EC2 instance where the agent is installed.
   *
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * The health status of the Amazon Inspector Agent.
   *
   * @public
   */
  agentHealth?: AgentHealth | undefined;

  /**
   * The version of the Amazon Inspector Agent.
   *
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * The operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * The kernel version of the operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.
   *
   * @public
   */
  kernelVersion?: string | undefined;

  /**
   * The IP address of the EC2 instance on which the Amazon Inspector Agent is installed.
   *
   * @public
   */
  ipv4Address?: string | undefined;
}

/**
 * Used as one of the elements of the AssessmentRun data type.
 *
 * @public
 */
export interface AssessmentRunNotification {
  /**
   * The date of the notification.
   *
   * @public
   */
  date: Date | undefined;

  /**
   * The event for which a notification is sent.
   *
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * The message included in the notification.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The Boolean value that specifies whether the notification represents an error.
   *
   * @public
   */
  error: boolean | undefined;

  /**
   * The SNS topic to which the SNS notification is sent.
   *
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * The status code of the SNS notification.
   *
   * @public
   */
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode | undefined;
}

/**
 * Used as one of the elements of the AssessmentRun data type.
 *
 * @public
 */
export interface AssessmentRunStateChange {
  /**
   * The last time the assessment run state changed.
   *
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * The assessment run state.
   *
   * @public
   */
  state: AssessmentRunState | undefined;
}

/**
 * A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .
 *
 * Used as the response element in the DescribeAssessmentRuns action.
 *
 * @public
 */
export interface AssessmentRun {
  /**
   * The ARN of the assessment run.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The auto-generated name for the assessment run.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the assessment template that is associated with the assessment run.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * The state of the assessment run.
   *
   * @public
   */
  state: AssessmentRunState | undefined;

  /**
   * The duration of the assessment run.
   *
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * The rules packages selected for the assessment run.
   *
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * The user-defined attributes that are assigned to every generated finding.
   *
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * The time when StartAssessmentRun was called.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when StartAssessmentRun was called.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The assessment run completion time that corresponds to the rules packages evaluation completion time or failure.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The last time when the assessment run's state changed.
   *
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * A Boolean value (true or false) that specifies whether the process of collecting data from the agents is completed.
   *
   * @public
   */
  dataCollected: boolean | undefined;

  /**
   * A list of the assessment run state changes.
   *
   * @public
   */
  stateChanges: AssessmentRunStateChange[] | undefined;

  /**
   * A list of notifications for the event subscriptions. A notification about a particular generated finding is added to this list only once.
   *
   * @public
   */
  notifications: AssessmentRunNotification[] | undefined;

  /**
   * Provides a total count of generated findings per severity.
   *
   * @public
   */
  findingCounts: Partial<Record<Severity, number>> | undefined;
}

/**
 * The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the GetTelemetryMetadata action.
 *
 * @public
 */
export interface TelemetryMetadata {
  /**
   * A specific type of behavioral data that is collected by the agent.
   *
   * @public
   */
  messageType: string | undefined;

  /**
   * The count of messages that the agent sends to the Amazon Inspector service.
   *
   * @public
   */
  count: number | undefined;

  /**
   * The data size of messages that the agent sends to the Amazon Inspector service.
   *
   * @public
   */
  dataSize?: number | undefined;
}

/**
 * Contains information about an Amazon Inspector agent. This data type is used as a response element in the ListAssessmentRunAgents action.
 *
 * @public
 */
export interface AssessmentRunAgent {
  /**
   * The AWS account of the EC2 instance where the agent is installed.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The ARN of the assessment run that is associated with the agent.
   *
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * The current health state of the agent.
   *
   * @public
   */
  agentHealth: AgentHealth | undefined;

  /**
   * The detailed health state of the agent.
   *
   * @public
   */
  agentHealthCode: AgentHealthCode | undefined;

  /**
   * The description for the agent health code.
   *
   * @public
   */
  agentHealthDetails?: string | undefined;

  /**
   * The Auto Scaling group of the EC2 instance that is specified by the agent ID.
   *
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * The Amazon Inspector application data metrics that are collected by the agent.
   *
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * This data type is used in the AssessmentRunFilter data type.
 *
 * @public
 */
export interface TimestampRange {
  /**
   * The minimum value of the timestamp range.
   *
   * @public
   */
  beginDate?: Date | undefined;

  /**
   * The maximum value of the timestamp range.
   *
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * This data type is used in the AssessmentTemplateFilter data type.
 *
 * @public
 */
export interface DurationRange {
  /**
   * The minimum value of the duration range. Must be greater than zero.
   *
   * @public
   */
  minSeconds?: number | undefined;

  /**
   * The maximum value of the duration range. Must be less than or equal to 604800 seconds (1 week).
   *
   * @public
   */
  maxSeconds?: number | undefined;
}

/**
 * Used as the request parameter in the ListAssessmentRuns action.
 *
 * @public
 */
export interface AssessmentRunFilter {
  /**
   * For a record to match a filter, an explicit value or a string containing a wildcard that is specified for this data type property must match the value of the **assessmentRunName** property of the AssessmentRun data type.
   *
   * @public
   */
  namePattern?: string | undefined;

  /**
   * For a record to match a filter, one of the values specified for this data type property must be the exact match of the value of the **assessmentRunState** property of the AssessmentRun data type.
   *
   * @public
   */
  states?: AssessmentRunState[] | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the **durationInSeconds** property of the AssessmentRun data type.
   *
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the **rulesPackages** property of the AssessmentRun data type.
   *
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the **startTime** property of the AssessmentRun data type.
   *
   * @public
   */
  startTimeRange?: TimestampRange | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the **completedAt** property of the AssessmentRun data type.
   *
   * @public
   */
  completionTimeRange?: TimestampRange | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must match the **stateChangedAt** property of the AssessmentRun data type.
   *
   * @public
   */
  stateChangeTimeRange?: TimestampRange | undefined;
}

/**
 * Contains information about an Amazon Inspector application. This data type is used as the response element in the DescribeAssessmentTargets action.
 *
 * @public
 */
export interface AssessmentTarget {
  /**
   * The ARN that specifies the Amazon Inspector assessment target.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the Amazon Inspector assessment target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN that specifies the resource group that is associated with the assessment target.
   *
   * @public
   */
  resourceGroupArn?: string | undefined;

  /**
   * The time at which the assessment target is created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which UpdateAssessmentTarget is called.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Used as the request parameter in the ListAssessmentTargets action.
 *
 * @public
 */
export interface AssessmentTargetFilter {
  /**
   * For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the **assessmentTargetName** property of the AssessmentTarget data type.
   *
   * @public
   */
  assessmentTargetNamePattern?: string | undefined;
}

/**
 * Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the DescribeAssessmentTemplates action.
 *
 * @public
 */
export interface AssessmentTemplate {
  /**
   * The ARN of the assessment template.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the assessment template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the assessment target that corresponds to this assessment template.
   *
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * The duration in seconds specified for this assessment template. The default value is 3600 seconds (one hour). The maximum value is 86400 seconds (one day).
   *
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * The rules packages that are specified for this assessment template.
   *
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * The user-defined attributes that are assigned to every generated finding from the assessment run that uses this assessment template.
   *
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the most recent assessment run associated with this assessment template. This value exists only when the value of assessmentRunCount is greaterpa than zero.
   *
   * @public
   */
  lastAssessmentRunArn?: string | undefined;

  /**
   * The number of existing assessment runs associated with this assessment template. This value can be zero or a positive integer.
   *
   * @public
   */
  assessmentRunCount: number | undefined;

  /**
   * The time at which the assessment template is created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Used as the request parameter in the ListAssessmentTemplates action.
 *
 * @public
 */
export interface AssessmentTemplateFilter {
  /**
   * For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the **assessmentTemplateName** property of the AssessmentTemplate data type.
   *
   * @public
   */
  namePattern?: string | undefined;

  /**
   * For a record to match a filter, the value specified for this data type property must inclusively match any value between the specified minimum and maximum values of the **durationInSeconds** property of the AssessmentTemplate data type.
   *
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * For a record to match a filter, the values that are specified for this data type property must be contained in the list of values of the **rulesPackageArns** property of the AssessmentTemplate data type.
   *
   * @public
   */
  rulesPackageArns?: string[] | undefined;
}

/**
 * Contains information about a private IP address associated with a network interface. This data type is used as a response element in the DescribeFindings action.
 *
 * @public
 */
export interface PrivateIp {
  /**
   * The DNS name of the private IP address.
   *
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * The full IP address of the network inteface.
   *
   * @public
   */
  privateIpAddress?: string | undefined;
}

/**
 * Contains information about a security group associated with a network interface. This data type is used as one of the elements of the NetworkInterface data type.
 *
 * @public
 */
export interface SecurityGroup {
  /**
   * The name of the security group.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The ID of the security group.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the AssetAttributes data type.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The ID of the network interface.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The ID of a subnet associated with the network interface.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The ID of a VPC associated with the network interface.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The name of a private DNS associated with the network interface.
   *
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * The private IP address associated with the network interface.
   *
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * A list of the private IP addresses associated with the network interface. Includes the privateDnsName and privateIpAddress.
   *
   * @public
   */
  privateIpAddresses?: PrivateIp[] | undefined;

  /**
   * The name of a public DNS associated with the network interface.
   *
   * @public
   */
  publicDnsName?: string | undefined;

  /**
   * The public IP address from which the network interface is reachable.
   *
   * @public
   */
  publicIp?: string | undefined;

  /**
   * The IP addresses associated with the network interface.
   *
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * A list of the security groups associated with the network interface. Includes the groupId and groupName.
   *
   * @public
   */
  securityGroups?: SecurityGroup[] | undefined;
}

/**
 * A key and value pair. This data type is used as a request parameter in the SetTagsForResource action and a response element in the ListTagsForResource action.
 *
 * @public
 */
export interface Tag {
  /**
   * A tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * A value assigned to a tag key.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A collection of attributes of the host from which the finding is generated.
 *
 * @public
 */
export interface AssetAttributes {
  /**
   * The schema version of this data type.
   *
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * The ID of the agent that is installed on the EC2 instance where the finding is generated.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * The Auto Scaling group of the EC2 instance where the finding is generated.
   *
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where the finding is generated.
   *
   * @public
   */
  amiId?: string | undefined;

  /**
   * The hostname of the EC2 instance where the finding is generated.
   *
   * @public
   */
  hostname?: string | undefined;

  /**
   * The list of IP v4 addresses of the EC2 instance where the finding is generated.
   *
   * @public
   */
  ipv4Addresses?: string[] | undefined;

  /**
   * The tags related to the EC2 instance where the finding is generated.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * An array of the network interfaces interacting with the EC2 instance where the finding is generated.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTargetRequest {
  /**
   * The user-defined name that identifies the assessment target that you want to create. The name must be unique within the AWS account.
   *
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * The ARN that specifies the resource group that is used to create the assessment target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.
   *
   * @public
   */
  resourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTargetResponse {
  /**
   * The ARN that specifies the assessment target that is created.
   *
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTemplateRequest {
  /**
   * The ARN that specifies the assessment target for which you want to create the assessment template.
   *
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * The user-defined name that identifies the assessment template that you want to create. You can create several assessment templates for an assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.
   *
   * @public
   */
  assessmentTemplateName: string | undefined;

  /**
   * The duration of the assessment run in seconds.
   *
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * The ARNs that specify the rules packages that you want to attach to the assessment template.
   *
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template. An attribute is a key and value pair (an Attribute object). Within an assessment template, each key must be unique.
   *
   * @public
   */
  userAttributesForFindings?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTemplateResponse {
  /**
   * The ARN that specifies the assessment template that is created.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewRequest {
  /**
   * The ARN that specifies the assessment template for which you want to create an exclusions preview.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewResponse {
  /**
   * Specifies the unique identifier of the requested exclusions preview. You can use the unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview API.
   *
   * @public
   */
  previewToken: string | undefined;
}

/**
 * This data type is used as one of the elements of the ResourceGroup data type.
 *
 * @public
 */
export interface ResourceGroupTag {
  /**
   * A tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value assigned to a tag key.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupRequest {
  /**
   * A collection of keys and an array of possible values, '[\{"key":"key1","values":["Value1","Value2"]\},\{"key":"Key2","values":["Value3"]\}]'.
   *
   * For example,'[\{"key":"Name","values":["TestEC2Instance"]\}]'.
   *
   * @public
   */
  resourceGroupTags: ResourceGroupTag[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupResponse {
  /**
   * The ARN that specifies the resource group that is created.
   *
   * @public
   */
  resourceGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentRunRequest {
  /**
   * The ARN that specifies the assessment run that you want to delete.
   *
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTargetRequest {
  /**
   * The ARN that specifies the assessment target that you want to delete.
   *
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTemplateRequest {
  /**
   * The ARN that specifies the assessment template that you want to delete.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsRequest {
  /**
   * The ARN that specifies the assessment run that you want to describe.
   *
   * @public
   */
  assessmentRunArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsResponse {
  /**
   * Information about the assessment run.
   *
   * @public
   */
  assessmentRuns: AssessmentRun[] | undefined;

  /**
   * Assessment run details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsRequest {
  /**
   * The ARNs that specifies the assessment targets that you want to describe.
   *
   * @public
   */
  assessmentTargetArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsResponse {
  /**
   * Information about the assessment targets.
   *
   * @public
   */
  assessmentTargets: AssessmentTarget[] | undefined;

  /**
   * Assessment target details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTemplatesRequest {
  assessmentTemplateArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTemplatesResponse {
  /**
   * Information about the assessment templates.
   *
   * @public
   */
  assessmentTemplates: AssessmentTemplate[] | undefined;

  /**
   * Assessment template details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAccessRoleResponse {
  /**
   * The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS account.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A Boolean value that specifies whether the IAM role has the necessary policies attached to enable Amazon Inspector to access your AWS account.
   *
   * @public
   */
  valid: boolean | undefined;

  /**
   * The date when the cross-account access role was registered.
   *
   * @public
   */
  registeredAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExclusionsRequest {
  /**
   * The list of ARNs that specify the exclusions that you want to describe.
   *
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * The locale into which you want to translate the exclusion's title, description, and recommendation.
   *
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * This data type contains key-value pairs that identify various Amazon resources.
 *
 * @public
 */
export interface Scope {
  /**
   * The type of the scope.
   *
   * @public
   */
  key?: ScopeType | undefined;

  /**
   * The resource identifier for the specified scope type.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains information about what was excluded from an assessment run.
 *
 * @public
 */
export interface Exclusion {
  /**
   * The ARN that specifies the exclusion.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the exclusion.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the exclusion.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The recommendation for the exclusion.
   *
   * @public
   */
  recommendation: string | undefined;

  /**
   * The AWS resources for which the exclusion pertains.
   *
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * The system-defined attributes for the exclusion.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeExclusionsResponse {
  /**
   * Information about the exclusions.
   *
   * @public
   */
  exclusions: Record<string, Exclusion> | undefined;

  /**
   * Exclusion details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsRequest {
  /**
   * The ARN that specifies the finding that you want to describe.
   *
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * The locale into which you want to translate a finding description, recommendation, and the short description that identifies the finding.
   *
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * This data type is used in the Finding data type.
 *
 * @public
 */
export interface InspectorServiceAttributes {
  /**
   * The schema version of this data type.
   *
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * The ARN of the assessment run during which the finding is generated.
   *
   * @public
   */
  assessmentRunArn?: string | undefined;

  /**
   * The ARN of the rules package that is used to generate the finding.
   *
   * @public
   */
  rulesPackageArn?: string | undefined;
}

/**
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the DescribeFindings action.
 *
 * @public
 */
export interface Finding {
  /**
   * The ARN that specifies the finding.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The schema version of this data type.
   *
   * @public
   */
  schemaVersion?: number | undefined;

  /**
   * The data element is set to "Inspector".
   *
   * @public
   */
  service?: string | undefined;

  /**
   * This data type is used in the Finding data type.
   *
   * @public
   */
  serviceAttributes?: InspectorServiceAttributes | undefined;

  /**
   * The type of the host from which the finding is generated.
   *
   * @public
   */
  assetType?: AssetType | undefined;

  /**
   * A collection of attributes of the host from which the finding is generated.
   *
   * @public
   */
  assetAttributes?: AssetAttributes | undefined;

  /**
   * The ID of the finding.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The recommendation for the finding.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * The finding severity. Values can be set to High, Medium, Low, and Informational.
   *
   * @public
   */
  severity?: Severity | undefined;

  /**
   * The numeric value of the finding severity.
   *
   * @public
   */
  numericSeverity?: number | undefined;

  /**
   * This data element is currently not used.
   *
   * @public
   */
  confidence?: number | undefined;

  /**
   * This data element is currently not used.
   *
   * @public
   */
  indicatorOfCompromise?: boolean | undefined;

  /**
   * The system-defined attributes for the finding.
   *
   * @public
   */
  attributes: Attribute[] | undefined;

  /**
   * The user-defined attributes that are assigned to the finding.
   *
   * @public
   */
  userAttributes: Attribute[] | undefined;

  /**
   * The time when the finding was generated.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when AddAttributesToFindings is called.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsResponse {
  /**
   * Information about the finding.
   *
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * Finding details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsRequest {
  /**
   * The ARN that specifies the resource group that you want to describe.
   *
   * @public
   */
  resourceGroupArns: string[] | undefined;
}

/**
 * Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the DescribeResourceGroups action.
 *
 * @public
 */
export interface ResourceGroup {
  /**
   * The ARN of the resource group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The tags (key and value pairs) of the resource group. This data type property is used in the CreateResourceGroup action.
   *
   * @public
   */
  tags: ResourceGroupTag[] | undefined;

  /**
   * The time at which resource group is created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsResponse {
  /**
   * Information about a resource group.
   *
   * @public
   */
  resourceGroups: ResourceGroup[] | undefined;

  /**
   * Resource group details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesRequest {
  /**
   * The ARN that specifies the rules package that you want to describe.
   *
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * The locale that you want to translate a rules package description into.
   *
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * Contains information about an Amazon Inspector rules package. This data type is used as the response element in the DescribeRulesPackages action.
 *
 * @public
 */
export interface RulesPackage {
  /**
   * The ARN of the rules package.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the rules package.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version ID of the rules package.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The provider of the rules package.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * The description of the rules package.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesResponse {
  /**
   * Information about the rules package.
   *
   * @public
   */
  rulesPackages: RulesPackage[] | undefined;

  /**
   * Rules package details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * This data type is used in the Subscription data type.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * The event for which Amazon Simple Notification Service (SNS) notifications are sent.
   *
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * The time at which SubscribeToEvent is called.
   *
   * @public
   */
  subscribedAt: Date | undefined;
}

/**
 * Contains information about what is excluded from an assessment run given the current state of the assessment template.
 *
 * @public
 */
export interface ExclusionPreview {
  /**
   * The name of the exclusion preview.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the exclusion preview.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The recommendation for the exclusion preview.
   *
   * @public
   */
  recommendation: string | undefined;

  /**
   * The AWS resources for which the exclusion preview pertains.
   *
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * The system-defined attributes for the exclusion preview.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * This data type is used as a request parameter in the ListFindings action.
 *
 * @public
 */
export interface FindingFilter {
  /**
   * For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the **agentId** property of the Finding data type.
   *
   * @public
   */
  agentIds?: string[] | undefined;

  /**
   * For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the **autoScalingGroup** property of the Finding data type.
   *
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the **ruleName** property of the Finding data type.
   *
   * @public
   */
  ruleNames?: string[] | undefined;

  /**
   * For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the **severity** property of the Finding data type.
   *
   * @public
   */
  severities?: Severity[] | undefined;

  /**
   * For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the **rulesPackageArn** property of the Finding data type.
   *
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * For a record to match a filter, the list of values that are specified for this data type property must be contained in the list of values of the **attributes** property of the Finding data type.
   *
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the **userAttributes** property of the Finding data type.
   *
   * @public
   */
  userAttributes?: Attribute[] | undefined;

  /**
   * The time range during which the finding is generated.
   *
   * @public
   */
  creationTimeRange?: TimestampRange | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportRequest {
  /**
   * The ARN that specifies the assessment run for which you want to generate a report.
   *
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * Specifies the file format (html or pdf) of the assessment report that you want to generate.
   *
   * @public
   */
  reportFileFormat: ReportFileFormat | undefined;

  /**
   * Specifies the type of the assessment report that you want to generate. There are two types of assessment reports: a finding report and a full report. For more information, see [Assessment Reports](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html).
   *
   * @public
   */
  reportType: ReportType | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportResponse {
  /**
   * Specifies the status of the request to generate an assessment report.
   *
   * @public
   */
  status: ReportStatus | undefined;

  /**
   * Specifies the URL where you can find the generated assessment report. This parameter is only returned if the report is successfully generated.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetExclusionsPreviewRequest {
  /**
   * The ARN that specifies the assessment template for which the exclusions preview was requested.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * The unique identifier associated of the exclusions preview.
   *
   * @public
   */
  previewToken: string | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 100. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The locale into which you want to translate the exclusion's title, description, and recommendation.
   *
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * @public
 */
export interface GetExclusionsPreviewResponse {
  /**
   * Specifies the status of the request to generate an exclusions preview.
   *
   * @public
   */
  previewStatus: PreviewStatus | undefined;

  /**
   * Information about the exclusions included in the preview.
   *
   * @public
   */
  exclusionPreviews?: ExclusionPreview[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataRequest {
  /**
   * The ARN that specifies the assessment run that has the telemetry data that you want to obtain.
   *
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataResponse {
  /**
   * Telemetry details.
   *
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsRequest {
  /**
   * The ARN that specifies the assessment run whose agents you want to list.
   *
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * You can use this parameter to specify a subset of data to be included in the action's response.
   *
   * For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.
   *
   * @public
   */
  filter?: AgentFilter | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListAssessmentRunAgents** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsResponse {
  /**
   * A list of ARNs that specifies the agents returned by the action.
   *
   * @public
   */
  assessmentRunAgents: AssessmentRunAgent[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsRequest {
  /**
   * The ARNs that specify the assessment templates whose assessment runs you want to list.
   *
   * @public
   */
  assessmentTemplateArns?: string[] | undefined;

  /**
   * You can use this parameter to specify a subset of data to be included in the action's response.
   *
   * For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.
   *
   * @public
   */
  filter?: AssessmentRunFilter | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListAssessmentRuns** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsResponse {
  /**
   * A list of ARNs that specifies the assessment runs that are returned by the action.
   *
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsRequest {
  /**
   * You can use this parameter to specify a subset of data to be included in the action's response.
   *
   * For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.
   *
   * @public
   */
  filter?: AssessmentTargetFilter | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListAssessmentTargets** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsResponse {
  /**
   * A list of ARNs that specifies the assessment targets that are returned by the action.
   *
   * @public
   */
  assessmentTargetArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesRequest {
  /**
   * A list of ARNs that specifies the assessment targets whose assessment templates you want to list.
   *
   * @public
   */
  assessmentTargetArns?: string[] | undefined;

  /**
   * You can use this parameter to specify a subset of data to be included in the action's response.
   *
   * For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.
   *
   * @public
   */
  filter?: AssessmentTemplateFilter | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListAssessmentTemplates** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesResponse {
  /**
   * A list of ARNs that specifies the assessment templates returned by the action.
   *
   * @public
   */
  assessmentTemplateArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsRequest {
  /**
   * The ARN of the assessment template for which you want to list the existing event subscriptions.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListEventSubscriptions** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * This data type is used as a response element in the ListEventSubscriptions action.
 *
 * @public
 */
export interface Subscription {
  /**
   * The ARN of the assessment template that is used during the event for which the SNS notification is sent.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS notifications are sent.
   *
   * @public
   */
  topicArn: string | undefined;

  /**
   * The list of existing event subscriptions.
   *
   * @public
   */
  eventSubscriptions: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsResponse {
  /**
   * Details of the returned event subscriptions.
   *
   * @public
   */
  subscriptions: Subscription[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExclusionsRequest {
  /**
   * The ARN of the assessment run that generated the exclusions that you want to list.
   *
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListExclusionsRequest action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 100. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListExclusionsResponse {
  /**
   * A list of exclusions' ARNs returned by the action.
   *
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * The ARNs of the assessment runs that generate the findings that you want to list.
   *
   * @public
   */
  assessmentRunArns?: string[] | undefined;

  /**
   * You can use this parameter to specify a subset of data to be included in the action's response.
   *
   * For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.
   *
   * @public
   */
  filter?: FindingFilter | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListFindings** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * A list of ARNs that specifies the findings returned by the action.
   *
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesRequest {
  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **ListRulesPackages** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesResponse {
  /**
   * The list of ARNs that specifies the rules packages returned by the action.
   *
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
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
   * The ARN that specifies the assessment template whose tags you want to list.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A collection of key and value pairs.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsRequest {
  /**
   * The ARN of the assessment target whose agents you want to preview.
   *
   * @public
   */
  previewAgentsArn: string | undefined;

  /**
   * You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the **PreviewAgents** action. Subsequent calls to the action fill **nextToken** in the request with the value of **NextToken** from the previous response to continue listing data.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsResponse {
  /**
   * The resulting list of agents.
   *
   * @public
   */
  agentPreviews: AgentPreview[] | undefined;

  /**
   * When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the **nextToken** parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCrossAccountAccessRoleRequest {
  /**
   * The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsRequest {
  /**
   * The ARNs that specify the findings that you want to remove attributes from.
   *
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * The array of attribute keys that you want to remove from specified findings.
   *
   * @public
   */
  attributeKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsResponse {
  /**
   * Attributes details that cannot be described. An error code is provided for each failed item.
   *
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface SetTagsForResourceRequest {
  /**
   * The ARN of the assessment template that you want to set tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A collection of key and value pairs that you want to set to the assessment template.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunRequest {
  /**
   * The ARN of the assessment template of the assessment run that you want to start.
   *
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * You can specify the name for the assessment run. The name must be unique for the assessment template whose ARN is used to start the assessment run.
   *
   * @public
   */
  assessmentRunName?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunResponse {
  /**
   * The ARN of the assessment run that has been started.
   *
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentRunRequest {
  /**
   * The ARN of the assessment run that you want to stop.
   *
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * An input option that can be set to either START_EVALUATION or SKIP_EVALUATION. START_EVALUATION (the default value), stops the AWS agent from collecting data and begins the results evaluation and the findings generation process. SKIP_EVALUATION cancels the assessment run immediately, after which no findings are generated.
   *
   * @public
   */
  stopAction?: StopAction | undefined;
}

/**
 * @public
 */
export interface SubscribeToEventRequest {
  /**
   * The ARN of the assessment template that is used during the event for which you want to receive SNS notifications.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The event for which you want to receive SNS notifications.
   *
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * The ARN of the SNS topic to which the SNS notifications are sent.
   *
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeFromEventRequest {
  /**
   * The ARN of the assessment template that is used during the event for which you want to stop receiving SNS notifications.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The event for which you want to stop receiving SNS notifications.
   *
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * The ARN of the SNS topic to which SNS notifications are sent.
   *
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentTargetRequest {
  /**
   * The ARN of the assessment target that you want to update.
   *
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * The name of the assessment target that you want to update.
   *
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * The ARN of the resource group that is used to specify the new resource group to associate with the assessment target.
   *
   * @public
   */
  resourceGroupArn?: string | undefined;
}
