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
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateAgentKnowledgeBaseCommandInput,
  AssociateAgentKnowledgeBaseCommandOutput,
} from "../commands/AssociateAgentKnowledgeBaseCommand";
import {
  CreateAgentActionGroupCommandInput,
  CreateAgentActionGroupCommandOutput,
} from "../commands/CreateAgentActionGroupCommand";
import { CreateAgentAliasCommandInput, CreateAgentAliasCommandOutput } from "../commands/CreateAgentAliasCommand";
import { CreateAgentCommandInput, CreateAgentCommandOutput } from "../commands/CreateAgentCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFlowAliasCommandInput, CreateFlowAliasCommandOutput } from "../commands/CreateFlowAliasCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "../commands/CreateFlowCommand";
import { CreateFlowVersionCommandInput, CreateFlowVersionCommandOutput } from "../commands/CreateFlowVersionCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "../commands/CreateKnowledgeBaseCommand";
import { CreatePromptCommandInput, CreatePromptCommandOutput } from "../commands/CreatePromptCommand";
import {
  CreatePromptVersionCommandInput,
  CreatePromptVersionCommandOutput,
} from "../commands/CreatePromptVersionCommand";
import {
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "../commands/DeleteAgentActionGroupCommand";
import { DeleteAgentAliasCommandInput, DeleteAgentAliasCommandOutput } from "../commands/DeleteAgentAliasCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "../commands/DeleteAgentCommand";
import { DeleteAgentVersionCommandInput, DeleteAgentVersionCommandOutput } from "../commands/DeleteAgentVersionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteFlowAliasCommandInput, DeleteFlowAliasCommandOutput } from "../commands/DeleteFlowAliasCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "../commands/DeleteFlowCommand";
import { DeleteFlowVersionCommandInput, DeleteFlowVersionCommandOutput } from "../commands/DeleteFlowVersionCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
import { DeletePromptCommandInput, DeletePromptCommandOutput } from "../commands/DeletePromptCommand";
import {
  DisassociateAgentKnowledgeBaseCommandInput,
  DisassociateAgentKnowledgeBaseCommandOutput,
} from "../commands/DisassociateAgentKnowledgeBaseCommand";
import {
  GetAgentActionGroupCommandInput,
  GetAgentActionGroupCommandOutput,
} from "../commands/GetAgentActionGroupCommand";
import { GetAgentAliasCommandInput, GetAgentAliasCommandOutput } from "../commands/GetAgentAliasCommand";
import { GetAgentCommandInput, GetAgentCommandOutput } from "../commands/GetAgentCommand";
import {
  GetAgentKnowledgeBaseCommandInput,
  GetAgentKnowledgeBaseCommandOutput,
} from "../commands/GetAgentKnowledgeBaseCommand";
import { GetAgentVersionCommandInput, GetAgentVersionCommandOutput } from "../commands/GetAgentVersionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetFlowAliasCommandInput, GetFlowAliasCommandOutput } from "../commands/GetFlowAliasCommand";
import { GetFlowCommandInput, GetFlowCommandOutput } from "../commands/GetFlowCommand";
import { GetFlowVersionCommandInput, GetFlowVersionCommandOutput } from "../commands/GetFlowVersionCommand";
import { GetIngestionJobCommandInput, GetIngestionJobCommandOutput } from "../commands/GetIngestionJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
import { GetPromptCommandInput, GetPromptCommandOutput } from "../commands/GetPromptCommand";
import {
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "../commands/ListAgentActionGroupsCommand";
import { ListAgentAliasesCommandInput, ListAgentAliasesCommandOutput } from "../commands/ListAgentAliasesCommand";
import {
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "../commands/ListAgentKnowledgeBasesCommand";
import { ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { ListAgentVersionsCommandInput, ListAgentVersionsCommandOutput } from "../commands/ListAgentVersionsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListFlowAliasesCommandInput, ListFlowAliasesCommandOutput } from "../commands/ListFlowAliasesCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { ListFlowVersionsCommandInput, ListFlowVersionsCommandOutput } from "../commands/ListFlowVersionsCommand";
import { ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput } from "../commands/ListIngestionJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import { ListPromptsCommandInput, ListPromptsCommandOutput } from "../commands/ListPromptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PrepareAgentCommandInput, PrepareAgentCommandOutput } from "../commands/PrepareAgentCommand";
import { PrepareFlowCommandInput, PrepareFlowCommandOutput } from "../commands/PrepareFlowCommand";
import { StartIngestionJobCommandInput, StartIngestionJobCommandOutput } from "../commands/StartIngestionJobCommand";
import { StopIngestionJobCommandInput, StopIngestionJobCommandOutput } from "../commands/StopIngestionJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAgentActionGroupCommandInput,
  UpdateAgentActionGroupCommandOutput,
} from "../commands/UpdateAgentActionGroupCommand";
import { UpdateAgentAliasCommandInput, UpdateAgentAliasCommandOutput } from "../commands/UpdateAgentAliasCommand";
import { UpdateAgentCommandInput, UpdateAgentCommandOutput } from "../commands/UpdateAgentCommand";
import {
  UpdateAgentKnowledgeBaseCommandInput,
  UpdateAgentKnowledgeBaseCommandOutput,
} from "../commands/UpdateAgentKnowledgeBaseCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateFlowAliasCommandInput, UpdateFlowAliasCommandOutput } from "../commands/UpdateFlowAliasCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "../commands/UpdateFlowCommand";
import {
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "../commands/UpdateKnowledgeBaseCommand";
import { UpdatePromptCommandInput, UpdatePromptCommandOutput } from "../commands/UpdatePromptCommand";
import { BedrockAgentServiceException as __BaseException } from "../models/BedrockAgentServiceException";
import {
  AccessDeniedException,
  ActionGroupExecutor,
  ActionGroupSummary,
  Agent,
  AgentActionGroup,
  AgentAlias,
  AgentAliasHistoryEvent,
  AgentAliasRoutingConfigurationListItem,
  AgentAliasSummary,
  AgentFlowNodeConfiguration,
  AgentKnowledgeBase,
  AgentKnowledgeBaseSummary,
  AgentSummary,
  AgentVersion,
  AgentVersionSummary,
  APISchema,
  BedrockEmbeddingModelConfiguration,
  BedrockFoundationModelConfiguration,
  ChunkingConfiguration,
  CollectorFlowNodeConfiguration,
  ConditionFlowNodeConfiguration,
  ConflictException,
  ConfluenceCrawlerConfiguration,
  ConfluenceDataSourceConfiguration,
  ConfluenceSourceConfiguration,
  CrawlFilterConfiguration,
  CustomTransformationConfiguration,
  DataSource,
  DataSourceConfiguration,
  DataSourceSummary,
  EmbeddingModelConfiguration,
  FixedSizeChunkingConfiguration,
  FlowAliasRoutingConfigurationListItem,
  FlowAliasSummary,
  FlowCondition,
  FlowConditionalConnectionConfiguration,
  FlowConnection,
  FlowConnectionConfiguration,
  FlowDataConnectionConfiguration,
  FlowDefinition,
  FlowNode,
  FlowNodeConfiguration,
  FlowNodeInput,
  FlowNodeOutput,
  FlowSummary,
  FlowVersionSummary,
  Function,
  FunctionSchema,
  GuardrailConfiguration,
  HierarchicalChunkingConfiguration,
  HierarchicalChunkingLevelConfiguration,
  InferenceConfiguration,
  IngestionJob,
  IngestionJobFilter,
  IngestionJobSortBy,
  IngestionJobSummary,
  InputFlowNodeConfiguration,
  IntermediateStorage,
  InternalServerException,
  IteratorFlowNodeConfiguration,
  KnowledgeBase,
  KnowledgeBaseConfiguration,
  KnowledgeBaseFlowNodeConfiguration,
  KnowledgeBaseSummary,
  LambdaFunctionFlowNodeConfiguration,
  LexFlowNodeConfiguration,
  MemoryConfiguration,
  MemoryType,
  MongoDbAtlasConfiguration,
  MongoDbAtlasFieldMapping,
  OpenSearchServerlessConfiguration,
  OpenSearchServerlessFieldMapping,
  OutputFlowNodeConfiguration,
  ParameterDetail,
  ParsingConfiguration,
  ParsingPrompt,
  PatternObjectFilter,
  PatternObjectFilterConfiguration,
  PineconeConfiguration,
  PineconeFieldMapping,
  PromptConfiguration,
  PromptFlowNodeConfiguration,
  PromptFlowNodeInlineConfiguration,
  PromptFlowNodeResourceConfiguration,
  PromptFlowNodeSourceConfiguration,
  PromptInferenceConfiguration,
  PromptInputVariable,
  PromptMetadataEntry,
  PromptModelInferenceConfiguration,
  PromptOverrideConfiguration,
  PromptSummary,
  PromptTemplateConfiguration,
  PromptVariant,
  RdsConfiguration,
  RdsFieldMapping,
  RedisEnterpriseCloudConfiguration,
  RedisEnterpriseCloudFieldMapping,
  ResourceNotFoundException,
  RetrievalFlowNodeConfiguration,
  RetrievalFlowNodeS3Configuration,
  RetrievalFlowNodeServiceConfiguration,
  S3DataSourceConfiguration,
  S3Identifier,
  S3Location,
  SalesforceCrawlerConfiguration,
  SalesforceDataSourceConfiguration,
  SalesforceSourceConfiguration,
  SeedUrl,
  SemanticChunkingConfiguration,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  SharePointCrawlerConfiguration,
  SharePointDataSourceConfiguration,
  SharePointSourceConfiguration,
  StorageConfiguration,
  StorageFlowNodeConfiguration,
  StorageFlowNodeS3Configuration,
  StorageFlowNodeServiceConfiguration,
  TextPromptTemplateConfiguration,
  ThrottlingException,
  Transformation,
  TransformationFunction,
  TransformationLambdaConfiguration,
  UrlConfiguration,
  ValidationException,
  VectorIngestionConfiguration,
  VectorKnowledgeBaseConfiguration,
  WebCrawlerConfiguration,
  WebCrawlerLimits,
  WebDataSourceConfiguration,
  WebSourceConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAgentKnowledgeBaseCommand
 */
export const se_AssociateAgentKnowledgeBaseCommand = async (
  input: AssociateAgentKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/knowledgebases");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      knowledgeBaseId: [],
      knowledgeBaseState: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAgentCommand
 */
export const se_CreateAgentCommand = async (
  input: CreateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentName: [],
      agentResourceRoleArn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerEncryptionKeyArn: [],
      description: [],
      foundationModel: [],
      guardrailConfiguration: (_) => _json(_),
      idleSessionTTLInSeconds: [],
      instruction: [],
      memoryConfiguration: (_) => _json(_),
      promptOverrideConfiguration: (_) => se_PromptOverrideConfiguration(_, context),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAgentActionGroupCommand
 */
export const se_CreateAgentActionGroupCommand = async (
  input: CreateAgentActionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/actiongroups");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionGroupExecutor: (_) => _json(_),
      actionGroupName: [],
      actionGroupState: [],
      apiSchema: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      functionSchema: (_) => _json(_),
      parentActionGroupSignature: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAgentAliasCommand
 */
export const se_CreateAgentAliasCommand = async (
  input: CreateAgentAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentaliases");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentAliasName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      routingConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dataDeletionPolicy: [],
      dataSourceConfiguration: (_) => _json(_),
      description: [],
      name: [],
      serverSideEncryptionConfiguration: (_) => _json(_),
      vectorIngestionConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFlowCommand
 */
export const se_CreateFlowCommand = async (
  input: CreateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerEncryptionKeyArn: [],
      definition: (_) => se_FlowDefinition(_, context),
      description: [],
      executionRoleArn: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFlowAliasCommand
 */
export const se_CreateFlowAliasCommand = async (
  input: CreateFlowAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows/{flowIdentifier}/aliases");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      routingConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFlowVersionCommand
 */
export const se_CreateFlowVersionCommand = async (
  input: CreateFlowVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows/{flowIdentifier}/versions");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const se_CreateKnowledgeBaseCommand = async (
  input: CreateKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      knowledgeBaseConfiguration: (_) => _json(_),
      name: [],
      roleArn: [],
      storageConfiguration: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePromptCommand
 */
export const se_CreatePromptCommand = async (
  input: CreatePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerEncryptionKeyArn: [],
      defaultVariant: [],
      description: [],
      name: [],
      tags: (_) => _json(_),
      variants: (_) => se_PromptVariantList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePromptVersionCommand
 */
export const se_CreatePromptVersionCommand = async (
  input: CreatePromptVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompts/{promptIdentifier}/versions");
  b.p("promptIdentifier", () => input.promptIdentifier!, "{promptIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentCommand
 */
export const se_DeleteAgentCommand = async (
  input: DeleteAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  const query: any = map({
    [_sRIUC]: [() => input.skipResourceInUseCheck !== void 0, () => input[_sRIUC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentActionGroupCommand
 */
export const se_DeleteAgentActionGroupCommand = async (
  input: DeleteAgentActionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("actionGroupId", () => input.actionGroupId!, "{actionGroupId}", false);
  const query: any = map({
    [_sRIUC]: [() => input.skipResourceInUseCheck !== void 0, () => input[_sRIUC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentAliasCommand
 */
export const se_DeleteAgentAliasCommand = async (
  input: DeleteAgentAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentaliases/{agentAliasId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAgentVersionCommand
 */
export const se_DeleteAgentVersionCommand = async (
  input: DeleteAgentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  const query: any = map({
    [_sRIUC]: [() => input.skipResourceInUseCheck !== void 0, () => input[_sRIUC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFlowCommand
 */
export const se_DeleteFlowCommand = async (
  input: DeleteFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  const query: any = map({
    [_sRIUC]: [() => input.skipResourceInUseCheck !== void 0, () => input[_sRIUC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFlowAliasCommand
 */
export const se_DeleteFlowAliasCommand = async (
  input: DeleteFlowAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/aliases/{aliasIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("aliasIdentifier", () => input.aliasIdentifier!, "{aliasIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFlowVersionCommand
 */
export const se_DeleteFlowVersionCommand = async (
  input: DeleteFlowVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/versions/{flowVersion}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("flowVersion", () => input.flowVersion!, "{flowVersion}", false);
  const query: any = map({
    [_sRIUC]: [() => input.skipResourceInUseCheck !== void 0, () => input[_sRIUC]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const se_DeleteKnowledgeBaseCommand = async (
  input: DeleteKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePromptCommand
 */
export const se_DeletePromptCommand = async (
  input: DeletePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts/{promptIdentifier}");
  b.p("promptIdentifier", () => input.promptIdentifier!, "{promptIdentifier}", false);
  const query: any = map({
    [_pV]: [, input[_pV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAgentKnowledgeBaseCommand
 */
export const se_DisassociateAgentKnowledgeBaseCommand = async (
  input: DisassociateAgentKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentCommand
 */
export const se_GetAgentCommand = async (
  input: GetAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentActionGroupCommand
 */
export const se_GetAgentActionGroupCommand = async (
  input: GetAgentActionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("actionGroupId", () => input.actionGroupId!, "{actionGroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentAliasCommand
 */
export const se_GetAgentAliasCommand = async (
  input: GetAgentAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentaliases/{agentAliasId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentKnowledgeBaseCommand
 */
export const se_GetAgentKnowledgeBaseCommand = async (
  input: GetAgentKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentVersionCommand
 */
export const se_GetAgentVersionCommand = async (
  input: GetAgentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}/agentversions/{agentVersion}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFlowCommand
 */
export const se_GetFlowCommand = async (
  input: GetFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFlowAliasCommand
 */
export const se_GetFlowAliasCommand = async (
  input: GetFlowAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/aliases/{aliasIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("aliasIdentifier", () => input.aliasIdentifier!, "{aliasIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFlowVersionCommand
 */
export const se_GetFlowVersionCommand = async (
  input: GetFlowVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/versions/{flowVersion}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("flowVersion", () => input.flowVersion!, "{flowVersion}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIngestionJobCommand
 */
export const se_GetIngestionJobCommand = async (
  input: GetIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  b.p("ingestionJobId", () => input.ingestionJobId!, "{ingestionJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKnowledgeBaseCommand
 */
export const se_GetKnowledgeBaseCommand = async (
  input: GetKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPromptCommand
 */
export const se_GetPromptCommand = async (
  input: GetPromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts/{promptIdentifier}");
  b.p("promptIdentifier", () => input.promptIdentifier!, "{promptIdentifier}", false);
  const query: any = map({
    [_pV]: [, input[_pV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAgentActionGroupsCommand
 */
export const se_ListAgentActionGroupsCommand = async (
  input: ListAgentActionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/actiongroups");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
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
 * serializeAws_restJson1ListAgentAliasesCommand
 */
export const se_ListAgentAliasesCommand = async (
  input: ListAgentAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentaliases");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
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
 * serializeAws_restJson1ListAgentKnowledgeBasesCommand
 */
export const se_ListAgentKnowledgeBasesCommand = async (
  input: ListAgentKnowledgeBasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/knowledgebases");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
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
 * serializeAws_restJson1ListAgentsCommand
 */
export const se_ListAgentsCommand = async (
  input: ListAgentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents");
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
 * serializeAws_restJson1ListAgentVersionsCommand
 */
export const se_ListAgentVersionsCommand = async (
  input: ListAgentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
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
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
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
 * serializeAws_restJson1ListFlowAliasesCommand
 */
export const se_ListFlowAliasesCommand = async (
  input: ListFlowAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/aliases");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFlowsCommand
 */
export const se_ListFlowsCommand = async (
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFlowVersionsCommand
 */
export const se_ListFlowVersionsCommand = async (
  input: ListFlowVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}/versions");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIngestionJobsCommand
 */
export const se_ListIngestionJobsCommand = async (
  input: ListIngestionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKnowledgeBasesCommand
 */
export const se_ListKnowledgeBasesCommand = async (
  input: ListKnowledgeBasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases");
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
 * serializeAws_restJson1ListPromptsCommand
 */
export const se_ListPromptsCommand = async (
  input: ListPromptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompts");
  const query: any = map({
    [_pI]: [, input[_pI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
 * serializeAws_restJson1PrepareAgentCommand
 */
export const se_PrepareAgentCommand = async (
  input: PrepareAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agents/{agentId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PrepareFlowCommand
 */
export const se_PrepareFlowCommand = async (
  input: PrepareFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/flows/{flowIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartIngestionJobCommand
 */
export const se_StartIngestionJobCommand = async (
  input: StartIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopIngestionJobCommand
 */
export const se_StopIngestionJobCommand = async (
  input: StopIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}/ingestionjobs/{ingestionJobId}/stop");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  b.p("ingestionJobId", () => input.ingestionJobId!, "{ingestionJobId}", false);
  let body: any;
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
 * serializeAws_restJson1UpdateAgentCommand
 */
export const se_UpdateAgentCommand = async (
  input: UpdateAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentName: [],
      agentResourceRoleArn: [],
      customerEncryptionKeyArn: [],
      description: [],
      foundationModel: [],
      guardrailConfiguration: (_) => _json(_),
      idleSessionTTLInSeconds: [],
      instruction: [],
      memoryConfiguration: (_) => _json(_),
      promptOverrideConfiguration: (_) => se_PromptOverrideConfiguration(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentActionGroupCommand
 */
export const se_UpdateAgentActionGroupCommand = async (
  input: UpdateAgentActionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/actiongroups/{actionGroupId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("actionGroupId", () => input.actionGroupId!, "{actionGroupId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionGroupExecutor: (_) => _json(_),
      actionGroupName: [],
      actionGroupState: [],
      apiSchema: (_) => _json(_),
      description: [],
      functionSchema: (_) => _json(_),
      parentActionGroupSignature: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentAliasCommand
 */
export const se_UpdateAgentAliasCommand = async (
  input: UpdateAgentAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentaliases/{agentAliasId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentAliasId", () => input.agentAliasId!, "{agentAliasId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentAliasName: [],
      description: [],
      routingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentKnowledgeBaseCommand
 */
export const se_UpdateAgentKnowledgeBaseCommand = async (
  input: UpdateAgentKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agents/{agentId}/agentversions/{agentVersion}/knowledgebases/{knowledgeBaseId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  b.p("agentVersion", () => input.agentVersion!, "{agentVersion}", false);
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      knowledgeBaseState: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}/datasources/{dataSourceId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  b.p("dataSourceId", () => input.dataSourceId!, "{dataSourceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataDeletionPolicy: [],
      dataSourceConfiguration: (_) => _json(_),
      description: [],
      name: [],
      serverSideEncryptionConfiguration: (_) => _json(_),
      vectorIngestionConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFlowCommand
 */
export const se_UpdateFlowCommand = async (
  input: UpdateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows/{flowIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      customerEncryptionKeyArn: [],
      definition: (_) => se_FlowDefinition(_, context),
      description: [],
      executionRoleArn: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFlowAliasCommand
 */
export const se_UpdateFlowAliasCommand = async (
  input: UpdateFlowAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/flows/{flowIdentifier}/aliases/{aliasIdentifier}");
  b.p("flowIdentifier", () => input.flowIdentifier!, "{flowIdentifier}", false);
  b.p("aliasIdentifier", () => input.aliasIdentifier!, "{aliasIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      routingConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKnowledgeBaseCommand
 */
export const se_UpdateKnowledgeBaseCommand = async (
  input: UpdateKnowledgeBaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/knowledgebases/{knowledgeBaseId}");
  b.p("knowledgeBaseId", () => input.knowledgeBaseId!, "{knowledgeBaseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      knowledgeBaseConfiguration: (_) => _json(_),
      name: [],
      roleArn: [],
      storageConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePromptCommand
 */
export const se_UpdatePromptCommand = async (
  input: UpdatePromptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompts/{promptIdentifier}");
  b.p("promptIdentifier", () => input.promptIdentifier!, "{promptIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      customerEncryptionKeyArn: [],
      defaultVariant: [],
      description: [],
      name: [],
      variants: (_) => se_PromptVariantList(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAgentKnowledgeBaseCommand
 */
export const de_AssociateAgentKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAgentKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentKnowledgeBase: (_) => de_AgentKnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAgentCommand
 */
export const de_CreateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agent: (_) => de_Agent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAgentActionGroupCommand
 */
export const de_CreateAgentActionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentActionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentActionGroup: (_) => de_AgentActionGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAgentAliasCommand
 */
export const de_CreateAgentAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgentAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentAlias: (_) => de_AgentAlias(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSource: (_) => de_DataSource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFlowCommand
 */
export const de_CreateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    definition: (_) => de_FlowDefinition(_, context),
    description: __expectString,
    executionRoleArn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFlowAliasCommand
 */
export const de_CreateFlowAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    flowId: __expectString,
    id: __expectString,
    name: __expectString,
    routingConfiguration: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFlowVersionCommand
 */
export const de_CreateFlowVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    definition: (_) => de_FlowDefinition(_, context),
    description: __expectString,
    executionRoleArn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKnowledgeBaseCommand
 */
export const de_CreateKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePromptCommand
 */
export const de_CreatePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePromptCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    defaultVariant: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    variants: (_) => de_PromptVariantList(_, context),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePromptVersionCommand
 */
export const de_CreatePromptVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePromptVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    defaultVariant: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    variants: (_) => de_PromptVariantList(_, context),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAgentCommand
 */
export const de_DeleteAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
    agentStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAgentActionGroupCommand
 */
export const de_DeleteAgentActionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentActionGroupCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAgentAliasCommand
 */
export const de_DeleteAgentAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentAliasId: __expectString,
    agentAliasStatus: __expectString,
    agentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAgentVersionCommand
 */
export const de_DeleteAgentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgentVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
    agentStatus: __expectString,
    agentVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSourceId: __expectString,
    knowledgeBaseId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFlowCommand
 */
export const de_DeleteFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFlowAliasCommand
 */
export const de_DeleteFlowAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flowId: __expectString,
    id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFlowVersionCommand
 */
export const de_DeleteFlowVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKnowledgeBaseCommand
 */
export const de_DeleteKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBaseId: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePromptCommand
 */
export const de_DeletePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAgentKnowledgeBaseCommand
 */
export const de_DisassociateAgentKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAgentKnowledgeBaseCommandOutput> => {
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
 * deserializeAws_restJson1GetAgentCommand
 */
export const de_GetAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agent: (_) => de_Agent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentActionGroupCommand
 */
export const de_GetAgentActionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentActionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentActionGroup: (_) => de_AgentActionGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentAliasCommand
 */
export const de_GetAgentAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentAlias: (_) => de_AgentAlias(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentKnowledgeBaseCommand
 */
export const de_GetAgentKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentKnowledgeBase: (_) => de_AgentKnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentVersionCommand
 */
export const de_GetAgentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentVersion: (_) => de_AgentVersion(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSource: (_) => de_DataSource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFlowCommand
 */
export const de_GetFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    definition: (_) => de_FlowDefinition(_, context),
    description: __expectString,
    executionRoleArn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    validations: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFlowAliasCommand
 */
export const de_GetFlowAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    flowId: __expectString,
    id: __expectString,
    name: __expectString,
    routingConfiguration: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFlowVersionCommand
 */
export const de_GetFlowVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    definition: (_) => de_FlowDefinition(_, context),
    description: __expectString,
    executionRoleArn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIngestionJobCommand
 */
export const de_GetIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIngestionJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionJob: (_) => de_IngestionJob(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKnowledgeBaseCommand
 */
export const de_GetKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPromptCommand
 */
export const de_GetPromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    defaultVariant: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    variants: (_) => de_PromptVariantList(_, context),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentActionGroupsCommand
 */
export const de_ListAgentActionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentActionGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionGroupSummaries: (_) => de_ActionGroupSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentAliasesCommand
 */
export const de_ListAgentAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentAliasSummaries: (_) => de_AgentAliasSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentKnowledgeBasesCommand
 */
export const de_ListAgentKnowledgeBasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentKnowledgeBasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentKnowledgeBaseSummaries: (_) => de_AgentKnowledgeBaseSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentsCommand
 */
export const de_ListAgentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentSummaries: (_) => de_AgentSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAgentVersionsCommand
 */
export const de_ListAgentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentVersionSummaries: (_) => de_AgentVersionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSourceSummaries: (_) => de_DataSourceSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowAliasesCommand
 */
export const de_ListFlowAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flowAliasSummaries: (_) => de_FlowAliasSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowsCommand
 */
export const de_ListFlowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flowSummaries: (_) => de_FlowSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFlowVersionsCommand
 */
export const de_ListFlowVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    flowVersionSummaries: (_) => de_FlowVersionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIngestionJobsCommand
 */
export const de_ListIngestionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIngestionJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionJobSummaries: (_) => de_IngestionJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKnowledgeBasesCommand
 */
export const de_ListKnowledgeBasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKnowledgeBasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBaseSummaries: (_) => de_KnowledgeBaseSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPromptsCommand
 */
export const de_ListPromptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    promptSummaries: (_) => de_PromptSummaries(_, context),
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
 * deserializeAws_restJson1PrepareAgentCommand
 */
export const de_PrepareAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PrepareAgentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
    agentStatus: __expectString,
    agentVersion: __expectString,
    preparedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PrepareFlowCommand
 */
export const de_PrepareFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PrepareFlowCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    id: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartIngestionJobCommand
 */
export const de_StartIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIngestionJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionJob: (_) => de_IngestionJob(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopIngestionJobCommand
 */
export const de_StopIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopIngestionJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ingestionJob: (_) => de_IngestionJob(_, context),
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAgentCommand
 */
export const de_UpdateAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agent: (_) => de_Agent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentActionGroupCommand
 */
export const de_UpdateAgentActionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentActionGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentActionGroup: (_) => de_AgentActionGroup(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentAliasCommand
 */
export const de_UpdateAgentAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentAlias: (_) => de_AgentAlias(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentKnowledgeBaseCommand
 */
export const de_UpdateAgentKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentKnowledgeBase: (_) => de_AgentKnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataSource: (_) => de_DataSource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowCommand
 */
export const de_UpdateFlowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    definition: (_) => de_FlowDefinition(_, context),
    description: __expectString,
    executionRoleArn: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFlowAliasCommand
 */
export const de_UpdateFlowAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    flowId: __expectString,
    id: __expectString,
    name: __expectString,
    routingConfiguration: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKnowledgeBaseCommand
 */
export const de_UpdateKnowledgeBaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKnowledgeBaseCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    knowledgeBase: (_) => de_KnowledgeBase(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePromptCommand
 */
export const de_UpdatePromptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePromptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    defaultVariant: __expectString,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    variants: (_) => de_PromptVariantList(_, context),
    version: __expectString,
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
    case "com.amazonaws.bedrockagent#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockagent#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockagent#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockagent#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockagent#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockagent#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockagent#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ActionGroupExecutor omitted.

// se_AgentAliasRoutingConfiguration omitted.

// se_AgentAliasRoutingConfigurationListItem omitted.

// se_AgentFlowNodeConfiguration omitted.

// se_APISchema omitted.

// se_BedrockEmbeddingModelConfiguration omitted.

// se_BedrockFoundationModelConfiguration omitted.

// se_ChunkingConfiguration omitted.

// se_CollectorFlowNodeConfiguration omitted.

// se_ConditionFlowNodeConfiguration omitted.

// se_ConfluenceCrawlerConfiguration omitted.

// se_ConfluenceDataSourceConfiguration omitted.

// se_ConfluenceSourceConfiguration omitted.

// se_CrawlFilterConfiguration omitted.

// se_CustomTransformationConfiguration omitted.

// se_DataSourceConfiguration omitted.

// se_EmbeddingModelConfiguration omitted.

// se_EnabledMemoryTypes omitted.

// se_FilterList omitted.

// se_FixedSizeChunkingConfiguration omitted.

// se_FlowAliasRoutingConfiguration omitted.

// se_FlowAliasRoutingConfigurationListItem omitted.

// se_FlowCondition omitted.

// se_FlowConditionalConnectionConfiguration omitted.

// se_FlowConditions omitted.

// se_FlowConnection omitted.

// se_FlowConnectionConfiguration omitted.

// se_FlowConnections omitted.

// se_FlowDataConnectionConfiguration omitted.

/**
 * serializeAws_restJson1FlowDefinition
 */
const se_FlowDefinition = (input: FlowDefinition, context: __SerdeContext): any => {
  return take(input, {
    connections: _json,
    nodes: (_) => se_FlowNodes(_, context),
  });
};

/**
 * serializeAws_restJson1FlowNode
 */
const se_FlowNode = (input: FlowNode, context: __SerdeContext): any => {
  return take(input, {
    configuration: (_) => se_FlowNodeConfiguration(_, context),
    inputs: _json,
    name: [],
    outputs: _json,
    type: [],
  });
};

/**
 * serializeAws_restJson1FlowNodeConfiguration
 */
const se_FlowNodeConfiguration = (input: FlowNodeConfiguration, context: __SerdeContext): any => {
  return FlowNodeConfiguration.visit(input, {
    agent: (value) => ({ agent: _json(value) }),
    collector: (value) => ({ collector: _json(value) }),
    condition: (value) => ({ condition: _json(value) }),
    input: (value) => ({ input: _json(value) }),
    iterator: (value) => ({ iterator: _json(value) }),
    knowledgeBase: (value) => ({ knowledgeBase: _json(value) }),
    lambdaFunction: (value) => ({ lambdaFunction: _json(value) }),
    lex: (value) => ({ lex: _json(value) }),
    output: (value) => ({ output: _json(value) }),
    prompt: (value) => ({ prompt: se_PromptFlowNodeConfiguration(value, context) }),
    retrieval: (value) => ({ retrieval: _json(value) }),
    storage: (value) => ({ storage: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_FlowNodeInput omitted.

// se_FlowNodeInputs omitted.

// se_FlowNodeOutput omitted.

// se_FlowNodeOutputs omitted.

/**
 * serializeAws_restJson1FlowNodes
 */
const se_FlowNodes = (input: FlowNode[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FlowNode(entry, context);
    });
};

// se_Function omitted.

// se_Functions omitted.

// se_FunctionSchema omitted.

// se_GuardrailConfiguration omitted.

// se_HierarchicalChunkingConfiguration omitted.

// se_HierarchicalChunkingLevelConfiguration omitted.

// se_HierarchicalChunkingLevelConfigurations omitted.

/**
 * serializeAws_restJson1InferenceConfiguration
 */
const se_InferenceConfiguration = (input: InferenceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    maximumLength: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topK: [],
    topP: __serializeFloat,
  });
};

// se_IngestionJobFilter omitted.

// se_IngestionJobFilters omitted.

// se_IngestionJobFilterValues omitted.

// se_IngestionJobSortBy omitted.

// se_InputFlowNodeConfiguration omitted.

// se_IntermediateStorage omitted.

// se_IteratorFlowNodeConfiguration omitted.

// se_KnowledgeBaseConfiguration omitted.

// se_KnowledgeBaseFlowNodeConfiguration omitted.

// se_LambdaFunctionFlowNodeConfiguration omitted.

// se_LexFlowNodeConfiguration omitted.

// se_MemoryConfiguration omitted.

// se_MongoDbAtlasConfiguration omitted.

// se_MongoDbAtlasFieldMapping omitted.

// se_OpenSearchServerlessConfiguration omitted.

// se_OpenSearchServerlessFieldMapping omitted.

// se_OutputFlowNodeConfiguration omitted.

// se_ParameterDetail omitted.

// se_ParameterMap omitted.

// se_ParsingConfiguration omitted.

// se_ParsingPrompt omitted.

// se_PatternObjectFilter omitted.

// se_PatternObjectFilterConfiguration omitted.

// se_PatternObjectFilterList omitted.

// se_PineconeConfiguration omitted.

// se_PineconeFieldMapping omitted.

/**
 * serializeAws_restJson1PromptConfiguration
 */
const se_PromptConfiguration = (input: PromptConfiguration, context: __SerdeContext): any => {
  return take(input, {
    basePromptTemplate: [],
    inferenceConfiguration: (_) => se_InferenceConfiguration(_, context),
    parserMode: [],
    promptCreationMode: [],
    promptState: [],
    promptType: [],
  });
};

/**
 * serializeAws_restJson1PromptConfigurations
 */
const se_PromptConfigurations = (input: PromptConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PromptConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1PromptFlowNodeConfiguration
 */
const se_PromptFlowNodeConfiguration = (input: PromptFlowNodeConfiguration, context: __SerdeContext): any => {
  return take(input, {
    sourceConfiguration: (_) => se_PromptFlowNodeSourceConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1PromptFlowNodeInlineConfiguration
 */
const se_PromptFlowNodeInlineConfiguration = (
  input: PromptFlowNodeInlineConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    inferenceConfiguration: (_) => se_PromptInferenceConfiguration(_, context),
    modelId: [],
    templateConfiguration: _json,
    templateType: [],
  });
};

// se_PromptFlowNodeResourceConfiguration omitted.

/**
 * serializeAws_restJson1PromptFlowNodeSourceConfiguration
 */
const se_PromptFlowNodeSourceConfiguration = (
  input: PromptFlowNodeSourceConfiguration,
  context: __SerdeContext
): any => {
  return PromptFlowNodeSourceConfiguration.visit(input, {
    inline: (value) => ({ inline: se_PromptFlowNodeInlineConfiguration(value, context) }),
    resource: (value) => ({ resource: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1PromptInferenceConfiguration
 */
const se_PromptInferenceConfiguration = (input: PromptInferenceConfiguration, context: __SerdeContext): any => {
  return PromptInferenceConfiguration.visit(input, {
    text: (value) => ({ text: se_PromptModelInferenceConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_PromptInputVariable omitted.

// se_PromptInputVariablesList omitted.

// se_PromptMetadataEntry omitted.

// se_PromptMetadataList omitted.

/**
 * serializeAws_restJson1PromptModelInferenceConfiguration
 */
const se_PromptModelInferenceConfiguration = (
  input: PromptModelInferenceConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    maxTokens: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topK: [],
    topP: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1PromptOverrideConfiguration
 */
const se_PromptOverrideConfiguration = (input: PromptOverrideConfiguration, context: __SerdeContext): any => {
  return take(input, {
    overrideLambda: [],
    promptConfigurations: (_) => se_PromptConfigurations(_, context),
  });
};

// se_PromptTemplateConfiguration omitted.

/**
 * serializeAws_restJson1PromptVariant
 */
const se_PromptVariant = (input: PromptVariant, context: __SerdeContext): any => {
  return take(input, {
    inferenceConfiguration: (_) => se_PromptInferenceConfiguration(_, context),
    metadata: _json,
    modelId: [],
    name: [],
    templateConfiguration: _json,
    templateType: [],
  });
};

/**
 * serializeAws_restJson1PromptVariantList
 */
const se_PromptVariantList = (input: PromptVariant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PromptVariant(entry, context);
    });
};

// se_RdsConfiguration omitted.

// se_RdsFieldMapping omitted.

// se_RedisEnterpriseCloudConfiguration omitted.

// se_RedisEnterpriseCloudFieldMapping omitted.

// se_RetrievalFlowNodeConfiguration omitted.

// se_RetrievalFlowNodeS3Configuration omitted.

// se_RetrievalFlowNodeServiceConfiguration omitted.

// se_S3DataSourceConfiguration omitted.

// se_S3Identifier omitted.

// se_S3Location omitted.

// se_S3Prefixes omitted.

// se_SalesforceCrawlerConfiguration omitted.

// se_SalesforceDataSourceConfiguration omitted.

// se_SalesforceSourceConfiguration omitted.

// se_SeedUrl omitted.

// se_SeedUrls omitted.

// se_SemanticChunkingConfiguration omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_SharePointCrawlerConfiguration omitted.

// se_SharePointDataSourceConfiguration omitted.

// se_SharePointSiteUrls omitted.

// se_SharePointSourceConfiguration omitted.

// se_StopSequences omitted.

// se_StorageConfiguration omitted.

// se_StorageFlowNodeConfiguration omitted.

// se_StorageFlowNodeS3Configuration omitted.

// se_StorageFlowNodeServiceConfiguration omitted.

// se_TagsMap omitted.

// se_TextPromptTemplateConfiguration omitted.

// se_Transformation omitted.

// se_TransformationFunction omitted.

// se_TransformationLambdaConfiguration omitted.

// se_Transformations omitted.

// se_UrlConfiguration omitted.

// se_VectorIngestionConfiguration omitted.

// se_VectorKnowledgeBaseConfiguration omitted.

// se_WebCrawlerConfiguration omitted.

// se_WebCrawlerLimits omitted.

// se_WebDataSourceConfiguration omitted.

// se_WebSourceConfiguration omitted.

// de_ActionGroupExecutor omitted.

/**
 * deserializeAws_restJson1ActionGroupSummaries
 */
const de_ActionGroupSummaries = (output: any, context: __SerdeContext): ActionGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionGroupSummary
 */
const de_ActionGroupSummary = (output: any, context: __SerdeContext): ActionGroupSummary => {
  return take(output, {
    actionGroupId: __expectString,
    actionGroupName: __expectString,
    actionGroupState: __expectString,
    description: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1Agent
 */
const de_Agent = (output: any, context: __SerdeContext): Agent => {
  return take(output, {
    agentArn: __expectString,
    agentId: __expectString,
    agentName: __expectString,
    agentResourceRoleArn: __expectString,
    agentStatus: __expectString,
    agentVersion: __expectString,
    clientToken: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    description: __expectString,
    failureReasons: _json,
    foundationModel: __expectString,
    guardrailConfiguration: _json,
    idleSessionTTLInSeconds: __expectInt32,
    instruction: __expectString,
    memoryConfiguration: _json,
    preparedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    promptOverrideConfiguration: (_: any) => de_PromptOverrideConfiguration(_, context),
    recommendedActions: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentActionGroup
 */
const de_AgentActionGroup = (output: any, context: __SerdeContext): AgentActionGroup => {
  return take(output, {
    actionGroupExecutor: (_: any) => _json(__expectUnion(_)),
    actionGroupId: __expectString,
    actionGroupName: __expectString,
    actionGroupState: __expectString,
    agentId: __expectString,
    agentVersion: __expectString,
    apiSchema: (_: any) => _json(__expectUnion(_)),
    clientToken: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    functionSchema: (_: any) => _json(__expectUnion(_)),
    parentActionSignature: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentAlias
 */
const de_AgentAlias = (output: any, context: __SerdeContext): AgentAlias => {
  return take(output, {
    agentAliasArn: __expectString,
    agentAliasHistoryEvents: (_: any) => de_AgentAliasHistoryEvents(_, context),
    agentAliasId: __expectString,
    agentAliasName: __expectString,
    agentAliasStatus: __expectString,
    agentId: __expectString,
    clientToken: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    failureReasons: _json,
    routingConfiguration: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentAliasHistoryEvent
 */
const de_AgentAliasHistoryEvent = (output: any, context: __SerdeContext): AgentAliasHistoryEvent => {
  return take(output, {
    endDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    routingConfiguration: _json,
    startDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentAliasHistoryEvents
 */
const de_AgentAliasHistoryEvents = (output: any, context: __SerdeContext): AgentAliasHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentAliasHistoryEvent(entry, context);
    });
  return retVal;
};

// de_AgentAliasRoutingConfiguration omitted.

// de_AgentAliasRoutingConfigurationListItem omitted.

/**
 * deserializeAws_restJson1AgentAliasSummaries
 */
const de_AgentAliasSummaries = (output: any, context: __SerdeContext): AgentAliasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentAliasSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentAliasSummary
 */
const de_AgentAliasSummary = (output: any, context: __SerdeContext): AgentAliasSummary => {
  return take(output, {
    agentAliasId: __expectString,
    agentAliasName: __expectString,
    agentAliasStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    routingConfiguration: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_AgentFlowNodeConfiguration omitted.

/**
 * deserializeAws_restJson1AgentKnowledgeBase
 */
const de_AgentKnowledgeBase = (output: any, context: __SerdeContext): AgentKnowledgeBase => {
  return take(output, {
    agentId: __expectString,
    agentVersion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    knowledgeBaseId: __expectString,
    knowledgeBaseState: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentKnowledgeBaseSummaries
 */
const de_AgentKnowledgeBaseSummaries = (output: any, context: __SerdeContext): AgentKnowledgeBaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentKnowledgeBaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentKnowledgeBaseSummary
 */
const de_AgentKnowledgeBaseSummary = (output: any, context: __SerdeContext): AgentKnowledgeBaseSummary => {
  return take(output, {
    description: __expectString,
    knowledgeBaseId: __expectString,
    knowledgeBaseState: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentSummaries
 */
const de_AgentSummaries = (output: any, context: __SerdeContext): AgentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentSummary
 */
const de_AgentSummary = (output: any, context: __SerdeContext): AgentSummary => {
  return take(output, {
    agentId: __expectString,
    agentName: __expectString,
    agentStatus: __expectString,
    description: __expectString,
    guardrailConfiguration: _json,
    latestAgentVersion: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AgentVersion
 */
const de_AgentVersion = (output: any, context: __SerdeContext): AgentVersion => {
  return take(output, {
    agentArn: __expectString,
    agentId: __expectString,
    agentName: __expectString,
    agentResourceRoleArn: __expectString,
    agentStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyArn: __expectString,
    description: __expectString,
    failureReasons: _json,
    foundationModel: __expectString,
    guardrailConfiguration: _json,
    idleSessionTTLInSeconds: __expectInt32,
    instruction: __expectString,
    memoryConfiguration: _json,
    promptOverrideConfiguration: (_: any) => de_PromptOverrideConfiguration(_, context),
    recommendedActions: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AgentVersionSummaries
 */
const de_AgentVersionSummaries = (output: any, context: __SerdeContext): AgentVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AgentVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AgentVersionSummary
 */
const de_AgentVersionSummary = (output: any, context: __SerdeContext): AgentVersionSummary => {
  return take(output, {
    agentName: __expectString,
    agentStatus: __expectString,
    agentVersion: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    guardrailConfiguration: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_APISchema omitted.

// de_BedrockEmbeddingModelConfiguration omitted.

// de_BedrockFoundationModelConfiguration omitted.

// de_ChunkingConfiguration omitted.

// de_CollectorFlowNodeConfiguration omitted.

// de_ConditionFlowNodeConfiguration omitted.

// de_ConfluenceCrawlerConfiguration omitted.

// de_ConfluenceDataSourceConfiguration omitted.

// de_ConfluenceSourceConfiguration omitted.

// de_CrawlFilterConfiguration omitted.

// de_CustomTransformationConfiguration omitted.

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataDeletionPolicy: __expectString,
    dataSourceConfiguration: _json,
    dataSourceId: __expectString,
    description: __expectString,
    failureReasons: _json,
    knowledgeBaseId: __expectString,
    name: __expectString,
    serverSideEncryptionConfiguration: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    vectorIngestionConfiguration: _json,
  }) as any;
};

// de_DataSourceConfiguration omitted.

/**
 * deserializeAws_restJson1DataSourceSummaries
 */
const de_DataSourceSummaries = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return take(output, {
    dataSourceId: __expectString,
    description: __expectString,
    knowledgeBaseId: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_EmbeddingModelConfiguration omitted.

// de_EnabledMemoryTypes omitted.

// de_FailureReasons omitted.

// de_FilterList omitted.

// de_FixedSizeChunkingConfiguration omitted.

// de_FlowAliasRoutingConfiguration omitted.

// de_FlowAliasRoutingConfigurationListItem omitted.

/**
 * deserializeAws_restJson1FlowAliasSummaries
 */
const de_FlowAliasSummaries = (output: any, context: __SerdeContext): FlowAliasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowAliasSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowAliasSummary
 */
const de_FlowAliasSummary = (output: any, context: __SerdeContext): FlowAliasSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    flowId: __expectString,
    id: __expectString,
    name: __expectString,
    routingConfiguration: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_FlowCondition omitted.

// de_FlowConditionalConnectionConfiguration omitted.

// de_FlowConditions omitted.

// de_FlowConnection omitted.

// de_FlowConnectionConfiguration omitted.

// de_FlowConnections omitted.

// de_FlowDataConnectionConfiguration omitted.

/**
 * deserializeAws_restJson1FlowDefinition
 */
const de_FlowDefinition = (output: any, context: __SerdeContext): FlowDefinition => {
  return take(output, {
    connections: _json,
    nodes: (_: any) => de_FlowNodes(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FlowNode
 */
const de_FlowNode = (output: any, context: __SerdeContext): FlowNode => {
  return take(output, {
    configuration: (_: any) => de_FlowNodeConfiguration(__expectUnion(_), context),
    inputs: _json,
    name: __expectString,
    outputs: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FlowNodeConfiguration
 */
const de_FlowNodeConfiguration = (output: any, context: __SerdeContext): FlowNodeConfiguration => {
  if (output.agent != null) {
    return {
      agent: _json(output.agent),
    };
  }
  if (output.collector != null) {
    return {
      collector: _json(output.collector),
    };
  }
  if (output.condition != null) {
    return {
      condition: _json(output.condition),
    };
  }
  if (output.input != null) {
    return {
      input: _json(output.input),
    };
  }
  if (output.iterator != null) {
    return {
      iterator: _json(output.iterator),
    };
  }
  if (output.knowledgeBase != null) {
    return {
      knowledgeBase: _json(output.knowledgeBase),
    };
  }
  if (output.lambdaFunction != null) {
    return {
      lambdaFunction: _json(output.lambdaFunction),
    };
  }
  if (output.lex != null) {
    return {
      lex: _json(output.lex),
    };
  }
  if (output.output != null) {
    return {
      output: _json(output.output),
    };
  }
  if (output.prompt != null) {
    return {
      prompt: de_PromptFlowNodeConfiguration(output.prompt, context),
    };
  }
  if (output.retrieval != null) {
    return {
      retrieval: _json(output.retrieval),
    };
  }
  if (output.storage != null) {
    return {
      storage: _json(output.storage),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_FlowNodeInput omitted.

// de_FlowNodeInputs omitted.

// de_FlowNodeOutput omitted.

// de_FlowNodeOutputs omitted.

/**
 * deserializeAws_restJson1FlowNodes
 */
const de_FlowNodes = (output: any, context: __SerdeContext): FlowNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowNode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowSummaries
 */
const de_FlowSummaries = (output: any, context: __SerdeContext): FlowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowSummary
 */
const de_FlowSummary = (output: any, context: __SerdeContext): FlowSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

// de_FlowValidation omitted.

// de_FlowValidations omitted.

/**
 * deserializeAws_restJson1FlowVersionSummaries
 */
const de_FlowVersionSummaries = (output: any, context: __SerdeContext): FlowVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FlowVersionSummary
 */
const de_FlowVersionSummary = (output: any, context: __SerdeContext): FlowVersionSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    status: __expectString,
    version: __expectString,
  }) as any;
};

// de_Function omitted.

// de_Functions omitted.

// de_FunctionSchema omitted.

// de_GuardrailConfiguration omitted.

// de_HierarchicalChunkingConfiguration omitted.

// de_HierarchicalChunkingLevelConfiguration omitted.

// de_HierarchicalChunkingLevelConfigurations omitted.

/**
 * deserializeAws_restJson1InferenceConfiguration
 */
const de_InferenceConfiguration = (output: any, context: __SerdeContext): InferenceConfiguration => {
  return take(output, {
    maximumLength: __expectInt32,
    stopSequences: _json,
    temperature: __limitedParseFloat32,
    topK: __expectInt32,
    topP: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1IngestionJob
 */
const de_IngestionJob = (output: any, context: __SerdeContext): IngestionJob => {
  return take(output, {
    dataSourceId: __expectString,
    description: __expectString,
    failureReasons: _json,
    ingestionJobId: __expectString,
    knowledgeBaseId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    statistics: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_IngestionJobStatistics omitted.

/**
 * deserializeAws_restJson1IngestionJobSummaries
 */
const de_IngestionJobSummaries = (output: any, context: __SerdeContext): IngestionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IngestionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IngestionJobSummary
 */
const de_IngestionJobSummary = (output: any, context: __SerdeContext): IngestionJobSummary => {
  return take(output, {
    dataSourceId: __expectString,
    description: __expectString,
    ingestionJobId: __expectString,
    knowledgeBaseId: __expectString,
    startedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    statistics: _json,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_InputFlowNodeConfiguration omitted.

// de_IntermediateStorage omitted.

// de_IteratorFlowNodeConfiguration omitted.

/**
 * deserializeAws_restJson1KnowledgeBase
 */
const de_KnowledgeBase = (output: any, context: __SerdeContext): KnowledgeBase => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    failureReasons: _json,
    knowledgeBaseArn: __expectString,
    knowledgeBaseConfiguration: _json,
    knowledgeBaseId: __expectString,
    name: __expectString,
    roleArn: __expectString,
    status: __expectString,
    storageConfiguration: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_KnowledgeBaseConfiguration omitted.

// de_KnowledgeBaseFlowNodeConfiguration omitted.

/**
 * deserializeAws_restJson1KnowledgeBaseSummaries
 */
const de_KnowledgeBaseSummaries = (output: any, context: __SerdeContext): KnowledgeBaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KnowledgeBaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KnowledgeBaseSummary
 */
const de_KnowledgeBaseSummary = (output: any, context: __SerdeContext): KnowledgeBaseSummary => {
  return take(output, {
    description: __expectString,
    knowledgeBaseId: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_LambdaFunctionFlowNodeConfiguration omitted.

// de_LexFlowNodeConfiguration omitted.

// de_MemoryConfiguration omitted.

// de_MongoDbAtlasConfiguration omitted.

// de_MongoDbAtlasFieldMapping omitted.

// de_OpenSearchServerlessConfiguration omitted.

// de_OpenSearchServerlessFieldMapping omitted.

// de_OutputFlowNodeConfiguration omitted.

// de_ParameterDetail omitted.

// de_ParameterMap omitted.

// de_ParsingConfiguration omitted.

// de_ParsingPrompt omitted.

// de_PatternObjectFilter omitted.

// de_PatternObjectFilterConfiguration omitted.

// de_PatternObjectFilterList omitted.

// de_PineconeConfiguration omitted.

// de_PineconeFieldMapping omitted.

/**
 * deserializeAws_restJson1PromptConfiguration
 */
const de_PromptConfiguration = (output: any, context: __SerdeContext): PromptConfiguration => {
  return take(output, {
    basePromptTemplate: __expectString,
    inferenceConfiguration: (_: any) => de_InferenceConfiguration(_, context),
    parserMode: __expectString,
    promptCreationMode: __expectString,
    promptState: __expectString,
    promptType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PromptConfigurations
 */
const de_PromptConfigurations = (output: any, context: __SerdeContext): PromptConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PromptConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PromptFlowNodeConfiguration
 */
const de_PromptFlowNodeConfiguration = (output: any, context: __SerdeContext): PromptFlowNodeConfiguration => {
  return take(output, {
    sourceConfiguration: (_: any) => de_PromptFlowNodeSourceConfiguration(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1PromptFlowNodeInlineConfiguration
 */
const de_PromptFlowNodeInlineConfiguration = (
  output: any,
  context: __SerdeContext
): PromptFlowNodeInlineConfiguration => {
  return take(output, {
    inferenceConfiguration: (_: any) => de_PromptInferenceConfiguration(__expectUnion(_), context),
    modelId: __expectString,
    templateConfiguration: (_: any) => _json(__expectUnion(_)),
    templateType: __expectString,
  }) as any;
};

// de_PromptFlowNodeResourceConfiguration omitted.

/**
 * deserializeAws_restJson1PromptFlowNodeSourceConfiguration
 */
const de_PromptFlowNodeSourceConfiguration = (
  output: any,
  context: __SerdeContext
): PromptFlowNodeSourceConfiguration => {
  if (output.inline != null) {
    return {
      inline: de_PromptFlowNodeInlineConfiguration(output.inline, context),
    };
  }
  if (output.resource != null) {
    return {
      resource: _json(output.resource),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PromptInferenceConfiguration
 */
const de_PromptInferenceConfiguration = (output: any, context: __SerdeContext): PromptInferenceConfiguration => {
  if (output.text != null) {
    return {
      text: de_PromptModelInferenceConfiguration(output.text, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_PromptInputVariable omitted.

// de_PromptInputVariablesList omitted.

// de_PromptMetadataEntry omitted.

// de_PromptMetadataList omitted.

/**
 * deserializeAws_restJson1PromptModelInferenceConfiguration
 */
const de_PromptModelInferenceConfiguration = (
  output: any,
  context: __SerdeContext
): PromptModelInferenceConfiguration => {
  return take(output, {
    maxTokens: __expectInt32,
    stopSequences: _json,
    temperature: __limitedParseFloat32,
    topK: __expectInt32,
    topP: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1PromptOverrideConfiguration
 */
const de_PromptOverrideConfiguration = (output: any, context: __SerdeContext): PromptOverrideConfiguration => {
  return take(output, {
    overrideLambda: __expectString,
    promptConfigurations: (_: any) => de_PromptConfigurations(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PromptSummaries
 */
const de_PromptSummaries = (output: any, context: __SerdeContext): PromptSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PromptSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PromptSummary
 */
const de_PromptSummary = (output: any, context: __SerdeContext): PromptSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

// de_PromptTemplateConfiguration omitted.

/**
 * deserializeAws_restJson1PromptVariant
 */
const de_PromptVariant = (output: any, context: __SerdeContext): PromptVariant => {
  return take(output, {
    inferenceConfiguration: (_: any) => de_PromptInferenceConfiguration(__expectUnion(_), context),
    metadata: _json,
    modelId: __expectString,
    name: __expectString,
    templateConfiguration: (_: any) => _json(__expectUnion(_)),
    templateType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1PromptVariantList
 */
const de_PromptVariantList = (output: any, context: __SerdeContext): PromptVariant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PromptVariant(entry, context);
    });
  return retVal;
};

// de_RdsConfiguration omitted.

// de_RdsFieldMapping omitted.

// de_RecommendedActions omitted.

// de_RedisEnterpriseCloudConfiguration omitted.

// de_RedisEnterpriseCloudFieldMapping omitted.

// de_RetrievalFlowNodeConfiguration omitted.

// de_RetrievalFlowNodeS3Configuration omitted.

// de_RetrievalFlowNodeServiceConfiguration omitted.

// de_S3DataSourceConfiguration omitted.

// de_S3Identifier omitted.

// de_S3Location omitted.

// de_S3Prefixes omitted.

// de_SalesforceCrawlerConfiguration omitted.

// de_SalesforceDataSourceConfiguration omitted.

// de_SalesforceSourceConfiguration omitted.

// de_SeedUrl omitted.

// de_SeedUrls omitted.

// de_SemanticChunkingConfiguration omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_SharePointCrawlerConfiguration omitted.

// de_SharePointDataSourceConfiguration omitted.

// de_SharePointSiteUrls omitted.

// de_SharePointSourceConfiguration omitted.

// de_StopSequences omitted.

// de_StorageConfiguration omitted.

// de_StorageFlowNodeConfiguration omitted.

// de_StorageFlowNodeS3Configuration omitted.

// de_StorageFlowNodeServiceConfiguration omitted.

// de_TagsMap omitted.

// de_TextPromptTemplateConfiguration omitted.

// de_Transformation omitted.

// de_TransformationFunction omitted.

// de_TransformationLambdaConfiguration omitted.

// de_Transformations omitted.

// de_UrlConfiguration omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VectorIngestionConfiguration omitted.

// de_VectorKnowledgeBaseConfiguration omitted.

// de_WebCrawlerConfiguration omitted.

// de_WebCrawlerLimits omitted.

// de_WebDataSourceConfiguration omitted.

// de_WebSourceConfiguration omitted.

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

const _mR = "maxResults";
const _nT = "nextToken";
const _pI = "promptIdentifier";
const _pV = "promptVersion";
const _sRIUC = "skipResourceInUseCheck";
const _tK = "tagKeys";
