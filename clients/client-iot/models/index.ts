import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AbortAction {
  CANCEL = "CANCEL"
}

/**
 * <p>Details of abort criteria to abort the job.</p>
 */
export interface AbortConfig {
  __type?: "AbortConfig";
  /**
   * <p>The list of abort criteria to define rules to abort the job.</p>
   */
  criteriaList: AbortCriteria[] | undefined;
}

export namespace AbortConfig {
  export const filterSensitiveLog = (obj: AbortConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AbortConfig => __isa(o, "AbortConfig");
}

/**
 * <p>Details of abort criteria to define rules to abort the job.</p>
 */
export interface AbortCriteria {
  __type?: "AbortCriteria";
  /**
   * <p>The type of abort action to initiate a job abort.</p>
   */
  action: AbortAction | string | undefined;

  /**
   * <p>The type of job execution failure to define a rule to initiate a job abort.</p>
   */
  failureType: JobExecutionFailureType | string | undefined;

  /**
   * <p>Minimum number of executed things before evaluating an abort rule.</p>
   */
  minNumberOfExecutedThings: number | undefined;

  /**
   * <p>The threshold as a percentage of the total number of executed things that will initiate a job abort.</p>
   *         <p>AWS IoT supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).</p>
   */
  thresholdPercentage: number | undefined;
}

export namespace AbortCriteria {
  export const filterSensitiveLog = (obj: AbortCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is AbortCriteria => __isa(o, "AbortCriteria");
}

/**
 * <p>The input for the AcceptCertificateTransfer operation.</p>
 */
export interface AcceptCertificateTransferRequest {
  __type?: "AcceptCertificateTransferRequest";
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
  export const filterSensitiveLog = (
    obj: AcceptCertificateTransferRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AcceptCertificateTransferRequest =>
    __isa(o, "AcceptCertificateTransferRequest");
}

/**
 * <p>Describes the actions associated with a rule.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>Change the state of a CloudWatch alarm.</p>
   */
  cloudwatchAlarm?: CloudwatchAlarmAction;

  /**
   * <p>Capture a CloudWatch metric.</p>
   */
  cloudwatchMetric?: CloudwatchMetricAction;

  /**
   * <p>Write to a DynamoDB table.</p>
   */
  dynamoDB?: DynamoDBAction;

  /**
   * <p>Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows
   *          you to write each attribute in an MQTT message payload into a separate DynamoDB
   *          column.</p>
   */
  dynamoDBv2?: DynamoDBv2Action;

  /**
   * <p>Write data to an Amazon Elasticsearch Service domain.</p>
   */
  elasticsearch?: ElasticsearchAction;

  /**
   * <p>Write to an Amazon Kinesis Firehose stream.</p>
   */
  firehose?: FirehoseAction;

  /**
   * <p>Send data to an HTTPS endpoint.</p>
   */
  http?: HttpAction;

  /**
   * <p>Sends message data to an AWS IoT Analytics channel.</p>
   */
  iotAnalytics?: IotAnalyticsAction;

  /**
   * <p>Sends an input to an AWS IoT Events detector.</p>
   */
  iotEvents?: IotEventsAction;

  /**
   * <p>Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset
   *       properties.</p>
   */
  iotSiteWise?: IotSiteWiseAction;

  /**
   * <p>Write data to an Amazon Kinesis stream.</p>
   */
  kinesis?: KinesisAction;

  /**
   * <p>Invoke a Lambda function.</p>
   */
  lambda?: LambdaAction;

  /**
   * <p>Publish to another MQTT topic.</p>
   */
  republish?: RepublishAction;

  /**
   * <p>Write to an Amazon S3 bucket.</p>
   */
  s3?: S3Action;

  /**
   * <p>Send a message to a Salesforce IoT Cloud Input Stream.</p>
   */
  salesforce?: SalesforceAction;

  /**
   * <p>Publish to an Amazon SNS topic.</p>
   */
  sns?: SnsAction;

  /**
   * <p>Publish to an Amazon SQS queue.</p>
   */
  sqs?: SqsAction;

  /**
   * <p>Starts execution of a Step Functions state machine.</p>
   */
  stepFunctions?: StepFunctionsAction;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

export enum ActionType {
  CONNECT = "CONNECT",
  PUBLISH = "PUBLISH",
  RECEIVE = "RECEIVE",
  SUBSCRIBE = "SUBSCRIBE"
}

/**
 * <p>Information about an active Device Defender security profile behavior violation.</p>
 */
export interface ActiveViolation {
  __type?: "ActiveViolation";
  /**
   * <p>The behavior which is being violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The time the most recent violation occurred.</p>
   */
  lastViolationTime?: Date;

  /**
   * <p>The value of the metric (the measurement) which caused the most recent violation.</p>
   */
  lastViolationValue?: MetricValue;

  /**
   * <p>The security profile whose behavior is in violation.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing responsible for the active violation.</p>
   */
  thingName?: string;

  /**
   * <p>The ID of the active violation.</p>
   */
  violationId?: string;

  /**
   * <p>The time the violation started.</p>
   */
  violationStartTime?: Date;
}

export namespace ActiveViolation {
  export const filterSensitiveLog = (obj: ActiveViolation): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActiveViolation =>
    __isa(o, "ActiveViolation");
}

/**
 * <p>Parameters used when defining a mitigation action that move a set of things to a thing group.</p>
 */
export interface AddThingsToThingGroupParams {
  __type?: "AddThingsToThingGroupParams";
  /**
   * <p>Specifies if this mitigation action can move the things that triggered the mitigation action even if they are part of one or more dynamic things groups.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The list of groups to which you want to add the things that triggered the mitigation action. You can add a thing to a maximum of 10 groups, but you cannot add a thing to more than one group in the same hierarchy.</p>
   */
  thingGroupNames: string[] | undefined;
}

export namespace AddThingsToThingGroupParams {
  export const filterSensitiveLog = (
    obj: AddThingsToThingGroupParams
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddThingsToThingGroupParams =>
    __isa(o, "AddThingsToThingGroupParams");
}

export interface AddThingToBillingGroupRequest {
  __type?: "AddThingToBillingGroupRequest";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the thing to be added to the billing group.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing to be added to the billing group.</p>
   */
  thingName?: string;
}

export namespace AddThingToBillingGroupRequest {
  export const filterSensitiveLog = (
    obj: AddThingToBillingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddThingToBillingGroupRequest =>
    __isa(o, "AddThingToBillingGroupRequest");
}

export interface AddThingToBillingGroupResponse {
  __type?: "AddThingToBillingGroupResponse";
}

export namespace AddThingToBillingGroupResponse {
  export const filterSensitiveLog = (
    obj: AddThingToBillingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddThingToBillingGroupResponse =>
    __isa(o, "AddThingToBillingGroupResponse");
}

export interface AddThingToThingGroupRequest {
  __type?: "AddThingToThingGroupRequest";
  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The ARN of the thing to add to a group.</p>
   */
  thingArn?: string;

  /**
   * <p>The ARN of the group to which you are adding a thing.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The name of the group to which you are adding a thing.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The name of the thing to add to a group.</p>
   */
  thingName?: string;
}

export namespace AddThingToThingGroupRequest {
  export const filterSensitiveLog = (
    obj: AddThingToThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddThingToThingGroupRequest =>
    __isa(o, "AddThingToThingGroupRequest");
}

export interface AddThingToThingGroupResponse {
  __type?: "AddThingToThingGroupResponse";
}

export namespace AddThingToThingGroupResponse {
  export const filterSensitiveLog = (
    obj: AddThingToThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddThingToThingGroupResponse =>
    __isa(o, "AddThingToThingGroupResponse");
}

/**
 * <p>A structure containing the alert target ARN and the role ARN.</p>
 */
export interface AlertTarget {
  __type?: "AlertTarget";
  /**
   * <p>The ARN of the notification target to which alerts are sent.</p>
   */
  alertTargetArn: string | undefined;

  /**
   * <p>The ARN of the role that grants permission to send alerts to the
   *         notification target.</p>
   */
  roleArn: string | undefined;
}

export namespace AlertTarget {
  export const filterSensitiveLog = (obj: AlertTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlertTarget => __isa(o, "AlertTarget");
}

export enum AlertTargetType {
  SNS = "SNS"
}

/**
 * <p>Contains information that allowed the authorization.</p>
 */
export interface Allowed {
  __type?: "Allowed";
  /**
   * <p>A list of policies that allowed the authentication.</p>
   */
  policies?: Policy[];
}

export namespace Allowed {
  export const filterSensitiveLog = (obj: Allowed): any => ({
    ...obj
  });
  export const isa = (o: any): o is Allowed => __isa(o, "Allowed");
}

/**
 * <p>An asset property timestamp entry containing the following information.</p>
 */
export interface AssetPropertyTimestamp {
  __type?: "AssetPropertyTimestamp";
  /**
   * <p>Optional. A string that contains the nanosecond time offset. Accepts substitution
   *       templates.</p>
   */
  offsetInNanos?: string;

  /**
   * <p>A string that contains the time in seconds since epoch. Accepts substitution
   *       templates.</p>
   */
  timeInSeconds: string | undefined;
}

export namespace AssetPropertyTimestamp {
  export const filterSensitiveLog = (obj: AssetPropertyTimestamp): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetPropertyTimestamp =>
    __isa(o, "AssetPropertyTimestamp");
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface AssetPropertyValue {
  __type?: "AssetPropertyValue";
  /**
   * <p>Optional. A string that describes the quality of the value. Accepts substitution
   *       templates. Must be <code>GOOD</code>, <code>BAD</code>, or <code>UNCERTAIN</code>.</p>
   */
  quality?: string;

  /**
   * <p>The asset property value timestamp.</p>
   */
  timestamp: AssetPropertyTimestamp | undefined;

  /**
   * <p>The value of the asset property.</p>
   */
  value: AssetPropertyVariant | undefined;
}

export namespace AssetPropertyValue {
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetPropertyValue =>
    __isa(o, "AssetPropertyValue");
}

/**
 * <p>Contains an asset property value (of a single type).</p>
 */
export interface AssetPropertyVariant {
  __type?: "AssetPropertyVariant";
  /**
   * <p>Optional. A string that contains the boolean value (<code>true</code> or
   *         <code>false</code>) of the value entry. Accepts substitution templates.</p>
   */
  booleanValue?: string;

  /**
   * <p>Optional. A string that contains the double value of the value entry. Accepts substitution
   *       templates.</p>
   */
  doubleValue?: string;

  /**
   * <p>Optional. A string that contains the integer value of the value entry. Accepts
   *       substitution templates.</p>
   */
  integerValue?: string;

