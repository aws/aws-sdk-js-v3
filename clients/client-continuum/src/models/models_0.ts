// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ArtifactHttpMethod,
  CollectorStatus,
  CollectorType,
  DeliveryReason,
  DeliveryStatus,
  EnvironmentStatus,
  ExploitabilityVerdict,
  ExploitEffect,
  FindingBlockingReason,
  FindingDiscardReason,
  FindingOcsfClass,
  FindingSeverityAdjustment,
  FindingSeverityId,
  FindingStatus,
  FindingType,
  FindingVerdict,
  FlowVerdictValue,
  GitLabTargetType,
  GitLabTokenRotation,
  IntegrationAuthorizationProviderType,
  IntegrationType,
  IssueArtifactType,
  IssueEvidenceAvailability,
  IssuePatchDeliveryStatus,
  IssuePhase,
  IssueSeverity,
  IssueStatus,
  IssueStatusReason,
  OAuthCodeChallengeMethod,
  PatchCreationPolicy,
  PatchFormat,
  ScanFailureStage,
  ScanOrigin,
  ScanStatus,
  SignalAccessLevel,
  SignalAttackerGains,
  SignalBand,
  SignalBasis,
  SignalBlastRadius,
  SignalDimension,
  SignalStrength,
  SignalTargetValue,
  ValidationConfidenceTier,
  ValidationTerminalStatus,
} from "./enums";

/**
 * A software package implicated by a finding.
 * @public
 */
export interface AffectedPackage {
  /**
   * The package name.
   * @public
   */
  name: string | undefined;

  /**
   * The affected version.
   * @public
   */
  version?: string | undefined;

  /**
   * The earliest version that resolves the issue, when one is known.
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * The ecosystem supplying the package.
   * @public
   */
  packageManager?: string | undefined;
}

/**
 * Specifies the Collector ARN and data-access role to associate with this Environment.
 * @public
 */
export interface AssociateCollectorInput {
  /**
   * The unique identifier of the Environment making the association.
   * @public
   */
  environmentId: string | undefined;

  /**
   * Caller-provided token that makes retried association requests idempotent.
   * The first successful request binds the token to the complete Collector
   * ARN, supplied role, and result for at least 24 hours. During that retry window,
   * reusing it with a different request fails with ConflictException. A matching
   * replay still requires the supplied role to have current Collector access.
   * Once authorized, a matching replay returns the stored result without
   * changing association state. Revocation can deny a replay; it does not
   * remove the stored association or its original result.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the Collector to associate with this Environment.
   * @public
   */
  collectorArn: string | undefined;

  /**
   * IAM role in the Environment account that Continuum assumes before
   * authorizing access to associated Collector inventory. Every association,
   * including a same-account association, requires this role. The supplied ARN
   * replaces the Environment's previously stored role. The customer is responsible
   * for granting the role access to every Collector that should contribute data.
   * @public
   */
  collectorDataAccessRoleArn: string | undefined;
}

/**
 * One Collector associated with an Environment.
 * @public
 */
export interface AssociatedCollector {
  /**
   * The unique identifier of the associated Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The ARN of the associated Collector. The account and Region encoded in
   * this ARN identify cross-account and cross-Region associations.
   * @public
   */
  collectorArn: string | undefined;
}

/**
 * Contains the Environment and the Collector associated by this request.
 * @public
 */
export interface AssociateCollectorOutput {
  /**
   * The unique identifier of the Environment making the association.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the Environment making the association.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The Collector identifier and ARN validated by this operation.
   * @public
   */
  associatedCollector: AssociatedCollector | undefined;
}

/**
 * @public
 */
export interface ValidationExceptionField {
  path: string | undefined;
  message: string | undefined;
}

/**
 * A summary of one Environment associated with a Collector. This shape
 * intentionally remains distinct from EnvironmentSummary so the two list
 * operations can evolve independently.
 * @public
 */
export interface AssociatedEnvironment {
  /**
   * The unique identifier of the associated Environment.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the associated Environment. The account encoded in this ARN
   * identifies cross-account associations; association mutations require its
   * Region to match the Collector's Region.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The customer-visible name of the associated Environment.
   * @public
   */
  name: string | undefined;

  /**
   * The current operational status of the associated Environment.
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * The timestamp when the associated Environment was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Collector data access configuration returned for an environment.
 * @public
 */
export interface CollectorDetails {
  /**
   * IAM role that Continuum assumes to authorize its access to associated
   * Collector inventory.
   * Required for nonempty Collector inventory resolution, in the same account or
   * across accounts. This is independent from any S3 source role.
   * @public
   */
  collectorDataAccessRoleArn?: string | undefined;
}

/**
 * Network policy for agent execution.
 * @public
 */
export interface EnvironmentNetworkConfiguration {
  /**
   * Domains that an environment's agent execution may contact.
   * @public
   */
  allowedDomains?: string[] | undefined;
}

/**
 * Environment-level operating policy.
 * @public
 */
export interface EnvironmentConfiguration {
  /**
   * Network policy for agent execution.
   * @public
   */
  network?: EnvironmentNetworkConfiguration | undefined;

  /**
   * Recurring scan interval: P1D (1 day), P2D (2 days), or P7D (7 days).
   * PT0H disables recurring scans. Defaults to P1D when creating an environment.
   * @public
   */
  scanFrequency?: string | undefined;

  /**
   * Whether Continuum creates a patch for a proposed remediation. Defaults to DISABLED.
   * @public
   */
  patchCreationPolicy?: PatchCreationPolicy | undefined;
}

/**
 * Customer-visible summary of one environment scan.
 * @public
 */
export interface CodeScanSummary {
  /**
   * The unique scan identifier.
   * @public
   */
  scanRunId: string | undefined;

  /**
   * Current customer-visible status.
   * @public
   */
  status: ScanStatus | undefined;

  /**
   * Why the scan was created. Always present.
   * @public
   */
  origin: ScanOrigin | undefined;

  /**
   * Time at which Continuum accepted the scan request.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time at which a terminal result was recorded.
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Failure detail present for unsuccessful scans.
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Phase this scan failed in. Present only when `status` is FAILED, and
   * absent for a scan that failed before this field existed.
   * @public
   */
  failureStage?: ScanFailureStage | undefined;
}

/**
 * One repository selected from a previously-created integration.
 * @public
 */
export interface EnvironmentRepositorySource {
  /**
   * Integration that provides the selected repository.
   * @public
   */
  integrationId: string | undefined;

  /**
   * Repository selected from that integration in owner/repository form.
   * @public
   */
  repository: string | undefined;

  /**
   * Branch used when a scan does not choose a more specific revision.
   * @public
   */
  defaultBranch?: string | undefined;
}

/**
 * An S3 source for one environment, backed by a previously-created S3 integration.
 * @public
 */
export interface EnvironmentS3IntegrationSource {
  /**
   * Identifier of an S3 integration in the caller's account. The integration supplies
   * the bucket, the read role, and the external ID Continuum uses to read the prefixes.
   * @public
   */
  integrationId: string | undefined;

  /**
   * Prefix containing source code. Defaults to code/ when omitted.
   * @public
   */
  codePrefix?: string | undefined;

  /**
   * Prefix containing customer-authored context. Defaults to context/ when omitted.
   * @public
   */
  contextPrefix?: string | undefined;
}

/**
 * GA source configuration for code and customer-authored context.
 * @public
 */
export interface EnvironmentSourceConfiguration {
  /**
   * S3 sources backed by previously-created S3 integrations.
   * @public
   */
  s3Sources?: EnvironmentS3IntegrationSource[] | undefined;

  /**
   * Explicit repository selections from previously-created integrations.
   * @public
   */
  repositorySources?: EnvironmentRepositorySource[] | undefined;
}

/**
 * Code-specific environment properties. GetEnvironment returns the source and
 * operating policy; UpdateEnvironment returns Collector details and the latest
 * scan.
 * @public
 */
export interface CodeConfigurationDetails {
  /**
   * Collector data access configuration. Omitted when no Collector data access
   * role is configured.
   * @public
   */
  collectorDetails?: CollectorDetails | undefined;

  /**
   * Sources in the shape accepted by CreateEnvironment and UpdateEnvironment.
   * @public
   */
  sourceConfiguration?: EnvironmentSourceConfiguration | undefined;

  /**
   * Operating policy in the shape accepted by CreateEnvironment and UpdateEnvironment.
   * @public
   */
  environmentConfiguration?: EnvironmentConfiguration | undefined;

  /**
   * The newest scan requested for this environment, if one exists.
   * @public
   */
  latestScan?: CodeScanSummary | undefined;
}

/**
 * Specifies the environment and the finding document to ingest.
 * @public
 */
export interface CreateCodeFindingInput {
  /**
   * The environment to ingest the finding into.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The OCSF finding document to ingest, verbatim. Must declare a
   * class_uid Continuum supports (2002 Vulnerability Finding, or 2007
   * Application Security Posture Finding) and validate against the vendored
   * OCSF JSON Schema for that class, including the Continuum overlay
   * requirements that finding_info.uid be present and that
   * vulnerabilities[0].affected_code[0].file identify the code location.
   * With several repositories in the environment, the file path must begin
   * with the repository name. Maximum size 256 KB.
   * Stored verbatim and normalized into the typed Finding members returned
   * by GetCodeFinding. GetCodeFinding does not return the document itself.
   * @public
   */
  ocsfDocument: __DocumentType | undefined;

  /**
   * Caller-provided idempotency token. A retry with the same token and an identical
   * finding document replays the original result; the same token with different content
   * is rejected.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains the identifier, ARN, title, and initial status of the newly ingested finding.
 * @public
 */
export interface CreateCodeFindingOutput {
  /**
   * The unique identifier assigned to the finding.
   * @public
   */
  findingId: string | undefined;

  /**
   * The ARN of the ingested finding.
   * @public
   */
  findingArn: string | undefined;

  /**
   * The title extracted from the submitted document. Always populated at
   * ingestion.
   * @public
   */
  title: string | undefined;

  /**
   * The finding's current lifecycle status -- SUBMITTED for a newly ingested finding, or the
   * finding's present status when an idempotent retry replays an already-processed finding.
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The timestamp when the finding was ingested.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Specifies the finding to retrieve.
 * @public
 */
export interface GetCodeFindingInput {
  /**
   * The environment that owns the finding.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The unique identifier of the finding to retrieve.
   * @public
   */
  findingId: string | undefined;
}

/**
 * One compliance check behind a posture finding.
 * @public
 */
export interface FindingComplianceCheck {
  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  uid?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  name?: string | undefined;

  /**
   * Free-form prose about a finding (summary, detailed analysis, rationale,
   * remediation guidance). Capped well below the finding document's own 256 KB
   * limit, since several of these can appear on one finding.
   * @public
   */
  description?: string | undefined;
}

/**
 * The compliance posture a finding reports, for the Application Security Posture Finding class. Absent for a vulnerability finding.
 * @public
 */
export interface FindingPosture {
  /**
   * The application the posture was assessed against.
   * @public
   */
  application?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  applicationUid?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  applicationVersion?: string | undefined;

  /**
   * The control assessed, and the producer's description of it.
   * @public
   */
  control?: string | undefined;

  /**
   * Free-form prose about a finding (summary, detailed analysis, rationale,
   * remediation guidance). Capped well below the finding document's own 256 KB
   * limit, since several of these can appear on one finding.
   * @public
   */
  description?: string | undefined;

  /**
   * Standards and requirements the control maps to.
   * @public
   */
  standards?: string[] | undefined;

  /**
   * A free-form list of strings carried verbatim from a producer.
   * @public
   */
  requirements?: string[] | undefined;

  /**
   * The individual checks performed.
   * @public
   */
  checks?: FindingComplianceCheck[] | undefined;

