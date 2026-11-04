// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GithubRepoOwnerType = {
  /**
   * Repository owned by a GitHub organization.
   */
  ORGANIZATION: "organization",
  /**
   * Repository owned by an individual GitHub user.
   */
  USER: "user",
} as const;
/**
 * @public
 */
export type GithubRepoOwnerType = (typeof GithubRepoOwnerType)[keyof typeof GithubRepoOwnerType];

/**
 * @public
 * @enum
 */
export const GitLabTokenType = {
  /**
   * Group access token
   */
  GROUP: "group",
  /**
   * Personal access token
   */
  PERSONAL: "personal",
} as const;
/**
 * @public
 */
export type GitLabTokenType = (typeof GitLabTokenType)[keyof typeof GitLabTokenType];

/**
 * @public
 * @enum
 */
export const MCPServerAuthorizationMethod = {
  /**
   * API key-based authentication.
   */
  API_KEY: "api-key",
  /**
   * Bearer token authentication (RFC 6750).
   */
  BEARER_TOKEN: "bearer-token",
  CUSTOM_HEADERS: "custom-headers",
  /**
   * OAuth 2.0 three-legged authorization flow.
   */
  OAUTH_3LO: "oauth-3lo",
  /**
   * OAuth 2.0 client credentials flow.
   */
  OAUTH_CLIENT_CREDENTIALS: "oauth-client-credentials",
} as const;
/**
 * @public
 */
export type MCPServerAuthorizationMethod =
  (typeof MCPServerAuthorizationMethod)[keyof typeof MCPServerAuthorizationMethod];

/**
 * @public
 * @enum
 */
export const NewRelicRegion = {
  /**
   * EU region
   */
  EU: "EU",
  JP: "JP",
  /**
   * US region
   */
  US: "US",
} as const;
/**
 * @public
 */
export type NewRelicRegion = (typeof NewRelicRegion)[keyof typeof NewRelicRegion];

/**
 * @public
 * @enum
 */
export const RemoteAgentAuthorizationMethod = {
  /**
   * API key-based authentication.
   */
  API_KEY: "api-key",
  /**
   * Bearer token authentication (RFC 6750).
   */
  BEARER_TOKEN: "bearer-token",
  /**
   * OAuth 2.0 client credentials flow.
   */
  OAUTH_CLIENT_CREDENTIALS: "oauth-client-credentials",
} as const;
/**
 * @public
 */
export type RemoteAgentAuthorizationMethod =
  (typeof RemoteAgentAuthorizationMethod)[keyof typeof RemoteAgentAuthorizationMethod];

/**
 * @public
 * @enum
 */
export const AgentSpacePreferenceKey = {
  ELEVATED_ACTIONS_ENABLED: "elevatedActionsEnabled",
} as const;
/**
 * @public
 */
export type AgentSpacePreferenceKey = (typeof AgentSpacePreferenceKey)[keyof typeof AgentSpacePreferenceKey];

/**
 * @public
 * @enum
 */
export const CapabilityType = {
  /**
   * Release readiness review auto-trigger capability.
   */
  RELEASE_READINESS_REVIEW: "RELEASE_READINESS_REVIEW",
  /**
   * Release readiness review automated testing capability.
   */
  RELEASE_READINESS_REVIEW_AUTOMATED_TESTING: "RELEASE_READINESS_REVIEW_AUTOMATED_TESTING",
} as const;
/**
 * @public
 */
export type CapabilityType = (typeof CapabilityType)[keyof typeof CapabilityType];

/**
 * @public
 * @enum
 */
export const TriggerEvent = {
  /**
   * A change request is created or updated while in draft state.
   */
  PULL_REQUEST_DRAFT: "PULL_REQUEST_DRAFT",
  /**
   * A change request is created, updated, or marked ready for review while in a non-draft state.
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
export const MonitorAccountType = {
  MONITOR: "monitor",
} as const;
/**
 * @public
 */
export type MonitorAccountType = (typeof MonitorAccountType)[keyof typeof MonitorAccountType];

/**
 * @public
 * @enum
 */
export const ValidationStatus = {
  /**
   * The association has failed validation and requires attention.
   */
  INVALID: "invalid",
  /**
   * The association is awaiting user confirmation before validation can be completed.
   */
  PENDING_CONFIRMATION: "pending-confirmation",
  /**
   * The association has been validated and is functioning correctly.
   */
  VALID: "valid",
} as const;
/**
 * @public
 */
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus];

