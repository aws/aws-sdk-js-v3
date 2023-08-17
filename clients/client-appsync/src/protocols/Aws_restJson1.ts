// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateApiCommandInput, AssociateApiCommandOutput } from "../commands/AssociateApiCommand";
import {
  AssociateMergedGraphqlApiCommandInput,
  AssociateMergedGraphqlApiCommandOutput,
} from "../commands/AssociateMergedGraphqlApiCommand";
import {
  AssociateSourceGraphqlApiCommandInput,
  AssociateSourceGraphqlApiCommandOutput,
} from "../commands/AssociateSourceGraphqlApiCommand";
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
import {
  DisassociateMergedGraphqlApiCommandInput,
  DisassociateMergedGraphqlApiCommandOutput,
} from "../commands/DisassociateMergedGraphqlApiCommand";
import {
  DisassociateSourceGraphqlApiCommandInput,
  DisassociateSourceGraphqlApiCommandOutput,
} from "../commands/DisassociateSourceGraphqlApiCommand";
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
import {
  GetSourceApiAssociationCommandInput,
  GetSourceApiAssociationCommandOutput,
} from "../commands/GetSourceApiAssociationCommand";
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
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
} from "../commands/ListSourceApiAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
} from "../commands/ListTypesByAssociationCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "../commands/StartSchemaCreationCommand";
import { StartSchemaMergeCommandInput, StartSchemaMergeCommandOutput } from "../commands/StartSchemaMergeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "../commands/UpdateApiCacheCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "../commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput } from "../commands/UpdateDomainNameCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "../commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommandInput, UpdateGraphqlApiCommandOutput } from "../commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommandInput, UpdateResolverCommandOutput } from "../commands/UpdateResolverCommand";
import {
  UpdateSourceApiAssociationCommandInput,
  UpdateSourceApiAssociationCommandOutput,
} from "../commands/UpdateSourceApiAssociationCommand";
import { UpdateTypeCommandInput, UpdateTypeCommandOutput } from "../commands/UpdateTypeCommand";
import { AppSyncServiceException as __BaseException } from "../models/AppSyncServiceException";
import {
  AccessDeniedException,
  AdditionalAuthenticationProvider,
  ApiKeyLimitExceededException,
  ApiKeyValidityOutOfBoundsException,
  ApiLimitExceededException,
  AppSyncRuntime,
  AuthorizationConfig,
  AwsIamConfig,
  BadRequestException,
  CachingConfig,
  CognitoUserPoolConfig,
  ConcurrentModificationException,
  DeltaSyncConfig,
  DynamodbDataSourceConfig,
  ElasticsearchDataSourceConfig,
  EventBridgeDataSourceConfig,
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
  SourceApiAssociation,
  SourceApiAssociationConfig,
  SyncConfig,
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
  body = JSON.stringify(
    take(input, {
      apiId: [],
    })
  );
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
 * serializeAws_restJson1AssociateMergedGraphqlApiCommand
 */
export const se_AssociateMergedGraphqlApiCommand = async (
  input: AssociateMergedGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sourceApiIdentifier",
    () => input.sourceApiIdentifier!,
    "{sourceApiIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      mergedApiIdentifier: [],
      sourceApiAssociationConfig: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1AssociateSourceGraphqlApiCommand
 */
export const se_AssociateSourceGraphqlApiCommand = async (
  input: AssociateSourceGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      sourceApiAssociationConfig: (_) => _json(_),
      sourceApiIdentifier: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      apiCachingBehavior: [],
      atRestEncryptionEnabled: [],
      transitEncryptionEnabled: [],
      ttl: [],
      type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      expires: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      dynamodbConfig: (_) => _json(_),
      elasticsearchConfig: (_) => _json(_),
      eventBridgeConfig: (_) => _json(_),
      httpConfig: (_) => _json(_),
      lambdaConfig: (_) => _json(_),
      name: [],
      openSearchServiceConfig: (_) => _json(_),
      relationalDatabaseConfig: (_) => _json(_),
      serviceRoleArn: [],
      type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      certificateArn: [],
      description: [],
      domainName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      code: [],
      dataSourceName: [],
      description: [],
      functionVersion: [],
      maxBatchSize: [],
      name: [],
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      additionalAuthenticationProviders: (_) => _json(_),
      apiType: [],
      authenticationType: [],
      lambdaAuthorizerConfig: (_) => _json(_),
      logConfig: (_) => _json(_),
      mergedApiExecutionRoleArn: [],
      name: [],
      openIDConnectConfig: (_) => _json(_),
      ownerContact: [],
      tags: (_) => _json(_),
      userPoolConfig: (_) => _json(_),
      visibility: [],
      xrayEnabled: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      cachingConfig: (_) => _json(_),
      code: [],
      dataSourceName: [],
      fieldName: [],
      kind: [],
      maxBatchSize: [],
      pipelineConfig: (_) => _json(_),
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      definition: [],
      format: [],
    })
  );
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
 * serializeAws_restJson1DisassociateMergedGraphqlApiCommand
 */
