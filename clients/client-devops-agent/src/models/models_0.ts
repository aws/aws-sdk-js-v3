// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AuthFlow,
  EventChannelType,
  ExecutionStatus,
  GithubRepoOwnerType,
  GitLabTokenType,
  GoalStatus,
  GoalType,
  IpAddressType,
  MCPServerAuthorizationMethod,
  MonitorAccountType,
  NewRelicRegion,
  OrderType,
  PostRegisterServiceSupportedService,
  Priority,
  PrivateConnectionStatus,
  PrivateConnectionType,
  RecommendationPriority,
  RecommendationStatus,
  SchedulerState,
  Service,
  SourceAccountType,
  TaskSortField,
  TaskSortOrder,
  TaskStatus,
  TaskType,
  UserType,
  ValidationStatus,
  WebhookType,
} from "./enums";

/**
 * Details specific to a registered Azure DevOps service.
 * @public
 */
export interface RegisteredAzureDevOpsServiceDetails {
  /**
   * The Azure DevOps Organization name associated with the service.
   * @public
   */
  organizationName: string | undefined;
}

/**
 * Details specific to a registered Azure identity using AWS Outbound Identity Federation.
 * @public
 */
export interface RegisteredAzureIdentityDetails {
  /**
   * The Azure Active Directory tenant ID for the identity.
   * @public
   */
  tenantId: string | undefined;

  /**
   * The client ID of the service principal or managed identity used for authentication.
   * @public
   */
  clientId: string | undefined;

  /**
   * The role ARN to be assumed by DevOps Agent for requesting Web Identity Token.
   * @public
   */
  webIdentityRoleArn: string | undefined;

  /**
   * The audiences for the Web Identity Token.
   * @public
   */
  webIdentityTokenAudiences: string[] | undefined;
}

/**
 * Details specific to a registered GitHub service.
 * @public
 */
export interface RegisteredGithubServiceDetails {
  /**
   * The GitHub repository owner name.
   * @public
   */
  owner: string | undefined;

  /**
   * The GitHub repository owner type.
   * @public
   */
  ownerType: GithubRepoOwnerType | undefined;

  /**
   * The GitHub Enterprise Server instance URL (absent for github.com).
   * @public
   */
  targetUrl?: string | undefined;
}

/**
 * Details specific to a registered GitLab instance.
 * @public
 */
export interface RegisteredGitLabServiceDetails {
  /**
   * The GitLab instance URL.
   * @public
   */
  targetUrl: string | undefined;

  /**
   * Type of GitLab access token
   * @public
   */
  tokenType: GitLabTokenType | undefined;

  /**
   * Optional GitLab group ID for group-level access tokens
   * @public
   */
  groupId?: string | undefined;
}

/**
 * Details specific to a registered MCP (Model Context Protocol) server.
 * @public
 */
export interface RegisteredMCPServerDetails {
  /**
   * The MCP server name.
   * @public
   */
  name: string | undefined;

  /**
   * The MCP server endpoint URL.
   * @public
   */
  endpoint: string | undefined;

  /**
   * The MCP server uses this authorization method.
   * @public
   */
  authorizationMethod: MCPServerAuthorizationMethod | undefined;

  /**
   * Optional description for the MCP server.
   * @public
   */
  description?: string | undefined;

  /**
   * If the MCP server uses API key authentication, these details are provided.
   * @public
   */
  apiKeyHeader?: string | undefined;
}

/**
 * Details specific to a registered Grafana server, used by the built-in MCP server.
 * @public
 */
export interface RegisteredGrafanaServerDetails {
  /**
   * Grafana instance URL (e.g., https://your-instance.grafana.net)
   * @public
   */
  endpoint: string | undefined;

  /**
   * The authz method used by the MCP server.
   * @public
   */
  authorizationMethod: MCPServerAuthorizationMethod | undefined;
}

/**
 * Details specific to a registered NewRelic instance.
 * @public
 */
export interface RegisteredNewRelicDetails {
  /**
   * The NewRelic account ID.
   * @public
   */
  accountId: string | undefined;

  /**
   * The NewRelic region (determines API endpoint).
   * @public
   */
  region: NewRelicRegion | undefined;

  /**
   * Optional user description.
   * @public
   */
  description?: string | undefined;
}

/**
 * Details specific to a registered PagerDuty service.
 * @public
 */
export interface RegisteredPagerDutyDetails {
  /**
   * The scopes that were assigned to the service
   * @public
   */
  scopes: string[] | undefined;
}

/**
 * Details specific to a registered ServiceNow instance.
 * @public
 */
export interface RegisteredServiceNowDetails {
  /**
   * The ServiceNow instance url
   * @public
   */
  instanceUrl?: string | undefined;
}

/**
 * Details specific to a registered Slack workspace.
 * @public
 */
export interface RegisteredSlackServiceDetails {
  /**
   * The Slack team ID.
   * @public
   */
  teamId: string | undefined;

  /**
   * The Slack team name.
   * @public
   */
  teamName: string | undefined;
}

/**
 * Union of service-specific details for different service types.
 * @public
 */
export type AdditionalServiceDetails =
  | AdditionalServiceDetails.AzuredevopsMember
  | AdditionalServiceDetails.AzureidentityMember
  | AdditionalServiceDetails.GithubMember
  | AdditionalServiceDetails.GitlabMember
  | AdditionalServiceDetails.McpserverMember
  | AdditionalServiceDetails.McpserverdatadogMember
  | AdditionalServiceDetails.McpservergrafanaMember
  | AdditionalServiceDetails.McpservernewrelicMember
  | AdditionalServiceDetails.McpserversplunkMember
  | AdditionalServiceDetails.PagerdutyMember
  | AdditionalServiceDetails.ServicenowMember
  | AdditionalServiceDetails.SlackMember
  | AdditionalServiceDetails.$UnknownMember;

/**
 * @public
 */
