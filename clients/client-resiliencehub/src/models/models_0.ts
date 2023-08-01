// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ResiliencehubServiceException as __BaseException } from "./ResiliencehubServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ResourceMappingType = {
  APP_REGISTRY_APP: "AppRegistryApp",
  CFN_STACK: "CfnStack",
  EKS: "EKS",
  RESOURCE: "Resource",
  RESOURCE_GROUP: "ResourceGroup",
  TERRAFORM: "Terraform",
} as const;

/**
 * @public
 */
export type ResourceMappingType = (typeof ResourceMappingType)[keyof typeof ResourceMappingType];

/**
 * @public
 * @enum
 */
export const PhysicalIdentifierType = {
  ARN: "Arn",
  NATIVE: "Native",
} as const;

/**
 * @public
 */
export type PhysicalIdentifierType = (typeof PhysicalIdentifierType)[keyof typeof PhysicalIdentifierType];

/**
 * @public
 * <p>Defines a physical resource identifier.</p>
 */
export interface PhysicalResourceId {
  /**
   * @public
   * <p>The identifier of the physical resource.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>Specifies the type of physical resource identifier.</p>
   *          <dl>
   *             <dt>Arn</dt>
   *             <dd>
   *                <p>The resource identifier is an Amazon Resource Name (ARN) .</p>
   *             </dd>
   *             <dt>Native</dt>
   *             <dd>
   *                <p>The resource identifier is an Resilience Hub-native identifier.</p>
   *             </dd>
   *          </dl>
   */
  type: PhysicalIdentifierType | string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region that the physical resource is located in.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;
}

/**
 * @public
 * <p>Defines a resource mapping.</p>
 */
export interface ResourceMapping {
  /**
   * @public
   * <p>The name of the resource this resource is mapped to.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The name of the CloudFormation stack this resource is mapped to.</p>
   */
  logicalStackName?: string;

  /**
   * @public
   * <p>The name of the application this resource is mapped to.</p>
   */
  appRegistryAppName?: string;

  /**
   * @public
   * <p>The name of the resource group this resource is mapped to.</p>
   */
  resourceGroupName?: string;

  /**
   * @public
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
   *                <p>The resource is mapped to Resource Groups. The name of the resource group is
   *             contained in the <code>resourceGroupName</code> property.</p>
   *             </dd>
   *          </dl>
   */
  mappingType: ResourceMappingType | string | undefined;

  /**
   * @public
   * <p>The identifier of this resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * @public
   * <p>
   *       The short name of the Terraform source.
   *     </p>
   */
  terraformSourceName?: string;

  /**
   * @public
   * <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   */
  eksSourceName?: string;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * @public
 * <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that the exception applies to.</p>
   */
  resourceId?: string;

  /**
   * @public
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
 * @public
 * <p>This exception occurs when there is an internal failure in the Resilience Hub
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
 * @public
 * <p>This exception occurs when the specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier of the resource that the exception applies to.</p>
   */
  resourceId?: string;

  /**
   * @public
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
 * @public
 * <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>This exception occurs when a request is not valid.</p>
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
 * @public
 * <p>Defines a recommendation.</p>
 */
export interface RecommendationItem {
  /**
   * @public
   * <p>The resource identifier.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The target account identifier.</p>
   */
  targetAccountId?: string;

  /**
   * @public
   * <p>The target region.</p>
   */
  targetRegion?: string;

  /**
   * @public
   * <p>Specifies if the recommendation has already been implemented.</p>
   */
  alreadyImplemented?: boolean;
}

/**
 * @public
 * @enum
 */
export const AlarmType = {
  CANARY: "Canary",
  COMPOSITE: "Composite",
  EVENT: "Event",
  LOGS: "Logs",
  METRIC: "Metric",
} as const;

/**
 * @public
 */
export type AlarmType = (typeof AlarmType)[keyof typeof AlarmType];

/**
 * @public
 * <p>Defines a recommendation for a CloudWatch alarm.</p>
 */
export interface AlarmRecommendation {
  /**
   * @public
   * <p>The identifier of the alarm recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * @public
   * <p>The reference identifier of the alarm recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * @public
   * <p>The name of the alarm recommendation.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the recommendation.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of alarm recommendation.</p>
   */
  type: AlarmType | string | undefined;

  /**
   * @public
   * <p>The Application Component for the CloudWatch alarm recommendation.</p>
   */
  appComponentName?: string;

  /**
   * @public
   * <p>The list of CloudWatch alarm recommendations.</p>
   */
  items?: RecommendationItem[];

  /**
   * @public
   * <p>The prerequisite for the alarm recommendation.</p>
   */
  prerequisite?: string;
}

/**
 * @public
 * @enum
 */
export const AppAssessmentScheduleType = {
  DAILY: "Daily",
  DISABLED: "Disabled",
} as const;

/**
 * @public
 */
export type AppAssessmentScheduleType = (typeof AppAssessmentScheduleType)[keyof typeof AppAssessmentScheduleType];

/**
 * @public
 * @enum
 */
export const AppComplianceStatusType = {
  CHANGES_DETECTED: "ChangesDetected",
  NOT_ASSESSED: "NotAssessed",
  POLICY_BREACHED: "PolicyBreached",
  POLICY_MET: "PolicyMet",
} as const;

/**
 * @public
 */
export type AppComplianceStatusType = (typeof AppComplianceStatusType)[keyof typeof AppComplianceStatusType];

/**
 * @public
 * @enum
 */
export const AppStatusType = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;

/**
 * @public
 */
export type AppStatusType = (typeof AppStatusType)[keyof typeof AppStatusType];

/**
 * @public
 * <p>Defines an Resilience Hub application.</p>
 */
export interface App {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The name for the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn?: string;

  /**
   * @public
   * <p>The timestamp for when the app was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  status?: AppStatusType | string;

  /**
   * @public
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: AppComplianceStatusType | string;

  /**
   * @public
   * <p>The timestamp for the most recent compliance evaluation.</p>
   */
  lastAppComplianceEvaluationTime?: Date;

