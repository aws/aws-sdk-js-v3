// smithy-typescript generated code
import {
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
 * <p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a>
 *          actions.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The attribute key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to assign attributes to.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attributes that you want to assign to specified findings.</p>
   * @public
   */
  attributes: Attribute[] | undefined;
}

/**
 * <p>Includes details about the failed items.</p>
 * @public
 */
export interface FailedItemDetails {
  /**
   * <p>The status code of a failed item.</p>
   * @public
   */
  failureCode: FailedItemErrorCode | undefined;

  /**
   * <p>Indicates whether you can immediately retry a request for this item for a specified
   *          resource.</p>
   * @public
   */
  retryable: boolean | undefined;
}

/**
 * @public
 */
export interface AddAttributesToFindingsResponse {
  /**
   * <p>Attribute details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * <p>Used in the exception error that is thrown if you start an assessment run for an
 *          assessment target that includes an EC2 instance that is already participating in another
 *          started assessment run.</p>
 * @public
 */
export interface AgentAlreadyRunningAssessment {
  /**
   * <p>ID of the agent that is running on an EC2 instance that is already participating in
   *          another started assessment run.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that has already been started.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          request parameter in the <a>ListAssessmentRunAgents</a> action.</p>
 * @public
 */
export interface AgentFilter {
  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   * @public
   */
  agentHealths: AgentHealth[] | undefined;

  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   * @public
   */
  agentHealthCodes: AgentHealthCode[] | undefined;
}

/**
 * <p>Used as a response element in the <a>PreviewAgents</a> action.</p>
 * @public
 */
export interface AgentPreview {
  /**
   * <p>The hostname of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The ID of the EC2 instance where the agent is installed.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The Auto Scaling group for the EC2 instance where the agent is installed.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The health status of the Amazon Inspector Agent.</p>
   * @public
   */
  agentHealth?: AgentHealth | undefined;

  /**
   * <p>The version of the Amazon Inspector Agent.</p>
   * @public
   */
  agentVersion?: string | undefined;

  /**
   * <p>The operating system running on the EC2 instance on which the Amazon Inspector Agent
   *          is installed.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>The kernel version of the operating system running on the EC2 instance on which the
   *          Amazon Inspector Agent is installed.</p>
   * @public
   */
  kernelVersion?: string | undefined;

  /**
   * <p>The IP address of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   * @public
   */
  ipv4Address?: string | undefined;
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 * @public
 */
export interface AssessmentRunNotification {
  /**
   * <p>The date of the notification.</p>
   * @public
   */
  date: Date | undefined;

  /**
   * <p>The event for which a notification is sent.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The message included in the notification.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The Boolean value that specifies whether the notification represents an
   *          error.</p>
   * @public
   */
  error: boolean | undefined;

  /**
   * <p>The SNS topic to which the SNS notification is sent.</p>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The status code of the SNS notification.</p>
   * @public
   */
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode | undefined;
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 * @public
 */
export interface AssessmentRunStateChange {
  /**
   * <p>The last time the assessment run state changed.</p>
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>The assessment run state.</p>
   * @public
   */
  state: AssessmentRunState | undefined;
}

/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the
 *          assessment run .</p>
 *          <p>Used as the response element in the <a>DescribeAssessmentRuns</a>
 *          action.</p>
 * @public
 */
export interface AssessmentRun {
  /**
   * <p>The ARN of the assessment run.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The auto-generated name for the assessment run.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment template that is associated with the assessment
   *          run.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The state of the assessment run.</p>
   * @public
   */
  state: AssessmentRunState | undefined;

  /**
   * <p>The duration of the assessment run.</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages selected for the assessment run.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation
   *          completion time or failure.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   * @public
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>A Boolean value (true or false) that specifies whether the process of collecting data
   *          from the agents is completed.</p>
   * @public
   */
  dataCollected: boolean | undefined;

  /**
   * <p>A list of the assessment run state changes.</p>
   * @public
   */
  stateChanges: AssessmentRunStateChange[] | undefined;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a
   *          particular generated finding is added to this list only once.</p>
   * @public
   */
  notifications: AssessmentRunNotification[] | undefined;