export namespace AdditionalServiceDetails {
  /**
   * GitHub-specific service details.
   * @public
   */
  export interface GithubMember {
    github: RegisteredGithubServiceDetails;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Slack-specific service details.
   * @public
   */
  export interface SlackMember {
    github?: never;
    slack: RegisteredSlackServiceDetails;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Datadog MCP server-specific service details.
   * @public
   */
  export interface McpserverdatadogMember {
    github?: never;
    slack?: never;
    mcpserverdatadog: RegisteredMCPServerDetails;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * MCP server-specific service details.
   * @public
   */
  export interface McpserverMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver: RegisteredMCPServerDetails;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * ServiceNow-specific service details.
   * @public
   */
  export interface ServicenowMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow: RegisteredServiceNowDetails;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * GitLab-specific service details.
   * @public
   */
  export interface GitlabMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab: RegisteredGitLabServiceDetails;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Splunk MCP server-specific service details.
   * @public
   */
  export interface McpserversplunkMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk: RegisteredMCPServerDetails;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * New Relic MCP server-specific service details.
   * @public
   */
  export interface McpservernewrelicMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic: RegisteredNewRelicDetails;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Azure DevOps specific service details.
   * @public
   */
  export interface AzuredevopsMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops: RegisteredAzureDevOpsServiceDetails;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Azure identity details for services using Azure authentication.
   * @public
   */
  export interface AzureidentityMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity: RegisteredAzureIdentityDetails;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Grafana MCP server-specific service details.
   * @public
   */
  export interface McpservergrafanaMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana: RegisteredGrafanaServerDetails;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Pagerduty service details.
   * @public
   */
  export interface PagerdutyMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty: RegisteredPagerDutyDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    slack?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    servicenow?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    azuredevops?: never;
    azureidentity?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: RegisteredGithubServiceDetails) => T;
    slack: (value: RegisteredSlackServiceDetails) => T;
    mcpserverdatadog: (value: RegisteredMCPServerDetails) => T;
    mcpserver: (value: RegisteredMCPServerDetails) => T;
    servicenow: (value: RegisteredServiceNowDetails) => T;
    gitlab: (value: RegisteredGitLabServiceDetails) => T;
    mcpserversplunk: (value: RegisteredMCPServerDetails) => T;
    mcpservernewrelic: (value: RegisteredNewRelicDetails) => T;
    azuredevops: (value: RegisteredAzureDevOpsServiceDetails) => T;
    azureidentity: (value: RegisteredAzureIdentityDetails) => T;
    mcpservergrafana: (value: RegisteredGrafanaServerDetails) => T;
    pagerduty: (value: RegisteredPagerDutyDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details for completing OAuth authorization step.
 * @public
 */
export interface OAuthAdditionalStepDetails {
  /**
   * The URL to redirect the user to for OAuth authorization.
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * Additional steps required to complete service registration.
 * @public
 */
export type AdditionalServiceRegistrationStep =
  | AdditionalServiceRegistrationStep.OauthMember
  | AdditionalServiceRegistrationStep.$UnknownMember;

/**
 * @public
 */
export namespace AdditionalServiceRegistrationStep {
  /**
   * OAuth authorization step required.
   * @public
   */
  export interface OauthMember {
    oauth: OAuthAdditionalStepDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauth: (value: OAuthAdditionalStepDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.
 * @public
 */
export interface AgentSpace {
  /**
   * The name of the AgentSpace.
   * @public
   */
  name: string | undefined;

  /**
   * The description of the AgentSpace.
   * @public
   */
  description?: string | undefined;

  /**
   * The locale for the AgentSpace, which determines the language used in agent responses.
   * @public
   */
  locale?: string | undefined;

  /**
   * The timestamp when the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Configuration for AWS monitor account integration, allowing AIDevOps to monitor AWS resources.
 * @public
 */
export interface AWSConfiguration {
  /**
   * Role ARN to be assumed by AIDevOps to operate on behalf of customer.
   * @public
   */
  assumableRoleArn: string | undefined;

  /**
   * AWS Account Id corresponding to provided resources.
   * @public
   */
  accountId: string | undefined;

  /**
   * Account Type 'monitor' for AIDevOps monitoring.
   * @public
   */
  accountType: MonitorAccountType | undefined;
}

/**
 * Configuration for Azure subscription integration.
 * @public
 */
export interface AzureConfiguration {
  /**
   * Azure subscription ID corresponding to provided resources.
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * Configuration for Azure DevOps project integration.
 * @public
 */
export interface AzureDevOpsConfiguration {
  /**
   * Azure DevOps organization name.
   * @public
   */
  organizationName: string | undefined;

  /**
   * Azure DevOps project ID.
   * @public
   */
  projectId: string | undefined;

  /**
   * Azure DevOps project name.
   * @public
   */
  projectName: string | undefined;
}

/**
 * Configuration for Dynatrace monitoring integration.
 * @public
 */
export interface DynatraceConfiguration {
  /**
   * Dynatrace environment id
   * @public
   */
  envId: string | undefined;

  /**
   * List of Dynatrace resources to monitor
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * Configuration for Event Channel integration.
 * @public
 */
export interface EventChannelConfiguration {}

/**
 * Configuration for GitHub repository integration.
 * @public
 */
export interface GitHubConfiguration {
  /**
   * Associated Github repo name
   * @public
   */
  repoName: string | undefined;

  /**
   * Associated Github repo ID
   * @public
   */
  repoId: string | undefined;

  /**
   * The GitHub repository owner name.
   * @public
   */
  owner: string | undefined;

  /**
   * Type of GitHub repository owner.
   * @public
   */
  ownerType: GithubRepoOwnerType | undefined;

  /**
   * GitHub instance identifier (e.g., github.com or github.enterprise.com)
   * @public
   */
  instanceIdentifier?: string | undefined;
}

/**
 * Configuration for GitLab project integration.
 * @public
 */
export interface GitLabConfiguration {
  /**
   * GitLab numeric project ID.
   * @public
   */
  projectId: string | undefined;

  /**
   * Full GitLab project path (e.g., namespace/project-name).
   * @public
   */
  projectPath: string | undefined;

  /**
   * GitLab instance identifier (e.g., gitlab.com or e2e.gamma.dev.us-east-1.gitlab.falco.ai.aws.dev)
   * @public
   */
  instanceIdentifier?: string | undefined;
}

/**
 * Configuration for Model Context Protocol (MCP) server integration.
 * @public
 */
export interface MCPServerConfiguration {
  /**
   * List of MCP tools can be used with the association.
   * @public
   */
  tools: string[] | undefined;
}

/**
 * Mixin for webhook update support.
 * @public
 */
export interface MCPServerDatadogConfiguration {}

/**
 * Configuration for Grafana MCP server integration, used with an AWS-hosted MCP server.
 * @public
 */
export interface MCPServerGrafanaConfiguration {
  /**
   * Grafana instance URL (e.g., https://your-instance.grafana.net)
   * @public
   */
  endpoint: string | undefined;

  /**
   * The Grafana organization ID that can be used.
   * @public
   */
  organizationId?: string | undefined;

  /**
   * List of MCP tools that can be used.
   * @public
   */
  tools?: string[] | undefined;
}

/**
 * Mixin for webhook update support.
 * @public
 */
export interface MCPServerNewRelicConfiguration {
  /**
   * New Relic Account ID
   * @public
   */
  accountId: string | undefined;

  /**
   * MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/)
   * @public
   */
  endpoint: string | undefined;
}

/**
 * Mixin for webhook update support.
 * @public
 */
export interface MCPServerSplunkConfiguration {}

/**
 * Configuration for Pagerduty integration.
 * @public
 */
export interface PagerDutyConfiguration {
  /**
   * List of Pagerduty service available for the association.
   * @public
   */
  services: string[] | undefined;

  /**
   * Email to be used in Pagerduty API header
   * @public
   */
  customerEmail: string | undefined;
}

/**
 * Configuration for ServiceNow instance integration.
 * @public
 */
export interface ServiceNowConfiguration {
  /**
   * ServiceNow instance ID
   * @public
   */
  instanceId?: string | undefined;

  /**
   * Scoped down authentication scopes for fine grained control
   * @public
   */
  authScopes?: string[] | undefined;
}

/**
 * Represents a Slack channel with its ID and optional name.
 * @public
 */
export interface SlackChannel {
  /**
   * Slack channel name
   * @public
   */
  channelName?: string | undefined;

  /**
   * Slack channel ID
   * @public
   */
  channelId: string | undefined;
}

/**
 * Defines Slack channels for different types of agent notifications.
 * @public
 */
export interface SlackTransmissionTarget {
  /**
   * Destination for On-call Agent (Ops1)
   * @public
   */
  opsOncallTarget: SlackChannel | undefined;

  /**
   * Destination for SRE Agent (Ops1.5)
   * @public
   */
  opsSRETarget?: SlackChannel | undefined;
}

/**
 * Configuration for Slack workspace integration.
 * @public
 */
export interface SlackConfiguration {
  /**
   * Associated Slack workspace ID
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Associated Slack workspace name
   * @public
   */
  workspaceName: string | undefined;

  /**
   * Transmission targets for agent notifications
   * @public
   */
  transmissionTarget: SlackTransmissionTarget | undefined;
}

/**
 * Configuration for AWS source account integration. Note: passRole check on 'assumableRoleArn' is not supported.
 * @public
 */
export interface SourceAwsConfiguration {
  /**
   * AWS Account Id corresponding to provided resources.
   * @public
   */
  accountId: string | undefined;

  /**
   * Account Type 'source' for AIDevOps monitoring.
   * @public
   */
  accountType: SourceAccountType | undefined;

  /**
   * Role ARN to be assumed by AIDevOps to operate on behalf of customer.
   * @public
   */
  assumableRoleArn: string | undefined;

  /**
   * External ID for additional security when assuming the role. Used to prevent the confused deputy problem.
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Union of all supported service configuration types. Each service has its own specific configuration structure.
 * @public
 */
export type ServiceConfiguration =
  | ServiceConfiguration.AwsMember
  | ServiceConfiguration.AzureMember
  | ServiceConfiguration.AzuredevopsMember
  | ServiceConfiguration.DynatraceMember
  | ServiceConfiguration.EventChannelMember
  | ServiceConfiguration.GithubMember
  | ServiceConfiguration.GitlabMember
  | ServiceConfiguration.McpserverMember
  | ServiceConfiguration.McpserverdatadogMember
  | ServiceConfiguration.McpservergrafanaMember
  | ServiceConfiguration.McpservernewrelicMember
  | ServiceConfiguration.McpserversplunkMember
  | ServiceConfiguration.PagerdutyMember
  | ServiceConfiguration.ServicenowMember
  | ServiceConfiguration.SlackMember
  | ServiceConfiguration.SourceAwsMember
  | ServiceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ServiceConfiguration {
  /**
   * AWS source account configuration for monitoring resources.
   * @public
   */
  export interface SourceAwsMember {
    sourceAws: SourceAwsConfiguration;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * AWS monitor account configuration.
   * @public
   */
  export interface AwsMember {
    sourceAws?: never;
    aws: AWSConfiguration;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * GitHub repository integration configuration.
   * @public
   */
  export interface GithubMember {
    sourceAws?: never;
    aws?: never;
    github: GitHubConfiguration;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Slack workspace integration configuration.
   * @public
   */
  export interface SlackMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack: SlackConfiguration;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Dynatrace monitoring integration configuration.
   * @public
   */
  export interface DynatraceMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace: DynatraceConfiguration;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * ServiceNow instance integration configuration.
   * @public
   */
  export interface ServicenowMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow: ServiceNowConfiguration;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * NewRelic instance integration configuration.
   * @public
   */
  export interface McpservernewrelicMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic: MCPServerNewRelicConfiguration;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Datadog MCP server integration configuration.
   * @public
   */
  export interface McpserverdatadogMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog: MCPServerDatadogConfiguration;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * MCP (Model Context Protocol) server integration configuration.
   * @public
   */
  export interface McpserverMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver: MCPServerConfiguration;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * GitLab project integration configuration.
   * @public
   */
  export interface GitlabMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab: GitLabConfiguration;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Splunk MCP server integration configuration.
   * @public
   */
  export interface McpserversplunkMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk: MCPServerSplunkConfiguration;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Event Channel instance integration configuration.
   * @public
   */
  export interface EventChannelMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel: EventChannelConfiguration;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Azure subscription integration configuration.
   * @public
   */
  export interface AzureMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure: AzureConfiguration;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Azure DevOps project integration configuration.
   * @public
   */
  export interface AzuredevopsMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops: AzureDevOpsConfiguration;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * Grafana MCP server integration configuration.
   * @public
   */
  export interface McpservergrafanaMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana: MCPServerGrafanaConfiguration;
    pagerduty?: never;
    $unknown?: never;
  }

  /**
   * PagerDuty integration configuration
   * @public
   */
  export interface PagerdutyMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty: PagerDutyConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sourceAws?: never;
    aws?: never;
    github?: never;
    slack?: never;
    dynatrace?: never;
    servicenow?: never;
    mcpservernewrelic?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    eventChannel?: never;
    azure?: never;
    azuredevops?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sourceAws: (value: SourceAwsConfiguration) => T;
    aws: (value: AWSConfiguration) => T;
    github: (value: GitHubConfiguration) => T;
    slack: (value: SlackConfiguration) => T;
    dynatrace: (value: DynatraceConfiguration) => T;
    servicenow: (value: ServiceNowConfiguration) => T;
    mcpservernewrelic: (value: MCPServerNewRelicConfiguration) => T;
    mcpserverdatadog: (value: MCPServerDatadogConfiguration) => T;
    mcpserver: (value: MCPServerConfiguration) => T;
    gitlab: (value: GitLabConfiguration) => T;
    mcpserversplunk: (value: MCPServerSplunkConfiguration) => T;
    eventChannel: (value: EventChannelConfiguration) => T;
    azure: (value: AzureConfiguration) => T;
    azuredevops: (value: AzureDevOpsConfiguration) => T;
    mcpservergrafana: (value: MCPServerGrafanaConfiguration) => T;
    pagerduty: (value: PagerDutyConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for creating a new service association within an AgentSpace.
 * @public
 */
export interface AssociateServiceInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the service.
   * @public
   */
  serviceId: string | undefined;

  /**
   * The configuration that directs how AgentSpace interacts with the given service.
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * Represents a service association within an AgentSpace, defining how the agent interacts with external services.
 * @public
 */
export interface Association {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The timestamp when the resource was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the resource was last updated.
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Validation status
   * @public
   */
  status?: ValidationStatus | undefined;

  /**
   * The unique identifier of the given association.
   * @public
   */
  associationId: string | undefined;

  /**
   * The identifier for associated service
   * @public
   */
  serviceId: string | undefined;

  /**
   * The configuration that directs how AgentSpace interacts with the given service.
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * Generic webhook configuration for services that support webhook notifications.
 * @public
 */
export interface GenericWebhook {
  /**
   * The webhook URL endpoint
   * @public
   */
  webhookUrl?: string | undefined;

  /**
   * The unique webhook identifier
   * @public
   */
  webhookId?: string | undefined;

  /**
   * The webhook authentication type
   * @public
   */
  webhookType?: WebhookType | undefined;

  /**
   * The webhook secret for authentication
   * @public
   */
  webhookSecret?: string | undefined;

  /**
   * API Key for API Key webhook authentication
   * @public
   */
  apiKey?: string | undefined;
}

/**
 * Output containing the newly created association and optional webhook configuration.
 * @public
 */
export interface AssociateServiceOutput {
  /**
   * Represents a service association within an AgentSpace, defining how the agent interacts with external services.
   * @public
   */
  association: Association | undefined;

  /**
   * Generic webhook configuration
   * @public
   */
  webhook?: GenericWebhook | undefined;
}

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

/**
 * Input for removing a service association from an AgentSpace.
 * @public
 */
export interface DisassociateServiceInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the given association.
   * @public
   */
  associationId: string | undefined;
}

/**
 * Empty output for successful service disassociation.
 * @public
 */
export interface DisassociateServiceOutput {}

/**
 * Input for retrieving a specific service association.
 * @public
 */
export interface GetAssociationInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the given association.
   * @public
   */
  associationId: string | undefined;
}

/**
 * Output containing the requested association details.
 * @public
 */
export interface GetAssociationOutput {
  /**
   * Represents a service association within an AgentSpace, defining how the agent interacts with external services.
   * @public
   */
  association: Association | undefined;
}

/**
 * Input for listing service associations within an AgentSpace.
 * @public
 */
export interface ListAssociationsInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A comma-separated list of service types to filter list associations output
   * @public
   */
  filterServiceTypes?: string | undefined;
}

/**
 * Output containing a list of service associations and pagination token.
 * @public
 */
export interface ListAssociationsOutput {
  /**
   * Token to retrieve the next page of results, if there are more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of associations.
   * @public
   */
  associations: Association[] | undefined;
}

/**
 * Input for listing service webhooks within an association.
 * @public
 */
export interface ListWebhooksInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the given association.
   * @public
   */
  associationId: string | undefined;
}

/**
 * Represents a complete Webhook with all its properties, and unique identifier.
 * @public
 */
export interface Webhook {
  /**
   * Webhook endpoint URL.
   * @public
   */
  webhookUrl: string | undefined;

  /**
   * Webhook authentication type.
   * @public
   */
  webhookType?: WebhookType | undefined;

  /**
   * The unique identifier of the Webhook
   * @public
   */
  webhookId: string | undefined;
}

/**
 * Output containing a list of service association webhooks.
 * @public
 */
export interface ListWebhooksOutput {
  /**
   * The list of association webhooks.
   * @public
   */
  webhooks: Webhook[] | undefined;
}

/**
 * Input for updating an existing service association. Present fields are fully replaced; absent fields are left unchanged.
 * @public
 */
export interface UpdateAssociationInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the given association.
   * @public
   */
  associationId: string | undefined;

  /**
   * The configuration that directs how AgentSpace interacts with the given service. The entire configuration is replaced on update.
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * Output containing the updated association and optional webhook configuration.
 * @public
 */
export interface UpdateAssociationOutput {
  /**
   * Represents a service association within an AgentSpace, defining how the agent interacts with external services.
   * @public
   */
  association: Association | undefined;

  /**
   * Generic webhook configuration
   * @public
   */
  webhook?: GenericWebhook | undefined;
}

/**
 * Input for validating an aws association
 * @public
 */
export interface ValidateAwsAssociationsInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Empty Output for successful validating an aws association
 * @public
 */
export interface ValidateAwsAssociationsOutput {}

/**
 * Input for creating a new AgentSpace.
 * @public
 */
export interface CreateAgentSpaceInput {
  /**
   * The name of the AgentSpace.
   * @public
   */
  name: string | undefined;

  /**
   * The description of the AgentSpace.
   * @public
   */
  description?: string | undefined;

  /**
   * The locale for the AgentSpace, which determines the language used in agent responses.
   * @public
   */
  locale?: string | undefined;

  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Client-provided token to ensure request idempotency. When the same token is provided in subsequent calls, the same response is returned within a 8-hour window.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags to add to the AgentSpace at creation time.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output containing the newly created AgentSpace.
 * @public
 */
export interface CreateAgentSpaceOutput {
  /**
   * Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.
   * @public
   */
  agentSpace: AgentSpace | undefined;

  /**
   * Tags associated with the created AgentSpace.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for deleting an AgentSpace.
 * @public
 */
export interface DeleteAgentSpaceInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Empty output for successful AgentSpace deletion.
 * @public
 */
export interface DeleteAgentSpaceOutput {}

/**
 * Input for disabling the Operator App for an AgentSpace.
 * @public
 */
export interface DisableOperatorAppInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The authentication flow configured for the operator App. e.g. idc
   * @public
   */
  authFlow?: AuthFlow | undefined;
}

/**
 * Input for enabling the Operator App for an AgentSpace.
 * @public
 */
export interface EnableOperatorAppInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The authentication flow configured for the operator App. e.g. iam or idc
   * @public
   */
  authFlow: AuthFlow | undefined;

  /**
   * The IAM role end users assume to access AIDevOps APIs
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * The IdC instance Arn used to create an IdC auth application
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * The OIDC issuer URL of the external Identity Provider
   * @public
   */
  issuerUrl?: string | undefined;

  /**
   * The OIDC client ID for the IdP application
   * @public
   */
  idpClientId?: string | undefined;

  /**
   * The OIDC client secret for the IdP application
   * @public
   */
  idpClientSecret?: string | undefined;

  /**
   * The Identity Provider name (e.g., Entra, Okta, Google)
   * @public
   */
  provider?: string | undefined;
}

/**
 * Configuration for IAM-based authentication flow for the Operator App.
 * @public
 */
export interface IamAuthConfiguration {
  /**
   * The IAM role end users assume to access AIDevOps APIs
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * The timestamp when the Operator App IAM auth flow was enabled.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the Operator App IAM auth flow was updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.
 * @public
 */
export interface IdcAuthConfiguration {
  /**
   * The IAM role end users assume to access AIDevOps APIs
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * The IdC instance Arn used to create an IdC auth application
   * @public
   */
  idcInstanceArn: string | undefined;

  /**
   * The IdC application Arn created for IdC auth
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * The timestamp when the Operator App IdC auth flow was enabled.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the Operator App IdC auth flow was updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Configuration for external Identity Provider OIDC authentication flow for the Operator App.
 * @public
 */
export interface IdpAuthConfiguration {
  /**
   * The OIDC issuer URL of the external Identity Provider
   * @public
   */
  issuerUrl: string | undefined;

  /**
   * The OIDC client ID for the IdP application
   * @public
   */
  clientId: string | undefined;

  /**
   * The IAM role end users assume to access AIDevOps APIs
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * The Identity Provider name (e.g., Entra, Okta, Google)
   * @public
   */
  provider: string | undefined;

  /**
   * The timestamp when the Operator App IdP auth flow was enabled.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the Operator App IdP auth flow was updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output containing the enabled Operator App configuration.
 * @public
 */
export interface EnableOperatorAppOutput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Configuration for IAM-based authentication flow for the Operator App.
   * @public
   */
  iam?: IamAuthConfiguration | undefined;

  /**
   * Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.
   * @public
   */
  idc?: IdcAuthConfiguration | undefined;

  /**
   * Configuration for external Identity Provider OIDC authentication flow for the Operator App.
   * @public
   */
  idp?: IdpAuthConfiguration | undefined;
}

/**
 * Input for retrieving a specific AgentSpace by ID.
 * @public
 */
export interface GetAgentSpaceInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output containing the requested AgentSpace details.
 * @public
 */
export interface GetAgentSpaceOutput {
  /**
   * Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.
   * @public
   */
  agentSpace: AgentSpace | undefined;

  /**
   * Tags associated with the AgentSpace.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for retrieving Operator App configuration.
 * @public
 */
export interface GetOperatorAppInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output containing the Operator App configuration including authentication details.
 * @public
 */
export interface GetOperatorAppOutput {
  /**
   * Configuration for IAM-based authentication flow for the Operator App.
   * @public
   */
  iam?: IamAuthConfiguration | undefined;

  /**
   * Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.
   * @public
   */
  idc?: IdcAuthConfiguration | undefined;

  /**
   * Configuration for external Identity Provider OIDC authentication flow for the Operator App.
   * @public
   */
  idp?: IdpAuthConfiguration | undefined;
}

/**
 * Input for listing AgentSpaces with pagination support.
 * @public
 */
export interface ListAgentSpacesInput {
  /**
   * Maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Output containing a list of AgentSpaces and pagination token.
 * @public
 */
export interface ListAgentSpacesOutput {
  /**
   * Token to retrieve the next page of results, if there are more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of AgentSpaces.
   * @public
   */
  agentSpaces: AgentSpace[] | undefined;
}

/**
 * Input for updating an existing AgentSpace's properties. All fields except agentSpaceId are optional for partial updates.
 * @public
 */
export interface UpdateAgentSpaceInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated name of the AgentSpace.
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the AgentSpace.
   * @public
   */
  description?: string | undefined;

  /**
   * The updated locale for the AgentSpace, which determines the language used in agent responses.
   * @public
   */
  locale?: string | undefined;
}

/**
 * Output containing the updated AgentSpace.
 * @public
 */
export interface UpdateAgentSpaceOutput {
  /**
   * Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.
   * @public
   */
  agentSpace: AgentSpace | undefined;
}

/**
 * Input for updating the external Identity Provider configuration for the Operator App.
 * @public
 */
export interface UpdateOperatorAppIdpConfigInput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The OIDC client secret for the IdP application
   * @public
   */
  idpClientSecret?: string | undefined;
}

/**
 * Output containing the updated IdP configuration.
 * @public
 */
export interface UpdateOperatorAppIdpConfigOutput {
  /**
   * The unique identifier of the AgentSpace
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Configuration for external Identity Provider OIDC authentication flow for the Operator App.
   * @public
   */
  idp: IdpAuthConfiguration | undefined;
}

/**
 * A block of content in an assistant message.
 * @public
 */
export type AssistantMessageBlock =
  | AssistantMessageBlock.TextMember
  | AssistantMessageBlock.ToolUseMember
  | AssistantMessageBlock.$UnknownMember;

/**
 * @public
 */
export namespace AssistantMessageBlock {
  /**
   * Text content from the assistant.
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    $unknown?: never;
  }

  /**
   * Tool use request from the assistant.
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    toolUse: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single chat execution summary
 * @public
 */
export interface ChatExecution {
  /**
   * The unique identifier for the execution
   * @public
   */
  executionId: string | undefined;

  /**
   * Timestamp when the chat was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when the chat was last updated
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Summary or title of the chat
   * @public
   */
  summary?: string | undefined;
}

/**
 * Reference information linking a task to external systems - for input with validation
 * @public
 */
export interface ReferenceInput {
  /**
   * The name of the external system
   * @public
   */
  system: string | undefined;

  /**
   * Optional title for the reference
   * @public
   */
  title?: string | undefined;

  /**
   * The unique identifier in the external system
   * @public
   */
  referenceId: string | undefined;

  /**
   * URL to access the reference in the external system
   * @public
   */
  referenceUrl: string | undefined;

  /**
   * Association identifier of the external system
   * @public
   */
  associationId: string | undefined;
}

/**
 * Request structure for creating a new backlog task
 * @public
 */
export interface CreateBacklogTaskRequest {
  /**
   * The unique identifier for the agent space where the task will be created
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Optional reference information for the task
   * @public
   */
  reference?: ReferenceInput | undefined;

  /**
   * The type of task being created
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * The title of the backlog task
   * @public
   */
  title: string | undefined;

  /**
   * Optional detailed description of the task
   * @public
   */
  description?: string | undefined;

  /**
   * The priority level of the task
   * @public
   */
  priority: Priority | undefined;

  /**
   * Client-provided token for idempotent operations
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Reference information linking a task to external systems - for output without validation
 * @public
 */
export interface ReferenceOutput {
  /**
   * The name of the external system
   * @public
   */
  system: string | undefined;

  /**
   * Optional title for the reference
   * @public
   */
  title?: string | undefined;

  /**
   * The unique identifier in the external system
   * @public
   */
  referenceId: string | undefined;

  /**
   * URL to access the reference in the external system
   * @public
   */
  referenceUrl: string | undefined;

  /**
   * Association identifier of the external system
   * @public
   */
  associationId: string | undefined;
}

/**
 * Represents a backlog task with all its properties and metadata
 * @public
 */
export interface Task {
  /**
   * The unique identifier for the agent space containing this task
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for this task
   * @public
   */
  taskId: string | undefined;

  /**
   * The execution ID associated with this task, if any
   * @public
   */
  executionId?: string | undefined;

  /**
   * The title of the task
   * @public
   */
  title: string | undefined;

  /**
   * Optional detailed description of the task
   * @public
   */
  description?: string | undefined;

  /**
   * Optional reference information linking this task to external systems
   * @public
   */
  reference?: ReferenceOutput | undefined;

  /**
   * The type of this task
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * The priority level of this task
   * @public
   */
  priority: Priority | undefined;

  /**
   * The current status of this task
   * @public
   */
  status: TaskStatus | undefined;

  /**
   * Timestamp when this task was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when this task was last updated
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Version number for optimistic locking
   * @public
   */
  version: number | undefined;

  /**
   * Optional support metadata for the task
   * @public
   */
  supportMetadata?: __DocumentType | undefined;

  /**
   * Optional metadata for the task
   * @public
   */
  metadata?: __DocumentType | undefined;

  /**
   * The task ID of the primary investigation this task is linked to
   * @public
   */
  primaryTaskId?: string | undefined;

  /**
   * Explanation for why the task status was changed (e.g., linked reason)
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Indicates if this task has other tasks linked to it
   * @public
   */
  hasLinkedTasks?: boolean | undefined;
}

/**
 * Response structure containing the created backlog task
 * @public
 */
export interface CreateBacklogTaskResponse {
  /**
   * The newly created task object
   * @public
   */
  task: Task | undefined;
}

/**
 * Request structure for creating a new chat
 * @public
 */
export interface CreateChatRequest {
  /**
   * Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The user identifier for the chat. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;

  /**
   * The authentication type of the user
   * @public
   */
  userType?: UserType | undefined;
}

/**
 * Response structure for creating a new chat
 * @public
 */
export interface CreateChatResponse {
  /**
   * The unique identifier for the created execution
   * @public
   */
  executionId: string | undefined;

  /**
   * Timestamp when the chat was created
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Configuration for a self-managed Private Connection.
 * @public
 */
export interface SelfManagedInput {
  /**
   * The ID or ARN of the resource configuration.
   * @public
   */
  resourceConfigurationId: string | undefined;

  /**
   * Certificate for the Private Connection.
   * @public
   */
  certificate?: string | undefined;
}

/**
 * Configuration for a service-managed Private Connection.
 * @public
 */
export interface ServiceManagedInput {
  /**
   * IP address or DNS name of the target resource.
   * @public
   */
  hostAddress: string | undefined;

  /**
   * VPC to create the service-managed Resource Gateway in.
   * @public
   */
  vpcId: string | undefined;

  /**
   * Subnets that the service-managed Resource Gateway will span.
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * Security groups to attach to the service-managed Resource Gateway. If not specified, a default security group is created.
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * IP address type of the service-managed Resource Gateway.
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * TCP port ranges that a consumer can use to access the resource.
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * Certificate for the Private Connection.
   * @public
   */
  certificate?: string | undefined;
}

/**
 * Private Connection mode — either service-managed or self-managed.
 * @public
 */
export type PrivateConnectionMode =
  | PrivateConnectionMode.SelfManagedMember
  | PrivateConnectionMode.ServiceManagedMember
  | PrivateConnectionMode.$UnknownMember;

/**
 * @public
 */
export namespace PrivateConnectionMode {
  /**
   * Service manages the Resource Gateway lifecycle.
   * @public
   */
  export interface ServiceManagedMember {
    serviceManaged: ServiceManagedInput;
    selfManaged?: never;
    $unknown?: never;
  }

  /**
   * Caller manages their own resource configuration.
   * @public
   */
  export interface SelfManagedMember {
    serviceManaged?: never;
    selfManaged: SelfManagedInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serviceManaged?: never;
    selfManaged?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serviceManaged: (value: ServiceManagedInput) => T;
    selfManaged: (value: SelfManagedInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for creating a new Private Connection.
 * @public
 */
export interface CreatePrivateConnectionInput {
  /**
   * Unique name for this Private Connection within the account.
   * @public
   */
  name: string | undefined;

  /**
   * Private Connection mode configuration.
   * @public
   */
  mode: PrivateConnectionMode | undefined;

  /**
   * Tags to add to the Private Connection at creation time.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output containing the newly created Private Connection summary.
 * @public
 */
export interface CreatePrivateConnectionOutput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The type of the Private Connection.
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * IP address or DNS name of the target resource. Only present for service-managed Private Connections.
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Resource Configuration ARN. Only present for self-managed Private Connections.
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The status of the Private Connection.
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * Tags associated with the created Private Connection.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Authorization discovery configuration for MCP server.
 * @public
 */
export interface MCPServerAuthorizationDiscoveryConfig {
  /**
   * The endpoint to return to after OAuth flow completes (must be AWS console domain)
   * @public
   */
  returnToEndpoint: string | undefined;
}

/**
 * Authorization configuration for Datadog MCP server (uses authorization discovery only).
 * @public
 */
export type DatadogAuthorizationConfig =
  | DatadogAuthorizationConfig.AuthorizationDiscoveryMember
  | DatadogAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace DatadogAuthorizationConfig {
  /**
   * Datadog MCP server authorization discovery configuration.
   * @public
   */
  export interface AuthorizationDiscoveryMember {
    authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    authorizationDiscovery?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    authorizationDiscovery: (value: MCPServerAuthorizationDiscoveryConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for Datadog MCP server integration.
 * @public
 */
export interface DatadogServiceDetails {
  /**
   * MCP server name.
   * @public
   */
  name: string | undefined;

  /**
   * MCP server endpoint URL.
   * @public
   */
  endpoint: string | undefined;

  /**
   * Optional description for the MCP server.
   * @public
   */
  description?: string | undefined;

  /**
   * Datadog MCP server authorization configuration (only authorization discovery is supported).
   * @public
   */
  authorizationConfig: DatadogAuthorizationConfig | undefined;
}

/**
 * Input for deleting an existing Private Connection.
 * @public
 */
export interface DeletePrivateConnectionInput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;
}

/**
 * Output containing the status of the Private Connection deletion.
 * @public
 */
export interface DeletePrivateConnectionOutput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The status of the Private Connection.
   * @public
   */
  status: PrivateConnectionStatus | undefined;
}

/**
 * Input for deregistering a service.
 * @public
 */
export interface DeregisterServiceInput {
  /**
   * The service id to deregister. A service can only be deregistered if it is not associated with any AgentSpace.
   * @public
   */
  serviceId: string | undefined;
}

/**
 * Empty output for successful service deregistration.
 * @public
 */
export interface DeregisterServiceOutput {}

/**
 * Input for describing an existing Private Connection.
 * @public
 */
export interface DescribePrivateConnectionInput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;
}

/**
 * Output containing the Private Connection details.
 * @public
 */
export interface DescribePrivateConnectionOutput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The type of the Private Connection.
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * IP address or DNS name of the target resource. Only present for service-managed Private Connections.
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Resource Configuration ARN. Only present for self-managed Private Connections.
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The status of the Private Connection.
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * Tags associated with the Private Connection.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetAccountUsageInput {}

/**
 * Represents a usage metric with its configured limit and current usage value.
 * @public
 */
export interface UsageMetric {
  /**
   * Configured limit for this metric.
   * @public
   */
  limit: number | undefined;

  /**
   * Current usage for this metric
   * @public
   */
  usage: number | undefined;
}

/**
 * @public
 */
export interface GetAccountUsageOutput {
  /**
   * Monthly investigation hours usage and limit for an account
   * @public
   */
  monthlyAccountInvestigationHours?: UsageMetric | undefined;

  /**
   * Monthly evaluation hours usage and limit for an account
   * @public
   */
  monthlyAccountEvaluationHours?: UsageMetric | undefined;

  /**
   * Monthly system learning hours usage and limit for an account
   * @public
   */
  monthlyAccountSystemLearningHours?: UsageMetric | undefined;

  /**
   * Monthly on-demand hours usage and limit for an account
   * @public
   */
  monthlyAccountOnDemandHours?: UsageMetric | undefined;

  /**
   * The start time of the usage tracking period
   * @public
   */
  usagePeriodStartTime: Date | undefined;

  /**
   * The end time of the usage tracking period
   * @public
   */
  usagePeriodEndTime: Date | undefined;
}

/**
 * Request structure for retrieving a specific backlog task
 * @public
 */
export interface GetBacklogTaskRequest {
  /**
   * The unique identifier for the agent space containing the task
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the task to retrieve
   * @public
   */
  taskId: string | undefined;
}

/**
 * Response structure containing the requested backlog task
 * @public
 */
export interface GetBacklogTaskResponse {
  /**
   * The requested task object
   * @public
   */
  task: Task | undefined;
}

/**
 * Request structure for retrieving a specific recommendation
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * The unique identifier for the agent space containing the recommendation
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for the recommendation to retrieve
   * @public
   */
  recommendationId: string | undefined;

  /**
   * Specific version of the recommendation to retrieve. If not specified, returns the latest version.
   * @public
   */
  recommendationVersion?: number | undefined;
}

/**
 * Content of a recommendation
 * @public
 */
export interface RecommendationContent {
  /**
   * A brief summary of the recommendation.
   * @public
   */
  summary: string | undefined;

  /**
   * Agent-ready specification with detailed implementation steps
   * @public
   */
  spec?: string | undefined;
}

/**
 * Represents a recommendation with all its properties and metadata
 * @public
 */
export interface Recommendation {
  /**
   * ARN of the agent space this recommendation belongs to
   * @public
   */
  agentSpaceArn: string | undefined;

  /**
   * The unique identifier for this recommendation
   * @public
   */
  recommendationId: string | undefined;

  /**
   * ID of the task that generated the recommendation
   * @public
   */
  taskId: string | undefined;

  /**
   * ID of the goal this recommendation is associated with
   * @public
   */
  goalId?: string | undefined;

  /**
   * The title of the recommendation
   * @public
   */
  title: string | undefined;

  /**
   * Content of the recommendation
   * @public
   */
  content: RecommendationContent | undefined;

  /**
   * Current status of the recommendation
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * Priority level of the recommendation
   * @public
   */
  priority: RecommendationPriority | undefined;

  /**
   * Version of the goal at the time this recommendation was generated
   * @public
   */
  goalVersion?: number | undefined;

  /**
   * Additional context for recommendation
   * @public
   */
  additionalContext?: string | undefined;

  /**
   * Timestamp when this recommendation was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when this recommendation was last updated
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Version number for optimistic locking
   * @public
   */
  version: number | undefined;
}

/**
 * Response structure containing the requested recommendation
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * The requested recommendation
   * @public
   */
  recommendation: Recommendation | undefined;
}

/**
 * Filter criteria for listing backlog tasks, supporting time range, priority, status, and type filters.
 * @public
 */
export interface TaskFilter {
  /**
   * Filter for tasks created after this timestamp inclusive
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * Filter for tasks created before this timestamp exclusive
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * Filter by priority (single value only)
   * @public
   */
  priority?: Priority[] | undefined;

  /**
   * Filter by status (single value only)
   * @public
   */
  status?: TaskStatus[] | undefined;

  /**
   * Filter by task type (single value only)
   * @public
   */
  taskType?: TaskType[] | undefined;

  /**
   * Filter by primary task ID to get linked tasks
   * @public
   */
  primaryTaskId?: string | undefined;
}

/**
 * Request structure for listing backlog tasks with filtering, sorting, and pagination support
 * @public
 */
export interface ListBacklogTasksRequest {
  /**
   * The unique identifier for the agent space containing the tasks
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Filter criteria to apply when listing tasks
   *
   * Filtering restrictions:
   * - Each filter field list is limited to a single value
   * - Filtering by Priority and Status at the same time when not filtering by Type is not permitted
   * - Timestamp filters (createdAfter, createdBefore) can be combined with other filters when not sorting by priority
   * @public
   */
  filter?: TaskFilter | undefined;

  /**
   * Maximum number of tasks to return in a single response (1-1000, default: 100)
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for retrieving the next page of results
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Field to sort by
   *
   *     Sorting restrictions:
   * - Only sorting on createdAt is supported when using priority or status filters alone.
   * - Sorting by priority is not supported when using Timestamp filters (createdAfter, createdBefore)
   * @public
   */
  sortField?: TaskSortField | undefined;

  /**
   * Sort order for the tasks based on sortField (default: DESC)
   * @public
   */
  order?: TaskSortOrder | undefined;
}

/**
 * Response structure containing a list of backlog tasks
 * @public
 */
export interface ListBacklogTasksResponse {
  /**
   * List of backlog tasks
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * Token for retrieving the next page of results, if more results are available
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing chats
 * @public
 */
export interface ListChatsRequest {
  /**
   * Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The user identifier to list chats for. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;

  /**
   * Maximum number of results to return
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Response structure for listing chats
 * @public
 */
export interface ListChatsResponse {
  /**
   * List of recent chat executions
   * @public
   */
  executions: ChatExecution[] | undefined;

  /**
   * Token for retrieving the next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing executions
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * The unique identifier for the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the task whose executions to retrieve
   * @public
   */
  taskId: string | undefined;

  /**
   * Maximum number of executions to return
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for pagination to retrieve the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents an execution instance with its lifecycle information
 * @public
 */
export interface Execution {
  /**
   * The unique identifier for the agent space containing this execution
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for this execution
   * @public
   */
  executionId: string | undefined;

  /**
   * The identifier of the parent execution, if this is a child execution
   * @public
   */
  parentExecutionId?: string | undefined;

  /**
   * The specific subtask being executed by the agent
   * @public
   */
  agentSubTask: string | undefined;

  /**
   * Timestamp when this execution was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when this execution was last updated
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of this execution
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * The type of agent that performed this execution.
   * @public
   */
  agentType?: string | undefined;

  /**
   * The unique identifier for the user session associated with this execution
   * @public
   */
  uid?: string | undefined;
}

/**
 * Response structure containing executions
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * List of executions
   * @public
   */
  executions: Execution[] | undefined;

  /**
   * Token for retrieving the next page of results, if available
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing goals
 * @public
 */
export interface ListGoalsRequest {
  /**
   * The unique identifier for the agent space
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Filter goals by goal status
   * @public
   */
  status?: GoalStatus | undefined;

  /**
   * Filter goals by goal type
   * @public
   */
  goalType?: GoalType | undefined;

  /**
   * Maximum number of goals to return
   * @public
   */
  limit?: number | undefined;

  /**
   * Pagination token for the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Content of a goal
 * @public
 */
export interface GoalContent {
  /**
   * A detailed description of the goal.
   * @public
   */
  description: string | undefined;

  /**
   * The objectives to be achieved for this goal.
   * @public
   */
  objectives: string | undefined;
}

/**
 * Schedule configuration for goal evaluations
 * @public
 */
export interface GoalSchedule {
  /**
   * Whether the schedule is enabled or disabled
   * @public
   */
  state: SchedulerState | undefined;

  /**
   * Schedule expression (e.g., 'rate(7 days)')
   * @public
   */
  expression?: string | undefined;
}

/**
 * Represents a goal with all its properties and metadata
 * @public
 */
export interface Goal {
  /**
   * The unique identifier for the agent space containing this goal
   * @public
   */
  agentSpaceArn: string | undefined;

  /**
   * The unique identifier for this goal
   * @public
   */
  goalId: string | undefined;

  /**
   * The title of the goal
   * @public
   */
  title: string | undefined;

  /**
   * Content of the goal
   * @public
   */
  content: GoalContent | undefined;

  /**
   * Current status of the goal itself
   * @public
   */
  status: GoalStatus | undefined;

  /**
   * Type of goal based on its origin
   * @public
   */
  goalType: GoalType | undefined;

  /**
   * Timestamp when this goal was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when this goal was last updated
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Timestamp when the goal was last evaluated
   * @public
   */
  lastEvaluatedAt?: Date | undefined;

  /**
   * ID of the most recent task associated with this goal
   * @public
   */
  lastTaskId?: string | undefined;

  /**
   * ID of the most recent successful task associated with this goal
   * @public
   */
  lastSuccessfulTaskId?: string | undefined;

  /**
   * Version number for optimistic locking
   * @public
   */
  version: number | undefined;

  /**
   * Goal Schedule. Allows to schedule the goal to run periodically, as well as disable a goal temporarily
   * @public
   */
  evaluationSchedule?: GoalSchedule | undefined;
}

/**
 * Response structure containing the list of goals
 * @public
 */
export interface ListGoalsResponse {
  /**
   * List of goals matching the criteria
   * @public
   */
  goals: Goal[] | undefined;

  /**
   * Pagination token for the next set of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing journal records with filtering and pagination support
 * @public
 */
export interface ListJournalRecordsRequest {
  /**
   * The unique identifier for the agent space containing the execution
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the execution whose journal records to retrieve
   * @public
   */
  executionId: string | undefined;

  /**
   * Maximum number of records to return in a single response (1-100, default: 100)
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for retrieving the next page of results
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter records by type (empty string returns all types)
   * @public
   */
  recordType?: string | undefined;

  /**
   * Sort order for the records based on timestamp (default: DESC)
   * @public
   */
  order?: OrderType | undefined;
}

/**
 * Reference to a user in the system
 * @public
 */
export interface UserReference {
  /**
   * The unique identifier for the user
   * @public
   */
  userId: string | undefined;

  /**
   * The type of user
   * @public
   */
  userType: UserType | undefined;
}

/**
 * Represents a journal record containing execution details and content
 * @public
 */
export interface JournalRecord {
  /**
   * The unique identifier for the agent space containing this record
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The execution ID associated with this journal record
   * @public
   */
  executionId: string | undefined;

  /**
   * The unique identifier for this journal record
   * @public
   */
  recordId: string | undefined;

  /**
   * The content of this journal record
   * @public
   */
  content: __DocumentType | undefined;

  /**
   * Timestamp when this journal record was created
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The type of this journal record
   * @public
   */
  recordType: string | undefined;

  /**
   * Reference to the user associated with this journal record
   * @public
   */
  userReference?: UserReference | undefined;
}

/**
 * Response structure containing a list of journal records
 * @public
 */
export interface ListJournalRecordsResponse {
  /**
   * List of journal records matching the request criteria
   * @public
   */
  records: JournalRecord[] | undefined;

  /**
   * Token for retrieving the next page of results, if more results are available
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing pending messages with filtering and pagination support
 * @public
 */
export interface ListPendingMessagesRequest {
  /**
   * Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the execution whose journal records to retrieve
   * @public
   */
  executionId: string | undefined;
}

/**
 * A block of content in a user message.
 * @public
 */
export type UserMessageBlock =
  | UserMessageBlock.TextMember
  | UserMessageBlock.ToolResultMember
  | UserMessageBlock.$UnknownMember;

/**
 * @public
 */
export namespace UserMessageBlock {
  /**
   * Text content from the user.
   * @public
   */
  export interface TextMember {
    text: string;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * Tool execution result provided by the user.
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolResult: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    toolResult: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A message in a conversation, either from the user or the assistant.
 * @public
 */
export type Message =
  | Message.AssistantMessageMember
  | Message.UserMessageMember
  | Message.$UnknownMember;

/**
 * @public
 */
export namespace Message {
  /**
   * A message from the user.
   * @public
   */
  export interface UserMessageMember {
    userMessage: UserMessageBlock[];
    assistantMessage?: never;
    $unknown?: never;
  }

  /**
   * A message from the assistant.
   * @public
   */
  export interface AssistantMessageMember {
    userMessage?: never;
    assistantMessage: AssistantMessageBlock[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userMessage?: never;
    assistantMessage?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userMessage: (value: UserMessageBlock[]) => T;
    assistantMessage: (value: AssistantMessageBlock[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a pending message in an agent execution.
 * @public
 */
export interface PendingMessage {
  /**
   * The unique identifier for this pending message.
   * @public
   */
  messageId: string | undefined;

  /**
   * The message content.
   * @public
   */
  message: Message | undefined;
}

/**
 * Response structure containing a list of pending messages
 * @public
 */
export interface ListPendingMessagesResponse {
  /**
   * Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for the execution.
   * @public
   */
  executionId: string | undefined;

  /**
   * The list of pending messages for the execution.
   * @public
   */
  messages: PendingMessage[] | undefined;

  /**
   * Timestamp when the pending messages were created.
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Request structure for listing recommendations with filtering and pagination support
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * The unique identifier for the agent space containing the recommendations
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Optional task ID to filter recommendations by specific task
   * @public
   */
  taskId?: string | undefined;

  /**
   * Optional goal ID to filter recommendations by specific goal
   * @public
   */
  goalId?: string | undefined;

  /**
   * Optional status to filter recommendations by their current status
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * Optional priority to filter recommendations by priority level
   * @public
   */
  priority?: RecommendationPriority | undefined;

  /**
   * Maximum number of recommendations to return in a single response
   * @public
   */
  limit?: number | undefined;

  /**
   * Token for retrieving the next page of results
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Response structure containing a list of recommendations
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * List of recommendations matching the request criteria
   * @public
   */
  recommendations: Recommendation[] | undefined;

  /**
   * Token for retrieving the next page of results, if more results are available
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags associated with the resource.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Input for listing Private Connections in the caller's account.
 * @public
 */
export interface ListPrivateConnectionsInput {}

/**
 * Summary of a Private Connection.
 * @public
 */
export interface PrivateConnectionSummary {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The type of the Private Connection.
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * IP address or DNS name of the target resource. Only present for service-managed Private Connections.
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Resource Configuration ARN. Only present for self-managed Private Connections.
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The status of the Private Connection.
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.
   * @public
   */
  certificateExpiryTime?: Date | undefined;
}

/**
 * Output containing the list of Private Connections.
 * @public
 */
export interface ListPrivateConnectionsOutput {
  /**
   * The list of Private Connections.
   * @public
   */
  privateConnections: PrivateConnectionSummary[] | undefined;
}

/**
 * Input for updating the certificate of a Private Connection.
 * @public
 */
export interface UpdatePrivateConnectionCertificateInput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The new certificate for the Private Connection.
   * @public
   */
  certificate: string | undefined;
}

/**
 * Output containing the updated Private Connection summary.
 * @public
 */
export interface UpdatePrivateConnectionCertificateOutput {
  /**
   * The name of the Private Connection.
   * @public
   */
  name: string | undefined;

  /**
   * The type of the Private Connection.
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * IP address or DNS name of the target resource. Only present for service-managed Private Connections.
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The Resource Configuration ARN. Only present for self-managed Private Connections.
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The status of the Private Connection.
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.
   * @public
   */
  certificateExpiryTime?: Date | undefined;
}

/**
 * Context object for additional message metadata
 * @public
 */
export interface SendMessageContext {
  /**
   * The current page or view the user is on
   * @public
   */
  currentPage?: string | undefined;

  /**
   * The ID of the last message in the conversation
   * @public
   */
  lastMessage?: string | undefined;

  /**
   * Response to a UI prompt (not a text conversation message)
   * @public
   */
  userActionResponse?: string | undefined;
}

/**
 * Request structure for sending a chat message
 * @public
 */
export interface SendMessageRequest {
  /**
   * The agent space identifier
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The execution identifier for the chat session
   * @public
   */
  executionId: string | undefined;

  /**
   * The user message content
   * @public
   */
  content: string | undefined;

  /**
   * Optional context for the message
   * @public
   */
  context?: SendMessageContext | undefined;

  /**
   * User identifier. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;
}

/**
 * JSON delta containing partial JSON
 * @public
 */
export interface SendMessageJsonDelta {
  /**
   * Partial JSON string
   * @public
   */
  partialJson?: string | undefined;
}

/**
 * Text delta containing a text fragment
 * @public
 */
export interface SendMessageTextDelta {
  /**
   * The text fragment
   * @public
   */
  text?: string | undefined;
}

/**
 * Union of possible delta payloads within a content block delta event
 * @public
 */
export type SendMessageContentBlockDelta =
  | SendMessageContentBlockDelta.JsonDeltaMember
  | SendMessageContentBlockDelta.TextDeltaMember
  | SendMessageContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace SendMessageContentBlockDelta {
  /**
   * Text delta for text-based content blocks
   * @public
   */
  export interface TextDeltaMember {
    textDelta: SendMessageTextDelta;
    jsonDelta?: never;
    $unknown?: never;
  }

  /**
   * JSON delta for structured content blocks
   * @public
   */
  export interface JsonDeltaMember {
    textDelta?: never;
    jsonDelta: SendMessageJsonDelta;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    textDelta?: never;
    jsonDelta?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    textDelta: (value: SendMessageTextDelta) => T;
    jsonDelta: (value: SendMessageJsonDelta) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Event emitted for each incremental content delta within a content block
 * @public
 */
export interface SendMessageContentBlockDeltaEvent {
  /**
   * Zero-based index of the content block
   * @public
   */
  index?: number | undefined;

  /**
   * The incremental content delta
   * @public
   */
  delta?: SendMessageContentBlockDelta | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event emitted when a new content block starts
 * @public
 */
export interface SendMessageContentBlockStartEvent {
  /**
   * Zero-based index of the content block
   * @public
   */
  index?: number | undefined;

  /**
   * The type of content in this block
   * @public
   */
  type?: string | undefined;

  /**
   * Block identifier
   * @public
   */
  id?: string | undefined;

  /**
   * Optional parent block ID for nested content blocks (e.g. subagent tool calls)
   * @public
   */
  parentId?: string | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event emitted when a content block is complete
 * @public
 */
export interface SendMessageContentBlockStopEvent {
  /**
   * Zero-based index of the content block
   * @public
   */
  index?: number | undefined;

  /**
   * The type of content in this block
   * @public
   */
  type?: string | undefined;

  /**
   * The accumulated complete content text
   * @public
   */
  text?: string | undefined;

  /**
   * Whether this is the final content block in the response
   * @public
   */
  last?: boolean | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Heartbeat event to keep connection alive
 * @public
 */
export interface SendMessageHeartbeatEvent {}

/**
 * Token usage information
 * @public
 */
export interface SendMessageUsageInfo {
  /**
   * Number of input tokens
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * Number of output tokens
   * @public
   */
  outputTokens?: number | undefined;

  /**
   * Total tokens used
   * @public
   */
  totalTokens?: number | undefined;
}

/**
 * Event emitted when the response completes successfully
 * @public
 */
export interface SendMessageResponseCompletedEvent {
  /**
   * The response ID
   * @public
   */
  responseId?: string | undefined;

  /**
   * Token usage information
   * @public
   */
  usage?: SendMessageUsageInfo | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event emitted when the response is created
 * @public
 */
export interface SendMessageResponseCreatedEvent {
  /**
   * The response ID
   * @public
   */
  responseId?: string | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event emitted when the response fails
 * @public
 */
export interface SendMessageResponseFailedEvent {
  /**
   * The response ID
   * @public
   */
  responseId?: string | undefined;

  /**
   * Error code
   * @public
   */
  errorCode?: string | undefined;

  /**
   * Error message
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event emitted while the response is being generated
 * @public
 */
export interface SendMessageResponseInProgressEvent {
  /**
   * The response ID
   * @public
   */
  responseId?: string | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event summarizing agent actions
 * @public
 */
export interface SendMessageSummaryEvent {
  /**
   * Summary content
   * @public
   */
  content?: string | undefined;

  /**
   * Event sequence number
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * Event stream for chat message responses using the content block model.
 * Events follow a lifecycle:
 * responseCreated -> responseInProgress ->
 * (contentBlockStart/contentBlockDelta/contentBlockStop events) ->
 * responseCompleted|responseFailed
 *
 * SendMessage always uses content block mode — legacy per-field events
 * (outputTextDelta, functionCallArgumentsDelta, etc.) are not emitted.
 * @public
 */
export type SendMessageEvents =
  | SendMessageEvents.ContentBlockDeltaMember
  | SendMessageEvents.ContentBlockStartMember
  | SendMessageEvents.ContentBlockStopMember
  | SendMessageEvents.HeartbeatMember
  | SendMessageEvents.ResponseCompletedMember
  | SendMessageEvents.ResponseCreatedMember
  | SendMessageEvents.ResponseFailedMember
  | SendMessageEvents.ResponseInProgressMember
  | SendMessageEvents.SummaryMember
  | SendMessageEvents.$UnknownMember;

/**
 * @public
 */
export namespace SendMessageEvents {
  /**
   * Emitted when the response is created
   * @public
   */
  export interface ResponseCreatedMember {
    responseCreated: SendMessageResponseCreatedEvent;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted while the response is being generated
   * @public
   */
  export interface ResponseInProgressMember {
    responseCreated?: never;
    responseInProgress: SendMessageResponseInProgressEvent;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted when the response completes successfully
   * @public
   */
  export interface ResponseCompletedMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted: SendMessageResponseCompletedEvent;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted when the response fails
   * @public
   */
  export interface ResponseFailedMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed: SendMessageResponseFailedEvent;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted to provide a summary of agent actions
   * @public
   */
  export interface SummaryMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary: SendMessageSummaryEvent;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Heartbeat event sent periodically to keep the connection alive during idle periods
   * @public
   */
  export interface HeartbeatMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat: SendMessageHeartbeatEvent;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted when a new content block starts
   * @public
   */
  export interface ContentBlockStartMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart: SendMessageContentBlockStartEvent;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted for each incremental content delta within a content block
   * @public
   */
  export interface ContentBlockDeltaMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta: SendMessageContentBlockDeltaEvent;
    contentBlockStop?: never;
    $unknown?: never;
  }

  /**
   * Emitted when a content block is complete
   * @public
   */
  export interface ContentBlockStopMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop: SendMessageContentBlockStopEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    responseCreated?: never;
    responseInProgress?: never;
    responseCompleted?: never;
    responseFailed?: never;
    summary?: never;
    heartbeat?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    responseCreated: (value: SendMessageResponseCreatedEvent) => T;
    responseInProgress: (value: SendMessageResponseInProgressEvent) => T;
    responseCompleted: (value: SendMessageResponseCompletedEvent) => T;
    responseFailed: (value: SendMessageResponseFailedEvent) => T;
    summary: (value: SendMessageSummaryEvent) => T;
    heartbeat: (value: SendMessageHeartbeatEvent) => T;
    contentBlockStart: (value: SendMessageContentBlockStartEvent) => T;
    contentBlockDelta: (value: SendMessageContentBlockDeltaEvent) => T;
    contentBlockStop: (value: SendMessageContentBlockStopEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response structure for sending chat message events
 * @public
 */
export interface SendMessageResponse {
  /**
   * The stream of chat message events
   * @public
   */
  events: AsyncIterable<SendMessageEvents> | undefined;
}

/**
 * Input for retrieving a specific service association.
 * @public
 */
export interface GetServiceInput {
  /**
   * The unique identifier of the given service.
   * @public
   */
  serviceId: string | undefined;
}

/**
 * Represents a registered service with its configuration and accessible resources.
 * @public
 */
export interface RegisteredService {
  /**
   * The unique identifier of a service.
   * @public
   */
  serviceId: string | undefined;

  /**
   * The service type e.g github or dynatrace
   * @public
   */
  serviceType: Service | undefined;

  /**
   * The display name of the registered service.
   * @public
   */
  name?: string | undefined;

  /**
   * List of accessible resources for this service.
   * @public
   */
  accessibleResources?: __DocumentType[] | undefined;

  /**
   * Additional details specific to the service type.
   * @public
   */
  additionalServiceDetails?: AdditionalServiceDetails | undefined;

  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The name of the private connection used for VPC connectivity.
   * @public
   */
  privateConnectionName?: string | undefined;
}

/**
 * Output containing the requested service details.
 * @public
 */
export interface GetServiceOutput {
  /**
   * Represents a registered service with its configuration and accessible resources.
   * @public
   */
  service: RegisteredService | undefined;

  /**
   * Tags associated with the Service.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for listing registered services with optional filtering by service type.
 * @public
 */
export interface ListServicesInput {
  /**
   * Maximum number of results to return in a single call.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for the next page of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional filter to list only services of a specific type.
   * @public
   */
  filterServiceType?: Service | undefined;
}

/**
 * Output containing a list of registered services and pagination token.
 * @public
 */
export interface ListServicesOutput {
  /**
   * Token to retrieve the next page of results, if there are more results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of registered services.
   * @public
   */
  services: RegisteredService[] | undefined;
}

/**
 * OAuth client credentials configuration for Dynatrace.
 * @public
 */
export interface DynatraceOAuthClientCredentialsConfig {
  /**
   * User friendly OAuth client name specified by end user.
   * @public
   */
  clientName?: string | undefined;

  /**
   * OAuth client ID for authenticating with the service.
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth token exchange parameters for authenticating with the service.
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * OAuth client secret for authenticating with the service.
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * Authorization configuration options for Dynatrace service.
 * @public
 */
export type DynatraceServiceAuthorizationConfig =
  | DynatraceServiceAuthorizationConfig.OAuthClientCredentialsMember
  | DynatraceServiceAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace DynatraceServiceAuthorizationConfig {
  /**
   * OAuth client credentials configuration.
   * @public
   */
  export interface OAuthClientCredentialsMember {
    oAuthClientCredentials: DynatraceOAuthClientCredentialsConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oAuthClientCredentials?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oAuthClientCredentials: (value: DynatraceOAuthClientCredentialsConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for Dynatrace integration.
 * @public
 */
export interface DynatraceServiceDetails {
  /**
   * Dynatrace resource account urn.
   * @public
   */
  accountUrn: string | undefined;

  /**
   * Dynatrace OAuth client credentials configuration. Use this when registering with OAuth client credentials flow.
   * @public
   */
  authorizationConfig?: DynatraceServiceAuthorizationConfig | undefined;
}

/**
 * Service details for Event Channel integration.
 * @public
 */
export interface EventChannelDetails {
  /**
   * The type of event channel
   * @public
   */
  type?: EventChannelType | undefined;
}

/**
 * Service details for GitLab integration.
 * @public
 */
export interface GitLabDetails {
  /**
   * GitLab instance URL (e.g., https://gitlab.com or self-hosted instance).
   * @public
   */
  targetUrl: string | undefined;

  /**
   * Type of GitLab access token
   * @public
   */
  tokenType: GitLabTokenType | undefined;

  /**
   * GitLab access token value
   * @public
   */
  tokenValue: string | undefined;

  /**
   * Optional GitLab group ID for group-level access tokens
   * @public
   */
  groupId?: string | undefined;
}

/**
 * API key configuration for MCP server.
 * @public
 */
export interface MCPServerAPIKeyConfig {
  /**
   * User friendly API key name specified by end user.
   * @public
   */
  apiKeyName: string | undefined;

  /**
   * API key value for authenticating with the service.
   * @public
   */
  apiKeyValue: string | undefined;

  /**
   * HTTP header name to send the API key in requests to the service.
   * @public
   */
  apiKeyHeader: string | undefined;
}

/**
 * Bearer token configuration for MCP server (RFC 6750).
 * @public
 */
export interface MCPServerBearerTokenConfig {
  /**
   * User friendly bearer token name specified by end user.
   * @public
   */
  tokenName: string | undefined;

  /**
   * Bearer token value in alphanumeric for authenticating with the service.
   * @public
   */
  tokenValue: string | undefined;

  /**
   * HTTP header name to send the bearer token in requests to the service. Defaults to 'Authorization' per RFC 6750.
   * @public
   */
  authorizationHeader?: string | undefined;
}

/**
 * OAuth 3-legged authorization configuration for MCP server.
 * @public
 */
export interface MCPServerOAuth3LOConfig {
  /**
   * User friendly OAuth client name specified by end user.
   * @public
   */
  clientName?: string | undefined;

  /**
   * OAuth client ID for authenticating with the service.
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth token exchange parameters for authenticating with the service.
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * The endpoint to return to after OAuth flow completes (must be AWS console domain)
   * @public
   */
  returnToEndpoint: string | undefined;

  /**
   * OAuth authorization URL for 3LO authentication.
   * @public
   */
  authorizationUrl: string | undefined;

  /**
   * OAuth token exchange URL.
   * @public
   */
  exchangeUrl: string | undefined;

  /**
   * OAuth client secret for authenticating with the service. Required for confidential clients or when PKCE is not supported. Optional for public clients using PKCE.
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * Whether the service supports PKCE (Proof Key for Code Exchange) for enhanced security during the OAuth flow.
   * @public
   */
  supportCodeChallenge?: boolean | undefined;

  /**
   * OAuth scopes for 3LO authentication. The service will always request scope offline_access.
   * @public
   */
  scopes?: string[] | undefined;
}

/**
 * OAuth client credentials configuration for MCP server.
 * @public
 */
export interface MCPServerOAuthClientCredentialsConfig {
  /**
   * User friendly OAuth client name specified by end user.
   * @public
   */
  clientName?: string | undefined;

  /**
   * OAuth client ID for authenticating with the service.
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth token exchange parameters for authenticating with the service.
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * OAuth client secret for authenticating with the service.
   * @public
   */
  clientSecret: string | undefined;

  /**
   * OAuth token exchange URL.
   * @public
   */
  exchangeUrl: string | undefined;

  /**
   * OAuth scopes for 3LO authentication. The service will always request scope offline_access.
   * @public
   */
  scopes?: string[] | undefined;
}

/**
 * Authorization configuration options for MCP server, supporting OAuth, API key, bearer token, and authorization discovery methods.
 * @public
 */
export type MCPServerAuthorizationConfig =
  | MCPServerAuthorizationConfig.ApiKeyMember
  | MCPServerAuthorizationConfig.AuthorizationDiscoveryMember
  | MCPServerAuthorizationConfig.BearerTokenMember
  | MCPServerAuthorizationConfig.OAuth3LOMember
  | MCPServerAuthorizationConfig.OAuthClientCredentialsMember
  | MCPServerAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace MCPServerAuthorizationConfig {
  /**
   * MCP server configuration with OAuth client credentials.
   * @public
   */
  export interface OAuthClientCredentialsMember {
    oAuthClientCredentials: MCPServerOAuthClientCredentialsConfig;
    oAuth3LO?: never;
    apiKey?: never;
    bearerToken?: never;
    authorizationDiscovery?: never;
    $unknown?: never;
  }

  /**
   * MCP server configuration with OAuth 3LO.
   * @public
   */
  export interface OAuth3LOMember {
    oAuthClientCredentials?: never;
    oAuth3LO: MCPServerOAuth3LOConfig;
    apiKey?: never;
    bearerToken?: never;
    authorizationDiscovery?: never;
    $unknown?: never;
  }

  /**
   * MCP server configuration with API key authentication.
   * @public
   */
  export interface ApiKeyMember {
    oAuthClientCredentials?: never;
    oAuth3LO?: never;
    apiKey: MCPServerAPIKeyConfig;
    bearerToken?: never;
    authorizationDiscovery?: never;
    $unknown?: never;
  }

  /**
   * MCP server configuration with Bearer token (RFC 6750).
   * @public
   */
  export interface BearerTokenMember {
    oAuthClientCredentials?: never;
    oAuth3LO?: never;
    apiKey?: never;
    bearerToken: MCPServerBearerTokenConfig;
    authorizationDiscovery?: never;
    $unknown?: never;
  }

  /**
   * MCP server authorization discovery configuration.
   * @public
   */
  export interface AuthorizationDiscoveryMember {
    oAuthClientCredentials?: never;
    oAuth3LO?: never;
    apiKey?: never;
    bearerToken?: never;
    authorizationDiscovery: MCPServerAuthorizationDiscoveryConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oAuthClientCredentials?: never;
    oAuth3LO?: never;
    apiKey?: never;
    bearerToken?: never;
    authorizationDiscovery?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oAuthClientCredentials: (value: MCPServerOAuthClientCredentialsConfig) => T;
    oAuth3LO: (value: MCPServerOAuth3LOConfig) => T;
    apiKey: (value: MCPServerAPIKeyConfig) => T;
    bearerToken: (value: MCPServerBearerTokenConfig) => T;
    authorizationDiscovery: (value: MCPServerAuthorizationDiscoveryConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for MCP server integration.
 * @public
 */
export interface MCPServerDetails {
  /**
   * MCP server name.
   * @public
   */
  name: string | undefined;

  /**
   * MCP server endpoint URL.
   * @public
   */
  endpoint: string | undefined;

  /**
   * Optional description for the MCP server.
   * @public
   */
  description?: string | undefined;

  /**
   * MCP server authorization configuration.
   * @public
   */
  authorizationConfig: MCPServerAuthorizationConfig | undefined;
}

/**
 * Complete service details for Grafana MCP server integration.
 * @public
 */
export interface GrafanaServiceDetails {
  /**
   * MCP server name.
   * @public
   */
  name: string | undefined;

  /**
   * MCP server endpoint URL.
   * @public
   */
  endpoint: string | undefined;

  /**
   * Optional description for the MCP server.
   * @public
   */
  description?: string | undefined;

  /**
   * Grafana MCP server authorization configuration (experimental).
   * @public
   */
  authorizationConfig: MCPServerAuthorizationConfig | undefined;
}

/**
 * API key authentication configuration for New Relic service.
 * @public
 */
export interface NewRelicApiKeyConfig {
  /**
   * New Relic User API Key
   * @public
   */
  apiKey: string | undefined;

  /**
   * New Relic Account ID
   * @public
   */
  accountId: string | undefined;

  /**
   * New Relic region (US or EU)
   * @public
   */
  region: NewRelicRegion | undefined;

  /**
   * List of monitored APM application IDs in New Relic
   * @public
   */
  applicationIds?: string[] | undefined;

  /**
   * List of globally unique IDs for New Relic resources (apps, hosts, services)
   * @public
   */
  entityGuids?: string[] | undefined;

  /**
   * List of alert policy IDs grouping related conditions
   * @public
   */
  alertPolicyIds?: string[] | undefined;
}

/**
 * Authorization configuration options for New Relic service.
 * @public
 */
export type NewRelicServiceAuthorizationConfig =
  | NewRelicServiceAuthorizationConfig.ApiKeyMember
  | NewRelicServiceAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace NewRelicServiceAuthorizationConfig {
  /**
   * New Relic API Key authentication (apiKey, accountId, region).
   * @public
   */
  export interface ApiKeyMember {
    apiKey: NewRelicApiKeyConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    apiKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    apiKey: (value: NewRelicApiKeyConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for New Relic integration.
 * @public
 */
export interface NewRelicServiceDetails {
  /**
   * New Relic MCP server authorization configuration.
   * @public
   */
  authorizationConfig: NewRelicServiceAuthorizationConfig | undefined;
}

/**
 * OAuth client credentials configuration for PagerDuty.
 * @public
 */
export interface PagerDutyOAuthClientCredentialsConfig {
  /**
   * User friendly OAuth client name specified by end user.
   * @public
   */
  clientName?: string | undefined;

  /**
   * OAuth client ID for authenticating with the service.
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth token exchange parameters for authenticating with the service.
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * OAuth client secret for authenticating with the service.
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * Authorization configuration options for PagerDuty service.
 * @public
 */
export type PagerDutyAuthorizationConfig =
  | PagerDutyAuthorizationConfig.OAuthClientCredentialsMember
  | PagerDutyAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace PagerDutyAuthorizationConfig {
  /**
   * OAuth client credentials configuration.
   * @public
   */
  export interface OAuthClientCredentialsMember {
    oAuthClientCredentials: PagerDutyOAuthClientCredentialsConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oAuthClientCredentials?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oAuthClientCredentials: (value: PagerDutyOAuthClientCredentialsConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for PagerDuty integration
 * @public
 */
export interface PagerDutyDetails {
  /**
   * PagerDuty scopes.
   * @public
   */
  scopes: string[] | undefined;

  /**
   * PagerDuty authorization configuration
   * @public
   */
  authorizationConfig: PagerDutyAuthorizationConfig | undefined;
}

/**
 * OAuth client credentials configuration for ServiceNow.
 * @public
 */
export interface ServiceNowOAuthClientCredentialsConfig {
  /**
   * User friendly OAuth client name specified by end user.
   * @public
   */
  clientName?: string | undefined;

  /**
   * OAuth client ID for authenticating with the service.
   * @public
   */
  clientId: string | undefined;

  /**
   * OAuth token exchange parameters for authenticating with the service.
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * OAuth client secret for authenticating with the service.
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * Authorization configuration options for ServiceNow service.
 * @public
 */
export type ServiceNowServiceAuthorizationConfig =
  | ServiceNowServiceAuthorizationConfig.OAuthClientCredentialsMember
  | ServiceNowServiceAuthorizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace ServiceNowServiceAuthorizationConfig {
  /**
   * OAuth client credentials configuration.
   * @public
   */
  export interface OAuthClientCredentialsMember {
    oAuthClientCredentials: ServiceNowOAuthClientCredentialsConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oAuthClientCredentials?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oAuthClientCredentials: (value: ServiceNowOAuthClientCredentialsConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Complete service details for ServiceNow integration.
 * @public
 */
export interface ServiceNowServiceDetails {
  /**
   * ServiceNow instance URL.
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * ServiceNow OAuth client credentials configuration. Use this when registering with OAuth client credentials flow.
   * @public
   */
  authorizationConfig?: ServiceNowServiceAuthorizationConfig | undefined;
}

/**
 * Union of service-specific configuration details for service registration.
 * @public
 */
export type ServiceDetails =
  | ServiceDetails.AzureidentityMember
  | ServiceDetails.DynatraceMember
  | ServiceDetails.EventChannelMember
  | ServiceDetails.GitlabMember
  | ServiceDetails.McpserverMember
  | ServiceDetails.McpserverdatadogMember
  | ServiceDetails.McpservergrafanaMember
  | ServiceDetails.McpservernewrelicMember
  | ServiceDetails.McpserversplunkMember
  | ServiceDetails.PagerdutyMember
  | ServiceDetails.ServicenowMember
  | ServiceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ServiceDetails {
  /**
   * Dynatrace-specific service details.
   * @public
   */
  export interface DynatraceMember {
    dynatrace: DynatraceServiceDetails;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * ServiceNow-specific service details.
   * @public
   */
  export interface ServicenowMember {
    dynatrace?: never;
    servicenow: ServiceNowServiceDetails;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * Datadog MCP server-specific service details.
   * @public
   */
  export interface McpserverdatadogMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog: DatadogServiceDetails;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * MCP server-specific service details.
   * @public
   */
  export interface McpserverMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver: MCPServerDetails;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * GitLab-specific service details.
   * @public
   */
  export interface GitlabMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab: GitLabDetails;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * Splunk MCP server-specific service details.
   * @public
   */
  export interface McpserversplunkMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk: MCPServerDetails;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * New Relic-specific service details.
   * @public
   */
  export interface McpservernewrelicMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic: NewRelicServiceDetails;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * Event Channel specific service details.
   * @public
   */
  export interface EventChannelMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel: EventChannelDetails;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * Datadog MCP server-specific service details.
   * @public
   */
  export interface McpservergrafanaMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana: GrafanaServiceDetails;
    pagerduty?: never;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * PagerDuty specific service details.
   * @public
   */
  export interface PagerdutyMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty: PagerDutyDetails;
    azureidentity?: never;
    $unknown?: never;
  }

  /**
   * Azure integration with AWS Outbound Identity Federation specific service details.
   * @public
   */
  export interface AzureidentityMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity: RegisteredAzureIdentityDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dynatrace?: never;
    servicenow?: never;
    mcpserverdatadog?: never;
    mcpserver?: never;
    gitlab?: never;
    mcpserversplunk?: never;
    mcpservernewrelic?: never;
    eventChannel?: never;
    mcpservergrafana?: never;
    pagerduty?: never;
    azureidentity?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    dynatrace: (value: DynatraceServiceDetails) => T;
    servicenow: (value: ServiceNowServiceDetails) => T;
    mcpserverdatadog: (value: DatadogServiceDetails) => T;
    mcpserver: (value: MCPServerDetails) => T;
    gitlab: (value: GitLabDetails) => T;
    mcpserversplunk: (value: MCPServerDetails) => T;
    mcpservernewrelic: (value: NewRelicServiceDetails) => T;
    eventChannel: (value: EventChannelDetails) => T;
    mcpservergrafana: (value: GrafanaServiceDetails) => T;
    pagerduty: (value: PagerDutyDetails) => T;
    azureidentity: (value: RegisteredAzureIdentityDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for registering a new service with the platform.
 * @public
 */
export interface RegisterServiceInput {
  /**
   * Services that can be registered via the post-registration API (excludes OAuth 3LO services).
   * @public
   */
  service: PostRegisterServiceSupportedService | undefined;

  /**
   * Service-specific authorization configuration parameters
   * @public
   */
  serviceDetails: ServiceDetails | undefined;

  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The name of the private connection to use for VPC connectivity.
   * @public
   */
  privateConnectionName?: string | undefined;

  /**
   * The display name for the service registration.
   * @public
   */
  name?: string | undefined;

  /**
   * Tags to add to the Service at registration time.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output containing the service ID and any additional steps required for registration.
 * @public
 */
export interface RegisterServiceOutput {
  /**
   * Service ID - present when registration is complete, absent when additional steps are required
   * @public
   */
  serviceId?: string | undefined;

  /**
   * Indicates if additional steps are required to complete service registration (e.g., 3-legged OAuth)
   * @public
   */
  additionalStep?: AdditionalServiceRegistrationStep | undefined;

  /**
   * The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Tags associated with the registered Service.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to tag.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags to add to the resource.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource to untag.
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tag keys to remove.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Request structure for updating a task
 * @public
 */
export interface UpdateBacklogTaskRequest {
  /**
   * The unique identifier for the agent space containing the task
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the task to update
   * @public
   */
  taskId: string | undefined;

  /**
   * Updated task status
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * Client-provided token for idempotent operations
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Response structure containing the updated task
 * @public
 */
export interface UpdateBacklogTaskResponse {
  /**
   * The updated task object
   * @public
   */
  task: Task | undefined;
}

/**
 * Schedule configuration for updating goal evaluations
 * @public
 */
export interface GoalScheduleInput {
  /**
   * Whether the schedule is enabled or disabled
   * @public
   */
  state: SchedulerState | undefined;
}

/**
 * Request structure for updating a goal
 * @public
 */
export interface UpdateGoalRequest {
  /**
   * The unique identifier for the agent space containing the goal
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the goal to update
   * @public
   */
  goalId: string | undefined;

  /**
   * Update goal schedule state
   * @public
   */
  evaluationSchedule?: GoalScheduleInput | undefined;

  /**
   * Client-provided token for idempotent operations
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Response structure containing the updated goal
 * @public
 */
export interface UpdateGoalResponse {
  /**
   * The updated goal object
   * @public
   */
  goal: Goal | undefined;
}

/**
 * Request structure for updating an existing recommendation
 * @public
 */
export interface UpdateRecommendationRequest {
  /**
   * The unique identifier for the agent space containing the recommendation
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for the recommendation to update
   * @public
   */
  recommendationId: string | undefined;

  /**
   * Current status of the recommendation
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * Additional context for recommendation
   * @public
   */
  additionalContext?: string | undefined;

  /**
   * A unique token that ensures idempotency of the request
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Response structure containing the updated recommendation
 * @public
 */
export interface UpdateRecommendationResponse {
  /**
   * The updated recommendation
   * @public
   */
  recommendation: Recommendation | undefined;
}
