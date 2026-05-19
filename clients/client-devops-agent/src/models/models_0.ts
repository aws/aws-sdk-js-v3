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
 * <p>Details specific to a registered Azure DevOps service.</p>
 * @public
 */
export interface RegisteredAzureDevOpsServiceDetails {
  /**
   * <p>The Azure DevOps Organization name associated with the service.</p>
   * @public
   */
  organizationName: string | undefined;
}

/**
 * <p>Details specific to a registered Azure identity using AWS Outbound Identity Federation.</p>
 * @public
 */
export interface RegisteredAzureIdentityDetails {
  /**
   * <p>The Azure Active Directory tenant ID for the identity.</p>
   * @public
   */
  tenantId: string | undefined;

  /**
   * <p>The client ID of the service principal or managed identity used for authentication.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The role ARN to be assumed by DevOps Agent for requesting Web Identity Token.</p>
   * @public
   */
  webIdentityRoleArn: string | undefined;

  /**
   * <p>The audiences for the Web Identity Token.</p>
   * @public
   */
  webIdentityTokenAudiences: string[] | undefined;
}

/**
 * <p>Details specific to a registered GitHub service.</p>
 * @public
 */
export interface RegisteredGithubServiceDetails {
  /**
   * <p>The GitHub repository owner name.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The GitHub repository owner type.</p>
   * @public
   */
  ownerType: GithubRepoOwnerType | undefined;

  /**
   * <p>The GitHub Enterprise Server instance URL (absent for github.com).</p>
   * @public
   */
  targetUrl?: string | undefined;
}

/**
 * <p>Details specific to a registered GitLab instance.</p>
 * @public
 */
export interface RegisteredGitLabServiceDetails {
  /**
   * <p>The GitLab instance URL.</p>
   * @public
   */
  targetUrl: string | undefined;

  /**
   * <p>Type of GitLab access token</p>
   * @public
   */
  tokenType: GitLabTokenType | undefined;

  /**
   * <p>Optional GitLab group ID for group-level access tokens</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>Details specific to a registered MCP (Model Context Protocol) server.</p>
 * @public
 */
export interface RegisteredMCPServerDetails {
  /**
   * <p>The MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The MCP server uses this authorization method.</p>
   * @public
   */
  authorizationMethod: MCPServerAuthorizationMethod | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>If the MCP server uses API key authentication, these details are provided.</p>
   * @public
   */
  apiKeyHeader?: string | undefined;
}

/**
 * <p>Details specific to a registered Grafana server, used by the built-in MCP server.</p>
 * @public
 */
export interface RegisteredGrafanaServerDetails {
  /**
   * <p>Grafana instance URL (e.g., https://your-instance.grafana.net)</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The authz method used by the MCP server.</p>
   * @public
   */
  authorizationMethod: MCPServerAuthorizationMethod | undefined;
}

/**
 * <p>Details specific to a registered NewRelic instance.</p>
 * @public
 */
export interface RegisteredNewRelicDetails {
  /**
   * <p>The NewRelic account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The NewRelic region (determines API endpoint).</p>
   * @public
   */
  region: NewRelicRegion | undefined;

  /**
   * <p>Optional user description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Details specific to a registered SigV4-authenticated MCP server.</p>
 * @public
 */
export interface RegisteredMCPServerSigV4Details {
  /**
   * <p>MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>AWS service name for SigV4 signing.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>IAM role ARN to assume for SigV4 signing.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Custom headers for the SigV4 MCP server.</p>
   * @public
   */
  customHeaders?: Record<string, string> | undefined;
}

/**
 * <p>Details specific to a registered PagerDuty service.</p>
 * @public
 */
export interface RegisteredPagerDutyDetails {
  /**
   * <p>The scopes that were assigned to the service</p>
   * @public
   */
  scopes: string[] | undefined;
}

/**
 * <p>Details specific to a registered ServiceNow instance.</p>
 * @public
 */
export interface RegisteredServiceNowDetails {
  /**
   * <p>The ServiceNow instance url</p>
   * @public
   */
  instanceUrl?: string | undefined;
}

/**
 * <p>Details specific to a registered Slack workspace.</p>
 * @public
 */
export interface RegisteredSlackServiceDetails {
  /**
   * <p>The Slack team ID.</p>
   * @public
   */
  teamId: string | undefined;

  /**
   * <p>The Slack team name.</p>
   * @public
   */
  teamName: string | undefined;
}

/**
 * <p>Union of service-specific details for different service types.</p>
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
  | AdditionalServiceDetails.Mcpserversigv4Member
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
   * <p>GitHub-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Slack-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Datadog MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>ServiceNow-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>GitLab-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Splunk MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>New Relic MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Azure DevOps specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Azure identity details for services using Azure authentication.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Grafana MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Pagerduty service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>SigV4-authenticated MCP server-specific service details.</p>
   * @public
   */
  export interface Mcpserversigv4Member {
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
    mcpserversigv4: RegisteredMCPServerSigV4Details;
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
    mcpserversigv4?: never;
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
    mcpserversigv4: (value: RegisteredMCPServerSigV4Details) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Details for completing OAuth authorization step.</p>
 * @public
 */
export interface OAuthAdditionalStepDetails {
  /**
   * <p>The URL to redirect the user to for OAuth authorization.</p>
   * @public
   */
  authorizationUrl: string | undefined;
}

/**
 * <p>Additional steps required to complete service registration.</p>
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
   * <p>OAuth authorization step required.</p>
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
 * <p>Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.</p>
 * @public
 */
export interface AgentSpace {
  /**
   * <p>The name of the AgentSpace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the AgentSpace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The locale for the AgentSpace, which determines the language used in agent responses.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The timestamp when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the resource was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Configuration for AWS monitor account integration, allowing AIDevOps to monitor AWS resources.</p>
 * @public
 */
export interface AWSConfiguration {
  /**
   * <p>Role ARN to be assumed by AIDevOps to operate on behalf of customer.</p>
   * @public
   */
  assumableRoleArn: string | undefined;

  /**
   * <p>AWS Account Id corresponding to provided resources.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Account Type 'monitor' for AIDevOps monitoring.</p>
   * @public
   */
  accountType: MonitorAccountType | undefined;
}

/**
 * <p>Configuration for Azure subscription integration.</p>
 * @public
 */
export interface AzureConfiguration {
  /**
   * <p>Azure subscription ID corresponding to provided resources.</p>
   * @public
   */
  subscriptionId: string | undefined;
}

/**
 * <p>Configuration for Azure DevOps project integration.</p>
 * @public
 */
export interface AzureDevOpsConfiguration {
  /**
   * <p>Azure DevOps organization name.</p>
   * @public
   */
  organizationName: string | undefined;

  /**
   * <p>Azure DevOps project ID.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>Azure DevOps project name.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * <p>Configuration for Dynatrace monitoring integration.</p>
 * @public
 */
export interface DynatraceConfiguration {
  /**
   * <p>Dynatrace environment id</p>
   * @public
   */
  envId: string | undefined;

  /**
   * <p>List of Dynatrace resources to monitor</p>
   * @public
   */
  resources?: string[] | undefined;
}

/**
 * <p>Configuration for Event Channel integration.</p>
 * @public
 */
export interface EventChannelConfiguration {}

/**
 * <p>Configuration for GitHub repository integration.</p>
 * @public
 */
export interface GitHubConfiguration {
  /**
   * <p>Associated Github repo name</p>
   * @public
   */
  repoName: string | undefined;

  /**
   * <p>Associated Github repo ID</p>
   * @public
   */
  repoId: string | undefined;

  /**
   * <p>The GitHub repository owner name.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>Type of GitHub repository owner.</p>
   * @public
   */
  ownerType: GithubRepoOwnerType | undefined;

  /**
   * <p>GitHub instance identifier (e.g., github.com or github.enterprise.com)</p>
   * @public
   */
  instanceIdentifier?: string | undefined;
}

/**
 * <p>Configuration for GitLab project integration.</p>
 * @public
 */
export interface GitLabConfiguration {
  /**
   * <p>GitLab numeric project ID.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>Full GitLab project path (e.g., namespace/project-name).</p>
   * @public
   */
  projectPath: string | undefined;

  /**
   * <p>GitLab instance identifier (e.g., gitlab.com or e2e.gamma.dev.us-east-1.gitlab.falco.ai.aws.dev)</p>
   * @public
   */
  instanceIdentifier?: string | undefined;
}

/**
 * <p>Configuration for Model Context Protocol (MCP) server integration.</p>
 * @public
 */
export interface MCPServerConfiguration {
  /**
   * <p>List of MCP tools can be used with the association.</p>
   * @public
   */
  tools: string[] | undefined;
}

/**
 * <p>Mixin for webhook update support.</p>
 * @public
 */
export interface MCPServerDatadogConfiguration {}

/**
 * <p>Configuration for Grafana MCP server integration, used with an AWS-hosted MCP server.</p>
 * @public
 */
export interface MCPServerGrafanaConfiguration {
  /**
   * <p>Grafana instance URL (e.g., https://your-instance.grafana.net)</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The Grafana organization ID that can be used.</p>
   * @public
   */
  organizationId?: string | undefined;

