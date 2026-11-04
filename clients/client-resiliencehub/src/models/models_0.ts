// smithy-typescript generated code
import type {
  AlarmType,
  AppAssessmentScheduleType,
  AppComplianceStatusType,
  AppDriftStatusType,
  AppStatusType,
  AssessmentInvoker,
  AssessmentStatus,
  ComplianceStatus,
  ConditionOperatorType,
  ConfigRecommendationOptimizationType,
  CostFrequency,
  DataLocationConstraint,
  DifferenceType,
  DisruptionType,
  DriftStatus,
  DriftType,
  EstimatedCostTier,
  EventType,
  ExcludeRecommendationReason,
  FieldAggregationType,
  GroupingRecommendationConfidenceLevel,
  GroupingRecommendationRejectionReason,
  GroupingRecommendationStatusType,
  HaArchitecture,
  MetricsExportStatusType,
  PermissionModelType,
  PhysicalIdentifierType,
  RecommendationComplianceStatus,
  RecommendationStatus,
  RecommendationTemplateStatus,
  RenderRecommendationType,
  ResiliencyPolicyTier,
  ResiliencyScoreType,
  ResourceImportStatusType,
  ResourceImportStrategyType,
  ResourceMappingType,
  ResourceResolutionStatusType,
  ResourcesGroupingRecGenStatusType,
  ResourceSourceType,
  SopServiceType,
  TemplateFormat,
  TestRisk,
  TestType,
} from "./enums";

/**
 * Indicates the grouping recommendation you have accepted to include in your application.
 *
 * @public
 */
export interface AcceptGroupingRecommendationEntry {
  /**
   * Indicates the identifier of the grouping recommendation.
   *
   * @public
   */
  groupingRecommendationId: string | undefined;
}

/**
 * @public
 */
export interface AcceptResourceGroupingRecommendationsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * List of resource grouping recommendations you want to include in your application.
   *
   * @public
   */
  entries: AcceptGroupingRecommendationEntry[] | undefined;
}

/**
 * Indicates the accepted grouping recommendation whose implementation failed.
 *
 * @public
 */
export interface FailedGroupingRecommendationEntry {
  /**
   * Indicates the identifier of the grouping recommendation.
   *
   * @public
   */
  groupingRecommendationId: string | undefined;

  /**
   * Indicates the error that occurred while implementing a grouping recommendation.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface AcceptResourceGroupingRecommendationsResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * List of resource grouping recommendations that could not be included in your application.
   *
   * @public
   */
  failedEntries: FailedGroupingRecommendationEntry[] | undefined;
}

/**
 * Defines a physical resource identifier.
 *
 * @public
 */
export interface PhysicalResourceId {
  /**
   * Identifier of the physical resource.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies the type of physical resource identifier.
   *
   * - **Arn**
   *
   *   The resource identifier is an Amazon Resource Name (ARN) and it can identify the following list of resources:
   *
   *   - `AWS::ECS::Service`
   *   - `AWS::EFS::FileSystem`
   *   - `AWS::ElasticLoadBalancingV2::LoadBalancer`
   *   - `AWS::Lambda::Function`
   *   - `AWS::SNS::Topic`
   *
   * - **Native**
   *
   *   The resource identifier is an Resilience Hub-native identifier and it can identify the following list of resources:
   *
   *   - `AWS::ApiGateway::RestApi`
   *   - `AWS::ApiGatewayV2::Api`
   *   - `AWS::AutoScaling::AutoScalingGroup`
   *   - `AWS::DocDB::DBCluster`
   *   - `AWS::DocDB::DBGlobalCluster`
   *   - `AWS::DocDB::DBInstance`
   *   - `AWS::DynamoDB::GlobalTable`
   *   - `AWS::DynamoDB::Table`
   *   - `AWS::EC2::EC2Fleet`
   *   - `AWS::EC2::Instance`
   *   - `AWS::EC2::NatGateway`
   *   - `AWS::EC2::Volume`
   *   - `AWS::ElasticLoadBalancing::LoadBalancer`
   *   - `AWS::RDS::DBCluster`
   *   - `AWS::RDS::DBInstance`
   *   - `AWS::RDS::GlobalCluster`
   *   - `AWS::Route53::RecordSet`
   *   - `AWS::S3::Bucket`
   *   - `AWS::SQS::Queue`
   *
   * @public
   */
  type: PhysicalIdentifierType | undefined;

  /**
   * The Amazon Web Services Region that the physical resource is located in.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The Amazon Web Services account that owns the physical resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * Defines a resource mapping.
 *
 * @public
 */
export interface ResourceMapping {
  /**
   * Name of the resource that this resource is mapped to when the `mappingType` is `Resource`.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Name of the CloudFormation stack this resource is mapped to when the `mappingType` is `CfnStack`.
   *
   * @public
   */
  logicalStackName?: string | undefined;

  /**
   * Name of the application this resource is mapped to when the `mappingType` is `AppRegistryApp`.
   *
   * @public
   */
  appRegistryAppName?: string | undefined;

  /**
   * Name of the Resource Groups that this resource is mapped to when the `mappingType` is `ResourceGroup`.
   *
   * @public
   */
  resourceGroupName?: string | undefined;

  /**
   * Specifies the type of resource mapping.
   *
   * @public
   */
  mappingType: ResourceMappingType | undefined;

  /**
   * Identifier of the physical resource.
   *
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * Name of the Terraform source that this resource is mapped to when the `mappingType` is `Terraform`.
   *
   * @public
   */
  terraformSourceName?: string | undefined;

  /**
   * Name of the Amazon Elastic Kubernetes Service cluster and namespace that this resource is mapped to when the `mappingType` is `EKS`.
   *
   * > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   * @public
   */
  eksSourceName?: string | undefined;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Mappings used to map logical resources from the template to physical resources. You can use the mapping type `CFN_STACK` if the application template uses a logical stack name. Or you can map individual resources by using the mapping type `RESOURCE`. We recommend using the mapping type `CFN_STACK` if the application is backed by a CloudFormation stack.
   *
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * @public
 */
export interface AddDraftAppVersionResourceMappingsResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * List of sources that are used to map a logical resource from the template to a physical resource. You can use sources such as CloudFormation, Terraform state files, AppRegistry applications, or Amazon EKS.
   *
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;
}

/**
 * Indicates the Amazon CloudWatch alarm detected while running an assessment.
 *
 * @public
 */
export interface Alarm {
  /**
   * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
   *
   * @public
   */
  alarmArn?: string | undefined;

  /**
   * Indicates the source of the Amazon CloudWatch alarm. That is, it indicates if the alarm was created using Resilience Hub recommendation (`AwsResilienceHub`), or if you had created the alarm in Amazon CloudWatch (`Customer`).
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * Indicates the FIS experiment detected while running an assessment.
 *
 * @public
 */
export interface Experiment {
  /**
   * Amazon Resource Name (ARN) of the FIS experiment.
   *
   * @public
   */
  experimentArn?: string | undefined;

  /**
   * Identifier of the FIS experiment template.
   *
   * @public
   */
  experimentTemplateId?: string | undefined;
}

/**
 * Defines a recommendation.
 *
 * @public
 */
export interface RecommendationItem {
  /**
   * Identifier of the resource.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Identifier of the target account.
   *
   * @public
   */
  targetAccountId?: string | undefined;

  /**
   * The target region.
   *
   * @public
   */
  targetRegion?: string | undefined;

  /**
   * Specifies if the recommendation has already been implemented.
   *
   * @public
   */
  alreadyImplemented?: boolean | undefined;

  /**
   * Indicates if an operational recommendation item is excluded.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * Indicates the reason for excluding an operational recommendation.
   *
   * @public
   */
  excludeReason?: ExcludeRecommendationReason | undefined;

  /**
   * Indicates the experiment created in FIS that was discovered by Resilience Hub, which matches the recommendation.
   *
   * @public
   */
  latestDiscoveredExperiment?: Experiment | undefined;

  /**
   * Indicates the previously implemented Amazon CloudWatch alarm discovered by Resilience Hub.
   *
   * @public
   */
  discoveredAlarm?: Alarm | undefined;
}

/**
 * Defines a recommendation for a CloudWatch alarm.
 *
 * @public
 */
export interface AlarmRecommendation {
  /**
   * Identifier of the alarm recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * Reference identifier of the alarm recommendation.
   *
   * @public
   */
  referenceId: string | undefined;

  /**
   * Name of the alarm recommendation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Description of the alarm recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Type of alarm recommendation.
   *
   * @public
   */
  type: AlarmType | undefined;

  /**
   * Application Component name for the CloudWatch alarm recommendation. This name is saved as the first item in the `appComponentNames` list.
   *
   * @deprecated An alarm recommendation can be attached to multiple Application Components, hence this property will be replaced by the new property 'appComponentNames'.
   * @public
   */
  appComponentName?: string | undefined;

  /**
   * List of CloudWatch alarm recommendations.
   *
   * @public
   */
  items?: RecommendationItem[] | undefined;

  /**
   * The prerequisite for the alarm recommendation.
   *
   * @public
   */
  prerequisite?: string | undefined;

  /**
   * List of Application Component names for the CloudWatch alarm recommendation.
   *
   * @public
   */
  appComponentNames?: string[] | undefined;

  /**
   * Status of the recommended Amazon CloudWatch alarm.
   *
   * @public
   */
  recommendationStatus?: RecommendationStatus | undefined;
}

/**
 * Indicates an event you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for **Drift detected** and **Scheduled assessment failure** events.
 *
 * @public
 */
export interface EventSubscription {
  /**
   * Unique name to identify an event subscription.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of event you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for **Drift detected** (`DriftDetected`) and **Scheduled assessment failure** (`ScheduledAssessmentFailure`) events.
   *
   * @public
   */
  eventType: EventType | undefined;