  /**
   * The producer's compliance status, and the enum value behind it.
   * @public
   */
  status?: string | undefined;

  /**
   * The producer's numeric enum value for `status`.
   * @public
   */
  statusId?: number | undefined;

  /**
   * Free-form prose about a finding (summary, detailed analysis, rationale,
   * remediation guidance). Capped well below the finding document's own 256 KB
   * limit, since several of these can appear on one finding.
   * @public
   */
  remediation?: string | undefined;

  /**
   * A free-form list of strings carried verbatim from a producer.
   * @public
   */
  remediationReferences?: string[] | undefined;
}

/**
 * A cloud or application resource a finding concerns.
 * @public
 */
export interface FindingResource {
  /**
   * A resource identifier -- a cloud ARN, a context-graph node id, or whatever
   * identifier scheme the producer uses.
   * @public
   */
  uid?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  name?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  type?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  region?: string | undefined;
}

/**
 * A code citation supporting a validation verdict.
 * @public
 */
export interface FindingEvidence {
  /**
   * The file the evidence was found in.
   * @public
   */
  file?: string | undefined;

  /**
   * The 1-indexed line, when known.
   * @public
   */
  line?: number | undefined;

  /**
   * The cited excerpt.
   * @public
   */
  snippet?: string | undefined;
}

/**
 * A validator's assessment of a finding. Present only when validation actually ran -- absent for finding types that are ingested untested, rather than reporting a verdict Continuum did not reach.
 * @public
 */
export interface FindingValidation {
  /**
   * The validator's conclusion.
   * @public
   */
  verdict: FindingVerdict | undefined;

  /**
   * Why the validator reached that verdict.
   * @public
   */
  blockingReason?: FindingBlockingReason | undefined;

  /**
   * The validator's confidence, from 0.0 to 1.0 inclusive. Advisory: it
   * does not drive Continuum's own routing decisions. The range is enforced
   * server-side, not by a @range trait -- the smithy-rs server SDK does not
   * support range constraints on double shapes (smithy-rs#2007).
   * @public
   */
  confidence?: number | undefined;

  /**
   * The validator's reasoning.
   * @public
   */
  rationale?: string | undefined;

  /**
   * The validator's severity conclusion.
   * @public
   */
  severityAdjustment?: FindingSeverityAdjustment | undefined;

  /**
   * Controls the validator found that reduce exploitability.
   * @public
   */
  mitigatingControls?: string[] | undefined;

  /**
   * Conditions exploitation depends on, which bound the severity.
   * @public
   */
  preconditions?: string[] | undefined;

  /**
   * Code citations supporting the verdict.
   * @public
   */
  evidence?: FindingEvidence[] | undefined;
}

/**
 * A code location a finding points at.
 * @public
 */
export interface FindingLocation {
  /**
   * Repository-relative path.
   * @public
   */
  filePath?: string | undefined;

  /**
   * 1-indexed first line of the affected range.
   * @public
   */
  startLine?: number | undefined;

  /**
   * 1-indexed last line, when the producer reported a range.
   * @public
   */
  endLine?: number | undefined;
}

/**
 * One vulnerability reported by a finding. A customer document may report several; each carries its own identity, locations and remediation.
 * @public
 */
export interface FindingVulnerability {
  /**
   * The title of a finding, from the producer's own title -- OCSF
   * finding_info.title, or the scanner's finding title. Length matches the
   * OCSF title constraint.
   * @public
   */
  title?: string | undefined;

  /**
   * Free-form prose about a finding (summary, detailed analysis, rationale,
   * remediation guidance). Capped well below the finding document's own 256 KB
   * limit, since several of these can appear on one finding.
   * @public
   */
  description?: string | undefined;

  /**
   * Primary CWE for this vulnerability, e.g. "CWE-89".
   * @public
   */
  cweId?: string | undefined;

  /**
   * The producer's human-readable caption for `cweId`.
   * @public
   */
  cweCaption?: string | undefined;

  /**
   * Further CWEs the producer attributed to this same vulnerability.
   * @public
   */
  additionalCweIds?: string[] | undefined;

  /**
   * A CVE identifier, e.g. "CVE-2020-8203".
   * @public
   */
  cveId?: string | undefined;

  /**
   * The CVSS base score for `cveId`, when the producer supplies one, from 0.0
   * to 10.0.
   * @public
   */
  cvssBaseScore?: number | undefined;

  /**
   * The producer's description of how completely a fix is available.
   * @public
   */
  fixCoverage?: string | undefined;

  /**
   * The producer's enum value behind `fixCoverage`.
   * @public
   */
  fixCoverageId?: number | undefined;

  /**
   * Every location this vulnerability was reported at.
   * @public
   */
  locations?: FindingLocation[] | undefined;

  /**
   * Free-form prose about a finding (summary, detailed analysis, rationale,
   * remediation guidance). Capped well below the finding document's own 256 KB
   * limit, since several of these can appear on one finding.
   * @public
   */
  remediation?: string | undefined;

  /**
   * A free-form list of strings carried verbatim from a producer.
   * @public
   */
  remediationReferences?: string[] | undefined;

  /**
   * The vulnerable fragment, when the producer supplied one.
   * @public
   */
  code?: string | undefined;

  /**
   * The producer's extended analysis for this vulnerability.
   * @public
   */
  details?: string | undefined;

  /**
   * Software packages implicated by a finding.
   * @public
   */
  affectedPackages?: AffectedPackage[] | undefined;
}

/**
 * Contains the current state and details of the requested finding. Which type-specific members are populated depends on `type`.
 * @public
 */
export interface GetCodeFindingOutput {
  /**
   * What kind of finding this is. Determines which of the type-specific
   * members below are populated.
   * @public
   */
  type: FindingType | undefined;

  /**
   * The producer's title for the finding.
   * @public
   */
  title: string | undefined;

  /**
   * The finding's severity.
   * @public
   */
  severity: FindingSeverityId | undefined;

  /**
   * A one-paragraph description.
   * @public
   */
  summary?: string | undefined;

  /**
   * The full analysis.
   * @public
   */
  detailedDescription?: string | undefined;

  /**
   * The producer's vulnerability category. Not a stable filter key across
   * finding types -- see FindingCategory.
   * @public
   */
  category?: string | undefined;

  /**
   * A more specific classification within `category`.
   * @public
   */
  subCategory?: string | undefined;

  /**
   * CWE identifiers classifying the finding.
   * @public
   */
  cweIds?: string[] | undefined;

  /**
   * The OWASP Top 10 category, when the producer supplies one.
   * @public
   */
  owaspCategory?: string | undefined;

  /**
   * How to fix the finding.
   * @public
   */
  mitigation?: string | undefined;

  /**
   * The file the finding is about.
   * @public
   */
  filePath?: string | undefined;

  /**
   * The 1-indexed line the finding is about. Bounds are enforced
   * server-side rather than by a constraint trait: a numeric constraint
   * generates a distinct newtype per enclosing structure, so the same
   * concept would not share a type across the create input and the read
   * output.
   * @public
   */
  lineNumber?: number | undefined;

  /**
   * The CVE this finding reports, for software-composition findings. Both
   * code types can carry one: a customer document supplies it under
   * vulnerabilities[].cve, and Continuum's scanner reports CVEs for
   * dependency-manifest findings.
   * @public
   */
  cveId?: string | undefined;

  /**
   * The CVSS base score accompanying `cveId`, when the producer supplies
   * one, from 0.0 to 10.0. Not computed by Continuum. The range is enforced
   * server-side, not by a @range trait -- the smithy-rs server SDK does not
   * support range constraints on double shapes (smithy-rs#2007).
   * @public
   */
  cvssBaseScore?: number | undefined;

  /**
   * Packages implicated by the finding.
   * @public
   */
  affectedPackages?: AffectedPackage[] | undefined;

  /**
   * The vulnerable code fragment.
   * @public
   */
  vulnerableCode?: string | undefined;

  /**
   * User-controlled inputs that reach the vulnerability.
   * @public
   */
  relevantInputs?: string[] | undefined;

  /**
   * Steps to reproduce or exploit the finding.
   * @public
   */
  stepsToReproduce?: string[] | undefined;

  /**
   * The validator's assessment. Absent when no validation ran.
   * @public
   */
  validation?: FindingValidation | undefined;

  /**
   * The last line of the affected range, from the document's
   * affected_code[].end_line.
   * @public
   */
  endLine?: number | undefined;

  /**
   * MITRE ATT&CK technique identifiers, from the document's
   * finding_info.attacks[].technique.uid.
   * @public
   */
  mitreTechniques?: string[] | undefined;

  /**
   * Remediation references, from the document's
   * vulnerabilities[].remediation.references.
   * @public
   */
  remediationReferences?: string[] | undefined;

  /**
   * The OCSF class the document declared. Determines whether `posture` is
   * populated.
   * @public
   */
  ocsfClass?: FindingOcsfClass | undefined;

  /**
   * The OCSF schema version the producer wrote against
   * (metadata.version).
   * @public
   */
  ocsfSchemaVersion?: string | undefined;

  /**
   * The producing product and vendor (metadata.product).
   * @public
   */
  productName?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  productVendorName?: string | undefined;

  /**
   * A vulnerability-taxonomy label: the producer's category, sub-category, or
   * OWASP category. Deliberately unconstrained beyond length -- producers do
   * not share a taxonomy, so this is NOT a stable filter key across finding
   * types. Use `cweIds` when a stable classification is needed.
   * @public
   */
  productVersion?: string | undefined;

  /**
   * The producer's own status for the finding, and the enum value behind it.
   * Distinct from `status`, which is Continuum's lifecycle state -- a
   * producer may call a finding "New" while Continuum has it SUBMITTED.
   * @public
   */
  sourceStatus?: string | undefined;

  /**
   * The producer's numeric enum value for `sourceStatus`.
   * @public
   */
  sourceStatusId?: number | undefined;

  /**
   * When the producer first observed the finding
   * (finding_info.first_seen_time). The producer's own clock, not Continuum's.
   * @public
   */
  firstSeenAt?: Date | undefined;

  /**
   * The producer's own classification of the finding
   * (finding_info.types).
   * @public
   */
  findingTypes?: string[] | undefined;

  /**
   * Every vulnerability the document reported. A document may report
   * several; the flat `cveId`/`cvssBaseScore`/`filePath`/`lineNumber`
   * members above carry the first one's identity so a caller that only
   * needs "what and where" does not have to walk this list.
   * @public
   */
  vulnerabilities?: FindingVulnerability[] | undefined;

  /**
   * Resources the document named (resources[]).
   * @public
   */
  resources?: FindingResource[] | undefined;

  /**
   * The compliance posture, for an Application Security Posture Finding.
   * Absent for a vulnerability finding.
   * @public
   */
  posture?: FindingPosture | undefined;

  /**
   * The unique identifier of the finding.
   * @public
   */
  findingId: string | undefined;

  /**
   * The ARN of the finding.
   * @public
   */
  findingArn: string | undefined;

  /**
   * The environment that owns the finding.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The system that produced the finding.
   * @public
   */
  source: string | undefined;

  /**
   * The producer's own identifier for the finding.
   * @public
   */
  sourceFindingId: string | undefined;

  /**
   * When the producer reported the finding -- its own clock, which is not
   * Continuum's ingestion time. `createdAt` is when Continuum accepted it;
   * these are genuinely different instants and a reader usually wants this one.
   *
   * For CreateCodeFinding, this is the submitted OCSF document's own top-level
   * `time`. For findings Continuum's scanner produces, it is the finding's own
   * creation time.
   *
   * Continuum does not validate it for plausibility: a producer's value is
   * echoed as given, so a `timestamp` here asserts the unit and format, not
   * that the instant is genuine.
   * @public
   */
  reportedAt: Date | undefined;

