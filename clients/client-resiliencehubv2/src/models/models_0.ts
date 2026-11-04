// smithy-typescript generated code
import type {
  AccountTargeting,
  AchievabilityStatus,
  ActorType,
  AlarmState,
  AssertionSource,
  AssessmentErrorCode,
  AssessmentSortField,
  AssessmentStatus,
  AssessmentStep,
  CostCurrency,
  DependencyCriticality,
  DependencyDiscoveryInput,
  DependencyDiscoveryStatus,
  DependencyInsightsErrorCode,
  DependencyInsightsStatus,
  DevOpsAgentConfidence,
  DevOpsAgentConnectionStatus,
  DevOpsAgentInvestigationStatus,
  DevOpsAgentVerdict,
  EksLabelSelectorOperator,
  FailureCategory,
  FindingSeverity,
  FindingStatus,
  InputSourceType,
  InsightsCategory,
  MultiAzDisasterRecoveryApproach,
  MultiRegionDisasterRecoveryApproach,
  ParameterType,
  PolicyComponent,
  PolicyDisassociationReason,
  PolicyEventType,
  PolicyValueSource,
  QueryGranularity,
  ReportGenerationErrorCode,
  ReportGenerationStatus,
  ReportType,
  ResourceDiscoveryErrorCode,
  ResourceDiscoveryRunStatus,
  ServiceEventType,
  ServiceFunctionCriticality,
  ServiceFunctionSource,
  SortOrder,
  StopConditionSource,
  SystemEventType,
  TestRunDependencySource,
  TestRunSourceEventErrorCode,
  TestRunSourceEventType,
  TestRunSourceType,
  TestRunStatus,
  TestSourceOutcome,
  TestSourceType,
  TopologyType,
} from "./enums";

/**
 * Describes the achievability status of a service's resilience targets based on the most recent assessment.
 *
 * @public
 */
export interface Achievability {
  /**
   * The achievability status of the availability SLO target for the service.
   *
   * @public
   */
  availabilitySlo?: AchievabilityStatus | undefined;

  /**
   * The achievability status of the multi-AZ RTO and RPO targets for the service.
   *
   * @public
   */
  multiAzRtoRpo?: AchievabilityStatus | undefined;

  /**
   * The achievability status of the multi-Region RTO and RPO targets for the service.
   *
   * @public
   */
  multiRegionRtoRpo?: AchievabilityStatus | undefined;

  /**
   * The achievability status of the data recovery time between backups for the service.
   *
   * @public
   */
  dataRecoveryTimeBetweenBackups?: AchievabilityStatus | undefined;
}

/**
 * Details about a CloudWatch alarm state change observed during a test run.
 *
 * @public
 */
export interface AlarmStateChangeDetail {
  /**
   * The state the alarm transitioned to.
   *
   * @public
   */
  state: AlarmState | undefined;

  /**
   * The state the alarm transitioned from. Absent on the initial event, which records the alarm's state when collection began.
   *
   * @public
   */
  previousState?: AlarmState | undefined;

  /**
   * A human-readable explanation of the state change, as reported by CloudWatch.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Represents a resilience assertion for a service.
 *
 * @public
 */
export interface Assertion {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The unique identifier of the assertion.
   *
   * @public
   */
  assertionId: string | undefined;

  /**
   * The text content of the assertion.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The source of the assertion, indicating whether it was AI-generated or created by a user.
   *
   * @public
   */
  source: AssertionSource | undefined;

  /**
   * The timestamp when the assertion was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the assertion was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Metadata for an assertion created event.
 *
 * @public
 */
export interface AssertionCreatedMetadata {
  /**
   * The unique identifier of the created assertion.
   *
   * @public
   */
  assertionId?: string | undefined;

  /**
   * The name of the created assertion.
   *
   * @public
   */
  assertionName?: string | undefined;
}

/**
 * Metadata for an assertion deleted event.
 *
 * @public
 */
export interface AssertionDeletedMetadata {
  /**
   * The unique identifier of the deleted assertion.
   *
   * @public
   */
  assertionId?: string | undefined;

  /**
   * The name of the deleted assertion.
   *
   * @public
   */
  assertionName?: string | undefined;
}

/**
 * Metadata for an assertion updated event.
 *
 * @public
 */
export interface AssertionUpdatedMetadata {
  /**
   * The unique identifier of the updated assertion.
   *
   * @public
   */
  assertionId?: string | undefined;

  /**
   * The name of the updated assertion.
   *
   * @public
   */
  assertionName?: string | undefined;
}

/**
 * Represents the cost of running a failure mode assessment.
 *
 * @public
 */
export interface AssessmentCost {
  /**
   * The cost amount for the assessment.
   *
   * @public
   */
  amount?: number | undefined;

  /**
   * The currency of the assessment cost.
   *
   * @public
   */
  currency?: CostCurrency | undefined;
}

/**
 * Contains summary information about a failure mode assessment.
 *
 * @public
 */
export interface AssessmentSummary {
  /**
   * The unique identifier of the assessment.
   *
   * @public
   */
  assessmentId: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The current status of the assessment.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus | undefined;

  /**
   * The current step of the assessment process.
   *
   * @public
   */
  assessmentStep?: AssessmentStep | undefined;

  /**
   * The total number of findings generated by the assessment.
   *
   * @public
   */
  totalFindings?: number | undefined;

  /**
   * The timestamp when the assessment started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp when the assessment ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * A message describing the error if the assessment failed.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code if the assessment failed.
   *
   * @public
   */
  errorCode?: AssessmentErrorCode | undefined;

  /**
   * The cost of the assessment.
   *
   * @public
   */
  assessmentCost?: AssessmentCost | undefined;

  /**
   * The number of billable assessment units consumed by the assessment.
   *
   * @public
   */
  billableAssessmentUnitCount?: number | undefined;

  /**
   * The achievability results from the assessment.
   *
   * @public
   */
  achievability?: Achievability | undefined;
}

/**
 * Represents a system associated with a service.
 *
 * @public
 */
export interface AssociatedSystem {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  systemName?: string | undefined;

  /**
   * The list of user journey identifiers that associate this system with the service.
   *
   * @public
   */
  userJourneyIds?: string[] | undefined;
}

/**
 * Defines the availability service level objective (SLO) for a resilience policy.
 *
 * @public
 */
export interface AvailabilitySlo {
  /**
   * The target availability percentage, expressed as a value between 0 and 100.
   *
   * @public
   */
  target?: number | undefined;
}

/**
 * @public
 */
export interface CreateAssertionRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The text content of the assertion.
   *
   * @public
   */
  text: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssertionResponse {
  /**
   * The created assertion.
   *
   * @public
   */
  assertion: Assertion | undefined;
}

/**
 * Describes a field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The validation error message for the field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A single label requirement in a label selector, expressed as a key, an operator, and an optional list of values.
 *
 * @public
 */
export interface EksLabelSelectorRequirement {
  /**
   * The label key that the requirement applies to.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The operator that relates the label key to the values.
   *
   * @public
   */
  operator: EksLabelSelectorOperator | undefined;

  /**
   * The label values to compare against. Specify values when the operator is IN or NOT_IN. Leave this empty when the operator is EXISTS or DOES_NOT_EXIST.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * A label selector that filters the Kubernetes objects discovered from an Amazon EKS input source. An object must satisfy both matchLabels and matchExpressions to match the selector. A selector with neither matches every object. The selector must render to 2,048 characters or fewer in Kubernetes label selector syntax.
 *
 * @public
 */
export interface EksLabelSelector {
  /**
   * The label key-value pairs that an object must have. All pairs must match for the object to be selected.
   *
   * @public
   */
  matchLabels?: Record<string, string> | undefined;

