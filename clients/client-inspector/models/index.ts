import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccessDeniedErrorCode {
  ACCESS_DENIED_TO_ASSESSMENT_RUN = "ACCESS_DENIED_TO_ASSESSMENT_RUN",
  ACCESS_DENIED_TO_ASSESSMENT_TARGET = "ACCESS_DENIED_TO_ASSESSMENT_TARGET",
  ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE = "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE",
  ACCESS_DENIED_TO_FINDING = "ACCESS_DENIED_TO_FINDING",
  ACCESS_DENIED_TO_IAM_ROLE = "ACCESS_DENIED_TO_IAM_ROLE",
  ACCESS_DENIED_TO_RESOURCE_GROUP = "ACCESS_DENIED_TO_RESOURCE_GROUP",
  ACCESS_DENIED_TO_RULES_PACKAGE = "ACCESS_DENIED_TO_RULES_PACKAGE",
  ACCESS_DENIED_TO_SNS_TOPIC = "ACCESS_DENIED_TO_SNS_TOPIC",
}

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: AccessDeniedErrorCode | string | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export interface AddAttributesToFindingsRequest {
  __type?: "AddAttributesToFindingsRequest";
  /**
   * <p>The ARNs that specify the findings that you want to assign attributes to.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attributes that you want to assign to specified findings.</p>
   */
  attributes: Attribute[] | undefined;
}

export namespace AddAttributesToFindingsRequest {
  export const filterSensitiveLog = (obj: AddAttributesToFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AddAttributesToFindingsRequest => __isa(o, "AddAttributesToFindingsRequest");
}

export interface AddAttributesToFindingsResponse {
  __type?: "AddAttributesToFindingsResponse";
  /**
   * <p>Attribute details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace AddAttributesToFindingsResponse {
  export const filterSensitiveLog = (obj: AddAttributesToFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AddAttributesToFindingsResponse => __isa(o, "AddAttributesToFindingsResponse");
}

/**
 * <p>Used in the exception error that is thrown if you start an assessment run for an
 *          assessment target that includes an EC2 instance that is already participating in another
 *          started assessment run.</p>
 */
export interface AgentAlreadyRunningAssessment {
  __type?: "AgentAlreadyRunningAssessment";
  /**
   * <p>ID of the agent that is running on an EC2 instance that is already participating in
   *          another started assessment run.</p>
   */
  agentId: string | undefined;

  /**
   * <p>The ARN of the assessment run that has already been started.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace AgentAlreadyRunningAssessment {
  export const filterSensitiveLog = (obj: AgentAlreadyRunningAssessment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AgentAlreadyRunningAssessment => __isa(o, "AgentAlreadyRunningAssessment");
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          request parameter in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface AgentFilter {
  __type?: "AgentFilter";
  /**
   * <p>The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. </p>
   */
  agentHealthCodes: (AgentHealthCode | string)[] | undefined;

  /**
   * <p>The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.</p>
   */
  agentHealths: (AgentHealth | string)[] | undefined;
}

export namespace AgentFilter {
  export const filterSensitiveLog = (obj: AgentFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AgentFilter => __isa(o, "AgentFilter");
}

export enum AgentHealth {
  HEALTHY = "HEALTHY",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

export enum AgentHealthCode {
  IDLE = "IDLE",
  RUNNING = "RUNNING",
  SHUTDOWN = "SHUTDOWN",
  THROTTLED = "THROTTLED",
  UNHEALTHY = "UNHEALTHY",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Used as a response element in the <a>PreviewAgents</a> action.</p>
 */
export interface AgentPreview {
  __type?: "AgentPreview";
  /**
   * <p>The health status of the Amazon Inspector Agent.</p>
   */
  agentHealth?: AgentHealth | string;

  /**
   * <p>The kernel version of the operating system running on the EC2 instance on which the
   *          Amazon Inspector Agent is installed.</p>
   */
  kernelVersion?: string;

  /**
   * <p>The operating system running on the EC2 instance on which the Amazon Inspector Agent
   *          is installed.</p>
   */
  operatingSystem?: string;

  /**
   * <p>The Auto Scaling group for the EC2 instance where the agent is installed.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The version of the Amazon Inspector Agent.</p>
   */
  agentVersion?: string;

  /**
   * <p>The IP address of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   */
  ipv4Address?: string;

  /**
   * <p>The hostname of the EC2 instance on which the Amazon Inspector Agent is
   *          installed.</p>
   */
  hostname?: string;

  /**
   * <p>The ID of the EC2 instance where the agent is installed.</p>
   */
  agentId: string | undefined;
}

export namespace AgentPreview {
  export const filterSensitiveLog = (obj: AgentPreview): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AgentPreview => __isa(o, "AgentPreview");
}

/**
 * <p>You started an assessment run, but one of the instances is already participating in
 *          another assessment run.</p>
 */
export interface AgentsAlreadyRunningAssessmentException extends __SmithyException, $MetadataBearer {
  name: "AgentsAlreadyRunningAssessmentException";
  $fault: "client";
  /**
   * <p></p>
   */
  agents: AgentAlreadyRunningAssessment[] | undefined;