  /**
   * <p>List of MCP tools that can be used.</p>
   * @public
   */
  tools?: string[] | undefined;
}

/**
 * <p>Mixin for webhook update support.</p>
 * @public
 */
export interface MCPServerNewRelicConfiguration {
  /**
   * <p>New Relic Account ID</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/)</p>
   * @public
   */
  endpoint: string | undefined;
}

/**
 * <p>Configuration for SigV4-authenticated MCP server integration.</p>
 * @public
 */
export interface MCPServerSigV4Configuration {
  /**
   * <p>List of MCP tools available for the association.</p>
   * @public
   */
  tools: string[] | undefined;
}

/**
 * <p>Mixin for webhook update support.</p>
 * @public
 */
export interface MCPServerSplunkConfiguration {}

/**
 * <p>Configuration for Pagerduty integration.</p>
 * @public
 */
export interface PagerDutyConfiguration {
  /**
   * <p>List of Pagerduty service available for the association.</p>
   * @public
   */
  services: string[] | undefined;

  /**
   * <p>Email to be used in Pagerduty API header</p>
   * @public
   */
  customerEmail: string | undefined;
}

/**
 * <p>Configuration for ServiceNow instance integration.</p>
 * @public
 */
export interface ServiceNowConfiguration {
  /**
   * <p>ServiceNow instance ID</p>
   * @public
   */
  instanceId?: string | undefined;

  /**
   * <p>Scoped down authentication scopes for fine grained control</p>
   * @public
   */
  authScopes?: string[] | undefined;
}

/**
 * <p>Represents a Slack channel with its ID and optional name.</p>
 * @public
 */
export interface SlackChannel {
  /**
   * <p>Slack channel name</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Slack channel ID</p>
   * @public
   */
  channelId: string | undefined;
}

/**
 * <p>Defines Slack channels for different types of agent notifications.</p>
 * @public
 */
export interface SlackTransmissionTarget {
  /**
   * <p>Destination for On-call Agent (Ops1)</p>
   * @public
   */
  opsOncallTarget: SlackChannel | undefined;

  /**
   * <p>Destination for SRE Agent (Ops1.5)</p>
   * @public
   */
  opsSRETarget?: SlackChannel | undefined;
}

/**
 * <p>Configuration for Slack workspace integration.</p>
 * @public
 */
export interface SlackConfiguration {
  /**
   * <p>Associated Slack workspace ID</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Associated Slack workspace name</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>Transmission targets for agent notifications</p>
   * @public
   */
  transmissionTarget: SlackTransmissionTarget | undefined;
}

/**
 * <p>Configuration for AWS source account integration. Note: passRole check on 'assumableRoleArn' is not supported.</p>
 * @public
 */
export interface SourceAwsConfiguration {
  /**
   * <p>AWS Account Id corresponding to provided resources.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Account Type 'source' for AIDevOps monitoring.</p>
   * @public
   */
  accountType: SourceAccountType | undefined;

  /**
   * <p>Role ARN to be assumed by AIDevOps to operate on behalf of customer.</p>
   * @public
   */
  assumableRoleArn: string | undefined;

  /**
   * <p>External ID for additional security when assuming the role. Used to prevent the confused deputy problem.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * <p>Union of all supported service configuration types. Each service has its own specific configuration structure.</p>
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
  | ServiceConfiguration.Mcpserversigv4Member
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
   * <p>AWS source account configuration for monitoring resources.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>AWS monitor account configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>GitHub repository integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Slack workspace integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Dynatrace monitoring integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>ServiceNow instance integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>NewRelic instance integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Datadog MCP server integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>MCP (Model Context Protocol) server integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>GitLab project integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Splunk MCP server integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Event Channel instance integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Azure subscription integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Azure DevOps project integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Grafana MCP server integration configuration.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>PagerDuty integration configuration</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>SigV4-authenticated MCP server integration configuration.</p>
   * @public
   */
  export interface Mcpserversigv4Member {
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
    mcpserversigv4: MCPServerSigV4Configuration;
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
    mcpserversigv4?: never;
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
    mcpserversigv4: (value: MCPServerSigV4Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input for creating a new service association within an AgentSpace.</p>
 * @public
 */
export interface AssociateServiceInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the service.</p>
   * @public
   */
  serviceId: string | undefined;

  /**
   * <p>The configuration that directs how AgentSpace interacts with the given service.</p>
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * <p>Represents a service association within an AgentSpace, defining how the agent interacts with external services.</p>
 * @public
 */
export interface Association {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The timestamp when the resource was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the resource was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Validation status</p>
   * @public
   */
  status?: ValidationStatus | undefined;

  /**
   * <p>The unique identifier of the given association.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The identifier for associated service</p>
   * @public
   */
  serviceId: string | undefined;

  /**
   * <p>The configuration that directs how AgentSpace interacts with the given service.</p>
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * <p>Generic webhook configuration for services that support webhook notifications.</p>
 * @public
 */
export interface GenericWebhook {
  /**
   * <p>The webhook URL endpoint</p>
   * @public
   */
  webhookUrl?: string | undefined;

  /**
   * <p>The unique webhook identifier</p>
   * @public
   */
  webhookId?: string | undefined;

  /**
   * <p>The webhook authentication type</p>
   * @public
   */
  webhookType?: WebhookType | undefined;

  /**
   * <p>The webhook secret for authentication</p>
   * @public
   */
  webhookSecret?: string | undefined;

  /**
   * <p>API Key for API Key webhook authentication</p>
   * @public
   */
  apiKey?: string | undefined;
}

/**
 * <p>Output containing the newly created association and optional webhook configuration.</p>
 * @public
 */
export interface AssociateServiceOutput {
  /**
   * <p>Represents a service association within an AgentSpace, defining how the agent interacts with external services.</p>
   * @public
   */
  association: Association | undefined;

  /**
   * <p>Generic webhook configuration</p>
   * @public
   */
  webhook?: GenericWebhook | undefined;
}

/**
 * <p>Describes one specific validation failure for an input member.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A detailed description of the validation failure.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Input for removing a service association from an AgentSpace.</p>
 * @public
 */
export interface DisassociateServiceInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the given association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * <p>Empty output for successful service disassociation.</p>
 * @public
 */
export interface DisassociateServiceOutput {}

/**
 * <p>Input for retrieving a specific service association.</p>
 * @public
 */
export interface GetAssociationInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the given association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * <p>Output containing the requested association details.</p>
 * @public
 */
export interface GetAssociationOutput {
  /**
   * <p>Represents a service association within an AgentSpace, defining how the agent interacts with external services.</p>
   * @public
   */
  association: Association | undefined;
}

/**
 * <p>Input for listing service associations within an AgentSpace.</p>
 * @public
 */
export interface ListAssociationsInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A comma-separated list of service types to filter list associations output</p>
   * @public
   */
  filterServiceTypes?: string | undefined;
}

/**
 * <p>Output containing a list of service associations and pagination token.</p>
 * @public
 */
export interface ListAssociationsOutput {
  /**
   * <p>Token to retrieve the next page of results, if there are more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of associations.</p>
   * @public
   */
  associations: Association[] | undefined;
}

/**
 * <p>Input for listing service webhooks within an association.</p>
 * @public
 */
export interface ListWebhooksInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the given association.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * <p>Represents a complete Webhook with all its properties, and unique identifier.</p>
 * @public
 */
export interface Webhook {
  /**
   * <p>Webhook endpoint URL.</p>
   * @public
   */
  webhookUrl: string | undefined;

  /**
   * <p>Webhook authentication type.</p>
   * @public
   */
  webhookType?: WebhookType | undefined;

  /**
   * <p>The unique identifier of the Webhook</p>
   * @public
   */
  webhookId: string | undefined;
}

/**
 * <p>Output containing a list of service association webhooks.</p>
 * @public
 */
export interface ListWebhooksOutput {
  /**
   * <p>The list of association webhooks.</p>
   * @public
   */
  webhooks: Webhook[] | undefined;
}

/**
 * <p>Input for updating an existing service association. Present fields are fully replaced; absent fields are left unchanged.</p>
 * @public
 */
export interface UpdateAssociationInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the given association.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The configuration that directs how AgentSpace interacts with the given service. The entire configuration is replaced on update.</p>
   * @public
   */
  configuration: ServiceConfiguration | undefined;
}

/**
 * <p>Output containing the updated association and optional webhook configuration.</p>
 * @public
 */
export interface UpdateAssociationOutput {
  /**
   * <p>Represents a service association within an AgentSpace, defining how the agent interacts with external services.</p>
   * @public
   */
  association: Association | undefined;

