// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ResiliencehubServiceException as __BaseException } from "./ResiliencehubServiceException";

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

export enum ResourceMappingType {
  APP_REGISTRY_APP = "AppRegistryApp",
  CFN_STACK = "CfnStack",
  RESOURCE = "Resource",
  RESOURCE_GROUP = "ResourceGroup",
  TERRAFORM = "Terraform",
}

export enum PhysicalIdentifierType {
  ARN = "Arn",
  NATIVE = "Native",
}

/**
 * <p>Defines a physical resource identifier.</p>
 */
export interface PhysicalResourceId {
  /**
   * <p>The identifier of the physical resource.</p>
   */
  identifier: string | undefined;

  /**
   * <p>Specifies the type of physical resource identifier.</p>
   *          <dl>
   *             <dt>Arn</dt>
   *             <dd>
   *                <p>The resource identifier is an Amazon Resource Name (ARN) .</p>
   *             </dd>
   *             <dt>Native</dt>
   *             <dd>
   *                <p>The resource identifier is a Resilience Hub-native identifier.</p>
   *             </dd>
   *          </dl>
   */
  type: PhysicalIdentifierType | string | undefined;

  /**
   * <p>The Amazon Web Services Region that the physical resource is located in.</p>
   */
  awsRegion?: string;

  /**
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;
}

/**
 * <p>Defines a resource mapping.</p>
 */
export interface ResourceMapping {
  /**
   * <p>The name of the resource this resource is mapped to.</p>
   */
  resourceName?: string;

  /**
   * <p>The name of the CloudFormation stack this resource is mapped to.</p>
   */
  logicalStackName?: string;

  /**
   * <p>The name of the application this resource is mapped to.</p>
   */
  appRegistryAppName?: string;

  /**
   * <p>The name of the resource group this resource is mapped to.</p>
   */
  resourceGroupName?: string;

  /**
   * <p>Specifies the type of resource mapping.</p>
   *          <dl>
   *             <dt>AppRegistryApp</dt>
   *             <dd>
   *                <p>The resource is mapped to another application. The name of the application is
   *             contained in the <code>appRegistryAppName</code> property.</p>
   *             </dd>
   *             <dt>CfnStack</dt>
   *             <dd>
   *                <p>The resource is mapped to a CloudFormation stack. The name of the CloudFormation stack is contained in
   *             the <code>logicalStackName</code> property.</p>
   *             </dd>
   *             <dt>Resource</dt>
   *             <dd>
   *                <p>The resource is mapped to another resource. The name of the resource is contained in
   *             the <code>resourceName</code> property.</p>
   *             </dd>
   *             <dt>ResourceGroup</dt>
   *             <dd>
   *                <p>The resource is mapped to a resource group. The name of the resource group is
   *             contained in the <code>resourceGroupName</code> property.</p>
   *             </dd>
   *          </dl>
   */
  mappingType: ResourceMappingType | string | undefined;

  /**
   * <p>The identifier of this resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>
   *       The short name of the Terraform source.
   *     </p>
   */
  terraformSourceName?: string;
}

export interface AddDraftAppVersionResourceMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p> Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;
}

export interface AddDraftAppVersionResourceMappingsResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * <p>Occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that the exception applies to.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that the exception applies to.</p>
   */
  resourceType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>This exception occurs when there is an internal failure in the AWS Resilience Hub
 *       service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that the exception applies to.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that the exception applies to.</p>
   */
  resourceType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The number of seconds to wait before retrying the operation.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Indicates that a request was not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p>Defines a recommendation.</p>
 */
export interface RecommendationItem {
  /**
   * <p>The resource identifier.</p>
   */
  resourceId?: string;

  /**
   * <p>The target account identifier.</p>
   */
  targetAccountId?: string;

  /**
   * <p>The target region.</p>
   */
  targetRegion?: string;

  /**
   * <p>Specifies if the recommendation has already been implemented.</p>
   */
  alreadyImplemented?: boolean;
}

export enum AlarmType {
  CANARY = "Canary",
  COMPOSITE = "Composite",
  EVENT = "Event",
  LOGS = "Logs",
  METRIC = "Metric",
}

/**
 * <p>Defines a recommendation for a CloudWatch alarm.</p>
 */
export interface AlarmRecommendation {
  /**
   * <p>The identifier of the alarm recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * <p>The reference identifier of the alarm recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * <p>The name of the alarm recommendation.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   */
  description?: string;

  /**
   * <p>The type of alarm recommendation.</p>
   */
  type: AlarmType | string | undefined;

  /**
   * <p>The application component for the CloudWatch alarm recommendation.</p>
   */
  appComponentName?: string;

  /**
   * <p>The list of CloudWatch alarm recommendations.</p>
   */
  items?: RecommendationItem[];

  /**
   * <p>The prerequisite for the alarm recommendation.</p>
   */
  prerequisite?: string;
}

export enum AppAssessmentScheduleType {
  DAILY = "Daily",
  DISABLED = "Disabled",
}

export enum AppComplianceStatusType {
  CHANGES_DETECTED = "ChangesDetected",
  NOT_ASSESSED = "NotAssessed",
  POLICY_BREACHED = "PolicyBreached",
  POLICY_MET = "PolicyMet",
}

export enum AppStatusType {
  ACTIVE = "Active",
  DELETING = "Deleting",
}

/**
 * <p>Defines a Resilience Hub application.</p>
 */
export interface App {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The name for the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn?: string;

