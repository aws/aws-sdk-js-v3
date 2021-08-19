import { CreateApiCacheCommandInput, CreateApiCacheCommandOutput } from "../commands/CreateApiCacheCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "../commands/CreateApiKeyCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "../commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "../commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "../commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "../commands/DeleteApiCacheCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "../commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommandInput, DeleteGraphqlApiCommandOutput } from "../commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommandInput, DeleteResolverCommandOutput } from "../commands/DeleteResolverCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "../commands/DeleteTypeCommand";
import { FlushApiCacheCommandInput, FlushApiCacheCommandOutput } from "../commands/FlushApiCacheCommand";
import { GetApiCacheCommandInput, GetApiCacheCommandOutput } from "../commands/GetApiCacheCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
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
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "../commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "../commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "../commands/UpdateResolverCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "../commands/UpdateTypeCommand";
import {
  AccessDeniedException,
  AdditionalAuthenticationProvider,
  ApiCache,
  ApiKey,
  ApiKeyLimitExceededException,
  ApiKeyValidityOutOfBoundsException,
  ApiLimitExceededException,
  AuthorizationConfig,
  AwsIamConfig,
  BadRequestException,
  CachingConfig,
  CognitoUserPoolConfig,
  ConcurrentModificationException,
  DataSource,
  DeltaSyncConfig,
  DynamodbDataSourceConfig,
  ElasticsearchDataSourceConfig,
  FunctionConfiguration,
  GraphQLSchemaException,
  GraphqlApi,
  HttpDataSourceConfig,
  InternalFailureException,
  LambdaAuthorizerConfig,
  LambdaConflictHandlerConfig,
  LambdaDataSourceConfig,
  LimitExceededException,
  LogConfig,
  NotFoundException,
  OpenIDConnectConfig,
  PipelineConfig,
  RdsHttpEndpointConfig,
  RelationalDatabaseDataSourceConfig,
  Resolver,
  SyncConfig,
  Type,
  UnauthorizedException,
  UserPoolConfig,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.apiCachingBehavior !== undefined &&
      input.apiCachingBehavior !== null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.atRestEncryptionEnabled !== undefined &&
      input.atRestEncryptionEnabled !== null && { atRestEncryptionEnabled: input.atRestEncryptionEnabled }),
    ...(input.transitEncryptionEnabled !== undefined &&
      input.transitEncryptionEnabled !== null && { transitEncryptionEnabled: input.transitEncryptionEnabled }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.expires !== undefined && input.expires !== null && { expires: input.expires }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dynamodbConfig !== undefined &&
      input.dynamodbConfig !== null && {
        dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
      }),
    ...(input.elasticsearchConfig !== undefined &&
      input.elasticsearchConfig !== null && {
        elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
      }),
    ...(input.httpConfig !== undefined &&
      input.httpConfig !== null && {
        httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
      }),
    ...(input.lambdaConfig !== undefined &&
      input.lambdaConfig !== null && {
        lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.relationalDatabaseConfig !== undefined &&
      input.relationalDatabaseConfig !== null && {
        relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
          input.relationalDatabaseConfig,
          context
        ),
      }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.functionVersion !== undefined &&
      input.functionVersion !== null && { functionVersion: input.functionVersion }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders !== undefined &&
      input.additionalAuthenticationProviders !== null && {
        additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
          input.additionalAuthenticationProviders,
          context
        ),
      }),
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig !== undefined &&
      input.lambdaAuthorizerConfig !== null && {
        lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
      }),
    ...(input.logConfig !== undefined &&
      input.logConfig !== null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
        userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
      }),
    ...(input.xrayEnabled !== undefined && input.xrayEnabled !== null && { xrayEnabled: input.xrayEnabled }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.cachingConfig !== undefined &&
      input.cachingConfig !== null && {
        cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
      }),
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.fieldName !== undefined && input.fieldName !== null && { fieldName: input.fieldName }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.pipelineConfig !== undefined &&
      input.pipelineConfig !== null && {
        pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
      }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
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

