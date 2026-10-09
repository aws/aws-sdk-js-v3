// smithy-typescript generated code
import type {
  CodeRemediationStrategy,
  FindingStatus,
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
  VpcConfig,
} from "./models_0";

/**
 * <p>Output for the UpdateCodeReview operation.</p>
 * @public
 */
export interface UpdateCodeReviewOutput {
  /**
   * <p>The unique identifier of the code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the code review was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the code review.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The IAM service role used for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The code remediation strategy for the code review.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The validation mode for the code review.</p>
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * <p>The maximum number of billable task hours configured for jobs started from this code review. Null if no budget cap is set.</p>
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * <p>The report-generation filters applied when the report is exported.</p>
   * @public
   */
  reportFilters?: ReportFilters | undefined;
}

/**
 * <p>Input for updating an existing security finding.</p>
 * @public
 */
export interface UpdateFindingInput {
  /**
   * <p>The unique identifier of the finding to update.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the finding.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated name for the finding.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated risk type for the finding.</p>
   * @public
   */
  riskType?: string | undefined;

  /**
   * <p>The updated risk level for the finding.</p>
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * <p>The updated numerical risk score for the finding.</p>
   * @public
   */
  riskScore?: string | undefined;

  /**
   * <p>The updated attack script for the finding.</p>
   * @public
   */
  attackScript?: string | undefined;

  /**
   * <p>The updated reasoning for the finding.</p>
   * @public
   */
  reasoning?: string | undefined;

  /**
   * <p>The updated status for the finding.</p>
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * <p>A customer-provided note on the finding.</p>
   * @public
   */
  customerNote?: string | undefined;
}

/**
 * <p>Output for the UpdateFinding operation.</p>
 * @public
 */
export interface UpdateFindingOutput {}

/**
 * @public
 */
export interface UpdateIntegratedResourcesInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The list of integrated resource items to update.</p>
   * @public
   */
  items: IntegratedResourceInputItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateIntegratedResourcesOutput {}

/**
 * <p>Input for updating an existing pentest.</p>
 * @public
 */
export interface UpdatePentestInput {
  /**
   * <p>The unique identifier of the pentest to update.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated title of the pentest.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated assets for the pentest.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The updated list of risk types to exclude from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The updated IAM service role for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The updated CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The updated VPC configuration for the pentest.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The updated network traffic configuration for the pentest.</p>
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * <p>The updated code remediation strategy for the pentest.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The updated list of managed skills to disable for this pentest. Valid values include FINDING_PERSONALIZATION and LOGIN_OPTIMIZATION.</p>
   * @public
   */
  disableManagedSkills?: SkillType[] | undefined;

  /**
   * <p>The updated maximum number of billable task hours allowed for jobs started from this pentest.</p>
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * <p>The report-generation filters applied when the report is exported.</p>
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * <p>The updated CI/CD pentesting configuration to apply to the pentest.</p>
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * <p>The category of application a pentest targets.</p>
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * <p>Output for the UpdatePentest operation.</p>
 * @public
 */
export interface UpdatePentestOutput {
  /**
   * <p>The unique identifier of the pentest.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the pentest was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the pentest.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The list of risk types excluded from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The IAM service role used for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * <p>The report-generation filters applied when the report is exported.</p>
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * <p>The CI/CD pentesting configuration applied to the pentest.</p>
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * <p>The category of application a pentest targets.</p>
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * <p>Input for updating an existing threat.</p>
 * @public
 */
export interface UpdateThreatInput {
  /**
   * <p>The unique identifier of the threat to update.</p>
   * @public
   */
  threatId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A short title summarizing the threat.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated status of the threat.</p>
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * <p>Optional customer comment.</p>
   * @public
   */
  comments?: string | undefined;

  /**
   * <p>The updated natural-language threat statement.</p>
   * @public
   */
  statement?: string | undefined;

  /**
   * <p>The updated severity level of the threat.</p>
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * <p>The updated actor or origin of the threat.</p>
   * @public
   */
  threatSource?: string | undefined;

  /**
   * <p>The updated conditions required for the threat to be exploitable.</p>
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * <p>The updated description of what the threat source can do.</p>
   * @public
   */
  threatAction?: string | undefined;

  /**
   * <p>The updated direct consequence of the threat action.</p>
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * <p>The updated security goals affected by the threat.</p>
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * <p>The updated list of specific assets affected by the threat.</p>
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * <p>The updated DFD element this threat is anchored to.</p>
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * <p>The updated source code files supporting the threat.</p>
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * <p>The updated recommended mitigation guidance for this threat.</p>
   * @public
   */
  recommendation?: string | undefined;
}

/**
 * <p>Output for the UpdateThreat operation.</p>
 * @public
 */
export interface UpdateThreatOutput {
  /**
   * <p>The unique identifier of the threat.</p>
   * @public
   */
  threatId: string | undefined;

  /**
   * <p>The unique identifier of the threat model job the threat belongs to.</p>
   * @public
   */
  threatJobId: string | undefined;

  /**
   * <p>A short title summarizing the threat.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The natural-language threat statement.</p>
   * @public
   */
  statement?: string | undefined;

  /**
   * <p>The severity level of the threat.</p>
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * <p>The current status of the threat.</p>
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * <p>Optional customer comment on the threat.</p>
   * @public
   */
  comments?: string | undefined;

  /**
   * <p>The STRIDE categories applicable to this threat.</p>
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * <p>The actor or origin of the threat.</p>
   * @public
   */
  threatSource?: string | undefined;

  /**
   * <p>The conditions required for the threat to be exploitable.</p>
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * <p>What the threat source can do.</p>
   * @public
   */
  threatAction?: string | undefined;

  /**
   * <p>The direct consequence of the threat action.</p>
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * <p>The security goals affected by the threat.</p>
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * <p>The specific assets affected by the threat.</p>
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * <p>The DFD element this threat is anchored to.</p>
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * <p>The source code files supporting the threat.</p>
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * <p>The recommended mitigation guidance for this threat.</p>
   * @public
   */
  recommendation?: string | undefined;

  /**
   * <p>Who created this threat.</p>
   * @public
   */
  createdBy?: ThreatActor | undefined;

  /**
   * <p>Who last updated this threat.</p>
   * @public
   */
  updatedBy?: ThreatActor | undefined;

  /**
   * <p>The date and time the threat was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the threat was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Input for updating an existing threat model.</p>
 * @public
 */
export interface UpdateThreatModelInput {
  /**
   * <p>The unique identifier of the threat model to update.</p>
   * @public
   */
  threatModelId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the threat model.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated title of the threat model.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated description of the application or system being threat modeled.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated assets for the threat model.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The updated scoped documents for the agent to focus on during threat modeling.</p>
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * <p>The updated IAM service role for the threat model.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The updated CloudWatch Logs configuration for the threat model.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * <p>Output for the UpdateThreatModel operation.</p>
 * @public
 */
export interface UpdateThreatModelOutput {
  /**
   * <p>The unique identifier of the threat model.</p>
   * @public
   */
  threatModelId: string | undefined;

  /**
   * <p>The title of the threat model.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the threat model.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>A description of the application or system being threat modeled.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The assets included in the threat model.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The scoped documents for the agent to focus on during threat modeling.</p>
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * <p>The IAM service role used for the threat model.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the threat model.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The date and time the threat model was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the threat model was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The destination for publishing scan reports to an integrated document provider.</p>
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * <p>Input for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainInput {
  /**
   * <p>The unique identifier of the target domain to verify.</p>
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * <p>Output for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainOutput {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId?: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;

  /**
   * <p>The verification status of the target domain.</p>
   * @public
   */
  status?: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;
}
