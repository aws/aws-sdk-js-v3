import {
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
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeEndpointCommand,
  CreateApiKeyCredentialProviderCommand,
  CreateBrowserCommand,
  CreateCodeInterpreterCommand,
  CreateGatewayCommand,
  CreateGatewayTargetCommand,
  CreateMemoryCommand,
  CreateOauth2CredentialProviderCommand,
  CreateWorkloadIdentityCommand,
  CredentialProviderType,
  CredentialProviderVendorType,
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeEndpointCommand,
  DeleteApiKeyCredentialProviderCommand,
  DeleteBrowserCommand,
  DeleteCodeInterpreterCommand,
  DeleteGatewayCommand,
  DeleteGatewayTargetCommand,
  DeleteMemoryCommand,
  DeleteOauth2CredentialProviderCommand,
  DeleteWorkloadIdentityCommand,
  ExceptionLevel,
  GatewayInterceptionPoint,
  GatewayProtocolType,
  GatewayStatus,
  GetAgentRuntimeCommand,
  GetAgentRuntimeEndpointCommand,
  GetApiKeyCredentialProviderCommand,
  GetBrowserCommand,
  GetCodeInterpreterCommand,
  GetGatewayCommand,
  GetGatewayTargetCommand,
  GetMemoryCommand,
  GetOauth2CredentialProviderCommand,
  GetTokenVaultCommand,
  GetWorkloadIdentityCommand,
  KeyType,
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimesCommand,
  ListApiKeyCredentialProvidersCommand,
  ListBrowsersCommand,
  ListCodeInterpretersCommand,
  ListGatewayTargetsCommand,
  ListGatewaysCommand,
  ListMemoriesCommand,
  ListOauth2CredentialProvidersCommand,
  ListTagsForResourceCommand,
  ListWorkloadIdentitiesCommand,
  MemoryStatus,
  MemoryStrategyStatus,
  MemoryStrategyType,
  NetworkMode,
  OverrideType,
  ResourceType,
  SchemaType,
  SearchType,
  ServerProtocol,
  SetTokenVaultCMKCommand,
  SynchronizeGatewayTargetsCommand,
  TagResourceCommand,
  TargetStatus,
  UntagResourceCommand,
  UpdateAgentRuntimeCommand,
  UpdateAgentRuntimeEndpointCommand,
  UpdateApiKeyCredentialProviderCommand,
  UpdateGatewayCommand,
  UpdateGatewayTargetCommand,
  UpdateMemoryCommand,
  UpdateOauth2CredentialProviderCommand,
  UpdateWorkloadIdentityCommand,
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimeVersions,
  paginateListAgentRuntimes,
  paginateListApiKeyCredentialProviders,
  paginateListBrowsers,
  paginateListCodeInterpreters,
  paginateListGatewayTargets,
  paginateListGateways,
  paginateListMemories,
  paginateListOauth2CredentialProviders,
  paginateListWorkloadIdentities,
  waitForMemoryCreated,
  waitUntilMemoryCreated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentCoreControlClient === "function")