/**
 * @public
 * @enum
 */
export const ToolClassification = {
  DESTRUCTIVE: "DESTRUCTIVE",
  MUTATIVE: "MUTATIVE",
  READ_ONLY: "READ_ONLY",
} as const;
/**
 * @public
 */
export type ToolClassification = (typeof ToolClassification)[keyof typeof ToolClassification];

/**
 * @public
 * @enum
 */
export const SourceAccountType = {
  SOURCE: "source",
} as const;
/**
 * @public
 */
export type SourceAccountType = (typeof SourceAccountType)[keyof typeof SourceAccountType];

/**
 * @public
 * @enum
 */
export const WebhookType = {
  /**
   * API key-based webhook authentication
   */
  API_KEY: "apikey",
  /**
   * GitLab-specific webhook authentication
   */
  GITLAB: "gitlab",
  /**
   * HMAC-based webhook authentication
   */
  HMAC: "hmac",
  /**
   * pagerduty-specific webhook authentication
   */
  PAGERDUTY: "pagerduty",
} as const;
/**
 * @public
 */
export type WebhookType = (typeof WebhookType)[keyof typeof WebhookType];

/**
 * @public
 * @enum
 */
export const AuthFlow = {
  /**
   * IAM-based authentication flow
   */
  IAM: "iam",
  /**
   * Identity Center (IdC) authentication flow
   */
  IDC: "idc",
  /**
   * Identity Provider (IdP) authentication flow
   */
  IDP: "idp",
} as const;
/**
 * @public
 */
export type AuthFlow = (typeof AuthFlow)[keyof typeof AuthFlow];

/**
 * @public
 * @enum
 */
export const IncludedData = {
  ALL_DATA: "ALL_DATA",
  METADATA_ONLY: "METADATA_ONLY",
} as const;
/**
 * @public
 */
export type IncludedData = (typeof IncludedData)[keyof typeof IncludedData];

/**
 * @public
 * @enum
 */
export const ApprovalActionType = {
  /**
   * The agent's tool invocation is approved; finalPattern and ttlSeconds carry the finalized scope and lifetime.
   */
  APPROVED: "APPROVED",
  /**
   * The agent's tool invocation is rejected; reason optionally carries a free-text rationale.
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ApprovalActionType = (typeof ApprovalActionType)[keyof typeof ApprovalActionType];

/**
 * @public
 * @enum
 */
export const ApprovalStatus = {
  /**
   * The action was APPROVED; the approval request is live and may be redeemed via a credential mint until it is revoked or fully redeemed.
   */
  APPROVED: "APPROVED",
  /**
   * The approval request is awaiting a decision.
   */
  PENDING: "PENDING",
  /**
   * The approval was consumed by a credential mint at least once. Non-single-use approvals stay re-redeemable until expiry; single-use approvals are terminal.
   */
  REDEEMED: "REDEEMED",
  /**
   * The action was REJECTED; no further redemption is possible.
   */
  REJECTED: "REJECTED",
  /**
   * The approval was administratively invalidated; no further redemption is possible.
   */
  REVOKED: "REVOKED",
} as const;
/**
 * @public
 */
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus];

/**
 * @public
 * @enum
 */
export const Priority = {
  /**
   * Highest priority
   */
  CRITICAL: "CRITICAL",
  /**
   * High priority
   */
  HIGH: "HIGH",
  /**
   * Low priority
   */
  LOW: "LOW",
  /**
   * Medium priority
   */
  MEDIUM: "MEDIUM",
  /**
   * Minimal priority
   */
  MINIMAL: "MINIMAL",
} as const;
/**
 * @public
 */
export type Priority = (typeof Priority)[keyof typeof Priority];

/**
 * @public
 * @enum
 */