  /**
   * <p>The timestamp for when the app was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The status of the application.</p>
   */
  status?: AppStatusType | string;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: AppComplianceStatusType | string;

  /**
   * <p>The timestamp for the most recent compliance evaluation.</p>
   */
  lastAppComplianceEvaluationTime?: Date;

  /**
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;

  /**
   * <p>The timestamp for the most recent resiliency score evaluation.</p>
   */
  lastResiliencyScoreEvaluationTime?: Date;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

export enum AssessmentStatus {
  FAILED = "Failed",
  INPROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
}

export enum DisruptionType {
  AZ = "AZ",
  HARDWARE = "Hardware",
  REGION = "Region",
  SOFTWARE = "Software",
}

export enum ComplianceStatus {
  POLICY_BREACHED = "PolicyBreached",
  POLICY_MET = "PolicyMet",
}

/**
 * <p>Defines the compliance against the resiliency policy for a disruption.</p>
 */
export interface DisruptionCompliance {
  /**
   * <p>The Recovery Time Objective (RTO) that is achievable, in seconds</p>
   */
  achievableRtoInSecs?: number;

  /**
   * <p>The current RTO, in seconds.</p>
   */
  currentRtoInSecs?: number;

  /**
   * <p>The RTO reference identifier.</p>
   */
  rtoReferenceId?: string;

  /**
   * <p>The RTO description.</p>
   */
  rtoDescription?: string;

  /**
   * <p>The current RPO, in seconds.</p>
   */
  currentRpoInSecs?: number;

  /**
   * <p>The RPO reference identifier.</p>
   */
  rpoReferenceId?: string;

  /**
   * <p>The RPO description.</p>
   */
  rpoDescription?: string;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus: ComplianceStatus | string | undefined;

  /**
   * <p>The Recovery Point Objective (RPO) that is achievable, in seconds.</p>
   */
  achievableRpoInSecs?: number;

  /**
   * <p>The disruption compliance message.</p>
   */
  message?: string;
}

export enum CostFrequency {
  DAILY = "Daily",
  HOURLY = "Hourly",
  MONTHLY = "Monthly",
  YEARLY = "Yearly",
}

/**
 * <p>Defines a cost object.</p>
 */
export interface Cost {
  /**
   * <p>The cost amount.</p>
   */
  amount: number | undefined;

  /**
   * <p>The cost currency, for example <code>USD</code>.</p>
   */
  currency: string | undefined;

  /**
   * <p>The cost frequency.</p>
   */
  frequency: CostFrequency | string | undefined;
}

export enum AssessmentInvoker {
  SYSTEM = "System",
  USER = "User",
}

export enum DataLocationConstraint {
  ANY_LOCATION = "AnyLocation",
  SAME_CONTINENT = "SameContinent",
  SAME_COUNTRY = "SameCountry",
}

export enum EstimatedCostTier {
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
  L4 = "L4",
}

/**
 * <p>Defines a failure policy.</p>
 */
export interface FailurePolicy {
  /**
   * <p>The Recovery Time Objective (RTO), in seconds.</p>
   */
  rtoInSecs: number | undefined;

  /**
   * <p>The Recovery Point Objective (RPO), in seconds.</p>
   */
  rpoInSecs: number | undefined;
}

export enum ResiliencyPolicyTier {
  CORE_SERVICES = "CoreServices",
  CRITICAL = "Critical",
  IMPORTANT = "Important",
  MISSION_CRITICAL = "MissionCritical",
  NON_CRITICAL = "NonCritical",
}

/**
 * <p>Defines a resiliency policy.</p>
 */
export interface ResiliencyPolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn?: string;

  /**
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier?: ResiliencyPolicyTier | string;

  /**
   * <p>Specifies the estimated cost tier of the resiliency policy.</p>
   */
  estimatedCostTier?: EstimatedCostTier | string;

  /**
   * <p>The resiliency policy.</p>
   */
  policy?: Record<string, FailurePolicy>;

  /**
   * <p>The timestamp for when the resiliency policy was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The overall resiliency score, returned as an object that includes the disruption score and
 *       outage score.</p>
 */
export interface ResiliencyScore {
  /**
   * <p>The outage score for a valid key.</p>
   */
  score: number | undefined;

  /**
   * <p>The disruption score for a valid key.</p>
   */
  disruptionScore: Record<string, number> | undefined;
}

/**
 * <p>
 *       Defines application resource errors.
 *     </p>
 */
export interface ResourceError {
  /**
   * <p>
   *       This is the identifier of the resource.
   *     </p>
   */
  logicalResourceId?: string;

  /**
   * <p>
   *       This is the identifier of the physical resource.
   *     </p>
   */
  physicalResourceId?: string;

  /**
   * <p>
   *       This is the error message.
   *     </p>
   */
  reason?: string;
}

/**
 * <p>
 *       A list of errors retrieving an application's resources.
 *     </p>
 */
export interface ResourceErrorsDetails {
  /**
   * <p>
   *       A list of errors retrieving an application's resources.
   *     </p>
   */
  resourceErrors?: ResourceError[];

  /**
   * <p>
   *       This indicates if there are more errors not listed in the resourceErrors list.
   *     </p>
   */
  hasMoreErrors?: boolean;
}

/**
 * <p>Defines an application assessment.</p>
 */
export interface AppAssessment {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   */
  appVersion?: string;

  /**
   * <p>The entity that invoked the assessment.</p>
   */
  invoker: AssessmentInvoker | string | undefined;