  /**
   * Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. The format for this ARN is: `arn:partition:sns:region:account:topic-name`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  snsTopicArn?: string | undefined;
}

/**
 * Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment.
 *
 * @public
 */
export interface PermissionModel {
  /**
   * Defines how Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your Amazon Web Services account, or by using the credentials of the current IAM user.
   *
   * @public
   */
  type: PermissionModelType | undefined;

  /**
   * Existing Amazon Web Services IAM role name in the primary Amazon Web Services account that will be assumed by Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
   *
   * If your IAM role includes a path, you must include the path in the `invokerRoleName` parameter. For example, if your IAM role's ARN is `arn:aws:iam:123456789012:role/my-path/role-name`, you should pass `my-path/role-name`.
   *
   * > **Note:**
   * >
   * > - You must have `iam:passRole` permission for this role while creating or updating the application.
   * > - Currently, `invokerRoleName` accepts only `[A-Za-z0-9_+=,.@-]` characters.
   *
   * @public
   */
  invokerRoleName?: string | undefined;

  /**
   * Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
   *
   * > **Note:**
   * >
   * > - These ARNs are required only when your resources are in other accounts and you have different role name in these accounts. Else, the invoker role name will be used in the other accounts.
   * > - These roles must have a trust policy with `iam:AssumeRole` permission to the invoker role in the primary account.
   *
   * @public
   */
  crossAccountRoleArns?: string[] | undefined;
}

/**
 * Defines an Resilience Hub application.
 *
 * @public
 */
export interface App {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Name for the application.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Optional description for an application.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * Date and time when the application was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Status of the application.
   *
   * @public
   */
  status?: AppStatusType | undefined;

  /**
   * Current status of compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus?: AppComplianceStatusType | undefined;

  /**
   * Date and time the most recent compliance evaluation.
   *
   * @public
   */
  lastAppComplianceEvaluationTime?: Date | undefined;

  /**
   * Current resiliency score for the application.
   *
   * @public
   */
  resiliencyScore?: number | undefined;

  /**
   * Date and time the most recent resiliency score evaluation.
   *
   * @public
   */
  lastResiliencyScoreEvaluationTime?: Date | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Assessment execution schedule with 'Daily' or 'Disabled' values.
   *
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType | undefined;

  /**
   * Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for **Drift detected** and **Scheduled assessment failure** events.
   *
   * @public
   */
  eventSubscriptions?: EventSubscription[] | undefined;

  /**
   * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
   *
   * @public
   */
  driftStatus?: AppDriftStatusType | undefined;

  /**
   * Indicates the last time that a drift was evaluated.
   *
   * @public
   */
  lastDriftEvaluationTime?: Date | undefined;

  /**
   * Recovery Time Objective (RTO) in seconds.
   *
   * @public
   */
  rtoInSecs?: number | undefined;

  /**
   * Recovery Point Objective (RPO) in seconds.
   *
   * @public
   */
  rpoInSecs?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  awsApplicationArn?: string | undefined;
}

/**
 * Defines the compliance against the resiliency policy for a disruption.
 *
 * @public
 */
export interface DisruptionCompliance {
  /**
   * The Recovery Time Objective (RTO) that is achievable, in seconds
   *
   * @public
   */
  achievableRtoInSecs?: number | undefined;

  /**
   * The current RTO, in seconds.
   *
   * @public
   */
  currentRtoInSecs?: number | undefined;

  /**
   * Reference identifier of the RTO.
   *
   * @public
   */
  rtoReferenceId?: string | undefined;

  /**
   * The RTO description.
   *
   * @public
   */
  rtoDescription?: string | undefined;

  /**
   * The current RPO, in seconds.
   *
   * @public
   */
  currentRpoInSecs?: number | undefined;

  /**
   * Reference identifier of the RPO .
   *
   * @public
   */
  rpoReferenceId?: string | undefined;

  /**
   * The RPO description.
   *
   * @public
   */
  rpoDescription?: string | undefined;

  /**
   * The current status of compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus: ComplianceStatus | undefined;

  /**
   * The Recovery Point Objective (RPO) that is achievable, in seconds.
   *
   * @public
   */
  achievableRpoInSecs?: number | undefined;

  /**
   * The disruption compliance message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Defines a cost object.
 *
 * @public
 */
export interface Cost {
  /**
   * The cost amount.
   *
   * @public
   */
  amount: number | undefined;

  /**
   * The cost currency, for example `USD`.
   *
   * @public
   */
  currency: string | undefined;

  /**
   * The cost frequency.
   *
   * @public
   */
  frequency: CostFrequency | undefined;
}

/**
 * Defines a failure policy.
 *
 * @public
 */
export interface FailurePolicy {
  /**
   * Recovery Time Objective (RTO) in seconds.
   *
   * @public
   */
  rtoInSecs: number | undefined;

  /**
   * Recovery Point Objective (RPO) in seconds.
   *
   * @public
   */
  rpoInSecs: number | undefined;
}

/**
 * Defines a resiliency policy.
 *
 * > **Note:** Resilience Hub allows you to provide a value of zero for `rtoInSecs` and `rpoInSecs` of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and estimated workload RPO result will be near zero and the **Compliance status** for your application will be set to **Policy breached**.
 *
 * @public
 */
export interface ResiliencyPolicy {
  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The name of the policy
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Description of the resiliency policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
   *
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint | undefined;

  /**
   * The tier for this resiliency policy, ranging from the highest severity (`MissionCritical`) to lowest (`NonCritical`).
   *
   * @public
   */
  tier?: ResiliencyPolicyTier | undefined;

  /**
   * Specifies the estimated cost tier of the resiliency policy.
   *
   * @public
   */
  estimatedCostTier?: EstimatedCostTier | undefined;

  /**
   * The resiliency policy.
   *
   * @public
   */
  policy?: Partial<Record<DisruptionType, FailurePolicy>> | undefined;

  /**
   * Date and time when the resiliency policy was created.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Resiliency score of each scoring component. For more information about scoring component, see [Calculating resiliency score](https://docs.aws.amazon.com/resilience-hub/latest/userguide/calculate-score.html).
 *
 * @public
 */
export interface ScoringComponentResiliencyScore {
  /**
   * Resiliency score points given for the scoring component. The score is always less than or equal to the `possibleScore`.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * Maximum possible score that can be obtained for the scoring component.
   *
   * For example, if the `possibleScore` is 20 points, it indicates the maximum possible score you can achieve for the scoring component when you run a new assessment after implementing all the Resilience Hub recommendations.
   *
   * @public
   */
  possibleScore?: number | undefined;

  /**
   * Number of recommendations that must be implemented to obtain the maximum possible score for the scoring component. For SOPs, alarms, and tests, these are the number of recommendations that must be implemented. For compliance, these are the number of Application Components that have breached the resiliency policy.
   *
   * For example, if the `outstandingCount` for Alarms coverage scoring component is 5, it indicates that 5 Amazon CloudWatch alarms need to be implemented to achieve the maximum possible score.
   *
   * @public
   */
  outstandingCount?: number | undefined;

  /**
   * Number of recommendations that were excluded from the assessment.
   *
   * For example, if the `excludedCount` for Alarms coverage scoring component is 7, it indicates that 7 Amazon CloudWatch alarms are excluded from the assessment.
   *
   * @public
   */
  excludedCount?: number | undefined;
}

/**
 * The overall resiliency score, returned as an object that includes the disruption score and outage score.
 *
 * @public
 */
export interface ResiliencyScore {
  /**
   * The outage score for a valid key.
   *
   * @public
   */
  score: number | undefined;

  /**
   * The disruption score for a valid key.
   *
   * @public
   */
  disruptionScore: Partial<Record<DisruptionType, number>> | undefined;

  /**
   * The score generated by Resilience Hub for the scoring component after running an assessment.
   *
   * For example, if the `score` is 25 points, it indicates the overall score of your application generated by Resilience Hub after running an assessment.
   *
   * @public
   */
  componentScore?: Partial<Record<ResiliencyScoreType, ScoringComponentResiliencyScore>> | undefined;
}

/**
 * Defines application resource errors.
 *
 * @public
 */
export interface ResourceError {
  /**
   * Identifier of the logical resource.
   *
   * @public
   */
  logicalResourceId?: string | undefined;

  /**
   * Identifier of the physical resource.
   *
   * @public
   */
  physicalResourceId?: string | undefined;

  /**
   * This is the error message.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * A list of errors retrieving an application's resources.
 *
 * @public
 */
export interface ResourceErrorsDetails {
  /**
   * A list of errors retrieving an application's resources.
   *
   * @public
   */
  resourceErrors?: ResourceError[] | undefined;