  /**
   * <p>Provides a total count of generated findings per severity.</p>
   * @public
   */
  findingCounts: Partial<Record<Severity, number>> | undefined;
}

/**
 * <p>The metadata about the Amazon Inspector application data metrics collected by the
 *          agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>
 * @public
 */
export interface TelemetryMetadata {
  /**
   * <p>A specific type of behavioral data that is collected by the agent.</p>
   * @public
   */
  messageType: string | undefined;

  /**
   * <p>The count of messages that the agent sends to the Amazon Inspector service.</p>
   * @public
   */
  count: number | undefined;

  /**
   * <p>The data size of messages that the agent sends to the Amazon Inspector
   *          service.</p>
   * @public
   */
  dataSize?: number | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          response element in the <a>ListAssessmentRunAgents</a> action.</p>
 * @public
 */
export interface AssessmentRunAgent {
  /**
   * <p>The AWS account of the EC2 instance where the agent is installed.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that is associated with the agent.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>The current health state of the agent.</p>
   * @public
   */
  agentHealth: AgentHealth | undefined;

  /**
   * <p>The detailed health state of the agent.</p>
   * @public
   */
  agentHealthCode: AgentHealthCode | undefined;

  /**
   * <p>The description for the agent health code.</p>
   * @public
   */
  agentHealthDetails?: string | undefined;

  /**
   * <p>The Auto Scaling group of the EC2 instance that is specified by the agent
   *          ID.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The Amazon Inspector application data metrics that are collected by the
   *          agent.</p>
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * <p>This data type is used in the <a>AssessmentRunFilter</a> data
 *          type.</p>
 * @public
 */
export interface TimestampRange {
  /**
   * <p>The minimum value of the timestamp range.</p>
   * @public
   */
  beginDate?: Date | undefined;

  /**
   * <p>The maximum value of the timestamp range.</p>
   * @public
   */
  endDate?: Date | undefined;
}

/**
 * <p>This data type is used in the <a>AssessmentTemplateFilter</a> data
 *          type.</p>
 * @public
 */
export interface DurationRange {
  /**
   * <p>The minimum value of the duration range. Must be greater than zero.</p>
   * @public
   */
  minSeconds?: number | undefined;

  /**
   * <p>The maximum value of the duration range. Must be less than or equal to 604800 seconds
   *          (1 week).</p>
   * @public
   */
  maxSeconds?: number | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentRuns</a>
 *          action.</p>
 * @public
 */
export interface AssessmentRunFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string containing a wildcard
   *          that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a>
   *          data type.</p>
   * @public
   */
  namePattern?: string | undefined;

