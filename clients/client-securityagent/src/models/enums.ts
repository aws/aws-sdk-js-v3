// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessType = {
  /**
   * <p>Resource is private and has restricted access.</p>
   */
  PRIVATE: "PRIVATE",
  /**
   * <p>Resource is public and openly accessible.</p>
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
   * <p>Authentication using an AWS IAM role.</p>
   */
  AWS_IAM_ROLE: "AWS_IAM_ROLE",
  /**
   * <p>Internal AWS authentication.</p>
   */
  AWS_INTERNAL: "AWS_INTERNAL",
  /**
   * <p>Credentials retrieved via AWS Lambda function.</p>
   */
  AWS_LAMBDA: "AWS_LAMBDA",
  /**
   * <p>Credentials stored in AWS Secrets Manager.</p>
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
export const CleanUpStrategy = {
  /**
   * <p>Attempt to delete resources created during the pentest on a best-effort basis.</p>
   */
  BEST_EFFORT_DELETE: "BEST_EFFORT_DELETE",
  /**
   * <p>Retain all resources created during the pentest.</p>
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
   * <p>Automatically generate code remediation for findings.</p>
   */
  AUTOMATIC: "AUTOMATIC",
  /**
   * <p>Code remediation is disabled.</p>
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
   * <p>The finding personalization skill learns customer preferences from finding edits and aligns future findings accordingly.</p>
   */
  FINDING_PERSONALIZATION: "FINDING_PERSONALIZATION",
  /**
   * <p>The login optimization skill learns application login flows to improve authentication success across runs.</p>
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
   * <p>Arbitrary file upload vulnerability.</p>
   */
  ARBITRARY_FILE_UPLOAD: "ARBITRARY_FILE_UPLOAD",
  /**
   * <p>Business logic vulnerability.</p>
   */
  BUSINESS_LOGIC_VULNERABILITIES: "BUSINESS_LOGIC_VULNERABILITIES",
  /**
   * <p>Code injection vulnerability.</p>
   */
  CODE_INJECTION: "CODE_INJECTION",
  /**
   * <p>Command injection vulnerability.</p>
   */
  COMMAND_INJECTION: "COMMAND_INJECTION",
  /**
   * <p>Cross-site scripting vulnerability.</p>
   */
  CROSS_SITE_SCRIPTING: "CROSS_SITE_SCRIPTING",
  /**
   * <p>Cryptographic vulnerability.</p>
   */
  CRYPTOGRAPHIC_VULNERABILITIES: "CRYPTOGRAPHIC_VULNERABILITIES",
  /**
   * <p>Unauthorized database access.</p>
   */
  DATABASE_ACCESS: "DATABASE_ACCESS",
  /**
   * <p>Unauthorized database modification.</p>
   */
  DATABASE_MODIFICATION: "DATABASE_MODIFICATION",
  /**
   * <p>Default or weak credentials detected.</p>
   */
  DEFAULT_CREDENTIALS: "DEFAULT_CREDENTIALS",
  /**
   * <p>Denial of service vulnerability.</p>
   */
  DENIAL_OF_SERVICE: "DENIAL_OF_SERVICE",
  /**
   * <p>Unauthorized file access vulnerability.</p>
   */
  FILE_ACCESS: "FILE_ACCESS",
  /**
   * <p>Unauthorized file creation vulnerability.</p>
   */
  FILE_CREATION: "FILE_CREATION",
  /**
   * <p>File deletion vulnerability.</p>
   */
  FILE_DELETION: "FILE_DELETION",
  /**
   * <p>GraphQL-specific vulnerability.</p>
   */
  GRAPHQL_VULNERABILITIES: "GRAPHQL_VULNERABILITIES",
  /**
   * <p>Information disclosure vulnerability.</p>
   */
  INFORMATION_DISCLOSURE: "INFORMATION_DISCLOSURE",
  /**
   * <p>Insecure deserialization vulnerability.</p>
   */
  INSECURE_DESERIALIZATION: "INSECURE_DESERIALIZATION",
  /**
   * <p>Insecure direct object reference vulnerability.</p>
   */
  INSECURE_DIRECT_OBJECT_REFERENCE: "INSECURE_DIRECT_OBJECT_REFERENCE",
  /**
   * <p>JSON Web Token vulnerability.</p>
   */
  JSON_WEB_TOKEN_VULNERABILITIES: "JSON_WEB_TOKEN_VULNERABILITIES",
  /**
   * <p>Local file inclusion vulnerability.</p>
   */
  LOCAL_FILE_INCLUSION: "LOCAL_FILE_INCLUSION",
  /**
   * <p>Other risk type not covered by specific categories.</p>
   */
  OTHER: "OTHER",
  /**
   * <p>Outbound service request vulnerability.</p>
   */
  OUTBOUND_SERVICE_REQUEST: "OUTBOUND_SERVICE_REQUEST",
  /**
   * <p>Path traversal vulnerability.</p>
   */
  PATH_TRAVERSAL: "PATH_TRAVERSAL",
  /**
   * <p>Privilege escalation vulnerability.</p>
   */
  PRIVILEGE_ESCALATION: "PRIVILEGE_ESCALATION",
  /**
   * <p>Server-side request forgery vulnerability.</p>
   */
  SERVER_SIDE_REQUEST_FORGERY: "SERVER_SIDE_REQUEST_FORGERY",
  /**
   * <p>Server-side template injection vulnerability.</p>
   */
  SERVER_SIDE_TEMPLATE_INJECTION: "SERVER_SIDE_TEMPLATE_INJECTION",
  /**
   * <p>SQL injection vulnerability.</p>
   */
  SQL_INJECTION: "SQL_INJECTION",
  /**
   * <p>Unknown risk type.</p>
   */
  UNKNOWN: "UNKNOWN",
  /**
   * <p>XML external entity vulnerability.</p>
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
   * <p>Allow matching traffic.</p>
   */
  ALLOW: "ALLOW",
  /**
   * <p>Deny matching traffic.</p>
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
   * <p>URL-based traffic rule.</p>
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
export const ErrorCode = {
  /**
   * <p>Failure caused by a client-side error.</p>
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * <p>Failure caused by an internal error.</p>
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * <p>Pentest job was stopped by the user.</p>
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
export const ContextType = {
  /**
   * <p>Client-side error encountered during execution.</p>
   */
  CLIENT_ERROR: "CLIENT_ERROR",
  /**
   * <p>Error encountered during execution.</p>
   */
  ERROR: "ERROR",
  /**
   * <p>Informational message during execution.</p>
   */
  INFO: "INFO",
  /**
   * <p>Warning encountered during execution.</p>
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
   * <p>Pentest job completed successfully.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>Pentest job failed during execution.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Pentest job is currently running.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>Pentest job was stopped by the user.</p>
   */
  STOPPED: "STOPPED",
  /**
   * <p>Pentest job is being stopped.</p>
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
   * <p>Cleanup of infrastructure and resources created by the agent.</p>
   */
  FINALIZING: "FINALIZING",
  /**
   * <p>Active pentest step.</p>
   */
  PENTEST: "PENTEST",
  /**
   * <p>Pre-flight validation and setup step.</p>
   */
  PREFLIGHT: "PREFLIGHT",
  /**
   * <p>Static code and network scan analysis step.</p>
   */
  STATIC_ANALYSIS: "STATIC_ANALYSIS",
  /**
   * <p>Simulated validation step that dynamically confirms vulnerability exploitability.</p>
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
   * <p>Step completed successfully.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>Step failed during execution.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Step is currently running.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>Step has not started yet.</p>
   */
  NOT_STARTED: "NOT_STARTED",
  /**
   * <p>Step was stopped by the user.</p>
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
export const TaskExecutionStatus = {
  /**
   * <p>Task was aborted.</p>
   */
  ABORTED: "ABORTED",
  /**
   * <p>Task completed successfully.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>Task failed during execution.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Task failed due to an internal error.</p>
   */
  INTERNAL_ERROR: "INTERNAL_ERROR",
  /**
   * <p>Task is currently running.</p>
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
export const LogType = {
  /**
   * <p>Logs stored in CloudWatch.</p>
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
export const DNSRecordType = {
  /**
   * <p>DNS TXT record.</p>
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
   * <p>Verify ownership via DNS TXT record.</p>
   */
  DNS_TXT: "DNS_TXT",
  /**
   * <p>Verify ownership via HTTP route.</p>
   */
  HTTP_ROUTE: "HTTP_ROUTE",
  /**
   * <p>Verify ownership via IP for private VPC pentests.</p>
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
   * <p>Domain verification failed.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Domain verification is pending.</p>
   */
  PENDING: "PENDING",
  /**
   * <p>Domain is unreachable for verification.</p>
   */
  UNREACHABLE: "UNREACHABLE",
  /**
   * <p>Domain ownership has been verified.</p>
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
   * <p>Threat was created or updated by an agent.</p>
   */
  AGENT: "AGENT",
  /**
   * <p>Threat was created or updated by a customer.</p>
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
export const Provider = {
  BITBUCKET: "BITBUCKET",
  CONFLUENCE: "CONFLUENCE",
  GITHUB: "GITHUB",
  GITLAB: "GITLAB",
} as const;
/**
 * @public
 */
export type Provider = (typeof Provider)[keyof typeof Provider];

/**
 * @public
 * @enum
 */
export const UserRole = {
  /**
   * <p>Default member role with standard permissions.</p>
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
   * <p>Human user member.</p>
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
export const ResourceType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  DOCUMENT: "DOCUMENT",
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
   * <p>Show all member types.</p>
   */
  ALL: "ALL",
  /**
   * <p>Show only user members.</p>
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type MembershipTypeFilter = (typeof MembershipTypeFilter)[keyof typeof MembershipTypeFilter];