  /**
   * The current lifecycle status of the finding.
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The timestamp when the status last transitioned.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the finding was ingested.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The scan that produced the finding, when it came from one. For a
   * finding Continuum's scanner produced, this is the Continuum scan run
   * (see GetCodeScan). For a finding submitted with CreateCodeFinding, it is the
   * OCSF document's `metadata.correlation_uid`, when that value is a valid
   * ScanRunId. Absent when the finding did not come from a scan.
   * @public
   */
  scanRunId?: string | undefined;

  /**
   * Human-readable context about the current status.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * Why the finding was not escalated. Present only when status is
   * DISCARDED.
   * @public
   */
  discardReason?: FindingDiscardReason | undefined;

  /**
   * Customer-facing explanation accompanying `discardReason`.
   * @public
   */
  discardReasoning?: string | undefined;

  /**
   * The existing issue this finding duplicates. Present only for the
   * DUPLICATE_OF_* discard reasons.
   * @public
   */
  duplicateOfIssueId?: string | undefined;

  /**
   * The issue Continuum created from this finding.
   * @public
   */
  createdIssueId?: string | undefined;

  /**
   * When processing finished, whether by creating an issue or discarding.
   * Absent while the finding is still in flight.
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * Specifies the environment and pagination parameters for listing findings.
 * @public
 */
export interface ListCodeFindingsInput {
  /**
   * The environment whose findings to list.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned by a previous call.
   * Set to null for the first request; use the returned token for subsequent calls.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of a finding returned in list responses. Shares FindingLifecycleFields with the read operations so the list and get projections cannot drift. Carries a lean content subset -- fetch the finding for its full contents.
 * @public
 */
export interface FindingSummary {
  /**
   * The unique identifier of the finding.
   * @public
   */
  findingId: string | undefined;

  /**
   * The ARN of the finding.
   * @public
   */
  findingArn: string | undefined;

  /**
   * The environment that owns the finding.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The system that produced the finding.
   * @public
   */
  source: string | undefined;

  /**
   * The producer's own identifier for the finding.
   * @public
   */
  sourceFindingId: string | undefined;

  /**
   * When the producer reported the finding -- its own clock, which is not
   * Continuum's ingestion time. `createdAt` is when Continuum accepted it;
   * these are genuinely different instants and a reader usually wants this one.
   *
   * For CreateCodeFinding, this is the submitted OCSF document's own top-level
   * `time`. For findings Continuum's scanner produces, it is the finding's own
   * creation time.
   *
   * Continuum does not validate it for plausibility: a producer's value is
   * echoed as given, so a `timestamp` here asserts the unit and format, not
   * that the instant is genuine.
   * @public
   */
  reportedAt: Date | undefined;

  /**
   * The current lifecycle status of the finding.
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * The timestamp when the status last transitioned.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the finding was ingested.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The scan that produced the finding, when it came from one. For a
   * finding Continuum's scanner produced, this is the Continuum scan run
   * (see GetCodeScan). For a finding submitted with CreateCodeFinding, it is the
   * OCSF document's `metadata.correlation_uid`, when that value is a valid
   * ScanRunId. Absent when the finding did not come from a scan.
   * @public
   */
  scanRunId?: string | undefined;

  /**
   * Human-readable context about the current status.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * Why the finding was not escalated. Present only when status is
   * DISCARDED.
   * @public
   */
  discardReason?: FindingDiscardReason | undefined;

  /**
   * Customer-facing explanation accompanying `discardReason`.
   * @public
   */
  discardReasoning?: string | undefined;

  /**
   * The existing issue this finding duplicates. Present only for the
   * DUPLICATE_OF_* discard reasons.
   * @public
   */
  duplicateOfIssueId?: string | undefined;

  /**
   * The issue Continuum created from this finding.
   * @public
   */
  createdIssueId?: string | undefined;

  /**
   * When processing finished, whether by creating an issue or discarding.
   * Absent while the finding is still in flight.
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * What kind of finding this is.
   * @public
   */
  type: FindingType | undefined;

  /**
   * The producer's title for the finding.
   * @public
   */
  title: string | undefined;

  /**
   * The finding's severity.
   * @public
   */
  severity: FindingSeverityId | undefined;

  /**
   * The producer's vulnerability category.
   * @public
   */
  category?: string | undefined;

  /**
   * The file the finding is about, when it has a code location.
   * @public
   */
  filePath?: string | undefined;
}

/**
 * Contains the list of finding summaries and an optional pagination token.
 * @public
 */
export interface ListCodeFindingsOutput {
  /**
   * The findings in the environment, ordered by findingId descending.
   * @public
   */
  items: FindingSummary[] | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   * Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies the issue to retrieve.
 * @public
 */
export interface GetCodeIssueInput {
  /**
   * The environment that owns the issue.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The unique identifier of the issue to retrieve.
   * @public
   */
  issueId: string | undefined;
}

/**
 * Customer delivery of the patches Continuum produced for an issue, summarized
 * across the issue's PATCH artifacts when the issue is read. Each artifact keeps
 * its own `delivery.destination` with the full detail; this summary lets a caller
 * see a failed delivery without listing artifacts.
 * @public
 */
export interface IssuePatchDelivery {
  /**
   * The overall result, in priority order: FAILED when any patch's destination
   * delivery failed or exhausted its retries; otherwise PENDING while any is
   * still in progress; otherwise SUCCEEDED when at least one was delivered;
   * otherwise SKIPPED.
   * @public
   */
  status: IssuePatchDeliveryStatus | undefined;

  /**
   * Number of the issue's patches that have a destination delivery.
   * @public
   */
  patchCount: number | undefined;

  /**
   * Number of those patches delivered to their destination.
   * @public
   */
  succeededCount: number | undefined;

  /**
   * Number of those patches whose delivery failed or exhausted its retries.
   * @public
   */
  failedCount: number | undefined;

  /**
   * Distinct reasons of the failed deliveries, in ascending order. Present only
   * when failedCount is greater than zero.
   * @public
   */
  failureReasons?: DeliveryReason[] | undefined;
}

/**
 * Contains the current state and details of the requested issue.
 * @public
 */
export interface GetCodeIssueOutput {
  /**
   * The unique identifier of the issue.
   * @public
   */
  issueId: string | undefined;

  /**
   * The ARN of the issue.
   * @public
   */
  issueArn: string | undefined;

  /**
   * The name of the issue.
   * @public
   */
  name: string | undefined;

  /**
   * A free-form synopsis of the issue.
   * @public
   */
  synopsis: string | undefined;

  /**
   * Current severity: the FindingSeverity seed at create, overwritten by the
   * authoritative severity that prioritization assigns after validation.
   * @public
   */
  severity?: IssueSeverity | undefined;

  /**
   * The likelihood that this issue is a true positive, expressed as a percentage (0-100).
   * @public
   */
  confidence?: number | undefined;

  /**
   * The justification for the current severity. Always leads with a
   * customer-facing basis clause synthesized from how the severity was
   * determined (e.g. "Severity from finding.", "Severity from Continuum
   * system."); when prioritization has run, its own reasoning follows.
   * Issues created before the basis clause was introduced return their
   * original reasoning without it.
   * @public
   */
  severityReasoning?: string | undefined;

  /**
   * The remediation completion summary, when the green stage has run.
   * @public
   */
  summary?: string | undefined;

  /**
   * The findings that motivated this issue. Bare identifiers only -- a caller
   * authorized for GetCodeIssue is not necessarily authorized to read finding detail;
   * call GetCodeFinding for that. Every referenced finding is included regardless of
   * origin (both CustomerUploaded and ContinuumScanner).
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * The current lifecycle status of the issue.
   * @public
   */
  status: IssueStatus | undefined;

  /**
   * The part of the workflow the issue is in. Present when status is
   * IN_PROGRESS, and when status is FAILED and the failing phase is known.
   * @public
   */
  phase?: IssuePhase | undefined;

  /**
   * Why the issue failed. Present only when status is FAILED.
   * @public
   */
  statusReason?: IssueStatusReason | undefined;

  /**
   * Customer-facing explanation of statusReason. Present only when status is
   * FAILED.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the status or phase last changed.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the issue was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when any field of the issue last changed. Advances on every
   * mutation (including score-only updates that do not transition status), so
   * it is greater than or equal to statusUpdatedAt.
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Whether the issue has any attached evidence (formerly 'artifacts':
   * tool output, remediation proposals, patches). NONE = no evidence;
   * AVAILABLE = at least one evidence item exists. Computed at read time.
   * @public
   */
  evidenceAvailability?: IssueEvidenceAvailability | undefined;

  /**
   * Customer delivery of the issue's patches, summarized from its PATCH
   * artifacts at read time. Absent when no patch has a destination delivery.
   * @public
   */
  patchDelivery?: IssuePatchDelivery | undefined;
}

/**
 * Specifies the artifact to retrieve.
 * @public
 */
export interface GetCodeIssueArtifactInput {
  /**
   * The environment that owns the issue.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The issue the artifact is attached to.
   * @public
   */
  issueId: string | undefined;

  /**
   * The unique identifier of the artifact to retrieve.
   * @public
   */
  artifactId: string | undefined;
}

/**
 * The GitHub repository a patch is delivered to, and the pull request that
 * carries it once opened.
 * @public
 */
export interface GitHubTarget {
  /**
   * The GitHub user or organization that owns the repository.
   * @public
   */
  owner: string | undefined;

  /**
   * The repository name.
   * @public
   */
  repository: string | undefined;

  /**
   * Repository-scoped pull request number assigned by GitHub.
   * @public
   */
  pullRequestNumber?: number | undefined;

  /**
   * The head commit SHA of the pull request. Absent until the pull request
   * is opened.
   * @public
   */
  headSha?: string | undefined;
}

/**
 * The S3 object a patch is delivered to.
 * @public
 */
export interface S3Target {
  /**
   * Customer-managed S3 bucket name.
   * @public
   */
  bucket: string | undefined;

  /**
   * The object key of the delivered patch.
   * @public
   */
  key: string | undefined;

  /**
   * The S3 version ID of the delivered object, when the bucket is versioned.
   * @public
   */
  version?: string | undefined;
}

/**
 * Identity only. Future providers may add union members without duplicating state.
 * @public
 */
export type DestinationTarget =
  | DestinationTarget.GithubMember
  | DestinationTarget.S3Member
  | DestinationTarget.$UnknownMember;

/**
 * @public
 */
export namespace DestinationTarget {
  /**
   * The S3 object the patch is delivered to.
   * @public
   */
  export interface S3Member {
    s3: S3Target;
    github?: never;
    $unknown?: never;
  }

  /**
   * The GitHub repository the patch is delivered to, including the pull
   * request once it is opened.
   * @public
   */
  export interface GithubMember {
    s3?: never;
    github: GitHubTarget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Target) => T;
    github: (value: GitHubTarget) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Delivery of a patch to a destination the customer owns: an object in the environment's source bucket or a pull request in the source repository.
 * @public
 */
export interface PatchDelivery {
  /**
   * How far delivery to the destination has progressed.
   * @public
   */
  status: DeliveryStatus | undefined;

  /**
   * Where the patch was or will be delivered. Absent while the destination
   * is still being resolved, or when delivery was skipped before a
   * destination was known.
   * @public
   */
  target?: DestinationTarget | undefined;

  /**
   * When the delivery status last changed.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Projected content for a PATCH artifact: the remediation patch for one repository, with the descriptors needed to verify and apply it and the state of its delivery to the customer's own bucket or repository.
 * @public
 */
export interface PatchBody {
  /**
   * The patch exactly as stored, unmodified. Control Plane accepted it only
   * as a text unified diff, so `git apply` applies it.
   * @public
   */
  patch: string | undefined;

