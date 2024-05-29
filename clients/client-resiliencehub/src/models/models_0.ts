// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ResiliencehubServiceException as __BaseException } from "./ResiliencehubServiceException";

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 * @public
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
 * <p>Defines a physical resource identifier.</p>
 * @public
 */
export interface PhysicalResourceId {
  /**
   * <p>Identifier of the physical resource.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies the type of physical resource identifier.</p>
   *          <dl>
   *             <dt>Arn</dt>
   *             <dd>
   *                <p>The resource identifier is an Amazon Resource Name (ARN) and it can identify the
   *             following list of resources:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ECS::Service</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EFS::FileSystem</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::Lambda::Function</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::SNS::Topic</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>Native</dt>
   *             <dd>
   *                <p>The resource identifier is an Resilience Hub-native identifier and it can
   *             identify the following list of resources:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ApiGateway::RestApi</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ApiGatewayV2::Api</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::AutoScaling::AutoScalingGroup</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DocDB::DBCluster</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DocDB::DBGlobalCluster</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DocDB::DBInstance</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DynamoDB::GlobalTable</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::DynamoDB::Table</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::EC2Fleet</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::Instance</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::NatGateway</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::EC2::Volume</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::ElasticLoadBalancing::LoadBalancer</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::RDS::DBCluster</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::RDS::DBInstance</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::RDS::GlobalCluster</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::Route53::RecordSet</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::S3::Bucket</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>AWS::SQS::Queue</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  type: PhysicalIdentifierType | undefined;

  /**
   * <p>The Amazon Web Services Region that the physical resource is located in.</p>
   * @public
   */
  awsRegion?: string;

  /**
   * <p>The Amazon Web Services account that owns the physical resource.</p>
   * @public
   */
  awsAccountId?: string;
}

/**
 * <p>Defines a resource mapping.</p>
 * @public
 */
export interface ResourceMapping {
  /**
   * <p>Name of the resource that this resource is mapped to when the <code>mappingType</code> is <code>Resource</code>.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Name of the CloudFormation stack this resource is mapped to when the <code>mappingType</code> is <code>CfnStack</code>.</p>
   * @public
   */
  logicalStackName?: string;

  /**
   * <p>Name of the application this resource is mapped to when the <code>mappingType</code> is <code>AppRegistryApp</code>.</p>
   * @public
   */
  appRegistryAppName?: string;

  /**
   * <p>Name of the Resource Groups that this resource is mapped to when the <code>mappingType</code> is <code>ResourceGroup</code>.</p>
   * @public
   */
  resourceGroupName?: string;

  /**
   * <p>Specifies the type of resource mapping.</p>
   * @public
   */
  mappingType: ResourceMappingType | undefined;

  /**
   * <p>Identifier of the physical resource.</p>
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>Name of the Terraform source that this resource is mapped to when the <code>mappingType</code> is <code>Terraform</code>.</p>
   * @public
   */
  terraformSourceName?: string;

  /**
   * <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace that this resource is mapped to when the <code>mappingType</code> is
   *       <code>EKS</code>.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   * @public
   */
  eksSourceName?: string;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>List of sources that are used to map a logical resource from the template to a physical
   *       resource. You can use sources such as CloudFormation, Terraform state files,
   *       AppRegistry applications, or Amazon EKS.</p>
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that the exception applies to.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that the exception applies to.</p>
   * @public
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
 * <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 * @public
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
 * <p>This exception occurs when the specified resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that the exception applies to.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that the exception applies to.</p>
   * @public
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
 * <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The number of seconds to wait before retrying the operation.</p>
   * @public
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
 * <p>This exception occurs when a request is not valid.</p>
 * @public
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
 * @enum
 */
export const ExcludeRecommendationReason = {
  ALREADY_IMPLEMENTED: "AlreadyImplemented",
  COMPLEXITY_OF_IMPLEMENTATION: "ComplexityOfImplementation",
  NOT_RELEVANT: "NotRelevant",
} as const;

/**
 * @public
 */
export type ExcludeRecommendationReason =
  (typeof ExcludeRecommendationReason)[keyof typeof ExcludeRecommendationReason];

/**
 * <p>Defines a recommendation.</p>
 * @public
 */
export interface RecommendationItem {
  /**
   * <p>Identifier of the resource.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Identifier of the target account.</p>
   * @public
   */
  targetAccountId?: string;

  /**
   * <p>The target region.</p>
   * @public
   */
  targetRegion?: string;

  /**
   * <p>Specifies if the recommendation has already been implemented.</p>
   * @public
   */
  alreadyImplemented?: boolean;

  /**
   * <p>Indicates if an operational recommendation item is excluded.</p>
   * @public
   */
  excluded?: boolean;

  /**
   * <p>Indicates the reason for excluding an operational recommendation.</p>
   * @public
   */
  excludeReason?: ExcludeRecommendationReason;
}

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  EXCLUDED: "Excluded",
  IMPLEMENTED: "Implemented",
  INACTIVE: "Inactive",
  NOT_IMPLEMENTED: "NotImplemented",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

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
 * <p>Defines a recommendation for a CloudWatch alarm.</p>
 * @public
 */
export interface AlarmRecommendation {
  /**
   * <p>Identifier of the alarm recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>Reference identifier of the alarm recommendation.</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>Name of the alarm recommendation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the alarm recommendation.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Type of alarm recommendation.</p>
   * @public
   */
  type: AlarmType | undefined;

  /**
   * @deprecated
   *
   * <p>Application Component name for the CloudWatch alarm recommendation. This name is saved as the first
   *       item in the <code>appComponentNames</code> list.</p>
   * @public
   */
  appComponentName?: string;

  /**
   * <p>List of CloudWatch alarm recommendations.</p>
   * @public
   */
  items?: RecommendationItem[];

  /**
   * <p>The prerequisite for the alarm recommendation.</p>
   * @public
   */
  prerequisite?: string;

  /**
   * <p>List of Application Component names for the CloudWatch alarm recommendation.</p>
   * @public
   */
  appComponentNames?: string[];