export const serializeAws_restJson1FlushApiCacheCommand = async (
  input: FlushApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/FlushCache";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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

export const serializeAws_restJson1GetApiCacheCommand = async (
  input: GetApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {
    ...(input.format !== undefined && { format: input.format }),
    ...(input.includeDirectives !== undefined && { includeDirectives: input.includeDirectives.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  const query: any = {
    ...(input.format !== undefined && { format: input.format }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {
    ...(input.format !== undefined && { format: input.format }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: context.base64Encoder(input.definition) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.apiCachingBehavior !== undefined &&
      input.apiCachingBehavior !== null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.expires !== undefined && input.expires !== null && { expires: input.expires }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dynamodbConfig !== undefined &&
      input.dynamodbConfig !== null && {
        dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
      }),
    ...(input.elasticsearchConfig !== undefined &&
      input.elasticsearchConfig !== null && {
        elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
      }),
    ...(input.httpConfig !== undefined &&
      input.httpConfig !== null && {
        httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
      }),
    ...(input.lambdaConfig !== undefined &&
      input.lambdaConfig !== null && {
        lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
      }),
    ...(input.relationalDatabaseConfig !== undefined &&
      input.relationalDatabaseConfig !== null && {
        relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
          input.relationalDatabaseConfig,
          context
        ),
      }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.functionVersion !== undefined &&
      input.functionVersion !== null && { functionVersion: input.functionVersion }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders !== undefined &&
      input.additionalAuthenticationProviders !== null && {
        additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
          input.additionalAuthenticationProviders,
          context
        ),
      }),
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig !== undefined &&
      input.lambdaAuthorizerConfig !== null && {
        lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
      }),
    ...(input.logConfig !== undefined &&
      input.logConfig !== null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
        userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
      }),
    ...(input.xrayEnabled !== undefined && input.xrayEnabled !== null && { xrayEnabled: input.xrayEnabled }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.cachingConfig !== undefined &&
      input.cachingConfig !== null && {
        cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
      }),
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.pipelineConfig !== undefined &&
      input.pipelineConfig !== null && {
        pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
      }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
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

export const deserializeAws_restJson1CreateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiCacheCommandError(output, context);
  }
  const contents: CreateApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiKeyCommandError(output, context);
  }
  const contents: CreateApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiKey: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyLimitExceededException":
    case "com.amazonaws.appsync#ApiKeyLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
  }
  const contents: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionCommandError(output, context);
  }
  const contents: CreateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGraphqlApiCommandError(output, context);
  }
  const contents: CreateGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiLimitExceededException":
    case "com.amazonaws.appsync#ApiLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ApiLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResolverCommandError(output, context);
  }
  const contents: CreateResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTypeCommandError(output, context);
  }
  const contents: CreateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCacheCommandError(output, context);
  }
  const contents: DeleteApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiKeyCommandError(output, context);
  }
  const contents: DeleteApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
  }
  const contents: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGraphqlApiCommandError(output, context);
  }
  const contents: DeleteGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResolverCommandError(output, context);
  }
  const contents: DeleteResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTypeCommandError(output, context);
  }
  const contents: DeleteTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1FlushApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushApiCacheCommandError(output, context);
  }
  const contents: FlushApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1FlushApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCacheCommandError(output, context);
  }
  const contents: GetApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSourceCommandError(output, context);
  }
  const contents: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionCommandError(output, context);
  }
  const contents: GetFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGraphqlApiCommandError(output, context);
  }
  const contents: GetGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetIntrospectionSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntrospectionSchemaCommandError(output, context);
  }
  const contents: GetIntrospectionSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    schema: undefined,
  };
  const data: any = await collectBody(output.body, context);
  contents.schema = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntrospectionSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GraphQLSchemaException":
    case "com.amazonaws.appsync#GraphQLSchemaException":
      response = {
        ...(await deserializeAws_restJson1GraphQLSchemaExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResolverCommandError(output, context);
  }
  const contents: GetResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSchemaCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaCreationStatusCommandError(output, context);
  }
  const contents: GetSchemaCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    details: undefined,
    status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined && data.details !== null) {
    contents.details = __expectString(data.details);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSchemaCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTypeCommandError(output, context);
  }
  const contents: GetTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApiKeysCommandError(output, context);
  }
  const contents: ListApiKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiKeys: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKeys !== undefined && data.apiKeys !== null) {
    contents.apiKeys = deserializeAws_restJson1ApiKeys(data.apiKeys, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApiKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
  }
  const contents: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSources: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    functions: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.functions !== undefined && data.functions !== null) {
    contents.functions = deserializeAws_restJson1Functions(data.functions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGraphqlApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGraphqlApisCommandError(output, context);
  }
  const contents: ListGraphqlApisCommandOutput = {
    $metadata: deserializeMetadata(output),
    graphqlApis: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApis !== undefined && data.graphqlApis !== null) {
    contents.graphqlApis = deserializeAws_restJson1GraphqlApis(data.graphqlApis, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGraphqlApisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListResolversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversCommandError(output, context);
  }
  const contents: ListResolversCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    resolvers: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListResolversCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListResolversByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversByFunctionCommandError(output, context);
  }
  const contents: ListResolversByFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    resolvers: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListResolversByFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypesCommandError(output, context);
  }
  const contents: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    types: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.types !== undefined && data.types !== null) {
    contents.types = deserializeAws_restJson1TypeList(data.types, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartSchemaCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSchemaCreationCommandError(output, context);
  }
  const contents: StartSchemaCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSchemaCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCacheCommandError(output, context);
  }
  const contents: UpdateApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApiCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiKeyCommandError(output, context);
  }
  const contents: UpdateApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    apiKey: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApiKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
  }
  const contents: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionCommandError(output, context);
  }
  const contents: UpdateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGraphqlApiCommandError(output, context);
  }
  const contents: UpdateGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResolverCommandError(output, context);
  }
  const contents: UpdateResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateResolverCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTypeCommandError(output, context);
  }
  const contents: UpdateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiKeyLimitExceededException> => {
  const contents: ApiKeyLimitExceededException = {
    name: "ApiKeyLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiKeyValidityOutOfBoundsException> => {
  const contents: ApiKeyValidityOutOfBoundsException = {
    name: "ApiKeyValidityOutOfBoundsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ApiLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiLimitExceededException> => {
  const contents: ApiLimitExceededException = {
    name: "ApiLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1GraphQLSchemaExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GraphQLSchemaException> => {
  const contents: GraphQLSchemaException = {
    name: "GraphQLSchemaException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1AdditionalAuthenticationProvider = (
  input: AdditionalAuthenticationProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.lambdaAuthorizerConfig !== undefined &&
      input.lambdaAuthorizerConfig !== null && {
        lambdaAuthorizerConfig: serializeAws_restJson1LambdaAuthorizerConfig(input.lambdaAuthorizerConfig, context),
      }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
};

const serializeAws_restJson1AuthorizationConfig = (input: AuthorizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationType !== undefined &&
      input.authorizationType !== null && { authorizationType: input.authorizationType }),
    ...(input.awsIamConfig !== undefined &&
      input.awsIamConfig !== null && { awsIamConfig: serializeAws_restJson1AwsIamConfig(input.awsIamConfig, context) }),
  };
};

const serializeAws_restJson1AwsIamConfig = (input: AwsIamConfig, context: __SerdeContext): any => {
  return {
    ...(input.signingRegion !== undefined && input.signingRegion !== null && { signingRegion: input.signingRegion }),
    ...(input.signingServiceName !== undefined &&
      input.signingServiceName !== null && { signingServiceName: input.signingServiceName }),
  };
};

const serializeAws_restJson1CachingConfig = (input: CachingConfig, context: __SerdeContext): any => {
  return {
    ...(input.cachingKeys !== undefined &&
      input.cachingKeys !== null && { cachingKeys: serializeAws_restJson1CachingKeys(input.cachingKeys, context) }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
  };
};

const serializeAws_restJson1CachingKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CognitoUserPoolConfig = (input: CognitoUserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex !== undefined &&
      input.appIdClientRegex !== null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.userPoolId !== undefined && input.userPoolId !== null && { userPoolId: input.userPoolId }),
  };
};

const serializeAws_restJson1DeltaSyncConfig = (input: DeltaSyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.baseTableTTL !== undefined && input.baseTableTTL !== null && { baseTableTTL: input.baseTableTTL }),
    ...(input.deltaSyncTableName !== undefined &&
      input.deltaSyncTableName !== null && { deltaSyncTableName: input.deltaSyncTableName }),
    ...(input.deltaSyncTableTTL !== undefined &&
      input.deltaSyncTableTTL !== null && { deltaSyncTableTTL: input.deltaSyncTableTTL }),
  };
};

