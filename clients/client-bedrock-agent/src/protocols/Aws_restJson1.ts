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
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "../commands/CreateKnowledgeBaseCommand";
import {
  DeleteAgentActionGroupCommandInput,
  DeleteAgentActionGroupCommandOutput,
} from "../commands/DeleteAgentActionGroupCommand";
import { DeleteAgentAliasCommandInput, DeleteAgentAliasCommandOutput } from "../commands/DeleteAgentAliasCommand";
import { DeleteAgentCommandInput, DeleteAgentCommandOutput } from "../commands/DeleteAgentCommand";
import { DeleteAgentVersionCommandInput, DeleteAgentVersionCommandOutput } from "../commands/DeleteAgentVersionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "../commands/DeleteKnowledgeBaseCommand";
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
import { GetIngestionJobCommandInput, GetIngestionJobCommandOutput } from "../commands/GetIngestionJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "../commands/GetKnowledgeBaseCommand";
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
import { ListIngestionJobsCommandInput, ListIngestionJobsCommandOutput } from "../commands/ListIngestionJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "../commands/ListKnowledgeBasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PrepareAgentCommandInput, PrepareAgentCommandOutput } from "../commands/PrepareAgentCommand";
import { StartIngestionJobCommandInput, StartIngestionJobCommandOutput } from "../commands/StartIngestionJobCommand";
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
import {
  UpdateKnowledgeBaseCommandInput,
  UpdateKnowledgeBaseCommandOutput,
} from "../commands/UpdateKnowledgeBaseCommand";
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
  AgentKnowledgeBase,
  AgentKnowledgeBaseSummary,
  AgentSummary,
  AgentVersion,
  AgentVersionSummary,
  APISchema,
  ChunkingConfiguration,
  ConflictException,
  DataSource,
  DataSourceConfiguration,
  DataSourceSummary,
  FixedSizeChunkingConfiguration,
  Function,
  FunctionSchema,
  InferenceConfiguration,
  IngestionJob,
  IngestionJobFilter,
  IngestionJobSortBy,
  IngestionJobSummary,
  InternalServerException,
  KnowledgeBase,
  KnowledgeBaseConfiguration,
  KnowledgeBaseSummary,
  MongoDbAtlasConfiguration,
  MongoDbAtlasFieldMapping,
  OpenSearchServerlessConfiguration,
  OpenSearchServerlessFieldMapping,
  ParameterDetail,
  PineconeConfiguration,
  PineconeFieldMapping,
  PromptConfiguration,
  PromptOverrideConfiguration,
  RdsConfiguration,
  RdsFieldMapping,
  RedisEnterpriseCloudConfiguration,
  RedisEnterpriseCloudFieldMapping,
  ResourceNotFoundException,
  S3DataSourceConfiguration,
  S3Identifier,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  StorageConfiguration,
  ThrottlingException,
  ValidationException,
  VectorIngestionConfiguration,
  VectorKnowledgeBaseConfiguration,
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
      idleSessionTTLInSeconds: [],
      instruction: [],
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
    [_tK]: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input[_tK]! || []).map((_entry) => _entry as any),
    ],
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
      idleSessionTTLInSeconds: [],
      instruction: [],
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

// se_APISchema omitted.

// se_ChunkingConfiguration omitted.

// se_DataSourceConfiguration omitted.

// se_FixedSizeChunkingConfiguration omitted.

// se_Function omitted.

// se_Functions omitted.

// se_FunctionSchema omitted.

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

// se_KnowledgeBaseConfiguration omitted.

// se_MongoDbAtlasConfiguration omitted.

// se_MongoDbAtlasFieldMapping omitted.

// se_OpenSearchServerlessConfiguration omitted.

// se_OpenSearchServerlessFieldMapping omitted.

// se_ParameterDetail omitted.

// se_ParameterMap omitted.

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
 * serializeAws_restJson1PromptOverrideConfiguration
 */
const se_PromptOverrideConfiguration = (input: PromptOverrideConfiguration, context: __SerdeContext): any => {
  return take(input, {
    overrideLambda: [],
    promptConfigurations: (_) => se_PromptConfigurations(_, context),
  });
};

// se_RdsConfiguration omitted.

// se_RdsFieldMapping omitted.

// se_RedisEnterpriseCloudConfiguration omitted.

// se_RedisEnterpriseCloudFieldMapping omitted.

// se_S3DataSourceConfiguration omitted.

// se_S3Identifier omitted.

// se_S3Prefixes omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_StopSequences omitted.

// se_StorageConfiguration omitted.

// se_TagsMap omitted.

// se_VectorIngestionConfiguration omitted.

// se_VectorKnowledgeBaseConfiguration omitted.

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
    idleSessionTTLInSeconds: __expectInt32,
    instruction: __expectString,
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
    idleSessionTTLInSeconds: __expectInt32,
    instruction: __expectString,
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
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_APISchema omitted.

// de_ChunkingConfiguration omitted.

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

// de_FailureReasons omitted.

// de_FixedSizeChunkingConfiguration omitted.

// de_Function omitted.

// de_Functions omitted.

// de_FunctionSchema omitted.

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

// de_MongoDbAtlasConfiguration omitted.

// de_MongoDbAtlasFieldMapping omitted.

// de_OpenSearchServerlessConfiguration omitted.

// de_OpenSearchServerlessFieldMapping omitted.

// de_ParameterDetail omitted.

// de_ParameterMap omitted.

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
 * deserializeAws_restJson1PromptOverrideConfiguration
 */
const de_PromptOverrideConfiguration = (output: any, context: __SerdeContext): PromptOverrideConfiguration => {
  return take(output, {
    overrideLambda: __expectString,
    promptConfigurations: (_: any) => de_PromptConfigurations(_, context),
  }) as any;
};

// de_RdsConfiguration omitted.

// de_RdsFieldMapping omitted.

// de_RecommendedActions omitted.

// de_RedisEnterpriseCloudConfiguration omitted.

// de_RedisEnterpriseCloudFieldMapping omitted.

// de_S3DataSourceConfiguration omitted.

// de_S3Identifier omitted.

// de_S3Prefixes omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_StopSequences omitted.

// de_StorageConfiguration omitted.

// de_TagsMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VectorIngestionConfiguration omitted.

// de_VectorKnowledgeBaseConfiguration omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _sRIUC = "skipResourceInUseCheck";
const _tK = "tagKeys";