  /**
   * <p>Generic webhook configuration</p>
   * @public
   */
  webhook?: GenericWebhook | undefined;
}

/**
 * <p>Input for validating an aws association</p>
 * @public
 */
export interface ValidateAwsAssociationsInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Empty Output for successful validating an aws association</p>
 * @public
 */
export interface ValidateAwsAssociationsOutput {}

/**
 * <p>Input for creating a new AgentSpace.</p>
 * @public
 */
export interface CreateAgentSpaceInput {
  /**
   * <p>The name of the AgentSpace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the AgentSpace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The locale for the AgentSpace, which determines the language used in agent responses.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Client-provided token to ensure request idempotency. When the same token is provided in subsequent calls, the same response is returned within a 8-hour window.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to add to the AgentSpace at creation time.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Output containing the newly created AgentSpace.</p>
 * @public
 */
export interface CreateAgentSpaceOutput {
  /**
   * <p>Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.</p>
   * @public
   */
  agentSpace: AgentSpace | undefined;

  /**
   * <p>Tags associated with the created AgentSpace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Input for deleting an AgentSpace.</p>
 * @public
 */
export interface DeleteAgentSpaceInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Empty output for successful AgentSpace deletion.</p>
 * @public
 */
export interface DeleteAgentSpaceOutput {}

/**
 * <p>Input for disabling the Operator App for an AgentSpace.</p>
 * @public
 */
export interface DisableOperatorAppInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The authentication flow configured for the operator App. e.g. idc</p>
   * @public
   */
  authFlow?: AuthFlow | undefined;
}

/**
 * <p>Input for enabling the Operator App for an AgentSpace.</p>
 * @public
 */
export interface EnableOperatorAppInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The authentication flow configured for the operator App. e.g. iam or idc</p>
   * @public
   */
  authFlow: AuthFlow | undefined;

  /**
   * <p>The IAM role end users assume to access AIDevOps APIs</p>
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * <p>The IdC instance Arn used to create an IdC auth application</p>
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * <p>The OIDC issuer URL of the external Identity Provider</p>
   * @public
   */
  issuerUrl?: string | undefined;

  /**
   * <p>The OIDC client ID for the IdP application</p>
   * @public
   */
  idpClientId?: string | undefined;

  /**
   * <p>The OIDC client secret for the IdP application</p>
   * @public
   */
  idpClientSecret?: string | undefined;

  /**
   * <p>The Identity Provider name (e.g., Entra, Okta, Google)</p>
   * @public
   */
  provider?: string | undefined;
}

/**
 * <p>Configuration for IAM-based authentication flow for the Operator App.</p>
 * @public
 */
export interface IamAuthConfiguration {
  /**
   * <p>The IAM role end users assume to access AIDevOps APIs</p>
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * <p>The timestamp when the Operator App IAM auth flow was enabled.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the Operator App IAM auth flow was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.</p>
 * @public
 */
export interface IdcAuthConfiguration {
  /**
   * <p>The IAM role end users assume to access AIDevOps APIs</p>
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * <p>The IdC instance Arn used to create an IdC auth application</p>
   * @public
   */
  idcInstanceArn: string | undefined;

  /**
   * <p>The IdC application Arn created for IdC auth</p>
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * <p>The timestamp when the Operator App IdC auth flow was enabled.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the Operator App IdC auth flow was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Configuration for external Identity Provider OIDC authentication flow for the Operator App.</p>
 * @public
 */
export interface IdpAuthConfiguration {
  /**
   * <p>The OIDC issuer URL of the external Identity Provider</p>
   * @public
   */
  issuerUrl: string | undefined;

  /**
   * <p>The OIDC client ID for the IdP application</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The IAM role end users assume to access AIDevOps APIs</p>
   * @public
   */
  operatorAppRoleArn: string | undefined;

  /**
   * <p>The Identity Provider name (e.g., Entra, Okta, Google)</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The timestamp when the Operator App IdP auth flow was enabled.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the Operator App IdP auth flow was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output containing the enabled Operator App configuration.</p>
 * @public
 */
export interface EnableOperatorAppOutput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Configuration for IAM-based authentication flow for the Operator App.</p>
   * @public
   */
  iam?: IamAuthConfiguration | undefined;

  /**
   * <p>Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.</p>
   * @public
   */
  idc?: IdcAuthConfiguration | undefined;

  /**
   * <p>Configuration for external Identity Provider OIDC authentication flow for the Operator App.</p>
   * @public
   */
  idp?: IdpAuthConfiguration | undefined;
}

/**
 * <p>Input for retrieving a specific AgentSpace by ID.</p>
 * @public
 */
export interface GetAgentSpaceInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Output containing the requested AgentSpace details.</p>
 * @public
 */
export interface GetAgentSpaceOutput {
  /**
   * <p>Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.</p>
   * @public
   */
  agentSpace: AgentSpace | undefined;

  /**
   * <p>Tags associated with the AgentSpace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Input for retrieving Operator App configuration.</p>
 * @public
 */
export interface GetOperatorAppInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Output containing the Operator App configuration including authentication details.</p>
 * @public
 */
export interface GetOperatorAppOutput {
  /**
   * <p>Configuration for IAM-based authentication flow for the Operator App.</p>
   * @public
   */
  iam?: IamAuthConfiguration | undefined;

  /**
   * <p>Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.</p>
   * @public
   */
  idc?: IdcAuthConfiguration | undefined;

  /**
   * <p>Configuration for external Identity Provider OIDC authentication flow for the Operator App.</p>
   * @public
   */
  idp?: IdpAuthConfiguration | undefined;
}

/**
 * <p>Input for listing AgentSpaces with pagination support.</p>
 * @public
 */
export interface ListAgentSpacesInput {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Output containing a list of AgentSpaces and pagination token.</p>
 * @public
 */
export interface ListAgentSpacesOutput {
  /**
   * <p>Token to retrieve the next page of results, if there are more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of AgentSpaces.</p>
   * @public
   */
  agentSpaces: AgentSpace[] | undefined;
}

/**
 * <p>Input for updating an existing AgentSpace's properties. All fields except agentSpaceId are optional for partial updates.</p>
 * @public
 */
export interface UpdateAgentSpaceInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated name of the AgentSpace.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the AgentSpace.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated locale for the AgentSpace, which determines the language used in agent responses.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Output containing the updated AgentSpace.</p>
 * @public
 */
export interface UpdateAgentSpaceOutput {
  /**
   * <p>Represents a complete AgentSpace with all its properties, timestamps, encryption settings, and unique identifier.</p>
   * @public
   */
  agentSpace: AgentSpace | undefined;
}

/**
 * <p>Input for updating the external Identity Provider configuration for the Operator App.</p>
 * @public
 */
export interface UpdateOperatorAppIdpConfigInput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The OIDC client secret for the IdP application</p>
   * @public
   */
  idpClientSecret?: string | undefined;
}

/**
 * <p>Output containing the updated IdP configuration.</p>
 * @public
 */
export interface UpdateOperatorAppIdpConfigOutput {
  /**
   * <p>The unique identifier of the AgentSpace</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Configuration for external Identity Provider OIDC authentication flow for the Operator App.</p>
   * @public
   */
  idp: IdpAuthConfiguration | undefined;
}

/**
 * <p>A block of content in an assistant message.</p>
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
   * <p>Text content from the assistant.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    $unknown?: never;
  }

  /**
   * <p>Tool use request from the assistant.</p>
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
 * <p>A single chat execution summary</p>
 * @public
 */
export interface ChatExecution {
  /**
   * <p>The unique identifier for the execution</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>Timestamp when the chat was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when the chat was last updated</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Summary or title of the chat</p>
   * @public
   */
  summary?: string | undefined;
}

/**
 * <p>Reference information linking a task to external systems - for input with validation</p>
 * @public
 */
export interface ReferenceInput {
  /**
   * <p>The name of the external system</p>
   * @public
   */
  system: string | undefined;

  /**
   * <p>Optional title for the reference</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The unique identifier in the external system</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>URL to access the reference in the external system</p>
   * @public
   */
  referenceUrl: string | undefined;

  /**
   * <p>Association identifier of the external system</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * <p>Request structure for creating a new backlog task</p>
 * @public
 */
export interface CreateBacklogTaskRequest {
  /**
   * <p>The unique identifier for the agent space where the task will be created</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Optional reference information for the task</p>
   * @public
   */
  reference?: ReferenceInput | undefined;

  /**
   * <p>The type of task being created</p>
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * <p>The title of the backlog task</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Optional detailed description of the task</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The priority level of the task</p>
   * @public
   */
  priority: Priority | undefined;

  /**
   * <p>Client-provided token for idempotent operations</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Reference information linking a task to external systems - for output without validation</p>
 * @public
 */
export interface ReferenceOutput {
  /**
   * <p>The name of the external system</p>
   * @public
   */
  system: string | undefined;