  /**
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: ResiliencyScore;

  /**
   * <p>The application compliance against the resiliency policy.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * <p>The current status of the compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;

  /**
   * <p>The starting time for the action.</p>
   */
  startTime?: Date;

  /**
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * <p>Error or warning message from the assessment execution</p>
   */
  message?: string;

  /**
   * <p>The name of the assessment.</p>
   */
  assessmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The resiliency policy.</p>
   */
  policy?: ResiliencyPolicy;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>
   *       A resource error object containing a list of errors retrieving an application's resources.
   *     </p>
   */
  resourceErrorsDetails?: ResourceErrorsDetails;
}

/**
 * <p>Defines an application assessment summary.</p>
 */
export interface AppAssessmentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   */
  appVersion?: string;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;

  /**
   * <p>The entity that invoked the assessment.</p>
   */
  invoker?: AssessmentInvoker | string;

  /**
   * <p>The starting time for the action.</p>
   */
  startTime?: Date;

  /**
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * <p>The message from the assessment run.</p>
   */
  message?: string;

  /**
   * <p>The name of the assessment.</p>
   */
  assessmentName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;
}

/**
 * <p>Defines an application component.</p>
 */
export interface AppComponent {
  /**
   * <p>The name of the application component.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of application component.</p>
   */
  type: string | undefined;
}

/**
 * <p>Defines the compliance of an application component against the resiliency policy.</p>
 */
export interface AppComponentCompliance {
  /**
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * <p>The name of the application component.</p>
   */
  appComponentName?: string;

  /**
   * <p>The compliance of the application component against the resiliency policy.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * <p>The compliance message.</p>
   */
  message?: string;

  /**
   * <p>The status of the action.</p>
   */
  status?: ComplianceStatus | string;

  /**
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: ResiliencyScore;
}

/**
 * <p>Defines an application summary.</p>
 */
export interface AppSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * <p>The timestamp for when the app was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: AppComplianceStatusType | string;

  /**
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;

  /**
   * <p>The status of the application.</p>
   */
  status?: AppStatusType | string;
}

/**
 * <p>The version of the application.</p>
 */
export interface AppVersionSummary {
  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

export interface CreateAppRequest {
  /**
   * <p>The name for the application.</p>
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn?: string;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

export interface CreateAppResponse {
  /**
   * <p>The created application returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

export enum TemplateFormat {
  CFN_JSON = "CfnJson",
  CFN_YAML = "CfnYaml",
}

export enum RenderRecommendationType {
  ALARM = "Alarm",
  SOP = "Sop",
  TEST = "Test",
}

export interface CreateRecommendationTemplateRequest {
  /**
   * <p>Identifiers for the recommendations used to create a recommendation template.</p>
   */
  recommendationIds?: string[];

  /**
   * <p>The format for the recommendation template.</p>
   *          <dl>
   *             <dt>CfnJson</dt>
   *             <dd>
   *                <p>The template is CloudFormation JSON.</p>
   *             </dd>
   *             <dt>CfnYaml</dt>
   *             <dd>
   *                <p>The template is CloudFormation YAML.</p>
   *             </dd>
   *          </dl>
   */
  format?: TemplateFormat | string;

  /**
   * <p>An array of strings that specify the recommendation template type or types.</p>
   *          <dl>
   *             <dt>Alarm</dt>
   *             <dd>
   *                <p>The template is an <a>AlarmRecommendation</a> template.</p>
   *             </dd>
   *             <dt>Sop</dt>
   *             <dd>
   *                <p>The template is a <a>SopRecommendation</a> template.</p>
   *             </dd>
   *             <dt>Test</dt>
   *             <dd>
   *                <p>The template is a <a>TestRecommendation</a> template.</p>
   *             </dd>
   *          </dl>
   */
  recommendationTypes?: (RenderRecommendationType | string)[];

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The name for the recommendation template.</p>
   */
  name: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The name of the Amazon S3 bucket that will contain the recommendation template.</p>
   */
  bucketName?: string;
}

export enum RecommendationTemplateStatus {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
}

/**
 * <p>The location of the Amazon S3 bucket.</p>
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   */
  prefix?: string;
}

/**
 * <p>Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action.</p>
 */
export interface RecommendationTemplate {
  /**
   * <p>The file location of the template.</p>
   */
  templatesLocation?: S3Location;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>Identifiers for the recommendations used in the recommendation template.</p>
   */
  recommendationIds?: string[];

  /**
   * <p>An array of strings that specify the recommendation template type or types.</p>
   *          <dl>
   *             <dt>Alarm</dt>
   *             <dd>
   *                <p>The template is an <a>AlarmRecommendation</a> template.</p>
   *             </dd>
   *             <dt>Sop</dt>
   *             <dd>
   *                <p>The template is a <a>SopRecommendation</a> template.</p>
   *             </dd>
   *             <dt>Test</dt>
   *             <dd>
   *                <p>The template is a <a>TestRecommendation</a> template.</p>
   *             </dd>
   *          </dl>
   */
  recommendationTypes: (RenderRecommendationType | string)[] | undefined;

  /**
   * <p>The format of the recommendation template.</p>
   *          <dl>
   *             <dt>CfnJson</dt>
   *             <dd>
   *                <p>The template is CloudFormation JSON.</p>
   *             </dd>
   *             <dt>CfnYaml</dt>
   *             <dd>
   *                <p>The template is CloudFormation YAML.</p>
   *             </dd>
   *          </dl>
   */
  format: TemplateFormat | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>The message for the recommendation template.</p>
   */
  message?: string;

