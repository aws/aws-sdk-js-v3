import {
  AccessDeniedException,
  AccessDeniedException$,
  AgentManagedRuntimeType,
  AgentRuntime$,
  AgentRuntimeArtifact$,
  AgentRuntimeEndpoint$,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  ApiGatewayTargetConfiguration$,
  ApiGatewayToolConfiguration$,
  ApiGatewayToolFilter$,
  ApiGatewayToolOverride$,
  ApiKeyCredentialLocation,
  ApiKeyCredentialProviderItem$,
  ApiSchemaConfiguration$,
  AtlassianOauth2ProviderConfigInput$,
  AtlassianOauth2ProviderConfigOutput$,
  AuthorizerConfiguration$,
  AuthorizerType,
  AuthorizingClaimMatchValueType$,
  BedrockAgentCoreControl,
  BedrockAgentCoreControlClient,
  BedrockAgentCoreControlServiceException,
  BedrockEvaluatorModelConfig$,
  BrowserNetworkConfiguration$,
  BrowserNetworkMode,
  BrowserSigningConfigInput$,
  BrowserSigningConfigOutput$,
  BrowserStatus,
  BrowserSummary$,
  CategoricalScaleDefinition$,
  CedarPolicy$,
  ClaimMatchOperatorType,
  ClaimMatchValueType$,
  CloudWatchLogsInputConfig$,
  CloudWatchOutputConfig$,
  Code$,
  CodeConfiguration$,
  CodeInterpreterNetworkConfiguration$,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  CodeInterpreterSummary$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  ConsolidationConfiguration$,
  ContainerConfiguration$,
  Content$,
  CreateAgentRuntime$,
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeEndpoint$,
  CreateAgentRuntimeEndpointCommand,
  CreateAgentRuntimeEndpointRequest$,
  CreateAgentRuntimeEndpointResponse$,
  CreateAgentRuntimeRequest$,
  CreateAgentRuntimeResponse$,
  CreateApiKeyCredentialProvider$,
  CreateApiKeyCredentialProviderCommand,
  CreateApiKeyCredentialProviderRequest$,
  CreateApiKeyCredentialProviderResponse$,
  CreateBrowser$,
  CreateBrowserCommand,
  CreateBrowserRequest$,
  CreateBrowserResponse$,
  CreateCodeInterpreter$,
  CreateCodeInterpreterCommand,
  CreateCodeInterpreterRequest$,
  CreateCodeInterpreterResponse$,
  CreateEvaluator$,
  CreateEvaluatorCommand,
  CreateEvaluatorRequest$,
  CreateEvaluatorResponse$,
  CreateGateway$,
  CreateGatewayCommand,
  CreateGatewayRequest$,
  CreateGatewayResponse$,
  CreateGatewayTarget$,
  CreateGatewayTargetCommand,
  CreateGatewayTargetRequest$,
  CreateGatewayTargetResponse$,
  CreateMemory$,
  CreateMemoryCommand,
  CreateMemoryInput$,
  CreateMemoryOutput$,
  CreateOauth2CredentialProvider$,
  CreateOauth2CredentialProviderCommand,
  CreateOauth2CredentialProviderRequest$,
  CreateOauth2CredentialProviderResponse$,
  CreateOnlineEvaluationConfig$,
  CreateOnlineEvaluationConfigCommand,
  CreateOnlineEvaluationConfigRequest$,
  CreateOnlineEvaluationConfigResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyEngine$,
  CreatePolicyEngineCommand,
  CreatePolicyEngineRequest$,
  CreatePolicyEngineResponse$,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  CreateWorkloadIdentity$,
  CreateWorkloadIdentityCommand,
  CreateWorkloadIdentityRequest$,
  CreateWorkloadIdentityResponse$,
  CredentialProvider$,
  CredentialProviderConfiguration$,
  CredentialProviderType,
  CredentialProviderVendorType,
  CustomClaimValidationType$,
  CustomConfigurationInput$,
  CustomConsolidationConfiguration$,
  CustomConsolidationConfigurationInput$,
  CustomExtractionConfiguration$,
  CustomExtractionConfigurationInput$,
  CustomJWTAuthorizerConfiguration$,
  CustomMemoryStrategyInput$,
  CustomOauth2ProviderConfigInput$,
  CustomOauth2ProviderConfigOutput$,
  CustomReflectionConfiguration$,
  CustomReflectionConfigurationInput$,
  DataSourceConfig$,
  DecryptionFailure,
  DecryptionFailure$,
  DeleteAgentRuntime$,
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeEndpoint$,
  DeleteAgentRuntimeEndpointCommand,
  DeleteAgentRuntimeEndpointRequest$,
  DeleteAgentRuntimeEndpointResponse$,
  DeleteAgentRuntimeRequest$,
  DeleteAgentRuntimeResponse$,
  DeleteApiKeyCredentialProvider$,
  DeleteApiKeyCredentialProviderCommand,
  DeleteApiKeyCredentialProviderRequest$,
  DeleteApiKeyCredentialProviderResponse$,
  DeleteBrowser$,
  DeleteBrowserCommand,
  DeleteBrowserRequest$,
  DeleteBrowserResponse$,
  DeleteCodeInterpreter$,
  DeleteCodeInterpreterCommand,
  DeleteCodeInterpreterRequest$,
  DeleteCodeInterpreterResponse$,
  DeleteEvaluator$,
  DeleteEvaluatorCommand,
  DeleteEvaluatorRequest$,
  DeleteEvaluatorResponse$,
  DeleteGateway$,
  DeleteGatewayCommand,
  DeleteGatewayRequest$,
  DeleteGatewayResponse$,
  DeleteGatewayTarget$,
  DeleteGatewayTargetCommand,
  DeleteGatewayTargetRequest$,
  DeleteGatewayTargetResponse$,
  DeleteMemory$,
  DeleteMemoryCommand,
  DeleteMemoryInput$,
  DeleteMemoryOutput$,
  DeleteMemoryStrategyInput$,
  DeleteOauth2CredentialProvider$,
  DeleteOauth2CredentialProviderCommand,
  DeleteOauth2CredentialProviderRequest$,
  DeleteOauth2CredentialProviderResponse$,
  DeleteOnlineEvaluationConfig$,
  DeleteOnlineEvaluationConfigCommand,
  DeleteOnlineEvaluationConfigRequest$,
  DeleteOnlineEvaluationConfigResponse$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyEngine$,
  DeletePolicyEngineCommand,
  DeletePolicyEngineRequest$,
  DeletePolicyEngineResponse$,
  DeletePolicyRequest$,
  DeletePolicyResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteWorkloadIdentity$,
  DeleteWorkloadIdentityCommand,
  DeleteWorkloadIdentityRequest$,
  DeleteWorkloadIdentityResponse$,
  EncryptionFailure,
  EncryptionFailure$,
  EpisodicConsolidationOverride$,
  EpisodicExtractionOverride$,
  EpisodicMemoryStrategyInput$,
  EpisodicOverrideConfigurationInput$,
  EpisodicOverrideConsolidationConfigurationInput$,
  EpisodicOverrideExtractionConfigurationInput$,
  EpisodicOverrideReflectionConfigurationInput$,
  EpisodicReflectionConfiguration$,
  EpisodicReflectionConfigurationInput$,
  EpisodicReflectionOverride$,
  EvaluatorConfig$,
  EvaluatorLevel,
  EvaluatorModelConfig$,
  EvaluatorReference$,
  EvaluatorStatus,
  EvaluatorSummary$,
  EvaluatorType,
  ExceptionLevel,
  ExtractionConfiguration$,
  Filter$,
  FilterOperator,
  FilterValue$,
  Finding$,
  FindingType,
  GatewayApiKeyCredentialProvider$,
  GatewayInterceptionPoint,
  GatewayInterceptorConfiguration$,
  GatewayPolicyEngineConfiguration$,
  GatewayPolicyEngineMode,
  GatewayProtocolConfiguration$,
  GatewayProtocolType,
  GatewayStatus,
  GatewaySummary$,
  GatewayTarget$,
  GetAgentRuntime$,
  GetAgentRuntimeCommand,
  GetAgentRuntimeEndpoint$,
  GetAgentRuntimeEndpointCommand,
  GetAgentRuntimeEndpointRequest$,
  GetAgentRuntimeEndpointResponse$,
  GetAgentRuntimeRequest$,
  GetAgentRuntimeResponse$,
  GetApiKeyCredentialProvider$,
  GetApiKeyCredentialProviderCommand,
  GetApiKeyCredentialProviderRequest$,
  GetApiKeyCredentialProviderResponse$,
  GetBrowser$,
  GetBrowserCommand,
  GetBrowserRequest$,
  GetBrowserResponse$,
  GetCodeInterpreter$,
  GetCodeInterpreterCommand,
  GetCodeInterpreterRequest$,
  GetCodeInterpreterResponse$,
  GetEvaluator$,
  GetEvaluatorCommand,
  GetEvaluatorRequest$,
  GetEvaluatorResponse$,
  GetGateway$,
  GetGatewayCommand,
  GetGatewayRequest$,
  GetGatewayResponse$,
  GetGatewayTarget$,
  GetGatewayTargetCommand,
  GetGatewayTargetRequest$,
  GetGatewayTargetResponse$,
  GetMemory$,
  GetMemoryCommand,
  GetMemoryInput$,
  GetMemoryOutput$,
  GetOauth2CredentialProvider$,
  GetOauth2CredentialProviderCommand,
  GetOauth2CredentialProviderRequest$,
  GetOauth2CredentialProviderResponse$,
  GetOnlineEvaluationConfig$,
  GetOnlineEvaluationConfigCommand,
  GetOnlineEvaluationConfigRequest$,
  GetOnlineEvaluationConfigResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyEngine$,
  GetPolicyEngineCommand,
  GetPolicyEngineRequest$,
  GetPolicyEngineResponse$,
  GetPolicyGeneration$,
  GetPolicyGenerationCommand,
  GetPolicyGenerationRequest$,
  GetPolicyGenerationResponse$,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetTokenVault$,
  GetTokenVaultCommand,
  GetTokenVaultRequest$,
  GetTokenVaultResponse$,
  GetWorkloadIdentity$,
  GetWorkloadIdentityCommand,
  GetWorkloadIdentityRequest$,
  GetWorkloadIdentityResponse$,
  GithubOauth2ProviderConfigInput$,
  GithubOauth2ProviderConfigOutput$,
  GoogleOauth2ProviderConfigInput$,
  GoogleOauth2ProviderConfigOutput$,
  InboundTokenClaimValueType,
  IncludedOauth2ProviderConfigInput$,
  IncludedOauth2ProviderConfigOutput$,
  InferenceConfiguration$,
  InterceptorConfiguration$,
  InterceptorInputConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvocationConfiguration$,
  InvocationConfigurationInput$,
  KeyType,
  KmsConfiguration$,
  LambdaInterceptorConfiguration$,
  LifecycleConfiguration$,
  LinkedinOauth2ProviderConfigInput$,
  LinkedinOauth2ProviderConfigOutput$,
  ListAgentRuntimeEndpoints$,
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeEndpointsRequest$,
  ListAgentRuntimeEndpointsResponse$,
  ListAgentRuntimes$,
  ListAgentRuntimesCommand,
  ListAgentRuntimesRequest$,
  ListAgentRuntimesResponse$,
  ListAgentRuntimeVersions$,
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimeVersionsRequest$,
  ListAgentRuntimeVersionsResponse$,
  ListApiKeyCredentialProviders$,
  ListApiKeyCredentialProvidersCommand,
  ListApiKeyCredentialProvidersRequest$,
  ListApiKeyCredentialProvidersResponse$,
  ListBrowsers$,
  ListBrowsersCommand,
  ListBrowsersRequest$,
  ListBrowsersResponse$,
  ListCodeInterpreters$,
  ListCodeInterpretersCommand,
  ListCodeInterpretersRequest$,
  ListCodeInterpretersResponse$,
  ListEvaluators$,
  ListEvaluatorsCommand,
  ListEvaluatorsRequest$,
  ListEvaluatorsResponse$,
  ListGateways$,
  ListGatewaysCommand,
  ListGatewaysRequest$,
  ListGatewaysResponse$,
  ListGatewayTargets$,
  ListGatewayTargetsCommand,
  ListGatewayTargetsRequest$,
  ListGatewayTargetsResponse$,
  ListMemories$,
  ListMemoriesCommand,
  ListMemoriesInput$,
  ListMemoriesOutput$,
  ListOauth2CredentialProviders$,
  ListOauth2CredentialProvidersCommand,
  ListOauth2CredentialProvidersRequest$,
  ListOauth2CredentialProvidersResponse$,
  ListOnlineEvaluationConfigs$,
  ListOnlineEvaluationConfigsCommand,
  ListOnlineEvaluationConfigsRequest$,
  ListOnlineEvaluationConfigsResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListPolicyEngines$,
  ListPolicyEnginesCommand,
  ListPolicyEnginesRequest$,
  ListPolicyEnginesResponse$,
  ListPolicyGenerationAssets$,
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationAssetsRequest$,
  ListPolicyGenerationAssetsResponse$,
  ListPolicyGenerations$,
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsRequest$,
  ListPolicyGenerationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkloadIdentities$,
  ListWorkloadIdentitiesCommand,
  ListWorkloadIdentitiesRequest$,
  ListWorkloadIdentitiesResponse$,
  LlmAsAJudgeEvaluatorConfig$,
  MCPGatewayConfiguration$,
  McpLambdaTargetConfiguration$,
  McpServerTargetConfiguration$,
  McpTargetConfiguration$,
  Memory$,
  MemoryStatus,
  MemoryStrategy$,
  MemoryStrategyInput$,
  MemoryStrategyStatus,
  MemoryStrategyType,
  MemorySummary$,
  MessageBasedTrigger$,
  MessageBasedTriggerInput$,
  MetadataConfiguration$,
  MicrosoftOauth2ProviderConfigInput$,
  MicrosoftOauth2ProviderConfigOutput$,
  ModifyConsolidationConfiguration$,
  ModifyExtractionConfiguration$,
  ModifyInvocationConfigurationInput$,
  ModifyMemoryStrategies$,
  ModifyMemoryStrategyInput$,
  ModifyReflectionConfiguration$,
  ModifySelfManagedConfiguration$,
  ModifyStrategyConfiguration$,
  NetworkConfiguration$,
  NetworkMode,
  NumericalScaleDefinition$,
  Oauth2AuthorizationServerMetadata$,
  Oauth2CredentialProviderItem$,
  Oauth2Discovery$,
  Oauth2ProviderConfigInput$,
  Oauth2ProviderConfigOutput$,
  OAuthCredentialProvider$,
  OAuthGrantType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationConfigSummary$,
  OnlineEvaluationExecutionStatus,
  OutputConfig$,
  OverrideType,
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimes,
  paginateListAgentRuntimeVersions,
  paginateListApiKeyCredentialProviders,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListEvaluators,
  paginateListGateways,
  paginateListGatewayTargets,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListOnlineEvaluationConfigs,
  paginateListPolicies,
  paginateListPolicyEngines,
  paginateListPolicyGenerationAssets,
  paginateListPolicyGenerations,
  paginateListWorkloadIdentities,
  Policy$,
  PolicyDefinition$,
  PolicyEngine$,
  PolicyEngineStatus,
  PolicyGeneration$,
  PolicyGenerationAsset$,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  ProtocolConfiguration$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RatingScale$,
  RecordingConfig$,
  ReflectionConfiguration$,
  RequestHeaderConfiguration$,
  Resource$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RestApiMethod,
  Rule$,
  S3Configuration$,
  S3Location$,
  SalesforceOauth2ProviderConfigInput$,
  SalesforceOauth2ProviderConfigOutput$,
  SamplingConfig$,
  SchemaDefinition$,
  SchemaType,
  SearchType,
  Secret$,
  SelfManagedConfiguration$,
  SelfManagedConfigurationInput$,
  SemanticConsolidationOverride$,
  SemanticExtractionOverride$,
  SemanticMemoryStrategyInput$,
  SemanticOverrideConfigurationInput$,
  SemanticOverrideConsolidationConfigurationInput$,
  SemanticOverrideExtractionConfigurationInput$,
  ServerProtocol,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionConfig$,
  SetTokenVaultCMK$,
  SetTokenVaultCMKCommand,
  SetTokenVaultCMKRequest$,
  SetTokenVaultCMKResponse$,
  SlackOauth2ProviderConfigInput$,
  SlackOauth2ProviderConfigOutput$,
  StartPolicyGeneration$,
  StartPolicyGenerationCommand,
  StartPolicyGenerationRequest$,
  StartPolicyGenerationResponse$,
  StrategyConfiguration$,
  SummaryConsolidationOverride$,
  SummaryMemoryStrategyInput$,
  SummaryOverrideConfigurationInput$,
  SummaryOverrideConsolidationConfigurationInput$,
  SynchronizeGatewayTargets$,
  SynchronizeGatewayTargetsCommand,
  SynchronizeGatewayTargetsRequest$,
  SynchronizeGatewayTargetsResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetConfiguration$,
  TargetStatus,
  TargetSummary$,
  ThrottledException,
  ThrottledException$,
  ThrottlingException,
  ThrottlingException$,
  TimeBasedTrigger$,
  TimeBasedTriggerInput$,
  TokenBasedTrigger$,
  TokenBasedTriggerInput$,
  ToolDefinition$,
  ToolSchema$,
  TriggerCondition$,
  TriggerConditionInput$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAgentRuntime$,
  UpdateAgentRuntimeCommand,
  UpdateAgentRuntimeEndpoint$,
  UpdateAgentRuntimeEndpointCommand,
  UpdateAgentRuntimeEndpointRequest$,
  UpdateAgentRuntimeEndpointResponse$,
  UpdateAgentRuntimeRequest$,
  UpdateAgentRuntimeResponse$,
  UpdateApiKeyCredentialProvider$,
  UpdateApiKeyCredentialProviderCommand,
  UpdateApiKeyCredentialProviderRequest$,
  UpdateApiKeyCredentialProviderResponse$,
  UpdateEvaluator$,
  UpdateEvaluatorCommand,
  UpdateEvaluatorRequest$,
  UpdateEvaluatorResponse$,
  UpdateGateway$,
  UpdateGatewayCommand,
  UpdateGatewayRequest$,
  UpdateGatewayResponse$,
  UpdateGatewayTarget$,
  UpdateGatewayTargetCommand,
  UpdateGatewayTargetRequest$,
  UpdateGatewayTargetResponse$,
  UpdateMemory$,
  UpdateMemoryCommand,
  UpdateMemoryInput$,
  UpdateMemoryOutput$,
  UpdateOauth2CredentialProvider$,
  UpdateOauth2CredentialProviderCommand,
  UpdateOauth2CredentialProviderRequest$,
  UpdateOauth2CredentialProviderResponse$,
  UpdateOnlineEvaluationConfig$,
  UpdateOnlineEvaluationConfigCommand,
  UpdateOnlineEvaluationConfigRequest$,
  UpdateOnlineEvaluationConfigResponse$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyEngine$,
  UpdatePolicyEngineCommand,
  UpdatePolicyEngineRequest$,
  UpdatePolicyEngineResponse$,
  UpdatePolicyRequest$,
  UpdatePolicyResponse$,
  UpdateWorkloadIdentity$,
  UpdateWorkloadIdentityCommand,
  UpdateWorkloadIdentityRequest$,
  UpdateWorkloadIdentityResponse$,
  UserPreferenceConsolidationOverride$,
  UserPreferenceExtractionOverride$,
  UserPreferenceMemoryStrategyInput$,
  UserPreferenceOverrideConfigurationInput$,
  UserPreferenceOverrideConsolidationConfigurationInput$,
  UserPreferenceOverrideExtractionConfigurationInput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcConfig$,
  waitForMemoryCreated,
  waitForPolicyActive,
  waitForPolicyDeleted,
  waitForPolicyEngineActive,
  waitForPolicyEngineDeleted,
  waitForPolicyGenerationCompleted,
  waitUntilMemoryCreated,
  waitUntilPolicyActive,
  waitUntilPolicyDeleted,
  waitUntilPolicyEngineActive,
  waitUntilPolicyEngineDeleted,
  waitUntilPolicyGenerationCompleted,
  WorkloadIdentityDetails$,
  WorkloadIdentityType$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentCoreControlClient === "function");
