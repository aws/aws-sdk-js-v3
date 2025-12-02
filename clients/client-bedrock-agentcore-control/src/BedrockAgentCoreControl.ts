// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockAgentCoreControlClient, BedrockAgentCoreControlClientConfig } from "./BedrockAgentCoreControlClient";
import {
  CreateAgentRuntimeCommand,
  CreateAgentRuntimeCommandInput,
  CreateAgentRuntimeCommandOutput,
} from "./commands/CreateAgentRuntimeCommand";
import {
  CreateAgentRuntimeEndpointCommand,
  CreateAgentRuntimeEndpointCommandInput,
  CreateAgentRuntimeEndpointCommandOutput,
} from "./commands/CreateAgentRuntimeEndpointCommand";
import {
  CreateApiKeyCredentialProviderCommand,
  CreateApiKeyCredentialProviderCommandInput,
  CreateApiKeyCredentialProviderCommandOutput,
} from "./commands/CreateApiKeyCredentialProviderCommand";
import {
  CreateBrowserCommand,
  CreateBrowserCommandInput,
  CreateBrowserCommandOutput,
} from "./commands/CreateBrowserCommand";
import {
  CreateCodeInterpreterCommand,
  CreateCodeInterpreterCommandInput,
  CreateCodeInterpreterCommandOutput,
} from "./commands/CreateCodeInterpreterCommand";
import {
  CreateEvaluatorCommand,
  CreateEvaluatorCommandInput,
  CreateEvaluatorCommandOutput,
} from "./commands/CreateEvaluatorCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  CreateGatewayTargetCommand,
  CreateGatewayTargetCommandInput,
  CreateGatewayTargetCommandOutput,
} from "./commands/CreateGatewayTargetCommand";
import {
  CreateMemoryCommand,
  CreateMemoryCommandInput,
  CreateMemoryCommandOutput,
} from "./commands/CreateMemoryCommand";
import {
  CreateOauth2CredentialProviderCommand,
  CreateOauth2CredentialProviderCommandInput,
  CreateOauth2CredentialProviderCommandOutput,
} from "./commands/CreateOauth2CredentialProviderCommand";
import {
  CreateOnlineEvaluationConfigCommand,
  CreateOnlineEvaluationConfigCommandInput,
  CreateOnlineEvaluationConfigCommandOutput,
} from "./commands/CreateOnlineEvaluationConfigCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyEngineCommand,
  CreatePolicyEngineCommandInput,
  CreatePolicyEngineCommandOutput,
} from "./commands/CreatePolicyEngineCommand";
import {
  CreateWorkloadIdentityCommand,
  CreateWorkloadIdentityCommandInput,
  CreateWorkloadIdentityCommandOutput,
} from "./commands/CreateWorkloadIdentityCommand";
import {
  DeleteAgentRuntimeCommand,
  DeleteAgentRuntimeCommandInput,
  DeleteAgentRuntimeCommandOutput,
} from "./commands/DeleteAgentRuntimeCommand";
import {
  DeleteAgentRuntimeEndpointCommand,
  DeleteAgentRuntimeEndpointCommandInput,
  DeleteAgentRuntimeEndpointCommandOutput,
} from "./commands/DeleteAgentRuntimeEndpointCommand";
import {
  DeleteApiKeyCredentialProviderCommand,
  DeleteApiKeyCredentialProviderCommandInput,
  DeleteApiKeyCredentialProviderCommandOutput,
} from "./commands/DeleteApiKeyCredentialProviderCommand";
import {
  DeleteBrowserCommand,
  DeleteBrowserCommandInput,
  DeleteBrowserCommandOutput,
} from "./commands/DeleteBrowserCommand";
import {
  DeleteCodeInterpreterCommand,
  DeleteCodeInterpreterCommandInput,
  DeleteCodeInterpreterCommandOutput,
} from "./commands/DeleteCodeInterpreterCommand";
import {
  DeleteEvaluatorCommand,
  DeleteEvaluatorCommandInput,
  DeleteEvaluatorCommandOutput,
} from "./commands/DeleteEvaluatorCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteGatewayTargetCommand,
  DeleteGatewayTargetCommandInput,
  DeleteGatewayTargetCommandOutput,
} from "./commands/DeleteGatewayTargetCommand";
import {
  DeleteMemoryCommand,
  DeleteMemoryCommandInput,
  DeleteMemoryCommandOutput,
} from "./commands/DeleteMemoryCommand";
import {
  DeleteOauth2CredentialProviderCommand,
  DeleteOauth2CredentialProviderCommandInput,
  DeleteOauth2CredentialProviderCommandOutput,
} from "./commands/DeleteOauth2CredentialProviderCommand";
import {
  DeleteOnlineEvaluationConfigCommand,
  DeleteOnlineEvaluationConfigCommandInput,
  DeleteOnlineEvaluationConfigCommandOutput,
} from "./commands/DeleteOnlineEvaluationConfigCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyEngineCommand,
  DeletePolicyEngineCommandInput,
  DeletePolicyEngineCommandOutput,
} from "./commands/DeletePolicyEngineCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteWorkloadIdentityCommand,
  DeleteWorkloadIdentityCommandInput,
  DeleteWorkloadIdentityCommandOutput,
} from "./commands/DeleteWorkloadIdentityCommand";
import {
  GetAgentRuntimeCommand,
  GetAgentRuntimeCommandInput,
  GetAgentRuntimeCommandOutput,
} from "./commands/GetAgentRuntimeCommand";
import {
  GetAgentRuntimeEndpointCommand,
  GetAgentRuntimeEndpointCommandInput,
  GetAgentRuntimeEndpointCommandOutput,
} from "./commands/GetAgentRuntimeEndpointCommand";
import {
  GetApiKeyCredentialProviderCommand,
  GetApiKeyCredentialProviderCommandInput,
  GetApiKeyCredentialProviderCommandOutput,
} from "./commands/GetApiKeyCredentialProviderCommand";
import { GetBrowserCommand, GetBrowserCommandInput, GetBrowserCommandOutput } from "./commands/GetBrowserCommand";
import {
  GetCodeInterpreterCommand,
  GetCodeInterpreterCommandInput,
  GetCodeInterpreterCommandOutput,
} from "./commands/GetCodeInterpreterCommand";
import {
  GetEvaluatorCommand,
  GetEvaluatorCommandInput,
  GetEvaluatorCommandOutput,
} from "./commands/GetEvaluatorCommand";
import { GetGatewayCommand, GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import {
  GetGatewayTargetCommand,
  GetGatewayTargetCommandInput,
  GetGatewayTargetCommandOutput,
} from "./commands/GetGatewayTargetCommand";
import { GetMemoryCommand, GetMemoryCommandInput, GetMemoryCommandOutput } from "./commands/GetMemoryCommand";
import {
  GetOauth2CredentialProviderCommand,
  GetOauth2CredentialProviderCommandInput,
  GetOauth2CredentialProviderCommandOutput,
} from "./commands/GetOauth2CredentialProviderCommand";
import {
  GetOnlineEvaluationConfigCommand,
  GetOnlineEvaluationConfigCommandInput,
  GetOnlineEvaluationConfigCommandOutput,
} from "./commands/GetOnlineEvaluationConfigCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetPolicyEngineCommand,
  GetPolicyEngineCommandInput,
  GetPolicyEngineCommandOutput,
} from "./commands/GetPolicyEngineCommand";
import {
  GetPolicyGenerationCommand,
  GetPolicyGenerationCommandInput,
  GetPolicyGenerationCommandOutput,
} from "./commands/GetPolicyGenerationCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetTokenVaultCommand,
  GetTokenVaultCommandInput,
  GetTokenVaultCommandOutput,
} from "./commands/GetTokenVaultCommand";
import {
  GetWorkloadIdentityCommand,
  GetWorkloadIdentityCommandInput,
  GetWorkloadIdentityCommandOutput,
} from "./commands/GetWorkloadIdentityCommand";
import {
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput,
} from "./commands/ListAgentRuntimeEndpointsCommand";
import {
  ListAgentRuntimesCommand,
  ListAgentRuntimesCommandInput,
  ListAgentRuntimesCommandOutput,
} from "./commands/ListAgentRuntimesCommand";
import {
  ListAgentRuntimeVersionsCommand,
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput,
} from "./commands/ListAgentRuntimeVersionsCommand";
import {
  ListApiKeyCredentialProvidersCommand,
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput,
} from "./commands/ListApiKeyCredentialProvidersCommand";
import {
  ListBrowsersCommand,
  ListBrowsersCommandInput,
  ListBrowsersCommandOutput,
} from "./commands/ListBrowsersCommand";
import {
  ListCodeInterpretersCommand,
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput,
} from "./commands/ListCodeInterpretersCommand";
import {
  ListEvaluatorsCommand,
  ListEvaluatorsCommandInput,
  ListEvaluatorsCommandOutput,
} from "./commands/ListEvaluatorsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListGatewayTargetsCommand,
  ListGatewayTargetsCommandInput,
  ListGatewayTargetsCommandOutput,
} from "./commands/ListGatewayTargetsCommand";
import {
  ListMemoriesCommand,
  ListMemoriesCommandInput,
  ListMemoriesCommandOutput,
} from "./commands/ListMemoriesCommand";
import {
  ListOauth2CredentialProvidersCommand,
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput,
} from "./commands/ListOauth2CredentialProvidersCommand";
import {
  ListOnlineEvaluationConfigsCommand,
  ListOnlineEvaluationConfigsCommandInput,
  ListOnlineEvaluationConfigsCommandOutput,
} from "./commands/ListOnlineEvaluationConfigsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPolicyEnginesCommand,
  ListPolicyEnginesCommandInput,
  ListPolicyEnginesCommandOutput,
} from "./commands/ListPolicyEnginesCommand";
import {
  ListPolicyGenerationAssetsCommand,
  ListPolicyGenerationAssetsCommandInput,
  ListPolicyGenerationAssetsCommandOutput,
} from "./commands/ListPolicyGenerationAssetsCommand";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadIdentitiesCommand,
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput,
} from "./commands/ListWorkloadIdentitiesCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  SetTokenVaultCMKCommand,
  SetTokenVaultCMKCommandInput,
  SetTokenVaultCMKCommandOutput,
} from "./commands/SetTokenVaultCMKCommand";
import {
  StartPolicyGenerationCommand,
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import {
  SynchronizeGatewayTargetsCommand,
  SynchronizeGatewayTargetsCommandInput,
  SynchronizeGatewayTargetsCommandOutput,
} from "./commands/SynchronizeGatewayTargetsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentRuntimeCommand,
  UpdateAgentRuntimeCommandInput,
  UpdateAgentRuntimeCommandOutput,
} from "./commands/UpdateAgentRuntimeCommand";
import {
  UpdateAgentRuntimeEndpointCommand,
  UpdateAgentRuntimeEndpointCommandInput,
  UpdateAgentRuntimeEndpointCommandOutput,
} from "./commands/UpdateAgentRuntimeEndpointCommand";
import {
  UpdateApiKeyCredentialProviderCommand,
  UpdateApiKeyCredentialProviderCommandInput,
  UpdateApiKeyCredentialProviderCommandOutput,
} from "./commands/UpdateApiKeyCredentialProviderCommand";
import {
  UpdateEvaluatorCommand,
  UpdateEvaluatorCommandInput,
  UpdateEvaluatorCommandOutput,
} from "./commands/UpdateEvaluatorCommand";
import {
  UpdateGatewayCommand,
  UpdateGatewayCommandInput,
  UpdateGatewayCommandOutput,
} from "./commands/UpdateGatewayCommand";
import {
  UpdateGatewayTargetCommand,
  UpdateGatewayTargetCommandInput,
  UpdateGatewayTargetCommandOutput,
} from "./commands/UpdateGatewayTargetCommand";
import {
  UpdateMemoryCommand,
  UpdateMemoryCommandInput,
  UpdateMemoryCommandOutput,
} from "./commands/UpdateMemoryCommand";
import {
  UpdateOauth2CredentialProviderCommand,
  UpdateOauth2CredentialProviderCommandInput,
  UpdateOauth2CredentialProviderCommandOutput,
} from "./commands/UpdateOauth2CredentialProviderCommand";
import {
  UpdateOnlineEvaluationConfigCommand,
  UpdateOnlineEvaluationConfigCommandInput,
  UpdateOnlineEvaluationConfigCommandOutput,
} from "./commands/UpdateOnlineEvaluationConfigCommand";
import {
  UpdatePolicyCommand,
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
} from "./commands/UpdatePolicyCommand";
import {
  UpdatePolicyEngineCommand,
  UpdatePolicyEngineCommandInput,
  UpdatePolicyEngineCommandOutput,
} from "./commands/UpdatePolicyEngineCommand";
import {
  UpdateWorkloadIdentityCommand,
  UpdateWorkloadIdentityCommandInput,
  UpdateWorkloadIdentityCommandOutput,
} from "./commands/UpdateWorkloadIdentityCommand";