  /**
   * The patch's wire format, read from the patch itself, which determines how
   * to apply it. Absent when the patch starts with neither a git mailbox
   * header nor a `diff --git` header.
   * @public
   */
  format?: PatchFormat | undefined;

  /**
   * The repository the patch applies to, as named in the source snapshot it
   * was generated against.
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * SHA-256 of the patch's UTF-8 bytes in lowercase hex, computed by Control
   * Plane when it stored the patch.
   *
   * Lets a caller confirm the patch it applies is byte-for-byte the one that
   * was reviewed. Computed over the patch bytes, so it is verifiable against
   * `patch` without trusting this value.
   * @public
   */
  patchSha256: string | undefined;

  /**
   * Size of the patch in UTF-8 bytes, the unit the digest is computed over.
   * @public
   */
  sizeBytes: number | undefined;

  /**
   * Delivery of the patch to the customer's bucket or repository. Absent when
   * the artifact has no delivery destination.
   * @public
   */
  delivery?: PatchDelivery | undefined;
}

/**
 * Deterministic values the producer computed from its assessment, as distinct from the assessment itself.
 * @public
 */
export interface SignalComputation {
  /**
   * Computed likelihood band, on a likelihood signal.
   * @public
   */
  likelihoodBand?: SignalBand | undefined;

  /**
   * Computed impact band, on an impact signal.
   * @public
   */
  impactBand?: SignalBand | undefined;

  /**
   * How many of the four exploit preconditions act as barriers (0-4).
   * @public
   */
  barriers?: number | undefined;
}

/**
 * A producer's structured rationale for a signal's confidence.
 * @public
 */
export interface SignalConfidenceReasoning {
  /**
   * One-line rationale.
   * @public
   */
  summary: string | undefined;

  /**
   * The individual factors behind it.
   * @public
   */
  factors?: string[] | undefined;
}

/**
 * What validation established about exploitability, as summarized onto the scoring signal derived from it.
 * @public
 */
export interface SignalExploitability {
  /**
   * Validation's verdict. `UNCERTAIN` covers a run that was inconclusive —
   * out of budget, an ambiguous failure, or no decisive layer reached — and is
   * never a refutation.
   * @public
   */
  verdict?: ExploitabilityVerdict | undefined;

  /**
   * Whether validation reached the high-value sink the attack path posited.
   *
   * A Boolean rather than an enum: the sink was either reached or it was not,
   * and how far the walk got when it was not is already carried, with more
   * precision, by `highestLayerReached`. An unknown is the absent member.
   * @public
   */
  reachedCrownJewels?: boolean | undefined;

  /**
   * The highest impact layer validation reached, 1-5, as a measure of how far
   * the attack path was walked.
   * @public
   */
  highestLayerReached?: number | undefined;

  /**
   * How strong the evidence behind the verdict is.
   * @public
   */
  confidenceTier?: ValidationConfidenceTier | undefined;

  /**
   * Whether the proven exploit is automatable rather than one-off.
   *
   * A Boolean for the same reason as `SignalPrecondition.value`: validation
   * records a bool, and an unknown is the absent member.
   * @public
   */
  scriptable?: boolean | undefined;

  /**
   * The VALIDATION_EVIDENCE artifact on this same issue holding the proof this
   * verdict summarizes. Fetch it with GetCodeIssueArtifact for the full reasoning
   * chain and exploit artifact.
   * @public
   */
  sourceValidationArtifactId?: string | undefined;
}

/**
 * The assessed attacker-gains dimension with the basis behind it.
 * @public
 */
export interface SignalAttackerGainsDimension {
  /**
   * The capability exploitation grants. Absent when the producer reported a
   * value with no mapping yet.
   * @public
   */
  value?: SignalAttackerGains | undefined;

  /**
   * Where the producer's determination came from.
   * @public
   */
  basis?: SignalBasis | undefined;

  /**
   * The producer's explanation.
   * @public
   */
  reason?: string | undefined;

  /**
   * What the producer could not determine, when anything was missing.
   * @public
   */
  missingInfo?: string | undefined;
}

/**
 * The assessed blast-radius dimension with the basis behind it.
 * @public
 */
export interface SignalBlastRadiusDimension {
  /**
   * How far the consequences reach. Absent when the producer reported a value
   * with no mapping yet.
   * @public
   */
  value?: SignalBlastRadius | undefined;

  /**
   * Where the producer's determination came from.
   * @public
   */
  basis?: SignalBasis | undefined;

  /**
   * The producer's explanation.
   * @public
   */
  reason?: string | undefined;

  /**
   * What the producer could not determine, when anything was missing.
   * @public
   */
  missingInfo?: string | undefined;
}

/**
 * The assessed target-value dimension with the basis behind it.
 * @public
 */
export interface SignalTargetValueDimension {
  /**
   * How valuable the target is. Absent when the producer reported a value
   * with no mapping yet.
   * @public
   */
  value?: SignalTargetValue | undefined;

  /**
   * Where the producer's determination came from.
   * @public
   */
  basis?: SignalBasis | undefined;

  /**
   * The producer's explanation.
   * @public
   */
  reason?: string | undefined;

  /**
   * What the producer could not determine, when anything was missing.
   * @public
   */
  missingInfo?: string | undefined;
}

/**
 * The three impact dimensions an impact signal assessed. The computed impact band is derived from attackerGains and blastRadius, then shifted by targetValue.
 * @public
 */
export interface SignalImpactDimensions {
  /**
   * What the attacker gains from exploitation.
   * @public
   */
  attackerGains?: SignalAttackerGainsDimension | undefined;

  /**
   * How far the consequences reach.
   * @public
   */
  blastRadius?: SignalBlastRadiusDimension | undefined;

  /**
   * How valuable the target is, which can shift the band off its base value.
   * @public
   */
  targetValue?: SignalTargetValueDimension | undefined;
}

/**
 * The assessed access-level precondition with the basis behind it.
 * @public
 */
export interface SignalAccessPrecondition {
  /**
   * The level of access exploitation requires. Absent when the producer
   * reported a level with no mapping yet.
   * @public
   */
  value?: SignalAccessLevel | undefined;

  /**
   * Where the producer's determination came from.
   * @public
   */
  basis?: SignalBasis | undefined;

  /**
   * The producer's explanation.
   * @public
   */
  reason?: string | undefined;

  /**
   * What the producer could not determine, when anything was missing.
   * @public
   */
  missingInfo?: string | undefined;
}

/**
 * One assessed precondition with the basis behind it.
 * @public
 */
export interface SignalPrecondition {
  /**
   * The producer's determination.
   *
   * A Boolean rather than an enum, against the Common Terms preference for
   * enums on extensibility grounds. The question each precondition answers is
   * closed — is the code reachable, is configuration required, must a user
   * other than the attacker interact — and the only third state, "not
   * determined", is already expressed by omitting this member, which the
   * projection does whenever the stored value is not a bool. An enum would
   * give two ways to say the same thing, while `basis` and `missingInfo`
   * already qualify how firm the answer is.
   * @public
   */
  value?: boolean | undefined;

  /**
   * Where the producer's determination came from.
   * @public
   */
  basis?: SignalBasis | undefined;

  /**
   * The producer's explanation.
   * @public
   */
  reason?: string | undefined;

  /**
   * What the producer could not determine, when anything was missing.
   * @public
   */
  missingInfo?: string | undefined;
}

/**
 * The four preconditions a likelihood signal assessed.
 * @public
 */
export interface SignalPreconditions {
  /**
   * Whether the vulnerable code path is reachable by an attacker.
   * @public
   */
  reachableFromAttacker?: SignalPrecondition | undefined;

  /**
   * Whether exploitation depends on a non-default configuration.
   * @public
   */
  configurationNeeded?: SignalPrecondition | undefined;

  /**
   * What level of access exploitation requires.
   * @public
   */
  accessLevel?: SignalAccessPrecondition | undefined;

  /**
   * Whether exploitation requires a user other than the attacker to take
   * part, for example by opening a link or a file (CVSS User Interaction).
   * @public
   */
  userInteractionRequired?: SignalPrecondition | undefined;
}

/**
 * One producer's conclusion about one subject on one scoring dimension.
 * @public
 */
export interface PrevalidationSignal {
  /**
   * What this signal is about, such as a finding or issue reference.
   * @public
   */
  subjectRef?: string | undefined;

  /**
   * The axis this signal speaks to. Absent when the producer reported a
   * dimension with no mapping yet.
   * @public
   */
  dimension?: SignalDimension | undefined;

  /**
   * The signal's own rating. This is an input to scoring and is NOT the
   * finding's severity.
   * @public
   */
  signalStrength?: SignalStrength | undefined;

  /**
   * The producer's conclusion.
   * @public
   */
  conclusion?: string | undefined;

  /**
   * Stable name of the producer that emitted this signal.
   * @public
   */
  producerId?: string | undefined;

  /**
   * Version of that producer.
   * @public
   */
  producerVersion?: string | undefined;

  /**
   * The producer's confidence in this conclusion, on its native 0-1 scale.
   * Absent when the stored value falls outside 0-1.
   * @public
   */
  confidence?: number | undefined;

  /**
   * Why the producer is or is not sure, kept structured rather than prose.
   * @public
   */
  confidenceReasoning?: SignalConfidenceReasoning | undefined;

  /**
   * The deterministic values the producer computed from its assessment.
   * @public
   */
  computed?: SignalComputation | undefined;

  /**
   * The four exploit preconditions a likelihood signal assessed, each with
   * the basis the producer had for it.
   * @public
   */
  preconditions?: SignalPreconditions | undefined;

  /**
   * The three impact dimensions an impact signal assessed, each with the
   * basis the producer had for it. These are what the computed impact band
   * is derived from.
   * @public
   */
  impactDimensions?: SignalImpactDimensions | undefined;

  /**
   * What validation established about exploitability, on an exploitability
   * signal. This summarizes the verdict the signal was derived from; the
   * proof itself is the VALIDATION_EVIDENCE artifact it cites.
   * @public
   */
  exploitability?: SignalExploitability | undefined;
}

/**
 * Projected content for an EVIDENCE artifact carrying prioritization's prevalidation signals.
 * @public
 */
export interface PrevalidationSignalsBody {
  /**
   * The agent that produced this signal set.
   * @public
   */
  producedBy?: string | undefined;

  /**
   * The signals backing the Issue's proposed severity.
   * @public
   */
  signals?: PrevalidationSignal[] | undefined;
}

/**
 * Projected content for a REMEDIATION_PROPOSAL artifact: the patch the remediation agent produced, with the descriptors needed to apply and verify it.
 * @public
 */
export interface RemediationProposalBody {
  /**
   * The patch exactly as the remediation agent produced it, unmodified.
   * @public
   */
  patch: string | undefined;

  /**
   * The patch's wire format, which determines how to apply it. Absent when the
   * producer recorded a format with no mapping yet.
   * @public
   */
  format?: PatchFormat | undefined;

  /**
   * Filename the producer suggests for the patch, when it named one.
   * @public
   */
  filename?: string | undefined;