const serializeAws_restJson1DynamodbDataSourceConfig = (
  input: DynamodbDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.deltaSyncConfig !== undefined &&
      input.deltaSyncConfig !== null && {
        deltaSyncConfig: serializeAws_restJson1DeltaSyncConfig(input.deltaSyncConfig, context),
      }),
    ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
    ...(input.useCallerCredentials !== undefined &&
      input.useCallerCredentials !== null && { useCallerCredentials: input.useCallerCredentials }),
    ...(input.versioned !== undefined && input.versioned !== null && { versioned: input.versioned }),
  };
};

const serializeAws_restJson1ElasticsearchDataSourceConfig = (
  input: ElasticsearchDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1FunctionsIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1HttpDataSourceConfig = (input: HttpDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_restJson1AuthorizationConfig(input.authorizationConfig, context),
      }),
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};

const serializeAws_restJson1LambdaAuthorizerConfig = (input: LambdaAuthorizerConfig, context: __SerdeContext): any => {
  return {
    ...(input.authorizerResultTtlInSeconds !== undefined &&
      input.authorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.authorizerResultTtlInSeconds,
      }),
    ...(input.authorizerUri !== undefined && input.authorizerUri !== null && { authorizerUri: input.authorizerUri }),
    ...(input.identityValidationExpression !== undefined &&
      input.identityValidationExpression !== null && {
        identityValidationExpression: input.identityValidationExpression,
      }),
  };
};

