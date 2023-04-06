// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssociateApiCommandInput, AssociateApiCommandOutput } from "../commands/AssociateApiCommand";
import { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "../commands/CreateApiCacheCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "../commands/CreateApiKeyCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "../commands/CreateDomainNameCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "../commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "../commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "../commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "../commands/DeleteApiCacheCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "../commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput } from "../commands/DeleteDomainNameCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "../commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "../commands/DeleteResolverCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "../commands/DeleteTypeCommand";
import { DisassociateApiCommandInput, DisassociateApiCommandOutput } from "../commands/DisassociateApiCommand";
import { EvaluateCodeCommandInput, EvaluateCodeCommandOutput } from "../commands/EvaluateCodeCommand";
import {
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
} from "../commands/EvaluateMappingTemplateCommand";
import { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "../commands/FlushApiCacheCommand";
import { GetApiAssociationCommandInput, GetApiAssociationCommandOutput } from "../commands/GetApiAssociationCommand";
import { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "../commands/GetApiCacheCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "../commands/GetDomainNameCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "../commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "../commands/GetIntrospectionSchemaCommand";
import { GetResolverCommandInput, GetResolverCommandOutput } from "../commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "../commands/GetSchemaCreationStatusCommand";
import { GetTypeCommandInput, GetTypeCommandOutput } from "../commands/GetTypeCommand";
import { ListApiKeysCommandInput, ListApiKeysCommandOutput } from "../commands/ListApiKeysCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "../commands/ListDomainNamesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import { ListGraphqlApisCommandInput, ListGraphqlApisCommandOutput } from "../commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "../commands/ListResolversByFunctionCommand";
import { ListResolversCommandInput, ListResolversCommandOutput } from "../commands/ListResolversCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "../commands/StartSchemaCreationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "../commands/UpdateApiCacheCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "../commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "../commands/UpdateDomainNameCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "../commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "../commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "../commands/UpdateResolverCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "../commands/UpdateTypeCommand";
import { AppSyncServiceException as __BaseException } from "../models/AppSyncServiceException";
import {
  AccessDeniedException,
  AdditionalAuthenticationProvider,
  ApiAssociation,
  ApiCache,
  ApiKey,
  ApiKeyLimitExceededException,
  ApiKeyValidityOutOfBoundsException,
  ApiLimitExceededException,
  AppSyncRuntime,
  AuthorizationConfig,
  AwsIamConfig,
  BadRequestDetail,
  BadRequestException,
  CachingConfig,
  CodeError,
  CodeErrorLocation,
  CognitoUserPoolConfig,
  ConcurrentModificationException,
  DataSource,
  DeltaSyncConfig,
  DomainNameConfig,
  DynamodbDataSourceConfig,
  ElasticsearchDataSourceConfig,
  ErrorDetail,
  EvaluateCodeErrorDetail,
  EventBridgeDataSourceConfig,
  FunctionConfiguration,
  GraphqlApi,
  GraphQLSchemaException,
  HttpDataSourceConfig,
  InternalFailureException,
  LambdaAuthorizerConfig,
  LambdaConflictHandlerConfig,
  LambdaDataSourceConfig,
  LimitExceededException,
  LogConfig,
  NotFoundException,
  OpenIDConnectConfig,
  OpenSearchServiceDataSourceConfig,
  PipelineConfig,
  RdsHttpEndpointConfig,
  RelationalDatabaseDataSourceConfig,
  Resolver,
  SyncConfig,
  Type,
  UnauthorizedException,
  UserPoolConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateApiCommand
 */
export const se_AssociateApiCommand = async (
  input: AssociateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/domainnames/{domainName}/apiassociation";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.apiId != null && { apiId: input.apiId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateApiCacheCommand
 */
export const se_CreateApiCacheCommand = async (
  input: CreateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/ApiCaches";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.apiCachingBehavior != null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.atRestEncryptionEnabled != null && { atRestEncryptionEnabled: input.atRestEncryptionEnabled }),
    ...(input.transitEncryptionEnabled != null && { transitEncryptionEnabled: input.transitEncryptionEnabled }),
    ...(input.ttl != null && { ttl: input.ttl }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateApiKeyCommand
 */
export const se_CreateApiKeyCommand = async (
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/apikeys";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.expires != null && { expires: input.expires }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/datasources";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.dynamodbConfig != null && { dynamodbConfig: se_DynamodbDataSourceConfig(input.dynamodbConfig, context) }),
    ...(input.elasticsearchConfig != null && {
      elasticsearchConfig: se_ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
    }),
    ...(input.eventBridgeConfig != null && {
      eventBridgeConfig: se_EventBridgeDataSourceConfig(input.eventBridgeConfig, context),
    }),
    ...(input.httpConfig != null && { httpConfig: se_HttpDataSourceConfig(input.httpConfig, context) }),
    ...(input.lambdaConfig != null && { lambdaConfig: se_LambdaDataSourceConfig(input.lambdaConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.openSearchServiceConfig != null && {
      openSearchServiceConfig: se_OpenSearchServiceDataSourceConfig(input.openSearchServiceConfig, context),
    }),
    ...(input.relationalDatabaseConfig != null && {
      relationalDatabaseConfig: se_RelationalDatabaseDataSourceConfig(input.relationalDatabaseConfig, context),
    }),
    ...(input.serviceRoleArn != null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDomainNameCommand
 */
export const se_CreateDomainNameCommand = async (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domainnames";
  let body: any;
  body = JSON.stringify({
    ...(input.certificateArn != null && { certificateArn: input.certificateArn }),
    ...(input.description != null && { description: input.description }),
    ...(input.domainName != null && { domainName: input.domainName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/functions";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.description != null && { description: input.description }),
    ...(input.functionVersion != null && { functionVersion: input.functionVersion }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.name != null && { name: input.name }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: se_AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: se_SyncConfig(input.syncConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateGraphqlApiCommand
 */
export const se_CreateGraphqlApiCommand = async (
  input: CreateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders != null && {
      additionalAuthenticationProviders: se_AdditionalAuthenticationProviders(
        input.additionalAuthenticationProviders,
        context
      ),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: se_LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.logConfig != null && { logConfig: se_LogConfig(input.logConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: se_OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.userPoolConfig != null && { userPoolConfig: se_UserPoolConfig(input.userPoolConfig, context) }),
    ...(input.xrayEnabled != null && { xrayEnabled: input.xrayEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResolverCommand
 */
export const se_CreateResolverCommand = async (
  input: CreateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/types/{typeName}/resolvers";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cachingConfig != null && { cachingConfig: se_CachingConfig(input.cachingConfig, context) }),
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.pipelineConfig != null && { pipelineConfig: se_PipelineConfig(input.pipelineConfig, context) }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: se_AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: se_SyncConfig(input.syncConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTypeCommand
 */
export const se_CreateTypeCommand = async (
  input: CreateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/types";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.definition != null && { definition: input.definition }),
    ...(input.format != null && { format: input.format }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApiCacheCommand
 */
export const se_DeleteApiCacheCommand = async (
  input: DeleteApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/ApiCaches";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApiKeyCommand
 */
export const se_DeleteApiKeyCommand = async (
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/apikeys/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/datasources/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDomainNameCommand
 */
export const se_DeleteDomainNameCommand = async (
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/functions/{functionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "functionId", () => input.functionId!, "{functionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteGraphqlApiCommand
 */
export const se_DeleteGraphqlApiCommand = async (
  input: DeleteGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResolverCommand
 */
export const se_DeleteResolverCommand = async (
  input: DeleteResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTypeCommand
 */
export const se_DeleteTypeCommand = async (
  input: DeleteTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/types/{typeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateApiCommand
 */
export const se_DisassociateApiCommand = async (
  input: DisassociateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/domainnames/{domainName}/apiassociation";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EvaluateCodeCommand
 */
export const se_EvaluateCodeCommand = async (
  input: EvaluateCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/dataplane-evaluatecode";
  let body: any;
  body = JSON.stringify({
    ...(input.code != null && { code: input.code }),
    ...(input.context != null && { context: input.context }),
    ...(input.function != null && { function: input.function }),
    ...(input.runtime != null && { runtime: se_AppSyncRuntime(input.runtime, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EvaluateMappingTemplateCommand
 */
export const se_EvaluateMappingTemplateCommand = async (
  input: EvaluateMappingTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/dataplane-evaluatetemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.context != null && { context: input.context }),
    ...(input.template != null && { template: input.template }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1FlushApiCacheCommand
 */
export const se_FlushApiCacheCommand = async (
  input: FlushApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/FlushCache";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetApiAssociationCommand
 */
export const se_GetApiAssociationCommand = async (
  input: GetApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/domainnames/{domainName}/apiassociation";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetApiCacheCommand
 */
export const se_GetApiCacheCommand = async (
  input: GetApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/ApiCaches";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/datasources/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDomainNameCommand
 */
export const se_GetDomainNameCommand = async (
  input: GetDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/functions/{functionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "functionId", () => input.functionId!, "{functionId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetGraphqlApiCommand
 */
export const se_GetGraphqlApiCommand = async (
  input: GetGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetIntrospectionSchemaCommand
 */
export const se_GetIntrospectionSchemaCommand = async (
  input: GetIntrospectionSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/schema";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    format: [, __expectNonNull(input.format!, `format`)],
    includeDirectives: [() => input.includeDirectives !== void 0, () => input.includeDirectives!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResolverCommand
 */
export const se_GetResolverCommand = async (
  input: GetResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSchemaCreationStatusCommand
 */
export const se_GetSchemaCreationStatusCommand = async (
  input: GetSchemaCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/schemacreation";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTypeCommand
 */
export const se_GetTypeCommand = async (
  input: GetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/types/{typeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  const query: any = map({
    format: [, __expectNonNull(input.format!, `format`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListApiKeysCommand
 */
export const se_ListApiKeysCommand = async (
  input: ListApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/apikeys";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/datasources";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDomainNamesCommand
 */
export const se_ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domainnames";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/functions";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListGraphqlApisCommand
 */
export const se_ListGraphqlApisCommand = async (
  input: ListGraphqlApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListResolversCommand
 */
export const se_ListResolversCommand = async (
  input: ListResolversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/types/{typeName}/resolvers";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListResolversByFunctionCommand
 */
export const se_ListResolversByFunctionCommand = async (
  input: ListResolversByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/functions/{functionId}/resolvers";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "functionId", () => input.functionId!, "{functionId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTypesCommand
 */
export const se_ListTypesCommand = async (
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/types";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    format: [, __expectNonNull(input.format!, `format`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartSchemaCreationCommand
 */
export const se_StartSchemaCreationCommand = async (
  input: StartSchemaCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/schemacreation";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.definition != null && { definition: context.base64Encoder(input.definition) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApiCacheCommand
 */
export const se_UpdateApiCacheCommand = async (
  input: UpdateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/ApiCaches/update";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.apiCachingBehavior != null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.ttl != null && { ttl: input.ttl }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApiKeyCommand
 */
export const se_UpdateApiKeyCommand = async (
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/apikeys/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.expires != null && { expires: input.expires }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/datasources/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.dynamodbConfig != null && { dynamodbConfig: se_DynamodbDataSourceConfig(input.dynamodbConfig, context) }),
    ...(input.elasticsearchConfig != null && {
      elasticsearchConfig: se_ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
    }),
    ...(input.eventBridgeConfig != null && {
      eventBridgeConfig: se_EventBridgeDataSourceConfig(input.eventBridgeConfig, context),
    }),
    ...(input.httpConfig != null && { httpConfig: se_HttpDataSourceConfig(input.httpConfig, context) }),
    ...(input.lambdaConfig != null && { lambdaConfig: se_LambdaDataSourceConfig(input.lambdaConfig, context) }),
    ...(input.openSearchServiceConfig != null && {
      openSearchServiceConfig: se_OpenSearchServiceDataSourceConfig(input.openSearchServiceConfig, context),
    }),
    ...(input.relationalDatabaseConfig != null && {
      relationalDatabaseConfig: se_RelationalDatabaseDataSourceConfig(input.relationalDatabaseConfig, context),
    }),
    ...(input.serviceRoleArn != null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.type != null && { type: input.type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDomainNameCommand
 */
export const se_UpdateDomainNameCommand = async (
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domainnames/{domainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionCommand
 */
export const se_UpdateFunctionCommand = async (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/functions/{functionId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "functionId", () => input.functionId!, "{functionId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.description != null && { description: input.description }),
    ...(input.functionVersion != null && { functionVersion: input.functionVersion }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.name != null && { name: input.name }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: se_AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: se_SyncConfig(input.syncConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGraphqlApiCommand
 */
export const se_UpdateGraphqlApiCommand = async (
  input: UpdateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders != null && {
      additionalAuthenticationProviders: se_AdditionalAuthenticationProviders(
        input.additionalAuthenticationProviders,
        context
      ),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: se_LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.logConfig != null && { logConfig: se_LogConfig(input.logConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: se_OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.userPoolConfig != null && { userPoolConfig: se_UserPoolConfig(input.userPoolConfig, context) }),
    ...(input.xrayEnabled != null && { xrayEnabled: input.xrayEnabled }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResolverCommand
 */
export const se_UpdateResolverCommand = async (
  input: UpdateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cachingConfig != null && { cachingConfig: se_CachingConfig(input.cachingConfig, context) }),
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.pipelineConfig != null && { pipelineConfig: se_PipelineConfig(input.pipelineConfig, context) }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: se_AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: se_SyncConfig(input.syncConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTypeCommand
 */
export const se_UpdateTypeCommand = async (
  input: UpdateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/types/{typeName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "apiId", () => input.apiId!, "{apiId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.definition != null && { definition: input.definition }),
    ...(input.format != null && { format: input.format }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateApiCommand
 */
export const de_AssociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAssociation != null) {
    contents.apiAssociation = de_ApiAssociation(data.apiAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateApiCommandError
 */
const de_AssociateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateApiCacheCommand
 */
export const de_CreateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = de_ApiCache(data.apiCache, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiCacheCommandError
 */
const de_CreateApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateApiKeyCommand
 */
export const de_CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKey != null) {
    contents.apiKey = de_ApiKey(data.apiKey, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiKeyCommandError
 */
const de_CreateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyLimitExceededException":
    case "com.amazonaws.appsync#ApiKeyLimitExceededException":
      throw await de_ApiKeyLimitExceededExceptionRes(parsedOutput, context);
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      throw await de_ApiKeyValidityOutOfBoundsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = de_DataSource(data.dataSource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataSourceCommandError
 */
const de_CreateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDomainNameCommand
 */
export const de_CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = de_DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainNameCommandError
 */
const de_CreateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = de_FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionCommandError
 */
const de_CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateGraphqlApiCommand
 */
export const de_CreateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = de_GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGraphqlApiCommandError
 */
const de_CreateGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiLimitExceededException":
    case "com.amazonaws.appsync#ApiLimitExceededException":
      throw await de_ApiLimitExceededExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateResolverCommand
 */
export const de_CreateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = de_Resolver(data.resolver, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResolverCommandError
 */
const de_CreateResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateTypeCommand
 */
export const de_CreateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = de_Type(data.type, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTypeCommandError
 */
const de_CreateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApiCacheCommand
 */
export const de_DeleteApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiCacheCommandError
 */
const de_DeleteApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApiKeyCommand
 */
export const de_DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApiKeyCommandError
 */
const de_DeleteApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataSourceCommandError
 */
const de_DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDomainNameCommand
 */
export const de_DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainNameCommandError
 */
const de_DeleteDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionCommandError
 */
const de_DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteGraphqlApiCommand
 */
export const de_DeleteGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGraphqlApiCommandError
 */
const de_DeleteGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteResolverCommand
 */
export const de_DeleteResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResolverCommandError
 */
const de_DeleteResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteTypeCommand
 */
export const de_DeleteTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTypeCommandError
 */
const de_DeleteTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateApiCommand
 */
export const de_DisassociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateApiCommandError
 */
const de_DisassociateApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EvaluateCodeCommand
 */
export const de_EvaluateCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EvaluateCodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = de_EvaluateCodeErrorDetail(data.error, context);
  }
  if (data.evaluationResult != null) {
    contents.evaluationResult = __expectString(data.evaluationResult);
  }
  if (data.logs != null) {
    contents.logs = de_Logs(data.logs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EvaluateCodeCommandError
 */
const de_EvaluateCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EvaluateMappingTemplateCommand
 */
export const de_EvaluateMappingTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateMappingTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EvaluateMappingTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = de_ErrorDetail(data.error, context);
  }
  if (data.evaluationResult != null) {
    contents.evaluationResult = __expectString(data.evaluationResult);
  }
  if (data.logs != null) {
    contents.logs = de_Logs(data.logs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EvaluateMappingTemplateCommandError
 */
const de_EvaluateMappingTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateMappingTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1FlushApiCacheCommand
 */
export const de_FlushApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_FlushApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1FlushApiCacheCommandError
 */
const de_FlushApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApiAssociationCommand
 */
export const de_GetApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApiAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAssociation != null) {
    contents.apiAssociation = de_ApiAssociation(data.apiAssociation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetApiAssociationCommandError
 */
const de_GetApiAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApiCacheCommand
 */
export const de_GetApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = de_ApiCache(data.apiCache, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetApiCacheCommandError
 */
const de_GetApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = de_DataSource(data.dataSource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommandError
 */
const de_GetDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDomainNameCommand
 */
export const de_GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = de_DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNameCommandError
 */
const de_GetDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = de_FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionCommandError
 */
const de_GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGraphqlApiCommand
 */
export const de_GetGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = de_GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGraphqlApiCommandError
 */
const de_GetGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetIntrospectionSchemaCommand
 */
export const de_GetIntrospectionSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIntrospectionSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.schema = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetIntrospectionSchemaCommandError
 */
const de_GetIntrospectionSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GraphQLSchemaException":
    case "com.amazonaws.appsync#GraphQLSchemaException":
      throw await de_GraphQLSchemaExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResolverCommand
 */
export const de_GetResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = de_Resolver(data.resolver, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResolverCommandError
 */
const de_GetResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSchemaCreationStatusCommand
 */
export const de_GetSchemaCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSchemaCreationStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.details != null) {
    contents.details = __expectString(data.details);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSchemaCreationStatusCommandError
 */
const de_GetSchemaCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTypeCommand
 */
export const de_GetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = de_Type(data.type, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTypeCommandError
 */
const de_GetTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListApiKeysCommand
 */
export const de_ListApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListApiKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeys != null) {
    contents.apiKeys = de_ApiKeys(data.apiKeys, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListApiKeysCommandError
 */
const de_ListApiKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSources != null) {
    contents.dataSources = de_DataSources(data.dataSources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommandError
 */
const de_ListDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfigs != null) {
    contents.domainNameConfigs = de_DomainNameConfigs(data.domainNameConfigs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainNamesCommandError
 */
const de_ListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functions != null) {
    contents.functions = de_Functions(data.functions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionsCommandError
 */
const de_ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListGraphqlApisCommand
 */
export const de_ListGraphqlApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGraphqlApisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApis != null) {
    contents.graphqlApis = de_GraphqlApis(data.graphqlApis, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGraphqlApisCommandError
 */
const de_ListGraphqlApisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListResolversCommand
 */
export const de_ListResolversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResolversCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers != null) {
    contents.resolvers = de_Resolvers(data.resolvers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResolversCommandError
 */
const de_ListResolversCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListResolversByFunctionCommand
 */
export const de_ListResolversByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResolversByFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers != null) {
    contents.resolvers = de_Resolvers(data.resolvers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResolversByFunctionCommandError
 */
const de_ListResolversByFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTypesCommand
 */
export const de_ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.types != null) {
    contents.types = de_TypeList(data.types, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTypesCommandError
 */
const de_ListTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartSchemaCreationCommand
 */
export const de_StartSchemaCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartSchemaCreationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartSchemaCreationCommandError
 */
const de_StartSchemaCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApiCacheCommand
 */
export const de_UpdateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = de_ApiCache(data.apiCache, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiCacheCommandError
 */
const de_UpdateApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApiKeyCommand
 */
export const de_UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKey != null) {
    contents.apiKey = de_ApiKey(data.apiKey, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiKeyCommandError
 */
const de_UpdateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      throw await de_ApiKeyValidityOutOfBoundsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = de_DataSource(data.dataSource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommandError
 */
const de_UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDomainNameCommand
 */
export const de_UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = de_DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainNameCommandError
 */
const de_UpdateDomainNameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionCommand
 */
export const de_UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = de_FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionCommandError
 */
const de_UpdateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateGraphqlApiCommand
 */
export const de_UpdateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = de_GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGraphqlApiCommandError
 */
const de_UpdateGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResolverCommand
 */
export const de_UpdateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = de_Resolver(data.resolver, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResolverCommandError
 */
const de_UpdateResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTypeCommand
 */
export const de_UpdateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = de_Type(data.type, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTypeCommandError
 */
const de_UpdateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ApiKeyLimitExceededExceptionRes
 */
const de_ApiKeyLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiKeyLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ApiKeyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionRes
 */
const de_ApiKeyValidityOutOfBoundsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiKeyValidityOutOfBoundsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ApiKeyValidityOutOfBoundsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ApiLimitExceededExceptionRes
 */
const de_ApiLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ApiLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.detail != null) {
    contents.detail = de_BadRequestDetail(data.detail, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new BadRequestException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GraphQLSchemaExceptionRes
 */
const de_GraphQLSchemaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GraphQLSchemaException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new GraphQLSchemaException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdditionalAuthenticationProvider
 */
const se_AdditionalAuthenticationProvider = (input: AdditionalAuthenticationProvider, context: __SerdeContext): any => {
  return {
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: se_LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: se_OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.userPoolConfig != null && { userPoolConfig: se_CognitoUserPoolConfig(input.userPoolConfig, context) }),
  };
};

/**
 * serializeAws_restJson1AdditionalAuthenticationProviders
 */
const se_AdditionalAuthenticationProviders = (
  input: AdditionalAuthenticationProvider[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdditionalAuthenticationProvider(entry, context);
    });
};

/**
 * serializeAws_restJson1AppSyncRuntime
 */
const se_AppSyncRuntime = (input: AppSyncRuntime, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.runtimeVersion != null && { runtimeVersion: input.runtimeVersion }),
  };
};

/**
 * serializeAws_restJson1AuthorizationConfig
 */
const se_AuthorizationConfig = (input: AuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationType != null && { authorizationType: input.authorizationType }),
    ...(input.awsIamConfig != null && { awsIamConfig: se_AwsIamConfig(input.awsIamConfig, context) }),
  };
};

/**
 * serializeAws_restJson1AwsIamConfig
 */
const se_AwsIamConfig = (input: AwsIamConfig, context: __SerdeContext): any => {
  return {
    ...(input.signingRegion != null && { signingRegion: input.signingRegion }),
    ...(input.signingServiceName != null && { signingServiceName: input.signingServiceName }),
  };
};

/**
 * serializeAws_restJson1CachingConfig
 */
const se_CachingConfig = (input: CachingConfig, context: __SerdeContext): any => {
  return {
    ...(input.cachingKeys != null && { cachingKeys: se_CachingKeys(input.cachingKeys, context) }),
    ...(input.ttl != null && { ttl: input.ttl }),
  };
};

/**
 * serializeAws_restJson1CachingKeys
 */
const se_CachingKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CognitoUserPoolConfig
 */
const se_CognitoUserPoolConfig = (input: CognitoUserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex != null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.userPoolId != null && { userPoolId: input.userPoolId }),
  };
};

/**
 * serializeAws_restJson1DeltaSyncConfig
 */
const se_DeltaSyncConfig = (input: DeltaSyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.baseTableTTL != null && { baseTableTTL: input.baseTableTTL }),
    ...(input.deltaSyncTableName != null && { deltaSyncTableName: input.deltaSyncTableName }),
    ...(input.deltaSyncTableTTL != null && { deltaSyncTableTTL: input.deltaSyncTableTTL }),
  };
};

/**
 * serializeAws_restJson1DynamodbDataSourceConfig
 */
const se_DynamodbDataSourceConfig = (input: DynamodbDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.deltaSyncConfig != null && { deltaSyncConfig: se_DeltaSyncConfig(input.deltaSyncConfig, context) }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.useCallerCredentials != null && { useCallerCredentials: input.useCallerCredentials }),
    ...(input.versioned != null && { versioned: input.versioned }),
  };
};

/**
 * serializeAws_restJson1ElasticsearchDataSourceConfig
 */
const se_ElasticsearchDataSourceConfig = (input: ElasticsearchDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

/**
 * serializeAws_restJson1EventBridgeDataSourceConfig
 */
const se_EventBridgeDataSourceConfig = (input: EventBridgeDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.eventBusArn != null && { eventBusArn: input.eventBusArn }),
  };
};

/**
 * serializeAws_restJson1FunctionsIds
 */
const se_FunctionsIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HttpDataSourceConfig
 */
const se_HttpDataSourceConfig = (input: HttpDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: se_AuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

/**
 * serializeAws_restJson1LambdaAuthorizerConfig
 */
const se_LambdaAuthorizerConfig = (input: LambdaAuthorizerConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizerResultTtlInSeconds != null && {
      authorizerResultTtlInSeconds: input.authorizerResultTtlInSeconds,
    }),
    ...(input.authorizerUri != null && { authorizerUri: input.authorizerUri }),
    ...(input.identityValidationExpression != null && {
      identityValidationExpression: input.identityValidationExpression,
    }),
  };
};

/**
 * serializeAws_restJson1LambdaConflictHandlerConfig
 */
const se_LambdaConflictHandlerConfig = (input: LambdaConflictHandlerConfig, context: __SerdeContext): any => {
  return {
    ...(input.lambdaConflictHandlerArn != null && { lambdaConflictHandlerArn: input.lambdaConflictHandlerArn }),
  };
};

/**
 * serializeAws_restJson1LambdaDataSourceConfig
 */
const se_LambdaDataSourceConfig = (input: LambdaDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.lambdaFunctionArn != null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};

/**
 * serializeAws_restJson1LogConfig
 */
const se_LogConfig = (input: LogConfig, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogsRoleArn != null && { cloudWatchLogsRoleArn: input.cloudWatchLogsRoleArn }),
    ...(input.excludeVerboseContent != null && { excludeVerboseContent: input.excludeVerboseContent }),
    ...(input.fieldLogLevel != null && { fieldLogLevel: input.fieldLogLevel }),
  };
};

/**
 * serializeAws_restJson1OpenIDConnectConfig
 */
const se_OpenIDConnectConfig = (input: OpenIDConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.authTTL != null && { authTTL: input.authTTL }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.iatTTL != null && { iatTTL: input.iatTTL }),
    ...(input.issuer != null && { issuer: input.issuer }),
  };
};

/**
 * serializeAws_restJson1OpenSearchServiceDataSourceConfig
 */
const se_OpenSearchServiceDataSourceConfig = (
  input: OpenSearchServiceDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

/**
 * serializeAws_restJson1PipelineConfig
 */
const se_PipelineConfig = (input: PipelineConfig, context: __SerdeContext): any => {
  return {
    ...(input.functions != null && { functions: se_FunctionsIds(input.functions, context) }),
  };
};

/**
 * serializeAws_restJson1RdsHttpEndpointConfig
 */
const se_RdsHttpEndpointConfig = (input: RdsHttpEndpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.awsSecretStoreArn != null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.dbClusterIdentifier != null && { dbClusterIdentifier: input.dbClusterIdentifier }),
    ...(input.schema != null && { schema: input.schema }),
  };
};

/**
 * serializeAws_restJson1RelationalDatabaseDataSourceConfig
 */
const se_RelationalDatabaseDataSourceConfig = (
  input: RelationalDatabaseDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.rdsHttpEndpointConfig != null && {
      rdsHttpEndpointConfig: se_RdsHttpEndpointConfig(input.rdsHttpEndpointConfig, context),
    }),
    ...(input.relationalDatabaseSourceType != null && {
      relationalDatabaseSourceType: input.relationalDatabaseSourceType,
    }),
  };
};

/**
 * serializeAws_restJson1SyncConfig
 */
const se_SyncConfig = (input: SyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetection != null && { conflictDetection: input.conflictDetection }),
    ...(input.conflictHandler != null && { conflictHandler: input.conflictHandler }),
    ...(input.lambdaConflictHandlerConfig != null && {
      lambdaConflictHandlerConfig: se_LambdaConflictHandlerConfig(input.lambdaConflictHandlerConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UserPoolConfig
 */
const se_UserPoolConfig = (input: UserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex != null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.defaultAction != null && { defaultAction: input.defaultAction }),
    ...(input.userPoolId != null && { userPoolId: input.userPoolId }),
  };
};

/**
 * deserializeAws_restJson1AdditionalAuthenticationProvider
 */
const de_AdditionalAuthenticationProvider = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider => {
  return {
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig != null
        ? de_LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    openIDConnectConfig:
      output.openIDConnectConfig != null ? de_OpenIDConnectConfig(output.openIDConnectConfig, context) : undefined,
    userPoolConfig:
      output.userPoolConfig != null ? de_CognitoUserPoolConfig(output.userPoolConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalAuthenticationProviders
 */
const de_AdditionalAuthenticationProviders = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdditionalAuthenticationProvider(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApiAssociation
 */
const de_ApiAssociation = (output: any, context: __SerdeContext): ApiAssociation => {
  return {
    apiId: __expectString(output.apiId),
    associationStatus: __expectString(output.associationStatus),
    deploymentDetail: __expectString(output.deploymentDetail),
    domainName: __expectString(output.domainName),
  } as any;
};

/**
 * deserializeAws_restJson1ApiCache
 */
const de_ApiCache = (output: any, context: __SerdeContext): ApiCache => {
  return {
    apiCachingBehavior: __expectString(output.apiCachingBehavior),
    atRestEncryptionEnabled: __expectBoolean(output.atRestEncryptionEnabled),
    status: __expectString(output.status),
    transitEncryptionEnabled: __expectBoolean(output.transitEncryptionEnabled),
    ttl: __expectLong(output.ttl),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ApiKey
 */
const de_ApiKey = (output: any, context: __SerdeContext): ApiKey => {
  return {
    deletes: __expectLong(output.deletes),
    description: __expectString(output.description),
    expires: __expectLong(output.expires),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1ApiKeys
 */
const de_ApiKeys = (output: any, context: __SerdeContext): ApiKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApiKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppSyncRuntime
 */
const de_AppSyncRuntime = (output: any, context: __SerdeContext): AppSyncRuntime => {
  return {
    name: __expectString(output.name),
    runtimeVersion: __expectString(output.runtimeVersion),
  } as any;
};

/**
 * deserializeAws_restJson1AuthorizationConfig
 */
const de_AuthorizationConfig = (output: any, context: __SerdeContext): AuthorizationConfig => {
  return {
    authorizationType: __expectString(output.authorizationType),
    awsIamConfig: output.awsIamConfig != null ? de_AwsIamConfig(output.awsIamConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AwsIamConfig
 */
const de_AwsIamConfig = (output: any, context: __SerdeContext): AwsIamConfig => {
  return {
    signingRegion: __expectString(output.signingRegion),
    signingServiceName: __expectString(output.signingServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1BadRequestDetail
 */
const de_BadRequestDetail = (output: any, context: __SerdeContext): BadRequestDetail => {
  return {
    codeErrors: output.codeErrors != null ? de_CodeErrors(output.codeErrors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CachingConfig
 */
const de_CachingConfig = (output: any, context: __SerdeContext): CachingConfig => {
  return {
    cachingKeys: output.cachingKeys != null ? de_CachingKeys(output.cachingKeys, context) : undefined,
    ttl: __expectLong(output.ttl),
  } as any;
};

/**
 * deserializeAws_restJson1CachingKeys
 */
const de_CachingKeys = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeError
 */
const de_CodeError = (output: any, context: __SerdeContext): CodeError => {
  return {
    errorType: __expectString(output.errorType),
    location: output.location != null ? de_CodeErrorLocation(output.location, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1CodeErrorLocation
 */
const de_CodeErrorLocation = (output: any, context: __SerdeContext): CodeErrorLocation => {
  return {
    column: __expectInt32(output.column),
    line: __expectInt32(output.line),
    span: __expectInt32(output.span),
  } as any;
};

/**
 * deserializeAws_restJson1CodeErrors
 */
const de_CodeErrors = (output: any, context: __SerdeContext): CodeError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CodeError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CognitoUserPoolConfig
 */
const de_CognitoUserPoolConfig = (output: any, context: __SerdeContext): CognitoUserPoolConfig => {
  return {
    appIdClientRegex: __expectString(output.appIdClientRegex),
    awsRegion: __expectString(output.awsRegion),
    userPoolId: __expectString(output.userPoolId),
  } as any;
};

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    dataSourceArn: __expectString(output.dataSourceArn),
    description: __expectString(output.description),
    dynamodbConfig:
      output.dynamodbConfig != null ? de_DynamodbDataSourceConfig(output.dynamodbConfig, context) : undefined,
    elasticsearchConfig:
      output.elasticsearchConfig != null
        ? de_ElasticsearchDataSourceConfig(output.elasticsearchConfig, context)
        : undefined,
    eventBridgeConfig:
      output.eventBridgeConfig != null ? de_EventBridgeDataSourceConfig(output.eventBridgeConfig, context) : undefined,
    httpConfig: output.httpConfig != null ? de_HttpDataSourceConfig(output.httpConfig, context) : undefined,
    lambdaConfig: output.lambdaConfig != null ? de_LambdaDataSourceConfig(output.lambdaConfig, context) : undefined,
    name: __expectString(output.name),
    openSearchServiceConfig:
      output.openSearchServiceConfig != null
        ? de_OpenSearchServiceDataSourceConfig(output.openSearchServiceConfig, context)
        : undefined,
    relationalDatabaseConfig:
      output.relationalDatabaseConfig != null
        ? de_RelationalDatabaseDataSourceConfig(output.relationalDatabaseConfig, context)
        : undefined,
    serviceRoleArn: __expectString(output.serviceRoleArn),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeltaSyncConfig
 */
const de_DeltaSyncConfig = (output: any, context: __SerdeContext): DeltaSyncConfig => {
  return {
    baseTableTTL: __expectLong(output.baseTableTTL),
    deltaSyncTableName: __expectString(output.deltaSyncTableName),
    deltaSyncTableTTL: __expectLong(output.deltaSyncTableTTL),
  } as any;
};

/**
 * deserializeAws_restJson1DomainNameConfig
 */
const de_DomainNameConfig = (output: any, context: __SerdeContext): DomainNameConfig => {
  return {
    appsyncDomainName: __expectString(output.appsyncDomainName),
    certificateArn: __expectString(output.certificateArn),
    description: __expectString(output.description),
    domainName: __expectString(output.domainName),
    hostedZoneId: __expectString(output.hostedZoneId),
  } as any;
};

/**
 * deserializeAws_restJson1DomainNameConfigs
 */
const de_DomainNameConfigs = (output: any, context: __SerdeContext): DomainNameConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainNameConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DynamodbDataSourceConfig
 */
const de_DynamodbDataSourceConfig = (output: any, context: __SerdeContext): DynamodbDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    deltaSyncConfig: output.deltaSyncConfig != null ? de_DeltaSyncConfig(output.deltaSyncConfig, context) : undefined,
    tableName: __expectString(output.tableName),
    useCallerCredentials: __expectBoolean(output.useCallerCredentials),
    versioned: __expectBoolean(output.versioned),
  } as any;
};

/**
 * deserializeAws_restJson1ElasticsearchDataSourceConfig
 */
const de_ElasticsearchDataSourceConfig = (output: any, context: __SerdeContext): ElasticsearchDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    endpoint: __expectString(output.endpoint),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetail
 */
const de_ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1EvaluateCodeErrorDetail
 */
const de_EvaluateCodeErrorDetail = (output: any, context: __SerdeContext): EvaluateCodeErrorDetail => {
  return {
    codeErrors: output.codeErrors != null ? de_CodeErrors(output.codeErrors, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1EventBridgeDataSourceConfig
 */
const de_EventBridgeDataSourceConfig = (output: any, context: __SerdeContext): EventBridgeDataSourceConfig => {
  return {
    eventBusArn: __expectString(output.eventBusArn),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionConfiguration
 */
const de_FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    code: __expectString(output.code),
    dataSourceName: __expectString(output.dataSourceName),
    description: __expectString(output.description),
    functionArn: __expectString(output.functionArn),
    functionId: __expectString(output.functionId),
    functionVersion: __expectString(output.functionVersion),
    maxBatchSize: __expectInt32(output.maxBatchSize),
    name: __expectString(output.name),
    requestMappingTemplate: __expectString(output.requestMappingTemplate),
    responseMappingTemplate: __expectString(output.responseMappingTemplate),
    runtime: output.runtime != null ? de_AppSyncRuntime(output.runtime, context) : undefined,
    syncConfig: output.syncConfig != null ? de_SyncConfig(output.syncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Functions
 */
const de_Functions = (output: any, context: __SerdeContext): FunctionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FunctionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionsIds
 */
const de_FunctionsIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GraphqlApi
 */
const de_GraphqlApi = (output: any, context: __SerdeContext): GraphqlApi => {
  return {
    additionalAuthenticationProviders:
      output.additionalAuthenticationProviders != null
        ? de_AdditionalAuthenticationProviders(output.additionalAuthenticationProviders, context)
        : undefined,
    apiId: __expectString(output.apiId),
    arn: __expectString(output.arn),
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig != null
        ? de_LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    logConfig: output.logConfig != null ? de_LogConfig(output.logConfig, context) : undefined,
    name: __expectString(output.name),
    openIDConnectConfig:
      output.openIDConnectConfig != null ? de_OpenIDConnectConfig(output.openIDConnectConfig, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    uris: output.uris != null ? de_MapOfStringToString(output.uris, context) : undefined,
    userPoolConfig: output.userPoolConfig != null ? de_UserPoolConfig(output.userPoolConfig, context) : undefined,
    wafWebAclArn: __expectString(output.wafWebAclArn),
    xrayEnabled: __expectBoolean(output.xrayEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1GraphqlApis
 */
const de_GraphqlApis = (output: any, context: __SerdeContext): GraphqlApi[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GraphqlApi(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HttpDataSourceConfig
 */
const de_HttpDataSourceConfig = (output: any, context: __SerdeContext): HttpDataSourceConfig => {
  return {
    authorizationConfig:
      output.authorizationConfig != null ? de_AuthorizationConfig(output.authorizationConfig, context) : undefined,
    endpoint: __expectString(output.endpoint),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaAuthorizerConfig
 */
const de_LambdaAuthorizerConfig = (output: any, context: __SerdeContext): LambdaAuthorizerConfig => {
  return {
    authorizerResultTtlInSeconds: __expectInt32(output.authorizerResultTtlInSeconds),
    authorizerUri: __expectString(output.authorizerUri),
    identityValidationExpression: __expectString(output.identityValidationExpression),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaConflictHandlerConfig
 */
const de_LambdaConflictHandlerConfig = (output: any, context: __SerdeContext): LambdaConflictHandlerConfig => {
  return {
    lambdaConflictHandlerArn: __expectString(output.lambdaConflictHandlerArn),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaDataSourceConfig
 */
const de_LambdaDataSourceConfig = (output: any, context: __SerdeContext): LambdaDataSourceConfig => {
  return {
    lambdaFunctionArn: __expectString(output.lambdaFunctionArn),
  } as any;
};

/**
 * deserializeAws_restJson1LogConfig
 */
const de_LogConfig = (output: any, context: __SerdeContext): LogConfig => {
  return {
    cloudWatchLogsRoleArn: __expectString(output.cloudWatchLogsRoleArn),
    excludeVerboseContent: __expectBoolean(output.excludeVerboseContent),
    fieldLogLevel: __expectString(output.fieldLogLevel),
  } as any;
};

/**
 * deserializeAws_restJson1Logs
 */
const de_Logs = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MapOfStringToString
 */
const de_MapOfStringToString = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1OpenIDConnectConfig
 */
const de_OpenIDConnectConfig = (output: any, context: __SerdeContext): OpenIDConnectConfig => {
  return {
    authTTL: __expectLong(output.authTTL),
    clientId: __expectString(output.clientId),
    iatTTL: __expectLong(output.iatTTL),
    issuer: __expectString(output.issuer),
  } as any;
};

/**
 * deserializeAws_restJson1OpenSearchServiceDataSourceConfig
 */
const de_OpenSearchServiceDataSourceConfig = (
  output: any,
  context: __SerdeContext
): OpenSearchServiceDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    endpoint: __expectString(output.endpoint),
  } as any;
};

/**
 * deserializeAws_restJson1PipelineConfig
 */
const de_PipelineConfig = (output: any, context: __SerdeContext): PipelineConfig => {
  return {
    functions: output.functions != null ? de_FunctionsIds(output.functions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RdsHttpEndpointConfig
 */
const de_RdsHttpEndpointConfig = (output: any, context: __SerdeContext): RdsHttpEndpointConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    awsSecretStoreArn: __expectString(output.awsSecretStoreArn),
    databaseName: __expectString(output.databaseName),
    dbClusterIdentifier: __expectString(output.dbClusterIdentifier),
    schema: __expectString(output.schema),
  } as any;
};

/**
 * deserializeAws_restJson1RelationalDatabaseDataSourceConfig
 */
const de_RelationalDatabaseDataSourceConfig = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseDataSourceConfig => {
  return {
    rdsHttpEndpointConfig:
      output.rdsHttpEndpointConfig != null
        ? de_RdsHttpEndpointConfig(output.rdsHttpEndpointConfig, context)
        : undefined,
    relationalDatabaseSourceType: __expectString(output.relationalDatabaseSourceType),
  } as any;
};

/**
 * deserializeAws_restJson1Resolver
 */
const de_Resolver = (output: any, context: __SerdeContext): Resolver => {
  return {
    cachingConfig: output.cachingConfig != null ? de_CachingConfig(output.cachingConfig, context) : undefined,
    code: __expectString(output.code),
    dataSourceName: __expectString(output.dataSourceName),
    fieldName: __expectString(output.fieldName),
    kind: __expectString(output.kind),
    maxBatchSize: __expectInt32(output.maxBatchSize),
    pipelineConfig: output.pipelineConfig != null ? de_PipelineConfig(output.pipelineConfig, context) : undefined,
    requestMappingTemplate: __expectString(output.requestMappingTemplate),
    resolverArn: __expectString(output.resolverArn),
    responseMappingTemplate: __expectString(output.responseMappingTemplate),
    runtime: output.runtime != null ? de_AppSyncRuntime(output.runtime, context) : undefined,
    syncConfig: output.syncConfig != null ? de_SyncConfig(output.syncConfig, context) : undefined,
    typeName: __expectString(output.typeName),
  } as any;
};

/**
 * deserializeAws_restJson1Resolvers
 */
const de_Resolvers = (output: any, context: __SerdeContext): Resolver[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resolver(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SyncConfig
 */
const de_SyncConfig = (output: any, context: __SerdeContext): SyncConfig => {
  return {
    conflictDetection: __expectString(output.conflictDetection),
    conflictHandler: __expectString(output.conflictHandler),
    lambdaConflictHandlerConfig:
      output.lambdaConflictHandlerConfig != null
        ? de_LambdaConflictHandlerConfig(output.lambdaConflictHandlerConfig, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Type
 */
const de_Type = (output: any, context: __SerdeContext): Type => {
  return {
    arn: __expectString(output.arn),
    definition: __expectString(output.definition),
    description: __expectString(output.description),
    format: __expectString(output.format),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1TypeList
 */
const de_TypeList = (output: any, context: __SerdeContext): Type[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Type(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserPoolConfig
 */
const de_UserPoolConfig = (output: any, context: __SerdeContext): UserPoolConfig => {
  return {
    appIdClientRegex: __expectString(output.appIdClientRegex),
    awsRegion: __expectString(output.awsRegion),
    defaultAction: __expectString(output.defaultAction),
    userPoolId: __expectString(output.userPoolId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