  /**
   * <p></p>
   */
  agentsTruncated: boolean | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace AgentsAlreadyRunningAssessmentException {
  export const filterSensitiveLog = (obj: AgentsAlreadyRunningAssessmentException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AgentsAlreadyRunningAssessmentException =>
    __isa(o, "AgentsAlreadyRunningAssessmentException");
}

/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the
 *          assessment run .</p>
 *          <p>Used as the response element in the <a>DescribeAssessmentRuns</a>
 *          action.</p>
 */
export interface AssessmentRun {
  __type?: "AssessmentRun";
  /**
   * <p>Provides a total count of generated findings per severity.</p>
   */
  findingCounts: { [key: string]: number } | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The rules packages selected for the assessment run.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The ARN of the assessment template that is associated with the assessment
   *          run.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a
   *          particular generated finding is added to this list only once.</p>
   */
  notifications: AssessmentRunNotification[] | undefined;

  /**
   * <p>The state of the assessment run.</p>
   */
  state: AssessmentRunState | string | undefined;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation
   *          completion time or failure.</p>
   */
  completedAt?: Date;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   */
  stateChangedAt: Date | undefined;

  /**
   * <p>The auto-generated name for the assessment run.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the assessment run.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  startedAt?: Date;

  /**
   * <p>A list of the assessment run state changes.</p>
   */
  stateChanges: AssessmentRunStateChange[] | undefined;

  /**
   * <p>The duration of the assessment run.</p>
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>A Boolean value (true or false) that specifies whether the process of collecting data
   *          from the agents is completed.</p>
   */
  dataCollected: boolean | undefined;
}

export namespace AssessmentRun {
  export const filterSensitiveLog = (obj: AssessmentRun): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRun => __isa(o, "AssessmentRun");
}

/**
 * <p>Contains information about an Amazon Inspector agent. This data type is used as a
 *          response element in the <a>ListAssessmentRunAgents</a> action.</p>
 */
export interface AssessmentRunAgent {
  __type?: "AssessmentRunAgent";
  /**
   * <p>The ARN of the assessment run that is associated with the agent.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>The detailed health state of the agent.</p>
   */
  agentHealthCode: AgentHealthCode | string | undefined;

  /**
   * <p>The Auto Scaling group of the EC2 instance that is specified by the agent
   *          ID.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The AWS account of the EC2 instance where the agent is installed.</p>
   */
  agentId: string | undefined;

  /**
   * <p>The current health state of the agent.</p>
   */
  agentHealth: AgentHealth | string | undefined;

  /**
   * <p>The Amazon Inspector application data metrics that are collected by the
   *          agent.</p>
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;

  /**
   * <p>The description for the agent health code.</p>
   */
  agentHealthDetails?: string;
}

export namespace AssessmentRunAgent {
  export const filterSensitiveLog = (obj: AssessmentRunAgent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRunAgent => __isa(o, "AssessmentRunAgent");
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentRuns</a>
 *          action.</p>
 */
export interface AssessmentRunFilter {
  __type?: "AssessmentRunFilter";
  /**
   * <p>For a record to match a filter, an explicit value or a string containing a wildcard
   *          that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a>
   *          data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, one of the values specified for this data type
   *          property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   */
  states?: (AssessmentRunState | string)[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  startTimeRange?: TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  durationRange?: DurationRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must match the <b>stateChangedAt</b> property of the
   *             <a>AssessmentRun</a> data type.</p>
   */
  stateChangeTimeRange?: TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must inclusively match any value between the specified minimum and maximum values
   *          of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  completionTimeRange?: TimestampRange;
}

export namespace AssessmentRunFilter {
  export const filterSensitiveLog = (obj: AssessmentRunFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRunFilter => __isa(o, "AssessmentRunFilter");
}

/**
 * <p>You cannot perform a specified action if an assessment run is currently in
 *          progress.</p>
 */
export interface AssessmentRunInProgressException extends __SmithyException, $MetadataBearer {
  name: "AssessmentRunInProgressException";
  $fault: "client";
  /**
   * <p>The ARNs of the assessment runs that are currently in progress.</p>
   */
  assessmentRunArns: string[] | undefined;

  /**
   * <p>Boolean value that indicates whether the ARN list of the assessment runs is
   *          truncated.</p>
   */
  assessmentRunArnsTruncated: boolean | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;
}

export namespace AssessmentRunInProgressException {
  export const filterSensitiveLog = (obj: AssessmentRunInProgressException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRunInProgressException => __isa(o, "AssessmentRunInProgressException");
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 */
export interface AssessmentRunNotification {
  __type?: "AssessmentRunNotification";
  /**
   * <p>The message included in the notification.</p>
   */
  message?: string;

  /**
   * <p>The date of the notification.</p>
   */
  date: Date | undefined;

  /**
   * <p>The status code of the SNS notification.</p>
   */
  snsPublishStatusCode?: AssessmentRunNotificationSnsStatusCode | string;

  /**
   * <p>The event for which a notification is sent.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The SNS topic to which the SNS notification is sent.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The Boolean value that specifies whether the notification represents an
   *          error.</p>
   */
  error: boolean | undefined;
}

export namespace AssessmentRunNotification {
  export const filterSensitiveLog = (obj: AssessmentRunNotification): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRunNotification => __isa(o, "AssessmentRunNotification");
}

export enum AssessmentRunNotificationSnsStatusCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  SUCCESS = "SUCCESS",
  TOPIC_DOES_NOT_EXIST = "TOPIC_DOES_NOT_EXIST",
}

export enum AssessmentRunState {
  CANCELED = "CANCELED",
  COLLECTING_DATA = "COLLECTING_DATA",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS",
  CREATED = "CREATED",
  DATA_COLLECTED = "DATA_COLLECTED",
  ERROR = "ERROR",
  EVALUATING_RULES = "EVALUATING_RULES",
  FAILED = "FAILED",
  START_DATA_COLLECTION_IN_PROGRESS = "START_DATA_COLLECTION_IN_PROGRESS",
  START_DATA_COLLECTION_PENDING = "START_DATA_COLLECTION_PENDING",
  START_EVALUATING_RULES_PENDING = "START_EVALUATING_RULES_PENDING",
  STOP_DATA_COLLECTION_PENDING = "STOP_DATA_COLLECTION_PENDING",
}

/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data
 *          type.</p>
 */
export interface AssessmentRunStateChange {
  __type?: "AssessmentRunStateChange";
  /**
   * <p>The assessment run state.</p>
   */
  state: AssessmentRunState | string | undefined;

  /**
   * <p>The last time the assessment run state changed.</p>
   */
  stateChangedAt: Date | undefined;
}

export namespace AssessmentRunStateChange {
  export const filterSensitiveLog = (obj: AssessmentRunStateChange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentRunStateChange => __isa(o, "AssessmentRunStateChange");
}

/**
 * <p>Contains information about an Amazon Inspector application. This data type is used as
 *          the response element in the <a>DescribeAssessmentTargets</a> action.</p>
 */
export interface AssessmentTarget {
  __type?: "AssessmentTarget";
  /**
   * <p>The ARN that specifies the Amazon Inspector assessment target.</p>
   */
  arn: string | undefined;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN that specifies the resource group that is associated with the assessment
   *          target.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The name of the Amazon Inspector assessment target.</p>
   */
  name: string | undefined;

  /**
   * <p>The time at which the assessment target is created.</p>
   */
  createdAt: Date | undefined;
}

export namespace AssessmentTarget {
  export const filterSensitiveLog = (obj: AssessmentTarget): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentTarget => __isa(o, "AssessmentTarget");
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTargets</a>
 *          action.</p>
 */
export interface AssessmentTargetFilter {
  __type?: "AssessmentTargetFilter";
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.</p>
   */
  assessmentTargetNamePattern?: string;
}

export namespace AssessmentTargetFilter {
  export const filterSensitiveLog = (obj: AssessmentTargetFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentTargetFilter => __isa(o, "AssessmentTargetFilter");
}

/**
 * <p>Contains information about an Amazon Inspector assessment template. This data type is
 *          used as the response element in the <a>DescribeAssessmentTemplates</a>
 *          action.</p>
 */
export interface AssessmentTemplate {
  __type?: "AssessmentTemplate";
  /**
   * <p>The ARN of the assessment target that corresponds to this assessment
   *          template.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The duration in seconds specified for this assessment template. The default value is
   *          3600 seconds (one hour). The maximum value is 86400 seconds (one day).</p>
   */
  durationInSeconds: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent assessment run associated with this
   *          assessment template. This value exists only when the value of assessmentRunCount is
   *          greaterpa than zero.</p>
   */
  lastAssessmentRunArn?: string;

  /**
   * <p>The time at which the assessment template is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The number of existing assessment runs associated with this assessment template. This
   *          value can be zero or a positive integer.</p>
   */
  assessmentRunCount: number | undefined;

  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the
   *          assessment run that uses this assessment template.</p>
   */
  userAttributesForFindings: Attribute[] | undefined;

  /**
   * <p>The ARN of the assessment template.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the assessment template.</p>
   */
  name: string | undefined;
}

export namespace AssessmentTemplate {
  export const filterSensitiveLog = (obj: AssessmentTemplate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentTemplate => __isa(o, "AssessmentTemplate");
}

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTemplates</a>
 *          action.</p>
 */
export interface AssessmentTemplateFilter {
  __type?: "AssessmentTemplateFilter";
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a
   *          wildcard that is specified for this data type property must match the value of the
   *             <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type
   *          property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];

  /**
   * <p>For a record to match a filter, the value specified for this data type property must
   *          inclusively match any value between the specified minimum and maximum values of the
   *             <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  durationRange?: DurationRange;
}

export namespace AssessmentTemplateFilter {
  export const filterSensitiveLog = (obj: AssessmentTemplateFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssessmentTemplateFilter => __isa(o, "AssessmentTemplateFilter");
}

/**
 * <p>A collection of attributes of the host from which the finding is generated.</p>
 */
export interface AssetAttributes {
  __type?: "AssetAttributes";
  /**
   * <p>The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where
   *          the finding is generated.</p>
   */
  amiId?: string;

  /**
   * <p>The hostname of the EC2 instance where the finding is generated.</p>
   */
  hostname?: string;

  /**
   * <p>An array of the network interfaces interacting with the EC2 instance where the
   *          finding is generated.</p>
   */
  networkInterfaces?: NetworkInterface[];

  /**
   * <p>The ID of the agent that is installed on the EC2 instance where the finding is
   *          generated.</p>
   */
  agentId?: string;

  /**
   * <p>The tags related to the EC2 instance where the finding is generated.</p>
   */
  tags?: Tag[];

  /**
   * <p>The Auto Scaling group of the EC2 instance where the finding is generated.</p>
   */
  autoScalingGroup?: string;

  /**
   * <p>The list of IP v4 addresses of the EC2 instance where the finding is
   *          generated.</p>
   */
  ipv4Addresses?: string[];

  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number | undefined;
}

export namespace AssetAttributes {
  export const filterSensitiveLog = (obj: AssetAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AssetAttributes => __isa(o, "AssetAttributes");
}

export enum AssetType {
  EC2_INSTANCE = "ec2-instance",
}

/**
 * <p>This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a>
 *          actions.</p>
 */
export interface Attribute {
  __type?: "Attribute";
  /**
   * <p>The attribute key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value assigned to the attribute key.</p>
   */
  value?: string;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Attribute => __isa(o, "Attribute");
}

export interface CreateAssessmentTargetRequest {
  __type?: "CreateAssessmentTargetRequest";
  /**
   * <p>The ARN that specifies the resource group that is used to create the assessment
   *          target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account
   *          and region are included in the assessment target.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The user-defined name that identifies the assessment target that you want to create.
   *          The name must be unique within the AWS account.</p>
   */
  assessmentTargetName: string | undefined;
}

export namespace CreateAssessmentTargetRequest {
  export const filterSensitiveLog = (obj: CreateAssessmentTargetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssessmentTargetRequest => __isa(o, "CreateAssessmentTargetRequest");
}

export interface CreateAssessmentTargetResponse {
  __type?: "CreateAssessmentTargetResponse";
  /**
   * <p>The ARN that specifies the assessment target that is created.</p>
   */
  assessmentTargetArn: string | undefined;
}

export namespace CreateAssessmentTargetResponse {
  export const filterSensitiveLog = (obj: CreateAssessmentTargetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssessmentTargetResponse => __isa(o, "CreateAssessmentTargetResponse");
}

export interface CreateAssessmentTemplateRequest {
  __type?: "CreateAssessmentTemplateRequest";
  /**
   * <p>The ARNs that specify the rules packages that you want to attach to the assessment
   *          template.</p>
   */
  rulesPackageArns: string[] | undefined;

  /**
   * <p>The user-defined name that identifies the assessment template that you want to
   *          create. You can create several assessment templates for an assessment target. The names of
   *          the assessment templates that correspond to a particular assessment target must be
   *          unique.</p>
   */
  assessmentTemplateName: string | undefined;

  /**
   * <p>The ARN that specifies the assessment target for which you want to create the
   *          assessment template.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The user-defined attributes that are assigned to every finding that is generated by
   *          the assessment run that uses this assessment template. An attribute is a key and value pair
   *          (an <a>Attribute</a> object). Within an assessment template, each key must be
   *          unique.</p>
   */
  userAttributesForFindings?: Attribute[];

  /**
   * <p>The duration of the assessment run in seconds.</p>
   */
  durationInSeconds: number | undefined;
}

export namespace CreateAssessmentTemplateRequest {
  export const filterSensitiveLog = (obj: CreateAssessmentTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssessmentTemplateRequest => __isa(o, "CreateAssessmentTemplateRequest");
}

export interface CreateAssessmentTemplateResponse {
  __type?: "CreateAssessmentTemplateResponse";
  /**
   * <p>The ARN that specifies the assessment template that is created.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace CreateAssessmentTemplateResponse {
  export const filterSensitiveLog = (obj: CreateAssessmentTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateAssessmentTemplateResponse => __isa(o, "CreateAssessmentTemplateResponse");
}

export interface CreateExclusionsPreviewRequest {
  __type?: "CreateExclusionsPreviewRequest";
  /**
   * <p>The ARN that specifies the assessment template for which you want to create an
   *          exclusions preview.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace CreateExclusionsPreviewRequest {
  export const filterSensitiveLog = (obj: CreateExclusionsPreviewRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateExclusionsPreviewRequest => __isa(o, "CreateExclusionsPreviewRequest");
}

export interface CreateExclusionsPreviewResponse {
  __type?: "CreateExclusionsPreviewResponse";
  /**
   * <p>Specifies the unique identifier of the requested exclusions preview. You can use the
   *          unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview
   *          API.</p>
   */
  previewToken: string | undefined;
}

export namespace CreateExclusionsPreviewResponse {
  export const filterSensitiveLog = (obj: CreateExclusionsPreviewResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateExclusionsPreviewResponse => __isa(o, "CreateExclusionsPreviewResponse");
}

export interface CreateResourceGroupRequest {
  __type?: "CreateResourceGroupRequest";
  /**
   * <p>A collection of keys and an array of possible values,
   *          '[{"key":"key1","values":["Value1","Value2"]},{"key":"Key2","values":["Value3"]}]'.</p>
   *          <p>For example,'[{"key":"Name","values":["TestEC2Instance"]}]'.</p>
   */
  resourceGroupTags: ResourceGroupTag[] | undefined;
}

export namespace CreateResourceGroupRequest {
  export const filterSensitiveLog = (obj: CreateResourceGroupRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceGroupRequest => __isa(o, "CreateResourceGroupRequest");
}

export interface CreateResourceGroupResponse {
  __type?: "CreateResourceGroupResponse";
  /**
   * <p>The ARN that specifies the resource group that is created.</p>
   */
  resourceGroupArn: string | undefined;
}

export namespace CreateResourceGroupResponse {
  export const filterSensitiveLog = (obj: CreateResourceGroupResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateResourceGroupResponse => __isa(o, "CreateResourceGroupResponse");
}

export interface DeleteAssessmentRunRequest {
  __type?: "DeleteAssessmentRunRequest";
  /**
   * <p>The ARN that specifies the assessment run that you want to delete.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace DeleteAssessmentRunRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentRunRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAssessmentRunRequest => __isa(o, "DeleteAssessmentRunRequest");
}

export interface DeleteAssessmentTargetRequest {
  __type?: "DeleteAssessmentTargetRequest";
  /**
   * <p>The ARN that specifies the assessment target that you want to delete.</p>
   */
  assessmentTargetArn: string | undefined;
}

export namespace DeleteAssessmentTargetRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentTargetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAssessmentTargetRequest => __isa(o, "DeleteAssessmentTargetRequest");
}

export interface DeleteAssessmentTemplateRequest {
  __type?: "DeleteAssessmentTemplateRequest";
  /**
   * <p>The ARN that specifies the assessment template that you want to delete.</p>
   */
  assessmentTemplateArn: string | undefined;
}

export namespace DeleteAssessmentTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteAssessmentTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteAssessmentTemplateRequest => __isa(o, "DeleteAssessmentTemplateRequest");
}

export interface DescribeAssessmentRunsRequest {
  __type?: "DescribeAssessmentRunsRequest";
  /**
   * <p>The ARN that specifies the assessment run that you want to describe.</p>
   */
  assessmentRunArns: string[] | undefined;
}

export namespace DescribeAssessmentRunsRequest {
  export const filterSensitiveLog = (obj: DescribeAssessmentRunsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentRunsRequest => __isa(o, "DescribeAssessmentRunsRequest");
}

export interface DescribeAssessmentRunsResponse {
  __type?: "DescribeAssessmentRunsResponse";
  /**
   * <p>Information about the assessment run.</p>
   */
  assessmentRuns: AssessmentRun[] | undefined;

  /**
   * <p>Assessment run details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeAssessmentRunsResponse {
  export const filterSensitiveLog = (obj: DescribeAssessmentRunsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentRunsResponse => __isa(o, "DescribeAssessmentRunsResponse");
}

export interface DescribeAssessmentTargetsRequest {
  __type?: "DescribeAssessmentTargetsRequest";
  /**
   * <p>The ARNs that specifies the assessment targets that you want to describe.</p>
   */
  assessmentTargetArns: string[] | undefined;
}

export namespace DescribeAssessmentTargetsRequest {
  export const filterSensitiveLog = (obj: DescribeAssessmentTargetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentTargetsRequest => __isa(o, "DescribeAssessmentTargetsRequest");
}

export interface DescribeAssessmentTargetsResponse {
  __type?: "DescribeAssessmentTargetsResponse";
  /**
   * <p>Assessment target details that cannot be described. An error code is provided for
   *          each failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;

  /**
   * <p>Information about the assessment targets.</p>
   */
  assessmentTargets: AssessmentTarget[] | undefined;
}

export namespace DescribeAssessmentTargetsResponse {
  export const filterSensitiveLog = (obj: DescribeAssessmentTargetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentTargetsResponse => __isa(o, "DescribeAssessmentTargetsResponse");
}

export interface DescribeAssessmentTemplatesRequest {
  __type?: "DescribeAssessmentTemplatesRequest";
  assessmentTemplateArns: string[] | undefined;
}

export namespace DescribeAssessmentTemplatesRequest {
  export const filterSensitiveLog = (obj: DescribeAssessmentTemplatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentTemplatesRequest =>
    __isa(o, "DescribeAssessmentTemplatesRequest");
}

export interface DescribeAssessmentTemplatesResponse {
  __type?: "DescribeAssessmentTemplatesResponse";
  /**
   * <p>Information about the assessment templates.</p>
   */
  assessmentTemplates: AssessmentTemplate[] | undefined;

  /**
   * <p>Assessment template details that cannot be described. An error code is provided for
   *          each failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeAssessmentTemplatesResponse {
  export const filterSensitiveLog = (obj: DescribeAssessmentTemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeAssessmentTemplatesResponse =>
    __isa(o, "DescribeAssessmentTemplatesResponse");
}

export interface DescribeCrossAccountAccessRoleResponse {
  __type?: "DescribeCrossAccountAccessRoleResponse";
  /**
   * <p>A Boolean value that specifies whether the IAM role has the necessary policies
   *          attached to enable Amazon Inspector to access your AWS account.</p>
   */
  valid: boolean | undefined;

  /**
   * <p>The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS
   *          account.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The date when the cross-account access role was registered.</p>
   */
  registeredAt: Date | undefined;
}

export namespace DescribeCrossAccountAccessRoleResponse {
  export const filterSensitiveLog = (obj: DescribeCrossAccountAccessRoleResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCrossAccountAccessRoleResponse =>
    __isa(o, "DescribeCrossAccountAccessRoleResponse");
}

export interface DescribeExclusionsRequest {
  __type?: "DescribeExclusionsRequest";
  /**
   * <p>The list of ARNs that specify the exclusions that you want to describe.</p>
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   */
  locale?: Locale | string;
}

export namespace DescribeExclusionsRequest {
  export const filterSensitiveLog = (obj: DescribeExclusionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeExclusionsRequest => __isa(o, "DescribeExclusionsRequest");
}

export interface DescribeExclusionsResponse {
  __type?: "DescribeExclusionsResponse";
  /**
   * <p>Information about the exclusions.</p>
   */
  exclusions: { [key: string]: Exclusion } | undefined;

  /**
   * <p>Exclusion details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeExclusionsResponse {
  export const filterSensitiveLog = (obj: DescribeExclusionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeExclusionsResponse => __isa(o, "DescribeExclusionsResponse");
}

export interface DescribeFindingsRequest {
  __type?: "DescribeFindingsRequest";
  /**
   * <p>The locale into which you want to translate a finding description, recommendation,
   *          and the short description that identifies the finding.</p>
   */
  locale?: Locale | string;

  /**
   * <p>The ARN that specifies the finding that you want to describe.</p>
   */
  findingArns: string[] | undefined;
}

export namespace DescribeFindingsRequest {
  export const filterSensitiveLog = (obj: DescribeFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFindingsRequest => __isa(o, "DescribeFindingsRequest");
}

export interface DescribeFindingsResponse {
  __type?: "DescribeFindingsResponse";
  /**
   * <p>Information about the finding.</p>
   */
  findings: Finding[] | undefined;

  /**
   * <p>Finding details that cannot be described. An error code is provided for each failed
   *          item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeFindingsResponse {
  export const filterSensitiveLog = (obj: DescribeFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeFindingsResponse => __isa(o, "DescribeFindingsResponse");
}

export interface DescribeResourceGroupsRequest {
  __type?: "DescribeResourceGroupsRequest";
  /**
   * <p>The ARN that specifies the resource group that you want to describe.</p>
   */
  resourceGroupArns: string[] | undefined;
}

export namespace DescribeResourceGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeResourceGroupsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeResourceGroupsRequest => __isa(o, "DescribeResourceGroupsRequest");
}

export interface DescribeResourceGroupsResponse {
  __type?: "DescribeResourceGroupsResponse";
  /**
   * <p>Resource group details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;

  /**
   * <p>Information about a resource group.</p>
   */
  resourceGroups: ResourceGroup[] | undefined;
}

export namespace DescribeResourceGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeResourceGroupsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeResourceGroupsResponse => __isa(o, "DescribeResourceGroupsResponse");
}

export interface DescribeRulesPackagesRequest {
  __type?: "DescribeRulesPackagesRequest";
  /**
   * <p>The locale that you want to translate a rules package description into.</p>
   */
  locale?: Locale | string;

  /**
   * <p>The ARN that specifies the rules package that you want to describe.</p>
   */
  rulesPackageArns: string[] | undefined;
}

export namespace DescribeRulesPackagesRequest {
  export const filterSensitiveLog = (obj: DescribeRulesPackagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRulesPackagesRequest => __isa(o, "DescribeRulesPackagesRequest");
}

export interface DescribeRulesPackagesResponse {
  __type?: "DescribeRulesPackagesResponse";
  /**
   * <p>Information about the rules package.</p>
   */
  rulesPackages: RulesPackage[] | undefined;

  /**
   * <p>Rules package details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace DescribeRulesPackagesResponse {
  export const filterSensitiveLog = (obj: DescribeRulesPackagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeRulesPackagesResponse => __isa(o, "DescribeRulesPackagesResponse");
}

/**
 * <p>This data type is used in the <a>AssessmentTemplateFilter</a> data
 *          type.</p>
 */
export interface DurationRange {
  __type?: "DurationRange";
  /**
   * <p>The maximum value of the duration range. Must be less than or equal to 604800 seconds
   *          (1 week).</p>
   */
  maxSeconds?: number;

  /**
   * <p>The minimum value of the duration range. Must be greater than zero.</p>
   */
  minSeconds?: number;
}

export namespace DurationRange {
  export const filterSensitiveLog = (obj: DurationRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DurationRange => __isa(o, "DurationRange");
}

/**
 * <p>This data type is used in the <a>Subscription</a> data type.</p>
 */
export interface EventSubscription {
  __type?: "EventSubscription";
  /**
   * <p>The time at which <a>SubscribeToEvent</a> is called.</p>
   */
  subscribedAt: Date | undefined;

  /**
   * <p>The event for which Amazon Simple Notification Service (SNS) notifications are
   *          sent.</p>
   */
  event: InspectorEvent | string | undefined;
}

export namespace EventSubscription {
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventSubscription => __isa(o, "EventSubscription");
}

/**
 * <p>Contains information about what was excluded from an assessment run.</p>
 */
export interface Exclusion {
  __type?: "Exclusion";
  /**
   * <p>The description of the exclusion.</p>
   */
  description: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion pertains.</p>
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The recommendation for the exclusion.</p>
   */
  recommendation: string | undefined;

  /**
   * <p>The ARN that specifies the exclusion.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the exclusion.</p>
   */
  title: string | undefined;
}

export namespace Exclusion {
  export const filterSensitiveLog = (obj: Exclusion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Exclusion => __isa(o, "Exclusion");
}

/**
 * <p>Contains information about what is excluded from an assessment run given the current
 *          state of the assessment template.</p>
 */
export interface ExclusionPreview {
  __type?: "ExclusionPreview";
  /**
   * <p>The description of the exclusion preview.</p>
   */
  description: string | undefined;

  /**
   * <p>The recommendation for the exclusion preview.</p>
   */
  recommendation: string | undefined;

  /**
   * <p>The AWS resources for which the exclusion preview pertains.</p>
   */
  scopes: Scope[] | undefined;

  /**
   * <p>The system-defined attributes for the exclusion preview.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>The name of the exclusion preview.</p>
   */
  title: string | undefined;
}

export namespace ExclusionPreview {
  export const filterSensitiveLog = (obj: ExclusionPreview): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExclusionPreview => __isa(o, "ExclusionPreview");
}

/**
 * <p>Includes details about the failed items.</p>
 */
export interface FailedItemDetails {
  __type?: "FailedItemDetails";
  /**
   * <p>Indicates whether you can immediately retry a request for this item for a specified
   *          resource.</p>
   */
  retryable: boolean | undefined;

  /**
   * <p>The status code of a failed item.</p>
   */
  failureCode: FailedItemErrorCode | string | undefined;
}

export namespace FailedItemDetails {
  export const filterSensitiveLog = (obj: FailedItemDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FailedItemDetails => __isa(o, "FailedItemDetails");
}

export enum FailedItemErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  DUPLICATE_ARN = "DUPLICATE_ARN",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_ARN = "INVALID_ARN",
  ITEM_DOES_NOT_EXIST = "ITEM_DOES_NOT_EXIST",
  LIMIT_EXCEEDED = "LIMIT_EXCEEDED",
}

/**
 * <p>Contains information about an Amazon Inspector finding. This data type is used as the
 *          response element in the <a>DescribeFindings</a> action.</p>
 */
export interface Finding {
  __type?: "Finding";
  /**
   * <p>The finding severity. Values can be set to High, Medium, Low, and
   *          Informational.</p>
   */
  severity?: Severity | string;

  /**
   * <p>The numeric value of the finding severity.</p>
   */
  numericSeverity?: number;

  /**
   * <p>The name of the finding.</p>
   */
  title?: string;

  /**
   * <p>The ARN that specifies the finding.</p>
   */
  arn: string | undefined;

  /**
   * <p>The type of the host from which the finding is generated.</p>
   */
  assetType?: AssetType | string;

  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion?: number;

  /**
   * <p>The ID of the finding.</p>
   */
  id?: string;

  /**
   * <p>The time when <a>AddAttributesToFindings</a> is called.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>This data type is used in the <a>Finding</a> data type.</p>
   */
  serviceAttributes?: InspectorServiceAttributes;

  /**
   * <p>The recommendation for the finding.</p>
   */
  recommendation?: string;

  /**
   * <p>The user-defined attributes that are assigned to the finding.</p>
   */
  userAttributes: Attribute[] | undefined;

  /**
   * <p>The system-defined attributes for the finding.</p>
   */
  attributes: Attribute[] | undefined;

  /**
   * <p>The time when the finding was generated.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>A collection of attributes of the host from which the finding is generated.</p>
   */
  assetAttributes?: AssetAttributes;

  /**
   * <p>The data element is set to "Inspector".</p>
   */
  service?: string;

  /**
   * <p>This data element is currently not used.</p>
   */
  indicatorOfCompromise?: boolean;

  /**
   * <p>The description of the finding.</p>
   */
  description?: string;

  /**
   * <p>This data element is currently not used.</p>
   */
  confidence?: number;
}

export namespace Finding {
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Finding => __isa(o, "Finding");
}

/**
 * <p>This data type is used as a request parameter in the <a>ListFindings</a>
 *          action.</p>
 */
export interface FindingFilter {
  __type?: "FindingFilter";
  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  rulesPackageArns?: string[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.</p>
   */
  severities?: (Severity | string)[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.</p>
   */
  ruleNames?: string[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  autoScalingGroups?: string[];

  /**
   * <p>For a record to match a filter, the list of values that are specified for this data
   *          type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.</p>
   */
  attributes?: Attribute[];

  /**
   * <p>For a record to match a filter, one of the values that is specified for this data
   *          type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.</p>
   */
  agentIds?: string[];

  /**
   * <p>For a record to match a filter, the value that is specified for this data type
   *          property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data
   *          type.</p>
   */
  userAttributes?: Attribute[];

  /**
   * <p>The time range during which the finding is generated.</p>
   */
  creationTimeRange?: TimestampRange;
}

export namespace FindingFilter {
  export const filterSensitiveLog = (obj: FindingFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FindingFilter => __isa(o, "FindingFilter");
}

export interface GetAssessmentReportRequest {
  __type?: "GetAssessmentReportRequest";
  /**
   * <p>Specifies the file format (html or pdf) of the assessment report that you want to
   *          generate.</p>
   */
  reportFileFormat: ReportFileFormat | string | undefined;

  /**
   * <p>The ARN that specifies the assessment run for which you want to generate a
   *          report.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>Specifies the type of the assessment report that you want to generate. There are two
   *          types of assessment reports: a finding report and a full report. For more information, see
   *             <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. </p>
   */
  reportType: ReportType | string | undefined;
}

export namespace GetAssessmentReportRequest {
  export const filterSensitiveLog = (obj: GetAssessmentReportRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAssessmentReportRequest => __isa(o, "GetAssessmentReportRequest");
}

export interface GetAssessmentReportResponse {
  __type?: "GetAssessmentReportResponse";
  /**
   * <p>Specifies the status of the request to generate an assessment report. </p>
   */
  status: ReportStatus | string | undefined;

  /**
   * <p>Specifies the URL where you can find the generated assessment report. This parameter
   *          is only returned if the report is successfully generated.</p>
   */
  url?: string;
}

export namespace GetAssessmentReportResponse {
  export const filterSensitiveLog = (obj: GetAssessmentReportResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAssessmentReportResponse => __isa(o, "GetAssessmentReportResponse");
}

export interface GetExclusionsPreviewRequest {
  __type?: "GetExclusionsPreviewRequest";
  /**
   * <p>The ARN that specifies the assessment template for which the exclusions preview was
   *          requested.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>The locale into which you want to translate the exclusion's title, description, and
   *          recommendation.</p>
   */
  locale?: Locale | string;

  /**
   * <p>The unique identifier associated of the exclusions preview.</p>
   */
  previewToken: string | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to
   *          the action fill nextToken in the request with the value of nextToken from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace GetExclusionsPreviewRequest {
  export const filterSensitiveLog = (obj: GetExclusionsPreviewRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExclusionsPreviewRequest => __isa(o, "GetExclusionsPreviewRequest");
}

export interface GetExclusionsPreviewResponse {
  __type?: "GetExclusionsPreviewResponse";
  /**
   * <p>Information about the exclusions included in the preview.</p>
   */
  exclusionPreviews?: ExclusionPreview[];

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the status of the request to generate an exclusions preview.</p>
   */
  previewStatus: PreviewStatus | string | undefined;
}

export namespace GetExclusionsPreviewResponse {
  export const filterSensitiveLog = (obj: GetExclusionsPreviewResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetExclusionsPreviewResponse => __isa(o, "GetExclusionsPreviewResponse");
}

export interface GetTelemetryMetadataRequest {
  __type?: "GetTelemetryMetadataRequest";
  /**
   * <p>The ARN that specifies the assessment run that has the telemetry data that you want
   *          to obtain.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace GetTelemetryMetadataRequest {
  export const filterSensitiveLog = (obj: GetTelemetryMetadataRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTelemetryMetadataRequest => __isa(o, "GetTelemetryMetadataRequest");
}

export interface GetTelemetryMetadataResponse {
  __type?: "GetTelemetryMetadataResponse";
  /**
   * <p>Telemetry details.</p>
   */
  telemetryMetadata: TelemetryMetadata[] | undefined;
}

export namespace GetTelemetryMetadataResponse {
  export const filterSensitiveLog = (obj: GetTelemetryMetadataResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTelemetryMetadataResponse => __isa(o, "GetTelemetryMetadataResponse");
}

export enum InspectorEvent {
  ASSESSMENT_RUN_COMPLETED = "ASSESSMENT_RUN_COMPLETED",
  ASSESSMENT_RUN_STARTED = "ASSESSMENT_RUN_STARTED",
  ASSESSMENT_RUN_STATE_CHANGED = "ASSESSMENT_RUN_STATE_CHANGED",
  FINDING_REPORTED = "FINDING_REPORTED",
  OTHER = "OTHER",
}

/**
 * <p>This data type is used in the <a>Finding</a> data type.</p>
 */
export interface InspectorServiceAttributes {
  __type?: "InspectorServiceAttributes";
  /**
   * <p>The ARN of the assessment run during which the finding is generated.</p>
   */
  assessmentRunArn?: string;

  /**
   * <p>The schema version of this data type.</p>
   */
  schemaVersion: number | undefined;

  /**
   * <p>The ARN of the rules package that is used to generate the finding.</p>
   */
  rulesPackageArn?: string;
}

export namespace InspectorServiceAttributes {
  export const filterSensitiveLog = (obj: InspectorServiceAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InspectorServiceAttributes => __isa(o, "InspectorServiceAttributes");
}

/**
 * <p>Internal server error.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalException => __isa(o, "InternalException");
}

export enum InvalidCrossAccountRoleErrorCode {
  ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP = "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP",
  ROLE_DOES_NOT_HAVE_CORRECT_POLICY = "ROLE_DOES_NOT_HAVE_CORRECT_POLICY",
}

/**
 * <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 */
export interface InvalidCrossAccountRoleException extends __SmithyException, $MetadataBearer {
  name: "InvalidCrossAccountRoleException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: InvalidCrossAccountRoleErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace InvalidCrossAccountRoleException {
  export const filterSensitiveLog = (obj: InvalidCrossAccountRoleException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidCrossAccountRoleException => __isa(o, "InvalidCrossAccountRoleException");
}

export enum InvalidInputErrorCode {
  ASSESSMENT_TARGET_NAME_ALREADY_TAKEN = "ASSESSMENT_TARGET_NAME_ALREADY_TAKEN",
  ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN = "ASSESSMENT_TEMPLATE_NAME_ALREADY_TAKEN",
  INVALID_AGENT_ID = "INVALID_AGENT_ID",
  INVALID_ASSESSMENT_RUN_ARN = "INVALID_ASSESSMENT_RUN_ARN",
  INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE = "INVALID_ASSESSMENT_RUN_COMPLETION_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_DURATION_RANGE = "INVALID_ASSESSMENT_RUN_DURATION_RANGE",
  INVALID_ASSESSMENT_RUN_START_TIME_RANGE = "INVALID_ASSESSMENT_RUN_START_TIME_RANGE",
  INVALID_ASSESSMENT_RUN_STATE = "INVALID_ASSESSMENT_RUN_STATE",
  INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE = "INVALID_ASSESSMENT_RUN_STATE_CHANGE_TIME_RANGE",
  INVALID_ASSESSMENT_TARGET_ARN = "INVALID_ASSESSMENT_TARGET_ARN",
  INVALID_ASSESSMENT_TARGET_NAME = "INVALID_ASSESSMENT_TARGET_NAME",
  INVALID_ASSESSMENT_TARGET_NAME_PATTERN = "INVALID_ASSESSMENT_TARGET_NAME_PATTERN",
  INVALID_ASSESSMENT_TEMPLATE_ARN = "INVALID_ASSESSMENT_TEMPLATE_ARN",
  INVALID_ASSESSMENT_TEMPLATE_DURATION = "INVALID_ASSESSMENT_TEMPLATE_DURATION",
  INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE = "INVALID_ASSESSMENT_TEMPLATE_DURATION_RANGE",
  INVALID_ASSESSMENT_TEMPLATE_NAME = "INVALID_ASSESSMENT_TEMPLATE_NAME",
  INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN = "INVALID_ASSESSMENT_TEMPLATE_NAME_PATTERN",
  INVALID_ATTRIBUTE = "INVALID_ATTRIBUTE",
  INVALID_AUTO_SCALING_GROUP = "INVALID_AUTO_SCALING_GROUP",
  INVALID_EVENT = "INVALID_EVENT",
  INVALID_FINDING_ARN = "INVALID_FINDING_ARN",
  INVALID_IAM_ROLE_ARN = "INVALID_IAM_ROLE_ARN",
  INVALID_LOCALE = "INVALID_LOCALE",
  INVALID_MAX_RESULTS = "INVALID_MAX_RESULTS",
  INVALID_NUMBER_OF_AGENT_IDS = "INVALID_NUMBER_OF_AGENT_IDS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_RUN_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES = "INVALID_NUMBER_OF_ASSESSMENT_RUN_STATES",
  INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_TARGET_ARNS",
  INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS = "INVALID_NUMBER_OF_ASSESSMENT_TEMPLATE_ARNS",
  INVALID_NUMBER_OF_ATTRIBUTES = "INVALID_NUMBER_OF_ATTRIBUTES",
  INVALID_NUMBER_OF_AUTO_SCALING_GROUPS = "INVALID_NUMBER_OF_AUTO_SCALING_GROUPS",
  INVALID_NUMBER_OF_FINDING_ARNS = "INVALID_NUMBER_OF_FINDING_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS = "INVALID_NUMBER_OF_RESOURCE_GROUP_ARNS",
  INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS = "INVALID_NUMBER_OF_RESOURCE_GROUP_TAGS",
  INVALID_NUMBER_OF_RULES_PACKAGE_ARNS = "INVALID_NUMBER_OF_RULES_PACKAGE_ARNS",
  INVALID_NUMBER_OF_RULE_NAMES = "INVALID_NUMBER_OF_RULE_NAMES",
  INVALID_NUMBER_OF_SEVERITIES = "INVALID_NUMBER_OF_SEVERITIES",
  INVALID_NUMBER_OF_TAGS = "INVALID_NUMBER_OF_TAGS",
  INVALID_NUMBER_OF_USER_ATTRIBUTES = "INVALID_NUMBER_OF_USER_ATTRIBUTES",
  INVALID_PAGINATION_TOKEN = "INVALID_PAGINATION_TOKEN",
  INVALID_RESOURCE_ARN = "INVALID_RESOURCE_ARN",
  INVALID_RESOURCE_GROUP_ARN = "INVALID_RESOURCE_GROUP_ARN",
  INVALID_RESOURCE_GROUP_TAG_KEY = "INVALID_RESOURCE_GROUP_TAG_KEY",
  INVALID_RESOURCE_GROUP_TAG_VALUE = "INVALID_RESOURCE_GROUP_TAG_VALUE",
  INVALID_RULES_PACKAGE_ARN = "INVALID_RULES_PACKAGE_ARN",
  INVALID_RULE_NAME = "INVALID_RULE_NAME",
  INVALID_SEVERITY = "INVALID_SEVERITY",
  INVALID_SNS_TOPIC_ARN = "INVALID_SNS_TOPIC_ARN",
  INVALID_TAG = "INVALID_TAG",
  INVALID_TAG_KEY = "INVALID_TAG_KEY",
  INVALID_TAG_VALUE = "INVALID_TAG_VALUE",
  INVALID_USER_ATTRIBUTE = "INVALID_USER_ATTRIBUTE",
  INVALID_USER_ATTRIBUTE_KEY = "INVALID_USER_ATTRIBUTE_KEY",
  INVALID_USER_ATTRIBUTE_VALUE = "INVALID_USER_ATTRIBUTE_VALUE",
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: InvalidInputErrorCode | string | undefined;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidInputException => __isa(o, "InvalidInputException");
}

export enum LimitExceededErrorCode {
  ASSESSMENT_RUN_LIMIT_EXCEEDED = "ASSESSMENT_RUN_LIMIT_EXCEEDED",
  ASSESSMENT_TARGET_LIMIT_EXCEEDED = "ASSESSMENT_TARGET_LIMIT_EXCEEDED",
  ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED = "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED",
  EVENT_SUBSCRIPTION_LIMIT_EXCEEDED = "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED",
  RESOURCE_GROUP_LIMIT_EXCEEDED = "RESOURCE_GROUP_LIMIT_EXCEEDED",
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *          AWS account limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: LimitExceededErrorCode | string | undefined;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListAssessmentRunAgentsRequest {
  __type?: "ListAssessmentRunAgentsRequest";
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRunAgents</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>The ARN that specifies the assessment run whose agents you want to list.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AgentFilter;
}

export namespace ListAssessmentRunAgentsRequest {
  export const filterSensitiveLog = (obj: ListAssessmentRunAgentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentRunAgentsRequest => __isa(o, "ListAssessmentRunAgentsRequest");
}

export interface ListAssessmentRunAgentsResponse {
  __type?: "ListAssessmentRunAgentsResponse";
  /**
   * <p>A list of ARNs that specifies the agents returned by the action.</p>
   */
  assessmentRunAgents: AssessmentRunAgent[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentRunAgentsResponse {
  export const filterSensitiveLog = (obj: ListAssessmentRunAgentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentRunAgentsResponse => __isa(o, "ListAssessmentRunAgentsResponse");
}

export interface ListAssessmentRunsRequest {
  __type?: "ListAssessmentRunsRequest";
  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentRunFilter;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in
   *          the response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentRuns</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>The ARNs that specify the assessment templates whose assessment runs you want to
   *          list.</p>
   */
  assessmentTemplateArns?: string[];
}

export namespace ListAssessmentRunsRequest {
  export const filterSensitiveLog = (obj: ListAssessmentRunsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentRunsRequest => __isa(o, "ListAssessmentRunsRequest");
}

export interface ListAssessmentRunsResponse {
  __type?: "ListAssessmentRunsResponse";
  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of ARNs that specifies the assessment runs that are returned by the
   *          action.</p>
   */
  assessmentRunArns: string[] | undefined;
}

export namespace ListAssessmentRunsResponse {
  export const filterSensitiveLog = (obj: ListAssessmentRunsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentRunsResponse => __isa(o, "ListAssessmentRunsResponse");
}

export interface ListAssessmentTargetsRequest {
  __type?: "ListAssessmentTargetsRequest";
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTargets</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentTargetFilter;
}

export namespace ListAssessmentTargetsRequest {
  export const filterSensitiveLog = (obj: ListAssessmentTargetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentTargetsRequest => __isa(o, "ListAssessmentTargetsRequest");
}

export interface ListAssessmentTargetsResponse {
  __type?: "ListAssessmentTargetsResponse";
  /**
   * <p>A list of ARNs that specifies the assessment targets that are returned by the
   *          action.</p>
   */
  assessmentTargetArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentTargetsResponse {
  export const filterSensitiveLog = (obj: ListAssessmentTargetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentTargetsResponse => __isa(o, "ListAssessmentTargetsResponse");
}

export interface ListAssessmentTemplatesRequest {
  __type?: "ListAssessmentTemplatesRequest";
  /**
   * <p>A list of ARNs that specifies the assessment targets whose assessment templates you
   *          want to list.</p>
   */
  assessmentTargetArns?: string[];

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: AssessmentTemplateFilter;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListAssessmentTemplates</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentTemplatesRequest {
  export const filterSensitiveLog = (obj: ListAssessmentTemplatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentTemplatesRequest => __isa(o, "ListAssessmentTemplatesRequest");
}

export interface ListAssessmentTemplatesResponse {
  __type?: "ListAssessmentTemplatesResponse";
  /**
   * <p>A list of ARNs that specifies the assessment templates returned by the
   *          action.</p>
   */
  assessmentTemplateArns: string[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListAssessmentTemplatesResponse {
  export const filterSensitiveLog = (obj: ListAssessmentTemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListAssessmentTemplatesResponse => __isa(o, "ListAssessmentTemplatesResponse");
}

export interface ListEventSubscriptionsRequest {
  __type?: "ListEventSubscriptionsRequest";
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListEventSubscriptions</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>The ARN of the assessment template for which you want to list the existing event
   *          subscriptions.</p>
   */
  resourceArn?: string;
}

export namespace ListEventSubscriptionsRequest {
  export const filterSensitiveLog = (obj: ListEventSubscriptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEventSubscriptionsRequest => __isa(o, "ListEventSubscriptionsRequest");
}

export interface ListEventSubscriptionsResponse {
  __type?: "ListEventSubscriptionsResponse";
  /**
   * <p>Details of the returned event subscriptions.</p>
   */
  subscriptions: Subscription[] | undefined;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;
}

export namespace ListEventSubscriptionsResponse {
  export const filterSensitiveLog = (obj: ListEventSubscriptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEventSubscriptionsResponse => __isa(o, "ListEventSubscriptionsResponse");
}

export interface ListExclusionsRequest {
  __type?: "ListExclusionsRequest";
  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 100. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the ListExclusionsRequest action. Subsequent calls to the
   *          action fill nextToken in the request with the value of nextToken from the previous response
   *          to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>The ARN of the assessment run that generated the exclusions that you want to
   *          list.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace ListExclusionsRequest {
  export const filterSensitiveLog = (obj: ListExclusionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListExclusionsRequest => __isa(o, "ListExclusionsRequest");
}

export interface ListExclusionsResponse {
  __type?: "ListExclusionsResponse";
  /**
   * <p>A list of exclusions' ARNs returned by the action.</p>
   */
  exclusionArns: string[] | undefined;

  /**
   * <p>When a response is generated, if there is more data to be listed, this parameters is
   *          present in the response and contains the value to use for the nextToken parameter in a
   *          subsequent pagination request. If there is no more data to be listed, this parameter is set
   *          to null.</p>
   */
  nextToken?: string;
}

export namespace ListExclusionsResponse {
  export const filterSensitiveLog = (obj: ListExclusionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListExclusionsResponse => __isa(o, "ListExclusionsResponse");
}

export interface ListFindingsRequest {
  __type?: "ListFindingsRequest";
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListFindings</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>The ARNs of the assessment runs that generate the findings that you want to
   *          list.</p>
   */
  assessmentRunArns?: string[];

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's
   *          response.</p>
   *          <p>For a record to match a filter, all specified filter attributes must match. When
   *          multiple values are specified for a filter attribute, any of the values can
   *          match.</p>
   */
  filter?: FindingFilter;
}

export namespace ListFindingsRequest {
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFindingsRequest => __isa(o, "ListFindingsRequest");
}

export interface ListFindingsResponse {
  __type?: "ListFindingsResponse";
  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of ARNs that specifies the findings returned by the action.</p>
   */
  findingArns: string[] | undefined;
}

export namespace ListFindingsResponse {
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListFindingsResponse => __isa(o, "ListFindingsResponse");
}

export interface ListRulesPackagesRequest {
  __type?: "ListRulesPackagesRequest";
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>ListRulesPackages</b>
   *          action. Subsequent calls to the action fill <b>nextToken</b> in
   *          the request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;
}

export namespace ListRulesPackagesRequest {
  export const filterSensitiveLog = (obj: ListRulesPackagesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRulesPackagesRequest => __isa(o, "ListRulesPackagesRequest");
}

export interface ListRulesPackagesResponse {
  __type?: "ListRulesPackagesResponse";
  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of ARNs that specifies the rules packages returned by the action.</p>
   */
  rulesPackageArns: string[] | undefined;
}

export namespace ListRulesPackagesResponse {
  export const filterSensitiveLog = (obj: ListRulesPackagesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListRulesPackagesResponse => __isa(o, "ListRulesPackagesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN that specifies the assessment template whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A collection of key and value pairs.</p>
   */
  tags: Tag[] | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

export enum Locale {
  EN_US = "EN_US",
}

/**
 * <p>Contains information about the network interfaces interacting with an EC2 instance.
 *          This data type is used as one of the elements of the <a>AssetAttributes</a> data
 *          type.</p>
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The ID of a subnet associated with the network interface.</p>
   */
  subnetId?: string;

  /**
   * <p>A list of the private IP addresses associated with the network interface. Includes
   *          the privateDnsName and privateIpAddress.</p>
   */
  privateIpAddresses?: PrivateIp[];

  /**
   * <p>The ID of a VPC associated with the network interface.</p>
   */
  vpcId?: string;

  /**
   * <p>The IP addresses associated with the network interface.</p>
   */
  ipv6Addresses?: string[];

  /**
   * <p>The public IP address from which the network interface is reachable.</p>
   */
  publicIp?: string;

  /**
   * <p>The name of a private DNS associated with the network interface.</p>
   */
  privateDnsName?: string;

  /**
   * <p>The private IP address associated with the network interface.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The name of a public DNS associated with the network interface.</p>
   */
  publicDnsName?: string;

  /**
   * <p>A list of the security groups associated with the network interface. Includes the
   *          groupId and groupName.</p>
   */
  securityGroups?: SecurityGroup[];
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkInterface => __isa(o, "NetworkInterface");
}

export enum NoSuchEntityErrorCode {
  ASSESSMENT_RUN_DOES_NOT_EXIST = "ASSESSMENT_RUN_DOES_NOT_EXIST",
  ASSESSMENT_TARGET_DOES_NOT_EXIST = "ASSESSMENT_TARGET_DOES_NOT_EXIST",
  ASSESSMENT_TEMPLATE_DOES_NOT_EXIST = "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST",
  FINDING_DOES_NOT_EXIST = "FINDING_DOES_NOT_EXIST",
  IAM_ROLE_DOES_NOT_EXIST = "IAM_ROLE_DOES_NOT_EXIST",
  RESOURCE_GROUP_DOES_NOT_EXIST = "RESOURCE_GROUP_DOES_NOT_EXIST",
  RULES_PACKAGE_DOES_NOT_EXIST = "RULES_PACKAGE_DOES_NOT_EXIST",
  SNS_TOPIC_DOES_NOT_EXIST = "SNS_TOPIC_DOES_NOT_EXIST",
}

/**
 * <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 */
export interface NoSuchEntityException extends __SmithyException, $MetadataBearer {
  name: "NoSuchEntityException";
  $fault: "client";
  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean | undefined;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode: NoSuchEntityErrorCode | string | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;
}

export namespace NoSuchEntityException {
  export const filterSensitiveLog = (obj: NoSuchEntityException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NoSuchEntityException => __isa(o, "NoSuchEntityException");
}

export interface PreviewAgentsRequest {
  __type?: "PreviewAgentsRequest";
  /**
   * <p>The ARN of the assessment target whose agents you want to preview.</p>
   */
  previewAgentsArn: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the
   *          response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter
   *          to null on your first call to the <b>PreviewAgents</b> action.
   *          Subsequent calls to the action fill <b>nextToken</b> in the
   *          request with the value of <b>NextToken</b> from the previous
   *          response to continue listing data.</p>
   */
  nextToken?: string;
}

export namespace PreviewAgentsRequest {
  export const filterSensitiveLog = (obj: PreviewAgentsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PreviewAgentsRequest => __isa(o, "PreviewAgentsRequest");
}

export interface PreviewAgentsResponse {
  __type?: "PreviewAgentsResponse";
  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is
   *          present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more
   *          data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * <p>The resulting list of agents.</p>
   */
  agentPreviews: AgentPreview[] | undefined;
}

export namespace PreviewAgentsResponse {
  export const filterSensitiveLog = (obj: PreviewAgentsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PreviewAgentsResponse => __isa(o, "PreviewAgentsResponse");
}

/**
 * <p>The request is rejected. The specified assessment template is currently generating an
 *          exclusions preview.</p>
 */
export interface PreviewGenerationInProgressException extends __SmithyException, $MetadataBearer {
  name: "PreviewGenerationInProgressException";
  $fault: "client";
  message: string | undefined;
}

export namespace PreviewGenerationInProgressException {
  export const filterSensitiveLog = (obj: PreviewGenerationInProgressException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PreviewGenerationInProgressException =>
    __isa(o, "PreviewGenerationInProgressException");
}

export enum PreviewStatus {
  COMPLETED = "COMPLETED",
  WORK_IN_PROGRESS = "WORK_IN_PROGRESS",
}

/**
 * <p>Contains information about a private IP address associated with a network interface. This
 *          data type is used as a response element in the <a>DescribeFindings</a>
 *          action.</p>
 */
export interface PrivateIp {
  __type?: "PrivateIp";
  /**
   * <p>The full IP address of the network inteface.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The DNS name of the private IP address.</p>
   */
  privateDnsName?: string;
}

export namespace PrivateIp {
  export const filterSensitiveLog = (obj: PrivateIp): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PrivateIp => __isa(o, "PrivateIp");
}

export interface RegisterCrossAccountAccessRoleRequest {
  __type?: "RegisterCrossAccountAccessRoleRequest";
  /**
   * <p>The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to
   *          perform security assessments. </p>
   */
  roleArn: string | undefined;
}

export namespace RegisterCrossAccountAccessRoleRequest {
  export const filterSensitiveLog = (obj: RegisterCrossAccountAccessRoleRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegisterCrossAccountAccessRoleRequest =>
    __isa(o, "RegisterCrossAccountAccessRoleRequest");
}

export interface RemoveAttributesFromFindingsRequest {
  __type?: "RemoveAttributesFromFindingsRequest";
  /**
   * <p>The ARNs that specify the findings that you want to remove attributes from.</p>
   */
  findingArns: string[] | undefined;

  /**
   * <p>The array of attribute keys that you want to remove from specified
   *          findings.</p>
   */
  attributeKeys: string[] | undefined;
}

export namespace RemoveAttributesFromFindingsRequest {
  export const filterSensitiveLog = (obj: RemoveAttributesFromFindingsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemoveAttributesFromFindingsRequest =>
    __isa(o, "RemoveAttributesFromFindingsRequest");
}

export interface RemoveAttributesFromFindingsResponse {
  __type?: "RemoveAttributesFromFindingsResponse";
  /**
   * <p>Attributes details that cannot be described. An error code is provided for each
   *          failed item.</p>
   */
  failedItems: { [key: string]: FailedItemDetails } | undefined;
}

export namespace RemoveAttributesFromFindingsResponse {
  export const filterSensitiveLog = (obj: RemoveAttributesFromFindingsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RemoveAttributesFromFindingsResponse =>
    __isa(o, "RemoveAttributesFromFindingsResponse");
}

export enum ReportFileFormat {
  HTML = "HTML",
  PDF = "PDF",
}

export enum ReportStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  WORK_IN_PROGRESS = "WORK_IN_PROGRESS",
}

export enum ReportType {
  FINDING = "FINDING",
  FULL = "FULL",
}

/**
 * <p>Contains information about a resource group. The resource group defines a set of tags
 *          that, when queried, identify the AWS resources that make up the assessment target. This
 *          data type is used as the response element in the <a>DescribeResourceGroups</a>
 *          action.</p>
 */
export interface ResourceGroup {
  __type?: "ResourceGroup";
  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used
   *          in the <a>CreateResourceGroup</a> action.</p>
   */
  tags: ResourceGroupTag[] | undefined;

  /**
   * <p>The time at which resource group is created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The ARN of the resource group.</p>
   */
  arn: string | undefined;
}

export namespace ResourceGroup {
  export const filterSensitiveLog = (obj: ResourceGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceGroup => __isa(o, "ResourceGroup");
}

/**
 * <p>This data type is used as one of the elements of the <a>ResourceGroup</a>
 *          data type.</p>
 */
export interface ResourceGroupTag {
  __type?: "ResourceGroupTag";
  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;

  /**
   * <p>The value assigned to a tag key.</p>
   */
  value?: string;
}

export namespace ResourceGroupTag {
  export const filterSensitiveLog = (obj: ResourceGroupTag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceGroupTag => __isa(o, "ResourceGroupTag");
}

/**
 * <p>Contains information about an Amazon Inspector rules package. This data type is used
 *          as the response element in the <a>DescribeRulesPackages</a> action.</p>
 */
export interface RulesPackage {
  __type?: "RulesPackage";
  /**
   * <p>The name of the rules package.</p>
   */
  name: string | undefined;

  /**
   * <p>The provider of the rules package.</p>
   */
  provider: string | undefined;

  /**
   * <p>The version ID of the rules package.</p>
   */
  version: string | undefined;

  /**
   * <p>The ARN of the rules package.</p>
   */
  arn: string | undefined;

  /**
   * <p>The description of the rules package.</p>
   */
  description?: string;
}

export namespace RulesPackage {
  export const filterSensitiveLog = (obj: RulesPackage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RulesPackage => __isa(o, "RulesPackage");
}

/**
 * <p>This data type contains key-value pairs that identify various Amazon
 *          resources.</p>
 */
export interface Scope {
  __type?: "Scope";
  /**
   * <p>The resource identifier for the specified scope type.</p>
   */
  value?: string;

  /**
   * <p>The type of the scope.</p>
   */
  key?: ScopeType | string;
}

export namespace Scope {
  export const filterSensitiveLog = (obj: Scope): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Scope => __isa(o, "Scope");
}

export enum ScopeType {
  INSTANCE_ID = "INSTANCE_ID",
  RULES_PACKAGE_ARN = "RULES_PACKAGE_ARN",
}

/**
 * <p>Contains information about a security group associated with a network interface. This
 *          data type is used as one of the elements of the <a>NetworkInterface</a> data
 *          type.</p>
 */
export interface SecurityGroup {
  __type?: "SecurityGroup";
  /**
   * <p>The name of the security group.</p>
   */
  groupName?: string;

  /**
   * <p>The ID of the security group.</p>
   */
  groupId?: string;
}

export namespace SecurityGroup {
  export const filterSensitiveLog = (obj: SecurityGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SecurityGroup => __isa(o, "SecurityGroup");
}

/**
 * <p>The serice is temporary unavailable.</p>
 */
export interface ServiceTemporarilyUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceTemporarilyUnavailableException";
  $fault: "server";
  /**
   * <p>You can wait and then retry your request.</p>
   */
  canRetry: boolean | undefined;

  /**
   * <p>Details of the exception error.</p>
   */
  message: string | undefined;
}

export namespace ServiceTemporarilyUnavailableException {
  export const filterSensitiveLog = (obj: ServiceTemporarilyUnavailableException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceTemporarilyUnavailableException =>
    __isa(o, "ServiceTemporarilyUnavailableException");
}

export interface SetTagsForResourceRequest {
  __type?: "SetTagsForResourceRequest";
  /**
   * <p>A collection of key and value pairs that you want to set to the assessment
   *          template.</p>
   */
  tags?: Tag[];

  /**
   * <p>The ARN of the assessment template that you want to set tags to.</p>
   */
  resourceArn: string | undefined;
}

export namespace SetTagsForResourceRequest {
  export const filterSensitiveLog = (obj: SetTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SetTagsForResourceRequest => __isa(o, "SetTagsForResourceRequest");
}

export enum Severity {
  HIGH = "High",
  INFORMATIONAL = "Informational",
  LOW = "Low",
  MEDIUM = "Medium",
  UNDEFINED = "Undefined",
}

export interface StartAssessmentRunRequest {
  __type?: "StartAssessmentRunRequest";
  /**
   * <p>The ARN of the assessment template of the assessment run that you want to
   *          start.</p>
   */
  assessmentTemplateArn: string | undefined;

  /**
   * <p>You can specify the name for the assessment run. The name must be unique for the
   *          assessment template whose ARN is used to start the assessment run.</p>
   */
  assessmentRunName?: string;
}

export namespace StartAssessmentRunRequest {
  export const filterSensitiveLog = (obj: StartAssessmentRunRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartAssessmentRunRequest => __isa(o, "StartAssessmentRunRequest");
}

export interface StartAssessmentRunResponse {
  __type?: "StartAssessmentRunResponse";
  /**
   * <p>The ARN of the assessment run that has been started.</p>
   */
  assessmentRunArn: string | undefined;
}

export namespace StartAssessmentRunResponse {
  export const filterSensitiveLog = (obj: StartAssessmentRunResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartAssessmentRunResponse => __isa(o, "StartAssessmentRunResponse");
}

export enum StopAction {
  SKIP_EVALUATION = "SKIP_EVALUATION",
  START_EVALUATION = "START_EVALUATION",
}

export interface StopAssessmentRunRequest {
  __type?: "StopAssessmentRunRequest";
  /**
   * <p>The ARN of the assessment run that you want to stop.</p>
   */
  assessmentRunArn: string | undefined;

  /**
   * <p>An input option that can be set to either START_EVALUATION or SKIP_EVALUATION.
   *          START_EVALUATION (the default value), stops the AWS agent from collecting data and begins
   *          the results evaluation and the findings generation process. SKIP_EVALUATION cancels the
   *          assessment run immediately, after which no findings are generated.</p>
   */
  stopAction?: StopAction | string;
}

export namespace StopAssessmentRunRequest {
  export const filterSensitiveLog = (obj: StopAssessmentRunRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopAssessmentRunRequest => __isa(o, "StopAssessmentRunRequest");
}

export interface SubscribeToEventRequest {
  __type?: "SubscribeToEventRequest";
  /**
   * <p>The ARN of the SNS topic to which the SNS notifications are sent.</p>
   */
  topicArn: string | undefined;

  /**
   * <p>The event for which you want to receive SNS notifications.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to receive SNS notifications.</p>
   */
  resourceArn: string | undefined;
}

export namespace SubscribeToEventRequest {
  export const filterSensitiveLog = (obj: SubscribeToEventRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SubscribeToEventRequest => __isa(o, "SubscribeToEventRequest");
}

/**
 * <p>This data type is used as a response element in the <a>ListEventSubscriptions</a> action.</p>
 */
export interface Subscription {
  __type?: "Subscription";
  /**
   * <p>The list of existing event subscriptions.</p>
   */
  eventSubscriptions: EventSubscription[] | undefined;

  /**
   * <p>The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS
   *          notifications are sent.</p>
   */
  topicArn: string | undefined;

  /**
   * <p>The ARN of the assessment template that is used during the event for which the SNS
   *          notification is sent.</p>
   */
  resourceArn: string | undefined;
}

export namespace Subscription {
  export const filterSensitiveLog = (obj: Subscription): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Subscription => __isa(o, "Subscription");
}

/**
 * <p>A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A value assigned to a tag key.</p>
   */
  value?: string;

  /**
   * <p>A tag key.</p>
   */
  key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The metadata about the Amazon Inspector application data metrics collected by the
 *          agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.</p>
 */
export interface TelemetryMetadata {
  __type?: "TelemetryMetadata";
  /**
   * <p>The count of messages that the agent sends to the Amazon Inspector service.</p>
   */
  count: number | undefined;

  /**
   * <p>The data size of messages that the agent sends to the Amazon Inspector
   *          service.</p>
   */
  dataSize?: number;

  /**
   * <p>A specific type of behavioral data that is collected by the agent.</p>
   */
  messageType: string | undefined;
}

export namespace TelemetryMetadata {
  export const filterSensitiveLog = (obj: TelemetryMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TelemetryMetadata => __isa(o, "TelemetryMetadata");
}

/**
 * <p>This data type is used in the <a>AssessmentRunFilter</a> data
 *          type.</p>
 */
export interface TimestampRange {
  __type?: "TimestampRange";
  /**
   * <p>The maximum value of the timestamp range.</p>
   */
  endDate?: Date;

  /**
   * <p>The minimum value of the timestamp range.</p>
   */
  beginDate?: Date;
}

export namespace TimestampRange {
  export const filterSensitiveLog = (obj: TimestampRange): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TimestampRange => __isa(o, "TimestampRange");
}

export interface UnsubscribeFromEventRequest {
  __type?: "UnsubscribeFromEventRequest";
  /**
   * <p>The ARN of the assessment template that is used during the event for which you want
   *          to stop receiving SNS notifications.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The event for which you want to stop receiving SNS notifications.</p>
   */
  event: InspectorEvent | string | undefined;

  /**
   * <p>The ARN of the SNS topic to which SNS notifications are sent.</p>
   */
  topicArn: string | undefined;
}

export namespace UnsubscribeFromEventRequest {
  export const filterSensitiveLog = (obj: UnsubscribeFromEventRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsubscribeFromEventRequest => __isa(o, "UnsubscribeFromEventRequest");
}

/**
 * <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected
 *          because you tried to generate a report for an assessment run that existed before reporting
 *          was supported in Amazon Inspector. You can only generate reports for assessment runs that
 *          took place or will take place after generating reports in Amazon Inspector became
 *          available.</p>
 */
export interface UnsupportedFeatureException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedFeatureException";
  $fault: "client";
  canRetry: boolean | undefined;
  message: string | undefined;
}

export namespace UnsupportedFeatureException {
  export const filterSensitiveLog = (obj: UnsupportedFeatureException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnsupportedFeatureException => __isa(o, "UnsupportedFeatureException");
}

export interface UpdateAssessmentTargetRequest {
  __type?: "UpdateAssessmentTargetRequest";
  /**
   * <p>The ARN of the assessment target that you want to update.</p>
   */
  assessmentTargetArn: string | undefined;

  /**
   * <p>The ARN of the resource group that is used to specify the new resource group to
   *          associate with the assessment target.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The name of the assessment target that you want to update.</p>
   */
  assessmentTargetName: string | undefined;
}

export namespace UpdateAssessmentTargetRequest {
  export const filterSensitiveLog = (obj: UpdateAssessmentTargetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateAssessmentTargetRequest => __isa(o, "UpdateAssessmentTargetRequest");
}
