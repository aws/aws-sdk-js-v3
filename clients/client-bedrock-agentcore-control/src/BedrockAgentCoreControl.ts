// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import { BedrockAgentCoreControlClient } from "./BedrockAgentCoreControlClient";
import {
  type CreateAgentRuntimeCommandInput,
  type CreateAgentRuntimeCommandOutput,
  CreateAgentRuntimeCommand,
} from "./commands/CreateAgentRuntimeCommand";
import {
  type CreateAgentRuntimeEndpointCommandInput,
  type CreateAgentRuntimeEndpointCommandOutput,
  CreateAgentRuntimeEndpointCommand,
} from "./commands/CreateAgentRuntimeEndpointCommand";
import {
  type CreateApiKeyCredentialProviderCommandInput,
  type CreateApiKeyCredentialProviderCommandOutput,
  CreateApiKeyCredentialProviderCommand,
} from "./commands/CreateApiKeyCredentialProviderCommand";
import {
  type CreateBrowserCommandInput,
  type CreateBrowserCommandOutput,
  CreateBrowserCommand,
} from "./commands/CreateBrowserCommand";
import {
  type CreateBrowserProfileCommandInput,
  type CreateBrowserProfileCommandOutput,
  CreateBrowserProfileCommand,
} from "./commands/CreateBrowserProfileCommand";
import {
  type CreateCodeInterpreterCommandInput,
  type CreateCodeInterpreterCommandOutput,
  CreateCodeInterpreterCommand,
} from "./commands/CreateCodeInterpreterCommand";
import {
  type CreateEvaluatorCommandInput,
  type CreateEvaluatorCommandOutput,
  CreateEvaluatorCommand,
} from "./commands/CreateEvaluatorCommand";
import {
  type CreateGatewayCommandInput,
  type CreateGatewayCommandOutput,
  CreateGatewayCommand,
} from "./commands/CreateGatewayCommand";
import {
  type CreateGatewayTargetCommandInput,
  type CreateGatewayTargetCommandOutput,
  CreateGatewayTargetCommand,
} from "./commands/CreateGatewayTargetCommand";
import {
  type CreateMemoryCommandInput,
  type CreateMemoryCommandOutput,
  CreateMemoryCommand,
} from "./commands/CreateMemoryCommand";
import {
  type CreateOauth2CredentialProviderCommandInput,
  type CreateOauth2CredentialProviderCommandOutput,
  CreateOauth2CredentialProviderCommand,
} from "./commands/CreateOauth2CredentialProviderCommand";
import {
  type CreateOnlineEvaluationConfigCommandInput,
  type CreateOnlineEvaluationConfigCommandOutput,
  CreateOnlineEvaluationConfigCommand,
} from "./commands/CreateOnlineEvaluationConfigCommand";
import {
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  CreatePolicyCommand,
} from "./commands/CreatePolicyCommand";
import {
  type CreatePolicyEngineCommandInput,
  type CreatePolicyEngineCommandOutput,
  CreatePolicyEngineCommand,
} from "./commands/CreatePolicyEngineCommand";
import {
  type CreateWorkloadIdentityCommandInput,
  type CreateWorkloadIdentityCommandOutput,
  CreateWorkloadIdentityCommand,
} from "./commands/CreateWorkloadIdentityCommand";
import {
  type DeleteAgentRuntimeCommandInput,
  type DeleteAgentRuntimeCommandOutput,
  DeleteAgentRuntimeCommand,
} from "./commands/DeleteAgentRuntimeCommand";
import {
  type DeleteAgentRuntimeEndpointCommandInput,
  type DeleteAgentRuntimeEndpointCommandOutput,
  DeleteAgentRuntimeEndpointCommand,
} from "./commands/DeleteAgentRuntimeEndpointCommand";
import {
  type DeleteApiKeyCredentialProviderCommandInput,
  type DeleteApiKeyCredentialProviderCommandOutput,
  DeleteApiKeyCredentialProviderCommand,
} from "./commands/DeleteApiKeyCredentialProviderCommand";
import {
  type DeleteBrowserCommandInput,
  type DeleteBrowserCommandOutput,
  DeleteBrowserCommand,
} from "./commands/DeleteBrowserCommand";
import {
  type DeleteBrowserProfileCommandInput,
  type DeleteBrowserProfileCommandOutput,
  DeleteBrowserProfileCommand,
} from "./commands/DeleteBrowserProfileCommand";
import {
  type DeleteCodeInterpreterCommandInput,
  type DeleteCodeInterpreterCommandOutput,
  DeleteCodeInterpreterCommand,
} from "./commands/DeleteCodeInterpreterCommand";
import {
  type DeleteEvaluatorCommandInput,
  type DeleteEvaluatorCommandOutput,
  DeleteEvaluatorCommand,
} from "./commands/DeleteEvaluatorCommand";
import {
  type DeleteGatewayCommandInput,
  type DeleteGatewayCommandOutput,
  DeleteGatewayCommand,
} from "./commands/DeleteGatewayCommand";
import {
  type DeleteGatewayTargetCommandInput,
  type DeleteGatewayTargetCommandOutput,
  DeleteGatewayTargetCommand,
} from "./commands/DeleteGatewayTargetCommand";
import {
  type DeleteMemoryCommandInput,
  type DeleteMemoryCommandOutput,
  DeleteMemoryCommand,
} from "./commands/DeleteMemoryCommand";
import {
  type DeleteOauth2CredentialProviderCommandInput,
  type DeleteOauth2CredentialProviderCommandOutput,
  DeleteOauth2CredentialProviderCommand,
} from "./commands/DeleteOauth2CredentialProviderCommand";
import {
  type DeleteOnlineEvaluationConfigCommandInput,
  type DeleteOnlineEvaluationConfigCommandOutput,
  DeleteOnlineEvaluationConfigCommand,
} from "./commands/DeleteOnlineEvaluationConfigCommand";
import {
  type DeletePolicyCommandInput,
  type DeletePolicyCommandOutput,
  DeletePolicyCommand,
} from "./commands/DeletePolicyCommand";
import {
  type DeletePolicyEngineCommandInput,
  type DeletePolicyEngineCommandOutput,
  DeletePolicyEngineCommand,
} from "./commands/DeletePolicyEngineCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteWorkloadIdentityCommandInput,
  type DeleteWorkloadIdentityCommandOutput,
  DeleteWorkloadIdentityCommand,
} from "./commands/DeleteWorkloadIdentityCommand";
import {
  type GetAgentRuntimeCommandInput,
  type GetAgentRuntimeCommandOutput,
  GetAgentRuntimeCommand,
} from "./commands/GetAgentRuntimeCommand";
import {
  type GetAgentRuntimeEndpointCommandInput,
  type GetAgentRuntimeEndpointCommandOutput,
  GetAgentRuntimeEndpointCommand,
} from "./commands/GetAgentRuntimeEndpointCommand";
import {
  type GetApiKeyCredentialProviderCommandInput,
  type GetApiKeyCredentialProviderCommandOutput,
  GetApiKeyCredentialProviderCommand,
} from "./commands/GetApiKeyCredentialProviderCommand";
import {
  type GetBrowserCommandInput,
  type GetBrowserCommandOutput,
  GetBrowserCommand,
} from "./commands/GetBrowserCommand";
import {
  type GetBrowserProfileCommandInput,
  type GetBrowserProfileCommandOutput,
  GetBrowserProfileCommand,
} from "./commands/GetBrowserProfileCommand";
import {
  type GetCodeInterpreterCommandInput,
  type GetCodeInterpreterCommandOutput,
  GetCodeInterpreterCommand,
} from "./commands/GetCodeInterpreterCommand";
import {
  type GetEvaluatorCommandInput,
  type GetEvaluatorCommandOutput,
  GetEvaluatorCommand,
} from "./commands/GetEvaluatorCommand";
import {
  type GetGatewayCommandInput,
  type GetGatewayCommandOutput,
  GetGatewayCommand,
} from "./commands/GetGatewayCommand";
import {
  type GetGatewayTargetCommandInput,
  type GetGatewayTargetCommandOutput,
  GetGatewayTargetCommand,
} from "./commands/GetGatewayTargetCommand";
import { type GetMemoryCommandInput, type GetMemoryCommandOutput, GetMemoryCommand } from "./commands/GetMemoryCommand";
import {
  type GetOauth2CredentialProviderCommandInput,
  type GetOauth2CredentialProviderCommandOutput,
  GetOauth2CredentialProviderCommand,
} from "./commands/GetOauth2CredentialProviderCommand";
import {
  type GetOnlineEvaluationConfigCommandInput,
  type GetOnlineEvaluationConfigCommandOutput,
  GetOnlineEvaluationConfigCommand,
} from "./commands/GetOnlineEvaluationConfigCommand";
import { type GetPolicyCommandInput, type GetPolicyCommandOutput, GetPolicyCommand } from "./commands/GetPolicyCommand";
import {
  type GetPolicyEngineCommandInput,
  type GetPolicyEngineCommandOutput,
  GetPolicyEngineCommand,
} from "./commands/GetPolicyEngineCommand";
import {
  type GetPolicyGenerationCommandInput,
  type GetPolicyGenerationCommandOutput,
  GetPolicyGenerationCommand,
} from "./commands/GetPolicyGenerationCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetTokenVaultCommandInput,
  type GetTokenVaultCommandOutput,
  GetTokenVaultCommand,
} from "./commands/GetTokenVaultCommand";
import {
  type GetWorkloadIdentityCommandInput,
  type GetWorkloadIdentityCommandOutput,
  GetWorkloadIdentityCommand,
} from "./commands/GetWorkloadIdentityCommand";
import {
  type ListAgentRuntimeEndpointsCommandInput,
  type ListAgentRuntimeEndpointsCommandOutput,
  ListAgentRuntimeEndpointsCommand,
} from "./commands/ListAgentRuntimeEndpointsCommand";
import {
  type ListAgentRuntimesCommandInput,
  type ListAgentRuntimesCommandOutput,
  ListAgentRuntimesCommand,
} from "./commands/ListAgentRuntimesCommand";
import {
  type ListAgentRuntimeVersionsCommandInput,
  type ListAgentRuntimeVersionsCommandOutput,
  ListAgentRuntimeVersionsCommand,
} from "./commands/ListAgentRuntimeVersionsCommand";
import {
  type ListApiKeyCredentialProvidersCommandInput,
  type ListApiKeyCredentialProvidersCommandOutput,
  ListApiKeyCredentialProvidersCommand,
} from "./commands/ListApiKeyCredentialProvidersCommand";
import {
  type ListBrowserProfilesCommandInput,
  type ListBrowserProfilesCommandOutput,
  ListBrowserProfilesCommand,
} from "./commands/ListBrowserProfilesCommand";
import {
  type ListBrowsersCommandInput,
  type ListBrowsersCommandOutput,
  ListBrowsersCommand,
} from "./commands/ListBrowsersCommand";
import {
  type ListCodeInterpretersCommandInput,
  type ListCodeInterpretersCommandOutput,
  ListCodeInterpretersCommand,
} from "./commands/ListCodeInterpretersCommand";
import {
  type ListEvaluatorsCommandInput,
  type ListEvaluatorsCommandOutput,
  ListEvaluatorsCommand,
} from "./commands/ListEvaluatorsCommand";
import {
  type ListGatewaysCommandInput,
  type ListGatewaysCommandOutput,
  ListGatewaysCommand,
} from "./commands/ListGatewaysCommand";
import {
  type ListGatewayTargetsCommandInput,
  type ListGatewayTargetsCommandOutput,
  ListGatewayTargetsCommand,
} from "./commands/ListGatewayTargetsCommand";
import {
  type ListMemoriesCommandInput,
  type ListMemoriesCommandOutput,
  ListMemoriesCommand,
} from "./commands/ListMemoriesCommand";
import {
  type ListOauth2CredentialProvidersCommandInput,
  type ListOauth2CredentialProvidersCommandOutput,
  ListOauth2CredentialProvidersCommand,
} from "./commands/ListOauth2CredentialProvidersCommand";
import {
  type ListOnlineEvaluationConfigsCommandInput,
  type ListOnlineEvaluationConfigsCommandOutput,
  ListOnlineEvaluationConfigsCommand,
} from "./commands/ListOnlineEvaluationConfigsCommand";
import {
  type ListPoliciesCommandInput,
  type ListPoliciesCommandOutput,
  ListPoliciesCommand,
} from "./commands/ListPoliciesCommand";
import {
  type ListPolicyEnginesCommandInput,
  type ListPolicyEnginesCommandOutput,
  ListPolicyEnginesCommand,
} from "./commands/ListPolicyEnginesCommand";
import {
  type ListPolicyGenerationAssetsCommandInput,
  type ListPolicyGenerationAssetsCommandOutput,
  ListPolicyGenerationAssetsCommand,
} from "./commands/ListPolicyGenerationAssetsCommand";
import {
  type ListPolicyGenerationsCommandInput,
  type ListPolicyGenerationsCommandOutput,
  ListPolicyGenerationsCommand,
} from "./commands/ListPolicyGenerationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkloadIdentitiesCommandInput,
  type ListWorkloadIdentitiesCommandOutput,
  ListWorkloadIdentitiesCommand,
} from "./commands/ListWorkloadIdentitiesCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type SetTokenVaultCMKCommandInput,
  type SetTokenVaultCMKCommandOutput,
  SetTokenVaultCMKCommand,
} from "./commands/SetTokenVaultCMKCommand";
import {
  type StartPolicyGenerationCommandInput,
  type StartPolicyGenerationCommandOutput,
  StartPolicyGenerationCommand,
} from "./commands/StartPolicyGenerationCommand";
import {
  type SynchronizeGatewayTargetsCommandInput,
  type SynchronizeGatewayTargetsCommandOutput,
  SynchronizeGatewayTargetsCommand,
} from "./commands/SynchronizeGatewayTargetsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAgentRuntimeCommandInput,
  type UpdateAgentRuntimeCommandOutput,
  UpdateAgentRuntimeCommand,
} from "./commands/UpdateAgentRuntimeCommand";
import {
  type UpdateAgentRuntimeEndpointCommandInput,
  type UpdateAgentRuntimeEndpointCommandOutput,
  UpdateAgentRuntimeEndpointCommand,
} from "./commands/UpdateAgentRuntimeEndpointCommand";
import {
  type UpdateApiKeyCredentialProviderCommandInput,
  type UpdateApiKeyCredentialProviderCommandOutput,
  UpdateApiKeyCredentialProviderCommand,
} from "./commands/UpdateApiKeyCredentialProviderCommand";
import {
  type UpdateEvaluatorCommandInput,
  type UpdateEvaluatorCommandOutput,
  UpdateEvaluatorCommand,
} from "./commands/UpdateEvaluatorCommand";
import {
  type UpdateGatewayCommandInput,
  type UpdateGatewayCommandOutput,
  UpdateGatewayCommand,
} from "./commands/UpdateGatewayCommand";
import {
  type UpdateGatewayTargetCommandInput,
  type UpdateGatewayTargetCommandOutput,
  UpdateGatewayTargetCommand,
} from "./commands/UpdateGatewayTargetCommand";
import {
  type UpdateMemoryCommandInput,
  type UpdateMemoryCommandOutput,
  UpdateMemoryCommand,
} from "./commands/UpdateMemoryCommand";
import {
  type UpdateOauth2CredentialProviderCommandInput,
  type UpdateOauth2CredentialProviderCommandOutput,
  UpdateOauth2CredentialProviderCommand,
} from "./commands/UpdateOauth2CredentialProviderCommand";
import {
  type UpdateOnlineEvaluationConfigCommandInput,
  type UpdateOnlineEvaluationConfigCommandOutput,
  UpdateOnlineEvaluationConfigCommand,
} from "./commands/UpdateOnlineEvaluationConfigCommand";
import {
  type UpdatePolicyCommandInput,
  type UpdatePolicyCommandOutput,
  UpdatePolicyCommand,
} from "./commands/UpdatePolicyCommand";
import {
  type UpdatePolicyEngineCommandInput,
  type UpdatePolicyEngineCommandOutput,
  UpdatePolicyEngineCommand,
} from "./commands/UpdatePolicyEngineCommand";
import {
  type UpdateWorkloadIdentityCommandInput,
  type UpdateWorkloadIdentityCommandOutput,
  UpdateWorkloadIdentityCommand,
} from "./commands/UpdateWorkloadIdentityCommand";
import { paginateListAgentRuntimeEndpoints } from "./pagination/ListAgentRuntimeEndpointsPaginator";
import { paginateListAgentRuntimes } from "./pagination/ListAgentRuntimesPaginator";
import { paginateListAgentRuntimeVersions } from "./pagination/ListAgentRuntimeVersionsPaginator";
import { paginateListApiKeyCredentialProviders } from "./pagination/ListApiKeyCredentialProvidersPaginator";
import { paginateListBrowserProfiles } from "./pagination/ListBrowserProfilesPaginator";
import { paginateListBrowsers } from "./pagination/ListBrowsersPaginator";
import { paginateListCodeInterpreters } from "./pagination/ListCodeInterpretersPaginator";
import { paginateListEvaluators } from "./pagination/ListEvaluatorsPaginator";
import { paginateListGateways } from "./pagination/ListGatewaysPaginator";
import { paginateListGatewayTargets } from "./pagination/ListGatewayTargetsPaginator";
import { paginateListMemories } from "./pagination/ListMemoriesPaginator";
import { paginateListOauth2CredentialProviders } from "./pagination/ListOauth2CredentialProvidersPaginator";
import { paginateListOnlineEvaluationConfigs } from "./pagination/ListOnlineEvaluationConfigsPaginator";
import { paginateListPolicies } from "./pagination/ListPoliciesPaginator";
import { paginateListPolicyEngines } from "./pagination/ListPolicyEnginesPaginator";
import { paginateListPolicyGenerationAssets } from "./pagination/ListPolicyGenerationAssetsPaginator";
import { paginateListPolicyGenerations } from "./pagination/ListPolicyGenerationsPaginator";
import { paginateListWorkloadIdentities } from "./pagination/ListWorkloadIdentitiesPaginator";
import { waitUntilMemoryCreated } from "./waiters/waitForMemoryCreated";
import { waitUntilPolicyActive } from "./waiters/waitForPolicyActive";
import { waitUntilPolicyDeleted } from "./waiters/waitForPolicyDeleted";
import { waitUntilPolicyEngineActive } from "./waiters/waitForPolicyEngineActive";
import { waitUntilPolicyEngineDeleted } from "./waiters/waitForPolicyEngineDeleted";
import { waitUntilPolicyGenerationCompleted } from "./waiters/waitForPolicyGenerationCompleted";

