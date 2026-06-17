import {
  AccessDeniedException,
  AccessDeniedException$,
  AdditionalServiceDetails$,
  AdditionalServiceRegistrationStep$,
  AgentSpace$,
  Asset$,
  AssetContent$,
  AssetFile$,
  AssetFileBody$,
  AssetFileContent$,
  AssetFileSummary$,
  AssetSourceUrlContent$,
  AssetTypeSummary$,
  AssetVersionMetadata$,
  AssetZipContent$,
  AssistantMessageBlock$,
  AssociateService$,
  AssociateServiceCommand,
  AssociateServiceInput$,
  AssociateServiceOutput$,
  Association$,
  AuthFlow,
  AWSConfiguration$,
  AzureConfiguration$,
  AzureDevOpsConfiguration$,
  CapabilityConfiguration$,
  CapabilityType,
  ChatExecution$,
  ConflictException,
  ConflictException$,
  ContentSizeExceededException,
  ContentSizeExceededException$,
  CreateAgentSpace$,
  CreateAgentSpaceCommand,
  CreateAgentSpaceInput$,
  CreateAgentSpaceOutput$,
  CreateAsset$,
  CreateAssetCommand,
  CreateAssetFile$,
  CreateAssetFileCommand,
  CreateAssetFileRequest$,
  CreateAssetFileResponse$,
  CreateAssetRequest$,
  CreateAssetResponse$,
  CreateBacklogTask$,
  CreateBacklogTaskCommand,
  CreateBacklogTaskRequest$,
  CreateBacklogTaskResponse$,
  CreateChat$,
  CreateChatCommand,
  CreateChatRequest$,
  CreateChatResponse$,
  CreatePrivateConnection$,
  CreatePrivateConnectionCommand,
  CreatePrivateConnectionInput$,
  CreatePrivateConnectionOutput$,
  CreateTrigger$,
  CreateTriggerCommand,
  CreateTriggerRequest$,
  CreateTriggerResponse$,
  DatadogAuthorizationConfig$,
  DatadogServiceDetails$,
  DeleteAgentSpace$,
  DeleteAgentSpaceCommand,
  DeleteAgentSpaceInput$,
  DeleteAgentSpaceOutput$,
  DeleteAsset$,
  DeleteAssetCommand,
  DeleteAssetFile$,
  DeleteAssetFileCommand,
  DeleteAssetFileRequest$,
  DeleteAssetFileResponse$,
  DeleteAssetRequest$,
  DeleteAssetResponse$,
  DeletePrivateConnection$,
  DeletePrivateConnectionCommand,
  DeletePrivateConnectionInput$,
  DeletePrivateConnectionOutput$,
  DeleteTrigger$,
  DeleteTriggerCommand,
  DeleteTriggerRequest$,
  DeleteTriggerResponse$,
  DeregisterService$,
  DeregisterServiceCommand,
  DeregisterServiceInput$,
  DeregisterServiceOutput$,
  DescribePrivateConnection$,
  DescribePrivateConnectionCommand,
  DescribePrivateConnectionInput$,
  DescribePrivateConnectionOutput$,
  DevOpsAgent,
  DevOpsAgentClient,
  DevOpsAgentServiceException,
  DisableOperatorApp$,
  DisableOperatorAppCommand,
  DisableOperatorAppInput$,
  DisassociateService$,
  DisassociateServiceCommand,
  DisassociateServiceInput$,
  DisassociateServiceOutput$,
  DynatraceConfiguration$,
  DynatraceOAuthClientCredentialsConfig$,
  DynatraceServiceAuthorizationConfig$,
  DynatraceServiceDetails$,
  EnableOperatorApp$,
  EnableOperatorAppCommand,
  EnableOperatorAppInput$,
  EnableOperatorAppOutput$,
  EventChannelConfiguration$,
  EventChannelDetails$,
  EventChannelType,
  Execution$,
  ExecutionStatus,
  GenericWebhook$,
  GetAccountUsage$,
  GetAccountUsageCommand,
  GetAccountUsageInput$,
  GetAccountUsageOutput$,
  GetAgentSpace$,
  GetAgentSpaceCommand,
  GetAgentSpaceInput$,
  GetAgentSpaceOutput$,
  GetAsset$,
  GetAssetCommand,
  GetAssetContent$,
  GetAssetContentCommand,
  GetAssetContentRequest$,
  GetAssetContentResponse$,
  GetAssetFile$,
  GetAssetFileCommand,
  GetAssetFileRequest$,
  GetAssetFileResponse$,
  GetAssetRequest$,
  GetAssetResponse$,
  GetAssociation$,
  GetAssociationCommand,
  GetAssociationInput$,
  GetAssociationOutput$,
  GetBacklogTask$,
  GetBacklogTaskCommand,
  GetBacklogTaskRequest$,
  GetBacklogTaskResponse$,
  GetOperatorApp$,
  GetOperatorAppCommand,
  GetOperatorAppInput$,
  GetOperatorAppOutput$,
  GetRecommendation$,
  GetRecommendationCommand,
  GetRecommendationRequest$,
  GetRecommendationResponse$,
  GetService$,
  GetServiceCommand,
  GetServiceInput$,
  GetServiceOutput$,
  GetTrigger$,
  GetTriggerCommand,
  GetTriggerRequest$,
  GetTriggerResponse$,
  GitHubConfiguration$,
  GithubRepoOwnerType,
  GitLabConfiguration$,
  GitLabDetails$,
  GitLabTokenType,
  Goal$,
  GoalContent$,
  GoalSchedule$,
  GoalScheduleInput$,
  GoalStatus,
  GoalType,
  GrafanaServiceDetails$,
  IamAuthConfiguration$,
  IdcAuthConfiguration$,
  IdentityCenterServiceException,
  IdentityCenterServiceException$,
  IdpAuthConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterException,
  InvalidParameterException$,
  IpAddressType,
  JournalRecord$,
  ListAgentSpaces$,
  ListAgentSpacesCommand,
  ListAgentSpacesInput$,
  ListAgentSpacesOutput$,
  ListAssetFiles$,
  ListAssetFilesCommand,
  ListAssetFilesRequest$,
  ListAssetFilesResponse$,
  ListAssets$,
  ListAssetsCommand,
  ListAssetsRequest$,
  ListAssetsResponse$,
  ListAssetTypes$,
  ListAssetTypesCommand,
  ListAssetTypesRequest$,
  ListAssetTypesResponse$,
  ListAssetVersions$,
  ListAssetVersionsCommand,
  ListAssetVersionsRequest$,
  ListAssetVersionsResponse$,
  ListAssociations$,
  ListAssociationsCommand,
  ListAssociationsInput$,
  ListAssociationsOutput$,
  ListBacklogTasks$,
  ListBacklogTasksCommand,
  ListBacklogTasksRequest$,
  ListBacklogTasksResponse$,
  ListChats$,
  ListChatsCommand,
  ListChatsRequest$,
  ListChatsResponse$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsRequest$,
  ListExecutionsResponse$,
  ListGoals$,
  ListGoalsCommand,
  ListGoalsRequest$,
  ListGoalsResponse$,
  ListJournalRecords$,
  ListJournalRecordsCommand,
  ListJournalRecordsRequest$,
  ListJournalRecordsResponse$,
  ListPendingMessages$,
  ListPendingMessagesCommand,
  ListPendingMessagesRequest$,
  ListPendingMessagesResponse$,
  ListPrivateConnections$,
  ListPrivateConnectionsCommand,
  ListPrivateConnectionsInput$,
  ListPrivateConnectionsOutput$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesInput$,
  ListServicesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTriggers$,
  ListTriggersCommand,
  ListTriggersRequest$,
  ListTriggersResponse$,
  ListWebhooks$,
  ListWebhooksCommand,
  ListWebhooksInput$,
  ListWebhooksOutput$,
  MCPServerAPIKeyConfig$,
  MCPServerAuthorizationConfig$,
  MCPServerAuthorizationDiscoveryConfig$,
  MCPServerAuthorizationMethod,
  MCPServerBearerTokenConfig$,
  MCPServerConfiguration$,
  MCPServerDatadogConfiguration$,
  MCPServerDetails$,
  MCPServerGrafanaConfiguration$,
  MCPServerNewRelicConfiguration$,
  MCPServerOAuth3LOConfig$,
  MCPServerOAuthClientCredentialsConfig$,
  MCPServerSigV4AuthorizationConfig$,
  MCPServerSigV4Configuration$,
  MCPServerSigV4ServiceDetails$,
  MCPServerSplunkConfiguration$,
  Message$,
  MonitorAccountType,
  NewRelicApiKeyConfig$,
  NewRelicRegion,
  NewRelicServiceAuthorizationConfig$,
  NewRelicServiceDetails$,
  OAuthAdditionalStepDetails$,
  OrderType,
  PagerDutyAuthorizationConfig$,
  PagerDutyConfiguration$,
  PagerDutyDetails$,
  PagerDutyOAuthClientCredentialsConfig$,
  paginateListAgentSpaces,
  paginateListAssetFiles,
  paginateListAssets,
  paginateListAssetTypes,
  paginateListAssetVersions,
  paginateListAssociations,
  paginateListBacklogTasks,
  paginateListExecutions,
  paginateListGoals,
  paginateListJournalRecords,
  paginateListServices,
  paginateListTriggers,
  PendingMessage$,
  PostRegisterServiceSupportedService,
  Priority,
  PrivateConnectionMode$,
  PrivateConnectionStatus,
  PrivateConnectionSummary$,
  PrivateConnectionType,
  Recommendation$,
  RecommendationContent$,
  RecommendationPriority,
  RecommendationStatus,
  ReferenceInput$,
  ReferenceOutput$,
  RegisteredAzureDevOpsServiceDetails$,
  RegisteredAzureIdentityDetails$,
  RegisteredGithubServiceDetails$,
  RegisteredGitLabServiceDetails$,
  RegisteredGrafanaServerDetails$,
  RegisteredMCPServerDetails$,
  RegisteredMCPServerSigV4Details$,
  RegisteredNewRelicDetails$,
  RegisteredPagerDutyDetails$,
  RegisteredRemoteAgentDetails$,
  RegisteredRemoteAgentSigV4Details$,
  RegisteredService$,
  RegisteredServiceNowDetails$,
  RegisteredSlackServiceDetails$,
  RegisterService$,
  RegisterServiceCommand,
  RegisterServiceInput$,
  RegisterServiceOutput$,
  RemoteAgentAPIKeyConfig$,
  RemoteAgentAuthorizationConfig$,
  RemoteAgentAuthorizationMethod,
  RemoteAgentBearerTokenConfig$,
  RemoteAgentConfiguration$,
  RemoteAgentOAuthClientCredentialsConfig$,
  RemoteAgentServiceDetails$,
  RemoteAgentSigV4AuthorizationConfig$,
  RemoteAgentSigV4Configuration$,
  RemoteAgentSigV4ServiceDetails$,
  ResourceConfigDnsResolution,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScheduleCondition$,
  SchedulerState,
  SelfManagedInput$,
  SendMessage$,
  SendMessageCommand,
  SendMessageContentBlockDelta$,
  SendMessageContentBlockDeltaEvent$,
  SendMessageContentBlockStartEvent$,
  SendMessageContentBlockStopEvent$,
  SendMessageContext$,
  SendMessageEvents$,
  SendMessageHeartbeatEvent$,
  SendMessageJsonDelta$,
  SendMessageRequest$,
  SendMessageResponse$,
  SendMessageResponseCompletedEvent$,
  SendMessageResponseCreatedEvent$,
  SendMessageResponseFailedEvent$,
  SendMessageResponseInProgressEvent$,
  SendMessageSummaryEvent$,
  SendMessageTextDelta$,
  SendMessageUsageInfo$,
  Service,
  ServiceConfiguration$,
  ServiceDetails$,
  ServiceManagedInput$,
  ServiceNowConfiguration$,
  ServiceNowOAuthClientCredentialsConfig$,
  ServiceNowServiceAuthorizationConfig$,
  ServiceNowServiceDetails$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SlackChannel$,
  SlackConfiguration$,
  SlackTransmissionTarget$,
  SourceAccountType,
  SourceAwsConfiguration$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Task$,
  TaskFilter$,
  TaskSortField,
  TaskSortOrder,
  TaskStatus,
  TaskType,
  ThrottlingException,
  ThrottlingException$,
  Trigger$,
  TriggerCondition$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAgentSpace$,
  UpdateAgentSpaceCommand,
  UpdateAgentSpaceInput$,
  UpdateAgentSpaceOutput$,
  UpdateAsset$,
  UpdateAssetCommand,
  UpdateAssetFile$,
  UpdateAssetFileCommand,
  UpdateAssetFileRequest$,
  UpdateAssetFileResponse$,
  UpdateAssetRequest$,
  UpdateAssetResponse$,
  UpdateAssociation$,
  UpdateAssociationCommand,
  UpdateAssociationInput$,
  UpdateAssociationOutput$,
  UpdateBacklogTask$,
  UpdateBacklogTaskCommand,
  UpdateBacklogTaskRequest$,
  UpdateBacklogTaskResponse$,
  UpdateGoal$,
  UpdateGoalCommand,
  UpdateGoalRequest$,
  UpdateGoalResponse$,
  UpdateOperatorAppIdpConfig$,
  UpdateOperatorAppIdpConfigCommand,
  UpdateOperatorAppIdpConfigInput$,
  UpdateOperatorAppIdpConfigOutput$,
  UpdatePrivateConnectionCertificate$,
  UpdatePrivateConnectionCertificateCommand,
  UpdatePrivateConnectionCertificateInput$,
  UpdatePrivateConnectionCertificateOutput$,
  UpdateRecommendation$,
  UpdateRecommendationCommand,
  UpdateRecommendationRequest$,
  UpdateRecommendationResponse$,
  UpdateTrigger$,
  UpdateTriggerCommand,
  UpdateTriggerRequest$,
  UpdateTriggerResponse$,
  UsageMetric$,
  UserMessageBlock$,
  UserReference$,
  UserType,
  ValidateAwsAssociations$,
  ValidateAwsAssociationsCommand,
  ValidateAwsAssociationsInput$,
  ValidateAwsAssociationsOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationStatus,
  Webhook$,
  WebhookType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DevOpsAgentClient === "function");
