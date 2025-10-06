// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import { CreateAgentRuntimeCommandInput, CreateAgentRuntimeCommandOutput } from "../commands/CreateAgentRuntimeCommand";
import {
  CreateAgentRuntimeEndpointCommandInput,
  CreateAgentRuntimeEndpointCommandOutput,
} from "../commands/CreateAgentRuntimeEndpointCommand";
import {
  CreateApiKeyCredentialProviderCommandInput,
  CreateApiKeyCredentialProviderCommandOutput,
} from "../commands/CreateApiKeyCredentialProviderCommand";
import { CreateBrowserCommandInput, CreateBrowserCommandOutput } from "../commands/CreateBrowserCommand";
import {
  CreateCodeInterpreterCommandInput,
  CreateCodeInterpreterCommandOutput,
} from "../commands/CreateCodeInterpreterCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "../commands/CreateGatewayCommand";
import {
  CreateGatewayTargetCommandInput,
  CreateGatewayTargetCommandOutput,
} from "../commands/CreateGatewayTargetCommand";
import { CreateMemoryCommandInput, CreateMemoryCommandOutput } from "../commands/CreateMemoryCommand";
import {
  CreateOauth2CredentialProviderCommandInput,
  CreateOauth2CredentialProviderCommandOutput,
} from "../commands/CreateOauth2CredentialProviderCommand";
import {
  CreateWorkloadIdentityCommandInput,
  CreateWorkloadIdentityCommandOutput,
} from "../commands/CreateWorkloadIdentityCommand";
import { DeleteAgentRuntimeCommandInput, DeleteAgentRuntimeCommandOutput } from "../commands/DeleteAgentRuntimeCommand";
import {
  DeleteAgentRuntimeEndpointCommandInput,
  DeleteAgentRuntimeEndpointCommandOutput,
} from "../commands/DeleteAgentRuntimeEndpointCommand";
import {
  DeleteApiKeyCredentialProviderCommandInput,
  DeleteApiKeyCredentialProviderCommandOutput,
} from "../commands/DeleteApiKeyCredentialProviderCommand";
import { DeleteBrowserCommandInput, DeleteBrowserCommandOutput } from "../commands/DeleteBrowserCommand";
import {
  DeleteCodeInterpreterCommandInput,
  DeleteCodeInterpreterCommandOutput,
} from "../commands/DeleteCodeInterpreterCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import {
  DeleteGatewayTargetCommandInput,
  DeleteGatewayTargetCommandOutput,
} from "../commands/DeleteGatewayTargetCommand";
import { DeleteMemoryCommandInput, DeleteMemoryCommandOutput } from "../commands/DeleteMemoryCommand";
import {
  DeleteOauth2CredentialProviderCommandInput,
  DeleteOauth2CredentialProviderCommandOutput,
} from "../commands/DeleteOauth2CredentialProviderCommand";
import {
  DeleteWorkloadIdentityCommandInput,
  DeleteWorkloadIdentityCommandOutput,
} from "../commands/DeleteWorkloadIdentityCommand";
import { GetAgentRuntimeCommandInput, GetAgentRuntimeCommandOutput } from "../commands/GetAgentRuntimeCommand";
import {
  GetAgentRuntimeEndpointCommandInput,
  GetAgentRuntimeEndpointCommandOutput,
} from "../commands/GetAgentRuntimeEndpointCommand";
import {
  GetApiKeyCredentialProviderCommandInput,
  GetApiKeyCredentialProviderCommandOutput,
} from "../commands/GetApiKeyCredentialProviderCommand";
import { GetBrowserCommandInput, GetBrowserCommandOutput } from "../commands/GetBrowserCommand";
import { GetCodeInterpreterCommandInput, GetCodeInterpreterCommandOutput } from "../commands/GetCodeInterpreterCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "../commands/GetGatewayCommand";
import { GetGatewayTargetCommandInput, GetGatewayTargetCommandOutput } from "../commands/GetGatewayTargetCommand";
import { GetMemoryCommandInput, GetMemoryCommandOutput } from "../commands/GetMemoryCommand";
import {
  GetOauth2CredentialProviderCommandInput,
  GetOauth2CredentialProviderCommandOutput,
} from "../commands/GetOauth2CredentialProviderCommand";
import { GetTokenVaultCommandInput, GetTokenVaultCommandOutput } from "../commands/GetTokenVaultCommand";
import {
  GetWorkloadIdentityCommandInput,
  GetWorkloadIdentityCommandOutput,
} from "../commands/GetWorkloadIdentityCommand";
import {
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput,
} from "../commands/ListAgentRuntimeEndpointsCommand";
import { ListAgentRuntimesCommandInput, ListAgentRuntimesCommandOutput } from "../commands/ListAgentRuntimesCommand";
import {
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput,
} from "../commands/ListAgentRuntimeVersionsCommand";
import {
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput,
} from "../commands/ListApiKeyCredentialProvidersCommand";
import { ListBrowsersCommandInput, ListBrowsersCommandOutput } from "../commands/ListBrowsersCommand";
import {
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput,
} from "../commands/ListCodeInterpretersCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListGatewayTargetsCommandInput, ListGatewayTargetsCommandOutput } from "../commands/ListGatewayTargetsCommand";
import { ListMemoriesCommandInput, ListMemoriesCommandOutput } from "../commands/ListMemoriesCommand";
import {
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput,
} from "../commands/ListOauth2CredentialProvidersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput,
} from "../commands/ListWorkloadIdentitiesCommand";
import { SetTokenVaultCMKCommandInput, SetTokenVaultCMKCommandOutput } from "../commands/SetTokenVaultCMKCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentRuntimeCommandInput, UpdateAgentRuntimeCommandOutput } from "../commands/UpdateAgentRuntimeCommand";
import {
  UpdateAgentRuntimeEndpointCommandInput,
  UpdateAgentRuntimeEndpointCommandOutput,
} from "../commands/UpdateAgentRuntimeEndpointCommand";
import {
  UpdateApiKeyCredentialProviderCommandInput,
  UpdateApiKeyCredentialProviderCommandOutput,
} from "../commands/UpdateApiKeyCredentialProviderCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "../commands/UpdateGatewayCommand";
import {
  UpdateGatewayTargetCommandInput,
  UpdateGatewayTargetCommandOutput,
} from "../commands/UpdateGatewayTargetCommand";
import { UpdateMemoryCommandInput, UpdateMemoryCommandOutput } from "../commands/UpdateMemoryCommand";
import {
  UpdateOauth2CredentialProviderCommandInput,
  UpdateOauth2CredentialProviderCommandOutput,
} from "../commands/UpdateOauth2CredentialProviderCommand";
import {
  UpdateWorkloadIdentityCommandInput,
  UpdateWorkloadIdentityCommandOutput,
} from "../commands/UpdateWorkloadIdentityCommand";
import { BedrockAgentCoreControlServiceException as __BaseException } from "../models/BedrockAgentCoreControlServiceException";
import {
  AccessDeniedException,
  AgentRuntime,
  AgentRuntimeArtifact,
  AgentRuntimeEndpoint,
  ApiKeyCredentialProviderItem,
  ApiSchemaConfiguration,
  AuthorizerConfiguration,
  BrowserNetworkConfiguration,
  BrowserSummary,
  CodeInterpreterNetworkConfiguration,
  CodeInterpreterSummary,
  ConcurrentModificationException,
  ConflictException,
  ContainerConfiguration,
  CredentialProvider,
  CredentialProviderConfiguration,
  CustomConfigurationInput,
  CustomConsolidationConfigurationInput,
  CustomExtractionConfigurationInput,
  CustomJWTAuthorizerConfiguration,
  CustomMemoryStrategyInput,
  CustomOauth2ProviderConfigInput,
  DecryptionFailure,
  DeleteMemoryStrategyInput,
  EncryptionFailure,
  GatewayApiKeyCredentialProvider,
  GatewayProtocolConfiguration,
  GatewaySummary,
  GithubOauth2ProviderConfigInput,
  GoogleOauth2ProviderConfigInput,
  InternalServerException,
  KmsConfiguration,
  LifecycleConfiguration,
  MCPGatewayConfiguration,
  McpLambdaTargetConfiguration,
  McpTargetConfiguration,
  Memory,
  MemoryStrategy,
  MemoryStrategyInput,
  MemorySummary,
  MicrosoftOauth2ProviderConfigInput,
  ModifyConsolidationConfiguration,
  ModifyExtractionConfiguration,
  ModifyMemoryStrategies,
  ModifyMemoryStrategyInput,
  ModifyStrategyConfiguration,
  NetworkConfiguration,
  Oauth2AuthorizationServerMetadata,
  Oauth2CredentialProviderItem,
  Oauth2Discovery,
  Oauth2ProviderConfigInput,
  OAuthCredentialProvider,
  ProtocolConfiguration,
  RecordingConfig,
  RequestHeaderConfiguration,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  S3Configuration,
  S3Location,
  SalesforceOauth2ProviderConfigInput,
  SchemaDefinition,
  SemanticMemoryStrategyInput,
  SemanticOverrideConfigurationInput,
  SemanticOverrideConsolidationConfigurationInput,
  SemanticOverrideExtractionConfigurationInput,
  ServiceException,
  ServiceQuotaExceededException,
  SlackOauth2ProviderConfigInput,
  SummaryMemoryStrategyInput,
  SummaryOverrideConfigurationInput,
  SummaryOverrideConsolidationConfigurationInput,
  TargetConfiguration,
  TargetSummary,
  ThrottledException,
  ThrottlingException,
  ToolDefinition,
  ToolSchema,
  UnauthorizedException,
  UserPreferenceMemoryStrategyInput,
  UserPreferenceOverrideConfigurationInput,
  UserPreferenceOverrideConsolidationConfigurationInput,
  UserPreferenceOverrideExtractionConfigurationInput,
  ValidationException,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAgentRuntimeCommand
 */
export const se_CreateAgentRuntimeCommand = async (
  input: CreateAgentRuntimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/runtimes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentRuntimeArtifact: (_) => _json(_),
      agentRuntimeName: [],
      authorizerConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      environmentVariables: (_) => _json(_),
      lifecycleConfiguration: (_) => _json(_),
      networkConfiguration: (_) => _json(_),
      protocolConfiguration: (_) => _json(_),
      requestHeaderConfiguration: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAgentRuntimeEndpointCommand
 */
export const se_CreateAgentRuntimeEndpointCommand = async (
  input: CreateAgentRuntimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/runtimes/{agentRuntimeId}/runtime-endpoints");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentRuntimeVersion: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApiKeyCredentialProviderCommand
 */
export const se_CreateApiKeyCredentialProviderCommand = async (
  input: CreateApiKeyCredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/CreateApiKeyCredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKey: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBrowserCommand
 */
export const se_CreateBrowserCommand = async (
  input: CreateBrowserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/browsers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      executionRoleArn: [],
      name: [],
      networkConfiguration: (_) => _json(_),
      recording: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCodeInterpreterCommand
 */
export const se_CreateCodeInterpreterCommand = async (
  input: CreateCodeInterpreterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/code-interpreters");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      executionRoleArn: [],
      name: [],
      networkConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGatewayCommand
 */
export const se_CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateways");
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorizerConfiguration: (_) => _json(_),
      authorizerType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      exceptionLevel: [],
      kmsKeyArn: [],
      name: [],
      protocolConfiguration: (_) => _json(_),
      protocolType: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGatewayTargetCommand
 */
export const se_CreateGatewayTargetCommand = async (
  input: CreateGatewayTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateways/{gatewayIdentifier}/targets");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      credentialProviderConfigurations: (_) => _json(_),
      description: [],
      name: [],
      targetConfiguration: (_) => se_TargetConfiguration(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMemoryCommand
 */
export const se_CreateMemoryCommand = async (
  input: CreateMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/create");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      encryptionKeyArn: [],
      eventExpiryDuration: [],
      memoryExecutionRoleArn: [],
      memoryStrategies: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOauth2CredentialProviderCommand
 */
export const se_CreateOauth2CredentialProviderCommand = async (
  input: CreateOauth2CredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/CreateOauth2CredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      credentialProviderVendor: [],
      name: [],
      oauth2ProviderConfigInput: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorkloadIdentityCommand
 */
export const se_CreateWorkloadIdentityCommand = async (
  input: CreateWorkloadIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/CreateWorkloadIdentity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedResourceOauth2ReturnUrls: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentRuntimeCommand
 */
export const se_DeleteAgentRuntimeCommand = async (
  input: DeleteAgentRuntimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentRuntimeEndpointCommand
 */
export const se_DeleteAgentRuntimeEndpointCommand = async (
  input: DeleteAgentRuntimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  b.p("endpointName", () => input.endpointName!, "{endpointName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiKeyCredentialProviderCommand
 */
export const se_DeleteApiKeyCredentialProviderCommand = async (
  input: DeleteApiKeyCredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/DeleteApiKeyCredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBrowserCommand
 */
export const se_DeleteBrowserCommand = async (
  input: DeleteBrowserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browsers/{browserId}");
  b.p("browserId", () => input.browserId!, "{browserId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCodeInterpreterCommand
 */
export const se_DeleteCodeInterpreterCommand = async (
  input: DeleteCodeInterpreterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/code-interpreters/{codeInterpreterId}");
  b.p("codeInterpreterId", () => input.codeInterpreterId!, "{codeInterpreterId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways/{gatewayIdentifier}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGatewayTargetCommand
 */
export const se_DeleteGatewayTargetCommand = async (
  input: DeleteGatewayTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways/{gatewayIdentifier}/targets/{targetId}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  b.p("targetId", () => input.targetId!, "{targetId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMemoryCommand
 */
export const se_DeleteMemoryCommand = async (
  input: DeleteMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/delete");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOauth2CredentialProviderCommand
 */
export const se_DeleteOauth2CredentialProviderCommand = async (
  input: DeleteOauth2CredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/DeleteOauth2CredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorkloadIdentityCommand
 */
export const se_DeleteWorkloadIdentityCommand = async (
  input: DeleteWorkloadIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/DeleteWorkloadIdentity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentRuntimeCommand
 */
export const se_GetAgentRuntimeCommand = async (
  input: GetAgentRuntimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  const query: any = map({
    [_v]: [, input[_aRV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentRuntimeEndpointCommand
 */
export const se_GetAgentRuntimeEndpointCommand = async (
  input: GetAgentRuntimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  b.p("endpointName", () => input.endpointName!, "{endpointName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiKeyCredentialProviderCommand
 */
export const se_GetApiKeyCredentialProviderCommand = async (
  input: GetApiKeyCredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetApiKeyCredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBrowserCommand
 */
export const se_GetBrowserCommand = async (
  input: GetBrowserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browsers/{browserId}");
  b.p("browserId", () => input.browserId!, "{browserId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCodeInterpreterCommand
 */
export const se_GetCodeInterpreterCommand = async (
  input: GetCodeInterpreterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/code-interpreters/{codeInterpreterId}");
  b.p("codeInterpreterId", () => input.codeInterpreterId!, "{codeInterpreterId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGatewayCommand
 */
export const se_GetGatewayCommand = async (
  input: GetGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways/{gatewayIdentifier}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGatewayTargetCommand
 */
export const se_GetGatewayTargetCommand = async (
  input: GetGatewayTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways/{gatewayIdentifier}/targets/{targetId}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  b.p("targetId", () => input.targetId!, "{targetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMemoryCommand
 */
export const se_GetMemoryCommand = async (
  input: GetMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memories/{memoryId}/details");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOauth2CredentialProviderCommand
 */
export const se_GetOauth2CredentialProviderCommand = async (
  input: GetOauth2CredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetOauth2CredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTokenVaultCommand
 */
export const se_GetTokenVaultCommand = async (
  input: GetTokenVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/get-token-vault");
  let body: any;
  body = JSON.stringify(
    take(input, {
      tokenVaultId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadIdentityCommand
 */
export const se_GetWorkloadIdentityCommand = async (
  input: GetWorkloadIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/GetWorkloadIdentity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAgentRuntimeEndpointsCommand
 */
export const se_ListAgentRuntimeEndpointsCommand = async (
  input: ListAgentRuntimeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}/runtime-endpoints");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAgentRuntimesCommand
 */
export const se_ListAgentRuntimesCommand = async (
  input: ListAgentRuntimesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAgentRuntimeVersionsCommand
 */
export const se_ListAgentRuntimeVersionsCommand = async (
  input: ListAgentRuntimeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/runtimes/{agentRuntimeId}/versions");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApiKeyCredentialProvidersCommand
 */
export const se_ListApiKeyCredentialProvidersCommand = async (
  input: ListApiKeyCredentialProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/ListApiKeyCredentialProviders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBrowsersCommand
 */
export const se_ListBrowsersCommand = async (
  input: ListBrowsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/browsers");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCodeInterpretersCommand
 */
export const se_ListCodeInterpretersCommand = async (
  input: ListCodeInterpretersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/code-interpreters");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGatewayTargetsCommand
 */
export const se_ListGatewayTargetsCommand = async (
  input: ListGatewayTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/gateways/{gatewayIdentifier}/targets");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMemoriesCommand
 */
export const se_ListMemoriesCommand = async (
  input: ListMemoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOauth2CredentialProvidersCommand
 */
export const se_ListOauth2CredentialProvidersCommand = async (
  input: ListOauth2CredentialProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/ListOauth2CredentialProviders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkloadIdentitiesCommand
 */
export const se_ListWorkloadIdentitiesCommand = async (
  input: ListWorkloadIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/ListWorkloadIdentities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SetTokenVaultCMKCommand
 */
export const se_SetTokenVaultCMKCommand = async (
  input: SetTokenVaultCMKCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/set-token-vault-cmk");
  let body: any;
  body = JSON.stringify(
    take(input, {
      kmsConfiguration: (_) => _json(_),
      tokenVaultId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentRuntimeCommand
 */
export const se_UpdateAgentRuntimeCommand = async (
  input: UpdateAgentRuntimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/runtimes/{agentRuntimeId}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentRuntimeArtifact: (_) => _json(_),
      authorizerConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      environmentVariables: (_) => _json(_),
      lifecycleConfiguration: (_) => _json(_),
      networkConfiguration: (_) => _json(_),
      protocolConfiguration: (_) => _json(_),
      requestHeaderConfiguration: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentRuntimeEndpointCommand
 */
export const se_UpdateAgentRuntimeEndpointCommand = async (
  input: UpdateAgentRuntimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/runtimes/{agentRuntimeId}/runtime-endpoints/{endpointName}");
  b.p("agentRuntimeId", () => input.agentRuntimeId!, "{agentRuntimeId}", false);
  b.p("endpointName", () => input.endpointName!, "{endpointName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentRuntimeVersion: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiKeyCredentialProviderCommand
 */
export const se_UpdateApiKeyCredentialProviderCommand = async (
  input: UpdateApiKeyCredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/UpdateApiKeyCredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiKey: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGatewayCommand
 */
export const se_UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateways/{gatewayIdentifier}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      authorizerConfiguration: (_) => _json(_),
      authorizerType: [],
      description: [],
      exceptionLevel: [],
      kmsKeyArn: [],
      name: [],
      protocolConfiguration: (_) => _json(_),
      protocolType: [],
      roleArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGatewayTargetCommand
 */
export const se_UpdateGatewayTargetCommand = async (
  input: UpdateGatewayTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/gateways/{gatewayIdentifier}/targets/{targetId}");
  b.p("gatewayIdentifier", () => input.gatewayIdentifier!, "{gatewayIdentifier}", false);
  b.p("targetId", () => input.targetId!, "{targetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      credentialProviderConfigurations: (_) => _json(_),
      description: [],
      name: [],
      targetConfiguration: (_) => se_TargetConfiguration(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMemoryCommand
 */
export const se_UpdateMemoryCommand = async (
  input: UpdateMemoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memories/{memoryId}/update");
  b.p("memoryId", () => input.memoryId!, "{memoryId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      eventExpiryDuration: [],
      memoryExecutionRoleArn: [],
      memoryStrategies: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateOauth2CredentialProviderCommand
 */
export const se_UpdateOauth2CredentialProviderCommand = async (
  input: UpdateOauth2CredentialProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/UpdateOauth2CredentialProvider");
  let body: any;
  body = JSON.stringify(
    take(input, {
      credentialProviderVendor: [],
      name: [],
      oauth2ProviderConfigInput: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorkloadIdentityCommand
 */
export const se_UpdateWorkloadIdentityCommand = async (
  input: UpdateWorkloadIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/identities/UpdateWorkloadIdentity");
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowedResourceOauth2ReturnUrls: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAgentRuntimeCommand
 */
export const de_CreateAgentRuntimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentRuntimeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeId: __expectString,
    agentRuntimeVersion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAgentRuntimeEndpointCommand
 */
export const de_CreateAgentRuntimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentRuntimeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeEndpointArn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    targetVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiKeyCredentialProviderCommand
 */
export const de_CreateApiKeyCredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySecretArn: _json,
    credentialProviderArn: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBrowserCommand
 */
export const de_CreateBrowserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrowserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserArn: __expectString,
    browserId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCodeInterpreterCommand
 */
export const de_CreateCodeInterpreterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeInterpreterCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterArn: __expectString,
    codeInterpreterId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayCommand
 */
export const de_CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerConfiguration: (_) => _json(__expectUnion(_)),
    authorizerType: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    exceptionLevel: __expectString,
    gatewayArn: __expectString,
    gatewayId: __expectString,
    gatewayUrl: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    protocolConfiguration: (_) => _json(__expectUnion(_)),
    protocolType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReasons: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayTargetCommand
 */
export const de_CreateGatewayTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayTargetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    credentialProviderConfigurations: _json,
    description: __expectString,
    gatewayArn: __expectString,
    name: __expectString,
    status: __expectString,
    statusReasons: _json,
    targetConfiguration: (_) => de_TargetConfiguration(__expectUnion(_), context),
    targetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMemoryCommand
 */
export const de_CreateMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memory: (_) => de_Memory(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOauth2CredentialProviderCommand
 */
export const de_CreateOauth2CredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOauth2CredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientSecretArn: _json,
    credentialProviderArn: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorkloadIdentityCommand
 */
export const de_CreateWorkloadIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkloadIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedResourceOauth2ReturnUrls: _json,
    name: __expectString,
    workloadIdentityArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAgentRuntimeCommand
 */
export const de_DeleteAgentRuntimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentRuntimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAgentRuntimeEndpointCommand
 */
export const de_DeleteAgentRuntimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentRuntimeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiKeyCredentialProviderCommand
 */
export const de_DeleteApiKeyCredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBrowserCommand
 */
export const de_DeleteBrowserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrowserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserId: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCodeInterpreterCommand
 */
export const de_DeleteCodeInterpreterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeInterpreterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterId: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayId: __expectString,
    status: __expectString,
    statusReasons: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayTargetCommand
 */
export const de_DeleteGatewayTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayTargetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayArn: __expectString,
    status: __expectString,
    statusReasons: _json,
    targetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemoryCommand
 */
export const de_DeleteMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memoryId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOauth2CredentialProviderCommand
 */
export const de_DeleteOauth2CredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOauth2CredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorkloadIdentityCommand
 */
export const de_DeleteWorkloadIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkloadIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentRuntimeCommand
 */
export const de_GetAgentRuntimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentRuntimeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeArtifact: (_) => _json(__expectUnion(_)),
    agentRuntimeId: __expectString,
    agentRuntimeName: __expectString,
    agentRuntimeVersion: __expectString,
    authorizerConfiguration: (_) => _json(__expectUnion(_)),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    environmentVariables: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lifecycleConfiguration: _json,
    networkConfiguration: _json,
    protocolConfiguration: _json,
    requestHeaderConfiguration: (_) => _json(__expectUnion(_)),
    roleArn: __expectString,
    status: __expectString,
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentRuntimeEndpointCommand
 */
export const de_GetAgentRuntimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentRuntimeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeEndpointArn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    failureReason: __expectString,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    liveVersion: __expectString,
    name: __expectString,
    status: __expectString,
    targetVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiKeyCredentialProviderCommand
 */
export const de_GetApiKeyCredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiKeyCredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySecretArn: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBrowserCommand
 */
export const de_GetBrowserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBrowserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserArn: __expectString,
    browserId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    executionRoleArn: __expectString,
    failureReason: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    networkConfiguration: _json,
    recording: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCodeInterpreterCommand
 */
export const de_GetCodeInterpreterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeInterpreterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterArn: __expectString,
    codeInterpreterId: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    executionRoleArn: __expectString,
    failureReason: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    networkConfiguration: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGatewayCommand
 */
export const de_GetGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerConfiguration: (_) => _json(__expectUnion(_)),
    authorizerType: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    exceptionLevel: __expectString,
    gatewayArn: __expectString,
    gatewayId: __expectString,
    gatewayUrl: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    protocolConfiguration: (_) => _json(__expectUnion(_)),
    protocolType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReasons: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGatewayTargetCommand
 */
export const de_GetGatewayTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGatewayTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    credentialProviderConfigurations: _json,
    description: __expectString,
    gatewayArn: __expectString,
    name: __expectString,
    status: __expectString,
    statusReasons: _json,
    targetConfiguration: (_) => de_TargetConfiguration(__expectUnion(_), context),
    targetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMemoryCommand
 */
export const de_GetMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memory: (_) => de_Memory(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOauth2CredentialProviderCommand
 */
export const de_GetOauth2CredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOauth2CredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientSecretArn: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    credentialProviderVendor: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    oauth2ProviderConfigOutput: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTokenVaultCommand
 */
export const de_GetTokenVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokenVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kmsConfiguration: _json,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tokenVaultId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadIdentityCommand
 */
export const de_GetWorkloadIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedResourceOauth2ReturnUrls: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    workloadIdentityArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentRuntimeEndpointsCommand
 */
export const de_ListAgentRuntimeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentRuntimeEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    runtimeEndpoints: (_) => de_AgentRuntimeEndpoints(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentRuntimesCommand
 */
export const de_ListAgentRuntimesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentRuntimesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimes: (_) => de_AgentRuntimes(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentRuntimeVersionsCommand
 */
export const de_ListAgentRuntimeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentRuntimeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimes: (_) => de_AgentRuntimes(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApiKeyCredentialProvidersCommand
 */
export const de_ListApiKeyCredentialProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeyCredentialProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentialProviders: (_) => de_ApiKeyCredentialProviders(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBrowsersCommand
 */
export const de_ListBrowsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrowsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    browserSummaries: (_) => de_BrowserSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCodeInterpretersCommand
 */
export const de_ListCodeInterpretersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeInterpretersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    codeInterpreterSummaries: (_) => de_CodeInterpreterSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_GatewaySummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewayTargetsCommand
 */
export const de_ListGatewayTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewayTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_TargetSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMemoriesCommand
 */
export const de_ListMemoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memories: (_) => de_MemorySummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOauth2CredentialProvidersCommand
 */
export const de_ListOauth2CredentialProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOauth2CredentialProvidersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    credentialProviders: (_) => de_Oauth2CredentialProviders(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadIdentitiesCommand
 */
export const de_ListWorkloadIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workloadIdentities: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SetTokenVaultCMKCommand
 */
export const de_SetTokenVaultCMKCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTokenVaultCMKCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kmsConfiguration: _json,
    lastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tokenVaultId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentRuntimeCommand
 */
export const de_UpdateAgentRuntimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentRuntimeCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeId: __expectString,
    agentRuntimeVersion: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentRuntimeEndpointCommand
 */
export const de_UpdateAgentRuntimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentRuntimeEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentRuntimeArn: __expectString,
    agentRuntimeEndpointArn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    liveVersion: __expectString,
    status: __expectString,
    targetVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiKeyCredentialProviderCommand
 */
export const de_UpdateApiKeyCredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiKeySecretArn: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayCommand
 */
export const de_UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizerConfiguration: (_) => _json(__expectUnion(_)),
    authorizerType: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    exceptionLevel: __expectString,
    gatewayArn: __expectString,
    gatewayId: __expectString,
    gatewayUrl: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    protocolConfiguration: (_) => _json(__expectUnion(_)),
    protocolType: __expectString,
    roleArn: __expectString,
    status: __expectString,
    statusReasons: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    workloadIdentityDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayTargetCommand
 */
export const de_UpdateGatewayTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayTargetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    credentialProviderConfigurations: _json,
    description: __expectString,
    gatewayArn: __expectString,
    name: __expectString,
    status: __expectString,
    statusReasons: _json,
    targetConfiguration: (_) => de_TargetConfiguration(__expectUnion(_), context),
    targetId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMemoryCommand
 */
export const de_UpdateMemoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    memory: (_) => de_Memory(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateOauth2CredentialProviderCommand
 */
export const de_UpdateOauth2CredentialProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOauth2CredentialProviderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientSecretArn: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    credentialProviderVendor: __expectString,
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    oauth2ProviderConfigOutput: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorkloadIdentityCommand
 */
export const de_UpdateWorkloadIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    allowedResourceOauth2ReturnUrls: _json,
    createdTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    workloadIdentityArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.bedrockagentcorecontrol#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockagentcorecontrol#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockagentcorecontrol#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockagentcorecontrol#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockagentcorecontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockagentcorecontrol#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockagentcorecontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "DecryptionFailure":
    case "com.amazonaws.bedrockagentcorecontrol#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "EncryptionFailure":
    case "com.amazonaws.bedrockagentcorecontrol#EncryptionFailure":
      throw await de_EncryptionFailureRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.bedrockagentcorecontrol#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.bedrockagentcorecontrol#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.bedrockagentcorecontrol#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.bedrockagentcorecontrol#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.bedrockagentcorecontrol#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DecryptionFailureRes
 */
const de_DecryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<DecryptionFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DecryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EncryptionFailureRes
 */
const de_EncryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<EncryptionFailure> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new EncryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AgentRuntimeArtifact omitted.

// se_AllowedAudienceList omitted.

// se_AllowedClientsList omitted.

// se_ApiSchemaConfiguration omitted.

// se_AuthorizerConfiguration omitted.

// se_BrowserNetworkConfiguration omitted.

// se_CodeInterpreterNetworkConfiguration omitted.

// se_ContainerConfiguration omitted.

// se_CredentialProvider omitted.

// se_CredentialProviderConfiguration omitted.

// se_CredentialProviderConfigurations omitted.

// se_CustomConfigurationInput omitted.

// se_CustomConsolidationConfigurationInput omitted.

// se_CustomExtractionConfigurationInput omitted.

// se_CustomJWTAuthorizerConfiguration omitted.

// se_CustomMemoryStrategyInput omitted.

// se_CustomOauth2ProviderConfigInput omitted.

// se_DeleteMemoryStrategiesList omitted.

// se_DeleteMemoryStrategyInput omitted.

// se_EnvironmentVariablesMap omitted.

// se_GatewayApiKeyCredentialProvider omitted.

// se_GatewayProtocolConfiguration omitted.

// se_GithubOauth2ProviderConfigInput omitted.

// se_GoogleOauth2ProviderConfigInput omitted.

// se_KmsConfiguration omitted.

// se_LifecycleConfiguration omitted.

// se_MCPGatewayConfiguration omitted.

/**
 * serializeAws_restJson1McpLambdaTargetConfiguration
 */
const se_McpLambdaTargetConfiguration = (input: McpLambdaTargetConfiguration, context: __SerdeContext): any => {
  return take(input, {
    lambdaArn: [],
    toolSchema: (_) => se_ToolSchema(_, context),
  });
};

// se_McpSupportedVersions omitted.

/**
 * serializeAws_restJson1McpTargetConfiguration
 */
const se_McpTargetConfiguration = (input: McpTargetConfiguration, context: __SerdeContext): any => {
  return McpTargetConfiguration.visit(input, {
    lambda: (value) => ({ lambda: se_McpLambdaTargetConfiguration(value, context) }),
    openApiSchema: (value) => ({ openApiSchema: _json(value) }),
    smithyModel: (value) => ({ smithyModel: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_MemoryStrategyInput omitted.

// se_MemoryStrategyInputList omitted.

// se_MicrosoftOauth2ProviderConfigInput omitted.

// se_ModifyConsolidationConfiguration omitted.

// se_ModifyExtractionConfiguration omitted.

// se_ModifyMemoryStrategies omitted.

// se_ModifyMemoryStrategiesList omitted.

// se_ModifyMemoryStrategyInput omitted.

// se_ModifyStrategyConfiguration omitted.

// se_NamespacesList omitted.

// se_NetworkConfiguration omitted.

// se_Oauth2AuthorizationServerMetadata omitted.

// se_Oauth2Discovery omitted.

// se_Oauth2ProviderConfigInput omitted.

// se_OAuthCredentialProvider omitted.

// se_OAuthCustomParameters omitted.

// se_OAuthScopes omitted.

// se_ProtocolConfiguration omitted.

// se_RecordingConfig omitted.

// se_RequestHeaderAllowlist omitted.

// se_RequestHeaderConfiguration omitted.

// se_RequiredProperties omitted.

// se_ResourceOauth2ReturnUrlListType omitted.

// se_ResponseListType omitted.

// se_S3Configuration omitted.

// se_S3Location omitted.

// se_SalesforceOauth2ProviderConfigInput omitted.

/**
 * serializeAws_restJson1SchemaDefinition
 */
const se_SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    items: (_) => se_SchemaDefinition(_, context),
    properties: (_) => se_SchemaProperties(_, context),
    required: _json,
    type: [],
  });
};

/**
 * serializeAws_restJson1SchemaProperties
 */
const se_SchemaProperties = (input: Record<string, SchemaDefinition>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SchemaDefinition(value, context);
    return acc;
  }, {});
};

// se_SecurityGroups omitted.

// se_SemanticMemoryStrategyInput omitted.

// se_SemanticOverrideConfigurationInput omitted.

// se_SemanticOverrideConsolidationConfigurationInput omitted.

// se_SemanticOverrideExtractionConfigurationInput omitted.

// se_SlackOauth2ProviderConfigInput omitted.

// se_Subnets omitted.

// se_SummaryMemoryStrategyInput omitted.

// se_SummaryOverrideConfigurationInput omitted.

// se_SummaryOverrideConsolidationConfigurationInput omitted.

// se_TagsMap omitted.

/**
 * serializeAws_restJson1TargetConfiguration
 */
const se_TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return TargetConfiguration.visit(input, {
    mcp: (value) => ({ mcp: se_McpTargetConfiguration(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1ToolDefinition
 */
const se_ToolDefinition = (input: ToolDefinition, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    inputSchema: (_) => se_SchemaDefinition(_, context),
    name: [],
    outputSchema: (_) => se_SchemaDefinition(_, context),
  });
};

/**
 * serializeAws_restJson1ToolDefinitions
 */
const se_ToolDefinitions = (input: ToolDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ToolDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1ToolSchema
 */
const se_ToolSchema = (input: ToolSchema, context: __SerdeContext): any => {
  return ToolSchema.visit(input, {
    inlinePayload: (value) => ({ inlinePayload: se_ToolDefinitions(value, context) }),
    s3: (value) => ({ s3: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_UserPreferenceMemoryStrategyInput omitted.

// se_UserPreferenceOverrideConfigurationInput omitted.

// se_UserPreferenceOverrideConsolidationConfigurationInput omitted.

// se_UserPreferenceOverrideExtractionConfigurationInput omitted.

// se_VpcConfig omitted.

/**
 * deserializeAws_restJson1AgentRuntime
 */
const de_AgentRuntime = (output: any, context: __SerdeContext): AgentRuntime => {
  return take(output, {
    agentRuntimeArn: __expectString,
    agentRuntimeId: __expectString,
    agentRuntimeName: __expectString,
    agentRuntimeVersion: __expectString,
    description: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_AgentRuntimeArtifact omitted.

/**
 * deserializeAws_restJson1AgentRuntimeEndpoint
 */
const de_AgentRuntimeEndpoint = (output: any, context: __SerdeContext): AgentRuntimeEndpoint => {
  return take(output, {
    agentRuntimeArn: __expectString,
    agentRuntimeEndpointArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    liveVersion: __expectString,
    name: __expectString,
    status: __expectString,
    targetVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AgentRuntimeEndpoints
 */
const de_AgentRuntimeEndpoints = (output: any, context: __SerdeContext): AgentRuntimeEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentRuntimeEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentRuntimes
 */
const de_AgentRuntimes = (output: any, context: __SerdeContext): AgentRuntime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentRuntime(entry, context);
    });
  return retVal;
};

// de_AllowedAudienceList omitted.

// de_AllowedClientsList omitted.

/**
 * deserializeAws_restJson1ApiKeyCredentialProviderItem
 */
const de_ApiKeyCredentialProviderItem = (output: any, context: __SerdeContext): ApiKeyCredentialProviderItem => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ApiKeyCredentialProviders
 */
const de_ApiKeyCredentialProviders = (output: any, context: __SerdeContext): ApiKeyCredentialProviderItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApiKeyCredentialProviderItem(entry, context);
    });
  return retVal;
};

// de_ApiSchemaConfiguration omitted.

// de_AuthorizerConfiguration omitted.

// de_BrowserNetworkConfiguration omitted.

/**
 * deserializeAws_restJson1BrowserSummaries
 */
const de_BrowserSummaries = (output: any, context: __SerdeContext): BrowserSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BrowserSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BrowserSummary
 */
const de_BrowserSummary = (output: any, context: __SerdeContext): BrowserSummary => {
  return take(output, {
    browserArn: __expectString,
    browserId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_CodeInterpreterNetworkConfiguration omitted.

/**
 * deserializeAws_restJson1CodeInterpreterSummaries
 */
const de_CodeInterpreterSummaries = (output: any, context: __SerdeContext): CodeInterpreterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeInterpreterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeInterpreterSummary
 */
const de_CodeInterpreterSummary = (output: any, context: __SerdeContext): CodeInterpreterSummary => {
  return take(output, {
    codeInterpreterArn: __expectString,
    codeInterpreterId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_ConsolidationConfiguration omitted.

// de_ContainerConfiguration omitted.

// de_CredentialProvider omitted.

// de_CredentialProviderConfiguration omitted.

// de_CredentialProviderConfigurations omitted.

// de_CustomConsolidationConfiguration omitted.

// de_CustomExtractionConfiguration omitted.

// de_CustomJWTAuthorizerConfiguration omitted.

// de_CustomOauth2ProviderConfigOutput omitted.

// de_EnvironmentVariablesMap omitted.

// de_ExtractionConfiguration omitted.

// de_GatewayApiKeyCredentialProvider omitted.

// de_GatewayProtocolConfiguration omitted.

/**
 * deserializeAws_restJson1GatewaySummaries
 */
const de_GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GatewaySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewaySummary
 */
const de_GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return take(output, {
    authorizerType: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    gatewayId: __expectString,
    name: __expectString,
    protocolType: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_GithubOauth2ProviderConfigOutput omitted.

// de_GoogleOauth2ProviderConfigOutput omitted.

// de_KmsConfiguration omitted.

// de_LifecycleConfiguration omitted.

// de_MCPGatewayConfiguration omitted.

/**
 * deserializeAws_restJson1McpLambdaTargetConfiguration
 */
const de_McpLambdaTargetConfiguration = (output: any, context: __SerdeContext): McpLambdaTargetConfiguration => {
  return take(output, {
    lambdaArn: __expectString,
    toolSchema: (_: any) => de_ToolSchema(__expectUnion(_), context),
  }) as any;
};

// de_McpSupportedVersions omitted.

/**
 * deserializeAws_restJson1McpTargetConfiguration
 */
const de_McpTargetConfiguration = (output: any, context: __SerdeContext): McpTargetConfiguration => {
  if (output.lambda != null) {
    return {
      lambda: de_McpLambdaTargetConfiguration(output.lambda, context),
    };
  }
  if (output.openApiSchema != null) {
    return {
      openApiSchema: _json(__expectUnion(output.openApiSchema)),
    };
  }
  if (output.smithyModel != null) {
    return {
      smithyModel: _json(__expectUnion(output.smithyModel)),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Memory
 */
const de_Memory = (output: any, context: __SerdeContext): Memory => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    encryptionKeyArn: __expectString,
    eventExpiryDuration: __expectInt32,
    failureReason: __expectString,
    id: __expectString,
    memoryExecutionRoleArn: __expectString,
    name: __expectString,
    status: __expectString,
    strategies: (_: any) => de_MemoryStrategyList(_, context),
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MemoryStrategy
 */
const de_MemoryStrategy = (output: any, context: __SerdeContext): MemoryStrategy => {
  return take(output, {
    configuration: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    name: __expectString,
    namespaces: _json,
    status: __expectString,
    strategyId: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MemoryStrategyList
 */
const de_MemoryStrategyList = (output: any, context: __SerdeContext): MemoryStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemoryStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MemorySummary
 */
const de_MemorySummary = (output: any, context: __SerdeContext): MemorySummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1MemorySummaryList
 */
const de_MemorySummaryList = (output: any, context: __SerdeContext): MemorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemorySummary(entry, context);
    });
  return retVal;
};

// de_MicrosoftOauth2ProviderConfigOutput omitted.

// de_NamespacesList omitted.

// de_NetworkConfiguration omitted.

// de_Oauth2AuthorizationServerMetadata omitted.

/**
 * deserializeAws_restJson1Oauth2CredentialProviderItem
 */
const de_Oauth2CredentialProviderItem = (output: any, context: __SerdeContext): Oauth2CredentialProviderItem => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    credentialProviderArn: __expectString,
    credentialProviderVendor: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Oauth2CredentialProviders
 */
const de_Oauth2CredentialProviders = (output: any, context: __SerdeContext): Oauth2CredentialProviderItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Oauth2CredentialProviderItem(entry, context);
    });
  return retVal;
};

// de_Oauth2Discovery omitted.

// de_Oauth2ProviderConfigOutput omitted.

// de_OAuthCredentialProvider omitted.

// de_OAuthCustomParameters omitted.

// de_OAuthScopes omitted.

// de_ProtocolConfiguration omitted.

// de_RecordingConfig omitted.

// de_RequestHeaderAllowlist omitted.

// de_RequestHeaderConfiguration omitted.

// de_RequiredProperties omitted.

// de_ResourceOauth2ReturnUrlListType omitted.

// de_ResponseListType omitted.

// de_S3Configuration omitted.

// de_S3Location omitted.

// de_SalesforceOauth2ProviderConfigOutput omitted.

/**
 * deserializeAws_restJson1SchemaDefinition
 */
const de_SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return take(output, {
    description: __expectString,
    items: (_: any) => de_SchemaDefinition(_, context),
    properties: (_: any) => de_SchemaProperties(_, context),
    required: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SchemaProperties
 */
const de_SchemaProperties = (output: any, context: __SerdeContext): Record<string, SchemaDefinition> => {
  return Object.entries(output).reduce((acc: Record<string, SchemaDefinition>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_SchemaDefinition(value, context);
    return acc;
  }, {} as Record<string, SchemaDefinition>);
};

// de_Secret omitted.

// de_SecurityGroups omitted.

// de_SemanticConsolidationOverride omitted.

// de_SemanticExtractionOverride omitted.

// de_SlackOauth2ProviderConfigOutput omitted.

// de_StatusReasons omitted.

// de_StrategyConfiguration omitted.

// de_Subnets omitted.

// de_SummaryConsolidationOverride omitted.

// de_TagsMap omitted.

/**
 * deserializeAws_restJson1TargetConfiguration
 */
const de_TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  if (output.mcp != null) {
    return {
      mcp: de_McpTargetConfiguration(__expectUnion(output.mcp), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1TargetSummaries
 */
const de_TargetSummaries = (output: any, context: __SerdeContext): TargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TargetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TargetSummary
 */
const de_TargetSummary = (output: any, context: __SerdeContext): TargetSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
    targetId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ToolDefinition
 */
const de_ToolDefinition = (output: any, context: __SerdeContext): ToolDefinition => {
  return take(output, {
    description: __expectString,
    inputSchema: (_: any) => de_SchemaDefinition(_, context),
    name: __expectString,
    outputSchema: (_: any) => de_SchemaDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ToolDefinitions
 */
const de_ToolDefinitions = (output: any, context: __SerdeContext): ToolDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ToolDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ToolSchema
 */
const de_ToolSchema = (output: any, context: __SerdeContext): ToolSchema => {
  if (output.inlinePayload != null) {
    return {
      inlinePayload: de_ToolDefinitions(output.inlinePayload, context),
    };
  }
  if (output.s3 != null) {
    return {
      s3: _json(output.s3),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_UserPreferenceConsolidationOverride omitted.

// de_UserPreferenceExtractionOverride omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VpcConfig omitted.

// de_WorkloadIdentityDetails omitted.

// de_WorkloadIdentityList omitted.

// de_WorkloadIdentityType omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _aRV = "agentRuntimeVersion";
const _cT = "clientToken";
const _mR = "maxResults";
const _nT = "nextToken";
const _t = "type";
const _tK = "tagKeys";
const _v = "version";