  /**
   * The label requirements that an object must satisfy. All requirements in the list must match for the object to be selected.
   *
   * @public
   */
  matchExpressions?: EksLabelSelectorRequirement[] | undefined;
}

/**
 * Defines an Amazon EKS cluster and its namespaces as an input source for resource discovery.
 *
 * @public
 */
export interface EksSource {
  /**
   * ARN identifier.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * The list of Kubernetes namespaces within the EKS cluster.
   *
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * Filters discovery to the Kubernetes objects whose labels match the selector. When omitted, all supported objects in the specified namespaces are discovered.
   *
   * @public
   */
  labelSelector?: EksLabelSelector | undefined;
}

/**
 * A tag key-value pair used for resource discovery.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * Tag key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The list of tag values.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Resource configuration for an input source. Provide exactly one field.
 *
 * @public
 */
export type ResourceConfiguration =
  | ResourceConfiguration.CfnStackArnMember
  | ResourceConfiguration.DesignFileS3UrlMember
  | ResourceConfiguration.EksMember
  | ResourceConfiguration.ResourceTagsMember
  | ResourceConfiguration.TfStateFileUrlMember
  | ResourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ResourceConfiguration {
  /**
   * The resource tags for tag-based resource discovery.
   *
   * @public
   */
  export interface ResourceTagsMember {
    resourceTags: ResourceTag[];
    cfnStackArn?: never;
    tfStateFileUrl?: never;
    eks?: never;
    designFileS3Url?: never;
    $unknown?: never;
  }

  /**
   * ARN identifier.
   *
   * @public
   */
  export interface CfnStackArnMember {
    resourceTags?: never;
    cfnStackArn: string;
    tfStateFileUrl?: never;
    eks?: never;
    designFileS3Url?: never;
    $unknown?: never;
  }

  /**
   * S3 URL — virtual hosted-style or s3:// URI.
   *
   * @public
   */
  export interface TfStateFileUrlMember {
    resourceTags?: never;
    cfnStackArn?: never;
    tfStateFileUrl: string;
    eks?: never;
    designFileS3Url?: never;
    $unknown?: never;
  }

  /**
   * The Amazon EKS configuration for resource discovery.
   *
   * @public
   */
  export interface EksMember {
    resourceTags?: never;
    cfnStackArn?: never;
    tfStateFileUrl?: never;
    eks: EksSource;
    designFileS3Url?: never;
    $unknown?: never;
  }

  /**
   * S3 URL — virtual hosted-style or s3:// URI.
   *
   * @public
   */
  export interface DesignFileS3UrlMember {
    resourceTags?: never;
    cfnStackArn?: never;
    tfStateFileUrl?: never;
    eks?: never;
    designFileS3Url: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceTags?: never;
    cfnStackArn?: never;
    tfStateFileUrl?: never;
    eks?: never;
    designFileS3Url?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resourceTags: (value: ResourceTag[]) => T;
    cfnStackArn: (value: string) => T;
    tfStateFileUrl: (value: string) => T;
    eks: (value: EksSource) => T;
    designFileS3Url: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateInputSourceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Resource configuration for an input source. Provide exactly one field.
   *
   * @public
   */
  resourceConfiguration: ResourceConfiguration | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateInputSourceResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The unique identifier assigned to the created input source.
   *
   * @public
   */
  inputSourceId: string | undefined;
}

/**
 * Defines data recovery targets for a resilience policy.
 *
 * @public
 */
export interface DataRecoveryTargets {
  /**
   * The target time between backups, in minutes.
   *
   * @public
   */
  timeBetweenBackupsInMinutes?: number | undefined;
}

/**
 * Defines the multi-AZ disaster recovery targets for a resilience policy.
 *
 * @public
 */
export interface MultiAzTargets {
  /**
   * The recovery time objective (RTO) target for multi-AZ, in minutes.
   *
   * @public
   */
  rtoInMinutes?: number | undefined;

  /**
   * The recovery point objective (RPO) target for multi-AZ, in minutes.
   *
   * @public
   */
  rpoInMinutes?: number | undefined;

  /**
   * The disaster recovery approach for multi-AZ.
   *
   * @public
   */
  disasterRecoveryApproach?: MultiAzDisasterRecoveryApproach | undefined;
}

/**
 * Defines the multi-Region disaster recovery targets for a resilience policy.
 *
 * @public
 */
export interface MultiRegionTargets {
  /**
   * The recovery time objective (RTO) target for multi-Region, in minutes.
   *
   * @public
   */
  rtoInMinutes?: number | undefined;

  /**
   * The recovery point objective (RPO) target for multi-Region, in minutes.
   *
   * @public
   */
  rpoInMinutes?: number | undefined;

  /**
   * The disaster recovery approach for multi-Region.
   *
   * @public
   */
  disasterRecoveryApproach?: MultiRegionDisasterRecoveryApproach | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The availability SLO for the resilience policy.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The multi-AZ disaster recovery targets for the resilience policy.
   *
   * @public
   */
  multiAz?: MultiAzTargets | undefined;

  /**
   * The multi-Region disaster recovery targets for the resilience policy.
   *
   * @public
   */
  multiRegion?: MultiRegionTargets | undefined;

  /**
   * The data recovery targets for the resilience policy.
   *
   * @public
   */
  dataRecovery?: DataRecoveryTargets | undefined;

  /**
   * Specifies whether cross-account sharing is enabled for the policy. Only a delegated administrator or the management account can enable sharing.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a resilience policy that defines availability and disaster recovery requirements.
 *
 * @public
 */
export interface Policy {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The availability SLO defined in the policy.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The multi-AZ disaster recovery targets defined in the policy.
   *
   * @public
   */
  multiAz?: MultiAzTargets | undefined;

  /**
   * The multi-Region disaster recovery targets defined in the policy.
   *
   * @public
   */
  multiRegion?: MultiRegionTargets | undefined;

  /**
   * The data recovery targets defined in the policy.
   *
   * @public
   */
  dataRecovery?: DataRecoveryTargets | undefined;

  /**
   * Specifies whether cross-account sharing is enabled.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;

  /**
   * The identifier of the organization this policy is shared with.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The number of services associated with this policy.
   *
   * @public
   */
  associatedServiceCount?: number | undefined;

  /**
   * The timestamp when the policy was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * The created resilience policy.
   *
   * @public
   */
  policy: Policy | undefined;
}

/**
 * @public
 */
export interface CreateReportRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The type of report to generate.
   *
   * @public
   */
  reportType: ReportType | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Details when report generation failed.
 *
 * @public
 */
export interface FailedReportOutput {
  /**
   * The error code describing why the report generation failed.
   *
   * @public
   */
  errorCode: ReportGenerationErrorCode | undefined;

  /**
   * The error message describing why the report generation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * S3 location where report was written.
 *
 * @public
 */
export interface S3ReportOutput {
  /**
   * The S3 object key for the generated report.
   *
   * @public
   */
  s3ObjectKey: string | undefined;
}

/**
 * Union of possible report outputs.
 *
 * @public
 */
export type ReportOutput =
  | ReportOutput.FailedReportOutputMember
  | ReportOutput.S3ReportOutputMember
  | ReportOutput.$UnknownMember;

/**
 * @public
 */
export namespace ReportOutput {
  /**
   * The S3 location where the report was written.
   *
   * @public
   */
  export interface S3ReportOutputMember {
    s3ReportOutput: S3ReportOutput;
    failedReportOutput?: never;
    $unknown?: never;
  }

  /**
   * Details when report generation failed.
   *
   * @public
   */
  export interface FailedReportOutputMember {
    s3ReportOutput?: never;
    failedReportOutput: FailedReportOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3ReportOutput?: never;
    failedReportOutput?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3ReportOutput: (value: S3ReportOutput) => T;
    failedReportOutput: (value: FailedReportOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Result of a report generation attempt.
 *
 * @public
 */
export interface ReportGenerationResult {
  /**
   * The type of the generated report.
   *
   * @public
   */
  reportType: ReportType | undefined;

  /**
   * The status of the report generation.
   *
   * @public
   */
  status: ReportGenerationStatus | undefined;

  /**
   * The service this report was generated for.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * Present for FAILURE_MODE reports.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The unique identifier of a test run.
   *
   * @public
   */
  testRunId?: string | undefined;

  /**
   * An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates.
   *
   * @public
   */
  testTemplateArn?: string | undefined;

  /**
   * The timestamp when the report was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Present when status is SUCCEEDED or FAILED.
   *
   * @public
   */
  reportOutput?: ReportOutput | undefined;
}

/**
 * @public
 */
export interface CreateReportResponse {
  /**
   * The result of the report generation request.
   *
   * @public
   */
  reportGenerationResult: ReportGenerationResult | undefined;
}

/**
 * The AWS DevOps Agent (DevOps Agent) integration configuration that you supply when creating or updating a service. Connecting a service to a DevOps Agent Agent Space lets DevOps Agent investigate the service's resilience test runs and attach its analysis to the results. Include this block with an Agent Space Amazon Resource Name (ARN) to connect or reconnect the service to an Agent Space. Include it without an Agent Space ARN to disconnect the service. Omit it to leave the existing linkage unchanged.
 *
 * @public
 */
export interface DevOpsAgentConfiguration {
  /**
   * The ARN of the DevOps Agent Agent Space to link to this service.
   *
   * @public
   */
  agentSpaceArn?: string | undefined;
}

/**
 * Specifies a cross-account IAM role ARN and optional external ID.
 *
 * @public
 */
export interface CrossAccountRole {
  /**
   * ARN of the IAM Role for the profile. Null if the permission profile is the 'Admin' profile.
   *
   * @public
   */
  crossAccountRoleArn: string | undefined;

  /**
   * The external ID used for assuming the cross-account role.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Defines the permission model for a service.
 *
 * @public
 */
export interface PermissionModel {
  /**
   * IAM role name (supports up to 64 characters per IAM limits).
   *
   * @public
   */
  invokerRoleName: string | undefined;

  /**
   * The list of cross-account IAM role ARNs.
   *
   * @public
   */
  crossAccountRoles?: CrossAccountRole[] | undefined;
}

/**
 * S3 configuration for report output.
 *
 * @public
 */
export interface S3ReportOutputConfiguration {
  /**
   * S3 bucket path where reports will be written (e.g., my-bucket/ngrh-reports/).
   *
   * @public
   */
  bucketPath: string | undefined;

  /**
   * Account ID of the bucket owner for cross-account access verification.
   *
   * @public
   */
  bucketOwner: string | undefined;
}

/**
 * Configuration for a report output destination.
 *
 * @public
 */
export type ReportOutputConfiguration =
  | ReportOutputConfiguration.S3Member
  | ReportOutputConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ReportOutputConfiguration {
  /**
   * S3 configuration for report output.
   *
   * @public
   */
  export interface S3Member {
    s3: S3ReportOutputConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3ReportOutputConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for automatic report generation on a Service.
 *
 * @public
 */
export interface ServiceReportConfiguration {
  /**
   * Output destinations for generated reports.
   *
   * @public
   */
  reportOutputs: ReportOutputConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The systems to associate with the service.
   *
   * @public
   */
  associatedSystems?: AssociatedSystem[] | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The Regions where the service operates.
   *
   * @public
   */
  regions: string[] | undefined;

  /**
   * The permission model for the service.
   *
   * @public
   */
  permissionModel: PermissionModel | undefined;

  /**
   * Caller-settable values for dependency discovery. INITIALIZING is system-managed.
   *
   * @public
   */
  dependencyDiscovery?: DependencyDiscoveryInput | undefined;

  /**
   * Configuration for automatic report generation on a Service.
   *
   * @public
   */
  reportConfiguration?: ServiceReportConfiguration | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The optional DevOps Agent integration configuration to apply to the new service. If you omit this field, the new service has no DevOps Agent integration.
   *
   * @public
   */
  devOpsAgentConfiguration?: DevOpsAgentConfiguration | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Configuration for dependency discovery on a service.
 *
 * @public
 */
export interface DependencyDiscoveryConfig {
  /**
   * The current status of dependency discovery.
   *
   * @public
   */
  status: DependencyDiscoveryStatus | undefined;

  /**
   * The timestamp when dependency discovery was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The count of resources eligible for dependency attribution.
   *
   * @public
   */
  eligibleResourceCount?: number | undefined;

  /**
   * A status message for dependency discovery, displayed during the initialization state.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * The current DevOps Agent integration state for a service. Read operations return this state.
 *
 * @public
 */
export interface DevOpsAgentConfigurationView {
  /**
   * The ARN of the linked DevOps Agent Agent Space.
   *
   * @public
   */
  agentSpaceArn?: string | undefined;

  /**
   * The identifier of the linked DevOps Agent Agent Space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The AWS Region of the linked DevOps Agent Agent Space.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The connection status of the DevOps Agent integration for this service. Valid values:
   *
   * - CONNECTING - The service is being connected to the Agent Space.
   * - CONNECTED - The service is connected to the Agent Space.
   * - DISCONNECTED - The service is not connected to an Agent Space.
   * - FAILED - The connection attempt failed. See statusReason for details.
   *
   * @public
   */
  status?: DevOpsAgentConnectionStatus | undefined;

  /**
   * The URL of the DevOps Agent Operator App for the linked Agent Space. This URL is present when the connection status is CONNECTED.
   *
   * @public
   */
  operatorAppUrl?: string | undefined;

  /**
   * The timestamp when the service successfully connected to the DevOps Agent Agent Space.
   *
   * @public
   */
  connectedAt?: Date | undefined;

  /**
   * A human-readable explanation of the current connection status. This field explains the status when the connection fails.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Contains the effective availability SLO value and its source.
 *
 * @public
 */
export interface SloSource {
  /**
   * The availability SLO percentage value.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Indicates whether the value comes from the service's own account or a cross-account policy.
   *
   * @public
   */
  source?: PolicyValueSource | undefined;
}

/**
 * Contains an effective RTO or RPO value and its source.
 *
 * @public
 */
export interface TargetSource {
  /**
   * The RTO or RPO value in minutes.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Indicates whether the value comes from the service's own account or a cross-account policy.
   *
   * @public
   */
  source?: PolicyValueSource | undefined;
}

/**
 * Contains the effective disaster recovery approach value for a service.
 *
 * @public
 */
export interface DisasterRecoverySource {
  /**
   * The disaster recovery approach value.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * Indicates whether the value comes from the service's own account or a cross-account policy.
   *
   * @public
   */
  source?: PolicyValueSource | undefined;
}

/**
 * Contains the effective resilience policy values for a service.
 *
 * @public
 */
export interface EffectivePolicyValues {
  /**
   * The effective availability SLO value for the service.
   *
   * @public
   */
  availabilitySlo?: SloSource | undefined;

  /**
   * The effective multi-AZ RTO value for the service, in minutes.
   *
   * @public
   */
  multiAzRto?: TargetSource | undefined;

  /**
   * The effective multi-AZ RPO value for the service, in minutes.
   *
   * @public
   */
  multiAzRpo?: TargetSource | undefined;

  /**
   * The effective multi-AZ disaster recovery approach for the service.
   *
   * @public
   */
  multiAzDrApproach?: DisasterRecoverySource | undefined;

  /**
   * The effective multi-Region RTO value for the service, in minutes.
   *
   * @public
   */
  multiRegionRto?: TargetSource | undefined;

  /**
   * The effective multi-Region RPO value for the service, in minutes.
   *
   * @public
   */
  multiRegionRpo?: TargetSource | undefined;

  /**
   * The effective multi-Region disaster recovery approach for the service.
   *
   * @public
   */
  multiRegionDrApproach?: DisasterRecoverySource | undefined;

  /**
   * The effective data recovery time between backups value for the service.
   *
   * @public
   */
  dataRecoveryTimeBetweenBackups?: TargetSource | undefined;
}

/**
 * Contains the status of resource discovery for a service.
 *
 * @public
 */
export interface ResourceDiscoveryStatus {
  /**
   * The current status of resource discovery.
   *
   * @public
   */
  status?: ResourceDiscoveryRunStatus | undefined;

  /**
   * The timestamp of the last resource discovery run.
   *
   * @public
   */
  lastRunAt?: Date | undefined;

  /**
   * The error code if resource discovery failed.
   *
   * @public
   */
  errorCode?: ResourceDiscoveryErrorCode | undefined;

  /**
   * A message describing the error if resource discovery failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Represents a service in Resilience Hub. A service is the primary unit of resilience assessment.
 *
 * @public
 */
export interface Service {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The systems associated with the service.
   *
   * @public
   */
  associatedSystems?: AssociatedSystem[] | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The Regions where the service operates.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The permission model for the service.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * The dependency discovery configuration for the service.
   *
   * @public
   */
  dependencyDiscovery?: DependencyDiscoveryConfig | undefined;

  /**
   * The effective policy values for the service.
   *
   * @public
   */
  effectivePolicyValues?: EffectivePolicyValues | undefined;

  /**
   * The achievability status of the service's resilience targets.
   *
   * @public
   */
  achievability?: Achievability | undefined;

  /**
   * Configuration for automatic report generation on a Service.
   *
   * @public
   */
  reportConfiguration?: ServiceReportConfiguration | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The estimated cost of running an assessment on the service.
   *
   * @public
   */
  estimatedAssessmentCost?: AssessmentCost | undefined;

  /**
   * The resource discovery status for the service.
   *
   * @public
   */
  resourceDiscovery?: ResourceDiscoveryStatus | undefined;

  /**
   * The current assessment status of the service.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus | undefined;

  /**
   * Indicates whether the assessment should be rerun.
   *
   * @public
   */
  rerunAssessment?: boolean | undefined;

  /**
   * The number of open findings for the service.
   *
   * @public
   */
  openFindingsCount?: number | undefined;

  /**
   * The number of resolved findings for the service.
   *
   * @public
   */
  resolvedFindingsCount?: number | undefined;

  /**
   * The AWS Organizations identifier for the service.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * The organizational unit (OU) identifier for the service.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * The AWS account ID that owns the service.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The current DevOps Agent integration state for the service.
   *
   * @public
   */
  devOpsAgentConfiguration?: DevOpsAgentConfigurationView | undefined;

  /**
   * The timestamp when the service was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the service was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * The created service.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface CreateServiceFunctionRequest {
  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criticality level of the service function.
   *
   * @public
   */
  criticality: ServiceFunctionCriticality | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a logical component of a service.
 *
 * @public
 */
export interface ServiceFunction {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The unique identifier of the service function.
   *
   * @public
   */
  serviceFunctionId: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The criticality level of the service function.
   *
   * @public
   */
  criticality: ServiceFunctionCriticality | undefined;

  /**
   * The number of resources associated with the service function.
   *
   * @public
   */
  resourceCount?: number | undefined;

  /**
   * The source of the service function.
   *
   * @public
   */
  source?: ServiceFunctionSource | undefined;

  /**
   * The timestamp when the service function was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the service function was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateServiceFunctionResponse {
  /**
   * The created service function.
   *
   * @public
   */
  serviceFunction: ServiceFunction | undefined;
}

/**
 * @public
 */
export interface CreateServiceFunctionResourcesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the service function to associate resources with.
   *
   * @public
   */
  serviceFunctionId: string | undefined;

  /**
   * The list of resources to associate with the service function.
   *
   * @public
   */
  resources: string[] | undefined;
}

/**
 * @public
 */
export interface CreateServiceFunctionResourcesResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The list of resources that were associated.
   *
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSystemRequest {
  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether cross-account sharing is enabled for the system.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a system in Resilience Hub. A system is a logical grouping of services.
 *
 * @public
 */
export interface System {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * System ID for cross-account use without exposing account structure.
   *
   * @public
   */
  systemId: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether cross-account sharing is enabled.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The AWS Organizations identifier for the system.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * The organizational unit (OU) identifier for the system.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * The timestamp when the system was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the system was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSystemResponse {
  /**
   * The created system.
   *
   * @public
   */
  system: System | undefined;
}

/**
 * Configuration for test execution logging destinations.
 *
 * @public
 */
export interface LoggingConfiguration {
  /**
   * The name of the S3 bucket for log delivery.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs log group for log delivery.
   *
   * @public
   */
  cloudWatchLogGroupArn?: string | undefined;

  /**
   * The version of the log schema.
   *
   * @public
   */
  logSchemaVersion?: string | undefined;
}

/**
 * A CloudWatch alarm that automatically stops a test run if it breaches its threshold.
 *
 * @public
 */
export interface StopCondition {
  /**
   * The source of the stop condition.
   *
   * @public
   */
  source: StopConditionSource | undefined;

  /**
   * The value of the stop condition, such as the ARN of the CloudWatch alarm.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateTestRequest {
  /**
   * The ARN of the service to create the test for.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The ARN of the test template to configure.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The logging configuration for the test.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The stop conditions for the test.
   *
   * @public
   */
  stopConditions?: StopCondition[] | undefined;

  /**
   * The name of the IAM execution role to use when running the test.
   *
   * @public
   */
  roleName?: string | undefined;

  /**
   * The parameter values for the test.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;
}

/**
 * Represents a fault action that a test runs, along with the resource type it targets.
 *
 * @public
 */
export interface TestAction {
  /**
   * The identifier of the fault action.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * A description of the fault action.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The resource type that the action targets.
   *
   * @public
   */
  resourceType: string | undefined;
}

/**
 * Represents a test created for a service by configuring a test template.
 *
 * @public
 */
export interface Test {
  /**
   * The unique identifier of the test.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the test template the test was created from.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The name of the test.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The fault actions the test runs.
   *
   * @public
   */
  actions?: TestAction[] | undefined;

  /**
   * The logging configuration for the test.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The stop conditions for the test.
   *
   * @public
   */
  stopConditions?: StopCondition[] | undefined;

  /**
   * The name of the IAM execution role used to run the test.
   *
   * @public
   */
  roleName?: string | undefined;

  /**
   * The parameter values configured for the test.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;

  /**
   * The total number of runs of the test.
   *
   * @public
   */
  totalTestRuns: number | undefined;

  /**
   * The number of successful runs of the test.
   *
   * @public
   */
  successfulTestRuns: number | undefined;

  /**
   * The timestamp when the test was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateTestResponse {
  /**
   * The created test.
   *
   * @public
   */
  test: Test | undefined;
}

/**
 * @public
 */
export interface CreateUserJourneyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a user journey that defines a critical path through a system.
 *
 * @public
 */
export interface UserJourney {
  /**
   * The unique identifier of the user journey.
   *
   * @public
   */
  userJourneyId: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The timestamp when the user journey was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the user journey was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateUserJourneyResponse {
  /**
   * The created user journey.
   *
   * @public
   */
  userJourney: UserJourney | undefined;
}

/**
 * @public
 */
export interface DeleteAssertionRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The unique identifier of the assertion to delete.
   *
   * @public
   */
  assertionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssertionResponse {
  /**
   * The unique identifier of the deleted assertion.
   *
   * @public
   */
  assertionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInputSourceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the input source to delete.
   *
   * @public
   */
  inputSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInputSourceResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the deleted input source.
   *
   * @public
   */
  inputSourceId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceFunctionRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the service function to delete.
   *
   * @public
   */
  serviceFunctionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceFunctionResponse {
  /**
   * The identifier of the deleted service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceFunctionResourcesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the service function to remove resources from.
   *
   * @public
   */
  serviceFunctionId: string | undefined;

  /**
   * The list of resources to remove from the service function.
   *
   * @public
   */
  resources: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteServiceFunctionResourcesResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The list of resources that were removed.
   *
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteSystemRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemResponse {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestRequest {
  /**
   * The identifier of the test to delete.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTestResponse {
  /**
   * The identifier of the deleted test.
   *
   * @public
   */
  testId: string | undefined;
}

/**
 * Identifies an observability alarm by its ARN.
 *
 * @public
 */
export interface ObservabilityAlarmInput {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;
}

/**
 * Identifies a success criteria alarm by its ARN.
 *
 * @public
 */
export interface SuccessCriteriaAlarmInput {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;
}

/**
 * Identifies a monitoring source to add to or remove from a test. Exactly one member is set.
 *
 * @public
 */
export type TestSourceInput =
  | TestSourceInput.ObservabilityAlarmMember
  | TestSourceInput.SuccessCriteriaAlarmMember
  | TestSourceInput.$UnknownMember;

/**
 * @public
 */
export namespace TestSourceInput {
  /**
   * A success criteria alarm that determines whether the test passes or fails.
   *
   * @public
   */
  export interface SuccessCriteriaAlarmMember {
    successCriteriaAlarm: SuccessCriteriaAlarmInput;
    observabilityAlarm?: never;
    $unknown?: never;
  }

  /**
   * An observability alarm included for visibility only.
   *
   * @public
   */
  export interface ObservabilityAlarmMember {
    successCriteriaAlarm?: never;
    observabilityAlarm: ObservabilityAlarmInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    successCriteriaAlarm?: never;
    observabilityAlarm?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    successCriteriaAlarm: (value: SuccessCriteriaAlarmInput) => T;
    observabilityAlarm: (value: ObservabilityAlarmInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeleteTestSourcesRequest {
  /**
   * The identifier of the test to remove sources from.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The monitoring sources to remove.
   *
   * @public
   */
  testSources: TestSourceInput[] | undefined;
}

/**
 * @public
 */
export interface DeleteTestSourcesResponse {}

/**
 * @public
 */
export interface DeleteUserJourneyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * The identifier of the user journey to delete.
   *
   * @public
   */
  userJourneyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserJourneyResponse {
  /**
   * The identifier of the deleted user journey.
   *
   * @public
   */
  userJourneyId: string | undefined;
}

/**
 * Contains a single insight about a service's dependencies.
 *
 * @public
 */
export interface DependencyInsight {
  /**
   * The category of the insight. Valid values:
   *
   * - CROSS_REGION - The insight relates to dependencies used across multiple Regions.
   * - NEW_DEPENDENCY - The insight relates to a recently detected dependency.
   * - THIRD_PARTY - The insight relates to a third-party dependency.
   * - UNEVEN_USAGE - The insight relates to a dependency with uneven usage across the service.
   * - AWS_SERVICE - The insight relates to a dependency on an Amazon Web Services service.
   *
   * @public
   */
  category: InsightsCategory | undefined;

  /**
   * A human-readable explanation of the insight, describing the dependency behavior or condition that was detected.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * A data point in a dependency query range.
 *
 * @public
 */
export interface QueryDataPoint {
  /**
   * The timestamp of the data point.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The number of queries at this data point.
   *
   * @public
   */
  queryCount: number | undefined;
}

/**
 * Defines a time range for dependency query data.
 *
 * @public
 */
export interface QueryRange {
  /**
   * The start time of the query range.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the query range.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The granularity of the query range data points.
   *
   * @public
   */
  granularity: QueryGranularity | undefined;

  /**
   * The data points within the query range.
   *
   * @public
   */
  dataPoints: QueryDataPoint[] | undefined;
}

/**
 * Contains summary information about a discovered dependency.
 *
 * @public
 */
export interface DependencySummary {
  /**
   * The unique identifier of the dependency.
   *
   * @public
   */
  dependencyId: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The name of the dependency.
   *
   * @public
   */
  dependencyName: string | undefined;

  /**
   * The DNS name associated with the dependency.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The location of the dependency.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The timestamp when the dependency was last detected.
   *
   * @public
   */
  lastDetectedTime: Date | undefined;

  /**
   * The source Regions from which the dependency was detected.
   *
   * @public
   */
  sourceRegions: string[] | undefined;

  /**
   * The provider of the dependency.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * The query range data for the dependency.
   *
   * @public
   */
  queryRange: QueryRange | undefined;

  /**
   * The criticality level of the dependency.
   *
   * @public
   */
  criticality: DependencyCriticality | undefined;

  /**
   * A user-provided comment about the dependency.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * The result when DevOps Agent investigates a resilience test run. The verdict is advisory and builds on the test run's own result, which remains authoritative.
 *
 * @public
 */
export interface DevOpsAgentInvestigation {
  /**
   * The investigation verdict. Valid values:
   *
   * - PASS - The resilience test run passed.
   * - FAIL - The resilience test run failed.
   * - INCONCLUSIVE - The investigation could not determine a clear outcome.
   *
   * @public
   */
  verdict?: DevOpsAgentVerdict | undefined;

  /**
   * The confidence level of the verdict. Valid values:
   *
   * - HIGH - The verdict is highly reliable.
   * - MEDIUM - The verdict has moderate reliability.
   * - LOW - The verdict has low reliability.
   *
   * @public
   */
  confidence?: DevOpsAgentConfidence | undefined;

  /**
   * A deep link to the interactive DevOps Agent investigation session.
   *
   * @public
   */
  deepLink?: string | undefined;

  /**
   * The lifecycle status of the investigation. Valid values:
   *
   * - PENDING - The investigation has been created but has not started.
   * - IN_PROGRESS - The investigation is running.
   * - COMPLETED - The investigation finished successfully.
   * - FAILED - The investigation failed to complete.
   * - TIMED_OUT - The investigation did not complete within the allotted time.
   * - CANCELED - The investigation was canceled.
   *
   * @public
   */
  status?: DevOpsAgentInvestigationStatus | undefined;

  /**
   * The DevOps Agent analysis summary for the investigation.
   *
   * @public
   */
  summary?: string | undefined;
}

/**
 * Contains property information for a service topology edge.
 *
 * @public
 */
export interface EdgePropertySummary {
  /**
   * The topology type of the edge.
   *
   * @public
   */
  topologyType?: TopologyType | undefined;

  /**
   * Human-readable relationship description. Only present for LLM-inferred edges.
   *
   * @public
   */
  label?: string | undefined;
}

/**
 * Identifies the actor that triggered an event.
 *
 * @public
 */
export interface EventActor {
  /**
   * The type of actor, either USER or SYSTEM.
   *
   * @public
   */
  type: ActorType | undefined;

  /**
   * The principal ID of the actor.
   *
   * @public
   */
  principalId: string | undefined;

  /**
   * The AWS account ID of the actor.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The user name of the actor.
   *
   * @public
   */
  userName?: string | undefined;
}

/**
 * Details about an AWS Fault Injection Service (AWS FIS) experiment run as part of a test run.
 *
 * @public
 */
export interface ExperimentDetails {
  /**
   * The ARN of the AWS FIS experiment.
   *
   * @public
   */
  experimentArn: string | undefined;

  /**
   * Additional details about the experiment.
   *
   * @public
   */
  details?: string | undefined;
}

/**
 * An infrastructure and code recommendation to address a finding.
 *
 * @public
 */
export interface InfrastructureAndCodeRecommendation {
  /**
   * The list of suggested changes.
   *
   * @public
   */
  suggestedChanges?: string[] | undefined;
}

/**
 * An observability recommendation to address a finding.
 *
 * @public
 */
export interface ObservabilityRecommendation {
  /**
   * The list of suggested observability changes.
   *
   * @public
   */
  suggestedChanges?: string[] | undefined;
}

/**
 * A testing recommendation to address a finding.
 *
 * @public
 */
export interface TestingRecommendation {
  /**
   * The list of suggested testing changes.
   *
   * @public
   */
  suggestedChanges?: string[] | undefined;
}

/**
 * Represents a resilience finding from a failure mode assessment.
 *
 * @public
 */
export interface Finding {
  /**
   * The unique identifier of the finding.
   *
   * @public
   */
  findingId?: string | undefined;

  /**
   * The name of the finding.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The failure category of the finding.
   *
   * @public
   */
  failureCategory?: FailureCategory | undefined;

  /**
   * The current status of the finding.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * The reasoning behind the finding.
   *
   * @public
   */
  reasoning?: string | undefined;

  /**
   * A user-provided comment about the finding.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The severity of the finding.
   *
   * @public
   */
  severity?: FindingSeverity | undefined;

  /**
   * The service functions associated with the finding.
   *
   * @public
   */
  serviceFunctions?: string[] | undefined;

  /**
   * The policy component associated with the finding.
   *
   * @public
   */
  policyComponent?: PolicyComponent | undefined;

  /**
   * Infrastructure and code recommendations to address the finding.
   *
   * @public
   */
  infrastructureAndCodeRecommendations?: InfrastructureAndCodeRecommendation[] | undefined;

  /**
   * Observability recommendations to address the finding.
   *
   * @public
   */
  observabilityRecommendations?: ObservabilityRecommendation[] | undefined;

  /**
   * Testing recommendations to address the finding.
   *
   * @public
   */
  testingRecommendations?: TestingRecommendation[] | undefined;

  /**
   * The timestamp when the finding was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A deep link to an interactive DevOps Agent investigation seeded with this finding. This value is null until DevOps Agent creates an investigation.
   *
   * @public
   */
  investigationDeepLink?: string | undefined;
}

/**
 * Contains summary information about a finding.
 *
 * @public
 */
export interface FindingSummary {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The unique identifier of the finding.
   *
   * @public
   */
  findingId?: string | undefined;

  /**
   * The name of the finding.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The failure category of the finding.
   *
   * @public
   */
  failureCategory?: FailureCategory | undefined;

  /**
   * The severity of the finding.
   *
   * @public
   */
  severity?: FindingSeverity | undefined;

  /**
   * The current status of the finding.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * The policy component associated with the finding.
   *
   * @public
   */
  policyComponent?: PolicyComponent | undefined;

  /**
   * The timestamp when the finding was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * A deep link to an interactive DevOps Agent investigation seeded with this finding. This value is null until DevOps Agent creates an investigation.
   *
   * @public
   */
  investigationDeepLink?: string | undefined;
}

/**
 * @public
 */
export interface GetDependencyInsightsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface GetDependencyInsightsResponse {
  /**
   * A summary of the dependency insights for the service. This field is not returned until the status is COMPLETED.
   *
   * @public
   */
  overview?: string | undefined;

  /**
   * The list of dependency insights generated for the service. This field is not returned until the status is COMPLETED.
   *
   * @public
   */
  insights?: DependencyInsight[] | undefined;

  /**
   * The status of the dependency insights generation. Valid values:
   *
   * - IN_PROGRESS - Insights generation is in progress.
   * - COMPLETED - Insights generation completed successfully.
   * - FAILED - Insights generation failed. See errorCode and errorMessage for details.
   *
   * @public
   */
  status: DependencyInsightsStatus | undefined;

  /**
   * The timestamp when the dependency insights were generated.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The error code returned when insights generation failed. Valid values:
   *
   * - INSUFFICIENT_DATA - There was not enough dependency data to generate insights.
   * - LLM_GENERATION_FAILED - The insights could not be generated.
   * - INTERNAL_ERROR - An internal error occurred while generating insights.
   *
   * @public
   */
  errorCode?: DependencyInsightsErrorCode | undefined;

  /**
   * A message describing why insights generation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetFailureModeFindingRequest {
  /**
   * The unique identifier of the finding to retrieve.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface GetFailureModeFindingResponse {
  /**
   * The requested finding.
   *
   * @public
   */
  finding?: Finding | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * The requested resilience policy.
   *
   * @public
   */
  policy: Policy | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * The requested service.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface GetSystemRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;
}

/**
 * @public
 */
export interface GetSystemResponse {
  /**
   * The requested system.
   *
   * @public
   */
  system: System | undefined;
}

/**
 * @public
 */
export interface GetTestRequest {
  /**
   * The identifier of the test to retrieve.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTestResponse {
  /**
   * The requested test.
   *
   * @public
   */
  test: Test | undefined;
}

/**
 * @public
 */
export interface GetTestRunRequest {
  /**
   * The identifier of the test run to retrieve.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * A snapshot of the resilience policy captured onto a test run from the service when the run was started.
 *
 * @public
 */
export interface TestRunPolicySnapshot {
  /**
   * The ARN of the policy.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The availability SLO targets.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The multi-AZ resilience targets.
   *
   * @public
   */
  multiAz?: MultiAzTargets | undefined;

  /**
   * The multi-Region resilience targets.
   *
   * @public
   */
  multiRegion?: MultiRegionTargets | undefined;

  /**
   * The data recovery targets.
   *
   * @public
   */
  dataRecovery?: DataRecoveryTargets | undefined;
}

/**
 * A snapshot of the report configuration captured onto a test run from the service when the run was started.
 *
 * @public
 */
export interface TestRunReportConfiguration {
  /**
   * The output destinations for generated reports.
   *
   * @public
   */
  reportOutput: ReportOutputConfiguration[] | undefined;
}

/**
 * Represents a single run of a test. Configuration is snapshotted from the test and service at the time the run is started.
 *
 * @public
 */
export interface TestRun {
  /**
   * The unique identifier of the test run.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The identifier of the test that was run.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The current status of the test run.
   *
   * @public
   */
  status: TestRunStatus | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The timestamp when the test run started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the test run ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The AWS Fault Injection Service (AWS FIS) experiments run as part of the test run.
   *
   * @public
   */
  experiments?: ExperimentDetails[] | undefined;

  /**
   * The number of events recorded for the test run. Use ListTestRunEvents to retrieve the details.
   *
   * @public
   */
  eventCount?: number | undefined;

  /**
   * The parameter values used for the test run.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;

  /**
   * A human-readable reason for test run failure. Only present when the status is FAILED or ERROR.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The stop conditions snapshotted from the test when the run was started.
   *
   * @public
   */
  stopConditions?: StopCondition[] | undefined;

  /**
   * The logging configuration snapshotted from the test when the run was started.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The IAM execution role name snapshotted from the test when the run was started.
   *
   * @public
   */
  roleName?: string | undefined;

  /**
   * The ARN of the test template snapshotted from the test when the run was started.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The report configuration snapshotted from the service when the run was started.
   *
   * @public
   */
  reportConfiguration?: TestRunReportConfiguration | undefined;

  /**
   * The resilience policy snapshotted from the service when the run was started.
   *
   * @public
   */
  policy?: TestRunPolicySnapshot | undefined;

  /**
   * The report generation result for the test run. Present after report generation completes or fails.
   *
   * @public
   */
  reportOutput?: ReportGenerationResult | undefined;

  /**
   * The ARN of the ARC Region switch plan associated with the test run.
   *
   * @public
   */
  regionSwitchPlanArn?: string | undefined;

  /**
   * The identifier of the ARC Region switch execution detected during the test run.
   *
   * @public
   */
  regionSwitchExecutionId?: string | undefined;

  /**
   * The permission model snapshotted from the service when the run was started.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * The Regions snapshotted from the service when the run was started.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * Indicates whether the test run targets resources in a single AWS account or across multiple accounts.
   *
   * @public
   */
  accountTargeting?: AccountTargeting | undefined;

  /**
   * The DevOps Agent investigation result for the test run, present when the integration is enabled for the service.
   *
   * @public
   */
  devOpsAgentInvestigation?: DevOpsAgentInvestigation | undefined;
}

/**
 * @public
 */
export interface GetTestRunResponse {
  /**
   * The requested test run.
   *
   * @public
   */
  testRun: TestRun | undefined;
}

/**
 * @public
 */
export interface GetTestTemplateRequest {
  /**
   * The ARN of the test template to retrieve.
   *
   * @public
   */
  testTemplateArn: string | undefined;
}

/**
 * Describes a parameter accepted by a test template.
 *
 * @public
 */
export interface TestTemplateParameter {
  /**
   * The name of the parameter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The data type of the parameter.
   *
   * @public
   */
  type: ParameterType | undefined;

  /**
   * Indicates whether the parameter is required.
   *
   * @public
   */
  required: boolean | undefined;

  /**
   * The default value of the parameter.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The maximum number of values the parameter accepts.
   *
   * @public
   */
  maxValues?: number | undefined;
}

/**
 * A pre-configured, AWS recommended test that defines which resilience capability to validate, the fault actions it runs, and the parameters it accepts.
 *
 * @public
 */
export interface TestTemplate {
  /**
   * The ARN of the test template.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The name of the test template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the test template.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters the test template accepts.
   *
   * @public
   */
  parameters?: TestTemplateParameter[] | undefined;

  /**
   * The fault actions the test template runs.
   *
   * @public
   */
  actions?: TestAction[] | undefined;
}

/**
 * @public
 */
export interface GetTestTemplateResponse {
  /**
   * The requested test template.
   *
   * @public
   */
  testTemplate: TestTemplate | undefined;
}

/**
 * @public
 */
export interface GetUserJourneyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * The identifier of the user journey to retrieve.
   *
   * @public
   */
  userJourneyId: string | undefined;
}

/**
 * @public
 */
export interface GetUserJourneyResponse {
  /**
   * The requested user journey.
   *
   * @public
   */
  userJourney: UserJourney | undefined;
}

/**
 * @public
 */
export interface ImportAppRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  v1AppArn: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Whether to skip manually added resources during import.
   *
   * @public
   */
  skipManuallyAddedResources?: boolean | undefined;

  /**
   * The systems to associate with the imported service.
   *
   * @public
   */
  associatedSystems?: AssociatedSystem[] | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportAppResponse {
  /**
   * The imported service.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface ImportPolicyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  v1PolicyArn: string | undefined;

  /**
   * KMS key identifier — accepts key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The availability SLO to set on the imported policy.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The multi-AZ disaster recovery approach for the imported policy.
   *
   * @public
   */
  multiAzDisasterRecoveryApproach?: MultiAzDisasterRecoveryApproach | undefined;

  /**
   * The multi-Region disaster recovery approach for the imported policy.
   *
   * @public
   */
  multiRegionDisasterRecoveryApproach?: MultiRegionDisasterRecoveryApproach | undefined;

  /**
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportPolicyResponse {
  /**
   * The imported policy.
   *
   * @public
   */
  policy: Policy | undefined;
}

/**
 * Identifies an input source by its identifier and type.
 *
 * @public
 */
export interface InputSource {
  /**
   * The identifier of the input source.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The type of the input source.
   *
   * @public
   */
  type: InputSourceType | undefined;
}

/**
 * Contains summary information about an input source for a service.
 *
 * @public
 */
export interface InputSourceSummary {
  /**
   * The unique identifier of the input source.
   *
   * @public
   */
  inputSourceId: string | undefined;

  /**
   * The type of the input source.
   *
   * @public
   */
  type?: InputSourceType | undefined;

  /**
   * The resource tags used for discovery, if this input source uses tags.
   *
   * @public
   */
  resourceTags?: ResourceTag[] | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  cfnStackArn?: string | undefined;

  /**
   * S3 URL — virtual hosted-style or s3:// URI.
   *
   * @public
   */
  tfStateFileUrl?: string | undefined;

  /**
   * The Amazon EKS configuration, if this input source uses EKS.
   *
   * @public
   */
  eks?: EksSource | undefined;

  /**
   * S3 URL — virtual hosted-style or s3:// URI.
   *
   * @public
   */
  designFileS3Url?: string | undefined;

  /**
   * The timestamp when the input source was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListAssertionsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter assertions by source type.
   *
   * @public
   */
  source?: AssertionSource | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssertionsResponse {
  /**
   * The list of assertions.
   *
   * @public
   */
  assertions: Assertion[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDependenciesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The start time for the dependency query range.
   *
   * @public
   */
  queryRangeStartTime?: Date | undefined;

  /**
   * The end time for the dependency query range.
   *
   * @public
   */
  queryRangeEndTime?: Date | undefined;

  /**
   * The granularity for the dependency query range.
   *
   * @public
   */
  queryRangeGranularity?: QueryGranularity | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDependenciesResponse {
  /**
   * The list of dependency summaries.
   *
   * @public
   */
  dependencySummaries: DependencySummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailureModeAssessmentsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Specifies the assessment statuses to include in the results.
   *
   * @public
   */
  assessmentStatuses?: AssessmentStatus[] | undefined;

  /**
   * Specifies that only assessments that started at or after this timestamp appear in the results.
   *
   * @public
   */
  startedAfter?: Date | undefined;

  /**
   * Specifies that only assessments that ended at or before this timestamp appear in the results.
   *
   * @public
   */
  endedBefore?: Date | undefined;

  /**
   * The field to use for sorting failure mode assessments.
   *
   * @public
   */
  sortBy?: AssessmentSortField | undefined;

  /**
   * The sort order for results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailureModeAssessmentsResponse {
  /**
   * The list of assessment summaries.
   *
   * @public
   */
  assessmentSummaries: AssessmentSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailureModeFindingsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter findings by severity.
   *
   * @public
   */
  severity?: FindingSeverity | undefined;

  /**
   * Filter findings by failure category.
   *
   * @public
   */
  failureCategory?: FailureCategory | undefined;

  /**
   * Filter findings by status.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFailureModeFindingsResponse {
  /**
   * The list of finding summaries.
   *
   * @public
   */
  findingsSummary: FindingSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInputSourcesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter input sources by type.
   *
   * @public
   */
  type?: InputSourceType | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInputSourcesResponse {
  /**
   * The list of input source summaries.
   *
   * @public
   */
  inputSourceSummaries: InputSourceSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * The identifier of the account that owns the policies to include in the results.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a resilience policy.
 *
 * @public
 */
export interface PolicySummary {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The availability SLO defined in the policy.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The multi-AZ disaster recovery targets defined in the policy.
   *
   * @public
   */
  multiAz?: MultiAzTargets | undefined;

  /**
   * The multi-Region disaster recovery targets defined in the policy.
   *
   * @public
   */
  multiRegion?: MultiRegionTargets | undefined;

  /**
   * The data recovery targets defined in the policy.
   *
   * @public
   */
  dataRecovery?: DataRecoveryTargets | undefined;

  /**
   * Specifies whether cross-account sharing is enabled.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;

  /**
   * The identifier of the organization this policy is shared with.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * The number of services associated with this policy.
   *
   * @public
   */
  associatedServiceCount?: number | undefined;

  /**
   * The timestamp when the policy was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * The list of policy summaries.
   *
   * @public
   */
  policySummaries: PolicySummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEventsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The type of events to include in the results.
   *
   * @public
   */
  eventTypes?: PolicyEventType[] | undefined;

  /**
   * The start time for filtering events.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for filtering events.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about the service that started using the policy, such as the account that owns the service.
 *
 * @public
 */
export interface PolicyAttachedToServiceMetadata {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The account that owns the service.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Contains details about a policy that was deleted, including the number of services that were affected.
 *
 * @public
 */
export interface PolicyDeletedMetadata {
  /**
   * The number of services that were using the policy when it was deleted.
   *
   * @public
   */
  affectedServiceCount?: number | undefined;
}

/**
 * Contains details about the service that stopped using the policy, such as the account that owns the service.
 *
 * @public
 */
export interface PolicyDetachedFromServiceMetadata {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The account that owns the service.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Contains details about a policy for which organization sharing was revoked, including the number of services that were affected.
 *
 * @public
 */
export interface PolicySharingRevokedMetadata {
  /**
   * The number of services that were using the policy when sharing was revoked.
   *
   * @public
   */
  affectedServiceCount?: number | undefined;
}

/**
 * Contains the event-specific metadata for a policy event. Exactly one member is populated, according to the event type.
 *
 * - policyAttachedToService — a service started using the policy.
 * - policyDetachedFromService — a service stopped using the policy.
 * - policySharingRevoked — cross-account sharing was disabled for the policy.
 * - policyDeleted — the policy was deleted.
 *
 * @public
 */
export type PolicyEventMetadata =
  | PolicyEventMetadata.PolicyAttachedToServiceMember
  | PolicyEventMetadata.PolicyDeletedMember
  | PolicyEventMetadata.PolicyDetachedFromServiceMember
  | PolicyEventMetadata.PolicySharingRevokedMember
  | PolicyEventMetadata.$UnknownMember;

/**
 * @public
 */
export namespace PolicyEventMetadata {
  /**
   * Contains details about the service that started using the policy, such as the account that owns the service.
   *
   * @public
   */
  export interface PolicyAttachedToServiceMember {
    policyAttachedToService: PolicyAttachedToServiceMetadata;
    policyDetachedFromService?: never;
    policySharingRevoked?: never;
    policyDeleted?: never;
    $unknown?: never;
  }

  /**
   * Contains details about the service that stopped using the policy, such as the account that owns the service.
   *
   * @public
   */
  export interface PolicyDetachedFromServiceMember {
    policyAttachedToService?: never;
    policyDetachedFromService: PolicyDetachedFromServiceMetadata;
    policySharingRevoked?: never;
    policyDeleted?: never;
    $unknown?: never;
  }

  /**
   * Contains details about a policy for which organization sharing was revoked, including the number of services that were affected.
   *
   * @public
   */
  export interface PolicySharingRevokedMember {
    policyAttachedToService?: never;
    policyDetachedFromService?: never;
    policySharingRevoked: PolicySharingRevokedMetadata;
    policyDeleted?: never;
    $unknown?: never;
  }

  /**
   * Contains details about a policy that was deleted, including the number of services that were affected.
   *
   * @public
   */
  export interface PolicyDeletedMember {
    policyAttachedToService?: never;
    policyDetachedFromService?: never;
    policySharingRevoked?: never;
    policyDeleted: PolicyDeletedMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    policyAttachedToService?: never;
    policyDetachedFromService?: never;
    policySharingRevoked?: never;
    policyDeleted?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    policyAttachedToService: (value: PolicyAttachedToServiceMetadata) => T;
    policyDetachedFromService: (value: PolicyDetachedFromServiceMetadata) => T;
    policySharingRevoked: (value: PolicySharingRevokedMetadata) => T;
    policyDeleted: (value: PolicyDeletedMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the title, description, and event-specific metadata for a single event on the timeline of a resilience policy.
 *
 * @public
 */
export interface PolicyEventDetails {
  /**
   * A short summary of the event.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the event.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The event-specific metadata, with one member populated according to the event type.
   *
   * @public
   */
  eventMetadata?: PolicyEventMetadata | undefined;
}

/**
 * An event on the timeline of a resilience policy.
 *
 * @public
 */
export interface PolicyEvent {
  /**
   * The identifier of the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The time the event occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  eventType: PolicyEventType | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Identifies the actor that triggered an event.
   *
   * @public
   */
  actor: EventActor | undefined;

  /**
   * The details of the event.
   *
   * @public
   */
  eventDetails: PolicyEventDetails | undefined;
}

/**
 * @public
 */
export interface ListPolicyEventsResponse {
  /**
   * The list of policy events.
   *
   * @public
   */
  events: PolicyEvent[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportsRequest {
  /**
   * Optional. If not provided, lists all reports owned by the account.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * Filter reports by type.
   *
   * @public
   */
  reportType?: ReportType | undefined;

  /**
   * The unique identifier of a test run.
   *
   * @public
   */
  testRunId?: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReportsResponse {
  /**
   * The list of report generation results.
   *
   * @public
   */
  reportGenerationResults: ReportGenerationResult[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResolvedTestRunTargetResourcesRequest {
  /**
   * The identifier of the test run to list resolved target resources for.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A single AWS resource that AWS Fault Injection Service (AWS FIS) resolved as a target during a test run.
 *
 * @public
 */
export interface ResolvedTargetResource {
  /**
   * The AWS FIS resource type the target belongs to, such as aws:ec2:instance, aws:ecs:task, or aws:eks:pod.
   *
   * @public
   */
  resourceType: string | undefined;

  /**
   * The name of the target in the AWS FIS experiment template.
   *
   * @public
   */
  targetName: string | undefined;

  /**
   * The raw target information map as returned by AWS FIS.
   *
   * @public
   */
  targetInformation: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListResolvedTestRunTargetResourcesResponse {
  /**
   * The list of resolved target resources.
   *
   * @public
   */
  resolvedTargetResources: ResolvedTargetResource[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter resources by service function identifier.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * Filter resources by AWS Region.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The CloudFormation resource types to include in the response.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;

  /**
   * Specifies whether to filter non-billable resources. When true (the default), the operation returns only billable resources.
   *
   * @public
   */
  billable?: boolean | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents an AWS resource discovered by Resilience Hub.
 *
 * @public
 */
export interface Resource {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The AWS Region where the resource is located.
   *
   * @public
   */
  awsRegion?: string | undefined;

  /**
   * The AWS account ID that owns the resource.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The Availability Zone ID of the Availability Zone that hosts the resource, such as use1-az1. The Availability Zone ID is consistent across Amazon Web Services (AWS) accounts, unlike the Availability Zone name.
   *
   * @public
   */
  availabilityZoneId?: string | undefined;

  /**
   * The name of the Availability Zone that hosts the resource, such as us-west-2a.
   *
   * @public
   */
  availabilityZoneName?: string | undefined;

  /**
   * The identifier of the single parent resource that contains this resource, used to represent containment relationships in the resource topology. A resource has at most one containment parent.
   *
   * @public
   */
  containmentParentId?: string | undefined;

  /**
   * The identifier of the logical resource group that this resource belongs to. Resources that share this identifier are managed as a single unit.
   *
   * @public
   */
  logicalResourceGroupId?: string | undefined;
}

/**
 * Represents a resource associated with a service.
 *
 * @public
 */
export interface ServiceResource {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  resourceIdentifier: string | undefined;

  /**
   * The input source that discovered the resource.
   *
   * @public
   */
  inputSource?: InputSource | undefined;

  /**
   * The resource details.
   *
   * @public
   */
  resource: Resource | undefined;
}

/**
 * @public
 */
export interface ListResourcesResponse {
  /**
   * The service function identifier for the returned resources.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The list of service resources.
   *
   * @public
   */
  serviceResources?: ServiceResource[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceEventsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The type of events to include in the results.
   *
   * @public
   */
  eventTypes?: ServiceEventType[] | undefined;

  /**
   * The start time for filtering events.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for filtering events.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Metadata for a service achievability updated event.
 *
 * @public
 */
export interface ServiceAchievabilityUpdatedMetadata {
  /**
   * The assessment identifier that triggered the update.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * The updated achievability status of the availability SLO.
   *
   * @public
   */
  availabilitySlo?: string | undefined;

  /**
   * The updated achievability status of the multi-AZ RTO and RPO targets.
   *
   * @public
   */
  multiAzRtoRpo?: string | undefined;

  /**
   * The updated achievability status of the multi-Region RTO and RPO targets.
   *
   * @public
   */
  multiRegionRtoRpo?: string | undefined;
}

/**
 * Metadata for a service created event.
 *
 * @public
 */
export interface ServiceCreatedMetadata {}

/**
 * Metadata for a service deleted event.
 *
 * @public
 */
export interface ServiceDeletedMetadata {}

/**
 * Metadata for a service function created event.
 *
 * @public
 */
export interface ServiceFunctionCreatedMetadata {
  /**
   * The identifier of the created service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the created service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;
}

/**
 * Metadata for a service function deleted event.
 *
 * @public
 */
export interface ServiceFunctionDeletedMetadata {
  /**
   * The identifier of the deleted service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the deleted service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;
}

/**
 * Metadata for a service function resources added event.
 *
 * @public
 */
export interface ServiceFunctionResourcesAddedMetadata {
  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;

  /**
   * The list of resource ARNs that were added.
   *
   * @public
   */
  resourcesAdded?: string[] | undefined;
}

/**
 * Metadata for a service function resources removed event.
 *
 * @public
 */
export interface ServiceFunctionResourcesRemovedMetadata {
  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;

  /**
   * The list of resource ARNs that were removed.
   *
   * @public
   */
  resourcesRemoved?: string[] | undefined;
}

/**
 * Metadata for a service function updated event.
 *
 * @public
 */
export interface ServiceFunctionUpdatedMetadata {
  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;

  /**
   * The list of resource ARNs that were added.
   *
   * @public
   */
  resourcesAdded?: string[] | undefined;

  /**
   * The list of resource ARNs that were removed.
   *
   * @public
   */
  resourcesRemoved?: string[] | undefined;
}

/**
 * Metadata for a service input sources updated event.
 *
 * @public
 */
export interface ServiceInputSourcesUpdatedMetadata {}

/**
 * Metadata for a service policy associated event.
 *
 * @public
 */
export interface ServicePolicyAssociatedMetadata {
  /**
   * The name of the associated policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The account that owns the policy.
   *
   * @public
   */
  policyOwnerAccountId?: string | undefined;

  /**
   * The source of the policy.
   *
   * - SELF — the policy belongs to the account that owns the service.
   * - CROSS_ACCOUNT — the policy belongs to another account and was shared with the organization.
   *
   * @public
   */
  policySource?: PolicyValueSource | undefined;
}

/**
 * Metadata for a service policy disassociated event.
 *
 * @public
 */
export interface ServicePolicyDisassociatedMetadata {
  /**
   * The name of the disassociated policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The account that owns the policy.
   *
   * @public
   */
  policyOwnerAccountId?: string | undefined;

  /**
   * The source of the policy.
   *
   * - SELF — the policy belongs to the account that owns the service.
   * - CROSS_ACCOUNT — the policy belongs to another account and was shared with the organization.
   *
   * @public
   */
  policySource?: PolicyValueSource | undefined;

  /**
   * The reason the policy was disassociated from the service.
   *
   * @public
   */
  reason?: PolicyDisassociationReason | undefined;
}

/**
 * Metadata for a service resources associated event.
 *
 * @public
 */
export interface ServiceResourcesAssociatedMetadata {
  /**
   * The number of resources associated.
   *
   * @public
   */
  resourceCount?: number | undefined;

  /**
   * The types of resources associated.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;
}

/**
 * Metadata for a service resources disassociated event.
 *
 * @public
 */
export interface ServiceResourcesDisassociatedMetadata {
  /**
   * The number of resources disassociated.
   *
   * @public
   */
  resourceCount?: number | undefined;

  /**
   * The types of resources disassociated.
   *
   * @public
   */
  resourceTypes?: string[] | undefined;
}

/**
 * Metadata for a service system associated event.
 *
 * @public
 */
export interface ServiceSystemAssociatedMetadata {
  /**
   * The name of the associated system.
   *
   * @public
   */
  systemName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn?: string | undefined;
}

/**
 * Metadata for a service system disassociated event.
 *
 * @public
 */
export interface ServiceSystemDisassociatedMetadata {
  /**
   * The identifier of the disassociated system.
   *
   * @public
   */
  systemId?: string | undefined;

  /**
   * The name of the disassociated system.
   *
   * @public
   */
  systemName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn?: string | undefined;
}

/**
 * Metadata for a service workflow updated event.
 *
 * @public
 */
export interface ServiceWorkflowUpdatedMetadata {
  /**
   * The identifier of the service function.
   *
   * @public
   */
  serviceFunctionId?: string | undefined;

  /**
   * The name of the service function.
   *
   * @public
   */
  serviceFunctionName?: string | undefined;
}

/**
 * Type-specific metadata for each service event type.
 *
 * @public
 */
export type ServiceEventMetadata =
  | ServiceEventMetadata.AssertionCreatedMember
  | ServiceEventMetadata.AssertionDeletedMember
  | ServiceEventMetadata.AssertionUpdatedMember
  | ServiceEventMetadata.ServiceAchievabilityUpdatedMember
  | ServiceEventMetadata.ServiceCreatedMember
  | ServiceEventMetadata.ServiceDeletedMember
  | ServiceEventMetadata.ServiceFunctionCreatedMember
  | ServiceEventMetadata.ServiceFunctionDeletedMember
  | ServiceEventMetadata.ServiceFunctionResourcesAddedMember
  | ServiceEventMetadata.ServiceFunctionResourcesRemovedMember
  | ServiceEventMetadata.ServiceFunctionUpdatedMember
  | ServiceEventMetadata.ServiceInputSourcesUpdatedMember
  | ServiceEventMetadata.ServicePolicyAssociatedMember
  | ServiceEventMetadata.ServicePolicyDisassociatedMember
  | ServiceEventMetadata.ServiceResourcesAssociatedMember
  | ServiceEventMetadata.ServiceResourcesDisassociatedMember
  | ServiceEventMetadata.ServiceSystemAssociatedMember
  | ServiceEventMetadata.ServiceSystemDisassociatedMember
  | ServiceEventMetadata.ServiceWorkflowUpdatedMember
  | ServiceEventMetadata.$UnknownMember;

/**
 * @public
 */
export namespace ServiceEventMetadata {
  /**
   * Metadata for a service created event.
   *
   * @public
   */
  export interface ServiceCreatedMember {
    serviceCreated: ServiceCreatedMetadata;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service deleted event.
   *
   * @public
   */
  export interface ServiceDeletedMember {
    serviceCreated?: never;
    serviceDeleted: ServiceDeletedMetadata;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service system associated event.
   *
   * @public
   */
  export interface ServiceSystemAssociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated: ServiceSystemAssociatedMetadata;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service system disassociated event.
   *
   * @public
   */
  export interface ServiceSystemDisassociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated: ServiceSystemDisassociatedMetadata;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service resources associated event.
   *
   * @public
   */
  export interface ServiceResourcesAssociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated: ServiceResourcesAssociatedMetadata;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service resources disassociated event.
   *
   * @public
   */
  export interface ServiceResourcesDisassociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated: ServiceResourcesDisassociatedMetadata;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service workflow updated event.
   *
   * @public
   */
  export interface ServiceWorkflowUpdatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated: ServiceWorkflowUpdatedMetadata;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service input sources updated event.
   *
   * @public
   */
  export interface ServiceInputSourcesUpdatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated: ServiceInputSourcesUpdatedMetadata;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service policy associated event.
   *
   * @public
   */
  export interface ServicePolicyAssociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated: ServicePolicyAssociatedMetadata;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service policy disassociated event.
   *
   * @public
   */
  export interface ServicePolicyDisassociatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated: ServicePolicyDisassociatedMetadata;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service function created event.
   *
   * @public
   */
  export interface ServiceFunctionCreatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated: ServiceFunctionCreatedMetadata;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service function updated event.
   *
   * @public
   */
  export interface ServiceFunctionUpdatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated: ServiceFunctionUpdatedMetadata;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service function deleted event.
   *
   * @public
   */
  export interface ServiceFunctionDeletedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted: ServiceFunctionDeletedMetadata;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service function resources added event.
   *
   * @public
   */
  export interface ServiceFunctionResourcesAddedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded: ServiceFunctionResourcesAddedMetadata;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service function resources removed event.
   *
   * @public
   */
  export interface ServiceFunctionResourcesRemovedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved: ServiceFunctionResourcesRemovedMetadata;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a service achievability updated event.
   *
   * @public
   */
  export interface ServiceAchievabilityUpdatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated: ServiceAchievabilityUpdatedMetadata;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an assertion created event.
   *
   * @public
   */
  export interface AssertionCreatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated: AssertionCreatedMetadata;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an assertion updated event.
   *
   * @public
   */
  export interface AssertionUpdatedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated: AssertionUpdatedMetadata;
    assertionDeleted?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an assertion deleted event.
   *
   * @public
   */
  export interface AssertionDeletedMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted: AssertionDeletedMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serviceCreated?: never;
    serviceDeleted?: never;
    serviceSystemAssociated?: never;
    serviceSystemDisassociated?: never;
    serviceResourcesAssociated?: never;
    serviceResourcesDisassociated?: never;
    serviceWorkflowUpdated?: never;
    serviceInputSourcesUpdated?: never;
    servicePolicyAssociated?: never;
    servicePolicyDisassociated?: never;
    serviceFunctionCreated?: never;
    serviceFunctionUpdated?: never;
    serviceFunctionDeleted?: never;
    serviceFunctionResourcesAdded?: never;
    serviceFunctionResourcesRemoved?: never;
    serviceAchievabilityUpdated?: never;
    assertionCreated?: never;
    assertionUpdated?: never;
    assertionDeleted?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serviceCreated: (value: ServiceCreatedMetadata) => T;
    serviceDeleted: (value: ServiceDeletedMetadata) => T;
    serviceSystemAssociated: (value: ServiceSystemAssociatedMetadata) => T;
    serviceSystemDisassociated: (value: ServiceSystemDisassociatedMetadata) => T;
    serviceResourcesAssociated: (value: ServiceResourcesAssociatedMetadata) => T;
    serviceResourcesDisassociated: (value: ServiceResourcesDisassociatedMetadata) => T;
    serviceWorkflowUpdated: (value: ServiceWorkflowUpdatedMetadata) => T;
    serviceInputSourcesUpdated: (value: ServiceInputSourcesUpdatedMetadata) => T;
    servicePolicyAssociated: (value: ServicePolicyAssociatedMetadata) => T;
    servicePolicyDisassociated: (value: ServicePolicyDisassociatedMetadata) => T;
    serviceFunctionCreated: (value: ServiceFunctionCreatedMetadata) => T;
    serviceFunctionUpdated: (value: ServiceFunctionUpdatedMetadata) => T;
    serviceFunctionDeleted: (value: ServiceFunctionDeletedMetadata) => T;
    serviceFunctionResourcesAdded: (value: ServiceFunctionResourcesAddedMetadata) => T;
    serviceFunctionResourcesRemoved: (value: ServiceFunctionResourcesRemovedMetadata) => T;
    serviceAchievabilityUpdated: (value: ServiceAchievabilityUpdatedMetadata) => T;
    assertionCreated: (value: AssertionCreatedMetadata) => T;
    assertionUpdated: (value: AssertionUpdatedMetadata) => T;
    assertionDeleted: (value: AssertionDeletedMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the details of a service event.
 *
 * @public
 */
export interface ServiceEventDetails {
  /**
   * The title of the event.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the event.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Type-specific metadata for each service event type.
   *
   * @public
   */
  eventMetadata?: ServiceEventMetadata | undefined;
}

/**
 * Represents an event in the service event log.
 *
 * @public
 */
export interface ServiceEvent {
  /**
   * The unique identifier of the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp of the event.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  eventType: ServiceEventType | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The actor that triggered the event.
   *
   * @public
   */
  actor: EventActor | undefined;

  /**
   * The details of the event.
   *
   * @public
   */
  eventDetails: ServiceEventDetails | undefined;
}

/**
 * @public
 */
export interface ListServiceEventsResponse {
  /**
   * The list of service events.
   *
   * @public
   */
  events: ServiceEvent[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceFunctionsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceFunctionsResponse {
  /**
   * The list of service functions.
   *
   * @public
   */
  serviceFunctions: ServiceFunction[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn?: string | undefined;

  /**
   * Filter services by user journey identifier.
   *
   * @public
   */
  userJourneyId?: string | undefined;

  /**
   * Filter services by organizational unit (OU) identifier.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * Filter services by AWS account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Filter services by assessment status.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a service.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The systems associated with the service.
   *
   * @public
   */
  associatedSystems?: AssociatedSystem[] | undefined;

  /**
   * The Regions where the service operates.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The current assessment status of the service.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus | undefined;

  /**
   * The DevOps Agent connection status for the service. Valid values:
   *
   * - CONNECTING - The service is being connected to the Agent Space.
   * - CONNECTED - The service is connected to the Agent Space.
   * - DISCONNECTED - The service is not connected to an Agent Space.
   * - FAILED - The connection attempt failed.
   *
   * @public
   */
  devOpsAgentStatus?: DevOpsAgentConnectionStatus | undefined;

  /**
   * The ARN of the DevOps Agent Agent Space linked to the service, when the service is linked to one.
   *
   * @public
   */
  devOpsAgentSpaceArn?: string | undefined;

  /**
   * The number of open findings.
   *
   * @public
   */
  openFindingsCount?: number | undefined;

  /**
   * The number of resolved findings.
   *
   * @public
   */
  resolvedFindingsCount?: number | undefined;

  /**
   * The dependency discovery configuration.
   *
   * @public
   */
  dependencyDiscovery?: DependencyDiscoveryConfig | undefined;

  /**
   * The achievability status of the service's resilience targets.
   *
   * @public
   */
  achievability?: Achievability | undefined;

  /**
   * Displayed only if caller has access.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * Displayed only if caller has access.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * Displayed only if caller has access.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The timestamp when the service was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the service was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * The list of service summaries.
   *
   * @public
   */
  serviceSummaries: ServiceSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServiceTopologyEdgesRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a service topology edge.
 *
 * @public
 */
export interface ServiceTopologyEdgeSummary {
  /**
   * The identifier of the source resource.
   *
   * @public
   */
  sourceResourceIdentifier: string | undefined;

  /**
   * The identifier of the destination resource.
   *
   * @public
   */
  destinationResourceIdentifier: string | undefined;

  /**
   * The AWS Region of the source resource.
   *
   * @public
   */
  sourceRegion?: string | undefined;

  /**
   * The AWS Region of the destination resource.
   *
   * @public
   */
  destinationRegion?: string | undefined;

  /**
   * The AWS account ID of the source resource.
   *
   * @public
   */
  sourceAccount?: string | undefined;

  /**
   * The AWS account ID of the destination resource.
   *
   * @public
   */
  destinationAccount?: string | undefined;

  /**
   * The properties of the topology edge.
   *
   * @public
   */
  properties?: EdgePropertySummary[] | undefined;
}

/**
 * @public
 */
export interface ListServiceTopologyEdgesResponse {
  /**
   * The list of service topology edge summaries.
   *
   * @public
   */
  serviceTopologyEdgeSummaries?: ServiceTopologyEdgeSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSystemEventsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * The type of events to include in the results.
   *
   * @public
   */
  eventTypes?: SystemEventType[] | undefined;

  /**
   * The start time for filtering events.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for filtering events.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Metadata for a system created event.
 *
 * @public
 */
export interface SystemCreatedMetadata {}

/**
 * Metadata for a system deleted event.
 *
 * @public
 */
export interface SystemDeletedMetadata {}

/**
 * Metadata for a system policy associated event.
 *
 * @public
 */
export interface SystemPolicyAssociatedMetadata {
  /**
   * The name of the associated policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;
}

/**
 * Metadata for a system policy disassociated event.
 *
 * @public
 */
export interface SystemPolicyDisassociatedMetadata {
  /**
   * The name of the disassociated policy.
   *
   * @public
   */
  policyName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;
}

/**
 * Metadata for a system service associated event.
 *
 * @public
 */
export interface SystemServiceAssociatedMetadata {
  /**
   * The name of the associated service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The user journeys linking the service to the system.
   *
   * @public
   */
  userJourneys?: string[] | undefined;
}

/**
 * Metadata for a system service disassociated event.
 *
 * @public
 */
export interface SystemServiceDisassociatedMetadata {
  /**
   * The name of the disassociated service.
   *
   * @public
   */
  serviceName?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The user journeys affected by the disassociation.
   *
   * @public
   */
  userJourneysAffected?: string[] | undefined;

  /**
   * A comment about the disassociation.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * A reference to a service by ID and name.
 *
 * @public
 */
export interface ServiceReference {
  /**
   * The identifier of the referenced service.
   *
   * @public
   */
  serviceId?: string | undefined;

  /**
   * The name of the referenced service.
   *
   * @public
   */
  serviceName?: string | undefined;
}

/**
 * Metadata for a system user journey created event.
 *
 * @public
 */
export interface SystemUserJourneyCreatedMetadata {
  /**
   * The name of the created user journey.
   *
   * @public
   */
  userJourneyName?: string | undefined;

  /**
   * The services associated with the created user journey.
   *
   * @public
   */
  associatedServices?: ServiceReference[] | undefined;
}

/**
 * Metadata for a system user journey deleted event.
 *
 * @public
 */
export interface SystemUserJourneyDeletedMetadata {
  /**
   * The name of the deleted user journey.
   *
   * @public
   */
  userJourneyName?: string | undefined;

  /**
   * The services that were associated at the time of deletion.
   *
   * @public
   */
  associatedServicesAtDeletion?: ServiceReference[] | undefined;
}

/**
 * Describes changes to service references.
 *
 * @public
 */
export interface ServiceReferenceChanges {
  /**
   * The list of service references that were added.
   *
   * @public
   */
  added?: ServiceReference[] | undefined;

  /**
   * The list of service references that were removed.
   *
   * @public
   */
  removed?: ServiceReference[] | undefined;
}

/**
 * Describes a change from one string value to another.
 *
 * @public
 */
export interface StringChange {
  /**
   * The old value.
   *
   * @public
   */
  oldValue?: string | undefined;

  /**
   * The new value.
   *
   * @public
   */
  newValue?: string | undefined;
}

/**
 * Describes changes made to a user journey.
 *
 * @public
 */
export interface UserJourneyChanges {
  /**
   * Changes to the user journey description.
   *
   * @public
   */
  journeyDescription?: StringChange | undefined;

  /**
   * Changes to the services associated with the user journey.
   *
   * @public
   */
  associatedServices?: ServiceReferenceChanges | undefined;
}

/**
 * Metadata for a system user journey updated event.
 *
 * @public
 */
export interface SystemUserJourneyUpdatedMetadata {
  /**
   * The name of the updated user journey.
   *
   * @public
   */
  userJourneyName?: string | undefined;

  /**
   * The changes made to the user journey.
   *
   * @public
   */
  changes?: UserJourneyChanges | undefined;
}

/**
 * Type-specific metadata for each system event type.
 *
 * @public
 */
export type SystemEventMetadata =
  | SystemEventMetadata.SystemCreatedMember
  | SystemEventMetadata.SystemDeletedMember
  | SystemEventMetadata.SystemPolicyAssociatedMember
  | SystemEventMetadata.SystemPolicyDisassociatedMember
  | SystemEventMetadata.SystemServiceAssociatedMember
  | SystemEventMetadata.SystemServiceDisassociatedMember
  | SystemEventMetadata.SystemUserJourneyCreatedMember
  | SystemEventMetadata.SystemUserJourneyDeletedMember
  | SystemEventMetadata.SystemUserJourneyUpdatedMember
  | SystemEventMetadata.$UnknownMember;

/**
 * @public
 */
export namespace SystemEventMetadata {
  /**
   * Metadata for a system created event.
   *
   * @public
   */
  export interface SystemCreatedMember {
    systemCreated: SystemCreatedMetadata;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system deleted event.
   *
   * @public
   */
  export interface SystemDeletedMember {
    systemCreated?: never;
    systemDeleted: SystemDeletedMetadata;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system user journey created event.
   *
   * @public
   */
  export interface SystemUserJourneyCreatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated: SystemUserJourneyCreatedMetadata;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system user journey updated event.
   *
   * @public
   */
  export interface SystemUserJourneyUpdatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated: SystemUserJourneyUpdatedMetadata;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system user journey deleted event.
   *
   * @public
   */
  export interface SystemUserJourneyDeletedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted: SystemUserJourneyDeletedMetadata;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system service associated event.
   *
   * @public
   */
  export interface SystemServiceAssociatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated: SystemServiceAssociatedMetadata;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system service disassociated event.
   *
   * @public
   */
  export interface SystemServiceDisassociatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated: SystemServiceDisassociatedMetadata;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system policy associated event.
   *
   * @public
   */
  export interface SystemPolicyAssociatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated: SystemPolicyAssociatedMetadata;
    systemPolicyDisassociated?: never;
    $unknown?: never;
  }

  /**
   * Metadata for a system policy disassociated event.
   *
   * @public
   */
  export interface SystemPolicyDisassociatedMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated: SystemPolicyDisassociatedMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    systemCreated?: never;
    systemDeleted?: never;
    systemUserJourneyCreated?: never;
    systemUserJourneyUpdated?: never;
    systemUserJourneyDeleted?: never;
    systemServiceAssociated?: never;
    systemServiceDisassociated?: never;
    systemPolicyAssociated?: never;
    systemPolicyDisassociated?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    systemCreated: (value: SystemCreatedMetadata) => T;
    systemDeleted: (value: SystemDeletedMetadata) => T;
    systemUserJourneyCreated: (value: SystemUserJourneyCreatedMetadata) => T;
    systemUserJourneyUpdated: (value: SystemUserJourneyUpdatedMetadata) => T;
    systemUserJourneyDeleted: (value: SystemUserJourneyDeletedMetadata) => T;
    systemServiceAssociated: (value: SystemServiceAssociatedMetadata) => T;
    systemServiceDisassociated: (value: SystemServiceDisassociatedMetadata) => T;
    systemPolicyAssociated: (value: SystemPolicyAssociatedMetadata) => T;
    systemPolicyDisassociated: (value: SystemPolicyDisassociatedMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the details of a system event.
 *
 * @public
 */
export interface SystemEventDetails {
  /**
   * The title of the event.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The description of the event.
   *
   * @public
   */
  description: string | undefined;

  /**
   * Type-specific metadata for each system event type.
   *
   * @public
   */
  eventMetadata?: SystemEventMetadata | undefined;
}

/**
 * Represents an event in the system event log.
 *
 * @public
 */
export interface SystemEvent {
  /**
   * The unique identifier of the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp of the event.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  eventType: SystemEventType | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * The actor that triggered the event.
   *
   * @public
   */
  actor: EventActor | undefined;

  /**
   * The details of the event.
   *
   * @public
   */
  eventDetails: SystemEventDetails | undefined;
}

/**
 * @public
 */
export interface ListSystemEventsResponse {
  /**
   * The list of system events.
   *
   * @public
   */
  events: SystemEvent[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSystemsRequest {
  /**
   * Filter systems by organizational unit (OU) identifier.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a system.
 *
 * @public
 */
export interface SystemSummary {
  /**
   * System ID for cross-account use without exposing account structure.
   *
   * @public
   */
  systemId: string | undefined;

  /**
   * Resource name (used in ARN — no spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn?: string | undefined;

  /**
   * The number of user journeys in the system.
   *
   * @public
   */
  userJourneysCount?: number | undefined;

  /**
   * The number of services in the system.
   *
   * @public
   */
  servicesCount?: number | undefined;

  /**
   * Displayed only if caller has access.
   *
   * @public
   */
  organizationId?: string | undefined;

  /**
   * Displayed only if caller has access.
   *
   * @public
   */
  ouId?: string | undefined;

  /**
   * The timestamp when the system was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the system was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListSystemsResponse {
  /**
   * The list of system summaries.
   *
   * @public
   */
  systemSummaries: SystemSummary[] | undefined;

  /**
   * Pagination token.
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
   * ARN identifier.
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
   * Resource tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestRunDependenciesRequest {
  /**
   * The identifier of the test run to list dependencies for.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a dependency that a test run blocked, as captured when the run started.
 *
 * @public
 */
export interface TestRunDependencySummary {
  /**
   * The unique identifier of the dependency. Absent when the dependency was entered manually and was not part of dependency discovery.
   *
   * @public
   */
  dependencyId?: string | undefined;

  /**
   * The name of the dependency.
   *
   * @public
   */
  dependencyName: string | undefined;

  /**
   * The DNS name of the dependency that the test run blocked.
   *
   * @public
   */
  dnsName: string | undefined;

  /**
   * The criticality classification of the dependency when the run started. A dependency that was not discovered has the UNKNOWN criticality.
   *
   * @public
   */
  criticality: DependencyCriticality | undefined;

  /**
   * The origin of the dependency. A discovered dependency was found by dependency discovery; a manual dependency was entered when the run started.
   *
   * @public
   */
  source: TestRunDependencySource | undefined;

  /**
   * The location of the dependency.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The source Regions from which the dependency was detected.
   *
   * @public
   */
  sourceRegions?: string[] | undefined;

  /**
   * The provider of the dependency.
   *
   * @public
   */
  provider?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunDependenciesResponse {
  /**
   * The list of dependencies the test run blocked.
   *
   * @public
   */
  dependencies: TestRunDependencySummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunEventsRequest {
  /**
   * The identifier of the test run to list events for.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Return events at or after this timestamp.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * Return events at or before this timestamp.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A single event in a test run's timeline.
 *
 * @public
 */
export interface TestRunEvent {
  /**
   * The unique identifier of the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The type of the event, such as action_started, action_completed, or rto_recovery_detected.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * A human-readable description of what happened.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The timestamp when the event occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * Machine-parseable key-value attributes for the event.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTestRunEventsResponse {
  /**
   * The list of test run events.
   *
   * @public
   */
  events: TestRunEvent[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunsRequest {
  /**
   * The ARN of the service to list test runs for.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter test runs by test identifier.
   *
   * @public
   */
  testId?: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a test run.
 *
 * @public
 */
export interface TestRunSummary {
  /**
   * The unique identifier of the test run.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The current status of the test run.
   *
   * @public
   */
  status: TestRunStatus | undefined;

  /**
   * The timestamp when the test run started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the test run ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The ARN of the test template the test run was based on.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * A human-readable reason for test run failure. Only present when the status is FAILED or ERROR.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Indicates whether the test run targets resources in a single AWS account or across multiple accounts.
   *
   * @public
   */
  accountTargeting?: AccountTargeting | undefined;
}

/**
 * @public
 */
export interface ListTestRunsResponse {
  /**
   * The list of test run summaries.
   *
   * @public
   */
  testRuns: TestRunSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunSourceEventsRequest {
  /**
   * The identifier of the test run to list source events for.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The ARN of the monitoring source to list events for, such as the ARN of a CloudWatch alarm. If the source was not monitored during the test run, the response is an empty list.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes an error that prevented event collection from a test run monitoring source.
 *
 * @public
 */
export interface TestRunSourceEventError {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: TestRunSourceEventErrorCode | undefined;

  /**
   * A human-readable description of the error.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * The payload of a test run source event. Exactly one member is set.
 *
 * @public
 */
export type TestRunSourceEventDetail =
  | TestRunSourceEventDetail.AlarmStateChangeMember
  | TestRunSourceEventDetail.ErrorMember
  | TestRunSourceEventDetail.$UnknownMember;

/**
 * @public
 */
export namespace TestRunSourceEventDetail {
  /**
   * A CloudWatch alarm state change.
   *
   * @public
   */
  export interface AlarmStateChangeMember {
    alarmStateChange: AlarmStateChangeDetail;
    error?: never;
    $unknown?: never;
  }

  /**
   * An error that prevented event collection from the source.
   *
   * @public
   */
  export interface ErrorMember {
    alarmStateChange?: never;
    error: TestRunSourceEventError;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    alarmStateChange?: never;
    error?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    alarmStateChange: (value: AlarmStateChangeDetail) => T;
    error: (value: TestRunSourceEventError) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A state-change event observed for a test run monitoring source.
 *
 * @public
 */
export interface TestRunSourceEvent {
  /**
   * The timestamp when the event occurred.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The ARN of the monitoring source the event belongs to.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The type of the event. ALARM indicates an event from a CloudWatch alarm source; the detail member carries either the alarm state change or a collection error.
   *
   * @public
   */
  eventType: TestRunSourceEventType | undefined;

  /**
   * The event payload.
   *
   * @public
   */
  detail: TestRunSourceEventDetail | undefined;
}

/**
 * @public
 */
export interface ListTestRunSourceEventsResponse {
  /**
   * The list of source events, in chronological order.
   *
   * @public
   */
  testRunSourceEvents: TestRunSourceEvent[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestRunSourcesRequest {
  /**
   * The identifier of the test run to list sources for.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter sources by type.
   *
   * @public
   */
  type?: TestRunSourceType | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about an observability alarm snapshot captured for a test run.
 *
 * @public
 */
export interface TestRunObservabilityAlarmSummary {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;

  /**
   * The name of the CloudWatch alarm.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The Region of the CloudWatch alarm.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The account ID that owns the CloudWatch alarm.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Summary information about a success criteria alarm snapshot captured for a test run.
 *
 * @public
 */
export interface TestRunSuccessCriteriaAlarmSummary {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;

  /**
   * The name of the CloudWatch alarm.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The Region of the CloudWatch alarm.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The account ID that owns the CloudWatch alarm.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The evaluation outcome of the source. Absent while the source has not yet been evaluated; set to the terminal outcome afterwards.
   *
   * @public
   */
  outcome?: TestSourceOutcome | undefined;

  /**
   * A human-readable reason for the outcome.
   *
   * @public
   */
  outcomeReason?: string | undefined;
}

/**
 * A monitoring-source snapshot captured for a test run. Exactly one member is set.
 *
 * @public
 */
export type TestRunSourceSummary =
  | TestRunSourceSummary.ObservabilityAlarmMember
  | TestRunSourceSummary.SuccessCriteriaAlarmMember
  | TestRunSourceSummary.$UnknownMember;

/**
 * @public
 */
export namespace TestRunSourceSummary {
  /**
   * A success criteria alarm snapshot captured for the test run.
   *
   * @public
   */
  export interface SuccessCriteriaAlarmMember {
    successCriteriaAlarm: TestRunSuccessCriteriaAlarmSummary;
    observabilityAlarm?: never;
    $unknown?: never;
  }

  /**
   * An observability alarm snapshot captured for the test run.
   *
   * @public
   */
  export interface ObservabilityAlarmMember {
    successCriteriaAlarm?: never;
    observabilityAlarm: TestRunObservabilityAlarmSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    successCriteriaAlarm?: never;
    observabilityAlarm?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    successCriteriaAlarm: (value: TestRunSuccessCriteriaAlarmSummary) => T;
    observabilityAlarm: (value: TestRunObservabilityAlarmSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListTestRunSourcesResponse {
  /**
   * The list of monitoring source snapshots.
   *
   * @public
   */
  testRunSources: TestRunSourceSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestsRequest {
  /**
   * The ARN of the service to list tests for.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a test.
 *
 * @public
 */
export interface TestSummary {
  /**
   * The unique identifier of the test.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the test template the test was created from.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The total number of runs of the test.
   *
   * @public
   */
  totalTestRuns: number | undefined;

  /**
   * The number of successful runs of the test.
   *
   * @public
   */
  successfulTestRuns: number | undefined;

  /**
   * The timestamp when the test was created.
   *
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface ListTestsResponse {
  /**
   * The list of test summaries.
   *
   * @public
   */
  tests: TestSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestSourcesRequest {
  /**
   * The identifier of the test to list sources for.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Filter sources by type.
   *
   * @public
   */
  type?: TestSourceType | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a configured observability alarm.
 *
 * @public
 */
export interface ObservabilityAlarmSummary {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;

  /**
   * The name of the CloudWatch alarm.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The Region of the CloudWatch alarm.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The account ID that owns the CloudWatch alarm.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The timestamp when the source was configured.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * Summary information about a configured success criteria alarm.
 *
 * @public
 */
export interface SuccessCriteriaAlarmSummary {
  /**
   * The ARN of the CloudWatch alarm.
   *
   * @public
   */
  alarmArn: string | undefined;

  /**
   * The name of the CloudWatch alarm.
   *
   * @public
   */
  alarmName: string | undefined;

  /**
   * The Region of the CloudWatch alarm.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The account ID that owns the CloudWatch alarm.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The timestamp when the source was configured.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * A configured monitoring source returned by ListTestSources. Exactly one member is set.
 *
 * @public
 */
export type TestSourceSummary =
  | TestSourceSummary.ObservabilityAlarmMember
  | TestSourceSummary.SuccessCriteriaAlarmMember
  | TestSourceSummary.$UnknownMember;

/**
 * @public
 */
export namespace TestSourceSummary {
  /**
   * A configured success criteria alarm.
   *
   * @public
   */
  export interface SuccessCriteriaAlarmMember {
    successCriteriaAlarm: SuccessCriteriaAlarmSummary;
    observabilityAlarm?: never;
    $unknown?: never;
  }

  /**
   * A configured observability alarm.
   *
   * @public
   */
  export interface ObservabilityAlarmMember {
    successCriteriaAlarm?: never;
    observabilityAlarm: ObservabilityAlarmSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    successCriteriaAlarm?: never;
    observabilityAlarm?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    successCriteriaAlarm: (value: SuccessCriteriaAlarmSummary) => T;
    observabilityAlarm: (value: ObservabilityAlarmSummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListTestSourcesResponse {
  /**
   * The list of configured monitoring sources.
   *
   * @public
   */
  testSources: TestSourceSummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTestTemplatesRequest {}

/**
 * Contains summary information about a test template.
 *
 * @public
 */
export interface TestTemplateSummary {
  /**
   * The ARN of the test template.
   *
   * @public
   */
  testTemplateArn: string | undefined;

  /**
   * The name of the test template.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the test template.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * @public
 */
export interface ListTestTemplatesResponse {
  /**
   * The list of test template summaries.
   *
   * @public
   */
  testTemplates: TestTemplateSummary[] | undefined;
}

/**
 * @public
 */
export interface ListUserJourneysRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * Pagination page size.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a user journey.
 *
 * @public
 */
export interface UserJourneySummary {
  /**
   * The unique identifier of the user journey.
   *
   * @public
   */
  userJourneyId: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the user journey was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the user journey was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListUserJourneysResponse {
  /**
   * The list of user journey summaries.
   *
   * @public
   */
  userJourneySummaries: UserJourneySummary[] | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutTestSourcesRequest {
  /**
   * The identifier of the test to add sources to.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The monitoring sources to add or update.
   *
   * @public
   */
  testSources: TestSourceInput[] | undefined;
}

/**
 * @public
 */
export interface PutTestSourcesResponse {}

/**
 * @public
 */
export interface StartDependencyInsightsRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDependencyInsightsResponse {
  /**
   * The status of the dependency insights generation. Valid values:
   *
   * - IN_PROGRESS - Insights generation is in progress.
   * - COMPLETED - Insights generation completed successfully.
   * - FAILED - Insights generation failed. Call GetDependencyInsights for the error code and message.
   *
   * @public
   */
  status: DependencyInsightsStatus | undefined;
}

/**
 * @public
 */
export interface StartFailureModeAssessmentRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Idempotency token.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartFailureModeAssessmentResponse {
  /**
   * The unique identifier of the started assessment.
   *
   * @public
   */
  assessmentId?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn?: string | undefined;

  /**
   * The status of the started assessment.
   *
   * @public
   */
  assessmentStatus?: AssessmentStatus | undefined;

  /**
   * The timestamp when the assessment started.
   *
   * @public
   */
  startedAt?: Date | undefined;
}

/**
 * @public
 */
export interface StartTestRunRequest {
  /**
   * The identifier of the test to run.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface StartTestRunResponse {
  /**
   * The identifier of the started test run.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The status of the started test run.
   *
   * @public
   */
  status: TestRunStatus | undefined;

  /**
   * The ARNs of the AWS Fault Injection Service (AWS FIS) experiments started for the run.
   *
   * @public
   */
  experimentArns: string[] | undefined;
}

/**
 * @public
 */
export interface StopTestRunRequest {
  /**
   * The identifier of the test run to stop.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The ARN of the service the test run belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;
}

/**
 * @public
 */
export interface StopTestRunResponse {
  /**
   * The identifier of the stopped test run.
   *
   * @public
   */
  testRunId: string | undefined;

  /**
   * The status of the test run.
   *
   * @public
   */
  status: TestRunStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Resource tags.
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
   * ARN identifier.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
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
export interface UpdateAssertionRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The unique identifier of the assertion to update.
   *
   * @public
   */
  assertionId: string | undefined;

  /**
   * The updated text content of the assertion.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssertionResponse {
  /**
   * The updated assertion.
   *
   * @public
   */
  assertion: Assertion | undefined;
}

/**
 * @public
 */
export interface UpdateDependencyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the dependency to update.
   *
   * @public
   */
  dependencyId: string | undefined;

  /**
   * The updated criticality level of the dependency.
   *
   * @public
   */
  criticality?: DependencyCriticality | undefined;

  /**
   * A comment about the dependency.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDependencyResponse {
  /**
   * The identifier of the updated dependency.
   *
   * @public
   */
  dependencyId: string | undefined;

  /**
   * The name of the updated dependency.
   *
   * @public
   */
  dependencyName: string | undefined;

  /**
   * The location of the dependency.
   *
   * @public
   */
  location: string | undefined;

  /**
   * The criticality level of the dependency.
   *
   * @public
   */
  criticality: DependencyCriticality | undefined;

  /**
   * The comment about the dependency.
   *
   * @public
   */
  comment?: string | undefined;

  /**
   * The provider of the dependency.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * The timestamp when the dependency was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateFailureModeFindingRequest {
  /**
   * The identifier of the finding to update.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The new status for the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * A comment about the finding update.
   *
   * @public
   */
  comment?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFailureModeFindingResponse {
  /**
   * The updated finding.
   *
   * @public
   */
  finding?: Finding | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated availability SLO for the policy.
   *
   * @public
   */
  availabilitySlo?: AvailabilitySlo | undefined;

  /**
   * The updated multi-AZ disaster recovery targets for the policy.
   *
   * @public
   */
  multiAz?: MultiAzTargets | undefined;

  /**
   * The updated multi-Region disaster recovery targets for the policy.
   *
   * @public
   */
  multiRegion?: MultiRegionTargets | undefined;

  /**
   * The updated data recovery targets for the policy.
   *
   * @public
   */
  dataRecovery?: DataRecoveryTargets | undefined;

  /**
   * Specifies whether cross-account sharing is enabled for the policy. Disabling sharing stops member services from using the policy.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * The updated policy.
   *
   * @public
   */
  policy: Policy | undefined;
}

/**
 * @public
 */
export interface UpdateServiceRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * Resource description for services and policies.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated systems to associate with the service.
   *
   * @public
   */
  associatedSystems?: AssociatedSystem[] | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The updated AWS Regions where the service operates.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The updated permission model for the service.
   *
   * @public
   */
  permissionModel?: PermissionModel | undefined;

  /**
   * Caller-settable values for dependency discovery. INITIALIZING is system-managed.
   *
   * @public
   */
  dependencyDiscovery?: DependencyDiscoveryInput | undefined;

  /**
   * Configuration for automatic report generation on a Service.
   *
   * @public
   */
  reportConfiguration?: ServiceReportConfiguration | undefined;

  /**
   * The optional DevOps Agent integration configuration to set, replace, or disconnect for the service. If you omit this field, the existing DevOps Agent linkage stays unchanged.
   *
   * @public
   */
  devOpsAgentConfiguration?: DevOpsAgentConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateServiceResponse {
  /**
   * The updated service.
   *
   * @public
   */
  service: Service | undefined;
}

/**
 * @public
 */
export interface UpdateServiceFunctionRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The identifier of the service function to update.
   *
   * @public
   */
  serviceFunctionId: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated criticality level of the service function.
   *
   * @public
   */
  criticality?: ServiceFunctionCriticality | undefined;
}

/**
 * @public
 */
export interface UpdateServiceFunctionResponse {
  /**
   * The updated service function.
   *
   * @public
   */
  serviceFunction: ServiceFunction | undefined;
}

/**
 * @public
 */
export interface UpdateSystemRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether cross-account sharing is enabled for the system.
   *
   * @public
   */
  sharingEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSystemResponse {
  /**
   * The updated system.
   *
   * @public
   */
  system: System | undefined;
}

/**
 * @public
 */
export interface UpdateTestRequest {
  /**
   * The identifier of the test to update.
   *
   * @public
   */
  testId: string | undefined;

  /**
   * The ARN of the service the test belongs to.
   *
   * @public
   */
  serviceArn: string | undefined;

  /**
   * The updated logging configuration for the test.
   *
   * @public
   */
  loggingConfiguration?: LoggingConfiguration | undefined;

  /**
   * The updated stop conditions for the test.
   *
   * @public
   */
  stopConditions?: StopCondition[] | undefined;

  /**
   * The updated IAM execution role name.
   *
   * @public
   */
  roleName?: string | undefined;

  /**
   * The updated parameter values for the test.
   *
   * @public
   */
  parameters?: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface UpdateTestResponse {
  /**
   * The updated test.
   *
   * @public
   */
  test: Test | undefined;
}

/**
 * @public
 */
export interface UpdateUserJourneyRequest {
  /**
   * ARN identifier.
   *
   * @public
   */
  systemArn: string | undefined;

  /**
   * The identifier of the user journey to update.
   *
   * @public
   */
  userJourneyId: string | undefined;

  /**
   * Entity label (not part of ARN — spaces allowed).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Resource description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * ARN identifier.
   *
   * @public
   */
  policyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserJourneyResponse {
  /**
   * The updated user journey.
   *
   * @public
   */
  userJourney: UserJourney | undefined;
}
