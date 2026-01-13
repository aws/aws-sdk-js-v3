import {
  AccessDeniedException,
  AccessDeniedException$,
  ApiAccess,
  ApplicationPermission,
  AssociateUserToPermissionGroup$,
  AssociateUserToPermissionGroupCommand,
  AssociateUserToPermissionGroupRequest$,
  AssociateUserToPermissionGroupResponse$,
  AwsCredentials$,
  ChangesetErrorInfo$,
  ChangesetSummary$,
  ChangeType,
  ColumnDataType,
  ColumnDefinition$,
  ConflictException,
  ConflictException$,
  CreateChangeset$,
  CreateChangesetCommand,
  CreateChangesetRequest$,
  CreateChangesetResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateDataView$,
  CreateDataViewCommand,
  CreateDataViewRequest$,
  CreateDataViewResponse$,
  CreatePermissionGroup$,
  CreatePermissionGroupCommand,
  CreatePermissionGroupRequest$,
  CreatePermissionGroupResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  Credentials$,
  Dataset$,
  DatasetKind,
  DatasetOwnerInfo$,
  DatasetStatus,
  DataViewDestinationTypeParams$,
  DataViewErrorInfo$,
  DataViewStatus,
  DataViewSummary$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DeletePermissionGroup$,
  DeletePermissionGroupCommand,
  DeletePermissionGroupRequest$,
  DeletePermissionGroupResponse$,
  DisableUser$,
  DisableUserCommand,
  DisableUserRequest$,
  DisableUserResponse$,
  DisassociateUserFromPermissionGroup$,
  DisassociateUserFromPermissionGroupCommand,
  DisassociateUserFromPermissionGroupRequest$,
  DisassociateUserFromPermissionGroupResponse$,
  EnableUser$,
  EnableUserCommand,
  EnableUserRequest$,
  EnableUserResponse$,
  ErrorCategory,
  ExportFileFormat,
  FinspaceData,
  FinspaceDataClient,
  FinspaceDataServiceException,
  GetChangeset$,
  GetChangesetCommand,
  GetChangesetRequest$,
  GetChangesetResponse$,
  GetDataset$,
  GetDatasetCommand,
  GetDatasetRequest$,
  GetDatasetResponse$,
  GetDataView$,
  GetDataViewCommand,
  GetDataViewRequest$,
  GetDataViewResponse$,
  GetExternalDataViewAccessDetails$,
  GetExternalDataViewAccessDetailsCommand,
  GetExternalDataViewAccessDetailsRequest$,
  GetExternalDataViewAccessDetailsResponse$,
  GetPermissionGroup$,
  GetPermissionGroupCommand,
  GetPermissionGroupRequest$,
  GetPermissionGroupResponse$,
  GetProgrammaticAccessCredentials$,
  GetProgrammaticAccessCredentialsCommand,
  GetProgrammaticAccessCredentialsRequest$,
  GetProgrammaticAccessCredentialsResponse$,
  GetUser$,
  GetUserCommand,
  GetUserRequest$,
  GetUserResponse$,
  GetWorkingLocation$,
  GetWorkingLocationCommand,
  GetWorkingLocationRequest$,
  GetWorkingLocationResponse$,
  IngestionStatus,
  InternalServerException,
  InternalServerException$,
  LimitExceededException,
  LimitExceededException$,
  ListChangesets$,
  ListChangesetsCommand,
  ListChangesetsRequest$,
  ListChangesetsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListDataViews$,
  ListDataViewsCommand,
  ListDataViewsRequest$,
  ListDataViewsResponse$,
  ListPermissionGroups$,
  ListPermissionGroupsByUser$,
  ListPermissionGroupsByUserCommand,
  ListPermissionGroupsByUserRequest$,
  ListPermissionGroupsByUserResponse$,
  ListPermissionGroupsCommand,
  ListPermissionGroupsRequest$,
  ListPermissionGroupsResponse$,
  ListUsers$,
  ListUsersByPermissionGroup$,
  ListUsersByPermissionGroupCommand,
  ListUsersByPermissionGroupRequest$,
  ListUsersByPermissionGroupResponse$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  LocationType,
  paginateListChangesets,
  paginateListDatasets,
  paginateListDataViews,
  paginateListPermissionGroups,
  paginateListUsers,
  PermissionGroup$,
  PermissionGroupByUser$,
  PermissionGroupMembershipStatus,
  PermissionGroupParams$,
  ResetUserPassword$,
  ResetUserPasswordCommand,
  ResetUserPasswordRequest$,
  ResetUserPasswordResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePermission$,
  S3Location$,
  SchemaDefinition$,
  SchemaUnion$,
  ThrottlingException,
  ThrottlingException$,
  UpdateChangeset$,
  UpdateChangesetCommand,
  UpdateChangesetRequest$,
  UpdateChangesetResponse$,
  UpdateDataset$,
  UpdateDatasetCommand,
  UpdateDatasetRequest$,
  UpdateDatasetResponse$,
  UpdatePermissionGroup$,
  UpdatePermissionGroupCommand,
  UpdatePermissionGroupRequest$,
  UpdatePermissionGroupResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
  UserByPermissionGroup$,
  UserStatus,
  UserType,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FinspaceDataClient === "function");