assert(typeof BedrockAgentCoreControl === "function")
// commands
assert(typeof CreateAgentRuntimeCommand === "function")
assert(typeof CreateAgentRuntimeEndpointCommand === "function")
assert(typeof CreateApiKeyCredentialProviderCommand === "function")
assert(typeof CreateBrowserCommand === "function")
assert(typeof CreateCodeInterpreterCommand === "function")
assert(typeof CreateGatewayCommand === "function")
assert(typeof CreateGatewayTargetCommand === "function")
assert(typeof CreateMemoryCommand === "function")
assert(typeof CreateOauth2CredentialProviderCommand === "function")
assert(typeof CreateWorkloadIdentityCommand === "function")
assert(typeof DeleteAgentRuntimeCommand === "function")
assert(typeof DeleteAgentRuntimeEndpointCommand === "function")
assert(typeof DeleteApiKeyCredentialProviderCommand === "function")
assert(typeof DeleteBrowserCommand === "function")
assert(typeof DeleteCodeInterpreterCommand === "function")
assert(typeof DeleteGatewayCommand === "function")
assert(typeof DeleteGatewayTargetCommand === "function")
assert(typeof DeleteMemoryCommand === "function")
assert(typeof DeleteOauth2CredentialProviderCommand === "function")
assert(typeof DeleteWorkloadIdentityCommand === "function")
assert(typeof GetAgentRuntimeCommand === "function")
assert(typeof GetAgentRuntimeEndpointCommand === "function")
assert(typeof GetApiKeyCredentialProviderCommand === "function")
assert(typeof GetBrowserCommand === "function")
assert(typeof GetCodeInterpreterCommand === "function")
assert(typeof GetGatewayCommand === "function")
assert(typeof GetGatewayTargetCommand === "function")
assert(typeof GetMemoryCommand === "function")
assert(typeof GetOauth2CredentialProviderCommand === "function")
assert(typeof GetTokenVaultCommand === "function")
assert(typeof GetWorkloadIdentityCommand === "function")
assert(typeof ListAgentRuntimeEndpointsCommand === "function")
assert(typeof ListAgentRuntimesCommand === "function")
assert(typeof ListAgentRuntimeVersionsCommand === "function")
assert(typeof ListApiKeyCredentialProvidersCommand === "function")
assert(typeof ListBrowsersCommand === "function")
assert(typeof ListCodeInterpretersCommand === "function")
assert(typeof ListGatewaysCommand === "function")
assert(typeof ListGatewayTargetsCommand === "function")
assert(typeof ListMemoriesCommand === "function")
assert(typeof ListOauth2CredentialProvidersCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWorkloadIdentitiesCommand === "function")
assert(typeof SetTokenVaultCMKCommand === "function")
assert(typeof SynchronizeGatewayTargetsCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAgentRuntimeCommand === "function")
assert(typeof UpdateAgentRuntimeEndpointCommand === "function")
assert(typeof UpdateApiKeyCredentialProviderCommand === "function")
assert(typeof UpdateGatewayCommand === "function")
assert(typeof UpdateGatewayTargetCommand === "function")
assert(typeof UpdateMemoryCommand === "function")
assert(typeof UpdateOauth2CredentialProviderCommand === "function")
assert(typeof UpdateWorkloadIdentityCommand === "function")
// enums
assert(typeof AgentManagedRuntimeType === "object");
assert(typeof AgentRuntimeEndpointStatus === "object");
assert(typeof AgentRuntimeStatus === "object");
assert(typeof ApiKeyCredentialLocation === "object");
assert(typeof AuthorizerType === "object");
assert(typeof BrowserNetworkMode === "object");
assert(typeof BrowserStatus === "object");
assert(typeof CodeInterpreterNetworkMode === "object");
assert(typeof CodeInterpreterStatus === "object");
assert(typeof CredentialProviderType === "object");
assert(typeof CredentialProviderVendorType === "object");
assert(typeof ExceptionLevel === "object");
assert(typeof GatewayInterceptionPoint === "object");
assert(typeof GatewayProtocolType === "object");
assert(typeof GatewayStatus === "object");
assert(typeof KeyType === "object");
assert(typeof MemoryStatus === "object");
assert(typeof MemoryStrategyStatus === "object");
assert(typeof MemoryStrategyType === "object");
assert(typeof NetworkMode === "object");
assert(typeof OverrideType === "object");
assert(typeof ResourceType === "object");
assert(typeof SchemaType === "object");
assert(typeof SearchType === "object");
assert(typeof ServerProtocol === "object");
assert(typeof TargetStatus === "object");
// errors
assert(BedrockAgentCoreControlServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForMemoryCreated === "function")
assert(typeof waitUntilMemoryCreated === "function")
// paginators
assert(typeof paginateListAgentRuntimeEndpoints === "function")
assert(typeof paginateListAgentRuntimeVersions === "function")
assert(typeof paginateListAgentRuntimes === "function")
assert(typeof paginateListApiKeyCredentialProviders === "function")
assert(typeof paginateListBrowsers === "function")
assert(typeof paginateListCodeInterpreters === "function")
assert(typeof paginateListGatewayTargets === "function")
assert(typeof paginateListGateways === "function")
assert(typeof paginateListMemories === "function")
assert(typeof paginateListOauth2CredentialProviders === "function")
assert(typeof paginateListWorkloadIdentities === "function")
console.log(`BedrockAgentCoreControl index test passed.`);