  /**
   * This indicates if there are more errors not listed in the `resourceErrors` list.
   *
   * @public
   */
  hasMoreErrors?: boolean | undefined;
}

/**
 * Indicates a specific risk identified in the Resilience Hub assessment and the corresponding recommendation provided to address that risk.
 *
 * > **Note:** The assessment summary generated by large language models (LLMs) on Amazon Bedrock are only suggestions. The current level of generative AI technology is not perfect and LLMs are not infallible. Bias and incorrect answers, although rare, should be expected. Review each recommendation in the assessment summary before you use the output from an LLM.
 *
 * > **Note:** This property is available only in the US East (N. Virginia) Region.
 *
 * @public
 */
export interface AssessmentRiskRecommendation {
  /**
   * Indicates the description of the potential risk identified in the application as part of the Resilience Hub assessment.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  risk?: string | undefined;

  /**
   * Indicates the recommendation provided by the Resilience Hub to address the identified risks in the application.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * Indicates the Application Components (AppComponents) that were assessed as part of the assessment and are associated with the identified risk and recommendation.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  appComponents?: string[] | undefined;
}

/**
 * Indicates the AI-generated summary for the Resilience Hub assessment, providing a concise overview that highlights the top risks and recommendations.
 *
 * > **Note:** This property is available only in the US East (N. Virginia) Region.
 *
 * @public
 */
export interface AssessmentSummary {
  /**
   * Indicates a concise summary that provides an overview of the Resilience Hub assessment.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  summary?: string | undefined;

  /**
   * Indicates the top risks and recommendations identified by the Resilience Hub assessment, each representing a specific risk and the corresponding recommendation to address it.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  riskRecommendations?: AssessmentRiskRecommendation[] | undefined;
}

/**
 * Defines an application assessment.
 *
 * @public
 */
export interface AppAssessment {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Version of an application.
   *
   * @public
   */
  appVersion?: string | undefined;

  /**
   * The entity that invoked the assessment.
   *
   * @public
   */
  invoker: AssessmentInvoker | undefined;

  /**
   * Cost for the application.
   *
   * @public
   */
  cost?: Cost | undefined;

  /**
   * Current resiliency score for an application.
   *
   * @public
   */
  resiliencyScore?: ResiliencyScore | undefined;

  /**
   * Application compliance against the resiliency policy.
   *
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>> | undefined;

  /**
   * Current status of the compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus?: ComplianceStatus | undefined;

  /**
   * Current status of the assessment for the resiliency policy.
   *
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;

  /**
   * Starting time for the action.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * End time for the action.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Error or warning message from the assessment execution
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Name of the assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Resiliency policy of an application.
   *
   * @public
   */
  policy?: ResiliencyPolicy | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A resource error object containing a list of errors retrieving an application's resources.
   *
   * @public
   */
  resourceErrorsDetails?: ResourceErrorsDetails | undefined;

  /**
   * Version name of the published application.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
   *
   * @public
   */
  driftStatus?: DriftStatus | undefined;

  /**
   * Indicates the AI-generated summary for the Resilience Hub assessment, providing a concise overview that highlights the top risks and recommendations.
   *
   * > **Note:** This property is available only in the US East (N. Virginia) Region.
   *
   * @public
   */
  summary?: AssessmentSummary | undefined;
}

/**
 * Defines an application assessment summary.
 *
 * @public
 */
export interface AppAssessmentSummary {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Version of an application.
   *
   * @public
   */
  appVersion?: string | undefined;

  /**
   * Current status of the assessment for the resiliency policy.
   *
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;

  /**
   * Entity that invoked the assessment.
   *
   * @public
   */
  invoker?: AssessmentInvoker | undefined;

  /**
   * Starting time for the action.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * End time for the action.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Message from the assessment run.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Name of the assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Current status of compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus?: ComplianceStatus | undefined;

  /**
   * Cost for an application.
   *
   * @public
   */
  cost?: Cost | undefined;

  /**
   * Current resiliency score for the application.
   *
   * @public
   */
  resiliencyScore?: number | undefined;

  /**
   * Name of an application version.
   *
   * @public
   */
  versionName?: string | undefined;

  /**
   * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
   *
   * @public
   */
  driftStatus?: DriftStatus | undefined;
}

/**
 * Defines an Application Component.
 *
 * @public
 */
export interface AppComponent {
  /**
   * Name of the Application Component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of Application Component.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Identifier of the Application Component.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   * > **Note:**
   * >
   * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   * >
   * > Key: `"failover-regions"`
   * >
   * > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;
}

/**
 * Defines the compliance of an Application Component against the resiliency policy.
 *
 * @public
 */
export interface AppComponentCompliance {
  /**
   * The cost for the application.
   *
   * @public
   */
  cost?: Cost | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  appComponentName?: string | undefined;

  /**
   * The compliance of the Application Component against the resiliency policy.
   *
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>> | undefined;

  /**
   * The compliance message.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status?: ComplianceStatus | undefined;

  /**
   * The current resiliency score for the application.
   *
   * @public
   */
  resiliencyScore?: ResiliencyScore | undefined;
}

/**
 * The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
 *
 * @public
 */
export interface EksSourceClusterNamespace {
  /**
   * Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is: arn:`aws`:eks:`region`:`account-id`:cluster/`cluster-name`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * Name of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * The Terraform s3 state file you need to import.
 *
 * @public
 */
export interface TerraformSource {
  /**
   * The URL of the Terraform s3 state file you need to import.
   *
   * @public
   */
  s3StateFileUrl: string | undefined;
}

/**
 * The list of Resilience Hub application input sources.
 *
 * @public
 */
export interface AppInputSource {
  /**
   * The name of the input source.
   *
   * @public
   */
  sourceName?: string | undefined;

  /**
   * The resource type of the input source.
   *
   * @public
   */
  importType: ResourceMappingType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the input source. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  sourceArn?: string | undefined;

  /**
   * The name of the Terraform s3 state ﬁle.
   *
   * @public
   */
  terraformSource?: TerraformSource | undefined;

  /**
   * The number of resources.
   *
   * @public
   */
  resourceCount?: number | undefined;

  /**
   * The namespace on your Amazon Elastic Kubernetes Service cluster.
   *
   * @public
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace | undefined;
}

/**
 * Defines an application summary.
 *
 * @public
 */
export interface AppSummary {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The optional description for an app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Date and time when the app was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The current status of compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus?: AppComplianceStatusType | undefined;

  /**
   * The current resiliency score for the application.
   *
   * @public
   */
  resiliencyScore?: number | undefined;

  /**
   * Assessment execution schedule with 'Daily' or 'Disabled' values.
   *
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType | undefined;

  /**
   * Status of the application.
   *
   * @public
   */
  status?: AppStatusType | undefined;

  /**
   * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
   *
   * @public
   */
  driftStatus?: AppDriftStatusType | undefined;

  /**
   * Date and time of the most recent compliance evaluation.
   *
   * @public
   */
  lastAppComplianceEvaluationTime?: Date | undefined;

  /**
   * Recovery Time Objective (RTO) in seconds.
   *
   * @public
   */
  rtoInSecs?: number | undefined;

  /**
   * Recovery Point Objective (RPO) in seconds.
   *
   * @public
   */
  rpoInSecs?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  awsApplicationArn?: string | undefined;
}

/**
 * Version of an application.
 *
 * @public
 */
export interface AppVersionSummary {
  /**
   * Version of an application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Identifier of the application version.
   *
   * @public
   */
  identifier?: number | undefined;

  /**
   * Creation time of the application version.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Name of the application version.
   *
   * @public
   */
  versionName?: string | undefined;
}

/**
 * Defines the operational recommendation item that needs a status update.
 *
 * @public
 */
export interface UpdateRecommendationStatusItem {
  /**
   * Resource identifier of the operational recommendation item.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * Identifier of the target Amazon Web Services account.
   *
   * @public
   */
  targetAccountId?: string | undefined;

  /**
   * Identifier of the target Amazon Web Services Region.
   *
   * @public
   */
  targetRegion?: string | undefined;
}

/**
 * Defines the operational recommendation item that is to be included or excluded.
 *
 * @public
 */
export interface UpdateRecommendationStatusRequestEntry {
  /**
   * An identifier for an entry in this batch that is used to communicate the result.
   *
   * > **Note:** The `entryId`s of a batch request need to be unique within a request.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * Reference identifier of the operational recommendation item.
   *
   * @public
   */
  referenceId: string | undefined;

  /**
   * The operational recommendation item.
   *
   * @public
   */
  item?: UpdateRecommendationStatusItem | undefined;

  /**
   * Indicates if the operational recommendation needs to be excluded. If set to True, the operational recommendation will be excluded.
   *
   * @public
   */
  excluded: boolean | undefined;

  /**
   * Indicates the identifier of the AppComponent.
   *
   * @public
   */
  appComponentId?: string | undefined;

  /**
   * Indicates the reason for excluding an operational recommendation.
   *
   * @public
   */
  excludeReason?: ExcludeRecommendationReason | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationStatusRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Defines the list of operational recommendations that need to be included or excluded.
   *
   * @public
   */
  requestEntries: UpdateRecommendationStatusRequestEntry[] | undefined;
}

/**
 * List of operational recommendations that did not get included or excluded.
 *
 * @public
 */
export interface BatchUpdateRecommendationStatusFailedEntry {
  /**
   * An identifier of an entry in this batch that is used to communicate the result.
   *
   * > **Note:** The `entryId`s of a batch request need to be unique within a request.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * Indicates the error that occurred while excluding an operational recommendation.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * List of operational recommendations that were successfully included or excluded.
 *
 * @public
 */
export interface BatchUpdateRecommendationStatusSuccessfulEntry {
  /**
   * An identifier for an entry in this batch that is used to communicate the result.
   *
   * > **Note:** The `entryId`s of a batch request need to be unique within a request.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * Reference identifier of the operational recommendation.
   *
   * @public
   */
  referenceId: string | undefined;

  /**
   * The operational recommendation item.
   *
   * @public
   */
  item?: UpdateRecommendationStatusItem | undefined;

  /**
   * Indicates if the operational recommendation was successfully excluded.
   *
   * @public
   */
  excluded: boolean | undefined;

  /**
   * Indicates the identifier of an AppComponent.
   *
   * @public
   */
  appComponentId?: string | undefined;

