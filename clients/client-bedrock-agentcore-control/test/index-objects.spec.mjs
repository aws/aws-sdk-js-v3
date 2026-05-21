import {
  A2aDescriptor$,
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  ActorTokenContentType,
  AddDatasetExamples$,
  AddDatasetExamplesCommand,
  AddDatasetExamplesRequest$,
  AddDatasetExamplesResponse$,
  AgentCardDefinition$,
  AgentManagedRuntimeType,
  AgentRuntime$,
  AgentRuntimeArtifact$,
  AgentRuntimeEndpoint$,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  AgentSkillsDescriptor$,
  ApiGatewayTargetConfiguration$,
  ApiGatewayToolConfiguration$,
  ApiGatewayToolFilter$,
  ApiGatewayToolOverride$,
  ApiKeyCredentialLocation,
  ApiKeyCredentialProviderItem$,
  ApiSchemaConfiguration$,
  ApprovalConfiguration$,
  AtlassianOauth2ProviderConfigInput$,
  AtlassianOauth2ProviderConfigOutput$,
  AuthorizationData$,
  AuthorizerConfiguration$,
  AuthorizerType,
  AuthorizingClaimMatchValueType$,
  BedrockAgentCoreControl,
  BedrockAgentCoreControlClient,
  BedrockAgentCoreControlServiceException,
  BedrockEvaluatorModelConfig$,
  BrowserEnterprisePolicy$,
  BrowserEnterprisePolicyType,
  BrowserNetworkConfiguration$,
  BrowserNetworkMode,
  BrowserProfileStatus,
  BrowserProfileSummary$,
  BrowserSigningConfigInput$,
  BrowserSigningConfigOutput$,
  BrowserStatus,
  BrowserSummary$,
  CategoricalScaleDefinition$,
  CedarPolicy$,
  Certificate$,
  CertificateLocation$,
  ClaimMatchOperatorType,
  ClaimMatchValueType$,
  ClientAuthenticationMethodType,
  CloudWatchLogsInputConfig$,
  CloudWatchOutputConfig$,
  Code$,
  CodeBasedEvaluatorConfig$,
  CodeConfiguration$,
  CodeInterpreterNetworkConfiguration$,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  CodeInterpreterSummary$,
  CoinbaseCdpConfigurationInput$,
  CoinbaseCdpConfigurationOutput$,
  ComponentConfiguration$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Condition$,
  ConfigurationBundleAction$,
  ConfigurationBundleReference$,
  ConfigurationBundleStatus,
  ConfigurationBundleSummary$,
  ConfigurationBundleVersionSummary$,
  ConflictException,
  ConflictException$,
  ConsolidationConfiguration$,
  ContainerConfiguration$,
  Content$,
  ContentConfiguration$,
  ContentLevel,
  ContentType,
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
  CreateBrowserProfile$,
  CreateBrowserProfileCommand,
  CreateBrowserProfileRequest$,
  CreateBrowserProfileResponse$,
  CreateBrowserRequest$,
  CreateBrowserResponse$,
  CreateCodeInterpreter$,
  CreateCodeInterpreterCommand,
  CreateCodeInterpreterRequest$,
  CreateCodeInterpreterResponse$,
  CreateConfigurationBundle$,
  CreateConfigurationBundleCommand,
  CreateConfigurationBundleRequest$,
  CreateConfigurationBundleResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateDatasetVersion$,
  CreateDatasetVersionCommand,
  CreateDatasetVersionRequest$,
  CreateDatasetVersionResponse$,
  CreateEvaluator$,
  CreateEvaluatorCommand,
  CreateEvaluatorRequest$,
  CreateEvaluatorResponse$,
  CreateGateway$,
  CreateGatewayCommand,
  CreateGatewayRequest$,
  CreateGatewayResponse$,
  CreateGatewayRule$,
  CreateGatewayRuleCommand,
  CreateGatewayRuleRequest$,
  CreateGatewayRuleResponse$,
  CreateGatewayTarget$,
  CreateGatewayTargetCommand,
  CreateGatewayTargetRequest$,
  CreateGatewayTargetResponse$,
  CreateHarness$,
  CreateHarnessCommand,
  CreateHarnessRequest$,
  CreateHarnessResponse$,
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
  CreatePaymentConnector$,
  CreatePaymentConnectorCommand,
  CreatePaymentConnectorRequest$,
  CreatePaymentConnectorResponse$,
  CreatePaymentCredentialProvider$,
  CreatePaymentCredentialProviderCommand,
  CreatePaymentCredentialProviderRequest$,
  CreatePaymentCredentialProviderResponse$,
  CreatePaymentManager$,
  CreatePaymentManagerCommand,
  CreatePaymentManagerRequest$,
  CreatePaymentManagerResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyEngine$,
  CreatePolicyEngineCommand,
  CreatePolicyEngineRequest$,
  CreatePolicyEngineResponse$,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  CreateRegistry$,
  CreateRegistryCommand,
  CreateRegistryRecord$,
  CreateRegistryRecordCommand,
  CreateRegistryRecordRequest$,
  CreateRegistryRecordResponse$,
  CreateRegistryRequest$,
  CreateRegistryResponse$,
  CreateWorkloadIdentity$,
  CreateWorkloadIdentityCommand,
  CreateWorkloadIdentityRequest$,
  CreateWorkloadIdentityResponse$,
  CredentialProvider$,
  CredentialProviderConfiguration$,
  CredentialProviderType,
  CredentialProviderVendorType,
  CredentialsProviderConfiguration$,
  CustomClaimValidationType$,
  CustomConfigurationInput$,
  CustomConsolidationConfiguration$,
  CustomConsolidationConfigurationInput$,
  CustomDescriptor$,
  CustomExtractionConfiguration$,
  CustomExtractionConfigurationInput$,
  CustomJWTAuthorizerConfiguration$,
  CustomMemoryStrategyInput$,
  CustomOauth2ProviderConfigInput$,
  CustomOauth2ProviderConfigOutput$,
  CustomReflectionConfiguration$,
  CustomReflectionConfigurationInput$,
  DatasetSchemaType,
  DatasetStatus,
  DatasetSummary$,
  DatasetVersionSummary$,
  DataSourceConfig$,
  DataSourceType$,
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
  DeleteBrowserProfile$,
  DeleteBrowserProfileCommand,
  DeleteBrowserProfileRequest$,
  DeleteBrowserProfileResponse$,
  DeleteBrowserRequest$,
  DeleteBrowserResponse$,
  DeleteCodeInterpreter$,
  DeleteCodeInterpreterCommand,
  DeleteCodeInterpreterRequest$,
  DeleteCodeInterpreterResponse$,
  DeleteConfigurationBundle$,
  DeleteConfigurationBundleCommand,
  DeleteConfigurationBundleRequest$,
  DeleteConfigurationBundleResponse$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetExamples$,
  DeleteDatasetExamplesCommand,
  DeleteDatasetExamplesRequest$,
  DeleteDatasetExamplesResponse$,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DeleteEvaluator$,
  DeleteEvaluatorCommand,
  DeleteEvaluatorRequest$,
  DeleteEvaluatorResponse$,
  DeleteGateway$,
  DeleteGatewayCommand,
  DeleteGatewayRequest$,
  DeleteGatewayResponse$,
  DeleteGatewayRule$,
  DeleteGatewayRuleCommand,
  DeleteGatewayRuleRequest$,
  DeleteGatewayRuleResponse$,
  DeleteGatewayTarget$,
  DeleteGatewayTargetCommand,
  DeleteGatewayTargetRequest$,
  DeleteGatewayTargetResponse$,
  DeleteHarness$,
  DeleteHarnessCommand,
  DeleteHarnessRequest$,
  DeleteHarnessResponse$,
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
  DeletePaymentConnector$,
  DeletePaymentConnectorCommand,
  DeletePaymentConnectorRequest$,
  DeletePaymentConnectorResponse$,
  DeletePaymentCredentialProvider$,
  DeletePaymentCredentialProviderCommand,
  DeletePaymentCredentialProviderRequest$,
  DeletePaymentCredentialProviderResponse$,
  DeletePaymentManager$,
  DeletePaymentManagerCommand,
  DeletePaymentManagerRequest$,
  DeletePaymentManagerResponse$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyEngine$,
  DeletePolicyEngineCommand,
  DeletePolicyEngineRequest$,
  DeletePolicyEngineResponse$,
  DeletePolicyRequest$,
  DeletePolicyResponse$,
  DeleteRegistry$,
  DeleteRegistryCommand,
  DeleteRegistryRecord$,
  DeleteRegistryRecordCommand,
  DeleteRegistryRecordRequest$,
  DeleteRegistryRecordResponse$,
  DeleteRegistryRequest$,
  DeleteRegistryResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteWorkloadIdentity$,
  DeleteWorkloadIdentityCommand,
  DeleteWorkloadIdentityRequest$,
  DeleteWorkloadIdentityResponse$,
  Descriptors$,
  DescriptorType,
  DraftStatus,
  EfsAccessPointConfiguration$,
  EncryptionFailure,
  EncryptionFailure$,
  EndpointIpAddressType,
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
  ExtractionConfig$,
  ExtractionConfiguration$,
  FilesystemConfiguration$,
  Filter$,
  FilterOperator,
  FilterValue$,
  Finding$,
  FindingType,
  FromUrlSynchronizationConfiguration$,
  GatewayApiKeyCredentialProvider$,
  GatewayInterceptionPoint,
  GatewayInterceptorConfiguration$,
  GatewayPolicyEngineConfiguration$,
  GatewayPolicyEngineMode,
  GatewayProtocolConfiguration$,
  GatewayProtocolType,
  GatewayRuleDetail$,
  GatewayRuleStatus,
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
  GetBrowserProfile$,
  GetBrowserProfileCommand,
  GetBrowserProfileRequest$,
  GetBrowserProfileResponse$,
  GetBrowserRequest$,
  GetBrowserResponse$,
  GetCodeInterpreter$,
  GetCodeInterpreterCommand,
  GetCodeInterpreterRequest$,
  GetCodeInterpreterResponse$,
  GetConfigurationBundle$,
  GetConfigurationBundleCommand,
  GetConfigurationBundleRequest$,
  GetConfigurationBundleResponse$,
  GetConfigurationBundleVersion$,
  GetConfigurationBundleVersionCommand,
  GetConfigurationBundleVersionRequest$,
  GetConfigurationBundleVersionResponse$,
  GetDataset$,
  GetDatasetCommand,
  GetDatasetRequest$,
  GetDatasetResponse$,
  GetEvaluator$,
  GetEvaluatorCommand,
  GetEvaluatorRequest$,
  GetEvaluatorResponse$,
  GetGateway$,
  GetGatewayCommand,
  GetGatewayRequest$,
  GetGatewayResponse$,
  GetGatewayRule$,
  GetGatewayRuleCommand,
  GetGatewayRuleRequest$,
  GetGatewayRuleResponse$,
  GetGatewayTarget$,
  GetGatewayTargetCommand,
  GetGatewayTargetRequest$,
  GetGatewayTargetResponse$,
  GetHarness$,
  GetHarnessCommand,
  GetHarnessRequest$,
  GetHarnessResponse$,
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
  GetPaymentConnector$,
  GetPaymentConnectorCommand,
  GetPaymentConnectorRequest$,
  GetPaymentConnectorResponse$,
  GetPaymentCredentialProvider$,
  GetPaymentCredentialProviderCommand,
  GetPaymentCredentialProviderRequest$,
  GetPaymentCredentialProviderResponse$,
  GetPaymentManager$,
  GetPaymentManagerCommand,
  GetPaymentManagerRequest$,
  GetPaymentManagerResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyEngine$,
  GetPolicyEngineCommand,
  GetPolicyEngineRequest$,
  GetPolicyEngineResponse$,
  GetPolicyEngineSummary$,
  GetPolicyEngineSummaryCommand,
  GetPolicyEngineSummaryRequest$,
  GetPolicyEngineSummaryResponse$,
  GetPolicyGeneration$,
  GetPolicyGenerationCommand,
  GetPolicyGenerationRequest$,
  GetPolicyGenerationResponse$,
  GetPolicyGenerationSummary$,
  GetPolicyGenerationSummaryCommand,
  GetPolicyGenerationSummaryRequest$,
  GetPolicyGenerationSummaryResponse$,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetPolicySummary$,
  GetPolicySummaryCommand,
  GetPolicySummaryRequest$,
  GetPolicySummaryResponse$,
  GetRegistry$,
  GetRegistryCommand,
  GetRegistryRecord$,
  GetRegistryRecordCommand,
  GetRegistryRecordRequest$,
  GetRegistryRecordResponse$,
  GetRegistryRequest$,
  GetRegistryResponse$,
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
  Harness$,
  HarnessAgentCoreBrowserConfig$,
  HarnessAgentCoreCodeInterpreterConfig$,
  HarnessAgentCoreGatewayConfig$,
  HarnessAgentCoreMemoryConfiguration$,
  HarnessAgentCoreMemoryRetrievalConfig$,
  HarnessAgentCoreRuntimeEnvironment$,
  HarnessAgentCoreRuntimeEnvironmentRequest$,
  HarnessBedrockModelConfig$,
  HarnessEnvironmentArtifact$,
  HarnessEnvironmentProvider$,
  HarnessEnvironmentProviderRequest$,
  HarnessGatewayOutboundAuth$,
  HarnessGeminiModelConfig$,
  HarnessInlineFunctionConfig$,
  HarnessMemoryConfiguration$,
  HarnessModelConfiguration$,
  HarnessOpenAiModelConfig$,
  HarnessRemoteMcpConfig$,
  HarnessSkill$,
  HarnessSlidingWindowConfiguration$,
  HarnessStatus,
  HarnessSummarizationConfiguration$,
  HarnessSummary$,
  HarnessSystemContentBlock$,
  HarnessTool$,
  HarnessToolConfiguration$,
  HarnessToolType,
  HarnessTruncationConfiguration$,
  HarnessTruncationStrategy,
  HarnessTruncationStrategyConfiguration$,
  HttpTargetConfiguration$,
  IamCredentialProvider$,
  IamPrincipal$,
  InboundTokenClaimValueType,
  IncludedData,
  IncludedOauth2ProviderConfigInput$,
  IncludedOauth2ProviderConfigOutput$,
  IndexedKey$,
  InferenceConfiguration$,
  InlineExamplesSource$,
  InterceptorConfiguration$,
  InterceptorInputConfiguration$,
  InternalServerException,
  InternalServerException$,
  InvocationConfiguration$,
  InvocationConfigurationInput$,
  KeyType,
  KinesisResource$,
  KmsConfiguration$,
  LambdaEvaluatorConfig$,
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
  ListBrowserProfiles$,
  ListBrowserProfilesCommand,
  ListBrowserProfilesRequest$,
  ListBrowserProfilesResponse$,
  ListBrowsers$,
  ListBrowsersCommand,
  ListBrowsersRequest$,
  ListBrowsersResponse$,
  ListCodeInterpreters$,
  ListCodeInterpretersCommand,
  ListCodeInterpretersRequest$,
  ListCodeInterpretersResponse$,
  ListConfigurationBundles$,
  ListConfigurationBundlesCommand,
  ListConfigurationBundlesRequest$,
  ListConfigurationBundlesResponse$,
  ListConfigurationBundleVersions$,
  ListConfigurationBundleVersionsCommand,
  ListConfigurationBundleVersionsRequest$,
  ListConfigurationBundleVersionsResponse$,
  ListDatasetExamples$,
  ListDatasetExamplesCommand,
  ListDatasetExamplesRequest$,
  ListDatasetExamplesResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListDatasetVersions$,
  ListDatasetVersionsCommand,
  ListDatasetVersionsRequest$,
  ListDatasetVersionsResponse$,
  ListEvaluators$,
  ListEvaluatorsCommand,
  ListEvaluatorsRequest$,
  ListEvaluatorsResponse$,
  ListGatewayRules$,
  ListGatewayRulesCommand,
  ListGatewayRulesRequest$,
  ListGatewayRulesResponse$,
  ListGateways$,
  ListGatewaysCommand,
  ListGatewaysRequest$,
  ListGatewaysResponse$,
  ListGatewayTargets$,
  ListGatewayTargetsCommand,
  ListGatewayTargetsRequest$,
  ListGatewayTargetsResponse$,
  ListHarnesses$,
  ListHarnessesCommand,
  ListHarnessesRequest$,
  ListHarnessesResponse$,
  ListingMode,
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
  ListPaymentConnectors$,
  ListPaymentConnectorsCommand,
  ListPaymentConnectorsRequest$,
  ListPaymentConnectorsResponse$,
  ListPaymentCredentialProviders$,
  ListPaymentCredentialProvidersCommand,
  ListPaymentCredentialProvidersRequest$,
  ListPaymentCredentialProvidersResponse$,
  ListPaymentManagers$,
  ListPaymentManagersCommand,
  ListPaymentManagersRequest$,
  ListPaymentManagersResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListPolicyEngines$,
  ListPolicyEnginesCommand,
  ListPolicyEnginesRequest$,
  ListPolicyEnginesResponse$,
  ListPolicyEngineSummaries$,
  ListPolicyEngineSummariesCommand,
  ListPolicyEngineSummariesRequest$,
  ListPolicyEngineSummariesResponse$,
  ListPolicyGenerationAssets$,
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationAssetsRequest$,
  ListPolicyGenerationAssetsResponse$,
  ListPolicyGenerations$,
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsRequest$,
  ListPolicyGenerationsResponse$,
  ListPolicyGenerationSummaries$,
  ListPolicyGenerationSummariesCommand,
  ListPolicyGenerationSummariesRequest$,
  ListPolicyGenerationSummariesResponse$,
  ListPolicySummaries$,
  ListPolicySummariesCommand,
  ListPolicySummariesRequest$,
  ListPolicySummariesResponse$,
  ListRegistries$,
  ListRegistriesCommand,
  ListRegistriesRequest$,
  ListRegistriesResponse$,
  ListRegistryRecords$,
  ListRegistryRecordsCommand,
  ListRegistryRecordsRequest$,
  ListRegistryRecordsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkloadIdentities$,
  ListWorkloadIdentitiesCommand,
  ListWorkloadIdentitiesRequest$,
  ListWorkloadIdentitiesResponse$,
  LlmAsAJudgeEvaluatorConfig$,
  LlmExtractionConfig$,
  ManagedResourceDetails$,
  ManagedVpcResource$,
  MatchPaths$,
  MatchPrincipalEntry$,
  MatchPrincipals$,
  McpDescriptor$,
  MCPGatewayConfiguration$,
  McpLambdaTargetConfiguration$,
  McpServerTargetConfiguration$,
  McpTargetConfiguration$,
  McpToolSchemaConfiguration$,
  Memory$,
  MemoryRecordSchema$,
  MemoryStatus,
  MemoryStrategy$,
  MemoryStrategyInput$,
  MemoryStrategyStatus,
  MemoryStrategyType,
  MemorySummary$,
  MemoryView,
  MessageBasedTrigger$,
  MessageBasedTriggerInput$,
  MetadataConfiguration$,
  MetadataSchemaEntry$,
  MetadataValueType,
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
  NumberValidation$,
  NumericalScaleDefinition$,
  OAuth2AuthorizationData$,
  Oauth2AuthorizationServerMetadata$,
  Oauth2CredentialProviderItem$,
  Oauth2Discovery$,
  Oauth2ProviderConfigInput$,
  Oauth2ProviderConfigOutput$,
  OAuthCredentialProvider$,
  OAuthGrantType,
  OnBehalfOfTokenExchangeConfigType$,
  OnBehalfOfTokenExchangeGrantTypeType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationConfigSummary$,
  OnlineEvaluationExecutionStatus,
  OutputConfig$,
  OverrideType,
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimes,
  paginateListAgentRuntimeVersions,
  paginateListApiKeyCredentialProviders,
  paginateListBrowserProfiles,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListConfigurationBundles,
  paginateListConfigurationBundleVersions,
  paginateListDatasetExamples,
  paginateListDatasets,
  paginateListDatasetVersions,
  paginateListEvaluators,
  paginateListGatewayRules,
  paginateListGateways,
  paginateListGatewayTargets,
  paginateListHarnesses,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListOnlineEvaluationConfigs,
  paginateListPaymentConnectors,
  paginateListPaymentCredentialProviders,
  paginateListPaymentManagers,
  paginateListPolicies,
  paginateListPolicyEngines,
  paginateListPolicyEngineSummaries,
  paginateListPolicyGenerationAssets,
  paginateListPolicyGenerations,
  paginateListPolicyGenerationSummaries,
  paginateListPolicySummaries,
  paginateListRegistries,
  paginateListRegistryRecords,
  paginateListWorkloadIdentities,
  PaymentConnectorStatus,
  PaymentConnectorSummary$,
  PaymentConnectorType,
  PaymentCredentialProviderConfiguration$,
  PaymentCredentialProviderItem$,
  PaymentCredentialProviderVendorType,
  PaymentManagerStatus,
  PaymentManagerSummary$,
  PaymentProviderConfigurationInput$,
  PaymentProviderConfigurationOutput$,
  PaymentsAuthorizerType,
  Policy$,
  PolicyDefinition$,
  PolicyEngine$,
  PolicyEngineStatus,
  PolicyEngineSummary$,
  PolicyGeneration$,
  PolicyGenerationAsset$,
  PolicyGenerationDetails$,
  PolicyGenerationStatus,
  PolicyGenerationSummary$,
  PolicyStatus,
  PolicySummary$,
  PolicyValidationMode,
  PrincipalMatchOperator,
  PrivateEndpoint$,
  PrivateEndpointOverride$,
  ProtocolConfiguration$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RatingScale$,
  RecordingConfig$,
  ReflectionConfiguration$,
  RegistryAuthorizerType,
  RegistryRecordCredentialProviderConfiguration$,
  RegistryRecordCredentialProviderType,
  RegistryRecordCredentialProviderUnion$,
  RegistryRecordIamCredentialProvider$,
  RegistryRecordOAuthCredentialProvider$,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryRecordSummary$,
  RegistryStatus,
  RegistrySummary$,
  RequestHeaderConfiguration$,
  Resource$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceLocation$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RestApiMethod,
  RouteToTargetAction$,
  Rule$,
  RuntimeMetadataConfiguration$,
  RuntimeTargetConfiguration$,
  S3Configuration$,
  S3FilesAccessPointConfiguration$,
  S3Location$,
  S3Source$,
  SalesforceOauth2ProviderConfigInput$,
  SalesforceOauth2ProviderConfigOutput$,
  SamplingConfig$,
  SchemaDefinition$,
  SchemaType,
  SearchType,
  Secret$,
  SecretsManagerLocation$,
  SelfManagedConfiguration$,
  SelfManagedConfigurationInput$,
  SelfManagedLatticeResource$,
  SemanticConsolidationOverride$,
  SemanticExtractionOverride$,
  SemanticMemoryStrategyInput$,
  SemanticOverrideConfigurationInput$,
  SemanticOverrideConsolidationConfigurationInput$,
  SemanticOverrideExtractionConfigurationInput$,
  ServerDefinition$,
  ServerProtocol,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionConfig$,
  SessionConfiguration$,
  SessionStorageConfiguration$,
  SetTokenVaultCMK$,
  SetTokenVaultCMKCommand,
  SetTokenVaultCMKRequest$,
  SetTokenVaultCMKResponse$,
  SkillDefinition$,
  SkillMdDefinition$,
  SlackOauth2ProviderConfigInput$,
  SlackOauth2ProviderConfigOutput$,
  StartPolicyGeneration$,
  StartPolicyGenerationCommand,
  StartPolicyGenerationRequest$,
  StartPolicyGenerationResponse$,
  StaticOverride$,
  StaticRoute$,
  Status,
  StrategyConfiguration$,
  StreamDeliveryResource$,
  StreamDeliveryResources$,
  StreamingConfiguration$,
  StringListValidation$,
  StringValidation$,
  StripePrivyConfigurationInput$,
  StripePrivyConfigurationOutput$,
  SubmitRegistryRecordForApproval$,
  SubmitRegistryRecordForApprovalCommand,
  SubmitRegistryRecordForApprovalRequest$,
  SubmitRegistryRecordForApprovalResponse$,
  SummaryConsolidationOverride$,
  SummaryMemoryStrategyInput$,
  SummaryOverrideConfigurationInput$,
  SummaryOverrideConsolidationConfigurationInput$,
  SynchronizationConfiguration$,
  SynchronizationType,
  SynchronizeGatewayTargets$,
  SynchronizeGatewayTargetsCommand,
  SynchronizeGatewayTargetsRequest$,
  SynchronizeGatewayTargetsResponse$,
  SystemManagedBlock$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetConfiguration$,
  TargetProtocolType,
  TargetStatus,
  TargetSummary$,
  TargetTrafficSplitEntry$,
  ThrottledException,
  ThrottledException$,
  ThrottlingException,
  ThrottlingException$,
  TimeBasedTrigger$,
  TimeBasedTriggerInput$,
  TokenBasedTrigger$,
  TokenBasedTriggerInput$,
  TokenExchangeGrantTypeConfigType$,
  ToolDefinition$,
  ToolSchema$,
  ToolsDefinition$,
  TrafficSplitEntry$,
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
  UpdateConfigurationBundle$,
  UpdateConfigurationBundleCommand,
  UpdateConfigurationBundleRequest$,
  UpdateConfigurationBundleResponse$,
  UpdatedA2aDescriptor$,
  UpdatedAgentSkillsDescriptor$,
  UpdatedAgentSkillsDescriptorFields$,
  UpdatedApprovalConfiguration$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetExamples$,
  UpdateDatasetExamplesCommand,
  UpdateDatasetExamplesRequest$,
  UpdateDatasetExamplesResponse$,
  UpdateDatasetRequest$,
  UpdateDatasetResponse$,
  UpdatedAuthorizerConfiguration$,
  UpdatedCustomDescriptor$,
  UpdatedDescription$,
  UpdatedDescriptors$,
  UpdatedDescriptorsUnion$,
  UpdatedHarnessEnvironmentArtifact$,
  UpdatedHarnessMemoryConfiguration$,
  UpdatedMcpDescriptor$,
  UpdatedMcpDescriptorFields$,
  UpdatedServerDefinition$,
  UpdatedSkillDefinition$,
  UpdatedSkillMdDefinition$,
  UpdatedSynchronizationConfiguration$,
  UpdatedSynchronizationType$,
  UpdatedToolsDefinition$,
  UpdateEvaluator$,
  UpdateEvaluatorCommand,
  UpdateEvaluatorRequest$,
  UpdateEvaluatorResponse$,
  UpdateGateway$,
  UpdateGatewayCommand,
  UpdateGatewayRequest$,
  UpdateGatewayResponse$,
  UpdateGatewayRule$,
  UpdateGatewayRuleCommand,
  UpdateGatewayRuleRequest$,
  UpdateGatewayRuleResponse$,
  UpdateGatewayTarget$,
  UpdateGatewayTargetCommand,
  UpdateGatewayTargetRequest$,
  UpdateGatewayTargetResponse$,
  UpdateHarness$,
  UpdateHarnessCommand,
  UpdateHarnessRequest$,
  UpdateHarnessResponse$,
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
  UpdatePaymentConnector$,
  UpdatePaymentConnectorCommand,
  UpdatePaymentConnectorRequest$,
  UpdatePaymentConnectorResponse$,
  UpdatePaymentCredentialProvider$,
  UpdatePaymentCredentialProviderCommand,
  UpdatePaymentCredentialProviderRequest$,
  UpdatePaymentCredentialProviderResponse$,
  UpdatePaymentManager$,
  UpdatePaymentManagerCommand,
  UpdatePaymentManagerRequest$,
  UpdatePaymentManagerResponse$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyEngine$,
  UpdatePolicyEngineCommand,
  UpdatePolicyEngineRequest$,
  UpdatePolicyEngineResponse$,
  UpdatePolicyRequest$,
  UpdatePolicyResponse$,
  UpdateRegistry$,
  UpdateRegistryCommand,
  UpdateRegistryRecord$,
  UpdateRegistryRecordCommand,
  UpdateRegistryRecordRequest$,
  UpdateRegistryRecordResponse$,
  UpdateRegistryRecordStatus$,
  UpdateRegistryRecordStatusCommand,
  UpdateRegistryRecordStatusRequest$,
  UpdateRegistryRecordStatusResponse$,
  UpdateRegistryRequest$,
  UpdateRegistryResponse$,
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
  Validation$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VersionCreatedBySource$,
  VersionFilter$,
  VersionLineageMetadata$,
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
  WeightedOverride$,
  WeightedRoute$,
  WorkloadIdentityDetails$,
  WorkloadIdentityType$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentCoreControlClient === "function");
