// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessGrantType = {
  /**
   * Created and owned by a customer.
   */
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  /**
   * Provisioned and owned by the service. Cannot be deleted by customers.
   */
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type AccessGrantType = (typeof AccessGrantType)[keyof typeof AccessGrantType];

/**
 * @public
 * @enum
 */
export const AccessGrantPermission = {
  /**
   * Access limited to an explicit list of actions, specified in scopedActions.
   */
  CUSTOM: "CUSTOM",
  /**
   * Read access.
   */
  READ: "READ",
  /**
   * Read, write, and delete access.
   */
  READ_WRITE_DELETE: "READ_WRITE_DELETE",
  /**
   * Can manage grants within the space but cannot create spaces.
   */
  SPACE_ADMIN: "SPACE_ADMIN",
} as const;
/**
 * @public
 */
export type AccessGrantPermission = (typeof AccessGrantPermission)[keyof typeof AccessGrantPermission];

/**
 * @public
 * @enum
 */
export const AccessGrantPrincipalType = {
  /**
   * An access profile.
   */
  ACCESS_PROFILE: "ACCESS_PROFILE",
  /**
   * An agent workload principal.
   */
  AGENT: "AGENT",
  /**
   * An alert.
   */
  ALERT: "ALERT",
  /**
   * An IAM role.
   */
  IAM_ROLE: "IAM_ROLE",
  /**
   * An AWS account root principal.
   */
  IAM_ROOT: "IAM_ROOT",
  /**
   * An IAM user.
   */
  IAM_USER: "IAM_USER",
  /**
   * An Identity Center group.
   */
  IDC_GROUP: "IDC_GROUP",
  /**
   * An Identity Center user.
   */
  IDC_USER: "IDC_USER",
} as const;
/**
 * @public
 */
export type AccessGrantPrincipalType = (typeof AccessGrantPrincipalType)[keyof typeof AccessGrantPrincipalType];

/**
 * @public
 * @enum
 */
export const RowScopeOperator = {
  /**
   * The field value must be one of the listed values.
   */
  IN: "IN",
} as const;
/**
 * @public
 */
export type RowScopeOperator = (typeof RowScopeOperator)[keyof typeof RowScopeOperator];

/**
 * @public
 * @enum
 */
export const SignalType = {
  /**
   * Log signal type.
   */
  LOGS: "LOGS",
  /**
   * Trace signal type.
   */
  TRACES: "TRACES",
} as const;
/**
 * @public
 */
export type SignalType = (typeof SignalType)[keyof typeof SignalType];

/**
 * @public
 * @enum
 */
export const AssumeStatus = {
  /**
   * The calling principal is authorized to assume the access profile.
   */
  ALLOWED: "ALLOWED",
  /**
   * The calling principal is not authorized to assume the access profile.
   */
  DENIED: "DENIED",
} as const;
/**
 * @public
 */
export type AssumeStatus = (typeof AssumeStatus)[keyof typeof AssumeStatus];

/**
 * @public
 * @enum
 */