  /**
   * <p>The status of the action.</p>
   */
  status: RecommendationTemplateStatus | string | undefined;

  /**
   * <p>The name for the recommendation template.</p>
   */
  name: string | undefined;

  /**
   * <p>The start time for the action.</p>
   */
  startTime?: Date;

  /**
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Indicates if replacements are needed.</p>
   */
  needsReplacements?: boolean;
}

export interface CreateRecommendationTemplateResponse {
  /**
   * <p>The newly created recommendation template, returned as an object. This object includes the
   *       template's name, format, status, tags, Amazon S3 bucket location, and more.</p>
   */
  recommendationTemplate?: RecommendationTemplate;
}

export interface CreateResiliencyPolicyRequest {
  /**
   * <p>The name of the policy</p>
   */
  policyName: string | undefined;

  /**
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier: ResiliencyPolicyTier | string | undefined;

  /**
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   */
  policy: Record<string, FailurePolicy> | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateResiliencyPolicyResponse {
  /**
   * <p>The type of resiliency policy that was created, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

export interface DeleteAppRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>A boolean option to force the deletion of a Resilience Hub application. </p>
   */
  forceDelete?: boolean;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

export interface DeleteAppResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;
}

export interface DeleteAppAssessmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

export interface DeleteAppAssessmentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;
}

export interface DeleteRecommendationTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

export interface DeleteRecommendationTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>The status of the action.</p>
   */
  status: RecommendationTemplateStatus | string | undefined;
}

export interface DeleteResiliencyPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

export interface DeleteResiliencyPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn: string | undefined;
}

export interface DescribeAppRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;
}

export interface DescribeAppResponse {
  /**
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

export interface DescribeAppAssessmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;
}

export interface DescribeAppAssessmentResponse {
  /**
   * <p>The assessment for an AWS Resilience Hub application, returned as an object. This object
   *       includes Amazon Resource Names (ARNs), compliance information, compliance status, cost,
   *       messages, resiliency scores, and more.</p>
   */
  assessment: AppAssessment | undefined;
}

export interface DescribeAppVersionResourcesResolutionStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;
}

export enum ResourceResolutionStatusType {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
}

export interface DescribeAppVersionResourcesResolutionStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * <p>The status of the action.</p>
   */
  status: ResourceResolutionStatusType | string | undefined;

  /**
   * <p>The returned error message for the request.</p>
   */
  errorMessage?: string;
}

export interface DescribeAppVersionTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

export interface DescribeAppVersionTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The body of the template.</p>
   */
  appTemplateBody: string | undefined;
}

export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;
}

export enum ResourceImportStatusType {
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  PENDING = "Pending",
  SUCCESS = "Success",
}

export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The status of the action.</p>
   */
  status: ResourceImportStatusType | string | undefined;

  /**
   * <p>The timestamp for when the status last changed.</p>
   */
  statusChangeTime: Date | undefined;

  /**
   * <p>The returned error message for the request.</p>
   */
  errorMessage?: string;
}

export interface DescribeResiliencyPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn: string | undefined;
}

export interface DescribeResiliencyPolicyResponse {
  /**
   * <p>Information about the specific resiliency policy, returned as an object. This object
   *       includes creation time, data location constraints, its name, description, tags, the recovery
   *       time objective (RTO) and recovery point objective (RPO) in seconds, and more.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * <p>
 *       The Terraform s3 state file you need to import.
 *     </p>
 */
export interface TerraformSource {
  /**
   * <p>
   *       The Terraform s3 state file you need to import.
   *     </p>
   */
  s3StateFileUrl: string | undefined;
}

export interface ImportResourcesToDraftAppVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the resources that you want to import.</p>
   */
  sourceArns?: string[];

  /**
   * <p>
   *       A list of terraform file s3 URLs you need to import.
   *     </p>
   */
  terraformSources?: TerraformSource[];
}

export interface ImportResourcesToDraftAppVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the resources that you imported.</p>
   */
  sourceArns?: string[];

  /**
   * <p>The status of the action.</p>
   */
  status: ResourceImportStatusType | string | undefined;

  /**
   * <p>
   *       A list of terraform file s3 URLs you need to import.
   *     </p>
   */
  terraformSources?: TerraformSource[];
}

export interface ListAlarmRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListAlarmRecommendationsResponse {
  /**
   * <p>The alarm recommendations for an AWS Resilience Hub application, returned as an object. This
   *       object includes application component names, descriptions, information about whether a
   *       recommendation has already been implemented or not, prerequisites, and more.</p>
   */
  alarmRecommendations: AlarmRecommendation[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppAssessmentsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>The name for the assessment.</p>
   */
  assessmentName?: string;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus?: (AssessmentStatus | string)[];

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * <p>Specifies the entity that invoked a specific assessment, either a <code>User</code> or the
   *         <code>System</code>.</p>
   */
  invoker?: AssessmentInvoker | string;

  /**
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListAppAssessmentsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The summaries for the specified assessments, returned as an object. This object includes
   *       application versions, associated Amazon Resource Numbers (ARNs), cost, messages, resiliency
   *       scores, and more.</p>
   */
  assessmentSummaries: AppAssessmentSummary[] | undefined;
}

export interface ListAppComponentCompliancesRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;
}

