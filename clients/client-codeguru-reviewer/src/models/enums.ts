// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AnalysisType = {
  CODE_QUALITY: "CodeQuality",
  SECURITY: "Security",
} as const;
/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * @public
 * @enum
 */
export const EncryptionOption = {
  AoCmk: "AWS_OWNED_CMK",
  CmCmk: "CUSTOMER_MANAGED_CMK",
} as const;
/**
 * @public
 */
export type EncryptionOption = (typeof EncryptionOption)[keyof typeof EncryptionOption];

/**
 * @public
 * @enum
 */
export const ProviderType = {
  BITBUCKET: "Bitbucket",
  CODE_COMMIT: "CodeCommit",
  GIT_HUB: "GitHub",
  GIT_HUB_ENTERPRISE_SERVER: "GitHubEnterpriseServer",
  S3_BUCKET: "S3Bucket",
} as const;
/**
 * @public
 */
export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType];

/**
 * @public
 * @enum
 */
export const RepositoryAssociationState = {
  ASSOCIATED: "Associated",
  ASSOCIATING: "Associating",
  DISASSOCIATED: "Disassociated",
  DISASSOCIATING: "Disassociating",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type RepositoryAssociationState = (typeof RepositoryAssociationState)[keyof typeof RepositoryAssociationState];

/**
 * @public
 * @enum
 */
export const VendorName = {
  GITHUB: "GitHub",
  GITLAB: "GitLab",
  NATIVE_S3: "NativeS3",
} as const;
/**
 * @public
 */
export type VendorName = (typeof VendorName)[keyof typeof VendorName];

/**
 * @public
 * @enum
 */
export const ConfigFileState = {
  ABSENT: "Absent",
  PRESENT: "Present",
  PRESENT_WITH_ERRORS: "PresentWithErrors",
} as const;
/**
 * @public
 */
export type ConfigFileState = (typeof ConfigFileState)[keyof typeof ConfigFileState];

/**
 * @public
 * @enum
 */
export const JobState = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type JobState = (typeof JobState)[keyof typeof JobState];

/**
 * @public
 * @enum
 */
export const Type = {
  PULL_REQUEST: "PullRequest",
  REPOSITORY_ANALYSIS: "RepositoryAnalysis",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const Reaction = {
  THUMBS_DOWN: "ThumbsDown",
  THUMBS_UP: "ThumbsUp",
} as const;
/**
 * @public
 */
export type Reaction = (typeof Reaction)[keyof typeof Reaction];

/**
 * @public
 * @enum
 */
export const RecommendationCategory = {
  AWS_BEST_PRACTICES: "AWSBestPractices",
  AWS_CLOUDFORMATION_ISSUES: "AWSCloudFormationIssues",
  CODE_INCONSISTENCIES: "CodeInconsistencies",
  CODE_MAINTENANCE_ISSUES: "CodeMaintenanceIssues",
  CONCURRENCY_ISSUES: "ConcurrencyIssues",
  DUPLICATE_CODE: "DuplicateCode",
  INPUT_VALIDATIONS: "InputValidations",
  JAVA_BEST_PRACTICES: "JavaBestPractices",
  PYTHON_BEST_PRACTICES: "PythonBestPractices",
  RESOURCE_LEAKS: "ResourceLeaks",
  SECURITY_ISSUES: "SecurityIssues",
} as const;
/**
 * @public
 */
export type RecommendationCategory = (typeof RecommendationCategory)[keyof typeof RecommendationCategory];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "Critical",
  HIGH: "High",
  INFO: "Info",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];
