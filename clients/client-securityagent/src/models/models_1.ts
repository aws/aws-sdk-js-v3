// smithy-typescript generated code
import type {
  CodeRemediationStrategy,
  DomainVerificationMethod,
  FindingStatus,
  JobStatus,
  RiskLevel,
  RiskType,
  SkillType,
  StrideCategory,
  TargetDomainStatus,
  ThreatActor,
  ThreatSeverity,
  ThreatStatus,
  ValidationMode,
} from "./enums";
import type {
  Assets,
  CiCdConfiguration,
  CloudWatchLog,
  DocumentInfo,
  IntegratedResourceInputItem,
  NetworkTrafficConfig,
  ReportDestination,
  ReportFilters,
  TestScope,
  ThreatAnchorShape,
  ThreatEvidenceShape,
  VerificationDetails,
  VpcConfig,
} from "./models_0";

/**
 * Output for the StartThreatModelJob operation.
 *
 * @public
 */
export interface StartThreatModelJobOutput {
  /**
   * The title of the threat model job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the threat model job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the threat model job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The unique identifier of the threat model.
   *
   * @public
   */
  threatModelId?: string | undefined;

  /**
   * The unique identifier of the started threat model job.
   *
   * @public
   */
  threatModelJobId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for stopping the execution of a code review job.
 *
 * @public
 */
export interface StopCodeReviewJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the code review job to stop.
   *
   * @public
   */
  codeReviewJobId: string | undefined;
}

/**
 * Output for the StopCodeReviewJob operation.
 *
 * @public
 */
export interface StopCodeReviewJobOutput {}

/**
 * Input for stopping the execution of a pentest.
 *
 * @public
 */
export interface StopPentestJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest job to stop.
   *
   * @public
   */
  pentestJobId: string | undefined;
}

/**
 * Output for the StopPentestJob operation.
 *
 * @public
 */
export interface StopPentestJobOutput {}

/**
 * Input for stopping a threat model job.
 *
 * @public
 */
export interface StopThreatModelJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the threat model job to stop.
   *
   * @public
   */
  threatModelJobId: string | undefined;
}

/**
 * Output for the StopThreatModelJob operation.
 *
 * @public
 */
export interface StopThreatModelJobOutput {}

/**
 * Input for TagResource operation.
 *
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Output for TagResource operation.
 *
 * @public
 */
export interface TagResourceOutput {}

/**
 * Input for updating a target domain.
 *
 * @public
 */
export interface UpdateTargetDomainInput {
  /**
   * The unique identifier of the target domain to update.
   *
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * The updated verification method for the target domain.
   *
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;
}

/**
 * Output for the UpdateTargetDomain operation.
 *
 * @public
 */
export interface UpdateTargetDomainOutput {
  /**
   * The unique identifier of the target domain.
   *
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * The domain name of the target domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current verification status of the target domain.
   *
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * The reason for the current target domain verification status.
   *
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * The updated verification details for the target domain.
   *
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * The date and time the target domain was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the target domain was verified, in UTC format.
   *
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * Input for UntagResource operation.
 *
 * @public
 */
export interface UntagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * Output for UntagResource operation.
 *
 * @public
 */
export interface UntagResourceOutput {}

/**
 * Input for updating an existing code review.
 *
 * @public
 */
export interface UpdateCodeReviewInput {
  /**
   * The unique identifier of the code review to update.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the code review.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated title of the code review.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The updated assets for the code review.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The updated IAM service role for the code review.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The updated CloudWatch Logs configuration for the code review.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The updated code remediation strategy for the code review.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The updated validation mode for the code review. Valid values are SIMULATED and DISABLED.
   *
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * The updated maximum number of billable task hours allowed for jobs started from this code review.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;
}

/**
 * Output for the UpdateCodeReview operation.
 *
 * @public
 */
export interface UpdateCodeReviewOutput {
  /**
   * The unique identifier of the code review.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The title of the code review.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The date and time the code review was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The assets included in the code review.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The IAM service role used for the code review.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the code review.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The unique identifier of the agent space that contains the code review.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The code remediation strategy for the code review.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The validation mode for the code review.
   *
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * The maximum number of billable task hours configured for jobs started from this code review. Null if no budget cap is set.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;
}

/**
 * Input for updating an existing security finding.
 *
 * @public
 */
export interface UpdateFindingInput {
  /**
   * The unique identifier of the finding to update.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the finding.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated name for the finding.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description for the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated risk type for the finding.
   *
   * @public
   */
  riskType?: string | undefined;

  /**
   * The updated risk level for the finding.
   *
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * The updated numerical risk score for the finding.
   *
   * @public
   */
  riskScore?: string | undefined;

  /**
   * The updated attack script for the finding.
   *
   * @public
   */
  attackScript?: string | undefined;

  /**
   * The updated reasoning for the finding.
   *
   * @public
   */
  reasoning?: string | undefined;