const serializeAws_restJson1LambdaConflictHandlerConfig = (
  input: LambdaConflictHandlerConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaConflictHandlerArn !== undefined &&
      input.lambdaConflictHandlerArn !== null && { lambdaConflictHandlerArn: input.lambdaConflictHandlerArn }),
  };
};

const serializeAws_restJson1LambdaDataSourceConfig = (input: LambdaDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.lambdaFunctionArn !== undefined &&
      input.lambdaFunctionArn !== null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};

const serializeAws_restJson1LogConfig = (input: LogConfig, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogsRoleArn !== undefined &&
      input.cloudWatchLogsRoleArn !== null && { cloudWatchLogsRoleArn: input.cloudWatchLogsRoleArn }),
    ...(input.excludeVerboseContent !== undefined &&
      input.excludeVerboseContent !== null && { excludeVerboseContent: input.excludeVerboseContent }),
    ...(input.fieldLogLevel !== undefined && input.fieldLogLevel !== null && { fieldLogLevel: input.fieldLogLevel }),
  };
};

const serializeAws_restJson1OpenIDConnectConfig = (input: OpenIDConnectConfig, context: __SerdeContext): any => {
  return {
    ...(input.authTTL !== undefined && input.authTTL !== null && { authTTL: input.authTTL }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.iatTTL !== undefined && input.iatTTL !== null && { iatTTL: input.iatTTL }),
    ...(input.issuer !== undefined && input.issuer !== null && { issuer: input.issuer }),
  };
};

const serializeAws_restJson1PipelineConfig = (input: PipelineConfig, context: __SerdeContext): any => {
  return {
    ...(input.functions !== undefined &&
      input.functions !== null && { functions: serializeAws_restJson1FunctionsIds(input.functions, context) }),
  };
};