  /**
   * <p>Status of the recommended Amazon CloudWatch alarm.</p>
   * @public
   */
  recommendationStatus?: RecommendationStatus;
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
export const AppDriftStatusType = {
  DETECTED: "Detected",
  NOT_CHECKED: "NotChecked",
  NOT_DETECTED: "NotDetected",
} as const;

/**
 * @public
 */
export type AppDriftStatusType = (typeof AppDriftStatusType)[keyof typeof AppDriftStatusType];

/**
 * @public
 * @enum
 */
export const EventType = {
  DRIFT_DETECTED: "DriftDetected",
  SCHEDULED_ASSESSMENT_FAILURE: "ScheduledAssessmentFailure",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>Indicates an event you would like to subscribe and get notification for. Currently,
 *         Resilience Hub supports notifications only for <b>Drift
 *         detected</b> and <b>Scheduled assessment failure</b>
 *       events.</p>
 * @public
 */
export interface EventSubscription {
  /**
   * <p>Unique name to identify an event subscription.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of event you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for <b>Drift
   *         detected</b> (<code>DriftDetected</code>) and <b>Scheduled
   *         assessment failure</b> (<code>ScheduledAssessmentFailure</code>) events.</p>
   * @public
   */
  eventType: EventType | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. The format for this ARN
   *       is: <code>arn:partition:sns:region:account:topic-name</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  snsTopicArn?: string;
}

/**
 * @public
 * @enum
 */
export const PermissionModelType = {
  LEGACY_IAM_USER: "LegacyIAMUser",
  ROLE_BASED: "RoleBased",
} as const;

/**
 * @public
 */
export type PermissionModelType = (typeof PermissionModelType)[keyof typeof PermissionModelType];

/**
 * <p>Defines the roles and credentials that Resilience Hub would use while creating the
 *       application, importing its resources, and running an assessment.</p>
 * @public
 */
export interface PermissionModel {
  /**
   * <p>Defines how Resilience Hub scans your resources. It can scan for the resources by
   *       using a pre-existing role in your Amazon Web Services account, or by using the credentials of
   *       the current IAM user.</p>
   * @public
   */
  type: PermissionModelType | undefined;

  /**
   * <p>Existing Amazon Web Services
   *       IAM role name in the primary Amazon Web Services account that will be assumed by
   *         Resilience Hub Service Principle to obtain a read-only access to your application
   *       resources while running an assessment.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>You must have <code>iam:passRole</code> permission for this role while creating or
   *             updating the application.</p>
   *                </li>
   *                <li>
   *                   <p>Currently, <code>invokerRoleName</code> accepts only <code>[A-Za-z0-9_+=,.@-]</code>
   *             characters.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  invokerRoleName?: string;

  /**
   * <p>Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These
   *       ARNs are used for querying purposes while importing resources and assessing your
   *       application.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>These ARNs are required only when your resources are in other accounts and you have
   *             different role name in these accounts. Else, the invoker role name will be used in the
   *             other accounts.</p>
   *                </li>
   *                <li>
   *                   <p>These roles must have a trust policy with <code>iam:AssumeRole</code> permission to
   *             the invoker role in the primary account.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  crossAccountRoleArns?: string[];
}

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
 * <p>Defines an Resilience Hub application.</p>
 * @public
 */
export interface App {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Name for the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Optional description for an application.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn?: string;

  /**
   * <p>Date and time when the app was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Status of the application.</p>
   * @public
   */
  status?: AppStatusType;

  /**
   * <p>Current status of compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus?: AppComplianceStatusType;

  /**
   * <p>Date and time the most recent compliance evaluation.</p>
   * @public
   */
  lastAppComplianceEvaluationTime?: Date;

  /**
   * <p>Current resiliency score for the application.</p>
   * @public
   */
  resiliencyScore?: number;

  /**
   * <p>Date and time the most recent resiliency score evaluation.</p>
   * @public
   */
  lastResiliencyScoreEvaluationTime?: Date;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Assessment execution schedule with 'Daily' or 'Disabled' values. </p>
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType;

  /**
   * <p>Defines the roles and credentials that Resilience Hub would use while creating the
   *       application, importing its resources, and running an assessment.</p>
   * @public
   */
  permissionModel?: PermissionModel;

  /**
   * <p>The list of events you would like to subscribe and get notification for. Currently,
   *         Resilience Hub supports notifications only for <b>Drift
   *         detected</b> and <b>Scheduled assessment failure</b>
   *       events.</p>
   * @public
   */
  eventSubscriptions?: EventSubscription[];

  /**
   * <p>Indicates if compliance drifts (deviations) were detected while running an assessment for
   *       your application.</p>
   * @public
   */
  driftStatus?: AppDriftStatusType;

  /**
   * <p>Indicates the last time that a drift was evaluated.</p>
   * @public
   */
  lastDriftEvaluationTime?: Date;

  /**
   * <p>Recovery Time Objective (RTO) in seconds.</p>
   * @public
   */
  rtoInSecs?: number;

  /**
   * <p>Recovery Point Objective (RPO) in seconds.</p>
   * @public
   */
  rpoInSecs?: number;
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
 * <p>Defines the compliance against the resiliency policy for a disruption.</p>
 * @public
 */
export interface DisruptionCompliance {
  /**
   * <p>The Recovery Time Objective (RTO) that is achievable, in seconds</p>
   * @public
   */
  achievableRtoInSecs?: number;

  /**
   * <p>The current RTO, in seconds.</p>
   * @public
   */
  currentRtoInSecs?: number;

  /**
   * <p>Reference identifier of the RTO.</p>
   * @public
   */
  rtoReferenceId?: string;

  /**
   * <p>The RTO description.</p>
   * @public
   */
  rtoDescription?: string;

  /**
   * <p>The current RPO, in seconds.</p>
   * @public
   */
  currentRpoInSecs?: number;

  /**
   * <p>Reference identifier of the RPO .</p>
   * @public
   */
  rpoReferenceId?: string;

  /**
   * <p>The RPO description.</p>
   * @public
   */
  rpoDescription?: string;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus: ComplianceStatus | undefined;

  /**
   * <p>The Recovery Point Objective (RPO) that is achievable, in seconds.</p>
   * @public
   */
  achievableRpoInSecs?: number;

  /**
   * <p>The disruption compliance message.</p>
   * @public
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
 * <p>Defines a cost object.</p>
 * @public
 */
export interface Cost {
  /**
   * <p>The cost amount.</p>
   * @public
   */
  amount: number | undefined;

  /**
   * <p>The cost currency, for example <code>USD</code>.</p>
   * @public
   */
  currency: string | undefined;

  /**
   * <p>The cost frequency.</p>
   * @public
   */
  frequency: CostFrequency | undefined;
}

/**
 * @public
 * @enum
 */
export const DriftStatus = {
  DETECTED: "Detected",
  NOT_CHECKED: "NotChecked",
  NOT_DETECTED: "NotDetected",
} as const;

/**
 * @public
 */
export type DriftStatus = (typeof DriftStatus)[keyof typeof DriftStatus];

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
 * <p>Defines a failure policy.</p>
 * @public
 */
export interface FailurePolicy {
  /**
   * <p>Recovery Time Objective (RTO) in seconds.</p>
   * @public
   */
  rtoInSecs: number | undefined;

  /**
   * <p>Recovery Point Objective (RPO) in seconds.</p>
   * @public
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
  NOT_APPLICABLE: "NotApplicable",
} as const;

/**
 * @public
 */
export type ResiliencyPolicyTier = (typeof ResiliencyPolicyTier)[keyof typeof ResiliencyPolicyTier];

/**
 * <p>Defines a resiliency policy.</p>
 *          <note>
 *             <p>Resilience Hub allows you to provide a value of zero for <code>rtoInSecs</code>
 *         and <code>rpoInSecs</code> of your resiliency policy. But, while assessing your application,
 *         the lowest possible assessment result is near zero. Hence, if you provide value zero for
 *           <code>rtoInSecs</code> and <code>rpoInSecs</code>, the estimated workload RTO and
 *         estimated workload RPO result will be near zero and the <b>Compliance
 *           status</b> for your application will be set to <b>Policy
 *           breached</b>.</p>
 *          </note>
 * @public
 */
export interface ResiliencyPolicy {
  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn?: string;

  /**
   * <p>The name of the policy</p>
   * @public
   */
  policyName?: string;

  /**
   * <p>The description for the policy.</p>
   * @public
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   * @public
   */
  tier?: ResiliencyPolicyTier;

  /**
   * <p>Specifies the estimated cost tier of the resiliency policy.</p>
   * @public
   */
  estimatedCostTier?: EstimatedCostTier;

  /**
   * <p>The resiliency policy.</p>
   * @public
   */
  policy?: Partial<Record<DisruptionType, FailurePolicy>>;

  /**
   * <p>Date and time when the resiliency policy was created.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ResiliencyScoreType = {
  ALARM: "Alarm",
  COMPLIANCE: "Compliance",
  SOP: "Sop",
  TEST: "Test",
} as const;

/**
 * @public
 */
export type ResiliencyScoreType = (typeof ResiliencyScoreType)[keyof typeof ResiliencyScoreType];

/**
 * <p>Resiliency score of each scoring component. For more information about scoring component,
 *       see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/calculate-score.html">Calculating resiliency score</a>.</p>
 * @public
 */
export interface ScoringComponentResiliencyScore {
  /**
   * <p>Resiliency score points given for the scoring component. The score is always less than or
   *       equal to the <code>possibleScore</code>.</p>
   * @public
   */
  score?: number;

  /**
   * <p>Maximum possible score that can be obtained for the scoring component. </p>
   *          <p>For example, if the <code>possibleScore</code> is 20 points, it indicates the maximum
   *       possible score you can achieve for the scoring component when you run a new assessment after
   *       implementing all the Resilience Hub recommendations.</p>
   * @public
   */
  possibleScore?: number;

  /**
   * <p>Number of recommendations that must be implemented to obtain the maximum possible score
   *       for the scoring component. For SOPs, alarms, and tests, these are the number of
   *       recommendations that must be implemented. For compliance, these are the number of Application
   *       Components that have breached the resiliency policy.</p>
   *          <p>For example, if the <code>outstandingCount</code> for Alarms coverage scoring component is
   *       5, it indicates that 5 Amazon CloudWatch alarms need to be implemented to achieve the
   *       maximum possible score.</p>
   * @public
   */
  outstandingCount?: number;

  /**
   * <p>Number of recommendations that were excluded from the assessment.</p>
   *          <p>For example, if the <code>excludedCount</code> for Alarms coverage scoring component is 7,
   *       it indicates that 7 Amazon CloudWatch alarms are excluded from the assessment.</p>
   * @public
   */
  excludedCount?: number;
}

/**
 * <p>The overall resiliency score, returned as an object that includes the disruption score and
 *       outage score.</p>
 * @public
 */
export interface ResiliencyScore {
  /**
   * <p>The outage score for a valid key.</p>
   * @public
   */
  score: number | undefined;

  /**
   * <p>The disruption score for a valid key.</p>
   * @public
   */
  disruptionScore: Partial<Record<DisruptionType, number>> | undefined;

  /**
   * <p>The score generated by Resilience Hub for the scoring component after running an
   *       assessment.</p>
   *          <p>For example, if the <code>score</code> is 25 points, it indicates the overall score of
   *       your application generated by Resilience Hub after running an assessment.</p>
   * @public
   */
  componentScore?: Partial<Record<ResiliencyScoreType, ScoringComponentResiliencyScore>>;
}

/**
 * <p> Defines application resource errors. </p>
 * @public
 */
export interface ResourceError {
  /**
   * <p>Identifier of the logical resource. </p>
   * @public
   */
  logicalResourceId?: string;

  /**
   * <p>Identifier of the physical resource. </p>
   * @public
   */
  physicalResourceId?: string;

  /**
   * <p> This is the error message. </p>
   * @public
   */
  reason?: string;
}

/**
 * <p> A list of errors retrieving an application's resources. </p>
 * @public
 */
export interface ResourceErrorsDetails {
  /**
   * <p> A list of errors retrieving an application's resources. </p>
   * @public
   */
  resourceErrors?: ResourceError[];

  /**
   * <p> This indicates if there are more errors not listed in the resourceErrors list. </p>
   * @public
   */
  hasMoreErrors?: boolean;
}

/**
 * <p>Defines an application assessment.</p>
 * @public
 */
export interface AppAssessment {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Version of an application.</p>
   * @public
   */
  appVersion?: string;

  /**
   * <p>The entity that invoked the assessment.</p>
   * @public
   */
  invoker: AssessmentInvoker | undefined;

  /**
   * <p>Cost for the application.</p>
   * @public
   */
  cost?: Cost;

  /**
   * <p>Current resiliency score for an application.</p>
   * @public
   */
  resiliencyScore?: ResiliencyScore;

  /**
   * <p>Application compliance against the resiliency policy.</p>
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>>;

  /**
   * <p>Current status of the compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus?: ComplianceStatus;

  /**
   * <p>Current status of the assessment for the resiliency policy.</p>
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;

  /**
   * <p>Starting time for the action.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>End time for the action.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>Error or warning message from the assessment execution</p>
   * @public
   */
  message?: string;

  /**
   * <p>Name of the assessment.</p>
   * @public
   */
  assessmentName?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Resiliency policy of an application.</p>
   * @public
   */
  policy?: ResiliencyPolicy;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p> A resource error object containing a list of errors retrieving an application's
   *       resources. </p>
   * @public
   */
  resourceErrorsDetails?: ResourceErrorsDetails;

  /**
   * <p>Version name of the published application.</p>
   * @public
   */
  versionName?: string;

  /**
   * <p>Indicates if compliance drifts (deviations) were detected while running an assessment for
   *       your application.</p>
   * @public
   */
  driftStatus?: DriftStatus;
}

/**
 * <p>Defines an application assessment summary.</p>
 * @public
 */
export interface AppAssessmentSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Version of an application.</p>
   * @public
   */
  appVersion?: string;

  /**
   * <p>Current status of the assessment for the resiliency policy.</p>
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;

  /**
   * <p>Entity that invoked the assessment.</p>
   * @public
   */
  invoker?: AssessmentInvoker;

  /**
   * <p>Starting time for the action.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>End time for the action.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>Message from the assessment run.</p>
   * @public
   */
  message?: string;

  /**
   * <p>Name of the assessment.</p>
   * @public
   */
  assessmentName?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>TCurrent status of compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus?: ComplianceStatus;

  /**
   * <p>Cost for an application.</p>
   * @public
   */
  cost?: Cost;

  /**
   * <p>Current resiliency score for the application.</p>
   * @public
   */
  resiliencyScore?: number;

  /**
   * <p>Name of an application version.</p>
   * @public
   */
  versionName?: string;

  /**
   * <p>Indicates if compliance drifts (deviations) were detected while running an assessment for
   *       your application.</p>
   * @public
   */
  driftStatus?: DriftStatus;
}

/**
 * <p>Defines an Application Component.</p>
 * @public
 */
export interface AppComponent {
  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of Application Component.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Identifier of the Application Component.</p>
   * @public
   */
  id?: string;

  /**
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   * @public
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * <p>Defines the compliance of an Application Component against the resiliency policy.</p>
 * @public
 */
export interface AppComponentCompliance {
  /**
   * <p>The cost for the application.</p>
   * @public
   */
  cost?: Cost;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  appComponentName?: string;

  /**
   * <p>The compliance of the Application Component against the resiliency policy.</p>
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>>;

  /**
   * <p>The compliance message.</p>
   * @public
   */
  message?: string;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status?: ComplianceStatus;

  /**
   * <p>The current resiliency score for the application.</p>
   * @public
   */
  resiliencyScore?: ResiliencyScore;
}

/**
 * <p>The input source of the namespace that is located on your Amazon Elastic Kubernetes Service
 *       cluster.</p>
 * @public
 */
export interface EksSourceClusterNamespace {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is:
   * arn:<code>aws</code>:eks:<code>region</code>:<code>account-id</code>:cluster/<code>cluster-name</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * <p>Name of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.</p>
   * @public
   */
  namespace: string | undefined;
}

/**
 * <p> The Terraform s3 state file you need to import. </p>
 * @public
 */
export interface TerraformSource {
  /**
   * <p> The URL of the Terraform s3 state file you need to import. </p>
   * @public
   */
  s3StateFileUrl: string | undefined;
}

/**
 * <p>The list of Resilience Hub application input sources.</p>
 * @public
 */
export interface AppInputSource {
  /**
   * <p>The name of the input source.</p>
   * @public
   */
  sourceName?: string;

  /**
   * <p>The resource type of the input source.</p>
   * @public
   */
  importType: ResourceMappingType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the input source. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  sourceArn?: string;

  /**
   * <p>The name of the Terraform s3 state ﬁle.</p>
   * @public
   */
  terraformSource?: TerraformSource;

  /**
   * <p>The number of resources.</p>
   * @public
   */
  resourceCount?: number;

  /**
   * <p>The namespace on your Amazon Elastic Kubernetes Service cluster.</p>
   * @public
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}

/**
 * <p>Defines an application summary.</p>
 * @public
 */
export interface AppSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Date and time when the app was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus?: AppComplianceStatusType;

  /**
   * <p>The current resiliency score for the application.</p>
   * @public
   */
  resiliencyScore?: number;

  /**
   * <p> Assessment execution schedule with 'Daily' or 'Disabled' values. </p>
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType;

  /**
   * <p>Status of the application.</p>
   * @public
   */
  status?: AppStatusType;

  /**
   * <p>Indicates if compliance drifts (deviations) were detected while running an assessment for
   *       your application.</p>
   * @public
   */
  driftStatus?: AppDriftStatusType;

  /**
   * <p>Date and time of the most recent compliance evaluation.</p>
   * @public
   */
  lastAppComplianceEvaluationTime?: Date;

  /**
   * <p>Recovery Time Objective (RTO) in seconds.</p>
   * @public
   */
  rtoInSecs?: number;

  /**
   * <p>Recovery Point Objective (RPO) in seconds.</p>
   * @public
   */
  rpoInSecs?: number;
}

/**
 * <p>Version of an application.</p>
 * @public
 */
export interface AppVersionSummary {
  /**
   * <p>Version of an application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Identifier of the application version.</p>
   * @public
   */
  identifier?: number;

  /**
   * <p>Creation time of the application version.</p>
   * @public
   */
  creationTime?: Date;

  /**
   * <p>Name of the application version.</p>
   * @public
   */
  versionName?: string;
}

/**
 * <p>Defines the operational recommendation item that needs a status update.</p>
 * @public
 */
export interface UpdateRecommendationStatusItem {
  /**
   * <p>Resource identifier of the operational recommendation item.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>Identifier of the target Amazon Web Services account.</p>
   * @public
   */
  targetAccountId?: string;

  /**
   * <p>Identifier of the target Amazon Web Services Region.</p>
   * @public
   */
  targetRegion?: string;
}

/**
 * <p>Defines the operational recommendation item that is to be included or excluded.</p>
 * @public
 */
export interface UpdateRecommendationStatusRequestEntry {
  /**
   * <p>An identifier for an entry in this batch that is used to communicate the result.</p>
   *          <note>
   *             <p>The <code>entryId</code>s of a batch request need to be unique within a request.</p>
   *          </note>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>Reference identifier of the operational recommendation item.</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>The operational recommendation item.</p>
   * @public
   */
  item: UpdateRecommendationStatusItem | undefined;

  /**
   * <p>Indicates if the operational recommendation needs to be excluded. If set to True, the
   *       operational recommendation will be excluded.</p>
   * @public
   */
  excluded: boolean | undefined;

  /**
   * <p>Indicates the reason for excluding an operational recommendation.</p>
   * @public
   */
  excludeReason?: ExcludeRecommendationReason;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationStatusRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Defines the list of operational recommendations that need to be included or excluded.</p>
   * @public
   */
  requestEntries: UpdateRecommendationStatusRequestEntry[] | undefined;
}

/**
 * <p>List of operational recommendations that did not get included or excluded.</p>
 * @public
 */
export interface BatchUpdateRecommendationStatusFailedEntry {
  /**
   * <p>An identifier of an entry in this batch that is used to communicate the result.</p>
   *          <note>
   *             <p>The <code>entryId</code>s of a batch request need to be unique within a request.</p>
   *          </note>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>Indicates the error that occurred while excluding an operational recommendation.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>List of operational recommendations that were successfully included or excluded.</p>
 * @public
 */
export interface BatchUpdateRecommendationStatusSuccessfulEntry {
  /**
   * <p>An identifier for an entry in this batch that is used to communicate the result.</p>
   *          <note>
   *             <p>The <code>entryId</code>s of a batch request need to be unique within a request.</p>
   *          </note>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>Reference identifier of the operational recommendation.</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>The operational recommendation item.</p>
   * @public
   */
  item: UpdateRecommendationStatusItem | undefined;

  /**
   * <p>Indicates if the operational recommendation was successfully excluded.</p>
   * @public
   */
  excluded: boolean | undefined;

  /**
   * <p>Indicates the reason for excluding an operational recommendation.</p>
   * @public
   */
  excludeReason?: ExcludeRecommendationReason;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationStatusResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>A list of items that were included or excluded.</p>
   * @public
   */
  successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntry[] | undefined;

  /**
   * <p>A list of items with error details about each item, which could not be included or excluded.</p>
   * @public
   */
  failedEntries: BatchUpdateRecommendationStatusFailedEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * <p>Name of the application.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn?: string;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType;

  /**
   * <p>Defines the roles and credentials that Resilience Hub would use while creating the
   *       application, importing its resources, and running an assessment.</p>
   * @public
   */
  permissionModel?: PermissionModel;

  /**
   * <p>The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports only <b>Drift detected</b> and <b>Scheduled assessment failure</b> events notification.</p>
   * @public
   */
  eventSubscriptions?: EventSubscription[];
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * <p>The created application returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   * @public
   */
  app: App | undefined;
}

/**
 * <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 * @public
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
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Identifier of the Application Component.</p>
   * @public
   */
  id?: string;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Currently, there is no supported additional information for Application Components.</p>
   * @public
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAppVersionAppComponentResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>List of Application Components that belong to this resource.</p>
   * @public
   */
  appComponent?: AppComponent;
}

/**
 * <p>Defines a logical resource identifier.</p>
 * @public
 */
export interface LogicalResourceId {
  /**
   * <p>Identifier of the resource.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the CloudFormation stack this resource belongs to.</p>
   * @public
   */
  logicalStackName?: string;

  /**
   * <p>The name of the resource group that this resource belongs to.</p>
   * @public
   */
  resourceGroupName?: string;

  /**
   * <p> The name of the Terraform S3 state file this resource belongs to. </p>
   * @public
   */
  terraformSourceName?: string;

  /**
   * <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   * @public
   */
  eksSourceName?: string;
}

/**
 * @public
 */
export interface CreateAppVersionResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Name of the resource.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Logical identifier of the resource.</p>
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * <p>Physical identifier of the resource.</p>
   * @public
   */
  physicalResourceId: string | undefined;

  /**
   * <p>Amazon Web Services region that owns the physical resource.</p>
   * @public
   */
  awsRegion?: string;

  /**
   * <p>Amazon Web Services account that owns the physical resource.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>Type of resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   * @public
   */
  appComponents: string[] | undefined;

  /**
   * <p>Currently, there is no supported additional information for resources.</p>
   * @public
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
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
 * <p>Defines a physical resource. A physical resource is a resource that exists in your
 *       account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native identifier. </p>
 * @public
 */
export interface PhysicalResource {
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Logical identifier of the resource.</p>
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * <p>Identifier of the physical resource.</p>
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>Type of resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The application components that belong to this resource.</p>
   * @public
   */
  appComponents?: AppComponent[];

  /**
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   * @public
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * <p>Indicates if a resource is included or excluded from the assessment.</p>
   * @public
   */
  excluded?: boolean;

  /**
   * <p>Type of input source.</p>
   * @public
   */
  sourceType?: ResourceSourceType;

  /**
   * <p>Name of the parent resource.</p>
   * @public
   */
  parentResourceName?: string;
}

/**
 * @public
 */
export interface CreateAppVersionResourceResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   * @public
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
   * <p>Identifiers for the recommendations used to create a recommendation template.</p>
   * @public
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
   * @public
   */
  format?: TemplateFormat;

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
   * @public
   */
  recommendationTypes?: RenderRecommendationType[];

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>The name for the recommendation template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The name of the Amazon S3 bucket that will contain the recommendation template.</p>
   * @public
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
 * <p>The location of the Amazon S3 bucket.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket.</p>
   * @public
   */
  bucket?: string;

  /**
   * <p>The prefix for the Amazon S3 bucket.</p>
   * @public
   */
  prefix?: string;
}

/**
 * <p>Defines a recommendation template created with the <a>CreateRecommendationTemplate</a> action.</p>
 * @public
 */
export interface RecommendationTemplate {
  /**
   * <p>The file location of the template.</p>
   * @public
   */
  templatesLocation?: S3Location;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Identifiers for the recommendations used in the recommendation template.</p>
   * @public
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
   * @public
   */
  recommendationTypes: RenderRecommendationType[] | undefined;

  /**
   * <p>Format of the recommendation template.</p>
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
   * @public
   */
  format: TemplateFormat | undefined;

  /**
   * <p>Amazon Resource Name (ARN) for the recommendation template.</p>
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>Message for the recommendation template.</p>
   * @public
   */
  message?: string;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: RecommendationTemplateStatus | undefined;

  /**
   * <p>Name for the recommendation template.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The start time for the action.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The end time for the action.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>Indicates if replacements are needed.</p>
   * @public
   */
  needsReplacements?: boolean;
}

/**
 * @public
 */
export interface CreateRecommendationTemplateResponse {
  /**
   * <p>The newly created recommendation template, returned as an object. This object includes the
   *       template's name, format, status, tags, Amazon S3 bucket location, and more.</p>
   * @public
   */
  recommendationTemplate?: RecommendationTemplate;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyRequest {
  /**
   * <p>The name of the policy</p>
   * @public
   */
  policyName: string | undefined;

  /**
   * <p>The description for the policy.</p>
   * @public
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   * @public
   */
  tier: ResiliencyPolicyTier | undefined;

  /**
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   * @public
   */
  policy: Partial<Record<DisruptionType, FailurePolicy>> | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyResponse {
  /**
   * <p>The type of resiliency policy that was created, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   * @public
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>A boolean option to force the deletion of an Resilience Hub application. </p>
   * @public
   */
  forceDelete?: boolean;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAssessmentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppAssessmentResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAppInputSourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported resource you want to remove from the
   *       Resilience Hub application. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  sourceArn?: string;

  /**
   * <p>The imported Terraform s3 state ﬁle you want to remove from the Resilience Hub application.</p>
   * @public
   */
  terraformSource?: TerraformSource;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The namespace on your Amazon Elastic Kubernetes Service cluster that you want to delete from the Resilience Hub application.</p>
   * @public
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}

/**
 * @public
 */
export interface DeleteAppInputSourceResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Name of the input source from where the application resource is imported from.</p>
   * @public
   */
  appInputSource?: AppInputSource;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Identifier of the Application Component.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>List of Application Components that belong to this resource.</p>
   * @public
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Name of the resource.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Logical identifier of the resource.</p>
   * @public
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * <p>Physical identifier of the resource.</p>
   * @public
   */
  physicalResourceId?: string;

  /**
   * <p>Amazon Web Services region that owns the physical resource.</p>
   * @public
   */
  awsRegion?: string;

  /**
   * <p>Amazon Web Services account that owns the physical resource.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   * @public
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: RecommendationTemplateStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   * @public
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentResponse {
  /**
   * <p>The assessment for an Resilience Hub application, returned as an object. This object
   *       includes Amazon Resource Names (ARNs), compliance information, compliance status, cost,
   *       messages, resiliency scores, and more.</p>
   * @public
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter supports only failover region and account.</p>
   *          </note>
   * @public
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Identifier of the Application Component.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>List of Application Components that belong to this resource.</p>
   * @public
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Name of the resource.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Logical identifier of the resource.</p>
   * @public
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * <p>Physical identifier of the resource.</p>
   * @public
   */
  physicalResourceId?: string;

  /**
   * <p>Amazon Web Services region that owns the physical resource.</p>
   * @public
   */
  awsRegion?: string;

  /**
   * <p>Amazon Web Services account that owns the physical resource.</p>
   * @public
   */
  awsAccountId?: string;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   * @public
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
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
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
   */
  resolutionId: string | undefined;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: ResourceResolutionStatusType | undefined;

  /**
   * <p>The returned error message for the request.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
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
   *                <p>The list of logical resources that must be included in the Resilience Hub
   *           application.</p>
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
   *                      <p>Logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <p>Each <code>logicalResourceId</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>Identifier of the resource.</p>
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
   *                            <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
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
   *                <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   *                <p>Type: Array</p>
   *                <p>Each <code>appComponents</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>name</code>
   *                      </p>
   *                      <p>Name of the Application Component.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>type</code>
   *                      </p>
   *                      <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
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
   *                      <p>Logical identifier of the resource.</p>
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
   *                            <p>Identifier of the resource.</p>
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
   *                            <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
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
   *                <p>Resilience Hub application version.</p>
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
   * @public
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
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
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: ResourceImportStatusType | undefined;

  /**
   * <p>The time when the status last changed.</p>
   * @public
   */
  statusChangeTime: Date | undefined;

  /**
   * <p>The returned error message for the request.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyResponse {
  /**
   * <p>Information about the specific resiliency policy, returned as an object. This object
   *       includes creation time, data location constraints, its name, description, tags, the recovery
   *       time objective (RTO) and recovery point objective (RPO) in seconds, and more.</p>
   * @public
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * <p>The input source of the Amazon Elastic Kubernetes Service cluster.</p>
 * @public
 */
export interface EksSource {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is:
   * arn:<code>aws</code>:eks:<code>region</code>:<code>account-id</code>:cluster/<code>cluster-name</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * <p>The list of namespaces located on your Amazon Elastic Kubernetes Service cluster.</p>
   * @public
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
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the resources.</p>
   * @public
   */
  sourceArns?: string[];

  /**
   * <p> A list of terraform file s3 URLs you need to import. </p>
   * @public
   */
  terraformSources?: TerraformSource[];

  /**
   * <p>The import strategy you would like to set to import resources into Resilience Hub
   *       application.</p>
   * @public
   */
  importStrategy?: ResourceImportStrategyType;

  /**
   * <p>The input sources of the Amazon Elastic Kubernetes Service resources you need to import.</p>
   * @public
   */
  eksSources?: EksSource[];
}

/**
 * @public
 */
export interface ImportResourcesToDraftAppVersionResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the resources you have imported.</p>
   * @public
   */
  sourceArns?: string[];

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: ResourceImportStatusType | undefined;

  /**
   * <p>
   *       A list of terraform file s3 URLs you have imported.
   *     </p>
   * @public
   */
  terraformSources?: TerraformSource[];

  /**
   * <p>The input sources of the Amazon Elastic Kubernetes Service resources you have imported.</p>
   * @public
   */
  eksSources?: EksSource[];
}

/**
 * @public
 */
export interface ListAlarmRecommendationsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAlarmRecommendationsResponse {
  /**
   * <p>The alarm recommendations for an Resilience Hub application, returned as an object. This
   *       object includes Application Component names, descriptions, information about whether a
   *       recommendation has already been implemented or not, prerequisites, and more.</p>
   * @public
   */
  alarmRecommendations: AlarmRecommendation[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppAssessmentComplianceDriftsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Indicates the unique token number of the next application to be checked for compliance and regulatory requirements from the list of applications.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Indicates the maximum number of applications requested.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const DifferenceType = {
  ADDED: "Added",
  NOT_EQUAL: "NotEqual",
  REMOVED: "Removed",
} as const;

/**
 * @public
 */
export type DifferenceType = (typeof DifferenceType)[keyof typeof DifferenceType];

/**
 * @public
 * @enum
 */
export const DriftType = {
  APPLICATION_COMPLIANCE: "ApplicationCompliance",
  APP_COMPONENT_RESILIENCY_COMPLIANCE_STATUS: "AppComponentResiliencyComplianceStatus",
} as const;

/**
 * @public
 */
export type DriftType = (typeof DriftType)[keyof typeof DriftType];

/**
 * <p>Indicates the compliance drifts (recovery time objective (RTO) and recovery point
 *       objective (RPO)) that were detected for an assessed entity.</p>
 * @public
 */
export interface ComplianceDrift {
  /**
   * <p>Identifier of an entity in which drift was detected. For compliance drift, the entity ID
   *       can be either application ID or the AppComponent ID.</p>
   * @public
   */
  entityId?: string;

  /**
   * <p>The type of entity in which drift was detected. For compliance drifts, Resilience Hub supports <code>AWS::ResilienceHub::AppComponent</code> and
   *         <code>AWS::ResilienceHub::Application</code>.</p>
   * @public
   */
  entityType?: string;

  /**
   * <p>The type of drift detected. Currently, Resilience Hub supports only <b>ApplicationCompliance</b> drift type.</p>
   * @public
   */
  driftType?: DriftType;

  /**
   * <p>Identifier of your application.</p>
   * @public
   */
  appId?: string;

  /**
   * <p>Published version of your application on which drift was detected.</p>
   * @public
   */
  appVersion?: string;

  /**
   * <p>Assessment identifier of a previous assessment of the same application version. Resilience Hub uses the previous assessment (associated with the reference identifier) to
   *       compare the compliance with the current assessment to identify drifts.</p>
   * @public
   */
  expectedReferenceId?: string;

  /**
   * <p>The expected compliance value of an entity.</p>
   * @public
   */
  expectedValue?: Partial<Record<DisruptionType, DisruptionCompliance>>;

  /**
   * <p>Assessment identifier that is associated with this drift item.</p>
   * @public
   */
  actualReferenceId?: string;

  /**
   * <p>Actual compliance value of the entity.</p>
   * @public
   */
  actualValue?: Partial<Record<DisruptionType, DisruptionCompliance>>;

  /**
   * <p>Difference type between actual and expected recovery point objective (RPO) and recovery
   *       time objective (RTO) values. Currently, Resilience Hub supports only <b>NotEqual</b> difference type.</p>
   * @public
   */
  diffType?: DifferenceType;
}

/**
 * @public
 */
export interface ListAppAssessmentComplianceDriftsResponse {
  /**
   * <p>Indicates compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) detected for an assessed entity.</p>
   * @public
   */
  complianceDrifts: ComplianceDrift[] | undefined;

  /**
   * <p>Token number of the next application to be checked for compliance and regulatory requirements from the list of applications.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppAssessmentResourceDriftsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Indicates the maximum number of drift results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Defines a resource identifier for the drifted resource.</p>
 * @public
 */
export interface ResourceIdentifier {
  /**
   * <p>Logical identifier of the drifted resource.</p>
   * @public
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * <p>Type of the drifted resource.</p>
   * @public
   */
  resourceType?: string;
}

/**
 * <p>Indicates the resources that have drifted in the current application version.</p>
 * @public
 */
export interface ResourceDrift {
  /**
   * <p>Amazon Resource Name (ARN) of the application whose resources have drifted. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Version of the application whose resources have drifted.</p>
   * @public
   */
  appVersion?: string;

  /**
   * <p>Reference identifier of the resource drift.</p>
   * @public
   */
  referenceId?: string;

  /**
   * <p>Identifier of the drifted resource.</p>
   * @public
   */
  resourceIdentifier?: ResourceIdentifier;

  /**
   * <p>Indicates if the resource was added or removed.</p>
   * @public
   */
  diffType?: DifferenceType;
}

/**
 * @public
 */
export interface ListAppAssessmentResourceDriftsResponse {
  /**
   * <p>Indicates all the resource drifts detected for an assessed entity.</p>
   * @public
   */
  resourceDrifts: ResourceDrift[] | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppAssessmentsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>The name for the assessment.</p>
   * @public
   */
  assessmentName?: string;

  /**
   * <p>The current status of the assessment for the resiliency policy.</p>
   * @public
   */
  assessmentStatus?: AssessmentStatus[];

  /**
   * <p>The current status of compliance for the resiliency policy.</p>
   * @public
   */
  complianceStatus?: ComplianceStatus;

  /**
   * <p>Specifies the entity that invoked a specific assessment, either a <code>User</code> or the
   *         <code>System</code>.</p>
   * @public
   */
  invoker?: AssessmentInvoker;

  /**
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   * @public
   */
  reverseOrder?: boolean;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppAssessmentsResponse {
  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The summaries for the specified assessments, returned as an object. This object includes
   *       application versions, associated Amazon Resource Numbers (ARNs), cost, messages, resiliency
   *       scores, and more.</p>
   * @public
   */
  assessmentSummaries: AppAssessmentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesResponse {
  /**
   * <p>The compliances for an Resilience Hub Application Component, returned as an object. This
   *       object contains the names of the Application Components, compliances, costs, resiliency scores, outage scores, and
   *       more.</p>
   * @public
   */
  componentCompliances: AppComponentCompliance[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
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
 * <p>Defines a disruption compliance recommendation.</p>
 * @public
 */
export interface RecommendationDisruptionCompliance {
  /**
   * <p>The expected compliance status after applying the recommended configuration change.</p>
   * @public
   */
  expectedComplianceStatus: ComplianceStatus | undefined;

  /**
   * <p>The expected RTO after applying the recommended configuration change.</p>
   * @public
   */
  expectedRtoInSecs?: number;

  /**
   * <p>The expected Recovery Time Objective (RTO) description after applying the recommended
   *       configuration change.</p>
   * @public
   */
  expectedRtoDescription?: string;

  /**
   * <p>The expected RPO after applying the recommended configuration change.</p>
   * @public
   */
  expectedRpoInSecs?: number;

  /**
   * <p>The expected Recovery Point Objective (RPO) description after applying the recommended
   *       configuration change.</p>
   * @public
   */
  expectedRpoDescription?: string;
}

/**
 * <p>Defines a recommendation configuration.</p>
 * @public
 */
export interface ConfigRecommendation {
  /**
   * <p>The cost for the application.</p>
   * @public
   */
  cost?: Cost;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  appComponentName?: string;

  /**
   * <p>The current compliance against the resiliency policy before applying the configuration
   *       change.</p>
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>>;

  /**
   * <p>The expected compliance against the resiliency policy after applying the configuration
   *       change.</p>
   * @public
   */
  recommendationCompliance?: Partial<Record<DisruptionType, RecommendationDisruptionCompliance>>;

  /**
   * <p>The type of optimization.</p>
   * @public
   */
  optimizationType: ConfigRecommendationOptimizationType | undefined;

  /**
   * <p>The name of the recommendation configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   * @public
   */
  description?: string;

  /**
   * <p>List of the suggested configuration changes.</p>
   * @public
   */
  suggestedChanges?: string[];

  /**
   * <p>The architecture type.</p>
   * @public
   */
  haArchitecture?: HaArchitecture;

  /**
   * <p>Reference identifier for the recommendation configuration.</p>
   * @public
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
 * <p>Defines recommendations for an Resilience Hub Application Component, returned as an
 *       object. This object contains component names, configuration recommendations, and
 *       recommendation statuses.</p>
 * @public
 */
export interface ComponentRecommendation {
  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  appComponentName: string | undefined;

  /**
   * <p>Status of the recommendation.</p>
   * @public
   */
  recommendationStatus: RecommendationComplianceStatus | undefined;

  /**
   * <p>List of recommendations.</p>
   * @public
   */
  configRecommendations: ConfigRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsResponse {
  /**
   * <p>The recommendations for an Resilience Hub Application Component, returned as an object. This
   *       object contains the names of the Application Components, configuration recommendations, and recommendation
   *       statuses.</p>
   * @public
   */
  componentRecommendations: ComponentRecommendation[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppInputSourcesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of input sources to be displayed per Resilience Hub application.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppInputSourcesResponse {
  /**
   * <p>The list of Resilience Hub application input sources.</p>
   * @public
   */
  appInputSources: AppInputSource[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The name for the one of the listed applications.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>Indicates the lower limit of the range that is used to filter applications based on their last assessment times.</p>
   * @public
   */
  fromLastAssessmentTime?: Date;

  /**
   * <p>Indicates the upper limit of the range that is used to filter the applications based on their last assessment times.</p>
   * @public
   */
  toLastAssessmentTime?: Date;

  /**
   * <p>The application list is sorted based on the values of <code>lastAppComplianceEvaluationTime</code> field. By default, application list is sorted in ascending order. To sort the appliation list in descending order, set this field to <code>True</code>.</p>
   * @public
   */
  reverseOrder?: boolean;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * <p>Summaries for the Resilience Hub application.</p>
   * @public
   */
  appSummaries: AppSummary[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Version of the Application Component.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of Application Components to be displayed per Resilience Hub application version.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Defines an Application Component.</p>
   * @public
   */
  appComponents?: AppComponent[];

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsResponse {
  /**
   * <p>Mappings used to map logical resources from the template to physical resources. You can
   *       use the mapping type <code>CFN_STACK</code> if the application template uses
   *       a logical stack name. Or you can map individual resources by using the mapping type
   *       <code>RESOURCE</code>. We recommend using the mapping type <code>CFN_STACK</code> if the
   *       application is backed by a CloudFormation stack.</p>
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionResourcesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
   */
  resolutionId?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAppVersionResourcesResponse {
  /**
   * <p>The physical resources in the application version.</p>
   * @public
   */
  physicalResources: PhysicalResource[] | undefined;

  /**
   * <p>The ID for a specific resolution.</p>
   * @public
   */
  resolutionId: string | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAppVersionsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Lower limit of the time range to filter the application versions.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>Upper limit of the time range to filter the application versions.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListAppVersionsResponse {
  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersions: AppVersionSummary[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  assessmentArn?: string;

  /**
   * <p>The default is to sort by ascending <b>startTime</b>.
   * To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.</p>
   * @public
   */
  reverseOrder?: boolean;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status?: RecommendationTemplateStatus[];

  /**
   * <p>The Amazon Resource Name (ARN) for a recommendation template.</p>
   * @public
   */
  recommendationTemplateArn?: string;

  /**
   * <p>The name for one of the listed recommendation templates.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesResponse {
  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The recommendation templates for the Resilience Hub applications.</p>
   * @public
   */
  recommendationTemplates?: RecommendationTemplate[];
}

/**
 * @public
 */
export interface ListResiliencyPoliciesRequest {
  /**
   * <p>The name of the policy</p>
   * @public
   */
  policyName?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListResiliencyPoliciesResponse {
  /**
   * <p>The resiliency policies for the Resilience Hub applications.</p>
   * @public
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSopRecommendationsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
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
 * <p>Defines a standard operating procedure (SOP) recommendation.</p>
 * @public
 */
export interface SopRecommendation {
  /**
   * <p>The service type.</p>
   * @public
   */
  serviceType: SopServiceType | undefined;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  appComponentName?: string;

  /**
   * <p>Description of the SOP recommendation.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Identifier for the SOP recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>Name of the SOP recommendation.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The recommendation items.</p>
   * @public
   */
  items?: RecommendationItem[];

  /**
   * <p>Reference identifier for the SOP recommendation.</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>Prerequisite for the SOP recommendation.</p>
   * @public
   */
  prerequisite?: string;

  /**
   * <p>Status of the recommended standard operating procedure.</p>
   * @public
   */
  recommendationStatus?: RecommendationStatus;
}

/**
 * @public
 */
export interface ListSopRecommendationsResponse {
  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The standard operating procedure (SOP) recommendations for the Resilience Hub
   *       applications.</p>
   * @public
   */
  sopRecommendations: SopRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesResponse {
  /**
   * <p>The suggested resiliency policies for the Resilience Hub applications.</p>
   * @public
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub
   *       application.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTestRecommendationsRequest {
  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the assessment. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app-assessment/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
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
 * <p>Defines a test recommendation.</p>
 * @public
 */
export interface TestRecommendation {
  /**
   * <p>Identifier for the test recommendation.</p>
   * @public
   */
  recommendationId?: string;

  /**
   * <p>Reference identifier for the test recommendation.</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  appComponentName?: string;

  /**
   * <p>Name of the test recommendation.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Intent of the test recommendation.</p>
   * @public
   */
  intent?: string;

  /**
   * <p>Level of risk for this test recommendation.</p>
   * @public
   */
  risk?: TestRisk;

  /**
   * <p>Type of test recommendation.</p>
   * @public
   */
  type?: TestType;

  /**
   * <p>Description for the test recommendation.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The test recommendation items.</p>
   * @public
   */
  items?: RecommendationItem[];

  /**
   * <p>Prerequisite of the test recommendation.</p>
   * @public
   */
  prerequisite?: string;

  /**
   * <p> A list of recommended alarms that are used in the test and must be exported before or
   *       with the test. </p>
   * @public
   */
  dependsOnAlarms?: string[];

  /**
   * <p>Status of the recommended test.</p>
   * @public
   */
  recommendationStatus?: RecommendationStatus;
}

/**
 * @public
 */
export interface ListTestRecommendationsResponse {
  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The test recommendations for the Resilience Hub application.</p>
   * @public
   */
  testRecommendations: TestRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
   */
  resolutionId?: string;

  /**
   * <p>Null, or the token from a previous call to get the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to include in the response. If more results exist than the specified
   * <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Defines a resource that is not supported by Resilience Hub.</p>
 * @public
 */
export interface UnsupportedResource {
  /**
   * <p>Logical resource identifier for the unsupported resource.</p>
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * <p>Physical resource identifier for the unsupported resource.</p>
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The status of the unsupported resource.</p>
   * @public
   */
  unsupportedResourceStatus?: string;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesResponse {
  /**
   * <p>The unsupported resources for the application.</p>
   * @public
   */
  unsupportedResources: UnsupportedResource[] | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
   */
  resolutionId: string | undefined;

  /**
   * <p>Token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PublishAppVersionRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Name of the application version.</p>
   * @public
   */
  versionName?: string;
}

/**
 * @public
 */
export interface PublishAppVersionResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion?: string;

  /**
   * <p>Identifier of the application version.</p>
   * @public
   */
  identifier?: number;

  /**
   * <p>Name of the application version.</p>
   * @public
   */
  versionName?: string;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
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
   *                <p>The list of logical resources that must be included in the Resilience Hub
   *           application.</p>
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
   *                      <p>Logical identifier of the resource.</p>
   *                      <p>Type: Object</p>
   *                      <p>Each <code>logicalResourceId</code> object includes the following fields:</p>
   *                      <ul>
   *                         <li>
   *                            <p>
   *                               <code>identifier</code>
   *                            </p>
   *                            <p>Identifier of the resource.</p>
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
   *                            <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
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
   *                <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   *                <p>Type: Array</p>
   *                <p>Each <code>appComponents</code> array item includes the following fields:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>name</code>
   *                      </p>
   *                      <p>Name of the Application Component.</p>
   *                      <p>Type: String</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>type</code>
   *                      </p>
   *                      <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
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
   *                      <p>Logical identifier of the resource.</p>
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
   *                            <p>Identifier of the resource.</p>
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
   *                            <p>Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.</p>
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
   *                <p>Resilience Hub application version.</p>
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
   * @public
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion?: string;
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The names of the resources you want to remove from the resource mappings.</p>
   * @public
   */
  resourceNames?: string[];

  /**
   * <p>The names of the CloudFormation stacks you want to remove from the resource mappings.</p>
   * @public
   */
  logicalStackNames?: string[];

  /**
   * <p>The names of the registered applications you want to remove from the resource mappings.</p>
   * @public
   */
  appRegistryAppNames?: string[];

  /**
   * <p>The names of the resource groups you want to remove from the resource mappings.</p>
   * @public
   */
  resourceGroupNames?: string[];

  /**
   * <p>The names of the Terraform sources you want to remove from the resource mappings.</p>
   * @public
   */
  terraformSourceNames?: string[];

  /**
   * <p>The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.</p>
   *          <note>
   *             <p>This parameter accepts values in "eks-cluster/namespace" format.</p>
   *          </note>
   * @public
   */
  eksSourceNames?: string[];
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn?: string;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion?: string;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The identifier for a specific resolution.</p>
   * @public
   */
  resolutionId: string | undefined;

  /**
   * <p>Status of the action.</p>
   * @public
   */
  status: ResourceResolutionStatusType | undefined;
}

/**
 * @public
 */
export interface StartAppAssessmentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The version of the application.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>The name for the assessment.</p>
   * @public
   */
  assessmentName: string | undefined;

  /**
   * <p>Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters.
   * You should not reuse the same client token for other API requests.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource.
   * Each tag consists of a key/value pair.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface StartAppAssessmentResponse {
  /**
   * <p>The assessment created.</p>
   * @public
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to assign to the resource. Each tag consists of a key/value pair.</p>
   * @public
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
   * <p>Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags you want to remove.</p>
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
export interface UpdateAppRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>The optional description for an app.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn?: string;

  /**
   * <p>Specifies if the resiliency policy ARN should be cleared.</p>
   * @public
   */
  clearResiliencyPolicyArn?: boolean;

  /**
   * <p>
   *       Assessment execution schedule with 'Daily' or 'Disabled' values.
   *     </p>
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType;

  /**
   * <p>Defines the roles and credentials that Resilience Hub would use while creating
   *       an
   *       application, importing its resources, and running an assessment.</p>
   * @public
   */
  permissionModel?: PermissionModel;

  /**
   * <p>The list of events you would like to subscribe and get notification for.
   *       Currently, Resilience Hub supports notifications only for <b>Drift
   *         detected</b> and <b>Scheduled assessment failure</b>
   *       events.</p>
   * @public
   */
  eventSubscriptions?: EventSubscription[];
}

/**
 * @public
 */
export interface UpdateAppResponse {
  /**
   * <p>The specified application, returned as an object with details including compliance status,
   *       creation time, description, resiliency score, and more.</p>
   * @public
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.</p>
   *             <p>Key: <code>"failover-regions"</code>
   *             </p>
   *             <p>Value: <code>"[\{"region":"&lt;REGION&gt;", "accounts":[\{"id":"&lt;ACCOUNT_ID&gt;"\}]\}]"</code>
   *             </p>
   *          </note>
   * @public
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Additional configuration parameters for an Resilience Hub application. If you want to implement <code>additionalInfo</code> through the Resilience Hub console rather than using an API call, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html">Configure the application configuration parameters</a>.</p>
   *          <note>
   *             <p>Currently, this parameter supports only failover region and account.</p>
   *          </note>
   * @public
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Identifier of the Application Component.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the Application Component.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.</p>
   * @public
   */
  type?: string;

  /**
   * <p>Currently, there is no supported additional information for Application Components.</p>
   * @public
   */
  additionalInfo?: Record<string, string[]>;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>List of Application Components that belong to this resource.</p>
   * @public
   */
  appComponent?: AppComponent;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Name of the resource.</p>
   * @public
   */
  resourceName?: string;

  /**
   * <p>Logical identifier of the resource.</p>
   * @public
   */
  logicalResourceId?: LogicalResourceId;

  /**
   * <p>Physical identifier of the resource.</p>
   * @public
   */
  physicalResourceId?: string;

  /**
   * <p>Amazon Web Services region that owns the physical resource.</p>
   * @public
   */
  awsRegion?: string;

  /**
   * <p>Amazon Web Services account that owns the physical resource.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>Type of resource.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.</p>
   * @public
   */
  appComponents?: string[];

  /**
   * <p>Currently, there is no supported additional information for resources.</p>
   * @public
   */
  additionalInfo?: Record<string, string[]>;

  /**
   * <p>Indicates if a resource is excluded from an Resilience Hub application.</p>
   *          <note>
   *             <p>You can exclude only imported resources from an Resilience Hub application.</p>
   *          </note>
   * @public
   */
  excluded?: boolean;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  appArn: string | undefined;

  /**
   * <p>Resilience Hub application version.</p>
   * @public
   */
  appVersion: string | undefined;

  /**
   * <p>Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.</p>
   * @public
   */
  physicalResource?: PhysicalResource;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is:
   * arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i> guide.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy</p>
   * @public
   */
  policyName?: string;

  /**
   * <p>The description for the policy.</p>
   * @public
   */
  policyDescription?: string;

  /**
   * <p>Specifies a high-level geographical location constraint for where your resilience policy
   *       data can be stored.</p>
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint;

  /**
   * <p>The tier for this resiliency policy, ranging from the highest severity
   *         (<code>MissionCritical</code>) to lowest (<code>NonCritical</code>).</p>
   * @public
   */
  tier?: ResiliencyPolicyTier;

  /**
   * <p>The type of resiliency policy to be created, including the recovery time objective (RTO)
   *       and recovery point objective (RPO) in seconds.</p>
   * @public
   */
  policy?: Partial<Record<DisruptionType, FailurePolicy>>;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyResponse {
  /**
   * <p>The type of resiliency policy that was updated, including the recovery time objective
   *       (RTO) and recovery point objective (RPO) in seconds.</p>
   * @public
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