assert(typeof DevOpsAgent === "function");
// commands
assert(typeof AssociateServiceCommand === "function");
assert(typeof AssociateService$ === "object");
assert(typeof CreateAgentSpaceCommand === "function");
assert(typeof CreateAgentSpace$ === "object");
assert(typeof CreateAssetCommand === "function");
assert(typeof CreateAsset$ === "object");
assert(typeof CreateAssetFileCommand === "function");
assert(typeof CreateAssetFile$ === "object");
assert(typeof CreateBacklogTaskCommand === "function");
assert(typeof CreateBacklogTask$ === "object");
assert(typeof CreateChatCommand === "function");
assert(typeof CreateChat$ === "object");
assert(typeof CreatePrivateConnectionCommand === "function");
assert(typeof CreatePrivateConnection$ === "object");
assert(typeof CreateTriggerCommand === "function");
assert(typeof CreateTrigger$ === "object");
assert(typeof DeleteAgentSpaceCommand === "function");
assert(typeof DeleteAgentSpace$ === "object");
assert(typeof DeleteAssetCommand === "function");
assert(typeof DeleteAsset$ === "object");
assert(typeof DeleteAssetFileCommand === "function");
assert(typeof DeleteAssetFile$ === "object");
assert(typeof DeletePrivateConnectionCommand === "function");
assert(typeof DeletePrivateConnection$ === "object");
assert(typeof DeleteTriggerCommand === "function");
assert(typeof DeleteTrigger$ === "object");
assert(typeof DeregisterServiceCommand === "function");
assert(typeof DeregisterService$ === "object");
assert(typeof DescribePrivateConnectionCommand === "function");
assert(typeof DescribePrivateConnection$ === "object");
assert(typeof DisableOperatorAppCommand === "function");
assert(typeof DisableOperatorApp$ === "object");
assert(typeof DisassociateServiceCommand === "function");
assert(typeof DisassociateService$ === "object");
assert(typeof EnableOperatorAppCommand === "function");
assert(typeof EnableOperatorApp$ === "object");
assert(typeof GetAccountUsageCommand === "function");
assert(typeof GetAccountUsage$ === "object");
assert(typeof GetAgentSpaceCommand === "function");
assert(typeof GetAgentSpace$ === "object");
assert(typeof GetAssetCommand === "function");
assert(typeof GetAsset$ === "object");
assert(typeof GetAssetContentCommand === "function");
assert(typeof GetAssetContent$ === "object");
assert(typeof GetAssetFileCommand === "function");
assert(typeof GetAssetFile$ === "object");
assert(typeof GetAssociationCommand === "function");
assert(typeof GetAssociation$ === "object");
assert(typeof GetBacklogTaskCommand === "function");
assert(typeof GetBacklogTask$ === "object");
assert(typeof GetOperatorAppCommand === "function");
assert(typeof GetOperatorApp$ === "object");
assert(typeof GetRecommendationCommand === "function");
assert(typeof GetRecommendation$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetTriggerCommand === "function");
assert(typeof GetTrigger$ === "object");
assert(typeof ListAgentSpacesCommand === "function");
assert(typeof ListAgentSpaces$ === "object");
assert(typeof ListAssetFilesCommand === "function");
assert(typeof ListAssetFiles$ === "object");
assert(typeof ListAssetsCommand === "function");
assert(typeof ListAssets$ === "object");
assert(typeof ListAssetTypesCommand === "function");
assert(typeof ListAssetTypes$ === "object");
assert(typeof ListAssetVersionsCommand === "function");
assert(typeof ListAssetVersions$ === "object");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListAssociations$ === "object");
assert(typeof ListBacklogTasksCommand === "function");
assert(typeof ListBacklogTasks$ === "object");
assert(typeof ListChatsCommand === "function");
assert(typeof ListChats$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListGoalsCommand === "function");
assert(typeof ListGoals$ === "object");
assert(typeof ListJournalRecordsCommand === "function");
assert(typeof ListJournalRecords$ === "object");
assert(typeof ListPendingMessagesCommand === "function");
assert(typeof ListPendingMessages$ === "object");
assert(typeof ListPrivateConnectionsCommand === "function");
assert(typeof ListPrivateConnections$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTriggersCommand === "function");
assert(typeof ListTriggers$ === "object");
assert(typeof ListWebhooksCommand === "function");
assert(typeof ListWebhooks$ === "object");
assert(typeof RegisterServiceCommand === "function");
assert(typeof RegisterService$ === "object");
assert(typeof SendMessageCommand === "function");
assert(typeof SendMessage$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentSpaceCommand === "function");
assert(typeof UpdateAgentSpace$ === "object");
assert(typeof UpdateAssetCommand === "function");
assert(typeof UpdateAsset$ === "object");
assert(typeof UpdateAssetFileCommand === "function");
assert(typeof UpdateAssetFile$ === "object");
assert(typeof UpdateAssociationCommand === "function");
assert(typeof UpdateAssociation$ === "object");
assert(typeof UpdateBacklogTaskCommand === "function");
assert(typeof UpdateBacklogTask$ === "object");
assert(typeof UpdateGoalCommand === "function");
assert(typeof UpdateGoal$ === "object");
assert(typeof UpdateOperatorAppIdpConfigCommand === "function");
assert(typeof UpdateOperatorAppIdpConfig$ === "object");
assert(typeof UpdatePrivateConnectionCertificateCommand === "function");
assert(typeof UpdatePrivateConnectionCertificate$ === "object");
assert(typeof UpdateRecommendationCommand === "function");
assert(typeof UpdateRecommendation$ === "object");
assert(typeof UpdateTriggerCommand === "function");
assert(typeof UpdateTrigger$ === "object");
assert(typeof ValidateAwsAssociationsCommand === "function");
assert(typeof ValidateAwsAssociations$ === "object");
// structural schemas
assert(typeof AdditionalServiceDetails$ === "object");
assert(typeof AdditionalServiceRegistrationStep$ === "object");
assert(typeof AgentSpace$ === "object");
assert(typeof Asset$ === "object");
assert(typeof AssetContent$ === "object");
assert(typeof AssetFile$ === "object");
assert(typeof AssetFileBody$ === "object");
assert(typeof AssetFileContent$ === "object");
assert(typeof AssetFileSummary$ === "object");
assert(typeof AssetSourceUrlContent$ === "object");
assert(typeof AssetTypeSummary$ === "object");
assert(typeof AssetVersionMetadata$ === "object");
assert(typeof AssetZipContent$ === "object");
assert(typeof AssistantMessageBlock$ === "object");
assert(typeof AssociateServiceInput$ === "object");
assert(typeof AssociateServiceOutput$ === "object");
assert(typeof Association$ === "object");
assert(typeof AWSConfiguration$ === "object");
assert(typeof AzureConfiguration$ === "object");
assert(typeof AzureDevOpsConfiguration$ === "object");
assert(typeof CapabilityConfiguration$ === "object");
assert(typeof ChatExecution$ === "object");
assert(typeof CreateAgentSpaceInput$ === "object");
assert(typeof CreateAgentSpaceOutput$ === "object");
assert(typeof CreateAssetFileRequest$ === "object");
assert(typeof CreateAssetFileResponse$ === "object");
assert(typeof CreateAssetRequest$ === "object");
assert(typeof CreateAssetResponse$ === "object");
assert(typeof CreateBacklogTaskRequest$ === "object");
assert(typeof CreateBacklogTaskResponse$ === "object");
assert(typeof CreateChatRequest$ === "object");
assert(typeof CreateChatResponse$ === "object");
assert(typeof CreatePrivateConnectionInput$ === "object");
assert(typeof CreatePrivateConnectionOutput$ === "object");
assert(typeof CreateTriggerRequest$ === "object");
assert(typeof CreateTriggerResponse$ === "object");
assert(typeof DatadogAuthorizationConfig$ === "object");
assert(typeof DatadogServiceDetails$ === "object");
assert(typeof DeleteAgentSpaceInput$ === "object");
assert(typeof DeleteAgentSpaceOutput$ === "object");
assert(typeof DeleteAssetFileRequest$ === "object");
assert(typeof DeleteAssetFileResponse$ === "object");
assert(typeof DeleteAssetRequest$ === "object");
assert(typeof DeleteAssetResponse$ === "object");
assert(typeof DeletePrivateConnectionInput$ === "object");
assert(typeof DeletePrivateConnectionOutput$ === "object");
assert(typeof DeleteTriggerRequest$ === "object");
assert(typeof DeleteTriggerResponse$ === "object");
assert(typeof DeregisterServiceInput$ === "object");
assert(typeof DeregisterServiceOutput$ === "object");
assert(typeof DescribePrivateConnectionInput$ === "object");
assert(typeof DescribePrivateConnectionOutput$ === "object");
assert(typeof DisableOperatorAppInput$ === "object");
assert(typeof DisassociateServiceInput$ === "object");
assert(typeof DisassociateServiceOutput$ === "object");
assert(typeof DynatraceConfiguration$ === "object");
assert(typeof DynatraceOAuthClientCredentialsConfig$ === "object");
assert(typeof DynatraceServiceAuthorizationConfig$ === "object");
assert(typeof DynatraceServiceDetails$ === "object");
assert(typeof EnableOperatorAppInput$ === "object");
assert(typeof EnableOperatorAppOutput$ === "object");
assert(typeof EventChannelConfiguration$ === "object");
assert(typeof EventChannelDetails$ === "object");
assert(typeof Execution$ === "object");
assert(typeof GenericWebhook$ === "object");
assert(typeof GetAccountUsageInput$ === "object");
assert(typeof GetAccountUsageOutput$ === "object");
assert(typeof GetAgentSpaceInput$ === "object");
assert(typeof GetAgentSpaceOutput$ === "object");
assert(typeof GetAssetContentRequest$ === "object");
assert(typeof GetAssetContentResponse$ === "object");
assert(typeof GetAssetFileRequest$ === "object");
assert(typeof GetAssetFileResponse$ === "object");
assert(typeof GetAssetRequest$ === "object");
assert(typeof GetAssetResponse$ === "object");
assert(typeof GetAssociationInput$ === "object");
assert(typeof GetAssociationOutput$ === "object");
assert(typeof GetBacklogTaskRequest$ === "object");
assert(typeof GetBacklogTaskResponse$ === "object");
assert(typeof GetOperatorAppInput$ === "object");
assert(typeof GetOperatorAppOutput$ === "object");
assert(typeof GetRecommendationRequest$ === "object");
assert(typeof GetRecommendationResponse$ === "object");
assert(typeof GetServiceInput$ === "object");
assert(typeof GetServiceOutput$ === "object");
assert(typeof GetTriggerRequest$ === "object");
assert(typeof GetTriggerResponse$ === "object");
assert(typeof GitHubConfiguration$ === "object");
assert(typeof GitLabConfiguration$ === "object");
assert(typeof GitLabDetails$ === "object");
assert(typeof Goal$ === "object");
assert(typeof GoalContent$ === "object");
assert(typeof GoalSchedule$ === "object");
assert(typeof GoalScheduleInput$ === "object");
assert(typeof GrafanaServiceDetails$ === "object");
assert(typeof IamAuthConfiguration$ === "object");
assert(typeof IdcAuthConfiguration$ === "object");
assert(typeof IdpAuthConfiguration$ === "object");
assert(typeof JournalRecord$ === "object");
assert(typeof ListAgentSpacesInput$ === "object");
assert(typeof ListAgentSpacesOutput$ === "object");
assert(typeof ListAssetFilesRequest$ === "object");
assert(typeof ListAssetFilesResponse$ === "object");
assert(typeof ListAssetsRequest$ === "object");
assert(typeof ListAssetsResponse$ === "object");
assert(typeof ListAssetTypesRequest$ === "object");
assert(typeof ListAssetTypesResponse$ === "object");
assert(typeof ListAssetVersionsRequest$ === "object");
assert(typeof ListAssetVersionsResponse$ === "object");
assert(typeof ListAssociationsInput$ === "object");
assert(typeof ListAssociationsOutput$ === "object");
assert(typeof ListBacklogTasksRequest$ === "object");
assert(typeof ListBacklogTasksResponse$ === "object");
assert(typeof ListChatsRequest$ === "object");
assert(typeof ListChatsResponse$ === "object");
assert(typeof ListExecutionsRequest$ === "object");
assert(typeof ListExecutionsResponse$ === "object");
assert(typeof ListGoalsRequest$ === "object");
assert(typeof ListGoalsResponse$ === "object");
assert(typeof ListJournalRecordsRequest$ === "object");
assert(typeof ListJournalRecordsResponse$ === "object");
assert(typeof ListPendingMessagesRequest$ === "object");
assert(typeof ListPendingMessagesResponse$ === "object");
assert(typeof ListPrivateConnectionsInput$ === "object");
assert(typeof ListPrivateConnectionsOutput$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof ListServicesInput$ === "object");
assert(typeof ListServicesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTriggersRequest$ === "object");
assert(typeof ListTriggersResponse$ === "object");
assert(typeof ListWebhooksInput$ === "object");
assert(typeof ListWebhooksOutput$ === "object");
assert(typeof MCPServerAPIKeyConfig$ === "object");
assert(typeof MCPServerAuthorizationConfig$ === "object");
assert(typeof MCPServerAuthorizationDiscoveryConfig$ === "object");
assert(typeof MCPServerBearerTokenConfig$ === "object");
assert(typeof MCPServerConfiguration$ === "object");
assert(typeof MCPServerDatadogConfiguration$ === "object");
assert(typeof MCPServerDetails$ === "object");
assert(typeof MCPServerGrafanaConfiguration$ === "object");
assert(typeof MCPServerNewRelicConfiguration$ === "object");
assert(typeof MCPServerOAuth3LOConfig$ === "object");
assert(typeof MCPServerOAuthClientCredentialsConfig$ === "object");
assert(typeof MCPServerSigV4AuthorizationConfig$ === "object");
assert(typeof MCPServerSigV4Configuration$ === "object");
assert(typeof MCPServerSigV4ServiceDetails$ === "object");
assert(typeof MCPServerSplunkConfiguration$ === "object");
assert(typeof Message$ === "object");
assert(typeof NewRelicApiKeyConfig$ === "object");
assert(typeof NewRelicServiceAuthorizationConfig$ === "object");
assert(typeof NewRelicServiceDetails$ === "object");
assert(typeof OAuthAdditionalStepDetails$ === "object");
assert(typeof PagerDutyAuthorizationConfig$ === "object");
assert(typeof PagerDutyConfiguration$ === "object");
assert(typeof PagerDutyDetails$ === "object");
assert(typeof PagerDutyOAuthClientCredentialsConfig$ === "object");
assert(typeof PendingMessage$ === "object");
assert(typeof PrivateConnectionMode$ === "object");
assert(typeof PrivateConnectionSummary$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendationContent$ === "object");
assert(typeof ReferenceInput$ === "object");
assert(typeof ReferenceOutput$ === "object");
assert(typeof RegisteredAzureDevOpsServiceDetails$ === "object");
assert(typeof RegisteredAzureIdentityDetails$ === "object");
assert(typeof RegisteredGithubServiceDetails$ === "object");
assert(typeof RegisteredGitLabServiceDetails$ === "object");
assert(typeof RegisteredGrafanaServerDetails$ === "object");
assert(typeof RegisteredMCPServerDetails$ === "object");
assert(typeof RegisteredMCPServerSigV4Details$ === "object");
assert(typeof RegisteredNewRelicDetails$ === "object");
assert(typeof RegisteredPagerDutyDetails$ === "object");
assert(typeof RegisteredRemoteAgentDetails$ === "object");
assert(typeof RegisteredRemoteAgentSigV4Details$ === "object");
assert(typeof RegisteredService$ === "object");
assert(typeof RegisteredServiceNowDetails$ === "object");
assert(typeof RegisteredSlackServiceDetails$ === "object");
assert(typeof RegisterServiceInput$ === "object");
assert(typeof RegisterServiceOutput$ === "object");
assert(typeof RemoteAgentAPIKeyConfig$ === "object");
assert(typeof RemoteAgentAuthorizationConfig$ === "object");
assert(typeof RemoteAgentBearerTokenConfig$ === "object");
assert(typeof RemoteAgentConfiguration$ === "object");
assert(typeof RemoteAgentOAuthClientCredentialsConfig$ === "object");
assert(typeof RemoteAgentServiceDetails$ === "object");
assert(typeof RemoteAgentSigV4AuthorizationConfig$ === "object");
assert(typeof RemoteAgentSigV4Configuration$ === "object");
assert(typeof RemoteAgentSigV4ServiceDetails$ === "object");
assert(typeof ScheduleCondition$ === "object");
assert(typeof SelfManagedInput$ === "object");
assert(typeof SendMessageContentBlockDelta$ === "object");
assert(typeof SendMessageContentBlockDeltaEvent$ === "object");
assert(typeof SendMessageContentBlockStartEvent$ === "object");
assert(typeof SendMessageContentBlockStopEvent$ === "object");
assert(typeof SendMessageContext$ === "object");
assert(typeof SendMessageEvents$ === "object");
assert(typeof SendMessageHeartbeatEvent$ === "object");
assert(typeof SendMessageJsonDelta$ === "object");
assert(typeof SendMessageRequest$ === "object");
assert(typeof SendMessageResponse$ === "object");
assert(typeof SendMessageResponseCompletedEvent$ === "object");
assert(typeof SendMessageResponseCreatedEvent$ === "object");
assert(typeof SendMessageResponseFailedEvent$ === "object");
assert(typeof SendMessageResponseInProgressEvent$ === "object");
assert(typeof SendMessageSummaryEvent$ === "object");
assert(typeof SendMessageTextDelta$ === "object");
assert(typeof SendMessageUsageInfo$ === "object");
assert(typeof ServiceConfiguration$ === "object");
assert(typeof ServiceDetails$ === "object");
assert(typeof ServiceManagedInput$ === "object");
assert(typeof ServiceNowConfiguration$ === "object");
assert(typeof ServiceNowOAuthClientCredentialsConfig$ === "object");
assert(typeof ServiceNowServiceAuthorizationConfig$ === "object");
assert(typeof ServiceNowServiceDetails$ === "object");
assert(typeof SlackChannel$ === "object");
assert(typeof SlackConfiguration$ === "object");
assert(typeof SlackTransmissionTarget$ === "object");
assert(typeof SourceAwsConfiguration$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Task$ === "object");
assert(typeof TaskFilter$ === "object");
assert(typeof Trigger$ === "object");
assert(typeof TriggerCondition$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAgentSpaceInput$ === "object");
assert(typeof UpdateAgentSpaceOutput$ === "object");
assert(typeof UpdateAssetFileRequest$ === "object");
assert(typeof UpdateAssetFileResponse$ === "object");
assert(typeof UpdateAssetRequest$ === "object");
assert(typeof UpdateAssetResponse$ === "object");
assert(typeof UpdateAssociationInput$ === "object");
assert(typeof UpdateAssociationOutput$ === "object");
assert(typeof UpdateBacklogTaskRequest$ === "object");
assert(typeof UpdateBacklogTaskResponse$ === "object");
assert(typeof UpdateGoalRequest$ === "object");
assert(typeof UpdateGoalResponse$ === "object");
assert(typeof UpdateOperatorAppIdpConfigInput$ === "object");
assert(typeof UpdateOperatorAppIdpConfigOutput$ === "object");
assert(typeof UpdatePrivateConnectionCertificateInput$ === "object");
assert(typeof UpdatePrivateConnectionCertificateOutput$ === "object");
assert(typeof UpdateRecommendationRequest$ === "object");
assert(typeof UpdateRecommendationResponse$ === "object");
assert(typeof UpdateTriggerRequest$ === "object");
assert(typeof UpdateTriggerResponse$ === "object");
assert(typeof UsageMetric$ === "object");
assert(typeof UserMessageBlock$ === "object");
assert(typeof UserReference$ === "object");
assert(typeof ValidateAwsAssociationsInput$ === "object");
assert(typeof ValidateAwsAssociationsOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Webhook$ === "object");
// enums
assert(typeof AuthFlow === "object");
assert(typeof CapabilityType === "object");
assert(typeof EventChannelType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof GithubRepoOwnerType === "object");
assert(typeof GitLabTokenType === "object");
assert(typeof GoalStatus === "object");
assert(typeof GoalType === "object");
assert(typeof IpAddressType === "object");
assert(typeof MCPServerAuthorizationMethod === "object");
assert(typeof MonitorAccountType === "object");
assert(typeof NewRelicRegion === "object");
assert(typeof OrderType === "object");
assert(typeof PostRegisterServiceSupportedService === "object");
assert(typeof Priority === "object");
assert(typeof PrivateConnectionStatus === "object");
assert(typeof PrivateConnectionType === "object");
assert(typeof RecommendationPriority === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RemoteAgentAuthorizationMethod === "object");
assert(typeof ResourceConfigDnsResolution === "object");
assert(typeof SchedulerState === "object");
assert(typeof Service === "object");
assert(typeof SourceAccountType === "object");
assert(typeof TaskSortField === "object");
assert(typeof TaskSortOrder === "object");
assert(typeof TaskStatus === "object");
assert(typeof TaskType === "object");
assert(typeof UserType === "object");
assert(typeof ValidationStatus === "object");
assert(typeof WebhookType === "object");
// errors
assert(AccessDeniedException.prototype instanceof DevOpsAgentServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ConflictException$ === "object");
assert(ContentSizeExceededException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ContentSizeExceededException$ === "object");
assert(IdentityCenterServiceException.prototype instanceof DevOpsAgentServiceException);
assert(typeof IdentityCenterServiceException$ === "object");
assert(InternalServerException.prototype instanceof DevOpsAgentServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterException.prototype instanceof DevOpsAgentServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DevOpsAgentServiceException);
assert(typeof ValidationException$ === "object");
assert(DevOpsAgentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgentSpaces === "function");
assert(typeof paginateListAssetFiles === "function");
assert(typeof paginateListAssetTypes === "function");
assert(typeof paginateListAssetVersions === "function");
assert(typeof paginateListAssets === "function");
assert(typeof paginateListAssociations === "function");
assert(typeof paginateListBacklogTasks === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListGoals === "function");
assert(typeof paginateListJournalRecords === "function");
assert(typeof paginateListServices === "function");
assert(typeof paginateListTriggers === "function");
console.log(`DevOpsAgent index test passed.`);