const serializeAws_restJson1RdsHttpEndpointConfig = (input: RdsHttpEndpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.awsSecretStoreArn !== undefined &&
      input.awsSecretStoreArn !== null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.databaseName !== undefined && input.databaseName !== null && { databaseName: input.databaseName }),
    ...(input.dbClusterIdentifier !== undefined &&
      input.dbClusterIdentifier !== null && { dbClusterIdentifier: input.dbClusterIdentifier }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
  };
};

const serializeAws_restJson1RelationalDatabaseDataSourceConfig = (
  input: RelationalDatabaseDataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.rdsHttpEndpointConfig !== undefined &&
      input.rdsHttpEndpointConfig !== null && {
        rdsHttpEndpointConfig: serializeAws_restJson1RdsHttpEndpointConfig(input.rdsHttpEndpointConfig, context),
      }),
    ...(input.relationalDatabaseSourceType !== undefined &&
      input.relationalDatabaseSourceType !== null && {
        relationalDatabaseSourceType: input.relationalDatabaseSourceType,
      }),
  };
};

const serializeAws_restJson1SyncConfig = (input: SyncConfig, context: __SerdeContext): any => {
  return {
    ...(input.conflictDetection !== undefined &&
      input.conflictDetection !== null && { conflictDetection: input.conflictDetection }),
    ...(input.conflictHandler !== undefined &&
      input.conflictHandler !== null && { conflictHandler: input.conflictHandler }),
    ...(input.lambdaConflictHandlerConfig !== undefined &&
      input.lambdaConflictHandlerConfig !== null && {
        lambdaConflictHandlerConfig: serializeAws_restJson1LambdaConflictHandlerConfig(
          input.lambdaConflictHandlerConfig,
          context
        ),
      }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1UserPoolConfig = (input: UserPoolConfig, context: __SerdeContext): any => {
  return {
    ...(input.appIdClientRegex !== undefined &&
      input.appIdClientRegex !== null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.defaultAction !== undefined && input.defaultAction !== null && { defaultAction: input.defaultAction }),
    ...(input.userPoolId !== undefined && input.userPoolId !== null && { userPoolId: input.userPoolId }),
  };
};

const deserializeAws_restJson1AdditionalAuthenticationProvider = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider => {
  return {
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig !== undefined && output.lambdaAuthorizerConfig !== null
        ? deserializeAws_restJson1LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    openIDConnectConfig:
      output.openIDConnectConfig !== undefined && output.openIDConnectConfig !== null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    userPoolConfig:
      output.userPoolConfig !== undefined && output.userPoolConfig !== null
        ? deserializeAws_restJson1CognitoUserPoolConfig(output.userPoolConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalAuthenticationProviders = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
};

const deserializeAws_restJson1ApiCache = (output: any, context: __SerdeContext): ApiCache => {
  return {
    apiCachingBehavior: __expectString(output.apiCachingBehavior),
    atRestEncryptionEnabled: __expectBoolean(output.atRestEncryptionEnabled),
    status: __expectString(output.status),
    transitEncryptionEnabled: __expectBoolean(output.transitEncryptionEnabled),
    ttl: __expectInt(output.ttl),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ApiKey = (output: any, context: __SerdeContext): ApiKey => {
  return {
    deletes: __expectInt(output.deletes),
    description: __expectString(output.description),
    expires: __expectInt(output.expires),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1ApiKeys = (output: any, context: __SerdeContext): ApiKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
};

const deserializeAws_restJson1AuthorizationConfig = (output: any, context: __SerdeContext): AuthorizationConfig => {
  return {
    authorizationType: __expectString(output.authorizationType),
    awsIamConfig:
      output.awsIamConfig !== undefined && output.awsIamConfig !== null
        ? deserializeAws_restJson1AwsIamConfig(output.awsIamConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamConfig = (output: any, context: __SerdeContext): AwsIamConfig => {
  return {
    signingRegion: __expectString(output.signingRegion),
    signingServiceName: __expectString(output.signingServiceName),
  } as any;
};

const deserializeAws_restJson1CachingConfig = (output: any, context: __SerdeContext): CachingConfig => {
  return {
    cachingKeys:
      output.cachingKeys !== undefined && output.cachingKeys !== null
        ? deserializeAws_restJson1CachingKeys(output.cachingKeys, context)
        : undefined,
    ttl: __expectInt(output.ttl),
  } as any;
};

const deserializeAws_restJson1CachingKeys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.dynamodbConfig !== undefined && output.dynamodbConfig !== null
        ? deserializeAws_restJson1DynamodbDataSourceConfig(output.dynamodbConfig, context)
        : undefined,
    elasticsearchConfig:
      output.elasticsearchConfig !== undefined && output.elasticsearchConfig !== null
        ? deserializeAws_restJson1ElasticsearchDataSourceConfig(output.elasticsearchConfig, context)
        : undefined,
    httpConfig:
      output.httpConfig !== undefined && output.httpConfig !== null
        ? deserializeAws_restJson1HttpDataSourceConfig(output.httpConfig, context)
        : undefined,
    lambdaConfig:
      output.lambdaConfig !== undefined && output.lambdaConfig !== null
        ? deserializeAws_restJson1LambdaDataSourceConfig(output.lambdaConfig, context)
        : undefined,
    name: __expectString(output.name),
    relationalDatabaseConfig:
      output.relationalDatabaseConfig !== undefined && output.relationalDatabaseConfig !== null
        ? deserializeAws_restJson1RelationalDatabaseDataSourceConfig(output.relationalDatabaseConfig, context)
        : undefined,
    serviceRoleArn: __expectString(output.serviceRoleArn),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
};

const deserializeAws_restJson1DeltaSyncConfig = (output: any, context: __SerdeContext): DeltaSyncConfig => {
  return {
    baseTableTTL: __expectInt(output.baseTableTTL),
    deltaSyncTableName: __expectString(output.deltaSyncTableName),
    deltaSyncTableTTL: __expectInt(output.deltaSyncTableTTL),
  } as any;
};

const deserializeAws_restJson1DynamodbDataSourceConfig = (
  output: any,
  context: __SerdeContext
): DynamodbDataSourceConfig => {
  return {
    awsRegion: __expectString(output.awsRegion),
    deltaSyncConfig:
      output.deltaSyncConfig !== undefined && output.deltaSyncConfig !== null
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

const deserializeAws_restJson1FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    dataSourceName: __expectString(output.dataSourceName),
    description: __expectString(output.description),
    functionArn: __expectString(output.functionArn),
    functionId: __expectString(output.functionId),
    functionVersion: __expectString(output.functionVersion),
    name: __expectString(output.name),
    requestMappingTemplate: __expectString(output.requestMappingTemplate),
    responseMappingTemplate: __expectString(output.responseMappingTemplate),
    syncConfig:
      output.syncConfig !== undefined && output.syncConfig !== null
        ? deserializeAws_restJson1SyncConfig(output.syncConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Functions = (output: any, context: __SerdeContext): FunctionConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
};

const deserializeAws_restJson1FunctionsIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1GraphqlApi = (output: any, context: __SerdeContext): GraphqlApi => {
  return {
    additionalAuthenticationProviders:
      output.additionalAuthenticationProviders !== undefined && output.additionalAuthenticationProviders !== null
        ? deserializeAws_restJson1AdditionalAuthenticationProviders(output.additionalAuthenticationProviders, context)
        : undefined,
    apiId: __expectString(output.apiId),
    arn: __expectString(output.arn),
    authenticationType: __expectString(output.authenticationType),
    lambdaAuthorizerConfig:
      output.lambdaAuthorizerConfig !== undefined && output.lambdaAuthorizerConfig !== null
        ? deserializeAws_restJson1LambdaAuthorizerConfig(output.lambdaAuthorizerConfig, context)
        : undefined,
    logConfig:
      output.logConfig !== undefined && output.logConfig !== null
        ? deserializeAws_restJson1LogConfig(output.logConfig, context)
        : undefined,
    name: __expectString(output.name),
    openIDConnectConfig:
      output.openIDConnectConfig !== undefined && output.openIDConnectConfig !== null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    uris:
      output.uris !== undefined && output.uris !== null
        ? deserializeAws_restJson1MapOfStringToString(output.uris, context)
        : undefined,
    userPoolConfig:
      output.userPoolConfig !== undefined && output.userPoolConfig !== null
        ? deserializeAws_restJson1UserPoolConfig(output.userPoolConfig, context)
        : undefined,
    wafWebAclArn: __expectString(output.wafWebAclArn),
    xrayEnabled: __expectBoolean(output.xrayEnabled),
  } as any;
};

const deserializeAws_restJson1GraphqlApis = (output: any, context: __SerdeContext): GraphqlApi[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GraphqlApi(entry, context);
    });
};

const deserializeAws_restJson1HttpDataSourceConfig = (output: any, context: __SerdeContext): HttpDataSourceConfig => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
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
    authorizerResultTtlInSeconds: __expectInt(output.authorizerResultTtlInSeconds),
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

const deserializeAws_restJson1MapOfStringToString = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1OpenIDConnectConfig = (output: any, context: __SerdeContext): OpenIDConnectConfig => {
  return {
    authTTL: __expectInt(output.authTTL),
    clientId: __expectString(output.clientId),
    iatTTL: __expectInt(output.iatTTL),
    issuer: __expectString(output.issuer),
  } as any;
};

const deserializeAws_restJson1PipelineConfig = (output: any, context: __SerdeContext): PipelineConfig => {
  return {
    functions:
      output.functions !== undefined && output.functions !== null
        ? deserializeAws_restJson1FunctionsIds(output.functions, context)
        : undefined,
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
      output.rdsHttpEndpointConfig !== undefined && output.rdsHttpEndpointConfig !== null
        ? deserializeAws_restJson1RdsHttpEndpointConfig(output.rdsHttpEndpointConfig, context)
        : undefined,
    relationalDatabaseSourceType: __expectString(output.relationalDatabaseSourceType),
  } as any;
};

const deserializeAws_restJson1Resolver = (output: any, context: __SerdeContext): Resolver => {
  return {
    cachingConfig:
      output.cachingConfig !== undefined && output.cachingConfig !== null
        ? deserializeAws_restJson1CachingConfig(output.cachingConfig, context)
        : undefined,
    dataSourceName: __expectString(output.dataSourceName),
    fieldName: __expectString(output.fieldName),
    kind: __expectString(output.kind),
    pipelineConfig:
      output.pipelineConfig !== undefined && output.pipelineConfig !== null
        ? deserializeAws_restJson1PipelineConfig(output.pipelineConfig, context)
        : undefined,
    requestMappingTemplate: __expectString(output.requestMappingTemplate),
    resolverArn: __expectString(output.resolverArn),
    responseMappingTemplate: __expectString(output.responseMappingTemplate),
    syncConfig:
      output.syncConfig !== undefined && output.syncConfig !== null
        ? deserializeAws_restJson1SyncConfig(output.syncConfig, context)
        : undefined,
    typeName: __expectString(output.typeName),
  } as any;
};

const deserializeAws_restJson1Resolvers = (output: any, context: __SerdeContext): Resolver[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resolver(entry, context);
    });
};

const deserializeAws_restJson1SyncConfig = (output: any, context: __SerdeContext): SyncConfig => {
  return {
    conflictDetection: __expectString(output.conflictDetection),
    conflictHandler: __expectString(output.conflictHandler),
    lambdaConflictHandlerConfig:
      output.lambdaConflictHandlerConfig !== undefined && output.lambdaConflictHandlerConfig !== null
        ? deserializeAws_restJson1LambdaConflictHandlerConfig(output.lambdaConflictHandlerConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Type(entry, context);
    });
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
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