  /**
   * SHA-256 of the patch bytes in lowercase hex, as recorded by the producer.
   *
   * Lets a caller confirm the patch it applies is byte-for-byte the one that
   * was reviewed. Computed over the patch bytes, so it is verifiable against
   * `patch` without trusting this value.
   * @public
   */
  patchSha256?: string | undefined;
}

/**
 * One proof program file. Further members, such as path and purpose, can be
 * added later as optional details.
 * @public
 */
export interface ValidationProofMaterial {
  /**
   * The file's non-blank text, exactly as retained.
   * @public
   */
  content: string | undefined;
}

/**
 * The executed proof's program. Further members, such as command,
 * workingDirectory and supportingInputs, can be added later as optional details.
 * @public
 */
export interface ValidationProofCode {
  /**
   * Proof program files, main file first, in their retained order.
   * @public
   */
  proofCode: ValidationProofMaterial[] | undefined;
}

/**
 * Retained run output. Further members, such as completion and
 * outputCompleteness, can be added later as optional details.
 * @public
 */
export interface ValidationProofOutput {
  /**
   * What the run printed: standard output and standard error merged, as
   * retained. The text may be empty.
   * @public
   */
  consoleOutput: string | undefined;
}

/**
 * Proof of exploitability the validation agent produced by executing code against the repository under test, with the output that execution produced.
 * @public
 */
export interface ValidationExecutedProof {
  /**
   * The code that was run. Not a request payload: it imports the
   * repository's own modules and drives the vulnerable code path directly.
   * @public
   */
  code: ValidationProofCode | undefined;

  /**
   * What the execution printed, including the agent's own PASS/FAIL
   * assertions. Absent when the run printed nothing retained.
   * @public
   */
  output?: ValidationProofOutput | undefined;

  /**
   * Effect the execution actually produced. `observedEffect` rather than
   * `effect`: this one was witnessed, and the name has to stay distinguishable
   * from `ValidationSourceAnalysis.inferredEffect`, which was not.
   * @public
   */
  observedEffect?: ExploitEffect | undefined;
}

/**
 * A concrete exploit payload and the effect validation observed from it.
 * @public
 */
export interface ValidationExploitArtifact {
  /**
   * The exact payload sent.
   * @public
   */
  payload: string | undefined;

  /**
   * Target the payload was sent to.
   * @public
   */
  targetUrl: string | undefined;

  /**
   * HTTP method the payload was sent with.
   * @public
   */
  httpMethod: ArtifactHttpMethod | undefined;

  /**
   * Headers sent with the payload.
   * @public
   */
  headers?: Record<string, string> | undefined;

  /**
   * HTTP status observed in the response.
   * @public
   */
  responseStatus?: number | undefined;

  /**
   * Leading portion of the response body, bounded by the producer.
   * @public
   */
  responseSnippet?: string | undefined;

  /**
   * Effect observed from sending the payload.
   * @public
   */
  effect: ExploitEffect | undefined;
}

/**
 * Validation's verdict for one attack flow.
 * @public
 */
export interface FlowVerdict {
  /**
   * Identifier of the attack flow assessed.
   * @public
   */
  flowId: string | undefined;

  /**
   * Outcome for this flow.
   * @public
   */
  verdict: FlowVerdictValue | undefined;

  /**
   * Confidence in this flow's verdict. Absent when out of range.
   * @public
   */
  confidence?: number | undefined;

  /**
   * Citations supporting the verdict.
   * @public
   */
  evidence?: string[] | undefined;
}

/**
 * One step in the validation agent's reasoning chain.
 * @public
 */
export interface ReasoningStep {
  /**
   * Position of this step in the chain.
   * @public
   */
  step: number | undefined;

  /**
   * The claim or conclusion reached at this step.
   * @public
   */
  claim: string | undefined;

  /**
   * Citation supporting the claim.
   * @public
   */
  source: string | undefined;

  /**
   * Confidence in this individual claim, on the producer's native 0-1 scale.
   * @public
   */
  confidence?: number | undefined;
}

/**
 * Validation's result for one finding within a multi-finding bundle.
 * @public
 */
export interface PerFindingResult {
  /**
   * The finding assessed.
   * @public
   */
  findingId: string | undefined;

  /**
   * Exploitability verdict for this finding.
   * @public
   */
  exploitable: ExploitabilityVerdict | undefined;

  /**
   * Confidence in this finding's verdict. Absent when out of range.
   * @public
   */
  confidence?: number | undefined;

  /**
   * Per-flow verdicts recorded for this finding.
   * @public
   */
  flowVerdicts?: FlowVerdict[] | undefined;

  /**
   * Reasoning chain recorded for this finding.
   * @public
   */
  reasoningChain?: ReasoningStep[] | undefined;

  /**
   * Exploit artifact produced for this finding, when there was one.
   * @public
   */
  exploitArtifact?: ValidationExploitArtifact | undefined;
}

/**
 * Proof of exploitability the validation agent produced by reading the repository's source, with nothing built or run. Further members, such as diagram and references, can be added later as optional details.
 * @public
 */
export interface ValidationSourceAnalysis {
  /**
   * The non-blank analysis as Markdown: the annotated entry-to-sink walk,
   * its citations, and why the checked guards are absent or bypassed.
   * @public
   */
  summary: string | undefined;

  /**
   * Effect the agent concluded WOULD occur. Deliberately not `effect`:
   * nothing was executed, so this is reasoned from the source and must not be
   * read as an observation. See `ValidationExecutedProof.observedEffect`.
   * @public
   */
  inferredEffect?: ExploitEffect | undefined;
}

/**
 * Projected content for a VALIDATION_EVIDENCE artifact: the validation agent's durable proof of exploitability.
 * @public
 */
export interface ValidationEvidenceBody {
  /**
   * Exploitability verdict. Explicit UNCERTAIN replaces the producer's
   * tri-state `exploitable: true | false | null`, so an absent verdict is
   * never confused with a negative one.
   * @public
   */
  exploitable: ExploitabilityVerdict | undefined;

  /**
   * How the validation run ended. Absent when the producer reported a status
   * with no mapping yet: the rest of the body still projects, so one
   * unmapped enum never costs a customer the whole artifact.
   * @public
   */
  terminalStatus?: ValidationTerminalStatus | undefined;

  /**
   * One verdict per attack flow assessed in the bundle.
   * @public
   */
  flowVerdicts?: FlowVerdict[] | undefined;

  /**
   * Identifiers of attack flows upgraded to Confirmed provenance.
   * @public
   */
  attackFlowsConfirmed?: string[] | undefined;

  /**
   * Concrete payload and its observed effect, when validation produced one by
   * sending an HTTP request.
   *
   * Only an HTTP proof projects here. A validation agent that proves
   * exploitability by RUNNING code against the repository projects
   * `executedProof`, and one that proves it by reading the source projects
   * `sourceAnalysis`. All three are mutually exclusive: at most one is present.
   * @public
   */
  exploitArtifact?: ValidationExploitArtifact | undefined;

  /**
   * Proof the agent produced by executing code against the repository under
   * test, with the output that execution produced.
   * @public
   */
  executedProof?: ValidationExecutedProof | undefined;

  /**
   * Proof the agent produced by reading the repository's source, with nothing
   * built or run.
   * @public
   */
  sourceAnalysis?: ValidationSourceAnalysis | undefined;

  /**
   * Per-finding breakdown for a multi-finding bundle. Absent for a
   * single-finding bundle.
   * @public
   */
  perFindingResults?: PerFindingResult[] | undefined;
}

/**
 * The projected body of an artifact. The active member is selected by the artifact's artifactType, and for a type that carries more than one payload kind by the stored content's own discriminator; `raw` carries content for types with no defined shape yet and for content that did not match its shape.
 * @public
 */
export type IssueArtifactBody =
  | IssueArtifactBody.PatchMember
  | IssueArtifactBody.PrevalidationSignalsMember
  | IssueArtifactBody.RawMember
  | IssueArtifactBody.RemediationProposalMember
  | IssueArtifactBody.ValidationEvidenceMember
  | IssueArtifactBody.$UnknownMember;

/**
 * @public
 */
export namespace IssueArtifactBody {
  /**
   * Projected VALIDATION_EVIDENCE content.
   * @public
   */
  export interface ValidationEvidenceMember {
    validationEvidence: ValidationEvidenceBody;
    prevalidationSignals?: never;
    remediationProposal?: never;
    patch?: never;
    raw?: never;
    $unknown?: never;
  }

  /**
   * Projected EVIDENCE content whose stored envelope declares
   * `artifact_kind: prevalidation_signals` — the severity signals prioritization uses.
   *
   * One artifactType can select different members here: EVIDENCE also carries
   * the prioritization markdown narrative, which is not JSON and so returns
   * through `raw`. The member is therefore chosen by artifactType AND, for a
   * type that carries more than one payload kind, the content's own
   * discriminator.
   * @public
   */
  export interface PrevalidationSignalsMember {
    validationEvidence?: never;
    prevalidationSignals: PrevalidationSignalsBody;
    remediationProposal?: never;
    patch?: never;
    raw?: never;
    $unknown?: never;
  }

  /**
   * Projected REMEDIATION_PROPOSAL content: a patch the remediation agent
   * produced, with the descriptors needed to apply and verify it.
   *
   * REMEDIATION_PROPOSAL content that does not match this shape is returned
   * through `raw`.
   * @public
   */
  export interface RemediationProposalMember {
    validationEvidence?: never;
    prevalidationSignals?: never;
    remediationProposal: RemediationProposalBody;
    patch?: never;
    raw?: never;
    $unknown?: never;
  }

  /**
   * Projected PATCH content: the remediation patch for one repository, with
   * the descriptors needed to verify and apply it and the state of its
   * delivery to the customer's own bucket or repository.
   *
   * Every PATCH projects here. The descriptors come from members Control
   * Plane computes or owns when it stores the patch, not from producer
   * metadata, so this member is the whole PATCH contract and `metadata` is
   * omitted for it.
   * @public
   */
  export interface PatchMember {
    validationEvidence?: never;
    prevalidationSignals?: never;
    remediationProposal?: never;
    patch: PatchBody;
    raw?: never;
    $unknown?: never;
  }

  /**
   * The producer's content verbatim, for an artifactType with no defined
   * shape or content that failed to parse against its shape.
   * @public
   */
  export interface RawMember {
    validationEvidence?: never;
    prevalidationSignals?: never;
    remediationProposal?: never;
    patch?: never;
    raw: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    validationEvidence?: never;
    prevalidationSignals?: never;
    remediationProposal?: never;
    patch?: never;
    raw?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    validationEvidence: (value: ValidationEvidenceBody) => T;
    prevalidationSignals: (value: PrevalidationSignalsBody) => T;
    remediationProposal: (value: RemediationProposalBody) => T;
    patch: (value: PatchBody) => T;
    raw: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The agent that produced an artifact.
 * @public
 */
export interface IssueArtifactProducerSummary {
  /**
   * Stable producer name, such as ContinuumValidation.
   * @public
   */
  agent: string | undefined;
}

/**
 * Contains the requested artifact and its content.
 * @public
 */
export interface GetCodeIssueArtifactOutput {
  /**
   * The unique identifier of the artifact.
   * @public
   */
  artifactId: string | undefined;

  /**
   * Semantic category of the artifact.
   * @public
   */
  artifactType: IssueArtifactType | undefined;

  /**
   * MIME type the producer declared for its content.
   * @public
   */
  mediaType: string | undefined;

  /**
   * The artifact body, projected against the shape defined for its
   * artifactType. A type with a defined shape is returned as that structure,
   * and anything else through `IssueArtifactBody.raw`.
   * @public
   */
  body: IssueArtifactBody | undefined;

  /**
   * Producer-defined structured metadata, when the producer supplied any.
   *
   * Returned only for an artifactType whose content has no defined shape, so
   * that the artifact stays inspectable. For an artifactType with a defined
   * shape, `body` carries the content and this member is omitted.
   * @public
   */
  metadata?: __DocumentType | undefined;

  /**
   * The agent that produced the artifact.
   * @public
   */
  producer: IssueArtifactProducerSummary | undefined;

  /**
   * The timestamp when the artifact was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Specifies the issue, optional filter, and pagination parameters for listing artifacts.
 * @public
 */
export interface ListCodeIssueArtifactsInput {
  /**
   * The environment that owns the issue.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The issue whose artifacts to list.
   * @public
   */
  issueId: string | undefined;

