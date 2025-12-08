import {
  AccessDeniedException,
  AgentManagedRuntimeType,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  ApiKeyCredentialLocation,
  AuthorizerType,
  BedrockAgentCoreControl,
  BedrockAgentCoreControlClient,
  BedrockAgentCoreControlServiceException,
  BrowserNetworkMode,
  BrowserStatus,
  ClaimMatchOperatorType,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  ConcurrentModificationException,
  ConflictException,
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeEndpointCommand,
  CreateApiKeyCredentialProviderCommand,
  CreateBrowserCommand,
  CreateCodeInterpreterCommand,
  CreateEvaluatorCommand,
  CreateGatewayCommand,
  CreateGatewayTargetCommand,
  CreateMemoryCommand,
  CreateOauth2CredentialProviderCommand,
  CreateOnlineEvaluationConfigCommand,
  CreatePolicyCommand,
  CreatePolicyEngineCommand,
  CreateWorkloadIdentityCommand,
  CredentialProviderType,
  CredentialProviderVendorType,
  DecryptionFailure,
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeEndpointCommand,
  DeleteApiKeyCredentialProviderCommand,
  DeleteBrowserCommand,
  DeleteCodeInterpreterCommand,
  DeleteEvaluatorCommand,
  DeleteGatewayCommand,
  DeleteGatewayTargetCommand,
  DeleteMemoryCommand,
  DeleteOauth2CredentialProviderCommand,
  DeleteOnlineEvaluationConfigCommand,
  DeletePolicyCommand,
  DeletePolicyEngineCommand,
  DeleteResourcePolicyCommand,
  DeleteWorkloadIdentityCommand,
  EncryptionFailure,
  EvaluatorLevel,
  EvaluatorStatus,
  EvaluatorType,
  ExceptionLevel,
  FilterOperator,
  FindingType,
  GatewayInterceptionPoint,
  GatewayPolicyEngineMode,
  GatewayProtocolType,
  GatewayStatus,
  GetAgentRuntimeCommand,
  GetAgentRuntimeEndpointCommand,
  GetApiKeyCredentialProviderCommand,
  GetBrowserCommand,
  GetCodeInterpreterCommand,
  GetEvaluatorCommand,
  GetGatewayCommand,
  GetGatewayTargetCommand,
  GetMemoryCommand,
  GetOauth2CredentialProviderCommand,
  GetOnlineEvaluationConfigCommand,
  GetPolicyCommand,
  GetPolicyEngineCommand,
  GetPolicyGenerationCommand,
  GetResourcePolicyCommand,
  GetTokenVaultCommand,
  GetWorkloadIdentityCommand,
  InboundTokenClaimValueType,
  InternalServerException,
  KeyType,
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimesCommand,
  ListApiKeyCredentialProvidersCommand,
  ListBrowsersCommand,
  ListCodeInterpretersCommand,
  ListEvaluatorsCommand,
  ListGatewayTargetsCommand,
  ListGatewaysCommand,
  ListMemoriesCommand,
  ListOauth2CredentialProvidersCommand,
  ListOnlineEvaluationConfigsCommand,
  ListPoliciesCommand,
  ListPolicyEnginesCommand,
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationsCommand,
  ListTagsForResourceCommand,
  ListWorkloadIdentitiesCommand,
  MemoryStatus,
  MemoryStrategyStatus,
  MemoryStrategyType,
  NetworkMode,
  OAuthGrantType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  OverrideType,
  PolicyEngineStatus,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  PutResourcePolicyCommand,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceType,
  RestApiMethod,
  SchemaType,
  SearchType,
  ServerProtocol,
  ServiceException,
  ServiceQuotaExceededException,
  SetTokenVaultCMKCommand,
  StartPolicyGenerationCommand,
  SynchronizeGatewayTargetsCommand,
  TagResourceCommand,
  TargetStatus,
  ThrottledException,
  ThrottlingException,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateAgentRuntimeCommand,
  UpdateAgentRuntimeEndpointCommand,
  UpdateApiKeyCredentialProviderCommand,
  UpdateEvaluatorCommand,
  UpdateGatewayCommand,
  UpdateGatewayTargetCommand,
  UpdateMemoryCommand,
  UpdateOauth2CredentialProviderCommand,
  UpdateOnlineEvaluationConfigCommand,
  UpdatePolicyCommand,
  UpdatePolicyEngineCommand,
  UpdateWorkloadIdentityCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimeVersions,
  paginateListAgentRuntimes,
  paginateListApiKeyCredentialProviders,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListEvaluators,
  paginateListGatewayTargets,
  paginateListGateways,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListOnlineEvaluationConfigs,
  paginateListPolicies,
  paginateListPolicyEngines,
  paginateListPolicyGenerationAssets,
  paginateListPolicyGenerations,
  paginateListWorkloadIdentities,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentCoreControlClient === "function");