export const TaskType = {
  /**
   * Task for evaluating options or solutions (not in use)
   */
  EVALUATION: "EVALUATION",
  /**
   * Task for investigating issues or requirements
   */
  INVESTIGATION: "INVESTIGATION",
  /**
   * Task for reviewing changes for production readiness
   */
  RELEASE_READINESS_REVIEW: "RELEASE_READINESS_REVIEW",
  /**
   * Task for automated release testing
   */
  RELEASE_TESTING: "RELEASE_TESTING",
} as const;
/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  /**
   * Task has been canceled
   */
  CANCELED: "CANCELED",
  /**
   * Task has been completed successfully
   */
  COMPLETED: "COMPLETED",
  /**
   * Task has failed
   */
  FAILED: "FAILED",
  /**
   * Task is currently being worked on
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * Task has been linked to another task
   */
  LINKED: "LINKED",
  /**
   * Task is completed but awaiting customer approval (not in use)
   */
  PENDING_CUSTOMER_APPROVAL: "PENDING_CUSTOMER_APPROVAL",
  /**
   * Task is created but not yet started
   */
  PENDING_START: "PENDING_START",
  /**
   * Task is awaiting triage analysis
   */
  PENDING_TRIAGE: "PENDING_TRIAGE",
  /**
   * Task has been skipped by triage
   */
  SKIPPED: "SKIPPED",
  /**
   * Task has exceeded its time limit
   */
  TIMED_OUT: "TIMED_OUT",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

/**
 * @public
 * @enum
 */
export const UserType = {
  /**
   * AWS IAM user type
   */
  IAM: "IAM",
  /**
   * AWS IAM Identity Center user type
   */
  IDC: "IDC",
  /**
   * External Identity Provider user type
   */
  IDP: "IDP",
} as const;
/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * @enum
 */