  /**
   * <p>Optional title for the reference</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The unique identifier in the external system</p>
   * @public
   */
  referenceId: string | undefined;

  /**
   * <p>URL to access the reference in the external system</p>
   * @public
   */
  referenceUrl: string | undefined;

  /**
   * <p>Association identifier of the external system</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * <p>Represents a backlog task with all its properties and metadata</p>
 * @public
 */
export interface Task {
  /**
   * <p>The unique identifier for the agent space containing this task</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for this task</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The execution ID associated with this task, if any</p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p>The title of the task</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Optional detailed description of the task</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Optional reference information linking this task to external systems</p>
   * @public
   */
  reference?: ReferenceOutput | undefined;

  /**
   * <p>The type of this task</p>
   * @public
   */
  taskType: TaskType | undefined;

  /**
   * <p>The priority level of this task</p>
   * @public
   */
  priority: Priority | undefined;

  /**
   * <p>The current status of this task</p>
   * @public
   */
  status: TaskStatus | undefined;

  /**
   * <p>Timestamp when this task was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when this task was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Version number for optimistic locking</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>Optional support metadata for the task</p>
   * @public
   */
  supportMetadata?: __DocumentType | undefined;

  /**
   * <p>Optional metadata for the task</p>
   * @public
   */
  metadata?: __DocumentType | undefined;

  /**
   * <p>The task ID of the primary investigation this task is linked to</p>
   * @public
   */
  primaryTaskId?: string | undefined;

  /**
   * <p>Explanation for why the task status was changed (e.g., linked reason)</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Indicates if this task has other tasks linked to it</p>
   * @public
   */
  hasLinkedTasks?: boolean | undefined;
}

/**
 * <p>Response structure containing the created backlog task</p>
 * @public
 */
export interface CreateBacklogTaskResponse {
  /**
   * <p>The newly created task object</p>
   * @public
   */
  task: Task | undefined;
}

/**
 * <p>Request structure for creating a new chat</p>
 * @public
 */
export interface CreateChatRequest {
  /**
   * <p>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The user identifier for the chat. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.</p>
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The authentication type of the user</p>
   * @public
   */
  userType?: UserType | undefined;
}

/**
 * <p>Response structure for creating a new chat</p>
 * @public
 */
export interface CreateChatResponse {
  /**
   * <p>The unique identifier for the created execution</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>Timestamp when the chat was created</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Configuration for a self-managed Private Connection.</p>
 * @public
 */
export interface SelfManagedInput {
  /**
   * <p>The ID or ARN of the resource configuration.</p>
   * @public
   */
  resourceConfigurationId: string | undefined;

  /**
   * <p>Certificate for the Private Connection.</p>
   * @public
   */
  certificate?: string | undefined;
}

/**
 * <p>Configuration for a service-managed Private Connection.</p>
 * @public
 */
export interface ServiceManagedInput {
  /**
   * <p>IP address or DNS name of the target resource.</p>
   * @public
   */
  hostAddress: string | undefined;

  /**
   * <p>VPC to create the service-managed Resource Gateway in.</p>
   * @public
   */
  vpcId: string | undefined;

  /**
   * <p>Subnets that the service-managed Resource Gateway will span.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>Security groups to attach to the service-managed Resource Gateway. If not specified, a default security group is created.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>IP address type of the service-managed Resource Gateway.</p>
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * <p>Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.</p>
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * <p>TCP port ranges that a consumer can use to access the resource.</p>
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * <p>Certificate for the Private Connection.</p>
   * @public
   */
  certificate?: string | undefined;
}

/**
 * <p>Private Connection mode — either service-managed or self-managed.</p>
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
   * <p>Service manages the Resource Gateway lifecycle.</p>
   * @public
   */
  export interface ServiceManagedMember {
    serviceManaged: ServiceManagedInput;
    selfManaged?: never;
    $unknown?: never;
  }

  /**
   * <p>Caller manages their own resource configuration.</p>
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
 * <p>Input for creating a new Private Connection.</p>
 * @public
 */
export interface CreatePrivateConnectionInput {
  /**
   * <p>Unique name for this Private Connection within the account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Private Connection mode configuration.</p>
   * @public
   */
  mode: PrivateConnectionMode | undefined;

  /**
   * <p>Tags to add to the Private Connection at creation time.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Output containing the newly created Private Connection summary.</p>
 * @public
 */
export interface CreatePrivateConnectionOutput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the Private Connection.</p>
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * <p>The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>IP address or DNS name of the target resource. Only present for service-managed Private Connections.</p>
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * <p>VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The Resource Configuration ARN. Only present for self-managed Private Connections.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The status of the Private Connection.</p>
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * <p>The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.</p>
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * <p>Tags associated with the created Private Connection.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Authorization discovery configuration for MCP server.</p>
 * @public
 */
export interface MCPServerAuthorizationDiscoveryConfig {
  /**
   * <p>The endpoint to return to after OAuth flow completes (must be AWS console domain)</p>
   * @public
   */
  returnToEndpoint: string | undefined;
}

/**
 * <p>Authorization configuration for Datadog MCP server (uses authorization discovery only).</p>
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
   * <p>Datadog MCP server authorization discovery configuration.</p>
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
 * <p>Complete service details for Datadog MCP server integration.</p>
 * @public
 */
export interface DatadogServiceDetails {
  /**
   * <p>MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Datadog MCP server authorization configuration (only authorization discovery is supported).</p>
   * @public
   */
  authorizationConfig: DatadogAuthorizationConfig | undefined;
}

/**
 * <p>Input for deleting an existing Private Connection.</p>
 * @public
 */
export interface DeletePrivateConnectionInput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Output containing the status of the Private Connection deletion.</p>
 * @public
 */
export interface DeletePrivateConnectionOutput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the Private Connection.</p>
   * @public
   */
  status: PrivateConnectionStatus | undefined;
}

/**
 * <p>Input for deregistering a service.</p>
 * @public
 */
export interface DeregisterServiceInput {
  /**
   * <p>The service id to deregister. A service can only be deregistered if it is not associated with any AgentSpace.</p>
   * @public
   */
  serviceId: string | undefined;
}

/**
 * <p>Empty output for successful service deregistration.</p>
 * @public
 */
export interface DeregisterServiceOutput {}

/**
 * <p>Input for describing an existing Private Connection.</p>
 * @public
 */
export interface DescribePrivateConnectionInput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Output containing the Private Connection details.</p>
 * @public
 */
export interface DescribePrivateConnectionOutput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the Private Connection.</p>
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * <p>The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>IP address or DNS name of the target resource. Only present for service-managed Private Connections.</p>
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * <p>VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The Resource Configuration ARN. Only present for self-managed Private Connections.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The status of the Private Connection.</p>
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * <p>The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.</p>
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * <p>Tags associated with the Private Connection.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetAccountUsageInput {}

/**
 * <p>Represents a usage metric with its configured limit and current usage value.</p>
 * @public
 */
export interface UsageMetric {
  /**
   * <p>Configured limit for this metric.</p>
   * @public
   */
  limit: number | undefined;

  /**
   * <p>Current usage for this metric</p>
   * @public
   */
  usage: number | undefined;
}

/**
 * @public
 */
export interface GetAccountUsageOutput {
  /**
   * <p>Monthly investigation hours usage and limit for an account</p>
   * @public
   */
  monthlyAccountInvestigationHours?: UsageMetric | undefined;

  /**
   * <p>Monthly evaluation hours usage and limit for an account</p>
   * @public
   */
  monthlyAccountEvaluationHours?: UsageMetric | undefined;

  /**
   * <p>Monthly system learning hours usage and limit for an account</p>
   * @public
   */
  monthlyAccountSystemLearningHours?: UsageMetric | undefined;

  /**
   * <p>Monthly on-demand hours usage and limit for an account</p>
   * @public
   */
  monthlyAccountOnDemandHours?: UsageMetric | undefined;

  /**
   * <p>The start time of the usage tracking period</p>
   * @public
   */
  usagePeriodStartTime: Date | undefined;

  /**
   * <p>The end time of the usage tracking period</p>
   * @public
   */
  usagePeriodEndTime: Date | undefined;
}

/**
 * <p>Request structure for retrieving a specific backlog task</p>
 * @public
 */
export interface GetBacklogTaskRequest {
  /**
   * <p>The unique identifier for the agent space containing the task</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the task to retrieve</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * <p>Response structure containing the requested backlog task</p>
 * @public
 */
export interface GetBacklogTaskResponse {
  /**
   * <p>The requested task object</p>
   * @public
   */
  task: Task | undefined;
}

/**
 * <p>Request structure for retrieving a specific recommendation</p>
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * <p>The unique identifier for the agent space containing the recommendation</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for the recommendation to retrieve</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>Specific version of the recommendation to retrieve. If not specified, returns the latest version.</p>
   * @public
   */
  recommendationVersion?: number | undefined;
}

/**
 * <p>Content of a recommendation</p>
 * @public
 */
export interface RecommendationContent {
  /**
   * <p>A brief summary of the recommendation.</p>
   * @public
   */
  summary: string | undefined;