  /**
   * Indicates the reason for excluding an operational recommendation.
   *
   * @public
   */
  excludeReason?: ExcludeRecommendationReason | undefined;
}

/**
 * @public
 */
export interface BatchUpdateRecommendationStatusResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * A list of items that were included or excluded.
   *
   * @public
   */
  successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntry[] | undefined;

  /**
   * A list of items with error details about each item, which could not be included or excluded.
   *
   * @public
   */
  failedEntries: BatchUpdateRecommendationStatusFailedEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateAppRequest {
  /**
   * Name of the application.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The optional description for an app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Assessment execution schedule with 'Daily' or 'Disabled' values.
   *
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType | undefined;

  /**
   * Defines the roles and credentials that Resilience Hub would use while creating the application, importing its resources, and running an assessment.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports only **Drift detected** and **Scheduled assessment failure** events notification.
   *
   * @public
   */
  eventSubscriptions?: EventSubscription[] | undefined;

  /**
   * Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  awsApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppResponse {
  /**
   * The created application returned as an object with details including compliance status, creation time, description, resiliency score, and more.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface CreateAppVersionAppComponentRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Identifier of the Application Component.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of Application Component. For more information about the types of Application Component, see [Grouping resources in an AppComponent](https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html).
   *
   * @public
   */
  type: string | undefined;

  /**
   * Currently, there is no supported additional information for Application Components.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppVersionAppComponentResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * List of Application Components that belong to this resource.
   *
   * @public
   */
  appComponent?: AppComponent | undefined;
}

/**
 * Defines a logical resource identifier.
 *
 * @public
 */
export interface LogicalResourceId {
  /**
   * Identifier of the resource.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The name of the CloudFormation stack this resource belongs to.
   *
   * @public
   */
  logicalStackName?: string | undefined;

  /**
   * The name of the resource group that this resource belongs to.
   *
   * @public
   */
  resourceGroupName?: string | undefined;

  /**
   * The name of the Terraform S3 state file this resource belongs to.
   *
   * @public
   */
  terraformSourceName?: string | undefined;

  /**
   * Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
   *
   * > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   * @public
   */
  eksSourceName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppVersionResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * Physical identifier of the resource.
   *
   * @public
   */
  physicalResourceId: string | undefined;

  /**
   * Amazon Web Services region that owns the physical resource.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * Amazon Web Services account that owns the physical resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.
   *
   * @public
   */
  appComponents: string[] | undefined;

  /**
   * Currently, there is no supported additional information for resources.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or an Resilience Hub-native identifier.
 *
 * @public
 */
export interface PhysicalResource {
  /**
   * The name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * Identifier of the physical resource.
   *
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The application components that belong to this resource.
   *
   * @public
   */
  appComponents?: AppComponent[] | undefined;

  /**
   * Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   * > **Note:**
   * >
   * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   * >
   * > Key: `"failover-regions"`
   * >
   * > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;

  /**
   * Indicates if a resource is included or excluded from the assessment.
   *
   * @public
   */
  excluded?: boolean | undefined;

  /**
   * Type of input source.
   *
   * @public
   */
  sourceType?: ResourceSourceType | undefined;

  /**
   * Name of the parent resource.
   *
   * @public
   */
  parentResourceName?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppVersionResourceResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.
   *
   * @public
   */
  physicalResource?: PhysicalResource | undefined;
}

/**
 * @public
 */
export interface CreateRecommendationTemplateRequest {
  /**
   * Identifiers for the recommendations used to create a recommendation template.
   *
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * The format for the recommendation template.
   *
   * - **CfnJson**
   *
   *   The template is CloudFormation JSON.
   *
   * - **CfnYaml**
   *
   *   The template is CloudFormation YAML.
   *
   * @public
   */
  format?: TemplateFormat | undefined;

  /**
   * An array of strings that specify the recommendation template type or types.
   *
   * - **Alarm**
   *
   *   The template is an AlarmRecommendation template.
   *
   * - **Sop**
   *
   *   The template is a SopRecommendation template.
   *
   * - **Test**
   *
   *   The template is a TestRecommendation template.
   *
   * @public
   */
  recommendationTypes?: RenderRecommendationType[] | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * The name for the recommendation template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The name of the Amazon S3 bucket that will contain the recommendation template.
   *
   * @public
   */
  bucketName?: string | undefined;
}

/**
 * The location of the Amazon S3 bucket.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The prefix for the Amazon S3 bucket.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Defines a recommendation template created with the CreateRecommendationTemplate action.
 *
 * @public
 */
export interface RecommendationTemplate {
  /**
   * The file location of the template.
   *
   * @public
   */
  templatesLocation?: S3Location | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Identifiers for the recommendations used in the recommendation template.
   *
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * An array of strings that specify the recommendation template type or types.
   *
   * - **Alarm**
   *
   *   The template is an AlarmRecommendation template.
   *
   * - **Sop**
   *
   *   The template is a SopRecommendation template.
   *
   * - **Test**
   *
   *   The template is a TestRecommendation template.
   *
   * @public
   */
  recommendationTypes: RenderRecommendationType[] | undefined;

  /**
   * Format of the recommendation template.
   *
   * - **CfnJson**
   *
   *   The template is CloudFormation JSON.
   *
   * - **CfnYaml**
   *
   *   The template is CloudFormation YAML.
   *
   * @public
   */
  format: TemplateFormat | undefined;