export interface ListAppComponentCompliancesResponse {
  /**
   * <p>The compliances for an AWS Resilience Hub application component, returned as an object. This
   *       object contains component names, compliances, costs, resiliency scores, outage scores, and
   *       more.</p>
   */
  componentCompliances: AppComponentCompliance[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppComponentRecommendationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export enum HaArchitecture {
  BACKUP_AND_RESTORE = "BackupAndRestore",
  MULTI_SITE = "MultiSite",
  NO_RECOVERY_PLAN = "NoRecoveryPlan",
  PILOT_LIGHT = "PilotLight",
  WARM_STANDBY = "WarmStandby",
}

export enum ConfigRecommendationOptimizationType {
  BEST_ATTAINABLE = "BestAttainable",
  BEST_AZ_RECOVERY = "BestAZRecovery",
  BEST_REGION_RECOVERY = "BestRegionRecovery",
  LEAST_CHANGE = "LeastChange",
  LEAST_COST = "LeastCost",
  LEAST_ERRORS = "LeastErrors",
}

/**
 * <p>Defines a disruption compliance recommendation.</p>
 */
export interface RecommendationDisruptionCompliance {
  /**
   * <p>The expected compliance status after applying the recommended configuration change.</p>
   */
  expectedComplianceStatus: ComplianceStatus | string | undefined;

  /**
   * <p>The expected RTO after applying the recommended configuration change.</p>
   */
  expectedRtoInSecs?: number;

  /**
   * <p>The expected Recovery Time Objective (RTO) description after applying the recommended
   *       configuration change.</p>
   */
  expectedRtoDescription?: string;

  /**
   * <p>The expected RPO after applying the recommended configuration change.</p>
   */
  expectedRpoInSecs?: number;

  /**
   * <p>The expected Recovery Point Objective (RPO) description after applying the recommended
   *       configuration change.</p>
   */
  expectedRpoDescription?: string;
}

/**
 * <p>Defines a configuration recommendation.</p>
 */
export interface ConfigRecommendation {
  /**
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * <p>The application component name.</p>
   */
  appComponentName?: string;

  /**
   * <p>The current compliance against the resiliency policy before applying the configuration
   *       change.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * <p>The expected compliance against the resiliency policy after applying the configuration
   *       change.</p>
   */
  recommendationCompliance?: Record<string, RecommendationDisruptionCompliance>;

  /**
   * <p>The type of optimization.</p>
   */
  optimizationType: ConfigRecommendationOptimizationType | string | undefined;

  /**
   * <p>The name of the recommendation configuration.</p>
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * <p>List of the suggested configuration changes.</p>
   */
  suggestedChanges?: string[];

  /**
   * <p>The architecture type.</p>
   */
  haArchitecture?: HaArchitecture | string;

  /**
   * <p>The reference identifier for the recommendation configuration.</p>
   */
  referenceId: string | undefined;
}

export enum RecommendationComplianceStatus {
  BREACHED_CAN_MEET = "BreachedCanMeet",
  BREACHED_UNATTAINABLE = "BreachedUnattainable",
  MET_CAN_IMPROVE = "MetCanImprove",
}

/**
 * <p>Defines recommendations for a Resilience Hub application component, returned as an object. This
 *       object contains component names, configuration recommendations, and recommendation
 *       statuses.</p>
 */
export interface ComponentRecommendation {
  /**
   * <p>The name of the application component.</p>
   */
  appComponentName: string | undefined;

  /**
   * <p>The recommendation status.</p>
   */
  recommendationStatus: RecommendationComplianceStatus | string | undefined;

  /**
   * <p>The list of recommendations.</p>
   */
  configRecommendations: ConfigRecommendation[] | undefined;
}

export interface ListAppComponentRecommendationsResponse {
  /**
   * <p>The recommendations for an Resilience Hub application component, returned as an object. This
   *       object contains component names, configuration recommendations, and recommendation
   *       statuses.</p>
   */
  componentRecommendations: ComponentRecommendation[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * <p>The name for the one of the listed applications.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;
}

export interface ListAppsResponse {
  /**
   * <p>Summaries for the Resilience Hub application.</p>
   */
  appSummaries: AppSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppVersionResourceMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListAppVersionResourceMappingsResponse {
  /**
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppVersionResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * <p>Defines a logical resource identifier.</p>
 */
export interface LogicalResourceId {
  /**
   * <p>The identifier of the resource.</p>
   */
  identifier: string | undefined;

  /**
   * <p>The name of the CloudFormation stack this resource belongs to.</p>
   */
  logicalStackName?: string;

  /**
   * <p>The name of the resource group that this resource belongs to.</p>
   */
  resourceGroupName?: string;

  /**
   * <p>
   *       The name of the Terraform S3 state file this resource belongs to.
   *     </p>
   */
  terraformSourceName?: string;
}

/**
 * <p>Defines a physical resource. A physical resource is a resource that exists in your
 *       account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native
 *       identifier. </p>
 */
export interface PhysicalResource {
  /**
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>The type of resource.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The application components that belong to this resource.</p>
   */
  appComponents?: AppComponent[];
}

export interface ListAppVersionResourcesResponse {
  /**
   * <p>The physical resources in the application version.</p>
   */
  physicalResources: PhysicalResource[] | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListAppVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListAppVersionsResponse {
  /**
   * <p>The version of the application.</p>
   */
  appVersions: AppVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListRecommendationTemplatesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;

  /**
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   */
  reverseOrder?: boolean;

  /**
   * <p>The status of the action.</p>
   */
  status?: (RecommendationTemplateStatus | string)[];

  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn?: string;

  /**
   * <p>The name for one of the listed recommendation templates.</p>
   */
  name?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListRecommendationTemplatesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The recommendation templates for the Resilience Hub applications.</p>
   */
  recommendationTemplates?: RecommendationTemplate[];
}

export interface ListResiliencyPoliciesRequest {
  /**
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListResiliencyPoliciesResponse {
  /**
   * <p>The resiliency policies for the Resilience Hub applications.</p>
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListSopRecommendationsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;
}

export enum SopServiceType {
  SSM = "SSM",
}

/**
 * <p>Defines a standard operating procedure (SOP) recommendation.</p>
 */
export interface SopRecommendation {
  /**
   * <p>The service type.</p>
   */
  serviceType: SopServiceType | string | undefined;

  /**
   * <p>The application component name.</p>
   */
  appComponentName?: string;

  /**
   * <p>The description of the SOP recommendation.</p>
   */
  description?: string;

  /**
   * <p>Identifier for the SOP recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * <p>The name of the SOP recommendation.</p>
   */
  name?: string;

  /**
   * <p>The recommendation items.</p>
   */
  items?: RecommendationItem[];

  /**
   * <p>The reference identifier for the SOP recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * <p>The prerequisite for the SOP recommendation.</p>
   */
  prerequisite?: string;
}

export interface ListSopRecommendationsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The standard operating procedure (SOP) recommendations for the Resilience Hub
   *       applications.</p>
   */
  sopRecommendations: SopRecommendation[] | undefined;
}

export interface ListSuggestedResiliencyPoliciesRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

export interface ListSuggestedResiliencyPoliciesResponse {
  /**
   * <p>The suggested resiliency policies for the Resilience Hub applications.</p>
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub
   *       application.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

export interface ListTestRecommendationsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  assessmentArn: string | undefined;
}

export enum TestRisk {
  HIGH = "High",
  MEDIUM = "Medium",
  SMALL = "Small",
}

export enum TestType {
  AZ = "AZ",
  HARDWARE = "Hardware",
  REGION = "Region",
  SOFTWARE = "Software",
}

/**
 * <p>Defines a test recommendation.</p>
 */
export interface TestRecommendation {
  /**
   * <p>Identifier for the test recommendation.</p>
   */
  recommendationId?: string;

  /**
   * <p>The reference identifier for the test recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * <p>The name of the application component.</p>
   */
  appComponentName?: string;

  /**
   * <p>The name of the test recommendation.</p>
   */
  name?: string;

  /**
   * <p>The intent of the test recommendation.</p>
   */
  intent?: string;

  /**
   * <p>The level of risk for this test recommendation.</p>
   */
  risk?: TestRisk | string;

  /**
   * <p>The type of test recommendation.</p>
   */
  type?: TestType | string;

  /**
   * <p>The description for the test recommendation.</p>
   */
  description?: string;

  /**
   * <p>The test recommendation items.</p>
   */
  items?: RecommendationItem[];

  /**
   * <p>The prerequisite of the test recommendation.</p>
   */
  prerequisite?: string;

  /**
   * <p>
   *       A list of recommended alarms that are used in the test and must be exported before or with the test.
   *     </p>
   */
  dependsOnAlarms?: string[];
}

export interface ListTestRecommendationsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The test recommendations for the Resilience Hub application.</p>
   */
  testRecommendations: TestRecommendation[] | undefined;
}

export interface ListUnsupportedAppVersionResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * <p>Defines a resource that is not supported by Resilience Hub.</p>
 */
export interface UnsupportedResource {
  /**
   * <p>The logical resource identifier for the unsupported resource.</p>
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * <p>The physical resource identifier for the unsupported resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>The type of resource.</p>
   */
  resourceType: string | undefined;
}

export interface ListUnsupportedAppVersionResourcesResponse {
  /**
   * <p>The unsupported resources for the application.</p>
   */
  unsupportedResources: UnsupportedResource[] | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface PublishAppVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;
}

export interface PublishAppVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

export interface PutDraftAppVersionTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>A JSON string that contains the body of the app template.</p>
   */
  appTemplateBody: string | undefined;
}

export interface PutDraftAppVersionTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

export interface RemoveDraftAppVersionResourceMappingsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The names of the resources to remove from the resource mappings.</p>
   */
  resourceNames?: string[];

  /**
   * <p>The names of the CloudFormation stacks to remove from the resource mappings.</p>
   */
  logicalStackNames?: string[];

  /**
   * <p>The names of the registered applications to remove from the resource mappings.</p>
   */
  appRegistryAppNames?: string[];

  /**
   * <p>The names of the resource groups to remove from the resource mappings.</p>
   */
  resourceGroupNames?: string[];

  /**
   * <p>
   *
   *     </p>
   */
  terraformSourceNames?: string[];
}

export interface RemoveDraftAppVersionResourceMappingsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

export interface ResolveAppVersionResourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

export interface ResolveAppVersionResourcesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * <p>The status of the action.</p>
   */
  status: ResourceResolutionStatusType | string | undefined;
}

export interface StartAppAssessmentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * <p>The name for the assessment.</p>
   */
  assessmentName: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

export interface StartAppAssessmentResponse {
  /**
   * <p>The assessment created.</p>
   */
  assessment: AppAssessment | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to assign to the resource. Each tag consists of a key/value pair.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAppRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  appArn: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn?: string;

  /**
   * <p>Specifies if the resiliency policy ARN should be cleared.</p>
   */
  clearResiliencyPolicyArn?: boolean;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

export interface UpdateAppResponse {
  /**
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

export interface UpdateResiliencyPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i>.</p>
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier?: ResiliencyPolicyTier | string;

  /**
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   */
  policy?: Record<string, FailurePolicy>;
}

export interface UpdateResiliencyPolicyResponse {
  /**
   * <p>The type of resiliency policy that was updated, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @internal
 */
export const PhysicalResourceIdFilterSensitiveLog = (obj: PhysicalResourceId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceMappingFilterSensitiveLog = (obj: ResourceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddDraftAppVersionResourceMappingsRequestFilterSensitiveLog = (
  obj: AddDraftAppVersionResourceMappingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddDraftAppVersionResourceMappingsResponseFilterSensitiveLog = (
  obj: AddDraftAppVersionResourceMappingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationItemFilterSensitiveLog = (obj: RecommendationItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmRecommendationFilterSensitiveLog = (obj: AlarmRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppFilterSensitiveLog = (obj: App): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisruptionComplianceFilterSensitiveLog = (obj: DisruptionCompliance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CostFilterSensitiveLog = (obj: Cost): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailurePolicyFilterSensitiveLog = (obj: FailurePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResiliencyPolicyFilterSensitiveLog = (obj: ResiliencyPolicy): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResiliencyScoreFilterSensitiveLog = (obj: ResiliencyScore): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceErrorFilterSensitiveLog = (obj: ResourceError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceErrorsDetailsFilterSensitiveLog = (obj: ResourceErrorsDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppAssessmentFilterSensitiveLog = (obj: AppAssessment): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppAssessmentSummaryFilterSensitiveLog = (obj: AppAssessmentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppComponentFilterSensitiveLog = (obj: AppComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppComponentComplianceFilterSensitiveLog = (obj: AppComponentCompliance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppSummaryFilterSensitiveLog = (obj: AppSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppVersionSummaryFilterSensitiveLog = (obj: AppVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppRequestFilterSensitiveLog = (obj: CreateAppRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAppResponseFilterSensitiveLog = (obj: CreateAppResponse): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const CreateRecommendationTemplateRequestFilterSensitiveLog = (
  obj: CreateRecommendationTemplateRequest
): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationTemplateFilterSensitiveLog = (obj: RecommendationTemplate): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRecommendationTemplateResponseFilterSensitiveLog = (
  obj: CreateRecommendationTemplateResponse
): any => ({
  ...obj,
  ...(obj.recommendationTemplate && {
    recommendationTemplate: RecommendationTemplateFilterSensitiveLog(obj.recommendationTemplate),
  }),
});

/**
 * @internal
 */
export const CreateResiliencyPolicyRequestFilterSensitiveLog = (obj: CreateResiliencyPolicyRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateResiliencyPolicyResponseFilterSensitiveLog = (obj: CreateResiliencyPolicyResponse): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
});

/**
 * @internal
 */
export const DeleteAppRequestFilterSensitiveLog = (obj: DeleteAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppResponseFilterSensitiveLog = (obj: DeleteAppResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppAssessmentRequestFilterSensitiveLog = (obj: DeleteAppAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppAssessmentResponseFilterSensitiveLog = (obj: DeleteAppAssessmentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecommendationTemplateRequestFilterSensitiveLog = (
  obj: DeleteRecommendationTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecommendationTemplateResponseFilterSensitiveLog = (
  obj: DeleteRecommendationTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResiliencyPolicyRequestFilterSensitiveLog = (obj: DeleteResiliencyPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResiliencyPolicyResponseFilterSensitiveLog = (obj: DeleteResiliencyPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppRequestFilterSensitiveLog = (obj: DescribeAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppResponseFilterSensitiveLog = (obj: DescribeAppResponse): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const DescribeAppAssessmentRequestFilterSensitiveLog = (obj: DescribeAppAssessmentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppAssessmentResponseFilterSensitiveLog = (obj: DescribeAppAssessmentResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AppAssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const DescribeAppVersionResourcesResolutionStatusRequestFilterSensitiveLog = (
  obj: DescribeAppVersionResourcesResolutionStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppVersionResourcesResolutionStatusResponseFilterSensitiveLog = (
  obj: DescribeAppVersionResourcesResolutionStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppVersionTemplateRequestFilterSensitiveLog = (obj: DescribeAppVersionTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppVersionTemplateResponseFilterSensitiveLog = (obj: DescribeAppVersionTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDraftAppVersionResourcesImportStatusRequestFilterSensitiveLog = (
  obj: DescribeDraftAppVersionResourcesImportStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDraftAppVersionResourcesImportStatusResponseFilterSensitiveLog = (
  obj: DescribeDraftAppVersionResourcesImportStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResiliencyPolicyRequestFilterSensitiveLog = (obj: DescribeResiliencyPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResiliencyPolicyResponseFilterSensitiveLog = (obj: DescribeResiliencyPolicyResponse): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
});

/**
 * @internal
 */
export const TerraformSourceFilterSensitiveLog = (obj: TerraformSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportResourcesToDraftAppVersionRequestFilterSensitiveLog = (
  obj: ImportResourcesToDraftAppVersionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportResourcesToDraftAppVersionResponseFilterSensitiveLog = (
  obj: ImportResourcesToDraftAppVersionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlarmRecommendationsRequestFilterSensitiveLog = (obj: ListAlarmRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAlarmRecommendationsResponseFilterSensitiveLog = (obj: ListAlarmRecommendationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppAssessmentsRequestFilterSensitiveLog = (obj: ListAppAssessmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppAssessmentsResponseFilterSensitiveLog = (obj: ListAppAssessmentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppComponentCompliancesRequestFilterSensitiveLog = (obj: ListAppComponentCompliancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppComponentCompliancesResponseFilterSensitiveLog = (
  obj: ListAppComponentCompliancesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppComponentRecommendationsRequestFilterSensitiveLog = (
  obj: ListAppComponentRecommendationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationDisruptionComplianceFilterSensitiveLog = (obj: RecommendationDisruptionCompliance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigRecommendationFilterSensitiveLog = (obj: ConfigRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentRecommendationFilterSensitiveLog = (obj: ComponentRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppComponentRecommendationsResponseFilterSensitiveLog = (
  obj: ListAppComponentRecommendationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsRequestFilterSensitiveLog = (obj: ListAppsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppsResponseFilterSensitiveLog = (obj: ListAppsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionResourceMappingsRequestFilterSensitiveLog = (
  obj: ListAppVersionResourceMappingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionResourceMappingsResponseFilterSensitiveLog = (
  obj: ListAppVersionResourceMappingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionResourcesRequestFilterSensitiveLog = (obj: ListAppVersionResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogicalResourceIdFilterSensitiveLog = (obj: LogicalResourceId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhysicalResourceFilterSensitiveLog = (obj: PhysicalResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionResourcesResponseFilterSensitiveLog = (obj: ListAppVersionResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionsRequestFilterSensitiveLog = (obj: ListAppVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppVersionsResponseFilterSensitiveLog = (obj: ListAppVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendationTemplatesRequestFilterSensitiveLog = (obj: ListRecommendationTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendationTemplatesResponseFilterSensitiveLog = (
  obj: ListRecommendationTemplatesResponse
): any => ({
  ...obj,
  ...(obj.recommendationTemplates && {
    recommendationTemplates: obj.recommendationTemplates.map((item) => RecommendationTemplateFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListResiliencyPoliciesRequestFilterSensitiveLog = (obj: ListResiliencyPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResiliencyPoliciesResponseFilterSensitiveLog = (obj: ListResiliencyPoliciesResponse): any => ({
  ...obj,
  ...(obj.resiliencyPolicies && {
    resiliencyPolicies: obj.resiliencyPolicies.map((item) => ResiliencyPolicyFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListSopRecommendationsRequestFilterSensitiveLog = (obj: ListSopRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SopRecommendationFilterSensitiveLog = (obj: SopRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSopRecommendationsResponseFilterSensitiveLog = (obj: ListSopRecommendationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuggestedResiliencyPoliciesRequestFilterSensitiveLog = (
  obj: ListSuggestedResiliencyPoliciesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuggestedResiliencyPoliciesResponseFilterSensitiveLog = (
  obj: ListSuggestedResiliencyPoliciesResponse
): any => ({
  ...obj,
  ...(obj.resiliencyPolicies && {
    resiliencyPolicies: obj.resiliencyPolicies.map((item) => ResiliencyPolicyFilterSensitiveLog(item)),
  }),
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
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTestRecommendationsRequestFilterSensitiveLog = (obj: ListTestRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestRecommendationFilterSensitiveLog = (obj: TestRecommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTestRecommendationsResponseFilterSensitiveLog = (obj: ListTestRecommendationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUnsupportedAppVersionResourcesRequestFilterSensitiveLog = (
  obj: ListUnsupportedAppVersionResourcesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsupportedResourceFilterSensitiveLog = (obj: UnsupportedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUnsupportedAppVersionResourcesResponseFilterSensitiveLog = (
  obj: ListUnsupportedAppVersionResourcesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishAppVersionRequestFilterSensitiveLog = (obj: PublishAppVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishAppVersionResponseFilterSensitiveLog = (obj: PublishAppVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDraftAppVersionTemplateRequestFilterSensitiveLog = (obj: PutDraftAppVersionTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDraftAppVersionTemplateResponseFilterSensitiveLog = (obj: PutDraftAppVersionTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveDraftAppVersionResourceMappingsRequestFilterSensitiveLog = (
  obj: RemoveDraftAppVersionResourceMappingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveDraftAppVersionResourceMappingsResponseFilterSensitiveLog = (
  obj: RemoveDraftAppVersionResourceMappingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolveAppVersionResourcesRequestFilterSensitiveLog = (obj: ResolveAppVersionResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResolveAppVersionResourcesResponseFilterSensitiveLog = (obj: ResolveAppVersionResourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartAppAssessmentRequestFilterSensitiveLog = (obj: StartAppAssessmentRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartAppAssessmentResponseFilterSensitiveLog = (obj: StartAppAssessmentResponse): any => ({
  ...obj,
  ...(obj.assessment && { assessment: AppAssessmentFilterSensitiveLog(obj.assessment) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
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
export const UpdateAppRequestFilterSensitiveLog = (obj: UpdateAppRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppResponseFilterSensitiveLog = (obj: UpdateAppResponse): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
});

/**
 * @internal
 */
export const UpdateResiliencyPolicyRequestFilterSensitiveLog = (obj: UpdateResiliencyPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResiliencyPolicyResponseFilterSensitiveLog = (obj: UpdateResiliencyPolicyResponse): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
});