  /**
   * <p>Agent-ready specification with detailed implementation steps</p>
   * @public
   */
  spec?: string | undefined;
}

/**
 * <p>Represents a recommendation with all its properties and metadata</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>ARN of the agent space this recommendation belongs to</p>
   * @public
   */
  agentSpaceArn: string | undefined;

  /**
   * <p>The unique identifier for this recommendation</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>ID of the task that generated the recommendation</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>ID of the goal this recommendation is associated with</p>
   * @public
   */
  goalId?: string | undefined;

  /**
   * <p>The title of the recommendation</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Content of the recommendation</p>
   * @public
   */
  content: RecommendationContent | undefined;

  /**
   * <p>Current status of the recommendation</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>Priority level of the recommendation</p>
   * @public
   */
  priority: RecommendationPriority | undefined;

  /**
   * <p>Version of the goal at the time this recommendation was generated</p>
   * @public
   */
  goalVersion?: number | undefined;

  /**
   * <p>Additional context for recommendation</p>
   * @public
   */
  additionalContext?: string | undefined;

  /**
   * <p>Position in ranked list (1 = highest priority)</p>
   * @public
   */
  rankPosition?: number | undefined;

  /**
   * <p>Timestamp when the recommendation was last ranked</p>
   * @public
   */
  rankedAt?: Date | undefined;

  /**
   * <p>Timestamp when this recommendation was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when this recommendation was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Version number for optimistic locking</p>
   * @public
   */
  version: number | undefined;
}

/**
 * <p>Response structure containing the requested recommendation</p>
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The requested recommendation</p>
   * @public
   */
  recommendation: Recommendation | undefined;
}

/**
 * <p>Filter criteria for listing backlog tasks, supporting time range, priority, status, and type filters.</p>
 * @public
 */
export interface TaskFilter {
  /**
   * <p>Filter for tasks created after this timestamp inclusive</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>Filter for tasks created before this timestamp exclusive</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>Filter by priority (single value only)</p>
   * @public
   */
  priority?: Priority[] | undefined;

  /**
   * <p>Filter by status (single value only)</p>
   * @public
   */
  status?: TaskStatus[] | undefined;

  /**
   * <p>Filter by task type (single value only)</p>
   * @public
   */
  taskType?: TaskType[] | undefined;

  /**
   * <p>Filter by primary task ID to get linked tasks</p>
   * @public
   */
  primaryTaskId?: string | undefined;
}

/**
 * <p>Request structure for listing backlog tasks with filtering, sorting, and pagination support</p>
 * @public
 */
export interface ListBacklogTasksRequest {
  /**
   * <p>The unique identifier for the agent space containing the tasks</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Filter criteria to apply when listing tasks Filtering restrictions: - Each filter field list is limited to a single value - Filtering by Priority and Status at the same time when not filtering by Type is not permitted - Timestamp filters (createdAfter, createdBefore) can be combined with other filters when not sorting by priority</p>
   * @public
   */
  filter?: TaskFilter | undefined;

  /**
   * <p>Maximum number of tasks to return in a single response (1-1000, default: 100)</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Token for retrieving the next page of results</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Field to sort by Sorting restrictions: - Only sorting on createdAt is supported when using priority or status filters alone. - Sorting by priority is not supported when using Timestamp filters (createdAfter, createdBefore)</p>
   * @public
   */
  sortField?: TaskSortField | undefined;

