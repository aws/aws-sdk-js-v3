// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ArtifactHttpMethod = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type ArtifactHttpMethod = (typeof ArtifactHttpMethod)[keyof typeof ArtifactHttpMethod];

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  /**
   * The environment is fully operational and Continuum is actively scanning.
   */
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * @public
 * @enum
 */
export const PatchCreationPolicy = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PatchCreationPolicy = (typeof PatchCreationPolicy)[keyof typeof PatchCreationPolicy];

/**
 * @public
 * @enum
 */
export const ScanFailureStage = {
  /**
   * The build itself failed, so no trustworthy source exists to analyze.
   */
  BUILDING: "BUILDING",
  /**
   * Analysis of the built source failed.
   */
  SCANNING: "SCANNING",
  /**
   * The scan's build was never accepted for execution.
   */
  SUBMITTED: "SUBMITTED",
  /**
   * Failed while the build was waiting for capacity.
   */
  WAITING_FOR_BUILD: "WAITING_FOR_BUILD",
  /**
   * The build succeeded, but the scan's execution inputs could not be
   * prepared from it.
   */
  WAITING_FOR_SCAN: "WAITING_FOR_SCAN",
} as const;
/**
 * @public
 */
export type ScanFailureStage = (typeof ScanFailureStage)[keyof typeof ScanFailureStage];

/**
 * @public
 * @enum
 */
export const ScanOrigin = {
  /**
   * A customer explicitly requested the scan.
   */
  MANUAL: "MANUAL",
  /**
   * Continuum created the scan from a schedule or during environment bootstrap.
   */
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type ScanOrigin = (typeof ScanOrigin)[keyof typeof ScanOrigin];

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  /**
   * The scan's build is running.
   */
  BUILDING: "BUILDING",
  /**
   * The scan completed unsuccessfully. `failureStage` reports the phase it
   * failed in.
   */
  FAILED: "FAILED",
  /**
   * Continuum is analyzing the built source.
   */
  SCANNING: "SCANNING",
  /**
   * Continuum accepted the scan request. Its build has not started yet.
   */
  SUBMITTED: "SUBMITTED",
  /**
   * The scan completed successfully.
   */
  SUCCEEDED: "SUCCEEDED",
  /**
   * The scan's build is waiting for capacity to run.
   */
  WAITING_FOR_BUILD: "WAITING_FOR_BUILD",
  /**
   * The build finished and the scan is waiting for capacity to analyze it.
   */
  WAITING_FOR_SCAN: "WAITING_FOR_SCAN",
} as const;
/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  /**
   * The finding has been confirmed as real and actionable.
   */
  CONFIRMED: "CONFIRMED",
  /**
   * The finding is not actionable (false positive, not applicable, or customer-discarded).
   */
  DISCARDED: "DISCARDED",
  /**
   * The finding has been submitted and is queued for processing.
   */
  SUBMITTED: "SUBMITTED",
  /**
   * Continuum is actively checking exploitability.
   */
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const FindingDiscardReason = {
  /**
   * The weakness is real, but an existing control in the environment makes
   * it non-actionable in practice.
   */
  COMPENSATING_CONTROL_PRESENT: "COMPENSATING_CONTROL_PRESENT",
  /**
   * The finding matches an issue that was already reviewed and closed.
   * `duplicateOfIssueId` names that issue.
   */
  DUPLICATE_OF_CLOSED_ISSUE: "DUPLICATE_OF_CLOSED_ISSUE",
  /**
   * The finding describes the same problem as an already-open issue and was
   * folded into it. `duplicateOfIssueId` names that issue.
   */
  DUPLICATE_OF_OPEN_ISSUE: "DUPLICATE_OF_OPEN_ISSUE",
  /**
   * After deeper analysis against the environment's context, Continuum
   * concluded the finding is not a real, exploitable issue here.
   */
  FALSE_POSITIVE_VALIDATED_AGAINST_CONTEXT: "FALSE_POSITIVE_VALIDATED_AGAINST_CONTEXT",
  /**
   * Continuum could not confidently judge the finding; a re-scan is
   * recommended.
   */
  INSUFFICIENT_EVIDENCE: "INSUFFICIENT_EVIDENCE",
  /**
   * Real, but not in the assets Continuum is responsible for.
   */
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
  /**
   * Continuum could not complete processing for this finding.
   */
  PROCESSING_FAILED: "PROCESSING_FAILED",
  /**
   * The validator could not reach a confident verdict at ingestion, so the
   * finding was set aside rather than escalated.
   */
  SCANNER_NEEDS_REVIEW: "SCANNER_NEEDS_REVIEW",
  /**
   * Continuum's validator determined at ingestion that the reported
   * behavior is not actually present.
   */
  SCANNER_VALIDATED_FALSE_POSITIVE: "SCANNER_VALIDATED_FALSE_POSITIVE",
  /**
   * The finding's file path does not belong to any repository in the
   * environment's latest successful build, so Continuum cannot tie it to
   * source code. Configure the repository as an environment source, then
   * submit the finding again.
   */
  SOURCE_REPO_NOT_FOUND: "SOURCE_REPO_NOT_FOUND",
} as const;
/**
 * @public
 */