  /**
   * Optional filter for a semantic artifact category. Omit to list all
   * artifacts attached to the issue.
   * @public
   */
  artifactType?: IssueArtifactType | undefined;

  /**
   * The maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned by a previous call.
   * Set to null for the first request; use the returned token for subsequent calls.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of an artifact returned in list responses.
 * @public
 */
export interface IssueArtifactItem {
  /**
   * The unique identifier of the artifact.
   * @public
   */
  artifactId: string | undefined;

  /**
   * Semantic category of the artifact.
   * @public
   */
  artifactType: IssueArtifactType | undefined;

  /**
   * MIME type of the artifact content.
   * @public
   */
  mediaType: string | undefined;

  /**
   * The agent that produced the artifact.
   * @public
   */
  producer: IssueArtifactProducerSummary | undefined;

  /**
   * Size of the artifact content in bytes. The content itself is returned by
   * GetCodeIssueArtifact.
   * @public
   */
  contentSizeBytes: number | undefined;

  /**
   * The timestamp when the artifact was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Contains the list of artifact summaries and an optional pagination token.
 * @public
 */
export interface ListCodeIssueArtifactsOutput {
  /**
   * The artifacts attached to the issue, ordered by artifactId descending.
   * @public
   */
  items: IssueArtifactItem[] | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   * Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies the environment and pagination parameters for listing issues.
 * @public
 */
export interface ListCodeIssuesInput {
  /**
   * The environment whose issues to list.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned by a previous call.
   * Set to null for the first request; use the returned token for subsequent calls.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of an issue returned in list responses.
 * @public
 */
export interface IssueSummary {
  /**
   * The unique identifier of the issue.
   * @public
   */
  issueId: string | undefined;

  /**
   * The ARN of the issue.
   * @public
   */
  issueArn: string | undefined;

  /**
   * The name of the issue.
   * @public
   */
  name: string | undefined;

  /**
   * Scanner-derived severity assigned to the issue.
   * @public
   */
  severity?: IssueSeverity | undefined;

  /**
   * The likelihood that this issue is a true positive, expressed as a percentage (0-100).
   * @public
   */
  confidence?: number | undefined;

  /**
   * The current lifecycle status of the issue.
   * @public
   */
  status: IssueStatus | undefined;

  /**
   * The part of the workflow the issue is in. Present when status is
   * IN_PROGRESS, and when status is FAILED and the failing phase is known.
   * @public
   */
  phase?: IssuePhase | undefined;

  /**
   * Why the issue failed. Present only when status is FAILED.
   * @public
   */
  statusReason?: IssueStatusReason | undefined;

  /**
   * Customer-facing explanation of statusReason. Present only when status is
   * FAILED.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the status or phase last changed.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the issue was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when any field of the issue last changed. Advances on every
   * mutation (including score-only updates that do not transition status), so
   * it is greater than or equal to statusUpdatedAt.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Contains the list of issue summaries and an optional pagination token.
 * @public
 */
export interface ListCodeIssuesOutput {
  /**
   * The issues in the environment, ordered by issueId descending.
   * @public
   */
  items: IssueSummary[] | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   * Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeScanInput {
  /**
   * Environment to scan.
   * @public
   */
  environmentId: string | undefined;

  /**
   * An optional token identifying one scan request for this environment. SDKs
   * generate a token when omitted. If a request reaches the service without a
   * token, the service generates one for that request, so each request without
   * a token starts a new scan. To retry a request after a lost response, supply
   * the same token on the same environment; once a request with that token has
   * succeeded, a retry returns the original scan. Concurrent requests with the
   * same token, or a retry after a request that failed partway through, can
   * leave an additional scan, which may end FAILED as superseded. A token is
   * bound to its scan for as long as the service retains the scan's build
   * record, with no shorter expiry. Deleting the environment makes the binding
   * inaccessible: a later request with the token returns
   * ResourceNotFoundException.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeScanOutput {
  /**
   * The scan run this request created, or the scan run a previous request with
   * the same clientToken already accepted.
   * @public
   */
  scan: CodeScanSummary | undefined;
}

/**
 * @public
 */
export interface GetCodeScanInput {
  /**
   * Environment that owns the scan.
   * @public
   */
  environmentId: string | undefined;

  /**
   * Scan to retrieve.
   * @public
   */
  scanRunId: string | undefined;
}

/**
 * Complete customer-visible data for one environment scan.
 *
 * Kept distinct from CodeScanSummary so GetCodeScan can grow independently of
 * ListCodeScans without changing its response contract.
 * @public
 */
export interface CodeScanData {
  /**
   * The unique scan identifier.
   * @public
   */
  scanRunId: string | undefined;

  /**
   * Current customer-visible status.
   * @public
   */
  status: ScanStatus | undefined;

  /**
   * Why the scan was created. Always present.
   * @public
   */
  origin: ScanOrigin | undefined;

  /**
   * Time at which Continuum accepted the scan request.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Time at which a terminal result was recorded.
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Failure detail present for unsuccessful scans.
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * Phase this scan failed in. Present only when `status` is FAILED, and
   * absent for a scan that failed before this field existed.
   * @public
   */
  failureStage?: ScanFailureStage | undefined;
}

/**
 * @public
 */
export interface GetCodeScanOutput {
  /**
   * Complete customer-visible scan data.
   * @public
   */
  scan: CodeScanData | undefined;
}

/**
 * @public
 */
export interface ListCodeScansInput {
  /**
   * Environment whose scans to list.
   * @public
   */
  environmentId: string | undefined;

  /**
   * Maximum number of scans to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token returned by a prior request.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeScansOutput {
  /**
   * Customer-visible scans ordered by scanRunId descending.
   * @public
   */
  scans: CodeScanSummary[] | undefined;

  /**
   * Pagination token for the next page, if present.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Complete configuration for the IAM role Continuum assumes to collect
 * Kubernetes cluster metadata.
 * @public
 */
export interface KubernetesClusterRoleConfiguration {
  /**
   * IAM role the authenticated caller passes to Continuum.
   * @public
   */
  roleArn: string | undefined;

  /**
   * Optional external ID Continuum supplies when assuming roleArn. This
   * must match the role trust policy when configured and does not replace
   * the caller's iam:PassRole permission.
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Creates a Collector for the authenticated caller.
 * @public
 */
export interface CreateCollectorInput {
  /**
   * Source to collect. Defaults to AWS_COLLECTOR when omitted.
   * @public
   */
  type?: CollectorType | undefined;

  /**
   * IAM role configuration used to collect Kubernetes cluster metadata.
   * The authenticated caller must be allowed to pass its exact roleArn to
   * Continuum.
   * @public
   */
  kubernetesClusterRole?: KubernetesClusterRoleConfiguration | undefined;

  /**
   * Caller-provided token that makes retried create requests return the
   * original Collector rather than creating a duplicate.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains the identifier and ARN of the newly created Collector.
 * @public
 */
export interface CreateCollectorOutput {
  /**
   * The unique identifier assigned to the Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The ARN of the created Collector.
   * @public
   */
  collectorArn: string | undefined;

  /**
   * The source collected by this Collector.
   * @public
   */
  type: CollectorType | undefined;

  /**
   * The current lifecycle status.
   * @public
   */
  status: CollectorStatus | undefined;

  /**
   * The timestamp when the Collector was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Specifies the Collector to delete.
 * @public
 */
export interface DeleteCollectorInput {
  /**
   * The unique identifier of the Collector to delete.
   * @public
   */
  collectorId: string | undefined;
}

/**
 * Specifies the Collector to retrieve.
 * @public
 */
export interface GetCollectorInput {
  /**
   * The unique identifier of the Collector to retrieve.
   * @public
   */
  collectorId: string | undefined;
}

/**
 * Contains the current state of the Collector.
 * @public
 */
export interface GetCollectorOutput {
  /**
   * The unique identifier of the Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The ARN of the Collector.
   * @public
   */
  collectorArn: string | undefined;

  /**
   * The source collected by this Collector.
   * @public
   */
  type: CollectorType | undefined;

  /**
   * The current lifecycle status.
   * @public
   */
  status: CollectorStatus | undefined;

  /**
   * The ARN of the provisioned AWS Config Recorder.
   * @public
   */
  configRecorderArn?: string | undefined;

  /**
   * IAM role used to collect Kubernetes cluster metadata.
   * @public
   */
  kubernetesClusterRoleArn?: string | undefined;

  /**
   * The timestamp when the Collector was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time of the last successful UpdateCollector call, returned at
   * whole-second precision in the same date-time format as createdAt.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Identifies the Collector whose inventory is requested.
 * @public
 */
export interface GetCollectorDataAccessAuthorizationInput {
  /**
   * The AWS account that owns the Collector.
   * @public
   */
  accountId: string | undefined;

  /**
   * The unique identifier of the Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The full ARN of the Environment requesting the Collector's data. The
   * Environment must be in the caller's account. Continuum supplies this value
   * as the continuum:EnvironmentArn condition key.
   * @public
   */
  environmentArn?: string | undefined;
}

/**
 * Empty response returned when the authenticated caller is authorized to access the Collector's data.
 * @public
 */
export interface GetCollectorDataAccessAuthorizationOutput {}

/**
 * Specifies the Collector whose Environment associations to list.
 * @public
 */
export interface ListAssociatedEnvironmentsInput {
  /**
   * The unique identifier of the Collector whose associations to list.
   * @public
   */
  collectorId: string | undefined;

  /**
   * Maximum number of Environment associations to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token returned by a prior request.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains one page of Environment summaries associated with the requested Collector.
 * @public
 */
export interface ListAssociatedEnvironmentsOutput {
  /**
   * Summaries of the Environments associated with this Collector, ordered by
   * environmentArn lexicographically ascending. Each summary has the same
   * fields as a ListEnvironments item but uses an independent model shape.
   * Empty when the Collector has no associations.
   * @public
   */
  associatedEnvironments: AssociatedEnvironment[] | undefined;

  /**
   * Pagination token for the next page, if present.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies no request parameters. The target account is derived exclusively from the authenticated calling context.
 * @public
 */
export interface ListCollectorsInput {}

/**
 * A summary of a Collector returned in list responses.
 * @public
 */
export interface CollectorSummary {
  /**
   * The unique identifier of the Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The ARN of the Collector.
   * @public
   */
  collectorArn: string | undefined;

  /**
   * The source collected by this Collector.
   * @public
   */
  type: CollectorType | undefined;

  /**
   * The current lifecycle status.
   * @public
   */
  status: CollectorStatus | undefined;

  /**
   * The timestamp when the Collector was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Contains summaries of the caller account's Collectors.
 * @public
 */
export interface ListCollectorsOutput {
  /**
   * The Collectors owned by the authenticated caller's account. At most one
   * result is currently returned, so no result ordering applies.
   * @public
   */
  items: CollectorSummary[] | undefined;
}

/**
 * Empty marker selecting removal in KubernetesClusterRoleUpdate.
 * @public
 */
export interface RemoveKubernetesClusterRole {}

/**
 * One complete mutation of the Collector's Kubernetes IAM role
 * configuration.
 * @public
 */
export type KubernetesClusterRoleUpdate =
  | KubernetesClusterRoleUpdate.RemoveMember
  | KubernetesClusterRoleUpdate.SetMember
  | KubernetesClusterRoleUpdate.$UnknownMember;

/**
 * @public
 */
export namespace KubernetesClusterRoleUpdate {
  /**
   * Replace the complete role configuration.
   * @public
   */
  export interface SetMember {
    set: KubernetesClusterRoleConfiguration;
    remove?: never;
    $unknown?: never;
  }