export const ResourceConfigDnsResolution = {
  /**
   * Enable private DNS resolution within VPC for resources behind this resource gateway.
   */
  IN_VPC: "IN_VPC",
  /**
   * Use public DNS resolution for resources behind this resource gateway.
   */
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
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const RecommendationPriority = {
  /**
   * High priority recommendation requiring immediate attention
   */
  HIGH: "HIGH",
  /**
   * Low priority recommendation that can be addressed later
   */
  LOW: "LOW",
  /**
   * Medium priority recommendation for normal processing
   */
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type RecommendationPriority = (typeof RecommendationPriority)[keyof typeof RecommendationPriority];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  /**
   * Recommendation has been accepted by the user
   */
  ACCEPTED: "ACCEPTED",
  /**
   * Recommendation has been closed and is no longer relevant
   */
  CLOSED: "CLOSED",
  /**
   * Recommendation has been completed by the user
   */
  COMPLETED: "COMPLETED",
  /**
   * Recommendation has been generated but not yet acted upon
   */
  PROPOSED: "PROPOSED",
  /**
   * Recommendation has been rejected by the user
   */
  REJECTED: "REJECTED",
  /**
   * Recommendation is being actively updated
   */
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const TaskSortOrder = {
  /**
   * Ascending order
   */
  ASC: "ASC",
  /**
   * Descending order
   */
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type TaskSortOrder = (typeof TaskSortOrder)[keyof typeof TaskSortOrder];

/**
 * @public
 * @enum
 */
export const TaskSortField = {
  /**
   * Sort by task creation timestamp
   */
  CREATED_AT: "CREATED_AT",
  /**
   * Sort by task priority level
   */
  PRIORITY: "PRIORITY",
} as const;
/**
 * @public
 */
export type TaskSortField = (typeof TaskSortField)[keyof typeof TaskSortField];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  /**
   * Execution has been canceled
   */
  CANCELED: "CANCELED",
  /**
   * Execution has failed
   */
  FAILED: "FAILED",
  /**
   * Execution is currently running
   */
  RUNNING: "RUNNING",
  /**
   * Execution has been stopped
   */
  STOPPED: "STOPPED",
  /**
   * Unlike in the case of user-initiated Cancelation, a customer won't be billed
   */
  TIMED_OUT: "TIMED_OUT",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const GoalType = {
  /**
   * Goal defined by customer
   */
  CUSTOMER_DEFINED: "CUSTOMER_DEFINED",
  /**
   * Goal related to on-call reporting activities
   */
  ONCALL_REPORT: "ONCALL_REPORT",
} as const;
/**
 * @public
 */
export type GoalType = (typeof GoalType)[keyof typeof GoalType];

/**
 * @public
 * @enum
 */
export const GoalStatus = {
  /**
   * Goal is active and being evaluated according to schedule
   */
  ACTIVE: "ACTIVE",
  /**
   * Goal has been marked as completed
   */
  COMPLETE: "COMPLETE",
  /**
   * Goal evaluations are temporarily paused
   */
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus];

/**
 * @public
 * @enum
 */
export const SchedulerState = {
  /**
   * Schedule is disabled and will not trigger goal evaluations
   */
  DISABLED: "DISABLED",
  /**
   * Schedule is enabled and will trigger goal evaluations
   */
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type SchedulerState = (typeof SchedulerState)[keyof typeof SchedulerState];

/**
 * @public
 * @enum
 */
export const OrderType = {
  /**
   * Ascending order
   */
  ASC: "ASC",
  /**
   * Descending order
   */
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type OrderType = (typeof OrderType)[keyof typeof OrderType];

/**
 * @public
 * @enum
 */
export const Service = {
  AZURE: "azure",
  AZURE_DEVOPS: "azuredevops",
  /**
   * Azure Service with AWS Outbound Identity Federation.
   */
  AZURE_IDENTITY: "azureidentity",
  DYNATRACE: "dynatrace",
  EVENTCHANNEL: "eventChannel",
  GITHUB: "github",
  GITLAB: "gitlab",
  /**
   * Model Context Protocol server.
   */
  MCP_SERVER: "mcpserver",
  /**
   * Datadog MCP server.
   */
  MCP_SERVER_DATADOG: "mcpserverdatadog",
  /**
   * Grafana MCP server.
   */
  MCP_SERVER_GRAFANA: "mcpservergrafana",
  /**
   * NewRelic MCP server.
   */
  MCP_SERVER_NEWRELIC: "mcpservernewrelic",
  /**
   * SigV4-authenticated MCP server.
   */
  MCP_SERVER_SIGV4: "mcpserversigv4",
  /**
   * Splunk MCP server.
   */
  MCP_SERVER_SPLUNK: "mcpserversplunk",
  MS_TEAMS: "msteams",
  PAGERDUTY: "pagerduty",
  /**
   * Remote A2A agent with token-based authentication (API key or OAuth).
   */
  REMOTE_AGENT: "remoteagent",
  /**
   * Remote A2A agent with SigV4 authentication.
   */
  REMOTE_AGENT_SIGV4: "remoteagentsigv4",
  SERVICENOW: "servicenow",
  SLACK: "slack",
} as const;
/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 * @enum
 */
export const PostRegisterServiceSupportedService = {
  /**
   * Azure Service with AWS Outbound Identity Federation.
   */
  AZURE_IDENTITY: "azureidentity",
  DYNATRACE: "dynatrace",
  EVENTCHANNEL: "eventChannel",
  GITLAB: "gitlab",
  /**
   * Model Context Protocol server.
   */
  MCP_SERVER: "mcpserver",
  /**
   * Datadog MCP server.
   */
  MCP_SERVER_DATADOG: "mcpserverdatadog",
  /**
   * Grafana MCP server.
   */
  MCP_SERVER_GRAFANA: "mcpservergrafana",
  /**
   * NewRelic MCP server.
   */
  MCP_SERVER_NEWRELIC: "mcpservernewrelic",
  /**
   * SigV4-authenticated MCP server.
   */
  MCP_SERVER_SIGV4: "mcpserversigv4",
  /**
   * Splunk MCP server.
   */
  MCP_SERVER_SPLUNK: "mcpserversplunk",
  PAGERDUTY: "pagerduty",
  /**
   * Remote A2A agent with token-based authentication (API key or OAuth).
   */
  REMOTE_AGENT: "remoteagent",
  /**
   * Remote A2A agent with SigV4 authentication.
   */
  REMOTE_AGENT_SIGV4: "remoteagentsigv4",
  SERVICENOW: "servicenow",
} as const;
/**
 * @public
 */
export type PostRegisterServiceSupportedService =
  (typeof PostRegisterServiceSupportedService)[keyof typeof PostRegisterServiceSupportedService];

/**
 * @public
 * @enum
 */
export const EventChannelType = {
  /**
   * Webhook-based event channel
   */
  WEBHOOK: "webhook",
} as const;
/**
 * @public
 */
export type EventChannelType = (typeof EventChannelType)[keyof typeof EventChannelType];