  /**
   * The updated status for the finding.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * A customer-provided note on the finding.
   *
   * @public
   */
  customerNote?: string | undefined;
}

/**
 * Output for the UpdateFinding operation.
 *
 * @public
 */
export interface UpdateFindingOutput {}

/**
 * @public
 */
export interface UpdateIntegratedResourcesInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The list of integrated resource items to update.
   *
   * @public
   */
  items: IntegratedResourceInputItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateIntegratedResourcesOutput {}

/**
 * Input for updating an existing pentest.
 *
 * @public
 */
export interface UpdatePentestInput {
  /**
   * The unique identifier of the pentest to update.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated title of the pentest.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The updated assets for the pentest.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The updated list of risk types to exclude from the pentest.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The updated IAM service role for the pentest.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The updated CloudWatch Logs configuration for the pentest.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The updated VPC configuration for the pentest.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The updated network traffic configuration for the pentest.
   *
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * The updated code remediation strategy for the pentest.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The updated list of managed skills to disable for this pentest. Valid values include FINDING_PERSONALIZATION and LOGIN_OPTIMIZATION.
   *
   * @public
   */
  disableManagedSkills?: SkillType[] | undefined;

  /**
   * The updated maximum number of billable task hours allowed for jobs started from this pentest.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The updated CI/CD pentesting configuration to apply to the pentest.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * Output for the UpdatePentest operation.
 *
 * @public
 */
export interface UpdatePentestOutput {
  /**
   * The unique identifier of the pentest.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The title of the pentest.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The date and time the pentest was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The assets included in the pentest.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The list of risk types excluded from the pentest.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The IAM service role used for the pentest.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the pentest.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The CI/CD pentesting configuration applied to the pentest.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * Input for updating an existing threat.
 *
 * @public
 */
export interface UpdateThreatInput {
  /**
   * The unique identifier of the threat to update.
   *
   * @public
   */
  threatId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The updated status of the threat.
   *
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * Optional customer comment.
   *
   * @public
   */
  comments?: string | undefined;

  /**
   * The updated natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The updated severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * The updated actor or origin of the threat.
   *
   * @public
   */
  threatSource?: string | undefined;

  /**
   * The updated conditions required for the threat to be exploitable.
   *
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * The updated description of what the threat source can do.
   *
   * @public
   */
  threatAction?: string | undefined;

  /**
   * The updated direct consequence of the threat action.
   *
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * The updated security goals affected by the threat.
   *
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * The updated list of specific assets affected by the threat.
   *
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * The updated DFD element this threat is anchored to.
   *
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * The updated source code files supporting the threat.
   *
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * The updated recommended mitigation guidance for this threat.
   *
   * @public
   */
  recommendation?: string | undefined;
}

/**
 * Output for the UpdateThreat operation.
 *
 * @public
 */
export interface UpdateThreatOutput {
  /**
   * The unique identifier of the threat.
   *
   * @public
   */
  threatId: string | undefined;

  /**
   * The unique identifier of the threat model job the threat belongs to.
   *
   * @public
   */
  threatJobId: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * The current status of the threat.
   *
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * Optional customer comment on the threat.
   *
   * @public
   */
  comments?: string | undefined;

  /**
   * The STRIDE categories applicable to this threat.
   *
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * The actor or origin of the threat.
   *
   * @public
   */
  threatSource?: string | undefined;

  /**
   * The conditions required for the threat to be exploitable.
   *
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * What the threat source can do.
   *
   * @public
   */
  threatAction?: string | undefined;

  /**
   * The direct consequence of the threat action.
   *
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * The security goals affected by the threat.
   *
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * The specific assets affected by the threat.
   *
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * The DFD element this threat is anchored to.
   *
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * The source code files supporting the threat.
   *
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * The recommended mitigation guidance for this threat.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * Who created this threat.
   *
   * @public
   */
  createdBy?: ThreatActor | undefined;

  /**
   * Who last updated this threat.
   *
   * @public
   */
  updatedBy?: ThreatActor | undefined;

  /**
   * The date and time the threat was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for updating an existing threat model.
 *
 * @public
 */
export interface UpdateThreatModelInput {
  /**
   * The unique identifier of the threat model to update.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated title of the threat model.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The updated description of the application or system being threat modeled.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated assets for the threat model.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The updated scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * The updated IAM service role for the threat model.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The updated CloudWatch Logs configuration for the threat model.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * Output for the UpdateThreatModel operation.
 *
 * @public
 */
export interface UpdateThreatModelOutput {
  /**
   * The unique identifier of the threat model.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The title of the threat model.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * A description of the application or system being threat modeled.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The assets included in the threat model.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * The IAM service role used for the threat model.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the threat model.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The date and time the threat model was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * Input for verifying ownership for a registered target domain in an agent space.
 *
 * @public
 */
export interface VerifyTargetDomainInput {
  /**
   * The unique identifier of the target domain to verify.
   *
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * Output for verifying ownership for a registered target domain in an agent space.
 *
 * @public
 */
export interface VerifyTargetDomainOutput {
  /**
   * The unique identifier of the target domain.
   *
   * @public
   */
  targetDomainId?: string | undefined;

  /**
   * The domain name of the target domain.
   *
   * @public
   */
  domainName?: string | undefined;

  /**
   * The date and time the target domain was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the target domain was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The date and time the target domain was verified, in UTC format.
   *
   * @public
   */
  verifiedAt?: Date | undefined;

  /**
   * The verification status of the target domain.
   *
   * @public
   */
  status?: TargetDomainStatus | undefined;

  /**
   * The reason for the current target domain verification status.
   *
   * @public
   */
  verificationStatusReason?: string | undefined;
}