  /**
   * Remove the configured role and external ID.
   * @public
   */
  export interface RemoveMember {
    set?: never;
    remove: RemoveKubernetesClusterRole;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    set?: never;
    remove?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    set: (value: KubernetesClusterRoleConfiguration) => T;
    remove: (value: RemoveKubernetesClusterRole) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the mutable Collector properties. At least one property must be supplied. k8ClusterRole models an atomic set-or-remove mutation, so roleArn and externalId are replaced or removed together.
 * @public
 */
export interface UpdateCollectorInput {
  /**
   * The unique identifier of the Collector to update.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The new customer-visible name.
   * @public
   */
  name?: string | undefined;

  /**
   * Atomic update to the IAM role configuration used to collect Kubernetes
   * cluster metadata. The set variant requires a complete configuration;
   * the authenticated caller must be allowed to pass its exact roleArn to
   * Continuum. The remove variant clears both the role and external ID.
   * @public
   */
  kubernetesClusterRole?: KubernetesClusterRoleUpdate | undefined;
}

/**
 * Contains the current state of the updated Collector.
 * @public
 */
export interface UpdateCollectorOutput {
  /**
   * The unique identifier of the updated Collector.
   * @public
   */
  collectorId: string | undefined;

  /**
   * The ARN of the updated Collector.
   * @public
   */
  collectorArn: string | undefined;

  /**
   * The source collected by this Collector.
   * @public
   */
  type: CollectorType | undefined;

  /**
   * The current lifecycle status.
   * @public
   */
  status: CollectorStatus | undefined;

  /**
   * The ARN of the provisioned AWS Config Recorder.
   * @public
   */
  configRecorderArn?: string | undefined;

  /**
   * IAM role used to collect Kubernetes cluster metadata.
   * @public
   */
  kubernetesClusterRoleArn?: string | undefined;

  /**
   * The timestamp when the Collector was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time of the last successful UpdateCollector call, returned at
   * whole-second precision in the same date-time format as createdAt.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Source and operating-policy settings for a new code environment.
 * @public
 */
export interface CreateCodeConfiguration {
  /**
   * Source configuration for the environment.
   * @public
   */
  sourceConfiguration?: EnvironmentSourceConfiguration | undefined;

  /**
   * Environment-level operating policy.
   * @public
   */
  environmentConfiguration?: EnvironmentConfiguration | undefined;
}

/**
 * Type-specific configuration for a new environment. Omission creates a code
 * environment with the default operating policy and no sources.
 * @public
 */
export interface CreateEnvironmentConfiguration {
  /**
   * Configuration for a code-scanning environment.
   * @public
   */
  codeConfiguration?: CreateCodeConfiguration | undefined;
}

/**
 * Specifies the name and type-specific configuration of the new environment. Source and operating-policy settings belong to configuration.codeConfiguration.
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * The customer-visible name of the environment.
   * @public
   */
  name: string | undefined;

  /**
   * Type-specific configuration. Omission creates a code environment with the
   * default operating policy and no sources.
   * @public
   */
  configuration?: CreateEnvironmentConfiguration | undefined;
}

/**
 * Contains the identifier and ARN of the newly created environment.
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * The unique identifier assigned to the environment.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the created environment.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The initial status of the environment. Always ACTIVE on successful creation.
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * The timestamp when the environment was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Specifies the environment to delete.
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * The unique identifier of the environment to delete.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * Specifies the Collector to disassociate from this Environment.
 * @public
 */
export interface DisassociateCollectorInput {
  /**
   * The unique identifier of the Environment whose associations are updated.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the Collector to disassociate from this Environment.
   * @public
   */
  collectorArn: string | undefined;
}

/**
 * Specifies the environment to retrieve.
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * The unique identifier of the environment to retrieve.
   * @public
   */
  environmentId: string | undefined;
}

/**
 * Type-specific configuration and state returned by GetEnvironment and UpdateEnvironment.
 * @public
 */
export interface EnvironmentConfigurationDetails {
  /**
   * Configuration and scan state for a code-scanning environment.
   * @public
   */
  codeConfiguration?: CodeConfigurationDetails | undefined;
}

/**
 * Contains the current state and configuration of the requested environment.
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * The unique identifier of the environment.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the environment.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The customer-visible name of the environment.
   * @public
   */
  name: string | undefined;

  /**
   * The current operational status of the environment.
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * Human-readable details about the current status.
   * Present when the status requires additional context (e.g., failure reason).
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the status last transitioned.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the environment was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the environment's properties were last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Type-specific configuration and state, including code sources, operating
   * policy, Collector details, and the latest scan.
   * @public
   */
  configuration: EnvironmentConfigurationDetails | undefined;
}

/**
 * Specifies the Environment whose Collector associations to list.
 * @public
 */
export interface ListAssociatedCollectorsInput {
  /**
   * The unique identifier of the Environment whose associations to list.
   * @public
   */
  environmentId: string | undefined;

  /**
   * Maximum number of associated Collectors to return.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token returned by a prior request.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains one page of the Collectors associated with the requested Environment.
 * @public
 */
export interface ListAssociatedCollectorsOutput {
  /**
   * The Collectors associated with this Environment, ordered by collectorId
   * ascending. Empty when the Environment has no associations, and also when
   * every association on the page predates Continuum persisting the ARN — the
   * page is still advanced by `nextToken` in that case.
   * @public
   */
  associatedCollectors: AssociatedCollector[] | undefined;

  /**
   * Pagination token for the next page, if present.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies pagination parameters for listing environments.
 *
 * Response-filtering justification: filtering is intentionally omitted because every
 * current consumer needs the canonical complete, account-scoped environment inventory,
 * and no useful selective server-side query use case is defined. Environment ID already
 * has the GetEnvironment lookup operation, and status, name, or timestamp filtering is
 * not needed by any current workflow. Adding speculative filters would require
 * unsupported access patterns and ambiguous semantics without reducing data returned
 * for existing consumers. If a concrete indexed query use case is introduced later, its
 * filter values must be bound to pagination tokens so a token cannot be replayed against
 * a different query. The formal API standards decision is recorded in the package-root
 * BR_EXCEPTIONS.md file.
 *
 * @public
 */
export interface ListEnvironmentsInput {
  /**
   * The maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned by a previous call.
   * Set to null for the first request; use the returned token for subsequent calls.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary of an environment returned in list responses.
 * @public
 */
export interface EnvironmentListEntry {
  /**
   * The unique identifier of the environment.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the environment.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The customer-visible name of the environment.
   * @public
   */
  name: string | undefined;

  /**
   * The current operational status of the environment.
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * The timestamp when the environment was created. Preserve the existing
   * EnvironmentSummary.createdAt date-time wire format.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Contains environment metadata and an optional pagination token.
 * @public
 */
export interface ListEnvironmentsOutput {
  /**
   * Common metadata for the environments in the account, ordered by environmentId descending.
   * @public
   */
  items: EnvironmentListEntry[] | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   * Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Mutable source and operating-policy settings for a code environment.
 * @public
 */
export interface UpdateCodeConfiguration {
  /**
   * Source changes. s3Sources replaces the environment's S3 source, and
   * repositorySources replaces its repository selections.
   * @public
   */
  sourceConfiguration?: EnvironmentSourceConfiguration | undefined;

  /**
   * Operating-policy changes. network replaces the environment's network policy;
   * a network without allowedDomains allows no domains. Builds accepted before
   * the change keep the domains they were accepted with. patchCreationPolicy
   * replaces the patch creation policy. scanFrequency updates scan cadence.
   * Omitted members preserve their stored values.
   * @public
   */
  environmentConfiguration?: EnvironmentConfiguration | undefined;
}

/**
 * Type-specific changes to an environment. Omitted members preserve stored values.
 * @public
 */
export interface UpdateEnvironmentConfiguration {
  /**
   * Changes to a code-scanning environment.
   * @public
   */
  codeConfiguration?: UpdateCodeConfiguration | undefined;
}

/**
 * Specifies the mutable environment properties. Supply a name or a change under configuration.codeConfiguration. Its sourceConfiguration.s3Sources and sourceConfiguration.repositorySources replace the S3 source and repository selections. Its environmentConfiguration has patch semantics: omitted members preserve stored values, scanFrequency updates scan cadence, and network and patchCreationPolicy replace the corresponding policies.
 * @public
 */
export interface UpdateEnvironmentInput {
  /**
   * The unique identifier of the environment to update.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The new customer-visible name.
   * @public
   */
  name?: string | undefined;

  /**
   * Type-specific configuration changes. Omission preserves the configuration.
   * @public
   */
  configuration?: UpdateEnvironmentConfiguration | undefined;
}

/**
 * Contains the current state of the updated environment. Use GetEnvironment to read its source and environment configuration.
 * @public
 */
export interface UpdateEnvironmentOutput {
  /**
   * The unique identifier of the updated environment.
   * @public
   */
  environmentId: string | undefined;

  /**
   * The ARN of the updated environment.
   * @public
   */
  environmentArn: string | undefined;

  /**
   * The current customer-visible name of the environment.
   * @public
   */
  name: string | undefined;

  /**
   * The current operational status of the environment.
   * @public
   */
  status: EnvironmentStatus | undefined;

  /**
   * Human-readable details about the current status.
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the status last transitioned. Uses the existing
   * GetEnvironment/ListEnvironments ISO-8601 wire format for this field.
   * @public
   */
  statusUpdatedAt: Date | undefined;

  /**
   * The timestamp when the environment was created. Uses the existing
   * GetEnvironment/ListEnvironments ISO-8601 wire format for this field.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Type-specific state, including Collector details and the latest scan.
   * Read source and operating-policy settings through GetEnvironment.
   * @public
   */
  configuration: EnvironmentConfigurationDetails | undefined;
}

/**
 * Specifies the resource.
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The ARN of a resource in the caller's account.
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains the resource policy.
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The ARN of a Continuum resource that supports a resource policy. Collectors
   * are the only supported resource type; other well-formed Continuum ARNs are
   * rejected with ValidationException.
   * @public
   */
  arn: string | undefined;

  /**
   * A resource policy in displayable JSON form.
   * @public
   */
  policy: string | undefined;

  /**
   * Opaque optimistic-concurrency token for a resource policy.
   * @public
   */
  revisionId: string | undefined;
}

/**
 * Write-only OAuth credentials used to authorize a GitHub.com integration. Not stored or returned after creation.
 * @public
 */
export interface GitHubAuthorizationConfiguration {
  /**
   * The OAuth authorization code returned by GitHub after the user authorizes the application.
   * @public
   */
  authorizationCode: string | undefined;

  /**
   * The `state` returned by GitHub in the OAuth callback. It must be the state
   * that StartIntegrationAuthorization returned to the same AWS account, and the
   * authorization request must have sent that call's codeChallenge. The state can
   * be redeemed once. A stage that enforces authorization sessions rejects a
   * missing, expired, already used, or other-account state with
   * ValidationException; restart the authorization with
   * StartIntegrationAuthorization.
   * @public
   */
  state: string | undefined;

  /**
   * The redirect URL used to obtain the authorization code. Must match one of the
   * redirect URLs registered on the GitHub App. If omitted, the App's default
   * redirect URL is used. Not stored or returned after creation.
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * Configuration for a GitHub.com integration using the OAuth authorization code flow.
 * @public
 */
export interface GitHubConfiguration {
  /**
   * OAuth authorization used to establish the integration.
   * Required on create; not returned on read operations.
   * @public
   */
  authorization: GitHubAuthorizationConfiguration | undefined;