const commands = {
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeEndpointCommand,
  CreateApiKeyCredentialProviderCommand,
  CreateBrowserCommand,
  CreateBrowserProfileCommand,
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
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeEndpointCommand,
  DeleteApiKeyCredentialProviderCommand,
  DeleteBrowserCommand,
  DeleteBrowserProfileCommand,
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
  GetAgentRuntimeCommand,
  GetAgentRuntimeEndpointCommand,
  GetApiKeyCredentialProviderCommand,
  GetBrowserCommand,
  GetBrowserProfileCommand,
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
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimesCommand,
  ListAgentRuntimeVersionsCommand,
  ListApiKeyCredentialProvidersCommand,
  ListBrowserProfilesCommand,
  ListBrowsersCommand,
  ListCodeInterpretersCommand,
  ListEvaluatorsCommand,
  ListGatewaysCommand,
  ListGatewayTargetsCommand,
  ListMemoriesCommand,
  ListOauth2CredentialProvidersCommand,
  ListOnlineEvaluationConfigsCommand,
  ListPoliciesCommand,
  ListPolicyEnginesCommand,
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationsCommand,
  ListTagsForResourceCommand,
  ListWorkloadIdentitiesCommand,
  PutResourcePolicyCommand,
  SetTokenVaultCMKCommand,
  StartPolicyGenerationCommand,
  SynchronizeGatewayTargetsCommand,
  TagResourceCommand,
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
};
const paginators = {
  paginateListAgentRuntimeEndpoints,
  paginateListAgentRuntimes,
  paginateListAgentRuntimeVersions,
  paginateListApiKeyCredentialProviders,
  paginateListBrowserProfiles,
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
};
const waiters = {
  waitUntilMemoryCreated,
  waitUntilPolicyActive,
  waitUntilPolicyDeleted,
  waitUntilPolicyEngineActive,
  waitUntilPolicyEngineDeleted,
  waitUntilPolicyGenerationCompleted,
};

