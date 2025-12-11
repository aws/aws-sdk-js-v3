import {
  AbortDocumentVersionUploadCommand,
  ActivateUserCommand,
  ActivityType,
  AddResourcePermissionsCommand,
  AdditionalResponseFieldType,
  BooleanEnumType,
  CommentStatusType,
  CommentVisibilityType,
  ConcurrentModificationException,
  ConflictingOperationException,
  ContentCategoryType,
  CreateCommentCommand,
  CreateCustomMetadataCommand,
  CreateFolderCommand,
  CreateLabelsCommand,
  CreateNotificationSubscriptionCommand,
  CreateUserCommand,
  CustomMetadataLimitExceededException,
  DeactivateUserCommand,
  DeactivatingLastSystemUserException,
  DeleteCommentCommand,
  DeleteCustomMetadataCommand,
  DeleteDocumentCommand,
  DeleteDocumentVersionCommand,
  DeleteFolderCommand,
  DeleteFolderContentsCommand,
  DeleteLabelsCommand,
  DeleteNotificationSubscriptionCommand,
  DeleteUserCommand,
  DescribeActivitiesCommand,
  DescribeCommentsCommand,
  DescribeDocumentVersionsCommand,
  DescribeFolderContentsCommand,
  DescribeGroupsCommand,
  DescribeNotificationSubscriptionsCommand,
  DescribeResourcePermissionsCommand,
  DescribeRootFoldersCommand,
  DescribeUsersCommand,
  DocumentLockedForCommentsException,
  DocumentSourceType,
  DocumentStatusType,
  DocumentThumbnailType,
  DocumentVersionStatus,
  DraftUploadOutOfSyncException,
  EntityAlreadyExistsException,
  EntityNotExistsException,
  FailedDependencyException,
  FolderContentType,
  GetCurrentUserCommand,
  GetDocumentCommand,
  GetDocumentPathCommand,
  GetDocumentVersionCommand,
  GetFolderCommand,
  GetFolderPathCommand,
  GetResourcesCommand,
  IllegalUserStateException,
  InitiateDocumentVersionUploadCommand,
  InvalidArgumentException,
  InvalidCommentOperationException,
  InvalidOperationException,
  InvalidPasswordException,
  LanguageCodeType,
  LimitExceededException,
  LocaleType,
  OrderByFieldType,
  OrderType,
  PrincipalRoleType,
  PrincipalType,
  ProhibitedStateException,
  RemoveAllResourcePermissionsCommand,
  RemoveResourcePermissionCommand,
  RequestedEntityTooLargeException,
  ResourceAlreadyCheckedOutException,
  ResourceCollectionType,
  ResourceSortType,
  ResourceStateType,
  ResourceType,
  ResponseItemType,
  RestoreDocumentVersionsCommand,
  RolePermissionType,
  RoleType,
  SearchCollectionType,
  SearchQueryScopeType,
  SearchResourceType,
  SearchResourcesCommand,
  ServiceUnavailableException,
  ShareStatusType,
  SortOrder,
  StorageLimitExceededException,
  StorageLimitWillExceedException,
  StorageType,
  SubscriptionProtocolType,
  SubscriptionType,
  TooManyLabelsException,
  TooManySubscriptionsException,
  UnauthorizedOperationException,
  UnauthorizedResourceAccessException,
  UpdateDocumentCommand,
  UpdateDocumentVersionCommand,
  UpdateFolderCommand,
  UpdateUserCommand,
  UserFilterType,
  UserSortType,
  UserStatusType,
  UserType,
  WorkDocs,
  WorkDocsClient,
  WorkDocsServiceException,
  paginateDescribeActivities,
  paginateDescribeComments,
  paginateDescribeDocumentVersions,
  paginateDescribeFolderContents,
  paginateDescribeGroups,
  paginateDescribeNotificationSubscriptions,
  paginateDescribeResourcePermissions,
  paginateDescribeRootFolders,
  paginateDescribeUsers,
  paginateSearchResources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkDocsClient === "function");