assert(typeof BedrockAgentCoreControl === "function");
// commands
assert(typeof CreateAgentRuntimeCommand === "function");
assert(typeof CreateAgentRuntimeEndpointCommand === "function");
assert(typeof CreateApiKeyCredentialProviderCommand === "function");
assert(typeof CreateBrowserCommand === "function");
assert(typeof CreateCodeInterpreterCommand === "function");
assert(typeof CreateEvaluatorCommand === "function");
assert(typeof CreateGatewayCommand === "function");
assert(typeof CreateGatewayTargetCommand === "function");
assert(typeof CreateMemoryCommand === "function");
assert(typeof CreateOauth2CredentialProviderCommand === "function");
assert(typeof CreateOnlineEvaluationConfigCommand === "function");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicyEngineCommand === "function");
assert(typeof CreateWorkloadIdentityCommand === "function");
assert(typeof DeleteAgentRuntimeCommand === "function");
assert(typeof DeleteAgentRuntimeEndpointCommand === "function");
assert(typeof DeleteApiKeyCredentialProviderCommand === "function");
assert(typeof DeleteBrowserCommand === "function");
assert(typeof DeleteCodeInterpreterCommand === "function");
assert(typeof DeleteEvaluatorCommand === "function");
assert(typeof DeleteGatewayCommand === "function");
assert(typeof DeleteGatewayTargetCommand === "function");
assert(typeof DeleteMemoryCommand === "function");
assert(typeof DeleteOauth2CredentialProviderCommand === "function");
assert(typeof DeleteOnlineEvaluationConfigCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicyEngineCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteWorkloadIdentityCommand === "function");
assert(typeof GetAgentRuntimeCommand === "function");
assert(typeof GetAgentRuntimeEndpointCommand === "function");
assert(typeof GetApiKeyCredentialProviderCommand === "function");
assert(typeof GetBrowserCommand === "function");
assert(typeof GetCodeInterpreterCommand === "function");
assert(typeof GetEvaluatorCommand === "function");
assert(typeof GetGatewayCommand === "function");
assert(typeof GetGatewayTargetCommand === "function");
assert(typeof GetMemoryCommand === "function");
assert(typeof GetOauth2CredentialProviderCommand === "function");
assert(typeof GetOnlineEvaluationConfigCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicyEngineCommand === "function");
assert(typeof GetPolicyGenerationCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetTokenVaultCommand === "function");
assert(typeof GetWorkloadIdentityCommand === "function");
assert(typeof ListAgentRuntimeEndpointsCommand === "function");
assert(typeof ListAgentRuntimesCommand === "function");
assert(typeof ListAgentRuntimeVersionsCommand === "function");
assert(typeof ListApiKeyCredentialProvidersCommand === "function");
assert(typeof ListBrowsersCommand === "function");
assert(typeof ListCodeInterpretersCommand === "function");
assert(typeof ListEvaluatorsCommand === "function");
assert(typeof ListGatewaysCommand === "function");
assert(typeof ListGatewayTargetsCommand === "function");
assert(typeof ListMemoriesCommand === "function");
assert(typeof ListOauth2CredentialProvidersCommand === "function");
assert(typeof ListOnlineEvaluationConfigsCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicyEnginesCommand === "function");
assert(typeof ListPolicyGenerationAssetsCommand === "function");
assert(typeof ListPolicyGenerationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkloadIdentitiesCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof SetTokenVaultCMKCommand === "function");
assert(typeof StartPolicyGenerationCommand === "function");
assert(typeof SynchronizeGatewayTargetsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAgentRuntimeCommand === "function");
assert(typeof UpdateAgentRuntimeEndpointCommand === "function");
assert(typeof UpdateApiKeyCredentialProviderCommand === "function");
assert(typeof UpdateEvaluatorCommand === "function");
assert(typeof UpdateGatewayCommand === "function");
assert(typeof UpdateGatewayTargetCommand === "function");
assert(typeof UpdateMemoryCommand === "function");
assert(typeof UpdateOauth2CredentialProviderCommand === "function");
assert(typeof UpdateOnlineEvaluationConfigCommand === "function");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicyEngineCommand === "function");
assert(typeof UpdateWorkloadIdentityCommand === "function");
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
assert(ConcurrentModificationException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ConflictException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(DecryptionFailure.prototype instanceof BedrockAgentCoreControlServiceException);
assert(EncryptionFailure.prototype instanceof BedrockAgentCoreControlServiceException);
assert(InternalServerException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ResourceLimitExceededException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ServiceException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ThrottledException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ThrottlingException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(UnauthorizedException.prototype instanceof BedrockAgentCoreControlServiceException);
assert(ValidationException.prototype instanceof BedrockAgentCoreControlServiceException);
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