export const se_DisassociateMergedGraphqlApiCommand = async (
  input: DisassociateMergedGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "sourceApiIdentifier",
    () => input.sourceApiIdentifier!,
    "{sourceApiIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
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
 * serializeAws_restJson1DisassociateSourceGraphqlApiCommand
 */
export const se_DisassociateSourceGraphqlApiCommand = async (
  input: DisassociateSourceGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
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
  body = JSON.stringify(
    take(input, {
      code: [],
      context: [],
      function: [],
      runtime: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      context: [],
      template: [],
    })
  );
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
 * serializeAws_restJson1GetSourceApiAssociationCommand
 */
export const se_GetSourceApiAssociationCommand = async (
  input: GetSourceApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
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
    apiType: [, input.apiType!],
    owner: [, input.owner!],
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
 * serializeAws_restJson1ListSourceApiAssociationsCommand
 */
export const se_ListSourceApiAssociationsCommand = async (
  input: ListSourceApiAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apis/{apiId}/sourceApiAssociations";
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
 * serializeAws_restJson1ListTypesByAssociationCommand
 */
export const se_ListTypesByAssociationCommand = async (
  input: ListTypesByAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
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
  body = JSON.stringify(
    take(input, {
      definition: (_) => context.base64Encoder(_),
    })
  );
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
 * serializeAws_restJson1StartSchemaMergeCommand
 */
export const se_StartSchemaMergeCommand = async (
  input: StartSchemaMergeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  let body: any;
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      apiCachingBehavior: [],
      ttl: [],
      type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      expires: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      dynamodbConfig: (_) => _json(_),
      elasticsearchConfig: (_) => _json(_),
      eventBridgeConfig: (_) => _json(_),
      httpConfig: (_) => _json(_),
      lambdaConfig: (_) => _json(_),
      openSearchServiceConfig: (_) => _json(_),
      relationalDatabaseConfig: (_) => _json(_),
      serviceRoleArn: [],
      type: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      code: [],
      dataSourceName: [],
      description: [],
      functionVersion: [],
      maxBatchSize: [],
      name: [],
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      additionalAuthenticationProviders: (_) => _json(_),
      authenticationType: [],
      lambdaAuthorizerConfig: (_) => _json(_),
      logConfig: (_) => _json(_),
      mergedApiExecutionRoleArn: [],
      name: [],
      openIDConnectConfig: (_) => _json(_),
      ownerContact: [],
      userPoolConfig: (_) => _json(_),
      xrayEnabled: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      cachingConfig: (_) => _json(_),
      code: [],
      dataSourceName: [],
      kind: [],
      maxBatchSize: [],
      pipelineConfig: (_) => _json(_),
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateSourceApiAssociationCommand
 */
export const se_UpdateSourceApiAssociationCommand = async (
  input: UpdateSourceApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "associationId",
    () => input.associationId!,
    "{associationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "mergedApiIdentifier",
    () => input.mergedApiIdentifier!,
    "{mergedApiIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      sourceApiAssociationConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      definition: [],
      format: [],
    })
  );
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
  const doc = take(data, {
    apiAssociation: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateMergedGraphqlApiCommand
 */
export const de_AssociateMergedGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMergedGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateMergedGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociation: (_) => de_SourceApiAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateMergedGraphqlApiCommandError
 */
const de_AssociateMergedGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMergedGraphqlApiCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateSourceGraphqlApiCommand
 */
export const de_AssociateSourceGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateSourceGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociation: (_) => de_SourceApiAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateSourceGraphqlApiCommandError
 */
const de_AssociateSourceGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceGraphqlApiCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiCache: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiKey: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataSource: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    domainNameConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    functionConfiguration: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    graphqlApi: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resolver: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    type: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateMergedGraphqlApiCommand
 */
export const de_DisassociateMergedGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMergedGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateMergedGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociationStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMergedGraphqlApiCommandError
 */
const de_DisassociateMergedGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMergedGraphqlApiCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateSourceGraphqlApiCommand
 */
export const de_DisassociateSourceGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateSourceGraphqlApiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociationStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateSourceGraphqlApiCommandError
 */
const de_DisassociateSourceGraphqlApiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceGraphqlApiCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    error: _json,
    evaluationResult: __expectString,
    logs: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    error: _json,
    evaluationResult: __expectString,
    logs: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiAssociation: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiCache: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataSource: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    domainNameConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    functionConfiguration: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    graphqlApi: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resolver: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    details: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSourceApiAssociationCommand
 */
export const de_GetSourceApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSourceApiAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociation: (_) => de_SourceApiAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSourceApiAssociationCommandError
 */
const de_GetSourceApiAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceApiAssociationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    type: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiKeys: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataSources: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    domainNameConfigs: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    functions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    graphqlApis: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    resolvers: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    resolvers: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSourceApiAssociationsCommand
 */
export const de_ListSourceApiAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceApiAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSourceApiAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    sourceApiAssociationSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSourceApiAssociationsCommandError
 */
const de_ListSourceApiAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceApiAssociationsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    types: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTypesByAssociationCommand
 */
export const de_ListTypesByAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesByAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTypesByAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    types: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTypesByAssociationCommandError
 */
const de_ListTypesByAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesByAssociationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartSchemaMergeCommand
 */
export const de_StartSchemaMergeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaMergeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartSchemaMergeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociationStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSchemaMergeCommandError
 */
const de_StartSchemaMergeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaMergeCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiCache: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    apiKey: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    dataSource: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    domainNameConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    functionConfiguration: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    graphqlApi: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resolver: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSourceApiAssociationCommand
 */
export const de_UpdateSourceApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSourceApiAssociationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sourceApiAssociation: (_) => de_SourceApiAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSourceApiAssociationCommandError
 */
const de_UpdateSourceApiAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceApiAssociationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    type: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
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
 * deserializeAws_restJson1ApiKeyLimitExceededExceptionRes
 */
const de_ApiKeyLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ApiKeyLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    detail: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1GraphQLSchemaExceptionRes
 */
const de_GraphQLSchemaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GraphQLSchemaException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_AdditionalAuthenticationProvider omitted.

// se_AdditionalAuthenticationProviders omitted.

// se_AppSyncRuntime omitted.

// se_AuthorizationConfig omitted.

// se_AwsIamConfig omitted.

// se_CachingConfig omitted.

// se_CachingKeys omitted.

// se_CognitoUserPoolConfig omitted.

// se_DeltaSyncConfig omitted.

// se_DynamodbDataSourceConfig omitted.

// se_ElasticsearchDataSourceConfig omitted.

// se_EventBridgeDataSourceConfig omitted.

// se_FunctionsIds omitted.

// se_HttpDataSourceConfig omitted.

// se_LambdaAuthorizerConfig omitted.

// se_LambdaConflictHandlerConfig omitted.

// se_LambdaDataSourceConfig omitted.

// se_LogConfig omitted.

// se_OpenIDConnectConfig omitted.

// se_OpenSearchServiceDataSourceConfig omitted.

// se_PipelineConfig omitted.

// se_RdsHttpEndpointConfig omitted.

// se_RelationalDatabaseDataSourceConfig omitted.

// se_SourceApiAssociationConfig omitted.

// se_SyncConfig omitted.

// se_TagMap omitted.

// se_UserPoolConfig omitted.

// de_AdditionalAuthenticationProvider omitted.

// de_AdditionalAuthenticationProviders omitted.

// de_ApiAssociation omitted.

// de_ApiCache omitted.

// de_ApiKey omitted.

// de_ApiKeys omitted.

// de_AppSyncRuntime omitted.

// de_AuthorizationConfig omitted.

// de_AwsIamConfig omitted.

// de_BadRequestDetail omitted.

// de_CachingConfig omitted.

// de_CachingKeys omitted.

// de_CodeError omitted.

// de_CodeErrorLocation omitted.

// de_CodeErrors omitted.

// de_CognitoUserPoolConfig omitted.

// de_DataSource omitted.

// de_DataSources omitted.

// de_DeltaSyncConfig omitted.

// de_DomainNameConfig omitted.

// de_DomainNameConfigs omitted.

// de_DynamodbDataSourceConfig omitted.

// de_ElasticsearchDataSourceConfig omitted.

// de_ErrorDetail omitted.

// de_EvaluateCodeErrorDetail omitted.

// de_EventBridgeDataSourceConfig omitted.

// de_FunctionConfiguration omitted.

// de_Functions omitted.

// de_FunctionsIds omitted.

// de_GraphqlApi omitted.

// de_GraphqlApis omitted.

// de_HttpDataSourceConfig omitted.

// de_LambdaAuthorizerConfig omitted.

// de_LambdaConflictHandlerConfig omitted.

// de_LambdaDataSourceConfig omitted.

// de_LogConfig omitted.

// de_Logs omitted.

// de_MapOfStringToString omitted.

// de_OpenIDConnectConfig omitted.

// de_OpenSearchServiceDataSourceConfig omitted.

// de_PipelineConfig omitted.

// de_RdsHttpEndpointConfig omitted.

// de_RelationalDatabaseDataSourceConfig omitted.

// de_Resolver omitted.

// de_Resolvers omitted.

/**
 * deserializeAws_restJson1SourceApiAssociation
 */
const de_SourceApiAssociation = (output: any, context: __SerdeContext): SourceApiAssociation => {
  return take(output, {
    associationArn: __expectString,
    associationId: __expectString,
    description: __expectString,
    lastSuccessfulMergeDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    mergedApiArn: __expectString,
    mergedApiId: __expectString,
    sourceApiArn: __expectString,
    sourceApiAssociationConfig: _json,
    sourceApiAssociationStatus: __expectString,
    sourceApiAssociationStatusDetail: __expectString,
    sourceApiId: __expectString,
  }) as any;
};

// de_SourceApiAssociationConfig omitted.

// de_SourceApiAssociationSummary omitted.

// de_SourceApiAssociationSummaryList omitted.

// de_SyncConfig omitted.

// de_TagMap omitted.

// de_Type omitted.

// de_TypeList omitted.

// de_UserPoolConfig omitted.

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
