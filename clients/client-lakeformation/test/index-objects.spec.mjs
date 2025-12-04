import {
  AddLFTagsToResourceCommand,
  ApplicationStatus,
  AssumeDecoratedRoleWithSAMLCommand,
  BatchGrantPermissionsCommand,
  BatchRevokePermissionsCommand,
  CancelTransactionCommand,
  CommitTransactionCommand,
  ComparisonOperator,
  CreateDataCellsFilterCommand,
  CreateLFTagCommand,
  CreateLFTagExpressionCommand,
  CreateLakeFormationIdentityCenterConfigurationCommand,
  CreateLakeFormationOptInCommand,
  DataLakeResourceType,
  DeleteDataCellsFilterCommand,
  DeleteLFTagCommand,
  DeleteLFTagExpressionCommand,
  DeleteLakeFormationIdentityCenterConfigurationCommand,
  DeleteLakeFormationOptInCommand,
  DeleteObjectsOnCancelCommand,
  DeregisterResourceCommand,
  DescribeLakeFormationIdentityCenterConfigurationCommand,
  DescribeResourceCommand,
  DescribeTransactionCommand,
  EnableStatus,
  ExtendTransactionCommand,
  FieldNameString,
  GetDataCellsFilterCommand,
  GetDataLakePrincipalCommand,
  GetDataLakeSettingsCommand,
  GetEffectivePermissionsForPathCommand,
  GetLFTagCommand,
  GetLFTagExpressionCommand,
  GetQueryStateCommand,
  GetQueryStatisticsCommand,
  GetResourceLFTagsCommand,
  GetTableObjectsCommand,
  GetTemporaryGluePartitionCredentialsCommand,
  GetTemporaryGlueTableCredentialsCommand,
  GetWorkUnitResultsCommand,
  GetWorkUnitsCommand,
  GrantPermissionsCommand,
  LakeFormation,
  LakeFormationClient,
  LakeFormationServiceException,
  ListDataCellsFilterCommand,
  ListLFTagExpressionsCommand,
  ListLFTagsCommand,
  ListLakeFormationOptInsCommand,
  ListPermissionsCommand,
  ListResourcesCommand,
  ListTableStorageOptimizersCommand,
  ListTransactionsCommand,
  OptimizerType,
  Permission,
  PermissionType,
  PutDataLakeSettingsCommand,
  QueryStateString,
  RegisterResourceCommand,
  RemoveLFTagsFromResourceCommand,
  ResourceShareType,
  ResourceType,
  RevokePermissionsCommand,
  SearchDatabasesByLFTagsCommand,
  SearchTablesByLFTagsCommand,
  ServiceAuthorization,
  StartQueryPlanningCommand,
  StartTransactionCommand,
  TransactionStatus,
  TransactionStatusFilter,
  TransactionType,
  UpdateDataCellsFilterCommand,
  UpdateLFTagCommand,
  UpdateLFTagExpressionCommand,
  UpdateLakeFormationIdentityCenterConfigurationCommand,
  UpdateResourceCommand,
  UpdateTableObjectsCommand,
  UpdateTableStorageOptimizerCommand,
  paginateGetEffectivePermissionsForPath,
  paginateGetTableObjects,
  paginateGetWorkUnits,
  paginateListDataCellsFilter,
  paginateListLFTagExpressions,
  paginateListLFTags,
  paginateListLakeFormationOptIns,
  paginateListPermissions,
  paginateListResources,
  paginateListTableStorageOptimizers,
  paginateListTransactions,
  paginateSearchDatabasesByLFTags,
  paginateSearchTablesByLFTags,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LakeFormationClient === "function")
