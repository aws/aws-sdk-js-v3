// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
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
import { CreateApiCommandInput, CreateApiCommandOutput } from "../commands/CreateApiCommand";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput } from "../commands/CreateApiKeyCommand";
import {
  CreateChannelNamespaceCommandInput,
  CreateChannelNamespaceCommandOutput,
} from "../commands/CreateChannelNamespaceCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput } from "../commands/CreateDomainNameCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import { CreateGraphqlApiCommandInput, CreateGraphqlApiCommandOutput } from "../commands/CreateGraphqlApiCommand";
import { CreateResolverCommandInput, CreateResolverCommandOutput } from "../commands/CreateResolverCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "../commands/CreateTypeCommand";
import { DeleteApiCacheCommandInput, DeleteApiCacheCommandOutput } from "../commands/DeleteApiCacheCommand";
import { DeleteApiCommandInput, DeleteApiCommandOutput } from "../commands/DeleteApiCommand";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput } from "../commands/DeleteApiKeyCommand";
import {
  DeleteChannelNamespaceCommandInput,
  DeleteChannelNamespaceCommandOutput,
} from "../commands/DeleteChannelNamespaceCommand";
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
import { GetApiCommandInput, GetApiCommandOutput } from "../commands/GetApiCommand";
import {
  GetChannelNamespaceCommandInput,
  GetChannelNamespaceCommandOutput,
} from "../commands/GetChannelNamespaceCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import {
  GetDataSourceIntrospectionCommandInput,
  GetDataSourceIntrospectionCommandOutput,
} from "../commands/GetDataSourceIntrospectionCommand";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput } from "../commands/GetDomainNameCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import { GetGraphqlApiCommandInput, GetGraphqlApiCommandOutput } from "../commands/GetGraphqlApiCommand";
import {
  GetGraphqlApiEnvironmentVariablesCommandInput,
  GetGraphqlApiEnvironmentVariablesCommandOutput,
} from "../commands/GetGraphqlApiEnvironmentVariablesCommand";
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
import { ListApisCommandInput, ListApisCommandOutput } from "../commands/ListApisCommand";
import {
  ListChannelNamespacesCommandInput,
  ListChannelNamespacesCommandOutput,
} from "../commands/ListChannelNamespacesCommand";
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
  PutGraphqlApiEnvironmentVariablesCommandInput,
  PutGraphqlApiEnvironmentVariablesCommandOutput,
} from "../commands/PutGraphqlApiEnvironmentVariablesCommand";
import {
  StartDataSourceIntrospectionCommandInput,
  StartDataSourceIntrospectionCommandOutput,
} from "../commands/StartDataSourceIntrospectionCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "../commands/StartSchemaCreationCommand";
import { StartSchemaMergeCommandInput, StartSchemaMergeCommandOutput } from "../commands/StartSchemaMergeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput } from "../commands/UpdateApiCacheCommand";
import { UpdateApiCommandInput, UpdateApiCommandOutput } from "../commands/UpdateApiCommand";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput } from "../commands/UpdateApiKeyCommand";
import {
  UpdateChannelNamespaceCommandInput,
  UpdateChannelNamespaceCommandOutput,
} from "../commands/UpdateChannelNamespaceCommand";
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
  Api,
  ApiKeyLimitExceededException,
  ApiKeyValidityOutOfBoundsException,
  ApiLimitExceededException,
  AppSyncRuntime,
  AuthMode,
  AuthorizationConfig,
  AuthProvider,
  AwsIamConfig,
  BadRequestException,
  CachingConfig,
  ChannelNamespace,
  CognitoConfig,
  CognitoUserPoolConfig,
  ConcurrentModificationException,
  ConflictException,
  DataSourceIntrospectionModel,
  DataSourceIntrospectionModelField,
  DataSourceIntrospectionModelFieldType,
  DataSourceIntrospectionResult,
  DeltaSyncConfig,
  DynamodbDataSourceConfig,
  ElasticsearchDataSourceConfig,
  EnhancedMetricsConfig,
  EventBridgeDataSourceConfig,
  EventConfig,
  EventLogConfig,
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
  RdsDataApiConfig,
  RdsHttpEndpointConfig,
  RelationalDatabaseDataSourceConfig,
  ServiceQuotaExceededException,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domainnames/{domainName}/apiassociation");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateMergedGraphqlApiCommand
 */
