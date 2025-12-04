import {
  ApiAccess,
  ApplicationPermission,
  AssociateUserToPermissionGroupCommand,
  ChangeType,
  ColumnDataType,
  CreateChangesetCommand,
  CreateDataViewCommand,
  CreateDatasetCommand,
  CreatePermissionGroupCommand,
  CreateUserCommand,
  DataViewStatus,
  DatasetKind,
  DatasetStatus,
  DeleteDatasetCommand,
  DeletePermissionGroupCommand,
  DisableUserCommand,
  DisassociateUserFromPermissionGroupCommand,
  EnableUserCommand,
  ErrorCategory,
  ExportFileFormat,
  FinspaceData,
  FinspaceDataClient,
  FinspaceDataServiceException,
  GetChangesetCommand,
  GetDataViewCommand,
  GetDatasetCommand,
  GetExternalDataViewAccessDetailsCommand,
  GetPermissionGroupCommand,
  GetProgrammaticAccessCredentialsCommand,
  GetUserCommand,
  GetWorkingLocationCommand,
  IngestionStatus,
  ListChangesetsCommand,
  ListDataViewsCommand,
  ListDatasetsCommand,
  ListPermissionGroupsByUserCommand,
  ListPermissionGroupsCommand,
  ListUsersByPermissionGroupCommand,
  ListUsersCommand,
  LocationType,
  PermissionGroupMembershipStatus,
  ResetUserPasswordCommand,
  UpdateChangesetCommand,
  UpdateDatasetCommand,
  UpdatePermissionGroupCommand,
  UpdateUserCommand,
  UserStatus,
  UserType,
  paginateListChangesets,
  paginateListDataViews,
  paginateListDatasets,
  paginateListPermissionGroups,
  paginateListUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FinspaceDataClient === "function")
assert(typeof FinspaceData === "function")
// commands
assert(typeof AssociateUserToPermissionGroupCommand === "function")
assert(typeof CreateChangesetCommand === "function")
assert(typeof CreateDatasetCommand === "function")
assert(typeof CreateDataViewCommand === "function")
assert(typeof CreatePermissionGroupCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof DeleteDatasetCommand === "function")
assert(typeof DeletePermissionGroupCommand === "function")
assert(typeof DisableUserCommand === "function")
assert(typeof DisassociateUserFromPermissionGroupCommand === "function")
assert(typeof EnableUserCommand === "function")
assert(typeof GetChangesetCommand === "function")
assert(typeof GetDatasetCommand === "function")
assert(typeof GetDataViewCommand === "function")
assert(typeof GetExternalDataViewAccessDetailsCommand === "function")
assert(typeof GetPermissionGroupCommand === "function")
assert(typeof GetProgrammaticAccessCredentialsCommand === "function")
assert(typeof GetUserCommand === "function")
assert(typeof GetWorkingLocationCommand === "function")
assert(typeof ListChangesetsCommand === "function")
assert(typeof ListDatasetsCommand === "function")
assert(typeof ListDataViewsCommand === "function")
assert(typeof ListPermissionGroupsCommand === "function")
assert(typeof ListPermissionGroupsByUserCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof ListUsersByPermissionGroupCommand === "function")
assert(typeof ResetUserPasswordCommand === "function")
assert(typeof UpdateChangesetCommand === "function")
assert(typeof UpdateDatasetCommand === "function")
assert(typeof UpdatePermissionGroupCommand === "function")
assert(typeof UpdateUserCommand === "function")
// enums
assert(typeof ApiAccess === "object");
assert(typeof ApplicationPermission === "object");
assert(typeof ChangeType === "object");
assert(typeof ColumnDataType === "object");
assert(typeof DatasetKind === "object");
assert(typeof DatasetStatus === "object");
assert(typeof DataViewStatus === "object");
assert(typeof ErrorCategory === "object");
assert(typeof ExportFileFormat === "object");
assert(typeof IngestionStatus === "object");
assert(typeof LocationType === "object");
assert(typeof PermissionGroupMembershipStatus === "object");
assert(typeof UserStatus === "object");
assert(typeof UserType === "object");
// errors
assert(FinspaceDataServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChangesets === "function")
assert(typeof paginateListDataViews === "function")
assert(typeof paginateListDatasets === "function")
assert(typeof paginateListPermissionGroups === "function")
assert(typeof paginateListUsers === "function")
console.log(`FinspaceData index test passed.`);
