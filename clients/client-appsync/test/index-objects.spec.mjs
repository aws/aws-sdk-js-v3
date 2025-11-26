import {
  ApiCacheStatus,
  ApiCacheType,
  ApiCachingBehavior,
  AppSync,
  AppSyncClient,
  AppSyncServiceException,
  AssociateApiCommand,
  AssociateMergedGraphqlApiCommand,
  AssociateSourceGraphqlApiCommand,
  AssociationStatus,
  AuthenticationType,
  AuthorizationType,
  CacheHealthMetricsConfig,
  ConflictDetectionType,
  ConflictHandlerType,
  CreateApiCacheCommand,
  CreateApiCommand,
  CreateApiKeyCommand,
  CreateChannelNamespaceCommand,
  CreateDataSourceCommand,
  CreateDomainNameCommand,
  CreateFunctionCommand,
  CreateGraphqlApiCommand,
  CreateResolverCommand,
  CreateTypeCommand,
  DataSourceIntrospectionStatus,
  DataSourceLevelMetricsBehavior,
  DataSourceLevelMetricsConfig,
  DataSourceType,
  DefaultAction,
  DeleteApiCacheCommand,
  DeleteApiCommand,
  DeleteApiKeyCommand,
  DeleteChannelNamespaceCommand,
  DeleteDataSourceCommand,
  DeleteDomainNameCommand,
  DeleteFunctionCommand,
  DeleteGraphqlApiCommand,
  DeleteResolverCommand,
  DeleteTypeCommand,
  DisassociateApiCommand,
  DisassociateMergedGraphqlApiCommand,
  DisassociateSourceGraphqlApiCommand,
  EvaluateCodeCommand,
  EvaluateMappingTemplateCommand,
  EventLogLevel,
  FieldLogLevel,
  FlushApiCacheCommand,
  GetApiAssociationCommand,
  GetApiCacheCommand,
  GetApiCommand,
  GetChannelNamespaceCommand,
  GetDataSourceCommand,
  GetDataSourceIntrospectionCommand,
  GetDomainNameCommand,
  GetFunctionCommand,
  GetGraphqlApiCommand,
  GetGraphqlApiEnvironmentVariablesCommand,
  GetIntrospectionSchemaCommand,
  GetResolverCommand,
  GetSchemaCreationStatusCommand,
  GetSourceApiAssociationCommand,
  GetTypeCommand,
  GraphQLApiIntrospectionConfig,
  GraphQLApiType,
  GraphQLApiVisibility,
  HandlerBehavior,
  InvokeType,
  ListApiKeysCommand,
  ListApisCommand,
  ListChannelNamespacesCommand,
  ListDataSourcesCommand,
  ListDomainNamesCommand,
  ListFunctionsCommand,
  ListGraphqlApisCommand,
  ListResolversByFunctionCommand,
  ListResolversCommand,
  ListSourceApiAssociationsCommand,
  ListTagsForResourceCommand,
  ListTypesByAssociationCommand,
  ListTypesCommand,
  MergeType,
  OperationLevelMetricsConfig,
  OutputType,
  Ownership,
  PutGraphqlApiEnvironmentVariablesCommand,
  RelationalDatabaseSourceType,
  ResolverKind,
  ResolverLevelMetricsBehavior,
  ResolverLevelMetricsConfig,
  RuntimeName,
  SchemaStatus,
  SourceApiAssociationStatus,
  StartDataSourceIntrospectionCommand,
  StartSchemaCreationCommand,
  StartSchemaMergeCommand,
  TagResourceCommand,
  TypeDefinitionFormat,
  UntagResourceCommand,
  UpdateApiCacheCommand,
  UpdateApiCommand,
  UpdateApiKeyCommand,
  UpdateChannelNamespaceCommand,
  UpdateDataSourceCommand,
  UpdateDomainNameCommand,
  UpdateFunctionCommand,
  UpdateGraphqlApiCommand,
  UpdateResolverCommand,
  UpdateSourceApiAssociationCommand,
  UpdateTypeCommand,
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
assert(typeof AppSyncClient === "function")
assert(typeof AppSync === "function")
// commands
assert(typeof AssociateApiCommand === "function")
assert(typeof AssociateMergedGraphqlApiCommand === "function")
assert(typeof AssociateSourceGraphqlApiCommand === "function")
assert(typeof CreateApiCommand === "function")
assert(typeof CreateApiCacheCommand === "function")
assert(typeof CreateApiKeyCommand === "function")
assert(typeof CreateChannelNamespaceCommand === "function")
assert(typeof CreateDataSourceCommand === "function")
assert(typeof CreateDomainNameCommand === "function")
assert(typeof CreateFunctionCommand === "function")
assert(typeof CreateGraphqlApiCommand === "function")
assert(typeof CreateResolverCommand === "function")
assert(typeof CreateTypeCommand === "function")
assert(typeof DeleteApiCommand === "function")
assert(typeof DeleteApiCacheCommand === "function")
assert(typeof DeleteApiKeyCommand === "function")
assert(typeof DeleteChannelNamespaceCommand === "function")
assert(typeof DeleteDataSourceCommand === "function")
assert(typeof DeleteDomainNameCommand === "function")
assert(typeof DeleteFunctionCommand === "function")
assert(typeof DeleteGraphqlApiCommand === "function")
assert(typeof DeleteResolverCommand === "function")
assert(typeof DeleteTypeCommand === "function")
assert(typeof DisassociateApiCommand === "function")
assert(typeof DisassociateMergedGraphqlApiCommand === "function")
assert(typeof DisassociateSourceGraphqlApiCommand === "function")
assert(typeof EvaluateCodeCommand === "function")
assert(typeof EvaluateMappingTemplateCommand === "function")
assert(typeof FlushApiCacheCommand === "function")
assert(typeof GetApiCommand === "function")
assert(typeof GetApiAssociationCommand === "function")
assert(typeof GetApiCacheCommand === "function")
assert(typeof GetChannelNamespaceCommand === "function")
assert(typeof GetDataSourceCommand === "function")
assert(typeof GetDataSourceIntrospectionCommand === "function")
assert(typeof GetDomainNameCommand === "function")
assert(typeof GetFunctionCommand === "function")
assert(typeof GetGraphqlApiCommand === "function")
assert(typeof GetGraphqlApiEnvironmentVariablesCommand === "function")
assert(typeof GetIntrospectionSchemaCommand === "function")
assert(typeof GetResolverCommand === "function")
assert(typeof GetSchemaCreationStatusCommand === "function")
assert(typeof GetSourceApiAssociationCommand === "function")
assert(typeof GetTypeCommand === "function")
assert(typeof ListApiKeysCommand === "function")
assert(typeof ListApisCommand === "function")
assert(typeof ListChannelNamespacesCommand === "function")
assert(typeof ListDataSourcesCommand === "function")
assert(typeof ListDomainNamesCommand === "function")
assert(typeof ListFunctionsCommand === "function")
assert(typeof ListGraphqlApisCommand === "function")
assert(typeof ListResolversCommand === "function")
assert(typeof ListResolversByFunctionCommand === "function")
assert(typeof ListSourceApiAssociationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTypesCommand === "function")
assert(typeof ListTypesByAssociationCommand === "function")
assert(typeof PutGraphqlApiEnvironmentVariablesCommand === "function")
assert(typeof StartDataSourceIntrospectionCommand === "function")
assert(typeof StartSchemaCreationCommand === "function")
assert(typeof StartSchemaMergeCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateApiCommand === "function")
assert(typeof UpdateApiCacheCommand === "function")
assert(typeof UpdateApiKeyCommand === "function")
assert(typeof UpdateChannelNamespaceCommand === "function")
assert(typeof UpdateDataSourceCommand === "function")
assert(typeof UpdateDomainNameCommand === "function")
assert(typeof UpdateFunctionCommand === "function")
assert(typeof UpdateGraphqlApiCommand === "function")
assert(typeof UpdateResolverCommand === "function")
assert(typeof UpdateSourceApiAssociationCommand === "function")
assert(typeof UpdateTypeCommand === "function")
// enums
assert(typeof ApiCacheStatus === "object");
assert(typeof ApiCacheType === "object");
assert(typeof ApiCachingBehavior === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AuthenticationType === "object");
assert(typeof AuthorizationType === "object");
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
assert(AppSyncServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApiKeys === "function")
assert(typeof paginateListApis === "function")
assert(typeof paginateListChannelNamespaces === "function")
assert(typeof paginateListDataSources === "function")
assert(typeof paginateListDomainNames === "function")
assert(typeof paginateListFunctions === "function")
assert(typeof paginateListGraphqlApis === "function")
assert(typeof paginateListResolvers === "function")
assert(typeof paginateListResolversByFunction === "function")
assert(typeof paginateListSourceApiAssociations === "function")
assert(typeof paginateListTypes === "function")
assert(typeof paginateListTypesByAssociation === "function")
console.log(`AppSync index test passed.`);