assert(typeof WorkDocs === "function");
// commands
assert(typeof AbortDocumentVersionUploadCommand === "function");
assert(typeof ActivateUserCommand === "function");
assert(typeof AddResourcePermissionsCommand === "function");
assert(typeof CreateCommentCommand === "function");
assert(typeof CreateCustomMetadataCommand === "function");
assert(typeof CreateFolderCommand === "function");
assert(typeof CreateLabelsCommand === "function");
assert(typeof CreateNotificationSubscriptionCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeactivateUserCommand === "function");
assert(typeof DeleteCommentCommand === "function");
assert(typeof DeleteCustomMetadataCommand === "function");
assert(typeof DeleteDocumentCommand === "function");
assert(typeof DeleteDocumentVersionCommand === "function");
assert(typeof DeleteFolderCommand === "function");
assert(typeof DeleteFolderContentsCommand === "function");
assert(typeof DeleteLabelsCommand === "function");
assert(typeof DeleteNotificationSubscriptionCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DescribeActivitiesCommand === "function");
assert(typeof DescribeCommentsCommand === "function");
assert(typeof DescribeDocumentVersionsCommand === "function");
assert(typeof DescribeFolderContentsCommand === "function");
assert(typeof DescribeGroupsCommand === "function");
assert(typeof DescribeNotificationSubscriptionsCommand === "function");
assert(typeof DescribeResourcePermissionsCommand === "function");
assert(typeof DescribeRootFoldersCommand === "function");
assert(typeof DescribeUsersCommand === "function");
assert(typeof GetCurrentUserCommand === "function");
assert(typeof GetDocumentCommand === "function");
assert(typeof GetDocumentPathCommand === "function");
assert(typeof GetDocumentVersionCommand === "function");
assert(typeof GetFolderCommand === "function");
assert(typeof GetFolderPathCommand === "function");
assert(typeof GetResourcesCommand === "function");
assert(typeof InitiateDocumentVersionUploadCommand === "function");
assert(typeof RemoveAllResourcePermissionsCommand === "function");
assert(typeof RemoveResourcePermissionCommand === "function");
assert(typeof RestoreDocumentVersionsCommand === "function");
assert(typeof SearchResourcesCommand === "function");
assert(typeof UpdateDocumentCommand === "function");
assert(typeof UpdateDocumentVersionCommand === "function");
assert(typeof UpdateFolderCommand === "function");
assert(typeof UpdateUserCommand === "function");
// enums
assert(typeof ActivityType === "object");
assert(typeof AdditionalResponseFieldType === "object");
assert(typeof BooleanEnumType === "object");
assert(typeof CommentStatusType === "object");
assert(typeof CommentVisibilityType === "object");
assert(typeof ContentCategoryType === "object");
assert(typeof DocumentSourceType === "object");
assert(typeof DocumentStatusType === "object");
assert(typeof DocumentThumbnailType === "object");
assert(typeof DocumentVersionStatus === "object");
assert(typeof FolderContentType === "object");
assert(typeof LanguageCodeType === "object");
assert(typeof LocaleType === "object");
assert(typeof OrderByFieldType === "object");
assert(typeof OrderType === "object");
assert(typeof PrincipalRoleType === "object");
assert(typeof PrincipalType === "object");
assert(typeof ResourceCollectionType === "object");
assert(typeof ResourceSortType === "object");
assert(typeof ResourceStateType === "object");
assert(typeof ResourceType === "object");
assert(typeof ResponseItemType === "object");
assert(typeof RolePermissionType === "object");
assert(typeof RoleType === "object");
assert(typeof SearchCollectionType === "object");
assert(typeof SearchQueryScopeType === "object");
assert(typeof SearchResourceType === "object");
assert(typeof ShareStatusType === "object");
assert(typeof SortOrder === "object");
assert(typeof StorageType === "object");
assert(typeof SubscriptionProtocolType === "object");
assert(typeof SubscriptionType === "object");
assert(typeof UserFilterType === "object");
assert(typeof UserSortType === "object");
assert(typeof UserStatusType === "object");
assert(typeof UserType === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof WorkDocsServiceException);
assert(ConflictingOperationException.prototype instanceof WorkDocsServiceException);
assert(CustomMetadataLimitExceededException.prototype instanceof WorkDocsServiceException);
assert(DeactivatingLastSystemUserException.prototype instanceof WorkDocsServiceException);
assert(DocumentLockedForCommentsException.prototype instanceof WorkDocsServiceException);
assert(DraftUploadOutOfSyncException.prototype instanceof WorkDocsServiceException);
assert(EntityAlreadyExistsException.prototype instanceof WorkDocsServiceException);
assert(EntityNotExistsException.prototype instanceof WorkDocsServiceException);
assert(FailedDependencyException.prototype instanceof WorkDocsServiceException);
assert(IllegalUserStateException.prototype instanceof WorkDocsServiceException);
assert(InvalidArgumentException.prototype instanceof WorkDocsServiceException);
assert(InvalidCommentOperationException.prototype instanceof WorkDocsServiceException);
assert(InvalidOperationException.prototype instanceof WorkDocsServiceException);
assert(InvalidPasswordException.prototype instanceof WorkDocsServiceException);
assert(LimitExceededException.prototype instanceof WorkDocsServiceException);
assert(ProhibitedStateException.prototype instanceof WorkDocsServiceException);
assert(RequestedEntityTooLargeException.prototype instanceof WorkDocsServiceException);
assert(ResourceAlreadyCheckedOutException.prototype instanceof WorkDocsServiceException);
assert(ServiceUnavailableException.prototype instanceof WorkDocsServiceException);
assert(StorageLimitExceededException.prototype instanceof WorkDocsServiceException);
assert(StorageLimitWillExceedException.prototype instanceof WorkDocsServiceException);
assert(TooManyLabelsException.prototype instanceof WorkDocsServiceException);
assert(TooManySubscriptionsException.prototype instanceof WorkDocsServiceException);
assert(UnauthorizedOperationException.prototype instanceof WorkDocsServiceException);
assert(UnauthorizedResourceAccessException.prototype instanceof WorkDocsServiceException);
assert(WorkDocsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeActivities === "function");
assert(typeof paginateDescribeComments === "function");
assert(typeof paginateDescribeDocumentVersions === "function");
assert(typeof paginateDescribeFolderContents === "function");
assert(typeof paginateDescribeGroups === "function");
assert(typeof paginateDescribeNotificationSubscriptions === "function");
assert(typeof paginateDescribeResourcePermissions === "function");
assert(typeof paginateDescribeRootFolders === "function");
assert(typeof paginateDescribeUsers === "function");
assert(typeof paginateSearchResources === "function");
console.log(`WorkDocs index test passed.`);