assert(typeof FinspaceData === "function");
// commands
assert(typeof AssociateUserToPermissionGroupCommand === "function");
assert(typeof AssociateUserToPermissionGroup$ === "object");
assert(typeof CreateChangesetCommand === "function");
assert(typeof CreateChangeset$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDataViewCommand === "function");
assert(typeof CreateDataView$ === "object");
assert(typeof CreatePermissionGroupCommand === "function");
assert(typeof CreatePermissionGroup$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeletePermissionGroupCommand === "function");
assert(typeof DeletePermissionGroup$ === "object");
assert(typeof DisableUserCommand === "function");
assert(typeof DisableUser$ === "object");
assert(typeof DisassociateUserFromPermissionGroupCommand === "function");
assert(typeof DisassociateUserFromPermissionGroup$ === "object");
assert(typeof EnableUserCommand === "function");
assert(typeof EnableUser$ === "object");
assert(typeof GetChangesetCommand === "function");
assert(typeof GetChangeset$ === "object");
assert(typeof GetDatasetCommand === "function");
assert(typeof GetDataset$ === "object");
assert(typeof GetDataViewCommand === "function");
assert(typeof GetDataView$ === "object");
assert(typeof GetExternalDataViewAccessDetailsCommand === "function");
assert(typeof GetExternalDataViewAccessDetails$ === "object");
assert(typeof GetPermissionGroupCommand === "function");
assert(typeof GetPermissionGroup$ === "object");
assert(typeof GetProgrammaticAccessCredentialsCommand === "function");
assert(typeof GetProgrammaticAccessCredentials$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetWorkingLocationCommand === "function");
assert(typeof GetWorkingLocation$ === "object");
assert(typeof ListChangesetsCommand === "function");
assert(typeof ListChangesets$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListDataViewsCommand === "function");
assert(typeof ListDataViews$ === "object");
assert(typeof ListPermissionGroupsCommand === "function");
assert(typeof ListPermissionGroups$ === "object");
assert(typeof ListPermissionGroupsByUserCommand === "function");
assert(typeof ListPermissionGroupsByUser$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof ListUsersByPermissionGroupCommand === "function");
assert(typeof ListUsersByPermissionGroup$ === "object");
assert(typeof ResetUserPasswordCommand === "function");
assert(typeof ResetUserPassword$ === "object");
assert(typeof UpdateChangesetCommand === "function");
assert(typeof UpdateChangeset$ === "object");
assert(typeof UpdateDatasetCommand === "function");
assert(typeof UpdateDataset$ === "object");
assert(typeof UpdatePermissionGroupCommand === "function");
assert(typeof UpdatePermissionGroup$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof AssociateUserToPermissionGroupRequest$ === "object");
assert(typeof AssociateUserToPermissionGroupResponse$ === "object");
assert(typeof AwsCredentials$ === "object");
assert(typeof ChangesetErrorInfo$ === "object");
assert(typeof ChangesetSummary$ === "object");
assert(typeof ColumnDefinition$ === "object");
assert(typeof CreateChangesetRequest$ === "object");
assert(typeof CreateChangesetResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateDataViewRequest$ === "object");
assert(typeof CreateDataViewResponse$ === "object");
assert(typeof CreatePermissionGroupRequest$ === "object");
assert(typeof CreatePermissionGroupResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DatasetOwnerInfo$ === "object");
assert(typeof DataViewDestinationTypeParams$ === "object");
assert(typeof DataViewErrorInfo$ === "object");
assert(typeof DataViewSummary$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DeletePermissionGroupRequest$ === "object");
assert(typeof DeletePermissionGroupResponse$ === "object");
assert(typeof DisableUserRequest$ === "object");
assert(typeof DisableUserResponse$ === "object");
assert(typeof DisassociateUserFromPermissionGroupRequest$ === "object");
assert(typeof DisassociateUserFromPermissionGroupResponse$ === "object");
assert(typeof EnableUserRequest$ === "object");
assert(typeof EnableUserResponse$ === "object");
assert(typeof GetChangesetRequest$ === "object");
assert(typeof GetChangesetResponse$ === "object");
assert(typeof GetDatasetRequest$ === "object");
assert(typeof GetDatasetResponse$ === "object");
assert(typeof GetDataViewRequest$ === "object");
assert(typeof GetDataViewResponse$ === "object");
assert(typeof GetExternalDataViewAccessDetailsRequest$ === "object");
assert(typeof GetExternalDataViewAccessDetailsResponse$ === "object");
assert(typeof GetPermissionGroupRequest$ === "object");
assert(typeof GetPermissionGroupResponse$ === "object");
assert(typeof GetProgrammaticAccessCredentialsRequest$ === "object");
assert(typeof GetProgrammaticAccessCredentialsResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof GetWorkingLocationRequest$ === "object");
assert(typeof GetWorkingLocationResponse$ === "object");
assert(typeof ListChangesetsRequest$ === "object");
assert(typeof ListChangesetsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListDataViewsRequest$ === "object");
assert(typeof ListDataViewsResponse$ === "object");
assert(typeof ListPermissionGroupsByUserRequest$ === "object");
assert(typeof ListPermissionGroupsByUserResponse$ === "object");
assert(typeof ListPermissionGroupsRequest$ === "object");
assert(typeof ListPermissionGroupsResponse$ === "object");
assert(typeof ListUsersByPermissionGroupRequest$ === "object");
assert(typeof ListUsersByPermissionGroupResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof PermissionGroup$ === "object");
assert(typeof PermissionGroupByUser$ === "object");
assert(typeof PermissionGroupParams$ === "object");
assert(typeof ResetUserPasswordRequest$ === "object");
assert(typeof ResetUserPasswordResponse$ === "object");
assert(typeof ResourcePermission$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SchemaDefinition$ === "object");
assert(typeof SchemaUnion$ === "object");
assert(typeof UpdateChangesetRequest$ === "object");
assert(typeof UpdateChangesetResponse$ === "object");
assert(typeof UpdateDatasetRequest$ === "object");
assert(typeof UpdateDatasetResponse$ === "object");
assert(typeof UpdatePermissionGroupRequest$ === "object");
assert(typeof UpdatePermissionGroupResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof UserByPermissionGroup$ === "object");
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
assert(AccessDeniedException.prototype instanceof FinspaceDataServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof FinspaceDataServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof FinspaceDataServiceException);
assert(typeof InternalServerException$ === "object");
assert(LimitExceededException.prototype instanceof FinspaceDataServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FinspaceDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof FinspaceDataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof FinspaceDataServiceException);
assert(typeof ValidationException$ === "object");
assert(FinspaceDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChangesets === "function");
assert(typeof paginateListDataViews === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListPermissionGroups === "function");
assert(typeof paginateListUsers === "function");
console.log(`FinspaceData index test passed.`);