const commands = {
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
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimesCommand,
  ListAgentRuntimeVersionsCommand,
  ListApiKeyCredentialProvidersCommand,
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
  createBrowser(args: CreateBrowserCommandInput, options?: __HttpHandlerOptions): Promise<CreateBrowserCommandOutput>;
  createBrowser(args: CreateBrowserCommandInput, cb: (err: any, data?: CreateBrowserCommandOutput) => void): void;
  createBrowser(
    args: CreateBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBrowserCommandOutput) => void
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
  createEvaluator(args: CreateEvaluatorCommandInput, cb: (err: any, data?: CreateEvaluatorCommandOutput) => void): void;
  createEvaluator(
    args: CreateEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(args: CreateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayCommandOutput>;
  createGateway(args: CreateGatewayCommandInput, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
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
  createMemory(args: CreateMemoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateMemoryCommandOutput>;
  createMemory(args: CreateMemoryCommandInput, cb: (err: any, data?: CreateMemoryCommandOutput) => void): void;
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
  createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
  createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
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
  deleteBrowser(args: DeleteBrowserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBrowserCommandOutput>;
  deleteBrowser(args: DeleteBrowserCommandInput, cb: (err: any, data?: DeleteBrowserCommandOutput) => void): void;
  deleteBrowser(
    args: DeleteBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBrowserCommandOutput) => void
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
  deleteEvaluator(args: DeleteEvaluatorCommandInput, cb: (err: any, data?: DeleteEvaluatorCommandOutput) => void): void;
  deleteEvaluator(
    args: DeleteEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
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
  deleteMemory(args: DeleteMemoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMemoryCommandOutput>;
  deleteMemory(args: DeleteMemoryCommandInput, cb: (err: any, data?: DeleteMemoryCommandOutput) => void): void;
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
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
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
  getAgentRuntime(args: GetAgentRuntimeCommandInput, cb: (err: any, data?: GetAgentRuntimeCommandOutput) => void): void;
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
  getBrowser(args: GetBrowserCommandInput, options?: __HttpHandlerOptions): Promise<GetBrowserCommandOutput>;
  getBrowser(args: GetBrowserCommandInput, cb: (err: any, data?: GetBrowserCommandOutput) => void): void;
  getBrowser(
    args: GetBrowserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBrowserCommandOutput) => void
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
  getEvaluator(args: GetEvaluatorCommandInput, options?: __HttpHandlerOptions): Promise<GetEvaluatorCommandOutput>;
  getEvaluator(args: GetEvaluatorCommandInput, cb: (err: any, data?: GetEvaluatorCommandOutput) => void): void;
  getEvaluator(
    args: GetEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGatewayCommand}
   */
  getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
  getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
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
  getMemory(args: GetMemoryCommandInput, options?: __HttpHandlerOptions): Promise<GetMemoryCommandOutput>;
  getMemory(args: GetMemoryCommandInput, cb: (err: any, data?: GetMemoryCommandOutput) => void): void;
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
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
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
  getPolicyEngine(args: GetPolicyEngineCommandInput, cb: (err: any, data?: GetPolicyEngineCommandOutput) => void): void;
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
  getTokenVault(args: GetTokenVaultCommandInput, options?: __HttpHandlerOptions): Promise<GetTokenVaultCommandOutput>;
  getTokenVault(args: GetTokenVaultCommandInput, cb: (err: any, data?: GetTokenVaultCommandOutput) => void): void;
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
   * @see {@link ListBrowsersCommand}
   */
  listBrowsers(): Promise<ListBrowsersCommandOutput>;
  listBrowsers(args: ListBrowsersCommandInput, options?: __HttpHandlerOptions): Promise<ListBrowsersCommandOutput>;
  listBrowsers(args: ListBrowsersCommandInput, cb: (err: any, data?: ListBrowsersCommandOutput) => void): void;
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
  listEvaluators(args: ListEvaluatorsCommandInput, cb: (err: any, data?: ListEvaluatorsCommandOutput) => void): void;
  listEvaluators(
    args: ListEvaluatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEvaluatorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
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
  listMemories(args: ListMemoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListMemoriesCommandOutput>;
  listMemories(args: ListMemoriesCommandInput, cb: (err: any, data?: ListMemoriesCommandOutput) => void): void;
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
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateEvaluator(args: UpdateEvaluatorCommandInput, cb: (err: any, data?: UpdateEvaluatorCommandOutput) => void): void;
  updateEvaluator(
    args: UpdateEvaluatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEvaluatorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(args: UpdateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCommandOutput>;
  updateGateway(args: UpdateGatewayCommandInput, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
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
  updateMemory(args: UpdateMemoryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMemoryCommandOutput>;
  updateMemory(args: UpdateMemoryCommandInput, cb: (err: any, data?: UpdateMemoryCommandOutput) => void): void;
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
  updatePolicy(args: UpdatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(args: UpdatePolicyCommandInput, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
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
}

/**
 * <p>Welcome to the Amazon Bedrock AgentCore Control plane API reference. Control plane actions configure, create, modify, and monitor Amazon Web Services resources.</p>
 * @public
 */
export class BedrockAgentCoreControl extends BedrockAgentCoreControlClient implements BedrockAgentCoreControl {}
createAggregatedClient(commands, BedrockAgentCoreControl);
