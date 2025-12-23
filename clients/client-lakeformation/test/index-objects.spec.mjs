import {
  AccessDeniedException,
  AccessDeniedException$,
  AddLFTagsToResource$,
  AddLFTagsToResourceCommand,
  AddLFTagsToResourceRequest$,
  AddLFTagsToResourceResponse$,
  AddObjectInput$,
  AllRowsWildcard$,
  AlreadyExistsException,
  AlreadyExistsException$,
  ApplicationStatus,
  AssumeDecoratedRoleWithSAML$,
  AssumeDecoratedRoleWithSAMLCommand,
  AssumeDecoratedRoleWithSAMLRequest$,
  AssumeDecoratedRoleWithSAMLResponse$,
  AuditContext$,
  BatchGrantPermissions$,
  BatchGrantPermissionsCommand,
  BatchGrantPermissionsRequest$,
  BatchGrantPermissionsResponse$,
  BatchPermissionsFailureEntry$,
  BatchPermissionsRequestEntry$,
  BatchRevokePermissions$,
  BatchRevokePermissionsCommand,
  BatchRevokePermissionsRequest$,
  BatchRevokePermissionsResponse$,
  CancelTransaction$,
  CancelTransactionCommand,
  CancelTransactionRequest$,
  CancelTransactionResponse$,
  CatalogResource$,
  ColumnLFTag$,
  ColumnWildcard$,
  CommitTransaction$,
  CommitTransactionCommand,
  CommitTransactionRequest$,
  CommitTransactionResponse$,
  ComparisonOperator,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Condition$,
  CreateDataCellsFilter$,
  CreateDataCellsFilterCommand,
  CreateDataCellsFilterRequest$,
  CreateDataCellsFilterResponse$,
  CreateLakeFormationIdentityCenterConfiguration$,
  CreateLakeFormationIdentityCenterConfigurationCommand,
  CreateLakeFormationIdentityCenterConfigurationRequest$,
  CreateLakeFormationIdentityCenterConfigurationResponse$,
  CreateLakeFormationOptIn$,
  CreateLakeFormationOptInCommand,
  CreateLakeFormationOptInRequest$,
  CreateLakeFormationOptInResponse$,
  CreateLFTag$,
  CreateLFTagCommand,
  CreateLFTagExpression$,
  CreateLFTagExpressionCommand,
  CreateLFTagExpressionRequest$,
  CreateLFTagExpressionResponse$,
  CreateLFTagRequest$,
  CreateLFTagResponse$,
  DatabaseResource$,
  DataCellsFilter$,
  DataCellsFilterResource$,
  DataLakePrincipal$,
  DataLakeResourceType,
  DataLakeSettings$,
  DataLocationResource$,
  DeleteDataCellsFilter$,
  DeleteDataCellsFilterCommand,
  DeleteDataCellsFilterRequest$,
  DeleteDataCellsFilterResponse$,
  DeleteLakeFormationIdentityCenterConfiguration$,
  DeleteLakeFormationIdentityCenterConfigurationCommand,
  DeleteLakeFormationIdentityCenterConfigurationRequest$,
  DeleteLakeFormationIdentityCenterConfigurationResponse$,
  DeleteLakeFormationOptIn$,
  DeleteLakeFormationOptInCommand,
  DeleteLakeFormationOptInRequest$,
  DeleteLakeFormationOptInResponse$,
  DeleteLFTag$,
  DeleteLFTagCommand,
  DeleteLFTagExpression$,
  DeleteLFTagExpressionCommand,
  DeleteLFTagExpressionRequest$,
  DeleteLFTagExpressionResponse$,
  DeleteLFTagRequest$,
  DeleteLFTagResponse$,
  DeleteObjectInput$,
  DeleteObjectsOnCancel$,
  DeleteObjectsOnCancelCommand,
  DeleteObjectsOnCancelRequest$,
  DeleteObjectsOnCancelResponse$,
  DeregisterResource$,
  DeregisterResourceCommand,
  DeregisterResourceRequest$,
  DeregisterResourceResponse$,
  DescribeLakeFormationIdentityCenterConfiguration$,
  DescribeLakeFormationIdentityCenterConfigurationCommand,
  DescribeLakeFormationIdentityCenterConfigurationRequest$,
  DescribeLakeFormationIdentityCenterConfigurationResponse$,
  DescribeResource$,
  DescribeResourceCommand,
  DescribeResourceRequest$,
  DescribeResourceResponse$,
  DescribeTransaction$,
  DescribeTransactionCommand,
  DescribeTransactionRequest$,
  DescribeTransactionResponse$,
  DetailsMap$,
  EnableStatus,
  EntityNotFoundException,
  EntityNotFoundException$,
  ErrorDetail$,
  ExecutionStatistics$,
  ExpiredException,
  ExpiredException$,
  ExtendTransaction$,
  ExtendTransactionCommand,
  ExtendTransactionRequest$,
  ExtendTransactionResponse$,
  ExternalFilteringConfiguration$,
  FieldNameString,
  FilterCondition$,
  GetDataCellsFilter$,
  GetDataCellsFilterCommand,
  GetDataCellsFilterRequest$,
  GetDataCellsFilterResponse$,
  GetDataLakePrincipal$,
  GetDataLakePrincipalCommand,
  GetDataLakePrincipalRequest$,
  GetDataLakePrincipalResponse$,
  GetDataLakeSettings$,
  GetDataLakeSettingsCommand,
  GetDataLakeSettingsRequest$,
  GetDataLakeSettingsResponse$,
  GetEffectivePermissionsForPath$,
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathRequest$,
  GetEffectivePermissionsForPathResponse$,
  GetLFTag$,
  GetLFTagCommand,
  GetLFTagExpression$,
  GetLFTagExpressionCommand,
  GetLFTagExpressionRequest$,
  GetLFTagExpressionResponse$,
  GetLFTagRequest$,
  GetLFTagResponse$,
  GetQueryState$,
  GetQueryStateCommand,
  GetQueryStateRequest$,
  GetQueryStateResponse$,
  GetQueryStatistics$,
  GetQueryStatisticsCommand,
  GetQueryStatisticsRequest$,
  GetQueryStatisticsResponse$,
  GetResourceLFTags$,
  GetResourceLFTagsCommand,
  GetResourceLFTagsRequest$,
  GetResourceLFTagsResponse$,
  GetTableObjects$,
  GetTableObjectsCommand,
  GetTableObjectsRequest$,
  GetTableObjectsResponse$,
  GetTemporaryGluePartitionCredentials$,
  GetTemporaryGluePartitionCredentialsCommand,
  GetTemporaryGluePartitionCredentialsRequest$,
  GetTemporaryGluePartitionCredentialsResponse$,
  GetTemporaryGlueTableCredentials$,
  GetTemporaryGlueTableCredentialsCommand,
  GetTemporaryGlueTableCredentialsRequest$,
  GetTemporaryGlueTableCredentialsResponse$,
  GetWorkUnitResults$,
  GetWorkUnitResultsCommand,
  GetWorkUnitResultsRequest$,
  GetWorkUnitResultsResponse$,
  GetWorkUnits$,
  GetWorkUnitsCommand,
  GetWorkUnitsRequest$,
  GetWorkUnitsResponse$,
  GlueEncryptionException,
  GlueEncryptionException$,
  GrantPermissions$,
  GrantPermissionsCommand,
  GrantPermissionsRequest$,
  GrantPermissionsResponse$,
  InternalServiceException,
  InternalServiceException$,
  InvalidInputException,
  InvalidInputException$,
  LakeFormation,
  LakeFormationClient,
  LakeFormationOptInsInfo$,
  LakeFormationServiceException,
  LFTag$,
  LFTagError$,
  LFTagExpression$,
  LFTagExpressionResource$,
  LFTagKeyResource$,
  LFTagPair$,
  LFTagPolicyResource$,
  ListDataCellsFilter$,
  ListDataCellsFilterCommand,
  ListDataCellsFilterRequest$,
  ListDataCellsFilterResponse$,
  ListLakeFormationOptIns$,
  ListLakeFormationOptInsCommand,
  ListLakeFormationOptInsRequest$,
  ListLakeFormationOptInsResponse$,
  ListLFTagExpressions$,
  ListLFTagExpressionsCommand,
  ListLFTagExpressionsRequest$,
  ListLFTagExpressionsResponse$,
  ListLFTags$,
  ListLFTagsCommand,
  ListLFTagsRequest$,
  ListLFTagsResponse$,
  ListPermissions$,
  ListPermissionsCommand,
  ListPermissionsRequest$,
  ListPermissionsResponse$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesRequest$,
  ListResourcesResponse$,
  ListTableStorageOptimizers$,
  ListTableStorageOptimizersCommand,
  ListTableStorageOptimizersRequest$,
  ListTableStorageOptimizersResponse$,
  ListTransactions$,
  ListTransactionsCommand,
  ListTransactionsRequest$,
  ListTransactionsResponse$,
  OperationTimeoutException,
  OperationTimeoutException$,
  OptimizerType,
  paginateGetEffectivePermissionsForPath,
  paginateGetTableObjects,
  paginateGetWorkUnits,
  paginateListDataCellsFilter,
  paginateListLakeFormationOptIns,
  paginateListLFTagExpressions,
  paginateListLFTags,
  paginateListPermissions,
  paginateListResources,
  paginateListTableStorageOptimizers,
  paginateListTransactions,
  paginateSearchDatabasesByLFTags,
  paginateSearchTablesByLFTags,
  PartitionObjects$,
  PartitionValueList$,
  Permission,
  PermissionType,
  PermissionTypeMismatchException,
  PermissionTypeMismatchException$,
  PlanningStatistics$,
  PrincipalPermissions$,
  PrincipalResourcePermissions$,
  PutDataLakeSettings$,
  PutDataLakeSettingsCommand,
  PutDataLakeSettingsRequest$,
  PutDataLakeSettingsResponse$,
  QueryPlanningContext$,
  QuerySessionContext$,
  QueryStateString,
  RedshiftConnect$,
  RedshiftScopeUnion$,
  RegisterResource$,
  RegisterResourceCommand,
  RegisterResourceRequest$,
  RegisterResourceResponse$,
  RemoveLFTagsFromResource$,
  RemoveLFTagsFromResourceCommand,
  RemoveLFTagsFromResourceRequest$,
  RemoveLFTagsFromResourceResponse$,
  Resource$,
  ResourceInfo$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  ResourceNumberLimitExceededException,
  ResourceNumberLimitExceededException$,
  ResourceShareType,
  ResourceType,
  RevokePermissions$,
  RevokePermissionsCommand,
  RevokePermissionsRequest$,
  RevokePermissionsResponse$,
  RowFilter$,
  SearchDatabasesByLFTags$,
  SearchDatabasesByLFTagsCommand,
  SearchDatabasesByLFTagsRequest$,
  SearchDatabasesByLFTagsResponse$,
  SearchTablesByLFTags$,
  SearchTablesByLFTagsCommand,
  SearchTablesByLFTagsRequest$,
  SearchTablesByLFTagsResponse$,
  ServiceAuthorization,
  ServiceIntegrationUnion$,
  StartQueryPlanning$,
  StartQueryPlanningCommand,
  StartQueryPlanningRequest$,
  StartQueryPlanningResponse$,
  StartTransaction$,
  StartTransactionCommand,
  StartTransactionRequest$,
  StartTransactionResponse$,
  StatisticsNotReadyYetException,
  StatisticsNotReadyYetException$,
  StorageOptimizer$,
  TableObject$,
  TableResource$,
  TableWildcard$,
  TableWithColumnsResource$,
  TaggedDatabase$,
  TaggedTable$,
  ThrottledException,
  ThrottledException$,
  TransactionCanceledException,
  TransactionCanceledException$,
  TransactionCommitInProgressException,
  TransactionCommitInProgressException$,
  TransactionCommittedException,
  TransactionCommittedException$,
  TransactionDescription$,
  TransactionStatus,
  TransactionStatusFilter,
  TransactionType,
  UpdateDataCellsFilter$,
  UpdateDataCellsFilterCommand,
  UpdateDataCellsFilterRequest$,
  UpdateDataCellsFilterResponse$,
  UpdateLakeFormationIdentityCenterConfiguration$,
  UpdateLakeFormationIdentityCenterConfigurationCommand,
  UpdateLakeFormationIdentityCenterConfigurationRequest$,
  UpdateLakeFormationIdentityCenterConfigurationResponse$,
  UpdateLFTag$,
  UpdateLFTagCommand,
  UpdateLFTagExpression$,
  UpdateLFTagExpressionCommand,
  UpdateLFTagExpressionRequest$,
  UpdateLFTagExpressionResponse$,
  UpdateLFTagRequest$,
  UpdateLFTagResponse$,
  UpdateResource$,
  UpdateResourceCommand,
  UpdateResourceRequest$,
  UpdateResourceResponse$,
  UpdateTableObjects$,
  UpdateTableObjectsCommand,
  UpdateTableObjectsRequest$,
  UpdateTableObjectsResponse$,
  UpdateTableStorageOptimizer$,
  UpdateTableStorageOptimizerCommand,
  UpdateTableStorageOptimizerRequest$,
  UpdateTableStorageOptimizerResponse$,
  VirtualObject$,
  WorkUnitRange$,
  WorkUnitsNotReadyYetException,
  WorkUnitsNotReadyYetException$,
  WriteOperation$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LakeFormationClient === "function");