export const AccessProfileType = {
  /**
   * Created and owned by a customer.
   */
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
  /**
   * Provisioned and owned by the service. Cannot be deleted by customers.
   */
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;
/**
 * @public
 */
export type AccessProfileType = (typeof AccessProfileType)[keyof typeof AccessProfileType];

/**
 * @public
 * @enum
 */
export const NotificationTargetType = {
  /**
   * PagerDuty target.
   */
  PAGERDUTY: "pagerduty",
  /**
   * Slack target.
   */
  SLACK: "slack",
  /**
   * Amazon SNS topic target.
   */
  SNS: "sns",
} as const;
/**
 * @public
 */
export type NotificationTargetType = (typeof NotificationTargetType)[keyof typeof NotificationTargetType];

/**
 * @public
 * @enum
 */
export const AlertState = {
  /**
   * The alert is breaching its critical threshold.
   */
  CRITICAL: "CRITICAL",
  /**
   * The evaluation produced no data. Reported only when
   * {@code rule.telemetryRule.noData.treatAs} resolves to {@code NODATA},
   * which is also the behaviour when {@code noData} is omitted.
   */
  NODATA: "NODATA",
  /**
   * The alert is within its normal threshold.
   */
  OK: "OK",
  /**
   * The alert is breaching its warning threshold.
   */
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type AlertState = (typeof AlertState)[keyof typeof AlertState];

/**
 * @public
 * @enum
 */
export const NotificationStatus = {
  /**
   * Notifications are suppressed.
   */
  DISABLED: "DISABLED",
  /**
   * Notifications are sent when the alert triggers.
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];

/**
 * @public
 * @enum
 */
export const Comparator = {
  /**
   * Greater than.
   */
  GT: "GT",
  /**
   * Greater than or equal to.
   */
  GTE: "GTE",
  /**
   * Less than.
   */
  LT: "LT",
  /**
   * Less than or equal to.
   */
  LTE: "LTE",
} as const;
/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * @public
 * @enum
 */
export const ThresholdMode = {
  /**
   * The threshold is compared against the number of result rows.
   */
  COUNT_OF_RESULTS: "COUNT_OF_RESULTS",
  /**
   * The threshold is compared against a field value per contributor.
   */
  FIELD_VALUE: "FIELD_VALUE",
} as const;
/**
 * @public
 */
export type ThresholdMode = (typeof ThresholdMode)[keyof typeof ThresholdMode];

/**
 * @public
 * @enum
 */
export const QueryLanguage = {
  /**
   * PromQL query language.
   */
  PROMQL: "PROMQL",
  /**
   * SQL query language.
   */
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type QueryLanguage = (typeof QueryLanguage)[keyof typeof QueryLanguage];

/**
 * @public
 * @enum
 */
export const AlertSortField = {
  /**
   * Sort by alert name.
   */
  NAME: "NAME",
  /**
   * Sort by alert state.
   */
  STATE: "STATE",
} as const;
/**
 * @public
 */
export type AlertSortField = (typeof AlertSortField)[keyof typeof AlertSortField];

/**
 * @public
 * @enum
 */
export const AlertSortOrder = {
  /**
   * Ascending order.
   */
  ASC: "ASC",
  /**
   * Descending order.
   */
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type AlertSortOrder = (typeof AlertSortOrder)[keyof typeof AlertSortOrder];

/**
 * @public
 * @enum
 */
export const AuthType = {
  API_KEY: "API_KEY",
  NONE: "NONE",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const IdentityProvider = {
  /**
   * IAM-based identity provider.
   */
  IAM: "IAM",
  /**
   * AWS Identity Center identity provider.
   */
  IDC: "IDC",
} as const;
/**
 * @public
 */
export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  /**
   * The domain is active.
   */
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const OrganizationGrantPermission = {
  /**
   * Administrative access at domain scope.
   */
  ADMIN: "ADMIN",
} as const;
/**
 * @public
 */
export type OrganizationGrantPermission =
  (typeof OrganizationGrantPermission)[keyof typeof OrganizationGrantPermission];

/**
 * @public
 * @enum
 */
export const OrganizationGrantPrincipalType = {
  /**
   * An IAM role.
   */
  IAM_ROLE: "IAM_ROLE",
  /**
   * An AWS account root principal.
   */
  IAM_ROOT: "IAM_ROOT",
  /**
   * An IAM user.
   */
  IAM_USER: "IAM_USER",
  /**
   * An Identity Center group.
   */
  IDC_GROUP: "IDC_GROUP",
  /**
   * An Identity Center user.
   */
  IDC_USER: "IDC_USER",
} as const;
/**
 * @public
 */
export type OrganizationGrantPrincipalType =
  (typeof OrganizationGrantPrincipalType)[keyof typeof OrganizationGrantPrincipalType];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  AWS_CONFIG_SLREC: "AWS_CONFIG_SLREC",
  AWS_INTEGRATION: "AWS_INTEGRATION",
  EXTERNAL_AGENT: "EXTERNAL_AGENT",
  SLACK: "SLACK",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const Scope = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATION: "ORGANIZATION",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const IntegrationStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PENDING_OAUTH: "PENDING_OAUTH",
} as const;
/**
 * @public
 */
export type IntegrationStatus = (typeof IntegrationStatus)[keyof typeof IntegrationStatus];

/**
 * @public
 * @enum
 */
export const EncryptionStrategy = {
  /**
   * Data is encrypted with a service owned key. No customer configuration or KMS
   * permissions are required. This is the behavior when no encryption is specified.
   */
  AWS_OWNED: "AWS_OWNED",
  /**
   * Data is encrypted with a customer managed KMS key that you supply.
   */
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type EncryptionStrategy = (typeof EncryptionStrategy)[keyof typeof EncryptionStrategy];

/**
 * @public
 * @enum
 */
export const SpaceStatus = {
  /**
   * The space is active.
   */
  ACTIVE: "ACTIVE",
  /**
   * The space is being moved.
   */
  MOVING: "MOVING",
  /**
   * The space is suspended.
   */
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * @public
 * @enum
 */
export const ViewType = {
  /**
   * A view created and maintained by AWS. Managed views are read-only:
   * they cannot be created, updated, or deleted by customers.
   */
  MANAGED: "MANAGED",
  /**
   * A view created and owned by the customer.
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type ViewType = (typeof ViewType)[keyof typeof ViewType];

/**
 * @public
 * @enum
 */
export const EdgeType = {
  ACCESSES: "ACCESSES",
  CALLS: "CALLS",
  RUNS_ON: "RUNS_ON",
} as const;
/**
 * @public
 */
export type EdgeType = (typeof EdgeType)[keyof typeof EdgeType];

/**
 * @public
 * @enum
 */
export const Source = {
  AWS_INTEGRATION: "AWS_INTEGRATION",
  AZURE_VNET_FLOW_LOG: "AZURE_VNET_FLOW_LOG",
  CLOUDFRONT_ACCESS_LOG: "CLOUDFRONT_ACCESS_LOG",
  CLOUDTRAIL: "CLOUDTRAIL",
  CODE_SEMANTICS: "CODE_SEMANTICS",
  CONFIG: "CONFIG",
  ELB_ACCESS_LOG: "ELB_ACCESS_LOG",
  IAM_POLICY: "IAM_POLICY",
  S3_ACCESS_LOG: "S3_ACCESS_LOG",
  TELEMETRY: "TELEMETRY",
  VPC_FLOW_LOG: "VPC_FLOW_LOG",
  WAF_ACCESS_LOG: "WAF_ACCESS_LOG",
} as const;
/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * @public
 * @enum
 */
export const NodeCategory = {
  COMPUTE: "COMPUTE",
  DATABASE: "DATABASE",
  GEN_AI_AGENT: "GEN_AI_AGENT",
  GEN_AI_MODEL: "GEN_AI_MODEL",
  MESSAGING_QUEUE: "MESSAGING_QUEUE",
  NETWORK: "NETWORK",
  STORAGE: "STORAGE",
} as const;
/**
 * @public
 */
export type NodeCategory = (typeof NodeCategory)[keyof typeof NodeCategory];

/**
 * @public
 * @enum
 */
export const NodeType = {
  REMOTE_SERVICE: "REMOTE_SERVICE",
  RESOURCE: "RESOURCE",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * @enum
 */
export const Signal = {
  CONFIG: "CONFIG",
  LOGS: "LOGS",
  METRICS: "METRICS",
  TRACES: "TRACES",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type Signal = (typeof Signal)[keyof typeof Signal];

/**
 * @public
 * @enum
 */
export const OrganizationCredentialType = {
  /**
   * Credentials for operating on the space.
   */
  SPACE_OPERATION: "SPACE_OPERATION",
} as const;
/**
 * @public
 */
export type OrganizationCredentialType = (typeof OrganizationCredentialType)[keyof typeof OrganizationCredentialType];

/**
 * @public
 * @enum
 */
export const QueryStatus = {
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  FAILED: "Failed",
  RUNNING: "Running",
} as const;
/**
 * @public
 */
export type QueryStatus = (typeof QueryStatus)[keyof typeof QueryStatus];

/**
 * @public
 * @enum
 */
export const TelemetryType = {
  /**
   * Log telemetry data.
   */
  LOGS: "LOGS",
  /**
   * Trace telemetry data.
   */
  TRACES: "TRACES",
} as const;
/**
 * @public
 */
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  /**
   * An Identity Center group.
   */
  GROUP: "GROUP",
  /**
   * An Identity Center user.
   */
  USER: "USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];
