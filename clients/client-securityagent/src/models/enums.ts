// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessType = {
  /**
   * Resource is private and has restricted access.
   */
  PRIVATE: "PRIVATE",
  /**
   * Resource is public and openly accessible.
   */
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const AuthenticationProviderType = {
  /**
   * Authentication using an AWS IAM role.
   */
  AWS_IAM_ROLE: "AWS_IAM_ROLE",
  /**
   * Internal AWS authentication.
   */
  AWS_INTERNAL: "AWS_INTERNAL",
  /**
   * Credentials retrieved via AWS Lambda function.
   */
  AWS_LAMBDA: "AWS_LAMBDA",
  /**
   * Credentials stored in AWS Secrets Manager.
   */
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;
/**
 * @public
 */
export type AuthenticationProviderType = (typeof AuthenticationProviderType)[keyof typeof AuthenticationProviderType];

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  DOC: "DOC",
  DOCX: "DOCX",
  JPEG: "JPEG",
  JSON: "JSON",
  MD: "MD",
  PDF: "PDF",
  PNG: "PNG",
  TXT: "TXT",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * @public
 * @enum
 */
export const TriggerEvent = {
  /**
   * A draft pull request is opened or updated.
   */
  PULL_REQUEST_DRAFT: "PULL_REQUEST_DRAFT",
  /**
   * A label is added to a pull request. A filter group that selects this event must include a `LABEL` filter with the `INCLUDE` match mode, and a review starts only when the added label matches it.
   */
  PULL_REQUEST_LABEL_ADDED: "PULL_REQUEST_LABEL_ADDED",
  /**
   * A pull request that isn't a draft is opened, updated, or marked ready for review.
   */
  PULL_REQUEST_READY_FOR_REVIEW: "PULL_REQUEST_READY_FOR_REVIEW",
} as const;
/**
 * @public
 */
export type TriggerEvent = (typeof TriggerEvent)[keyof typeof TriggerEvent];

/**
 * @public
 * @enum
 */
export const TriggerFilterMatchMode = {
  /**
   * The filter passes when no value fully matches any pattern.
   */
  EXCLUDE: "EXCLUDE",
  /**
   * The filter passes when a value fully matches at least one pattern.
   */
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type TriggerFilterMatchMode = (typeof TriggerFilterMatchMode)[keyof typeof TriggerFilterMatchMode];

/**
 * @public
 * @enum
 */
export const TriggerFilterType = {
  /**
   * The labels on the pull request.
   */
  LABEL: "LABEL",
  /**
   * The name of the pull request's target branch, for example `main`.
   */
  TARGET_BRANCH: "TARGET_BRANCH",
} as const;
/**
 * @public
 */
export type TriggerFilterType = (typeof TriggerFilterType)[keyof typeof TriggerFilterType];

/**
 * @public
 * @enum
 */
export const CleanUpStrategy = {
  /**
   * Attempt to delete resources created during the pentest on a best-effort basis.
   */
  BEST_EFFORT_DELETE: "BEST_EFFORT_DELETE",
  /**
   * Retain all resources created during the pentest.
   */
  RETAIN_ALL: "RETAIN_ALL",
} as const;
/**
 * @public
 */
export type CleanUpStrategy = (typeof CleanUpStrategy)[keyof typeof CleanUpStrategy];

/**
 * @public
 * @enum
 */
export const CodeRemediationStrategy = {
  /**
   * Automatically generate code remediation for findings.
   */
  AUTOMATIC: "AUTOMATIC",
  /**
   * Code remediation is disabled.
   */
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type CodeRemediationStrategy = (typeof CodeRemediationStrategy)[keyof typeof CodeRemediationStrategy];

/**
 * @public
 * @enum
 */
export const SkillType = {
  /**
   * The finding personalization skill learns customer preferences from finding edits and aligns future findings accordingly.
   */
  FINDING_PERSONALIZATION: "FINDING_PERSONALIZATION",
  /**
   * The login optimization skill learns application login flows to improve authentication success across runs.
   */
  LOGIN_OPTIMIZATION: "LOGIN_OPTIMIZATION",
} as const;
/**
 * @public
 */
export type SkillType = (typeof SkillType)[keyof typeof SkillType];

/**
 * @public
 * @enum
 */
export const RiskType = {
  /**
   * Arbitrary file upload vulnerability.
   */
  ARBITRARY_FILE_UPLOAD: "ARBITRARY_FILE_UPLOAD",
  /**
   * Business logic vulnerability.
   */
  BUSINESS_LOGIC_VULNERABILITIES: "BUSINESS_LOGIC_VULNERABILITIES",
  /**
   * Code injection vulnerability.
   */
  CODE_INJECTION: "CODE_INJECTION",
  /**
   * Command injection vulnerability.
   */
  COMMAND_INJECTION: "COMMAND_INJECTION",
  /**
   * Cross-site scripting vulnerability.
   */
  CROSS_SITE_SCRIPTING: "CROSS_SITE_SCRIPTING",
  /**
   * Cryptographic vulnerability.
   */
  CRYPTOGRAPHIC_VULNERABILITIES: "CRYPTOGRAPHIC_VULNERABILITIES",
  /**
   * Unauthorized database access.
   */
  DATABASE_ACCESS: "DATABASE_ACCESS",
  /**
   * Unauthorized database modification.
   */
  DATABASE_MODIFICATION: "DATABASE_MODIFICATION",
  /**
   * Default or weak credentials detected.
   */
  DEFAULT_CREDENTIALS: "DEFAULT_CREDENTIALS",
  /**
   * Denial of service vulnerability.
   */
  DENIAL_OF_SERVICE: "DENIAL_OF_SERVICE",
  /**
   * Unauthorized file access vulnerability.
   */
  FILE_ACCESS: "FILE_ACCESS",
  /**
   * Unauthorized file creation vulnerability.
   */
  FILE_CREATION: "FILE_CREATION",
  /**
   * File deletion vulnerability.
   */
  FILE_DELETION: "FILE_DELETION",
  /**
   * GraphQL-specific vulnerability.
   */
  GRAPHQL_VULNERABILITIES: "GRAPHQL_VULNERABILITIES",
  /**
   * Information disclosure vulnerability.
   */
  INFORMATION_DISCLOSURE: "INFORMATION_DISCLOSURE",
  /**
   * Insecure deserialization vulnerability.
   */
  INSECURE_DESERIALIZATION: "INSECURE_DESERIALIZATION",
  /**
   * Insecure direct object reference vulnerability.
   */
  INSECURE_DIRECT_OBJECT_REFERENCE: "INSECURE_DIRECT_OBJECT_REFERENCE",
  /**
   * JSON Web Token vulnerability.
   */
  JSON_WEB_TOKEN_VULNERABILITIES: "JSON_WEB_TOKEN_VULNERABILITIES",
  /**
   * Local file inclusion vulnerability.
   */
  LOCAL_FILE_INCLUSION: "LOCAL_FILE_INCLUSION",
  /**
   * Other risk type not covered by specific categories.
   */
  OTHER: "OTHER",
  /**
   * Outbound service request vulnerability.
   */
  OUTBOUND_SERVICE_REQUEST: "OUTBOUND_SERVICE_REQUEST",
  /**
   * Path traversal vulnerability.
   */
  PATH_TRAVERSAL: "PATH_TRAVERSAL",
  /**
   * Privilege escalation vulnerability.
   */
  PRIVILEGE_ESCALATION: "PRIVILEGE_ESCALATION",
  /**
   * Server-side request forgery vulnerability.
   */
  SERVER_SIDE_REQUEST_FORGERY: "SERVER_SIDE_REQUEST_FORGERY",
  /**
   * Server-side template injection vulnerability.
   */
  SERVER_SIDE_TEMPLATE_INJECTION: "SERVER_SIDE_TEMPLATE_INJECTION",
  /**
   * SQL injection vulnerability.
   */
  SQL_INJECTION: "SQL_INJECTION",
  /**
   * Unknown risk type.
   */
  UNKNOWN: "UNKNOWN",
  /**
   * XML external entity vulnerability.
   */
  XML_EXTERNAL_ENTITY: "XML_EXTERNAL_ENTITY",
} as const;
/**
 * @public
 */
export type RiskType = (typeof RiskType)[keyof typeof RiskType];

/**
 * @public
 * @enum
 */
export const NetworkTrafficRuleEffect = {
  /**
   * Allow matching traffic.
   */
  ALLOW: "ALLOW",
  /**
   * Deny matching traffic.
   */
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type NetworkTrafficRuleEffect = (typeof NetworkTrafficRuleEffect)[keyof typeof NetworkTrafficRuleEffect];

/**
 * @public
 * @enum
 */
export const NetworkTrafficRuleType = {
  /**
   * URL-based traffic rule.
   */
  URL: "URL",
} as const;
/**
 * @public
 */
export type NetworkTrafficRuleType = (typeof NetworkTrafficRuleType)[keyof typeof NetworkTrafficRuleType];

/**
 * @public
 * @enum
 */
export const ConfidenceLevel = {
  FALSE_POSITIVE: "FALSE_POSITIVE",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNCONFIRMED: "UNCONFIRMED",
} as const;
/**
 * @public
 */
export type ConfidenceLevel = (typeof ConfidenceLevel)[keyof typeof ConfidenceLevel];

/**
 * @public
 * @enum
 */
export const RiskLevel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  ACCEPTED: "ACCEPTED",
  ACTIVE: "ACTIVE",
  FALSE_POSITIVE: "FALSE_POSITIVE",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const TaskExecutionStatus = {
  /**
   * Task was aborted.
   */
  ABORTED: "ABORTED",
  /**
   * Task completed successfully.
   */
  COMPLETED: "COMPLETED",
  /**
   * Task failed during execution.
   */
  FAILED: "FAILED",
  /**
   * Task failed due to an internal error.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * Task is currently running.
   */
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TaskExecutionStatus = (typeof TaskExecutionStatus)[keyof typeof TaskExecutionStatus];

/**
 * @public
 * @enum
 */
export const TestScopeType = {
  /**
   * A generative AI application.
   */
  GENERATIVE_AI_APP: "GENERATIVE_AI_APP",
  /**
   * A traditional web application.
   */
  WEB_APP: "WEB_APP",
} as const;
/**
 * @public
 */
export type TestScopeType = (typeof TestScopeType)[keyof typeof TestScopeType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  /**
   * Failure caused by a client-side error.
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * Failure caused by an internal error.
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * Pentest job was stopped by the user.
   */
  STOPPED_BY_USER: "STOPPED_BY_USER",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const Provider = {
  AZURE_DEVOPS: "AZURE_DEVOPS",
  BITBUCKET: "BITBUCKET",
  CONFLUENCE: "CONFLUENCE",
  GITHUB: "GITHUB",
  GITLAB: "GITLAB",
  JIRA: "JIRA",
} as const;
/**
 * @public
 */
export type Provider = (typeof Provider)[keyof typeof Provider];

/**
 * @public
 * @enum
 */
export const ContextType = {
  /**
   * Client-side error encountered during execution.
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * Error encountered during execution.
   */
  ERROR: "ERROR",
  /**
   * Informational message during execution.
   */
  INFO: "INFO",
  /**
   * Warning encountered during execution.
   */
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  /**
   * Pentest job completed successfully.
   */
  COMPLETED: "COMPLETED",
  /**
   * Pentest job failed during execution.
   */
  FAILED: "FAILED",
  /**
   * Pentest job is currently running.
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Pentest job was stopped by the user.
   */
  STOPPED: "STOPPED",
  /**
   * Pentest job is being stopped.
   */
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const StepName = {
  /**
   * Cleanup of infrastructure and resources created by the agent.
   */
  FINALIZING: "FINALIZING",
  /**
   * Active pentest step.
   */
  PENTEST: "PENTEST",
  /**
   * Pre-flight validation and setup step.
   */
  PREFLIGHT: "PREFLIGHT",
  /**
   * Static code and network scan analysis step.
   */
  STATIC_ANALYSIS: "STATIC_ANALYSIS",
  /**
   * Simulated validation step that dynamically confirms vulnerability exploitability.
   */
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type StepName = (typeof StepName)[keyof typeof StepName];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  /**
   * Step completed successfully.
   */
  COMPLETED: "COMPLETED",
  /**
   * Step failed during execution.
   */
  FAILED: "FAILED",
  /**
   * Step is currently running.
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Step has not started yet.
   */
  NOT_STARTED: "NOT_STARTED",
  /**
   * Step was stopped by the user.
   */
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * @enum
 */
export const LogType = {
  /**
   * Logs stored in CloudWatch.
   */
  CLOUDWATCH: "CLOUDWATCH",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const ValidationMode = {
  DISABLED: "DISABLED",
  SIMULATED: "SIMULATED",
} as const;
/**
 * @public
 */
export type ValidationMode = (typeof ValidationMode)[keyof typeof ValidationMode];

/**
 * @public
 * @enum
 */
export const CodeRemediationTaskStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CodeRemediationTaskStatus = (typeof CodeRemediationTaskStatus)[keyof typeof CodeRemediationTaskStatus];

/**
 * @public
 * @enum
 */
export const ValidationStatus = {
  CONFIRMED: "CONFIRMED",
  NOT_REPRODUCED: "NOT_REPRODUCED",
  NOT_VALIDATED: "NOT_VALIDATED",
  VALIDATING: "VALIDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  /**
   * A CI/CD pentest job that tests only the code changes in a single pipeline run, as determined by the scope changes supplied when the job is started.
   */
  CICD: "CICD",
  /**
   * A full pentest job that executes all phases including scanning, managed execution, and guided exploration.
   */
  FULL: "FULL",
  /**
   * A targeted revalidation job that retests specific findings to determine whether they are still exploitable.
   */
  REVALIDATION: "REVALIDATION",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const ScopeDecision = {
  /**
   * The code changes are in scope and are tested by the pentest job.
   */
  IN_SCOPE: "IN_SCOPE",
  /**
   * The code changes are out of scope and are not tested. No pentest is run for the changes.
   */
  SCOPED_OUT: "SCOPED_OUT",
  /**
   * The code changes could not be conclusively scoped because of a conflict in the scoping inputs.
   */
  SCOPE_CONFLICT: "SCOPE_CONFLICT",
} as const;
/**
 * @public
 */
export type ScopeDecision = (typeof ScopeDecision)[keyof typeof ScopeDecision];

/**
 * @public
 * @enum
 */
export const DNSRecordType = {
  /**
   * DNS TXT record.
   */
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type DNSRecordType = (typeof DNSRecordType)[keyof typeof DNSRecordType];

/**
 * @public
 * @enum
 */
export const DomainVerificationMethod = {
  /**
   * Verify ownership via DNS TXT record.
   */
  DNS_TXT: "DNS_TXT",
  /**
   * Verify ownership via HTTP route.
   */
  HTTP_ROUTE: "HTTP_ROUTE",
  /**
   * Verify ownership via IP for private VPC pentests.
   */
  PRIVATE_VPC: "PRIVATE_VPC",
} as const;
/**
 * @public
 */
export type DomainVerificationMethod = (typeof DomainVerificationMethod)[keyof typeof DomainVerificationMethod];

/**
 * @public
 * @enum
 */
export const TargetDomainStatus = {
  /**
   * Domain verification failed.
   */
  FAILED: "FAILED",
  /**
   * Domain verification is pending.
   */
  PENDING: "PENDING",
  /**
   * Domain is unreachable for verification.
   */
  UNREACHABLE: "UNREACHABLE",
  /**
   * Domain ownership has been verified.
   */
  VERIFIED: "VERIFIED",
} as const;
/**
 * @public
 */
export type TargetDomainStatus = (typeof TargetDomainStatus)[keyof typeof TargetDomainStatus];

/**
 * @public
 * @enum
 */
export const ThreatActor = {
  /**
   * Threat was created or updated by an agent.
   */
  AGENT: "AGENT",
  /**
   * Threat was created or updated by a customer.
   */
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type ThreatActor = (typeof ThreatActor)[keyof typeof ThreatActor];

/**
 * @public
 * @enum
 */
export const ThreatSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFO: "INFO",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type ThreatSeverity = (typeof ThreatSeverity)[keyof typeof ThreatSeverity];

/**
 * @public
 * @enum
 */
export const ThreatStatus = {
  DISMISSED: "DISMISSED",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type ThreatStatus = (typeof ThreatStatus)[keyof typeof ThreatStatus];

/**
 * @public
 * @enum
 */
export const StrideCategory = {
  DENIAL_OF_SERVICE: "DENIAL_OF_SERVICE",
  ELEVATION_OF_PRIVILEGE: "ELEVATION_OF_PRIVILEGE",
  INFORMATION_DISCLOSURE: "INFORMATION_DISCLOSURE",
  REPUDIATION: "REPUDIATION",
  SPOOFING: "SPOOFING",
  TAMPERING: "TAMPERING",
} as const;
/**
 * @public
 */
export type StrideCategory = (typeof StrideCategory)[keyof typeof StrideCategory];

/**
 * @public
 * @enum
 */
export const GitLabTokenType = {
  GROUP: "GROUP",
  PERSONAL: "PERSONAL",
} as const;
/**
 * @public
 */
export type GitLabTokenType = (typeof GitLabTokenType)[keyof typeof GitLabTokenType];

/**
 * @public
 * @enum
 */
export const UserRole = {
  /**
   * Default member role with standard permissions.
   */
  MEMBER: "MEMBER",
} as const;
/**
 * @public
 */
export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/**
 * @public
 * @enum
 */
export const MembershipType = {
  /**
   * Human user member.
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * @public
 * @enum
 */
export const ResourceConfigDnsResolution = {
  IN_VPC: "IN_VPC",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type ResourceConfigDnsResolution =
  (typeof ResourceConfigDnsResolution)[keyof typeof ResourceConfigDnsResolution];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const PrivateConnectionStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PrivateConnectionStatus = (typeof PrivateConnectionStatus)[keyof typeof PrivateConnectionStatus];

/**
 * @public
 * @enum
 */
export const PrivateConnectionType = {
  SELF_MANAGED: "SELF_MANAGED",
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type PrivateConnectionType = (typeof PrivateConnectionType)[keyof typeof PrivateConnectionType];

/**
 * @public
 * @enum
 */
export const SecurityRequirementPackStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SecurityRequirementPackStatus =
  (typeof SecurityRequirementPackStatus)[keyof typeof SecurityRequirementPackStatus];

/**
 * @public
 * @enum
 */
export const ProviderType = {
  DOCUMENTATION: "DOCUMENTATION",
  ISSUE_TRACKING: "ISSUE_TRACKING",
  SOURCE_CODE: "SOURCE_CODE",
} as const;
/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * @enum
 */
export const SecurityRequirementPackImportStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SecurityRequirementPackImportStatus =
  (typeof SecurityRequirementPackImportStatus)[keyof typeof SecurityRequirementPackImportStatus];

/**
 * @public
 * @enum
 */
export const ManagementType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type ManagementType = (typeof ManagementType)[keyof typeof ManagementType];

/**
 * @public
 * @enum
 */
export const SecurityRequirementArtifactFormat = {
  DOC: "DOC",
  DOCX: "DOCX",
  MD: "MD",
  PDF: "PDF",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type SecurityRequirementArtifactFormat =
  (typeof SecurityRequirementArtifactFormat)[keyof typeof SecurityRequirementArtifactFormat];

/**
 * @public
 * @enum
 */
export const WebhookAction = {
  /**
   * Create the webhook if one does not already exist. Returns the payload URL and the signing secret.
   */
  CREATE_IF_ABSENT: "CREATE_IF_ABSENT",
  /**
   * Generate a new signing secret for the existing webhook, keeping the same payload URL. Returns the new secret.
   */
  ROTATE: "ROTATE",
} as const;
/**
 * @public
 */
export type WebhookAction = (typeof WebhookAction)[keyof typeof WebhookAction];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  DOCUMENT: "DOCUMENT",
  PROJECT: "PROJECT",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const MembershipTypeFilter = {
  /**
   * Show all member types.
   */
  ALL: "ALL",
  /**
   * Show only user members.
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MembershipTypeFilter = (typeof MembershipTypeFilter)[keyof typeof MembershipTypeFilter];