export interface BedrockAgentCoreControl {
  /**
   * @see {@link CreateAgentRuntimeCommand}
   */
  createAgentRuntime(
    args: CreateAgentRuntimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentRuntimeCommandOutput>;
  createAgentRuntime(
    args: CreateAgentRuntimeCommandInput,
    cb: (err: any, data?: CreateAgentRuntimeCommandOutput) => void
  ): void;
  createAgentRuntime(
    args: CreateAgentRuntimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAgentRuntimeEndpointCommand}
   */
  createAgentRuntimeEndpoint(
    args: CreateAgentRuntimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAgentRuntimeEndpointCommandOutput>;
  createAgentRuntimeEndpoint(
    args: CreateAgentRuntimeEndpointCommandInput,
    cb: (err: any, data?: CreateAgentRuntimeEndpointCommandOutput) => void
  ): void;
  createAgentRuntimeEndpoint(
    args: CreateAgentRuntimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAgentRuntimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApiKeyCredentialProviderCommand}
   */
  createApiKeyCredentialProvider(
    args: CreateApiKeyCredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiKeyCredentialProviderCommandOutput>;
  createApiKeyCredentialProvider(
    args: CreateApiKeyCredentialProviderCommandInput,
    cb: (err: any, data?: CreateApiKeyCredentialProviderCommandOutput) => void
  ): void;
  createApiKeyCredentialProvider(
    args: CreateApiKeyCredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrowserCommand}
   */
  createBrowser(
    args: CreateBrowserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrowserCommandOutput>;
  createBrowser(
    args: CreateBrowserCommandInput,
    cb: (err: any, data?: CreateBrowserCommandOutput) => void
  ): void;
  createBrowser(
    args: CreateBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrowserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBrowserProfileCommand}
   */
  createBrowserProfile(
    args: CreateBrowserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBrowserProfileCommandOutput>;
  createBrowserProfile(
    args: CreateBrowserProfileCommandInput,
    cb: (err: any, data?: CreateBrowserProfileCommandOutput) => void
  ): void;
  createBrowserProfile(
    args: CreateBrowserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrowserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeInterpreterCommand}
   */
  createCodeInterpreter(
    args: CreateCodeInterpreterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeInterpreterCommandOutput>;
  createCodeInterpreter(
    args: CreateCodeInterpreterCommandInput,
    cb: (err: any, data?: CreateCodeInterpreterCommandOutput) => void
  ): void;
  createCodeInterpreter(
    args: CreateCodeInterpreterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeInterpreterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEvaluatorCommand}
   */
  createEvaluator(
    args: CreateEvaluatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEvaluatorCommandOutput>;
  createEvaluator(
    args: CreateEvaluatorCommandInput,
    cb: (err: any, data?: CreateEvaluatorCommandOutput) => void
  ): void;
  createEvaluator(
    args: CreateEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(
    args: CreateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayCommandOutput>;
  createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayTargetCommand}
   */
  createGatewayTarget(
    args: CreateGatewayTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayTargetCommandOutput>;
  createGatewayTarget(
    args: CreateGatewayTargetCommandInput,
    cb: (err: any, data?: CreateGatewayTargetCommandOutput) => void
  ): void;
  createGatewayTarget(
    args: CreateGatewayTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMemoryCommand}
   */
  createMemory(
    args: CreateMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMemoryCommandOutput>;
  createMemory(
    args: CreateMemoryCommandInput,
    cb: (err: any, data?: CreateMemoryCommandOutput) => void
  ): void;
  createMemory(
    args: CreateMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOauth2CredentialProviderCommand}
   */
  createOauth2CredentialProvider(
    args: CreateOauth2CredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOauth2CredentialProviderCommandOutput>;
  createOauth2CredentialProvider(
    args: CreateOauth2CredentialProviderCommandInput,
    cb: (err: any, data?: CreateOauth2CredentialProviderCommandOutput) => void
  ): void;
  createOauth2CredentialProvider(
    args: CreateOauth2CredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOauth2CredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOnlineEvaluationConfigCommand}
   */
  createOnlineEvaluationConfig(
    args: CreateOnlineEvaluationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOnlineEvaluationConfigCommandOutput>;
  createOnlineEvaluationConfig(
    args: CreateOnlineEvaluationConfigCommandInput,
    cb: (err: any, data?: CreateOnlineEvaluationConfigCommandOutput) => void
  ): void;
  createOnlineEvaluationConfig(
    args: CreateOnlineEvaluationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOnlineEvaluationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(
    args: CreatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyCommandOutput>;
  createPolicy(
    args: CreatePolicyCommandInput,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyEngineCommand}
   */
  createPolicyEngine(
    args: CreatePolicyEngineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyEngineCommandOutput>;
  createPolicyEngine(
    args: CreatePolicyEngineCommandInput,
    cb: (err: any, data?: CreatePolicyEngineCommandOutput) => void
  ): void;
  createPolicyEngine(
    args: CreatePolicyEngineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyEngineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadIdentityCommand}
   */
  createWorkloadIdentity(
    args: CreateWorkloadIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadIdentityCommandOutput>;
  createWorkloadIdentity(
    args: CreateWorkloadIdentityCommandInput,
    cb: (err: any, data?: CreateWorkloadIdentityCommandOutput) => void
  ): void;
  createWorkloadIdentity(
    args: CreateWorkloadIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentRuntimeCommand}
   */
  deleteAgentRuntime(
    args: DeleteAgentRuntimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentRuntimeCommandOutput>;
  deleteAgentRuntime(
    args: DeleteAgentRuntimeCommandInput,
    cb: (err: any, data?: DeleteAgentRuntimeCommandOutput) => void
  ): void;
  deleteAgentRuntime(
    args: DeleteAgentRuntimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAgentRuntimeEndpointCommand}
   */
  deleteAgentRuntimeEndpoint(
    args: DeleteAgentRuntimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAgentRuntimeEndpointCommandOutput>;
  deleteAgentRuntimeEndpoint(
    args: DeleteAgentRuntimeEndpointCommandInput,
    cb: (err: any, data?: DeleteAgentRuntimeEndpointCommandOutput) => void
  ): void;
  deleteAgentRuntimeEndpoint(
    args: DeleteAgentRuntimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAgentRuntimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApiKeyCredentialProviderCommand}
   */
  deleteApiKeyCredentialProvider(
    args: DeleteApiKeyCredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiKeyCredentialProviderCommandOutput>;
  deleteApiKeyCredentialProvider(
    args: DeleteApiKeyCredentialProviderCommandInput,
    cb: (err: any, data?: DeleteApiKeyCredentialProviderCommandOutput) => void
  ): void;
  deleteApiKeyCredentialProvider(
    args: DeleteApiKeyCredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrowserCommand}
   */
  deleteBrowser(
    args: DeleteBrowserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrowserCommandOutput>;
  deleteBrowser(
    args: DeleteBrowserCommandInput,
    cb: (err: any, data?: DeleteBrowserCommandOutput) => void
  ): void;
  deleteBrowser(
    args: DeleteBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrowserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBrowserProfileCommand}
   */
  deleteBrowserProfile(
    args: DeleteBrowserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBrowserProfileCommandOutput>;
  deleteBrowserProfile(
    args: DeleteBrowserProfileCommandInput,
    cb: (err: any, data?: DeleteBrowserProfileCommandOutput) => void
  ): void;
  deleteBrowserProfile(
    args: DeleteBrowserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrowserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCodeInterpreterCommand}
   */
  deleteCodeInterpreter(
    args: DeleteCodeInterpreterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeInterpreterCommandOutput>;
  deleteCodeInterpreter(
    args: DeleteCodeInterpreterCommandInput,
    cb: (err: any, data?: DeleteCodeInterpreterCommandOutput) => void
  ): void;
  deleteCodeInterpreter(
    args: DeleteCodeInterpreterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeInterpreterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEvaluatorCommand}
   */
  deleteEvaluator(
    args: DeleteEvaluatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluatorCommandOutput>;
  deleteEvaluator(
    args: DeleteEvaluatorCommandInput,
    cb: (err: any, data?: DeleteEvaluatorCommandOutput) => void
  ): void;
  deleteEvaluator(
    args: DeleteEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayTargetCommand}
   */
  deleteGatewayTarget(
    args: DeleteGatewayTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayTargetCommandOutput>;
  deleteGatewayTarget(
    args: DeleteGatewayTargetCommandInput,
    cb: (err: any, data?: DeleteGatewayTargetCommandOutput) => void
  ): void;
  deleteGatewayTarget(
    args: DeleteGatewayTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemoryCommand}
   */
  deleteMemory(
    args: DeleteMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemoryCommandOutput>;
  deleteMemory(
    args: DeleteMemoryCommandInput,
    cb: (err: any, data?: DeleteMemoryCommandOutput) => void
  ): void;
  deleteMemory(
    args: DeleteMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOauth2CredentialProviderCommand}
   */
  deleteOauth2CredentialProvider(
    args: DeleteOauth2CredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOauth2CredentialProviderCommandOutput>;
  deleteOauth2CredentialProvider(
    args: DeleteOauth2CredentialProviderCommandInput,
    cb: (err: any, data?: DeleteOauth2CredentialProviderCommandOutput) => void
  ): void;
  deleteOauth2CredentialProvider(
    args: DeleteOauth2CredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOauth2CredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOnlineEvaluationConfigCommand}
   */
  deleteOnlineEvaluationConfig(
    args: DeleteOnlineEvaluationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOnlineEvaluationConfigCommandOutput>;
  deleteOnlineEvaluationConfig(
    args: DeleteOnlineEvaluationConfigCommandInput,
    cb: (err: any, data?: DeleteOnlineEvaluationConfigCommandOutput) => void
  ): void;
  deleteOnlineEvaluationConfig(
    args: DeleteOnlineEvaluationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOnlineEvaluationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyEngineCommand}
   */
  deletePolicyEngine(
    args: DeletePolicyEngineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyEngineCommandOutput>;
  deletePolicyEngine(
    args: DeletePolicyEngineCommandInput,
    cb: (err: any, data?: DeletePolicyEngineCommandOutput) => void
  ): void;
  deletePolicyEngine(
    args: DeletePolicyEngineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyEngineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadIdentityCommand}
   */
  deleteWorkloadIdentity(
    args: DeleteWorkloadIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadIdentityCommandOutput>;
  deleteWorkloadIdentity(
    args: DeleteWorkloadIdentityCommandInput,
    cb: (err: any, data?: DeleteWorkloadIdentityCommandOutput) => void
  ): void;
  deleteWorkloadIdentity(
    args: DeleteWorkloadIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentRuntimeCommand}
   */
  getAgentRuntime(
    args: GetAgentRuntimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentRuntimeCommandOutput>;
  getAgentRuntime(
    args: GetAgentRuntimeCommandInput,
    cb: (err: any, data?: GetAgentRuntimeCommandOutput) => void
  ): void;
  getAgentRuntime(
    args: GetAgentRuntimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentRuntimeEndpointCommand}
   */
  getAgentRuntimeEndpoint(
    args: GetAgentRuntimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentRuntimeEndpointCommandOutput>;
  getAgentRuntimeEndpoint(
    args: GetAgentRuntimeEndpointCommandInput,
    cb: (err: any, data?: GetAgentRuntimeEndpointCommandOutput) => void
  ): void;
  getAgentRuntimeEndpoint(
    args: GetAgentRuntimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentRuntimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApiKeyCredentialProviderCommand}
   */
  getApiKeyCredentialProvider(
    args: GetApiKeyCredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiKeyCredentialProviderCommandOutput>;
  getApiKeyCredentialProvider(
    args: GetApiKeyCredentialProviderCommandInput,
    cb: (err: any, data?: GetApiKeyCredentialProviderCommandOutput) => void
  ): void;
  getApiKeyCredentialProvider(
    args: GetApiKeyCredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeyCredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrowserCommand}
   */
  getBrowser(
    args: GetBrowserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBrowserCommandOutput>;
  getBrowser(
    args: GetBrowserCommandInput,
    cb: (err: any, data?: GetBrowserCommandOutput) => void
  ): void;
  getBrowser(
    args: GetBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBrowserProfileCommand}
   */
  getBrowserProfile(
    args: GetBrowserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBrowserProfileCommandOutput>;
  getBrowserProfile(
    args: GetBrowserProfileCommandInput,
    cb: (err: any, data?: GetBrowserProfileCommandOutput) => void
  ): void;
  getBrowserProfile(
    args: GetBrowserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeInterpreterCommand}
   */
  getCodeInterpreter(
    args: GetCodeInterpreterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeInterpreterCommandOutput>;
  getCodeInterpreter(
    args: GetCodeInterpreterCommandInput,
    cb: (err: any, data?: GetCodeInterpreterCommandOutput) => void
  ): void;
  getCodeInterpreter(
    args: GetCodeInterpreterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeInterpreterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvaluatorCommand}
   */
  getEvaluator(
    args: GetEvaluatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvaluatorCommandOutput>;
  getEvaluator(
    args: GetEvaluatorCommandInput,
    cb: (err: any, data?: GetEvaluatorCommandOutput) => void
  ): void;
  getEvaluator(
    args: GetEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(
    args: GetGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayCommandOutput>;
  getGateway(
    args: GetGatewayCommandInput,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;
  getGateway(
    args: GetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayTargetCommand}
   */
  getGatewayTarget(
    args: GetGatewayTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayTargetCommandOutput>;
  getGatewayTarget(
    args: GetGatewayTargetCommandInput,
    cb: (err: any, data?: GetGatewayTargetCommandOutput) => void
  ): void;
  getGatewayTarget(
    args: GetGatewayTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemoryCommand}
   */
  getMemory(
    args: GetMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemoryCommandOutput>;
  getMemory(
    args: GetMemoryCommandInput,
    cb: (err: any, data?: GetMemoryCommandOutput) => void
  ): void;
  getMemory(
    args: GetMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOauth2CredentialProviderCommand}
   */
  getOauth2CredentialProvider(
    args: GetOauth2CredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOauth2CredentialProviderCommandOutput>;
  getOauth2CredentialProvider(
    args: GetOauth2CredentialProviderCommandInput,
    cb: (err: any, data?: GetOauth2CredentialProviderCommandOutput) => void
  ): void;
  getOauth2CredentialProvider(
    args: GetOauth2CredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOauth2CredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOnlineEvaluationConfigCommand}
   */
  getOnlineEvaluationConfig(
    args: GetOnlineEvaluationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOnlineEvaluationConfigCommandOutput>;
  getOnlineEvaluationConfig(
    args: GetOnlineEvaluationConfigCommandInput,
    cb: (err: any, data?: GetOnlineEvaluationConfigCommandOutput) => void
  ): void;
  getOnlineEvaluationConfig(
    args: GetOnlineEvaluationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOnlineEvaluationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyEngineCommand}
   */
  getPolicyEngine(
    args: GetPolicyEngineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyEngineCommandOutput>;
  getPolicyEngine(
    args: GetPolicyEngineCommandInput,
    cb: (err: any, data?: GetPolicyEngineCommandOutput) => void
  ): void;
  getPolicyEngine(
    args: GetPolicyEngineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyEngineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyGenerationCommand}
   */
  getPolicyGeneration(
    args: GetPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyGenerationCommandOutput>;
  getPolicyGeneration(
    args: GetPolicyGenerationCommandInput,
    cb: (err: any, data?: GetPolicyGenerationCommandOutput) => void
  ): void;
  getPolicyGeneration(
    args: GetPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTokenVaultCommand}
   */
  getTokenVault(): Promise<GetTokenVaultCommandOutput>;
  getTokenVault(
    args: GetTokenVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTokenVaultCommandOutput>;
  getTokenVault(
    args: GetTokenVaultCommandInput,
    cb: (err: any, data?: GetTokenVaultCommandOutput) => void
  ): void;
  getTokenVault(
    args: GetTokenVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTokenVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadIdentityCommand}
   */
  getWorkloadIdentity(
    args: GetWorkloadIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadIdentityCommandOutput>;
  getWorkloadIdentity(
    args: GetWorkloadIdentityCommandInput,
    cb: (err: any, data?: GetWorkloadIdentityCommandOutput) => void
  ): void;
  getWorkloadIdentity(
    args: GetWorkloadIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRuntimeEndpointsCommand}
   */
  listAgentRuntimeEndpoints(
    args: ListAgentRuntimeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentRuntimeEndpointsCommandOutput>;
  listAgentRuntimeEndpoints(
    args: ListAgentRuntimeEndpointsCommandInput,
    cb: (err: any, data?: ListAgentRuntimeEndpointsCommandOutput) => void
  ): void;
  listAgentRuntimeEndpoints(
    args: ListAgentRuntimeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentRuntimeEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRuntimesCommand}
   */
  listAgentRuntimes(): Promise<ListAgentRuntimesCommandOutput>;
  listAgentRuntimes(
    args: ListAgentRuntimesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentRuntimesCommandOutput>;
  listAgentRuntimes(
    args: ListAgentRuntimesCommandInput,
    cb: (err: any, data?: ListAgentRuntimesCommandOutput) => void
  ): void;
  listAgentRuntimes(
    args: ListAgentRuntimesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentRuntimesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRuntimeVersionsCommand}
   */
  listAgentRuntimeVersions(
    args: ListAgentRuntimeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAgentRuntimeVersionsCommandOutput>;
  listAgentRuntimeVersions(
    args: ListAgentRuntimeVersionsCommandInput,
    cb: (err: any, data?: ListAgentRuntimeVersionsCommandOutput) => void
  ): void;
  listAgentRuntimeVersions(
    args: ListAgentRuntimeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAgentRuntimeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApiKeyCredentialProvidersCommand}
   */
  listApiKeyCredentialProviders(): Promise<ListApiKeyCredentialProvidersCommandOutput>;
  listApiKeyCredentialProviders(
    args: ListApiKeyCredentialProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApiKeyCredentialProvidersCommandOutput>;
  listApiKeyCredentialProviders(
    args: ListApiKeyCredentialProvidersCommandInput,
    cb: (err: any, data?: ListApiKeyCredentialProvidersCommandOutput) => void
  ): void;
  listApiKeyCredentialProviders(
    args: ListApiKeyCredentialProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiKeyCredentialProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrowserProfilesCommand}
   */
  listBrowserProfiles(): Promise<ListBrowserProfilesCommandOutput>;
  listBrowserProfiles(
    args: ListBrowserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrowserProfilesCommandOutput>;
  listBrowserProfiles(
    args: ListBrowserProfilesCommandInput,
    cb: (err: any, data?: ListBrowserProfilesCommandOutput) => void
  ): void;
  listBrowserProfiles(
    args: ListBrowserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrowserProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBrowsersCommand}
   */
  listBrowsers(): Promise<ListBrowsersCommandOutput>;
  listBrowsers(
    args: ListBrowsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBrowsersCommandOutput>;
  listBrowsers(
    args: ListBrowsersCommandInput,
    cb: (err: any, data?: ListBrowsersCommandOutput) => void
  ): void;
  listBrowsers(
    args: ListBrowsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBrowsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeInterpretersCommand}
   */
  listCodeInterpreters(): Promise<ListCodeInterpretersCommandOutput>;
  listCodeInterpreters(
    args: ListCodeInterpretersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeInterpretersCommandOutput>;
  listCodeInterpreters(
    args: ListCodeInterpretersCommandInput,
    cb: (err: any, data?: ListCodeInterpretersCommandOutput) => void
  ): void;
  listCodeInterpreters(
    args: ListCodeInterpretersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeInterpretersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEvaluatorsCommand}
   */
  listEvaluators(): Promise<ListEvaluatorsCommandOutput>;
  listEvaluators(
    args: ListEvaluatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEvaluatorsCommandOutput>;
  listEvaluators(
    args: ListEvaluatorsCommandInput,
    cb: (err: any, data?: ListEvaluatorsCommandOutput) => void
  ): void;
  listEvaluators(
    args: ListEvaluatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEvaluatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewayTargetsCommand}
   */
  listGatewayTargets(
    args: ListGatewayTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewayTargetsCommandOutput>;
  listGatewayTargets(
    args: ListGatewayTargetsCommandInput,
    cb: (err: any, data?: ListGatewayTargetsCommandOutput) => void
  ): void;
  listGatewayTargets(
    args: ListGatewayTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewayTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemoriesCommand}
   */
  listMemories(): Promise<ListMemoriesCommandOutput>;
  listMemories(
    args: ListMemoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemoriesCommandOutput>;
  listMemories(
    args: ListMemoriesCommandInput,
    cb: (err: any, data?: ListMemoriesCommandOutput) => void
  ): void;
  listMemories(
    args: ListMemoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOauth2CredentialProvidersCommand}
   */
  listOauth2CredentialProviders(): Promise<ListOauth2CredentialProvidersCommandOutput>;
  listOauth2CredentialProviders(
    args: ListOauth2CredentialProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOauth2CredentialProvidersCommandOutput>;
  listOauth2CredentialProviders(
    args: ListOauth2CredentialProvidersCommandInput,
    cb: (err: any, data?: ListOauth2CredentialProvidersCommandOutput) => void
  ): void;
  listOauth2CredentialProviders(
    args: ListOauth2CredentialProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOauth2CredentialProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOnlineEvaluationConfigsCommand}
   */
  listOnlineEvaluationConfigs(): Promise<ListOnlineEvaluationConfigsCommandOutput>;
  listOnlineEvaluationConfigs(
    args: ListOnlineEvaluationConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOnlineEvaluationConfigsCommandOutput>;
  listOnlineEvaluationConfigs(
    args: ListOnlineEvaluationConfigsCommandInput,
    cb: (err: any, data?: ListOnlineEvaluationConfigsCommandOutput) => void
  ): void;
  listOnlineEvaluationConfigs(
    args: ListOnlineEvaluationConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOnlineEvaluationConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyEnginesCommand}
   */
  listPolicyEngines(): Promise<ListPolicyEnginesCommandOutput>;
  listPolicyEngines(
    args: ListPolicyEnginesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyEnginesCommandOutput>;
  listPolicyEngines(
    args: ListPolicyEnginesCommandInput,
    cb: (err: any, data?: ListPolicyEnginesCommandOutput) => void
  ): void;
  listPolicyEngines(
    args: ListPolicyEnginesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyEnginesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyGenerationAssetsCommand}
   */
  listPolicyGenerationAssets(
    args: ListPolicyGenerationAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyGenerationAssetsCommandOutput>;
  listPolicyGenerationAssets(
    args: ListPolicyGenerationAssetsCommandInput,
    cb: (err: any, data?: ListPolicyGenerationAssetsCommandOutput) => void
  ): void;
  listPolicyGenerationAssets(
    args: ListPolicyGenerationAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyGenerationAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyGenerationsCommand}
   */
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyGenerationsCommandOutput>;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
  ): void;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadIdentitiesCommand}
   */
  listWorkloadIdentities(): Promise<ListWorkloadIdentitiesCommandOutput>;
  listWorkloadIdentities(
    args: ListWorkloadIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadIdentitiesCommandOutput>;
  listWorkloadIdentities(
    args: ListWorkloadIdentitiesCommandInput,
    cb: (err: any, data?: ListWorkloadIdentitiesCommandOutput) => void
  ): void;
  listWorkloadIdentities(
    args: ListWorkloadIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetTokenVaultCMKCommand}
   */
  setTokenVaultCMK(
    args: SetTokenVaultCMKCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTokenVaultCMKCommandOutput>;
  setTokenVaultCMK(
    args: SetTokenVaultCMKCommandInput,
    cb: (err: any, data?: SetTokenVaultCMKCommandOutput) => void
  ): void;
  setTokenVaultCMK(
    args: SetTokenVaultCMKCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTokenVaultCMKCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPolicyGenerationCommand}
   */
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPolicyGenerationCommandOutput>;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link SynchronizeGatewayTargetsCommand}
   */
  synchronizeGatewayTargets(
    args: SynchronizeGatewayTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SynchronizeGatewayTargetsCommandOutput>;
  synchronizeGatewayTargets(
    args: SynchronizeGatewayTargetsCommandInput,
    cb: (err: any, data?: SynchronizeGatewayTargetsCommandOutput) => void
  ): void;
  synchronizeGatewayTargets(
    args: SynchronizeGatewayTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SynchronizeGatewayTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentRuntimeCommand}
   */
  updateAgentRuntime(
    args: UpdateAgentRuntimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentRuntimeCommandOutput>;
  updateAgentRuntime(
    args: UpdateAgentRuntimeCommandInput,
    cb: (err: any, data?: UpdateAgentRuntimeCommandOutput) => void
  ): void;
  updateAgentRuntime(
    args: UpdateAgentRuntimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentRuntimeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentRuntimeEndpointCommand}
   */
  updateAgentRuntimeEndpoint(
    args: UpdateAgentRuntimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentRuntimeEndpointCommandOutput>;
  updateAgentRuntimeEndpoint(
    args: UpdateAgentRuntimeEndpointCommandInput,
    cb: (err: any, data?: UpdateAgentRuntimeEndpointCommandOutput) => void
  ): void;
  updateAgentRuntimeEndpoint(
    args: UpdateAgentRuntimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentRuntimeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApiKeyCredentialProviderCommand}
   */
  updateApiKeyCredentialProvider(
    args: UpdateApiKeyCredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiKeyCredentialProviderCommandOutput>;
  updateApiKeyCredentialProvider(
    args: UpdateApiKeyCredentialProviderCommandInput,
    cb: (err: any, data?: UpdateApiKeyCredentialProviderCommandOutput) => void
  ): void;
  updateApiKeyCredentialProvider(
    args: UpdateApiKeyCredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEvaluatorCommand}
   */
  updateEvaluator(
    args: UpdateEvaluatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEvaluatorCommandOutput>;
  updateEvaluator(
    args: UpdateEvaluatorCommandInput,
    cb: (err: any, data?: UpdateEvaluatorCommandOutput) => void
  ): void;
  updateEvaluator(
    args: UpdateEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(
    args: UpdateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCommandOutput>;
  updateGateway(
    args: UpdateGatewayCommandInput,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
  updateGateway(
    args: UpdateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayTargetCommand}
   */
  updateGatewayTarget(
    args: UpdateGatewayTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayTargetCommandOutput>;
  updateGatewayTarget(
    args: UpdateGatewayTargetCommandInput,
    cb: (err: any, data?: UpdateGatewayTargetCommandOutput) => void
  ): void;
  updateGatewayTarget(
    args: UpdateGatewayTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMemoryCommand}
   */
  updateMemory(
    args: UpdateMemoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemoryCommandOutput>;
  updateMemory(
    args: UpdateMemoryCommandInput,
    cb: (err: any, data?: UpdateMemoryCommandOutput) => void
  ): void;
  updateMemory(
    args: UpdateMemoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOauth2CredentialProviderCommand}
   */
  updateOauth2CredentialProvider(
    args: UpdateOauth2CredentialProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOauth2CredentialProviderCommandOutput>;
  updateOauth2CredentialProvider(
    args: UpdateOauth2CredentialProviderCommandInput,
    cb: (err: any, data?: UpdateOauth2CredentialProviderCommandOutput) => void
  ): void;
  updateOauth2CredentialProvider(
    args: UpdateOauth2CredentialProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOauth2CredentialProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOnlineEvaluationConfigCommand}
   */
  updateOnlineEvaluationConfig(
    args: UpdateOnlineEvaluationConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOnlineEvaluationConfigCommandOutput>;
  updateOnlineEvaluationConfig(
    args: UpdateOnlineEvaluationConfigCommandInput,
    cb: (err: any, data?: UpdateOnlineEvaluationConfigCommandOutput) => void
  ): void;
  updateOnlineEvaluationConfig(
    args: UpdateOnlineEvaluationConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOnlineEvaluationConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyEngineCommand}
   */
  updatePolicyEngine(
    args: UpdatePolicyEngineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyEngineCommandOutput>;
  updatePolicyEngine(
    args: UpdatePolicyEngineCommandInput,
    cb: (err: any, data?: UpdatePolicyEngineCommandOutput) => void
  ): void;
  updatePolicyEngine(
    args: UpdatePolicyEngineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyEngineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadIdentityCommand}
   */
  updateWorkloadIdentity(
    args: UpdateWorkloadIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadIdentityCommandOutput>;
  updateWorkloadIdentity(
    args: UpdateWorkloadIdentityCommandInput,
    cb: (err: any, data?: UpdateWorkloadIdentityCommandOutput) => void
  ): void;
  updateWorkloadIdentity(
    args: UpdateWorkloadIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAgentRuntimeEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRuntimeEndpointsCommandOutput}.
   */
  paginateListAgentRuntimeEndpoints(
    args: ListAgentRuntimeEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRuntimeEndpointsCommandOutput>;

  /**
   * @see {@link ListAgentRuntimesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRuntimesCommandOutput}.
   */
  paginateListAgentRuntimes(
    args?: ListAgentRuntimesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRuntimesCommandOutput>;

  /**
   * @see {@link ListAgentRuntimeVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAgentRuntimeVersionsCommandOutput}.
   */
  paginateListAgentRuntimeVersions(
    args: ListAgentRuntimeVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAgentRuntimeVersionsCommandOutput>;

  /**
   * @see {@link ListApiKeyCredentialProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApiKeyCredentialProvidersCommandOutput}.
   */
  paginateListApiKeyCredentialProviders(
    args?: ListApiKeyCredentialProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApiKeyCredentialProvidersCommandOutput>;

  /**
   * @see {@link ListBrowserProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrowserProfilesCommandOutput}.
   */
  paginateListBrowserProfiles(
    args?: ListBrowserProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrowserProfilesCommandOutput>;

  /**
   * @see {@link ListBrowsersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBrowsersCommandOutput}.
   */
  paginateListBrowsers(
    args?: ListBrowsersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBrowsersCommandOutput>;

  /**
   * @see {@link ListCodeInterpretersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCodeInterpretersCommandOutput}.
   */
  paginateListCodeInterpreters(
    args?: ListCodeInterpretersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCodeInterpretersCommandOutput>;

  /**
   * @see {@link ListEvaluatorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEvaluatorsCommandOutput}.
   */
  paginateListEvaluators(
    args?: ListEvaluatorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEvaluatorsCommandOutput>;

  /**
   * @see {@link ListGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewaysCommandOutput}.
   */
  paginateListGateways(
    args?: ListGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewaysCommandOutput>;

  /**
   * @see {@link ListGatewayTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewayTargetsCommandOutput}.
   */
  paginateListGatewayTargets(
    args: ListGatewayTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewayTargetsCommandOutput>;

  /**
   * @see {@link ListMemoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMemoriesCommandOutput}.
   */
  paginateListMemories(
    args?: ListMemoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMemoriesCommandOutput>;

  /**
   * @see {@link ListOauth2CredentialProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOauth2CredentialProvidersCommandOutput}.
   */
  paginateListOauth2CredentialProviders(
    args?: ListOauth2CredentialProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOauth2CredentialProvidersCommandOutput>;

  /**
   * @see {@link ListOnlineEvaluationConfigsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOnlineEvaluationConfigsCommandOutput}.
   */
  paginateListOnlineEvaluationConfigs(
    args?: ListOnlineEvaluationConfigsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOnlineEvaluationConfigsCommandOutput>;

  /**
   * @see {@link ListPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPoliciesCommandOutput}.
   */
  paginateListPolicies(
    args: ListPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPoliciesCommandOutput>;

  /**
   * @see {@link ListPolicyEnginesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyEnginesCommandOutput}.
   */
  paginateListPolicyEngines(
    args?: ListPolicyEnginesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyEnginesCommandOutput>;

  /**
   * @see {@link ListPolicyGenerationAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyGenerationAssetsCommandOutput}.
   */
  paginateListPolicyGenerationAssets(
    args: ListPolicyGenerationAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyGenerationAssetsCommandOutput>;

  /**
   * @see {@link ListPolicyGenerationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPolicyGenerationsCommandOutput}.
   */
  paginateListPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPolicyGenerationsCommandOutput>;

  /**
   * @see {@link ListWorkloadIdentitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadIdentitiesCommandOutput}.
   */
  paginateListWorkloadIdentities(
    args?: ListWorkloadIdentitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadIdentitiesCommandOutput>;

  /**
   * @see {@link GetMemoryCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilMemoryCreated(
    args: GetMemoryCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPolicyCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPolicyActive(
    args: GetPolicyCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPolicyCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPolicyDeleted(
    args: GetPolicyCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPolicyEngineCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPolicyEngineActive(
    args: GetPolicyEngineCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPolicyEngineCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPolicyEngineDeleted(
    args: GetPolicyEngineCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link GetPolicyGenerationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPolicyGenerationCompleted(
    args: GetPolicyGenerationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<BedrockAgentCoreControl>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Control plane API reference. Control plane actions configure, create, modify, and monitor Amazon Web Services resources.</p>
 * @public
 */
export class BedrockAgentCoreControl extends BedrockAgentCoreControlClient implements BedrockAgentCoreControl {}
createAggregatedClient(commands, BedrockAgentCoreControl, { paginators, waiters });