assert(typeof LakeFormation === "function");
// commands
assert(typeof AddLFTagsToResourceCommand === "function");
assert(typeof AddLFTagsToResource$ === "object");
assert(typeof AssumeDecoratedRoleWithSAMLCommand === "function");
assert(typeof AssumeDecoratedRoleWithSAML$ === "object");
assert(typeof BatchGrantPermissionsCommand === "function");
assert(typeof BatchGrantPermissions$ === "object");
assert(typeof BatchRevokePermissionsCommand === "function");
assert(typeof BatchRevokePermissions$ === "object");
assert(typeof CancelTransactionCommand === "function");
assert(typeof CancelTransaction$ === "object");
assert(typeof CommitTransactionCommand === "function");
assert(typeof CommitTransaction$ === "object");
assert(typeof CreateDataCellsFilterCommand === "function");
assert(typeof CreateDataCellsFilter$ === "object");
assert(typeof CreateLakeFormationIdentityCenterConfigurationCommand === "function");
assert(typeof CreateLakeFormationIdentityCenterConfiguration$ === "object");
assert(typeof CreateLakeFormationOptInCommand === "function");
assert(typeof CreateLakeFormationOptIn$ === "object");
assert(typeof CreateLFTagCommand === "function");
assert(typeof CreateLFTag$ === "object");
assert(typeof CreateLFTagExpressionCommand === "function");
assert(typeof CreateLFTagExpression$ === "object");
assert(typeof DeleteDataCellsFilterCommand === "function");
assert(typeof DeleteDataCellsFilter$ === "object");
assert(typeof DeleteLakeFormationIdentityCenterConfigurationCommand === "function");
assert(typeof DeleteLakeFormationIdentityCenterConfiguration$ === "object");
assert(typeof DeleteLakeFormationOptInCommand === "function");
assert(typeof DeleteLakeFormationOptIn$ === "object");
assert(typeof DeleteLFTagCommand === "function");
assert(typeof DeleteLFTag$ === "object");
assert(typeof DeleteLFTagExpressionCommand === "function");
assert(typeof DeleteLFTagExpression$ === "object");
assert(typeof DeleteObjectsOnCancelCommand === "function");
assert(typeof DeleteObjectsOnCancel$ === "object");
assert(typeof DeregisterResourceCommand === "function");
assert(typeof DeregisterResource$ === "object");
assert(typeof DescribeLakeFormationIdentityCenterConfigurationCommand === "function");
assert(typeof DescribeLakeFormationIdentityCenterConfiguration$ === "object");
assert(typeof DescribeResourceCommand === "function");
assert(typeof DescribeResource$ === "object");
assert(typeof DescribeTransactionCommand === "function");
assert(typeof DescribeTransaction$ === "object");
assert(typeof ExtendTransactionCommand === "function");
assert(typeof ExtendTransaction$ === "object");
assert(typeof GetDataCellsFilterCommand === "function");
assert(typeof GetDataCellsFilter$ === "object");
assert(typeof GetDataLakePrincipalCommand === "function");
assert(typeof GetDataLakePrincipal$ === "object");
assert(typeof GetDataLakeSettingsCommand === "function");
assert(typeof GetDataLakeSettings$ === "object");
assert(typeof GetEffectivePermissionsForPathCommand === "function");
assert(typeof GetEffectivePermissionsForPath$ === "object");
assert(typeof GetLFTagCommand === "function");
assert(typeof GetLFTag$ === "object");
assert(typeof GetLFTagExpressionCommand === "function");
assert(typeof GetLFTagExpression$ === "object");
assert(typeof GetQueryStateCommand === "function");
assert(typeof GetQueryState$ === "object");
assert(typeof GetQueryStatisticsCommand === "function");
assert(typeof GetQueryStatistics$ === "object");
assert(typeof GetResourceLFTagsCommand === "function");
assert(typeof GetResourceLFTags$ === "object");
assert(typeof GetTableObjectsCommand === "function");
assert(typeof GetTableObjects$ === "object");
assert(typeof GetTemporaryGluePartitionCredentialsCommand === "function");
assert(typeof GetTemporaryGluePartitionCredentials$ === "object");
assert(typeof GetTemporaryGlueTableCredentialsCommand === "function");
assert(typeof GetTemporaryGlueTableCredentials$ === "object");
assert(typeof GetWorkUnitResultsCommand === "function");
assert(typeof GetWorkUnitResults$ === "object");
assert(typeof GetWorkUnitsCommand === "function");
assert(typeof GetWorkUnits$ === "object");
assert(typeof GrantPermissionsCommand === "function");
assert(typeof GrantPermissions$ === "object");
assert(typeof ListDataCellsFilterCommand === "function");
assert(typeof ListDataCellsFilter$ === "object");
assert(typeof ListLakeFormationOptInsCommand === "function");
assert(typeof ListLakeFormationOptIns$ === "object");
assert(typeof ListLFTagExpressionsCommand === "function");
assert(typeof ListLFTagExpressions$ === "object");
assert(typeof ListLFTagsCommand === "function");
assert(typeof ListLFTags$ === "object");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListPermissions$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof ListTableStorageOptimizersCommand === "function");
assert(typeof ListTableStorageOptimizers$ === "object");
assert(typeof ListTransactionsCommand === "function");
assert(typeof ListTransactions$ === "object");
assert(typeof PutDataLakeSettingsCommand === "function");
assert(typeof PutDataLakeSettings$ === "object");
assert(typeof RegisterResourceCommand === "function");
assert(typeof RegisterResource$ === "object");
assert(typeof RemoveLFTagsFromResourceCommand === "function");
assert(typeof RemoveLFTagsFromResource$ === "object");
assert(typeof RevokePermissionsCommand === "function");
assert(typeof RevokePermissions$ === "object");
assert(typeof SearchDatabasesByLFTagsCommand === "function");
assert(typeof SearchDatabasesByLFTags$ === "object");
assert(typeof SearchTablesByLFTagsCommand === "function");
assert(typeof SearchTablesByLFTags$ === "object");
assert(typeof StartQueryPlanningCommand === "function");
assert(typeof StartQueryPlanning$ === "object");
assert(typeof StartTransactionCommand === "function");
assert(typeof StartTransaction$ === "object");
assert(typeof UpdateDataCellsFilterCommand === "function");
assert(typeof UpdateDataCellsFilter$ === "object");
assert(typeof UpdateLakeFormationIdentityCenterConfigurationCommand === "function");
assert(typeof UpdateLakeFormationIdentityCenterConfiguration$ === "object");
assert(typeof UpdateLFTagCommand === "function");
assert(typeof UpdateLFTag$ === "object");
assert(typeof UpdateLFTagExpressionCommand === "function");
assert(typeof UpdateLFTagExpression$ === "object");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateResource$ === "object");
assert(typeof UpdateTableObjectsCommand === "function");
assert(typeof UpdateTableObjects$ === "object");
assert(typeof UpdateTableStorageOptimizerCommand === "function");
assert(typeof UpdateTableStorageOptimizer$ === "object");
// structural schemas
assert(typeof AddLFTagsToResourceRequest$ === "object");
assert(typeof AddLFTagsToResourceResponse$ === "object");
assert(typeof AddObjectInput$ === "object");
assert(typeof AllRowsWildcard$ === "object");
assert(typeof AssumeDecoratedRoleWithSAMLRequest$ === "object");
assert(typeof AssumeDecoratedRoleWithSAMLResponse$ === "object");
assert(typeof AuditContext$ === "object");
assert(typeof BatchGrantPermissionsRequest$ === "object");
assert(typeof BatchGrantPermissionsResponse$ === "object");
assert(typeof BatchPermissionsFailureEntry$ === "object");
assert(typeof BatchPermissionsRequestEntry$ === "object");
assert(typeof BatchRevokePermissionsRequest$ === "object");
assert(typeof BatchRevokePermissionsResponse$ === "object");
assert(typeof CancelTransactionRequest$ === "object");
assert(typeof CancelTransactionResponse$ === "object");
assert(typeof CatalogResource$ === "object");
assert(typeof ColumnLFTag$ === "object");
assert(typeof ColumnWildcard$ === "object");
assert(typeof CommitTransactionRequest$ === "object");
assert(typeof CommitTransactionResponse$ === "object");
assert(typeof Condition$ === "object");
assert(typeof CreateDataCellsFilterRequest$ === "object");
assert(typeof CreateDataCellsFilterResponse$ === "object");
assert(typeof CreateLakeFormationIdentityCenterConfigurationRequest$ === "object");
assert(typeof CreateLakeFormationIdentityCenterConfigurationResponse$ === "object");
assert(typeof CreateLakeFormationOptInRequest$ === "object");
assert(typeof CreateLakeFormationOptInResponse$ === "object");
assert(typeof CreateLFTagExpressionRequest$ === "object");
assert(typeof CreateLFTagExpressionResponse$ === "object");
assert(typeof CreateLFTagRequest$ === "object");
assert(typeof CreateLFTagResponse$ === "object");
assert(typeof DatabaseResource$ === "object");
assert(typeof DataCellsFilter$ === "object");
assert(typeof DataCellsFilterResource$ === "object");
assert(typeof DataLakePrincipal$ === "object");
assert(typeof DataLakeSettings$ === "object");
assert(typeof DataLocationResource$ === "object");
assert(typeof DeleteDataCellsFilterRequest$ === "object");
assert(typeof DeleteDataCellsFilterResponse$ === "object");
assert(typeof DeleteLakeFormationIdentityCenterConfigurationRequest$ === "object");
assert(typeof DeleteLakeFormationIdentityCenterConfigurationResponse$ === "object");
assert(typeof DeleteLakeFormationOptInRequest$ === "object");
assert(typeof DeleteLakeFormationOptInResponse$ === "object");
assert(typeof DeleteLFTagExpressionRequest$ === "object");
assert(typeof DeleteLFTagExpressionResponse$ === "object");
assert(typeof DeleteLFTagRequest$ === "object");
assert(typeof DeleteLFTagResponse$ === "object");
assert(typeof DeleteObjectInput$ === "object");
assert(typeof DeleteObjectsOnCancelRequest$ === "object");
assert(typeof DeleteObjectsOnCancelResponse$ === "object");
assert(typeof DeregisterResourceRequest$ === "object");
assert(typeof DeregisterResourceResponse$ === "object");
assert(typeof DescribeLakeFormationIdentityCenterConfigurationRequest$ === "object");
assert(typeof DescribeLakeFormationIdentityCenterConfigurationResponse$ === "object");
assert(typeof DescribeResourceRequest$ === "object");
assert(typeof DescribeResourceResponse$ === "object");
assert(typeof DescribeTransactionRequest$ === "object");
assert(typeof DescribeTransactionResponse$ === "object");
assert(typeof DetailsMap$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof ExecutionStatistics$ === "object");
assert(typeof ExtendTransactionRequest$ === "object");
assert(typeof ExtendTransactionResponse$ === "object");
assert(typeof ExternalFilteringConfiguration$ === "object");
assert(typeof FilterCondition$ === "object");
assert(typeof GetDataCellsFilterRequest$ === "object");
assert(typeof GetDataCellsFilterResponse$ === "object");
assert(typeof GetDataLakePrincipalRequest$ === "object");
assert(typeof GetDataLakePrincipalResponse$ === "object");
assert(typeof GetDataLakeSettingsRequest$ === "object");
assert(typeof GetDataLakeSettingsResponse$ === "object");
assert(typeof GetEffectivePermissionsForPathRequest$ === "object");
assert(typeof GetEffectivePermissionsForPathResponse$ === "object");
assert(typeof GetLFTagExpressionRequest$ === "object");
assert(typeof GetLFTagExpressionResponse$ === "object");
assert(typeof GetLFTagRequest$ === "object");
assert(typeof GetLFTagResponse$ === "object");
assert(typeof GetQueryStateRequest$ === "object");
assert(typeof GetQueryStateResponse$ === "object");
assert(typeof GetQueryStatisticsRequest$ === "object");
assert(typeof GetQueryStatisticsResponse$ === "object");
assert(typeof GetResourceLFTagsRequest$ === "object");
assert(typeof GetResourceLFTagsResponse$ === "object");
assert(typeof GetTableObjectsRequest$ === "object");
assert(typeof GetTableObjectsResponse$ === "object");
assert(typeof GetTemporaryGluePartitionCredentialsRequest$ === "object");
assert(typeof GetTemporaryGluePartitionCredentialsResponse$ === "object");
assert(typeof GetTemporaryGlueTableCredentialsRequest$ === "object");
assert(typeof GetTemporaryGlueTableCredentialsResponse$ === "object");
assert(typeof GetWorkUnitResultsRequest$ === "object");
assert(typeof GetWorkUnitResultsResponse$ === "object");
assert(typeof GetWorkUnitsRequest$ === "object");
assert(typeof GetWorkUnitsResponse$ === "object");
assert(typeof GrantPermissionsRequest$ === "object");
assert(typeof GrantPermissionsResponse$ === "object");
assert(typeof LakeFormationOptInsInfo$ === "object");
assert(typeof LFTag$ === "object");
assert(typeof LFTagError$ === "object");
assert(typeof LFTagExpression$ === "object");
assert(typeof LFTagExpressionResource$ === "object");
assert(typeof LFTagKeyResource$ === "object");
assert(typeof LFTagPair$ === "object");
assert(typeof LFTagPolicyResource$ === "object");
assert(typeof ListDataCellsFilterRequest$ === "object");
assert(typeof ListDataCellsFilterResponse$ === "object");
assert(typeof ListLakeFormationOptInsRequest$ === "object");
assert(typeof ListLakeFormationOptInsResponse$ === "object");
assert(typeof ListLFTagExpressionsRequest$ === "object");
assert(typeof ListLFTagExpressionsResponse$ === "object");
assert(typeof ListLFTagsRequest$ === "object");
assert(typeof ListLFTagsResponse$ === "object");
assert(typeof ListPermissionsRequest$ === "object");
assert(typeof ListPermissionsResponse$ === "object");
assert(typeof ListResourcesRequest$ === "object");
assert(typeof ListResourcesResponse$ === "object");
assert(typeof ListTableStorageOptimizersRequest$ === "object");
assert(typeof ListTableStorageOptimizersResponse$ === "object");
assert(typeof ListTransactionsRequest$ === "object");
assert(typeof ListTransactionsResponse$ === "object");
assert(typeof PartitionObjects$ === "object");
assert(typeof PartitionValueList$ === "object");
assert(typeof PlanningStatistics$ === "object");
assert(typeof PrincipalPermissions$ === "object");
assert(typeof PrincipalResourcePermissions$ === "object");
assert(typeof PutDataLakeSettingsRequest$ === "object");
assert(typeof PutDataLakeSettingsResponse$ === "object");
assert(typeof QueryPlanningContext$ === "object");
assert(typeof QuerySessionContext$ === "object");
assert(typeof RedshiftConnect$ === "object");
assert(typeof RedshiftScopeUnion$ === "object");
assert(typeof RegisterResourceRequest$ === "object");
assert(typeof RegisterResourceResponse$ === "object");
assert(typeof RemoveLFTagsFromResourceRequest$ === "object");
assert(typeof RemoveLFTagsFromResourceResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceInfo$ === "object");
assert(typeof RevokePermissionsRequest$ === "object");
assert(typeof RevokePermissionsResponse$ === "object");
assert(typeof RowFilter$ === "object");
assert(typeof SearchDatabasesByLFTagsRequest$ === "object");
assert(typeof SearchDatabasesByLFTagsResponse$ === "object");
assert(typeof SearchTablesByLFTagsRequest$ === "object");
assert(typeof SearchTablesByLFTagsResponse$ === "object");
assert(typeof ServiceIntegrationUnion$ === "object");
assert(typeof StartQueryPlanningRequest$ === "object");
assert(typeof StartQueryPlanningResponse$ === "object");
assert(typeof StartTransactionRequest$ === "object");
assert(typeof StartTransactionResponse$ === "object");
assert(typeof StorageOptimizer$ === "object");
assert(typeof TableObject$ === "object");
assert(typeof TableResource$ === "object");
assert(typeof TableWildcard$ === "object");
assert(typeof TableWithColumnsResource$ === "object");
assert(typeof TaggedDatabase$ === "object");
assert(typeof TaggedTable$ === "object");
assert(typeof TransactionDescription$ === "object");
assert(typeof UpdateDataCellsFilterRequest$ === "object");
assert(typeof UpdateDataCellsFilterResponse$ === "object");
assert(typeof UpdateLakeFormationIdentityCenterConfigurationRequest$ === "object");
assert(typeof UpdateLakeFormationIdentityCenterConfigurationResponse$ === "object");
assert(typeof UpdateLFTagExpressionRequest$ === "object");
assert(typeof UpdateLFTagExpressionResponse$ === "object");
assert(typeof UpdateLFTagRequest$ === "object");
assert(typeof UpdateLFTagResponse$ === "object");
assert(typeof UpdateResourceRequest$ === "object");
assert(typeof UpdateResourceResponse$ === "object");
assert(typeof UpdateTableObjectsRequest$ === "object");
assert(typeof UpdateTableObjectsResponse$ === "object");
assert(typeof UpdateTableStorageOptimizerRequest$ === "object");
assert(typeof UpdateTableStorageOptimizerResponse$ === "object");
assert(typeof VirtualObject$ === "object");
assert(typeof WorkUnitRange$ === "object");
assert(typeof WriteOperation$ === "object");
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof DataLakeResourceType === "object");
assert(typeof EnableStatus === "object");
assert(typeof FieldNameString === "object");
assert(typeof OptimizerType === "object");
assert(typeof Permission === "object");
assert(typeof PermissionType === "object");
assert(typeof QueryStateString === "object");
assert(typeof ResourceShareType === "object");
assert(typeof ResourceType === "object");
assert(typeof ServiceAuthorization === "object");
assert(typeof TransactionStatus === "object");
assert(typeof TransactionStatusFilter === "object");
assert(typeof TransactionType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LakeFormationServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AlreadyExistsException.prototype instanceof LakeFormationServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(ConcurrentModificationException.prototype instanceof LakeFormationServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(EntityNotFoundException.prototype instanceof LakeFormationServiceException);
assert(typeof EntityNotFoundException$ === "object");
assert(ExpiredException.prototype instanceof LakeFormationServiceException);
assert(typeof ExpiredException$ === "object");
assert(GlueEncryptionException.prototype instanceof LakeFormationServiceException);
assert(typeof GlueEncryptionException$ === "object");
assert(InternalServiceException.prototype instanceof LakeFormationServiceException);
assert(typeof InternalServiceException$ === "object");
assert(InvalidInputException.prototype instanceof LakeFormationServiceException);
assert(typeof InvalidInputException$ === "object");
assert(OperationTimeoutException.prototype instanceof LakeFormationServiceException);
assert(typeof OperationTimeoutException$ === "object");
assert(PermissionTypeMismatchException.prototype instanceof LakeFormationServiceException);
assert(typeof PermissionTypeMismatchException$ === "object");
assert(ResourceNotReadyException.prototype instanceof LakeFormationServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(ResourceNumberLimitExceededException.prototype instanceof LakeFormationServiceException);
assert(typeof ResourceNumberLimitExceededException$ === "object");
assert(StatisticsNotReadyYetException.prototype instanceof LakeFormationServiceException);
assert(typeof StatisticsNotReadyYetException$ === "object");
assert(ThrottledException.prototype instanceof LakeFormationServiceException);
assert(typeof ThrottledException$ === "object");
assert(TransactionCanceledException.prototype instanceof LakeFormationServiceException);
assert(typeof TransactionCanceledException$ === "object");
assert(TransactionCommitInProgressException.prototype instanceof LakeFormationServiceException);
assert(typeof TransactionCommitInProgressException$ === "object");
assert(TransactionCommittedException.prototype instanceof LakeFormationServiceException);
assert(typeof TransactionCommittedException$ === "object");
assert(WorkUnitsNotReadyYetException.prototype instanceof LakeFormationServiceException);
assert(typeof WorkUnitsNotReadyYetException$ === "object");
assert(LakeFormationServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetEffectivePermissionsForPath === "function");
assert(typeof paginateGetTableObjects === "function");
assert(typeof paginateGetWorkUnits === "function");
assert(typeof paginateListDataCellsFilter === "function");
assert(typeof paginateListLFTagExpressions === "function");
assert(typeof paginateListLFTags === "function");
assert(typeof paginateListLakeFormationOptIns === "function");
assert(typeof paginateListPermissions === "function");
assert(typeof paginateListResources === "function");
assert(typeof paginateListTableStorageOptimizers === "function");
assert(typeof paginateListTransactions === "function");
assert(typeof paginateSearchDatabasesByLFTags === "function");
assert(typeof paginateSearchTablesByLFTags === "function");
console.log(`LakeFormation index test passed.`);