  /**
   * The name of the GitHub organization to associate with the integration.
   * If not specified, the integration is associated with the authenticated user's personal account.
   * @public
   */
  organizationName?: string | undefined;
}

/**
 * Configuration for a GitLab integration using a pasted access token.
 * @public
 */
export interface GitLabConfiguration {
  /**
   * The HTTPS base URL of the GitLab instance (gitlab.com or self-managed).
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * Whether the integration targets a group or a single project.
   * @public
   */
  targetType: GitLabTargetType | undefined;

  /**
   * The group or project path the integration targets.
   * @public
   */
  targetPath: string | undefined;

  /**
   * The GitLab access token (personal, group or project). Write-only; not
   * stored or returned after creation. If the token carries the self-rotate
   * scope, rotation is opted in and Continuum manages the token thereafter.
   * @public
   */
  accessToken: string | undefined;
}

/**
 * Configuration for a customer-managed S3 integration.
 * @public
 */
export interface S3Configuration {
  /**
   * Customer-managed source bucket name.
   * @public
   */
  bucket: string | undefined;

  /**
   * Role Continuum will assume to read from the source bucket.
   * @public
   */
  roleArn: string | undefined;

  /**
   * Caller-provided external ID required by the role trust policy.
   * @public
   */
  externalId: string | undefined;
}

/**
 * Provider-specific configuration for creating an integration.
 * Only one member may be specified.
 * @public
 */
export type ProviderConfiguration =
  | ProviderConfiguration.GithubMember
  | ProviderConfiguration.GitlabMember
  | ProviderConfiguration.S3Member
  | ProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderConfiguration {
  /**
   * Configuration for a GitHub.com integration.
   * @public
   */
  export interface GithubMember {
    github: GitHubConfiguration;
    gitlab?: never;
    s3?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a GitLab integration.
   * @public
   */
  export interface GitlabMember {
    github?: never;
    gitlab: GitLabConfiguration;
    s3?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a customer-managed S3 integration.
   * @public
   */
  export interface S3Member {
    github?: never;
    gitlab?: never;
    s3: S3Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    gitlab?: never;
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubConfiguration) => T;
    gitlab: (value: GitLabConfiguration) => T;
    s3: (value: S3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the provider configuration and name for the new integration.
 * @public
 */
export interface CreateIntegrationInput {
  /**
   * An optional token identifying one create attempt within the caller's account,
   * Region, and operation. SDKs generate a token when omitted. If a request reaches
   * the service without a token, the service generates one for that request.
   * Each request without a token starts a new attempt. To replay an attempt,
   * supply the same token and identical input. Authorized users and roles in
   * the same account can retry an attempt this way.
   * Token records are retained for eight hours after success or terminal failure,
   * including after deletion of a successfully created integration.
   * Different input with the same token returns ValidationException.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name for the integration.
   * @public
   */
  name: string | undefined;

  /**
   * The provider-specific configuration required to create the integration.
   * Only one member may be specified.
   * @public
   */
  providerConfiguration: ProviderConfiguration | undefined;
}

/**
 * Contains the original identifier, ARN, and creation time of the new or replayed integration. A replay can refer to an integration that has since been deleted.
 * @public
 */
export interface CreateIntegrationOutput {
  /**
   * The unique identifier of the created integration.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The ARN of the created integration.
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The timestamp when the integration was created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Specifies the integration to delete.
 * @public
 */
export interface DeleteIntegrationInput {
  /**
   * The unique identifier of the integration to delete.
   * @public
   */
  integrationId: string | undefined;
}

/**
 * Specifies the integration to retrieve.
 * @public
 */
export interface GetIntegrationInput {
  /**
   * The unique identifier of the integration to retrieve.
   * @public
   */
  integrationId: string | undefined;
}

/**
 * Details for a GitHub.com integration.
 * @public
 */
export interface GitHubDetails {
  /**
   * The name of the GitHub organization associated with the integration.
   * @public
   */
  organizationName?: string | undefined;
}

/**
 * Details for a GitLab integration.
 * @public
 */
export interface GitLabDetails {
  /**
   * The HTTPS base URL of the GitLab instance.
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * Whether the integration targets a group or a single project.
   * @public
   */
  targetType: GitLabTargetType | undefined;

  /**
   * The group or project path the integration targets.
   * @public
   */
  targetPath: string | undefined;

  /**
   * How the integration's access token is rotated. AUTOMATIC only when the
   * pasted token had the self-rotate scope and rotation was opted in at
   * installation time.
   * @public
   */
  tokenRotation: GitLabTokenRotation | undefined;

  /**
   * The expiry of the stored access token, for non-rotating tokens only. A
   * rotated token's original expiry is stale, so this is omitted when
   * tokenRotation is AUTOMATIC.
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * Public details for a customer-managed S3 integration. The sensitive external ID is intentionally omitted.
 * @public
 */
export interface S3Details {
  /**
   * Customer-managed S3 bucket name.
   * @public
   */
  bucket: string | undefined;

  /**
   * IAM role assumed by Continuum to read a customer-managed S3 integration.
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Provider-specific details for an integration. Only one member will be present.
 * @public
 */
export type ProviderDetails =
  | ProviderDetails.GithubMember
  | ProviderDetails.GitlabMember
  | ProviderDetails.S3Member
  | ProviderDetails.$UnknownMember;

/**
 * @public
 */
export namespace ProviderDetails {
  /**
   * Details for a GitHub.com integration.
   * @public
   */
  export interface GithubMember {
    github: GitHubDetails;
    gitlab?: never;
    s3?: never;
    $unknown?: never;
  }

  /**
   * Details for a GitLab integration.
   * @public
   */
  export interface GitlabMember {
    github?: never;
    gitlab: GitLabDetails;
    s3?: never;
    $unknown?: never;
  }

  /**
   * Public details for a customer-managed S3 integration.
   * @public
   */
  export interface S3Member {
    github?: never;
    gitlab?: never;
    s3: S3Details;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    gitlab?: never;
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubDetails) => T;
    gitlab: (value: GitLabDetails) => T;
    s3: (value: S3Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains metadata for the requested integration.
 * @public
 */
export interface GetIntegrationOutput {
  /**
   * The unique identifier of the integration.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The ARN of the integration.
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The name of the integration.
   * @public
   */
  name: string | undefined;

  /**
   * The immutable provider type for the integration.
   * @public
   */
  integrationType: IntegrationType | undefined;

  /**
   * Provider-specific details for the integration.
   * @public
   */
  providerDetails: ProviderDetails | undefined;

  /**
   * The timestamp when the integration was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the integration was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Specifies pagination parameters for listing integrations.
 * @public
 */
export interface ListIntegrationsInput {
  /**
   * The maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token returned by a previous call.
   * Set to null for the first request; use the returned token for subsequent calls.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of an integration returned in list responses.
 * @public
 */
export interface IntegrationSummary {
  /**
   * The unique identifier of the integration.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The ARN of the integration.
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The name of the integration.
   * @public
   */
  name: string | undefined;

  /**
   * The immutable provider type for the integration.
   * @public
   */
  integrationType: IntegrationType | undefined;

  /**
   * Provider-specific details for the integration.
   * @public
   */
  providerDetails: ProviderDetails | undefined;

  /**
   * The timestamp when the integration was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the integration was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains the list of integration summaries and an optional pagination token.
 * @public
 */
export interface ListIntegrationsOutput {
  /**
   * The integrations in the account, ordered by integrationId descending.
   * @public
   */
  items: IntegrationSummary[] | undefined;

  /**
   * A pagination token to retrieve the next page of results.
   * Absent when there are no more results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Replacement credentials for a customer-managed S3 integration. The bucket cannot be changed.
 * @public
 */
export interface UpdateS3Configuration {
  /**
   * The role to use. Supply the current role when rotating only the external ID.
   * The caller must be allowed to pass this exact role to Continuum.
   * @public
   */
  roleArn: string | undefined;

  /**
   * The replacement external ID used when assuming the supplied role.
   * If omitted, the existing external ID is preserved. This value is sensitive
   * and is never included in the public integration response.
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Provider-specific changes for updating an integration.
 * Only S3 integrations can be updated, so S3 is the only member.
 * @public
 */
export type UpdateProviderConfiguration =
  | UpdateProviderConfiguration.S3Member
  | UpdateProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace UpdateProviderConfiguration {
  /**
   * Replacement credentials for a customer-managed S3 integration.
   * @public
   */
  export interface S3Member {
    s3: UpdateS3Configuration;
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
    s3: (value: UpdateS3Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the S3 integration and the credentials to validate and save.
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * The unique identifier of the S3 integration to update.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The provider-specific changes to apply. The member must match the
   * integration's provider type, and only S3 integrations can be updated.
   * @public
   */
  providerConfiguration: UpdateProviderConfiguration | undefined;
}

/**
 * Contains the current state of the updated S3 integration. The sensitive external ID is omitted.
 * @public
 */
export interface UpdateIntegrationOutput {
  /**
   * The unique identifier for an Integration resource.
   * @public
   */
  integrationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Integration resource,
   * of the form arn:\{partition\}:continuum:\{region\}:\{account\}:integrations/\{integrationId\}.
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The name for an integration.
   * @public
   */
  name: string | undefined;

  /**
   * The immutable provider type for an integration.
   * @public
   */
  integrationType: IntegrationType | undefined;

  /**
   * Provider-specific details for an integration. Only one member will be present.
   * @public
   */
  providerDetails: ProviderDetails | undefined;

  /**
   * When the integration was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * When the integration was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Specifies the resource and its new policy.
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * The ARN of a resource in the caller's account.
   * @public
   */
  arn: string | undefined;

  /**
   * Omit or supply an empty Statement array to clear resource-policy grants and
   * store the canonical empty-statement policy. Cross-account access is denied;
   * same-account access remains subject to identity policies. Use an explicit
   * Deny statement to deny same-account principals too.
   * @public
   */
  policy?: string | undefined;

  /**
   * Optional optimistic-concurrency token for the currently observed policy.
   * @public
   */
  expectedRevisionId?: string | undefined;
}

/**
 * Contains the stored resource policy.
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * The ARN of a Continuum resource that supports a resource policy. Collectors
   * are the only supported resource type; other well-formed Continuum ARNs are
   * rejected with ValidationException.
   * @public
   */
  arn: string | undefined;

  /**
   * A resource policy in displayable JSON form.
   * @public
   */
  policy: string | undefined;

  /**
   * Opaque optimistic-concurrency token for a resource policy.
   * @public
   */
  revisionId: string | undefined;
}

/**
 * Specifies the provider to authorize and, optionally, the name the new integration will use.
 * @public
 */
export interface StartIntegrationAuthorizationInput {
  /**
   * The provider to authorize. Only GITHUB is supported.
   * @public
   */
  providerType: IntegrationAuthorizationProviderType | undefined;

  /**
   * The name the integration will be created with. When specified, the request
   * fails with ConflictException if an integration with this name already exists
   * in the account, before the caller leaves for the provider. The name is only
   * checked: it is not reserved, stored, or authorized. CreateIntegration requires
   * its own name, checks it again, and may use a different one.
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains the values to send to the provider's authorization endpoint.
 * @public
 */
export interface StartIntegrationAuthorizationOutput {
  /**
   * An opaque value to send as the OAuth `state` parameter. Pass the value the
   * provider returns in its callback to CreateIntegration as `authorization.state`.
   * @public
   */
  state: string | undefined;

  /**
   * The PKCE code challenge to send as the OAuth `code_challenge` parameter.
   * @public
   */
  codeChallenge: string | undefined;

  /**
   * The PKCE challenge method to send as the OAuth `code_challenge_method` parameter.
   * @public
   */
  codeChallengeMethod: OAuthCodeChallengeMethod | undefined;

  /**
   * The time after which CreateIntegration no longer accepts this authorization.
   * @public
   */
  expiresAt: Date | undefined;
}