export type FindingDiscardReason = (typeof FindingDiscardReason)[keyof typeof FindingDiscardReason];

/**
 * @public
 * @enum
 */
export const FindingOcsfClass = {
  /**
   * OCSF class_uid 2007. Findings of this class populate `posture`.
   */
  APPLICATION_SECURITY_POSTURE_FINDING: "APPLICATION_SECURITY_POSTURE_FINDING",
  /**
   * OCSF class_uid 2002.
   */
  VULNERABILITY_FINDING: "VULNERABILITY_FINDING",
} as const;
/**
 * @public
 */
export type FindingOcsfClass = (typeof FindingOcsfClass)[keyof typeof FindingOcsfClass];

/**
 * @public
 * @enum
 */
export const FindingSeverityId = {
  CRITICAL: "CRITICAL",
  FATAL: "FATAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OTHER: "OTHER",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type FindingSeverityId = (typeof FindingSeverityId)[keyof typeof FindingSeverityId];

/**
 * @public
 * @enum
 */
export const FindingType = {
  /**
   * Continuum's own scanner found a source-code vulnerability.
   */
  CONTINUUM_CODE_VULN: "CONTINUUM_CODE_VULN",
  /**
   * A customer or customer integration supplied the finding as an OCSF
   * document (class_uid 2002 or 2007), normalized into Continuum's shape at
   * ingestion. Continuum retains the verbatim document.
   */
  CUSTOMER_CODE_VULN: "CUSTOMER_CODE_VULN",
} as const;
/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 * @enum
 */
export const FindingBlockingReason = {
  /**
   * In an excluded location (test code, dead code).
   */
  EXCLUDED: "EXCLUDED",
  /**
   * The vulnerability category is wrong.
   */
  MISCLASSIFIED: "MISCLASSIFIED",
  /**
   * No blocking reason.
   */
  NONE: "NONE",
  /**
   * Exploitation is not feasible.
   */
  NOT_FEASIBLE: "NOT_FEASIBLE",
  /**
   * A mitigating control is already in place.
   */
  PROTECTED: "PROTECTED",
  /**
   * Real, but compensating controls cap the risk. Accompanies
   * BENIGN_TRUE_POSITIVE.
   */
  RISK_MITIGATED: "RISK_MITIGATED",
  /**
   * The code path is not reachable.
   */
  UNREACHABLE: "UNREACHABLE",
} as const;
/**
 * @public
 */
export type FindingBlockingReason = (typeof FindingBlockingReason)[keyof typeof FindingBlockingReason];

/**
 * @public
 * @enum
 */
export const FindingSeverityAdjustment = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNCHANGED: "UNCHANGED",
} as const;
/**
 * @public
 */
