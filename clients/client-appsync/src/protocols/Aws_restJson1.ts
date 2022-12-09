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

export const serializeAws_restJson1AssociateApiCommand = async (
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

export const serializeAws_restJson1CreateApiCacheCommand = async (
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

export const serializeAws_restJson1CreateApiKeyCommand = async (
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

export const serializeAws_restJson1CreateDataSourceCommand = async (
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
    ...(input.dynamodbConfig != null && {
      dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
    }),
    ...(input.elasticsearchConfig != null && {
      elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
    }),
    ...(input.httpConfig != null && {
      httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
    }),
    ...(input.lambdaConfig != null && {
      lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.openSearchServiceConfig != null && {
      openSearchServiceConfig: serializeAws_restJson1OpenSearchServiceDataSourceConfig(
        input.openSearchServiceConfig,
        context
      ),
    }),
    ...(input.relationalDatabaseConfig != null && {
      relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
        input.relationalDatabaseConfig,
        context
      ),
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

export const serializeAws_restJson1CreateDomainNameCommand = async (
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

export const serializeAws_restJson1CreateFunctionCommand = async (
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
    ...(input.runtime != null && { runtime: serializeAws_restJson1AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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

export const serializeAws_restJson1CreateGraphqlApiCommand = async (
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
      additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
        input.additionalAuthenticationProviders,
        context
      ),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.logConfig != null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.userPoolConfig != null && {
      userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
    }),
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

export const serializeAws_restJson1CreateResolverCommand = async (
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
    ...(input.cachingConfig != null && {
      cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
    }),
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.pipelineConfig != null && {
      pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
    }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: serializeAws_restJson1AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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

export const serializeAws_restJson1CreateTypeCommand = async (
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

export const serializeAws_restJson1DeleteApiCacheCommand = async (
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

export const serializeAws_restJson1DeleteApiKeyCommand = async (
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

export const serializeAws_restJson1DeleteDataSourceCommand = async (
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

export const serializeAws_restJson1DeleteDomainNameCommand = async (
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

export const serializeAws_restJson1DeleteFunctionCommand = async (
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

export const serializeAws_restJson1DeleteGraphqlApiCommand = async (
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

export const serializeAws_restJson1DeleteResolverCommand = async (
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

export const serializeAws_restJson1DeleteTypeCommand = async (
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

export const serializeAws_restJson1DisassociateApiCommand = async (
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

export const serializeAws_restJson1EvaluateCodeCommand = async (
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
    ...(input.runtime != null && { runtime: serializeAws_restJson1AppSyncRuntime(input.runtime, context) }),
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

export const serializeAws_restJson1EvaluateMappingTemplateCommand = async (
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

export const serializeAws_restJson1FlushApiCacheCommand = async (
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

export const serializeAws_restJson1GetApiAssociationCommand = async (
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

export const serializeAws_restJson1GetApiCacheCommand = async (
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

export const serializeAws_restJson1GetDataSourceCommand = async (
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

export const serializeAws_restJson1GetDomainNameCommand = async (
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

export const serializeAws_restJson1GetFunctionCommand = async (
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

export const serializeAws_restJson1GetGraphqlApiCommand = async (
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

export const serializeAws_restJson1GetIntrospectionSchemaCommand = async (
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

export const serializeAws_restJson1GetResolverCommand = async (
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

export const serializeAws_restJson1GetSchemaCreationStatusCommand = async (
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

export const serializeAws_restJson1GetTypeCommand = async (
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

export const serializeAws_restJson1ListApiKeysCommand = async (
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

export const serializeAws_restJson1ListDataSourcesCommand = async (
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

export const serializeAws_restJson1ListDomainNamesCommand = async (
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

export const serializeAws_restJson1ListFunctionsCommand = async (
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

export const serializeAws_restJson1ListGraphqlApisCommand = async (
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

export const serializeAws_restJson1ListResolversCommand = async (
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

export const serializeAws_restJson1ListResolversByFunctionCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTypesCommand = async (
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

export const serializeAws_restJson1StartSchemaCreationCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateApiCacheCommand = async (
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

export const serializeAws_restJson1UpdateApiKeyCommand = async (
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

export const serializeAws_restJson1UpdateDataSourceCommand = async (
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
    ...(input.dynamodbConfig != null && {
      dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
    }),
    ...(input.elasticsearchConfig != null && {
      elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
    }),
    ...(input.httpConfig != null && {
      httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
    }),
    ...(input.lambdaConfig != null && {
      lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
    }),
    ...(input.openSearchServiceConfig != null && {
      openSearchServiceConfig: serializeAws_restJson1OpenSearchServiceDataSourceConfig(
        input.openSearchServiceConfig,
        context
      ),
    }),
    ...(input.relationalDatabaseConfig != null && {
      relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
        input.relationalDatabaseConfig,
        context
      ),
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

export const serializeAws_restJson1UpdateDomainNameCommand = async (
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

export const serializeAws_restJson1UpdateFunctionCommand = async (
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
    ...(input.runtime != null && { runtime: serializeAws_restJson1AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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

export const serializeAws_restJson1UpdateGraphqlApiCommand = async (
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
      additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
        input.additionalAuthenticationProviders,
        context
      ),
    }),
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.logConfig != null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.userPoolConfig != null && {
      userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
    }),
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

export const serializeAws_restJson1UpdateResolverCommand = async (
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
    ...(input.cachingConfig != null && {
      cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
    }),
    ...(input.code != null && { code: input.code }),
    ...(input.dataSourceName != null && { dataSourceName: input.dataSourceName }),
    ...(input.kind != null && { kind: input.kind }),
    ...(input.maxBatchSize != null && { maxBatchSize: input.maxBatchSize }),
    ...(input.pipelineConfig != null && {
      pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
    }),
    ...(input.requestMappingTemplate != null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate != null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.runtime != null && { runtime: serializeAws_restJson1AppSyncRuntime(input.runtime, context) }),
    ...(input.syncConfig != null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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

export const serializeAws_restJson1UpdateTypeCommand = async (
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

export const deserializeAws_restJson1AssociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAssociation != null) {
    contents.apiAssociation = deserializeAws_restJson1ApiAssociation(data.apiAssociation, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateApiCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateApiCacheCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKey != null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateApiKeyCommandError = async (
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
      throw await deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse(parsedOutput, context);
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      throw await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDataSourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = deserializeAws_restJson1DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDomainNameCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFunctionCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateGraphqlApiCommandError = async (
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
      throw await deserializeAws_restJson1ApiLimitExceededExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateResolverCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateTypeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApiCacheCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteApiKeyCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDataSourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDomainNameCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFunctionCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteGraphqlApiCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResolverCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTypeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateApiCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EvaluateCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EvaluateCodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = deserializeAws_restJson1EvaluateCodeErrorDetail(data.error, context);
  }
  if (data.evaluationResult != null) {
    contents.evaluationResult = __expectString(data.evaluationResult);
  }
  if (data.logs != null) {
    contents.logs = deserializeAws_restJson1Logs(data.logs, context);
  }
  return contents;
};

const deserializeAws_restJson1EvaluateCodeCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EvaluateMappingTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateMappingTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EvaluateMappingTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.error != null) {
    contents.error = deserializeAws_restJson1ErrorDetail(data.error, context);
  }
  if (data.evaluationResult != null) {
    contents.evaluationResult = __expectString(data.evaluationResult);
  }
  if (data.logs != null) {
    contents.logs = deserializeAws_restJson1Logs(data.logs, context);
  }
  return contents;
};

const deserializeAws_restJson1EvaluateMappingTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1FlushApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1FlushApiCacheCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiAssociation != null) {
    contents.apiAssociation = deserializeAws_restJson1ApiAssociation(data.apiAssociation, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApiAssociationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return contents;
};

const deserializeAws_restJson1GetApiCacheCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDataSourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = deserializeAws_restJson1DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDomainNameCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFunctionCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGraphqlApiCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIntrospectionSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntrospectionSchemaCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.schema = data;
  return contents;
};

const deserializeAws_restJson1GetIntrospectionSchemaCommandError = async (
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
      throw await deserializeAws_restJson1GraphQLSchemaExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResolverCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSchemaCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaCreationStatusCommandError(output, context);
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

const deserializeAws_restJson1GetSchemaCreationStatusCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTypeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApiKeysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKeys != null) {
    contents.apiKeys = deserializeAws_restJson1ApiKeys(data.apiKeys, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListApiKeysCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSources != null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDataSourcesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfigs != null) {
    contents.domainNameConfigs = deserializeAws_restJson1DomainNameConfigs(data.domainNameConfigs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDomainNamesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functions != null) {
    contents.functions = deserializeAws_restJson1Functions(data.functions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFunctionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGraphqlApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGraphqlApisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApis != null) {
    contents.graphqlApis = deserializeAws_restJson1GraphqlApis(data.graphqlApis, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGraphqlApisCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResolversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers != null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResolversCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResolversByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversByFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers != null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResolversByFunctionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.types != null) {
    contents.types = deserializeAws_restJson1TypeList(data.types, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTypesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartSchemaCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSchemaCreationCommandError(output, context);
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

const deserializeAws_restJson1StartSchemaCreationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCacheCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiCache != null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApiCacheCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.apiKey != null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateApiKeyCommandError = async (
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
      throw await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataSource != null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDataSourceCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainNameCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainNameConfig != null) {
    contents.domainNameConfig = deserializeAws_restJson1DomainNameConfig(data.domainNameConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDomainNameCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionConfiguration != null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFunctionCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.graphqlApi != null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGraphqlApiCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResolverCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolver != null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateResolverCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.type != null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateTypeCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse = async (
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

const deserializeAws_restJson1ApiLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.detail != null) {
    contents.detail = deserializeAws_restJson1BadRequestDetail(data.detail, context);
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

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
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

const deserializeAws_restJson1GraphQLSchemaExceptionResponse = async (
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

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
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

const serializeAws_restJson1AdditionalAuthenticationProvider = (
  input: AdditionalAuthenticationProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.authenticationType != null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig != null && {
      lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
    }),
    ...(input.openIDConnectConfig != null && {
      openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
    }),
    ...(input.userPoolConfig != null && {
      userPoolConfig: serializeAws_restJson1CognitoUserPoolConfig(input.userPoolConfig, context),
    }),
  };
};

const serializeAws_restJson1AdditionalAuthenticationProviders = (
  input: AdditionalAuthenticationProvider[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
};

const serializeAws_restJson1AppSyncRuntime = (input: AppSyncRuntime, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.runtimeVersion != null && { runtimeVersion: input.runtimeVersion }),
  };
};

const serializeAws_restJson1AuthorizationConfig = (input: AuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationType != null && { authorizationType: input.authorizationType }),
    ...(input.awsIamConfig != null && {
      awsIamConfig: serializeAws_restJson1AwsIamConfig(input.awsIamConfig, context),
    }),
  };
};

const serializeAws_restJson1AwsIamConfig = (input: AwsIamConfig, context: __SerdeContext): any => {
  return {
    ...(input.signingRegion != null && { signingRegion: input.signingRegion }),
    ...(input.signingServiceName != null && { signingServiceName: input.signingServiceName }),
  };
};

const serializeAws_restJson1CachingConfig = (input: CachingConfig, context: __SerdeContext): any => {
  return {
    ...(input.cachingKeys != null && { cachingKeys: serializeAws_restJson1CachingKeys(input.cachingKeys, context) }),
    ...(input.ttl != null && { ttl: input.ttl }),
  };
};

const serializeAws_restJson1CachingKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CognitoUserPoolConfig = (input: CognitoUserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex != null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.userPoolId != null && { userPoolId: input.userPoolId }),
  };
};

const serializeAws_restJson1DeltaSyncConfig = (input: DeltaSyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.baseTableTTL != null && { baseTableTTL: input.baseTableTTL }),
    ...(input.deltaSyncTableName != null && { deltaSyncTableName: input.deltaSyncTableName }),
    ...(input.deltaSyncTableTTL != null && { deltaSyncTableTTL: input.deltaSyncTableTTL }),
  };
};

const serializeAws_restJson1DynamodbDataSourceConfig = (
  input: DynamodbDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.deltaSyncConfig != null && {
      deltaSyncConfig: serializeAws_restJson1DeltaSyncConfig(input.deltaSyncConfig, context),
    }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.useCallerCredentials != null && { useCallerCredentials: input.useCallerCredentials }),
    ...(input.versioned != null && { versioned: input.versioned }),
  };
};

const serializeAws_restJson1ElasticsearchDataSourceConfig = (
  input: ElasticsearchDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1FunctionsIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1HttpDataSourceConfig = (input: HttpDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig != null && {
      authorizationConfig: serializeAws_restJson1AuthorizationConfig(input.authorizationConfig, context),
    }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1LambdaAuthorizerConfig = (input: LambdaAuthorizerConfig, context: __SerdeContext): any => {
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

const serializeAws_restJson1LambdaConflictHandlerConfig = (
  input: LambdaConflictHandlerConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaConflictHandlerArn != null && { lambdaConflictHandlerArn: input.lambdaConflictHandlerArn }),
  };
};

const serializeAws_restJson1LambdaDataSourceConfig = (input: LambdaDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.lambdaFunctionArn != null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};

const serializeAws_restJson1LogConfig = (input: LogConfig, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogsRoleArn != null && { cloudWatchLogsRoleArn: input.cloudWatchLogsRoleArn }),
    ...(input.excludeVerboseContent != null && { excludeVerboseContent: input.excludeVerboseContent }),
    ...(input.fieldLogLevel != null && { fieldLogLevel: input.fieldLogLevel }),
  };
};

const serializeAws_restJson1OpenIDConnectConfig = (input: OpenIDConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.authTTL != null && { authTTL: input.authTTL }),
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.iatTTL != null && { iatTTL: input.iatTTL }),
    ...(input.issuer != null && { issuer: input.issuer }),
  };
};

const serializeAws_restJson1OpenSearchServiceDataSourceConfig = (
  input: OpenSearchServiceDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.endpoint != null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1PipelineConfig = (input: PipelineConfig, context: __SerdeContext): any => {
  return {
    ...(input.functions != null && { functions: serializeAws_restJson1FunctionsIds(input.functions, context) }),
  };
};

const serializeAws_restJson1RdsHttpEndpointConfig = (input: RdsHttpEndpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.awsSecretStoreArn != null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.databaseName != null && { databaseName: input.databaseName }),
    ...(input.dbClusterIdentifier != null && { dbClusterIdentifier: input.dbClusterIdentifier }),
    ...(input.schema != null && { schema: input.schema }),
  };
};

const serializeAws_restJson1RelationalDatabaseDataSourceConfig = (
  input: RelationalDatabaseDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.rdsHttpEndpointConfig != null && {
      rdsHttpEndpointConfig: serializeAws_restJson1RdsHttpEndpointConfig(input.rdsHttpEndpointConfig, context),
    }),
    ...(input.relationalDatabaseSourceType != null && {
      relationalDatabaseSourceType: input.relationalDatabaseSourceType,
    }),
  };
};

const serializeAws_restJson1SyncConfig = (input: SyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetection != null && { conflictDetection: input.conflictDetection }),
    ...(input.conflictHandler != null && { conflictHandler: input.conflictHandler }),
    ...(input.lambdaConflictHandlerConfig != null && {
      lambdaConflictHandlerConfig: serializeAws_restJson1LambdaConflictHandlerConfig(
        input.lambdaConflictHandlerConfig,
        context
      ),
    }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UserPoolConfig = (input: UserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex != null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion != null && { awsRegion: input.awsRegion }),
    ...(input.defaultAction != null && { defaultAction: input.defaultAction }),
    ...(input.userPoolId != null && { userPoolId: input.userPoolId }),
  };
};

const deserializeAws_restJson1AdditionalAuthenticationProvider = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider => {
  return {
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig != null
        ? deserializeAws_restJson1LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    openIDConnectConfig:
      output.openIDConnectConfig != null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    userPoolConfig:
      output.userPoolConfig != null
        ? deserializeAws_restJson1CognitoUserPoolConfig(output.userPoolConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalAuthenticationProviders = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApiAssociation = (output: any, context: __SerdeContext): ApiAssociation => {
  return {
    apiId: __expectString(output.apiId),
    associationStatus: __expectString(output.associationStatus),
    deploymentDetail: __expectString(output.deploymentDetail),
    domainName: __expectString(output.domainName),
  } as any;
};

const deserializeAws_restJson1ApiCache = (output: any, context: __SerdeContext): ApiCache => {
  return {
    apiCachingBehavior: __expectString(output.apiCachingBehavior),
    atRestEncryptionEnabled: __expectBoolean(output.atRestEncryptionEnabled),
    status: __expectString(output.status),
    transitEncryptionEnabled: __expectBoolean(output.transitEncryptionEnabled),
    ttl: __expectLong(output.ttl),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ApiKey = (output: any, context: __SerdeContext): ApiKey => {
  return {
    deletes: __expectLong(output.deletes),
    description: __expectString(output.description),
    expires: __expectLong(output.expires),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1ApiKeys = (output: any, context: __SerdeContext): ApiKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AppSyncRuntime = (output: any, context: __SerdeContext): AppSyncRuntime => {
  return {
    name: __expectString(output.name),
    runtimeVersion: __expectString(output.runtimeVersion),
  } as any;
};

const deserializeAws_restJson1AuthorizationConfig = (output: any, context: __SerdeContext): AuthorizationConfig => {
  return {
    authorizationType: __expectString(output.authorizationType),
    awsIamConfig:
      output.awsIamConfig != null ? deserializeAws_restJson1AwsIamConfig(output.awsIamConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamConfig = (output: any, context: __SerdeContext): AwsIamConfig => {
  return {
    signingRegion: __expectString(output.signingRegion),
    signingServiceName: __expectString(output.signingServiceName),
  } as any;
};

const deserializeAws_restJson1BadRequestDetail = (output: any, context: __SerdeContext): BadRequestDetail => {
  return {
    codeErrors: output.codeErrors != null ? deserializeAws_restJson1CodeErrors(output.codeErrors, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CachingConfig = (output: any, context: __SerdeContext): CachingConfig => {
  return {
    cachingKeys:
      output.cachingKeys != null ? deserializeAws_restJson1CachingKeys(output.cachingKeys, context) : undefined,
    ttl: __expectLong(output.ttl),
  } as any;
};

const deserializeAws_restJson1CachingKeys = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1CodeError = (output: any, context: __SerdeContext): CodeError => {
  return {
    errorType: __expectString(output.errorType),
    location: output.location != null ? deserializeAws_restJson1CodeErrorLocation(output.location, context) : undefined,
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1CodeErrorLocation = (output: any, context: __SerdeContext): CodeErrorLocation => {
  return {
    column: __expectInt32(output.column),
    line: __expectInt32(output.line),
    span: __expectInt32(output.span),
  } as any;
};

const deserializeAws_restJson1CodeErrors = (output: any, context: __SerdeContext): CodeError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CodeError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CognitoUserPoolConfig = (output: any, context: __SerdeContext): CognitoUserPoolConfig => {
  return {
    appIdClientRegex: __expectString(output.appIdClientRegex),
    awsRegion: __expectString(output.awsRegion),
    userPoolId: __expectString(output.userPoolId),
  } as any;
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    dataSourceArn: __expectString(output.dataSourceArn),
    description: __expectString(output.description),
    dynamodbConfig:
      output.dynamodbConfig != null
        ? deserializeAws_restJson1DynamodbDataSourceConfig(output.dynamodbConfig, context)
        : undefined,
    elasticsearchConfig:
      output.elasticsearchConfig != null
        ? deserializeAws_restJson1ElasticsearchDataSourceConfig(output.elasticsearchConfig, context)
        : undefined,
    httpConfig:
      output.httpConfig != null ? deserializeAws_restJson1HttpDataSourceConfig(output.httpConfig, context) : undefined,
    lambdaConfig:
      output.lambdaConfig != null
        ? deserializeAws_restJson1LambdaDataSourceConfig(output.lambdaConfig, context)
        : undefined,
    name: __expectString(output.name),
    openSearchServiceConfig:
      output.openSearchServiceConfig != null
        ? deserializeAws_restJson1OpenSearchServiceDataSourceConfig(output.openSearchServiceConfig, context)
        : undefined,
    relationalDatabaseConfig:
      output.relationalDatabaseConfig != null
        ? deserializeAws_restJson1RelationalDatabaseDataSourceConfig(output.relationalDatabaseConfig, context)
        : undefined,
    serviceRoleArn: __expectString(output.serviceRoleArn),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeltaSyncConfig = (output: any, context: __SerdeContext): DeltaSyncConfig => {
  return {
    baseTableTTL: __expectLong(output.baseTableTTL),
    deltaSyncTableName: __expectString(output.deltaSyncTableName),
    deltaSyncTableTTL: __expectLong(output.deltaSyncTableTTL),
  } as any;
};

const deserializeAws_restJson1DomainNameConfig = (output: any, context: __SerdeContext): DomainNameConfig => {
  return {
    appsyncDomainName: __expectString(output.appsyncDomainName),
    certificateArn: __expectString(output.certificateArn),
    description: __expectString(output.description),
    domainName: __expectString(output.domainName),
    hostedZoneId: __expectString(output.hostedZoneId),
  } as any;
};

const deserializeAws_restJson1DomainNameConfigs = (output: any, context: __SerdeContext): DomainNameConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainNameConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DynamodbDataSourceConfig = (
  output: any,
  context: __SerdeContext
): DynamodbDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    deltaSyncConfig:
      output.deltaSyncConfig != null
        ? deserializeAws_restJson1DeltaSyncConfig(output.deltaSyncConfig, context)
        : undefined,
    tableName: __expectString(output.tableName),
    useCallerCredentials: __expectBoolean(output.useCallerCredentials),
    versioned: __expectBoolean(output.versioned),
  } as any;
};

const deserializeAws_restJson1ElasticsearchDataSourceConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    endpoint: __expectString(output.endpoint),
  } as any;
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1EvaluateCodeErrorDetail = (
  output: any,
  context: __SerdeContext
): EvaluateCodeErrorDetail => {
  return {
    codeErrors: output.codeErrors != null ? deserializeAws_restJson1CodeErrors(output.codeErrors, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
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
    runtime: output.runtime != null ? deserializeAws_restJson1AppSyncRuntime(output.runtime, context) : undefined,
    syncConfig: output.syncConfig != null ? deserializeAws_restJson1SyncConfig(output.syncConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Functions = (output: any, context: __SerdeContext): FunctionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FunctionsIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1GraphqlApi = (output: any, context: __SerdeContext): GraphqlApi => {
  return {
    additionalAuthenticationProviders:
      output.additionalAuthenticationProviders != null
        ? deserializeAws_restJson1AdditionalAuthenticationProviders(output.additionalAuthenticationProviders, context)
        : undefined,
    apiId: __expectString(output.apiId),
    arn: __expectString(output.arn),
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig != null
        ? deserializeAws_restJson1LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    logConfig: output.logConfig != null ? deserializeAws_restJson1LogConfig(output.logConfig, context) : undefined,
    name: __expectString(output.name),
    openIDConnectConfig:
      output.openIDConnectConfig != null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    uris: output.uris != null ? deserializeAws_restJson1MapOfStringToString(output.uris, context) : undefined,
    userPoolConfig:
      output.userPoolConfig != null
        ? deserializeAws_restJson1UserPoolConfig(output.userPoolConfig, context)
        : undefined,
    wafWebAclArn: __expectString(output.wafWebAclArn),
    xrayEnabled: __expectBoolean(output.xrayEnabled),
  } as any;
};

const deserializeAws_restJson1GraphqlApis = (output: any, context: __SerdeContext): GraphqlApi[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GraphqlApi(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HttpDataSourceConfig = (output: any, context: __SerdeContext): HttpDataSourceConfig => {
  return {
    authorizationConfig:
      output.authorizationConfig != null
        ? deserializeAws_restJson1AuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    endpoint: __expectString(output.endpoint),
  } as any;
};

const deserializeAws_restJson1LambdaAuthorizerConfig = (
  output: any,
  context: __SerdeContext
): LambdaAuthorizerConfig => {
  return {
    authorizerResultTtlInSeconds: __expectInt32(output.authorizerResultTtlInSeconds),
    authorizerUri: __expectString(output.authorizerUri),
    identityValidationExpression: __expectString(output.identityValidationExpression),
  } as any;
};

const deserializeAws_restJson1LambdaConflictHandlerConfig = (
  output: any,
  context: __SerdeContext
): LambdaConflictHandlerConfig => {
  return {
    lambdaConflictHandlerArn: __expectString(output.lambdaConflictHandlerArn),
  } as any;
};

const deserializeAws_restJson1LambdaDataSourceConfig = (
  output: any,
  context: __SerdeContext
): LambdaDataSourceConfig => {
  return {
    lambdaFunctionArn: __expectString(output.lambdaFunctionArn),
  } as any;
};

const deserializeAws_restJson1LogConfig = (output: any, context: __SerdeContext): LogConfig => {
  return {
    cloudWatchLogsRoleArn: __expectString(output.cloudWatchLogsRoleArn),
    excludeVerboseContent: __expectBoolean(output.excludeVerboseContent),
    fieldLogLevel: __expectString(output.fieldLogLevel),
  } as any;
};

const deserializeAws_restJson1Logs = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1MapOfStringToString = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1OpenIDConnectConfig = (output: any, context: __SerdeContext): OpenIDConnectConfig => {
  return {
    authTTL: __expectLong(output.authTTL),
    clientId: __expectString(output.clientId),
    iatTTL: __expectLong(output.iatTTL),
    issuer: __expectString(output.issuer),
  } as any;
};

const deserializeAws_restJson1OpenSearchServiceDataSourceConfig = (
  output: any,
  context: __SerdeContext
): OpenSearchServiceDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    endpoint: __expectString(output.endpoint),
  } as any;
};

const deserializeAws_restJson1PipelineConfig = (output: any, context: __SerdeContext): PipelineConfig => {
  return {
    functions: output.functions != null ? deserializeAws_restJson1FunctionsIds(output.functions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RdsHttpEndpointConfig = (output: any, context: __SerdeContext): RdsHttpEndpointConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    awsSecretStoreArn: __expectString(output.awsSecretStoreArn),
    databaseName: __expectString(output.databaseName),
    dbClusterIdentifier: __expectString(output.dbClusterIdentifier),
    schema: __expectString(output.schema),
  } as any;
};

const deserializeAws_restJson1RelationalDatabaseDataSourceConfig = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseDataSourceConfig => {
  return {
    rdsHttpEndpointConfig:
      output.rdsHttpEndpointConfig != null
        ? deserializeAws_restJson1RdsHttpEndpointConfig(output.rdsHttpEndpointConfig, context)
        : undefined,
    relationalDatabaseSourceType: __expectString(output.relationalDatabaseSourceType),
  } as any;
};

const deserializeAws_restJson1Resolver = (output: any, context: __SerdeContext): Resolver => {
  return {
    cachingConfig:
      output.cachingConfig != null ? deserializeAws_restJson1CachingConfig(output.cachingConfig, context) : undefined,
    code: __expectString(output.code),
    dataSourceName: __expectString(output.dataSourceName),
    fieldName: __expectString(output.fieldName),
    kind: __expectString(output.kind),
    maxBatchSize: __expectInt32(output.maxBatchSize),
    pipelineConfig:
      output.pipelineConfig != null
        ? deserializeAws_restJson1PipelineConfig(output.pipelineConfig, context)
        : undefined,
    requestMappingTemplate: __expectString(output.requestMappingTemplate),
    resolverArn: __expectString(output.resolverArn),
    responseMappingTemplate: __expectString(output.responseMappingTemplate),
    runtime: output.runtime != null ? deserializeAws_restJson1AppSyncRuntime(output.runtime, context) : undefined,
    syncConfig: output.syncConfig != null ? deserializeAws_restJson1SyncConfig(output.syncConfig, context) : undefined,
    typeName: __expectString(output.typeName),
  } as any;
};

const deserializeAws_restJson1Resolvers = (output: any, context: __SerdeContext): Resolver[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resolver(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SyncConfig = (output: any, context: __SerdeContext): SyncConfig => {
  return {
    conflictDetection: __expectString(output.conflictDetection),
    conflictHandler: __expectString(output.conflictHandler),
    lambdaConflictHandlerConfig:
      output.lambdaConflictHandlerConfig != null
        ? deserializeAws_restJson1LambdaConflictHandlerConfig(output.lambdaConflictHandlerConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Type = (output: any, context: __SerdeContext): Type => {
  return {
    arn: __expectString(output.arn),
    definition: __expectString(output.definition),
    description: __expectString(output.description),
    format: __expectString(output.format),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1TypeList = (output: any, context: __SerdeContext): Type[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Type(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UserPoolConfig = (output: any, context: __SerdeContext): UserPoolConfig => {
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