  /**
   * <p>For a record to match a filter, one of the values specified for this data type
   *          property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   * @public
   */
  states?: AssessmentRunState[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  startTimeRange?: TimestampRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   * @public
   */
  completionTimeRange?: TimestampRange | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must match the <b>stateChangedAt</b> property of the
   *             <a>AssessmentRun</a> data type.</p>
   * @public
   */
  stateChangeTimeRange?: TimestampRange | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector application. This data type is used as
 *          the response element in the <a>DescribeAssessmentTargets</a> action.</p>
 * @public
 */
export interface AssessmentTarget {
  /**
   * <p>The ARN that specifies the Amazon Inspector assessment target.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the Amazon Inspector assessment target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is associated with the assessment
   *          target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;

  /**
   * <p>The time at which the assessment target is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTargets</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTargetFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.</p>
   * @public
   */
  assessmentTargetNamePattern?: string | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector assessment template. This data type is
 *          used as the response element in the <a>DescribeAssessmentTemplates</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTemplate {
  /**
   * <p>The ARN of the assessment template.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the assessment template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment target that corresponds to this assessment
   *          template.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The duration in seconds specified for this assessment template. The default value is
   *          3600 seconds (one hour). The maximum value is 86400 seconds (one day).</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the
   *          assessment run that uses this assessment template.</p>
   * @public
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent assessment run associated with this
   *          assessment template. This value exists only when the value of assessmentRunCount is
   *          greaterpa than zero.</p>
   * @public
   */
  lastAssessmentRunArn?: string | undefined;

  /**
   * <p>The number of existing assessment runs associated with this assessment template. This
   *          value can be zero or a positive integer.</p>
   * @public
   */
  assessmentRunCount: number | undefined;

  /**
   * <p>The time at which the assessment template is created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTemplates</a>
 *          action.</p>
 * @public
 */
export interface AssessmentTemplateFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.</p>
   * @public
   */
  namePattern?: string | undefined;

  /**
   * <p>For a record to match a filter, the value specified for this data type property must
   *          inclusively match any value between the specified minimum and maximum values of the
   *             <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   * @public
   */
  durationRange?: DurationRange | undefined;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;
}

/**
 * <p>Contains information about a private IP address associated with a network interface. This
 *          data type is used as a response element in the <a>DescribeFindings</a>
 *          action.</p>
 * @public
 */
export interface PrivateIp {
  /**
   * <p>The DNS name of the private IP address.</p>
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * <p>The full IP address of the network inteface.</p>
   * @public
   */
  privateIpAddress?: string | undefined;
}

/**
 * <p>Contains information about a security group associated with a network interface. This
 *          data type is used as one of the elements of the <a>NetworkInterface</a> data
 *          type.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The name of the security group.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The ID of the security group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>Contains information about the network interfaces interacting with an EC2 instance.
 *          This data type is used as one of the elements of the <a>AssetAttributes</a> data
 *          type.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * <p>The ID of a subnet associated with the network interface.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The ID of a VPC associated with the network interface.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The name of a private DNS associated with the network interface.</p>
   * @public
   */
  privateDnsName?: string | undefined;

  /**
   * <p>The private IP address associated with the network interface.</p>
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes
   *          the privateDnsName and privateIpAddress.</p>
   * @public
   */
  privateIpAddresses?: PrivateIp[] | undefined;

  /**
   * <p>The name of a public DNS associated with the network interface.</p>
   * @public
   */
  publicDnsName?: string | undefined;

  /**
   * <p>The public IP address from which the network interface is reachable.</p>
   * @public
   */
  publicIp?: string | undefined;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   * @public
   */
  ipv6Addresses?: string[] | undefined;

  /**
   * <p>A list of the security groups associated with the network interface. Includes the
   *          groupId and groupName.</p>
   * @public
   */
  securityGroups?: SecurityGroup[] | undefined;
}

/**
 * <p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>A value assigned to a tag key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>A collection of attributes of the host from which the finding is generated.</p>
 * @public
 */
export interface AssetAttributes {
  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ID of the agent that is installed on the EC2 instance where the finding is
   *          generated.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>The Auto Scaling group of the EC2 instance where the finding is generated.</p>
   * @public
   */
  autoScalingGroup?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where
   *          the finding is generated.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The hostname of the EC2 instance where the finding is generated.</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is
   *          generated.</p>
   * @public
   */
  ipv4Addresses?: string[] | undefined;

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the
   *          finding is generated.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTargetRequest {
  /**
   * <p>The user-defined name that identifies the assessment target that you want to create.
   *          The name must be unique within the AWS account.</p>
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN that specifies the resource group that is used to create the assessment
   *          target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account
   *          and region are included in the assessment target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTargetResponse {
  /**
   * <p>The ARN that specifies the assessment target that is created.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment target for which you want to create the
   *          assessment template.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The user-defined name that identifies the assessment template that you want to
   *          create. You can create several assessment templates for an assessment target. The names of
   *          the assessment templates that correspond to a particular assessment target must be
   *          unique.</p>
   * @public
   */
  assessmentTemplateName: string | undefined;

  /**
   * <p>The duration of the assessment run in seconds.</p>
   * @public
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The ARNs that specify the rules packages that you want to attach to the assessment
   *          template.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every finding that is generated by
   *          the assessment run that uses this assessment template. An attribute is a key and value pair
   *          (an <a>Attribute</a> object). Within an assessment template, each key must be
   *          unique.</p>
   * @public
   */
  userAttributesForFindings?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface CreateAssessmentTemplateResponse {
  /**
   * <p>The ARN that specifies the assessment template that is created.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which you want to create an
   *          exclusions preview.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateExclusionsPreviewResponse {
  /**
   * <p>Specifies the unique identifier of the requested exclusions preview. You can use the
   *          unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview
   *          API.</p>
   * @public
   */
  previewToken: string | undefined;
}

/**
 * <p>This data type is used as one of the elements of the <a>ResourceGroup</a>
 *          data type.</p>
 * @public
 */
export interface ResourceGroupTag {
  /**
   * <p>A tag key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value assigned to a tag key.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupRequest {
  /**
   * <p>A collection of keys and an array of possible values,
   *          '[\{"key":"key1","values":["Value1","Value2"]\},\{"key":"Key2","values":["Value3"]\}]'.</p>
   *          <p>For example,'[\{"key":"Name","values":["TestEC2Instance"]\}]'.</p>
   * @public
   */
  resourceGroupTags: ResourceGroupTag[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceGroupResponse {
  /**
   * <p>The ARN that specifies the resource group that is created.</p>
   * @public
   */
  resourceGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentRunRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to delete.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTargetRequest {
  /**
   * <p>The ARN that specifies the assessment target that you want to delete.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssessmentTemplateRequest {
  /**
   * <p>The ARN that specifies the assessment template that you want to delete.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsRequest {
  /**
   * <p>The ARN that specifies the assessment run that you want to describe.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentRunsResponse {
  /**
   * <p>Information about the assessment run.</p>
   * @public
   */
  assessmentRuns: AssessmentRun[] | undefined;

  /**
   * <p>Assessment run details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsRequest {
  /**
   * <p>The ARNs that specifies the assessment targets that you want to describe.</p>
   * @public
   */
  assessmentTargetArns: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentTargetsResponse {
  /**
   * <p>Information about the assessment targets.</p>
   * @public
   */
  assessmentTargets: AssessmentTarget[] | undefined;

  /**
   * <p>Assessment target details that cannot be described. An error code is provided for
   *          each failed item.</p>
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
   * <p>Information about the assessment templates.</p>
   * @public
   */
  assessmentTemplates: AssessmentTemplate[] | undefined;

  /**
   * <p>Assessment template details that cannot be described. An error code is provided for
   *          each failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeCrossAccountAccessRoleResponse {
  /**
   * <p>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS
   *          account.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A Boolean value that specifies whether the IAM role has the necessary policies
   *          attached to enable Amazon Inspector to access your AWS account.</p>
   * @public
   */
  valid: boolean | undefined;

  /**
   * <p>The date when the cross-account access role was registered.</p>
   * @public
   */
  registeredAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExclusionsRequest {
  /**
   * <p>The list of ARNs that specify the exclusions that you want to describe.</p>
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * <p>This data type contains key-value pairs that identify various Amazon
 *          resources.</p>
 * @public
 */
export interface Scope {
  /**
   * <p>The type of the scope.</p>
   * @public
   */
  key?: ScopeType | undefined;

  /**
   * <p>The resource identifier for the specified scope type.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains information about what was excluded from an assessment run.</p>
 * @public
 */
export interface Exclusion {
  /**
   * <p>The ARN that specifies the exclusion.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the exclusion.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion.</p>
   * @public
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeExclusionsResponse {
  /**
   * <p>Information about the exclusions.</p>
   * @public
   */
  exclusions: Record<string, Exclusion> | undefined;

  /**
   * <p>Exclusion details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsRequest {
  /**
   * <p>The ARN that specifies the finding that you want to describe.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate a finding description, recommendation,
   *          and the short description that identifies the finding.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * <p>This data type is used in the <a>Finding</a> data type.</p>
 * @public
 */
export interface InspectorServiceAttributes {
  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ARN of the assessment run during which the finding is generated.</p>
   * @public
   */
  assessmentRunArn?: string | undefined;

  /**
   * <p>The ARN of the rules package that is used to generate the finding.</p>
   * @public
   */
  rulesPackageArn?: string | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector finding. This data type is used as the
 *          response element in the <a>DescribeFindings</a> action.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ARN that specifies the finding.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The schema version of this data type.</p>
   * @public
   */
  schemaVersion?: number | undefined;

  /**
   * <p>The data element is set to "Inspector".</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   * @public
   */
  serviceAttributes?: InspectorServiceAttributes | undefined;

  /**
   * <p>The type of the host from which the finding is generated.</p>
   * @public
   */
  assetType?: AssetType | undefined;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   * @public
   */
  assetAttributes?: AssetAttributes | undefined;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The recommendation for the finding.</p>
   * @public
   */
  recommendation?: string | undefined;

  /**
   * <p>The finding severity. Values can be set to High, Medium, Low, and
   *          Informational.</p>
   * @public
   */
  severity?: Severity | undefined;

  /**
   * <p>The numeric value of the finding severity.</p>
   * @public
   */
  numericSeverity?: number | undefined;

  /**
   * <p>This data element is currently not used.</p>
   * @public
   */
  confidence?: number | undefined;

  /**
   * <p>This data element is currently not used.</p>
   * @public
   */
  indicatorOfCompromise?: boolean | undefined;

  /**
   * <p>The system-defined attributes for the finding.</p>
   * @public
   */
  attributes: Attribute[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   * @public
   */
  userAttributes: Attribute[] | undefined;

  /**
   * <p>The time when the finding was generated.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeFindingsResponse {
  /**
   * <p>Information about the finding.</p>
   * @public
   */
  findings: Finding[] | undefined;

  /**
   * <p>Finding details that cannot be described. An error code is provided for each failed
   *          item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsRequest {
  /**
   * <p>The ARN that specifies the resource group that you want to describe.</p>
   * @public
   */
  resourceGroupArns: string[] | undefined;
}

/**
 * <p>Contains information about a resource group. The resource group defines a set of tags
 *          that, when queried, identify the AWS resources that make up the assessment target. This
 *          data type is used as the response element in the <a>DescribeResourceGroups</a>
 *          action.</p>
 * @public
 */
export interface ResourceGroup {
  /**
   * <p>The ARN of the resource group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used
   *          in the <a>CreateResourceGroup</a> action.</p>
   * @public
   */
  tags: ResourceGroupTag[] | undefined;

  /**
   * <p>The time at which resource group is created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupsResponse {
  /**
   * <p>Information about a resource group.</p>
   * @public
   */
  resourceGroups: ResourceGroup[] | undefined;

  /**
   * <p>Resource group details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesRequest {
  /**
   * <p>The ARN that specifies the rules package that you want to describe.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The locale that you want to translate a rules package description into.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * <p>Contains information about an Amazon Inspector rules package. This data type is used
 *          as the response element in the <a>DescribeRulesPackages</a> action.</p>
 * @public
 */
export interface RulesPackage {
  /**
   * <p>The ARN of the rules package.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the rules package.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version ID of the rules package.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The provider of the rules package.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The description of the rules package.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesPackagesResponse {
  /**
   * <p>Information about the rules package.</p>
   * @public
   */
  rulesPackages: RulesPackage[] | undefined;

  /**
   * <p>Rules package details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * <p>This data type is used in the <a>Subscription</a> data type.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>The event for which Amazon Simple Notification Service (SNS) notifications are
   *          sent.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   * @public
   */
  subscribedAt: Date | undefined;
}

/**
 * <p>Contains information about what is excluded from an assessment run given the current
 *          state of the assessment template.</p>
 * @public
 */
export interface ExclusionPreview {
  /**
   * <p>The name of the exclusion preview.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The description of the exclusion preview.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion preview.</p>
   * @public
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   * @public
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;
}

/**
 * <p>This data type is used as a request parameter in the <a>ListFindings</a>
 *          action.</p>
 * @public
 */
export interface FindingFilter {
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  agentIds?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  autoScalingGroups?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  ruleNames?: string[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  severities?: Severity[] | undefined;

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  rulesPackageArns?: string[] | undefined;

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data
   *          type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   * @public
   */
  attributes?: Attribute[] | undefined;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data
   *          type.</p>
   * @public
   */
  userAttributes?: Attribute[] | undefined;

  /**
   * <p>The time range during which the finding is generated.</p>
   * @public
   */
  creationTimeRange?: TimestampRange | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportRequest {
  /**
   * <p>The ARN that specifies the assessment run for which you want to generate a
   *          report.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>Specifies the file format (html or pdf) of the assessment report that you want to
   *          generate.</p>
   * @public
   */
  reportFileFormat: ReportFileFormat | undefined;

  /**
   * <p>Specifies the type of the assessment report that you want to generate. There are two
   *          types of assessment reports: a finding report and a full report. For more information, see
   *             <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. </p>
   * @public
   */
  reportType: ReportType | undefined;
}

/**
 * @public
 */
export interface GetAssessmentReportResponse {
  /**
   * <p>Specifies the status of the request to generate an assessment report. </p>
   * @public
   */
  status: ReportStatus | undefined;

  /**
   * <p>Specifies the URL where you can find the generated assessment report. This parameter
   *          is only returned if the report is successfully generated.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetExclusionsPreviewRequest {
  /**
   * <p>The ARN that specifies the assessment template for which the exclusions preview was
   *          requested.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The unique identifier associated of the exclusions preview.</p>
   * @public
   */
  previewToken: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to
   *          the action fill nextToken in the request with the value of nextToken from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   * @public
   */
  locale?: Locale | undefined;
}

/**
 * @public
 */
export interface GetExclusionsPreviewResponse {
  /**
   * <p>Specifies the status of the request to generate an exclusions preview.</p>
   * @public
   */
  previewStatus: PreviewStatus | undefined;

  /**
   * <p>Information about the exclusions included in the preview.</p>
   * @public
   */
  exclusionPreviews?: ExclusionPreview[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataRequest {
  /**
   * <p>The ARN that specifies the assessment run that has the telemetry data that you want
   *          to obtain.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface GetTelemetryMetadataResponse {
  /**
   * <p>Telemetry details.</p>
   * @public
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsRequest {
  /**
   * <p>The ARN that specifies the assessment run whose agents you want to list.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AgentFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRunAgents</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunAgentsResponse {
  /**
   * <p>A list of ARNs that specifies the agents returned by the action.</p>
   * @public
   */
  assessmentRunAgents: AssessmentRunAgent[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsRequest {
  /**
   * <p>The ARNs that specify the assessment templates whose assessment runs you want to
   *          list.</p>
   * @public
   */
  assessmentTemplateArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentRunFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRuns</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentRunsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment runs that are returned by the
   *          action.</p>
   * @public
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsRequest {
  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentTargetFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTargets</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTargetsResponse {
  /**
   * <p>A list of ARNs that specifies the assessment targets that are returned by the
   *          action.</p>
   * @public
   */
  assessmentTargetArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesRequest {
  /**
   * <p>A list of ARNs that specifies the assessment targets whose assessment templates you
   *          want to list.</p>
   * @public
   */
  assessmentTargetArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: AssessmentTemplateFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTemplates</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssessmentTemplatesResponse {
  /**
   * <p>A list of ARNs that specifies the assessment templates returned by the
   *          action.</p>
   * @public
   */
  assessmentTemplateArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsRequest {
  /**
   * <p>The ARN of the assessment template for which you want to list the existing event
   *          subscriptions.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListEventSubscriptions</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The ARN of the assessment template that is used during the event for which the SNS
   *          notification is sent.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS
   *          notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The list of existing event subscriptions.</p>
   * @public
   */
  eventSubscriptions: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface ListEventSubscriptionsResponse {
  /**
   * <p>Details of the returned event subscriptions.</p>
   * @public
   */
  subscriptions: Subscription[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExclusionsRequest {
  /**
   * <p>The ARN of the assessment run that generated the exclusions that you want to
   *          list.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the ListExclusionsRequest action. Subsequent calls to the
   *          action fill nextToken in the request with the value of nextToken from the previous response
   *          to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListExclusionsResponse {
  /**
   * <p>A list of exclusions' ARNs returned by the action.</p>
   * @public
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The ARNs of the assessment runs that generate the findings that you want to
   *          list.</p>
   * @public
   */
  assessmentRunArns?: string[] | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   * @public
   */
  filter?: FindingFilter | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListFindings</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>A list of ARNs that specifies the findings returned by the action.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesRequest {
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListRulesPackages</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRulesPackagesResponse {
  /**
   * <p>The list of ARNs that specifies the rules packages returned by the action.</p>
   * @public
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN that specifies the assessment template whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of key and value pairs.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsRequest {
  /**
   * <p>The ARN of the assessment target whose agents you want to preview.</p>
   * @public
   */
  previewAgentsArn: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>PreviewAgents</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface PreviewAgentsResponse {
  /**
   * <p>The resulting list of agents.</p>
   * @public
   */
  agentPreviews: AgentPreview[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCrossAccountAccessRoleRequest {
  /**
   * <p>The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to
   *          perform security assessments. </p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsRequest {
  /**
   * <p>The ARNs that specify the findings that you want to remove attributes from.</p>
   * @public
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attribute keys that you want to remove from specified
   *          findings.</p>
   * @public
   */
  attributeKeys: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveAttributesFromFindingsResponse {
  /**
   * <p>Attributes details that cannot be described. An error code is provided for each
   *          failed item.</p>
   * @public
   */
  failedItems: Record<string, FailedItemDetails> | undefined;
}

/**
 * @public
 */
export interface SetTagsForResourceRequest {
  /**
   * <p>The ARN of the assessment template that you want to set tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of key and value pairs that you want to set to the assessment
   *          template.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment template of the assessment run that you want to
   *          start.</p>
   * @public
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>You can specify the name for the assessment run. The name must be unique for the
   *          assessment template whose ARN is used to start the assessment run.</p>
   * @public
   */
  assessmentRunName?: string | undefined;
}

/**
 * @public
 */
export interface StartAssessmentRunResponse {
  /**
   * <p>The ARN of the assessment run that has been started.</p>
   * @public
   */
  assessmentRunArn: string | undefined;
}

/**
 * @public
 */
export interface StopAssessmentRunRequest {
  /**
   * <p>The ARN of the assessment run that you want to stop.</p>
   * @public
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>An input option that can be set to either START_EVALUATION or SKIP_EVALUATION.
   *          START_EVALUATION (the default value), stops the AWS agent from collecting data and begins
   *          the results evaluation and the findings generation process. SKIP_EVALUATION cancels the
   *          assessment run immediately, after which no findings are generated.</p>
   * @public
   */
  stopAction?: StopAction | undefined;
}

/**
 * @public
 */
export interface SubscribeToEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to receive SNS notifications.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to receive SNS notifications.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The ARN of the SNS topic to which the SNS notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UnsubscribeFromEventRequest {
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to stop receiving SNS notifications.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to stop receiving SNS notifications.</p>
   * @public
   */
  event: InspectorEvent | undefined;

  /**
   * <p>The ARN of the SNS topic to which SNS notifications are sent.</p>
   * @public
   */
  topicArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssessmentTargetRequest {
  /**
   * <p>The ARN of the assessment target that you want to update.</p>
   * @public
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The name of the assessment target that you want to update.</p>
   * @public
   */
  assessmentTargetName: string | undefined;

  /**
   * <p>The ARN of the resource group that is used to specify the new resource group to
   *          associate with the assessment target.</p>
   * @public
   */
  resourceGroupArn?: string | undefined;
}