export type FindingSeverityAdjustment = (typeof FindingSeverityAdjustment)[keyof typeof FindingSeverityAdjustment];

/**
 * @public
 * @enum
 */
export const FindingVerdict = {
  /**
   * Real, but compensating controls cap the risk.
   */
  BENIGN_TRUE_POSITIVE: "BENIGN_TRUE_POSITIVE",
  /**
   * Not real -- the reported behavior is not present.
   */
  FALSE_POSITIVE: "FALSE_POSITIVE",
  /**
   * The validator could not reach a confident verdict.
   */
  NEEDS_REVIEW: "NEEDS_REVIEW",
  /**
   * Real and actionable.
   */
  TRUE_POSITIVE: "TRUE_POSITIVE",
} as const;
/**
 * @public
 */
export type FindingVerdict = (typeof FindingVerdict)[keyof typeof FindingVerdict];

/**
 * @public
 * @enum
 */
export const IssueEvidenceAvailability = {
  AVAILABLE: "AVAILABLE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type IssueEvidenceAvailability = (typeof IssueEvidenceAvailability)[keyof typeof IssueEvidenceAvailability];

/**
 * @public
 * @enum
 */
export const DeliveryReason = {
  ARTIFACT_READ_FAILED: "ARTIFACT_READ_FAILED",
  ARTIFACT_SOURCE_MISMATCH: "ARTIFACT_SOURCE_MISMATCH",
  ARTIFACT_SOURCE_MISSING: "ARTIFACT_SOURCE_MISSING",
  BUILD_NOT_FOUND: "BUILD_NOT_FOUND",
  BUILD_READ_FAILED: "BUILD_READ_FAILED",
  BUILD_RESULT_SCOPE_MISMATCH: "BUILD_RESULT_SCOPE_MISMATCH",
  DELIVERY_NOT_CONFIGURED: "DELIVERY_NOT_CONFIGURED",
  DELIVERY_SOURCE_KIND_CHANGED: "DELIVERY_SOURCE_KIND_CHANGED",
  DUPLICATE_LOGICAL_REPOSITORY: "DUPLICATE_LOGICAL_REPOSITORY",
  DUPLICATE_OR_INVALID_REPOSITORY: "DUPLICATE_OR_INVALID_REPOSITORY",
  ENVIRONMENT_DELETED: "ENVIRONMENT_DELETED",
  ENVIRONMENT_NOT_ACTIVE: "ENVIRONMENT_NOT_ACTIVE",
  ENVIRONMENT_NOT_FOUND: "ENVIRONMENT_NOT_FOUND",
  ENVIRONMENT_READ_FAILED: "ENVIRONMENT_READ_FAILED",
  EXPORT_CREDENTIALS_MISSING: "EXPORT_CREDENTIALS_MISSING",
  EXPORT_CREDENTIAL_EXPIRY_INVALID: "EXPORT_CREDENTIAL_EXPIRY_INVALID",
  EXPORT_DESTINATION_INVALID: "EXPORT_DESTINATION_INVALID",
  EXPORT_EXISTING_OBJECT_MISMATCH: "EXPORT_EXISTING_OBJECT_MISMATCH",
  EXPORT_PUT_FAILED: "EXPORT_PUT_FAILED",
  EXPORT_RECONCILIATION_READ_FAILED: "EXPORT_RECONCILIATION_READ_FAILED",
  EXPORT_ROLE_ASSUMPTION_FAILED: "EXPORT_ROLE_ASSUMPTION_FAILED",
  GITHUB_ACCESS_DENIED: "GITHUB_ACCESS_DENIED",
  /**
   * The pinned Build commit or one of its trees is no longer readable.
   */
  GITHUB_BASE_NOT_FOUND: "GITHUB_BASE_NOT_FOUND",
  /**
   * The deterministic delivery branch or its pull request names different content.
   */
  GITHUB_BRANCH_CONFLICT: "GITHUB_BRANCH_CONFLICT",
  GITHUB_DESTINATION_NOT_ENABLED: "github_destination_not_enabled",
  GITHUB_NOT_FOUND: "GITHUB_NOT_FOUND",
  GITHUB_RATE_LIMITED: "GITHUB_RATE_LIMITED",
  GITHUB_REPOSITORY_CHANGED: "GITHUB_REPOSITORY_CHANGED",
  GITHUB_REPOSITORY_NOT_FOUND: "GITHUB_REPOSITORY_NOT_FOUND",
  GITHUB_REQUEST_FAILED: "GITHUB_REQUEST_FAILED",
  GITHUB_REQUEST_REJECTED: "GITHUB_REQUEST_REJECTED",
  GITHUB_RESPONSE_INVALID: "GITHUB_RESPONSE_INVALID",
  /**
   * The GREEN attempt that staged the patch ended without PatchDelivered, or a later attempt superseded it.
   */
  GREEN_ATTEMPT_NOT_SUCCESSFUL: "GREEN_ATTEMPT_NOT_SUCCESSFUL",
  /**
   * The staging GREEN attempt never completed within the delivery wait bound.
   */
  GREEN_COMPLETION_NOT_OBSERVED: "GREEN_COMPLETION_NOT_OBSERVED",
  INCOMPLETE_SOURCE_REFERENCE: "INCOMPLETE_SOURCE_REFERENCE",
  INVALID_ARCHIVE_DIGEST: "INVALID_ARCHIVE_DIGEST",
  INVALID_ARTIFACT_SOURCE: "INVALID_ARTIFACT_SOURCE",
  INVALID_COMPLETED_MANIFEST: "INVALID_COMPLETED_MANIFEST",
  INVALID_EXPORT_RECEIPT: "INVALID_EXPORT_RECEIPT",
  INVALID_GITHUB_PROVENANCE: "INVALID_GITHUB_PROVENANCE",
  INVALID_S3_DESTINATION: "INVALID_S3_DESTINATION",
  INVALID_SERVICE_RECEIPT: "INVALID_SERVICE_RECEIPT",
  INVALID_SOURCE_INVENTORY: "INVALID_SOURCE_INVENTORY",
  INVALID_SOURCE_MANIFEST: "INVALID_SOURCE_MANIFEST",
  INVALID_SOURCE_REFERENCE: "INVALID_SOURCE_REFERENCE",
  ISSUE_INTEGRITY_FAILURE: "ISSUE_INTEGRITY_FAILURE",
  ISSUE_NOT_FOUND: "ISSUE_NOT_FOUND",
  MANIFEST_INVENTORY_MISMATCH: "MANIFEST_INVENTORY_MISMATCH",
  MANIFEST_PROVENANCE_CHANGED: "MANIFEST_PROVENANCE_CHANGED",
  MANIFEST_REPOSITORY_SET_MISMATCH: "MANIFEST_REPOSITORY_SET_MISMATCH",
  MANIFEST_SCOPE_OR_VERSION_MISMATCH: "MANIFEST_SCOPE_OR_VERSION_MISMATCH",
  MISSING_BUILD_RESULT: "MISSING_BUILD_RESULT",
  MISSING_COMPLETED_MANIFEST: "MISSING_COMPLETED_MANIFEST",
  MISSING_RESULT_DIGEST: "MISSING_RESULT_DIGEST",
  MISSING_SOURCE_MANIFEST: "MISSING_SOURCE_MANIFEST",
  MISSING_SOURCE_TARGET: "MISSING_SOURCE_TARGET",
  PATCH_CREATION_POLICY_DISABLED: "patch_creation_policy_disabled",
  /**
   * A hunk does not match the exact pinned file bytes it was generated against.
   */
  PATCH_NOT_APPLICABLE: "PATCH_NOT_APPLICABLE",
  /**
   * The GREEN attempt completed with PATCH_STAGED and did not select this patch.
   */
  PATCH_NOT_SELECTED: "PATCH_NOT_SELECTED",
  PATCH_STORAGE_IDENTITY_MISSING: "PATCH_STORAGE_IDENTITY_MISSING",
  /**
   * Rename, mode change, binary content, workflow file or unsafe path.
   */
  PATCH_UNSUPPORTED: "PATCH_UNSUPPORTED",
  PUBLICATION_OUTCOME_UNKNOWN_AFTER_RETRY_LIMIT: "PUBLICATION_OUTCOME_UNKNOWN_AFTER_RETRY_LIMIT",
  PUBLISHER_DEADLINE_EXCEEDED: "PUBLISHER_DEADLINE_EXCEEDED",
  RESULT_COMPLETED_MANIFEST_MISMATCH: "RESULT_COMPLETED_MANIFEST_MISMATCH",
  RESULT_SOURCE_BINDING_MISMATCH: "RESULT_SOURCE_BINDING_MISMATCH",
  S3_ACCESS_DENIED: "S3_ACCESS_DENIED",
  S3_SOURCE_PREFIX_OVERLAP: "S3_SOURCE_PREFIX_OVERLAP",
  SERVICE_COPY_DIGEST_MISMATCH: "SERVICE_COPY_DIGEST_MISMATCH",
  SERVICE_OBJECT_READ_FAILED: "SERVICE_OBJECT_READ_FAILED",
  SERVICE_OBJECT_TOO_LARGE: "SERVICE_OBJECT_TOO_LARGE",
  SERVICE_RECEIPT_OUTSIDE_ISSUE: "SERVICE_RECEIPT_OUTSIDE_ISSUE",
  SOURCE_INTEGRATION_CHANGED: "SOURCE_INTEGRATION_CHANGED",
  SOURCE_INTEGRATION_INVALID: "SOURCE_INTEGRATION_INVALID",
  SOURCE_INTEGRATION_READ_FAILED: "SOURCE_INTEGRATION_READ_FAILED",
  SOURCE_INTEGRATION_UNRESOLVED: "SOURCE_INTEGRATION_UNRESOLVED",
  SOURCE_OBJECT_DIGEST_MISMATCH: "SOURCE_OBJECT_DIGEST_MISMATCH",
  SOURCE_REFERENCE_OUTSIDE_BUILD: "SOURCE_REFERENCE_OUTSIDE_BUILD",
  SOURCE_TARGET_BUILD_MISMATCH: "SOURCE_TARGET_BUILD_MISMATCH",
  UNKNOWN_REPOSITORY: "UNKNOWN_REPOSITORY",
  UNKNOWN_SOURCE_PROVIDER: "UNKNOWN_SOURCE_PROVIDER",
  UNSUPPORTED_ENVIRONMENT_SCHEMA: "UNSUPPORTED_ENVIRONMENT_SCHEMA",
} as const;
/**
 * @public
 */
export type DeliveryReason = (typeof DeliveryReason)[keyof typeof DeliveryReason];

/**
 * @public
 * @enum
 */
export const IssuePatchDeliveryStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type IssuePatchDeliveryStatus = (typeof IssuePatchDeliveryStatus)[keyof typeof IssuePatchDeliveryStatus];

/**
 * @public
 * @enum
 */
export const IssuePhase = {
  /**
   * Continuum is assigning the issue's severity.
   */
  PRIORITIZATION: "PRIORITIZATION",
  /**
   * Continuum is preparing a fix for the issue.
   */
  REMEDIATION: "REMEDIATION",
  /**
   * Continuum is confirming the issue is real and exploitable.
   */
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type IssuePhase = (typeof IssuePhase)[keyof typeof IssuePhase];

/**
 * @public
 * @enum
 */
export const IssueSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type IssueSeverity = (typeof IssueSeverity)[keyof typeof IssueSeverity];

/**
 * @public
 * @enum
 */
export const IssueStatus = {
  /**
   * Continuum finished its workflow for the issue.
   */
  COMPLETED: "COMPLETED",
  /**
   * Accepted; Continuum has not started working on the issue yet.
   */
  CREATED: "CREATED",
  /**
   * Continuum stopped working on the issue without finishing. `statusReason`
   * and `statusMessage` explain why; `phase`, when present, names the part of
   * the workflow that failed.
   */
  FAILED: "FAILED",
  /**
   * Continuum is working on the issue. `phase` names the current part of the
   * workflow.
   */
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus];

/**
 * @public
 * @enum
 */
export const IssueStatusReason = {
  /**
   * Continuum hit an internal error it could not recover from.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * Continuum could not produce a fix for the issue.
   */
  REMEDIATION_FAILED: "REMEDIATION_FAILED",
} as const;
/**
 * @public
 */
export type IssueStatusReason = (typeof IssueStatusReason)[keyof typeof IssueStatusReason];

/**
 * @public
 * @enum
 */
export const IssueArtifactType = {
  AGENT_COMMUNICATION: "AGENT_COMMUNICATION",
  DECISION: "DECISION",
  EVIDENCE: "EVIDENCE",
  PATCH: "PATCH",
  REMEDIATION_PROPOSAL: "REMEDIATION_PROPOSAL",
  VALIDATION_EVIDENCE: "VALIDATION_EVIDENCE",
} as const;
/**
 * @public
 */
export type IssueArtifactType = (typeof IssueArtifactType)[keyof typeof IssueArtifactType];

/**
 * @public
 * @enum
 */
export const DeliveryStatus = {
  /**
   * Retry budget exhausted after a retryable failure; no automatic retry remains.
   */
  ABANDONED: "ABANDONED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus];

/**
 * @public
 * @enum
 */
export const PatchFormat = {
  /**
   * A git diff carrying binary deltas. Applied with `git apply`.
   */
  GIT_BINARY_DIFF: "GIT_BINARY_DIFF",
  /**
   * A text git diff, as produced by `git diff`, with no mailbox header and
   * no binary deltas. Applied with `git apply`.
   */
  GIT_DIFF: "GIT_DIFF",
  /**
   * A git mailbox patch, as produced by `git format-patch`. Applied with
   * `git am`.
   */
  GIT_MAILBOX_PATCH: "GIT_MAILBOX_PATCH",
} as const;
/**
 * @public
 */
export type PatchFormat = (typeof PatchFormat)[keyof typeof PatchFormat];

/**
 * @public
 * @enum
 */
export const SignalBand = {
  HIGH: "HIGH",
  LOW: "LOW",
  MODERATE: "MODERATE",
  VERY_LOW: "VERY_LOW",
} as const;
/**
 * @public
 */
export type SignalBand = (typeof SignalBand)[keyof typeof SignalBand];

/**
 * @public
 * @enum
 */
export const SignalDimension = {
  BLAST_RADIUS: "BLAST_RADIUS",
  CODE_CONTEXT: "CODE_CONTEXT",
  EXPLOITABILITY: "EXPLOITABILITY",
  IMPACT_ASSESSMENT: "IMPACT_ASSESSMENT",
  LIKELIHOOD_ASSESSMENT: "LIKELIHOOD_ASSESSMENT",
  NETWORK_EXPOSURE: "NETWORK_EXPOSURE",
  PRECONDITION: "PRECONDITION",
} as const;
/**
 * @public
 */
export type SignalDimension = (typeof SignalDimension)[keyof typeof SignalDimension];

/**
 * @public
 * @enum
 */
export const ValidationConfidenceTier = {
  /**
   * Proven against a build of the customer's code.
   */
  BUILD_PROVEN: "BUILD_PROVEN",
  /**
   * Proven against a running target. The strongest tier.
   */
  RUNTIME_PROVEN: "RUNTIME_PROVEN",
  /**
   * Concluded from reading source only; nothing was executed.
   */
  SOURCE_READ: "SOURCE_READ",
  /**
   * Proven by static analysis.
   */
  STATIC_PROVEN: "STATIC_PROVEN",
} as const;
/**
 * @public
 */
export type ValidationConfidenceTier = (typeof ValidationConfidenceTier)[keyof typeof ValidationConfidenceTier];

/**
 * @public
 * @enum
 */
export const ExploitabilityVerdict = {
  EXPLOITABLE: "EXPLOITABLE",
  NOT_EXPLOITABLE: "NOT_EXPLOITABLE",
  UNCERTAIN: "UNCERTAIN",
} as const;
/**
 * @public
 */
export type ExploitabilityVerdict = (typeof ExploitabilityVerdict)[keyof typeof ExploitabilityVerdict];

/**
 * @public
 * @enum
 */
export const SignalBasis = {
  /**
   * Read directly from the customer's source code.
   */
  CODE: "CODE",
  /**
   * Stated explicitly by the originating finding.
   */
  FINDING: "FINDING",
  /**
   * Stated by a claim or node attribute in the environment's context graph.
   */
  GRAPH: "GRAPH",
  /**
   * Reasoned from indirect evidence, such as context clues, several sources
   * read together, or known behavior of the framework involved. No single
   * source states the value, but the producer had grounds for it.
   */
  INFERRED: "INFERRED",
  /**
   * No evidence either way, so the producer used a default value. The
   * weakest basis: read the value as a default, not as something established
   * about the customer's system, and check it first.
   */
  NO_EVIDENCE_DEFAULT: "NO_EVIDENCE_DEFAULT",
} as const;
/**
 * @public
 */
export type SignalBasis = (typeof SignalBasis)[keyof typeof SignalBasis];

/**
 * @public
 * @enum
 */
export const SignalAttackerGains = {
  /**
   * Arbitrary code execution.
   */
  EXECUTE: "EXECUTE",
  /**
   * Modification with no security consequence.
   */
  MODIFY_COSMETIC: "MODIFY_COSMETIC",
  /**
   * Modification of business data.
   */
  MODIFY_DATA: "MODIFY_DATA",
  /**
   * Modification of data that governs privilege.
   */
  MODIFY_PRIVILEGED: "MODIFY_PRIVILEGED",
  /**
   * Neither read nor modification.
   */
  NEITHER: "NEITHER",
  /**
   * Read access only.
   */
  READ: "READ",
} as const;
/**
 * @public
 */
export type SignalAttackerGains = (typeof SignalAttackerGains)[keyof typeof SignalAttackerGains];

/**
 * @public
 * @enum
 */
export const SignalBlastRadius = {
  /**
   * Beyond this tenant.
   */
  CROSS_TENANT: "CROSS_TENANT",
  /**
   * Other users within this tenant.
   */
  OTHER_USERS_IN_TENANT: "OTHER_USERS_IN_TENANT",
  /**
   * Only the attacker's own scope.
   */
  OWN_SCOPE: "OWN_SCOPE",
} as const;
/**
 * @public
 */
export type SignalBlastRadius = (typeof SignalBlastRadius)[keyof typeof SignalBlastRadius];

/**
 * @public
 * @enum
 */
export const SignalTargetValue = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type SignalTargetValue = (typeof SignalTargetValue)[keyof typeof SignalTargetValue];

/**
 * @public
 * @enum
 */
export const SignalAccessLevel = {
  /**
   * Any ordinary organisational credential.
   */
  ANY_AUTHENTICATED: "ANY_AUTHENTICATED",
  /**
   * No authentication: an unauthenticated entry point.
   */
  NONE: "NONE",
  /**
   * A privileged credential.
   */
  PRIVILEGED: "PRIVILEGED",
} as const;
/**
 * @public
 */
export type SignalAccessLevel = (typeof SignalAccessLevel)[keyof typeof SignalAccessLevel];

/**
 * @public
 * @enum
 */
export const SignalStrength = {
  MODERATE: "MODERATE",
  NONE: "NONE",
  STRONG: "STRONG",
  WEAK: "WEAK",
} as const;
/**
 * @public
 */
export type SignalStrength = (typeof SignalStrength)[keyof typeof SignalStrength];

/**
 * @public
 * @enum
 */
export const ExploitEffect = {
  BEHAVIOR_CHANGED: "BEHAVIOR_CHANGED",
  DATA_LEAKED: "DATA_LEAKED",
  ERROR_REVEALED: "ERROR_REVEALED",
  NO_EFFECT: "NO_EFFECT",
} as const;
/**
 * @public
 */
export type ExploitEffect = (typeof ExploitEffect)[keyof typeof ExploitEffect];

/**
 * @public
 * @enum
 */
export const FlowVerdictValue = {
  CONFIRMED: "CONFIRMED",
  DENIED: "DENIED",
  INCONCLUSIVE: "INCONCLUSIVE",
} as const;
/**
 * @public
 */
export type FlowVerdictValue = (typeof FlowVerdictValue)[keyof typeof FlowVerdictValue];

/**
 * @public
 * @enum
 */
export const ValidationTerminalStatus = {
  /**
   * The run finished and assessed every layer it attempted.
   */
  COMPLETED: "COMPLETED",
  /**
   * The run did not finish.
   */
  FAILED: "FAILED",
  /**
   * The run finished without testing anything, because the environment
   * exposed no source substrate to assess. Distinct from `COMPLETED`: a
   * reader has to be able to tell "assessed and concluded" from "had nothing
   * to assess", and this is the single most common outcome in practice.
   */
  NO_SOURCE_AVAILABLE: "NO_SOURCE_AVAILABLE",
  /**
   * The run finished but assessed only some of what it set out to. The
   * evidence present is sound; it is not the whole intended assessment.
   */
  PARTIAL: "PARTIAL",
} as const;
/**
 * @public
 */
export type ValidationTerminalStatus = (typeof ValidationTerminalStatus)[keyof typeof ValidationTerminalStatus];

/**
 * @public
 * @enum
 */
export const CollectorType = {
  /**
   * Collect AWS resource configuration.
   */
  AWS_COLLECTOR: "AWS_COLLECTOR",
} as const;
/**
 * @public
 */
export type CollectorType = (typeof CollectorType)[keyof typeof CollectorType];

/**
 * @public
 * @enum
 */
export const CollectorStatus = {
  /**
   * The Collector is available for reads, updates, and associations.
   */
  ACTIVE: "ACTIVE",
  /**
   * Deletion has started. New Collectors for the same account and Region
   * remain blocked until cleanup completes and the record is removed.
   */
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type CollectorStatus = (typeof CollectorStatus)[keyof typeof CollectorStatus];

/**
 * @public
 * @enum
 */
export const GitLabTargetType = {
  GROUP: "GROUP",
  PROJECT: "PROJECT",
} as const;
/**
 * @public
 */
export type GitLabTargetType = (typeof GitLabTargetType)[keyof typeof GitLabTargetType];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  GITHUB: "GITHUB",
  GITLAB: "GITLAB",
  S3: "S3",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const GitLabTokenRotation = {
  /**
   * Continuum rotates the token before it expires.
   */
  AUTOMATIC: "AUTOMATIC",
  /**
   * The token is not rotated and stops working at its expiry.
   */
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GitLabTokenRotation = (typeof GitLabTokenRotation)[keyof typeof GitLabTokenRotation];

/**
 * @public
 * @enum
 */
export const IntegrationAuthorizationProviderType = {
  /**
   * GitHub.com. The authorization code is exchanged by a GitHub CreateIntegration.
   */
  GITHUB: "GITHUB",
} as const;
/**
 * @public
 */
export type IntegrationAuthorizationProviderType =
  (typeof IntegrationAuthorizationProviderType)[keyof typeof IntegrationAuthorizationProviderType];

/**
 * @public
 * @enum
 */
export const OAuthCodeChallengeMethod = {
  /**
   * The challenge is BASE64URL(SHA256(code verifier)), without padding.
   */
  S256: "S256",
} as const;
/**
 * @public
 */
export type OAuthCodeChallengeMethod = (typeof OAuthCodeChallengeMethod)[keyof typeof OAuthCodeChallengeMethod];