  /**
   * <p>Sort order for the tasks based on sortField (default: DESC)</p>
   * @public
   */
  order?: TaskSortOrder | undefined;
}

/**
 * <p>Response structure containing a list of backlog tasks</p>
 * @public
 */
export interface ListBacklogTasksResponse {
  /**
   * <p>List of backlog tasks</p>
   * @public
   */
  tasks: Task[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if more results are available</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing chats</p>
 * @public
 */
export interface ListChatsRequest {
  /**
   * <p>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The user identifier to list chats for. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.</p>
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>Maximum number of results to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Response structure for listing chats</p>
 * @public
 */
export interface ListChatsResponse {
  /**
   * <p>List of recent chat executions</p>
   * @public
   */
  executions: ChatExecution[] | undefined;

  /**
   * <p>Token for retrieving the next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing executions</p>
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * <p>The unique identifier for the agent space</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the task whose executions to retrieve</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Maximum number of executions to return</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents an execution instance with its lifecycle information</p>
 * @public
 */
export interface Execution {
  /**
   * <p>The unique identifier for the agent space containing this execution</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for this execution</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The identifier of the parent execution, if this is a child execution</p>
   * @public
   */
  parentExecutionId?: string | undefined;

  /**
   * <p>The specific subtask being executed by the agent</p>
   * @public
   */
  agentSubTask: string | undefined;

  /**
   * <p>Timestamp when this execution was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when this execution was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of this execution</p>
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * <p>The type of agent that performed this execution.</p>
   * @public
   */
  agentType?: string | undefined;

  /**
   * <p>The unique identifier for the user session associated with this execution</p>
   * @public
   */
  uid?: string | undefined;
}

/**
 * <p>Response structure containing executions</p>
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * <p>List of executions</p>
   * @public
   */
  executions: Execution[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if available</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing goals</p>
 * @public
 */
export interface ListGoalsRequest {
  /**
   * <p>The unique identifier for the agent space</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Filter goals by goal status</p>
   * @public
   */
  status?: GoalStatus | undefined;

  /**
   * <p>Filter goals by goal type</p>
   * @public
   */
  goalType?: GoalType | undefined;

  /**
   * <p>Maximum number of goals to return</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Pagination token for the next set of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Content of a goal</p>
 * @public
 */
export interface GoalContent {
  /**
   * <p>A detailed description of the goal.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The objectives to be achieved for this goal.</p>
   * @public
   */
  objectives: string | undefined;
}

/**
 * <p>Schedule configuration for goal evaluations</p>
 * @public
 */
export interface GoalSchedule {
  /**
   * <p>Whether the schedule is enabled or disabled</p>
   * @public
   */
  state: SchedulerState | undefined;

  /**
   * <p>Schedule expression (e.g., 'rate(7 days)')</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * <p>Represents a goal with all its properties and metadata</p>
 * @public
 */
export interface Goal {
  /**
   * <p>The unique identifier for the agent space containing this goal</p>
   * @public
   */
  agentSpaceArn: string | undefined;

  /**
   * <p>The unique identifier for this goal</p>
   * @public
   */
  goalId: string | undefined;

  /**
   * <p>The title of the goal</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>Content of the goal</p>
   * @public
   */
  content: GoalContent | undefined;

  /**
   * <p>Current status of the goal itself</p>
   * @public
   */
  status: GoalStatus | undefined;

  /**
   * <p>Type of goal based on its origin</p>
   * @public
   */
  goalType: GoalType | undefined;

  /**
   * <p>Timestamp when this goal was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when this goal was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Timestamp when the goal was last evaluated</p>
   * @public
   */
  lastEvaluatedAt?: Date | undefined;

  /**
   * <p>ID of the most recent task associated with this goal</p>
   * @public
   */
  lastTaskId?: string | undefined;

  /**
   * <p>ID of the most recent successful task associated with this goal</p>
   * @public
   */
  lastSuccessfulTaskId?: string | undefined;

  /**
   * <p>Version number for optimistic locking</p>
   * @public
   */
  version: number | undefined;

  /**
   * <p>Goal Schedule. Allows to schedule the goal to run periodically, as well as disable a goal temporarily</p>
   * @public
   */
  evaluationSchedule?: GoalSchedule | undefined;
}

/**
 * <p>Response structure containing the list of goals</p>
 * @public
 */
export interface ListGoalsResponse {
  /**
   * <p>List of goals matching the criteria</p>
   * @public
   */
  goals: Goal[] | undefined;

  /**
   * <p>Pagination token for the next set of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing journal records with filtering and pagination support</p>
 * @public
 */
export interface ListJournalRecordsRequest {
  /**
   * <p>The unique identifier for the agent space containing the execution</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the execution whose journal records to retrieve</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>Maximum number of records to return in a single response (1-100, default: 100)</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Token for retrieving the next page of results</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter records by type (empty string returns all types)</p>
   * @public
   */
  recordType?: string | undefined;

  /**
   * <p>Sort order for the records based on timestamp (default: DESC)</p>
   * @public
   */
  order?: OrderType | undefined;
}

/**
 * <p>Reference to a user in the system</p>
 * @public
 */
export interface UserReference {
  /**
   * <p>The unique identifier for the user</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of user</p>
   * @public
   */
  userType: UserType | undefined;
}

/**
 * <p>Represents a journal record containing execution details and content</p>
 * @public
 */
export interface JournalRecord {
  /**
   * <p>The unique identifier for the agent space containing this record</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The execution ID associated with this journal record</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The unique identifier for this journal record</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The content of this journal record</p>
   * @public
   */
  content: __DocumentType | undefined;

  /**
   * <p>Timestamp when this journal record was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The type of this journal record</p>
   * @public
   */
  recordType: string | undefined;

  /**
   * <p>Reference to the user associated with this journal record</p>
   * @public
   */
  userReference?: UserReference | undefined;
}

/**
 * <p>Response structure containing a list of journal records</p>
 * @public
 */
export interface ListJournalRecordsResponse {
  /**
   * <p>List of journal records matching the request criteria</p>
   * @public
   */
  records: JournalRecord[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if more results are available</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing pending messages with filtering and pagination support</p>
 * @public
 */
export interface ListPendingMessagesRequest {
  /**
   * <p>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the execution whose journal records to retrieve</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * <p>A block of content in a user message.</p>
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
   * <p>Text content from the user.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * <p>Tool execution result provided by the user.</p>
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
 * <p>A message in a conversation, either from the user or the assistant.</p>
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
   * <p>A message from the user.</p>
   * @public
   */
  export interface UserMessageMember {
    userMessage: UserMessageBlock[];
    assistantMessage?: never;
    $unknown?: never;
  }

  /**
   * <p>A message from the assistant.</p>
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
 * <p>Represents a pending message in an agent execution.</p>
 * @public
 */
export interface PendingMessage {
  /**
   * <p>The unique identifier for this pending message.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The message content.</p>
   * @public
   */
  message: Message | undefined;
}

/**
 * <p>Response structure containing a list of pending messages</p>
 * @public
 */
export interface ListPendingMessagesResponse {
  /**
   * <p>Unique identifier for an agent space (allows alphanumeric characters and hyphens; 1-64 characters)</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for the execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The list of pending messages for the execution.</p>
   * @public
   */
  messages: PendingMessage[] | undefined;

  /**
   * <p>Timestamp when the pending messages were created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Request structure for listing recommendations with filtering and pagination support</p>
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * <p>The unique identifier for the agent space containing the recommendations</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Optional task ID to filter recommendations by specific task</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>Optional goal ID to filter recommendations by specific goal</p>
   * @public
   */
  goalId?: string | undefined;

  /**
   * <p>Optional status to filter recommendations by their current status</p>
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * <p>Optional priority to filter recommendations by priority level</p>
   * @public
   */
  priority?: RecommendationPriority | undefined;

  /**
   * <p>Maximum number of recommendations to return in a single response</p>
   * @public
   */
  limit?: number | undefined;

  /**
   * <p>Token for retrieving the next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Response structure containing a list of recommendations</p>
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>List of recommendations matching the request criteria</p>
   * @public
   */
  recommendations: Recommendation[] | undefined;

  /**
   * <p>Token for retrieving the next page of results, if more results are available</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags associated with the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Input for listing Private Connections in the caller's account.</p>
 * @public
 */
export interface ListPrivateConnectionsInput {}

/**
 * <p>Summary of a Private Connection.</p>
 * @public
 */
export interface PrivateConnectionSummary {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the Private Connection.</p>
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * <p>The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>IP address or DNS name of the target resource. Only present for service-managed Private Connections.</p>
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * <p>VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The Resource Configuration ARN. Only present for self-managed Private Connections.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The status of the Private Connection.</p>
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * <p>The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.</p>
   * @public
   */
  certificateExpiryTime?: Date | undefined;
}

/**
 * <p>Output containing the list of Private Connections.</p>
 * @public
 */
export interface ListPrivateConnectionsOutput {
  /**
   * <p>The list of Private Connections.</p>
   * @public
   */
  privateConnections: PrivateConnectionSummary[] | undefined;
}

/**
 * <p>Input for updating the certificate of a Private Connection.</p>
 * @public
 */
export interface UpdatePrivateConnectionCertificateInput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new certificate for the Private Connection.</p>
   * @public
   */
  certificate: string | undefined;
}

/**
 * <p>Output containing the updated Private Connection summary.</p>
 * @public
 */
export interface UpdatePrivateConnectionCertificateOutput {
  /**
   * <p>The name of the Private Connection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the Private Connection.</p>
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * <p>The service-managed Resource Gateway ARN. Only present for service-managed Private Connections.</p>
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * <p>IP address or DNS name of the target resource. Only present for service-managed Private Connections.</p>
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * <p>VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The Resource Configuration ARN. Only present for self-managed Private Connections.</p>
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * <p>The status of the Private Connection.</p>
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * <p>The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.</p>
   * @public
   */
  certificateExpiryTime?: Date | undefined;
}

/**
 * <p>Context object for additional message metadata</p>
 * @public
 */
export interface SendMessageContext {
  /**
   * <p>The current page or view the user is on</p>
   * @public
   */
  currentPage?: string | undefined;

  /**
   * <p>The ID of the last message in the conversation</p>
   * @public
   */
  lastMessage?: string | undefined;

  /**
   * <p>Response to a UI prompt (not a text conversation message)</p>
   * @public
   */
  userActionResponse?: string | undefined;
}

/**
 * <p>Request structure for sending a chat message</p>
 * @public
 */
export interface SendMessageRequest {
  /**
   * <p>The agent space identifier</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The execution identifier for the chat session</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The user message content</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>Optional context for the message</p>
   * @public
   */
  context?: SendMessageContext | undefined;

  /**
   * <p>User identifier. This field is deprecated and will be ignored — the service resolves user identity from the authenticated session.</p>
   *
   * @deprecated (since 2026-04-15) userId is managed by the service and should not be provided by the caller.
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>JSON delta containing partial JSON</p>
 * @public
 */
export interface SendMessageJsonDelta {
  /**
   * <p>Partial JSON string</p>
   * @public
   */
  partialJson?: string | undefined;
}

/**
 * <p>Text delta containing a text fragment</p>
 * @public
 */
export interface SendMessageTextDelta {
  /**
   * <p>The text fragment</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Union of possible delta payloads within a content block delta event</p>
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
   * <p>Text delta for text-based content blocks</p>
   * @public
   */
  export interface TextDeltaMember {
    textDelta: SendMessageTextDelta;
    jsonDelta?: never;
    $unknown?: never;
  }

  /**
   * <p>JSON delta for structured content blocks</p>
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
 * <p>Event emitted for each incremental content delta within a content block</p>
 * @public
 */
export interface SendMessageContentBlockDeltaEvent {
  /**
   * <p>Zero-based index of the content block</p>
   * @public
   */
  index?: number | undefined;

  /**
   * <p>The incremental content delta</p>
   * @public
   */
  delta?: SendMessageContentBlockDelta | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event emitted when a new content block starts</p>
 * @public
 */
export interface SendMessageContentBlockStartEvent {
  /**
   * <p>Zero-based index of the content block</p>
   * @public
   */
  index?: number | undefined;

  /**
   * <p>The type of content in this block</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>Block identifier</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Optional parent block ID for nested content blocks (e.g. subagent tool calls)</p>
   * @public
   */
  parentId?: string | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event emitted when a content block is complete</p>
 * @public
 */
export interface SendMessageContentBlockStopEvent {
  /**
   * <p>Zero-based index of the content block</p>
   * @public
   */
  index?: number | undefined;

  /**
   * <p>The type of content in this block</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The accumulated complete content text</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Whether this is the final content block in the response</p>
   * @public
   */
  last?: boolean | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Heartbeat event to keep connection alive</p>
 * @public
 */
export interface SendMessageHeartbeatEvent {}

/**
 * <p>Token usage information</p>
 * @public
 */
export interface SendMessageUsageInfo {
  /**
   * <p>Number of input tokens</p>
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * <p>Number of output tokens</p>
   * @public
   */
  outputTokens?: number | undefined;

  /**
   * <p>Total tokens used</p>
   * @public
   */
  totalTokens?: number | undefined;
}

/**
 * <p>Event emitted when the response completes successfully</p>
 * @public
 */
export interface SendMessageResponseCompletedEvent {
  /**
   * <p>The response ID</p>
   * @public
   */
  responseId?: string | undefined;

  /**
   * <p>Token usage information</p>
   * @public
   */
  usage?: SendMessageUsageInfo | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event emitted when the response is created</p>
 * @public
 */
export interface SendMessageResponseCreatedEvent {
  /**
   * <p>The response ID</p>
   * @public
   */
  responseId?: string | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event emitted when the response fails</p>
 * @public
 */
export interface SendMessageResponseFailedEvent {
  /**
   * <p>The response ID</p>
   * @public
   */
  responseId?: string | undefined;

  /**
   * <p>Error code</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>Error message</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event emitted while the response is being generated</p>
 * @public
 */
export interface SendMessageResponseInProgressEvent {
  /**
   * <p>The response ID</p>
   * @public
   */
  responseId?: string | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event summarizing agent actions</p>
 * @public
 */
export interface SendMessageSummaryEvent {
  /**
   * <p>Summary content</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>Event sequence number</p>
   * @public
   */
  sequenceNumber?: number | undefined;
}

/**
 * <p>Event stream for chat message responses using the content block model. Events follow a lifecycle: responseCreated -&gt; responseInProgress -&gt; (contentBlockStart/contentBlockDelta/contentBlockStop events) -&gt; responseCompleted|responseFailed SendMessage always uses content block mode — legacy per-field events (outputTextDelta, functionCallArgumentsDelta, etc.) are not emitted.</p>
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
   * <p>Emitted when the response is created</p>
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
   * <p>Emitted while the response is being generated</p>
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
   * <p>Emitted when the response completes successfully</p>
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
   * <p>Emitted when the response fails</p>
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
   * <p>Emitted to provide a summary of agent actions</p>
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
   * <p>Heartbeat event sent periodically to keep the connection alive during idle periods</p>
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
   * <p>Emitted when a new content block starts</p>
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
   * <p>Emitted for each incremental content delta within a content block</p>
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
   * <p>Emitted when a content block is complete</p>
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
 * <p>Response structure for sending chat message events</p>
 * @public
 */
export interface SendMessageResponse {
  /**
   * <p>The stream of chat message events</p>
   * @public
   */
  events: AsyncIterable<SendMessageEvents> | undefined;
}

/**
 * <p>Input for retrieving a specific service association.</p>
 * @public
 */
export interface GetServiceInput {
  /**
   * <p>The unique identifier of the given service.</p>
   * @public
   */
  serviceId: string | undefined;
}

/**
 * <p>Represents a registered service with its configuration and accessible resources.</p>
 * @public
 */
export interface RegisteredService {
  /**
   * <p>The unique identifier of a service.</p>
   * @public
   */
  serviceId: string | undefined;

  /**
   * <p>The service type e.g github or dynatrace</p>
   * @public
   */
  serviceType: Service | undefined;

  /**
   * <p>The display name of the registered service.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>List of accessible resources for this service.</p>
   * @public
   */
  accessibleResources?: __DocumentType[] | undefined;

  /**
   * <p>Additional details specific to the service type.</p>
   * @public
   */
  additionalServiceDetails?: AdditionalServiceDetails | undefined;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The name of the private connection used for VPC connectivity.</p>
   * @public
   */
  privateConnectionName?: string | undefined;
}

/**
 * <p>Output containing the requested service details.</p>
 * @public
 */
export interface GetServiceOutput {
  /**
   * <p>Represents a registered service with its configuration and accessible resources.</p>
   * @public
   */
  service: RegisteredService | undefined;

  /**
   * <p>Tags associated with the Service.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Input for listing registered services with optional filtering by service type.</p>
 * @public
 */
export interface ListServicesInput {
  /**
   * <p>Maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional filter to list only services of a specific type.</p>
   * @public
   */
  filterServiceType?: Service | undefined;
}

/**
 * <p>Output containing a list of registered services and pagination token.</p>
 * @public
 */
export interface ListServicesOutput {
  /**
   * <p>Token to retrieve the next page of results, if there are more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of registered services.</p>
   * @public
   */
  services: RegisteredService[] | undefined;
}

/**
 * <p>OAuth client credentials configuration for Dynatrace.</p>
 * @public
 */
export interface DynatraceOAuthClientCredentialsConfig {
  /**
   * <p>User friendly OAuth client name specified by end user.</p>
   * @public
   */
  clientName?: string | undefined;

  /**
   * <p>OAuth client ID for authenticating with the service.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>OAuth token exchange parameters for authenticating with the service.</p>
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * <p>OAuth client secret for authenticating with the service.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Authorization configuration options for Dynatrace service.</p>
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
   * <p>OAuth client credentials configuration.</p>
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
 * <p>Complete service details for Dynatrace integration.</p>
 * @public
 */
export interface DynatraceServiceDetails {
  /**
   * <p>Dynatrace resource account urn.</p>
   * @public
   */
  accountUrn: string | undefined;

  /**
   * <p>Dynatrace OAuth client credentials configuration. Use this when registering with OAuth client credentials flow.</p>
   * @public
   */
  authorizationConfig?: DynatraceServiceAuthorizationConfig | undefined;
}

/**
 * <p>Service details for Event Channel integration.</p>
 * @public
 */
export interface EventChannelDetails {
  /**
   * <p>The type of event channel</p>
   * @public
   */
  type?: EventChannelType | undefined;
}

/**
 * <p>Service details for GitLab integration.</p>
 * @public
 */
export interface GitLabDetails {
  /**
   * <p>GitLab instance URL (e.g., https://gitlab.com or self-hosted instance).</p>
   * @public
   */
  targetUrl: string | undefined;

  /**
   * <p>Type of GitLab access token</p>
   * @public
   */
  tokenType: GitLabTokenType | undefined;

  /**
   * <p>GitLab access token value</p>
   * @public
   */
  tokenValue: string | undefined;

  /**
   * <p>Optional GitLab group ID for group-level access tokens</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * <p>API key configuration for MCP server.</p>
 * @public
 */
export interface MCPServerAPIKeyConfig {
  /**
   * <p>User friendly API key name specified by end user.</p>
   * @public
   */
  apiKeyName: string | undefined;

  /**
   * <p>API key value for authenticating with the service.</p>
   * @public
   */
  apiKeyValue: string | undefined;

  /**
   * <p>HTTP header name to send the API key in requests to the service.</p>
   * @public
   */
  apiKeyHeader: string | undefined;
}

/**
 * <p>Bearer token configuration for MCP server (RFC 6750).</p>
 * @public
 */
export interface MCPServerBearerTokenConfig {
  /**
   * <p>User friendly bearer token name specified by end user.</p>
   * @public
   */
  tokenName: string | undefined;

  /**
   * <p>Bearer token value in alphanumeric for authenticating with the service.</p>
   * @public
   */
  tokenValue: string | undefined;

  /**
   * <p>HTTP header name to send the bearer token in requests to the service. Defaults to 'Authorization' per RFC 6750.</p>
   * @public
   */
  authorizationHeader?: string | undefined;
}

/**
 * <p>OAuth 3-legged authorization configuration for MCP server.</p>
 * @public
 */
export interface MCPServerOAuth3LOConfig {
  /**
   * <p>User friendly OAuth client name specified by end user.</p>
   * @public
   */
  clientName?: string | undefined;

  /**
   * <p>OAuth client ID for authenticating with the service.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>OAuth token exchange parameters for authenticating with the service.</p>
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * <p>The endpoint to return to after OAuth flow completes (must be AWS console domain)</p>
   * @public
   */
  returnToEndpoint: string | undefined;

  /**
   * <p>OAuth authorization URL for 3LO authentication.</p>
   * @public
   */
  authorizationUrl: string | undefined;

  /**
   * <p>OAuth token exchange URL.</p>
   * @public
   */
  exchangeUrl: string | undefined;

  /**
   * <p>OAuth client secret for authenticating with the service. Required for confidential clients or when PKCE is not supported. Optional for public clients using PKCE.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>Whether the service supports PKCE (Proof Key for Code Exchange) for enhanced security during the OAuth flow.</p>
   * @public
   */
  supportCodeChallenge?: boolean | undefined;

  /**
   * <p>OAuth scopes for 3LO authentication. The service will always request scope offline_access.</p>
   * @public
   */
  scopes?: string[] | undefined;
}

/**
 * <p>OAuth client credentials configuration for MCP server.</p>
 * @public
 */
export interface MCPServerOAuthClientCredentialsConfig {
  /**
   * <p>User friendly OAuth client name specified by end user.</p>
   * @public
   */
  clientName?: string | undefined;

  /**
   * <p>OAuth client ID for authenticating with the service.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>OAuth token exchange parameters for authenticating with the service.</p>
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * <p>OAuth client secret for authenticating with the service.</p>
   * @public
   */
  clientSecret: string | undefined;

  /**
   * <p>OAuth token exchange URL.</p>
   * @public
   */
  exchangeUrl: string | undefined;

  /**
   * <p>OAuth scopes for 3LO authentication. The service will always request scope offline_access.</p>
   * @public
   */
  scopes?: string[] | undefined;
}

/**
 * <p>Authorization configuration options for MCP server, supporting OAuth, API key, bearer token, and authorization discovery methods.</p>
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
   * <p>MCP server configuration with OAuth client credentials.</p>
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
   * <p>MCP server configuration with OAuth 3LO.</p>
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
   * <p>MCP server configuration with API key authentication.</p>
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
   * <p>MCP server configuration with Bearer token (RFC 6750).</p>
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
   * <p>MCP server authorization discovery configuration.</p>
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
 * <p>Complete service details for MCP server integration.</p>
 * @public
 */
export interface MCPServerDetails {
  /**
   * <p>MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>MCP server authorization configuration.</p>
   * @public
   */
  authorizationConfig: MCPServerAuthorizationConfig | undefined;
}

/**
 * <p>Complete service details for Grafana MCP server integration.</p>
 * @public
 */
export interface GrafanaServiceDetails {
  /**
   * <p>MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Grafana MCP server authorization configuration (experimental).</p>
   * @public
   */
  authorizationConfig: MCPServerAuthorizationConfig | undefined;
}

/**
 * <p>API key authentication configuration for New Relic service.</p>
 * @public
 */
export interface NewRelicApiKeyConfig {
  /**
   * <p>New Relic User API Key</p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p>New Relic Account ID</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>New Relic region (US or EU)</p>
   * @public
   */
  region: NewRelicRegion | undefined;

  /**
   * <p>List of monitored APM application IDs in New Relic</p>
   * @public
   */
  applicationIds?: string[] | undefined;

  /**
   * <p>List of globally unique IDs for New Relic resources (apps, hosts, services)</p>
   * @public
   */
  entityGuids?: string[] | undefined;

  /**
   * <p>List of alert policy IDs grouping related conditions</p>
   * @public
   */
  alertPolicyIds?: string[] | undefined;
}

/**
 * <p>Authorization configuration options for New Relic service.</p>
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
   * <p>New Relic API Key authentication (apiKey, accountId, region).</p>
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
 * <p>Complete service details for New Relic integration.</p>
 * @public
 */
export interface NewRelicServiceDetails {
  /**
   * <p>New Relic MCP server authorization configuration.</p>
   * @public
   */
  authorizationConfig: NewRelicServiceAuthorizationConfig | undefined;
}

/**
 * <p>Authorization configuration for SigV4-authenticated MCP server.</p>
 * @public
 */
export interface MCPServerSigV4AuthorizationConfig {
  /**
   * <p>AWS region for SigV4 signing. Use '*' for SigV4a multi-region signing.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>AWS service name for SigV4 signing.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>IAM role ARN to assume for SigV4 signing.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Custom headers for the SigV4 MCP server.</p>
   * @public
   */
  customHeaders?: Record<string, string> | undefined;
}

/**
 * <p>Complete service details for SigV4-authenticated MCP server integration.</p>
 * @public
 */
export interface MCPServerSigV4ServiceDetails {
  /**
   * <p>MCP server name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>MCP server endpoint URL.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>Optional description for the MCP server.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>MCP Server SigV4 authorization configuration.</p>
   * @public
   */
  authorizationConfig: MCPServerSigV4AuthorizationConfig | undefined;
}

/**
 * <p>OAuth client credentials configuration for PagerDuty.</p>
 * @public
 */
export interface PagerDutyOAuthClientCredentialsConfig {
  /**
   * <p>User friendly OAuth client name specified by end user.</p>
   * @public
   */
  clientName?: string | undefined;

  /**
   * <p>OAuth client ID for authenticating with the service.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>OAuth token exchange parameters for authenticating with the service.</p>
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * <p>OAuth client secret for authenticating with the service.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Authorization configuration options for PagerDuty service.</p>
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
   * <p>OAuth client credentials configuration.</p>
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
 * <p>Complete service details for PagerDuty integration</p>
 * @public
 */
export interface PagerDutyDetails {
  /**
   * <p>PagerDuty scopes.</p>
   * @public
   */
  scopes: string[] | undefined;

  /**
   * <p>PagerDuty authorization configuration</p>
   * @public
   */
  authorizationConfig: PagerDutyAuthorizationConfig | undefined;
}

/**
 * <p>OAuth client credentials configuration for ServiceNow.</p>
 * @public
 */
export interface ServiceNowOAuthClientCredentialsConfig {
  /**
   * <p>User friendly OAuth client name specified by end user.</p>
   * @public
   */
  clientName?: string | undefined;

  /**
   * <p>OAuth client ID for authenticating with the service.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>OAuth token exchange parameters for authenticating with the service.</p>
   * @public
   */
  exchangeParameters?: Record<string, string> | undefined;

  /**
   * <p>OAuth client secret for authenticating with the service.</p>
   * @public
   */
  clientSecret: string | undefined;
}

/**
 * <p>Authorization configuration options for ServiceNow service.</p>
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
   * <p>OAuth client credentials configuration.</p>
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
 * <p>Complete service details for ServiceNow integration.</p>
 * @public
 */
export interface ServiceNowServiceDetails {
  /**
   * <p>ServiceNow instance URL.</p>
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * <p>ServiceNow OAuth client credentials configuration. Use this when registering with OAuth client credentials flow.</p>
   * @public
   */
  authorizationConfig?: ServiceNowServiceAuthorizationConfig | undefined;
}

/**
 * <p>Union of service-specific configuration details for service registration.</p>
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
  | ServiceDetails.Mcpserversigv4Member
  | ServiceDetails.McpserversplunkMember
  | ServiceDetails.PagerdutyMember
  | ServiceDetails.ServicenowMember
  | ServiceDetails.$UnknownMember;

/**
 * @public
 */
export namespace ServiceDetails {
  /**
   * <p>Dynatrace-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>ServiceNow-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Datadog MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>GitLab-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Splunk MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>New Relic-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Event Channel specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Datadog MCP server-specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>PagerDuty specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>Azure integration with AWS Outbound Identity Federation specific service details.</p>
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
    mcpserversigv4?: never;
    $unknown?: never;
  }

  /**
   * <p>SigV4-authenticated MCP server-specific service details.</p>
   * @public
   */
  export interface Mcpserversigv4Member {
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
    mcpserversigv4: MCPServerSigV4ServiceDetails;
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
    mcpserversigv4?: never;
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
    mcpserversigv4: (value: MCPServerSigV4ServiceDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Input for registering a new service with the platform.</p>
 * @public
 */
export interface RegisterServiceInput {
  /**
   * <p>Services that can be registered via the post-registration API (excludes OAuth 3LO services).</p>
   * @public
   */
  service: PostRegisterServiceSupportedService | undefined;

  /**
   * <p>Service-specific authorization configuration parameters</p>
   * @public
   */
  serviceDetails: ServiceDetails | undefined;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The name of the private connection to use for VPC connectivity.</p>
   * @public
   */
  privateConnectionName?: string | undefined;

  /**
   * <p>The display name for the service registration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tags to add to the Service at registration time.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Output containing the service ID and any additional steps required for registration.</p>
 * @public
 */
export interface RegisterServiceOutput {
  /**
   * <p>Service ID - present when registration is complete, absent when additional steps are required</p>
   * @public
   */
  serviceId?: string | undefined;

  /**
   * <p>Indicates if additional steps are required to complete service registration (e.g., 3-legged OAuth)</p>
   * @public
   */
  additionalStep?: AdditionalServiceRegistrationStep | undefined;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) customer managed key that's used to encrypt resources.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Tags associated with the registered Service.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags to add to the resource.</p>
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
   * <p>The ARN of the resource to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag keys to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Request structure for updating a task</p>
 * @public
 */
export interface UpdateBacklogTaskRequest {
  /**
   * <p>The unique identifier for the agent space containing the task</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the task to update</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Updated task status</p>
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * <p>Client-provided token for idempotent operations</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Response structure containing the updated task</p>
 * @public
 */
export interface UpdateBacklogTaskResponse {
  /**
   * <p>The updated task object</p>
   * @public
   */
  task: Task | undefined;
}

/**
 * <p>Schedule configuration for updating goal evaluations</p>
 * @public
 */
export interface GoalScheduleInput {
  /**
   * <p>Whether the schedule is enabled or disabled</p>
   * @public
   */
  state: SchedulerState | undefined;
}

/**
 * <p>Request structure for updating a goal</p>
 * @public
 */
export interface UpdateGoalRequest {
  /**
   * <p>The unique identifier for the agent space containing the goal</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the goal to update</p>
   * @public
   */
  goalId: string | undefined;

  /**
   * <p>Update goal schedule state</p>
   * @public
   */
  evaluationSchedule?: GoalScheduleInput | undefined;

  /**
   * <p>Client-provided token for idempotent operations</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Response structure containing the updated goal</p>
 * @public
 */
export interface UpdateGoalResponse {
  /**
   * <p>The updated goal object</p>
   * @public
   */
  goal: Goal | undefined;
}

/**
 * <p>Request structure for updating an existing recommendation</p>
 * @public
 */
export interface UpdateRecommendationRequest {
  /**
   * <p>The unique identifier for the agent space containing the recommendation</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for the recommendation to update</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>Current status of the recommendation</p>
   * @public
   */
  status?: RecommendationStatus | undefined;

  /**
   * <p>Additional context for recommendation</p>
   * @public
   */
  additionalContext?: string | undefined;

  /**
   * <p>A unique token that ensures idempotency of the request</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Response structure containing the updated recommendation</p>
 * @public
 */
export interface UpdateRecommendationResponse {
  /**
   * <p>The updated recommendation</p>
   * @public
   */
  recommendation: Recommendation | undefined;
}
