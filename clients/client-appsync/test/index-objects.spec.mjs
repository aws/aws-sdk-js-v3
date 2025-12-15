import {
  AccessDeniedException,
  AccessDeniedException$,
  AdditionalAuthenticationProvider$,
  Api$,
  ApiAssociation$,
  ApiCache$,
  ApiCacheStatus,
  ApiCacheType,
  ApiCachingBehavior,
  ApiKey$,
  ApiKeyLimitExceededException,
  ApiKeyLimitExceededException$,
  ApiKeyValidityOutOfBoundsException,
  ApiKeyValidityOutOfBoundsException$,
  ApiLimitExceededException,
  ApiLimitExceededException$,
  AppSync,
  AppSyncClient,
  AppSyncRuntime$,
  AppSyncServiceException,
  AssociateApi$,
  AssociateApiCommand,
  AssociateApiRequest$,
  AssociateApiResponse$,
  AssociateMergedGraphqlApi$,
  AssociateMergedGraphqlApiCommand,
  AssociateMergedGraphqlApiRequest$,
  AssociateMergedGraphqlApiResponse$,
  AssociateSourceGraphqlApi$,
  AssociateSourceGraphqlApiCommand,
  AssociateSourceGraphqlApiRequest$,
  AssociateSourceGraphqlApiResponse$,
  AssociationStatus,
  AuthMode$,
  AuthProvider$,
  AuthenticationType,
  AuthorizationConfig$,
  AuthorizationType,
  AwsIamConfig$,
  BadRequestDetail$,
  BadRequestException,
  BadRequestException$,
  BadRequestReason,
  CacheHealthMetricsConfig,
  CachingConfig$,
  ChannelNamespace$,
  CodeError$,
  CodeErrorLocation$,
  CognitoConfig$,
  CognitoUserPoolConfig$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictDetectionType,
  ConflictException,
  ConflictException$,
  ConflictHandlerType,
  CreateApi$,
  CreateApiCache$,
  CreateApiCacheCommand,
  CreateApiCacheRequest$,
  CreateApiCacheResponse$,
  CreateApiCommand,
  CreateApiKey$,
  CreateApiKeyCommand,
  CreateApiKeyRequest$,
  CreateApiKeyResponse$,
  CreateApiRequest$,
  CreateApiResponse$,
  CreateChannelNamespace$,
  CreateChannelNamespaceCommand,
  CreateChannelNamespaceRequest$,
  CreateChannelNamespaceResponse$,
  CreateDataSource$,
  CreateDataSourceCommand,
  CreateDataSourceRequest$,
  CreateDataSourceResponse$,
  CreateDomainName$,
  CreateDomainNameCommand,
  CreateDomainNameRequest$,
  CreateDomainNameResponse$,
  CreateFunction$,
  CreateFunctionCommand,
  CreateFunctionRequest$,
  CreateFunctionResponse$,
  CreateGraphqlApi$,
  CreateGraphqlApiCommand,
  CreateGraphqlApiRequest$,
  CreateGraphqlApiResponse$,
  CreateResolver$,
  CreateResolverCommand,
  CreateResolverRequest$,
  CreateResolverResponse$,
  CreateType$,
  CreateTypeCommand,
  CreateTypeRequest$,
  CreateTypeResponse$,
  DataSource$,
  DataSourceIntrospectionModel$,
  DataSourceIntrospectionModelField$,
  DataSourceIntrospectionModelFieldType$,
  DataSourceIntrospectionModelIndex$,
  DataSourceIntrospectionResult$,
  DataSourceIntrospectionStatus,
  DataSourceLevelMetricsBehavior,
  DataSourceLevelMetricsConfig,
  DataSourceType,
  DefaultAction,
  DeleteApi$,
  DeleteApiCache$,
  DeleteApiCacheCommand,
  DeleteApiCacheRequest$,
  DeleteApiCacheResponse$,
  DeleteApiCommand,
  DeleteApiKey$,
  DeleteApiKeyCommand,
  DeleteApiKeyRequest$,
  DeleteApiKeyResponse$,
  DeleteApiRequest$,
  DeleteApiResponse$,
  DeleteChannelNamespace$,
  DeleteChannelNamespaceCommand,
  DeleteChannelNamespaceRequest$,
  DeleteChannelNamespaceResponse$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceRequest$,
  DeleteDataSourceResponse$,
  DeleteDomainName$,
  DeleteDomainNameCommand,
  DeleteDomainNameRequest$,
  DeleteDomainNameResponse$,
  DeleteFunction$,
  DeleteFunctionCommand,
  DeleteFunctionRequest$,
  DeleteFunctionResponse$,
  DeleteGraphqlApi$,
  DeleteGraphqlApiCommand,
  DeleteGraphqlApiRequest$,
  DeleteGraphqlApiResponse$,
  DeleteResolver$,
  DeleteResolverCommand,
  DeleteResolverRequest$,
  DeleteResolverResponse$,
  DeleteType$,
  DeleteTypeCommand,
  DeleteTypeRequest$,
  DeleteTypeResponse$,
  DeltaSyncConfig$,
  DisassociateApi$,
  DisassociateApiCommand,
  DisassociateApiRequest$,
  DisassociateApiResponse$,
  DisassociateMergedGraphqlApi$,
  DisassociateMergedGraphqlApiCommand,
  DisassociateMergedGraphqlApiRequest$,
  DisassociateMergedGraphqlApiResponse$,
  DisassociateSourceGraphqlApi$,
  DisassociateSourceGraphqlApiCommand,
  DisassociateSourceGraphqlApiRequest$,
  DisassociateSourceGraphqlApiResponse$,
  DomainNameConfig$,
  DynamodbDataSourceConfig$,
  ElasticsearchDataSourceConfig$,
  EnhancedMetricsConfig$,
  ErrorDetail$,
  EvaluateCode$,
  EvaluateCodeCommand,
  EvaluateCodeErrorDetail$,
  EvaluateCodeRequest$,
  EvaluateCodeResponse$,
  EvaluateMappingTemplate$,
  EvaluateMappingTemplateCommand,
  EvaluateMappingTemplateRequest$,
  EvaluateMappingTemplateResponse$,
  EventBridgeDataSourceConfig$,
  EventConfig$,
  EventLogConfig$,
  EventLogLevel,
  FieldLogLevel,
  FlushApiCache$,
  FlushApiCacheCommand,
  FlushApiCacheRequest$,
  FlushApiCacheResponse$,
  FunctionConfiguration$,
  GetApi$,
  GetApiAssociation$,
  GetApiAssociationCommand,
  GetApiAssociationRequest$,
  GetApiAssociationResponse$,
  GetApiCache$,
  GetApiCacheCommand,
  GetApiCacheRequest$,
  GetApiCacheResponse$,
  GetApiCommand,
  GetApiRequest$,
  GetApiResponse$,
  GetChannelNamespace$,
  GetChannelNamespaceCommand,
  GetChannelNamespaceRequest$,
  GetChannelNamespaceResponse$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceIntrospection$,
  GetDataSourceIntrospectionCommand,
  GetDataSourceIntrospectionRequest$,
  GetDataSourceIntrospectionResponse$,
  GetDataSourceRequest$,
  GetDataSourceResponse$,
  GetDomainName$,
  GetDomainNameCommand,
  GetDomainNameRequest$,
  GetDomainNameResponse$,
  GetFunction$,
  GetFunctionCommand,
  GetFunctionRequest$,
  GetFunctionResponse$,
  GetGraphqlApi$,
  GetGraphqlApiCommand,
  GetGraphqlApiEnvironmentVariables$,
  GetGraphqlApiEnvironmentVariablesCommand,
  GetGraphqlApiEnvironmentVariablesRequest$,
  GetGraphqlApiEnvironmentVariablesResponse$,
  GetGraphqlApiRequest$,
  GetGraphqlApiResponse$,
  GetIntrospectionSchema$,
  GetIntrospectionSchemaCommand,
  GetIntrospectionSchemaRequest$,
  GetIntrospectionSchemaResponse$,
  GetResolver$,
  GetResolverCommand,
  GetResolverRequest$,
  GetResolverResponse$,
  GetSchemaCreationStatus$,
  GetSchemaCreationStatusCommand,
  GetSchemaCreationStatusRequest$,
  GetSchemaCreationStatusResponse$,
  GetSourceApiAssociation$,
  GetSourceApiAssociationCommand,
  GetSourceApiAssociationRequest$,
  GetSourceApiAssociationResponse$,
  GetType$,
  GetTypeCommand,
  GetTypeRequest$,
  GetTypeResponse$,
  GraphQLApiIntrospectionConfig,
  GraphQLApiType,
  GraphQLApiVisibility,
  GraphQLSchemaException,
  GraphQLSchemaException$,
  GraphqlApi$,
  HandlerBehavior,
  HandlerConfig$,
  HandlerConfigs$,
  HttpDataSourceConfig$,
  Integration$,
  InternalFailureException,
  InternalFailureException$,
  InvokeType,
  LambdaAuthorizerConfig$,
  LambdaConfig$,
  LambdaConflictHandlerConfig$,
  LambdaDataSourceConfig$,
  LimitExceededException,
  LimitExceededException$,
  ListApiKeys$,
  ListApiKeysCommand,
  ListApiKeysRequest$,
  ListApiKeysResponse$,
  ListApis$,
  ListApisCommand,
  ListApisRequest$,
  ListApisResponse$,
  ListChannelNamespaces$,
  ListChannelNamespacesCommand,
  ListChannelNamespacesRequest$,
  ListChannelNamespacesResponse$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesRequest$,
  ListDataSourcesResponse$,
  ListDomainNames$,
  ListDomainNamesCommand,
  ListDomainNamesRequest$,
  ListDomainNamesResponse$,
  ListFunctions$,
  ListFunctionsCommand,
  ListFunctionsRequest$,
  ListFunctionsResponse$,
  ListGraphqlApis$,
  ListGraphqlApisCommand,
  ListGraphqlApisRequest$,
  ListGraphqlApisResponse$,
  ListResolvers$,
  ListResolversByFunction$,
  ListResolversByFunctionCommand,
  ListResolversByFunctionRequest$,
  ListResolversByFunctionResponse$,
  ListResolversCommand,
  ListResolversRequest$,
  ListResolversResponse$,
  ListSourceApiAssociations$,
  ListSourceApiAssociationsCommand,
  ListSourceApiAssociationsRequest$,
  ListSourceApiAssociationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTypes$,
  ListTypesByAssociation$,
  ListTypesByAssociationCommand,
  ListTypesByAssociationRequest$,
  ListTypesByAssociationResponse$,
  ListTypesCommand,
  ListTypesRequest$,
  ListTypesResponse$,
  LogConfig$,
  MergeType,
  NotFoundException,
  NotFoundException$,
  OpenIDConnectConfig$,
  OpenSearchServiceDataSourceConfig$,
  OperationLevelMetricsConfig,
  OutputType,
  Ownership,
  PipelineConfig$,
  PutGraphqlApiEnvironmentVariables$,
  PutGraphqlApiEnvironmentVariablesCommand,
  PutGraphqlApiEnvironmentVariablesRequest$,
  PutGraphqlApiEnvironmentVariablesResponse$,
  RdsDataApiConfig$,
  RdsHttpEndpointConfig$,
  RelationalDatabaseDataSourceConfig$,
  RelationalDatabaseSourceType,
  Resolver$,
  ResolverKind,
  ResolverLevelMetricsBehavior,
  ResolverLevelMetricsConfig,
  RuntimeName,
  SchemaStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceApiAssociation$,
  SourceApiAssociationConfig$,
  SourceApiAssociationStatus,
  SourceApiAssociationSummary$,
  StartDataSourceIntrospection$,
  StartDataSourceIntrospectionCommand,
  StartDataSourceIntrospectionRequest$,
  StartDataSourceIntrospectionResponse$,
  StartSchemaCreation$,
  StartSchemaCreationCommand,
  StartSchemaCreationRequest$,
  StartSchemaCreationResponse$,
  StartSchemaMerge$,
  StartSchemaMergeCommand,
  StartSchemaMergeRequest$,
  StartSchemaMergeResponse$,
  SyncConfig$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Type$,
  TypeDefinitionFormat,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApi$,
  UpdateApiCache$,
  UpdateApiCacheCommand,
  UpdateApiCacheRequest$,
  UpdateApiCacheResponse$,
  UpdateApiCommand,
  UpdateApiKey$,
  UpdateApiKeyCommand,
  UpdateApiKeyRequest$,
  UpdateApiKeyResponse$,
  UpdateApiRequest$,
  UpdateApiResponse$,
  UpdateChannelNamespace$,
  UpdateChannelNamespaceCommand,
  UpdateChannelNamespaceRequest$,
  UpdateChannelNamespaceResponse$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceRequest$,
  UpdateDataSourceResponse$,
  UpdateDomainName$,
  UpdateDomainNameCommand,
  UpdateDomainNameRequest$,
  UpdateDomainNameResponse$,
  UpdateFunction$,
  UpdateFunctionCommand,
  UpdateFunctionRequest$,
  UpdateFunctionResponse$,
  UpdateGraphqlApi$,
  UpdateGraphqlApiCommand,
  UpdateGraphqlApiRequest$,
  UpdateGraphqlApiResponse$,
  UpdateResolver$,
  UpdateResolverCommand,
  UpdateResolverRequest$,
  UpdateResolverResponse$,
  UpdateSourceApiAssociation$,
  UpdateSourceApiAssociationCommand,
  UpdateSourceApiAssociationRequest$,
  UpdateSourceApiAssociationResponse$,
  UpdateType$,
  UpdateTypeCommand,
  UpdateTypeRequest$,
  UpdateTypeResponse$,
  UserPoolConfig$,
  paginateListApiKeys,
  paginateListApis,
  paginateListChannelNamespaces,
  paginateListDataSources,
  paginateListDomainNames,
  paginateListFunctions,
  paginateListGraphqlApis,
  paginateListResolvers,
  paginateListResolversByFunction,
  paginateListSourceApiAssociations,
  paginateListTypes,
  paginateListTypesByAssociation,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppSyncClient === "function");