  /**
   * @public
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;

  /**
   * @public
   * <p>The timestamp for the most recent resiliency score evaluation.</p>
   */
  lastResiliencyScoreEvaluationTime?: Date;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

/**
 * @public
 * @enum
 */
export const AssessmentStatus = {
  FAILED: "Failed",
  INPROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type AssessmentStatus = (typeof AssessmentStatus)[keyof typeof AssessmentStatus];

/**
 * @public
 * @enum
 */
export const DisruptionType = {
  AZ: "AZ",
  HARDWARE: "Hardware",
  REGION: "Region",
  SOFTWARE: "Software",
} as const;

/**
 * @public
 */
export type DisruptionType = (typeof DisruptionType)[keyof typeof DisruptionType];

/**
 * @public
 * @enum
 */
export const ComplianceStatus = {
  POLICY_BREACHED: "PolicyBreached",
  POLICY_MET: "PolicyMet",
} as const;

/**
 * @public
 */
export type ComplianceStatus = (typeof ComplianceStatus)[keyof typeof ComplianceStatus];

/**
 * @public
 * <p>Defines the compliance against the resiliency policy for a disruption.</p>
 */
export interface DisruptionCompliance {
  /**
   * @public
   * <p>The Recovery Time Objective (RTO) that is achievable, in seconds</p>
   */
  achievableRtoInSecs?: number;

  /**
   * @public
   * <p>The current RTO, in seconds.</p>
   */
  currentRtoInSecs?: number;

  /**
   * @public
   * <p>The RTO reference identifier.</p>
   */
  rtoReferenceId?: string;

  /**
   * @public
   * <p>The RTO description.</p>
   */
  rtoDescription?: string;

  /**
   * @public
   * <p>The current RPO, in seconds.</p>
   */
  currentRpoInSecs?: number;

  /**
   * @public
   * <p>The RPO reference identifier.</p>
   */
  rpoReferenceId?: string;

  /**
   * @public
   * <p>The RPO description.</p>
   */
  rpoDescription?: string;

  /**
   * @public
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus: ComplianceStatus | string | undefined;

  /**
   * @public
   * <p>The Recovery Point Objective (RPO) that is achievable, in seconds.</p>
   */
  achievableRpoInSecs?: number;

  /**
   * @public
   * <p>The disruption compliance message.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const CostFrequency = {
  DAILY: "Daily",
  HOURLY: "Hourly",
  MONTHLY: "Monthly",
  YEARLY: "Yearly",
} as const;

/**
 * @public
 */
export type CostFrequency = (typeof CostFrequency)[keyof typeof CostFrequency];

/**
 * @public
 * <p>Defines a cost object.</p>
 */
export interface Cost {
  /**
   * @public
   * <p>The cost amount.</p>
   */
  amount: number | undefined;

  /**
   * @public
   * <p>The cost currency, for example <code>USD</code>.</p>
   */
  currency: string | undefined;

  /**
   * @public
   * <p>The cost frequency.</p>
   */
  frequency: CostFrequency | string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssessmentInvoker = {
  SYSTEM: "System",
  USER: "User",
} as const;

/**
 * @public
 */
export type AssessmentInvoker = (typeof AssessmentInvoker)[keyof typeof AssessmentInvoker];

/**
 * @public
 * @enum
 */
export const DataLocationConstraint = {
  ANY_LOCATION: "AnyLocation",
  SAME_CONTINENT: "SameContinent",
  SAME_COUNTRY: "SameCountry",
} as const;

/**
 * @public
 */
export type DataLocationConstraint = (typeof DataLocationConstraint)[keyof typeof DataLocationConstraint];

/**
 * @public
 * @enum
 */
export const EstimatedCostTier = {
  L1: "L1",
  L2: "L2",
  L3: "L3",
  L4: "L4",
} as const;

/**
 * @public
 */
export type EstimatedCostTier = (typeof EstimatedCostTier)[keyof typeof EstimatedCostTier];

/**
 * @public
 * <p>Defines a failure policy.</p>
 */
export interface FailurePolicy {
  /**
   * @public
   * <p>The Recovery Time Objective (RTO), in seconds.</p>
   */
  rtoInSecs: number | undefined;

  /**
   * @public
   * <p>The Recovery Point Objective (RPO), in seconds.</p>
   */
  rpoInSecs: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ResiliencyPolicyTier = {
  CORE_SERVICES: "CoreServices",
  CRITICAL: "Critical",
  IMPORTANT: "Important",
  MISSION_CRITICAL: "MissionCritical",
  NON_CRITICAL: "NonCritical",
} as const;

/**
 * @public
 */
export type ResiliencyPolicyTier = (typeof ResiliencyPolicyTier)[keyof typeof ResiliencyPolicyTier];

/**
 * @public
 * <p>Defines a resiliency policy.</p>
 */
export interface ResiliencyPolicy {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn?: string;

  /**
   * @public
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * @public
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * @public
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier?: ResiliencyPolicyTier | string;

  /**
   * @public
   * <p>Specifies the estimated cost tier of the resiliency policy.</p>
   */
  estimatedCostTier?: EstimatedCostTier | string;

  /**
   * @public
   * <p>The resiliency policy.</p>
   */
  policy?: Record<string, FailurePolicy>;

  /**
   * @public
   * <p>The timestamp for when the resiliency policy was created.</p>
   */
  creationTime?: Date;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The overall resiliency score, returned as an object that includes the disruption score and
 *       outage score.</p>
 */
export interface ResiliencyScore {
  /**
   * @public
   * <p>The outage score for a valid key.</p>
   */
  score: number | undefined;

  /**
   * @public
   * <p>The disruption score for a valid key.</p>
   */
  disruptionScore: Record<string, number> | undefined;
}

/**
 * @public
 * <p>
 *       Defines application resource errors.
 *     </p>
 */
export interface ResourceError {
  /**
   * @public
   * <p>
   *       This is the identifier of the resource.
   *     </p>
   */
  logicalResourceId?: string;

  /**
   * @public
   * <p>
   *       This is the identifier of the physical resource.
   *     </p>
   */
  physicalResourceId?: string;

  /**
   * @public
   * <p>
   *       This is the error message.
   *     </p>
   */
  reason?: string;
}

/**
 * @public
 * <p>
 *       A list of errors retrieving an application's resources.
 *     </p>
 */
export interface ResourceErrorsDetails {
  /**
   * @public
   * <p>
   *       A list of errors retrieving an application's resources.
   *     </p>
   */
  resourceErrors?: ResourceError[];

  /**
   * @public
   * <p>
   *       This indicates if there are more errors not listed in the resourceErrors list.
   *     </p>
   */
  hasMoreErrors?: boolean;
}

/**
 * @public
 * <p>Defines an application assessment.</p>
 */
export interface AppAssessment {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion?: string;

  /**
   * @public
   * <p>The entity that invoked the assessment.</p>
   */
  invoker: AssessmentInvoker | string | undefined;

  /**
   * @public
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * @public
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: ResiliencyScore;

  /**
   * @public
   * <p>The application compliance against the resiliency policy.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * @public
   * <p>The current status of the compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * @public
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;

  /**
   * @public
   * <p>The starting time for the action.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>Error or warning message from the assessment execution</p>
   */
  message?: string;

  /**
   * @public
   * <p>The name of the assessment.</p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The resiliency policy.</p>
   */
  policy?: ResiliencyPolicy;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>
   *       A resource error object containing a list of errors retrieving an application's resources.
   *     </p>
   */
  resourceErrorsDetails?: ResourceErrorsDetails;
}

/**
 * @public
 * <p>Defines an application assessment summary.</p>
 */
export interface AppAssessmentSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion?: string;

  /**
   * @public
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;

  /**
   * @public
   * <p>The entity that invoked the assessment.</p>
   */
  invoker?: AssessmentInvoker | string;

  /**
   * @public
   * <p>The starting time for the action.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The message from the assessment run.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The name of the assessment.</p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * @public
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * @public
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;
}

/**
 * @public
 * <p>Defines an Application Component.</p>
 */
export interface AppComponent {
  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of Application Component.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Unique identifier of the Application Component.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 * <p>Defines the compliance of an Application Component against the resiliency policy.</p>
 */
export interface AppComponentCompliance {
  /**
   * @public
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  appComponentName?: string;

  /**
   * @public
   * <p>The compliance of the Application Component against the resiliency policy.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * @public
   * <p>The compliance message.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status?: ComplianceStatus | string;

  /**
   * @public
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: ResiliencyScore;
}

/**
 * @public
 * <p>The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.</p>
 */
export interface EksSourceClusterNamespace {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is:
   * arn:<code>aws</code>:eks:<code>region</code>:<code>account-id</code>:cluster/<code>cluster-name</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  eksClusterArn: string | undefined;

  /**
   * @public
   * <p>Name of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.</p>
   */
  namespace: string | undefined;
}

/**
 * @public
 * <p>
 *       The Terraform s3 state file you need to import.
 *     </p>
 */
export interface TerraformSource {
  /**
   * @public
   * <p>
   *       The URL of the Terraform s3 state file you need to import.
   *     </p>
   */
  s3StateFileUrl: string | undefined;
}

/**
 * @public
 * <p>The list of Resilience Hub application input sources.</p>
 */
export interface AppInputSource {
  /**
   * @public
   * <p>The name of the input source.</p>
   */
  sourceName?: string;

  /**
   * @public
   * <p>The resource type of the input source.</p>
   */
  importType: ResourceMappingType | string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the input source. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  sourceArn?: string;

  /**
   * @public
   * <p>The name of the Terraform s3 state ﬁle.</p>
   */
  terraformSource?: TerraformSource;

  /**
   * @public
   * <p>The number of resources.</p>
   */
  resourceCount?: number;

  /**
   * @public
   * <p>The namespace on your Amazon Elastic Kubernetes Service cluster.</p>
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}

/**
 * @public
 * <p>Defines an application summary.</p>
 */
export interface AppSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The name of the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The timestamp for when the app was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: AppComplianceStatusType | string;

  /**
   * @public
   * <p>The current resiliency score for the application.</p>
   */
  resiliencyScore?: number;

  /**
   * @public
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  status?: AppStatusType | string;
}

/**
 * @public
 * <p>The version of the application.</p>
 */
export interface AppVersionSummary {
  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * @public
   * <p>The name for the application.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn?: string;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * @public
   * <p>The created application returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

/**
 * @public
 * <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
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

/**
 * @public
 */
export interface CreateAppVersionAppComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Application Component.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Currently, there is no supported additional information for Application Components.</p>
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAppVersionAppComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The list of Application Components that belong to this resource.</p>
   */
  appComponent?: AppComponent;
}

/**
 * @public
 * <p>Defines a logical resource identifier.</p>
 */
export interface LogicalResourceId {
  /**
   * @public
   * <p>The identifier of the resource.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>The name of the CloudFormation stack this resource belongs to.</p>
   */
  logicalStackName?: string;

  /**
   * @public
   * <p>The name of the resource group that this resource belongs to.</p>
   */
  resourceGroupName?: string;

  /**
   * @public
   * <p>
   *       The name of the Terraform S3 state file this resource belongs to.
   *     </p>
   */
  terraformSourceName?: string;

  /**
   * @public
   * <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   */
  eksSourceName?: string;
}

/**
 * @public
 */
export interface CreateAppVersionResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * @public
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services region that owns the physical resource.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The list of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   */
  appComponents: string[] | undefined;

  /**
   * @public
   * <p>Currently, there is no supported additional information for resources.</p>
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceSourceType = {
  APP_TEMPLATE: "AppTemplate",
  DISCOVERED: "Discovered",
} as const;

/**
 * @public
 */
export type ResourceSourceType = (typeof ResourceSourceType)[keyof typeof ResourceSourceType];

/**
 * @public
 * <p>Defines a physical resource. A physical resource is a resource that exists in your
 *       account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native
 *       identifier. </p>
 */
export interface PhysicalResource {
  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * @public
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The application components that belong to this resource.</p>
   */
  appComponents?: AppComponent[];

  /**
   * @public
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * @public
   * <p>Indicates if a resource is included or excluded from the assessment.</p>
   */
  excluded?: boolean;

  /**
   * @public
   * <p>The type of input source.</p>
   */
  sourceType?: ResourceSourceType | string;

  /**
   * @public
   * <p>The name of the parent resource.</p>
   */
  parentResourceName?: string;
}

/**
 * @public
 */
export interface CreateAppVersionResourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 * @enum
 */
export const TemplateFormat = {
  CFN_JSON: "CfnJson",
  CFN_YAML: "CfnYaml",
} as const;

/**
 * @public
 */
export type TemplateFormat = (typeof TemplateFormat)[keyof typeof TemplateFormat];

/**
 * @public
 * @enum
 */
export const RenderRecommendationType = {
  ALARM: "Alarm",
  SOP: "Sop",
  TEST: "Test",
} as const;

/**
 * @public
 */
export type RenderRecommendationType = (typeof RenderRecommendationType)[keyof typeof RenderRecommendationType];

/**
 * @public
 */
export interface CreateRecommendationTemplateRequest {
  /**
   * @public
   * <p>Identifiers for the recommendations used to create a recommendation template.</p>
   */
  recommendationIds?: string[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The name for the recommendation template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The name of the Amazon S3 bucket that will contain the recommendation template.</p>
   */
  bucketName?: string;
}

/**
 * @public
 * @enum
 */
export const RecommendationTemplateStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type RecommendationTemplateStatus =
  (typeof RecommendationTemplateStatus)[keyof typeof RecommendationTemplateStatus];

/**
 * @public
 * <p>The location of the Amazon S3 bucket.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The prefix for the Amazon S3 bucket.</p>
   */
  prefix?: string;
}

/**
 * @public
 * <p>Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action.</p>
 */
export interface RecommendationTemplate {
  /**
   * @public
   * <p>The file location of the template.</p>
   */
  templatesLocation?: S3Location;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>Identifiers for the recommendations used in the recommendation template.</p>
   */
  recommendationIds?: string[];

  /**
   * @public
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
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) for the recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * @public
   * <p>The message for the recommendation template.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: RecommendationTemplateStatus | string | undefined;

  /**
   * @public
   * <p>The name for the recommendation template.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The start time for the action.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The end time for the action.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>Indicates if replacements are needed.</p>
   */
  needsReplacements?: boolean;
}

/**
 * @public
 */
export interface CreateRecommendationTemplateResponse {
  /**
   * @public
   * <p>The newly created recommendation template, returned as an object. This object includes the
   *       template's name, format, status, tags, Amazon S3 bucket location, and more.</p>
   */
  recommendationTemplate?: RecommendationTemplate;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyRequest {
  /**
   * @public
   * <p>The name of the policy</p>
   */
  policyName: string | undefined;

  /**
   * @public
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * @public
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * @public
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier: ResiliencyPolicyTier | string | undefined;

  /**
   * @public
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   */
  policy: Record<string, FailurePolicy> | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyResponse {
  /**
   * @public
   * <p>The type of resiliency policy that was created, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>A boolean option to force the deletion of an Resilience Hub application. </p>
   */
  forceDelete?: boolean;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAssessmentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppAssessmentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus: AssessmentStatus | string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInputSourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the imported resource you want to remove from the
   *       Resilience Hub application. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  sourceArn?: string;

  /**
   * @public
   * <p>The imported Terraform s3 state ﬁle you want to remove from the Resilience Hub application.</p>
   */
  terraformSource?: TerraformSource;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The namespace on your Amazon Elastic Kubernetes Service cluster that you want to delete from the Resilience Hub application.</p>
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}

/**
 * @public
 */
export interface DeleteAppInputSourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The name of the input source from where the application resource is imported from.</p>
   */
  appInputSource?: AppInputSource;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Application Component.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The list of Application Components that belong to this resource.</p>
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * @public
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region that owns the physical resource.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn: string | undefined;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: RecommendationTemplateStatus | string | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * @public
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentResponse {
  /**
   * @public
   * <p>The assessment for an Resilience Hub application, returned as an object. This object
   *       includes Amazon Resource Names (ARNs), compliance information, compliance status, cost,
   *       messages, resiliency scores, and more.</p>
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter supports only failover region and account.</p>
   *          </note>
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier of the Application Component.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The list of Application Components that belong to this resource.</p>
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * @public
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region that owns the physical resource.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceResolutionStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type ResourceResolutionStatusType =
  (typeof ResourceResolutionStatusType)[keyof typeof ResourceResolutionStatusType];

/**
 * @public
 */
export interface DescribeAppVersionResourcesResolutionStatusResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: ResourceResolutionStatusType | string | undefined;

  /**
   * @public
   * <p>The returned error message for the request.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>A JSON string that provides information about your application structure. To learn more
   *       about the <code>appTemplateBody</code> template, see the sample template provided in the
   *       <i>Examples</i> section.</p>
   *          <p>The <code>appTemplateBody</code> JSON string has the following structure:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources</code>
   *                   </b>
   *                </p>
   *                <p>The list of logical resources that
   *           must
   *           be included in the Resilience Hub application.</p>
   *                <p>Type: Array</p>
   *                <note>
   *                   <p>Don't add the resources that you want to exclude.</p>
   *                </note>
   *                <p>Each <code>resources</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>logicalResourceId</code>
   *                         </i>
   *                      </p>
   *                      <p>The logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <p>Each <code>logicalResourceId</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>The identifier of the resource.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>logicalStackName</code>
   *                            </p>
   *                            <p>The name of the CloudFormation stack this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>resourceGroupName</code>
   *                            </p>
   *                            <p>The name of the resource group this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>terraformSourceName</code>
   *                            </p>
   *                            <p>The name of the Terraform S3 state file this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>eksSourceName</code>
   *                            </p>
   *                            <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *                            <note>
   *                               <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *                            </note>
   *                            <p>Type: String</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>type</code>
   *                         </i>
   *                      </p>
   *                      <p>The type of resource.</p>
   *                      <p>Type: string</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>name</code>
   *                         </i>
   *                      </p>
   *                      <p>The name of the resource.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>additionalInfo</code>
   *                      </p>
   *                      <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                      <note>
   *                         <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                         <p>Key: <code>"failover-regions"</code>
   *                         </p>
   *                         <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                         </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>appComponents</code>
   *                   </b>
   *                </p>
   *                <p>The list of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   *                <p>Type: Array</p>
   *                <p>Each <code>appComponents</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>name</code>
   *                      </p>
   *                      <p>The name of the Application Component.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>type</code>
   *                      </p>
   *                      <p>The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>resourceNames</code>
   *                      </p>
   *                      <p>The list of included resources that are assigned to the Application Component.</p>
   *                      <p>Type: Array of strings</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>additionalInfo</code>
   *                      </p>
   *                      <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                      <note>
   *                         <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                         <p>Key: <code>"failover-regions"</code>
   *                         </p>
   *                         <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                         </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>excludedResources</code>
   *                   </b>
   *                </p>
   *                <p>The list of logical resource identifiers to be excluded from the application.</p>
   *                <p>Type: Array</p>
   *                <note>
   *                   <p>Don't add the resources that you want to include.</p>
   *                </note>
   *                <p>Each <code>excludedResources</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>logicalResourceIds</code>
   *                         </i>
   *                      </p>
   *                      <p>The logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <note>
   *                         <p>You can configure only one of the following fields:</p>
   *                         <ul>
   *                            <li>
   *                               <p>
   *                                  <code>logicalStackName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>resourceGroupName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>terraformSourceName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>eksSourceName</code>
   *                               </p>
   *                            </li>
   *                         </ul>
   *                      </note>
   *                      <p>Each <code>logicalResourceIds</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>The identifier of the resource.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>logicalStackName</code>
   *                            </p>
   *                            <p>The name of the CloudFormation stack this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>resourceGroupName</code>
   *                            </p>
   *                            <p>The name of the resource group this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>terraformSourceName</code>
   *                            </p>
   *                            <p>The name of the Terraform S3 state file this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>eksSourceName</code>
   *                            </p>
   *                            <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *                            <note>
   *                               <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *                            </note>
   *                            <p>Type: String</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>version</code>
   *                   </b>
   *                </p>
   *                <p>The Resilience Hub application version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>additionalInfo</code>
   *                </p>
   *                <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                <note>
   *                   <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                   <p>Key: <code>"failover-regions"</code>
   *                   </p>
   *                   <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceImportStatusType = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type ResourceImportStatusType = (typeof ResourceImportStatusType)[keyof typeof ResourceImportStatusType];

/**
 * @public
 */
export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: ResourceImportStatusType | string | undefined;

  /**
   * @public
   * <p>The timestamp for when the status last changed.</p>
   */
  statusChangeTime: Date | undefined;

  /**
   * @public
   * <p>The returned error message for the request.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyResponse {
  /**
   * @public
   * <p>Information about the specific resiliency policy, returned as an object. This object
   *       includes creation time, data location constraints, its name, description, tags, the recovery
   *       time objective (RTO) and recovery point objective (RPO) in seconds, and more.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @public
 * <p>The input source of the Amazon Elastic Kubernetes Service cluster.</p>
 */
export interface EksSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is:
   * arn:<code>aws</code>:eks:<code>region</code>:<code>account-id</code>:cluster/<code>cluster-name</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  eksClusterArn: string | undefined;

  /**
   * @public
   * <p>The list of namespaces located on your Amazon Elastic Kubernetes Service cluster.</p>
   */
  namespaces: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceImportStrategyType = {
  ADD_ONLY: "AddOnly",
  REPLACE_ALL: "ReplaceAll",
} as const;

/**
 * @public
 */
export type ResourceImportStrategyType = (typeof ResourceImportStrategyType)[keyof typeof ResourceImportStrategyType];

/**
 * @public
 */
export interface ImportResourcesToDraftAppVersionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) for the resources.</p>
   */
  sourceArns?: string[];

  /**
   * @public
   * <p> A list of terraform file s3 URLs you need to import. </p>
   */
  terraformSources?: TerraformSource[];

  /**
   * @public
   * <p>The import strategy you would like to set to import resources into Resilience Hub
   *       application.</p>
   */
  importStrategy?: ResourceImportStrategyType | string;

  /**
   * @public
   * <p>The input sources of the Amazon Elastic Kubernetes Service resources you need to import.</p>
   */
  eksSources?: EksSource[];
}

/**
 * @public
 */
export interface ImportResourcesToDraftAppVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) for the resources you have imported.</p>
   */
  sourceArns?: string[];

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: ResourceImportStatusType | string | undefined;

  /**
   * @public
   * <p>
   *       A list of terraform file s3 URLs you have imported.
   *     </p>
   */
  terraformSources?: TerraformSource[];

  /**
   * @public
   * <p>The input sources of the Amazon Elastic Kubernetes Service resources you have imported.</p>
   */
  eksSources?: EksSource[];
}

/**
 * @public
 */
export interface ListAlarmRecommendationsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAlarmRecommendationsResponse {
  /**
   * @public
   * <p>The alarm recommendations for an Resilience Hub application, returned as an object. This
   *       object includes Application Component names, descriptions, information about whether a
   *       recommendation has already been implemented or not, prerequisites, and more.</p>
   */
  alarmRecommendations: AlarmRecommendation[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppAssessmentsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The name for the assessment.</p>
   */
  assessmentName?: string;

  /**
   * @public
   * <p>The current status of the assessment for the resiliency policy.</p>
   */
  assessmentStatus?: (AssessmentStatus | string)[];

  /**
   * @public
   * <p>The current status of compliance for the resiliency policy.</p>
   */
  complianceStatus?: ComplianceStatus | string;

  /**
   * @public
   * <p>Specifies the entity that invoked a specific assessment, either a <code>User</code> or the
   *         <code>System</code>.</p>
   */
  invoker?: AssessmentInvoker | string;

  /**
   * @public
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   */
  reverseOrder?: boolean;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppAssessmentsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The summaries for the specified assessments, returned as an object. This object includes
   *       application versions, associated Amazon Resource Numbers (ARNs), cost, messages, resiliency
   *       scores, and more.</p>
   */
  assessmentSummaries: AppAssessmentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesRequest {
  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesResponse {
  /**
   * @public
   * <p>The compliances for an Resilience Hub Application Component, returned as an object. This
   *       object contains the names of the Application Components, compliances, costs, resiliency scores, outage scores, and
   *       more.</p>
   */
  componentCompliances: AppComponentCompliance[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const HaArchitecture = {
  BACKUP_AND_RESTORE: "BackupAndRestore",
  MULTI_SITE: "MultiSite",
  NO_RECOVERY_PLAN: "NoRecoveryPlan",
  PILOT_LIGHT: "PilotLight",
  WARM_STANDBY: "WarmStandby",
} as const;

/**
 * @public
 */
export type HaArchitecture = (typeof HaArchitecture)[keyof typeof HaArchitecture];

/**
 * @public
 * @enum
 */
export const ConfigRecommendationOptimizationType = {
  BEST_ATTAINABLE: "BestAttainable",
  BEST_AZ_RECOVERY: "BestAZRecovery",
  BEST_REGION_RECOVERY: "BestRegionRecovery",
  LEAST_CHANGE: "LeastChange",
  LEAST_COST: "LeastCost",
  LEAST_ERRORS: "LeastErrors",
} as const;

/**
 * @public
 */
export type ConfigRecommendationOptimizationType =
  (typeof ConfigRecommendationOptimizationType)[keyof typeof ConfigRecommendationOptimizationType];

/**
 * @public
 * <p>Defines a disruption compliance recommendation.</p>
 */
export interface RecommendationDisruptionCompliance {
  /**
   * @public
   * <p>The expected compliance status after applying the recommended configuration change.</p>
   */
  expectedComplianceStatus: ComplianceStatus | string | undefined;

  /**
   * @public
   * <p>The expected RTO after applying the recommended configuration change.</p>
   */
  expectedRtoInSecs?: number;

  /**
   * @public
   * <p>The expected Recovery Time Objective (RTO) description after applying the recommended
   *       configuration change.</p>
   */
  expectedRtoDescription?: string;

  /**
   * @public
   * <p>The expected RPO after applying the recommended configuration change.</p>
   */
  expectedRpoInSecs?: number;

  /**
   * @public
   * <p>The expected Recovery Point Objective (RPO) description after applying the recommended
   *       configuration change.</p>
   */
  expectedRpoDescription?: string;
}

/**
 * @public
 * <p>Defines a configuration recommendation.</p>
 */
export interface ConfigRecommendation {
  /**
   * @public
   * <p>The cost for the application.</p>
   */
  cost?: Cost;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  appComponentName?: string;

  /**
   * @public
   * <p>The current compliance against the resiliency policy before applying the configuration
   *       change.</p>
   */
  compliance?: Record<string, DisruptionCompliance>;

  /**
   * @public
   * <p>The expected compliance against the resiliency policy after applying the configuration
   *       change.</p>
   */
  recommendationCompliance?: Record<string, RecommendationDisruptionCompliance>;

  /**
   * @public
   * <p>The type of optimization.</p>
   */
  optimizationType: ConfigRecommendationOptimizationType | string | undefined;

  /**
   * @public
   * <p>The name of the recommendation configuration.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * @public
   * <p>List of the suggested configuration changes.</p>
   */
  suggestedChanges?: string[];

  /**
   * @public
   * <p>The architecture type.</p>
   */
  haArchitecture?: HaArchitecture | string;

  /**
   * @public
   * <p>The reference identifier for the recommendation configuration.</p>
   */
  referenceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendationComplianceStatus = {
  BREACHED_CAN_MEET: "BreachedCanMeet",
  BREACHED_UNATTAINABLE: "BreachedUnattainable",
  MET_CAN_IMPROVE: "MetCanImprove",
} as const;

/**
 * @public
 */
export type RecommendationComplianceStatus =
  (typeof RecommendationComplianceStatus)[keyof typeof RecommendationComplianceStatus];

/**
 * @public
 * <p>Defines recommendations for an Resilience Hub Application Component, returned as an object. This
 *       object contains component names, configuration recommendations, and recommendation
 *       statuses.</p>
 */
export interface ComponentRecommendation {
  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  appComponentName: string | undefined;

  /**
   * @public
   * <p>The recommendation status.</p>
   */
  recommendationStatus: RecommendationComplianceStatus | string | undefined;

  /**
   * @public
   * <p>The list of recommendations.</p>
   */
  configRecommendations: ConfigRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsResponse {
  /**
   * @public
   * <p>The recommendations for an Resilience Hub Application Component, returned as an object. This
   *       object contains the names of the Application Components, configuration recommendations, and recommendation
   *       statuses.</p>
   */
  componentRecommendations: ComponentRecommendation[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppInputSourcesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of input sources to be displayed per Resilience Hub application.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppInputSourcesResponse {
  /**
   * @public
   * <p>The list of Resilience Hub application input sources.</p>
   */
  appInputSources: AppInputSource[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name for the one of the listed applications.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * @public
   * <p>Summaries for the Resilience Hub application.</p>
   */
  appSummaries: AppSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the Application Component.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of Application Components to be displayed per Resilience Hub application version.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Defines an Application Component.</p>
   */
  appComponents?: AppComponent[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsResponse {
  /**
   * @public
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   */
  resourceMappings: ResourceMapping[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionResourcesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionResourcesResponse {
  /**
   * @public
   * <p>The physical resources in the application version.</p>
   */
  physicalResources: PhysicalResource[] | undefined;

  /**
   * @public
   * <p>The ID for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionsResponse {
  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersions: AppVersionSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;

  /**
   * @public
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   */
  reverseOrder?: boolean;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status?: (RecommendationTemplateStatus | string)[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   */
  recommendationTemplateArn?: string;

  /**
   * @public
   * <p>The name for one of the listed recommendation templates.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The recommendation templates for the Resilience Hub applications.</p>
   */
  recommendationTemplates?: RecommendationTemplate[];
}

/**
 * @public
 */
export interface ListResiliencyPoliciesRequest {
  /**
   * @public
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListResiliencyPoliciesResponse {
  /**
   * @public
   * <p>The resiliency policies for the Resilience Hub applications.</p>
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSopRecommendationsRequest {
  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SopServiceType = {
  SSM: "SSM",
} as const;

/**
 * @public
 */
export type SopServiceType = (typeof SopServiceType)[keyof typeof SopServiceType];

/**
 * @public
 * <p>Defines a standard operating procedure (SOP) recommendation.</p>
 */
export interface SopRecommendation {
  /**
   * @public
   * <p>The service type.</p>
   */
  serviceType: SopServiceType | string | undefined;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  appComponentName?: string;

  /**
   * @public
   * <p>The description of the SOP recommendation.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Identifier for the SOP recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * @public
   * <p>The name of the SOP recommendation.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The recommendation items.</p>
   */
  items?: RecommendationItem[];

  /**
   * @public
   * <p>The reference identifier for the SOP recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * @public
   * <p>The prerequisite for the SOP recommendation.</p>
   */
  prerequisite?: string;
}

/**
 * @public
 */
export interface ListSopRecommendationsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The standard operating procedure (SOP) recommendations for the Resilience Hub
   *       applications.</p>
   */
  sopRecommendations: SopRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesRequest {
  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesResponse {
  /**
   * @public
   * <p>The suggested resiliency policies for the Resilience Hub applications.</p>
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub
   *       application.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTestRecommendationsRequest {
  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TestRisk = {
  HIGH: "High",
  MEDIUM: "Medium",
  SMALL: "Small",
} as const;

/**
 * @public
 */
export type TestRisk = (typeof TestRisk)[keyof typeof TestRisk];

/**
 * @public
 * @enum
 */
export const TestType = {
  AZ: "AZ",
  HARDWARE: "Hardware",
  REGION: "Region",
  SOFTWARE: "Software",
} as const;

/**
 * @public
 */
export type TestType = (typeof TestType)[keyof typeof TestType];

/**
 * @public
 * <p>Defines a test recommendation.</p>
 */
export interface TestRecommendation {
  /**
   * @public
   * <p>Identifier for the test recommendation.</p>
   */
  recommendationId?: string;

  /**
   * @public
   * <p>The reference identifier for the test recommendation.</p>
   */
  referenceId: string | undefined;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  appComponentName?: string;

  /**
   * @public
   * <p>The name of the test recommendation.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The intent of the test recommendation.</p>
   */
  intent?: string;

  /**
   * @public
   * <p>The level of risk for this test recommendation.</p>
   */
  risk?: TestRisk | string;

  /**
   * @public
   * <p>The type of test recommendation.</p>
   */
  type?: TestType | string;

  /**
   * @public
   * <p>The description for the test recommendation.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The test recommendation items.</p>
   */
  items?: RecommendationItem[];

  /**
   * @public
   * <p>The prerequisite of the test recommendation.</p>
   */
  prerequisite?: string;

  /**
   * @public
   * <p>
   *       A list of recommended alarms that are used in the test and must be exported before or with the test.
   *     </p>
   */
  dependsOnAlarms?: string[];
}

/**
 * @public
 */
export interface ListTestRecommendationsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The test recommendations for the Resilience Hub application.</p>
   */
  testRecommendations: TestRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId?: string;

  /**
   * @public
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Defines a resource that is not supported by Resilience Hub.</p>
 */
export interface UnsupportedResource {
  /**
   * @public
   * <p>The logical resource identifier for the unsupported resource.</p>
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * @public
   * <p>The physical resource identifier for the unsupported resource.</p>
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The status of the
   *       unsupported resource.</p>
   */
  unsupportedResourceStatus?: string;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesResponse {
  /**
   * @public
   * <p>The unsupported resources for the application.</p>
   */
  unsupportedResources: UnsupportedResource[] | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PublishAppVersionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface PublishAppVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>A JSON string that provides information about your application structure. To learn more
   *       about the <code>appTemplateBody</code> template, see the sample template provided in the
   *         <i>Examples</i> section.</p>
   *          <p>The <code>appTemplateBody</code> JSON string has the following structure:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>resources</code>
   *                   </b>
   *                </p>
   *                <p>The list of logical resources that
   *           must
   *           be included in the Resilience Hub application.</p>
   *                <p>Type: Array</p>
   *                <note>
   *                   <p>Don't add the resources that you want to exclude.</p>
   *                </note>
   *                <p>Each <code>resources</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>logicalResourceId</code>
   *                         </i>
   *                      </p>
   *                      <p>The logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <p>Each <code>logicalResourceId</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>The identifier of the resource.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>logicalStackName</code>
   *                            </p>
   *                            <p>The name of the CloudFormation stack this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>resourceGroupName</code>
   *                            </p>
   *                            <p>The name of the resource group this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>terraformSourceName</code>
   *                            </p>
   *                            <p>The name of the Terraform S3 state file this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>eksSourceName</code>
   *                            </p>
   *                            <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *                            <note>
   *                               <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *                            </note>
   *                            <p>Type: String</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>type</code>
   *                         </i>
   *                      </p>
   *                      <p>The type of resource.</p>
   *                      <p>Type: string</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>name</code>
   *                         </i>
   *                      </p>
   *                      <p>The name of the resource.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>additionalInfo</code>
   *                      </p>
   *                      <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                      <note>
   *                         <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                         <p>Key: <code>"failover-regions"</code>
   *                         </p>
   *                         <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                         </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>appComponents</code>
   *                   </b>
   *                </p>
   *                <p>The list of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   *                <p>Type: Array</p>
   *                <p>Each <code>appComponents</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>name</code>
   *                      </p>
   *                      <p>The name of the Application Component.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>type</code>
   *                      </p>
   *                      <p>The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>resourceNames</code>
   *                      </p>
   *                      <p>The list of included resources that are assigned to the Application Component.</p>
   *                      <p>Type: Array of strings</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>additionalInfo</code>
   *                      </p>
   *                      <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                      <note>
   *                         <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                         <p>Key: <code>"failover-regions"</code>
   *                         </p>
   *                         <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                         </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>excludedResources</code>
   *                   </b>
   *                </p>
   *                <p>The list of logical resource identifiers to be excluded from the application.</p>
   *                <p>Type: Array</p>
   *                <note>
   *                   <p>Don't add the resources that you want to include.</p>
   *                </note>
   *                <p>Each <code>excludedResources</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>
   *                            <code>logicalResourceIds</code>
   *                         </i>
   *                      </p>
   *                      <p>The logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <note>
   *                         <p>You can configure only one of the following fields:</p>
   *                         <ul>
   *                            <li>
   *                               <p>
   *                                  <code>logicalStackName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>resourceGroupName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>terraformSourceName</code>
   *                               </p>
   *                            </li>
   *                            <li>
   *                               <p>
   *                                  <code>eksSourceName</code>
   *                               </p>
   *                            </li>
   *                         </ul>
   *                      </note>
   *                      <p>Each <code>logicalResourceIds</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>The identifier of the resource.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>logicalStackName</code>
   *                            </p>
   *                            <p>The name of the CloudFormation stack this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>resourceGroupName</code>
   *                            </p>
   *                            <p>The name of the resource group this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>terraformSourceName</code>
   *                            </p>
   *                            <p>The name of the Terraform S3 state file this resource belongs to.</p>
   *                            <p>Type: String</p>
   *                         </li>
   *                         <li>
   *                            <p>
   *                               <code>eksSourceName</code>
   *                            </p>
   *                            <p>The name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *                            <note>
   *                               <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *                            </note>
   *                            <p>Type: String</p>
   *                         </li>
   *                      </ul>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>version</code>
   *                   </b>
   *                </p>
   *                <p>The Resilience Hub application version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>additionalInfo</code>
   *                </p>
   *                <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *                <note>
   *                   <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *                   <p>Key: <code>"failover-regions"</code>
   *                   </p>
   *                   <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *                   </p>
   *                </note>
   *             </li>
   *          </ul>
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The names of the resources you want to remove from the resource mappings.</p>
   */
  resourceNames?: string[];

  /**
   * @public
   * <p>The names of the CloudFormation stacks you want to remove from the resource mappings.</p>
   */
  logicalStackNames?: string[];

  /**
   * @public
   * <p>The names of the registered applications you want to remove from the resource mappings.</p>
   */
  appRegistryAppNames?: string[];

  /**
   * @public
   * <p>The names of the resource groups you want to remove from the resource mappings.</p>
   */
  resourceGroupNames?: string[];

  /**
   * @public
   * <p>The names of the Terraform sources you want to remove from the resource mappings.</p>
   */
  terraformSourceNames?: string[];

  /**
   * @public
   * <p>The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   */
  eksSourceNames?: string[];
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn?: string;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion?: string;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The identifier for a specific resolution.</p>
   */
  resolutionId: string | undefined;

  /**
   * @public
   * <p>The status of the action.</p>
   */
  status: ResourceResolutionStatusType | string | undefined;
}

/**
 * @public
 */
export interface StartAppAssessmentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The name for the assessment.</p>
   */
  assessmentName: string | undefined;

  /**
   * @public
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAppAssessmentResponse {
  /**
   * @public
   * <p>The assessment created.</p>
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to assign to the resource. Each tag consists of a key/value pair.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags you want to remove.</p>
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
export interface UpdateAppRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The optional description for an app.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn?: string;

  /**
   * @public
   * <p>Specifies if the resiliency policy ARN should be cleared.</p>
   */
  clearResiliencyPolicyArn?: boolean;

  /**
   * @public
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   */
  assessmentSchedule?: AppAssessmentScheduleType | string;
}

/**
 * @public
 */
export interface UpdateAppResponse {
  /**
   * @public
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter supports only failover region and account.</p>
   *          </note>
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Application Component.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the Application Component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   */
  type?: string;

  /**
   * @public
   * <p>Currently, there is no supported additional information for Application Components.</p>
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>The list of Application Components that belong to this resource.</p>
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The name of the resource.</p>
   */
  resourceName?: string;

  /**
   * @public
   * <p>The logical identifier of the resource.</p>
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * @public
   * <p>The physical identifier of the resource.</p>
   */
  physicalResourceId?: string;

  /**
   * @public
   * <p>The Amazon Web Services region that owns the physical resource.</p>
   */
  awsRegion?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   */
  awsAccountId?: string;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The list of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   */
  appComponents?: string[];

  /**
   * @public
   * <p>Currently, there is no supported additional information for resources.</p>
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * @public
   * <p>Indicates if a resource is excluded from an Resilience Hub application.</p>
   *          <note>
   *             <p>You can exclude only imported resources from an Resilience Hub application.</p>
   *          </note>
   */
  excluded?: boolean;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  appArn: string | undefined;

  /**
   * @public
   * <p>The Resilience Hub application version.</p>
   */
  appVersion: string | undefined;

  /**
   * @public
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>AWS General Reference</i> guide.</p>
   */
  policyArn: string | undefined;

  /**
   * @public
   * <p>The name of the policy</p>
   */
  policyName?: string;

  /**
   * @public
   * <p>The description for the policy.</p>
   */
  policyDescription?: string;

  /**
   * @public
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   */
  dataLocationConstraint?: DataLocationConstraint | string;

  /**
   * @public
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   */
  tier?: ResiliencyPolicyTier | string;

  /**
   * @public
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   */
  policy?: Record<string, FailurePolicy>;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyResponse {
  /**
   * @public
   * <p>The type of resiliency policy that was updated, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   */
  policy: ResiliencyPolicy | undefined;
}

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
export const ResiliencyPolicyFilterSensitiveLog = (obj: ResiliencyPolicy): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const DescribeAppResponseFilterSensitiveLog = (obj: DescribeAppResponse): any => ({
  ...obj,
  ...(obj.app && { app: AppFilterSensitiveLog(obj.app) }),
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
export const DescribeResiliencyPolicyResponseFilterSensitiveLog = (obj: DescribeResiliencyPolicyResponse): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
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
export const ListResiliencyPoliciesResponseFilterSensitiveLog = (obj: ListResiliencyPoliciesResponse): any => ({
  ...obj,
  ...(obj.resiliencyPolicies && {
    resiliencyPolicies: obj.resiliencyPolicies.map((item) => ResiliencyPolicyFilterSensitiveLog(item)),
  }),
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
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
export const UpdateResiliencyPolicyResponseFilterSensitiveLog = (obj: UpdateResiliencyPolicyResponse): any => ({
  ...obj,
  ...(obj.policy && { policy: ResiliencyPolicyFilterSensitiveLog(obj.policy) }),
});