  /**
   * <p>Optional. The string value of the value entry. Accepts substitution templates.</p>
   */
  stringValue?: string;
}

export namespace AssetPropertyVariant {
  export const filterSensitiveLog = (obj: AssetPropertyVariant): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssetPropertyVariant =>
    __isa(o, "AssetPropertyVariant");
}

export interface AssociateTargetsWithJobRequest {
  __type?: "AssociateTargetsWithJobRequest";
  /**
   * <p>An optional comment string describing why the job was associated with the targets.</p>
   */
  comment?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A list of thing group ARNs that define the targets of the job.</p>
   */
  targets: string[] | undefined;
}

export namespace AssociateTargetsWithJobRequest {
  export const filterSensitiveLog = (
    obj: AssociateTargetsWithJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateTargetsWithJobRequest =>
    __isa(o, "AssociateTargetsWithJobRequest");
}

export interface AssociateTargetsWithJobResponse {
  __type?: "AssociateTargetsWithJobResponse";
  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>An ARN identifying the job.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace AssociateTargetsWithJobResponse {
  export const filterSensitiveLog = (
    obj: AssociateTargetsWithJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateTargetsWithJobResponse =>
    __isa(o, "AssociateTargetsWithJobResponse");
}

export interface AttachPolicyRequest {
  __type?: "AttachPolicyRequest";
  /**
   * <p>The name of the policy to attach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached.</p>
   */
  target: string | undefined;
}

export namespace AttachPolicyRequest {
  export const filterSensitiveLog = (obj: AttachPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachPolicyRequest =>
    __isa(o, "AttachPolicyRequest");
}

/**
 * <p>The input for the AttachPrincipalPolicy operation.</p>
 */
export interface AttachPrincipalPolicyRequest {
  __type?: "AttachPrincipalPolicyRequest";
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
  export const filterSensitiveLog = (
    obj: AttachPrincipalPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachPrincipalPolicyRequest =>
    __isa(o, "AttachPrincipalPolicyRequest");
}

export interface AttachSecurityProfileRequest {
  __type?: "AttachSecurityProfileRequest";
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
  export const filterSensitiveLog = (
    obj: AttachSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachSecurityProfileRequest =>
    __isa(o, "AttachSecurityProfileRequest");
}

export interface AttachSecurityProfileResponse {
  __type?: "AttachSecurityProfileResponse";
}

export namespace AttachSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: AttachSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachSecurityProfileResponse =>
    __isa(o, "AttachSecurityProfileResponse");
}

/**
 * <p>The input for the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalRequest {
  __type?: "AttachThingPrincipalRequest";
  /**
   * <p>The principal, which can be a certificate ARN (as returned from the
   * 			CreateCertificate operation) or an Amazon Cognito ID.</p>
   */
  principal: string | undefined;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace AttachThingPrincipalRequest {
  export const filterSensitiveLog = (
    obj: AttachThingPrincipalRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachThingPrincipalRequest =>
    __isa(o, "AttachThingPrincipalRequest");
}

/**
 * <p>The output from the AttachThingPrincipal operation.</p>
 */
export interface AttachThingPrincipalResponse {
  __type?: "AttachThingPrincipalResponse";
}

export namespace AttachThingPrincipalResponse {
  export const filterSensitiveLog = (
    obj: AttachThingPrincipalResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachThingPrincipalResponse =>
    __isa(o, "AttachThingPrincipalResponse");
}

/**
 * <p>The attribute payload.</p>
 */
export interface AttributePayload {
  __type?: "AttributePayload";
  /**
   * <p>A JSON string containing up to three key-value pair in JSON format. For example:</p>
   * 		       <p>
   * 			         <code>{\"attributes\":{\"string1\":\"string2\"}}</code>
   * 		       </p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Specifies whether the list of attributes provided in the <code>AttributePayload</code> is merged with
   * 			the attributes stored in the registry, instead of overwriting them.</p>
   * 		       <p>To remove an attribute, call <code>UpdateThing</code> with an empty attribute value.</p>
   * 		       <note>
   * 			         <p>The <code>merge</code> attribute is only valid when calling <code>UpdateThing</code> or <code>UpdateThingGroup</code>.</p>
   * 		       </note>
   */
  merge?: boolean;
}

export namespace AttributePayload {
  export const filterSensitiveLog = (obj: AttributePayload): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttributePayload =>
    __isa(o, "AttributePayload");
}

/**
 * <p>Which audit checks are enabled and disabled for this account.</p>
 */
export interface AuditCheckConfiguration {
  __type?: "AuditCheckConfiguration";
  /**
   * <p>True if this audit check is enabled for this account.</p>
   */
  enabled?: boolean;
}

export namespace AuditCheckConfiguration {
  export const filterSensitiveLog = (obj: AuditCheckConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditCheckConfiguration =>
    __isa(o, "AuditCheckConfiguration");
}

/**
 * <p>Information about the audit check.</p>
 */
export interface AuditCheckDetails {
  __type?: "AuditCheckDetails";
  /**
   * <p>True if the check is complete and found all resources compliant.</p>
   */
  checkCompliant?: boolean;

  /**
   * <p>The completion status of this check. One of "IN_PROGRESS", "WAITING_FOR_DATA_COLLECTION",
   *         "CANCELED", "COMPLETED_COMPLIANT", "COMPLETED_NON_COMPLIANT", or "FAILED".</p>
   */
  checkRunStatus?: AuditCheckRunStatus | string;

  /**
   * <p>The code of any error encountered when this check is performed during this audit.
   *           One of "INSUFFICIENT_PERMISSIONS" or "AUDIT_CHECK_DISABLED".</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with any error encountered when this check is performed during this audit.</p>
   */
  message?: string;

  /**
   * <p>The number of resources that were found noncompliant during the check.</p>
   */
  nonCompliantResourcesCount?: number;

  /**
   * <p>The number of resources on which the check was performed.</p>
   */
  totalResourcesCount?: number;
}

export namespace AuditCheckDetails {
  export const filterSensitiveLog = (obj: AuditCheckDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditCheckDetails =>
    __isa(o, "AuditCheckDetails");
}

export enum AuditCheckRunStatus {
  CANCELED = "CANCELED",
  COMPLETED_COMPLIANT = "COMPLETED_COMPLIANT",
  COMPLETED_NON_COMPLIANT = "COMPLETED_NON_COMPLIANT",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  WAITING_FOR_DATA_COLLECTION = "WAITING_FOR_DATA_COLLECTION"
}

/**
 * <p>The findings (results) of the audit.</p>
 */
export interface AuditFinding {
  __type?: "AuditFinding";
  /**
   * <p>The audit check that generated this result.</p>
   */
  checkName?: string;

  /**
   * <p>A unique identifier for this set of audit findings. This identifier is used to apply
   *       mitigation tasks to one or more sets of findings.</p>
   */
  findingId?: string;

  /**
   * <p>The time the result (finding) was discovered.</p>
   */
  findingTime?: Date;

  /**
   * <p>The resource that was found to be noncompliant with the
   *         audit check.</p>
   */
  nonCompliantResource?: NonCompliantResource;

  /**
   * <p>The reason the resource was noncompliant.</p>
   */
  reasonForNonCompliance?: string;

  /**
   * <p>A code that indicates the reason that the resource was noncompliant.</p>
   */
  reasonForNonComplianceCode?: string;

  /**
   * <p>The list of related resources.</p>
   */
  relatedResources?: RelatedResource[];

  /**
   * <p>The severity of the result (finding).</p>
   */
  severity?: AuditFindingSeverity | string;

  /**
   * <p>The ID of the audit that generated this result (finding).</p>
   */
  taskId?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;
}

export namespace AuditFinding {
  export const filterSensitiveLog = (obj: AuditFinding): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditFinding => __isa(o, "AuditFinding");
}

export enum AuditFindingSeverity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM"
}

export enum AuditFrequency {
  BIWEEKLY = "BIWEEKLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
  WEEKLY = "WEEKLY"
}

/**
 * <p>Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started.</p>
 */
export interface AuditMitigationActionExecutionMetadata {
  __type?: "AuditMitigationActionExecutionMetadata";
  /**
   * <p>The unique identifier for the mitigation action being applied by the task.</p>
   */
  actionId?: string;

  /**
   * <p>The friendly name of the mitigation action being applied by the task.</p>
   */
  actionName?: string;

  /**
   * <p>The date and time when the task was completed or canceled. Blank if the task is still running.</p>
   */
  endTime?: Date;

  /**
   * <p>If an error occurred, the code that indicates which type of error occurred.</p>
   */
  errorCode?: string;

  /**
   * <p>The unique identifier for the findings to which the task and associated mitigation action are applied.</p>
   */
  findingId?: string;

  /**
   * <p>If an error occurred, a message that describes the error.</p>
   */
  message?: string;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The current status of the task being executed.</p>
   */
  status?: AuditMitigationActionsExecutionStatus | string;

  /**
   * <p>The unique identifier for the task that applies the mitigation action.</p>
   */
  taskId?: string;
}

export namespace AuditMitigationActionExecutionMetadata {
  export const filterSensitiveLog = (
    obj: AuditMitigationActionExecutionMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditMitigationActionExecutionMetadata =>
    __isa(o, "AuditMitigationActionExecutionMetadata");
}

export enum AuditMitigationActionsExecutionStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED"
}

/**
 * <p>Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>.</p>
 */
export interface AuditMitigationActionsTaskMetadata {
  __type?: "AuditMitigationActionsTaskMetadata";
  /**
   * <p>The time at which the audit mitigation actions task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>The unique identifier for the task.</p>
   */
  taskId?: string;

  /**
   * <p>The current state of the audit mitigation actions task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace AuditMitigationActionsTaskMetadata {
  export const filterSensitiveLog = (
    obj: AuditMitigationActionsTaskMetadata
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditMitigationActionsTaskMetadata =>
    __isa(o, "AuditMitigationActionsTaskMetadata");
}

export enum AuditMitigationActionsTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.</p>
 */
export interface AuditMitigationActionsTaskTarget {
  __type?: "AuditMitigationActionsTaskTarget";
  /**
   * <p>Specifies a filter in the form of an audit check and set of reason codes that identify the findings from the audit to which the audit mitigation actions task apply.</p>
   */
  auditCheckToReasonCodeFilter?: { [key: string]: string[] };

  /**
   * <p>If the task will apply a mitigation action to findings from a specific audit, this value uniquely identifies the audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>If the task will apply a mitigation action to one or more listed findings, this value uniquely identifies those findings.</p>
   */
  findingIds?: string[];
}

export namespace AuditMitigationActionsTaskTarget {
  export const filterSensitiveLog = (
    obj: AuditMitigationActionsTaskTarget
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditMitigationActionsTaskTarget =>
    __isa(o, "AuditMitigationActionsTaskTarget");
}

/**
 * <p>Information about the targets to which audit notifications are sent.</p>
 */
export interface AuditNotificationTarget {
  __type?: "AuditNotificationTarget";
  /**
   * <p>True if notifications to the target are enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role that grants permission to send notifications to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>The ARN of the target (SNS topic) to which audit notifications are sent.</p>
   */
  targetArn?: string;
}

export namespace AuditNotificationTarget {
  export const filterSensitiveLog = (obj: AuditNotificationTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditNotificationTarget =>
    __isa(o, "AuditNotificationTarget");
}

export enum AuditNotificationType {
  SNS = "SNS"
}

/**
 * <p>The audits that were performed.</p>
 */
export interface AuditTaskMetadata {
  __type?: "AuditTaskMetadata";
  /**
   * <p>The ID of this audit.</p>
   */
  taskId?: string;

  /**
   * <p>The status of this audit. One of "IN_PROGRESS", "COMPLETED",
   *         "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of this audit. One of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace AuditTaskMetadata {
  export const filterSensitiveLog = (obj: AuditTaskMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuditTaskMetadata =>
    __isa(o, "AuditTaskMetadata");
}

export enum AuditTaskStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS"
}

export enum AuditTaskType {
  ON_DEMAND_AUDIT_TASK = "ON_DEMAND_AUDIT_TASK",
  SCHEDULED_AUDIT_TASK = "SCHEDULED_AUDIT_TASK"
}

export enum AuthDecision {
  ALLOWED = "ALLOWED",
  EXPLICIT_DENY = "EXPLICIT_DENY",
  IMPLICIT_DENY = "IMPLICIT_DENY"
}

/**
 * <p>A collection of authorization information.</p>
 */
export interface AuthInfo {
  __type?: "AuthInfo";
  /**
   * <p>The type of action for which the principal is being authorized.</p>
   */
  actionType?: ActionType | string;

  /**
   * <p>The resources for which the principal is being authorized to perform the specified
   *          action.</p>
   */
  resources?: string[];
}

export namespace AuthInfo {
  export const filterSensitiveLog = (obj: AuthInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthInfo => __isa(o, "AuthInfo");
}

/**
 * <p>An object that specifies the authorization service for a domain.</p>
 */
export interface AuthorizerConfig {
  __type?: "AuthorizerConfig";
  /**
   * <p>A Boolean that specifies whether the domain configuration's authorization service can be overridden.</p>
   */
  allowAuthorizerOverride?: boolean;

  /**
   * <p>The name of the authorization service for a domain configuration.</p>
   */
  defaultAuthorizerName?: string;
}

export namespace AuthorizerConfig {
  export const filterSensitiveLog = (obj: AuthorizerConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizerConfig =>
    __isa(o, "AuthorizerConfig");
}

/**
 * <p>The authorizer description.</p>
 */
export interface AuthorizerDescription {
  __type?: "AuthorizerDescription";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's Lambda function ARN.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;

  /**
   * <p>The UNIX timestamp of when the authorizer was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The UNIX timestamp of when the authorizer was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>Specifies whether AWS IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>The status of the authorizer.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to validate the token signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace AuthorizerDescription {
  export const filterSensitiveLog = (obj: AuthorizerDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizerDescription =>
    __isa(o, "AuthorizerDescription");
}

export enum AuthorizerStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

/**
 * <p>The authorizer summary.</p>
 */
export interface AuthorizerSummary {
  __type?: "AuthorizerSummary";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace AuthorizerSummary {
  export const filterSensitiveLog = (obj: AuthorizerSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizerSummary =>
    __isa(o, "AuthorizerSummary");
}

/**
 * <p>The authorizer result.</p>
 */
export interface AuthResult {
  __type?: "AuthResult";
  /**
   * <p>The policies and statements that allowed the specified action.</p>
   */
  allowed?: Allowed;

  /**
   * <p>The final authorization decision of this scenario. Multiple statements are taken into
   *          account when determining the authorization decision. An explicit deny statement can
   *          override multiple allow statements.</p>
   */
  authDecision?: AuthDecision | string;

  /**
   * <p>Authorization information.</p>
   */
  authInfo?: AuthInfo;

  /**
   * <p>The policies and statements that denied the specified action.</p>
   */
  denied?: Denied;

  /**
   * <p>Contains any missing context values found while evaluating policy.</p>
   */
  missingContextValues?: string[];
}

export namespace AuthResult {
  export const filterSensitiveLog = (obj: AuthResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthResult => __isa(o, "AuthResult");
}

export enum AutoRegistrationStatus {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE"
}

/**
 * <p>Configuration for the rollout of OTA updates.</p>
 */
export interface AwsJobExecutionsRolloutConfig {
  __type?: "AwsJobExecutionsRolloutConfig";
  /**
   * <p>The maximum number of OTA update job executions started per minute.</p>
   */
  maximumPerMinute?: number;
}

export namespace AwsJobExecutionsRolloutConfig {
  export const filterSensitiveLog = (
    obj: AwsJobExecutionsRolloutConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsJobExecutionsRolloutConfig =>
    __isa(o, "AwsJobExecutionsRolloutConfig");
}

/**
 * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
 *              contains HTTP.</p>
 */
export interface AwsJobPresignedUrlConfig {
  __type?: "AwsJobPresignedUrlConfig";
  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 1800
   *             seconds. Pre-signed URLs are generated when a request for the job document is received.</p>
   */
  expiresInSec?: number;
}

export namespace AwsJobPresignedUrlConfig {
  export const filterSensitiveLog = (obj: AwsJobPresignedUrlConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is AwsJobPresignedUrlConfig =>
    __isa(o, "AwsJobPresignedUrlConfig");
}

/**
 * <p>A Device Defender security profile behavior.</p>
 */
export interface Behavior {
  __type?: "Behavior";
  /**
   * <p>The criteria that determine if a device is behaving normally in regard to
   *           the <code>metric</code>.</p>
   */
  criteria?: BehaviorCriteria;

  /**
   * <p>What is measured by the behavior.</p>
   */
  metric?: string;

  /**
   * <p>The name you have given to the behavior.</p>
   */
  name: string | undefined;
}

export namespace Behavior {
  export const filterSensitiveLog = (obj: Behavior): any => ({
    ...obj
  });
  export const isa = (o: any): o is Behavior => __isa(o, "Behavior");
}

/**
 * <p>The criteria by which the behavior is determined to be normal.</p>
 */
export interface BehaviorCriteria {
  __type?: "BehaviorCriteria";
  /**
   * <p>The operator that relates the thing measured (<code>metric</code>) to the criteria
   *           (containing a <code>value</code> or <code>statisticalThreshold</code>).</p>
   */
  comparisonOperator?: ComparisonOperator | string;

  /**
   * <p>If a device is in violation of the behavior for the specified number of consecutive
   *           datapoints, an alarm occurs. If not specified, the default is 1.</p>
   */
  consecutiveDatapointsToAlarm?: number;

  /**
   * <p>If an alarm has occurred and the offending device is no longer in violation of the behavior
   *           for the specified number of consecutive datapoints, the alarm is cleared. If not specified,
   *           the default is 1.</p>
   */
  consecutiveDatapointsToClear?: number;

  /**
   * <p>Use this to specify the time duration over which the behavior is evaluated,
   *           for those criteria which have a time dimension (for example, <code>NUM_MESSAGES_SENT</code>).
   *           For a <code>statisticalThreshhold</code> metric comparison, measurements from all devices are
   *           accumulated over this time duration before being used to calculate percentiles, and later,
   *           measurements from an individual device are also accumulated over this time duration before being
   *           given a percentile rank.</p>
   */
  durationSeconds?: number;

  /**
   * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior
   *           is determined to be in compliance or in violation of the behavior.</p>
   */
  statisticalThreshold?: StatisticalThreshold;

  /**
   * <p>The value to be compared with the <code>metric</code>.</p>
   */
  value?: MetricValue;
}

export namespace BehaviorCriteria {
  export const filterSensitiveLog = (obj: BehaviorCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is BehaviorCriteria =>
    __isa(o, "BehaviorCriteria");
}

/**
 * <p>Additional information about the billing group.</p>
 */
export interface BillingGroupMetadata {
  __type?: "BillingGroupMetadata";
  /**
   * <p>The date the billing group was created.</p>
   */
  creationDate?: Date;
}

export namespace BillingGroupMetadata {
  export const filterSensitiveLog = (obj: BillingGroupMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is BillingGroupMetadata =>
    __isa(o, "BillingGroupMetadata");
}

/**
 * <p>The properties of a billing group.</p>
 */
export interface BillingGroupProperties {
  __type?: "BillingGroupProperties";
  /**
   * <p>The description of the billing group.</p>
   */
  billingGroupDescription?: string;
}

export namespace BillingGroupProperties {
  export const filterSensitiveLog = (obj: BillingGroupProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is BillingGroupProperties =>
    __isa(o, "BillingGroupProperties");
}

/**
 * <p>A CA certificate.</p>
 */
export interface CACertificate {
  __type?: "CACertificate";
  /**
   * <p>The ARN of the CA certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the CA certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the CA certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CACertificateStatus | string;
}

export namespace CACertificate {
  export const filterSensitiveLog = (obj: CACertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is CACertificate => __isa(o, "CACertificate");
}

/**
 * <p>Describes a CA certificate.</p>
 */
export interface CACertificateDescription {
  __type?: "CACertificateDescription";
  /**
   * <p>Whether the CA certificate configured for auto registration of device certificates.
   *          Valid values are "ENABLE" and "DISABLE"</p>
   */
  autoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The CA certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The date the CA certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The customer version of the CA certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the CA certificate.</p>
   */
  generationId?: string;

  /**
   * <p>The date the CA certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The owner of the CA certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The status of a CA certificate.</p>
   */
  status?: CACertificateStatus | string;

  /**
   * <p>When the CA certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CACertificateDescription {
  export const filterSensitiveLog = (obj: CACertificateDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is CACertificateDescription =>
    __isa(o, "CACertificateDescription");
}

export enum CACertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum CACertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE"
}

export interface CancelAuditMitigationActionsTaskRequest {
  __type?: "CancelAuditMitigationActionsTaskRequest";
  /**
   * <p>The unique identifier for the task that you want to cancel. </p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditMitigationActionsTaskRequest {
  export const filterSensitiveLog = (
    obj: CancelAuditMitigationActionsTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelAuditMitigationActionsTaskRequest =>
    __isa(o, "CancelAuditMitigationActionsTaskRequest");
}

export interface CancelAuditMitigationActionsTaskResponse {
  __type?: "CancelAuditMitigationActionsTaskResponse";
}

export namespace CancelAuditMitigationActionsTaskResponse {
  export const filterSensitiveLog = (
    obj: CancelAuditMitigationActionsTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelAuditMitigationActionsTaskResponse =>
    __isa(o, "CancelAuditMitigationActionsTaskResponse");
}

export interface CancelAuditTaskRequest {
  __type?: "CancelAuditTaskRequest";
  /**
   * <p>The ID of the audit you want to cancel. You can only cancel an
   *               audit that is "IN_PROGRESS".</p>
   */
  taskId: string | undefined;
}

export namespace CancelAuditTaskRequest {
  export const filterSensitiveLog = (obj: CancelAuditTaskRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelAuditTaskRequest =>
    __isa(o, "CancelAuditTaskRequest");
}

export interface CancelAuditTaskResponse {
  __type?: "CancelAuditTaskResponse";
}

export namespace CancelAuditTaskResponse {
  export const filterSensitiveLog = (obj: CancelAuditTaskResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelAuditTaskResponse =>
    __isa(o, "CancelAuditTaskResponse");
}

/**
 * <p>The input for the CancelCertificateTransfer operation.</p>
 */
export interface CancelCertificateTransferRequest {
  __type?: "CancelCertificateTransferRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace CancelCertificateTransferRequest {
  export const filterSensitiveLog = (
    obj: CancelCertificateTransferRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelCertificateTransferRequest =>
    __isa(o, "CancelCertificateTransferRequest");
}

export interface CancelJobExecutionRequest {
  __type?: "CancelJobExecutionRequest";
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
   * <p>The ID of the job to be canceled.</p>
   */
  jobId: string | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If not
   *           specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
   * <p>The name of the thing whose execution of the job will be canceled.</p>
   */
  thingName: string | undefined;
}

export namespace CancelJobExecutionRequest {
  export const filterSensitiveLog = (obj: CancelJobExecutionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobExecutionRequest =>
    __isa(o, "CancelJobExecutionRequest");
}

export interface CancelJobRequest {
  __type?: "CancelJobRequest";
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

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>(Optional)A reason code string that explains why the job was canceled.</p>
   */
  reasonCode?: string;
}

export namespace CancelJobRequest {
  export const filterSensitiveLog = (obj: CancelJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobRequest =>
    __isa(o, "CancelJobRequest");
}

export interface CancelJobResponse {
  __type?: "CancelJobResponse";
  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace CancelJobResponse {
  export const filterSensitiveLog = (obj: CancelJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelJobResponse =>
    __isa(o, "CancelJobResponse");
}

export enum CannedAccessControlList {
  AuthenticatedRead = "authenticated-read",
  AwsExecRead = "aws-exec-read",
  BucketOwnerFullControl = "bucket-owner-full-control",
  BucketOwnerRead = "bucket-owner-read",
  LogDeliveryWrite = "log-delivery-write",
  Private = "private",
  PublicRead = "public-read",
  PublicReadWrite = "public-read-write"
}

/**
 * <p>Information about a certificate.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The status of the certificate.</p>
   *          <p>The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  status?: CertificateStatus | string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

/**
 * <p>Unable to verify the CA certificate used to sign the device certificate you are
 *          attempting to register. This is happens when you have registered more than one CA
 *          certificate that has the same subject field and public key.</p>
 */
export interface CertificateConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateConflictException {
  export const filterSensitiveLog = (
    obj: CertificateConflictException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateConflictException =>
    __isa(o, "CertificateConflictException");
}

/**
 * <p>Describes a certificate.</p>
 */
export interface CertificateDescription {
  __type?: "CertificateDescription";
  /**
   * <p>The certificate ID of the CA certificate used to sign this certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The date and time the certificate was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The customer version of the certificate.</p>
   */
  customerVersion?: number;

  /**
   * <p>The generation ID of the certificate.</p>
   */
  generationId?: string;

  /**
   * <p>The date and time the certificate was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ID of the AWS account that owns the certificate.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the AWS account of the previous owner of the certificate.</p>
   */
  previousOwnedBy?: string;

  /**
   * <p>The status of the certificate.</p>
   */
  status?: CertificateStatus | string;

  /**
   * <p>The transfer data.</p>
   */
  transferData?: TransferData;

  /**
   * <p>When the certificate is valid.</p>
   */
  validity?: CertificateValidity;
}

export namespace CertificateDescription {
  export const filterSensitiveLog = (obj: CertificateDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateDescription =>
    __isa(o, "CertificateDescription");
}

/**
 * <p>The certificate operation is not allowed.</p>
 */
export interface CertificateStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateStateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace CertificateStateException {
  export const filterSensitiveLog = (obj: CertificateStateException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateStateException =>
    __isa(o, "CertificateStateException");
}

export enum CertificateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING_ACTIVATION = "PENDING_ACTIVATION",
  PENDING_TRANSFER = "PENDING_TRANSFER",
  REGISTER_INACTIVE = "REGISTER_INACTIVE",
  REVOKED = "REVOKED"
}

/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace CertificateValidationException {
  export const filterSensitiveLog = (
    obj: CertificateValidationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateValidationException =>
    __isa(o, "CertificateValidationException");
}

/**
 * <p>When the certificate is valid.</p>
 */
export interface CertificateValidity {
  __type?: "CertificateValidity";
  /**
   * <p>The certificate is not valid after this date.</p>
   */
  notAfter?: Date;

  /**
   * <p>The certificate is not valid before this date.</p>
   */
  notBefore?: Date;
}

export namespace CertificateValidity {
  export const filterSensitiveLog = (obj: CertificateValidity): any => ({
    ...obj
  });
  export const isa = (o: any): o is CertificateValidity =>
    __isa(o, "CertificateValidity");
}

export interface ClearDefaultAuthorizerRequest {
  __type?: "ClearDefaultAuthorizerRequest";
}

export namespace ClearDefaultAuthorizerRequest {
  export const filterSensitiveLog = (
    obj: ClearDefaultAuthorizerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClearDefaultAuthorizerRequest =>
    __isa(o, "ClearDefaultAuthorizerRequest");
}

export interface ClearDefaultAuthorizerResponse {
  __type?: "ClearDefaultAuthorizerResponse";
}

export namespace ClearDefaultAuthorizerResponse {
  export const filterSensitiveLog = (
    obj: ClearDefaultAuthorizerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClearDefaultAuthorizerResponse =>
    __isa(o, "ClearDefaultAuthorizerResponse");
}

/**
 * <p>Describes an action that updates a CloudWatch alarm.</p>
 */
export interface CloudwatchAlarmAction {
  __type?: "CloudwatchAlarmAction";
  /**
   * <p>The CloudWatch alarm name.</p>
   */
  alarmName: string | undefined;

  /**
   * <p>The IAM role that allows access to the CloudWatch alarm.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The reason for the alarm change.</p>
   */
  stateReason: string | undefined;

  /**
   * <p>The value of the alarm state. Acceptable values are: OK, ALARM,
   *          INSUFFICIENT_DATA.</p>
   */
  stateValue: string | undefined;
}

export namespace CloudwatchAlarmAction {
  export const filterSensitiveLog = (obj: CloudwatchAlarmAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudwatchAlarmAction =>
    __isa(o, "CloudwatchAlarmAction");
}

/**
 * <p>Describes an action that captures a CloudWatch metric.</p>
 */
export interface CloudwatchMetricAction {
  __type?: "CloudwatchMetricAction";
  /**
   * <p>The CloudWatch metric name.</p>
   */
  metricName: string | undefined;

  /**
   * <p>The CloudWatch metric namespace name.</p>
   */
  metricNamespace: string | undefined;

  /**
   * <p>An optional <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp">Unix timestamp</a>.</p>
   */
  metricTimestamp?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit">metric
   *             unit</a> supported by CloudWatch.</p>
   */
  metricUnit: string | undefined;

  /**
   * <p>The CloudWatch metric value.</p>
   */
  metricValue: string | undefined;

  /**
   * <p>The IAM role that allows access to the CloudWatch metric.</p>
   */
  roleArn: string | undefined;
}

export namespace CloudwatchMetricAction {
  export const filterSensitiveLog = (obj: CloudwatchMetricAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudwatchMetricAction =>
    __isa(o, "CloudwatchMetricAction");
}

/**
 * <p>Describes the method to use when code signing a file.</p>
 */
export interface CodeSigning {
  __type?: "CodeSigning";
  /**
   * <p>The ID of the AWSSignerJob which was created to sign the file.</p>
   */
  awsSignerJobId?: string;

  /**
   * <p>A custom method for code signing a file.</p>
   */
  customCodeSigning?: CustomCodeSigning;

  /**
   * <p>Describes the code-signing job.</p>
   */
  startSigningJobParameter?: StartSigningJobParameter;
}

export namespace CodeSigning {
  export const filterSensitiveLog = (obj: CodeSigning): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeSigning => __isa(o, "CodeSigning");
}

/**
 * <p>Describes the certificate chain being used when code signing a file.</p>
 */
export interface CodeSigningCertificateChain {
  __type?: "CodeSigningCertificateChain";
  /**
   * <p>The name of the certificate.</p>
   */
  certificateName?: string;

  /**
   * <p>A base64 encoded binary representation of the code signing certificate chain.</p>
   */
  inlineDocument?: string;
}

export namespace CodeSigningCertificateChain {
  export const filterSensitiveLog = (
    obj: CodeSigningCertificateChain
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeSigningCertificateChain =>
    __isa(o, "CodeSigningCertificateChain");
}

/**
 * <p>Describes the signature for a file.</p>
 */
export interface CodeSigningSignature {
  __type?: "CodeSigningSignature";
  /**
   * <p>A base64 encoded binary representation of the code signing signature.</p>
   */
  inlineDocument?: Uint8Array;
}

export namespace CodeSigningSignature {
  export const filterSensitiveLog = (obj: CodeSigningSignature): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeSigningSignature =>
    __isa(o, "CodeSigningSignature");
}

export enum ComparisonOperator {
  GREATER_THAN = "greater-than",
  GREATER_THAN_EQUALS = "greater-than-equals",
  IN_CIDR_SET = "in-cidr-set",
  IN_PORT_SET = "in-port-set",
  LESS_THAN = "less-than",
  LESS_THAN_EQUALS = "less-than-equals",
  NOT_IN_CIDR_SET = "not-in-cidr-set",
  NOT_IN_PORT_SET = "not-in-port-set"
}

/**
 * <p>Configuration.</p>
 */
export interface Configuration {
  __type?: "Configuration";
  /**
   * <p>True to enable the configuration.</p>
   */
  Enabled?: boolean;
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj
  });
  export const isa = (o: any): o is Configuration => __isa(o, "Configuration");
}

export interface ConfirmTopicRuleDestinationRequest {
  __type?: "ConfirmTopicRuleDestinationRequest";
  /**
   * <p>The token used to confirm ownership or access to the topic rule confirmation URL.</p>
   */
  confirmationToken: string | undefined;
}

export namespace ConfirmTopicRuleDestinationRequest {
  export const filterSensitiveLog = (
    obj: ConfirmTopicRuleDestinationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfirmTopicRuleDestinationRequest =>
    __isa(o, "ConfirmTopicRuleDestinationRequest");
}

export interface ConfirmTopicRuleDestinationResponse {
  __type?: "ConfirmTopicRuleDestinationResponse";
}

export namespace ConfirmTopicRuleDestinationResponse {
  export const filterSensitiveLog = (
    obj: ConfirmTopicRuleDestinationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfirmTopicRuleDestinationResponse =>
    __isa(o, "ConfirmTopicRuleDestinationResponse");
}

/**
 * <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 */
export interface ConflictingResourceUpdateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConflictingResourceUpdateException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ConflictingResourceUpdateException {
  export const filterSensitiveLog = (
    obj: ConflictingResourceUpdateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConflictingResourceUpdateException =>
    __isa(o, "ConflictingResourceUpdateException");
}

export interface CreateAuthorizerRequest {
  __type?: "CreateAuthorizerRequest";
  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn: string | undefined;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>Specifies whether AWS IoT validates the token signature in an authorization request.</p>
   */
  signingDisabled?: boolean;

  /**
   * <p>The status of the create authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The name of the token key used to extract the token from the HTTP headers.</p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the digital signature returned by your custom
   *          authentication service.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace CreateAuthorizerRequest {
  export const filterSensitiveLog = (obj: CreateAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAuthorizerRequest =>
    __isa(o, "CreateAuthorizerRequest");
}

export interface CreateAuthorizerResponse {
  __type?: "CreateAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer's name.</p>
   */
  authorizerName?: string;
}

export namespace CreateAuthorizerResponse {
  export const filterSensitiveLog = (obj: CreateAuthorizerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAuthorizerResponse =>
    __isa(o, "CreateAuthorizerResponse");
}

export interface CreateBillingGroupRequest {
  __type?: "CreateBillingGroupRequest";
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
  export const filterSensitiveLog = (obj: CreateBillingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBillingGroupRequest =>
    __isa(o, "CreateBillingGroupRequest");
}

export interface CreateBillingGroupResponse {
  __type?: "CreateBillingGroupResponse";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>The name you gave to the billing group.</p>
   */
  billingGroupName?: string;
}

export namespace CreateBillingGroupResponse {
  export const filterSensitiveLog = (obj: CreateBillingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBillingGroupResponse =>
    __isa(o, "CreateBillingGroupResponse");
}

/**
 * <p>The input for the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrRequest {
  __type?: "CreateCertificateFromCsrRequest";
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
  export const filterSensitiveLog = (
    obj: CreateCertificateFromCsrRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCertificateFromCsrRequest =>
    __isa(o, "CreateCertificateFromCsrRequest");
}

/**
 * <p>The output from the CreateCertificateFromCsr operation.</p>
 */
export interface CreateCertificateFromCsrResponse {
  __type?: "CreateCertificateFromCsrResponse";
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
  export const filterSensitiveLog = (
    obj: CreateCertificateFromCsrResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCertificateFromCsrResponse =>
    __isa(o, "CreateCertificateFromCsrResponse");
}

export interface CreateDomainConfigurationRequest {
  __type?: "CreateDomainConfigurationRequest";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName: string | undefined;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN.
   *       This value is not required for AWS-managed domains.</p>
   */
  serverCertificateArns?: string[];

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;

  /**
   * <p>The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority.
   *          This value is not required for AWS-managed domains.</p>
   */
  validationCertificateArn?: string;
}

export namespace CreateDomainConfigurationRequest {
  export const filterSensitiveLog = (
    obj: CreateDomainConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainConfigurationRequest =>
    __isa(o, "CreateDomainConfigurationRequest");
}

export interface CreateDomainConfigurationResponse {
  __type?: "CreateDomainConfigurationResponse";
  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;
}

export namespace CreateDomainConfigurationResponse {
  export const filterSensitiveLog = (
    obj: CreateDomainConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainConfigurationResponse =>
    __isa(o, "CreateDomainConfigurationResponse");
}

export interface CreateDynamicThingGroupRequest {
  __type?: "CreateDynamicThingGroupRequest";
  /**
   * <p>The dynamic thing group index name.</p>
   * 		       <note>
   * 			         <p>Currently one index is supported: "AWS_Things".</p>
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

  /**
   * <p>The dynamic thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;
}

export namespace CreateDynamicThingGroupRequest {
  export const filterSensitiveLog = (
    obj: CreateDynamicThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDynamicThingGroupRequest =>
    __isa(o, "CreateDynamicThingGroupRequest");
}

export interface CreateDynamicThingGroupResponse {
  __type?: "CreateDynamicThingGroupResponse";
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
   * <p>The dynamic thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The dynamic thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The dynamic thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace CreateDynamicThingGroupResponse {
  export const filterSensitiveLog = (
    obj: CreateDynamicThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDynamicThingGroupResponse =>
    __isa(o, "CreateDynamicThingGroupResponse");
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>The job document.</p>
   *         <note>
   *             <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p>
   *             <p>The placeholder link is of the following form:</p>
   *             <p>
   *                <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code>
   *             </p>
   *             <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p>
   *         </note>
   */
  document?: string;

  /**
   * <p>An S3 link to the job document.</p>
   */
  documentSource?: string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric
   *             characters, "-" and "_" are valid for use here.</p>
   */
  jobId: string | undefined;

  /**
   * <p>Configuration information for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>Metadata which can be used to manage the job.</p>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of things and thing groups to which the job should be sent.</p>
   */
  targets: string[] | undefined;

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job. The timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the time expires, it will be
   *            automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResponse {
  __type?: "CreateJobResponse";
  /**
   * <p>The job description.</p>
   */
  description?: string;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job.</p>
   */
  jobId?: string;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResponse =>
    __isa(o, "CreateJobResponse");
}

/**
 * <p>The input for the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateRequest {
  __type?: "CreateKeysAndCertificateRequest";
  /**
   * <p>Specifies whether the certificate is active.</p>
   */
  setAsActive?: boolean;
}

export namespace CreateKeysAndCertificateRequest {
  export const filterSensitiveLog = (
    obj: CreateKeysAndCertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateKeysAndCertificateRequest =>
    __isa(o, "CreateKeysAndCertificateRequest");
}

/**
 * <p>The output of the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateResponse {
  __type?: "CreateKeysAndCertificateResponse";
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. AWS IoT issues a default subject name for the certificate
   *          (for example, AWS IoT Certificate).</p>
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
  export const filterSensitiveLog = (
    obj: CreateKeysAndCertificateResponse
  ): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) })
  });
  export const isa = (o: any): o is CreateKeysAndCertificateResponse =>
    __isa(o, "CreateKeysAndCertificateResponse");
}

export interface CreateMitigationActionRequest {
  __type?: "CreateMitigationActionRequest";
  /**
   * <p>A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).</p>
   */
  actionName: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams: MitigationActionParams | undefined;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata that can be used to manage the mitigation action.</p>
   */
  tags?: Tag[];
}

export namespace CreateMitigationActionRequest {
  export const filterSensitiveLog = (
    obj: CreateMitigationActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMitigationActionRequest =>
    __isa(o, "CreateMitigationActionRequest");
}

export interface CreateMitigationActionResponse {
  __type?: "CreateMitigationActionResponse";
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
  export const filterSensitiveLog = (
    obj: CreateMitigationActionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMitigationActionResponse =>
    __isa(o, "CreateMitigationActionResponse");
}

export interface CreateOTAUpdateRequest {
  __type?: "CreateOTAUpdateRequest";
  /**
   * <p>A list of additional OTA update parameters which are name-value pairs.</p>
   */
  additionalParameters?: { [key: string]: string };

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>The description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>The files to be streamed by the OTA update.</p>
   */
  files: OTAUpdateFile[] | undefined;

  /**
   * <p>The ID of the OTA update to be created.</p>
   */
  otaUpdateId: string | undefined;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>The IAM role that allows access to the AWS IoT Jobs service.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Metadata which can be used to manage updates.</p>
   */
  tags?: Tag[];

  /**
   * <p>Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things
   * 			specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a
   * 			thing when a change is detected in a target. For example, an update will run on a thing when the thing is
   * 			added to a target group, even after the update was completed by all things originally in the group. Valid
   * 			values: CONTINUOUS | SNAPSHOT.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The targeted devices to receive OTA updates.</p>
   */
  targets: string[] | undefined;
}

export namespace CreateOTAUpdateRequest {
  export const filterSensitiveLog = (obj: CreateOTAUpdateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOTAUpdateRequest =>
    __isa(o, "CreateOTAUpdateRequest");
}

export interface CreateOTAUpdateResponse {
  __type?: "CreateOTAUpdateResponse";
  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The OTA update status.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;
}

export namespace CreateOTAUpdateResponse {
  export const filterSensitiveLog = (obj: CreateOTAUpdateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOTAUpdateResponse =>
    __isa(o, "CreateOTAUpdateResponse");
}

/**
 * <p>The input for the CreatePolicy operation.</p>
 */
export interface CreatePolicyRequest {
  __type?: "CreatePolicyRequest";
  /**
   * <p>The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace CreatePolicyRequest {
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyRequest =>
    __isa(o, "CreatePolicyRequest");
}

/**
 * <p>The output from the CreatePolicy operation.</p>
 */
export interface CreatePolicyResponse {
  __type?: "CreatePolicyResponse";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
}

export namespace CreatePolicyResponse {
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyResponse =>
    __isa(o, "CreatePolicyResponse");
}

/**
 * <p>The input for the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionRequest {
  __type?: "CreatePolicyVersionRequest";
  /**
   * <p>The JSON document that describes the policy. Minimum length of 1. Maximum length of
   *          2048, excluding whitespace.</p>
   */
  policyDocument: string | undefined;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;

  /**
   * <p>Specifies whether the policy version is set as the default. When this parameter is
   *          true, the new policy version becomes the operative version (that is, the version that is in
   *          effect for the certificates to which the policy is attached).</p>
   */
  setAsDefault?: boolean;
}

export namespace CreatePolicyVersionRequest {
  export const filterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyVersionRequest =>
    __isa(o, "CreatePolicyVersionRequest");
}

/**
 * <p>The output of the CreatePolicyVersion operation.</p>
 */
export interface CreatePolicyVersionResponse {
  __type?: "CreatePolicyVersionResponse";
  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

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

export namespace CreatePolicyVersionResponse {
  export const filterSensitiveLog = (
    obj: CreatePolicyVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePolicyVersionResponse =>
    __isa(o, "CreatePolicyVersionResponse");
}

export interface CreateProvisioningClaimRequest {
  __type?: "CreateProvisioningClaimRequest";
  /**
   * <p>The name of the provisioning template to use.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningClaimRequest {
  export const filterSensitiveLog = (
    obj: CreateProvisioningClaimRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProvisioningClaimRequest =>
    __isa(o, "CreateProvisioningClaimRequest");
}

export interface CreateProvisioningClaimResponse {
  __type?: "CreateProvisioningClaimResponse";
  /**
   * <p>The ID of the certificate.</p>
   */
  certificateId?: string;

  /**
   * <p>The provisioning claim certificate.</p>
   */
  certificatePem?: string;

  /**
   * <p>The provisioning claim expiration time.</p>
   */
  expiration?: Date;

  /**
   * <p>The provisioning claim key pair.</p>
   */
  keyPair?: KeyPair;
}

export namespace CreateProvisioningClaimResponse {
  export const filterSensitiveLog = (
    obj: CreateProvisioningClaimResponse
  ): any => ({
    ...obj,
    ...(obj.keyPair && { keyPair: KeyPair.filterSensitiveLog(obj.keyPair) })
  });
  export const isa = (o: any): o is CreateProvisioningClaimResponse =>
    __isa(o, "CreateProvisioningClaimResponse");
}

export interface CreateProvisioningTemplateRequest {
  __type?: "CreateProvisioningTemplateRequest";
  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

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

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningTemplateRequest {
  export const filterSensitiveLog = (
    obj: CreateProvisioningTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProvisioningTemplateRequest =>
    __isa(o, "CreateProvisioningTemplateRequest");
}

export interface CreateProvisioningTemplateResponse {
  __type?: "CreateProvisioningTemplateResponse";
  /**
   * <p>The default version of the fleet provisioning template.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The ARN that identifies the provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace CreateProvisioningTemplateResponse {
  export const filterSensitiveLog = (
    obj: CreateProvisioningTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProvisioningTemplateResponse =>
    __isa(o, "CreateProvisioningTemplateResponse");
}

export interface CreateProvisioningTemplateVersionRequest {
  __type?: "CreateProvisioningTemplateVersionRequest";
  /**
   * <p>Sets a fleet provision template version as the default version.</p>
   */
  setAsDefault?: boolean;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody: string | undefined;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace CreateProvisioningTemplateVersionRequest {
  export const filterSensitiveLog = (
    obj: CreateProvisioningTemplateVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProvisioningTemplateVersionRequest =>
    __isa(o, "CreateProvisioningTemplateVersionRequest");
}

export interface CreateProvisioningTemplateVersionResponse {
  __type?: "CreateProvisioningTemplateVersionResponse";
  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;

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
}

export namespace CreateProvisioningTemplateVersionResponse {
  export const filterSensitiveLog = (
    obj: CreateProvisioningTemplateVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProvisioningTemplateVersionResponse =>
    __isa(o, "CreateProvisioningTemplateVersionResponse");
}

export interface CreateRoleAliasRequest {
  __type?: "CreateRoleAliasRequest";
  /**
   * <p>How long (in seconds) the credentials will be valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The role alias that points to a role ARN. This allows you to change the role without
   *          having to update the device.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn: string | undefined;
}

export namespace CreateRoleAliasRequest {
  export const filterSensitiveLog = (obj: CreateRoleAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoleAliasRequest =>
    __isa(o, "CreateRoleAliasRequest");
}

export interface CreateRoleAliasResponse {
  __type?: "CreateRoleAliasResponse";
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
  export const filterSensitiveLog = (obj: CreateRoleAliasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRoleAliasResponse =>
    __isa(o, "CreateRoleAliasResponse");
}

export interface CreateScheduledAuditRequest {
  __type?: "CreateScheduledAuditRequest";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1"
   *             through "31" or "LAST". This field is required if the "frequency" parameter is
   *             set to "MONTHLY". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the
   *             "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY",
   *             "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency: AuditFrequency | string | undefined;

  /**
   * <p>The name you want to give to the scheduled audit. (Max. 128 chars)</p>
   */
  scheduledAuditName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the scheduled audit.</p>
   */
  tags?: Tag[];

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be enabled
   *             for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames: string[] | undefined;
}

export namespace CreateScheduledAuditRequest {
  export const filterSensitiveLog = (
    obj: CreateScheduledAuditRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateScheduledAuditRequest =>
    __isa(o, "CreateScheduledAuditRequest");
}

export interface CreateScheduledAuditResponse {
  __type?: "CreateScheduledAuditResponse";
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace CreateScheduledAuditResponse {
  export const filterSensitiveLog = (
    obj: CreateScheduledAuditResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateScheduledAuditResponse =>
    __isa(o, "CreateScheduledAuditResponse");
}

export interface CreateSecurityProfileRequest {
  __type?: "CreateSecurityProfileRequest";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>Specifies the destinations to which alerts are sent. (Alerts are always sent to the
   *         console.) Alerts are generated when a device (thing) violates a behavior.</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name you are giving to the security profile.</p>
   */
  securityProfileName: string | undefined;

  /**
   * <p>Metadata that can be used to manage the security profile.</p>
   */
  tags?: Tag[];
}

export namespace CreateSecurityProfileRequest {
  export const filterSensitiveLog = (
    obj: CreateSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSecurityProfileRequest =>
    __isa(o, "CreateSecurityProfileRequest");
}

export interface CreateSecurityProfileResponse {
  __type?: "CreateSecurityProfileResponse";
  /**
   * <p>The ARN of the security profile.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The name you gave to the security profile.</p>
   */
  securityProfileName?: string;
}

export namespace CreateSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: CreateSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSecurityProfileResponse =>
    __isa(o, "CreateSecurityProfileResponse");
}

export interface CreateStreamRequest {
  __type?: "CreateStreamRequest";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files: StreamFile[] | undefined;

  /**
   * <p>An IAM role that allows the IoT service principal assumes to access your S3 files.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>Metadata which can be used to manage streams.</p>
   */
  tags?: Tag[];
}

export namespace CreateStreamRequest {
  export const filterSensitiveLog = (obj: CreateStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStreamRequest =>
    __isa(o, "CreateStreamRequest");
}

export interface CreateStreamResponse {
  __type?: "CreateStreamResponse";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The version of the stream.</p>
   */
  streamVersion?: number;
}

export namespace CreateStreamResponse {
  export const filterSensitiveLog = (obj: CreateStreamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStreamResponse =>
    __isa(o, "CreateStreamResponse");
}

export interface CreateThingGroupRequest {
  __type?: "CreateThingGroupRequest";
  /**
   * <p>The name of the parent thing group.</p>
   */
  parentGroupName?: string;

  /**
   * <p>Metadata which can be used to manage the thing group.</p>
   */
  tags?: Tag[];

  /**
   * <p>The thing group name to create.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;
}

export namespace CreateThingGroupRequest {
  export const filterSensitiveLog = (obj: CreateThingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingGroupRequest =>
    __isa(o, "CreateThingGroupRequest");
}

export interface CreateThingGroupResponse {
  __type?: "CreateThingGroupResponse";
  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace CreateThingGroupResponse {
  export const filterSensitiveLog = (obj: CreateThingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingGroupResponse =>
    __isa(o, "CreateThingGroupResponse");
}

/**
 * <p>The input for the CreateThing operation.</p>
 */
export interface CreateThingRequest {
  __type?: "CreateThingRequest";
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

  /**
   * <p>The name of the thing to create.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type associated with the new thing.</p>
   */
  thingTypeName?: string;
}

export namespace CreateThingRequest {
  export const filterSensitiveLog = (obj: CreateThingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingRequest =>
    __isa(o, "CreateThingRequest");
}

/**
 * <p>The output of the CreateThing operation.</p>
 */
export interface CreateThingResponse {
  __type?: "CreateThingResponse";
  /**
   * <p>The ARN of the new thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The name of the new thing.</p>
   */
  thingName?: string;
}

export namespace CreateThingResponse {
  export const filterSensitiveLog = (obj: CreateThingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingResponse =>
    __isa(o, "CreateThingResponse");
}

/**
 * <p>The input for the CreateThingType operation.</p>
 */
export interface CreateThingTypeRequest {
  __type?: "CreateThingTypeRequest";
  /**
   * <p>Metadata which can be used to manage the thing type.</p>
   */
  tags?: Tag[];

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
}

export namespace CreateThingTypeRequest {
  export const filterSensitiveLog = (obj: CreateThingTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingTypeRequest =>
    __isa(o, "CreateThingTypeRequest");
}

/**
 * <p>The output of the CreateThingType operation.</p>
 */
export interface CreateThingTypeResponse {
  __type?: "CreateThingTypeResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the thing type.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace CreateThingTypeResponse {
  export const filterSensitiveLog = (obj: CreateThingTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateThingTypeResponse =>
    __isa(o, "CreateThingTypeResponse");
}

export interface CreateTopicRuleDestinationRequest {
  __type?: "CreateTopicRuleDestinationRequest";
  /**
   * <p>The topic rule destination configuration.</p>
   */
  destinationConfiguration: TopicRuleDestinationConfiguration | undefined;
}

export namespace CreateTopicRuleDestinationRequest {
  export const filterSensitiveLog = (
    obj: CreateTopicRuleDestinationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTopicRuleDestinationRequest =>
    __isa(o, "CreateTopicRuleDestinationRequest");
}

export interface CreateTopicRuleDestinationResponse {
  __type?: "CreateTopicRuleDestinationResponse";
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace CreateTopicRuleDestinationResponse {
  export const filterSensitiveLog = (
    obj: CreateTopicRuleDestinationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTopicRuleDestinationResponse =>
    __isa(o, "CreateTopicRuleDestinationResponse");
}

/**
 * <p>The input for the CreateTopicRule operation.</p>
 */
export interface CreateTopicRuleRequest {
  __type?: "CreateTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;

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

  /**
   * <p>The rule payload.</p>
   */
  topicRulePayload: TopicRulePayload | undefined;
}

export namespace CreateTopicRuleRequest {
  export const filterSensitiveLog = (obj: CreateTopicRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTopicRuleRequest =>
    __isa(o, "CreateTopicRuleRequest");
}

/**
 * <p>Describes a custom method used to code sign a file.</p>
 */
export interface CustomCodeSigning {
  __type?: "CustomCodeSigning";
  /**
   * <p>The certificate chain.</p>
   */
  certificateChain?: CodeSigningCertificateChain;

  /**
   * <p>The hash algorithm used to code sign the file.</p>
   */
  hashAlgorithm?: string;

  /**
   * <p>The signature for the file.</p>
   */
  signature?: CodeSigningSignature;

  /**
   * <p>The signature algorithm used to code sign the file.</p>
   */
  signatureAlgorithm?: string;
}

export namespace CustomCodeSigning {
  export const filterSensitiveLog = (obj: CustomCodeSigning): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomCodeSigning =>
    __isa(o, "CustomCodeSigning");
}

export enum DayOfWeek {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED"
}

export interface DeleteAccountAuditConfigurationRequest {
  __type?: "DeleteAccountAuditConfigurationRequest";
  /**
   * <p>If true, all scheduled audits are deleted.</p>
   */
  deleteScheduledAudits?: boolean;
}

export namespace DeleteAccountAuditConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DeleteAccountAuditConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAccountAuditConfigurationRequest =>
    __isa(o, "DeleteAccountAuditConfigurationRequest");
}

export interface DeleteAccountAuditConfigurationResponse {
  __type?: "DeleteAccountAuditConfigurationResponse";
}

export namespace DeleteAccountAuditConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DeleteAccountAuditConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAccountAuditConfigurationResponse =>
    __isa(o, "DeleteAccountAuditConfigurationResponse");
}

export interface DeleteAuthorizerRequest {
  __type?: "DeleteAuthorizerRequest";
  /**
   * <p>The name of the authorizer to delete.</p>
   */
  authorizerName: string | undefined;
}

export namespace DeleteAuthorizerRequest {
  export const filterSensitiveLog = (obj: DeleteAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAuthorizerRequest =>
    __isa(o, "DeleteAuthorizerRequest");
}

export interface DeleteAuthorizerResponse {
  __type?: "DeleteAuthorizerResponse";
}

export namespace DeleteAuthorizerResponse {
  export const filterSensitiveLog = (obj: DeleteAuthorizerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAuthorizerResponse =>
    __isa(o, "DeleteAuthorizerResponse");
}

export interface DeleteBillingGroupRequest {
  __type?: "DeleteBillingGroupRequest";
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
  export const filterSensitiveLog = (obj: DeleteBillingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBillingGroupRequest =>
    __isa(o, "DeleteBillingGroupRequest");
}

export interface DeleteBillingGroupResponse {
  __type?: "DeleteBillingGroupResponse";
}

export namespace DeleteBillingGroupResponse {
  export const filterSensitiveLog = (obj: DeleteBillingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBillingGroupResponse =>
    __isa(o, "DeleteBillingGroupResponse");
}

/**
 * <p>Input for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateRequest {
  __type?: "DeleteCACertificateRequest";
  /**
   * <p>The ID of the certificate to delete. (The last part of the certificate ARN contains
   *          the certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DeleteCACertificateRequest {
  export const filterSensitiveLog = (obj: DeleteCACertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCACertificateRequest =>
    __isa(o, "DeleteCACertificateRequest");
}

/**
 * <p>The output for the DeleteCACertificate operation.</p>
 */
export interface DeleteCACertificateResponse {
  __type?: "DeleteCACertificateResponse";
}

export namespace DeleteCACertificateResponse {
  export const filterSensitiveLog = (
    obj: DeleteCACertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCACertificateResponse =>
    __isa(o, "DeleteCACertificateResponse");
}

/**
 * <p>The input for the DeleteCertificate operation.</p>
 */
export interface DeleteCertificateRequest {
  __type?: "DeleteCertificateRequest";
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
  export const filterSensitiveLog = (obj: DeleteCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCertificateRequest =>
    __isa(o, "DeleteCertificateRequest");
}

/**
 * <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
 */
export interface DeleteConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "DeleteConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace DeleteConflictException {
  export const filterSensitiveLog = (obj: DeleteConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConflictException =>
    __isa(o, "DeleteConflictException");
}

export interface DeleteDomainConfigurationRequest {
  __type?: "DeleteDomainConfigurationRequest";
  /**
   * <p>The name of the domain configuration to be deleted.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DeleteDomainConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DeleteDomainConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainConfigurationRequest =>
    __isa(o, "DeleteDomainConfigurationRequest");
}

export interface DeleteDomainConfigurationResponse {
  __type?: "DeleteDomainConfigurationResponse";
}

export namespace DeleteDomainConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DeleteDomainConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainConfigurationResponse =>
    __isa(o, "DeleteDomainConfigurationResponse");
}

export interface DeleteDynamicThingGroupRequest {
  __type?: "DeleteDynamicThingGroupRequest";
  /**
   * <p>The expected version of the dynamic thing group to delete.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the dynamic thing group to delete.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DeleteDynamicThingGroupRequest {
  export const filterSensitiveLog = (
    obj: DeleteDynamicThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDynamicThingGroupRequest =>
    __isa(o, "DeleteDynamicThingGroupRequest");
}

export interface DeleteDynamicThingGroupResponse {
  __type?: "DeleteDynamicThingGroupResponse";
}

export namespace DeleteDynamicThingGroupResponse {
  export const filterSensitiveLog = (
    obj: DeleteDynamicThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDynamicThingGroupResponse =>
    __isa(o, "DeleteDynamicThingGroupResponse");
}

export interface DeleteJobExecutionRequest {
  __type?: "DeleteJobExecutionRequest";
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
   * <p>The ID of the job whose execution on a particular device will be deleted.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing whose job execution will be deleted.</p>
   */
  thingName: string | undefined;
}

export namespace DeleteJobExecutionRequest {
  export const filterSensitiveLog = (obj: DeleteJobExecutionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobExecutionRequest =>
    __isa(o, "DeleteJobExecutionRequest");
}

export interface DeleteJobRequest {
  __type?: "DeleteJobRequest";
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
   * <p>The ID of the job to be deleted.</p>
   *          <p>After a job deletion is completed, you may reuse this jobId when you create a new job.
   *         However, this is not recommended, and you must ensure that your devices are not using the
   *         jobId to refer to the deleted job.</p>
   */
  jobId: string | undefined;
}

export namespace DeleteJobRequest {
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobRequest =>
    __isa(o, "DeleteJobRequest");
}

export interface DeleteMitigationActionRequest {
  __type?: "DeleteMitigationActionRequest";
  /**
   * <p>The name of the mitigation action that you want to delete.</p>
   */
  actionName: string | undefined;
}

export namespace DeleteMitigationActionRequest {
  export const filterSensitiveLog = (
    obj: DeleteMitigationActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMitigationActionRequest =>
    __isa(o, "DeleteMitigationActionRequest");
}

export interface DeleteMitigationActionResponse {
  __type?: "DeleteMitigationActionResponse";
}

export namespace DeleteMitigationActionResponse {
  export const filterSensitiveLog = (
    obj: DeleteMitigationActionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMitigationActionResponse =>
    __isa(o, "DeleteMitigationActionResponse");
}

export interface DeleteOTAUpdateRequest {
  __type?: "DeleteOTAUpdateRequest";
  /**
   * <p>Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.</p>
   */
  deleteStream?: boolean;

  /**
   * <p>Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.</p>
   */
  forceDeleteAWSJob?: boolean;

  /**
   * <p>The OTA update ID to delete.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace DeleteOTAUpdateRequest {
  export const filterSensitiveLog = (obj: DeleteOTAUpdateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOTAUpdateRequest =>
    __isa(o, "DeleteOTAUpdateRequest");
}

export interface DeleteOTAUpdateResponse {
  __type?: "DeleteOTAUpdateResponse";
}

export namespace DeleteOTAUpdateResponse {
  export const filterSensitiveLog = (obj: DeleteOTAUpdateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteOTAUpdateResponse =>
    __isa(o, "DeleteOTAUpdateResponse");
}

/**
 * <p>The input for the DeletePolicy operation.</p>
 */
export interface DeletePolicyRequest {
  __type?: "DeletePolicyRequest";
  /**
   * <p>The name of the policy to delete.</p>
   */
  policyName: string | undefined;
}

export namespace DeletePolicyRequest {
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyRequest =>
    __isa(o, "DeletePolicyRequest");
}

/**
 * <p>The input for the DeletePolicyVersion operation.</p>
 */
export interface DeletePolicyVersionRequest {
  __type?: "DeletePolicyVersionRequest";
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
  export const filterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyVersionRequest =>
    __isa(o, "DeletePolicyVersionRequest");
}

export interface DeleteProvisioningTemplateRequest {
  __type?: "DeleteProvisioningTemplateRequest";
  /**
   * <p>The name of the fleet provision template to delete.</p>
   */
  templateName: string | undefined;
}

export namespace DeleteProvisioningTemplateRequest {
  export const filterSensitiveLog = (
    obj: DeleteProvisioningTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProvisioningTemplateRequest =>
    __isa(o, "DeleteProvisioningTemplateRequest");
}

export interface DeleteProvisioningTemplateResponse {
  __type?: "DeleteProvisioningTemplateResponse";
}

export namespace DeleteProvisioningTemplateResponse {
  export const filterSensitiveLog = (
    obj: DeleteProvisioningTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProvisioningTemplateResponse =>
    __isa(o, "DeleteProvisioningTemplateResponse");
}

export interface DeleteProvisioningTemplateVersionRequest {
  __type?: "DeleteProvisioningTemplateVersionRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteProvisioningTemplateVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProvisioningTemplateVersionRequest =>
    __isa(o, "DeleteProvisioningTemplateVersionRequest");
}

export interface DeleteProvisioningTemplateVersionResponse {
  __type?: "DeleteProvisioningTemplateVersionResponse";
}

export namespace DeleteProvisioningTemplateVersionResponse {
  export const filterSensitiveLog = (
    obj: DeleteProvisioningTemplateVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProvisioningTemplateVersionResponse =>
    __isa(o, "DeleteProvisioningTemplateVersionResponse");
}

/**
 * <p>The input for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeRequest {
  __type?: "DeleteRegistrationCodeRequest";
}

export namespace DeleteRegistrationCodeRequest {
  export const filterSensitiveLog = (
    obj: DeleteRegistrationCodeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegistrationCodeRequest =>
    __isa(o, "DeleteRegistrationCodeRequest");
}

/**
 * <p>The output for the DeleteRegistrationCode operation.</p>
 */
export interface DeleteRegistrationCodeResponse {
  __type?: "DeleteRegistrationCodeResponse";
}

export namespace DeleteRegistrationCodeResponse {
  export const filterSensitiveLog = (
    obj: DeleteRegistrationCodeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRegistrationCodeResponse =>
    __isa(o, "DeleteRegistrationCodeResponse");
}

export interface DeleteRoleAliasRequest {
  __type?: "DeleteRoleAliasRequest";
  /**
   * <p>The role alias to delete.</p>
   */
  roleAlias: string | undefined;
}

export namespace DeleteRoleAliasRequest {
  export const filterSensitiveLog = (obj: DeleteRoleAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoleAliasRequest =>
    __isa(o, "DeleteRoleAliasRequest");
}

export interface DeleteRoleAliasResponse {
  __type?: "DeleteRoleAliasResponse";
}

export namespace DeleteRoleAliasResponse {
  export const filterSensitiveLog = (obj: DeleteRoleAliasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRoleAliasResponse =>
    __isa(o, "DeleteRoleAliasResponse");
}

export interface DeleteScheduledAuditRequest {
  __type?: "DeleteScheduledAuditRequest";
  /**
   * <p>The name of the scheduled audit you want to delete.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DeleteScheduledAuditRequest {
  export const filterSensitiveLog = (
    obj: DeleteScheduledAuditRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteScheduledAuditRequest =>
    __isa(o, "DeleteScheduledAuditRequest");
}

export interface DeleteScheduledAuditResponse {
  __type?: "DeleteScheduledAuditResponse";
}

export namespace DeleteScheduledAuditResponse {
  export const filterSensitiveLog = (
    obj: DeleteScheduledAuditResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteScheduledAuditResponse =>
    __isa(o, "DeleteScheduledAuditResponse");
}

export interface DeleteSecurityProfileRequest {
  __type?: "DeleteSecurityProfileRequest";
  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the security profile to be deleted.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DeleteSecurityProfileRequest {
  export const filterSensitiveLog = (
    obj: DeleteSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecurityProfileRequest =>
    __isa(o, "DeleteSecurityProfileRequest");
}

export interface DeleteSecurityProfileResponse {
  __type?: "DeleteSecurityProfileResponse";
}

export namespace DeleteSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: DeleteSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecurityProfileResponse =>
    __isa(o, "DeleteSecurityProfileResponse");
}

export interface DeleteStreamRequest {
  __type?: "DeleteStreamRequest";
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DeleteStreamRequest {
  export const filterSensitiveLog = (obj: DeleteStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStreamRequest =>
    __isa(o, "DeleteStreamRequest");
}

export interface DeleteStreamResponse {
  __type?: "DeleteStreamResponse";
}

export namespace DeleteStreamResponse {
  export const filterSensitiveLog = (obj: DeleteStreamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStreamResponse =>
    __isa(o, "DeleteStreamResponse");
}

export interface DeleteThingGroupRequest {
  __type?: "DeleteThingGroupRequest";
  /**
   * <p>The expected version of the thing group to delete.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the thing group to delete.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DeleteThingGroupRequest {
  export const filterSensitiveLog = (obj: DeleteThingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingGroupRequest =>
    __isa(o, "DeleteThingGroupRequest");
}

export interface DeleteThingGroupResponse {
  __type?: "DeleteThingGroupResponse";
}

export namespace DeleteThingGroupResponse {
  export const filterSensitiveLog = (obj: DeleteThingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingGroupResponse =>
    __isa(o, "DeleteThingGroupResponse");
}

/**
 * <p>The input for the DeleteThing operation.</p>
 */
export interface DeleteThingRequest {
  __type?: "DeleteThingRequest";
  /**
   * <p>The expected version of the thing record in the registry. If the version of the
   * 			record in the registry does not match the expected version specified in the request, the
   * 				<code>DeleteThing</code> request is rejected with a
   * 				<code>VersionConflictException</code>.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The name of the thing to delete.</p>
   */
  thingName: string | undefined;
}

export namespace DeleteThingRequest {
  export const filterSensitiveLog = (obj: DeleteThingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingRequest =>
    __isa(o, "DeleteThingRequest");
}

/**
 * <p>The output of the DeleteThing operation.</p>
 */
export interface DeleteThingResponse {
  __type?: "DeleteThingResponse";
}

export namespace DeleteThingResponse {
  export const filterSensitiveLog = (obj: DeleteThingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingResponse =>
    __isa(o, "DeleteThingResponse");
}

/**
 * <p>The input for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeRequest {
  __type?: "DeleteThingTypeRequest";
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DeleteThingTypeRequest {
  export const filterSensitiveLog = (obj: DeleteThingTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingTypeRequest =>
    __isa(o, "DeleteThingTypeRequest");
}

/**
 * <p>The output for the DeleteThingType operation.</p>
 */
export interface DeleteThingTypeResponse {
  __type?: "DeleteThingTypeResponse";
}

export namespace DeleteThingTypeResponse {
  export const filterSensitiveLog = (obj: DeleteThingTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteThingTypeResponse =>
    __isa(o, "DeleteThingTypeResponse");
}

export interface DeleteTopicRuleDestinationRequest {
  __type?: "DeleteTopicRuleDestinationRequest";
  /**
   * <p>The ARN of the topic rule destination to delete.</p>
   */
  arn: string | undefined;
}

export namespace DeleteTopicRuleDestinationRequest {
  export const filterSensitiveLog = (
    obj: DeleteTopicRuleDestinationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTopicRuleDestinationRequest =>
    __isa(o, "DeleteTopicRuleDestinationRequest");
}

export interface DeleteTopicRuleDestinationResponse {
  __type?: "DeleteTopicRuleDestinationResponse";
}

export namespace DeleteTopicRuleDestinationResponse {
  export const filterSensitiveLog = (
    obj: DeleteTopicRuleDestinationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTopicRuleDestinationResponse =>
    __isa(o, "DeleteTopicRuleDestinationResponse");
}

/**
 * <p>The input for the DeleteTopicRule operation.</p>
 */
export interface DeleteTopicRuleRequest {
  __type?: "DeleteTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace DeleteTopicRuleRequest {
  export const filterSensitiveLog = (obj: DeleteTopicRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTopicRuleRequest =>
    __isa(o, "DeleteTopicRuleRequest");
}

export interface DeleteV2LoggingLevelRequest {
  __type?: "DeleteV2LoggingLevelRequest";
  /**
   * <p>The name of the resource for which you are configuring logging.</p>
   */
  targetName: string | undefined;

  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType: LogTargetType | string | undefined;
}

export namespace DeleteV2LoggingLevelRequest {
  export const filterSensitiveLog = (
    obj: DeleteV2LoggingLevelRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteV2LoggingLevelRequest =>
    __isa(o, "DeleteV2LoggingLevelRequest");
}

/**
 * <p>Contains information that denied the authorization.</p>
 */
export interface Denied {
  __type?: "Denied";
  /**
   * <p>Information that explicitly denies the authorization. </p>
   */
  explicitDeny?: ExplicitDeny;

  /**
   * <p>Information that implicitly denies the authorization. When a policy doesn't
   *          explicitly deny or allow an action on a resource it is considered an implicit
   *          deny.</p>
   */
  implicitDeny?: ImplicitDeny;
}

export namespace Denied {
  export const filterSensitiveLog = (obj: Denied): any => ({
    ...obj
  });
  export const isa = (o: any): o is Denied => __isa(o, "Denied");
}

/**
 * <p>The input for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeRequest {
  __type?: "DeprecateThingTypeRequest";
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
  export const filterSensitiveLog = (obj: DeprecateThingTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeprecateThingTypeRequest =>
    __isa(o, "DeprecateThingTypeRequest");
}

/**
 * <p>The output for the DeprecateThingType operation.</p>
 */
export interface DeprecateThingTypeResponse {
  __type?: "DeprecateThingTypeResponse";
}

export namespace DeprecateThingTypeResponse {
  export const filterSensitiveLog = (obj: DeprecateThingTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeprecateThingTypeResponse =>
    __isa(o, "DeprecateThingTypeResponse");
}

export interface DescribeAccountAuditConfigurationRequest {
  __type?: "DescribeAccountAuditConfigurationRequest";
}

export namespace DescribeAccountAuditConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DescribeAccountAuditConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAuditConfigurationRequest =>
    __isa(o, "DescribeAccountAuditConfigurationRequest");
}

export interface DescribeAccountAuditConfigurationResponse {
  __type?: "DescribeAccountAuditConfigurationResponse";
  /**
   * <p>Which audit checks are enabled and disabled for this account.</p>
   */
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

  /**
   * <p>Information about the targets to which audit notifications are sent for
   *             this account.</p>
   */
  auditNotificationTargetConfigurations?: {
    [key: string]: AuditNotificationTarget;
  };

  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information
   *             about your devices, policies, certificates, and other items as required when
   *             performing an audit.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required.</p>
   */
  roleArn?: string;
}

export namespace DescribeAccountAuditConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DescribeAccountAuditConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAuditConfigurationResponse =>
    __isa(o, "DescribeAccountAuditConfigurationResponse");
}

export interface DescribeAuditFindingRequest {
  __type?: "DescribeAuditFindingRequest";
  /**
   * <p>A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.</p>
   */
  findingId: string | undefined;
}

export namespace DescribeAuditFindingRequest {
  export const filterSensitiveLog = (
    obj: DescribeAuditFindingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuditFindingRequest =>
    __isa(o, "DescribeAuditFindingRequest");
}

export interface DescribeAuditFindingResponse {
  __type?: "DescribeAuditFindingResponse";
  /**
   * <p>The findings (results) of the audit.</p>
   */
  finding?: AuditFinding;
}

export namespace DescribeAuditFindingResponse {
  export const filterSensitiveLog = (
    obj: DescribeAuditFindingResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuditFindingResponse =>
    __isa(o, "DescribeAuditFindingResponse");
}

export interface DescribeAuditMitigationActionsTaskRequest {
  __type?: "DescribeAuditMitigationActionsTaskRequest";
  /**
   * <p>The unique identifier for the audit mitigation task.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditMitigationActionsTaskRequest {
  export const filterSensitiveLog = (
    obj: DescribeAuditMitigationActionsTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuditMitigationActionsTaskRequest =>
    __isa(o, "DescribeAuditMitigationActionsTaskRequest");
}

export interface DescribeAuditMitigationActionsTaskResponse {
  __type?: "DescribeAuditMitigationActionsTaskResponse";
  /**
   * <p>Specifies the mitigation actions and their parameters that are applied as part of this task.</p>
   */
  actionsDefinition?: MitigationAction[];

  /**
   * <p>Specifies the mitigation actions that should be applied to specific audit checks.</p>
   */
  auditCheckToActionsMapping?: { [key: string]: string[] };

  /**
   * <p>The date and time when the task was completed or canceled.</p>
   */
  endTime?: Date;

  /**
   * <p>The date and time when the task was started.</p>
   */
  startTime?: Date;

  /**
   * <p>Identifies the findings to which the mitigation actions are applied. This can be by audit checks, by audit task, or a set of findings.</p>
   */
  target?: AuditMitigationActionsTaskTarget;

  /**
   * <p>Aggregate counts of the results when the mitigation tasks were applied to the findings for this audit mitigation actions task.</p>
   */
  taskStatistics?: { [key: string]: TaskStatisticsForAuditCheck };

  /**
   * <p>The current status of the task.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace DescribeAuditMitigationActionsTaskResponse {
  export const filterSensitiveLog = (
    obj: DescribeAuditMitigationActionsTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeAuditMitigationActionsTaskResponse =>
    __isa(o, "DescribeAuditMitigationActionsTaskResponse");
}

export interface DescribeAuditTaskRequest {
  __type?: "DescribeAuditTaskRequest";
  /**
   * <p>The ID of the audit whose information you want to get.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeAuditTaskRequest {
  export const filterSensitiveLog = (obj: DescribeAuditTaskRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuditTaskRequest =>
    __isa(o, "DescribeAuditTaskRequest");
}

export interface DescribeAuditTaskResponse {
  __type?: "DescribeAuditTaskResponse";
  /**
   * <p>Detailed information about each check performed during this audit.</p>
   */
  auditDetails?: { [key: string]: AuditCheckDetails };

  /**
   * <p>The name of the scheduled audit (only if the audit was a scheduled audit).</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>The time the audit started.</p>
   */
  taskStartTime?: Date;

  /**
   * <p>Statistical information about the audit.</p>
   */
  taskStatistics?: TaskStatistics;

  /**
   * <p>The status of the audit: one of "IN_PROGRESS", "COMPLETED",
   *             "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>The type of audit: "ON_DEMAND_AUDIT_TASK" or "SCHEDULED_AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace DescribeAuditTaskResponse {
  export const filterSensitiveLog = (obj: DescribeAuditTaskResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuditTaskResponse =>
    __isa(o, "DescribeAuditTaskResponse");
}

export interface DescribeAuthorizerRequest {
  __type?: "DescribeAuthorizerRequest";
  /**
   * <p>The name of the authorizer to describe.</p>
   */
  authorizerName: string | undefined;
}

export namespace DescribeAuthorizerRequest {
  export const filterSensitiveLog = (obj: DescribeAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuthorizerRequest =>
    __isa(o, "DescribeAuthorizerRequest");
}

export interface DescribeAuthorizerResponse {
  __type?: "DescribeAuthorizerResponse";
  /**
   * <p>The authorizer description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeAuthorizerResponse {
  export const filterSensitiveLog = (obj: DescribeAuthorizerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAuthorizerResponse =>
    __isa(o, "DescribeAuthorizerResponse");
}

export interface DescribeBillingGroupRequest {
  __type?: "DescribeBillingGroupRequest";
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;
}

export namespace DescribeBillingGroupRequest {
  export const filterSensitiveLog = (
    obj: DescribeBillingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBillingGroupRequest =>
    __isa(o, "DescribeBillingGroupRequest");
}

export interface DescribeBillingGroupResponse {
  __type?: "DescribeBillingGroupResponse";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The ID of the billing group.</p>
   */
  billingGroupId?: string;

  /**
   * <p>Additional information about the billing group.</p>
   */
  billingGroupMetadata?: BillingGroupMetadata;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The properties of the billing group.</p>
   */
  billingGroupProperties?: BillingGroupProperties;

  /**
   * <p>The version of the billing group.</p>
   */
  version?: number;
}

export namespace DescribeBillingGroupResponse {
  export const filterSensitiveLog = (
    obj: DescribeBillingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBillingGroupResponse =>
    __isa(o, "DescribeBillingGroupResponse");
}

/**
 * <p>The input for the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateRequest {
  __type?: "DescribeCACertificateRequest";
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCACertificateRequest {
  export const filterSensitiveLog = (
    obj: DescribeCACertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCACertificateRequest =>
    __isa(o, "DescribeCACertificateRequest");
}

/**
 * <p>The output from the DescribeCACertificate operation.</p>
 */
export interface DescribeCACertificateResponse {
  __type?: "DescribeCACertificateResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeCACertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCACertificateResponse =>
    __isa(o, "DescribeCACertificateResponse");
}

/**
 * <p>The input for the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateRequest {
  __type?: "DescribeCertificateRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;
}

export namespace DescribeCertificateRequest {
  export const filterSensitiveLog = (obj: DescribeCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateRequest =>
    __isa(o, "DescribeCertificateRequest");
}

/**
 * <p>The output of the DescribeCertificate operation.</p>
 */
export interface DescribeCertificateResponse {
  __type?: "DescribeCertificateResponse";
  /**
   * <p>The description of the certificate.</p>
   */
  certificateDescription?: CertificateDescription;
}

export namespace DescribeCertificateResponse {
  export const filterSensitiveLog = (
    obj: DescribeCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificateResponse =>
    __isa(o, "DescribeCertificateResponse");
}

export interface DescribeDefaultAuthorizerRequest {
  __type?: "DescribeDefaultAuthorizerRequest";
}

export namespace DescribeDefaultAuthorizerRequest {
  export const filterSensitiveLog = (
    obj: DescribeDefaultAuthorizerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDefaultAuthorizerRequest =>
    __isa(o, "DescribeDefaultAuthorizerRequest");
}

export interface DescribeDefaultAuthorizerResponse {
  __type?: "DescribeDefaultAuthorizerResponse";
  /**
   * <p>The default authorizer's description.</p>
   */
  authorizerDescription?: AuthorizerDescription;
}

export namespace DescribeDefaultAuthorizerResponse {
  export const filterSensitiveLog = (
    obj: DescribeDefaultAuthorizerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDefaultAuthorizerResponse =>
    __isa(o, "DescribeDefaultAuthorizerResponse");
}

export interface DescribeDomainConfigurationRequest {
  __type?: "DescribeDomainConfigurationRequest";
  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName: string | undefined;
}

export namespace DescribeDomainConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DescribeDomainConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainConfigurationRequest =>
    __isa(o, "DescribeDomainConfigurationRequest");
}

export interface DescribeDomainConfigurationResponse {
  __type?: "DescribeDomainConfigurationResponse";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>A Boolean value that specifies the current state of the domain configuration.</p>
   */
  domainConfigurationStatus?: DomainConfigurationStatus | string;

  /**
   * <p>The name of the domain.</p>
   */
  domainName?: string;

  /**
   * <p>The type of the domain.</p>
   */
  domainType?: DomainType | string;

  /**
   * <p>A list containing summary information about the server certificate included in the domain configuration.</p>
   */
  serverCertificates?: ServerCertificateSummary[];

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DescribeDomainConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DescribeDomainConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainConfigurationResponse =>
    __isa(o, "DescribeDomainConfigurationResponse");
}

/**
 * <p>The input for the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointRequest {
  __type?: "DescribeEndpointRequest";
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
   *                   <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API
   *                endpoint.</p>
   *             </li>
   *          </ul>
   */
  endpointType?: string;
}

export namespace DescribeEndpointRequest {
  export const filterSensitiveLog = (obj: DescribeEndpointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointRequest =>
    __isa(o, "DescribeEndpointRequest");
}

/**
 * <p>The output from the DescribeEndpoint operation.</p>
 */
export interface DescribeEndpointResponse {
  __type?: "DescribeEndpointResponse";
  /**
   * <p>The endpoint. The format of the endpoint is as follows:
   *             <i>identifier</i>.iot.<i>region</i>.amazonaws.com.</p>
   */
  endpointAddress?: string;
}

export namespace DescribeEndpointResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointResponse =>
    __isa(o, "DescribeEndpointResponse");
}

export interface DescribeEventConfigurationsRequest {
  __type?: "DescribeEventConfigurationsRequest";
}

export namespace DescribeEventConfigurationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeEventConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventConfigurationsRequest =>
    __isa(o, "DescribeEventConfigurationsRequest");
}

export interface DescribeEventConfigurationsResponse {
  __type?: "DescribeEventConfigurationsResponse";
  /**
   * <p>The creation date of the event configuration.</p>
   */
  creationDate?: Date;

  /**
   * <p>The event configurations.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };

  /**
   * <p>The date the event configurations were last modified.</p>
   */
  lastModifiedDate?: Date;
}

export namespace DescribeEventConfigurationsResponse {
  export const filterSensitiveLog = (
    obj: DescribeEventConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventConfigurationsResponse =>
    __isa(o, "DescribeEventConfigurationsResponse");
}

export interface DescribeIndexRequest {
  __type?: "DescribeIndexRequest";
  /**
   * <p>The index name.</p>
   */
  indexName: string | undefined;
}

export namespace DescribeIndexRequest {
  export const filterSensitiveLog = (obj: DescribeIndexRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIndexRequest =>
    __isa(o, "DescribeIndexRequest");
}

export interface DescribeIndexResponse {
  __type?: "DescribeIndexResponse";
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
   *          </ul>
   */
  schema?: string;
}

export namespace DescribeIndexResponse {
  export const filterSensitiveLog = (obj: DescribeIndexResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIndexResponse =>
    __isa(o, "DescribeIndexResponse");
}

export interface DescribeJobExecutionRequest {
  __type?: "DescribeJobExecutionRequest";
  /**
   * <p>A string (consisting of the digits "0" through "9" which is used to specify a particular job execution
   *             on a particular device.</p>
   */
  executionNumber?: number;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing on which the job execution is running.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeJobExecutionRequest {
  export const filterSensitiveLog = (
    obj: DescribeJobExecutionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobExecutionRequest =>
    __isa(o, "DescribeJobExecutionRequest");
}

export interface DescribeJobExecutionResponse {
  __type?: "DescribeJobExecutionResponse";
  /**
   * <p>Information about the job execution.</p>
   */
  execution?: JobExecution;
}

export namespace DescribeJobExecutionResponse {
  export const filterSensitiveLog = (
    obj: DescribeJobExecutionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobExecutionResponse =>
    __isa(o, "DescribeJobExecutionResponse");
}

export interface DescribeJobRequest {
  __type?: "DescribeJobRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace DescribeJobRequest {
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobRequest =>
    __isa(o, "DescribeJobRequest");
}

export interface DescribeJobResponse {
  __type?: "DescribeJobResponse";
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
  export const filterSensitiveLog = (obj: DescribeJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeJobResponse =>
    __isa(o, "DescribeJobResponse");
}

export interface DescribeMitigationActionRequest {
  __type?: "DescribeMitigationActionRequest";
  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName: string | undefined;
}

export namespace DescribeMitigationActionRequest {
  export const filterSensitiveLog = (
    obj: DescribeMitigationActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMitigationActionRequest =>
    __isa(o, "DescribeMitigationActionRequest");
}

export interface DescribeMitigationActionResponse {
  __type?: "DescribeMitigationActionResponse";
  /**
   * <p>The ARN that identifies this migration action.</p>
   */
  actionArn?: string;

  /**
   * <p>A unique identifier for this action.</p>
   */
  actionId?: string;

  /**
   * <p>The friendly name that uniquely identifies the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>Parameters that control how the mitigation action is applied, specific to the type of mitigation action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The type of mitigation action.</p>
   */
  actionType?: MitigationActionType | string;

  /**
   * <p>The date and time when the mitigation action was added to your AWS account.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date and time when the mitigation action was last changed.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the IAM role used to apply this action.</p>
   */
  roleArn?: string;
}

export namespace DescribeMitigationActionResponse {
  export const filterSensitiveLog = (
    obj: DescribeMitigationActionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMitigationActionResponse =>
    __isa(o, "DescribeMitigationActionResponse");
}

export interface DescribeProvisioningTemplateRequest {
  __type?: "DescribeProvisioningTemplateRequest";
  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace DescribeProvisioningTemplateRequest {
  export const filterSensitiveLog = (
    obj: DescribeProvisioningTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProvisioningTemplateRequest =>
    __isa(o, "DescribeProvisioningTemplateRequest");
}

export interface DescribeProvisioningTemplateResponse {
  __type?: "DescribeProvisioningTemplateResponse";
  /**
   * <p>The date when the fleet provisioning template was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The default fleet template version ID.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True if the fleet provisioning template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The date when the fleet provisioning template was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template.</p>
   */
  templateBody?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace DescribeProvisioningTemplateResponse {
  export const filterSensitiveLog = (
    obj: DescribeProvisioningTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeProvisioningTemplateResponse =>
    __isa(o, "DescribeProvisioningTemplateResponse");
}

export interface DescribeProvisioningTemplateVersionRequest {
  __type?: "DescribeProvisioningTemplateVersionRequest";
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
  export const filterSensitiveLog = (
    obj: DescribeProvisioningTemplateVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeProvisioningTemplateVersionRequest =>
    __isa(o, "DescribeProvisioningTemplateVersionRequest");
}

export interface DescribeProvisioningTemplateVersionResponse {
  __type?: "DescribeProvisioningTemplateVersionResponse";
  /**
   * <p>The date when the fleet provisioning template version was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The JSON formatted contents of the fleet provisioning template version.</p>
   */
  templateBody?: string;

  /**
   * <p>The fleet provisioning template version ID.</p>
   */
  versionId?: number;
}

export namespace DescribeProvisioningTemplateVersionResponse {
  export const filterSensitiveLog = (
    obj: DescribeProvisioningTemplateVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeProvisioningTemplateVersionResponse =>
    __isa(o, "DescribeProvisioningTemplateVersionResponse");
}

export interface DescribeRoleAliasRequest {
  __type?: "DescribeRoleAliasRequest";
  /**
   * <p>The role alias to describe.</p>
   */
  roleAlias: string | undefined;
}

export namespace DescribeRoleAliasRequest {
  export const filterSensitiveLog = (obj: DescribeRoleAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRoleAliasRequest =>
    __isa(o, "DescribeRoleAliasRequest");
}

export interface DescribeRoleAliasResponse {
  __type?: "DescribeRoleAliasResponse";
  /**
   * <p>The role alias description.</p>
   */
  roleAliasDescription?: RoleAliasDescription;
}

export namespace DescribeRoleAliasResponse {
  export const filterSensitiveLog = (obj: DescribeRoleAliasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRoleAliasResponse =>
    __isa(o, "DescribeRoleAliasResponse");
}

export interface DescribeScheduledAuditRequest {
  __type?: "DescribeScheduledAuditRequest";
  /**
   * <p>The name of the scheduled audit whose information you want to get.</p>
   */
  scheduledAuditName: string | undefined;
}

export namespace DescribeScheduledAuditRequest {
  export const filterSensitiveLog = (
    obj: DescribeScheduledAuditRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScheduledAuditRequest =>
    __isa(o, "DescribeScheduledAuditRequest");
}

export interface DescribeScheduledAuditResponse {
  __type?: "DescribeScheduledAuditResponse";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Will be "1"
   *             through "31" or "LAST". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. One of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. One of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;

  /**
   * <p>Which checks are performed during the scheduled audit. Checks must be
   *             enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list
   *             of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code>
   *             to select which checks are enabled.)</p>
   */
  targetCheckNames?: string[];
}

export namespace DescribeScheduledAuditResponse {
  export const filterSensitiveLog = (
    obj: DescribeScheduledAuditResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScheduledAuditResponse =>
    __isa(o, "DescribeScheduledAuditResponse");
}

export interface DescribeSecurityProfileRequest {
  __type?: "DescribeSecurityProfileRequest";
  /**
   * <p>The name of the security profile whose information you want to get.</p>
   */
  securityProfileName: string | undefined;
}

export namespace DescribeSecurityProfileRequest {
  export const filterSensitiveLog = (
    obj: DescribeSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSecurityProfileRequest =>
    __isa(o, "DescribeSecurityProfileRequest");
}

export interface DescribeSecurityProfileResponse {
  __type?: "DescribeSecurityProfileResponse";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

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
   * <p>The name of the security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The version of the security profile. A new version is generated whenever the
   *         security profile is updated.</p>
   */
  version?: number;
}

export namespace DescribeSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: DescribeSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSecurityProfileResponse =>
    __isa(o, "DescribeSecurityProfileResponse");
}

export interface DescribeStreamRequest {
  __type?: "DescribeStreamRequest";
  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace DescribeStreamRequest {
  export const filterSensitiveLog = (obj: DescribeStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStreamRequest =>
    __isa(o, "DescribeStreamRequest");
}

export interface DescribeStreamResponse {
  __type?: "DescribeStreamResponse";
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: StreamInfo;
}

export namespace DescribeStreamResponse {
  export const filterSensitiveLog = (obj: DescribeStreamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStreamResponse =>
    __isa(o, "DescribeStreamResponse");
}

export interface DescribeThingGroupRequest {
  __type?: "DescribeThingGroupRequest";
  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName: string | undefined;
}

export namespace DescribeThingGroupRequest {
  export const filterSensitiveLog = (obj: DescribeThingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingGroupRequest =>
    __isa(o, "DescribeThingGroupRequest");
}

export interface DescribeThingGroupResponse {
  __type?: "DescribeThingGroupResponse";
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

  /**
   * <p>The thing group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>Thing group metadata.</p>
   */
  thingGroupMetadata?: ThingGroupMetadata;

  /**
   * <p>The name of the thing group.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties?: ThingGroupProperties;

  /**
   * <p>The version of the thing group.</p>
   */
  version?: number;
}

export namespace DescribeThingGroupResponse {
  export const filterSensitiveLog = (obj: DescribeThingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingGroupResponse =>
    __isa(o, "DescribeThingGroupResponse");
}

export interface DescribeThingRegistrationTaskRequest {
  __type?: "DescribeThingRegistrationTaskRequest";
  /**
   * <p>The task ID.</p>
   */
  taskId: string | undefined;
}

export namespace DescribeThingRegistrationTaskRequest {
  export const filterSensitiveLog = (
    obj: DescribeThingRegistrationTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingRegistrationTaskRequest =>
    __isa(o, "DescribeThingRegistrationTaskRequest");
}

export interface DescribeThingRegistrationTaskResponse {
  __type?: "DescribeThingRegistrationTaskResponse";
  /**
   * <p>The task creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The number of things that failed to be provisioned.</p>
   */
  failureCount?: number;

  /**
   * <p>The S3 bucket that contains the input file.</p>
   */
  inputFileBucket?: string;

  /**
   * <p>The input file key.</p>
   */
  inputFileKey?: string;

  /**
   * <p>The date when the task was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The message.</p>
   */
  message?: string;

  /**
   * <p>The progress of the bulk provisioning task expressed as a percentage.</p>
   */
  percentageProgress?: number;

  /**
   * <p>The role ARN that grants access to the input file bucket.</p>
   */
  roleArn?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;

  /**
   * <p>The number of things successfully provisioned.</p>
   */
  successCount?: number;

  /**
   * <p>The task ID.</p>
   */
  taskId?: string;

  /**
   * <p>The task's template.</p>
   */
  templateBody?: string;
}

export namespace DescribeThingRegistrationTaskResponse {
  export const filterSensitiveLog = (
    obj: DescribeThingRegistrationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingRegistrationTaskResponse =>
    __isa(o, "DescribeThingRegistrationTaskResponse");
}

/**
 * <p>The input for the DescribeThing operation.</p>
 */
export interface DescribeThingRequest {
  __type?: "DescribeThingRequest";
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeThingRequest {
  export const filterSensitiveLog = (obj: DescribeThingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingRequest =>
    __isa(o, "DescribeThingRequest");
}

/**
 * <p>The output from the DescribeThing operation.</p>
 */
export interface DescribeThingResponse {
  __type?: "DescribeThingResponse";
  /**
   * <p>The thing attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The name of the billing group the thing belongs to.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The default client ID.</p>
   */
  defaultClientId?: string;

  /**
   * <p>The ARN of the thing to describe.</p>
   */
  thingArn?: string;

  /**
   * <p>The ID of the thing to describe.</p>
   */
  thingId?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The current version of the thing record in the registry.</p>
   * 		       <note>
   * 			         <p>To avoid unintentional changes to the information in the registry, you can pass
   * 				the version information in the <code>expectedVersion</code> parameter of the
   * 					<code>UpdateThing</code> and <code>DeleteThing</code> calls.</p>
   * 		       </note>
   */
  version?: number;
}

export namespace DescribeThingResponse {
  export const filterSensitiveLog = (obj: DescribeThingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingResponse =>
    __isa(o, "DescribeThingResponse");
}

/**
 * <p>The input for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeRequest {
  __type?: "DescribeThingTypeRequest";
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName: string | undefined;
}

export namespace DescribeThingTypeRequest {
  export const filterSensitiveLog = (obj: DescribeThingTypeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingTypeRequest =>
    __isa(o, "DescribeThingTypeRequest");
}

/**
 * <p>The output for the DescribeThingType operation.</p>
 */
export interface DescribeThingTypeResponse {
  __type?: "DescribeThingTypeResponse";
  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The thing type ID.</p>
   */
  thingTypeId?: string;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type
   * 			including: creation date and time, a value indicating whether the thing type is
   * 			deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The ThingTypeProperties contains information about the thing type including
   * 			description, and a list of searchable thing attribute names.</p>
   */
  thingTypeProperties?: ThingTypeProperties;
}

export namespace DescribeThingTypeResponse {
  export const filterSensitiveLog = (obj: DescribeThingTypeResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeThingTypeResponse =>
    __isa(o, "DescribeThingTypeResponse");
}

/**
 * <p>Describes the location of the updated firmware.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>Describes the location in S3 of the updated firmware.</p>
   */
  s3Destination?: S3Destination;
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj
  });
  export const isa = (o: any): o is Destination => __isa(o, "Destination");
}

export interface DetachPolicyRequest {
  __type?: "DetachPolicyRequest";
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
  export const filterSensitiveLog = (obj: DetachPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachPolicyRequest =>
    __isa(o, "DetachPolicyRequest");
}

/**
 * <p>The input for the DetachPrincipalPolicy operation.</p>
 */
export interface DetachPrincipalPolicyRequest {
  __type?: "DetachPrincipalPolicyRequest";
  /**
   * <p>The name of the policy to detach.</p>
   */
  policyName: string | undefined;

  /**
   * <p>The principal.</p>
   *          <p>If the principal is a certificate, specify the certificate ARN. If the principal is
   *          an Amazon Cognito identity, specify the identity ID.</p>
   */
  principal: string | undefined;
}

export namespace DetachPrincipalPolicyRequest {
  export const filterSensitiveLog = (
    obj: DetachPrincipalPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachPrincipalPolicyRequest =>
    __isa(o, "DetachPrincipalPolicyRequest");
}

export interface DetachSecurityProfileRequest {
  __type?: "DetachSecurityProfileRequest";
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
  export const filterSensitiveLog = (
    obj: DetachSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachSecurityProfileRequest =>
    __isa(o, "DetachSecurityProfileRequest");
}

export interface DetachSecurityProfileResponse {
  __type?: "DetachSecurityProfileResponse";
}

export namespace DetachSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: DetachSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachSecurityProfileResponse =>
    __isa(o, "DetachSecurityProfileResponse");
}

/**
 * <p>The input for the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalRequest {
  __type?: "DetachThingPrincipalRequest";
  /**
   * <p>If the principal is a certificate, this value must be ARN of the certificate. If
   * 			the principal is an Amazon Cognito identity, this value must be the ID of the Amazon
   * 			Cognito identity.</p>
   */
  principal: string | undefined;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DetachThingPrincipalRequest {
  export const filterSensitiveLog = (
    obj: DetachThingPrincipalRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachThingPrincipalRequest =>
    __isa(o, "DetachThingPrincipalRequest");
}

/**
 * <p>The output from the DetachThingPrincipal operation.</p>
 */
export interface DetachThingPrincipalResponse {
  __type?: "DetachThingPrincipalResponse";
}

export namespace DetachThingPrincipalResponse {
  export const filterSensitiveLog = (
    obj: DetachThingPrincipalResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachThingPrincipalResponse =>
    __isa(o, "DetachThingPrincipalResponse");
}

export enum DeviceCertificateUpdateAction {
  DEACTIVATE = "DEACTIVATE"
}

/**
 * <p>The input for the DisableTopicRuleRequest operation.</p>
 */
export interface DisableTopicRuleRequest {
  __type?: "DisableTopicRuleRequest";
  /**
   * <p>The name of the rule to disable.</p>
   */
  ruleName: string | undefined;
}

export namespace DisableTopicRuleRequest {
  export const filterSensitiveLog = (obj: DisableTopicRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableTopicRuleRequest =>
    __isa(o, "DisableTopicRuleRequest");
}

export enum DomainConfigurationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain.
 *          A domain configuration can be associated with an AWS-managed domain
 *          (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p>
 *          <ul>
 *             <li>
 *                <p>Data</p>
 *             </li>
 *             <li>
 *                <p>Jobs</p>
 *             </li>
 *             <li>
 *                <p>CredentialProvider</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The domain configuration feature is in public preview and is subject to change.</p>
 *          </note>
 */
export interface DomainConfigurationSummary {
  __type?: "DomainConfigurationSummary";
  /**
   * <p>The ARN of the domain configuration.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration. This value must be unique to a region.</p>
   */
  domainConfigurationName?: string;

  /**
   * <p>The type of service delivered by the endpoint.</p>
   */
  serviceType?: ServiceType | string;
}

export namespace DomainConfigurationSummary {
  export const filterSensitiveLog = (obj: DomainConfigurationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainConfigurationSummary =>
    __isa(o, "DomainConfigurationSummary");
}

export enum DomainType {
  AWS_MANAGED = "AWS_MANAGED",
  CUSTOMER_MANAGED = "CUSTOMER_MANAGED",
  ENDPOINT = "ENDPOINT"
}

export enum DynamicGroupStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING"
}

/**
 * <p>Describes an action to write to a DynamoDB table.</p>
 *          <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code>
 *          values must match the values used when you created the table.</p>
 *          <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a
 *          substitution template syntax. These templates provide data at runtime. The syntax is as
 *          follows: ${<i>sql-expression</i>}.</p>
 *          <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON
 *          properties, comparisons, calculations, and functions. For example, the following field uses
 *          the third level of the topic:</p>
 *          <p>
 *             <code>"hashKeyValue": "${topic(3)}"</code>
 *          </p>
 *          <p>The following field uses the timestamp:</p>
 *          <p>
 *             <code>"rangeKeyValue": "${timestamp()}"</code>
 *          </p>
 */
export interface DynamoDBAction {
  __type?: "DynamoDBAction";
  /**
   * <p>The hash key name.</p>
   */
  hashKeyField: string | undefined;

  /**
   * <p>The hash key type. Valid values are "STRING" or "NUMBER"</p>
   */
  hashKeyType?: DynamoKeyType | string;

  /**
   * <p>The hash key value.</p>
   */
  hashKeyValue: string | undefined;

  /**
   * <p>The type of operation to be performed. This follows the substitution template, so it
   *          can be <code>${operation}</code>, but the substitution must result in one of the following:
   *             <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code>.</p>
   */
  operation?: string;

  /**
   * <p>The action payload. This name can be customized.</p>
   */
  payloadField?: string;

  /**
   * <p>The range key name.</p>
   */
  rangeKeyField?: string;

  /**
   * <p>The range key type. Valid values are "STRING" or "NUMBER"</p>
   */
  rangeKeyType?: DynamoKeyType | string;

  /**
   * <p>The range key value.</p>
   */
  rangeKeyValue?: string;

  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the DynamoDB table.</p>
   */
  tableName: string | undefined;
}

export namespace DynamoDBAction {
  export const filterSensitiveLog = (obj: DynamoDBAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is DynamoDBAction =>
    __isa(o, "DynamoDBAction");
}

/**
 * <p>Describes an action to write to a DynamoDB table.</p>
 *          <p>This DynamoDB action writes each attribute in the message payload into it's own
 *          column in the DynamoDB table.</p>
 */
export interface DynamoDBv2Action {
  __type?: "DynamoDBv2Action";
  /**
   * <p>Specifies the DynamoDB table to which the message data will be written. For
   *          example:</p>
   *          <p>
   *             <code>{ "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName":
   *             "my-table" } } }</code>
   *          </p>
   *          <p>Each attribute in the message payload will be written to a separate column in the
   *          DynamoDB database.</p>
   */
  putItem: PutItemInput | undefined;

  /**
   * <p>The ARN of the IAM role that grants access to the DynamoDB table.</p>
   */
  roleArn: string | undefined;
}

export namespace DynamoDBv2Action {
  export const filterSensitiveLog = (obj: DynamoDBv2Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is DynamoDBv2Action =>
    __isa(o, "DynamoDBv2Action");
}

export enum DynamoKeyType {
  NUMBER = "NUMBER",
  STRING = "STRING"
}

/**
 * <p>The policy that has the effect on the authorization results.</p>
 */
export interface EffectivePolicy {
  __type?: "EffectivePolicy";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The IAM policy document.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace EffectivePolicy {
  export const filterSensitiveLog = (obj: EffectivePolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is EffectivePolicy =>
    __isa(o, "EffectivePolicy");
}

/**
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service
 *          domain.</p>
 */
export interface ElasticsearchAction {
  __type?: "ElasticsearchAction";
  /**
   * <p>The endpoint of your Elasticsearch domain.</p>
   */
  endpoint: string | undefined;

  /**
   * <p>The unique identifier for the document you are storing.</p>
   */
  id: string | undefined;

  /**
   * <p>The Elasticsearch index where you want to store your data.</p>
   */
  index: string | undefined;

  /**
   * <p>The IAM role ARN that has access to Elasticsearch.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The type of document you are storing.</p>
   */
  type: string | undefined;
}

export namespace ElasticsearchAction {
  export const filterSensitiveLog = (obj: ElasticsearchAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchAction =>
    __isa(o, "ElasticsearchAction");
}

/**
 * <p>Parameters used when defining a mitigation action that enable AWS IoT logging.</p>
 */
export interface EnableIoTLoggingParams {
  __type?: "EnableIoTLoggingParams";
  /**
   * <p>Specifies the types of information to be logged.</p>
   */
  logLevel: LogLevel | string | undefined;

  /**
   * <p>The ARN of the IAM role used for logging.</p>
   */
  roleArnForLogging: string | undefined;
}

export namespace EnableIoTLoggingParams {
  export const filterSensitiveLog = (obj: EnableIoTLoggingParams): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableIoTLoggingParams =>
    __isa(o, "EnableIoTLoggingParams");
}

/**
 * <p>The input for the EnableTopicRuleRequest operation.</p>
 */
export interface EnableTopicRuleRequest {
  __type?: "EnableTopicRuleRequest";
  /**
   * <p>The name of the topic rule to enable.</p>
   */
  ruleName: string | undefined;
}

export namespace EnableTopicRuleRequest {
  export const filterSensitiveLog = (obj: EnableTopicRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableTopicRuleRequest =>
    __isa(o, "EnableTopicRuleRequest");
}

/**
 * <p>Error information.</p>
 */
export interface ErrorInfo {
  __type?: "ErrorInfo";
  /**
   * <p>The error code.</p>
   */
  code?: string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

export namespace ErrorInfo {
  export const filterSensitiveLog = (obj: ErrorInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorInfo => __isa(o, "ErrorInfo");
}

export enum EventType {
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CERTIFICATE = "CERTIFICATE",
  JOB = "JOB",
  JOB_EXECUTION = "JOB_EXECUTION",
  POLICY = "POLICY",
  THING = "THING",
  THING_GROUP = "THING_GROUP",
  THING_GROUP_HIERARCHY = "THING_GROUP_HIERARCHY",
  THING_GROUP_MEMBERSHIP = "THING_GROUP_MEMBERSHIP",
  THING_TYPE = "THING_TYPE",
  THING_TYPE_ASSOCIATION = "THING_TYPE_ASSOCIATION"
}

/**
 * <p>Information that explicitly denies authorization.</p>
 */
export interface ExplicitDeny {
  __type?: "ExplicitDeny";
  /**
   * <p>The policies that denied the authorization.</p>
   */
  policies?: Policy[];
}

export namespace ExplicitDeny {
  export const filterSensitiveLog = (obj: ExplicitDeny): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExplicitDeny => __isa(o, "ExplicitDeny");
}

/**
 * <p>Allows you to create an exponential rate of rollout for a job.</p>
 */
export interface ExponentialRolloutRate {
  __type?: "ExponentialRolloutRate";
  /**
   * <p>The minimum number of things that will be notified of a pending job, per minute at the start of job rollout.
   *             This parameter allows you to define the initial rate of rollout.</p>
   */
  baseRatePerMinute: number | undefined;

  /**
   * <p>The exponential factor to increase the rate of rollout for a job.</p>
   */
  incrementFactor: number | undefined;

  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p>
   *         <p>AWS IoT supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  rateIncreaseCriteria: RateIncreaseCriteria | undefined;
}

export namespace ExponentialRolloutRate {
  export const filterSensitiveLog = (obj: ExponentialRolloutRate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExponentialRolloutRate =>
    __isa(o, "ExponentialRolloutRate");
}

/**
 * <p>Describes the name and data type at a field.</p>
 */
export interface Field {
  __type?: "Field";
  /**
   * <p>The name of the field.</p>
   */
  name?: string;

  /**
   * <p>The datatype of the field.</p>
   */
  type?: FieldType | string;
}

export namespace Field {
  export const filterSensitiveLog = (obj: Field): any => ({
    ...obj
  });
  export const isa = (o: any): o is Field => __isa(o, "Field");
}

export enum FieldType {
  BOOLEAN = "Boolean",
  NUMBER = "Number",
  STRING = "String"
}

/**
 * <p>The location of the OTA update.</p>
 */
export interface FileLocation {
  __type?: "FileLocation";
  /**
   * <p>The location of the updated firmware in S3.</p>
   */
  s3Location?: S3Location;

  /**
   * <p>The stream that contains the OTA update.</p>
   */
  stream?: _Stream;
}

export namespace FileLocation {
  export const filterSensitiveLog = (obj: FileLocation): any => ({
    ...obj
  });
  export const isa = (o: any): o is FileLocation => __isa(o, "FileLocation");
}

/**
 * <p>Describes an action that writes data to an Amazon Kinesis Firehose stream.</p>
 */
export interface FirehoseAction {
  __type?: "FirehoseAction";
  /**
   * <p>The delivery stream name.</p>
   */
  deliveryStreamName: string | undefined;

  /**
   * <p>The IAM role that grants access to the Amazon Kinesis Firehose stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A character separator that will be used to separate records written to the Firehose
   *          stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ','
   *          (comma).</p>
   */
  separator?: string;
}

export namespace FirehoseAction {
  export const filterSensitiveLog = (obj: FirehoseAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is FirehoseAction =>
    __isa(o, "FirehoseAction");
}

export interface GetCardinalityRequest {
  __type?: "GetCardinalityRequest";
  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The search query.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetCardinalityRequest {
  export const filterSensitiveLog = (obj: GetCardinalityRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCardinalityRequest =>
    __isa(o, "GetCardinalityRequest");
}

export interface GetCardinalityResponse {
  __type?: "GetCardinalityResponse";
  /**
   * <p>The approximate count of unique values that match the query.</p>
   */
  cardinality?: number;
}

export namespace GetCardinalityResponse {
  export const filterSensitiveLog = (obj: GetCardinalityResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCardinalityResponse =>
    __isa(o, "GetCardinalityResponse");
}

export interface GetEffectivePoliciesRequest {
  __type?: "GetEffectivePoliciesRequest";
  /**
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The principal.</p>
   */
  principal?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;
}

export namespace GetEffectivePoliciesRequest {
  export const filterSensitiveLog = (
    obj: GetEffectivePoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEffectivePoliciesRequest =>
    __isa(o, "GetEffectivePoliciesRequest");
}

export interface GetEffectivePoliciesResponse {
  __type?: "GetEffectivePoliciesResponse";
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: EffectivePolicy[];
}

export namespace GetEffectivePoliciesResponse {
  export const filterSensitiveLog = (
    obj: GetEffectivePoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEffectivePoliciesResponse =>
    __isa(o, "GetEffectivePoliciesResponse");
}

export interface GetIndexingConfigurationRequest {
  __type?: "GetIndexingConfigurationRequest";
}

export namespace GetIndexingConfigurationRequest {
  export const filterSensitiveLog = (
    obj: GetIndexingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetIndexingConfigurationRequest =>
    __isa(o, "GetIndexingConfigurationRequest");
}

export interface GetIndexingConfigurationResponse {
  __type?: "GetIndexingConfigurationResponse";
  /**
   * <p>The index configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}

export namespace GetIndexingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: GetIndexingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetIndexingConfigurationResponse =>
    __isa(o, "GetIndexingConfigurationResponse");
}

export interface GetJobDocumentRequest {
  __type?: "GetJobDocumentRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;
}

export namespace GetJobDocumentRequest {
  export const filterSensitiveLog = (obj: GetJobDocumentRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobDocumentRequest =>
    __isa(o, "GetJobDocumentRequest");
}

export interface GetJobDocumentResponse {
  __type?: "GetJobDocumentResponse";
  /**
   * <p>The job document content.</p>
   */
  document?: string;
}

export namespace GetJobDocumentResponse {
  export const filterSensitiveLog = (obj: GetJobDocumentResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobDocumentResponse =>
    __isa(o, "GetJobDocumentResponse");
}

/**
 * <p>The input for the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsRequest {
  __type?: "GetLoggingOptionsRequest";
}

export namespace GetLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: GetLoggingOptionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoggingOptionsRequest =>
    __isa(o, "GetLoggingOptionsRequest");
}

/**
 * <p>The output from the GetLoggingOptions operation.</p>
 */
export interface GetLoggingOptionsResponse {
  __type?: "GetLoggingOptionsResponse";
  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn?: string;
}

export namespace GetLoggingOptionsResponse {
  export const filterSensitiveLog = (obj: GetLoggingOptionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetLoggingOptionsResponse =>
    __isa(o, "GetLoggingOptionsResponse");
}

export interface GetOTAUpdateRequest {
  __type?: "GetOTAUpdateRequest";
  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId: string | undefined;
}

export namespace GetOTAUpdateRequest {
  export const filterSensitiveLog = (obj: GetOTAUpdateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOTAUpdateRequest =>
    __isa(o, "GetOTAUpdateRequest");
}

export interface GetOTAUpdateResponse {
  __type?: "GetOTAUpdateResponse";
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: OTAUpdateInfo;
}

export namespace GetOTAUpdateResponse {
  export const filterSensitiveLog = (obj: GetOTAUpdateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetOTAUpdateResponse =>
    __isa(o, "GetOTAUpdateResponse");
}

export interface GetPercentilesRequest {
  __type?: "GetPercentilesRequest";
  /**
   * <p>The field to aggregate.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search.</p>
   */
  indexName?: string;

  /**
   * <p>The percentile groups returned.</p>
   */
  percents?: number[];

  /**
   * <p>The query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace GetPercentilesRequest {
  export const filterSensitiveLog = (obj: GetPercentilesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPercentilesRequest =>
    __isa(o, "GetPercentilesRequest");
}

export interface GetPercentilesResponse {
  __type?: "GetPercentilesResponse";
  /**
   * <p>The percentile values of the aggregated fields.</p>
   */
  percentiles?: PercentPair[];
}

export namespace GetPercentilesResponse {
  export const filterSensitiveLog = (obj: GetPercentilesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPercentilesResponse =>
    __isa(o, "GetPercentilesResponse");
}

/**
 * <p>The input for the GetPolicy operation.</p>
 */
export interface GetPolicyRequest {
  __type?: "GetPolicyRequest";
  /**
   * <p>The name of the policy.</p>
   */
  policyName: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyRequest =>
    __isa(o, "GetPolicyRequest");
}

/**
 * <p>The output from the GetPolicy operation.</p>
 */
export interface GetPolicyResponse {
  __type?: "GetPolicyResponse";
  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The default policy version ID.</p>
   */
  defaultVersionId?: string;

  /**
   * <p>The generation ID of the policy.</p>
   */
  generationId?: string;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyResponse =>
    __isa(o, "GetPolicyResponse");
}

/**
 * <p>The input for the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionRequest {
  __type?: "GetPolicyVersionRequest";
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
  export const filterSensitiveLog = (obj: GetPolicyVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyVersionRequest =>
    __isa(o, "GetPolicyVersionRequest");
}

/**
 * <p>The output from the GetPolicyVersion operation.</p>
 */
export interface GetPolicyVersionResponse {
  __type?: "GetPolicyVersionResponse";
  /**
   * <p>The date the policy was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The generation ID of the policy version.</p>
   */
  generationId?: string;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The date the policy was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The JSON document that describes the policy.</p>
   */
  policyDocument?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;

  /**
   * <p>The policy version ID.</p>
   */
  policyVersionId?: string;
}

export namespace GetPolicyVersionResponse {
  export const filterSensitiveLog = (obj: GetPolicyVersionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPolicyVersionResponse =>
    __isa(o, "GetPolicyVersionResponse");
}

/**
 * <p>The input to the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeRequest {
  __type?: "GetRegistrationCodeRequest";
}

export namespace GetRegistrationCodeRequest {
  export const filterSensitiveLog = (obj: GetRegistrationCodeRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegistrationCodeRequest =>
    __isa(o, "GetRegistrationCodeRequest");
}

/**
 * <p>The output from the GetRegistrationCode operation.</p>
 */
export interface GetRegistrationCodeResponse {
  __type?: "GetRegistrationCodeResponse";
  /**
   * <p>The CA certificate registration code.</p>
   */
  registrationCode?: string;
}

export namespace GetRegistrationCodeResponse {
  export const filterSensitiveLog = (
    obj: GetRegistrationCodeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetRegistrationCodeResponse =>
    __isa(o, "GetRegistrationCodeResponse");
}

export interface GetStatisticsRequest {
  __type?: "GetStatisticsRequest";
  /**
   * <p>The aggregation field name.</p>
   */
  aggregationField?: string;

  /**
   * <p>The name of the index to search. The default value is <code>AWS_Things</code>.</p>
   */
  indexName?: string;

  /**
   * <p>The query used to search. You can specify "*" for the query string to get the count of all
   *       indexed things in your AWS account.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The version of the query used to search.</p>
   */
  queryVersion?: string;
}

export namespace GetStatisticsRequest {
  export const filterSensitiveLog = (obj: GetStatisticsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStatisticsRequest =>
    __isa(o, "GetStatisticsRequest");
}

export interface GetStatisticsResponse {
  __type?: "GetStatisticsResponse";
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation
   *       field.</p>
   */
  statistics?: Statistics;
}

export namespace GetStatisticsResponse {
  export const filterSensitiveLog = (obj: GetStatisticsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStatisticsResponse =>
    __isa(o, "GetStatisticsResponse");
}

export interface GetTopicRuleDestinationRequest {
  __type?: "GetTopicRuleDestinationRequest";
  /**
   * <p>The ARN of the topic rule destination.</p>
   */
  arn: string | undefined;
}

export namespace GetTopicRuleDestinationRequest {
  export const filterSensitiveLog = (
    obj: GetTopicRuleDestinationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTopicRuleDestinationRequest =>
    __isa(o, "GetTopicRuleDestinationRequest");
}

export interface GetTopicRuleDestinationResponse {
  __type?: "GetTopicRuleDestinationResponse";
  /**
   * <p>The topic rule destination.</p>
   */
  topicRuleDestination?: TopicRuleDestination;
}

export namespace GetTopicRuleDestinationResponse {
  export const filterSensitiveLog = (
    obj: GetTopicRuleDestinationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTopicRuleDestinationResponse =>
    __isa(o, "GetTopicRuleDestinationResponse");
}

/**
 * <p>The input for the GetTopicRule operation.</p>
 */
export interface GetTopicRuleRequest {
  __type?: "GetTopicRuleRequest";
  /**
   * <p>The name of the rule.</p>
   */
  ruleName: string | undefined;
}

export namespace GetTopicRuleRequest {
  export const filterSensitiveLog = (obj: GetTopicRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTopicRuleRequest =>
    __isa(o, "GetTopicRuleRequest");
}

/**
 * <p>The output from the GetTopicRule operation.</p>
 */
export interface GetTopicRuleResponse {
  __type?: "GetTopicRuleResponse";
  /**
   * <p>The rule.</p>
   */
  rule?: TopicRule;

  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;
}

export namespace GetTopicRuleResponse {
  export const filterSensitiveLog = (obj: GetTopicRuleResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTopicRuleResponse =>
    __isa(o, "GetTopicRuleResponse");
}

export interface GetV2LoggingOptionsRequest {
  __type?: "GetV2LoggingOptionsRequest";
}

export namespace GetV2LoggingOptionsRequest {
  export const filterSensitiveLog = (obj: GetV2LoggingOptionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetV2LoggingOptionsRequest =>
    __isa(o, "GetV2LoggingOptionsRequest");
}

export interface GetV2LoggingOptionsResponse {
  __type?: "GetV2LoggingOptionsResponse";
  /**
   * <p>The default log level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>Disables all logs.</p>
   */
  disableAllLogs?: boolean;

  /**
   * <p>The IAM role ARN AWS IoT uses to write to your CloudWatch logs.</p>
   */
  roleArn?: string;
}

export namespace GetV2LoggingOptionsResponse {
  export const filterSensitiveLog = (
    obj: GetV2LoggingOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetV2LoggingOptionsResponse =>
    __isa(o, "GetV2LoggingOptionsResponse");
}

/**
 * <p>The name and ARN of a group.</p>
 */
export interface GroupNameAndArn {
  __type?: "GroupNameAndArn";
  /**
   * <p>The group ARN.</p>
   */
  groupArn?: string;

  /**
   * <p>The group name.</p>
   */
  groupName?: string;
}

export namespace GroupNameAndArn {
  export const filterSensitiveLog = (obj: GroupNameAndArn): any => ({
    ...obj
  });
  export const isa = (o: any): o is GroupNameAndArn =>
    __isa(o, "GroupNameAndArn");
}

/**
 * <p>Send data to an HTTPS endpoint.</p>
 */
export interface HttpAction {
  __type?: "HttpAction";
  /**
   * <p>The authentication method to use when sending data to an HTTPS endpoint.</p>
   */
  auth?: HttpAuthorization;

  /**
   * <p>The URL to which AWS IoT sends a confirmation message. The value of the confirmation URL
   *          must be a prefix of the endpoint URL. If you do not specify a confirmation URL AWS IoT uses
   *          the endpoint URL as the confirmation URL. If you use substitution templates in the
   *          confirmationUrl, you must create and enable topic rule destinations that match each
   *          possible value of the substituion template before traffic is allowed to your endpoint
   *          URL.</p>
   */
  confirmationUrl?: string;

  /**
   * <p>The HTTP headers to send with the message data.</p>
   */
  headers?: HttpActionHeader[];

  /**
   * <p>The endpoint URL. If substitution templates are used in the URL, you must also specify a
   *             <code>confirmationUrl</code>. If this is a new destination, a new
   *             <code>TopicRuleDestination</code> is created if possible.</p>
   */
  url: string | undefined;
}

export namespace HttpAction {
  export const filterSensitiveLog = (obj: HttpAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpAction => __isa(o, "HttpAction");
}

/**
 * <p>The HTTP action header.</p>
 */
export interface HttpActionHeader {
  __type?: "HttpActionHeader";
  /**
   * <p>The HTTP header key.</p>
   */
  key: string | undefined;

  /**
   * <p>The HTTP header value. Substitution templates are supported.</p>
   */
  value: string | undefined;
}

export namespace HttpActionHeader {
  export const filterSensitiveLog = (obj: HttpActionHeader): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpActionHeader =>
    __isa(o, "HttpActionHeader");
}

/**
 * <p>The authorization method used to send messages.</p>
 */
export interface HttpAuthorization {
  __type?: "HttpAuthorization";
  /**
   * <p>Use Sig V4 authorization. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
   *             Version 4 Signing Process</a>.</p>
   */
  sigv4?: SigV4Authorization;
}

export namespace HttpAuthorization {
  export const filterSensitiveLog = (obj: HttpAuthorization): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpAuthorization =>
    __isa(o, "HttpAuthorization");
}

/**
 * <p>Specifies the HTTP context to use for the test authorizer request.</p>
 */
export interface HttpContext {
  __type?: "HttpContext";
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
    ...obj
  });
  export const isa = (o: any): o is HttpContext => __isa(o, "HttpContext");
}

/**
 * <p>HTTP URL destination configuration used by the topic rule's HTTP action.</p>
 */
export interface HttpUrlDestinationConfiguration {
  __type?: "HttpUrlDestinationConfiguration";
  /**
   * <p>The URL AWS IoT uses to confirm ownership of or access to the topic rule destination
   *          URL.</p>
   */
  confirmationUrl: string | undefined;
}

export namespace HttpUrlDestinationConfiguration {
  export const filterSensitiveLog = (
    obj: HttpUrlDestinationConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpUrlDestinationConfiguration =>
    __isa(o, "HttpUrlDestinationConfiguration");
}

/**
 * <p>HTTP URL destination properties.</p>
 */
export interface HttpUrlDestinationProperties {
  __type?: "HttpUrlDestinationProperties";
  /**
   * <p>The URL used to confirm the HTTP topic rule destination URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationProperties {
  export const filterSensitiveLog = (
    obj: HttpUrlDestinationProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpUrlDestinationProperties =>
    __isa(o, "HttpUrlDestinationProperties");
}

/**
 * <p>Information about an HTTP URL destination.</p>
 */
export interface HttpUrlDestinationSummary {
  __type?: "HttpUrlDestinationSummary";
  /**
   * <p>The URL used to confirm ownership of or access to the HTTP topic rule destination
   *          URL.</p>
   */
  confirmationUrl?: string;
}

export namespace HttpUrlDestinationSummary {
  export const filterSensitiveLog = (obj: HttpUrlDestinationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is HttpUrlDestinationSummary =>
    __isa(o, "HttpUrlDestinationSummary");
}

/**
 * <p>Information that implicitly denies authorization. When policy doesn't explicitly deny
 *          or allow an action on a resource it is considered an implicit deny.</p>
 */
export interface ImplicitDeny {
  __type?: "ImplicitDeny";
  /**
   * <p>Policies that don't contain a matching allow or deny statement for the specified
   *          action on the specified resource. </p>
   */
  policies?: Policy[];
}

export namespace ImplicitDeny {
  export const filterSensitiveLog = (obj: ImplicitDeny): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImplicitDeny => __isa(o, "ImplicitDeny");
}

/**
 * <p>The index is not ready.</p>
 */
export interface IndexNotReadyException
  extends __SmithyException,
    $MetadataBearer {
  name: "IndexNotReadyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace IndexNotReadyException {
  export const filterSensitiveLog = (obj: IndexNotReadyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexNotReadyException =>
    __isa(o, "IndexNotReadyException");
}

export enum IndexStatus {
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  REBUILDING = "REBUILDING"
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalException =>
    __isa(o, "InternalException");
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalFailureException =>
    __isa(o, "InternalFailureException");
}

/**
 * <p>The aggregation is invalid.</p>
 */
export interface InvalidAggregationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidAggregationException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAggregationException {
  export const filterSensitiveLog = (
    obj: InvalidAggregationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidAggregationException =>
    __isa(o, "InvalidAggregationException");
}

/**
 * <p>The query is invalid.</p>
 */
export interface InvalidQueryException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidQueryException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidQueryException {
  export const filterSensitiveLog = (obj: InvalidQueryException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidQueryException =>
    __isa(o, "InvalidQueryException");
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>The response is invalid.</p>
 */
export interface InvalidResponseException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResponseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidResponseException {
  export const filterSensitiveLog = (obj: InvalidResponseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResponseException =>
    __isa(o, "InvalidResponseException");
}

/**
 * <p>An attempt was made to change to an invalid state, for example by deleting a job or a
 *          job execution which is "IN_PROGRESS" without setting the <code>force</code>
 *          parameter.</p>
 */
export interface InvalidStateTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidStateTransitionException {
  export const filterSensitiveLog = (
    obj: InvalidStateTransitionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidStateTransitionException =>
    __isa(o, "InvalidStateTransitionException");
}

/**
 * <p>Sends message data to an AWS IoT Analytics channel.</p>
 */
export interface IotAnalyticsAction {
  __type?: "IotAnalyticsAction";
  /**
   * <p>(deprecated) The ARN of the IoT Analytics channel to which message data will be
   *          sent.</p>
   */
  channelArn?: string;

  /**
   * <p>The name of the IoT Analytics channel to which message data will be sent.</p>
   */
  channelName?: string;

  /**
   * <p>The ARN of the role which has a policy that grants IoT Analytics permission to send
   *          message data via IoT Analytics (iotanalytics:BatchPutMessage).</p>
   */
  roleArn?: string;
}

export namespace IotAnalyticsAction {
  export const filterSensitiveLog = (obj: IotAnalyticsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is IotAnalyticsAction =>
    __isa(o, "IotAnalyticsAction");
}

/**
 * <p>Sends an input to an AWS IoT Events detector.</p>
 */
export interface IotEventsAction {
  __type?: "IotEventsAction";
  /**
   * <p>The name of the AWS IoT Events input.</p>
   */
  inputName: string | undefined;

  /**
   * <p>[Optional] Use this to ensure that only one input (message) with a given messageId will
   *       be processed by an AWS IoT Events detector.</p>
   */
  messageId?: string;

  /**
   * <p>The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT
   *       Events detector. ("Action":"iotevents:BatchPutMessage").</p>
   */
  roleArn: string | undefined;
}

export namespace IotEventsAction {
  export const filterSensitiveLog = (obj: IotEventsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is IotEventsAction =>
    __isa(o, "IotEventsAction");
}

/**
 * <p>Describes an action to send data from an MQTT message that triggered the rule to AWS IoT
 *       SiteWise asset properties.</p>
 */
export interface IotSiteWiseAction {
  __type?: "IotSiteWiseAction";
  /**
   * <p>A list of asset property value entries.</p>
   */
  putAssetPropertyValueEntries: PutAssetPropertyValueEntry[] | undefined;

  /**
   * <p>The ARN of the role that grants AWS IoT permission to send an asset property value to AWS
   *       IoTSiteWise. (<code>"Action": "iotsitewise:BatchPutAssetPropertyValue"</code>). The trust
   *       policy can restrict access to specific asset hierarchy paths.</p>
   */
  roleArn: string | undefined;
}

export namespace IotSiteWiseAction {
  export const filterSensitiveLog = (obj: IotSiteWiseAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is IotSiteWiseAction =>
    __isa(o, "IotSiteWiseAction");
}

/**
 * <p>The <code>Job</code> object contains details about a job.</p>
 */
export interface Job {
  __type?: "Job";
  /**
   * <p>Configuration for criteria to abort the job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>If the job was updated, describes the reason for the update.</p>
   */
  comment?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job was completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Will be <code>true</code> if the job was canceled with the optional <code>force</code> parameter set to
   *           <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".</p>
   */
  jobArn?: string;

  /**
   * <p>Allows you to create a staged rollout of a job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>Details about the job process.</p>
   */
  jobProcessDetails?: JobProcessDetails;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>Configuration for pre-signed S3 URLs.</p>
   */
  presignedUrlConfig?: PresignedUrlConfig;

  /**
   * <p>If the job was updated, provides the reason code for the update.</p>
   */
  reasonCode?: string;

  /**
   * <p>The status of the job, one of <code>IN_PROGRESS</code>, <code>CANCELED</code>,
   *             <code>DELETION_IN_PROGRESS</code> or <code>COMPLETED</code>. </p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a device when the thing representing
   *             the device is added to a target group, even after the job was completed by all things originally in the
   *             group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A list of IoT things and thing groups to which the job should be sent.</p>
   */
  targets?: string[];

  /**
   * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
   *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
   *            execution status is not set to another terminal state before the timer expires, it will
   *            be automatically set to <code>TIMED_OUT</code>.</p>
   */
  timeoutConfig?: TimeoutConfig;
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj
  });
  export const isa = (o: any): o is Job => __isa(o, "Job");
}

/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface JobExecution {
  __type?: "JobExecution";
  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes).
   *            The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *        This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used in commands which return or update job execution information.
   *         </p>
   */
  executionNumber?: number;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code>
   *           parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT,
   *             CANCELED, or REJECTED).</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated
   *       by a device.</p>
   */
  versionNumber?: number;
}

export namespace JobExecution {
  export const filterSensitiveLog = (obj: JobExecution): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecution => __isa(o, "JobExecution");
}

export enum JobExecutionFailureType {
  ALL = "ALL",
  FAILED = "FAILED",
  REJECTED = "REJECTED",
  TIMED_OUT = "TIMED_OUT"
}

/**
 * <p>Allows you to create a staged rollout of a job.</p>
 */
export interface JobExecutionsRolloutConfig {
  __type?: "JobExecutionsRolloutConfig";
  /**
   * <p>The rate of increase for a job rollout.
   *             This parameter allows you to define an exponential rate for a job rollout.</p>
   */
  exponentialRate?: ExponentialRolloutRate;

  /**
   * <p>The maximum number of things that will be notified of a pending job, per minute.
   *         This parameter allows you to create a staged rollout.</p>
   */
  maximumPerMinute?: number;
}

export namespace JobExecutionsRolloutConfig {
  export const filterSensitiveLog = (obj: JobExecutionsRolloutConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecutionsRolloutConfig =>
    __isa(o, "JobExecutionsRolloutConfig");
}

export enum JobExecutionStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT"
}

/**
 * <p>Details of the job execution status.</p>
 */
export interface JobExecutionStatusDetails {
  __type?: "JobExecutionStatusDetails";
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: { [key: string]: string };
}

export namespace JobExecutionStatusDetails {
  export const filterSensitiveLog = (obj: JobExecutionStatusDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecutionStatusDetails =>
    __isa(o, "JobExecutionStatusDetails");
}

/**
 * <p>The job execution summary.</p>
 */
export interface JobExecutionSummary {
  __type?: "JobExecutionSummary";
  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on
   *             this particular device. It can be used later in commands which return or update job execution
   *             information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The status of the job execution.</p>
   */
  status?: JobExecutionStatus | string;
}

export namespace JobExecutionSummary {
  export const filterSensitiveLog = (obj: JobExecutionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecutionSummary =>
    __isa(o, "JobExecutionSummary");
}

/**
 * <p>Contains a summary of information about job executions for a specific job.</p>
 */
export interface JobExecutionSummaryForJob {
  __type?: "JobExecutionSummaryForJob";
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;
}

export namespace JobExecutionSummaryForJob {
  export const filterSensitiveLog = (obj: JobExecutionSummaryForJob): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecutionSummaryForJob =>
    __isa(o, "JobExecutionSummaryForJob");
}

/**
 * <p>The job execution summary for a thing.</p>
 */
export interface JobExecutionSummaryForThing {
  __type?: "JobExecutionSummaryForThing";
  /**
   * <p>Contains a subset of information about a job execution.</p>
   */
  jobExecutionSummary?: JobExecutionSummary;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;
}

export namespace JobExecutionSummaryForThing {
  export const filterSensitiveLog = (
    obj: JobExecutionSummaryForThing
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobExecutionSummaryForThing =>
    __isa(o, "JobExecutionSummaryForThing");
}

/**
 * <p>The job process details.</p>
 */
export interface JobProcessDetails {
  __type?: "JobProcessDetails";
  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or
   *             have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;

  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: string[];
}

export namespace JobProcessDetails {
  export const filterSensitiveLog = (obj: JobProcessDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobProcessDetails =>
    __isa(o, "JobProcessDetails");
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>The job summary.</p>
 */
export interface JobSummary {
  __type?: "JobSummary";
  /**
   * <p>The time, in seconds since the epoch, when the job completed.</p>
   */
  completedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The job ARN.</p>
   */
  jobArn?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The job summary status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group.</p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The ID of the thing group.</p>
   */
  thingGroupId?: string;
}

export namespace JobSummary {
  export const filterSensitiveLog = (obj: JobSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobSummary => __isa(o, "JobSummary");
}

/**
 * <p>Describes a key pair.</p>
 */
export interface KeyPair {
  __type?: "KeyPair";
  /**
   * <p>The private key.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The public key.</p>
   */
  PublicKey?: string;
}

export namespace KeyPair {
  export const filterSensitiveLog = (obj: KeyPair): any => ({
    ...obj,
    ...(obj.PrivateKey && { PrivateKey: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is KeyPair => __isa(o, "KeyPair");
}

/**
 * <p>Describes an action to write data to an Amazon Kinesis stream.</p>
 */
export interface KinesisAction {
  __type?: "KinesisAction";
  /**
   * <p>The partition key.</p>
   */
  partitionKey?: string;

  /**
   * <p>The ARN of the IAM role that grants access to the Amazon Kinesis stream.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Amazon Kinesis stream.</p>
   */
  streamName: string | undefined;
}

export namespace KinesisAction {
  export const filterSensitiveLog = (obj: KinesisAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisAction => __isa(o, "KinesisAction");
}

/**
 * <p>Describes an action to invoke a Lambda function.</p>
 */
export interface LambdaAction {
  __type?: "LambdaAction";
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  functionArn: string | undefined;
}

export namespace LambdaAction {
  export const filterSensitiveLog = (obj: LambdaAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaAction => __isa(o, "LambdaAction");
}

/**
 * <p>A limit has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListActiveViolationsRequest {
  __type?: "ListActiveViolationsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the Device Defender security profile for which violations are listed.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing whose active violations are listed.</p>
   */
  thingName?: string;
}

export namespace ListActiveViolationsRequest {
  export const filterSensitiveLog = (
    obj: ListActiveViolationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListActiveViolationsRequest =>
    __isa(o, "ListActiveViolationsRequest");
}

export interface ListActiveViolationsResponse {
  __type?: "ListActiveViolationsResponse";
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
  export const filterSensitiveLog = (
    obj: ListActiveViolationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListActiveViolationsResponse =>
    __isa(o, "ListActiveViolationsResponse");
}

export interface ListAttachedPoliciesRequest {
  __type?: "ListAttachedPoliciesRequest";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  pageSize?: number;

  /**
   * <p>When true, recursively list attached policies.</p>
   */
  recursive?: boolean;

  /**
   * <p>The group or principal for which the policies will be listed.</p>
   */
  target: string | undefined;
}

export namespace ListAttachedPoliciesRequest {
  export const filterSensitiveLog = (
    obj: ListAttachedPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedPoliciesRequest =>
    __isa(o, "ListAttachedPoliciesRequest");
}

export interface ListAttachedPoliciesResponse {
  __type?: "ListAttachedPoliciesResponse";
  /**
   * <p>The token to retrieve the next set of results, or ``null`` if there are no more
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];
}

export namespace ListAttachedPoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListAttachedPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAttachedPoliciesResponse =>
    __isa(o, "ListAttachedPoliciesResponse");
}

export interface ListAuditFindingsRequest {
  __type?: "ListAuditFindingsRequest";
  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>A filter to limit results to those found before the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>A filter to limit results to those found after the specified time. You must
   *             specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date;

  /**
   * <p>A filter to limit results to the audit with the specified ID. You must
   *             specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;
}

export namespace ListAuditFindingsRequest {
  export const filterSensitiveLog = (obj: ListAuditFindingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditFindingsRequest =>
    __isa(o, "ListAuditFindingsRequest");
}

export interface ListAuditFindingsResponse {
  __type?: "ListAuditFindingsResponse";
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
  export const filterSensitiveLog = (obj: ListAuditFindingsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditFindingsResponse =>
    __isa(o, "ListAuditFindingsResponse");
}

export interface ListAuditMitigationActionsExecutionsRequest {
  __type?: "ListAuditMitigationActionsExecutionsRequest";
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

  /**
   * <p>Specify this filter to limit results to actions for a specific audit mitigation actions task.</p>
   */
  taskId: string | undefined;
}

export namespace ListAuditMitigationActionsExecutionsRequest {
  export const filterSensitiveLog = (
    obj: ListAuditMitigationActionsExecutionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAuditMitigationActionsExecutionsRequest =>
    __isa(o, "ListAuditMitigationActionsExecutionsRequest");
}

export interface ListAuditMitigationActionsExecutionsResponse {
  __type?: "ListAuditMitigationActionsExecutionsResponse";
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
  export const filterSensitiveLog = (
    obj: ListAuditMitigationActionsExecutionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ListAuditMitigationActionsExecutionsResponse =>
    __isa(o, "ListAuditMitigationActionsExecutionsResponse");
}

export interface ListAuditMitigationActionsTasksRequest {
  __type?: "ListAuditMitigationActionsTasksRequest";
  /**
   * <p>Specify this filter to limit results to tasks that were applied to results for a specific audit.</p>
   */
  auditTaskId?: string;

  /**
   * <p>Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Specify this filter to limit results to tasks that were applied to a specific audit finding.</p>
   */
  findingId?: string;

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
   * <p>Specify this filter to limit results to tasks that are in a specific state.</p>
   */
  taskStatus?: AuditMitigationActionsTaskStatus | string;
}

export namespace ListAuditMitigationActionsTasksRequest {
  export const filterSensitiveLog = (
    obj: ListAuditMitigationActionsTasksRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditMitigationActionsTasksRequest =>
    __isa(o, "ListAuditMitigationActionsTasksRequest");
}

export interface ListAuditMitigationActionsTasksResponse {
  __type?: "ListAuditMitigationActionsTasksResponse";
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The collection of audit mitigation tasks that matched the filter criteria.</p>
   */
  tasks?: AuditMitigationActionsTaskMetadata[];
}

export namespace ListAuditMitigationActionsTasksResponse {
  export const filterSensitiveLog = (
    obj: ListAuditMitigationActionsTasksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditMitigationActionsTasksResponse =>
    __isa(o, "ListAuditMitigationActionsTasksResponse");
}

export interface ListAuditTasksRequest {
  __type?: "ListAuditTasksRequest";
  /**
   * <p>The end of the time period.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The beginning of the time period. Audit information is retained for a
   *               limited time (180 days). Requesting a start time prior to what is retained
   *               results in an "InvalidRequestException".</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A filter to limit the output to audits with the specified completion
   *             status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".</p>
   */
  taskStatus?: AuditTaskStatus | string;

  /**
   * <p>A filter to limit the output to the specified type of audit: can be one of
   *             "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".</p>
   */
  taskType?: AuditTaskType | string;
}

export namespace ListAuditTasksRequest {
  export const filterSensitiveLog = (obj: ListAuditTasksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditTasksRequest =>
    __isa(o, "ListAuditTasksRequest");
}

export interface ListAuditTasksResponse {
  __type?: "ListAuditTasksResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code>
   *             if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The audits that were performed during the specified time period.</p>
   */
  tasks?: AuditTaskMetadata[];
}

export namespace ListAuditTasksResponse {
  export const filterSensitiveLog = (obj: ListAuditTasksResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuditTasksResponse =>
    __isa(o, "ListAuditTasksResponse");
}

export interface ListAuthorizersRequest {
  __type?: "ListAuthorizersRequest";
  /**
   * <p>Return the list of authorizers in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>The status of the list authorizers request.</p>
   */
  status?: AuthorizerStatus | string;
}

export namespace ListAuthorizersRequest {
  export const filterSensitiveLog = (obj: ListAuthorizersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuthorizersRequest =>
    __isa(o, "ListAuthorizersRequest");
}

export interface ListAuthorizersResponse {
  __type?: "ListAuthorizersResponse";
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
  export const filterSensitiveLog = (obj: ListAuthorizersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAuthorizersResponse =>
    __isa(o, "ListAuthorizersResponse");
}

export interface ListBillingGroupsRequest {
  __type?: "ListBillingGroupsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>Limit the results to billing groups whose names have the given prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsRequest {
  export const filterSensitiveLog = (obj: ListBillingGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBillingGroupsRequest =>
    __isa(o, "ListBillingGroupsRequest");
}

export interface ListBillingGroupsResponse {
  __type?: "ListBillingGroupsResponse";
  /**
   * <p>The list of billing groups.</p>
   */
  billingGroups?: GroupNameAndArn[];

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListBillingGroupsResponse {
  export const filterSensitiveLog = (obj: ListBillingGroupsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListBillingGroupsResponse =>
    __isa(o, "ListBillingGroupsResponse");
}

/**
 * <p>Input for the ListCACertificates operation.</p>
 */
export interface ListCACertificatesRequest {
  __type?: "ListCACertificatesRequest";
  /**
   * <p>Determines the order of the results.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCACertificatesRequest {
  export const filterSensitiveLog = (obj: ListCACertificatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCACertificatesRequest =>
    __isa(o, "ListCACertificatesRequest");
}

/**
 * <p>The output from the ListCACertificates operation.</p>
 */
export interface ListCACertificatesResponse {
  __type?: "ListCACertificatesResponse";
  /**
   * <p>The CA certificates registered in your AWS account.</p>
   */
  certificates?: CACertificate[];

  /**
   * <p>The current position within the list of CA certificates.</p>
   */
  nextMarker?: string;
}

export namespace ListCACertificatesResponse {
  export const filterSensitiveLog = (obj: ListCACertificatesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCACertificatesResponse =>
    __isa(o, "ListCACertificatesResponse");
}

/**
 * <p>The input to the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCARequest {
  __type?: "ListCertificatesByCARequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The ID of the CA certificate. This operation will list all registered device
   *          certificate that were signed by this CA certificate.</p>
   */
  caCertificateId: string | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCertificatesByCARequest {
  export const filterSensitiveLog = (
    obj: ListCertificatesByCARequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesByCARequest =>
    __isa(o, "ListCertificatesByCARequest");
}

/**
 * <p>The output of the ListCertificatesByCA operation.</p>
 */
export interface ListCertificatesByCAResponse {
  __type?: "ListCertificatesByCAResponse";
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
  export const filterSensitiveLog = (
    obj: ListCertificatesByCAResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesByCAResponse =>
    __isa(o, "ListCertificatesByCAResponse");
}

/**
 * <p>The input for the ListCertificates operation.</p>
 */
export interface ListCertificatesRequest {
  __type?: "ListCertificatesRequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListCertificatesRequest {
  export const filterSensitiveLog = (obj: ListCertificatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesRequest =>
    __isa(o, "ListCertificatesRequest");
}

/**
 * <p>The output of the ListCertificates operation.</p>
 */
export interface ListCertificatesResponse {
  __type?: "ListCertificatesResponse";
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
  export const filterSensitiveLog = (obj: ListCertificatesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCertificatesResponse =>
    __isa(o, "ListCertificatesResponse");
}

export interface ListDomainConfigurationsRequest {
  __type?: "ListDomainConfigurationsRequest";
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
  export const filterSensitiveLog = (
    obj: ListDomainConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainConfigurationsRequest =>
    __isa(o, "ListDomainConfigurationsRequest");
}

export interface ListDomainConfigurationsResponse {
  __type?: "ListDomainConfigurationsResponse";
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
  export const filterSensitiveLog = (
    obj: ListDomainConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainConfigurationsResponse =>
    __isa(o, "ListDomainConfigurationsResponse");
}

export interface ListIndicesRequest {
  __type?: "ListIndicesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListIndicesRequest {
  export const filterSensitiveLog = (obj: ListIndicesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIndicesRequest =>
    __isa(o, "ListIndicesRequest");
}

export interface ListIndicesResponse {
  __type?: "ListIndicesResponse";
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
  export const filterSensitiveLog = (obj: ListIndicesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListIndicesResponse =>
    __isa(o, "ListIndicesResponse");
}

export interface ListJobExecutionsForJobRequest {
  __type?: "ListJobExecutionsForJobRequest";
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The status of the job.</p>
   */
  status?: JobExecutionStatus | string;
}

export namespace ListJobExecutionsForJobRequest {
  export const filterSensitiveLog = (
    obj: ListJobExecutionsForJobRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobExecutionsForJobRequest =>
    __isa(o, "ListJobExecutionsForJobRequest");
}

export interface ListJobExecutionsForJobResponse {
  __type?: "ListJobExecutionsForJobResponse";
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
  export const filterSensitiveLog = (
    obj: ListJobExecutionsForJobResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobExecutionsForJobResponse =>
    __isa(o, "ListJobExecutionsForJobResponse");
}

export interface ListJobExecutionsForThingRequest {
  __type?: "ListJobExecutionsForThingRequest";
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;
}

export namespace ListJobExecutionsForThingRequest {
  export const filterSensitiveLog = (
    obj: ListJobExecutionsForThingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobExecutionsForThingRequest =>
    __isa(o, "ListJobExecutionsForThingRequest");
}

export interface ListJobExecutionsForThingResponse {
  __type?: "ListJobExecutionsForThingResponse";
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
  export const filterSensitiveLog = (
    obj: ListJobExecutionsForThingResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobExecutionsForThingResponse =>
    __isa(o, "ListJobExecutionsForThingResponse");
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional filter that lets you search for jobs that have the specified status.</p>
   */
  status?: JobStatus | string;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things
   *             specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing
   *             when a change is detected in a target. For example, a job will run on a thing when the thing is added to a
   *             target group, even after the job was completed by all things originally in the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupId?: string;

  /**
   * <p>A filter that limits the returned jobs to those for the specified group.</p>
   */
  thingGroupName?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResponse {
  __type?: "ListJobsResponse";
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
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsResponse =>
    __isa(o, "ListJobsResponse");
}

export interface ListMitigationActionsRequest {
  __type?: "ListMitigationActionsRequest";
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
  export const filterSensitiveLog = (
    obj: ListMitigationActionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMitigationActionsRequest =>
    __isa(o, "ListMitigationActionsRequest");
}

export interface ListMitigationActionsResponse {
  __type?: "ListMitigationActionsResponse";
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
  export const filterSensitiveLog = (
    obj: ListMitigationActionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMitigationActionsResponse =>
    __isa(o, "ListMitigationActionsResponse");
}

export interface ListOTAUpdatesRequest {
  __type?: "ListOTAUpdatesRequest";
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
  export const filterSensitiveLog = (obj: ListOTAUpdatesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOTAUpdatesRequest =>
    __isa(o, "ListOTAUpdatesRequest");
}

export interface ListOTAUpdatesResponse {
  __type?: "ListOTAUpdatesResponse";
  /**
   * <p>A token to use to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of OTA update jobs.</p>
   */
  otaUpdates?: OTAUpdateSummary[];
}

export namespace ListOTAUpdatesResponse {
  export const filterSensitiveLog = (obj: ListOTAUpdatesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOTAUpdatesResponse =>
    __isa(o, "ListOTAUpdatesResponse");
}

/**
 * <p>The input to the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesRequest {
  __type?: "ListOutgoingCertificatesRequest";
  /**
   * <p>Specifies the order for results. If True, the results are returned in ascending
   *          order, based on the creation date.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListOutgoingCertificatesRequest {
  export const filterSensitiveLog = (
    obj: ListOutgoingCertificatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOutgoingCertificatesRequest =>
    __isa(o, "ListOutgoingCertificatesRequest");
}

/**
 * <p>The output from the ListOutgoingCertificates operation.</p>
 */
export interface ListOutgoingCertificatesResponse {
  __type?: "ListOutgoingCertificatesResponse";
  /**
   * <p>The marker for the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The certificates that are being transferred but not yet accepted.</p>
   */
  outgoingCertificates?: OutgoingCertificate[];
}

export namespace ListOutgoingCertificatesResponse {
  export const filterSensitiveLog = (
    obj: ListOutgoingCertificatesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListOutgoingCertificatesResponse =>
    __isa(o, "ListOutgoingCertificatesResponse");
}

/**
 * <p>The input for the ListPolicies operation.</p>
 */
export interface ListPoliciesRequest {
  __type?: "ListPoliciesRequest";
  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesRequest =>
    __isa(o, "ListPoliciesRequest");
}

/**
 * <p>The output from the ListPolicies operation.</p>
 */
export interface ListPoliciesResponse {
  __type?: "ListPoliciesResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The descriptions of the policies.</p>
   */
  policies?: Policy[];
}

export namespace ListPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPoliciesResponse =>
    __isa(o, "ListPoliciesResponse");
}

/**
 * <p>The input for the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsRequest {
  __type?: "ListPolicyPrincipalsRequest";
  /**
   * <p>Specifies the order for results. If true, the results are returned in ascending
   *          creation order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyPrincipalsRequest {
  export const filterSensitiveLog = (
    obj: ListPolicyPrincipalsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyPrincipalsRequest =>
    __isa(o, "ListPolicyPrincipalsRequest");
}

/**
 * <p>The output from the ListPolicyPrincipals operation.</p>
 */
export interface ListPolicyPrincipalsResponse {
  __type?: "ListPolicyPrincipalsResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The descriptions of the principals.</p>
   */
  principals?: string[];
}

export namespace ListPolicyPrincipalsResponse {
  export const filterSensitiveLog = (
    obj: ListPolicyPrincipalsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyPrincipalsResponse =>
    __isa(o, "ListPolicyPrincipalsResponse");
}

/**
 * <p>The input for the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsRequest {
  __type?: "ListPolicyVersionsRequest";
  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListPolicyVersionsRequest {
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyVersionsRequest =>
    __isa(o, "ListPolicyVersionsRequest");
}

/**
 * <p>The output from the ListPolicyVersions operation.</p>
 */
export interface ListPolicyVersionsResponse {
  __type?: "ListPolicyVersionsResponse";
  /**
   * <p>The policy versions.</p>
   */
  policyVersions?: PolicyVersion[];
}

export namespace ListPolicyVersionsResponse {
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPolicyVersionsResponse =>
    __isa(o, "ListPolicyVersionsResponse");
}

/**
 * <p>The input for the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesRequest {
  __type?: "ListPrincipalPoliciesRequest";
  /**
   * <p>Specifies the order for results. If true, results are returned in ascending creation
   *          order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The marker for the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalPoliciesRequest {
  export const filterSensitiveLog = (
    obj: ListPrincipalPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPrincipalPoliciesRequest =>
    __isa(o, "ListPrincipalPoliciesRequest");
}

/**
 * <p>The output from the ListPrincipalPolicies operation.</p>
 */
export interface ListPrincipalPoliciesResponse {
  __type?: "ListPrincipalPoliciesResponse";
  /**
   * <p>The marker for the next set of results, or null if there are no additional
   *          results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policies.</p>
   */
  policies?: Policy[];
}

export namespace ListPrincipalPoliciesResponse {
  export const filterSensitiveLog = (
    obj: ListPrincipalPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPrincipalPoliciesResponse =>
    __isa(o, "ListPrincipalPoliciesResponse");
}

/**
 * <p>The input for the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsRequest {
  __type?: "ListPrincipalThingsRequest";
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The principal.</p>
   */
  principal: string | undefined;
}

export namespace ListPrincipalThingsRequest {
  export const filterSensitiveLog = (obj: ListPrincipalThingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPrincipalThingsRequest =>
    __isa(o, "ListPrincipalThingsRequest");
}

/**
 * <p>The output from the ListPrincipalThings operation.</p>
 */
export interface ListPrincipalThingsResponse {
  __type?: "ListPrincipalThingsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things.</p>
   */
  things?: string[];
}

export namespace ListPrincipalThingsResponse {
  export const filterSensitiveLog = (
    obj: ListPrincipalThingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPrincipalThingsResponse =>
    __isa(o, "ListPrincipalThingsResponse");
}

export interface ListProvisioningTemplatesRequest {
  __type?: "ListProvisioningTemplatesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListProvisioningTemplatesRequest {
  export const filterSensitiveLog = (
    obj: ListProvisioningTemplatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProvisioningTemplatesRequest =>
    __isa(o, "ListProvisioningTemplatesRequest");
}

export interface ListProvisioningTemplatesResponse {
  __type?: "ListProvisioningTemplatesResponse";
  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of fleet provisioning templates</p>
   */
  templates?: ProvisioningTemplateSummary[];
}

export namespace ListProvisioningTemplatesResponse {
  export const filterSensitiveLog = (
    obj: ListProvisioningTemplatesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProvisioningTemplatesResponse =>
    __isa(o, "ListProvisioningTemplatesResponse");
}

export interface ListProvisioningTemplateVersionsRequest {
  __type?: "ListProvisioningTemplateVersionsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace ListProvisioningTemplateVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListProvisioningTemplateVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProvisioningTemplateVersionsRequest =>
    __isa(o, "ListProvisioningTemplateVersionsRequest");
}

export interface ListProvisioningTemplateVersionsResponse {
  __type?: "ListProvisioningTemplateVersionsResponse";
  /**
   * <p>A token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of fleet provisioning template versions.</p>
   */
  versions?: ProvisioningTemplateVersionSummary[];
}

export namespace ListProvisioningTemplateVersionsResponse {
  export const filterSensitiveLog = (
    obj: ListProvisioningTemplateVersionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProvisioningTemplateVersionsResponse =>
    __isa(o, "ListProvisioningTemplateVersionsResponse");
}

export interface ListRoleAliasesRequest {
  __type?: "ListRoleAliasesRequest";
  /**
   * <p>Return the list of role aliases in ascending alphabetical order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;
}

export namespace ListRoleAliasesRequest {
  export const filterSensitiveLog = (obj: ListRoleAliasesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoleAliasesRequest =>
    __isa(o, "ListRoleAliasesRequest");
}

export interface ListRoleAliasesResponse {
  __type?: "ListRoleAliasesResponse";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The role aliases.</p>
   */
  roleAliases?: string[];
}

export namespace ListRoleAliasesResponse {
  export const filterSensitiveLog = (obj: ListRoleAliasesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoleAliasesResponse =>
    __isa(o, "ListRoleAliasesResponse");
}

export interface ListScheduledAuditsRequest {
  __type?: "ListScheduledAuditsRequest";
  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListScheduledAuditsRequest {
  export const filterSensitiveLog = (obj: ListScheduledAuditsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListScheduledAuditsRequest =>
    __isa(o, "ListScheduledAuditsRequest");
}

export interface ListScheduledAuditsResponse {
  __type?: "ListScheduledAuditsResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results,
   *             or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of scheduled audits.</p>
   */
  scheduledAudits?: ScheduledAuditMetadata[];
}

export namespace ListScheduledAuditsResponse {
  export const filterSensitiveLog = (
    obj: ListScheduledAuditsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListScheduledAuditsResponse =>
    __isa(o, "ListScheduledAuditsResponse");
}

export interface ListSecurityProfilesForTargetRequest {
  __type?: "ListSecurityProfilesForTargetRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>If true, return child groups too.</p>
   */
  recursive?: boolean;

  /**
   * <p>The ARN of the target (thing group) whose attached security profiles you want to get.</p>
   */
  securityProfileTargetArn: string | undefined;
}

export namespace ListSecurityProfilesForTargetRequest {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesForTargetRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesForTargetRequest =>
    __isa(o, "ListSecurityProfilesForTargetRequest");
}

export interface ListSecurityProfilesForTargetResponse {
  __type?: "ListSecurityProfilesForTargetResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of security profiles and their associated targets.</p>
   */
  securityProfileTargetMappings?: SecurityProfileTargetMapping[];
}

export namespace ListSecurityProfilesForTargetResponse {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesForTargetResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesForTargetResponse =>
    __isa(o, "ListSecurityProfilesForTargetResponse");
}

export interface ListSecurityProfilesRequest {
  __type?: "ListSecurityProfilesRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListSecurityProfilesRequest {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesRequest =>
    __isa(o, "ListSecurityProfilesRequest");
}

export interface ListSecurityProfilesResponse {
  __type?: "ListSecurityProfilesResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of security profile identifiers (names and ARNs).</p>
   */
  securityProfileIdentifiers?: SecurityProfileIdentifier[];
}

export namespace ListSecurityProfilesResponse {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesResponse =>
    __isa(o, "ListSecurityProfilesResponse");
}

export interface ListStreamsRequest {
  __type?: "ListStreamsRequest";
  /**
   * <p>Set to true to return the list of streams in ascending order.</p>
   */
  ascendingOrder?: boolean;

  /**
   * <p>The maximum number of results to return at a time.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListStreamsRequest {
  export const filterSensitiveLog = (obj: ListStreamsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStreamsRequest =>
    __isa(o, "ListStreamsRequest");
}

export interface ListStreamsResponse {
  __type?: "ListStreamsResponse";
  /**
   * <p>A token used to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of streams.</p>
   */
  streams?: StreamSummary[];
}

export namespace ListStreamsResponse {
  export const filterSensitiveLog = (obj: ListStreamsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStreamsResponse =>
    __isa(o, "ListStreamsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of tags assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListTargetsForPolicyRequest {
  __type?: "ListTargetsForPolicyRequest";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  pageSize?: number;

  /**
   * <p>The policy name.</p>
   */
  policyName: string | undefined;
}

export namespace ListTargetsForPolicyRequest {
  export const filterSensitiveLog = (
    obj: ListTargetsForPolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForPolicyRequest =>
    __isa(o, "ListTargetsForPolicyRequest");
}

export interface ListTargetsForPolicyResponse {
  __type?: "ListTargetsForPolicyResponse";
  /**
   * <p>A marker used to get the next set of results.</p>
   */
  nextMarker?: string;

  /**
   * <p>The policy targets.</p>
   */
  targets?: string[];
}

export namespace ListTargetsForPolicyResponse {
  export const filterSensitiveLog = (
    obj: ListTargetsForPolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForPolicyResponse =>
    __isa(o, "ListTargetsForPolicyResponse");
}

export interface ListTargetsForSecurityProfileRequest {
  __type?: "ListTargetsForSecurityProfileRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The security profile.</p>
   */
  securityProfileName: string | undefined;
}

export namespace ListTargetsForSecurityProfileRequest {
  export const filterSensitiveLog = (
    obj: ListTargetsForSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForSecurityProfileRequest =>
    __isa(o, "ListTargetsForSecurityProfileRequest");
}

export interface ListTargetsForSecurityProfileResponse {
  __type?: "ListTargetsForSecurityProfileResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups to which the security profile is attached.</p>
   */
  securityProfileTargets?: SecurityProfileTarget[];
}

export namespace ListTargetsForSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: ListTargetsForSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTargetsForSecurityProfileResponse =>
    __isa(o, "ListTargetsForSecurityProfileResponse");
}

export interface ListThingGroupsForThingRequest {
  __type?: "ListThingGroupsForThingRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingGroupsForThingRequest {
  export const filterSensitiveLog = (
    obj: ListThingGroupsForThingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingGroupsForThingRequest =>
    __isa(o, "ListThingGroupsForThingRequest");
}

export interface ListThingGroupsForThingResponse {
  __type?: "ListThingGroupsForThingResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];
}

export namespace ListThingGroupsForThingResponse {
  export const filterSensitiveLog = (
    obj: ListThingGroupsForThingResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingGroupsForThingResponse =>
    __isa(o, "ListThingGroupsForThingResponse");
}

export interface ListThingGroupsRequest {
  __type?: "ListThingGroupsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter that limits the results to those with the specified name prefix.</p>
   */
  namePrefixFilter?: string;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter that limits the results to those with the specified parent group.</p>
   */
  parentGroup?: string;

  /**
   * <p>If true, return child groups as well.</p>
   */
  recursive?: boolean;
}

export namespace ListThingGroupsRequest {
  export const filterSensitiveLog = (obj: ListThingGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingGroupsRequest =>
    __isa(o, "ListThingGroupsRequest");
}

export interface ListThingGroupsResponse {
  __type?: "ListThingGroupsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups.</p>
   */
  thingGroups?: GroupNameAndArn[];
}

export namespace ListThingGroupsResponse {
  export const filterSensitiveLog = (obj: ListThingGroupsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingGroupsResponse =>
    __isa(o, "ListThingGroupsResponse");
}

/**
 * <p>The input for the ListThingPrincipal operation.</p>
 */
export interface ListThingPrincipalsRequest {
  __type?: "ListThingPrincipalsRequest";
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace ListThingPrincipalsRequest {
  export const filterSensitiveLog = (obj: ListThingPrincipalsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingPrincipalsRequest =>
    __isa(o, "ListThingPrincipalsRequest");
}

/**
 * <p>The output from the ListThingPrincipals operation.</p>
 */
export interface ListThingPrincipalsResponse {
  __type?: "ListThingPrincipalsResponse";
  /**
   * <p>The principals associated with the thing.</p>
   */
  principals?: string[];
}

export namespace ListThingPrincipalsResponse {
  export const filterSensitiveLog = (
    obj: ListThingPrincipalsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingPrincipalsResponse =>
    __isa(o, "ListThingPrincipalsResponse");
}

export interface ListThingRegistrationTaskReportsRequest {
  __type?: "ListThingRegistrationTaskReportsRequest";
  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of task report.</p>
   */
  reportType: ReportType | string | undefined;

  /**
   * <p>The id of the task.</p>
   */
  taskId: string | undefined;
}

export namespace ListThingRegistrationTaskReportsRequest {
  export const filterSensitiveLog = (
    obj: ListThingRegistrationTaskReportsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingRegistrationTaskReportsRequest =>
    __isa(o, "ListThingRegistrationTaskReportsRequest");
}

export interface ListThingRegistrationTaskReportsResponse {
  __type?: "ListThingRegistrationTaskReportsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of task report.</p>
   */
  reportType?: ReportType | string;

  /**
   * <p>Links to the task resources.</p>
   */
  resourceLinks?: string[];
}

export namespace ListThingRegistrationTaskReportsResponse {
  export const filterSensitiveLog = (
    obj: ListThingRegistrationTaskReportsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingRegistrationTaskReportsResponse =>
    __isa(o, "ListThingRegistrationTaskReportsResponse");
}

export interface ListThingRegistrationTasksRequest {
  __type?: "ListThingRegistrationTasksRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The status of the bulk thing provisioning task.</p>
   */
  status?: Status | string;
}

export namespace ListThingRegistrationTasksRequest {
  export const filterSensitiveLog = (
    obj: ListThingRegistrationTasksRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingRegistrationTasksRequest =>
    __isa(o, "ListThingRegistrationTasksRequest");
}

export interface ListThingRegistrationTasksResponse {
  __type?: "ListThingRegistrationTasksResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of bulk thing provisioning task IDs.</p>
   */
  taskIds?: string[];
}

export namespace ListThingRegistrationTasksResponse {
  export const filterSensitiveLog = (
    obj: ListThingRegistrationTasksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingRegistrationTasksResponse =>
    __isa(o, "ListThingRegistrationTasksResponse");
}

export interface ListThingsInBillingGroupRequest {
  __type?: "ListThingsInBillingGroupRequest";
  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListThingsInBillingGroupRequest {
  export const filterSensitiveLog = (
    obj: ListThingsInBillingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsInBillingGroupRequest =>
    __isa(o, "ListThingsInBillingGroupRequest");
}

export interface ListThingsInBillingGroupResponse {
  __type?: "ListThingsInBillingGroupResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of things in the billing group.</p>
   */
  things?: string[];
}

export namespace ListThingsInBillingGroupResponse {
  export const filterSensitiveLog = (
    obj: ListThingsInBillingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsInBillingGroupResponse =>
    __isa(o, "ListThingsInBillingGroupResponse");
}

export interface ListThingsInThingGroupRequest {
  __type?: "ListThingsInThingGroupRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>When true, list things in this thing group and in all child groups as
   * 			well.</p>
   */
  recursive?: boolean;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName: string | undefined;
}

export namespace ListThingsInThingGroupRequest {
  export const filterSensitiveLog = (
    obj: ListThingsInThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsInThingGroupRequest =>
    __isa(o, "ListThingsInThingGroupRequest");
}

export interface ListThingsInThingGroupResponse {
  __type?: "ListThingsInThingGroupResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things in the specified thing group.</p>
   */
  things?: string[];
}

export namespace ListThingsInThingGroupResponse {
  export const filterSensitiveLog = (
    obj: ListThingsInThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsInThingGroupResponse =>
    __isa(o, "ListThingsInThingGroupResponse");
}

/**
 * <p>The input for the ListThings operation.</p>
 */
export interface ListThingsRequest {
  __type?: "ListThingsRequest";
  /**
   * <p>The attribute name used to search for things.</p>
   */
  attributeName?: string;

  /**
   * <p>The attribute value used to search for things.</p>
   */
  attributeValue?: string;

  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the thing type used to search for things.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingsRequest {
  export const filterSensitiveLog = (obj: ListThingsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsRequest =>
    __isa(o, "ListThingsRequest");
}

/**
 * <p>The output from the ListThings operation.</p>
 */
export interface ListThingsResponse {
  __type?: "ListThingsResponse";
  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The things.</p>
   */
  things?: ThingAttribute[];
}

export namespace ListThingsResponse {
  export const filterSensitiveLog = (obj: ListThingsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingsResponse =>
    __isa(o, "ListThingsResponse");
}

/**
 * <p>The input for the ListThingTypes operation.</p>
 */
export interface ListThingTypesRequest {
  __type?: "ListThingTypesRequest";
  /**
   * <p>The maximum number of results to return in this operation.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace ListThingTypesRequest {
  export const filterSensitiveLog = (obj: ListThingTypesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingTypesRequest =>
    __isa(o, "ListThingTypesRequest");
}

/**
 * <p>The output for the ListThingTypes operation.</p>
 */
export interface ListThingTypesResponse {
  __type?: "ListThingTypesResponse";
  /**
   * <p>The token for the next set of results, or <b>null</b> if
   * 			there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing types.</p>
   */
  thingTypes?: ThingTypeDefinition[];
}

export namespace ListThingTypesResponse {
  export const filterSensitiveLog = (obj: ListThingTypesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListThingTypesResponse =>
    __isa(o, "ListThingTypesResponse");
}

export interface ListTopicRuleDestinationsRequest {
  __type?: "ListTopicRuleDestinationsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsRequest {
  export const filterSensitiveLog = (
    obj: ListTopicRuleDestinationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTopicRuleDestinationsRequest =>
    __isa(o, "ListTopicRuleDestinationsRequest");
}

export interface ListTopicRuleDestinationsResponse {
  __type?: "ListTopicRuleDestinationsResponse";
  /**
   * <p>Information about a topic rule destination.</p>
   */
  destinationSummaries?: TopicRuleDestinationSummary[];

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListTopicRuleDestinationsResponse {
  export const filterSensitiveLog = (
    obj: ListTopicRuleDestinationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTopicRuleDestinationsResponse =>
    __isa(o, "ListTopicRuleDestinationsResponse");
}

/**
 * <p>The input for the ListTopicRules operation.</p>
 */
export interface ListTopicRulesRequest {
  __type?: "ListTopicRulesRequest";
  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>A token used to retrieve the next value.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The topic.</p>
   */
  topic?: string;
}

export namespace ListTopicRulesRequest {
  export const filterSensitiveLog = (obj: ListTopicRulesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTopicRulesRequest =>
    __isa(o, "ListTopicRulesRequest");
}

/**
 * <p>The output from the ListTopicRules operation.</p>
 */
export interface ListTopicRulesResponse {
  __type?: "ListTopicRulesResponse";
  /**
   * <p>A token used to retrieve the next value.</p>
   */
  nextToken?: string;

  /**
   * <p>The rules.</p>
   */
  rules?: TopicRuleListItem[];
}

export namespace ListTopicRulesResponse {
  export const filterSensitiveLog = (obj: ListTopicRulesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTopicRulesResponse =>
    __isa(o, "ListTopicRulesResponse");
}

export interface ListV2LoggingLevelsRequest {
  __type?: "ListV2LoggingLevelsRequest";
  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The type of resource for which you are configuring logging. Must be
   *             <code>THING_Group</code>.</p>
   */
  targetType?: LogTargetType | string;
}

export namespace ListV2LoggingLevelsRequest {
  export const filterSensitiveLog = (obj: ListV2LoggingLevelsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListV2LoggingLevelsRequest =>
    __isa(o, "ListV2LoggingLevelsRequest");
}

export interface ListV2LoggingLevelsResponse {
  __type?: "ListV2LoggingLevelsResponse";
  /**
   * <p>The logging configuration for a target.</p>
   */
  logTargetConfigurations?: LogTargetConfiguration[];

  /**
   * <p>The token used to get the next set of results, or <b>null</b> if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListV2LoggingLevelsResponse {
  export const filterSensitiveLog = (
    obj: ListV2LoggingLevelsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListV2LoggingLevelsResponse =>
    __isa(o, "ListV2LoggingLevelsResponse");
}

export interface ListViolationEventsRequest {
  __type?: "ListViolationEventsRequest";
  /**
   * <p>The end time for the alerts to be listed.</p>
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

  /**
   * <p>A filter to limit results to those alerts generated by the specified security profile.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The start time for the alerts to be listed.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>A filter to limit results to those alerts caused by the specified thing.</p>
   */
  thingName?: string;
}

export namespace ListViolationEventsRequest {
  export const filterSensitiveLog = (obj: ListViolationEventsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListViolationEventsRequest =>
    __isa(o, "ListViolationEventsRequest");
}

export interface ListViolationEventsResponse {
  __type?: "ListViolationEventsResponse";
  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no
   *         additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>The security profile violation alerts issued for this account during the given time period,
   *       potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: ViolationEvent[];
}

export namespace ListViolationEventsResponse {
  export const filterSensitiveLog = (
    obj: ListViolationEventsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListViolationEventsResponse =>
    __isa(o, "ListViolationEventsResponse");
}

/**
 * <p>Describes the logging options payload.</p>
 */
export interface LoggingOptionsPayload {
  __type?: "LoggingOptionsPayload";
  /**
   * <p>The log level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;
}

export namespace LoggingOptionsPayload {
  export const filterSensitiveLog = (obj: LoggingOptionsPayload): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingOptionsPayload =>
    __isa(o, "LoggingOptionsPayload");
}

export enum LogLevel {
  DEBUG = "DEBUG",
  DISABLED = "DISABLED",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN"
}

/**
 * <p>A log target.</p>
 */
export interface LogTarget {
  __type?: "LogTarget";
  /**
   * <p>The target name.</p>
   */
  targetName?: string;

  /**
   * <p>The target type.</p>
   */
  targetType: LogTargetType | string | undefined;
}

export namespace LogTarget {
  export const filterSensitiveLog = (obj: LogTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogTarget => __isa(o, "LogTarget");
}

/**
 * <p>The target configuration.</p>
 */
export interface LogTargetConfiguration {
  __type?: "LogTargetConfiguration";
  /**
   * <p>The logging level.</p>
   */
  logLevel?: LogLevel | string;

  /**
   * <p>A log target</p>
   */
  logTarget?: LogTarget;
}

export namespace LogTargetConfiguration {
  export const filterSensitiveLog = (obj: LogTargetConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is LogTargetConfiguration =>
    __isa(o, "LogTargetConfiguration");
}

export enum LogTargetType {
  DEFAULT = "DEFAULT",
  THING_GROUP = "THING_GROUP"
}

/**
 * <p>The policy documentation is not valid.</p>
 */
export interface MalformedPolicyException
  extends __SmithyException,
    $MetadataBearer {
  name: "MalformedPolicyException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MalformedPolicyException {
  export const filterSensitiveLog = (obj: MalformedPolicyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is MalformedPolicyException =>
    __isa(o, "MalformedPolicyException");
}

export enum MessageFormat {
  JSON = "JSON",
  RAW = "RAW"
}

/**
 * <p>The value to be compared with the <code>metric</code>.</p>
 */
export interface MetricValue {
  __type?: "MetricValue";
  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of CIDRs, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  cidrs?: string[];

  /**
   * <p>If the <code>comparisonOperator</code> calls for a numeric value, use this
   *           to specify that numeric value to be compared with the <code>metric</code>.</p>
   */
  count?: number;

  /**
   * <p>If the <code>comparisonOperator</code> calls for a set of ports, use this
   *           to specify that set to be compared with the <code>metric</code>.</p>
   */
  ports?: number[];
}

export namespace MetricValue {
  export const filterSensitiveLog = (obj: MetricValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricValue => __isa(o, "MetricValue");
}

/**
 * <p>Describes which changes should be applied as part of a mitigation action.</p>
 */
export interface MitigationAction {
  __type?: "MitigationAction";
  /**
   * <p>The set of parameters for this mitigation action. The parameters vary, depending on the kind of action you apply.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>A unique identifier for the mitigation action.</p>
   */
  id?: string;

  /**
   * <p>A user-friendly name for the mitigation action.</p>
   */
  name?: string;

  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  roleArn?: string;
}

export namespace MitigationAction {
  export const filterSensitiveLog = (obj: MitigationAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is MitigationAction =>
    __isa(o, "MitigationAction");
}

/**
 * <p>Information that identifies a mitigation action. This information is returned by ListMitigationActions.</p>
 */
export interface MitigationActionIdentifier {
  __type?: "MitigationActionIdentifier";
  /**
   * <p>The IAM role ARN used to apply this mitigation action.</p>
   */
  actionArn?: string;

  /**
   * <p>The friendly name of the mitigation action.</p>
   */
  actionName?: string;

  /**
   * <p>The date when this mitigation action was created.</p>
   */
  creationDate?: Date;
}

export namespace MitigationActionIdentifier {
  export const filterSensitiveLog = (obj: MitigationActionIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is MitigationActionIdentifier =>
    __isa(o, "MitigationActionIdentifier");
}

/**
 * <p>The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).</p>
 */
export interface MitigationActionParams {
  __type?: "MitigationActionParams";
  /**
   * <p>Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.</p>
   */
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;

  /**
   * <p>Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.</p>
   */
  enableIoTLoggingParams?: EnableIoTLoggingParams;

  /**
   * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
   */
  publishFindingToSnsParams?: PublishFindingToSnsParams;

  /**
   * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
   */
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
   */
  updateCACertificateParams?: UpdateCACertificateParams;

  /**
   * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
   */
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
}

export namespace MitigationActionParams {
  export const filterSensitiveLog = (obj: MitigationActionParams): any => ({
    ...obj
  });
  export const isa = (o: any): o is MitigationActionParams =>
    __isa(o, "MitigationActionParams");
}

export enum MitigationActionType {
  ADD_THINGS_TO_THING_GROUP = "ADD_THINGS_TO_THING_GROUP",
  ENABLE_IOT_LOGGING = "ENABLE_IOT_LOGGING",
  PUBLISH_FINDING_TO_SNS = "PUBLISH_FINDING_TO_SNS",
  REPLACE_DEFAULT_POLICY_VERSION = "REPLACE_DEFAULT_POLICY_VERSION",
  UPDATE_CA_CERTIFICATE = "UPDATE_CA_CERTIFICATE",
  UPDATE_DEVICE_CERTIFICATE = "UPDATE_DEVICE_CERTIFICATE"
}

/**
 * <p>Specifies the MQTT context to use for the test authorizer request</p>
 */
export interface MqttContext {
  __type?: "MqttContext";
  /**
   * <p>The value of the <code>clientId</code> key in an MQTT authorization request.</p>
   */
  clientId?: string;

  /**
   * <p>The value of the <code>password</code> key in an MQTT authorization request.</p>
   */
  password?: Uint8Array;

  /**
   * <p>The value of the <code>username</code> key in an MQTT authorization request.</p>
   */
  username?: string;
}

export namespace MqttContext {
  export const filterSensitiveLog = (obj: MqttContext): any => ({
    ...obj
  });
  export const isa = (o: any): o is MqttContext => __isa(o, "MqttContext");
}

/**
 * <p>Information about the resource that was noncompliant with the audit check.</p>
 */
export interface NonCompliantResource {
  __type?: "NonCompliantResource";
  /**
   * <p>Other information about the noncompliant resource.</p>
   */
  additionalInfo?: { [key: string]: string };

  /**
   * <p>Information that identifies the noncompliant resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The type of the noncompliant resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace NonCompliantResource {
  export const filterSensitiveLog = (obj: NonCompliantResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is NonCompliantResource =>
    __isa(o, "NonCompliantResource");
}

/**
 * <p>The resource is not configured.</p>
 */
export interface NotConfiguredException
  extends __SmithyException,
    $MetadataBearer {
  name: "NotConfiguredException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace NotConfiguredException {
  export const filterSensitiveLog = (obj: NotConfiguredException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotConfiguredException =>
    __isa(o, "NotConfiguredException");
}

/**
 * <p>Describes a file to be associated with an OTA update.</p>
 */
export interface OTAUpdateFile {
  __type?: "OTAUpdateFile";
  /**
   * <p>A list of name/attribute pairs.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The code signing method of the file.</p>
   */
  codeSigning?: CodeSigning;

  /**
   * <p>The location of the updated firmware.</p>
   */
  fileLocation?: FileLocation;

  /**
   * <p>The name of the file.</p>
   */
  fileName?: string;

  /**
   * <p>The file version.</p>
   */
  fileVersion?: string;
}

export namespace OTAUpdateFile {
  export const filterSensitiveLog = (obj: OTAUpdateFile): any => ({
    ...obj
  });
  export const isa = (o: any): o is OTAUpdateFile => __isa(o, "OTAUpdateFile");
}

/**
 * <p>Information about an OTA update.</p>
 */
export interface OTAUpdateInfo {
  __type?: "OTAUpdateInfo";
  /**
   * <p>A collection of name/value pairs</p>
   */
  additionalParameters?: { [key: string]: string };

  /**
   * <p>The AWS IoT job ARN associated with the OTA update.</p>
   */
  awsIotJobArn?: string;

  /**
   * <p>The AWS IoT job ID associated with the OTA update.</p>
   */
  awsIotJobId?: string;

  /**
   * <p>Configuration for the rollout of OTA updates.</p>
   */
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

  /**
   * <p>Configuration information for pre-signed URLs. Valid when <code>protocols</code>
   *              contains HTTP.</p>
   */
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>A description of the OTA update.</p>
   */
  description?: string;

  /**
   * <p>Error information associated with the OTA update.</p>
   */
  errorInfo?: ErrorInfo;

  /**
   * <p>The date when the OTA update was last updated.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>A list of files associated with the OTA update.</p>
   */
  otaUpdateFiles?: OTAUpdateFile[];

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;

  /**
   * <p>The status of the OTA update.</p>
   */
  otaUpdateStatus?: OTAUpdateStatus | string;

  /**
   * <p>The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both
   *              HTTP and MQTT are specified, the target device can choose the protocol.</p>
   */
  protocols?: (Protocol | string)[];

  /**
   * <p>Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those
   * 			things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also
   * 			be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when
   * 			the thing is added to a target group, even after the OTA update was completed by all things originally in
   * 			the group. </p>
   */
  targetSelection?: TargetSelection | string;

  /**
   * <p>The targets of the OTA update.</p>
   */
  targets?: string[];
}

export namespace OTAUpdateInfo {
  export const filterSensitiveLog = (obj: OTAUpdateInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is OTAUpdateInfo => __isa(o, "OTAUpdateInfo");
}

export enum OTAUpdateStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING"
}

/**
 * <p>An OTA update summary.</p>
 */
export interface OTAUpdateSummary {
  __type?: "OTAUpdateSummary";
  /**
   * <p>The date when the OTA update was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The OTA update ARN.</p>
   */
  otaUpdateArn?: string;

  /**
   * <p>The OTA update ID.</p>
   */
  otaUpdateId?: string;
}

export namespace OTAUpdateSummary {
  export const filterSensitiveLog = (obj: OTAUpdateSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is OTAUpdateSummary =>
    __isa(o, "OTAUpdateSummary");
}

/**
 * <p>A certificate that has been transferred but not yet accepted.</p>
 */
export interface OutgoingCertificate {
  __type?: "OutgoingCertificate";
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate ID.</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate creation date.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the transfer was initiated.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;

  /**
   * <p>The AWS account to which the transfer was made.</p>
   */
  transferredTo?: string;
}

export namespace OutgoingCertificate {
  export const filterSensitiveLog = (obj: OutgoingCertificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutgoingCertificate =>
    __isa(o, "OutgoingCertificate");
}

/**
 * <p>Describes the percentile and percentile value.</p>
 */
export interface PercentPair {
  __type?: "PercentPair";
  /**
   * <p>The percentile.</p>
   */
  percent?: number;

  /**
   * <p>The value of the percentile.</p>
   */
  value?: number;
}

export namespace PercentPair {
  export const filterSensitiveLog = (obj: PercentPair): any => ({
    ...obj
  });
  export const isa = (o: any): o is PercentPair => __isa(o, "PercentPair");
}

/**
 * <p>Describes an AWS IoT policy.</p>
 */
export interface Policy {
  __type?: "Policy";
  /**
   * <p>The policy ARN.</p>
   */
  policyArn?: string;

  /**
   * <p>The policy name.</p>
   */
  policyName?: string;
}

export namespace Policy {
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj
  });
  export const isa = (o: any): o is Policy => __isa(o, "Policy");
}

export enum PolicyTemplateName {
  BLANK_POLICY = "BLANK_POLICY"
}

/**
 * <p>Describes a policy version.</p>
 */
export interface PolicyVersion {
  __type?: "PolicyVersion";
  /**
   * <p>The date and time the policy was created.</p>
   */
  createDate?: Date;

  /**
   * <p>Specifies whether the policy version is the default.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The policy version ID.</p>
   */
  versionId?: string;
}

export namespace PolicyVersion {
  export const filterSensitiveLog = (obj: PolicyVersion): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyVersion => __isa(o, "PolicyVersion");
}

/**
 * <p>Information about the version of the policy associated with the resource.</p>
 */
export interface PolicyVersionIdentifier {
  __type?: "PolicyVersionIdentifier";
  /**
   * <p>The name of the policy.</p>
   */
  policyName?: string;

  /**
   * <p>The ID of the version of the policy associated with the resource.</p>
   */
  policyVersionId?: string;
}

export namespace PolicyVersionIdentifier {
  export const filterSensitiveLog = (obj: PolicyVersionIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyVersionIdentifier =>
    __isa(o, "PolicyVersionIdentifier");
}

/**
 * <p>Configuration for pre-signed S3 URLs.</p>
 */
export interface PresignedUrlConfig {
  __type?: "PresignedUrlConfig";
  /**
   * <p>How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600
   *             seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.</p>
   */
  expiresInSec?: number;

  /**
   * <p>The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job
   *             data/updates are stored. The role must also grant permission for IoT to download the files.</p>
   */
  roleArn?: string;
}

export namespace PresignedUrlConfig {
  export const filterSensitiveLog = (obj: PresignedUrlConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is PresignedUrlConfig =>
    __isa(o, "PresignedUrlConfig");
}

export enum Protocol {
  HTTP = "HTTP",
  MQTT = "MQTT"
}

/**
 * <p>A summary of information about a fleet provisioning template.</p>
 */
export interface ProvisioningTemplateSummary {
  __type?: "ProvisioningTemplateSummary";
  /**
   * <p>The date when the fleet provisioning template summary was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True if the fleet provision template is enabled, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The date when the fleet provisioning template summary was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the fleet provisioning template.</p>
   */
  templateArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName?: string;
}

export namespace ProvisioningTemplateSummary {
  export const filterSensitiveLog = (
    obj: ProvisioningTemplateSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisioningTemplateSummary =>
    __isa(o, "ProvisioningTemplateSummary");
}

/**
 * <p>A summary of information about a fleet provision template version.</p>
 */
export interface ProvisioningTemplateVersionSummary {
  __type?: "ProvisioningTemplateVersionSummary";
  /**
   * <p>The date when the fleet provisioning template version was created</p>
   */
  creationDate?: Date;

  /**
   * <p>True if the fleet provisioning template version is the default version, otherwise
   *          false.</p>
   */
  isDefaultVersion?: boolean;

  /**
   * <p>The ID of the fleet privisioning template version.</p>
   */
  versionId?: number;
}

export namespace ProvisioningTemplateVersionSummary {
  export const filterSensitiveLog = (
    obj: ProvisioningTemplateVersionSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProvisioningTemplateVersionSummary =>
    __isa(o, "ProvisioningTemplateVersionSummary");
}

/**
 * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
 */
export interface PublishFindingToSnsParams {
  __type?: "PublishFindingToSnsParams";
  /**
   * <p>The ARN of the topic to which you want to publish the findings.</p>
   */
  topicArn: string | undefined;
}

export namespace PublishFindingToSnsParams {
  export const filterSensitiveLog = (obj: PublishFindingToSnsParams): any => ({
    ...obj
  });
  export const isa = (o: any): o is PublishFindingToSnsParams =>
    __isa(o, "PublishFindingToSnsParams");
}

/**
 * <p>An asset property value entry containing the following information.</p>
 */
export interface PutAssetPropertyValueEntry {
  __type?: "PutAssetPropertyValueEntry";
  /**
   * <p>The ID of the AWS IoT SiteWise asset. You must specify either a <code>propertyAlias</code>
   *       or both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  assetId?: string;

  /**
   * <p>Optional. A unique identifier for this entry that you can define to better track which
   *       message caused an error in case of failure. Accepts substitution templates. Defaults to a new
   *       UUID.</p>
   */
  entryId?: string;

  /**
   * <p>The name of the property alias associated with your asset property. You must specify
   *       either a <code>propertyAlias</code> or both an <code>aliasId</code> and a
   *         <code>propertyId</code>. Accepts substitution templates.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset's property. You must specify either a <code>propertyAlias</code> or
   *       both an <code>aliasId</code> and a <code>propertyId</code>. Accepts substitution
   *       templates.</p>
   */
  propertyId?: string;

  /**
   * <p>A list of property values to insert that each contain timestamp, quality, and value (TQV)
   *       information.</p>
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

export namespace PutAssetPropertyValueEntry {
  export const filterSensitiveLog = (obj: PutAssetPropertyValueEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutAssetPropertyValueEntry =>
    __isa(o, "PutAssetPropertyValueEntry");
}

/**
 * <p>The input for the DynamoActionVS action that specifies the DynamoDB table to which
 *          the message data will be written.</p>
 */
export interface PutItemInput {
  __type?: "PutItemInput";
  /**
   * <p>The table where the message data will be written.</p>
   */
  tableName: string | undefined;
}

export namespace PutItemInput {
  export const filterSensitiveLog = (obj: PutItemInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutItemInput => __isa(o, "PutItemInput");
}

/**
 * <p>Allows you to define a criteria to initiate the increase in rate of rollout for a job.</p>
 */
export interface RateIncreaseCriteria {
  __type?: "RateIncreaseCriteria";
  /**
   * <p>The threshold for number of notified things that will initiate the increase in rate of rollout.</p>
   */
  numberOfNotifiedThings?: number;

  /**
   * <p>The threshold for number of succeeded things that will initiate the increase in rate of rollout.</p>
   */
  numberOfSucceededThings?: number;
}

export namespace RateIncreaseCriteria {
  export const filterSensitiveLog = (obj: RateIncreaseCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is RateIncreaseCriteria =>
    __isa(o, "RateIncreaseCriteria");
}

/**
 * <p>The input to the RegisterCACertificate operation.</p>
 */
export interface RegisterCACertificateRequest {
  __type?: "RegisterCACertificateRequest";
  /**
   * <p>Allows this CA certificate to be used for auto registration of device
   *          certificates.</p>
   */
  allowAutoRegistration?: boolean;

  /**
   * <p>The CA certificate.</p>
   */
  caCertificate: string | undefined;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: RegistrationConfig;

  /**
   * <p>A boolean value that specifies if the CA certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The private key verification certificate.</p>
   */
  verificationCertificate: string | undefined;
}

export namespace RegisterCACertificateRequest {
  export const filterSensitiveLog = (
    obj: RegisterCACertificateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCACertificateRequest =>
    __isa(o, "RegisterCACertificateRequest");
}

/**
 * <p>The output from the RegisterCACertificateResponse operation.</p>
 */
export interface RegisterCACertificateResponse {
  __type?: "RegisterCACertificateResponse";
  /**
   * <p>The CA certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCACertificateResponse {
  export const filterSensitiveLog = (
    obj: RegisterCACertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCACertificateResponse =>
    __isa(o, "RegisterCACertificateResponse");
}

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateRequest {
  __type?: "RegisterCertificateRequest";
  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string | undefined;

  /**
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?: CertificateStatus | string;
}

export namespace RegisterCertificateRequest {
  export const filterSensitiveLog = (obj: RegisterCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCertificateRequest =>
    __isa(o, "RegisterCertificateRequest");
}

/**
 * <p>The output from the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateResponse {
  __type?: "RegisterCertificateResponse";
  /**
   * <p>The certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The certificate identifier.</p>
   */
  certificateId?: string;
}

export namespace RegisterCertificateResponse {
  export const filterSensitiveLog = (
    obj: RegisterCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterCertificateResponse =>
    __isa(o, "RegisterCertificateResponse");
}

export interface RegisterThingRequest {
  __type?: "RegisterThingRequest";
  /**
   * <p>The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html">Programmatic
   *             Provisioning</a> for more information.</p>
   */
  parameters?: { [key: string]: string };

  /**
   * <p>The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/programmatic-provisioning.html">Programmatic
   *             Provisioning</a> for more information.</p>
   */
  templateBody: string | undefined;
}

export namespace RegisterThingRequest {
  export const filterSensitiveLog = (obj: RegisterThingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterThingRequest =>
    __isa(o, "RegisterThingRequest");
}

export interface RegisterThingResponse {
  __type?: "RegisterThingResponse";
  /**
   * <p>.</p>
   */
  certificatePem?: string;

  /**
   * <p>ARNs for the generated resources.</p>
   */
  resourceArns?: { [key: string]: string };
}

export namespace RegisterThingResponse {
  export const filterSensitiveLog = (obj: RegisterThingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterThingResponse =>
    __isa(o, "RegisterThingResponse");
}

/**
 * <p>The registration code is invalid.</p>
 */
export interface RegistrationCodeValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "RegistrationCodeValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace RegistrationCodeValidationException {
  export const filterSensitiveLog = (
    obj: RegistrationCodeValidationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegistrationCodeValidationException =>
    __isa(o, "RegistrationCodeValidationException");
}

/**
 * <p>The registration configuration.</p>
 */
export interface RegistrationConfig {
  __type?: "RegistrationConfig";
  /**
   * <p>The ARN of the role.</p>
   */
  roleArn?: string;

  /**
   * <p>The template body.</p>
   */
  templateBody?: string;
}

export namespace RegistrationConfig {
  export const filterSensitiveLog = (obj: RegistrationConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegistrationConfig =>
    __isa(o, "RegistrationConfig");
}

/**
 * <p>The input for the RejectCertificateTransfer operation.</p>
 */
export interface RejectCertificateTransferRequest {
  __type?: "RejectCertificateTransferRequest";
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
  export const filterSensitiveLog = (
    obj: RejectCertificateTransferRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RejectCertificateTransferRequest =>
    __isa(o, "RejectCertificateTransferRequest");
}

/**
 * <p>Information about a related resource.</p>
 */
export interface RelatedResource {
  __type?: "RelatedResource";
  /**
   * <p>Other information about the resource.</p>
   */
  additionalInfo?: { [key: string]: string };

  /**
   * <p>Information that identifies the resource.</p>
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: ResourceType | string;
}

export namespace RelatedResource {
  export const filterSensitiveLog = (obj: RelatedResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is RelatedResource =>
    __isa(o, "RelatedResource");
}

export interface RemoveThingFromBillingGroupRequest {
  __type?: "RemoveThingFromBillingGroupRequest";
  /**
   * <p>The ARN of the billing group.</p>
   */
  billingGroupArn?: string;

  /**
   * <p>The name of the billing group.</p>
   */
  billingGroupName?: string;

  /**
   * <p>The ARN of the thing to be removed from the billing group.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing to be removed from the billing group.</p>
   */
  thingName?: string;
}

export namespace RemoveThingFromBillingGroupRequest {
  export const filterSensitiveLog = (
    obj: RemoveThingFromBillingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveThingFromBillingGroupRequest =>
    __isa(o, "RemoveThingFromBillingGroupRequest");
}

export interface RemoveThingFromBillingGroupResponse {
  __type?: "RemoveThingFromBillingGroupResponse";
}

export namespace RemoveThingFromBillingGroupResponse {
  export const filterSensitiveLog = (
    obj: RemoveThingFromBillingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveThingFromBillingGroupResponse =>
    __isa(o, "RemoveThingFromBillingGroupResponse");
}

export interface RemoveThingFromThingGroupRequest {
  __type?: "RemoveThingFromThingGroupRequest";
  /**
   * <p>The ARN of the thing to remove from the group.</p>
   */
  thingArn?: string;

  /**
   * <p>The group ARN.</p>
   */
  thingGroupArn?: string;

  /**
   * <p>The group name.</p>
   */
  thingGroupName?: string;

  /**
   * <p>The name of the thing to remove from the group.</p>
   */
  thingName?: string;
}

export namespace RemoveThingFromThingGroupRequest {
  export const filterSensitiveLog = (
    obj: RemoveThingFromThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveThingFromThingGroupRequest =>
    __isa(o, "RemoveThingFromThingGroupRequest");
}

export interface RemoveThingFromThingGroupResponse {
  __type?: "RemoveThingFromThingGroupResponse";
}

export namespace RemoveThingFromThingGroupResponse {
  export const filterSensitiveLog = (
    obj: RemoveThingFromThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveThingFromThingGroupResponse =>
    __isa(o, "RemoveThingFromThingGroupResponse");
}

/**
 * <p>Parameters to define a mitigation action that adds a blank policy to restrict permissions.</p>
 */
export interface ReplaceDefaultPolicyVersionParams {
  __type?: "ReplaceDefaultPolicyVersionParams";
  /**
   * <p>The name of the template to be applied. The only supported value is <code>BLANK_POLICY</code>.</p>
   */
  templateName: PolicyTemplateName | string | undefined;
}

export namespace ReplaceDefaultPolicyVersionParams {
  export const filterSensitiveLog = (
    obj: ReplaceDefaultPolicyVersionParams
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplaceDefaultPolicyVersionParams =>
    __isa(o, "ReplaceDefaultPolicyVersionParams");
}

/**
 * <p>The input for the ReplaceTopicRule operation.</p>
 */
export interface ReplaceTopicRuleRequest {
  __type?: "ReplaceTopicRuleRequest";
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
    ...obj
  });
  export const isa = (o: any): o is ReplaceTopicRuleRequest =>
    __isa(o, "ReplaceTopicRuleRequest");
}

export enum ReportType {
  ERRORS = "ERRORS",
  RESULTS = "RESULTS"
}

/**
 * <p>Describes an action to republish to another topic.</p>
 */
export interface RepublishAction {
  __type?: "RepublishAction";
  /**
   * <p>The Quality of Service (QoS) level to use when republishing messages. The default value
   *          is 0.</p>
   */
  qos?: number;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;
}

export namespace RepublishAction {
  export const filterSensitiveLog = (obj: RepublishAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is RepublishAction =>
    __isa(o, "RepublishAction");
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;

  /**
   * <p>The ARN of the resource that caused the exception.</p>
   */
  resourceArn?: string;

  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>Information that identifies the noncompliant resource.</p>
 */
export interface ResourceIdentifier {
  __type?: "ResourceIdentifier";
  /**
   * <p>The account with which the resource is associated.</p>
   */
  account?: string;

  /**
   * <p>The ID of the CA certificate used to authorize the certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The client ID.</p>
   */
  clientId?: string;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The ID of the certificate attached to the resource.</p>
   */
  deviceCertificateId?: string;

  /**
   * <p>The ARN of the IAM role that has overly permissive actions.</p>
   */
  iamRoleArn?: string;

  /**
   * <p>The version of the policy associated with the resource.</p>
   */
  policyVersionIdentifier?: PolicyVersionIdentifier;

  /**
   * <p>The ARN of the role alias that has overly permissive actions.</p>
   */
  roleAliasArn?: string;
}

export namespace ResourceIdentifier {
  export const filterSensitiveLog = (obj: ResourceIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceIdentifier =>
    __isa(o, "ResourceIdentifier");
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The resource registration failed.</p>
 */
export interface ResourceRegistrationFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceRegistrationFailureException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceRegistrationFailureException {
  export const filterSensitiveLog = (
    obj: ResourceRegistrationFailureException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceRegistrationFailureException =>
    __isa(o, "ResourceRegistrationFailureException");
}

export enum ResourceType {
  ACCOUNT_SETTINGS = "ACCOUNT_SETTINGS",
  CA_CERTIFICATE = "CA_CERTIFICATE",
  CLIENT_ID = "CLIENT_ID",
  COGNITO_IDENTITY_POOL = "COGNITO_IDENTITY_POOL",
  DEVICE_CERTIFICATE = "DEVICE_CERTIFICATE",
  IAM_ROLE = "IAM_ROLE",
  IOT_POLICY = "IOT_POLICY",
  ROLE_ALIAS = "ROLE_ALIAS"
}

/**
 * <p>Role alias description.</p>
 */
export interface RoleAliasDescription {
  __type?: "RoleAliasDescription";
  /**
   * <p>The UNIX timestamp of when the role alias was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The number of seconds for which the credential is valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The UNIX timestamp of when the role alias was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The role alias owner.</p>
   */
  owner?: string;

  /**
   * <p>The role alias.</p>
   */
  roleAlias?: string;

  /**
   * <p>The ARN of the role alias.</p>
   */
  roleAliasArn?: string;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;
}

export namespace RoleAliasDescription {
  export const filterSensitiveLog = (obj: RoleAliasDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoleAliasDescription =>
    __isa(o, "RoleAliasDescription");
}

/**
 * <p>Describes an action to write data to an Amazon S3 bucket.</p>
 */
export interface S3Action {
  __type?: "S3Action";
  /**
   * <p>The Amazon S3 bucket.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The Amazon S3 canned ACL that controls access to the object identified by the object
   *          key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl">S3 canned ACLs</a>.</p>
   */
  cannedAcl?: CannedAccessControlList | string;

  /**
   * <p>The object key.</p>
   */
  key: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;
}

export namespace S3Action {
  export const filterSensitiveLog = (obj: S3Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Action => __isa(o, "S3Action");
}

/**
 * <p>Describes the location of updated firmware in S3.</p>
 */
export interface S3Destination {
  __type?: "S3Destination";
  /**
   * <p>The S3 bucket that contains the updated firmware.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 prefix.</p>
   */
  prefix?: string;
}

export namespace S3Destination {
  export const filterSensitiveLog = (obj: S3Destination): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Destination => __isa(o, "S3Destination");
}

/**
 * <p>The S3 location.</p>
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   * <p>The S3 bucket.</p>
   */
  bucket?: string;

  /**
   * <p>The S3 key.</p>
   */
  key?: string;

  /**
   * <p>The S3 bucket version.</p>
   */
  version?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Location => __isa(o, "S3Location");
}

/**
 * <p>Describes an action to write a message to a Salesforce IoT Cloud Input
 *          Stream.</p>
 */
export interface SalesforceAction {
  __type?: "SalesforceAction";
  /**
   * <p>The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The
   *          token is available from the Salesforce IoT Cloud platform after creation of the Input
   *          Stream.</p>
   */
  token: string | undefined;

  /**
   * <p>The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from
   *          the Salesforce IoT Cloud platform after creation of the Input Stream.</p>
   */
  url: string | undefined;
}

export namespace SalesforceAction {
  export const filterSensitiveLog = (obj: SalesforceAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SalesforceAction =>
    __isa(o, "SalesforceAction");
}

/**
 * <p>Information about the scheduled audit.</p>
 */
export interface ScheduledAuditMetadata {
  __type?: "ScheduledAuditMetadata";
  /**
   * <p>The day of the month on which the scheduled audit is run (if the
   *           <code>frequency</code> is "MONTHLY").
   *         If days 29-31 are specified, and the month does not have that many
   *         days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit is run (if the
   *           <code>frequency</code> is "WEEKLY" or "BIWEEKLY").</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit occurs.</p>
   */
  frequency?: AuditFrequency | string;

  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;

  /**
   * <p>The name of the scheduled audit.</p>
   */
  scheduledAuditName?: string;
}

export namespace ScheduledAuditMetadata {
  export const filterSensitiveLog = (obj: ScheduledAuditMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledAuditMetadata =>
    __isa(o, "ScheduledAuditMetadata");
}

export interface SearchIndexRequest {
  __type?: "SearchIndexRequest";
  /**
   * <p>The search index name.</p>
   */
  indexName?: string;

  /**
   * <p>The maximum number of results to return at one time.</p>
   */
  maxResults?: number;

  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The search query string.</p>
   */
  queryString: string | undefined;

  /**
   * <p>The query version.</p>
   */
  queryVersion?: string;
}

export namespace SearchIndexRequest {
  export const filterSensitiveLog = (obj: SearchIndexRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchIndexRequest =>
    __isa(o, "SearchIndexRequest");
}

export interface SearchIndexResponse {
  __type?: "SearchIndexResponse";
  /**
   * <p>The token used to get the next set of results, or <code>null</code> if there are no additional
   *       results.</p>
   */
  nextToken?: string;

  /**
   * <p>The thing groups that match the search query.</p>
   */
  thingGroups?: ThingGroupDocument[];

  /**
   * <p>The things that match the search query.</p>
   */
  things?: ThingDocument[];
}

export namespace SearchIndexResponse {
  export const filterSensitiveLog = (obj: SearchIndexResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchIndexResponse =>
    __isa(o, "SearchIndexResponse");
}

/**
 * <p>Identifying information for a Device Defender security profile.</p>
 */
export interface SecurityProfileIdentifier {
  __type?: "SecurityProfileIdentifier";
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;

  /**
   * <p>The name you have given to the security profile.</p>
   */
  name: string | undefined;
}

export namespace SecurityProfileIdentifier {
  export const filterSensitiveLog = (obj: SecurityProfileIdentifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityProfileIdentifier =>
    __isa(o, "SecurityProfileIdentifier");
}

/**
 * <p>A target to which an alert is sent when a security profile behavior is
 *           violated.</p>
 */
export interface SecurityProfileTarget {
  __type?: "SecurityProfileTarget";
  /**
   * <p>The ARN of the security profile.</p>
   */
  arn: string | undefined;
}

export namespace SecurityProfileTarget {
  export const filterSensitiveLog = (obj: SecurityProfileTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityProfileTarget =>
    __isa(o, "SecurityProfileTarget");
}

/**
 * <p>Information about a security profile and the target associated with it.</p>
 */
export interface SecurityProfileTargetMapping {
  __type?: "SecurityProfileTargetMapping";
  /**
   * <p>Information that identifies the security profile.</p>
   */
  securityProfileIdentifier?: SecurityProfileIdentifier;

  /**
   * <p>Information about the target (thing group) associated with the security profile.</p>
   */
  target?: SecurityProfileTarget;
}

export namespace SecurityProfileTargetMapping {
  export const filterSensitiveLog = (
    obj: SecurityProfileTargetMapping
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityProfileTargetMapping =>
    __isa(o, "SecurityProfileTargetMapping");
}

export enum ServerCertificateStatus {
  INVALID = "INVALID",
  VALID = "VALID"
}

/**
 * <p>An object that contains information about a server certificate.</p>
 */
export interface ServerCertificateSummary {
  __type?: "ServerCertificateSummary";
  /**
   * <p>The ARN of the server certificate.</p>
   */
  serverCertificateArn?: string;

  /**
   * <p>The status of the server certificate.</p>
   */
  serverCertificateStatus?: ServerCertificateStatus | string;

  /**
   * <p>Details that explain the status of the server certificate.</p>
   */
  serverCertificateStatusDetail?: string;
}

export namespace ServerCertificateSummary {
  export const filterSensitiveLog = (obj: ServerCertificateSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServerCertificateSummary =>
    __isa(o, "ServerCertificateSummary");
}

export enum ServiceType {
  CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER",
  DATA = "DATA",
  JOBS = "JOBS"
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

export interface SetDefaultAuthorizerRequest {
  __type?: "SetDefaultAuthorizerRequest";
  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;
}

export namespace SetDefaultAuthorizerRequest {
  export const filterSensitiveLog = (
    obj: SetDefaultAuthorizerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetDefaultAuthorizerRequest =>
    __isa(o, "SetDefaultAuthorizerRequest");
}

export interface SetDefaultAuthorizerResponse {
  __type?: "SetDefaultAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace SetDefaultAuthorizerResponse {
  export const filterSensitiveLog = (
    obj: SetDefaultAuthorizerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetDefaultAuthorizerResponse =>
    __isa(o, "SetDefaultAuthorizerResponse");
}

/**
 * <p>The input for the SetDefaultPolicyVersion operation.</p>
 */
export interface SetDefaultPolicyVersionRequest {
  __type?: "SetDefaultPolicyVersionRequest";
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
  export const filterSensitiveLog = (
    obj: SetDefaultPolicyVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetDefaultPolicyVersionRequest =>
    __isa(o, "SetDefaultPolicyVersionRequest");
}

/**
 * <p>The input for the SetLoggingOptions operation.</p>
 */
export interface SetLoggingOptionsRequest {
  __type?: "SetLoggingOptionsRequest";
  /**
   * <p>The logging options payload.</p>
   */
  loggingOptionsPayload: LoggingOptionsPayload | undefined;
}

export namespace SetLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetLoggingOptionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetLoggingOptionsRequest =>
    __isa(o, "SetLoggingOptionsRequest");
}

export interface SetV2LoggingLevelRequest {
  __type?: "SetV2LoggingLevelRequest";
  /**
   * <p>The log level.</p>
   */
  logLevel: LogLevel | string | undefined;

  /**
   * <p>The log target.</p>
   */
  logTarget: LogTarget | undefined;
}

export namespace SetV2LoggingLevelRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingLevelRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetV2LoggingLevelRequest =>
    __isa(o, "SetV2LoggingLevelRequest");
}

export interface SetV2LoggingOptionsRequest {
  __type?: "SetV2LoggingOptionsRequest";
  /**
   * <p>The default logging level.</p>
   */
  defaultLogLevel?: LogLevel | string;

  /**
   * <p>If true all logs are disabled. The default is false.</p>
   */
  disableAllLogs?: boolean;

  /**
   * <p>The ARN of the role that allows IoT to write to Cloudwatch logs.</p>
   */
  roleArn?: string;
}

export namespace SetV2LoggingOptionsRequest {
  export const filterSensitiveLog = (obj: SetV2LoggingOptionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetV2LoggingOptionsRequest =>
    __isa(o, "SetV2LoggingOptionsRequest");
}

/**
 * <p>Describes the code-signing profile.</p>
 */
export interface SigningProfileParameter {
  __type?: "SigningProfileParameter";
  /**
   * <p>Certificate ARN.</p>
   */
  certificateArn?: string;

  /**
   * <p>The location of the code-signing certificate on your device.</p>
   */
  certificatePathOnDevice?: string;

  /**
   * <p>The hardware platform of your device.</p>
   */
  platform?: string;
}

export namespace SigningProfileParameter {
  export const filterSensitiveLog = (obj: SigningProfileParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is SigningProfileParameter =>
    __isa(o, "SigningProfileParameter");
}

/**
 * <p>Use Sig V4 authorization.</p>
 */
export interface SigV4Authorization {
  __type?: "SigV4Authorization";
  /**
   * <p>The ARN of the signing role.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The service name to use while signing with Sig V4.</p>
   */
  serviceName: string | undefined;

  /**
   * <p>The signing region.</p>
   */
  signingRegion: string | undefined;
}

export namespace SigV4Authorization {
  export const filterSensitiveLog = (obj: SigV4Authorization): any => ({
    ...obj
  });
  export const isa = (o: any): o is SigV4Authorization =>
    __isa(o, "SigV4Authorization");
}

/**
 * <p>Describes an action to publish to an Amazon SNS topic.</p>
 */
export interface SnsAction {
  __type?: "SnsAction";
  /**
   * <p>(Optional) The message format of the message to publish. Accepted values are "JSON"
   *          and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine
   *          if the payload should be parsed and relevant platform-specific bits of the payload should
   *          be extracted. To read more about SNS message formats, see <a href="https://docs.aws.amazon.com/sns/latest/dg/json-formats.html">https://docs.aws.amazon.com/sns/latest/dg/json-formats.html</a> refer to their official documentation.</p>
   */
  messageFormat?: MessageFormat | string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The ARN of the SNS topic.</p>
   */
  targetArn: string | undefined;
}

export namespace SnsAction {
  export const filterSensitiveLog = (obj: SnsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SnsAction => __isa(o, "SnsAction");
}

/**
 * <p>The Rule-SQL expression can't be parsed correctly.</p>
 */
export interface SqlParseException extends __SmithyException, $MetadataBearer {
  name: "SqlParseException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace SqlParseException {
  export const filterSensitiveLog = (obj: SqlParseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqlParseException =>
    __isa(o, "SqlParseException");
}

/**
 * <p>Describes an action to publish data to an Amazon SQS queue.</p>
 */
export interface SqsAction {
  __type?: "SqsAction";
  /**
   * <p>The URL of the Amazon SQS queue.</p>
   */
  queueUrl: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies whether to use Base64 encoding.</p>
   */
  useBase64?: boolean;
}

export namespace SqsAction {
  export const filterSensitiveLog = (obj: SqsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is SqsAction => __isa(o, "SqsAction");
}

export interface StartAuditMitigationActionsTaskRequest {
  __type?: "StartAuditMitigationActionsTaskRequest";
  /**
   * <p>For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.</p>
   */
  auditCheckToActionsMapping: { [key: string]: string[] } | undefined;

  /**
   * <p>Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Specifies the audit findings to which the mitigation actions are applied. You can apply them to a type of audit check, to all findings from an audit, or to a speecific set of findings.</p>
   */
  target: AuditMitigationActionsTaskTarget | undefined;

  /**
   * <p>A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.</p>
   */
  taskId: string | undefined;
}

export namespace StartAuditMitigationActionsTaskRequest {
  export const filterSensitiveLog = (
    obj: StartAuditMitigationActionsTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAuditMitigationActionsTaskRequest =>
    __isa(o, "StartAuditMitigationActionsTaskRequest");
}

export interface StartAuditMitigationActionsTaskResponse {
  __type?: "StartAuditMitigationActionsTaskResponse";
  /**
   * <p>The unique identifier for the audit mitigation task. This matches the <code>taskId</code> that you specified in the request.</p>
   */
  taskId?: string;
}

export namespace StartAuditMitigationActionsTaskResponse {
  export const filterSensitiveLog = (
    obj: StartAuditMitigationActionsTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartAuditMitigationActionsTaskResponse =>
    __isa(o, "StartAuditMitigationActionsTaskResponse");
}

export interface StartOnDemandAuditTaskRequest {
  __type?: "StartOnDemandAuditTaskRequest";
  /**
   * <p>Which checks are performed during the audit. The checks you specify must be enabled
   *             for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code>
   *             to see the list of all checks, including those that are enabled or
   *             <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.</p>
   */
  targetCheckNames: string[] | undefined;
}

export namespace StartOnDemandAuditTaskRequest {
  export const filterSensitiveLog = (
    obj: StartOnDemandAuditTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartOnDemandAuditTaskRequest =>
    __isa(o, "StartOnDemandAuditTaskRequest");
}

export interface StartOnDemandAuditTaskResponse {
  __type?: "StartOnDemandAuditTaskResponse";
  /**
   * <p>The ID of the on-demand audit you started.</p>
   */
  taskId?: string;
}

export namespace StartOnDemandAuditTaskResponse {
  export const filterSensitiveLog = (
    obj: StartOnDemandAuditTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartOnDemandAuditTaskResponse =>
    __isa(o, "StartOnDemandAuditTaskResponse");
}

/**
 * <p>Information required to start a signing job.</p>
 */
export interface StartSigningJobParameter {
  __type?: "StartSigningJobParameter";
  /**
   * <p>The location to write the code-signed file.</p>
   */
  destination?: Destination;

  /**
   * <p>The code-signing profile name.</p>
   */
  signingProfileName?: string;

  /**
   * <p>Describes the code-signing profile.</p>
   */
  signingProfileParameter?: SigningProfileParameter;
}

export namespace StartSigningJobParameter {
  export const filterSensitiveLog = (obj: StartSigningJobParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartSigningJobParameter =>
    __isa(o, "StartSigningJobParameter");
}

export interface StartThingRegistrationTaskRequest {
  __type?: "StartThingRegistrationTaskRequest";
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

  /**
   * <p>The provisioning template.</p>
   */
  templateBody: string | undefined;
}

export namespace StartThingRegistrationTaskRequest {
  export const filterSensitiveLog = (
    obj: StartThingRegistrationTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartThingRegistrationTaskRequest =>
    __isa(o, "StartThingRegistrationTaskRequest");
}

export interface StartThingRegistrationTaskResponse {
  __type?: "StartThingRegistrationTaskResponse";
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId?: string;
}

export namespace StartThingRegistrationTaskResponse {
  export const filterSensitiveLog = (
    obj: StartThingRegistrationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartThingRegistrationTaskResponse =>
    __isa(o, "StartThingRegistrationTaskResponse");
}

/**
 * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior
 *           is determined to be in compliance or in violation of the behavior.</p>
 */
export interface StatisticalThreshold {
  __type?: "StatisticalThreshold";
  /**
   * <p>The percentile which resolves to a threshold value by which compliance with a behavior is
   *           determined. Metrics are collected over the specified period (<code>durationSeconds</code>) from
   *           all reporting devices in your account and statistical ranks are calculated. Then, the measurements
   *           from a device are collected over the same period. If the accumulated measurements from the device
   *           fall above or below (<code>comparisonOperator</code>) the value associated with the percentile
   *           specified, then the device is considered to be in compliance with the behavior, otherwise a
   *           violation occurs.</p>
   */
  statistic?: string;
}

export namespace StatisticalThreshold {
  export const filterSensitiveLog = (obj: StatisticalThreshold): any => ({
    ...obj
  });
  export const isa = (o: any): o is StatisticalThreshold =>
    __isa(o, "StatisticalThreshold");
}

/**
 * <p>A map of key-value pairs for all supported statistics. Currently, only count is
 *       supported.</p>
 */
export interface Statistics {
  __type?: "Statistics";
  /**
   * <p>The average of the aggregated field values.</p>
   */
  average?: number;

  /**
   * <p>The count of things that match the query.</p>
   */
  count?: number;

  /**
   * <p>The maximum aggregated field value.</p>
   */
  maximum?: number;

  /**
   * <p>The minimum aggregated field value.</p>
   */
  minimum?: number;

  /**
   * <p>The standard deviation of the aggregated field values.</p>
   */
  stdDeviation?: number;

  /**
   * <p>The sum of the aggregated field values.</p>
   */
  sum?: number;

  /**
   * <p>The sum of the squares of the aggregated field values.</p>
   */
  sumOfSquares?: number;

  /**
   * <p>The variance of the aggregated field values.</p>
   */
  variance?: number;
}

export namespace Statistics {
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is Statistics => __isa(o, "Statistics");
}

export enum Status {
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Completed = "Completed",
  Failed = "Failed",
  InProgress = "InProgress"
}

/**
 * <p>Starts execution of a Step Functions state machine.</p>
 */
export interface StepFunctionsAction {
  __type?: "StepFunctionsAction";
  /**
   * <p>(Optional) A name will be given to the state machine execution consisting of this
   *       prefix followed by a UUID. Step Functions automatically creates a unique name for each state
   *       machine execution if one is not provided.</p>
   */
  executionNamePrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT permission to start execution of a state machine
   *       ("Action":"states:StartExecution").</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the Step Functions state machine whose execution will be started.</p>
   */
  stateMachineName: string | undefined;
}

export namespace StepFunctionsAction {
  export const filterSensitiveLog = (obj: StepFunctionsAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is StepFunctionsAction =>
    __isa(o, "StepFunctionsAction");
}

export interface StopThingRegistrationTaskRequest {
  __type?: "StopThingRegistrationTaskRequest";
  /**
   * <p>The bulk thing provisioning task ID.</p>
   */
  taskId: string | undefined;
}

export namespace StopThingRegistrationTaskRequest {
  export const filterSensitiveLog = (
    obj: StopThingRegistrationTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopThingRegistrationTaskRequest =>
    __isa(o, "StopThingRegistrationTaskRequest");
}

export interface StopThingRegistrationTaskResponse {
  __type?: "StopThingRegistrationTaskResponse";
}

export namespace StopThingRegistrationTaskResponse {
  export const filterSensitiveLog = (
    obj: StopThingRegistrationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopThingRegistrationTaskResponse =>
    __isa(o, "StopThingRegistrationTaskResponse");
}

/**
 * <p>Describes a group of files that can be streamed.</p>
 */
export interface _Stream {
  __type?: "Stream";
  /**
   * <p>The ID of a file associated with a stream.</p>
   */
  fileId?: number;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;
}

export namespace _Stream {
  export const filterSensitiveLog = (obj: _Stream): any => ({
    ...obj
  });
  export const isa = (o: any): o is _Stream => __isa(o, "Stream");
}

/**
 * <p>Represents a file to stream.</p>
 */
export interface StreamFile {
  __type?: "StreamFile";
  /**
   * <p>The file ID.</p>
   */
  fileId?: number;

  /**
   * <p>The location of the file in S3.</p>
   */
  s3Location?: S3Location;
}

export namespace StreamFile {
  export const filterSensitiveLog = (obj: StreamFile): any => ({
    ...obj
  });
  export const isa = (o: any): o is StreamFile => __isa(o, "StreamFile");
}

/**
 * <p>Information about a stream.</p>
 */
export interface StreamInfo {
  __type?: "StreamInfo";
  /**
   * <p>The date when the stream was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The files to stream.</p>
   */
  files?: StreamFile[];

  /**
   * <p>The date when the stream was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>An IAM role AWS IoT assumes to access your S3 files.</p>
   */
  roleArn?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace StreamInfo {
  export const filterSensitiveLog = (obj: StreamInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is StreamInfo => __isa(o, "StreamInfo");
}

/**
 * <p>A summary of a stream.</p>
 */
export interface StreamSummary {
  __type?: "StreamSummary";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace StreamSummary {
  export const filterSensitiveLog = (obj: StreamSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StreamSummary => __isa(o, "StreamSummary");
}

/**
 * <p>A set of key/value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's key.</p>
   */
  Key?: string;

  /**
   * <p>The tag's value.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

export enum TargetSelection {
  CONTINUOUS = "CONTINUOUS",
  SNAPSHOT = "SNAPSHOT"
}

/**
 * <p>This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.</p>
 */
export interface TaskAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TaskAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace TaskAlreadyExistsException {
  export const filterSensitiveLog = (obj: TaskAlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskAlreadyExistsException =>
    __isa(o, "TaskAlreadyExistsException");
}

/**
 * <p>Statistics for the checks performed during the audit.</p>
 */
export interface TaskStatistics {
  __type?: "TaskStatistics";
  /**
   * <p>The number of checks that did not run because the audit was canceled.</p>
   */
  canceledChecks?: number;

  /**
   * <p>The number of checks that found compliant resources.</p>
   */
  compliantChecks?: number;

  /**
   * <p>The number of checks.</p>
   */
  failedChecks?: number;

  /**
   * <p>The number of checks in progress.</p>
   */
  inProgressChecks?: number;

  /**
   * <p>The number of checks that found noncompliant resources.</p>
   */
  nonCompliantChecks?: number;

  /**
   * <p>The number of checks in this audit.</p>
   */
  totalChecks?: number;

  /**
   * <p>The number of checks waiting for data collection.</p>
   */
  waitingForDataCollectionChecks?: number;
}

export namespace TaskStatistics {
  export const filterSensitiveLog = (obj: TaskStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskStatistics =>
    __isa(o, "TaskStatistics");
}

/**
 * <p>Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.</p>
 */
export interface TaskStatisticsForAuditCheck {
  __type?: "TaskStatisticsForAuditCheck";
  /**
   * <p>The number of findings to which the mitigation action task was canceled when applied.</p>
   */
  canceledFindingsCount?: number;

  /**
   * <p>The number of findings for which at least one of the actions failed when applied.</p>
   */
  failedFindingsCount?: number;

  /**
   * <p>The number of findings skipped because of filter conditions provided in the parameters to the command.</p>
   */
  skippedFindingsCount?: number;

  /**
   * <p>The number of findings for which all mitigation actions succeeded when applied.</p>
   */
  succeededFindingsCount?: number;

  /**
   * <p>The total number of findings to which a task is being applied.</p>
   */
  totalFindingsCount?: number;
}

export namespace TaskStatisticsForAuditCheck {
  export const filterSensitiveLog = (
    obj: TaskStatisticsForAuditCheck
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskStatisticsForAuditCheck =>
    __isa(o, "TaskStatisticsForAuditCheck");
}

export interface TestAuthorizationRequest {
  __type?: "TestAuthorizationRequest";
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
   * <p>The Cognito identity pool ID.</p>
   */
  cognitoIdentityPoolId?: string;

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

  /**
   * <p>The principal.</p>
   */
  principal?: string;
}

export namespace TestAuthorizationRequest {
  export const filterSensitiveLog = (obj: TestAuthorizationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestAuthorizationRequest =>
    __isa(o, "TestAuthorizationRequest");
}

export interface TestAuthorizationResponse {
  __type?: "TestAuthorizationResponse";
  /**
   * <p>The authentication results.</p>
   */
  authResults?: AuthResult[];
}

export namespace TestAuthorizationResponse {
  export const filterSensitiveLog = (obj: TestAuthorizationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestAuthorizationResponse =>
    __isa(o, "TestAuthorizationResponse");
}

export interface TestInvokeAuthorizerRequest {
  __type?: "TestInvokeAuthorizerRequest";
  /**
   * <p>The custom authorizer name.</p>
   */
  authorizerName: string | undefined;

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

  /**
   * <p>The token returned by your custom authentication service.</p>
   */
  token?: string;

  /**
   * <p>The signature made with the token and your custom authentication service's private
   *          key.</p>
   */
  tokenSignature?: string;
}

export namespace TestInvokeAuthorizerRequest {
  export const filterSensitiveLog = (
    obj: TestInvokeAuthorizerRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeAuthorizerRequest =>
    __isa(o, "TestInvokeAuthorizerRequest");
}

export interface TestInvokeAuthorizerResponse {
  __type?: "TestInvokeAuthorizerResponse";
  /**
   * <p>The number of seconds after which the connection is terminated.</p>
   */
  disconnectAfterInSeconds?: number;

  /**
   * <p>True if the token is authenticated, otherwise false.</p>
   */
  isAuthenticated?: boolean;

  /**
   * <p>IAM policy documents.</p>
   */
  policyDocuments?: string[];

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * <p>The number of seconds after which the temporary credentials are refreshed.</p>
   */
  refreshAfterInSeconds?: number;
}

export namespace TestInvokeAuthorizerResponse {
  export const filterSensitiveLog = (
    obj: TestInvokeAuthorizerResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestInvokeAuthorizerResponse =>
    __isa(o, "TestInvokeAuthorizerResponse");
}

/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing
 * 			attributes.</p>
 */
export interface ThingAttribute {
  __type?: "ThingAttribute";
  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

export namespace ThingAttribute {
  export const filterSensitiveLog = (obj: ThingAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingAttribute =>
    __isa(o, "ThingAttribute");
}

/**
 * <p>The connectivity status of the thing.</p>
 */
export interface ThingConnectivity {
  __type?: "ThingConnectivity";
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
    ...obj
  });
  export const isa = (o: any): o is ThingConnectivity =>
    __isa(o, "ThingConnectivity");
}

export enum ThingConnectivityIndexingMode {
  OFF = "OFF",
  STATUS = "STATUS"
}

/**
 * <p>The thing search index document.</p>
 */
export interface ThingDocument {
  __type?: "ThingDocument";
  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: ThingConnectivity;

  /**
   * <p>The shadow.</p>
   */
  shadow?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: string[];

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;
}

export namespace ThingDocument {
  export const filterSensitiveLog = (obj: ThingDocument): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingDocument => __isa(o, "ThingDocument");
}

/**
 * <p>The thing group search index document.</p>
 */
export interface ThingGroupDocument {
  __type?: "ThingGroupDocument";
  /**
   * <p>The thing group attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Parent group names.</p>
   */
  parentGroupNames?: string[];

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group ID.</p>
   */
  thingGroupId?: string;

  /**
   * <p>The thing group name.</p>
   */
  thingGroupName?: string;
}

export namespace ThingGroupDocument {
  export const filterSensitiveLog = (obj: ThingGroupDocument): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingGroupDocument =>
    __isa(o, "ThingGroupDocument");
}

/**
 * <p>Thing group indexing configuration.</p>
 */
export interface ThingGroupIndexingConfiguration {
  __type?: "ThingGroupIndexingConfiguration";
  /**
   * <p>A list of thing group fields to index. This list cannot contain any managed fields. Use
   *       the GetIndexingConfiguration API to get a list of managed fields.</p>
   *          <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>Thing group indexing mode.</p>
   */
  thingGroupIndexingMode: ThingGroupIndexingMode | string | undefined;
}

export namespace ThingGroupIndexingConfiguration {
  export const filterSensitiveLog = (
    obj: ThingGroupIndexingConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingGroupIndexingConfiguration =>
    __isa(o, "ThingGroupIndexingConfiguration");
}

export enum ThingGroupIndexingMode {
  OFF = "OFF",
  ON = "ON"
}

/**
 * <p>Thing group metadata.</p>
 */
export interface ThingGroupMetadata {
  __type?: "ThingGroupMetadata";
  /**
   * <p>The UNIX timestamp of when the thing group was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The parent thing group name.</p>
   */
  parentGroupName?: string;

  /**
   * <p>The root parent thing group.</p>
   */
  rootToParentThingGroups?: GroupNameAndArn[];
}

export namespace ThingGroupMetadata {
  export const filterSensitiveLog = (obj: ThingGroupMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingGroupMetadata =>
    __isa(o, "ThingGroupMetadata");
}

/**
 * <p>Thing group properties.</p>
 */
export interface ThingGroupProperties {
  __type?: "ThingGroupProperties";
  /**
   * <p>The thing group attributes in JSON format.</p>
   */
  attributePayload?: AttributePayload;

  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;
}

export namespace ThingGroupProperties {
  export const filterSensitiveLog = (obj: ThingGroupProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingGroupProperties =>
    __isa(o, "ThingGroupProperties");
}

/**
 * <p>The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing
 *         Thing Indexing</a>.</p>
 */
export interface ThingIndexingConfiguration {
  __type?: "ThingIndexingConfiguration";
  /**
   * <p>Contains custom field names and their data type.</p>
   */
  customFields?: Field[];

  /**
   * <p>Contains fields that are indexed and whose types are already known by the Fleet Indexing
   *       service.</p>
   */
  managedFields?: Field[];

  /**
   * <p>Thing connectivity indexing mode. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>STATUS – Your thing index contains connectivity status. To enable thing
   *           connectivity indexing, thingIndexMode must not be set to OFF.</p>
   *             </li>
   *             <li>
   *                <p>OFF - Thing connectivity status indexing is disabled.</p>
   *             </li>
   *          </ul>
   */
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode | string;

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
   */
  thingIndexingMode: ThingIndexingMode | string | undefined;
}

export namespace ThingIndexingConfiguration {
  export const filterSensitiveLog = (obj: ThingIndexingConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingIndexingConfiguration =>
    __isa(o, "ThingIndexingConfiguration");
}

export enum ThingIndexingMode {
  OFF = "OFF",
  REGISTRY = "REGISTRY",
  REGISTRY_AND_SHADOW = "REGISTRY_AND_SHADOW"
}

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface ThingTypeDefinition {
  __type?: "ThingTypeDefinition";
  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
   * 			time, a value indicating whether the thing type is deprecated, and a date and time when it was
   * 			deprecated.</p>
   */
  thingTypeMetadata?: ThingTypeMetadata;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: ThingTypeProperties;
}

export namespace ThingTypeDefinition {
  export const filterSensitiveLog = (obj: ThingTypeDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingTypeDefinition =>
    __isa(o, "ThingTypeDefinition");
}

/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and
 * 			time, a value indicating whether the thing type is deprecated, and a date and time when time was
 * 			deprecated.</p>
 */
export interface ThingTypeMetadata {
  __type?: "ThingTypeMetadata";
  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be
   * 			associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;
}

export namespace ThingTypeMetadata {
  export const filterSensitiveLog = (obj: ThingTypeMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingTypeMetadata =>
    __isa(o, "ThingTypeMetadata");
}

/**
 * <p>The ThingTypeProperties contains information about the thing type including: a thing type description,
 * 			and a list of searchable thing attribute names.</p>
 */
export interface ThingTypeProperties {
  __type?: "ThingTypeProperties";
  /**
   * <p>A list of searchable thing attribute names.</p>
   */
  searchableAttributes?: string[];

  /**
   * <p>The description of the thing type.</p>
   */
  thingTypeDescription?: string;
}

export namespace ThingTypeProperties {
  export const filterSensitiveLog = (obj: ThingTypeProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThingTypeProperties =>
    __isa(o, "ThingTypeProperties");
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

/**
 * <p>Specifies the amount of time each device has to finish its execution of the job.  A timer
 *            is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job
 *            execution status is not set to another terminal state before the timer expires, it will
 *            be automatically set to <code>TIMED_OUT</code>.</p>
 */
export interface TimeoutConfig {
  __type?: "TimeoutConfig";
  /**
   * <p>Specifies the amount of time, in minutes, this device has to finish execution of this job.
   *            The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The
   *            in progress timer can't be updated and will apply to all job executions for the job. Whenever a job
   *            execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail
   *            and switch to the terminal <code>TIMED_OUT</code> status.</p>
   */
  inProgressTimeoutInMinutes?: number;
}

export namespace TimeoutConfig {
  export const filterSensitiveLog = (obj: TimeoutConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeoutConfig => __isa(o, "TimeoutConfig");
}

/**
 * <p>Specifies the TLS context to use for the test authorizer request.</p>
 */
export interface TlsContext {
  __type?: "TlsContext";
  /**
   * <p>The value of the <code>serverName</code> key in a TLS authorization request.</p>
   */
  serverName?: string;
}

export namespace TlsContext {
  export const filterSensitiveLog = (obj: TlsContext): any => ({
    ...obj
  });
  export const isa = (o: any): o is TlsContext => __isa(o, "TlsContext");
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRule {
  __type?: "TopicRule";
  /**
   * <p>The actions associated with the rule.</p>
   */
  actions?: Action[];

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The action to perform when an error occurs.</p>
   */
  errorAction?: Action;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The SQL statement used to query the topic. When using a SQL query with multiple
   *          lines, be sure to escape the newline characters.</p>
   */
  sql?: string;
}

export namespace TopicRule {
  export const filterSensitiveLog = (obj: TopicRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRule => __isa(o, "TopicRule");
}

/**
 * <p>A topic rule destination.</p>
 */
export interface TopicRuleDestination {
  __type?: "TopicRuleDestination";
  /**
   * <p>The topic rule destination URL.</p>
   */
  arn?: string;

  /**
   * <p>Properties of the HTTP URL.</p>
   */
  httpUrlProperties?: HttpUrlDestinationProperties;

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
   * <p>Additional details or reason why the topic rule destination is in the current
   *          status.</p>
   */
  statusReason?: string;
}

export namespace TopicRuleDestination {
  export const filterSensitiveLog = (obj: TopicRuleDestination): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRuleDestination =>
    __isa(o, "TopicRuleDestination");
}

/**
 * <p>Configuration of the topic rule destination.</p>
 */
export interface TopicRuleDestinationConfiguration {
  __type?: "TopicRuleDestinationConfiguration";
  /**
   * <p>Configuration of the HTTP URL.</p>
   */
  httpUrlConfiguration?: HttpUrlDestinationConfiguration;
}

export namespace TopicRuleDestinationConfiguration {
  export const filterSensitiveLog = (
    obj: TopicRuleDestinationConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRuleDestinationConfiguration =>
    __isa(o, "TopicRuleDestinationConfiguration");
}

export enum TopicRuleDestinationStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR",
  IN_PROGRESS = "IN_PROGRESS"
}

/**
 * <p>Information about the topic rule destination.</p>
 */
export interface TopicRuleDestinationSummary {
  __type?: "TopicRuleDestinationSummary";
  /**
   * <p>The topic rule destination ARN.</p>
   */
  arn?: string;

  /**
   * <p>Information about the HTTP URL.</p>
   */
  httpUrlSummary?: HttpUrlDestinationSummary;

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
   * <p>The reason the topic rule destination is in the current status.</p>
   */
  statusReason?: string;
}

export namespace TopicRuleDestinationSummary {
  export const filterSensitiveLog = (
    obj: TopicRuleDestinationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRuleDestinationSummary =>
    __isa(o, "TopicRuleDestinationSummary");
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRuleListItem {
  __type?: "TopicRuleListItem";
  /**
   * <p>The date and time the rule was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The rule ARN.</p>
   */
  ruleArn?: string;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The name of the rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The pattern for the topic names that apply.</p>
   */
  topicPattern?: string;
}

export namespace TopicRuleListItem {
  export const filterSensitiveLog = (obj: TopicRuleListItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRuleListItem =>
    __isa(o, "TopicRuleListItem");
}

/**
 * <p>Describes a rule.</p>
 */
export interface TopicRulePayload {
  __type?: "TopicRulePayload";
  /**
   * <p>The actions associated with the rule.</p>
   */
  actions: Action[] | undefined;

  /**
   * <p>The version of the SQL rules engine to use when evaluating the rule.</p>
   */
  awsIotSqlVersion?: string;

  /**
   * <p>The description of the rule.</p>
   */
  description?: string;

  /**
   * <p>The action to take when an error occurs.</p>
   */
  errorAction?: Action;

  /**
   * <p>Specifies whether the rule is disabled.</p>
   */
  ruleDisabled?: boolean;

  /**
   * <p>The SQL statement used to query the topic. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html#aws-iot-sql-reference">AWS IoT SQL
   *             Reference</a> in the <i>AWS IoT Developer Guide</i>.</p>
   */
  sql: string | undefined;
}

export namespace TopicRulePayload {
  export const filterSensitiveLog = (obj: TopicRulePayload): any => ({
    ...obj
  });
  export const isa = (o: any): o is TopicRulePayload =>
    __isa(o, "TopicRulePayload");
}

/**
 * <p>You can't revert the certificate transfer because the transfer is already
 *          complete.</p>
 */
export interface TransferAlreadyCompletedException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransferAlreadyCompletedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferAlreadyCompletedException {
  export const filterSensitiveLog = (
    obj: TransferAlreadyCompletedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransferAlreadyCompletedException =>
    __isa(o, "TransferAlreadyCompletedException");
}

/**
 * <p>The input for the TransferCertificate operation.</p>
 */
export interface TransferCertificateRequest {
  __type?: "TransferCertificateRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TransferCertificateRequest =>
    __isa(o, "TransferCertificateRequest");
}

/**
 * <p>The output from the TransferCertificate operation.</p>
 */
export interface TransferCertificateResponse {
  __type?: "TransferCertificateResponse";
  /**
   * <p>The ARN of the certificate.</p>
   */
  transferredCertificateArn?: string;
}

export namespace TransferCertificateResponse {
  export const filterSensitiveLog = (
    obj: TransferCertificateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransferCertificateResponse =>
    __isa(o, "TransferCertificateResponse");
}

/**
 * <p>You can't transfer the certificate because authorization policies are still
 *          attached.</p>
 */
export interface TransferConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "TransferConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace TransferConflictException {
  export const filterSensitiveLog = (obj: TransferConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransferConflictException =>
    __isa(o, "TransferConflictException");
}

/**
 * <p>Data used to transfer a certificate to an AWS account.</p>
 */
export interface TransferData {
  __type?: "TransferData";
  /**
   * <p>The date the transfer was accepted.</p>
   */
  acceptDate?: Date;

  /**
   * <p>The date the transfer was rejected.</p>
   */
  rejectDate?: Date;

  /**
   * <p>The reason why the transfer was rejected.</p>
   */
  rejectReason?: string;

  /**
   * <p>The date the transfer took place.</p>
   */
  transferDate?: Date;

  /**
   * <p>The transfer message.</p>
   */
  transferMessage?: string;
}

export namespace TransferData {
  export const filterSensitiveLog = (obj: TransferData): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransferData => __isa(o, "TransferData");
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedException =>
    __isa(o, "UnauthorizedException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateAccountAuditConfigurationRequest {
  __type?: "UpdateAccountAuditConfigurationRequest";
  /**
   * <p>Specifies which audit checks are enabled and disabled for this account. Use
   *             <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those
   *             that are currently enabled.</p>
   *           <p>Some data collection might start immediately when certain checks are enabled.
   *             When a check is disabled, any data collected so far in relation to the check is deleted.</p>
   *           <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check
   *             from the scheduled audit or delete the scheduled audit itself.</p>
   *           <p>On the first call to <code>UpdateAccountAuditConfiguration</code>,
   *             this parameter is required and must specify at least one enabled check.</p>
   */
  auditCheckConfigurations?: { [key: string]: AuditCheckConfiguration };

  /**
   * <p>Information about the targets to which audit notifications are sent.</p>
   */
  auditNotificationTargetConfigurations?: {
    [key: string]: AuditNotificationTarget;
  };

  /**
   * <p>The ARN of the role that grants permission to AWS IoT to access information
   *             about your devices, policies, certificates and other items as required when
   *             performing an audit.</p>
   */
  roleArn?: string;
}

export namespace UpdateAccountAuditConfigurationRequest {
  export const filterSensitiveLog = (
    obj: UpdateAccountAuditConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAccountAuditConfigurationRequest =>
    __isa(o, "UpdateAccountAuditConfigurationRequest");
}

export interface UpdateAccountAuditConfigurationResponse {
  __type?: "UpdateAccountAuditConfigurationResponse";
}

export namespace UpdateAccountAuditConfigurationResponse {
  export const filterSensitiveLog = (
    obj: UpdateAccountAuditConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAccountAuditConfigurationResponse =>
    __isa(o, "UpdateAccountAuditConfigurationResponse");
}

export interface UpdateAuthorizerRequest {
  __type?: "UpdateAuthorizerRequest";
  /**
   * <p>The ARN of the authorizer's Lambda function.</p>
   */
  authorizerFunctionArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName: string | undefined;

  /**
   * <p>The status of the update authorizer request.</p>
   */
  status?: AuthorizerStatus | string;

  /**
   * <p>The key used to extract the token from the HTTP headers. </p>
   */
  tokenKeyName?: string;

  /**
   * <p>The public keys used to verify the token signature.</p>
   */
  tokenSigningPublicKeys?: { [key: string]: string };
}

export namespace UpdateAuthorizerRequest {
  export const filterSensitiveLog = (obj: UpdateAuthorizerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAuthorizerRequest =>
    __isa(o, "UpdateAuthorizerRequest");
}

export interface UpdateAuthorizerResponse {
  __type?: "UpdateAuthorizerResponse";
  /**
   * <p>The authorizer ARN.</p>
   */
  authorizerArn?: string;

  /**
   * <p>The authorizer name.</p>
   */
  authorizerName?: string;
}

export namespace UpdateAuthorizerResponse {
  export const filterSensitiveLog = (obj: UpdateAuthorizerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAuthorizerResponse =>
    __isa(o, "UpdateAuthorizerResponse");
}

export interface UpdateBillingGroupRequest {
  __type?: "UpdateBillingGroupRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateBillingGroupRequest =>
    __isa(o, "UpdateBillingGroupRequest");
}

export interface UpdateBillingGroupResponse {
  __type?: "UpdateBillingGroupResponse";
  /**
   * <p>The latest version of the billing group.</p>
   */
  version?: number;
}

export namespace UpdateBillingGroupResponse {
  export const filterSensitiveLog = (obj: UpdateBillingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBillingGroupResponse =>
    __isa(o, "UpdateBillingGroupResponse");
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the CA certificate to inactive.</p>
 */
export interface UpdateCACertificateParams {
  __type?: "UpdateCACertificateParams";
  /**
   * <p>The action that you want to apply to the CA cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: CACertificateUpdateAction | string | undefined;
}

export namespace UpdateCACertificateParams {
  export const filterSensitiveLog = (obj: UpdateCACertificateParams): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCACertificateParams =>
    __isa(o, "UpdateCACertificateParams");
}

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateRequest {
  __type?: "UpdateCACertificateRequest";
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or
   *          "DISABLE".</p>
   */
  newAutoRegistrationStatus?: AutoRegistrationStatus | string;

  /**
   * <p>The updated status of the CA certificate.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus?: CACertificateStatus | string;

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
    ...obj
  });
  export const isa = (o: any): o is UpdateCACertificateRequest =>
    __isa(o, "UpdateCACertificateRequest");
}

/**
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateRequest {
  __type?: "UpdateCertificateRequest";
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the
   *          certificate ID.)</p>
   */
  certificateId: string | undefined;

  /**
   * <p>The new status.</p>
   *          <p>
   *             <b>Note:</b> Setting the status to PENDING_TRANSFER will result
   *          in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It
   *          is not intended for developer use.</p>
   *          <p>
   *             <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and
   *          should not be used.</p>
   */
  newStatus: CertificateStatus | string | undefined;
}

export namespace UpdateCertificateRequest {
  export const filterSensitiveLog = (obj: UpdateCertificateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCertificateRequest =>
    __isa(o, "UpdateCertificateRequest");
}

/**
 * <p>Parameters to define a mitigation action that changes the state of the device certificate to inactive.</p>
 */
export interface UpdateDeviceCertificateParams {
  __type?: "UpdateDeviceCertificateParams";
  /**
   * <p>The action that you want to apply to the device cerrtificate. The only supported value is <code>DEACTIVATE</code>.</p>
   */
  action: DeviceCertificateUpdateAction | string | undefined;
}

export namespace UpdateDeviceCertificateParams {
  export const filterSensitiveLog = (
    obj: UpdateDeviceCertificateParams
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDeviceCertificateParams =>
    __isa(o, "UpdateDeviceCertificateParams");
}

export interface UpdateDomainConfigurationRequest {
  __type?: "UpdateDomainConfigurationRequest";
  /**
   * <p>An object that specifies the authorization service for a domain.</p>
   */
  authorizerConfig?: AuthorizerConfig;

  /**
   * <p>The name of the domain configuration to be updated.</p>
   */
  domainConfigurationName: string | undefined;

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
  export const filterSensitiveLog = (
    obj: UpdateDomainConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainConfigurationRequest =>
    __isa(o, "UpdateDomainConfigurationRequest");
}

export interface UpdateDomainConfigurationResponse {
  __type?: "UpdateDomainConfigurationResponse";
  /**
   * <p>The ARN of the domain configuration that was updated.</p>
   */
  domainConfigurationArn?: string;

  /**
   * <p>The name of the domain configuration that was updated.</p>
   */
  domainConfigurationName?: string;
}

export namespace UpdateDomainConfigurationResponse {
  export const filterSensitiveLog = (
    obj: UpdateDomainConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainConfigurationResponse =>
    __isa(o, "UpdateDomainConfigurationResponse");
}

export interface UpdateDynamicThingGroupRequest {
  __type?: "UpdateDynamicThingGroupRequest";
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

  /**
   * <p>The name of the dynamic thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The dynamic thing group properties to update.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;
}

export namespace UpdateDynamicThingGroupRequest {
  export const filterSensitiveLog = (
    obj: UpdateDynamicThingGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDynamicThingGroupRequest =>
    __isa(o, "UpdateDynamicThingGroupRequest");
}

export interface UpdateDynamicThingGroupResponse {
  __type?: "UpdateDynamicThingGroupResponse";
  /**
   * <p>The dynamic thing group version.</p>
   */
  version?: number;
}

export namespace UpdateDynamicThingGroupResponse {
  export const filterSensitiveLog = (
    obj: UpdateDynamicThingGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDynamicThingGroupResponse =>
    __isa(o, "UpdateDynamicThingGroupResponse");
}

export interface UpdateEventConfigurationsRequest {
  __type?: "UpdateEventConfigurationsRequest";
  /**
   * <p>The new event configuration values.</p>
   */
  eventConfigurations?: { [key: string]: Configuration };
}

export namespace UpdateEventConfigurationsRequest {
  export const filterSensitiveLog = (
    obj: UpdateEventConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEventConfigurationsRequest =>
    __isa(o, "UpdateEventConfigurationsRequest");
}

export interface UpdateEventConfigurationsResponse {
  __type?: "UpdateEventConfigurationsResponse";
}

export namespace UpdateEventConfigurationsResponse {
  export const filterSensitiveLog = (
    obj: UpdateEventConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEventConfigurationsResponse =>
    __isa(o, "UpdateEventConfigurationsResponse");
}

export interface UpdateIndexingConfigurationRequest {
  __type?: "UpdateIndexingConfigurationRequest";
  /**
   * <p>Thing group indexing configuration.</p>
   */
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;

  /**
   * <p>Thing indexing configuration.</p>
   */
  thingIndexingConfiguration?: ThingIndexingConfiguration;
}

export namespace UpdateIndexingConfigurationRequest {
  export const filterSensitiveLog = (
    obj: UpdateIndexingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIndexingConfigurationRequest =>
    __isa(o, "UpdateIndexingConfigurationRequest");
}

export interface UpdateIndexingConfigurationResponse {
  __type?: "UpdateIndexingConfigurationResponse";
}

export namespace UpdateIndexingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: UpdateIndexingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateIndexingConfigurationResponse =>
    __isa(o, "UpdateIndexingConfigurationResponse");
}

export interface UpdateJobRequest {
  __type?: "UpdateJobRequest";
  /**
   * <p>Allows you to create criteria to abort a job.</p>
   */
  abortConfig?: AbortConfig;

  /**
   * <p>A short text description of the job.</p>
   */
  description?: string;

  /**
   * <p>Allows you to create a staged rollout of the job.</p>
   */
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

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
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobRequest =>
    __isa(o, "UpdateJobRequest");
}

export interface UpdateMitigationActionRequest {
  __type?: "UpdateMitigationActionRequest";
  /**
   * <p>The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.</p>
   */
  actionName: string | undefined;

  /**
   * <p>Defines the type of action and the parameters for that action.</p>
   */
  actionParams?: MitigationActionParams;

  /**
   * <p>The ARN of the IAM role that is used to apply the mitigation action.</p>
   */
  roleArn?: string;
}

export namespace UpdateMitigationActionRequest {
  export const filterSensitiveLog = (
    obj: UpdateMitigationActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMitigationActionRequest =>
    __isa(o, "UpdateMitigationActionRequest");
}

export interface UpdateMitigationActionResponse {
  __type?: "UpdateMitigationActionResponse";
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
  export const filterSensitiveLog = (
    obj: UpdateMitigationActionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMitigationActionResponse =>
    __isa(o, "UpdateMitigationActionResponse");
}

export interface UpdateProvisioningTemplateRequest {
  __type?: "UpdateProvisioningTemplateRequest";
  /**
   * <p>The ID of the default provisioning template version.</p>
   */
  defaultVersionId?: number;

  /**
   * <p>The description of the fleet provisioning template.</p>
   */
  description?: string;

  /**
   * <p>True to enable the fleet provisioning template, otherwise false.</p>
   */
  enabled?: boolean;

  /**
   * <p>The ARN of the role associated with the provisioning template. This IoT role grants
   *          permission to provision a device.</p>
   */
  provisioningRoleArn?: string;

  /**
   * <p>The name of the fleet provisioning template.</p>
   */
  templateName: string | undefined;
}

export namespace UpdateProvisioningTemplateRequest {
  export const filterSensitiveLog = (
    obj: UpdateProvisioningTemplateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProvisioningTemplateRequest =>
    __isa(o, "UpdateProvisioningTemplateRequest");
}

export interface UpdateProvisioningTemplateResponse {
  __type?: "UpdateProvisioningTemplateResponse";
}

export namespace UpdateProvisioningTemplateResponse {
  export const filterSensitiveLog = (
    obj: UpdateProvisioningTemplateResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateProvisioningTemplateResponse =>
    __isa(o, "UpdateProvisioningTemplateResponse");
}

export interface UpdateRoleAliasRequest {
  __type?: "UpdateRoleAliasRequest";
  /**
   * <p>The number of seconds the credential will be valid.</p>
   */
  credentialDurationSeconds?: number;

  /**
   * <p>The role alias to update.</p>
   */
  roleAlias: string | undefined;

  /**
   * <p>The role ARN.</p>
   */
  roleArn?: string;
}

export namespace UpdateRoleAliasRequest {
  export const filterSensitiveLog = (obj: UpdateRoleAliasRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleAliasRequest =>
    __isa(o, "UpdateRoleAliasRequest");
}

export interface UpdateRoleAliasResponse {
  __type?: "UpdateRoleAliasResponse";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateRoleAliasResponse =>
    __isa(o, "UpdateRoleAliasResponse");
}

export interface UpdateScheduledAuditRequest {
  __type?: "UpdateScheduledAuditRequest";
  /**
   * <p>The day of the month on which the scheduled audit takes place. Can be "1"
   *             through "31" or "LAST". This field is required if the "frequency" parameter is
   *             set to "MONTHLY". If days 29-31 are specified, and the month does not have that many
   *             days, the audit takes place on the "LAST" day of the month.</p>
   */
  dayOfMonth?: string;

  /**
   * <p>The day of the week on which the scheduled audit takes place. Can be one of
   *             "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the
   *             "frequency" parameter is set to "WEEKLY" or "BIWEEKLY".</p>
   */
  dayOfWeek?: DayOfWeek | string;

  /**
   * <p>How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY",
   *             "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by
   *             the system.</p>
   */
  frequency?: AuditFrequency | string;

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
}

export namespace UpdateScheduledAuditRequest {
  export const filterSensitiveLog = (
    obj: UpdateScheduledAuditRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateScheduledAuditRequest =>
    __isa(o, "UpdateScheduledAuditRequest");
}

export interface UpdateScheduledAuditResponse {
  __type?: "UpdateScheduledAuditResponse";
  /**
   * <p>The ARN of the scheduled audit.</p>
   */
  scheduledAuditArn?: string;
}

export namespace UpdateScheduledAuditResponse {
  export const filterSensitiveLog = (
    obj: UpdateScheduledAuditResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateScheduledAuditResponse =>
    __isa(o, "UpdateScheduledAuditResponse");
}

export interface UpdateSecurityProfileRequest {
  __type?: "UpdateSecurityProfileRequest";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>If true, delete all <code>additionalMetricsToRetain</code> defined for this
   *         security profile. If any <code>additionalMetricsToRetain</code> are defined in the current
   *         invocation, an exception occurs.</p>
   */
  deleteAdditionalMetricsToRetain?: boolean;

  /**
   * <p>If true, delete all <code>alertTargets</code> defined for this security profile.
   *         If any <code>alertTargets</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteAlertTargets?: boolean;

  /**
   * <p>If true, delete all <code>behaviors</code> defined for this security profile.
   *         If any <code>behaviors</code> are defined in the current invocation, an exception occurs.</p>
   */
  deleteBehaviors?: boolean;

  /**
   * <p>The expected version of the security profile. A new version is generated whenever
   *         the security profile is updated. If you specify a value that is different from the actual
   *         version, a <code>VersionConflictException</code> is thrown.</p>
   */
  expectedVersion?: number;

  /**
   * <p>A description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name of the security profile you want to update.</p>
   */
  securityProfileName: string | undefined;
}

export namespace UpdateSecurityProfileRequest {
  export const filterSensitiveLog = (
    obj: UpdateSecurityProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSecurityProfileRequest =>
    __isa(o, "UpdateSecurityProfileRequest");
}

export interface UpdateSecurityProfileResponse {
  __type?: "UpdateSecurityProfileResponse";
  /**
   * <p>A list of metrics whose data is retained (stored). By default, data is retained
   *         for any metric used in the security profile's <code>behaviors</code>, but it is also retained for
   *         any metric specified here.</p>
   */
  additionalMetricsToRetain?: string[];

  /**
   * <p>Where the alerts are sent. (Alerts are always sent to the console.)</p>
   */
  alertTargets?: { [key: string]: AlertTarget };

  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors?: Behavior[];

  /**
   * <p>The time the security profile was created.</p>
   */
  creationDate?: Date;

  /**
   * <p>The time the security profile was last modified.</p>
   */
  lastModifiedDate?: Date;

  /**
   * <p>The ARN of the security profile that was updated.</p>
   */
  securityProfileArn?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  securityProfileDescription?: string;

  /**
   * <p>The name of the security profile that was updated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The updated version of the security profile.</p>
   */
  version?: number;
}

export namespace UpdateSecurityProfileResponse {
  export const filterSensitiveLog = (
    obj: UpdateSecurityProfileResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSecurityProfileResponse =>
    __isa(o, "UpdateSecurityProfileResponse");
}

export interface UpdateStreamRequest {
  __type?: "UpdateStreamRequest";
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

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;
}

export namespace UpdateStreamRequest {
  export const filterSensitiveLog = (obj: UpdateStreamRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStreamRequest =>
    __isa(o, "UpdateStreamRequest");
}

export interface UpdateStreamResponse {
  __type?: "UpdateStreamResponse";
  /**
   * <p>A description of the stream.</p>
   */
  description?: string;

  /**
   * <p>The stream ARN.</p>
   */
  streamArn?: string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The stream version.</p>
   */
  streamVersion?: number;
}

export namespace UpdateStreamResponse {
  export const filterSensitiveLog = (obj: UpdateStreamResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStreamResponse =>
    __isa(o, "UpdateStreamResponse");
}

export interface UpdateThingGroupRequest {
  __type?: "UpdateThingGroupRequest";
  /**
   * <p>The expected version of the thing group. If this does not match the version of the
   * 			thing group being updated, the update will fail.</p>
   */
  expectedVersion?: number;

  /**
   * <p>The thing group to update.</p>
   */
  thingGroupName: string | undefined;

  /**
   * <p>The thing group properties.</p>
   */
  thingGroupProperties: ThingGroupProperties | undefined;
}

export namespace UpdateThingGroupRequest {
  export const filterSensitiveLog = (obj: UpdateThingGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingGroupRequest =>
    __isa(o, "UpdateThingGroupRequest");
}

export interface UpdateThingGroupResponse {
  __type?: "UpdateThingGroupResponse";
  /**
   * <p>The version of the updated thing group.</p>
   */
  version?: number;
}

export namespace UpdateThingGroupResponse {
  export const filterSensitiveLog = (obj: UpdateThingGroupResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingGroupResponse =>
    __isa(o, "UpdateThingGroupResponse");
}

export interface UpdateThingGroupsForThingRequest {
  __type?: "UpdateThingGroupsForThingRequest";
  /**
   * <p>Override dynamic thing groups with static thing groups when 10-group limit is
   * 			reached. If a thing belongs to 10 thing groups, and one or more of those groups are
   * 			dynamic thing groups, adding a thing to a static group removes the thing from the last
   * 			dynamic group.</p>
   */
  overrideDynamicGroups?: boolean;

  /**
   * <p>The groups to which the thing will be added.</p>
   */
  thingGroupsToAdd?: string[];

  /**
   * <p>The groups from which the thing will be removed.</p>
   */
  thingGroupsToRemove?: string[];

  /**
   * <p>The thing whose group memberships will be updated.</p>
   */
  thingName?: string;
}

export namespace UpdateThingGroupsForThingRequest {
  export const filterSensitiveLog = (
    obj: UpdateThingGroupsForThingRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingGroupsForThingRequest =>
    __isa(o, "UpdateThingGroupsForThingRequest");
}

export interface UpdateThingGroupsForThingResponse {
  __type?: "UpdateThingGroupsForThingResponse";
}

export namespace UpdateThingGroupsForThingResponse {
  export const filterSensitiveLog = (
    obj: UpdateThingGroupsForThingResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingGroupsForThingResponse =>
    __isa(o, "UpdateThingGroupsForThingResponse");
}

/**
 * <p>The input for the UpdateThing operation.</p>
 */
export interface UpdateThingRequest {
  __type?: "UpdateThingRequest";
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

  /**
   * <p>The name of the thing to update.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;
}

export namespace UpdateThingRequest {
  export const filterSensitiveLog = (obj: UpdateThingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingRequest =>
    __isa(o, "UpdateThingRequest");
}

/**
 * <p>The output from the UpdateThing operation.</p>
 */
export interface UpdateThingResponse {
  __type?: "UpdateThingResponse";
}

export namespace UpdateThingResponse {
  export const filterSensitiveLog = (obj: UpdateThingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateThingResponse =>
    __isa(o, "UpdateThingResponse");
}

export interface UpdateTopicRuleDestinationRequest {
  __type?: "UpdateTopicRuleDestinationRequest";
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
  export const filterSensitiveLog = (
    obj: UpdateTopicRuleDestinationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTopicRuleDestinationRequest =>
    __isa(o, "UpdateTopicRuleDestinationRequest");
}

export interface UpdateTopicRuleDestinationResponse {
  __type?: "UpdateTopicRuleDestinationResponse";
}

export namespace UpdateTopicRuleDestinationResponse {
  export const filterSensitiveLog = (
    obj: UpdateTopicRuleDestinationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTopicRuleDestinationResponse =>
    __isa(o, "UpdateTopicRuleDestinationResponse");
}

export interface ValidateSecurityProfileBehaviorsRequest {
  __type?: "ValidateSecurityProfileBehaviorsRequest";
  /**
   * <p>Specifies the behaviors that, when violated by a device (thing), cause an alert.</p>
   */
  behaviors: Behavior[] | undefined;
}

export namespace ValidateSecurityProfileBehaviorsRequest {
  export const filterSensitiveLog = (
    obj: ValidateSecurityProfileBehaviorsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidateSecurityProfileBehaviorsRequest =>
    __isa(o, "ValidateSecurityProfileBehaviorsRequest");
}

export interface ValidateSecurityProfileBehaviorsResponse {
  __type?: "ValidateSecurityProfileBehaviorsResponse";
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
  export const filterSensitiveLog = (
    obj: ValidateSecurityProfileBehaviorsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidateSecurityProfileBehaviorsResponse =>
    __isa(o, "ValidateSecurityProfileBehaviorsResponse");
}

/**
 * <p>Information about an error found in a behavior specification.</p>
 */
export interface ValidationError {
  __type?: "ValidationError";
  /**
   * <p>The description of an error found in the behaviors.</p>
   */
  errorMessage?: string;
}

export namespace ValidationError {
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationError =>
    __isa(o, "ValidationError");
}

/**
 * <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 */
export interface VersionConflictException
  extends __SmithyException,
    $MetadataBearer {
  name: "VersionConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionConflictException {
  export const filterSensitiveLog = (obj: VersionConflictException): any => ({
    ...obj
  });
  export const isa = (o: any): o is VersionConflictException =>
    __isa(o, "VersionConflictException");
}

/**
 * <p>The number of policy versions exceeds the limit.</p>
 */
export interface VersionsLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "VersionsLimitExceededException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace VersionsLimitExceededException {
  export const filterSensitiveLog = (
    obj: VersionsLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is VersionsLimitExceededException =>
    __isa(o, "VersionsLimitExceededException");
}

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface ViolationEvent {
  __type?: "ViolationEvent";
  /**
   * <p>The behavior which was violated.</p>
   */
  behavior?: Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: MetricValue;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?: ViolationEventType | string;

  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;
}

export namespace ViolationEvent {
  export const filterSensitiveLog = (obj: ViolationEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is ViolationEvent =>
    __isa(o, "ViolationEvent");
}

export enum ViolationEventType {
  ALARM_CLEARED = "alarm-cleared",
  ALARM_INVALIDATED = "alarm-invalidated",
  IN_ALARM = "in-alarm"
}