assert(typeof AppSync === "function");
// commands
assert(typeof AssociateApiCommand === "function");
assert(typeof AssociateApi$ === "object");
assert(typeof AssociateMergedGraphqlApiCommand === "function");
assert(typeof AssociateMergedGraphqlApi$ === "object");
assert(typeof AssociateSourceGraphqlApiCommand === "function");
assert(typeof AssociateSourceGraphqlApi$ === "object");
assert(typeof CreateApiCommand === "function");
assert(typeof CreateApi$ === "object");
assert(typeof CreateApiCacheCommand === "function");
assert(typeof CreateApiCache$ === "object");
assert(typeof CreateApiKeyCommand === "function");
assert(typeof CreateApiKey$ === "object");
assert(typeof CreateChannelNamespaceCommand === "function");
assert(typeof CreateChannelNamespace$ === "object");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDataSource$ === "object");
assert(typeof CreateDomainNameCommand === "function");
assert(typeof CreateDomainName$ === "object");
assert(typeof CreateFunctionCommand === "function");
assert(typeof CreateFunction$ === "object");
assert(typeof CreateGraphqlApiCommand === "function");
assert(typeof CreateGraphqlApi$ === "object");
assert(typeof CreateResolverCommand === "function");
assert(typeof CreateResolver$ === "object");
assert(typeof CreateTypeCommand === "function");
assert(typeof CreateType$ === "object");
assert(typeof DeleteApiCommand === "function");
assert(typeof DeleteApi$ === "object");
assert(typeof DeleteApiCacheCommand === "function");
assert(typeof DeleteApiCache$ === "object");
assert(typeof DeleteApiKeyCommand === "function");
assert(typeof DeleteApiKey$ === "object");
assert(typeof DeleteChannelNamespaceCommand === "function");
assert(typeof DeleteChannelNamespace$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteDomainNameCommand === "function");
assert(typeof DeleteDomainName$ === "object");
assert(typeof DeleteFunctionCommand === "function");
assert(typeof DeleteFunction$ === "object");
assert(typeof DeleteGraphqlApiCommand === "function");
assert(typeof DeleteGraphqlApi$ === "object");
assert(typeof DeleteResolverCommand === "function");
assert(typeof DeleteResolver$ === "object");
assert(typeof DeleteTypeCommand === "function");
assert(typeof DeleteType$ === "object");
assert(typeof DisassociateApiCommand === "function");
assert(typeof DisassociateApi$ === "object");
assert(typeof DisassociateMergedGraphqlApiCommand === "function");
assert(typeof DisassociateMergedGraphqlApi$ === "object");
assert(typeof DisassociateSourceGraphqlApiCommand === "function");
assert(typeof DisassociateSourceGraphqlApi$ === "object");
assert(typeof EvaluateCodeCommand === "function");
assert(typeof EvaluateCode$ === "object");
assert(typeof EvaluateMappingTemplateCommand === "function");
assert(typeof EvaluateMappingTemplate$ === "object");
assert(typeof FlushApiCacheCommand === "function");
assert(typeof FlushApiCache$ === "object");
assert(typeof GetApiCommand === "function");
assert(typeof GetApi$ === "object");
assert(typeof GetApiAssociationCommand === "function");
assert(typeof GetApiAssociation$ === "object");
assert(typeof GetApiCacheCommand === "function");
assert(typeof GetApiCache$ === "object");
assert(typeof GetChannelNamespaceCommand === "function");
assert(typeof GetChannelNamespace$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetDataSourceIntrospectionCommand === "function");
assert(typeof GetDataSourceIntrospection$ === "object");
assert(typeof GetDomainNameCommand === "function");
assert(typeof GetDomainName$ === "object");
assert(typeof GetFunctionCommand === "function");
assert(typeof GetFunction$ === "object");
assert(typeof GetGraphqlApiCommand === "function");
assert(typeof GetGraphqlApi$ === "object");
assert(typeof GetGraphqlApiEnvironmentVariablesCommand === "function");
assert(typeof GetGraphqlApiEnvironmentVariables$ === "object");
assert(typeof GetIntrospectionSchemaCommand === "function");
assert(typeof GetIntrospectionSchema$ === "object");
assert(typeof GetResolverCommand === "function");
assert(typeof GetResolver$ === "object");
assert(typeof GetSchemaCreationStatusCommand === "function");
assert(typeof GetSchemaCreationStatus$ === "object");
assert(typeof GetSourceApiAssociationCommand === "function");
assert(typeof GetSourceApiAssociation$ === "object");
assert(typeof GetTypeCommand === "function");
assert(typeof GetType$ === "object");
assert(typeof ListApiKeysCommand === "function");
assert(typeof ListApiKeys$ === "object");
assert(typeof ListApisCommand === "function");
assert(typeof ListApis$ === "object");
assert(typeof ListChannelNamespacesCommand === "function");
assert(typeof ListChannelNamespaces$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainNames$ === "object");
assert(typeof ListFunctionsCommand === "function");
assert(typeof ListFunctions$ === "object");
assert(typeof ListGraphqlApisCommand === "function");
assert(typeof ListGraphqlApis$ === "object");
assert(typeof ListResolversCommand === "function");
assert(typeof ListResolvers$ === "object");
assert(typeof ListResolversByFunctionCommand === "function");
assert(typeof ListResolversByFunction$ === "object");
assert(typeof ListSourceApiAssociationsCommand === "function");
assert(typeof ListSourceApiAssociations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTypesCommand === "function");
assert(typeof ListTypes$ === "object");
assert(typeof ListTypesByAssociationCommand === "function");
assert(typeof ListTypesByAssociation$ === "object");
assert(typeof PutGraphqlApiEnvironmentVariablesCommand === "function");
assert(typeof PutGraphqlApiEnvironmentVariables$ === "object");
assert(typeof StartDataSourceIntrospectionCommand === "function");
assert(typeof StartDataSourceIntrospection$ === "object");
assert(typeof StartSchemaCreationCommand === "function");
assert(typeof StartSchemaCreation$ === "object");
assert(typeof StartSchemaMergeCommand === "function");
assert(typeof StartSchemaMerge$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApiCommand === "function");
assert(typeof UpdateApi$ === "object");
assert(typeof UpdateApiCacheCommand === "function");
assert(typeof UpdateApiCache$ === "object");
assert(typeof UpdateApiKeyCommand === "function");
assert(typeof UpdateApiKey$ === "object");
assert(typeof UpdateChannelNamespaceCommand === "function");
assert(typeof UpdateChannelNamespace$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateDomainNameCommand === "function");
assert(typeof UpdateDomainName$ === "object");
assert(typeof UpdateFunctionCommand === "function");
assert(typeof UpdateFunction$ === "object");
assert(typeof UpdateGraphqlApiCommand === "function");
assert(typeof UpdateGraphqlApi$ === "object");
assert(typeof UpdateResolverCommand === "function");
assert(typeof UpdateResolver$ === "object");
assert(typeof UpdateSourceApiAssociationCommand === "function");
assert(typeof UpdateSourceApiAssociation$ === "object");
assert(typeof UpdateTypeCommand === "function");
assert(typeof UpdateType$ === "object");
// structural schemas
assert(typeof AdditionalAuthenticationProvider$ === "object");
assert(typeof Api$ === "object");
assert(typeof ApiAssociation$ === "object");
assert(typeof ApiCache$ === "object");
assert(typeof ApiKey$ === "object");
assert(typeof AppSyncRuntime$ === "object");
assert(typeof AssociateApiRequest$ === "object");
assert(typeof AssociateApiResponse$ === "object");
assert(typeof AssociateMergedGraphqlApiRequest$ === "object");
assert(typeof AssociateMergedGraphqlApiResponse$ === "object");
assert(typeof AssociateSourceGraphqlApiRequest$ === "object");
assert(typeof AssociateSourceGraphqlApiResponse$ === "object");
assert(typeof AuthMode$ === "object");
assert(typeof AuthorizationConfig$ === "object");
assert(typeof AuthProvider$ === "object");
assert(typeof AwsIamConfig$ === "object");
assert(typeof BadRequestDetail$ === "object");
assert(typeof CachingConfig$ === "object");
assert(typeof ChannelNamespace$ === "object");
assert(typeof CodeError$ === "object");
assert(typeof CodeErrorLocation$ === "object");
assert(typeof CognitoConfig$ === "object");
assert(typeof CognitoUserPoolConfig$ === "object");
assert(typeof CreateApiCacheRequest$ === "object");
assert(typeof CreateApiCacheResponse$ === "object");
assert(typeof CreateApiKeyRequest$ === "object");
assert(typeof CreateApiKeyResponse$ === "object");
assert(typeof CreateApiRequest$ === "object");
assert(typeof CreateApiResponse$ === "object");
assert(typeof CreateChannelNamespaceRequest$ === "object");
assert(typeof CreateChannelNamespaceResponse$ === "object");
assert(typeof CreateDataSourceRequest$ === "object");
assert(typeof CreateDataSourceResponse$ === "object");
assert(typeof CreateDomainNameRequest$ === "object");
assert(typeof CreateDomainNameResponse$ === "object");
assert(typeof CreateFunctionRequest$ === "object");
assert(typeof CreateFunctionResponse$ === "object");
assert(typeof CreateGraphqlApiRequest$ === "object");
assert(typeof CreateGraphqlApiResponse$ === "object");
assert(typeof CreateResolverRequest$ === "object");
assert(typeof CreateResolverResponse$ === "object");
assert(typeof CreateTypeRequest$ === "object");
assert(typeof CreateTypeResponse$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DataSourceIntrospectionModel$ === "object");
assert(typeof DataSourceIntrospectionModelField$ === "object");
assert(typeof DataSourceIntrospectionModelFieldType$ === "object");
assert(typeof DataSourceIntrospectionModelIndex$ === "object");
assert(typeof DataSourceIntrospectionResult$ === "object");
assert(typeof DeleteApiCacheRequest$ === "object");
assert(typeof DeleteApiCacheResponse$ === "object");
assert(typeof DeleteApiKeyRequest$ === "object");
assert(typeof DeleteApiKeyResponse$ === "object");
assert(typeof DeleteApiRequest$ === "object");
assert(typeof DeleteApiResponse$ === "object");
assert(typeof DeleteChannelNamespaceRequest$ === "object");
assert(typeof DeleteChannelNamespaceResponse$ === "object");
assert(typeof DeleteDataSourceRequest$ === "object");
assert(typeof DeleteDataSourceResponse$ === "object");
assert(typeof DeleteDomainNameRequest$ === "object");
assert(typeof DeleteDomainNameResponse$ === "object");
assert(typeof DeleteFunctionRequest$ === "object");
assert(typeof DeleteFunctionResponse$ === "object");
assert(typeof DeleteGraphqlApiRequest$ === "object");
assert(typeof DeleteGraphqlApiResponse$ === "object");
assert(typeof DeleteResolverRequest$ === "object");
assert(typeof DeleteResolverResponse$ === "object");
assert(typeof DeleteTypeRequest$ === "object");
assert(typeof DeleteTypeResponse$ === "object");
assert(typeof DeltaSyncConfig$ === "object");
assert(typeof DisassociateApiRequest$ === "object");
assert(typeof DisassociateApiResponse$ === "object");
assert(typeof DisassociateMergedGraphqlApiRequest$ === "object");
assert(typeof DisassociateMergedGraphqlApiResponse$ === "object");
assert(typeof DisassociateSourceGraphqlApiRequest$ === "object");
assert(typeof DisassociateSourceGraphqlApiResponse$ === "object");
assert(typeof DomainNameConfig$ === "object");
assert(typeof DynamodbDataSourceConfig$ === "object");
assert(typeof ElasticsearchDataSourceConfig$ === "object");
assert(typeof EnhancedMetricsConfig$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof EvaluateCodeErrorDetail$ === "object");
assert(typeof EvaluateCodeRequest$ === "object");
assert(typeof EvaluateCodeResponse$ === "object");
assert(typeof EvaluateMappingTemplateRequest$ === "object");
assert(typeof EvaluateMappingTemplateResponse$ === "object");
assert(typeof EventBridgeDataSourceConfig$ === "object");
assert(typeof EventConfig$ === "object");
assert(typeof EventLogConfig$ === "object");
assert(typeof FlushApiCacheRequest$ === "object");
assert(typeof FlushApiCacheResponse$ === "object");
assert(typeof FunctionConfiguration$ === "object");
assert(typeof GetApiAssociationRequest$ === "object");
assert(typeof GetApiAssociationResponse$ === "object");
assert(typeof GetApiCacheRequest$ === "object");
assert(typeof GetApiCacheResponse$ === "object");
assert(typeof GetApiRequest$ === "object");
assert(typeof GetApiResponse$ === "object");
assert(typeof GetChannelNamespaceRequest$ === "object");
assert(typeof GetChannelNamespaceResponse$ === "object");
assert(typeof GetDataSourceIntrospectionRequest$ === "object");
assert(typeof GetDataSourceIntrospectionResponse$ === "object");
assert(typeof GetDataSourceRequest$ === "object");
assert(typeof GetDataSourceResponse$ === "object");
assert(typeof GetDomainNameRequest$ === "object");
assert(typeof GetDomainNameResponse$ === "object");
assert(typeof GetFunctionRequest$ === "object");
assert(typeof GetFunctionResponse$ === "object");
assert(typeof GetGraphqlApiEnvironmentVariablesRequest$ === "object");
assert(typeof GetGraphqlApiEnvironmentVariablesResponse$ === "object");
assert(typeof GetGraphqlApiRequest$ === "object");
assert(typeof GetGraphqlApiResponse$ === "object");
assert(typeof GetIntrospectionSchemaRequest$ === "object");
assert(typeof GetIntrospectionSchemaResponse$ === "object");
assert(typeof GetResolverRequest$ === "object");
assert(typeof GetResolverResponse$ === "object");
assert(typeof GetSchemaCreationStatusRequest$ === "object");
assert(typeof GetSchemaCreationStatusResponse$ === "object");
assert(typeof GetSourceApiAssociationRequest$ === "object");
assert(typeof GetSourceApiAssociationResponse$ === "object");
assert(typeof GetTypeRequest$ === "object");
assert(typeof GetTypeResponse$ === "object");
assert(typeof GraphqlApi$ === "object");
assert(typeof HandlerConfig$ === "object");
assert(typeof HandlerConfigs$ === "object");
assert(typeof HttpDataSourceConfig$ === "object");
assert(typeof Integration$ === "object");
assert(typeof LambdaAuthorizerConfig$ === "object");
assert(typeof LambdaConfig$ === "object");
assert(typeof LambdaConflictHandlerConfig$ === "object");
assert(typeof LambdaDataSourceConfig$ === "object");
assert(typeof ListApiKeysRequest$ === "object");
assert(typeof ListApiKeysResponse$ === "object");
assert(typeof ListApisRequest$ === "object");
assert(typeof ListApisResponse$ === "object");
assert(typeof ListChannelNamespacesRequest$ === "object");
assert(typeof ListChannelNamespacesResponse$ === "object");
assert(typeof ListDataSourcesRequest$ === "object");
assert(typeof ListDataSourcesResponse$ === "object");
assert(typeof ListDomainNamesRequest$ === "object");
assert(typeof ListDomainNamesResponse$ === "object");
assert(typeof ListFunctionsRequest$ === "object");
assert(typeof ListFunctionsResponse$ === "object");
assert(typeof ListGraphqlApisRequest$ === "object");
assert(typeof ListGraphqlApisResponse$ === "object");
assert(typeof ListResolversByFunctionRequest$ === "object");
assert(typeof ListResolversByFunctionResponse$ === "object");
assert(typeof ListResolversRequest$ === "object");
assert(typeof ListResolversResponse$ === "object");
assert(typeof ListSourceApiAssociationsRequest$ === "object");
assert(typeof ListSourceApiAssociationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTypesByAssociationRequest$ === "object");
assert(typeof ListTypesByAssociationResponse$ === "object");
assert(typeof ListTypesRequest$ === "object");
assert(typeof ListTypesResponse$ === "object");
assert(typeof LogConfig$ === "object");
assert(typeof OpenIDConnectConfig$ === "object");
assert(typeof OpenSearchServiceDataSourceConfig$ === "object");
assert(typeof PipelineConfig$ === "object");
assert(typeof PutGraphqlApiEnvironmentVariablesRequest$ === "object");
assert(typeof PutGraphqlApiEnvironmentVariablesResponse$ === "object");
assert(typeof RdsDataApiConfig$ === "object");
assert(typeof RdsHttpEndpointConfig$ === "object");
assert(typeof RelationalDatabaseDataSourceConfig$ === "object");
assert(typeof Resolver$ === "object");
assert(typeof SourceApiAssociation$ === "object");
assert(typeof SourceApiAssociationConfig$ === "object");
assert(typeof SourceApiAssociationSummary$ === "object");
assert(typeof StartDataSourceIntrospectionRequest$ === "object");
assert(typeof StartDataSourceIntrospectionResponse$ === "object");
assert(typeof StartSchemaCreationRequest$ === "object");
assert(typeof StartSchemaCreationResponse$ === "object");
assert(typeof StartSchemaMergeRequest$ === "object");
assert(typeof StartSchemaMergeResponse$ === "object");
assert(typeof SyncConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Type$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApiCacheRequest$ === "object");
assert(typeof UpdateApiCacheResponse$ === "object");
assert(typeof UpdateApiKeyRequest$ === "object");
assert(typeof UpdateApiKeyResponse$ === "object");
assert(typeof UpdateApiRequest$ === "object");
assert(typeof UpdateApiResponse$ === "object");
assert(typeof UpdateChannelNamespaceRequest$ === "object");
assert(typeof UpdateChannelNamespaceResponse$ === "object");
assert(typeof UpdateDataSourceRequest$ === "object");
assert(typeof UpdateDataSourceResponse$ === "object");
assert(typeof UpdateDomainNameRequest$ === "object");
assert(typeof UpdateDomainNameResponse$ === "object");
assert(typeof UpdateFunctionRequest$ === "object");
assert(typeof UpdateFunctionResponse$ === "object");
assert(typeof UpdateGraphqlApiRequest$ === "object");
assert(typeof UpdateGraphqlApiResponse$ === "object");
assert(typeof UpdateResolverRequest$ === "object");
assert(typeof UpdateResolverResponse$ === "object");
assert(typeof UpdateSourceApiAssociationRequest$ === "object");
assert(typeof UpdateSourceApiAssociationResponse$ === "object");
assert(typeof UpdateTypeRequest$ === "object");
assert(typeof UpdateTypeResponse$ === "object");
assert(typeof UserPoolConfig$ === "object");
// enums
assert(typeof ApiCacheStatus === "object");
assert(typeof ApiCacheType === "object");
assert(typeof ApiCachingBehavior === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AuthenticationType === "object");
assert(typeof AuthorizationType === "object");
assert(typeof BadRequestReason === "object");
assert(typeof CacheHealthMetricsConfig === "object");
assert(typeof ConflictDetectionType === "object");
assert(typeof ConflictHandlerType === "object");
assert(typeof DataSourceIntrospectionStatus === "object");
assert(typeof DataSourceLevelMetricsBehavior === "object");
assert(typeof DataSourceLevelMetricsConfig === "object");
assert(typeof DataSourceType === "object");
assert(typeof DefaultAction === "object");
assert(typeof EventLogLevel === "object");
assert(typeof FieldLogLevel === "object");
assert(typeof GraphQLApiIntrospectionConfig === "object");
assert(typeof GraphQLApiType === "object");
assert(typeof GraphQLApiVisibility === "object");
assert(typeof HandlerBehavior === "object");
assert(typeof InvokeType === "object");
assert(typeof MergeType === "object");
assert(typeof OperationLevelMetricsConfig === "object");
assert(typeof OutputType === "object");
assert(typeof Ownership === "object");
assert(typeof RelationalDatabaseSourceType === "object");
assert(typeof ResolverKind === "object");
assert(typeof ResolverLevelMetricsBehavior === "object");
assert(typeof ResolverLevelMetricsConfig === "object");
assert(typeof RuntimeName === "object");
assert(typeof SchemaStatus === "object");
assert(typeof SourceApiAssociationStatus === "object");
assert(typeof TypeDefinitionFormat === "object");
// errors
assert(AccessDeniedException.prototype instanceof AppSyncServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ApiKeyLimitExceededException.prototype instanceof AppSyncServiceException);
assert(typeof ApiKeyLimitExceededException$ === "object");
assert(ApiKeyValidityOutOfBoundsException.prototype instanceof AppSyncServiceException);
assert(typeof ApiKeyValidityOutOfBoundsException$ === "object");
assert(ApiLimitExceededException.prototype instanceof AppSyncServiceException);
assert(typeof ApiLimitExceededException$ === "object");
assert(BadRequestException.prototype instanceof AppSyncServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConcurrentModificationException.prototype instanceof AppSyncServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof AppSyncServiceException);
assert(typeof ConflictException$ === "object");
assert(GraphQLSchemaException.prototype instanceof AppSyncServiceException);
assert(typeof GraphQLSchemaException$ === "object");
assert(InternalFailureException.prototype instanceof AppSyncServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof AppSyncServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof AppSyncServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AppSyncServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(UnauthorizedException.prototype instanceof AppSyncServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(AppSyncServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApiKeys === "function");
assert(typeof paginateListApis === "function");
assert(typeof paginateListChannelNamespaces === "function");
assert(typeof paginateListDataSources === "function");
assert(typeof paginateListDomainNames === "function");
assert(typeof paginateListFunctions === "function");
assert(typeof paginateListGraphqlApis === "function");
assert(typeof paginateListResolvers === "function");
assert(typeof paginateListResolversByFunction === "function");
assert(typeof paginateListSourceApiAssociations === "function");
assert(typeof paginateListTypes === "function");
assert(typeof paginateListTypesByAssociation === "function");
console.log(`AppSync index test passed.`);
