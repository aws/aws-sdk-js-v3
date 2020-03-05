import {
  CreateApiCacheCommandInput,
  CreateApiCacheCommandOutput
} from "../commands/CreateApiCacheCommand";
import {
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput
} from "../commands/CreateApiKeyCommand";
import {
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput
} from "../commands/CreateDataSourceCommand";
import {
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput
} from "../commands/CreateFunctionCommand";
import {
  CreateGraphqlApiCommandInput,
  CreateGraphqlApiCommandOutput
} from "../commands/CreateGraphqlApiCommand";
import {
  CreateResolverCommandInput,
  CreateResolverCommandOutput
} from "../commands/CreateResolverCommand";
import {
  CreateTypeCommandInput,
  CreateTypeCommandOutput
} from "../commands/CreateTypeCommand";
import {
  DeleteApiCacheCommandInput,
  DeleteApiCacheCommandOutput
} from "../commands/DeleteApiCacheCommand";
import {
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput
} from "../commands/DeleteApiKeyCommand";
import {
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput
} from "../commands/DeleteDataSourceCommand";
import {
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput
} from "../commands/DeleteFunctionCommand";
import {
  DeleteGraphqlApiCommandInput,
  DeleteGraphqlApiCommandOutput
} from "../commands/DeleteGraphqlApiCommand";
import {
  DeleteResolverCommandInput,
  DeleteResolverCommandOutput
} from "../commands/DeleteResolverCommand";
import {
  DeleteTypeCommandInput,
  DeleteTypeCommandOutput
} from "../commands/DeleteTypeCommand";
import {
  FlushApiCacheCommandInput,
  FlushApiCacheCommandOutput
} from "../commands/FlushApiCacheCommand";
import {
  GetApiCacheCommandInput,
  GetApiCacheCommandOutput
} from "../commands/GetApiCacheCommand";
import {
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput
} from "../commands/GetDataSourceCommand";
import {
  GetFunctionCommandInput,
  GetFunctionCommandOutput
} from "../commands/GetFunctionCommand";
import {
  GetGraphqlApiCommandInput,
  GetGraphqlApiCommandOutput
} from "../commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput
} from "../commands/GetIntrospectionSchemaCommand";
import {
  GetResolverCommandInput,
  GetResolverCommandOutput
} from "../commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput
} from "../commands/GetSchemaCreationStatusCommand";
import {
  GetTypeCommandInput,
  GetTypeCommandOutput
} from "../commands/GetTypeCommand";
import {
  ListApiKeysCommandInput,
  ListApiKeysCommandOutput
} from "../commands/ListApiKeysCommand";
import {
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
} from "../commands/ListDataSourcesCommand";
import {
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
} from "../commands/ListFunctionsCommand";
import {
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput
} from "../commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput
} from "../commands/ListResolversByFunctionCommand";
import {
  ListResolversCommandInput,
  ListResolversCommandOutput
} from "../commands/ListResolversCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTypesCommandInput,
  ListTypesCommandOutput
} from "../commands/ListTypesCommand";
import {
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput
} from "../commands/StartSchemaCreationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateApiCacheCommandInput,
  UpdateApiCacheCommandOutput
} from "../commands/UpdateApiCacheCommand";
import {
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput
} from "../commands/UpdateApiKeyCommand";
import {
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "../commands/UpdateDataSourceCommand";
import {
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput
} from "../commands/UpdateFunctionCommand";
import {
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput
} from "../commands/UpdateGraphqlApiCommand";
import {
  UpdateResolverCommandInput,
  UpdateResolverCommandOutput
} from "../commands/UpdateResolverCommand";
import {
  UpdateTypeCommandInput,
  UpdateTypeCommandOutput
} from "../commands/UpdateTypeCommand";
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
  UserPoolConfig
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateApiCacheCommand(
  input: CreateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.apiCachingBehavior !== undefined) {
    bodyParams["apiCachingBehavior"] = input.apiCachingBehavior;
  }
  if (input.atRestEncryptionEnabled !== undefined) {
    bodyParams["atRestEncryptionEnabled"] = input.atRestEncryptionEnabled;
  }
  if (input.transitEncryptionEnabled !== undefined) {
    bodyParams["transitEncryptionEnabled"] = input.transitEncryptionEnabled;
  }
  if (input.ttl !== undefined) {
    bodyParams["ttl"] = input.ttl;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateApiKeyCommand(
  input: CreateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/apikeys";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.expires !== undefined) {
    bodyParams["expires"] = input.expires;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDataSourceCommand(
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/datasources";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.dynamodbConfig !== undefined) {
    bodyParams[
      "dynamodbConfig"
    ] = serializeAws_restJson1_1DynamodbDataSourceConfig(
      input.dynamodbConfig,
      context
    );
  }
  if (input.elasticsearchConfig !== undefined) {
    bodyParams[
      "elasticsearchConfig"
    ] = serializeAws_restJson1_1ElasticsearchDataSourceConfig(
      input.elasticsearchConfig,
      context
    );
  }
  if (input.httpConfig !== undefined) {
    bodyParams["httpConfig"] = serializeAws_restJson1_1HttpDataSourceConfig(
      input.httpConfig,
      context
    );
  }
  if (input.lambdaConfig !== undefined) {
    bodyParams["lambdaConfig"] = serializeAws_restJson1_1LambdaDataSourceConfig(
      input.lambdaConfig,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.relationalDatabaseConfig !== undefined) {
    bodyParams[
      "relationalDatabaseConfig"
    ] = serializeAws_restJson1_1RelationalDatabaseDataSourceConfig(
      input.relationalDatabaseConfig,
      context
    );
  }
  if (input.serviceRoleArn !== undefined) {
    bodyParams["serviceRoleArn"] = input.serviceRoleArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateFunctionCommand(
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/functions";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.dataSourceName !== undefined) {
    bodyParams["dataSourceName"] = input.dataSourceName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.functionVersion !== undefined) {
    bodyParams["functionVersion"] = input.functionVersion;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.requestMappingTemplate !== undefined) {
    bodyParams["requestMappingTemplate"] = input.requestMappingTemplate;
  }
  if (input.responseMappingTemplate !== undefined) {
    bodyParams["responseMappingTemplate"] = input.responseMappingTemplate;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateGraphqlApiCommand(
  input: CreateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis";
  let body: any;
  const bodyParams: any = {};
  if (input.additionalAuthenticationProviders !== undefined) {
    bodyParams[
      "additionalAuthenticationProviders"
    ] = serializeAws_restJson1_1AdditionalAuthenticationProviders(
      input.additionalAuthenticationProviders,
      context
    );
  }
  if (input.authenticationType !== undefined) {
    bodyParams["authenticationType"] = input.authenticationType;
  }
  if (input.logConfig !== undefined) {
    bodyParams["logConfig"] = serializeAws_restJson1_1LogConfig(
      input.logConfig,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.openIDConnectConfig !== undefined) {
    bodyParams[
      "openIDConnectConfig"
    ] = serializeAws_restJson1_1OpenIDConnectConfig(
      input.openIDConnectConfig,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.userPoolConfig !== undefined) {
    bodyParams["userPoolConfig"] = serializeAws_restJson1_1UserPoolConfig(
      input.userPoolConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateResolverCommand(
  input: CreateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/types/{typeName}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.cachingConfig !== undefined) {
    bodyParams["cachingConfig"] = serializeAws_restJson1_1CachingConfig(
      input.cachingConfig,
      context
    );
  }
  if (input.dataSourceName !== undefined) {
    bodyParams["dataSourceName"] = input.dataSourceName;
  }
  if (input.fieldName !== undefined) {
    bodyParams["fieldName"] = input.fieldName;
  }
  if (input.kind !== undefined) {
    bodyParams["kind"] = input.kind;
  }
  if (input.pipelineConfig !== undefined) {
    bodyParams["pipelineConfig"] = serializeAws_restJson1_1PipelineConfig(
      input.pipelineConfig,
      context
    );
  }
  if (input.requestMappingTemplate !== undefined) {
    bodyParams["requestMappingTemplate"] = input.requestMappingTemplate;
  }
  if (input.responseMappingTemplate !== undefined) {
    bodyParams["responseMappingTemplate"] = input.responseMappingTemplate;
  }
  if (input.syncConfig !== undefined) {
    bodyParams["syncConfig"] = serializeAws_restJson1_1SyncConfig(
      input.syncConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateTypeCommand(
  input: CreateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/types";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = input.definition;
  }
  if (input.format !== undefined) {
    bodyParams["format"] = input.format;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteApiCacheCommand(
  input: DeleteApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteApiKeyCommand(
  input: DeleteApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/apikeys/{id}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace(
      "{id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDataSourceCommand(
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteFunctionCommand(
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{functionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteGraphqlApiCommand(
  input: DeleteGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteResolverCommand(
  input: DeleteResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace(
      "{fieldName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTypeCommand(
  input: DeleteTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1FlushApiCacheCommand(
  input: FlushApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/FlushCache";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetApiCacheCommand(
  input: GetApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDataSourceCommand(
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetFunctionCommand(
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{functionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetGraphqlApiCommand(
  input: GetGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIntrospectionSchemaCommand(
  input: GetIntrospectionSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/schema";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {};
  if (input.format !== undefined) {
    query["format"] = input.format;
  }
  if (input.includeDirectives !== undefined) {
    query["includeDirectives"] = input.includeDirectives.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetResolverCommand(
  input: GetResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace(
      "{fieldName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSchemaCreationStatusCommand(
  input: GetSchemaCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/schemacreation";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetTypeCommand(
  input: GetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  const query: any = {};
  if (input.format !== undefined) {
    query["format"] = input.format;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListApiKeysCommand(
  input: ListApiKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/apikeys";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListDataSourcesCommand(
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/datasources";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListFunctionsCommand(
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/functions";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListGraphqlApisCommand(
  input: ListGraphqlApisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListResolversCommand(
  input: ListResolversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types/{typeName}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListResolversByFunctionCommand(
  input: ListResolversByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/functions/{functionId}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{functionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListTypesCommand(
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/apis/{apiId}/types";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query: any = {};
  if (input.format !== undefined) {
    query["format"] = input.format;
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1StartSchemaCreationCommand(
  input: StartSchemaCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/schemacreation";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = context.base64Encoder(input.definition);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateApiCacheCommand(
  input: UpdateApiCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/ApiCaches/update";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.apiCachingBehavior !== undefined) {
    bodyParams["apiCachingBehavior"] = input.apiCachingBehavior;
  }
  if (input.ttl !== undefined) {
    bodyParams["ttl"] = input.ttl;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateApiKeyCommand(
  input: UpdateApiKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/apikeys/{id}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue: string = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace(
      "{id}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.expires !== undefined) {
    bodyParams["expires"] = input.expires;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateDataSourceCommand(
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.dynamodbConfig !== undefined) {
    bodyParams[
      "dynamodbConfig"
    ] = serializeAws_restJson1_1DynamodbDataSourceConfig(
      input.dynamodbConfig,
      context
    );
  }
  if (input.elasticsearchConfig !== undefined) {
    bodyParams[
      "elasticsearchConfig"
    ] = serializeAws_restJson1_1ElasticsearchDataSourceConfig(
      input.elasticsearchConfig,
      context
    );
  }
  if (input.httpConfig !== undefined) {
    bodyParams["httpConfig"] = serializeAws_restJson1_1HttpDataSourceConfig(
      input.httpConfig,
      context
    );
  }
  if (input.lambdaConfig !== undefined) {
    bodyParams["lambdaConfig"] = serializeAws_restJson1_1LambdaDataSourceConfig(
      input.lambdaConfig,
      context
    );
  }
  if (input.relationalDatabaseConfig !== undefined) {
    bodyParams[
      "relationalDatabaseConfig"
    ] = serializeAws_restJson1_1RelationalDatabaseDataSourceConfig(
      input.relationalDatabaseConfig,
      context
    );
  }
  if (input.serviceRoleArn !== undefined) {
    bodyParams["serviceRoleArn"] = input.serviceRoleArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateFunctionCommand(
  input: UpdateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue: string = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace(
      "{functionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.dataSourceName !== undefined) {
    bodyParams["dataSourceName"] = input.dataSourceName;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.functionVersion !== undefined) {
    bodyParams["functionVersion"] = input.functionVersion;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.requestMappingTemplate !== undefined) {
    bodyParams["requestMappingTemplate"] = input.requestMappingTemplate;
  }
  if (input.responseMappingTemplate !== undefined) {
    bodyParams["responseMappingTemplate"] = input.responseMappingTemplate;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateGraphqlApiCommand(
  input: UpdateGraphqlApiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.additionalAuthenticationProviders !== undefined) {
    bodyParams[
      "additionalAuthenticationProviders"
    ] = serializeAws_restJson1_1AdditionalAuthenticationProviders(
      input.additionalAuthenticationProviders,
      context
    );
  }
  if (input.authenticationType !== undefined) {
    bodyParams["authenticationType"] = input.authenticationType;
  }
  if (input.logConfig !== undefined) {
    bodyParams["logConfig"] = serializeAws_restJson1_1LogConfig(
      input.logConfig,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.openIDConnectConfig !== undefined) {
    bodyParams[
      "openIDConnectConfig"
    ] = serializeAws_restJson1_1OpenIDConnectConfig(
      input.openIDConnectConfig,
      context
    );
  }
  if (input.userPoolConfig !== undefined) {
    bodyParams["userPoolConfig"] = serializeAws_restJson1_1UserPoolConfig(
      input.userPoolConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateResolverCommand(
  input: UpdateResolverCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.fieldName !== undefined) {
    const labelValue: string = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace(
      "{fieldName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.cachingConfig !== undefined) {
    bodyParams["cachingConfig"] = serializeAws_restJson1_1CachingConfig(
      input.cachingConfig,
      context
    );
  }
  if (input.dataSourceName !== undefined) {
    bodyParams["dataSourceName"] = input.dataSourceName;
  }
  if (input.kind !== undefined) {
    bodyParams["kind"] = input.kind;
  }
  if (input.pipelineConfig !== undefined) {
    bodyParams["pipelineConfig"] = serializeAws_restJson1_1PipelineConfig(
      input.pipelineConfig,
      context
    );
  }
  if (input.requestMappingTemplate !== undefined) {
    bodyParams["requestMappingTemplate"] = input.requestMappingTemplate;
  }
  if (input.responseMappingTemplate !== undefined) {
    bodyParams["responseMappingTemplate"] = input.responseMappingTemplate;
  }
  if (input.syncConfig !== undefined) {
    bodyParams["syncConfig"] = serializeAws_restJson1_1SyncConfig(
      input.syncConfig,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateTypeCommand(
  input: UpdateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue: string = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace(
      "{apiId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue: string = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{typeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = input.definition;
  }
  if (input.format !== undefined) {
    bodyParams["format"] = input.format;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateApiCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApiCacheCommandError(
      output,
      context
    );
  }
  const contents: CreateApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApiCacheResponse",
    apiCache: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1_1ApiCache(
      data.apiCache,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApiCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiCacheCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateApiKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateApiKeyCommandError(output, context);
  }
  const contents: CreateApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApiKeyResponse",
    apiKey: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1_1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateApiKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiKeyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ApiKeyLimitExceededException":
    case "com.amazonaws.deepdish.controlplane#ApiKeyLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ApiKeyLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.deepdish.controlplane#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1_1ApiKeyValidityOutOfBoundsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDataSourceCommandError(
      output,
      context
    );
  }
  const contents: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceResponse",
    dataSource: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1_1DataSource(
      data.dataSource,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateFunctionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFunctionCommandError(
      output,
      context
    );
  }
  const contents: CreateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFunctionResponse",
    functionConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.functionConfiguration !== undefined &&
    data.functionConfiguration !== null
  ) {
    contents.functionConfiguration = deserializeAws_restJson1_1FunctionConfiguration(
      data.functionConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFunctionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateGraphqlApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateGraphqlApiCommandError(
      output,
      context
    );
  }
  const contents: CreateGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGraphqlApiResponse",
    graphqlApi: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1_1GraphqlApi(
      data.graphqlApi,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateGraphqlApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGraphqlApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ApiLimitExceededException":
    case "com.amazonaws.deepdish.controlplane#ApiLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ApiLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateResolverCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateResolverCommandError(
      output,
      context
    );
  }
  const contents: CreateResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResolverResponse",
    resolver: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1_1Resolver(
      data.resolver,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateResolverCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResolverCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateTypeCommandError(output, context);
  }
  const contents: CreateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTypeResponse",
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1_1Type(data.type, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteApiCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApiCacheCommandError(
      output,
      context
    );
  }
  const contents: DeleteApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApiCacheResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApiCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiCacheCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteApiKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteApiKeyCommandError(output, context);
  }
  const contents: DeleteApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApiKeyResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteApiKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiKeyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDataSourceCommandError(
      output,
      context
    );
  }
  const contents: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDataSourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteFunctionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFunctionCommandError(
      output,
      context
    );
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFunctionResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFunctionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteGraphqlApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteGraphqlApiCommandError(
      output,
      context
    );
  }
  const contents: DeleteGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGraphqlApiResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteGraphqlApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGraphqlApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteResolverCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteResolverCommandError(
      output,
      context
    );
  }
  const contents: DeleteResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResolverResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteResolverCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResolverCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteTypeCommandError(output, context);
  }
  const contents: DeleteTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTypeResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1FlushApiCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1FlushApiCacheCommandError(output, context);
  }
  const contents: FlushApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FlushApiCacheResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1FlushApiCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FlushApiCacheCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetApiCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetApiCacheCommandError(output, context);
  }
  const contents: GetApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApiCacheResponse",
    apiCache: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1_1ApiCache(
      data.apiCache,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetApiCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApiCacheCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDataSourceCommandError(output, context);
  }
  const contents: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataSourceResponse",
    dataSource: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1_1DataSource(
      data.dataSource,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetFunctionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFunctionCommandError(output, context);
  }
  const contents: GetFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFunctionResponse",
    functionConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.functionConfiguration !== undefined &&
    data.functionConfiguration !== null
  ) {
    contents.functionConfiguration = deserializeAws_restJson1_1FunctionConfiguration(
      data.functionConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetFunctionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetGraphqlApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetGraphqlApiCommandError(output, context);
  }
  const contents: GetGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGraphqlApiResponse",
    graphqlApi: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1_1GraphqlApi(
      data.graphqlApi,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetGraphqlApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGraphqlApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetIntrospectionSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntrospectionSchemaCommandError(
      output,
      context
    );
  }
  const contents: GetIntrospectionSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntrospectionSchemaResponse",
    schema: undefined
  };
  const data: any = await collectBody(output.body, context);
  contents.schema = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntrospectionSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntrospectionSchemaCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "GraphQLSchemaException":
    case "com.amazonaws.deepdish.controlplane#GraphQLSchemaException":
      response = {
        ...(await deserializeAws_restJson1_1GraphQLSchemaExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetResolverCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResolverCommandError(output, context);
  }
  const contents: GetResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResolverResponse",
    resolver: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1_1Resolver(
      data.resolver,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResolverCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResolverCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSchemaCreationStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSchemaCreationStatusCommandError(
      output,
      context
    );
  }
  const contents: GetSchemaCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSchemaCreationStatusResponse",
    details: undefined,
    status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.details !== undefined && data.details !== null) {
    contents.details = data.details;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSchemaCreationStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCreationStatusCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTypeCommandError(output, context);
  }
  const contents: GetTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTypeResponse",
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1_1Type(data.type, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListApiKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListApiKeysCommandError(output, context);
  }
  const contents: ListApiKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApiKeysResponse",
    apiKeys: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKeys !== undefined && data.apiKeys !== null) {
    contents.apiKeys = deserializeAws_restJson1_1ApiKeys(data.apiKeys, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListApiKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiKeysCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListDataSourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDataSourcesCommandError(
      output,
      context
    );
  }
  const contents: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataSourcesResponse",
    dataSources: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1_1DataSources(
      data.dataSources,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDataSourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListFunctionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFunctionsResponse",
    functions: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.functions !== undefined && data.functions !== null) {
    contents.functions = deserializeAws_restJson1_1Functions(
      data.functions,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFunctionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListGraphqlApisCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListGraphqlApisCommandError(
      output,
      context
    );
  }
  const contents: ListGraphqlApisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGraphqlApisResponse",
    graphqlApis: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApis !== undefined && data.graphqlApis !== null) {
    contents.graphqlApis = deserializeAws_restJson1_1GraphqlApis(
      data.graphqlApis,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListGraphqlApisCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGraphqlApisCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListResolversCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListResolversCommandError(output, context);
  }
  const contents: ListResolversCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolversResponse",
    nextToken: undefined,
    resolvers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1_1Resolvers(
      data.resolvers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListResolversCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListResolversByFunctionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListResolversByFunctionCommandError(
      output,
      context
    );
  }
  const contents: ListResolversByFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResolversByFunctionResponse",
    nextToken: undefined,
    resolvers: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1_1Resolvers(
      data.resolvers,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListResolversByFunctionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResolversByFunctionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTypesCommandError(output, context);
  }
  const contents: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTypesResponse",
    nextToken: undefined,
    types: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.types !== undefined && data.types !== null) {
    contents.types = deserializeAws_restJson1_1TypeList(data.types, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1StartSchemaCreationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartSchemaCreationCommandError(
      output,
      context
    );
  }
  const contents: StartSchemaCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSchemaCreationResponse",
    status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartSchemaCreationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaCreationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateApiCacheCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApiCacheCommandError(
      output,
      context
    );
  }
  const contents: UpdateApiCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApiCacheResponse",
    apiCache: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1_1ApiCache(
      data.apiCache,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApiCacheCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiCacheCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateApiKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateApiKeyCommandError(output, context);
  }
  const contents: UpdateApiKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApiKeyResponse",
    apiKey: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1_1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateApiKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiKeyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.deepdish.controlplane#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1_1ApiKeyValidityOutOfBoundsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.deepdish.controlplane#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDataSourceCommandError(
      output,
      context
    );
  }
  const contents: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDataSourceResponse",
    dataSource: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1_1DataSource(
      data.dataSource,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateFunctionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFunctionCommandError(
      output,
      context
    );
  }
  const contents: UpdateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFunctionResponse",
    functionConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.functionConfiguration !== undefined &&
    data.functionConfiguration !== null
  ) {
    contents.functionConfiguration = deserializeAws_restJson1_1FunctionConfiguration(
      data.functionConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFunctionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateGraphqlApiCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateGraphqlApiCommandError(
      output,
      context
    );
  }
  const contents: UpdateGraphqlApiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGraphqlApiResponse",
    graphqlApi: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1_1GraphqlApi(
      data.graphqlApi,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateGraphqlApiCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGraphqlApiCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.deepdish.controlplane#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateResolverCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateResolverCommandError(
      output,
      context
    );
  }
  const contents: UpdateResolverCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResolverResponse",
    resolver: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1_1Resolver(
      data.resolver,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateResolverCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResolverCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateTypeCommandError(output, context);
  }
  const contents: UpdateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTypeResponse",
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1_1Type(data.type, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.deepdish.controlplane#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.deepdish.controlplane#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.deepdish.controlplane#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.deepdish.controlplane#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.deepdish.controlplane#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ApiKeyLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApiKeyLimitExceededException> => {
  const contents: ApiKeyLimitExceededException = {
    name: "ApiKeyLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ApiKeyValidityOutOfBoundsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApiKeyValidityOutOfBoundsException> => {
  const contents: ApiKeyValidityOutOfBoundsException = {
    name: "ApiKeyValidityOutOfBoundsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ApiLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ApiLimitExceededException> => {
  const contents: ApiLimitExceededException = {
    name: "ApiLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1GraphQLSchemaExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GraphQLSchemaException> => {
  const contents: GraphQLSchemaException = {
    name: "GraphQLSchemaException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AdditionalAuthenticationProvider = (
  input: AdditionalAuthenticationProvider,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.authenticationType !== undefined) {
    bodyParams["authenticationType"] = input.authenticationType;
  }
  if (input.openIDConnectConfig !== undefined) {
    bodyParams[
      "openIDConnectConfig"
    ] = serializeAws_restJson1_1OpenIDConnectConfig(
      input.openIDConnectConfig,
      context
    );
  }
  if (input.userPoolConfig !== undefined) {
    bodyParams[
      "userPoolConfig"
    ] = serializeAws_restJson1_1CognitoUserPoolConfig(
      input.userPoolConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AdditionalAuthenticationProviders = (
  input: Array<AdditionalAuthenticationProvider>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1AdditionalAuthenticationProvider(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1AuthorizationConfig = (
  input: AuthorizationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.authorizationType !== undefined) {
    bodyParams["authorizationType"] = input.authorizationType;
  }
  if (input.awsIamConfig !== undefined) {
    bodyParams["awsIamConfig"] = serializeAws_restJson1_1AwsIamConfig(
      input.awsIamConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AwsIamConfig = (
  input: AwsIamConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.signingRegion !== undefined) {
    bodyParams["signingRegion"] = input.signingRegion;
  }
  if (input.signingServiceName !== undefined) {
    bodyParams["signingServiceName"] = input.signingServiceName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CachingConfig = (
  input: CachingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cachingKeys !== undefined) {
    bodyParams["cachingKeys"] = serializeAws_restJson1_1CachingKeys(
      input.cachingKeys,
      context
    );
  }
  if (input.ttl !== undefined) {
    bodyParams["ttl"] = input.ttl;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CachingKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1CognitoUserPoolConfig = (
  input: CognitoUserPoolConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appIdClientRegex !== undefined) {
    bodyParams["appIdClientRegex"] = input.appIdClientRegex;
  }
  if (input.awsRegion !== undefined) {
    bodyParams["awsRegion"] = input.awsRegion;
  }
  if (input.userPoolId !== undefined) {
    bodyParams["userPoolId"] = input.userPoolId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeltaSyncConfig = (
  input: DeltaSyncConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.baseTableTTL !== undefined) {
    bodyParams["baseTableTTL"] = input.baseTableTTL;
  }
  if (input.deltaSyncTableName !== undefined) {
    bodyParams["deltaSyncTableName"] = input.deltaSyncTableName;
  }
  if (input.deltaSyncTableTTL !== undefined) {
    bodyParams["deltaSyncTableTTL"] = input.deltaSyncTableTTL;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DynamodbDataSourceConfig = (
  input: DynamodbDataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.awsRegion !== undefined) {
    bodyParams["awsRegion"] = input.awsRegion;
  }
  if (input.deltaSyncConfig !== undefined) {
    bodyParams["deltaSyncConfig"] = serializeAws_restJson1_1DeltaSyncConfig(
      input.deltaSyncConfig,
      context
    );
  }
  if (input.tableName !== undefined) {
    bodyParams["tableName"] = input.tableName;
  }
  if (input.useCallerCredentials !== undefined) {
    bodyParams["useCallerCredentials"] = input.useCallerCredentials;
  }
  if (input.versioned !== undefined) {
    bodyParams["versioned"] = input.versioned;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ElasticsearchDataSourceConfig = (
  input: ElasticsearchDataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.awsRegion !== undefined) {
    bodyParams["awsRegion"] = input.awsRegion;
  }
  if (input.endpoint !== undefined) {
    bodyParams["endpoint"] = input.endpoint;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FunctionsIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1HttpDataSourceConfig = (
  input: HttpDataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.authorizationConfig !== undefined) {
    bodyParams[
      "authorizationConfig"
    ] = serializeAws_restJson1_1AuthorizationConfig(
      input.authorizationConfig,
      context
    );
  }
  if (input.endpoint !== undefined) {
    bodyParams["endpoint"] = input.endpoint;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LambdaConflictHandlerConfig = (
  input: LambdaConflictHandlerConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.lambdaConflictHandlerArn !== undefined) {
    bodyParams["lambdaConflictHandlerArn"] = input.lambdaConflictHandlerArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LambdaDataSourceConfig = (
  input: LambdaDataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.lambdaFunctionArn !== undefined) {
    bodyParams["lambdaFunctionArn"] = input.lambdaFunctionArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LogConfig = (
  input: LogConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cloudWatchLogsRoleArn !== undefined) {
    bodyParams["cloudWatchLogsRoleArn"] = input.cloudWatchLogsRoleArn;
  }
  if (input.excludeVerboseContent !== undefined) {
    bodyParams["excludeVerboseContent"] = input.excludeVerboseContent;
  }
  if (input.fieldLogLevel !== undefined) {
    bodyParams["fieldLogLevel"] = input.fieldLogLevel;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OpenIDConnectConfig = (
  input: OpenIDConnectConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.authTTL !== undefined) {
    bodyParams["authTTL"] = input.authTTL;
  }
  if (input.clientId !== undefined) {
    bodyParams["clientId"] = input.clientId;
  }
  if (input.iatTTL !== undefined) {
    bodyParams["iatTTL"] = input.iatTTL;
  }
  if (input.issuer !== undefined) {
    bodyParams["issuer"] = input.issuer;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PipelineConfig = (
  input: PipelineConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.functions !== undefined) {
    bodyParams["functions"] = serializeAws_restJson1_1FunctionsIds(
      input.functions,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1RdsHttpEndpointConfig = (
  input: RdsHttpEndpointConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.awsRegion !== undefined) {
    bodyParams["awsRegion"] = input.awsRegion;
  }
  if (input.awsSecretStoreArn !== undefined) {
    bodyParams["awsSecretStoreArn"] = input.awsSecretStoreArn;
  }
  if (input.databaseName !== undefined) {
    bodyParams["databaseName"] = input.databaseName;
  }
  if (input.dbClusterIdentifier !== undefined) {
    bodyParams["dbClusterIdentifier"] = input.dbClusterIdentifier;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RelationalDatabaseDataSourceConfig = (
  input: RelationalDatabaseDataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.rdsHttpEndpointConfig !== undefined) {
    bodyParams[
      "rdsHttpEndpointConfig"
    ] = serializeAws_restJson1_1RdsHttpEndpointConfig(
      input.rdsHttpEndpointConfig,
      context
    );
  }
  if (input.relationalDatabaseSourceType !== undefined) {
    bodyParams["relationalDatabaseSourceType"] =
      input.relationalDatabaseSourceType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SyncConfig = (
  input: SyncConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.conflictDetection !== undefined) {
    bodyParams["conflictDetection"] = input.conflictDetection;
  }
  if (input.conflictHandler !== undefined) {
    bodyParams["conflictHandler"] = input.conflictHandler;
  }
  if (input.lambdaConflictHandlerConfig !== undefined) {
    bodyParams[
      "lambdaConflictHandlerConfig"
    ] = serializeAws_restJson1_1LambdaConflictHandlerConfig(
      input.lambdaConflictHandlerConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1UserPoolConfig = (
  input: UserPoolConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appIdClientRegex !== undefined) {
    bodyParams["appIdClientRegex"] = input.appIdClientRegex;
  }
  if (input.awsRegion !== undefined) {
    bodyParams["awsRegion"] = input.awsRegion;
  }
  if (input.defaultAction !== undefined) {
    bodyParams["defaultAction"] = input.defaultAction;
  }
  if (input.userPoolId !== undefined) {
    bodyParams["userPoolId"] = input.userPoolId;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AdditionalAuthenticationProvider = (
  output: any,
  context: __SerdeContext
): AdditionalAuthenticationProvider => {
  let contents: any = {
    __type: "AdditionalAuthenticationProvider",
    authenticationType: undefined,
    openIDConnectConfig: undefined,
    userPoolConfig: undefined
  };
  if (
    output.authenticationType !== undefined &&
    output.authenticationType !== null
  ) {
    contents.authenticationType = output.authenticationType;
  }
  if (
    output.openIDConnectConfig !== undefined &&
    output.openIDConnectConfig !== null
  ) {
    contents.openIDConnectConfig = deserializeAws_restJson1_1OpenIDConnectConfig(
      output.openIDConnectConfig,
      context
    );
  }
  if (output.userPoolConfig !== undefined && output.userPoolConfig !== null) {
    contents.userPoolConfig = deserializeAws_restJson1_1CognitoUserPoolConfig(
      output.userPoolConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AdditionalAuthenticationProviders = (
  output: any,
  context: __SerdeContext
): Array<AdditionalAuthenticationProvider> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AdditionalAuthenticationProvider(entry, context)
  );
};

const deserializeAws_restJson1_1ApiCache = (
  output: any,
  context: __SerdeContext
): ApiCache => {
  let contents: any = {
    __type: "ApiCache",
    apiCachingBehavior: undefined,
    atRestEncryptionEnabled: undefined,
    status: undefined,
    transitEncryptionEnabled: undefined,
    ttl: undefined,
    type: undefined
  };
  if (
    output.apiCachingBehavior !== undefined &&
    output.apiCachingBehavior !== null
  ) {
    contents.apiCachingBehavior = output.apiCachingBehavior;
  }
  if (
    output.atRestEncryptionEnabled !== undefined &&
    output.atRestEncryptionEnabled !== null
  ) {
    contents.atRestEncryptionEnabled = output.atRestEncryptionEnabled;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (
    output.transitEncryptionEnabled !== undefined &&
    output.transitEncryptionEnabled !== null
  ) {
    contents.transitEncryptionEnabled = output.transitEncryptionEnabled;
  }
  if (output.ttl !== undefined && output.ttl !== null) {
    contents.ttl = output.ttl;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ApiKey = (
  output: any,
  context: __SerdeContext
): ApiKey => {
  let contents: any = {
    __type: "ApiKey",
    description: undefined,
    expires: undefined,
    id: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.expires !== undefined && output.expires !== null) {
    contents.expires = output.expires;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_restJson1_1ApiKeys = (
  output: any,
  context: __SerdeContext
): Array<ApiKey> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ApiKey(entry, context)
  );
};

const deserializeAws_restJson1_1AuthorizationConfig = (
  output: any,
  context: __SerdeContext
): AuthorizationConfig => {
  let contents: any = {
    __type: "AuthorizationConfig",
    authorizationType: undefined,
    awsIamConfig: undefined
  };
  if (
    output.authorizationType !== undefined &&
    output.authorizationType !== null
  ) {
    contents.authorizationType = output.authorizationType;
  }
  if (output.awsIamConfig !== undefined && output.awsIamConfig !== null) {
    contents.awsIamConfig = deserializeAws_restJson1_1AwsIamConfig(
      output.awsIamConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AwsIamConfig = (
  output: any,
  context: __SerdeContext
): AwsIamConfig => {
  let contents: any = {
    __type: "AwsIamConfig",
    signingRegion: undefined,
    signingServiceName: undefined
  };
  if (output.signingRegion !== undefined && output.signingRegion !== null) {
    contents.signingRegion = output.signingRegion;
  }
  if (
    output.signingServiceName !== undefined &&
    output.signingServiceName !== null
  ) {
    contents.signingServiceName = output.signingServiceName;
  }
  return contents;
};

const deserializeAws_restJson1_1CachingConfig = (
  output: any,
  context: __SerdeContext
): CachingConfig => {
  let contents: any = {
    __type: "CachingConfig",
    cachingKeys: undefined,
    ttl: undefined
  };
  if (output.cachingKeys !== undefined && output.cachingKeys !== null) {
    contents.cachingKeys = deserializeAws_restJson1_1CachingKeys(
      output.cachingKeys,
      context
    );
  }
  if (output.ttl !== undefined && output.ttl !== null) {
    contents.ttl = output.ttl;
  }
  return contents;
};

const deserializeAws_restJson1_1CachingKeys = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1CognitoUserPoolConfig = (
  output: any,
  context: __SerdeContext
): CognitoUserPoolConfig => {
  let contents: any = {
    __type: "CognitoUserPoolConfig",
    appIdClientRegex: undefined,
    awsRegion: undefined,
    userPoolId: undefined
  };
  if (
    output.appIdClientRegex !== undefined &&
    output.appIdClientRegex !== null
  ) {
    contents.appIdClientRegex = output.appIdClientRegex;
  }
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (output.userPoolId !== undefined && output.userPoolId !== null) {
    contents.userPoolId = output.userPoolId;
  }
  return contents;
};

const deserializeAws_restJson1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  let contents: any = {
    __type: "DataSource",
    dataSourceArn: undefined,
    description: undefined,
    dynamodbConfig: undefined,
    elasticsearchConfig: undefined,
    httpConfig: undefined,
    lambdaConfig: undefined,
    name: undefined,
    relationalDatabaseConfig: undefined,
    serviceRoleArn: undefined,
    type: undefined
  };
  if (output.dataSourceArn !== undefined && output.dataSourceArn !== null) {
    contents.dataSourceArn = output.dataSourceArn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.dynamodbConfig !== undefined && output.dynamodbConfig !== null) {
    contents.dynamodbConfig = deserializeAws_restJson1_1DynamodbDataSourceConfig(
      output.dynamodbConfig,
      context
    );
  }
  if (
    output.elasticsearchConfig !== undefined &&
    output.elasticsearchConfig !== null
  ) {
    contents.elasticsearchConfig = deserializeAws_restJson1_1ElasticsearchDataSourceConfig(
      output.elasticsearchConfig,
      context
    );
  }
  if (output.httpConfig !== undefined && output.httpConfig !== null) {
    contents.httpConfig = deserializeAws_restJson1_1HttpDataSourceConfig(
      output.httpConfig,
      context
    );
  }
  if (output.lambdaConfig !== undefined && output.lambdaConfig !== null) {
    contents.lambdaConfig = deserializeAws_restJson1_1LambdaDataSourceConfig(
      output.lambdaConfig,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.relationalDatabaseConfig !== undefined &&
    output.relationalDatabaseConfig !== null
  ) {
    contents.relationalDatabaseConfig = deserializeAws_restJson1_1RelationalDatabaseDataSourceConfig(
      output.relationalDatabaseConfig,
      context
    );
  }
  if (output.serviceRoleArn !== undefined && output.serviceRoleArn !== null) {
    contents.serviceRoleArn = output.serviceRoleArn;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1DataSources = (
  output: any,
  context: __SerdeContext
): Array<DataSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataSource(entry, context)
  );
};

const deserializeAws_restJson1_1DeltaSyncConfig = (
  output: any,
  context: __SerdeContext
): DeltaSyncConfig => {
  let contents: any = {
    __type: "DeltaSyncConfig",
    baseTableTTL: undefined,
    deltaSyncTableName: undefined,
    deltaSyncTableTTL: undefined
  };
  if (output.baseTableTTL !== undefined && output.baseTableTTL !== null) {
    contents.baseTableTTL = output.baseTableTTL;
  }
  if (
    output.deltaSyncTableName !== undefined &&
    output.deltaSyncTableName !== null
  ) {
    contents.deltaSyncTableName = output.deltaSyncTableName;
  }
  if (
    output.deltaSyncTableTTL !== undefined &&
    output.deltaSyncTableTTL !== null
  ) {
    contents.deltaSyncTableTTL = output.deltaSyncTableTTL;
  }
  return contents;
};

const deserializeAws_restJson1_1DynamodbDataSourceConfig = (
  output: any,
  context: __SerdeContext
): DynamodbDataSourceConfig => {
  let contents: any = {
    __type: "DynamodbDataSourceConfig",
    awsRegion: undefined,
    deltaSyncConfig: undefined,
    tableName: undefined,
    useCallerCredentials: undefined,
    versioned: undefined
  };
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (output.deltaSyncConfig !== undefined && output.deltaSyncConfig !== null) {
    contents.deltaSyncConfig = deserializeAws_restJson1_1DeltaSyncConfig(
      output.deltaSyncConfig,
      context
    );
  }
  if (output.tableName !== undefined && output.tableName !== null) {
    contents.tableName = output.tableName;
  }
  if (
    output.useCallerCredentials !== undefined &&
    output.useCallerCredentials !== null
  ) {
    contents.useCallerCredentials = output.useCallerCredentials;
  }
  if (output.versioned !== undefined && output.versioned !== null) {
    contents.versioned = output.versioned;
  }
  return contents;
};

const deserializeAws_restJson1_1ElasticsearchDataSourceConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDataSourceConfig => {
  let contents: any = {
    __type: "ElasticsearchDataSourceConfig",
    awsRegion: undefined,
    endpoint: undefined
  };
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (output.endpoint !== undefined && output.endpoint !== null) {
    contents.endpoint = output.endpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1FunctionConfiguration = (
  output: any,
  context: __SerdeContext
): FunctionConfiguration => {
  let contents: any = {
    __type: "FunctionConfiguration",
    dataSourceName: undefined,
    description: undefined,
    functionArn: undefined,
    functionId: undefined,
    functionVersion: undefined,
    name: undefined,
    requestMappingTemplate: undefined,
    responseMappingTemplate: undefined
  };
  if (output.dataSourceName !== undefined && output.dataSourceName !== null) {
    contents.dataSourceName = output.dataSourceName;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.functionArn !== undefined && output.functionArn !== null) {
    contents.functionArn = output.functionArn;
  }
  if (output.functionId !== undefined && output.functionId !== null) {
    contents.functionId = output.functionId;
  }
  if (output.functionVersion !== undefined && output.functionVersion !== null) {
    contents.functionVersion = output.functionVersion;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.requestMappingTemplate !== undefined &&
    output.requestMappingTemplate !== null
  ) {
    contents.requestMappingTemplate = output.requestMappingTemplate;
  }
  if (
    output.responseMappingTemplate !== undefined &&
    output.responseMappingTemplate !== null
  ) {
    contents.responseMappingTemplate = output.responseMappingTemplate;
  }
  return contents;
};

const deserializeAws_restJson1_1Functions = (
  output: any,
  context: __SerdeContext
): Array<FunctionConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FunctionConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1FunctionsIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1GraphqlApi = (
  output: any,
  context: __SerdeContext
): GraphqlApi => {
  let contents: any = {
    __type: "GraphqlApi",
    additionalAuthenticationProviders: undefined,
    apiId: undefined,
    arn: undefined,
    authenticationType: undefined,
    logConfig: undefined,
    name: undefined,
    openIDConnectConfig: undefined,
    tags: undefined,
    uris: undefined,
    userPoolConfig: undefined
  };
  if (
    output.additionalAuthenticationProviders !== undefined &&
    output.additionalAuthenticationProviders !== null
  ) {
    contents.additionalAuthenticationProviders = deserializeAws_restJson1_1AdditionalAuthenticationProviders(
      output.additionalAuthenticationProviders,
      context
    );
  }
  if (output.apiId !== undefined && output.apiId !== null) {
    contents.apiId = output.apiId;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.authenticationType !== undefined &&
    output.authenticationType !== null
  ) {
    contents.authenticationType = output.authenticationType;
  }
  if (output.logConfig !== undefined && output.logConfig !== null) {
    contents.logConfig = deserializeAws_restJson1_1LogConfig(
      output.logConfig,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.openIDConnectConfig !== undefined &&
    output.openIDConnectConfig !== null
  ) {
    contents.openIDConnectConfig = deserializeAws_restJson1_1OpenIDConnectConfig(
      output.openIDConnectConfig,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.uris !== undefined && output.uris !== null) {
    contents.uris = deserializeAws_restJson1_1MapOfStringToString(
      output.uris,
      context
    );
  }
  if (output.userPoolConfig !== undefined && output.userPoolConfig !== null) {
    contents.userPoolConfig = deserializeAws_restJson1_1UserPoolConfig(
      output.userPoolConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1GraphqlApis = (
  output: any,
  context: __SerdeContext
): Array<GraphqlApi> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GraphqlApi(entry, context)
  );
};

const deserializeAws_restJson1_1HttpDataSourceConfig = (
  output: any,
  context: __SerdeContext
): HttpDataSourceConfig => {
  let contents: any = {
    __type: "HttpDataSourceConfig",
    authorizationConfig: undefined,
    endpoint: undefined
  };
  if (
    output.authorizationConfig !== undefined &&
    output.authorizationConfig !== null
  ) {
    contents.authorizationConfig = deserializeAws_restJson1_1AuthorizationConfig(
      output.authorizationConfig,
      context
    );
  }
  if (output.endpoint !== undefined && output.endpoint !== null) {
    contents.endpoint = output.endpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaConflictHandlerConfig = (
  output: any,
  context: __SerdeContext
): LambdaConflictHandlerConfig => {
  let contents: any = {
    __type: "LambdaConflictHandlerConfig",
    lambdaConflictHandlerArn: undefined
  };
  if (
    output.lambdaConflictHandlerArn !== undefined &&
    output.lambdaConflictHandlerArn !== null
  ) {
    contents.lambdaConflictHandlerArn = output.lambdaConflictHandlerArn;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaDataSourceConfig = (
  output: any,
  context: __SerdeContext
): LambdaDataSourceConfig => {
  let contents: any = {
    __type: "LambdaDataSourceConfig",
    lambdaFunctionArn: undefined
  };
  if (
    output.lambdaFunctionArn !== undefined &&
    output.lambdaFunctionArn !== null
  ) {
    contents.lambdaFunctionArn = output.lambdaFunctionArn;
  }
  return contents;
};

const deserializeAws_restJson1_1LogConfig = (
  output: any,
  context: __SerdeContext
): LogConfig => {
  let contents: any = {
    __type: "LogConfig",
    cloudWatchLogsRoleArn: undefined,
    excludeVerboseContent: undefined,
    fieldLogLevel: undefined
  };
  if (
    output.cloudWatchLogsRoleArn !== undefined &&
    output.cloudWatchLogsRoleArn !== null
  ) {
    contents.cloudWatchLogsRoleArn = output.cloudWatchLogsRoleArn;
  }
  if (
    output.excludeVerboseContent !== undefined &&
    output.excludeVerboseContent !== null
  ) {
    contents.excludeVerboseContent = output.excludeVerboseContent;
  }
  if (output.fieldLogLevel !== undefined && output.fieldLogLevel !== null) {
    contents.fieldLogLevel = output.fieldLogLevel;
  }
  return contents;
};

const deserializeAws_restJson1_1MapOfStringToString = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1OpenIDConnectConfig = (
  output: any,
  context: __SerdeContext
): OpenIDConnectConfig => {
  let contents: any = {
    __type: "OpenIDConnectConfig",
    authTTL: undefined,
    clientId: undefined,
    iatTTL: undefined,
    issuer: undefined
  };
  if (output.authTTL !== undefined && output.authTTL !== null) {
    contents.authTTL = output.authTTL;
  }
  if (output.clientId !== undefined && output.clientId !== null) {
    contents.clientId = output.clientId;
  }
  if (output.iatTTL !== undefined && output.iatTTL !== null) {
    contents.iatTTL = output.iatTTL;
  }
  if (output.issuer !== undefined && output.issuer !== null) {
    contents.issuer = output.issuer;
  }
  return contents;
};

const deserializeAws_restJson1_1PipelineConfig = (
  output: any,
  context: __SerdeContext
): PipelineConfig => {
  let contents: any = {
    __type: "PipelineConfig",
    functions: undefined
  };
  if (output.functions !== undefined && output.functions !== null) {
    contents.functions = deserializeAws_restJson1_1FunctionsIds(
      output.functions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RdsHttpEndpointConfig = (
  output: any,
  context: __SerdeContext
): RdsHttpEndpointConfig => {
  let contents: any = {
    __type: "RdsHttpEndpointConfig",
    awsRegion: undefined,
    awsSecretStoreArn: undefined,
    databaseName: undefined,
    dbClusterIdentifier: undefined,
    schema: undefined
  };
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (
    output.awsSecretStoreArn !== undefined &&
    output.awsSecretStoreArn !== null
  ) {
    contents.awsSecretStoreArn = output.awsSecretStoreArn;
  }
  if (output.databaseName !== undefined && output.databaseName !== null) {
    contents.databaseName = output.databaseName;
  }
  if (
    output.dbClusterIdentifier !== undefined &&
    output.dbClusterIdentifier !== null
  ) {
    contents.dbClusterIdentifier = output.dbClusterIdentifier;
  }
  if (output.schema !== undefined && output.schema !== null) {
    contents.schema = output.schema;
  }
  return contents;
};

const deserializeAws_restJson1_1RelationalDatabaseDataSourceConfig = (
  output: any,
  context: __SerdeContext
): RelationalDatabaseDataSourceConfig => {
  let contents: any = {
    __type: "RelationalDatabaseDataSourceConfig",
    rdsHttpEndpointConfig: undefined,
    relationalDatabaseSourceType: undefined
  };
  if (
    output.rdsHttpEndpointConfig !== undefined &&
    output.rdsHttpEndpointConfig !== null
  ) {
    contents.rdsHttpEndpointConfig = deserializeAws_restJson1_1RdsHttpEndpointConfig(
      output.rdsHttpEndpointConfig,
      context
    );
  }
  if (
    output.relationalDatabaseSourceType !== undefined &&
    output.relationalDatabaseSourceType !== null
  ) {
    contents.relationalDatabaseSourceType = output.relationalDatabaseSourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1Resolver = (
  output: any,
  context: __SerdeContext
): Resolver => {
  let contents: any = {
    __type: "Resolver",
    cachingConfig: undefined,
    dataSourceName: undefined,
    fieldName: undefined,
    kind: undefined,
    pipelineConfig: undefined,
    requestMappingTemplate: undefined,
    resolverArn: undefined,
    responseMappingTemplate: undefined,
    syncConfig: undefined,
    typeName: undefined
  };
  if (output.cachingConfig !== undefined && output.cachingConfig !== null) {
    contents.cachingConfig = deserializeAws_restJson1_1CachingConfig(
      output.cachingConfig,
      context
    );
  }
  if (output.dataSourceName !== undefined && output.dataSourceName !== null) {
    contents.dataSourceName = output.dataSourceName;
  }
  if (output.fieldName !== undefined && output.fieldName !== null) {
    contents.fieldName = output.fieldName;
  }
  if (output.kind !== undefined && output.kind !== null) {
    contents.kind = output.kind;
  }
  if (output.pipelineConfig !== undefined && output.pipelineConfig !== null) {
    contents.pipelineConfig = deserializeAws_restJson1_1PipelineConfig(
      output.pipelineConfig,
      context
    );
  }
  if (
    output.requestMappingTemplate !== undefined &&
    output.requestMappingTemplate !== null
  ) {
    contents.requestMappingTemplate = output.requestMappingTemplate;
  }
  if (output.resolverArn !== undefined && output.resolverArn !== null) {
    contents.resolverArn = output.resolverArn;
  }
  if (
    output.responseMappingTemplate !== undefined &&
    output.responseMappingTemplate !== null
  ) {
    contents.responseMappingTemplate = output.responseMappingTemplate;
  }
  if (output.syncConfig !== undefined && output.syncConfig !== null) {
    contents.syncConfig = deserializeAws_restJson1_1SyncConfig(
      output.syncConfig,
      context
    );
  }
  if (output.typeName !== undefined && output.typeName !== null) {
    contents.typeName = output.typeName;
  }
  return contents;
};

const deserializeAws_restJson1_1Resolvers = (
  output: any,
  context: __SerdeContext
): Array<Resolver> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resolver(entry, context)
  );
};

const deserializeAws_restJson1_1SyncConfig = (
  output: any,
  context: __SerdeContext
): SyncConfig => {
  let contents: any = {
    __type: "SyncConfig",
    conflictDetection: undefined,
    conflictHandler: undefined,
    lambdaConflictHandlerConfig: undefined
  };
  if (
    output.conflictDetection !== undefined &&
    output.conflictDetection !== null
  ) {
    contents.conflictDetection = output.conflictDetection;
  }
  if (output.conflictHandler !== undefined && output.conflictHandler !== null) {
    contents.conflictHandler = output.conflictHandler;
  }
  if (
    output.lambdaConflictHandlerConfig !== undefined &&
    output.lambdaConflictHandlerConfig !== null
  ) {
    contents.lambdaConflictHandlerConfig = deserializeAws_restJson1_1LambdaConflictHandlerConfig(
      output.lambdaConflictHandlerConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Type = (
  output: any,
  context: __SerdeContext
): Type => {
  let contents: any = {
    __type: "Type",
    arn: undefined,
    definition: undefined,
    description: undefined,
    format: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = output.definition;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.format !== undefined && output.format !== null) {
    contents.format = output.format;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1TypeList = (
  output: any,
  context: __SerdeContext
): Array<Type> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Type(entry, context)
  );
};

const deserializeAws_restJson1_1UserPoolConfig = (
  output: any,
  context: __SerdeContext
): UserPoolConfig => {
  let contents: any = {
    __type: "UserPoolConfig",
    appIdClientRegex: undefined,
    awsRegion: undefined,
    defaultAction: undefined,
    userPoolId: undefined
  };
  if (
    output.appIdClientRegex !== undefined &&
    output.appIdClientRegex !== null
  ) {
    contents.appIdClientRegex = output.appIdClientRegex;
  }
  if (output.awsRegion !== undefined && output.awsRegion !== null) {
    contents.awsRegion = output.awsRegion;
  }
  if (output.defaultAction !== undefined && output.defaultAction !== null) {
    contents.defaultAction = output.defaultAction;
  }
  if (output.userPoolId !== undefined && output.userPoolId !== null) {
    contents.userPoolId = output.userPoolId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