assert(typeof LakeFormation === "function")
// commands
assert(typeof AddLFTagsToResourceCommand === "function")
assert(typeof AssumeDecoratedRoleWithSAMLCommand === "function")
assert(typeof BatchGrantPermissionsCommand === "function")
assert(typeof BatchRevokePermissionsCommand === "function")
assert(typeof CancelTransactionCommand === "function")
assert(typeof CommitTransactionCommand === "function")
assert(typeof CreateDataCellsFilterCommand === "function")
assert(typeof CreateLakeFormationIdentityCenterConfigurationCommand === "function")
assert(typeof CreateLakeFormationOptInCommand === "function")
assert(typeof CreateLFTagCommand === "function")
assert(typeof CreateLFTagExpressionCommand === "function")
assert(typeof DeleteDataCellsFilterCommand === "function")
assert(typeof DeleteLakeFormationIdentityCenterConfigurationCommand === "function")
assert(typeof DeleteLakeFormationOptInCommand === "function")
assert(typeof DeleteLFTagCommand === "function")
assert(typeof DeleteLFTagExpressionCommand === "function")
assert(typeof DeleteObjectsOnCancelCommand === "function")
assert(typeof DeregisterResourceCommand === "function")
assert(typeof DescribeLakeFormationIdentityCenterConfigurationCommand === "function")
assert(typeof DescribeResourceCommand === "function")
assert(typeof DescribeTransactionCommand === "function")
assert(typeof ExtendTransactionCommand === "function")
assert(typeof GetDataCellsFilterCommand === "function")
assert(typeof GetDataLakePrincipalCommand === "function")
assert(typeof GetDataLakeSettingsCommand === "function")
assert(typeof GetEffectivePermissionsForPathCommand === "function")
assert(typeof GetLFTagCommand === "function")
assert(typeof GetLFTagExpressionCommand === "function")
assert(typeof GetQueryStateCommand === "function")
assert(typeof GetQueryStatisticsCommand === "function")
assert(typeof GetResourceLFTagsCommand === "function")
assert(typeof GetTableObjectsCommand === "function")
assert(typeof GetTemporaryGluePartitionCredentialsCommand === "function")
assert(typeof GetTemporaryGlueTableCredentialsCommand === "function")
assert(typeof GetWorkUnitResultsCommand === "function")
assert(typeof GetWorkUnitsCommand === "function")
assert(typeof GrantPermissionsCommand === "function")
assert(typeof ListDataCellsFilterCommand === "function")
assert(typeof ListLakeFormationOptInsCommand === "function")
assert(typeof ListLFTagExpressionsCommand === "function")
assert(typeof ListLFTagsCommand === "function")
assert(typeof ListPermissionsCommand === "function")
assert(typeof ListResourcesCommand === "function")
assert(typeof ListTableStorageOptimizersCommand === "function")
assert(typeof ListTransactionsCommand === "function")
assert(typeof PutDataLakeSettingsCommand === "function")
assert(typeof RegisterResourceCommand === "function")
assert(typeof RemoveLFTagsFromResourceCommand === "function")
assert(typeof RevokePermissionsCommand === "function")
assert(typeof SearchDatabasesByLFTagsCommand === "function")
assert(typeof SearchTablesByLFTagsCommand === "function")
assert(typeof StartQueryPlanningCommand === "function")
assert(typeof StartTransactionCommand === "function")
assert(typeof UpdateDataCellsFilterCommand === "function")
assert(typeof UpdateLakeFormationIdentityCenterConfigurationCommand === "function")
assert(typeof UpdateLFTagCommand === "function")
assert(typeof UpdateLFTagExpressionCommand === "function")
assert(typeof UpdateResourceCommand === "function")
assert(typeof UpdateTableObjectsCommand === "function")
assert(typeof UpdateTableStorageOptimizerCommand === "function")
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
assert(LakeFormationServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetEffectivePermissionsForPath === "function")
assert(typeof paginateGetTableObjects === "function")
assert(typeof paginateGetWorkUnits === "function")
assert(typeof paginateListDataCellsFilter === "function")
assert(typeof paginateListLFTagExpressions === "function")
assert(typeof paginateListLFTags === "function")
assert(typeof paginateListLakeFormationOptIns === "function")
assert(typeof paginateListPermissions === "function")
assert(typeof paginateListResources === "function")
assert(typeof paginateListTableStorageOptimizers === "function")
assert(typeof paginateListTransactions === "function")
assert(typeof paginateSearchDatabasesByLFTags === "function")
assert(typeof paginateSearchTablesByLFTags === "function")
console.log(`LakeFormation index test passed.`);