assert(typeof BedrockAgentCoreControl === "function");
// commands
assert(typeof AddDatasetExamplesCommand === "function");
assert(typeof AddDatasetExamples$ === "object");
assert(typeof CreateAgentRuntimeCommand === "function");
assert(typeof CreateAgentRuntime$ === "object");
assert(typeof CreateAgentRuntimeEndpointCommand === "function");
assert(typeof CreateAgentRuntimeEndpoint$ === "object");
assert(typeof CreateApiKeyCredentialProviderCommand === "function");
assert(typeof CreateApiKeyCredentialProvider$ === "object");
assert(typeof CreateBrowserCommand === "function");
assert(typeof CreateBrowser$ === "object");
assert(typeof CreateBrowserProfileCommand === "function");
assert(typeof CreateBrowserProfile$ === "object");
assert(typeof CreateCodeInterpreterCommand === "function");
assert(typeof CreateCodeInterpreter$ === "object");
assert(typeof CreateConfigurationBundleCommand === "function");
assert(typeof CreateConfigurationBundle$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDatasetVersionCommand === "function");
assert(typeof CreateDatasetVersion$ === "object");
assert(typeof CreateEvaluatorCommand === "function");
assert(typeof CreateEvaluator$ === "object");
assert(typeof CreateGatewayCommand === "function");
assert(typeof CreateGateway$ === "object");
assert(typeof CreateGatewayRuleCommand === "function");
assert(typeof CreateGatewayRule$ === "object");
assert(typeof CreateGatewayTargetCommand === "function");
assert(typeof CreateGatewayTarget$ === "object");
assert(typeof CreateHarnessCommand === "function");
assert(typeof CreateHarness$ === "object");
assert(typeof CreateMemoryCommand === "function");
assert(typeof CreateMemory$ === "object");
assert(typeof CreateOauth2CredentialProviderCommand === "function");
assert(typeof CreateOauth2CredentialProvider$ === "object");
assert(typeof CreateOnlineEvaluationConfigCommand === "function");
assert(typeof CreateOnlineEvaluationConfig$ === "object");
assert(typeof CreatePaymentConnectorCommand === "function");
assert(typeof CreatePaymentConnector$ === "object");
assert(typeof CreatePaymentCredentialProviderCommand === "function");
assert(typeof CreatePaymentCredentialProvider$ === "object");
assert(typeof CreatePaymentManagerCommand === "function");
assert(typeof CreatePaymentManager$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicyEngineCommand === "function");
assert(typeof CreatePolicyEngine$ === "object");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateRegistry$ === "object");
assert(typeof CreateRegistryRecordCommand === "function");
assert(typeof CreateRegistryRecord$ === "object");
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
assert(typeof DeleteBrowserProfileCommand === "function");
assert(typeof DeleteBrowserProfile$ === "object");
assert(typeof DeleteCodeInterpreterCommand === "function");
assert(typeof DeleteCodeInterpreter$ === "object");
assert(typeof DeleteConfigurationBundleCommand === "function");
assert(typeof DeleteConfigurationBundle$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteDatasetExamplesCommand === "function");
assert(typeof DeleteDatasetExamples$ === "object");
assert(typeof DeleteEvaluatorCommand === "function");
assert(typeof DeleteEvaluator$ === "object");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGateway$ === "object");
assert(typeof DeleteGatewayRuleCommand === "function");
assert(typeof DeleteGatewayRule$ === "object");
assert(typeof DeleteGatewayTargetCommand === "function");
assert(typeof DeleteGatewayTarget$ === "object");
assert(typeof DeleteHarnessCommand === "function");
assert(typeof DeleteHarness$ === "object");
assert(typeof DeleteMemoryCommand === "function");
assert(typeof DeleteMemory$ === "object");
assert(typeof DeleteOauth2CredentialProviderCommand === "function");
assert(typeof DeleteOauth2CredentialProvider$ === "object");
assert(typeof DeleteOnlineEvaluationConfigCommand === "function");
assert(typeof DeleteOnlineEvaluationConfig$ === "object");
assert(typeof DeletePaymentConnectorCommand === "function");
assert(typeof DeletePaymentConnector$ === "object");
assert(typeof DeletePaymentCredentialProviderCommand === "function");
assert(typeof DeletePaymentCredentialProvider$ === "object");
assert(typeof DeletePaymentManagerCommand === "function");
assert(typeof DeletePaymentManager$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeletePolicyEngineCommand === "function");
assert(typeof DeletePolicyEngine$ === "object");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteRegistry$ === "object");
assert(typeof DeleteRegistryRecordCommand === "function");
assert(typeof DeleteRegistryRecord$ === "object");
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
assert(typeof GetBrowserProfileCommand === "function");
assert(typeof GetBrowserProfile$ === "object");
assert(typeof GetCodeInterpreterCommand === "function");
assert(typeof GetCodeInterpreter$ === "object");
assert(typeof GetConfigurationBundleCommand === "function");
assert(typeof GetConfigurationBundle$ === "object");
assert(typeof GetConfigurationBundleVersionCommand === "function");
assert(typeof GetConfigurationBundleVersion$ === "object");
assert(typeof GetDatasetCommand === "function");
assert(typeof GetDataset$ === "object");
assert(typeof GetEvaluatorCommand === "function");
assert(typeof GetEvaluator$ === "object");
assert(typeof GetGatewayCommand === "function");
assert(typeof GetGateway$ === "object");
assert(typeof GetGatewayRuleCommand === "function");
assert(typeof GetGatewayRule$ === "object");
assert(typeof GetGatewayTargetCommand === "function");
assert(typeof GetGatewayTarget$ === "object");
assert(typeof GetHarnessCommand === "function");
assert(typeof GetHarness$ === "object");
assert(typeof GetMemoryCommand === "function");
assert(typeof GetMemory$ === "object");
assert(typeof GetOauth2CredentialProviderCommand === "function");
assert(typeof GetOauth2CredentialProvider$ === "object");
assert(typeof GetOnlineEvaluationConfigCommand === "function");
assert(typeof GetOnlineEvaluationConfig$ === "object");
assert(typeof GetPaymentConnectorCommand === "function");
assert(typeof GetPaymentConnector$ === "object");
assert(typeof GetPaymentCredentialProviderCommand === "function");
assert(typeof GetPaymentCredentialProvider$ === "object");
assert(typeof GetPaymentManagerCommand === "function");
assert(typeof GetPaymentManager$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetPolicyEngineCommand === "function");
assert(typeof GetPolicyEngine$ === "object");
assert(typeof GetPolicyEngineSummaryCommand === "function");
assert(typeof GetPolicyEngineSummary$ === "object");
assert(typeof GetPolicyGenerationCommand === "function");
assert(typeof GetPolicyGeneration$ === "object");
assert(typeof GetPolicyGenerationSummaryCommand === "function");
assert(typeof GetPolicyGenerationSummary$ === "object");
assert(typeof GetPolicySummaryCommand === "function");
assert(typeof GetPolicySummary$ === "object");
assert(typeof GetRegistryCommand === "function");
assert(typeof GetRegistry$ === "object");
assert(typeof GetRegistryRecordCommand === "function");
assert(typeof GetRegistryRecord$ === "object");
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
assert(typeof ListBrowserProfilesCommand === "function");
assert(typeof ListBrowserProfiles$ === "object");
assert(typeof ListBrowsersCommand === "function");
assert(typeof ListBrowsers$ === "object");
assert(typeof ListCodeInterpretersCommand === "function");
assert(typeof ListCodeInterpreters$ === "object");
assert(typeof ListConfigurationBundlesCommand === "function");
assert(typeof ListConfigurationBundles$ === "object");
assert(typeof ListConfigurationBundleVersionsCommand === "function");
assert(typeof ListConfigurationBundleVersions$ === "object");
assert(typeof ListDatasetExamplesCommand === "function");
assert(typeof ListDatasetExamples$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListDatasetVersionsCommand === "function");
assert(typeof ListDatasetVersions$ === "object");
assert(typeof ListEvaluatorsCommand === "function");
assert(typeof ListEvaluators$ === "object");
assert(typeof ListGatewayRulesCommand === "function");
assert(typeof ListGatewayRules$ === "object");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGateways$ === "object");
assert(typeof ListGatewayTargetsCommand === "function");
assert(typeof ListGatewayTargets$ === "object");
assert(typeof ListHarnessesCommand === "function");
assert(typeof ListHarnesses$ === "object");
assert(typeof ListMemoriesCommand === "function");
assert(typeof ListMemories$ === "object");
assert(typeof ListOauth2CredentialProvidersCommand === "function");
assert(typeof ListOauth2CredentialProviders$ === "object");
assert(typeof ListOnlineEvaluationConfigsCommand === "function");
assert(typeof ListOnlineEvaluationConfigs$ === "object");
assert(typeof ListPaymentConnectorsCommand === "function");
assert(typeof ListPaymentConnectors$ === "object");
assert(typeof ListPaymentCredentialProvidersCommand === "function");
assert(typeof ListPaymentCredentialProviders$ === "object");
assert(typeof ListPaymentManagersCommand === "function");
assert(typeof ListPaymentManagers$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicyEnginesCommand === "function");
assert(typeof ListPolicyEngines$ === "object");
assert(typeof ListPolicyEngineSummariesCommand === "function");
assert(typeof ListPolicyEngineSummaries$ === "object");
assert(typeof ListPolicyGenerationAssetsCommand === "function");
assert(typeof ListPolicyGenerationAssets$ === "object");
assert(typeof ListPolicyGenerationsCommand === "function");
assert(typeof ListPolicyGenerations$ === "object");
assert(typeof ListPolicyGenerationSummariesCommand === "function");
assert(typeof ListPolicyGenerationSummaries$ === "object");
assert(typeof ListPolicySummariesCommand === "function");
assert(typeof ListPolicySummaries$ === "object");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListRegistries$ === "object");
assert(typeof ListRegistryRecordsCommand === "function");
assert(typeof ListRegistryRecords$ === "object");
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
assert(typeof SubmitRegistryRecordForApprovalCommand === "function");
assert(typeof SubmitRegistryRecordForApproval$ === "object");
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
assert(typeof UpdateConfigurationBundleCommand === "function");
assert(typeof UpdateConfigurationBundle$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdateDatasetExamplesCommand === "function");
assert(typeof UpdateDatasetExamples$ === "object");
assert(typeof UpdateEvaluatorCommand === "function");
assert(typeof UpdateEvaluator$ === "object");
assert(typeof UpdateGatewayCommand === "function");
assert(typeof UpdateGateway$ === "object");
assert(typeof UpdateGatewayRuleCommand === "function");
assert(typeof UpdateGatewayRule$ === "object");
assert(typeof UpdateGatewayTargetCommand === "function");
assert(typeof UpdateGatewayTarget$ === "object");
assert(typeof UpdateHarnessCommand === "function");
assert(typeof UpdateHarness$ === "object");
assert(typeof UpdateMemoryCommand === "function");
assert(typeof UpdateMemory$ === "object");
assert(typeof UpdateOauth2CredentialProviderCommand === "function");
assert(typeof UpdateOauth2CredentialProvider$ === "object");
assert(typeof UpdateOnlineEvaluationConfigCommand === "function");
assert(typeof UpdateOnlineEvaluationConfig$ === "object");
assert(typeof UpdatePaymentConnectorCommand === "function");
assert(typeof UpdatePaymentConnector$ === "object");
assert(typeof UpdatePaymentCredentialProviderCommand === "function");
assert(typeof UpdatePaymentCredentialProvider$ === "object");
assert(typeof UpdatePaymentManagerCommand === "function");
assert(typeof UpdatePaymentManager$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdatePolicyEngineCommand === "function");
assert(typeof UpdatePolicyEngine$ === "object");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateRegistry$ === "object");
assert(typeof UpdateRegistryRecordCommand === "function");
assert(typeof UpdateRegistryRecord$ === "object");
assert(typeof UpdateRegistryRecordStatusCommand === "function");
assert(typeof UpdateRegistryRecordStatus$ === "object");
assert(typeof UpdateWorkloadIdentityCommand === "function");
assert(typeof UpdateWorkloadIdentity$ === "object");
// structural schemas
assert(typeof A2aDescriptor$ === "object");
assert(typeof Action$ === "object");
assert(typeof AddDatasetExamplesRequest$ === "object");
assert(typeof AddDatasetExamplesResponse$ === "object");
assert(typeof AgentCardDefinition$ === "object");
assert(typeof AgentRuntime$ === "object");
assert(typeof AgentRuntimeArtifact$ === "object");
assert(typeof AgentRuntimeEndpoint$ === "object");
assert(typeof AgentSkillsDescriptor$ === "object");
assert(typeof ApiGatewayTargetConfiguration$ === "object");
assert(typeof ApiGatewayToolConfiguration$ === "object");
assert(typeof ApiGatewayToolFilter$ === "object");
assert(typeof ApiGatewayToolOverride$ === "object");
assert(typeof ApiKeyCredentialProviderItem$ === "object");
assert(typeof ApiSchemaConfiguration$ === "object");
assert(typeof ApprovalConfiguration$ === "object");
assert(typeof AtlassianOauth2ProviderConfigInput$ === "object");
assert(typeof AtlassianOauth2ProviderConfigOutput$ === "object");
assert(typeof AuthorizationData$ === "object");
assert(typeof AuthorizerConfiguration$ === "object");
assert(typeof AuthorizingClaimMatchValueType$ === "object");
assert(typeof BedrockEvaluatorModelConfig$ === "object");
assert(typeof BrowserEnterprisePolicy$ === "object");
assert(typeof BrowserNetworkConfiguration$ === "object");
assert(typeof BrowserProfileSummary$ === "object");
assert(typeof BrowserSigningConfigInput$ === "object");
assert(typeof BrowserSigningConfigOutput$ === "object");
assert(typeof BrowserSummary$ === "object");
assert(typeof CategoricalScaleDefinition$ === "object");
assert(typeof CedarPolicy$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateLocation$ === "object");
assert(typeof ClaimMatchValueType$ === "object");
assert(typeof CloudWatchLogsInputConfig$ === "object");
assert(typeof CloudWatchOutputConfig$ === "object");
assert(typeof Code$ === "object");
assert(typeof CodeBasedEvaluatorConfig$ === "object");
assert(typeof CodeConfiguration$ === "object");
assert(typeof CodeInterpreterNetworkConfiguration$ === "object");
assert(typeof CodeInterpreterSummary$ === "object");
assert(typeof CoinbaseCdpConfigurationInput$ === "object");
assert(typeof CoinbaseCdpConfigurationOutput$ === "object");
assert(typeof ComponentConfiguration$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConfigurationBundleAction$ === "object");
assert(typeof ConfigurationBundleReference$ === "object");
assert(typeof ConfigurationBundleSummary$ === "object");
assert(typeof ConfigurationBundleVersionSummary$ === "object");
assert(typeof ConsolidationConfiguration$ === "object");
assert(typeof ContainerConfiguration$ === "object");
assert(typeof Content$ === "object");
assert(typeof ContentConfiguration$ === "object");
assert(typeof CreateAgentRuntimeEndpointRequest$ === "object");
assert(typeof CreateAgentRuntimeEndpointResponse$ === "object");
assert(typeof CreateAgentRuntimeRequest$ === "object");
assert(typeof CreateAgentRuntimeResponse$ === "object");
assert(typeof CreateApiKeyCredentialProviderRequest$ === "object");
assert(typeof CreateApiKeyCredentialProviderResponse$ === "object");
assert(typeof CreateBrowserProfileRequest$ === "object");
assert(typeof CreateBrowserProfileResponse$ === "object");
assert(typeof CreateBrowserRequest$ === "object");
assert(typeof CreateBrowserResponse$ === "object");
assert(typeof CreateCodeInterpreterRequest$ === "object");
assert(typeof CreateCodeInterpreterResponse$ === "object");
assert(typeof CreateConfigurationBundleRequest$ === "object");
assert(typeof CreateConfigurationBundleResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateDatasetVersionRequest$ === "object");
assert(typeof CreateDatasetVersionResponse$ === "object");
assert(typeof CreateEvaluatorRequest$ === "object");
assert(typeof CreateEvaluatorResponse$ === "object");
assert(typeof CreateGatewayRequest$ === "object");
assert(typeof CreateGatewayResponse$ === "object");
assert(typeof CreateGatewayRuleRequest$ === "object");
assert(typeof CreateGatewayRuleResponse$ === "object");
assert(typeof CreateGatewayTargetRequest$ === "object");
assert(typeof CreateGatewayTargetResponse$ === "object");
assert(typeof CreateHarnessRequest$ === "object");
assert(typeof CreateHarnessResponse$ === "object");
assert(typeof CreateMemoryInput$ === "object");
assert(typeof CreateMemoryOutput$ === "object");
assert(typeof CreateOauth2CredentialProviderRequest$ === "object");
assert(typeof CreateOauth2CredentialProviderResponse$ === "object");
assert(typeof CreateOnlineEvaluationConfigRequest$ === "object");
assert(typeof CreateOnlineEvaluationConfigResponse$ === "object");
assert(typeof CreatePaymentConnectorRequest$ === "object");
assert(typeof CreatePaymentConnectorResponse$ === "object");
assert(typeof CreatePaymentCredentialProviderRequest$ === "object");
assert(typeof CreatePaymentCredentialProviderResponse$ === "object");
assert(typeof CreatePaymentManagerRequest$ === "object");
assert(typeof CreatePaymentManagerResponse$ === "object");
assert(typeof CreatePolicyEngineRequest$ === "object");
assert(typeof CreatePolicyEngineResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof CreateRegistryRecordRequest$ === "object");
assert(typeof CreateRegistryRecordResponse$ === "object");
assert(typeof CreateRegistryRequest$ === "object");
assert(typeof CreateRegistryResponse$ === "object");
assert(typeof CreateWorkloadIdentityRequest$ === "object");
assert(typeof CreateWorkloadIdentityResponse$ === "object");
assert(typeof CredentialProvider$ === "object");
assert(typeof CredentialProviderConfiguration$ === "object");
assert(typeof CredentialsProviderConfiguration$ === "object");
assert(typeof CustomClaimValidationType$ === "object");
assert(typeof CustomConfigurationInput$ === "object");
assert(typeof CustomConsolidationConfiguration$ === "object");
assert(typeof CustomConsolidationConfigurationInput$ === "object");
assert(typeof CustomDescriptor$ === "object");
assert(typeof CustomExtractionConfiguration$ === "object");
assert(typeof CustomExtractionConfigurationInput$ === "object");
assert(typeof CustomJWTAuthorizerConfiguration$ === "object");
assert(typeof CustomMemoryStrategyInput$ === "object");
assert(typeof CustomOauth2ProviderConfigInput$ === "object");
assert(typeof CustomOauth2ProviderConfigOutput$ === "object");
assert(typeof CustomReflectionConfiguration$ === "object");
assert(typeof CustomReflectionConfigurationInput$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DatasetVersionSummary$ === "object");
assert(typeof DataSourceConfig$ === "object");
assert(typeof DataSourceType$ === "object");
assert(typeof DeleteAgentRuntimeEndpointRequest$ === "object");
assert(typeof DeleteAgentRuntimeEndpointResponse$ === "object");
assert(typeof DeleteAgentRuntimeRequest$ === "object");
assert(typeof DeleteAgentRuntimeResponse$ === "object");
assert(typeof DeleteApiKeyCredentialProviderRequest$ === "object");
assert(typeof DeleteApiKeyCredentialProviderResponse$ === "object");
assert(typeof DeleteBrowserProfileRequest$ === "object");
assert(typeof DeleteBrowserProfileResponse$ === "object");
assert(typeof DeleteBrowserRequest$ === "object");
assert(typeof DeleteBrowserResponse$ === "object");
assert(typeof DeleteCodeInterpreterRequest$ === "object");
assert(typeof DeleteCodeInterpreterResponse$ === "object");
assert(typeof DeleteConfigurationBundleRequest$ === "object");
assert(typeof DeleteConfigurationBundleResponse$ === "object");
assert(typeof DeleteDatasetExamplesRequest$ === "object");
assert(typeof DeleteDatasetExamplesResponse$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DeleteEvaluatorRequest$ === "object");
assert(typeof DeleteEvaluatorResponse$ === "object");
assert(typeof DeleteGatewayRequest$ === "object");
assert(typeof DeleteGatewayResponse$ === "object");
assert(typeof DeleteGatewayRuleRequest$ === "object");
assert(typeof DeleteGatewayRuleResponse$ === "object");
assert(typeof DeleteGatewayTargetRequest$ === "object");
assert(typeof DeleteGatewayTargetResponse$ === "object");
assert(typeof DeleteHarnessRequest$ === "object");
assert(typeof DeleteHarnessResponse$ === "object");
assert(typeof DeleteMemoryInput$ === "object");
assert(typeof DeleteMemoryOutput$ === "object");
assert(typeof DeleteMemoryStrategyInput$ === "object");
assert(typeof DeleteOauth2CredentialProviderRequest$ === "object");
assert(typeof DeleteOauth2CredentialProviderResponse$ === "object");
assert(typeof DeleteOnlineEvaluationConfigRequest$ === "object");
assert(typeof DeleteOnlineEvaluationConfigResponse$ === "object");
assert(typeof DeletePaymentConnectorRequest$ === "object");
assert(typeof DeletePaymentConnectorResponse$ === "object");
assert(typeof DeletePaymentCredentialProviderRequest$ === "object");
assert(typeof DeletePaymentCredentialProviderResponse$ === "object");
assert(typeof DeletePaymentManagerRequest$ === "object");
assert(typeof DeletePaymentManagerResponse$ === "object");
assert(typeof DeletePolicyEngineRequest$ === "object");
assert(typeof DeletePolicyEngineResponse$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeletePolicyResponse$ === "object");
assert(typeof DeleteRegistryRecordRequest$ === "object");
assert(typeof DeleteRegistryRecordResponse$ === "object");
assert(typeof DeleteRegistryRequest$ === "object");
assert(typeof DeleteRegistryResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteWorkloadIdentityRequest$ === "object");
assert(typeof DeleteWorkloadIdentityResponse$ === "object");
assert(typeof Descriptors$ === "object");
assert(typeof EfsAccessPointConfiguration$ === "object");
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
assert(typeof ExtractionConfig$ === "object");
assert(typeof ExtractionConfiguration$ === "object");
assert(typeof FilesystemConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterValue$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FromUrlSynchronizationConfiguration$ === "object");
assert(typeof GatewayApiKeyCredentialProvider$ === "object");
assert(typeof GatewayInterceptorConfiguration$ === "object");
assert(typeof GatewayPolicyEngineConfiguration$ === "object");
assert(typeof GatewayProtocolConfiguration$ === "object");
assert(typeof GatewayRuleDetail$ === "object");
assert(typeof GatewaySummary$ === "object");
assert(typeof GatewayTarget$ === "object");
assert(typeof GetAgentRuntimeEndpointRequest$ === "object");
assert(typeof GetAgentRuntimeEndpointResponse$ === "object");
assert(typeof GetAgentRuntimeRequest$ === "object");
assert(typeof GetAgentRuntimeResponse$ === "object");
assert(typeof GetApiKeyCredentialProviderRequest$ === "object");
assert(typeof GetApiKeyCredentialProviderResponse$ === "object");
assert(typeof GetBrowserProfileRequest$ === "object");
assert(typeof GetBrowserProfileResponse$ === "object");
assert(typeof GetBrowserRequest$ === "object");
assert(typeof GetBrowserResponse$ === "object");
assert(typeof GetCodeInterpreterRequest$ === "object");
assert(typeof GetCodeInterpreterResponse$ === "object");
assert(typeof GetConfigurationBundleRequest$ === "object");
assert(typeof GetConfigurationBundleResponse$ === "object");
assert(typeof GetConfigurationBundleVersionRequest$ === "object");
assert(typeof GetConfigurationBundleVersionResponse$ === "object");
assert(typeof GetDatasetRequest$ === "object");
assert(typeof GetDatasetResponse$ === "object");
assert(typeof GetEvaluatorRequest$ === "object");
assert(typeof GetEvaluatorResponse$ === "object");
assert(typeof GetGatewayRequest$ === "object");
assert(typeof GetGatewayResponse$ === "object");
assert(typeof GetGatewayRuleRequest$ === "object");
assert(typeof GetGatewayRuleResponse$ === "object");
assert(typeof GetGatewayTargetRequest$ === "object");
assert(typeof GetGatewayTargetResponse$ === "object");
assert(typeof GetHarnessRequest$ === "object");
assert(typeof GetHarnessResponse$ === "object");
assert(typeof GetMemoryInput$ === "object");
assert(typeof GetMemoryOutput$ === "object");
assert(typeof GetOauth2CredentialProviderRequest$ === "object");
assert(typeof GetOauth2CredentialProviderResponse$ === "object");
assert(typeof GetOnlineEvaluationConfigRequest$ === "object");
assert(typeof GetOnlineEvaluationConfigResponse$ === "object");
assert(typeof GetPaymentConnectorRequest$ === "object");
assert(typeof GetPaymentConnectorResponse$ === "object");
assert(typeof GetPaymentCredentialProviderRequest$ === "object");
assert(typeof GetPaymentCredentialProviderResponse$ === "object");
assert(typeof GetPaymentManagerRequest$ === "object");
assert(typeof GetPaymentManagerResponse$ === "object");
assert(typeof GetPolicyEngineRequest$ === "object");
assert(typeof GetPolicyEngineResponse$ === "object");
assert(typeof GetPolicyEngineSummaryRequest$ === "object");
assert(typeof GetPolicyEngineSummaryResponse$ === "object");
assert(typeof GetPolicyGenerationRequest$ === "object");
assert(typeof GetPolicyGenerationResponse$ === "object");
assert(typeof GetPolicyGenerationSummaryRequest$ === "object");
assert(typeof GetPolicyGenerationSummaryResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetPolicySummaryRequest$ === "object");
assert(typeof GetPolicySummaryResponse$ === "object");
assert(typeof GetRegistryRecordRequest$ === "object");
assert(typeof GetRegistryRecordResponse$ === "object");
assert(typeof GetRegistryRequest$ === "object");
assert(typeof GetRegistryResponse$ === "object");
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
assert(typeof Harness$ === "object");
assert(typeof HarnessAgentCoreBrowserConfig$ === "object");
assert(typeof HarnessAgentCoreCodeInterpreterConfig$ === "object");
assert(typeof HarnessAgentCoreGatewayConfig$ === "object");
assert(typeof HarnessAgentCoreMemoryConfiguration$ === "object");
assert(typeof HarnessAgentCoreMemoryRetrievalConfig$ === "object");
assert(typeof HarnessAgentCoreRuntimeEnvironment$ === "object");
assert(typeof HarnessAgentCoreRuntimeEnvironmentRequest$ === "object");
assert(typeof HarnessBedrockModelConfig$ === "object");
assert(typeof HarnessEnvironmentArtifact$ === "object");
assert(typeof HarnessEnvironmentProvider$ === "object");
assert(typeof HarnessEnvironmentProviderRequest$ === "object");
assert(typeof HarnessGatewayOutboundAuth$ === "object");
assert(typeof HarnessGeminiModelConfig$ === "object");
assert(typeof HarnessInlineFunctionConfig$ === "object");
assert(typeof HarnessMemoryConfiguration$ === "object");
assert(typeof HarnessModelConfiguration$ === "object");
assert(typeof HarnessOpenAiModelConfig$ === "object");
assert(typeof HarnessRemoteMcpConfig$ === "object");
assert(typeof HarnessSkill$ === "object");
assert(typeof HarnessSlidingWindowConfiguration$ === "object");
assert(typeof HarnessSummarizationConfiguration$ === "object");
assert(typeof HarnessSummary$ === "object");
assert(typeof HarnessSystemContentBlock$ === "object");
assert(typeof HarnessTool$ === "object");
assert(typeof HarnessToolConfiguration$ === "object");
assert(typeof HarnessTruncationConfiguration$ === "object");
assert(typeof HarnessTruncationStrategyConfiguration$ === "object");
assert(typeof HttpTargetConfiguration$ === "object");
assert(typeof IamCredentialProvider$ === "object");
assert(typeof IamPrincipal$ === "object");
assert(typeof IncludedOauth2ProviderConfigInput$ === "object");
assert(typeof IncludedOauth2ProviderConfigOutput$ === "object");
assert(typeof IndexedKey$ === "object");
assert(typeof InferenceConfiguration$ === "object");
assert(typeof InlineExamplesSource$ === "object");
assert(typeof InterceptorConfiguration$ === "object");
assert(typeof InterceptorInputConfiguration$ === "object");
assert(typeof InvocationConfiguration$ === "object");
assert(typeof InvocationConfigurationInput$ === "object");
assert(typeof KinesisResource$ === "object");
assert(typeof KmsConfiguration$ === "object");
assert(typeof LambdaEvaluatorConfig$ === "object");
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
assert(typeof ListBrowserProfilesRequest$ === "object");
assert(typeof ListBrowserProfilesResponse$ === "object");
assert(typeof ListBrowsersRequest$ === "object");
assert(typeof ListBrowsersResponse$ === "object");
assert(typeof ListCodeInterpretersRequest$ === "object");
assert(typeof ListCodeInterpretersResponse$ === "object");
assert(typeof ListConfigurationBundlesRequest$ === "object");
assert(typeof ListConfigurationBundlesResponse$ === "object");
assert(typeof ListConfigurationBundleVersionsRequest$ === "object");
assert(typeof ListConfigurationBundleVersionsResponse$ === "object");
assert(typeof ListDatasetExamplesRequest$ === "object");
assert(typeof ListDatasetExamplesResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListDatasetVersionsRequest$ === "object");
assert(typeof ListDatasetVersionsResponse$ === "object");
assert(typeof ListEvaluatorsRequest$ === "object");
assert(typeof ListEvaluatorsResponse$ === "object");
assert(typeof ListGatewayRulesRequest$ === "object");
assert(typeof ListGatewayRulesResponse$ === "object");
assert(typeof ListGatewaysRequest$ === "object");
assert(typeof ListGatewaysResponse$ === "object");
assert(typeof ListGatewayTargetsRequest$ === "object");
assert(typeof ListGatewayTargetsResponse$ === "object");
assert(typeof ListHarnessesRequest$ === "object");
assert(typeof ListHarnessesResponse$ === "object");
assert(typeof ListMemoriesInput$ === "object");
assert(typeof ListMemoriesOutput$ === "object");
assert(typeof ListOauth2CredentialProvidersRequest$ === "object");
assert(typeof ListOauth2CredentialProvidersResponse$ === "object");
assert(typeof ListOnlineEvaluationConfigsRequest$ === "object");
assert(typeof ListOnlineEvaluationConfigsResponse$ === "object");
assert(typeof ListPaymentConnectorsRequest$ === "object");
assert(typeof ListPaymentConnectorsResponse$ === "object");
assert(typeof ListPaymentCredentialProvidersRequest$ === "object");
assert(typeof ListPaymentCredentialProvidersResponse$ === "object");
assert(typeof ListPaymentManagersRequest$ === "object");
assert(typeof ListPaymentManagersResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListPolicyEnginesRequest$ === "object");
assert(typeof ListPolicyEnginesResponse$ === "object");
assert(typeof ListPolicyEngineSummariesRequest$ === "object");
assert(typeof ListPolicyEngineSummariesResponse$ === "object");
assert(typeof ListPolicyGenerationAssetsRequest$ === "object");
assert(typeof ListPolicyGenerationAssetsResponse$ === "object");
assert(typeof ListPolicyGenerationsRequest$ === "object");
assert(typeof ListPolicyGenerationsResponse$ === "object");
assert(typeof ListPolicyGenerationSummariesRequest$ === "object");
assert(typeof ListPolicyGenerationSummariesResponse$ === "object");
assert(typeof ListPolicySummariesRequest$ === "object");
assert(typeof ListPolicySummariesResponse$ === "object");
assert(typeof ListRegistriesRequest$ === "object");
assert(typeof ListRegistriesResponse$ === "object");
assert(typeof ListRegistryRecordsRequest$ === "object");
assert(typeof ListRegistryRecordsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkloadIdentitiesRequest$ === "object");
assert(typeof ListWorkloadIdentitiesResponse$ === "object");
assert(typeof LlmAsAJudgeEvaluatorConfig$ === "object");
assert(typeof LlmExtractionConfig$ === "object");
assert(typeof ManagedResourceDetails$ === "object");
assert(typeof ManagedVpcResource$ === "object");
assert(typeof MatchPaths$ === "object");
assert(typeof MatchPrincipalEntry$ === "object");
assert(typeof MatchPrincipals$ === "object");
assert(typeof McpDescriptor$ === "object");
assert(typeof MCPGatewayConfiguration$ === "object");
assert(typeof McpLambdaTargetConfiguration$ === "object");
assert(typeof McpServerTargetConfiguration$ === "object");
assert(typeof McpTargetConfiguration$ === "object");
assert(typeof McpToolSchemaConfiguration$ === "object");
assert(typeof Memory$ === "object");
assert(typeof MemoryRecordSchema$ === "object");
assert(typeof MemoryStrategy$ === "object");
assert(typeof MemoryStrategyInput$ === "object");
assert(typeof MemorySummary$ === "object");
assert(typeof MessageBasedTrigger$ === "object");
assert(typeof MessageBasedTriggerInput$ === "object");
assert(typeof MetadataConfiguration$ === "object");
assert(typeof MetadataSchemaEntry$ === "object");
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
assert(typeof NumberValidation$ === "object");
assert(typeof NumericalScaleDefinition$ === "object");
assert(typeof OAuth2AuthorizationData$ === "object");
assert(typeof Oauth2AuthorizationServerMetadata$ === "object");
assert(typeof Oauth2CredentialProviderItem$ === "object");
assert(typeof Oauth2Discovery$ === "object");
assert(typeof Oauth2ProviderConfigInput$ === "object");
assert(typeof Oauth2ProviderConfigOutput$ === "object");
assert(typeof OAuthCredentialProvider$ === "object");
assert(typeof OnBehalfOfTokenExchangeConfigType$ === "object");
assert(typeof OnlineEvaluationConfigSummary$ === "object");
assert(typeof OutputConfig$ === "object");
assert(typeof PaymentConnectorSummary$ === "object");
assert(typeof PaymentCredentialProviderConfiguration$ === "object");
assert(typeof PaymentCredentialProviderItem$ === "object");
assert(typeof PaymentManagerSummary$ === "object");
assert(typeof PaymentProviderConfigurationInput$ === "object");
assert(typeof PaymentProviderConfigurationOutput$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyDefinition$ === "object");
assert(typeof PolicyEngine$ === "object");
assert(typeof PolicyEngineSummary$ === "object");
assert(typeof PolicyGeneration$ === "object");
assert(typeof PolicyGenerationAsset$ === "object");
assert(typeof PolicyGenerationDetails$ === "object");
assert(typeof PolicyGenerationSummary$ === "object");
assert(typeof PolicySummary$ === "object");
assert(typeof PrivateEndpoint$ === "object");
assert(typeof PrivateEndpointOverride$ === "object");
assert(typeof ProtocolConfiguration$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RatingScale$ === "object");
assert(typeof RecordingConfig$ === "object");
assert(typeof ReflectionConfiguration$ === "object");
assert(typeof RegistryRecordCredentialProviderConfiguration$ === "object");
assert(typeof RegistryRecordCredentialProviderUnion$ === "object");
assert(typeof RegistryRecordIamCredentialProvider$ === "object");
assert(typeof RegistryRecordOAuthCredentialProvider$ === "object");
assert(typeof RegistryRecordSummary$ === "object");
assert(typeof RegistrySummary$ === "object");
assert(typeof RequestHeaderConfiguration$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceLocation$ === "object");
assert(typeof RouteToTargetAction$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuntimeMetadataConfiguration$ === "object");
assert(typeof RuntimeTargetConfiguration$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3FilesAccessPointConfiguration$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3Source$ === "object");
assert(typeof SalesforceOauth2ProviderConfigInput$ === "object");
assert(typeof SalesforceOauth2ProviderConfigOutput$ === "object");
assert(typeof SamplingConfig$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof Secret$ === "object");
assert(typeof SecretsManagerLocation$ === "object");
assert(typeof SelfManagedConfiguration$ === "object");
assert(typeof SelfManagedConfigurationInput$ === "object");
assert(typeof SelfManagedLatticeResource$ === "object");
assert(typeof SemanticConsolidationOverride$ === "object");
assert(typeof SemanticExtractionOverride$ === "object");
assert(typeof SemanticMemoryStrategyInput$ === "object");
assert(typeof SemanticOverrideConfigurationInput$ === "object");
assert(typeof SemanticOverrideConsolidationConfigurationInput$ === "object");
assert(typeof SemanticOverrideExtractionConfigurationInput$ === "object");
assert(typeof ServerDefinition$ === "object");
assert(typeof SessionConfig$ === "object");
assert(typeof SessionConfiguration$ === "object");
assert(typeof SessionStorageConfiguration$ === "object");
assert(typeof SetTokenVaultCMKRequest$ === "object");
assert(typeof SetTokenVaultCMKResponse$ === "object");
assert(typeof SkillDefinition$ === "object");
assert(typeof SkillMdDefinition$ === "object");
assert(typeof SlackOauth2ProviderConfigInput$ === "object");
assert(typeof SlackOauth2ProviderConfigOutput$ === "object");
assert(typeof StartPolicyGenerationRequest$ === "object");
assert(typeof StartPolicyGenerationResponse$ === "object");
assert(typeof StaticOverride$ === "object");
assert(typeof StaticRoute$ === "object");
assert(typeof StrategyConfiguration$ === "object");
assert(typeof StreamDeliveryResource$ === "object");
assert(typeof StreamDeliveryResources$ === "object");
assert(typeof StreamingConfiguration$ === "object");
assert(typeof StringListValidation$ === "object");
assert(typeof StringValidation$ === "object");
assert(typeof StripePrivyConfigurationInput$ === "object");
assert(typeof StripePrivyConfigurationOutput$ === "object");
assert(typeof SubmitRegistryRecordForApprovalRequest$ === "object");
assert(typeof SubmitRegistryRecordForApprovalResponse$ === "object");
assert(typeof SummaryConsolidationOverride$ === "object");
assert(typeof SummaryMemoryStrategyInput$ === "object");
assert(typeof SummaryOverrideConfigurationInput$ === "object");
assert(typeof SummaryOverrideConsolidationConfigurationInput$ === "object");
assert(typeof SynchronizationConfiguration$ === "object");
assert(typeof SynchronizeGatewayTargetsRequest$ === "object");
assert(typeof SynchronizeGatewayTargetsResponse$ === "object");
assert(typeof SystemManagedBlock$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetConfiguration$ === "object");
assert(typeof TargetSummary$ === "object");
assert(typeof TargetTrafficSplitEntry$ === "object");
assert(typeof TimeBasedTrigger$ === "object");
assert(typeof TimeBasedTriggerInput$ === "object");
assert(typeof TokenBasedTrigger$ === "object");
assert(typeof TokenBasedTriggerInput$ === "object");
assert(typeof TokenExchangeGrantTypeConfigType$ === "object");
assert(typeof ToolDefinition$ === "object");
assert(typeof ToolSchema$ === "object");
assert(typeof ToolsDefinition$ === "object");
assert(typeof TrafficSplitEntry$ === "object");
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
assert(typeof UpdateConfigurationBundleRequest$ === "object");
assert(typeof UpdateConfigurationBundleResponse$ === "object");
assert(typeof UpdatedA2aDescriptor$ === "object");
assert(typeof UpdatedAgentSkillsDescriptor$ === "object");
assert(typeof UpdatedAgentSkillsDescriptorFields$ === "object");
assert(typeof UpdatedApprovalConfiguration$ === "object");
assert(typeof UpdateDatasetExamplesRequest$ === "object");
assert(typeof UpdateDatasetExamplesResponse$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatasetResponse$ === "object");
assert(typeof UpdatedAuthorizerConfiguration$ === "object");
assert(typeof UpdatedCustomDescriptor$ === "object");
assert(typeof UpdatedDescription$ === "object");
assert(typeof UpdatedDescriptors$ === "object");
assert(typeof UpdatedDescriptorsUnion$ === "object");
assert(typeof UpdatedHarnessEnvironmentArtifact$ === "object");
assert(typeof UpdatedHarnessMemoryConfiguration$ === "object");
assert(typeof UpdatedMcpDescriptor$ === "object");
assert(typeof UpdatedMcpDescriptorFields$ === "object");
assert(typeof UpdatedServerDefinition$ === "object");
assert(typeof UpdatedSkillDefinition$ === "object");
assert(typeof UpdatedSkillMdDefinition$ === "object");
assert(typeof UpdatedSynchronizationConfiguration$ === "object");
assert(typeof UpdatedSynchronizationType$ === "object");
assert(typeof UpdatedToolsDefinition$ === "object");
assert(typeof UpdateEvaluatorRequest$ === "object");
assert(typeof UpdateEvaluatorResponse$ === "object");
assert(typeof UpdateGatewayRequest$ === "object");
assert(typeof UpdateGatewayResponse$ === "object");
assert(typeof UpdateGatewayRuleRequest$ === "object");
assert(typeof UpdateGatewayRuleResponse$ === "object");
assert(typeof UpdateGatewayTargetRequest$ === "object");
assert(typeof UpdateGatewayTargetResponse$ === "object");
assert(typeof UpdateHarnessRequest$ === "object");
assert(typeof UpdateHarnessResponse$ === "object");
assert(typeof UpdateMemoryInput$ === "object");
assert(typeof UpdateMemoryOutput$ === "object");
assert(typeof UpdateOauth2CredentialProviderRequest$ === "object");
assert(typeof UpdateOauth2CredentialProviderResponse$ === "object");
assert(typeof UpdateOnlineEvaluationConfigRequest$ === "object");
assert(typeof UpdateOnlineEvaluationConfigResponse$ === "object");
assert(typeof UpdatePaymentConnectorRequest$ === "object");
assert(typeof UpdatePaymentConnectorResponse$ === "object");
assert(typeof UpdatePaymentCredentialProviderRequest$ === "object");
assert(typeof UpdatePaymentCredentialProviderResponse$ === "object");
assert(typeof UpdatePaymentManagerRequest$ === "object");
assert(typeof UpdatePaymentManagerResponse$ === "object");
assert(typeof UpdatePolicyEngineRequest$ === "object");
assert(typeof UpdatePolicyEngineResponse$ === "object");
assert(typeof UpdatePolicyRequest$ === "object");
assert(typeof UpdatePolicyResponse$ === "object");
assert(typeof UpdateRegistryRecordRequest$ === "object");
assert(typeof UpdateRegistryRecordResponse$ === "object");
assert(typeof UpdateRegistryRecordStatusRequest$ === "object");
assert(typeof UpdateRegistryRecordStatusResponse$ === "object");
assert(typeof UpdateRegistryRequest$ === "object");
assert(typeof UpdateRegistryResponse$ === "object");
assert(typeof UpdateWorkloadIdentityRequest$ === "object");
assert(typeof UpdateWorkloadIdentityResponse$ === "object");
assert(typeof UserPreferenceConsolidationOverride$ === "object");
assert(typeof UserPreferenceExtractionOverride$ === "object");
assert(typeof UserPreferenceMemoryStrategyInput$ === "object");
assert(typeof UserPreferenceOverrideConfigurationInput$ === "object");
assert(typeof UserPreferenceOverrideConsolidationConfigurationInput$ === "object");
assert(typeof UserPreferenceOverrideExtractionConfigurationInput$ === "object");
assert(typeof Validation$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VersionCreatedBySource$ === "object");
assert(typeof VersionFilter$ === "object");
assert(typeof VersionLineageMetadata$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof WeightedOverride$ === "object");
assert(typeof WeightedRoute$ === "object");
assert(typeof WorkloadIdentityDetails$ === "object");
assert(typeof WorkloadIdentityType$ === "object");
// enums
assert(typeof ActorTokenContentType === "object");
assert(typeof AgentManagedRuntimeType === "object");
assert(typeof AgentRuntimeEndpointStatus === "object");
assert(typeof AgentRuntimeStatus === "object");
assert(typeof ApiKeyCredentialLocation === "object");
assert(typeof AuthorizerType === "object");
assert(typeof BrowserEnterprisePolicyType === "object");
assert(typeof BrowserNetworkMode === "object");
assert(typeof BrowserProfileStatus === "object");
assert(typeof BrowserStatus === "object");
assert(typeof ClaimMatchOperatorType === "object");
assert(typeof ClientAuthenticationMethodType === "object");
assert(typeof CodeInterpreterNetworkMode === "object");
assert(typeof CodeInterpreterStatus === "object");
assert(typeof ConfigurationBundleStatus === "object");
assert(typeof ContentLevel === "object");
assert(typeof ContentType === "object");
assert(typeof CredentialProviderType === "object");
assert(typeof CredentialProviderVendorType === "object");
assert(typeof DatasetSchemaType === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DescriptorType === "object");
assert(typeof DraftStatus === "object");
assert(typeof EndpointIpAddressType === "object");
assert(typeof EvaluatorLevel === "object");
assert(typeof EvaluatorStatus === "object");
assert(typeof EvaluatorType === "object");
assert(typeof ExceptionLevel === "object");
assert(typeof FilterOperator === "object");
assert(typeof FindingType === "object");
assert(typeof GatewayInterceptionPoint === "object");
assert(typeof GatewayPolicyEngineMode === "object");
assert(typeof GatewayProtocolType === "object");
assert(typeof GatewayRuleStatus === "object");
assert(typeof GatewayStatus === "object");
assert(typeof HarnessStatus === "object");
assert(typeof HarnessToolType === "object");
assert(typeof HarnessTruncationStrategy === "object");
assert(typeof InboundTokenClaimValueType === "object");
assert(typeof IncludedData === "object");
assert(typeof KeyType === "object");
assert(typeof ListingMode === "object");
assert(typeof MemoryStatus === "object");
assert(typeof MemoryStrategyStatus === "object");
assert(typeof MemoryStrategyType === "object");
assert(typeof MemoryView === "object");
assert(typeof MetadataValueType === "object");
assert(typeof NetworkMode === "object");
assert(typeof OAuthGrantType === "object");
assert(typeof OnBehalfOfTokenExchangeGrantTypeType === "object");
assert(typeof OnlineEvaluationConfigStatus === "object");
assert(typeof OnlineEvaluationExecutionStatus === "object");
assert(typeof OverrideType === "object");
assert(typeof PaymentConnectorStatus === "object");
assert(typeof PaymentConnectorType === "object");
assert(typeof PaymentCredentialProviderVendorType === "object");
assert(typeof PaymentManagerStatus === "object");
assert(typeof PaymentsAuthorizerType === "object");
assert(typeof PolicyEngineStatus === "object");
assert(typeof PolicyGenerationStatus === "object");
assert(typeof PolicyStatus === "object");
assert(typeof PolicyValidationMode === "object");
assert(typeof PrincipalMatchOperator === "object");
assert(typeof RegistryAuthorizerType === "object");
assert(typeof RegistryRecordCredentialProviderType === "object");
assert(typeof RegistryRecordOAuthGrantType === "object");
assert(typeof RegistryRecordStatus === "object");
assert(typeof RegistryStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof RestApiMethod === "object");
assert(typeof SchemaType === "object");
assert(typeof SearchType === "object");
assert(typeof ServerProtocol === "object");
assert(typeof Status === "object");
assert(typeof SynchronizationType === "object");
assert(typeof TargetProtocolType === "object");
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
assert(typeof paginateListBrowserProfiles === "function");
assert(typeof paginateListBrowsers === "function");
assert(typeof paginateListCodeInterpreters === "function");
assert(typeof paginateListConfigurationBundleVersions === "function");
assert(typeof paginateListConfigurationBundles === "function");
assert(typeof paginateListDatasetExamples === "function");
assert(typeof paginateListDatasetVersions === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListEvaluators === "function");
assert(typeof paginateListGatewayRules === "function");
assert(typeof paginateListGatewayTargets === "function");
assert(typeof paginateListGateways === "function");
assert(typeof paginateListHarnesses === "function");
assert(typeof paginateListMemories === "function");
assert(typeof paginateListOauth2CredentialProviders === "function");
assert(typeof paginateListOnlineEvaluationConfigs === "function");
assert(typeof paginateListPaymentConnectors === "function");
assert(typeof paginateListPaymentCredentialProviders === "function");
assert(typeof paginateListPaymentManagers === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyEngineSummaries === "function");
assert(typeof paginateListPolicyEngines === "function");
assert(typeof paginateListPolicyGenerationAssets === "function");
assert(typeof paginateListPolicyGenerationSummaries === "function");
assert(typeof paginateListPolicyGenerations === "function");
assert(typeof paginateListPolicySummaries === "function");
assert(typeof paginateListRegistries === "function");
assert(typeof paginateListRegistryRecords === "function");
assert(typeof paginateListWorkloadIdentities === "function");
console.log(`BedrockAgentCoreControl index test passed.`);