assert(typeof BedrockAgentCoreControl === "function");
// commands
assert(typeof CreateAgentRuntimeCommand === "function");
assert(typeof CreateAgentRuntime$ === "object");
assert(typeof CreateAgentRuntimeEndpointCommand === "function");
assert(typeof CreateAgentRuntimeEndpoint$ === "object");
assert(typeof CreateApiKeyCredentialProviderCommand === "function");
assert(typeof CreateApiKeyCredentialProvider$ === "object");
assert(typeof CreateBrowserCommand === "function");
assert(typeof CreateBrowser$ === "object");
assert(typeof CreateCodeInterpreterCommand === "function");
assert(typeof CreateCodeInterpreter$ === "object");
assert(typeof CreateEvaluatorCommand === "function");
assert(typeof CreateEvaluator$ === "object");
assert(typeof CreateGatewayCommand === "function");
assert(typeof CreateGateway$ === "object");
assert(typeof CreateGatewayTargetCommand === "function");
assert(typeof CreateGatewayTarget$ === "object");
assert(typeof CreateMemoryCommand === "function");
assert(typeof CreateMemory$ === "object");
assert(typeof CreateOauth2CredentialProviderCommand === "function");
assert(typeof CreateOauth2CredentialProvider$ === "object");
assert(typeof CreateOnlineEvaluationConfigCommand === "function");
assert(typeof CreateOnlineEvaluationConfig$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicyEngineCommand === "function");
assert(typeof CreatePolicyEngine$ === "object");
assert(typeof CreateWorkloadIdentityCommand === "function");
assert(typeof CreateWorkloadIdentity$ === "object");
assert(typeof DeleteAgentRuntimeCommand === "function");
assert(typeof DeleteAgentRuntime$ === "object");
assert(typeof DeleteAgentRuntimeEndpointCommand === "function");
assert(typeof DeleteAgentRuntimeEndpoint$ === "object");
assert(typeof DeleteApiKeyCredentialProviderCommand === "function");
assert(typeof DeleteApiKeyCredentialProvider$ === "object");
assert(typeof DeleteBrowserCommand === "function");
assert(typeof DeleteBrowser$ === "object");
assert(typeof DeleteCodeInterpreterCommand === "function");
assert(typeof DeleteCodeInterpreter$ === "object");
assert(typeof DeleteEvaluatorCommand === "function");
assert(typeof DeleteEvaluator$ === "object");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGateway$ === "object");
assert(typeof DeleteGatewayTargetCommand === "function");
assert(typeof DeleteGatewayTarget$ === "object");
assert(typeof DeleteMemoryCommand === "function");
assert(typeof DeleteMemory$ === "object");
assert(typeof DeleteOauth2CredentialProviderCommand === "function");
assert(typeof DeleteOauth2CredentialProvider$ === "object");
assert(typeof DeleteOnlineEvaluationConfigCommand === "function");
assert(typeof DeleteOnlineEvaluationConfig$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeletePolicyEngineCommand === "function");
assert(typeof DeletePolicyEngine$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteWorkloadIdentityCommand === "function");
assert(typeof DeleteWorkloadIdentity$ === "object");
assert(typeof GetAgentRuntimeCommand === "function");
assert(typeof GetAgentRuntime$ === "object");
assert(typeof GetAgentRuntimeEndpointCommand === "function");
assert(typeof GetAgentRuntimeEndpoint$ === "object");
assert(typeof GetApiKeyCredentialProviderCommand === "function");
assert(typeof GetApiKeyCredentialProvider$ === "object");
assert(typeof GetBrowserCommand === "function");
assert(typeof GetBrowser$ === "object");
assert(typeof GetCodeInterpreterCommand === "function");
assert(typeof GetCodeInterpreter$ === "object");
assert(typeof GetEvaluatorCommand === "function");
assert(typeof GetEvaluator$ === "object");
assert(typeof GetGatewayCommand === "function");
assert(typeof GetGateway$ === "object");
assert(typeof GetGatewayTargetCommand === "function");
assert(typeof GetGatewayTarget$ === "object");
assert(typeof GetMemoryCommand === "function");
assert(typeof GetMemory$ === "object");
assert(typeof GetOauth2CredentialProviderCommand === "function");
assert(typeof GetOauth2CredentialProvider$ === "object");
assert(typeof GetOnlineEvaluationConfigCommand === "function");
assert(typeof GetOnlineEvaluationConfig$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetPolicyEngineCommand === "function");
assert(typeof GetPolicyEngine$ === "object");
assert(typeof GetPolicyGenerationCommand === "function");
assert(typeof GetPolicyGeneration$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetTokenVaultCommand === "function");
assert(typeof GetTokenVault$ === "object");
assert(typeof GetWorkloadIdentityCommand === "function");
assert(typeof GetWorkloadIdentity$ === "object");
assert(typeof ListAgentRuntimeEndpointsCommand === "function");
assert(typeof ListAgentRuntimeEndpoints$ === "object");
assert(typeof ListAgentRuntimesCommand === "function");
assert(typeof ListAgentRuntimes$ === "object");
assert(typeof ListAgentRuntimeVersionsCommand === "function");
assert(typeof ListAgentRuntimeVersions$ === "object");
assert(typeof ListApiKeyCredentialProvidersCommand === "function");
assert(typeof ListApiKeyCredentialProviders$ === "object");
assert(typeof ListBrowsersCommand === "function");
assert(typeof ListBrowsers$ === "object");
assert(typeof ListCodeInterpretersCommand === "function");
assert(typeof ListCodeInterpreters$ === "object");
assert(typeof ListEvaluatorsCommand === "function");
assert(typeof ListEvaluators$ === "object");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGateways$ === "object");
assert(typeof ListGatewayTargetsCommand === "function");
assert(typeof ListGatewayTargets$ === "object");
assert(typeof ListMemoriesCommand === "function");
assert(typeof ListMemories$ === "object");
assert(typeof ListOauth2CredentialProvidersCommand === "function");
assert(typeof ListOauth2CredentialProviders$ === "object");
assert(typeof ListOnlineEvaluationConfigsCommand === "function");
assert(typeof ListOnlineEvaluationConfigs$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicyEnginesCommand === "function");
assert(typeof ListPolicyEngines$ === "object");
assert(typeof ListPolicyGenerationAssetsCommand === "function");
assert(typeof ListPolicyGenerationAssets$ === "object");
assert(typeof ListPolicyGenerationsCommand === "function");
assert(typeof ListPolicyGenerations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkloadIdentitiesCommand === "function");
assert(typeof ListWorkloadIdentities$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof SetTokenVaultCMKCommand === "function");
assert(typeof SetTokenVaultCMK$ === "object");
assert(typeof StartPolicyGenerationCommand === "function");
assert(typeof StartPolicyGeneration$ === "object");
assert(typeof SynchronizeGatewayTargetsCommand === "function");
assert(typeof SynchronizeGatewayTargets$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentRuntimeCommand === "function");
assert(typeof UpdateAgentRuntime$ === "object");
assert(typeof UpdateAgentRuntimeEndpointCommand === "function");
assert(typeof UpdateAgentRuntimeEndpoint$ === "object");
assert(typeof UpdateApiKeyCredentialProviderCommand === "function");
assert(typeof UpdateApiKeyCredentialProvider$ === "object");
assert(typeof UpdateEvaluatorCommand === "function");
assert(typeof UpdateEvaluator$ === "object");
assert(typeof UpdateGatewayCommand === "function");
assert(typeof UpdateGateway$ === "object");
assert(typeof UpdateGatewayTargetCommand === "function");
assert(typeof UpdateGatewayTarget$ === "object");
assert(typeof UpdateMemoryCommand === "function");
assert(typeof UpdateMemory$ === "object");
assert(typeof UpdateOauth2CredentialProviderCommand === "function");
assert(typeof UpdateOauth2CredentialProvider$ === "object");
assert(typeof UpdateOnlineEvaluationConfigCommand === "function");
assert(typeof UpdateOnlineEvaluationConfig$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdatePolicyEngineCommand === "function");
assert(typeof UpdatePolicyEngine$ === "object");
assert(typeof UpdateWorkloadIdentityCommand === "function");
assert(typeof UpdateWorkloadIdentity$ === "object");
// structural schemas
assert(typeof AgentRuntime$ === "object");
assert(typeof AgentRuntimeArtifact$ === "object");
assert(typeof AgentRuntimeEndpoint$ === "object");
assert(typeof ApiGatewayTargetConfiguration$ === "object");
assert(typeof ApiGatewayToolConfiguration$ === "object");
assert(typeof ApiGatewayToolFilter$ === "object");
assert(typeof ApiGatewayToolOverride$ === "object");
assert(typeof ApiKeyCredentialProviderItem$ === "object");
assert(typeof ApiSchemaConfiguration$ === "object");
assert(typeof AtlassianOauth2ProviderConfigInput$ === "object");
assert(typeof AtlassianOauth2ProviderConfigOutput$ === "object");
assert(typeof AuthorizerConfiguration$ === "object");
assert(typeof AuthorizingClaimMatchValueType$ === "object");
assert(typeof BedrockEvaluatorModelConfig$ === "object");
assert(typeof BrowserNetworkConfiguration$ === "object");
assert(typeof BrowserSigningConfigInput$ === "object");
assert(typeof BrowserSigningConfigOutput$ === "object");
assert(typeof BrowserSummary$ === "object");
assert(typeof CategoricalScaleDefinition$ === "object");
assert(typeof CedarPolicy$ === "object");
assert(typeof ClaimMatchValueType$ === "object");
assert(typeof CloudWatchLogsInputConfig$ === "object");
assert(typeof CloudWatchOutputConfig$ === "object");
assert(typeof Code$ === "object");
assert(typeof CodeConfiguration$ === "object");
assert(typeof CodeInterpreterNetworkConfiguration$ === "object");
assert(typeof CodeInterpreterSummary$ === "object");
assert(typeof ConsolidationConfiguration$ === "object");
assert(typeof ContainerConfiguration$ === "object");
assert(typeof Content$ === "object");
assert(typeof CreateAgentRuntimeEndpointRequest$ === "object");
assert(typeof CreateAgentRuntimeEndpointResponse$ === "object");
assert(typeof CreateAgentRuntimeRequest$ === "object");
assert(typeof CreateAgentRuntimeResponse$ === "object");
assert(typeof CreateApiKeyCredentialProviderRequest$ === "object");
assert(typeof CreateApiKeyCredentialProviderResponse$ === "object");
assert(typeof CreateBrowserRequest$ === "object");
assert(typeof CreateBrowserResponse$ === "object");
assert(typeof CreateCodeInterpreterRequest$ === "object");
assert(typeof CreateCodeInterpreterResponse$ === "object");
assert(typeof CreateEvaluatorRequest$ === "object");
assert(typeof CreateEvaluatorResponse$ === "object");
assert(typeof CreateGatewayRequest$ === "object");
assert(typeof CreateGatewayResponse$ === "object");
assert(typeof CreateGatewayTargetRequest$ === "object");
assert(typeof CreateGatewayTargetResponse$ === "object");
assert(typeof CreateMemoryInput$ === "object");
assert(typeof CreateMemoryOutput$ === "object");
assert(typeof CreateOauth2CredentialProviderRequest$ === "object");
assert(typeof CreateOauth2CredentialProviderResponse$ === "object");
assert(typeof CreateOnlineEvaluationConfigRequest$ === "object");
assert(typeof CreateOnlineEvaluationConfigResponse$ === "object");
assert(typeof CreatePolicyEngineRequest$ === "object");
assert(typeof CreatePolicyEngineResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof CreateWorkloadIdentityRequest$ === "object");
assert(typeof CreateWorkloadIdentityResponse$ === "object");
assert(typeof CredentialProvider$ === "object");
assert(typeof CredentialProviderConfiguration$ === "object");
assert(typeof CustomClaimValidationType$ === "object");
assert(typeof CustomConfigurationInput$ === "object");
assert(typeof CustomConsolidationConfiguration$ === "object");
assert(typeof CustomConsolidationConfigurationInput$ === "object");
assert(typeof CustomExtractionConfiguration$ === "object");
assert(typeof CustomExtractionConfigurationInput$ === "object");
assert(typeof CustomJWTAuthorizerConfiguration$ === "object");
assert(typeof CustomMemoryStrategyInput$ === "object");
assert(typeof CustomOauth2ProviderConfigInput$ === "object");
assert(typeof CustomOauth2ProviderConfigOutput$ === "object");
assert(typeof CustomReflectionConfiguration$ === "object");
assert(typeof CustomReflectionConfigurationInput$ === "object");
assert(typeof DataSourceConfig$ === "object");
assert(typeof DeleteAgentRuntimeEndpointRequest$ === "object");
assert(typeof DeleteAgentRuntimeEndpointResponse$ === "object");
assert(typeof DeleteAgentRuntimeRequest$ === "object");
assert(typeof DeleteAgentRuntimeResponse$ === "object");
assert(typeof DeleteApiKeyCredentialProviderRequest$ === "object");
assert(typeof DeleteApiKeyCredentialProviderResponse$ === "object");
assert(typeof DeleteBrowserRequest$ === "object");
assert(typeof DeleteBrowserResponse$ === "object");
assert(typeof DeleteCodeInterpreterRequest$ === "object");
assert(typeof DeleteCodeInterpreterResponse$ === "object");
assert(typeof DeleteEvaluatorRequest$ === "object");
assert(typeof DeleteEvaluatorResponse$ === "object");
assert(typeof DeleteGatewayRequest$ === "object");
assert(typeof DeleteGatewayResponse$ === "object");
assert(typeof DeleteGatewayTargetRequest$ === "object");
assert(typeof DeleteGatewayTargetResponse$ === "object");
assert(typeof DeleteMemoryInput$ === "object");
assert(typeof DeleteMemoryOutput$ === "object");
assert(typeof DeleteMemoryStrategyInput$ === "object");
assert(typeof DeleteOauth2CredentialProviderRequest$ === "object");
assert(typeof DeleteOauth2CredentialProviderResponse$ === "object");
assert(typeof DeleteOnlineEvaluationConfigRequest$ === "object");
assert(typeof DeleteOnlineEvaluationConfigResponse$ === "object");
assert(typeof DeletePolicyEngineRequest$ === "object");
assert(typeof DeletePolicyEngineResponse$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeletePolicyResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteWorkloadIdentityRequest$ === "object");
assert(typeof DeleteWorkloadIdentityResponse$ === "object");
assert(typeof EpisodicConsolidationOverride$ === "object");
assert(typeof EpisodicExtractionOverride$ === "object");
assert(typeof EpisodicMemoryStrategyInput$ === "object");
assert(typeof EpisodicOverrideConfigurationInput$ === "object");
assert(typeof EpisodicOverrideConsolidationConfigurationInput$ === "object");
assert(typeof EpisodicOverrideExtractionConfigurationInput$ === "object");
assert(typeof EpisodicOverrideReflectionConfigurationInput$ === "object");
assert(typeof EpisodicReflectionConfiguration$ === "object");
assert(typeof EpisodicReflectionConfigurationInput$ === "object");
assert(typeof EpisodicReflectionOverride$ === "object");
assert(typeof EvaluatorConfig$ === "object");
assert(typeof EvaluatorModelConfig$ === "object");
assert(typeof EvaluatorReference$ === "object");
assert(typeof EvaluatorSummary$ === "object");
assert(typeof ExtractionConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterValue$ === "object");
assert(typeof Finding$ === "object");
assert(typeof GatewayApiKeyCredentialProvider$ === "object");
assert(typeof GatewayInterceptorConfiguration$ === "object");
assert(typeof GatewayPolicyEngineConfiguration$ === "object");
assert(typeof GatewayProtocolConfiguration$ === "object");
assert(typeof GatewaySummary$ === "object");
assert(typeof GatewayTarget$ === "object");
assert(typeof GetAgentRuntimeEndpointRequest$ === "object");
assert(typeof GetAgentRuntimeEndpointResponse$ === "object");
assert(typeof GetAgentRuntimeRequest$ === "object");
assert(typeof GetAgentRuntimeResponse$ === "object");
assert(typeof GetApiKeyCredentialProviderRequest$ === "object");
assert(typeof GetApiKeyCredentialProviderResponse$ === "object");
assert(typeof GetBrowserRequest$ === "object");
assert(typeof GetBrowserResponse$ === "object");
assert(typeof GetCodeInterpreterRequest$ === "object");
assert(typeof GetCodeInterpreterResponse$ === "object");
assert(typeof GetEvaluatorRequest$ === "object");
assert(typeof GetEvaluatorResponse$ === "object");
assert(typeof GetGatewayRequest$ === "object");
assert(typeof GetGatewayResponse$ === "object");
assert(typeof GetGatewayTargetRequest$ === "object");
assert(typeof GetGatewayTargetResponse$ === "object");
assert(typeof GetMemoryInput$ === "object");
assert(typeof GetMemoryOutput$ === "object");
assert(typeof GetOauth2CredentialProviderRequest$ === "object");
assert(typeof GetOauth2CredentialProviderResponse$ === "object");
assert(typeof GetOnlineEvaluationConfigRequest$ === "object");
assert(typeof GetOnlineEvaluationConfigResponse$ === "object");
assert(typeof GetPolicyEngineRequest$ === "object");
assert(typeof GetPolicyEngineResponse$ === "object");
assert(typeof GetPolicyGenerationRequest$ === "object");
assert(typeof GetPolicyGenerationResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetTokenVaultRequest$ === "object");
assert(typeof GetTokenVaultResponse$ === "object");
assert(typeof GetWorkloadIdentityRequest$ === "object");
assert(typeof GetWorkloadIdentityResponse$ === "object");
assert(typeof GithubOauth2ProviderConfigInput$ === "object");
assert(typeof GithubOauth2ProviderConfigOutput$ === "object");
assert(typeof GoogleOauth2ProviderConfigInput$ === "object");
assert(typeof GoogleOauth2ProviderConfigOutput$ === "object");
assert(typeof IncludedOauth2ProviderConfigInput$ === "object");
assert(typeof IncludedOauth2ProviderConfigOutput$ === "object");
assert(typeof InferenceConfiguration$ === "object");
assert(typeof InterceptorConfiguration$ === "object");
assert(typeof InterceptorInputConfiguration$ === "object");
assert(typeof InvocationConfiguration$ === "object");
assert(typeof InvocationConfigurationInput$ === "object");
assert(typeof KmsConfiguration$ === "object");
assert(typeof LambdaInterceptorConfiguration$ === "object");
assert(typeof LifecycleConfiguration$ === "object");
assert(typeof LinkedinOauth2ProviderConfigInput$ === "object");
assert(typeof LinkedinOauth2ProviderConfigOutput$ === "object");
assert(typeof ListAgentRuntimeEndpointsRequest$ === "object");
assert(typeof ListAgentRuntimeEndpointsResponse$ === "object");
assert(typeof ListAgentRuntimesRequest$ === "object");
assert(typeof ListAgentRuntimesResponse$ === "object");
assert(typeof ListAgentRuntimeVersionsRequest$ === "object");
assert(typeof ListAgentRuntimeVersionsResponse$ === "object");
assert(typeof ListApiKeyCredentialProvidersRequest$ === "object");
assert(typeof ListApiKeyCredentialProvidersResponse$ === "object");
assert(typeof ListBrowsersRequest$ === "object");
assert(typeof ListBrowsersResponse$ === "object");
assert(typeof ListCodeInterpretersRequest$ === "object");
assert(typeof ListCodeInterpretersResponse$ === "object");
assert(typeof ListEvaluatorsRequest$ === "object");
assert(typeof ListEvaluatorsResponse$ === "object");
assert(typeof ListGatewaysRequest$ === "object");
assert(typeof ListGatewaysResponse$ === "object");
assert(typeof ListGatewayTargetsRequest$ === "object");
assert(typeof ListGatewayTargetsResponse$ === "object");
assert(typeof ListMemoriesInput$ === "object");
assert(typeof ListMemoriesOutput$ === "object");
assert(typeof ListOauth2CredentialProvidersRequest$ === "object");
assert(typeof ListOauth2CredentialProvidersResponse$ === "object");
assert(typeof ListOnlineEvaluationConfigsRequest$ === "object");
assert(typeof ListOnlineEvaluationConfigsResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListPolicyEnginesRequest$ === "object");
assert(typeof ListPolicyEnginesResponse$ === "object");
assert(typeof ListPolicyGenerationAssetsRequest$ === "object");
assert(typeof ListPolicyGenerationAssetsResponse$ === "object");
assert(typeof ListPolicyGenerationsRequest$ === "object");
assert(typeof ListPolicyGenerationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkloadIdentitiesRequest$ === "object");
assert(typeof ListWorkloadIdentitiesResponse$ === "object");
assert(typeof LlmAsAJudgeEvaluatorConfig$ === "object");
assert(typeof MCPGatewayConfiguration$ === "object");
assert(typeof McpLambdaTargetConfiguration$ === "object");
assert(typeof McpServerTargetConfiguration$ === "object");
assert(typeof McpTargetConfiguration$ === "object");
assert(typeof Memory$ === "object");
assert(typeof MemoryStrategy$ === "object");
assert(typeof MemoryStrategyInput$ === "object");
assert(typeof MemorySummary$ === "object");
assert(typeof MessageBasedTrigger$ === "object");
assert(typeof MessageBasedTriggerInput$ === "object");
assert(typeof MetadataConfiguration$ === "object");
assert(typeof MicrosoftOauth2ProviderConfigInput$ === "object");
assert(typeof MicrosoftOauth2ProviderConfigOutput$ === "object");
assert(typeof ModifyConsolidationConfiguration$ === "object");
assert(typeof ModifyExtractionConfiguration$ === "object");
assert(typeof ModifyInvocationConfigurationInput$ === "object");
assert(typeof ModifyMemoryStrategies$ === "object");
assert(typeof ModifyMemoryStrategyInput$ === "object");
assert(typeof ModifyReflectionConfiguration$ === "object");
assert(typeof ModifySelfManagedConfiguration$ === "object");
assert(typeof ModifyStrategyConfiguration$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof NumericalScaleDefinition$ === "object");
assert(typeof Oauth2AuthorizationServerMetadata$ === "object");
assert(typeof Oauth2CredentialProviderItem$ === "object");
assert(typeof Oauth2Discovery$ === "object");
assert(typeof Oauth2ProviderConfigInput$ === "object");
assert(typeof Oauth2ProviderConfigOutput$ === "object");
assert(typeof OAuthCredentialProvider$ === "object");
assert(typeof OnlineEvaluationConfigSummary$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyDefinition$ === "object");
assert(typeof PolicyEngine$ === "object");
assert(typeof PolicyGeneration$ === "object");
assert(typeof PolicyGenerationAsset$ === "object");
assert(typeof ProtocolConfiguration$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RatingScale$ === "object");
assert(typeof RecordingConfig$ === "object");
assert(typeof ReflectionConfiguration$ === "object");
assert(typeof RequestHeaderConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof Rule$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SalesforceOauth2ProviderConfigInput$ === "object");
assert(typeof SalesforceOauth2ProviderConfigOutput$ === "object");
assert(typeof SamplingConfig$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof Secret$ === "object");
assert(typeof SelfManagedConfiguration$ === "object");
assert(typeof SelfManagedConfigurationInput$ === "object");
assert(typeof SemanticConsolidationOverride$ === "object");
assert(typeof SemanticExtractionOverride$ === "object");
assert(typeof SemanticMemoryStrategyInput$ === "object");
assert(typeof SemanticOverrideConfigurationInput$ === "object");
assert(typeof SemanticOverrideConsolidationConfigurationInput$ === "object");
assert(typeof SemanticOverrideExtractionConfigurationInput$ === "object");
assert(typeof SessionConfig$ === "object");
assert(typeof SetTokenVaultCMKRequest$ === "object");
assert(typeof SetTokenVaultCMKResponse$ === "object");
assert(typeof SlackOauth2ProviderConfigInput$ === "object");
assert(typeof SlackOauth2ProviderConfigOutput$ === "object");
assert(typeof StartPolicyGenerationRequest$ === "object");
assert(typeof StartPolicyGenerationResponse$ === "object");
assert(typeof StrategyConfiguration$ === "object");
assert(typeof SummaryConsolidationOverride$ === "object");
assert(typeof SummaryMemoryStrategyInput$ === "object");
assert(typeof SummaryOverrideConfigurationInput$ === "object");
assert(typeof SummaryOverrideConsolidationConfigurationInput$ === "object");
assert(typeof SynchronizeGatewayTargetsRequest$ === "object");
assert(typeof SynchronizeGatewayTargetsResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetConfiguration$ === "object");
assert(typeof TargetSummary$ === "object");
assert(typeof TimeBasedTrigger$ === "object");
assert(typeof TimeBasedTriggerInput$ === "object");
assert(typeof TokenBasedTrigger$ === "object");
assert(typeof TokenBasedTriggerInput$ === "object");
assert(typeof ToolDefinition$ === "object");
assert(typeof ToolSchema$ === "object");
assert(typeof TriggerCondition$ === "object");
assert(typeof TriggerConditionInput$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAgentRuntimeEndpointRequest$ === "object");
assert(typeof UpdateAgentRuntimeEndpointResponse$ === "object");
assert(typeof UpdateAgentRuntimeRequest$ === "object");
assert(typeof UpdateAgentRuntimeResponse$ === "object");
assert(typeof UpdateApiKeyCredentialProviderRequest$ === "object");
assert(typeof UpdateApiKeyCredentialProviderResponse$ === "object");
assert(typeof UpdateEvaluatorRequest$ === "object");
assert(typeof UpdateEvaluatorResponse$ === "object");
assert(typeof UpdateGatewayRequest$ === "object");
assert(typeof UpdateGatewayResponse$ === "object");
assert(typeof UpdateGatewayTargetRequest$ === "object");
assert(typeof UpdateGatewayTargetResponse$ === "object");
assert(typeof UpdateMemoryInput$ === "object");
assert(typeof UpdateMemoryOutput$ === "object");
assert(typeof UpdateOauth2CredentialProviderRequest$ === "object");
assert(typeof UpdateOauth2CredentialProviderResponse$ === "object");
assert(typeof UpdateOnlineEvaluationConfigRequest$ === "object");
assert(typeof UpdateOnlineEvaluationConfigResponse$ === "object");
assert(typeof UpdatePolicyEngineRequest$ === "object");
assert(typeof UpdatePolicyEngineResponse$ === "object");
assert(typeof UpdatePolicyRequest$ === "object");
assert(typeof UpdatePolicyResponse$ === "object");
assert(typeof UpdateWorkloadIdentityRequest$ === "object");
assert(typeof UpdateWorkloadIdentityResponse$ === "object");
assert(typeof UserPreferenceConsolidationOverride$ === "object");
assert(typeof UserPreferenceExtractionOverride$ === "object");
assert(typeof UserPreferenceMemoryStrategyInput$ === "object");
assert(typeof UserPreferenceOverrideConfigurationInput$ === "object");
assert(typeof UserPreferenceOverrideConsolidationConfigurationInput$ === "object");
assert(typeof UserPreferenceOverrideExtractionConfigurationInput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof WorkloadIdentityDetails$ === "object");
assert(typeof WorkloadIdentityType$ === "object");
// enums
assert(typeof AgentManagedRuntimeType === "object");
assert(typeof AgentRuntimeEndpointStatus === "object");
assert(typeof AgentRuntimeStatus === "object");
assert(typeof ApiKeyCredentialLocation === "object");
assert(typeof AuthorizerType === "object");
assert(typeof BrowserNetworkMode === "object");
assert(typeof BrowserStatus === "object");
assert(typeof ClaimMatchOperatorType === "object");
assert(typeof CodeInterpreterNetworkMode === "object");
assert(typeof CodeInterpreterStatus === "object");
assert(typeof CredentialProviderType === "object");
assert(typeof CredentialProviderVendorType === "object");
assert(typeof EvaluatorLevel === "object");
assert(typeof EvaluatorStatus === "object");
assert(typeof EvaluatorType === "object");
assert(typeof ExceptionLevel === "object");
assert(typeof FilterOperator === "object");
assert(typeof FindingType === "object");
assert(typeof GatewayInterceptionPoint === "object");
assert(typeof GatewayPolicyEngineMode === "object");
assert(typeof GatewayProtocolType === "object");
assert(typeof GatewayStatus === "object");
assert(typeof InboundTokenClaimValueType === "object");
assert(typeof KeyType === "object");
assert(typeof MemoryStatus === "object");
assert(typeof MemoryStrategyStatus === "object");
assert(typeof MemoryStrategyType === "object");
assert(typeof NetworkMode === "object");
assert(typeof OAuthGrantType === "object");
assert(typeof OnlineEvaluationConfigStatus === "object");
assert(typeof OnlineEvaluationExecutionStatus === "object");
assert(typeof OverrideType === "object");
assert(typeof PolicyEngineStatus === "object");
assert(typeof PolicyGenerationStatus === "object");
assert(typeof PolicyStatus === "object");
assert(typeof PolicyValidationMode === "object");
assert(typeof ResourceType === "object");
assert(typeof RestApiMethod === "object");
assert(typeof SchemaType === "object");
assert(typeof SearchType === "object");
assert(typeof ServerProtocol === "object");
assert(typeof TargetStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ConflictException$ === "object");
assert(DecryptionFailure.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof DecryptionFailure$ === "object");
assert(EncryptionFailure.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof EncryptionFailure$ === "object");
assert(InternalServerException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottledException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ThrottledException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(typeof ValidationException$ === "object");
assert(BedrockAgentCoreControlServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForMemoryCreated === "function");
assert(typeof waitForPolicyActive === "function");
assert(typeof waitForPolicyDeleted === "function");
assert(typeof waitForPolicyEngineActive === "function");
assert(typeof waitForPolicyEngineDeleted === "function");
assert(typeof waitForPolicyGenerationCompleted === "function");
assert(typeof waitUntilMemoryCreated === "function");
assert(typeof waitUntilPolicyActive === "function");
assert(typeof waitUntilPolicyDeleted === "function");
assert(typeof waitUntilPolicyEngineActive === "function");
assert(typeof waitUntilPolicyEngineDeleted === "function");
assert(typeof waitUntilPolicyGenerationCompleted === "function");
// paginators
assert(typeof paginateListAgentRuntimeEndpoints === "function");
assert(typeof paginateListAgentRuntimeVersions === "function");
assert(typeof paginateListAgentRuntimes === "function");
assert(typeof paginateListApiKeyCredentialProviders === "function");
assert(typeof paginateListBrowsers === "function");
assert(typeof paginateListCodeInterpreters === "function");
assert(typeof paginateListEvaluators === "function");
assert(typeof paginateListGatewayTargets === "function");
assert(typeof paginateListGateways === "function");
assert(typeof paginateListMemories === "function");
assert(typeof paginateListOauth2CredentialProviders === "function");
assert(typeof paginateListOnlineEvaluationConfigs === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyEngines === "function");
assert(typeof paginateListPolicyGenerationAssets === "function");
assert(typeof paginateListPolicyGenerations === "function");
assert(typeof paginateListWorkloadIdentities === "function");
console.log(`BedrockAgentCoreControl index test passed.`);