  /**
   * Amazon Resource Name (ARN) for the recommendation template.
   *
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * Message for the recommendation template.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: RecommendationTemplateStatus | undefined;

  /**
   * Name for the recommendation template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The start time for the action.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for the action.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Indicates if replacements are needed.
   *
   * @public
   */
  needsReplacements?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRecommendationTemplateResponse {
  /**
   * The newly created recommendation template, returned as an object. This object includes the template's name, format, status, tags, Amazon S3 bucket location, and more.
   *
   * @public
   */
  recommendationTemplate?: RecommendationTemplate | undefined;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyRequest {
  /**
   * Name of the resiliency policy.
   *
   * @public
   */
  policyName: string | undefined;

  /**
   * Description of the resiliency policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
   *
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint | undefined;

  /**
   * The tier for this resiliency policy, ranging from the highest severity (`MissionCritical`) to lowest (`NonCritical`).
   *
   * @public
   */
  tier: ResiliencyPolicyTier | undefined;

  /**
   * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
   *
   * @public
   */
  policy: Partial<Record<DisruptionType, FailurePolicy>> | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateResiliencyPolicyResponse {
  /**
   * The type of resiliency policy that was created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
   *
   * @public
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @public
 */
export interface DeleteAppRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * A boolean option to force the deletion of an Resilience Hub application.
   *
   * @public
   */
  forceDelete?: boolean | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAssessmentRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppAssessmentResponse {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * The current status of the assessment for the resiliency policy.
   *
   * @public
   */
  assessmentStatus: AssessmentStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAppInputSourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  sourceArn?: string | undefined;

  /**
   * The imported Terraform s3 state ﬁle you want to remove from the Resilience Hub application.
   *
   * @public
   */
  terraformSource?: TerraformSource | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The namespace on your Amazon Elastic Kubernetes Service cluster that you want to delete from the Resilience Hub application.
   *
   * @public
   */
  eksSourceClusterNamespace?: EksSourceClusterNamespace | undefined;
}

/**
 * @public
 */
export interface DeleteAppInputSourceResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Name of the input source from where the application resource is imported from.
   *
   * @public
   */
  appInputSource?: AppInputSource | undefined;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Identifier of the Application Component.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppVersionAppComponentResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * List of Application Components that belong to this resource.
   *
   * @public
   */
  appComponent?: AppComponent | undefined;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId?: LogicalResourceId | undefined;

  /**
   * Physical identifier of the resource.
   *
   * @public
   */
  physicalResourceId?: string | undefined;

  /**
   * Amazon Web Services region that owns the physical resource.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * Amazon Web Services account that owns the physical resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppVersionResourceResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.
   *
   * @public
   */
  physicalResource?: PhysicalResource | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateRequest {
  /**
   * The Amazon Resource Name (ARN) for a recommendation template.
   *
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationTemplateResponse {
  /**
   * The Amazon Resource Name (ARN) for a recommendation template.
   *
   * @public
   */
  recommendationTemplateArn: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: RecommendationTemplateStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResiliencyPolicyResponse {
  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppResponse {
  /**
   * The specified application, returned as an object with details including compliance status, creation time, description, resiliency score, and more.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppAssessmentResponse {
  /**
   * The assessment for an Resilience Hub application, returned as an object. This object includes Amazon Resource Names (ARNs), compliance information, compliance status, cost, messages, resiliency scores, and more.
   *
   * @public
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   * > **Note:** Currently, this parameter supports only failover region and account.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Identifier of the Application Component.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionAppComponentResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * List of Application Components that belong to this resource.
   *
   * @public
   */
  appComponent?: AppComponent | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId?: LogicalResourceId | undefined;

  /**
   * Physical identifier of the resource.
   *
   * @public
   */
  physicalResourceId?: string | undefined;

  /**
   * Amazon Web Services region that owns the physical resource.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * Amazon Web Services account that owns the physical resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResourceResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.
   *
   * @public
   */
  physicalResource?: PhysicalResource | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionResourcesResolutionStatusResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourceResolutionStatusType | undefined;

  /**
   * The returned error message for the request.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppVersionTemplateResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * A JSON string that provides information about your application structure. To learn more about the `appTemplateBody` template, see the sample template provided in the *Examples* section.
   *
   * The `appTemplateBody` JSON string has the following structure:
   *
   * - **`resources`**
   *
   *   The list of logical resources that must be included in the Resilience Hub application.
   *
   *   Type: Array
   *
   *   > **Note:** Don't add the resources that you want to exclude.
   *
   *   Each `resources` array item includes the following fields:
   *
   *   - *`logicalResourceId`*
   *
   *     Logical identifier of the resource.
   *
   *     Type: Object
   *
   *     Each `logicalResourceId` object includes the following fields:
   *
   *     - `identifier`
   *
   *       Identifier of the resource.
   *
   *       Type: String
   *     - `logicalStackName`
   *
   *       The name of the CloudFormation stack this resource belongs to.
   *
   *       Type: String
   *     - `resourceGroupName`
   *
   *       The name of the resource group this resource belongs to.
   *
   *       Type: String
   *     - `terraformSourceName`
   *
   *       The name of the Terraform S3 state file this resource belongs to.
   *
   *       Type: String
   *     - `eksSourceName`
   *
   *       Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
   *
   *       > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   *       Type: String
   *   - *`type`*
   *
   *     The type of resource.
   *
   *     Type: string
   *   - *`name`*
   *
   *     The name of the resource.
   *
   *     Type: String
   *   - `additionalInfo`
   *
   *     Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *     > **Note:**
   *     >
   *     > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *     >
   *     > Key: `"failover-regions"`
   *     >
   *     > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   * - **`appComponents`**
   *
   *   List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.
   *
   *   Type: Array
   *
   *   Each `appComponents` array item includes the following fields:
   *
   *   - `name`
   *
   *     Name of the Application Component.
   *
   *     Type: String
   *   - `type`
   *
   *     Type of Application Component. For more information about the types of Application Component, see [Grouping resources in an AppComponent](https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html).
   *
   *     Type: String
   *   - `resourceNames`
   *
   *     The list of included resources that are assigned to the Application Component.
   *
   *     Type: Array of strings
   *   - `additionalInfo`
   *
   *     Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *     > **Note:**
   *     >
   *     > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *     >
   *     > Key: `"failover-regions"`
   *     >
   *     > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   * - **`excludedResources`**
   *
   *   The list of logical resource identifiers to be excluded from the application.
   *
   *   Type: Array
   *
   *   > **Note:** Don't add the resources that you want to include.
   *
   *   Each `excludedResources` array item includes the following fields:
   *
   *   - *`logicalResourceIds`*
   *
   *     Logical identifier of the resource.
   *
   *     Type: Object
   *
   *     > **Note:**
   *     >
   *     > You can configure only one of the following fields:
   *     >
   *     > - `logicalStackName`
   *     > - `resourceGroupName`
   *     > - `terraformSourceName`
   *     > - `eksSourceName`
   *
   *     Each `logicalResourceIds` object includes the following fields:
   *
   *     - `identifier`
   *
   *       Identifier of the resource.
   *
   *       Type: String
   *     - `logicalStackName`
   *
   *       The name of the CloudFormation stack this resource belongs to.
   *
   *       Type: String
   *     - `resourceGroupName`
   *
   *       The name of the resource group this resource belongs to.
   *
   *       Type: String
   *     - `terraformSourceName`
   *
   *       The name of the Terraform S3 state file this resource belongs to.
   *
   *       Type: String
   *     - `eksSourceName`
   *
   *       Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
   *
   *       > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   *       Type: String
   * - **`version`**
   *
   *   Resilience Hub application version.
   * - `additionalInfo`
   *
   *   Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *   > **Note:**
   *   >
   *   > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *   >
   *   > Key: `"failover-regions"`
   *   >
   *   > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   *
   * @public
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;
}

/**
 * Indicates the error that was encountered while importing a resource.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * Provides additional information about the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourceImportStatusType | undefined;

  /**
   * The time when the status last changed.
   *
   * @public
   */
  statusChangeTime: Date | undefined;

  /**
   * The error message returned for the resource request.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * List of errors that were encountered while importing resources.
   *
   * @public
   */
  errorDetails?: ErrorDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeMetricsExportRequest {
  /**
   * Identifier of the metrics export task.
   *
   * @public
   */
  metricsExportId: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricsExportResponse {
  /**
   * Identifier for the metrics export task.
   *
   * @public
   */
  metricsExportId: string | undefined;

  /**
   * Indicates the status of the metrics export task.
   *
   * @public
   */
  status: MetricsExportStatusType | undefined;

  /**
   * Specifies the name of the Amazon S3 bucket where the exported metrics is stored.
   *
   * @public
   */
  exportLocation?: S3Location | undefined;

  /**
   * Explains the error that occurred while exporting the metrics.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResiliencyPolicyResponse {
  /**
   * Information about the specific resiliency policy, returned as an object. This object includes creation time, data location constraints, its name, description, tags, the recovery time objective (RTO) and recovery point objective (RPO) in seconds, and more.
   *
   * @public
   */
  policy: ResiliencyPolicy | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupingRecommendationTaskRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Identifier of the grouping recommendation task.
   *
   * @public
   */
  groupingId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceGroupingRecommendationTaskResponse {
  /**
   * Identifier of the grouping recommendation task.
   *
   * @public
   */
  groupingId: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourcesGroupingRecGenStatusType | undefined;

  /**
   * Error that occurred while generating a grouping recommendation.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The input source of the Amazon Elastic Kubernetes Service cluster.
 *
 * @public
 */
export interface EksSource {
  /**
   * Amazon Resource Name (ARN) of the Amazon Elastic Kubernetes Service cluster. The format for this ARN is: arn:`aws`:eks:`region`:`account-id`:cluster/`cluster-name`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  eksClusterArn: string | undefined;

  /**
   * The list of namespaces located on your Amazon Elastic Kubernetes Service cluster.
   *
   * @public
   */
  namespaces: string[] | undefined;
}

/**
 * @public
 */
export interface ImportResourcesToDraftAppVersionRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the resources.
   *
   * @public
   */
  sourceArns?: string[] | undefined;

  /**
   * A list of terraform file s3 URLs you need to import.
   *
   * @public
   */
  terraformSources?: TerraformSource[] | undefined;

  /**
   * The import strategy you would like to set to import resources into Resilience Hub application.
   *
   * @public
   */
  importStrategy?: ResourceImportStrategyType | undefined;

  /**
   * The input sources of the Amazon Elastic Kubernetes Service resources you need to import.
   *
   * @public
   */
  eksSources?: EksSource[] | undefined;
}

/**
 * @public
 */
export interface ImportResourcesToDraftAppVersionResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) for the resources you have imported.
   *
   * @public
   */
  sourceArns?: string[] | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourceImportStatusType | undefined;

  /**
   * A list of terraform file s3 URLs you have imported.
   *
   * @public
   */
  terraformSources?: TerraformSource[] | undefined;

  /**
   * The input sources of the Amazon Elastic Kubernetes Service resources you have imported.
   *
   * @public
   */
  eksSources?: EksSource[] | undefined;
}

/**
 * @public
 */
export interface ListAlarmRecommendationsRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAlarmRecommendationsResponse {
  /**
   * The alarm recommendations for an Resilience Hub application, returned as an object. This object includes Application Component names, descriptions, information about whether a recommendation has already been implemented or not, prerequisites, and more.
   *
   * @public
   */
  alarmRecommendations: AlarmRecommendation[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentComplianceDriftsRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of compliance drifts requested.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Indicates the compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) that were detected for an assessed entity.
 *
 * @public
 */
export interface ComplianceDrift {
  /**
   * Identifier of an entity in which drift was detected. For compliance drift, the entity ID can be either application ID or the AppComponent ID.
   *
   * @public
   */
  entityId?: string | undefined;

  /**
   * The type of entity in which drift was detected. For compliance drifts, Resilience Hub supports `AWS::ResilienceHub::AppComponent` and `AWS::ResilienceHub::Application`.
   *
   * @public
   */
  entityType?: string | undefined;

  /**
   * The type of drift detected. Currently, Resilience Hub supports only **ApplicationCompliance** drift type.
   *
   * @public
   */
  driftType?: DriftType | undefined;

  /**
   * Identifier of your application.
   *
   * @public
   */
  appId?: string | undefined;

  /**
   * Published version of your application on which drift was detected.
   *
   * @public
   */
  appVersion?: string | undefined;

  /**
   * Assessment identifier of a previous assessment of the same application version. Resilience Hub uses the previous assessment (associated with the reference identifier) to compare the compliance with the current assessment to identify drifts.
   *
   * @public
   */
  expectedReferenceId?: string | undefined;

  /**
   * The expected compliance value of an entity.
   *
   * @public
   */
  expectedValue?: Partial<Record<DisruptionType, DisruptionCompliance>> | undefined;

  /**
   * Assessment identifier that is associated with this drift item.
   *
   * @public
   */
  actualReferenceId?: string | undefined;

  /**
   * Actual compliance value of the entity.
   *
   * @public
   */
  actualValue?: Partial<Record<DisruptionType, DisruptionCompliance>> | undefined;

  /**
   * Difference type between actual and expected recovery point objective (RPO) and recovery time objective (RTO) values. Currently, Resilience Hub supports only `NotEqual` difference type.
   *
   * @public
   */
  diffType?: DifferenceType | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentComplianceDriftsResponse {
  /**
   * Indicates compliance drifts (recovery time objective (RTO) and recovery point objective (RPO)) detected for an assessed entity.
   *
   * @public
   */
  complianceDrifts: ComplianceDrift[] | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentResourceDriftsRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of drift results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Defines a resource identifier for the drifted resource.
 *
 * @public
 */
export interface ResourceIdentifier {
  /**
   * Logical identifier of the drifted resource.
   *
   * @public
   */
  logicalResourceId?: LogicalResourceId | undefined;

  /**
   * Type of the drifted resource.
   *
   * @public
   */
  resourceType?: string | undefined;
}

/**
 * Indicates the resources that have drifted in the current application version.
 *
 * @public
 */
export interface ResourceDrift {
  /**
   * Amazon Resource Name (ARN) of the application whose resources have drifted. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Version of the application whose resources have drifted.
   *
   * @public
   */
  appVersion?: string | undefined;

  /**
   * Reference identifier of the resource drift.
   *
   * @public
   */
  referenceId?: string | undefined;

  /**
   * Identifier of the drifted resource.
   *
   * @public
   */
  resourceIdentifier?: ResourceIdentifier | undefined;

  /**
   * Indicates if the resource was added or removed.
   *
   * @public
   */
  diffType?: DifferenceType | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentResourceDriftsResponse {
  /**
   * Indicates all the resource drifts detected for an assessed entity.
   *
   * @public
   */
  resourceDrifts: ResourceDrift[] | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * The name for the assessment.
   *
   * @public
   */
  assessmentName?: string | undefined;

  /**
   * The current status of the assessment for the resiliency policy.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus[] | undefined;

  /**
   * The current status of compliance for the resiliency policy.
   *
   * @public
   */
  complianceStatus?: ComplianceStatus | undefined;

  /**
   * Specifies the entity that invoked a specific assessment, either a `User` or the `System`.
   *
   * @public
   */
  invoker?: AssessmentInvoker | undefined;

  /**
   * The default is to sort by ascending **startTime**. To sort by descending **startTime**, set reverseOrder to `true`.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppAssessmentsResponse {
  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The summaries for the specified assessments, returned as an object. This object includes application versions, associated Amazon Resource Numbers (ARNs), cost, messages, resiliency scores, and more.
   *
   * @public
   */
  assessmentSummaries: AppAssessmentSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * @public
 */
export interface ListAppComponentCompliancesResponse {
  /**
   * The compliances for an Resilience Hub Application Component, returned as an object. This object contains the names of the Application Components, compliances, costs, resiliency scores, outage scores, and more.
   *
   * @public
   */
  componentCompliances: AppComponentCompliance[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Defines a disruption compliance recommendation.
 *
 * @public
 */
export interface RecommendationDisruptionCompliance {
  /**
   * The expected compliance status after applying the recommended configuration change.
   *
   * @public
   */
  expectedComplianceStatus: ComplianceStatus | undefined;

  /**
   * The expected RTO after applying the recommended configuration change.
   *
   * @public
   */
  expectedRtoInSecs?: number | undefined;

  /**
   * The expected Recovery Time Objective (RTO) description after applying the recommended configuration change.
   *
   * @public
   */
  expectedRtoDescription?: string | undefined;

  /**
   * The expected RPO after applying the recommended configuration change.
   *
   * @public
   */
  expectedRpoInSecs?: number | undefined;

  /**
   * The expected Recovery Point Objective (RPO) description after applying the recommended configuration change.
   *
   * @public
   */
  expectedRpoDescription?: string | undefined;
}

/**
 * Defines a recommendation configuration.
 *
 * @public
 */
export interface ConfigRecommendation {
  /**
   * The cost for the application.
   *
   * @public
   */
  cost?: Cost | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  appComponentName?: string | undefined;

  /**
   * The current compliance against the resiliency policy before applying the configuration change.
   *
   * @public
   */
  compliance?: Partial<Record<DisruptionType, DisruptionCompliance>> | undefined;

  /**
   * The expected compliance against the resiliency policy after applying the configuration change.
   *
   * @public
   */
  recommendationCompliance?: Partial<Record<DisruptionType, RecommendationDisruptionCompliance>> | undefined;

  /**
   * The type of optimization.
   *
   * @public
   */
  optimizationType: ConfigRecommendationOptimizationType | undefined;

  /**
   * The name of the recommendation configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The optional description for an app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * List of the suggested configuration changes.
   *
   * @public
   */
  suggestedChanges?: string[] | undefined;

  /**
   * The architecture type.
   *
   * @public
   */
  haArchitecture?: HaArchitecture | undefined;

  /**
   * Reference identifier for the recommendation configuration.
   *
   * @public
   */
  referenceId: string | undefined;
}

/**
 * Defines recommendations for an Resilience Hub Application Component, returned as an object. This object contains component names, configuration recommendations, and recommendation statuses.
 *
 * @public
 */
export interface ComponentRecommendation {
  /**
   * Name of the Application Component.
   *
   * @public
   */
  appComponentName: string | undefined;

  /**
   * Status of the recommendation.
   *
   * @public
   */
  recommendationStatus: RecommendationComplianceStatus | undefined;

  /**
   * List of recommendations.
   *
   * @public
   */
  configRecommendations: ConfigRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListAppComponentRecommendationsResponse {
  /**
   * The recommendations for an Resilience Hub Application Component, returned as an object. This object contains the names of the Application Components, configuration recommendations, and recommendation statuses.
   *
   * @public
   */
  componentRecommendations: ComponentRecommendation[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInputSourcesRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of input sources to be displayed per Resilience Hub application.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppInputSourcesResponse {
  /**
   * The list of Resilience Hub application input sources.
   *
   * @public
   */
  appInputSources: AppInputSource[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name for the one of the listed applications.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Lower limit of the range that is used to filter applications based on their last assessment times.
   *
   * @public
   */
  fromLastAssessmentTime?: Date | undefined;

  /**
   * Upper limit of the range that is used to filter the applications based on their last assessment times.
   *
   * @public
   */
  toLastAssessmentTime?: Date | undefined;

  /**
   * The application list is sorted based on the values of `lastAppComplianceEvaluationTime` field. By default, application list is sorted in ascending order. To sort the application list in descending order, set this field to `True`.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * Amazon Resource Name (ARN) of Resource Groups group that is integrated with an AppRegistry application. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  awsApplicationArn?: string | undefined;
}

/**
 * @public
 */
export interface ListAppsResponse {
  /**
   * Summaries for the Resilience Hub application.
   *
   * @public
   */
  appSummaries: AppSummary[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Version of the Application Component.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of Application Components to be displayed per Resilience Hub application version.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppVersionAppComponentsResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Defines an Application Component.
   *
   * @public
   */
  appComponents?: AppComponent[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppVersionResourceMappingsResponse {
  /**
   * Mappings used to map logical resources from the template to physical resources. You can use the mapping type `CFN_STACK` if the application template uses a logical stack name. Or you can map individual resources by using the mapping type `RESOURCE`. We recommend using the mapping type `CFN_STACK` if the application is backed by a CloudFormation stack.
   *
   * @public
   */
  resourceMappings: ResourceMapping[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppVersionResourcesRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId?: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAppVersionResourcesResponse {
  /**
   * The physical resources in the application version.
   *
   * @public
   */
  physicalResources: PhysicalResource[] | undefined;

  /**
   * The ID for a specific resolution.
   *
   * @public
   */
  resolutionId: string | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppVersionsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Lower limit of the time range to filter the application versions.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * Upper limit of the time range to filter the application versions.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAppVersionsResponse {
  /**
   * The version of the application.
   *
   * @public
   */
  appVersions: AppVersionSummary[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Indicates the condition based on which you want to filter the metrics.
 *
 * @public
 */
export interface Condition {
  /**
   * Indicates the field in the metric.
   *
   * @public
   */
  field: string | undefined;

  /**
   * Indicates the type of operator or comparison to be used when evaluating a condition against the specified field.
   *
   * @public
   */
  operator: ConditionOperatorType | undefined;

  /**
   * Indicates the value or data against which a condition is evaluated.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Indicates the field or attribute of a resource or data structure on which a condition is being applied or evaluated.
 *
 * @public
 */
export interface Field {
  /**
   * Name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * (Optional) Indicates the type of aggregation or summary operation (such as Sum, Average, and so on) to be performed on a particular field or set of data.
   *
   * @public
   */
  aggregation?: FieldAggregationType | undefined;
}

/**
 * Indicates the sorting order of the fields in the metrics.
 *
 * @public
 */
export interface Sort {
  /**
   * Indicates the order in which you want to sort the metrics. By default, the list is sorted in ascending order. To sort the list in descending order, set this field to False.
   *
   * @public
   */
  field: string | undefined;

  /**
   * Indicates the name or identifier of the field or attribute that should be used as the basis for sorting the metrics.
   *
   * @public
   */
  ascending?: boolean | undefined;
}

/**
 * @public
 */
export interface ListMetricsRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Indicates the list of fields in the data source.
   *
   * @public
   */
  fields?: Field[] | undefined;

  /**
   * Indicates the data source of the metrics.
   *
   * @public
   */
  dataSource?: string | undefined;

  /**
   * Indicates the list of all the conditions that were applied on the metrics.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * (Optional) Indicates the order in which you want to sort the fields in the metrics. By default, the fields are sorted in the ascending order.
   *
   * @public
   */
  sorts?: Sort[] | undefined;
}

/**
 * @public
 */
export interface ListMetricsResponse {
  /**
   * Specifies all the list of metric values for each row of metrics.
   *
   * @public
   */
  rows: string[][] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesRequest {
  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn?: string | undefined;

  /**
   * The default is to sort by ascending **startTime**. To sort by descending **startTime**, set reverseOrder to `true`.
   *
   * @public
   */
  reverseOrder?: boolean | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status?: RecommendationTemplateStatus[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for a recommendation template.
   *
   * @public
   */
  recommendationTemplateArn?: string | undefined;

  /**
   * The name for one of the listed recommendation templates.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRecommendationTemplatesResponse {
  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The recommendation templates for the Resilience Hub applications.
   *
   * @public
   */
  recommendationTemplates?: RecommendationTemplate[] | undefined;
}

/**
 * @public
 */
export interface ListResiliencyPoliciesRequest {
  /**
   * Name of the resiliency policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResiliencyPoliciesResponse {
  /**
   * The resiliency policies for the Resilience Hub applications.
   *
   * @public
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceGroupingRecommendationsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of grouping recommendations to be displayed per Resilience Hub application.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Creates a new recommended Application Component (AppComponent).
 *
 * @public
 */
export interface GroupingAppComponent {
  /**
   * Indicates the identifier of an AppComponent.
   *
   * @public
   */
  appComponentId: string | undefined;

  /**
   * Indicates the type of an AppComponent.
   *
   * @public
   */
  appComponentType: string | undefined;

  /**
   * Indicates the name of an AppComponent.
   *
   * @public
   */
  appComponentName: string | undefined;
}

/**
 * Indicates the resource that will be grouped in the recommended Application Component (AppComponent).
 *
 * @public
 */
export interface GroupingResource {
  /**
   * Indicates the resource name.
   *
   * @public
   */
  resourceName: string | undefined;

  /**
   * Indicates the resource type.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * Indicates the physical identifier of the resource.
   *
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * Indicates the logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * Indicates the identifier of the source AppComponents in which the resources were previously grouped into.
   *
   * @public
   */
  sourceAppComponentIds: string[] | undefined;
}

/**
 * Creates a new grouping recommendation.
 *
 * @public
 */
export interface GroupingRecommendation {
  /**
   * Indicates all the reasons available for rejecting a grouping recommendation.
   *
   * @public
   */
  groupingRecommendationId: string | undefined;

  /**
   * Indicates the name of the recommended Application Component (AppComponent).
   *
   * @public
   */
  groupingAppComponent: GroupingAppComponent | undefined;

  /**
   * Indicates the resources that are grouped in a recommended AppComponent.
   *
   * @public
   */
  resources: GroupingResource[] | undefined;

  /**
   * Indicates the confidence level of the grouping recommendation.
   *
   * @public
   */
  score: number | undefined;

  /**
   * Indicates all the reasons available for rejecting a grouping recommendation.
   *
   * @public
   */
  recommendationReasons: string[] | undefined;

  /**
   * Indicates the status of grouping resources into AppComponents.
   *
   * @public
   */
  status: GroupingRecommendationStatusType | undefined;

  /**
   * Indicates the confidence level of Resilience Hub on the grouping recommendation.
   *
   * @public
   */
  confidenceLevel: GroupingRecommendationConfidenceLevel | undefined;

  /**
   * Indicates the creation time of the grouping recommendation.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Indicates the reason you had selected while rejecting a grouping recommendation.
   *
   * @public
   */
  rejectionReason?: GroupingRecommendationRejectionReason | undefined;
}

/**
 * @public
 */
export interface ListResourceGroupingRecommendationsResponse {
  /**
   * List of resource grouping recommendations generated by Resilience Hub.
   *
   * @public
   */
  groupingRecommendations: GroupingRecommendation[] | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSopRecommendationsRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * Defines a standard operating procedure (SOP) recommendation.
 *
 * @public
 */
export interface SopRecommendation {
  /**
   * The service type.
   *
   * @public
   */
  serviceType: SopServiceType | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  appComponentName?: string | undefined;

  /**
   * Description of the SOP recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Identifier for the SOP recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * Name of the SOP recommendation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The recommendation items.
   *
   * @public
   */
  items?: RecommendationItem[] | undefined;

  /**
   * Reference identifier for the SOP recommendation.
   *
   * @public
   */
  referenceId: string | undefined;

  /**
   * Prerequisite for the SOP recommendation.
   *
   * @public
   */
  prerequisite?: string | undefined;

  /**
   * Status of the recommended standard operating procedure.
   *
   * @public
   */
  recommendationStatus?: RecommendationStatus | undefined;
}

/**
 * @public
 */
export interface ListSopRecommendationsResponse {
  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The standard operating procedure (SOP) recommendations for the Resilience Hub applications.
   *
   * @public
   */
  sopRecommendations: SopRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSuggestedResiliencyPoliciesResponse {
  /**
   * The suggested resiliency policies for the Resilience Hub applications.
   *
   * @public
   */
  resiliencyPolicies: ResiliencyPolicy[] | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
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
   * The Amazon Resource Name (ARN) for a specific resource in your Resilience Hub application.
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
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestRecommendationsRequest {
  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Amazon Resource Name (ARN) of the assessment. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app-assessment/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  assessmentArn: string | undefined;
}

/**
 * Defines a test recommendation.
 *
 * @public
 */
export interface TestRecommendation {
  /**
   * Identifier for the test recommendation.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * Reference identifier for the test recommendation.
   *
   * @public
   */
  referenceId: string | undefined;

  /**
   * Indicates the identifier of the AppComponent.
   *
   * @public
   */
  appComponentId?: string | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  appComponentName?: string | undefined;

  /**
   * Name of the test recommendation.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Intent of the test recommendation.
   *
   * @public
   */
  intent?: string | undefined;

  /**
   * Level of risk for this test recommendation.
   *
   * @public
   */
  risk?: TestRisk | undefined;

  /**
   * Type of test recommendation.
   *
   * @public
   */
  type?: TestType | undefined;

  /**
   * Description for the test recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The test recommendation items.
   *
   * @public
   */
  items?: RecommendationItem[] | undefined;

  /**
   * Prerequisite of the test recommendation.
   *
   * @public
   */
  prerequisite?: string | undefined;

  /**
   * A list of recommended alarms that are used in the test and must be exported before or with the test.
   *
   * @public
   */
  dependsOnAlarms?: string[] | undefined;

  /**
   * Status of the recommended test.
   *
   * @public
   */
  recommendationStatus?: RecommendationStatus | undefined;
}

/**
 * @public
 */
export interface ListTestRecommendationsResponse {
  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The test recommendations for the Resilience Hub application.
   *
   * @public
   */
  testRecommendations: TestRecommendation[] | undefined;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId?: string | undefined;

  /**
   * Null, or the token from a previous call to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to include in the response. If more results exist than the specified `MaxResults` value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Defines a resource that is not supported by Resilience Hub.
 *
 * @public
 */
export interface UnsupportedResource {
  /**
   * Logical resource identifier for the unsupported resource.
   *
   * @public
   */
  logicalResourceId: LogicalResourceId | undefined;

  /**
   * Physical resource identifier for the unsupported resource.
   *
   * @public
   */
  physicalResourceId: PhysicalResourceId | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The status of the unsupported resource.
   *
   * @public
   */
  unsupportedResourceStatus?: string | undefined;
}

/**
 * @public
 */
export interface ListUnsupportedAppVersionResourcesResponse {
  /**
   * The unsupported resources for the application.
   *
   * @public
   */
  unsupportedResources: UnsupportedResource[] | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId: string | undefined;

  /**
   * Token for the next set of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PublishAppVersionRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Name of the application version.
   *
   * @public
   */
  versionName?: string | undefined;
}

/**
 * @public
 */
export interface PublishAppVersionResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion?: string | undefined;

  /**
   * Identifier of the application version.
   *
   * @public
   */
  identifier?: number | undefined;

  /**
   * Name of the application version.
   *
   * @public
   */
  versionName?: string | undefined;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * A JSON string that provides information about your application structure. To learn more about the `appTemplateBody` template, see the sample template provided in the *Examples* section.
   *
   * The `appTemplateBody` JSON string has the following structure:
   *
   * - **`resources`**
   *
   *   The list of logical resources that must be included in the Resilience Hub application.
   *
   *   Type: Array
   *
   *   > **Note:** Don't add the resources that you want to exclude.
   *
   *   Each `resources` array item includes the following fields:
   *
   *   - *`logicalResourceId`*
   *
   *     Logical identifier of the resource.
   *
   *     Type: Object
   *
   *     Each `logicalResourceId` object includes the following fields:
   *
   *     - `identifier`
   *
   *       Identifier of the resource.
   *
   *       Type: String
   *     - `logicalStackName`
   *
   *       The name of the CloudFormation stack this resource belongs to.
   *
   *       Type: String
   *     - `resourceGroupName`
   *
   *       The name of the resource group this resource belongs to.
   *
   *       Type: String
   *     - `terraformSourceName`
   *
   *       The name of the Terraform S3 state file this resource belongs to.
   *
   *       Type: String
   *     - `eksSourceName`
   *
   *       Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
   *
   *       > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   *       Type: String
   *   - *`type`*
   *
   *     The type of resource.
   *
   *     Type: string
   *   - *`name`*
   *
   *     The name of the resource.
   *
   *     Type: String
   *   - `additionalInfo`
   *
   *     Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *     > **Note:**
   *     >
   *     > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *     >
   *     > Key: `"failover-regions"`
   *     >
   *     > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   * - **`appComponents`**
   *
   *   List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.
   *
   *   Type: Array
   *
   *   Each `appComponents` array item includes the following fields:
   *
   *   - `name`
   *
   *     Name of the Application Component.
   *
   *     Type: String
   *   - `type`
   *
   *     Type of Application Component. For more information about the types of Application Component, see [Grouping resources in an AppComponent](https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html).
   *
   *     Type: String
   *   - `resourceNames`
   *
   *     The list of included resources that are assigned to the Application Component.
   *
   *     Type: Array of strings
   *   - `additionalInfo`
   *
   *     Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *     > **Note:**
   *     >
   *     > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *     >
   *     > Key: `"failover-regions"`
   *     >
   *     > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   * - **`excludedResources`**
   *
   *   The list of logical resource identifiers to be excluded from the application.
   *
   *   Type: Array
   *
   *   > **Note:** Don't add the resources that you want to include.
   *
   *   Each `excludedResources` array item includes the following fields:
   *
   *   - *`logicalResourceIds`*
   *
   *     Logical identifier of the resource.
   *
   *     Type: Object
   *
   *     > **Note:**
   *     >
   *     > You can configure only one of the following fields:
   *     >
   *     > - `logicalStackName`
   *     > - `resourceGroupName`
   *     > - `terraformSourceName`
   *     > - `eksSourceName`
   *
   *     Each `logicalResourceIds` object includes the following fields:
   *
   *     - `identifier`
   *
   *       Identifier of the resource.
   *
   *       Type: String
   *     - `logicalStackName`
   *
   *       The name of the CloudFormation stack this resource belongs to.
   *
   *       Type: String
   *     - `resourceGroupName`
   *
   *       The name of the resource group this resource belongs to.
   *
   *       Type: String
   *     - `terraformSourceName`
   *
   *       The name of the Terraform S3 state file this resource belongs to.
   *
   *       Type: String
   *     - `eksSourceName`
   *
   *       Name of the Amazon Elastic Kubernetes Service cluster and namespace this resource belongs to.
   *
   *       > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   *       Type: String
   * - **`version`**
   *
   *   Resilience Hub application version.
   * - `additionalInfo`
   *
   *   Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   *   > **Note:**
   *   >
   *   > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   *   >
   *   > Key: `"failover-regions"`
   *   >
   *   > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   *
   * @public
   */
  appTemplateBody: string | undefined;
}

/**
 * @public
 */
export interface PutDraftAppVersionTemplateResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion?: string | undefined;
}

/**
 * Indicates the rejected grouping recommendation.
 *
 * @public
 */
export interface RejectGroupingRecommendationEntry {
  /**
   * Indicates the identifier of the grouping recommendation.
   *
   * @public
   */
  groupingRecommendationId: string | undefined;

  /**
   * Indicates the reason you had selected while rejecting a grouping recommendation.
   *
   * @public
   */
  rejectionReason?: GroupingRecommendationRejectionReason | undefined;
}

/**
 * @public
 */
export interface RejectResourceGroupingRecommendationsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * List of resource grouping recommendations you have selected to exclude from your application.
   *
   * @public
   */
  entries: RejectGroupingRecommendationEntry[] | undefined;
}

/**
 * @public
 */
export interface RejectResourceGroupingRecommendationsResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * List of resource grouping recommendations that failed to get excluded in your application.
   *
   * @public
   */
  failedEntries: FailedGroupingRecommendationEntry[] | undefined;
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The names of the resources you want to remove from the resource mappings.
   *
   * @public
   */
  resourceNames?: string[] | undefined;

  /**
   * The names of the CloudFormation stacks you want to remove from the resource mappings.
   *
   * @public
   */
  logicalStackNames?: string[] | undefined;

  /**
   * The names of the registered applications you want to remove from the resource mappings.
   *
   * @public
   */
  appRegistryAppNames?: string[] | undefined;

  /**
   * The names of the resource groups you want to remove from the resource mappings.
   *
   * @public
   */
  resourceGroupNames?: string[] | undefined;

  /**
   * The names of the Terraform sources you want to remove from the resource mappings.
   *
   * @public
   */
  terraformSourceNames?: string[] | undefined;

  /**
   * The names of the Amazon Elastic Kubernetes Service clusters and namespaces you want to remove from the resource mappings.
   *
   * > **Note:** This parameter accepts values in "eks-cluster/namespace" format.
   *
   * @public
   */
  eksSourceNames?: string[] | undefined;
}

/**
 * @public
 */
export interface RemoveDraftAppVersionResourceMappingsResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn?: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion?: string | undefined;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;
}

/**
 * @public
 */
export interface ResolveAppVersionResourcesResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The identifier for a specific resolution.
   *
   * @public
   */
  resolutionId: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourceResolutionStatusType | undefined;
}

/**
 * @public
 */
export interface StartAppAssessmentRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * The name for the assessment.
   *
   * @public
   */
  assessmentName: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags assigned to the resource. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key/value pair.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartAppAssessmentResponse {
  /**
   * The assessment created.
   *
   * @public
   */
  assessment: AppAssessment | undefined;
}

/**
 * @public
 */
export interface StartMetricsExportRequest {
  /**
   * (Optional) Specifies the name of the Amazon Simple Storage Service bucket where the exported metrics will be stored.
   *
   * @public
   */
  bucketName?: string | undefined;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMetricsExportResponse {
  /**
   * Identifier of the metrics export task.
   *
   * @public
   */
  metricsExportId: string | undefined;

  /**
   * Indicates the status of the metrics export task.
   *
   * @public
   */
  status: MetricsExportStatusType | undefined;
}

/**
 * @public
 */
export interface StartResourceGroupingRecommendationTaskRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;
}

/**
 * @public
 */
export interface StartResourceGroupingRecommendationTaskResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Identifier of the grouping recommendation task.
   *
   * @public
   */
  groupingId: string | undefined;

  /**
   * Status of the action.
   *
   * @public
   */
  status: ResourcesGroupingRecGenStatusType | undefined;

  /**
   * Error that occurred while executing a grouping recommendation task.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to assign to the resource. Each tag consists of a key/value pair.
   *
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
   * Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags you want to remove.
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
export interface UpdateAppRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * The optional description for an app.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * Specifies if the resiliency policy ARN should be cleared.
   *
   * @public
   */
  clearResiliencyPolicyArn?: boolean | undefined;

  /**
   * Assessment execution schedule with 'Daily' or 'Disabled' values.
   *
   * @public
   */
  assessmentSchedule?: AppAssessmentScheduleType | undefined;

  /**
   * Defines the roles and credentials that Resilience Hub would use while creating an application, importing its resources, and running an assessment.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * The list of events you would like to subscribe and get notification for. Currently, Resilience Hub supports notifications only for **Drift detected** and **Scheduled assessment failure** events.
   *
   * @public
   */
  eventSubscriptions?: EventSubscription[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppResponse {
  /**
   * The specified application, returned as an object with details including compliance status, creation time, description, resiliency score, and more.
   *
   * @public
   */
  app: App | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   * > **Note:**
   * >
   * > Currently, this parameter accepts a key-value mapping (in a string format) of only one failover region and one associated account.
   * >
   * > Key: `"failover-regions"`
   * >
   * > Value: `"[\{"region":"<REGION>", "accounts":[\{"id":"<ACCOUNT_ID>"\}]\}]"`
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Additional configuration parameters for an Resilience Hub application. If you want to implement `additionalInfo` through the Resilience Hub console rather than using an API call, see [Configure the application configuration parameters](https://docs.aws.amazon.com/resilience-hub/latest/userguide/app-config-param.html).
   *
   * > **Note:** Currently, this parameter supports only failover region and account.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Identifier of the Application Component.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the Application Component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Type of Application Component. For more information about the types of Application Component, see [Grouping resources in an AppComponent](https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html).
   *
   * @public
   */
  type?: string | undefined;

  /**
   * Currently, there is no supported additional information for Application Components.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionAppComponentResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * List of Application Components that belong to this resource.
   *
   * @public
   */
  appComponent?: AppComponent | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceRequest {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

  /**
   * Logical identifier of the resource.
   *
   * @public
   */
  logicalResourceId?: LogicalResourceId | undefined;

  /**
   * Physical identifier of the resource.
   *
   * @public
   */
  physicalResourceId?: string | undefined;

  /**
   * Amazon Web Services region that owns the physical resource.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * Amazon Web Services account that owns the physical resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * List of Application Components that this resource belongs to. If an Application Component is not part of the Resilience Hub application, it will be added.
   *
   * @public
   */
  appComponents?: string[] | undefined;

  /**
   * Currently, there is no supported additional information for resources.
   *
   * @public
   */
  additionalInfo?: Record<string, string[]> | undefined;

  /**
   * Indicates if a resource is excluded from an Resilience Hub application.
   *
   * > **Note:** You can exclude only imported resources from an Resilience Hub application.
   *
   * @public
   */
  excluded?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAppVersionResourceResponse {
  /**
   * Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:app/`app-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  appArn: string | undefined;

  /**
   * Resilience Hub application version.
   *
   * @public
   */
  appVersion: string | undefined;

  /**
   * Defines a physical resource. A physical resource is a resource that exists in your account. It can be identified using an Amazon Resource Name (ARN) or a Resilience Hub-native identifier.
   *
   * @public
   */
  physicalResource?: PhysicalResource | undefined;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:`partition`:resiliencehub:`region`:`account`:resiliency-policy/`policy-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference* guide.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Name of the resiliency policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Description of the resiliency policy.
   *
   * @public
   */
  policyDescription?: string | undefined;

  /**
   * Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
   *
   * @public
   */
  dataLocationConstraint?: DataLocationConstraint | undefined;

  /**
   * The tier for this resiliency policy, ranging from the highest severity (`MissionCritical`) to lowest (`NonCritical`).
   *
   * @public
   */
  tier?: ResiliencyPolicyTier | undefined;

  /**
   * Resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
   *
   * @public
   */
  policy?: Partial<Record<DisruptionType, FailurePolicy>> | undefined;
}

/**
 * @public
 */
export interface UpdateResiliencyPolicyResponse {
  /**
   * The resiliency policy that was updated, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
   *
   * @public
   */
  policy: ResiliencyPolicy | undefined;
}
