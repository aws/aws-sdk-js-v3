// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const GithubRepoOwnerType = {
  /**
   * <p>Repository owned by a GitHub organization.</p>
   */
  ORGANIZATION: "organization",
  /**
   * <p>Repository owned by an individual GitHub user.</p>
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
   * <p>Group access token</p>
   */
  GROUP: "group",
  /**
   * <p>Personal access token</p>
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
   * <p>API key-based authentication.</p>
   */
  API_KEY: "api-key",
  /**
   * <p>Bearer token authentication (RFC 6750).</p>
   */
  BEARER_TOKEN: "bearer-token",
  /**
   * <p>OAuth 2.0 three-legged authorization flow.</p>
   */
  OAUTH_3LO: "oauth-3lo",
  /**
   * <p>OAuth 2.0 client credentials flow.</p>
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
   * <p>EU region</p>
   */
  EU: "EU",
  /**
   * <p>US region</p>
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
   * <p>API key-based authentication.</p>
   */
  API_KEY: "api-key",
  /**
   * <p>Bearer token authentication (RFC 6750).</p>
   */
  BEARER_TOKEN: "bearer-token",
  /**
   * <p>OAuth 2.0 client credentials flow.</p>
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
export const CapabilityType = {
  /**
   * <p>Release readiness review auto-trigger capability.</p>
   */
  RELEASE_READINESS_REVIEW: "RELEASE_READINESS_REVIEW",
  /**
   * <p>Release readiness review automated testing capability.</p>
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
export const ValidationStatus = {
  /**
   * <p>The association has failed validation and requires attention.</p>
   */
  INVALID: "invalid",
  /**
   * <p>The association is awaiting user confirmation before validation can be completed.</p>
   */
  PENDING_CONFIRMATION: "pending-confirmation",
  /**
   * <p>The association has been validated and is functioning correctly.</p>
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
export const WebhookType = {
  /**
   * <p>API key-based webhook authentication</p>
   */
  API_KEY: "apikey",
  /**
   * <p>GitLab-specific webhook authentication</p>
   */
  GITLAB: "gitlab",
  /**
   * <p>HMAC-based webhook authentication</p>
   */
  HMAC: "hmac",
  /**
   * <p>pagerduty-specific webhook authentication</p>
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
   * <p>IAM-based authentication flow</p>
   */
  IAM: "iam",
  /**
   * <p>Identity Center (IdC) authentication flow</p>
   */
  IDC: "idc",
  /**
   * <p>Identity Provider (IdP) authentication flow</p>
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
export const Priority = {
  /**
   * <p>Highest priority</p>
   */
  CRITICAL: "CRITICAL",
  /**
   * <p>High priority</p>
   */
  HIGH: "HIGH",
  /**
   * <p>Low priority</p>
   */
  LOW: "LOW",
  /**
   * <p>Medium priority</p>
   */
  MEDIUM: "MEDIUM",
  /**
   * <p>Minimal priority</p>
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
   * <p>Task for evaluating options or solutions (not in use)</p>
   */
  EVALUATION: "EVALUATION",
  /**
   * <p>Task for investigating issues or requirements</p>
   */
  INVESTIGATION: "INVESTIGATION",
  /**
   * <p>Task for reviewing changes for production readiness</p>
   */
  RELEASE_READINESS_REVIEW: "RELEASE_READINESS_REVIEW",
  /**
   * <p>Task for automated release testing</p>
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
   * <p>Task has been canceled</p>
   */
  CANCELED: "CANCELED",
  /**
   * <p>Task has been completed successfully</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>Task has failed</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Task is currently being worked on</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
  /**
   * <p>Task has been linked to another task</p>
   */
  LINKED: "LINKED",
  /**
   * <p>Task is completed but awaiting customer approval (not in use)</p>
   */
  PENDING_CUSTOMER_APPROVAL: "PENDING_CUSTOMER_APPROVAL",
  /**
   * <p>Task is created but not yet started</p>
   */
  PENDING_START: "PENDING_START",
  /**
   * <p>Task is awaiting triage analysis</p>
   */
  PENDING_TRIAGE: "PENDING_TRIAGE",
  /**
   * <p>Task has been skipped by triage</p>
   */
  SKIPPED: "SKIPPED",
  /**
   * <p>Task has exceeded its time limit</p>
   */
  TIMED_OUT: "TIMED_OUT",
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
   * <p>AWS IAM user type</p>
   */
  IAM: "IAM",
  /**
   * <p>AWS IAM Identity Center user type</p>
   */
  IDC: "IDC",
  /**
   * <p>External Identity Provider user type</p>
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
   * <p>Enable private DNS resolution within VPC for resources behind this resource gateway.</p>
   */
  IN_VPC: "IN_VPC",
  /**
   * <p>Use public DNS resolution for resources behind this resource gateway.</p>
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
export const RecommendationPriority = {
  /**
   * <p>High priority recommendation requiring immediate attention</p>
   */
  HIGH: "HIGH",
  /**
   * <p>Low priority recommendation that can be addressed later</p>
   */
  LOW: "LOW",
  /**
   * <p>Medium priority recommendation for normal processing</p>
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
   * <p>Recommendation has been accepted by the user</p>
   */
  ACCEPTED: "ACCEPTED",
  /**
   * <p>Recommendation has been closed and is no longer relevant</p>
   */
  CLOSED: "CLOSED",
  /**
   * <p>Recommendation has been completed by the user</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>Recommendation has been generated but not yet acted upon</p>
   */
  PROPOSED: "PROPOSED",
  /**
   * <p>Recommendation has been rejected by the user</p>
   */
  REJECTED: "REJECTED",
  /**
   * <p>Recommendation is being actively updated</p>
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
   * <p>Ascending order</p>
   */
  ASC: "ASC",
  /**
   * <p>Descending order</p>
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
   * <p>Sort by task creation timestamp</p>
   */
  CREATED_AT: "CREATED_AT",
  /**
   * <p>Sort by task priority level</p>
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
   * <p>Execution has been canceled</p>
   */
  CANCELED: "CANCELED",
  /**
   * <p>Execution has failed</p>
   */
  FAILED: "FAILED",
  /**
   * <p>Execution is currently running</p>
   */
  RUNNING: "RUNNING",
  /**
   * <p>Execution has been stopped</p>
   */
  STOPPED: "STOPPED",
  /**
   * <p>Unlike in the case of user-initiated Cancelation, a customer won't be billed</p>
   */
  TIMED_OUT: "TIMED_OUT",
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
   * <p>Goal defined by customer</p>
   */
  CUSTOMER_DEFINED: "CUSTOMER_DEFINED",
  /**
   * <p>Goal related to on-call reporting activities</p>
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
   * <p>Goal is active and being evaluated according to schedule</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>Goal has been marked as completed</p>
   */
  COMPLETE: "COMPLETE",
  /**
   * <p>Goal evaluations are temporarily paused</p>
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
   * <p>Schedule is disabled and will not trigger goal evaluations</p>
   */
  DISABLED: "DISABLED",
  /**
   * <p>Schedule is enabled and will trigger goal evaluations</p>
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
   * <p>Ascending order</p>
   */
  ASC: "ASC",
  /**
   * <p>Descending order</p>
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
   * <p>Azure Service with AWS Outbound Identity Federation.</p>
   */
  AZURE_IDENTITY: "azureidentity",
  DYNATRACE: "dynatrace",
  EVENTCHANNEL: "eventChannel",
  GITHUB: "github",
  GITLAB: "gitlab",
  /**
   * <p>Model Context Protocol server.</p>
   */
  MCP_SERVER: "mcpserver",
  /**
   * <p>Datadog MCP server.</p>
   */
  MCP_SERVER_DATADOG: "mcpserverdatadog",
  /**
   * <p>Grafana MCP server.</p>
   */
  MCP_SERVER_GRAFANA: "mcpservergrafana",
  /**
   * <p>NewRelic MCP server.</p>
   */
  MCP_SERVER_NEWRELIC: "mcpservernewrelic",
  /**
   * <p>SigV4-authenticated MCP server.</p>
   */
  MCP_SERVER_SIGV4: "mcpserversigv4",
  /**
   * <p>Splunk MCP server.</p>
   */
  MCP_SERVER_SPLUNK: "mcpserversplunk",
  PAGERDUTY: "pagerduty",
  /**
   * <p>Remote A2A agent with token-based authentication (API key or OAuth).</p>
   */
  REMOTE_AGENT: "remoteagent",
  /**
   * <p>Remote A2A agent with SigV4 authentication.</p>
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
   * <p>Azure Service with AWS Outbound Identity Federation.</p>
   */
  AZURE_IDENTITY: "azureidentity",
  DYNATRACE: "dynatrace",
  EVENTCHANNEL: "eventChannel",
  GITLAB: "gitlab",
  /**
   * <p>Model Context Protocol server.</p>
   */
  MCP_SERVER: "mcpserver",
  /**
   * <p>Datadog MCP server.</p>
   */
  MCP_SERVER_DATADOG: "mcpserverdatadog",
  /**
   * <p>Grafana MCP server.</p>
   */
  MCP_SERVER_GRAFANA: "mcpservergrafana",
  /**
   * <p>NewRelic MCP server.</p>
   */
  MCP_SERVER_NEWRELIC: "mcpservernewrelic",
  /**
   * <p>SigV4-authenticated MCP server.</p>
   */
  MCP_SERVER_SIGV4: "mcpserversigv4",
  /**
   * <p>Splunk MCP server.</p>
   */
  MCP_SERVER_SPLUNK: "mcpserversplunk",
  PAGERDUTY: "pagerduty",
  /**
   * <p>Remote A2A agent with token-based authentication (API key or OAuth).</p>
   */
  REMOTE_AGENT: "remoteagent",
  /**
   * <p>Remote A2A agent with SigV4 authentication.</p>
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
   * <p>Webhook-based event channel</p>
   */
  WEBHOOK: "webhook",
} as const;
/**
 * @public
 */
export type EventChannelType = (typeof EventChannelType)[keyof typeof EventChannelType];