export const se_AssociateMergedGraphqlApiCommand = async (
  input: AssociateMergedGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations");
  b.p("sourceApiIdentifier", () => input.sourceApiIdentifier!, "{sourceApiIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      mergedApiIdentifier: [],
      sourceApiAssociationConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateSourceGraphqlApiCommand
 */
export const se_AssociateSourceGraphqlApiCommand = async (
  input: AssociateSourceGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations");
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      sourceApiAssociationConfig: (_) => _json(_),
      sourceApiIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApiCommand
 */
export const se_CreateApiCommand = async (
  input: CreateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventConfig: (_) => _json(_),
      name: [],
      ownerContact: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApiCacheCommand
 */
export const se_CreateApiCacheCommand = async (
  input: CreateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/ApiCaches");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiCachingBehavior: [],
      atRestEncryptionEnabled: [],
      healthMetricsConfig: [],
      transitEncryptionEnabled: [],
      ttl: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApiKeyCommand
 */
export const se_CreateApiKeyCommand = async (
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/apikeys");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      expires: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateChannelNamespaceCommand
 */
export const se_CreateChannelNamespaceCommand = async (
  input: CreateChannelNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{apiId}/channelNamespaces");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      codeHandlers: [],
      name: [],
      publishAuthModes: (_) => _json(_),
      subscribeAuthModes: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/apis/{apiId}/datasources");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      dynamodbConfig: (_) => _json(_),
      elasticsearchConfig: (_) => _json(_),
      eventBridgeConfig: (_) => _json(_),
      httpConfig: (_) => _json(_),
      lambdaConfig: (_) => _json(_),
      metricsConfig: [],
      name: [],
      openSearchServiceConfig: (_) => _json(_),
      relationalDatabaseConfig: (_) => _json(_),
      serviceRoleArn: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainNameCommand
 */
export const se_CreateDomainNameCommand = async (
  input: CreateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domainnames");
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateArn: [],
      description: [],
      domainName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/functions");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGraphqlApiCommand
 */
export const se_CreateGraphqlApiCommand = async (
  input: CreateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis");
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAuthenticationProviders: (_) => _json(_),
      apiType: [],
      authenticationType: [],
      enhancedMetricsConfig: (_) => _json(_),
      introspectionConfig: [],
      lambdaAuthorizerConfig: (_) => _json(_),
      logConfig: (_) => _json(_),
      mergedApiExecutionRoleArn: [],
      name: [],
      openIDConnectConfig: (_) => _json(_),
      ownerContact: [],
      queryDepthLimit: [],
      resolverCountLimit: [],
      tags: (_) => _json(_),
      userPoolConfig: (_) => _json(_),
      visibility: [],
      xrayEnabled: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResolverCommand
 */
export const se_CreateResolverCommand = async (
  input: CreateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/types/{typeName}/resolvers");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cachingConfig: (_) => _json(_),
      code: [],
      dataSourceName: [],
      fieldName: [],
      kind: [],
      maxBatchSize: [],
      metricsConfig: [],
      pipelineConfig: (_) => _json(_),
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTypeCommand
 */
export const se_CreateTypeCommand = async (
  input: CreateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/types");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      definition: [],
      format: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiCommand
 */
export const se_DeleteApiCommand = async (
  input: DeleteApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiCacheCommand
 */
export const se_DeleteApiCacheCommand = async (
  input: DeleteApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/ApiCaches");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApiKeyCommand
 */
export const se_DeleteApiKeyCommand = async (
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/apikeys/{id}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteChannelNamespaceCommand
 */
export const se_DeleteChannelNamespaceCommand = async (
  input: DeleteChannelNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{apiId}/channelNamespaces/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/v1/apis/{apiId}/datasources/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainNameCommand
 */
export const se_DeleteDomainNameCommand = async (
  input: DeleteDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/functions/{functionId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("functionId", () => input.functionId!, "{functionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGraphqlApiCommand
 */
export const se_DeleteGraphqlApiCommand = async (
  input: DeleteGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResolverCommand
 */
export const se_DeleteResolverCommand = async (
  input: DeleteResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  b.p("fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTypeCommand
 */
export const se_DeleteTypeCommand = async (
  input: DeleteTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types/{typeName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateApiCommand
 */
export const se_DisassociateApiCommand = async (
  input: DisassociateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domainnames/{domainName}/apiassociation");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMergedGraphqlApiCommand
 */
export const se_DisassociateMergedGraphqlApiCommand = async (
  input: DisassociateMergedGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}");
  b.p("sourceApiIdentifier", () => input.sourceApiIdentifier!, "{sourceApiIdentifier}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateSourceGraphqlApiCommand
 */
export const se_DisassociateSourceGraphqlApiCommand = async (
  input: DisassociateSourceGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}");
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EvaluateCodeCommand
 */
export const se_EvaluateCodeCommand = async (
  input: EvaluateCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/dataplane-evaluatecode");
  let body: any;
  body = JSON.stringify(
    take(input, {
      code: [],
      context: [],
      function: [],
      runtime: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EvaluateMappingTemplateCommand
 */
export const se_EvaluateMappingTemplateCommand = async (
  input: EvaluateMappingTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/dataplane-evaluatetemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      context: [],
      template: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1FlushApiCacheCommand
 */
export const se_FlushApiCacheCommand = async (
  input: FlushApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/FlushCache");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiCommand
 */
export const se_GetApiCommand = async (input: GetApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiAssociationCommand
 */
export const se_GetApiAssociationCommand = async (
  input: GetApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domainnames/{domainName}/apiassociation");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApiCacheCommand
 */
export const se_GetApiCacheCommand = async (
  input: GetApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/ApiCaches");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetChannelNamespaceCommand
 */
export const se_GetChannelNamespaceCommand = async (
  input: GetChannelNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{apiId}/channelNamespaces/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
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
  b.bp("/v1/apis/{apiId}/datasources/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceIntrospectionCommand
 */
export const se_GetDataSourceIntrospectionCommand = async (
  input: GetDataSourceIntrospectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/datasources/introspections/{introspectionId}");
  b.p("introspectionId", () => input.introspectionId!, "{introspectionId}", false);
  const query: any = map({
    [_iMSDL]: [() => input.includeModelsSDL !== void 0, () => input[_iMSDL]!.toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainNameCommand
 */
export const se_GetDomainNameCommand = async (
  input: GetDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/functions/{functionId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("functionId", () => input.functionId!, "{functionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGraphqlApiCommand
 */
export const se_GetGraphqlApiCommand = async (
  input: GetGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGraphqlApiEnvironmentVariablesCommand
 */
export const se_GetGraphqlApiEnvironmentVariablesCommand = async (
  input: GetGraphqlApiEnvironmentVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/environmentVariables");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIntrospectionSchemaCommand
 */
export const se_GetIntrospectionSchemaCommand = async (
  input: GetIntrospectionSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/schema");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_iD]: [() => input.includeDirectives !== void 0, () => input[_iD]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResolverCommand
 */
export const se_GetResolverCommand = async (
  input: GetResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  b.p("fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSchemaCreationStatusCommand
 */
export const se_GetSchemaCreationStatusCommand = async (
  input: GetSchemaCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/schemacreation");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSourceApiAssociationCommand
 */
export const se_GetSourceApiAssociationCommand = async (
  input: GetSourceApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}");
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTypeCommand
 */
export const se_GetTypeCommand = async (
  input: GetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types/{typeName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  const query: any = map({
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApiKeysCommand
 */
export const se_ListApiKeysCommand = async (
  input: ListApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/apikeys");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApisCommand
 */
export const se_ListApisCommand = async (
  input: ListApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelNamespacesCommand
 */
export const se_ListChannelNamespacesCommand = async (
  input: ListChannelNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/apis/{apiId}/channelNamespaces");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/datasources");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainNamesCommand
 */
export const se_ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/domainnames");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/functions");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGraphqlApisCommand
 */
export const se_ListGraphqlApisCommand = async (
  input: ListGraphqlApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aT]: [, input[_aT]!],
    [_o]: [, input[_o]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResolversCommand
 */
export const se_ListResolversCommand = async (
  input: ListResolversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types/{typeName}/resolvers");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResolversByFunctionCommand
 */
export const se_ListResolversByFunctionCommand = async (
  input: ListResolversByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/functions/{functionId}/resolvers");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("functionId", () => input.functionId!, "{functionId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSourceApiAssociationsCommand
 */
export const se_ListSourceApiAssociationsCommand = async (
  input: ListSourceApiAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/sourceApiAssociations");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTypesCommand
 */
export const se_ListTypesCommand = async (
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/apis/{apiId}/types");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  const query: any = map({
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTypesByAssociationCommand
 */
export const se_ListTypesByAssociationCommand = async (
  input: ListTypesByAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types");
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  const query: any = map({
    [_f]: [, __expectNonNull(input[_f]!, `format`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutGraphqlApiEnvironmentVariablesCommand
 */
export const se_PutGraphqlApiEnvironmentVariablesCommand = async (
  input: PutGraphqlApiEnvironmentVariablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/environmentVariables");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      environmentVariables: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDataSourceIntrospectionCommand
 */
export const se_StartDataSourceIntrospectionCommand = async (
  input: StartDataSourceIntrospectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/datasources/introspections");
  let body: any;
  body = JSON.stringify(
    take(input, {
      rdsDataApiConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSchemaCreationCommand
 */
export const se_StartSchemaCreationCommand = async (
  input: StartSchemaCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/schemacreation");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      definition: (_) => context.base64Encoder(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSchemaMergeCommand
 */
export const se_StartSchemaMergeCommand = async (
  input: StartSchemaMergeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge");
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
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
  b.bp("/v1/tags/{resourceArn}");
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
  b.bp("/v1/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiCommand
 */
export const se_UpdateApiCommand = async (
  input: UpdateApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventConfig: (_) => _json(_),
      name: [],
      ownerContact: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiCacheCommand
 */
export const se_UpdateApiCacheCommand = async (
  input: UpdateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/ApiCaches/update");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiCachingBehavior: [],
      healthMetricsConfig: [],
      ttl: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApiKeyCommand
 */
export const se_UpdateApiKeyCommand = async (
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/apikeys/{id}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      expires: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateChannelNamespaceCommand
 */
export const se_UpdateChannelNamespaceCommand = async (
  input: UpdateChannelNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/apis/{apiId}/channelNamespaces/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      codeHandlers: [],
      publishAuthModes: (_) => _json(_),
      subscribeAuthModes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/v1/apis/{apiId}/datasources/{name}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      dynamodbConfig: (_) => _json(_),
      elasticsearchConfig: (_) => _json(_),
      eventBridgeConfig: (_) => _json(_),
      httpConfig: (_) => _json(_),
      lambdaConfig: (_) => _json(_),
      metricsConfig: [],
      openSearchServiceConfig: (_) => _json(_),
      relationalDatabaseConfig: (_) => _json(_),
      serviceRoleArn: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainNameCommand
 */
export const se_UpdateDomainNameCommand = async (
  input: UpdateDomainNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/domainnames/{domainName}");
  b.p("domainName", () => input.domainName!, "{domainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionCommand
 */
export const se_UpdateFunctionCommand = async (
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/functions/{functionId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("functionId", () => input.functionId!, "{functionId}", false);
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGraphqlApiCommand
 */
export const se_UpdateGraphqlApiCommand = async (
  input: UpdateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      additionalAuthenticationProviders: (_) => _json(_),
      authenticationType: [],
      enhancedMetricsConfig: (_) => _json(_),
      introspectionConfig: [],
      lambdaAuthorizerConfig: (_) => _json(_),
      logConfig: (_) => _json(_),
      mergedApiExecutionRoleArn: [],
      name: [],
      openIDConnectConfig: (_) => _json(_),
      ownerContact: [],
      queryDepthLimit: [],
      resolverCountLimit: [],
      userPoolConfig: (_) => _json(_),
      xrayEnabled: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResolverCommand
 */
export const se_UpdateResolverCommand = async (
  input: UpdateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  b.p("fieldName", () => input.fieldName!, "{fieldName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      cachingConfig: (_) => _json(_),
      code: [],
      dataSourceName: [],
      kind: [],
      maxBatchSize: [],
      metricsConfig: [],
      pipelineConfig: (_) => _json(_),
      requestMappingTemplate: [],
      responseMappingTemplate: [],
      runtime: (_) => _json(_),
      syncConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSourceApiAssociationCommand
 */
export const se_UpdateSourceApiAssociationCommand = async (
  input: UpdateSourceApiAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}");
  b.p("associationId", () => input.associationId!, "{associationId}", false);
  b.p("mergedApiIdentifier", () => input.mergedApiIdentifier!, "{mergedApiIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      sourceApiAssociationConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTypeCommand
 */
export const se_UpdateTypeCommand = async (
  input: UpdateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/apis/{apiId}/types/{typeName}");
  b.p("apiId", () => input.apiId!, "{apiId}", false);
  b.p("typeName", () => input.typeName!, "{typeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      definition: [],
      format: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateApiCommand
 */
export const de_AssociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1AssociateMergedGraphqlApiCommand
 */
export const de_AssociateMergedGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMergedGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1AssociateSourceGraphqlApiCommand
 */
export const de_AssociateSourceGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSourceGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateApiCommand
 */
export const de_CreateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    api: (_) => de_Api(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApiCacheCommand
 */
export const de_CreateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateApiKeyCommand
 */
export const de_CreateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateChannelNamespaceCommand
 */
export const de_CreateChannelNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelNamespace: (_) => de_ChannelNamespace(_, context),
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
    dataSource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainNameCommand
 */
export const de_CreateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateGraphqlApiCommand
 */
export const de_CreateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateResolverCommand
 */
export const de_CreateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateTypeCommand
 */
export const de_CreateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteApiCommand
 */
export const de_DeleteApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCommandOutput> => {
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
 * deserializeAws_restJson1DeleteApiCacheCommand
 */
export const de_DeleteApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> => {
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
 * deserializeAws_restJson1DeleteApiKeyCommand
 */
export const de_DeleteApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteChannelNamespaceCommand
 */
export const de_DeleteChannelNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelNamespaceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainNameCommand
 */
export const de_DeleteDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainNameCommandOutput> => {
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
 * deserializeAws_restJson1DeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
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
 * deserializeAws_restJson1DeleteGraphqlApiCommand
 */
export const de_DeleteGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResolverCommand
 */
export const de_DeleteResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTypeCommand
 */
export const de_DeleteTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateApiCommand
 */
export const de_DisassociateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateApiCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateMergedGraphqlApiCommand
 */
export const de_DisassociateMergedGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMergedGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DisassociateSourceGraphqlApiCommand
 */
export const de_DisassociateSourceGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateSourceGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1EvaluateCodeCommand
 */
export const de_EvaluateCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    error: _json,
    evaluationResult: __expectString,
    logs: _json,
    outErrors: __expectString,
    stash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EvaluateMappingTemplateCommand
 */
export const de_EvaluateMappingTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateMappingTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    error: _json,
    evaluationResult: __expectString,
    logs: _json,
    outErrors: __expectString,
    stash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1FlushApiCacheCommand
 */
export const de_FlushApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> => {
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
 * deserializeAws_restJson1GetApiCommand
 */
export const de_GetApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    api: (_) => de_Api(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApiAssociationCommand
 */
export const de_GetApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetApiCacheCommand
 */
export const de_GetApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetChannelNamespaceCommand
 */
export const de_GetChannelNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelNamespace: (_) => de_ChannelNamespace(_, context),
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
    dataSource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceIntrospectionCommand
 */
export const de_GetDataSourceIntrospectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceIntrospectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    introspectionId: __expectString,
    introspectionResult: (_) => de_DataSourceIntrospectionResult(_, context),
    introspectionStatus: __expectString,
    introspectionStatusDetail: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainNameCommand
 */
export const de_GetDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetGraphqlApiCommand
 */
export const de_GetGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetGraphqlApiEnvironmentVariablesCommand
 */
export const de_GetGraphqlApiEnvironmentVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiEnvironmentVariablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentVariables: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetIntrospectionSchemaCommand
 */
export const de_GetIntrospectionSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.schema = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetResolverCommand
 */
export const de_GetResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSchemaCreationStatusCommand
 */
export const de_GetSchemaCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSourceApiAssociationCommand
 */
export const de_GetSourceApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSourceApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTypeCommand
 */
export const de_GetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListApiKeysCommand
 */
export const de_ListApiKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListApisCommand
 */
export const de_ListApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apis: (_) => de_Apis(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelNamespacesCommand
 */
export const de_ListChannelNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelNamespacesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelNamespaces: (_) => de_ChannelNamespaces(_, context),
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
    dataSources: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListGraphqlApisCommand
 */
export const de_ListGraphqlApisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListResolversCommand
 */
export const de_ListResolversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListResolversByFunctionCommand
 */
export const de_ListResolversByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSourceApiAssociationsCommand
 */
export const de_ListSourceApiAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSourceApiAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTypesCommand
 */
export const de_ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTypesByAssociationCommand
 */
export const de_ListTypesByAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesByAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1PutGraphqlApiEnvironmentVariablesCommand
 */
export const de_PutGraphqlApiEnvironmentVariablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGraphqlApiEnvironmentVariablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentVariables: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartDataSourceIntrospectionCommand
 */
export const de_StartDataSourceIntrospectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceIntrospectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    introspectionId: __expectString,
    introspectionStatus: __expectString,
    introspectionStatusDetail: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartSchemaCreationCommand
 */
export const de_StartSchemaCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> => {
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
 * deserializeAws_restJson1StartSchemaMergeCommand
 */
export const de_StartSchemaMergeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaMergeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateApiCommand
 */
export const de_UpdateApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    api: (_) => de_Api(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApiCacheCommand
 */
export const de_UpdateApiCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateApiKeyCommand
 */
export const de_UpdateApiKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateChannelNamespaceCommand
 */
export const de_UpdateChannelNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelNamespaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelNamespace: (_) => de_ChannelNamespace(_, context),
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
    dataSource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainNameCommand
 */
export const de_UpdateDomainNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateFunctionCommand
 */
export const de_UpdateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateGraphqlApiCommand
 */
export const de_UpdateGraphqlApiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateResolverCommand
 */
export const de_UpdateResolverCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateSourceApiAssociationCommand
 */
export const de_UpdateSourceApiAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSourceApiAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateTypeCommand
 */
export const de_UpdateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.appsync#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ApiKeyLimitExceededException":
    case "com.amazonaws.appsync#ApiKeyLimitExceededException":
      throw await de_ApiKeyLimitExceededExceptionRes(parsedOutput, context);
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      throw await de_ApiKeyValidityOutOfBoundsExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.appsync#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ApiLimitExceededException":
    case "com.amazonaws.appsync#ApiLimitExceededException":
      throw await de_ApiLimitExceededExceptionRes(parsedOutput, context);
    case "GraphQLSchemaException":
    case "com.amazonaws.appsync#GraphQLSchemaException":
      throw await de_GraphQLSchemaExceptionRes(parsedOutput, context);
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

// se_AuthMode omitted.

// se_AuthModes omitted.

// se_AuthorizationConfig omitted.

// se_AuthProvider omitted.

// se_AuthProviders omitted.

// se_AwsIamConfig omitted.

// se_CachingConfig omitted.

// se_CachingKeys omitted.

// se_CognitoConfig omitted.

// se_CognitoUserPoolConfig omitted.

// se_DeltaSyncConfig omitted.

// se_DynamodbDataSourceConfig omitted.

// se_ElasticsearchDataSourceConfig omitted.

// se_EnhancedMetricsConfig omitted.

// se_EnvironmentVariableMap omitted.

// se_EventBridgeDataSourceConfig omitted.

// se_EventConfig omitted.

// se_EventLogConfig omitted.

// se_FunctionsIds omitted.

// se_HttpDataSourceConfig omitted.

// se_LambdaAuthorizerConfig omitted.

// se_LambdaConflictHandlerConfig omitted.

// se_LambdaDataSourceConfig omitted.

// se_LogConfig omitted.

// se_OpenIDConnectConfig omitted.

// se_OpenSearchServiceDataSourceConfig omitted.

// se_PipelineConfig omitted.

// se_RdsDataApiConfig omitted.

// se_RdsHttpEndpointConfig omitted.

// se_RelationalDatabaseDataSourceConfig omitted.

// se_SourceApiAssociationConfig omitted.

// se_SyncConfig omitted.

// se_TagMap omitted.

// se_UserPoolConfig omitted.

// de_AdditionalAuthenticationProvider omitted.

// de_AdditionalAuthenticationProviders omitted.

/**
 * deserializeAws_restJson1Api
 */
const de_Api = (output: any, context: __SerdeContext): Api => {
  return take(output, {
    apiArn: __expectString,
    apiId: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dns: _json,
    eventConfig: _json,
    name: __expectString,
    ownerContact: __expectString,
    tags: _json,
    wafWebAclArn: __expectString,
    xrayEnabled: __expectBoolean,
  }) as any;
};

// de_ApiAssociation omitted.

// de_ApiCache omitted.

// de_ApiKey omitted.

// de_ApiKeys omitted.

/**
 * deserializeAws_restJson1Apis
 */
const de_Apis = (output: any, context: __SerdeContext): Api[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Api(entry, context);
    });
  return retVal;
};

// de_AppSyncRuntime omitted.

// de_AuthMode omitted.

// de_AuthModes omitted.

// de_AuthorizationConfig omitted.

// de_AuthProvider omitted.

// de_AuthProviders omitted.

// de_AwsIamConfig omitted.

// de_BadRequestDetail omitted.

// de_CachingConfig omitted.

// de_CachingKeys omitted.

/**
 * deserializeAws_restJson1ChannelNamespace
 */
const de_ChannelNamespace = (output: any, context: __SerdeContext): ChannelNamespace => {
  return take(output, {
    apiId: __expectString,
    channelNamespaceArn: __expectString,
    codeHandlers: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    publishAuthModes: _json,
    subscribeAuthModes: _json,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ChannelNamespaces
 */
const de_ChannelNamespaces = (output: any, context: __SerdeContext): ChannelNamespace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChannelNamespace(entry, context);
    });
  return retVal;
};

// de_CodeError omitted.

// de_CodeErrorLocation omitted.

// de_CodeErrors omitted.

// de_CognitoConfig omitted.

// de_CognitoUserPoolConfig omitted.

// de_DataSource omitted.

/**
 * deserializeAws_restJson1DataSourceIntrospectionModel
 */
const de_DataSourceIntrospectionModel = (output: any, context: __SerdeContext): DataSourceIntrospectionModel => {
  return take(output, {
    fields: (_: any) => de_DataSourceIntrospectionModelFields(_, context),
    indexes: _json,
    name: __expectString,
    primaryKey: _json,
    sdl: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceIntrospectionModelField
 */
const de_DataSourceIntrospectionModelField = (
  output: any,
  context: __SerdeContext
): DataSourceIntrospectionModelField => {
  return take(output, {
    length: __expectLong,
    name: __expectString,
    type: (_: any) => de_DataSourceIntrospectionModelFieldType(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DataSourceIntrospectionModelFields
 */
const de_DataSourceIntrospectionModelFields = (
  output: any,
  context: __SerdeContext
): DataSourceIntrospectionModelField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceIntrospectionModelField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceIntrospectionModelFieldType
 */
const de_DataSourceIntrospectionModelFieldType = (
  output: any,
  context: __SerdeContext
): DataSourceIntrospectionModelFieldType => {
  return take(output, {
    kind: __expectString,
    name: __expectString,
    type: (_: any) => de_DataSourceIntrospectionModelFieldType(_, context),
    values: _json,
  }) as any;
};

// de_DataSourceIntrospectionModelFieldTypeValues omitted.

// de_DataSourceIntrospectionModelIndex omitted.

// de_DataSourceIntrospectionModelIndexes omitted.

// de_DataSourceIntrospectionModelIndexFields omitted.

/**
 * deserializeAws_restJson1DataSourceIntrospectionModels
 */
const de_DataSourceIntrospectionModels = (output: any, context: __SerdeContext): DataSourceIntrospectionModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceIntrospectionModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceIntrospectionResult
 */
const de_DataSourceIntrospectionResult = (output: any, context: __SerdeContext): DataSourceIntrospectionResult => {
  return take(output, {
    models: (_: any) => de_DataSourceIntrospectionModels(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_DataSources omitted.

// de_DeltaSyncConfig omitted.

// de_DomainNameConfig omitted.

// de_DomainNameConfigs omitted.

// de_DynamodbDataSourceConfig omitted.

// de_ElasticsearchDataSourceConfig omitted.

// de_EnhancedMetricsConfig omitted.

// de_EnvironmentVariableMap omitted.

// de_ErrorDetail omitted.

// de_EvaluateCodeErrorDetail omitted.

// de_EventBridgeDataSourceConfig omitted.

// de_EventConfig omitted.

// de_EventLogConfig omitted.

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

const _aT = "apiType";
const _f = "format";
const _iD = "includeDirectives";
const _iMSDL = "includeModelsSDL";
const _mR = "maxResults";
const _nT = "nextToken";
const _o = "owner";
const _tK = "tagKeys";
