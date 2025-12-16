import {
  AbortDocumentVersionUpload$,
  AbortDocumentVersionUploadCommand,
  AbortDocumentVersionUploadRequest$,
  ActivateUser$,
  ActivateUserCommand,
  ActivateUserRequest$,
  ActivateUserResponse$,
  Activity$,
  ActivityType,
  AddResourcePermissions$,
  AddResourcePermissionsCommand,
  AddResourcePermissionsRequest$,
  AddResourcePermissionsResponse$,
  AdditionalResponseFieldType,
  BooleanEnumType,
  Comment$,
  CommentMetadata$,
  CommentStatusType,
  CommentVisibilityType,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictingOperationException,
  ConflictingOperationException$,
  ContentCategoryType,
  CreateComment$,
  CreateCommentCommand,
  CreateCommentRequest$,
  CreateCommentResponse$,
  CreateCustomMetadata$,
  CreateCustomMetadataCommand,
  CreateCustomMetadataRequest$,
  CreateCustomMetadataResponse$,
  CreateFolder$,
  CreateFolderCommand,
  CreateFolderRequest$,
  CreateFolderResponse$,
  CreateLabels$,
  CreateLabelsCommand,
  CreateLabelsRequest$,
  CreateLabelsResponse$,
  CreateNotificationSubscription$,
  CreateNotificationSubscriptionCommand,
  CreateNotificationSubscriptionRequest$,
  CreateNotificationSubscriptionResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  CustomMetadataLimitExceededException,
  CustomMetadataLimitExceededException$,
  DateRangeType$,
  DeactivateUser$,
  DeactivateUserCommand,
  DeactivateUserRequest$,
  DeactivatingLastSystemUserException,
  DeactivatingLastSystemUserException$,
  DeleteComment$,
  DeleteCommentCommand,
  DeleteCommentRequest$,
  DeleteCustomMetadata$,
  DeleteCustomMetadataCommand,
  DeleteCustomMetadataRequest$,
  DeleteCustomMetadataResponse$,
  DeleteDocument$,
  DeleteDocumentCommand,
  DeleteDocumentRequest$,
  DeleteDocumentVersion$,
  DeleteDocumentVersionCommand,
  DeleteDocumentVersionRequest$,
  DeleteFolder$,
  DeleteFolderCommand,
  DeleteFolderContents$,
  DeleteFolderContentsCommand,
  DeleteFolderContentsRequest$,
  DeleteFolderRequest$,
  DeleteLabels$,
  DeleteLabelsCommand,
  DeleteLabelsRequest$,
  DeleteLabelsResponse$,
  DeleteNotificationSubscription$,
  DeleteNotificationSubscriptionCommand,
  DeleteNotificationSubscriptionRequest$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DescribeActivities$,
  DescribeActivitiesCommand,
  DescribeActivitiesRequest$,
  DescribeActivitiesResponse$,
  DescribeComments$,
  DescribeCommentsCommand,
  DescribeCommentsRequest$,
  DescribeCommentsResponse$,
  DescribeDocumentVersions$,
  DescribeDocumentVersionsCommand,
  DescribeDocumentVersionsRequest$,
  DescribeDocumentVersionsResponse$,
  DescribeFolderContents$,
  DescribeFolderContentsCommand,
  DescribeFolderContentsRequest$,
  DescribeFolderContentsResponse$,
  DescribeGroups$,
  DescribeGroupsCommand,
  DescribeGroupsRequest$,
  DescribeGroupsResponse$,
  DescribeNotificationSubscriptions$,
  DescribeNotificationSubscriptionsCommand,
  DescribeNotificationSubscriptionsRequest$,
  DescribeNotificationSubscriptionsResponse$,
  DescribeResourcePermissions$,
  DescribeResourcePermissionsCommand,
  DescribeResourcePermissionsRequest$,
  DescribeResourcePermissionsResponse$,
  DescribeRootFolders$,
  DescribeRootFoldersCommand,
  DescribeRootFoldersRequest$,
  DescribeRootFoldersResponse$,
  DescribeUsers$,
  DescribeUsersCommand,
  DescribeUsersRequest$,
  DescribeUsersResponse$,
  DocumentLockedForCommentsException,
  DocumentLockedForCommentsException$,
  DocumentMetadata$,
  DocumentSourceType,
  DocumentStatusType,
  DocumentThumbnailType,
  DocumentVersionMetadata$,
  DocumentVersionStatus,
  DraftUploadOutOfSyncException,
  DraftUploadOutOfSyncException$,
  EntityAlreadyExistsException,
  EntityAlreadyExistsException$,
  EntityNotExistsException,
  EntityNotExistsException$,
  FailedDependencyException,
  FailedDependencyException$,
  Filters$,
  FolderContentType,
  FolderMetadata$,
  GetCurrentUser$,
  GetCurrentUserCommand,
  GetCurrentUserRequest$,
  GetCurrentUserResponse$,
  GetDocument$,
  GetDocumentCommand,
  GetDocumentPath$,
  GetDocumentPathCommand,
  GetDocumentPathRequest$,
  GetDocumentPathResponse$,
  GetDocumentRequest$,
  GetDocumentResponse$,
  GetDocumentVersion$,
  GetDocumentVersionCommand,
  GetDocumentVersionRequest$,
  GetDocumentVersionResponse$,
  GetFolder$,
  GetFolderCommand,
  GetFolderPath$,
  GetFolderPathCommand,
  GetFolderPathRequest$,
  GetFolderPathResponse$,
  GetFolderRequest$,
  GetFolderResponse$,
  GetResources$,
  GetResourcesCommand,
  GetResourcesRequest$,
  GetResourcesResponse$,
  GroupMetadata$,
  IllegalUserStateException,
  IllegalUserStateException$,
  InitiateDocumentVersionUpload$,
  InitiateDocumentVersionUploadCommand,
  InitiateDocumentVersionUploadRequest$,
  InitiateDocumentVersionUploadResponse$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidCommentOperationException,
  InvalidCommentOperationException$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidPasswordException,
  InvalidPasswordException$,
  LanguageCodeType,
  LimitExceededException,
  LimitExceededException$,
  LocaleType,
  LongRangeType$,
  NotificationOptions$,
  OrderByFieldType,
  OrderType,
  Participants$,
  PermissionInfo$,
  Principal$,
  PrincipalRoleType,
  PrincipalType,
  ProhibitedStateException,
  ProhibitedStateException$,
  RemoveAllResourcePermissions$,
  RemoveAllResourcePermissionsCommand,
  RemoveAllResourcePermissionsRequest$,
  RemoveResourcePermission$,
  RemoveResourcePermissionCommand,
  RemoveResourcePermissionRequest$,
  RequestedEntityTooLargeException,
  RequestedEntityTooLargeException$,
  ResourceAlreadyCheckedOutException,
  ResourceAlreadyCheckedOutException$,
  ResourceCollectionType,
  ResourceMetadata$,
  ResourcePath$,
  ResourcePathComponent$,
  ResourceSortType,
  ResourceStateType,
  ResourceType,
  ResponseItem$,
  ResponseItemType,
  RestoreDocumentVersions$,
  RestoreDocumentVersionsCommand,
  RestoreDocumentVersionsRequest$,
  RolePermissionType,
  RoleType,
  SearchCollectionType,
  SearchPrincipalType$,
  SearchQueryScopeType,
  SearchResourceType,
  SearchResources$,
  SearchResourcesCommand,
  SearchResourcesRequest$,
  SearchResourcesResponse$,
  SearchSortResult$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SharePrincipal$,
  ShareResult$,
  ShareStatusType,
  SortOrder,
  StorageLimitExceededException,
  StorageLimitExceededException$,
  StorageLimitWillExceedException,
  StorageLimitWillExceedException$,
  StorageRuleType$,
  StorageType,
  Subscription$,
  SubscriptionProtocolType,
  SubscriptionType,
  TooManyLabelsException,
  TooManyLabelsException$,
  TooManySubscriptionsException,
  TooManySubscriptionsException$,
  UnauthorizedOperationException,
  UnauthorizedOperationException$,
  UnauthorizedResourceAccessException,
  UnauthorizedResourceAccessException$,
  UpdateDocument$,
  UpdateDocumentCommand,
  UpdateDocumentRequest$,
  UpdateDocumentVersion$,
  UpdateDocumentVersionCommand,
  UpdateDocumentVersionRequest$,
  UpdateFolder$,
  UpdateFolderCommand,
  UpdateFolderRequest$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  UploadMetadata$,
  User$,
  UserFilterType,
  UserMetadata$,
  UserSortType,
  UserStatusType,
  UserStorageMetadata$,
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
assert(typeof AbortDocumentVersionUpload$ === "object");
assert(typeof ActivateUserCommand === "function");
assert(typeof ActivateUser$ === "object");
assert(typeof AddResourcePermissionsCommand === "function");
assert(typeof AddResourcePermissions$ === "object");
assert(typeof CreateCommentCommand === "function");
assert(typeof CreateComment$ === "object");
assert(typeof CreateCustomMetadataCommand === "function");
assert(typeof CreateCustomMetadata$ === "object");
assert(typeof CreateFolderCommand === "function");
assert(typeof CreateFolder$ === "object");
assert(typeof CreateLabelsCommand === "function");
assert(typeof CreateLabels$ === "object");
assert(typeof CreateNotificationSubscriptionCommand === "function");
assert(typeof CreateNotificationSubscription$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeactivateUserCommand === "function");
assert(typeof DeactivateUser$ === "object");
assert(typeof DeleteCommentCommand === "function");
assert(typeof DeleteComment$ === "object");
assert(typeof DeleteCustomMetadataCommand === "function");
assert(typeof DeleteCustomMetadata$ === "object");
assert(typeof DeleteDocumentCommand === "function");
assert(typeof DeleteDocument$ === "object");
assert(typeof DeleteDocumentVersionCommand === "function");
assert(typeof DeleteDocumentVersion$ === "object");
assert(typeof DeleteFolderCommand === "function");
assert(typeof DeleteFolder$ === "object");
assert(typeof DeleteFolderContentsCommand === "function");
assert(typeof DeleteFolderContents$ === "object");
assert(typeof DeleteLabelsCommand === "function");
assert(typeof DeleteLabels$ === "object");
assert(typeof DeleteNotificationSubscriptionCommand === "function");
assert(typeof DeleteNotificationSubscription$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DescribeActivitiesCommand === "function");
assert(typeof DescribeActivities$ === "object");
assert(typeof DescribeCommentsCommand === "function");
assert(typeof DescribeComments$ === "object");
assert(typeof DescribeDocumentVersionsCommand === "function");
assert(typeof DescribeDocumentVersions$ === "object");
assert(typeof DescribeFolderContentsCommand === "function");
assert(typeof DescribeFolderContents$ === "object");
assert(typeof DescribeGroupsCommand === "function");
assert(typeof DescribeGroups$ === "object");
assert(typeof DescribeNotificationSubscriptionsCommand === "function");
assert(typeof DescribeNotificationSubscriptions$ === "object");
assert(typeof DescribeResourcePermissionsCommand === "function");
assert(typeof DescribeResourcePermissions$ === "object");
assert(typeof DescribeRootFoldersCommand === "function");
assert(typeof DescribeRootFolders$ === "object");
assert(typeof DescribeUsersCommand === "function");
assert(typeof DescribeUsers$ === "object");
assert(typeof GetCurrentUserCommand === "function");
assert(typeof GetCurrentUser$ === "object");
assert(typeof GetDocumentCommand === "function");
assert(typeof GetDocument$ === "object");
assert(typeof GetDocumentPathCommand === "function");
assert(typeof GetDocumentPath$ === "object");
assert(typeof GetDocumentVersionCommand === "function");
assert(typeof GetDocumentVersion$ === "object");
assert(typeof GetFolderCommand === "function");
assert(typeof GetFolder$ === "object");
assert(typeof GetFolderPathCommand === "function");
assert(typeof GetFolderPath$ === "object");
assert(typeof GetResourcesCommand === "function");
assert(typeof GetResources$ === "object");
assert(typeof InitiateDocumentVersionUploadCommand === "function");
assert(typeof InitiateDocumentVersionUpload$ === "object");
assert(typeof RemoveAllResourcePermissionsCommand === "function");
assert(typeof RemoveAllResourcePermissions$ === "object");
assert(typeof RemoveResourcePermissionCommand === "function");
assert(typeof RemoveResourcePermission$ === "object");
assert(typeof RestoreDocumentVersionsCommand === "function");
assert(typeof RestoreDocumentVersions$ === "object");
assert(typeof SearchResourcesCommand === "function");
assert(typeof SearchResources$ === "object");
assert(typeof UpdateDocumentCommand === "function");
assert(typeof UpdateDocument$ === "object");
assert(typeof UpdateDocumentVersionCommand === "function");
assert(typeof UpdateDocumentVersion$ === "object");
assert(typeof UpdateFolderCommand === "function");
assert(typeof UpdateFolder$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof AbortDocumentVersionUploadRequest$ === "object");
assert(typeof ActivateUserRequest$ === "object");
assert(typeof ActivateUserResponse$ === "object");
assert(typeof Activity$ === "object");
assert(typeof AddResourcePermissionsRequest$ === "object");
assert(typeof AddResourcePermissionsResponse$ === "object");
assert(typeof Comment$ === "object");
assert(typeof CommentMetadata$ === "object");
assert(typeof CreateCommentRequest$ === "object");
assert(typeof CreateCommentResponse$ === "object");
assert(typeof CreateCustomMetadataRequest$ === "object");
assert(typeof CreateCustomMetadataResponse$ === "object");
assert(typeof CreateFolderRequest$ === "object");
assert(typeof CreateFolderResponse$ === "object");
assert(typeof CreateLabelsRequest$ === "object");
assert(typeof CreateLabelsResponse$ === "object");
assert(typeof CreateNotificationSubscriptionRequest$ === "object");
assert(typeof CreateNotificationSubscriptionResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof DateRangeType$ === "object");
assert(typeof DeactivateUserRequest$ === "object");
assert(typeof DeleteCommentRequest$ === "object");
assert(typeof DeleteCustomMetadataRequest$ === "object");
assert(typeof DeleteCustomMetadataResponse$ === "object");
assert(typeof DeleteDocumentRequest$ === "object");
assert(typeof DeleteDocumentVersionRequest$ === "object");
assert(typeof DeleteFolderContentsRequest$ === "object");
assert(typeof DeleteFolderRequest$ === "object");
assert(typeof DeleteLabelsRequest$ === "object");
assert(typeof DeleteLabelsResponse$ === "object");
assert(typeof DeleteNotificationSubscriptionRequest$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DescribeActivitiesRequest$ === "object");
assert(typeof DescribeActivitiesResponse$ === "object");
assert(typeof DescribeCommentsRequest$ === "object");
assert(typeof DescribeCommentsResponse$ === "object");
assert(typeof DescribeDocumentVersionsRequest$ === "object");
assert(typeof DescribeDocumentVersionsResponse$ === "object");
assert(typeof DescribeFolderContentsRequest$ === "object");
assert(typeof DescribeFolderContentsResponse$ === "object");
assert(typeof DescribeGroupsRequest$ === "object");
assert(typeof DescribeGroupsResponse$ === "object");
assert(typeof DescribeNotificationSubscriptionsRequest$ === "object");
assert(typeof DescribeNotificationSubscriptionsResponse$ === "object");
assert(typeof DescribeResourcePermissionsRequest$ === "object");
assert(typeof DescribeResourcePermissionsResponse$ === "object");
assert(typeof DescribeRootFoldersRequest$ === "object");
assert(typeof DescribeRootFoldersResponse$ === "object");
assert(typeof DescribeUsersRequest$ === "object");
assert(typeof DescribeUsersResponse$ === "object");
assert(typeof DocumentMetadata$ === "object");
assert(typeof DocumentVersionMetadata$ === "object");
assert(typeof Filters$ === "object");
assert(typeof FolderMetadata$ === "object");
assert(typeof GetCurrentUserRequest$ === "object");
assert(typeof GetCurrentUserResponse$ === "object");
assert(typeof GetDocumentPathRequest$ === "object");
assert(typeof GetDocumentPathResponse$ === "object");
assert(typeof GetDocumentRequest$ === "object");
assert(typeof GetDocumentResponse$ === "object");
assert(typeof GetDocumentVersionRequest$ === "object");
assert(typeof GetDocumentVersionResponse$ === "object");
assert(typeof GetFolderPathRequest$ === "object");
assert(typeof GetFolderPathResponse$ === "object");
assert(typeof GetFolderRequest$ === "object");
assert(typeof GetFolderResponse$ === "object");
assert(typeof GetResourcesRequest$ === "object");
assert(typeof GetResourcesResponse$ === "object");
assert(typeof GroupMetadata$ === "object");
assert(typeof InitiateDocumentVersionUploadRequest$ === "object");
assert(typeof InitiateDocumentVersionUploadResponse$ === "object");
assert(typeof LongRangeType$ === "object");
assert(typeof NotificationOptions$ === "object");
assert(typeof Participants$ === "object");
assert(typeof PermissionInfo$ === "object");
assert(typeof Principal$ === "object");
assert(typeof RemoveAllResourcePermissionsRequest$ === "object");
assert(typeof RemoveResourcePermissionRequest$ === "object");
assert(typeof ResourceMetadata$ === "object");
assert(typeof ResourcePath$ === "object");
assert(typeof ResourcePathComponent$ === "object");
assert(typeof ResponseItem$ === "object");
assert(typeof RestoreDocumentVersionsRequest$ === "object");
assert(typeof SearchPrincipalType$ === "object");
assert(typeof SearchResourcesRequest$ === "object");
assert(typeof SearchResourcesResponse$ === "object");
assert(typeof SearchSortResult$ === "object");
assert(typeof SharePrincipal$ === "object");
assert(typeof ShareResult$ === "object");
assert(typeof StorageRuleType$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof UpdateDocumentRequest$ === "object");
assert(typeof UpdateDocumentVersionRequest$ === "object");
assert(typeof UpdateFolderRequest$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof UploadMetadata$ === "object");
assert(typeof User$ === "object");
assert(typeof UserMetadata$ === "object");
assert(typeof UserStorageMetadata$ === "object");
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
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictingOperationException.prototype instanceof WorkDocsServiceException);
assert(typeof ConflictingOperationException$ === "object");
assert(CustomMetadataLimitExceededException.prototype instanceof WorkDocsServiceException);
assert(typeof CustomMetadataLimitExceededException$ === "object");
assert(DeactivatingLastSystemUserException.prototype instanceof WorkDocsServiceException);
assert(typeof DeactivatingLastSystemUserException$ === "object");
assert(DocumentLockedForCommentsException.prototype instanceof WorkDocsServiceException);
assert(typeof DocumentLockedForCommentsException$ === "object");
assert(DraftUploadOutOfSyncException.prototype instanceof WorkDocsServiceException);
assert(typeof DraftUploadOutOfSyncException$ === "object");
assert(EntityAlreadyExistsException.prototype instanceof WorkDocsServiceException);
assert(typeof EntityAlreadyExistsException$ === "object");
assert(EntityNotExistsException.prototype instanceof WorkDocsServiceException);
assert(typeof EntityNotExistsException$ === "object");
assert(FailedDependencyException.prototype instanceof WorkDocsServiceException);
assert(typeof FailedDependencyException$ === "object");
assert(IllegalUserStateException.prototype instanceof WorkDocsServiceException);
assert(typeof IllegalUserStateException$ === "object");
assert(InvalidArgumentException.prototype instanceof WorkDocsServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidCommentOperationException.prototype instanceof WorkDocsServiceException);
assert(typeof InvalidCommentOperationException$ === "object");
assert(InvalidOperationException.prototype instanceof WorkDocsServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidPasswordException.prototype instanceof WorkDocsServiceException);
assert(typeof InvalidPasswordException$ === "object");
assert(LimitExceededException.prototype instanceof WorkDocsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ProhibitedStateException.prototype instanceof WorkDocsServiceException);
assert(typeof ProhibitedStateException$ === "object");
assert(RequestedEntityTooLargeException.prototype instanceof WorkDocsServiceException);
assert(typeof RequestedEntityTooLargeException$ === "object");
assert(ResourceAlreadyCheckedOutException.prototype instanceof WorkDocsServiceException);
assert(typeof ResourceAlreadyCheckedOutException$ === "object");
assert(ServiceUnavailableException.prototype instanceof WorkDocsServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(StorageLimitExceededException.prototype instanceof WorkDocsServiceException);
assert(typeof StorageLimitExceededException$ === "object");
assert(StorageLimitWillExceedException.prototype instanceof WorkDocsServiceException);
assert(typeof StorageLimitWillExceedException$ === "object");
assert(TooManyLabelsException.prototype instanceof WorkDocsServiceException);
assert(typeof TooManyLabelsException$ === "object");
assert(TooManySubscriptionsException.prototype instanceof WorkDocsServiceException);
assert(typeof TooManySubscriptionsException$ === "object");
assert(UnauthorizedOperationException.prototype instanceof WorkDocsServiceException);
assert(typeof UnauthorizedOperationException$ === "object");
assert(UnauthorizedResourceAccessException.prototype instanceof WorkDocsServiceException);
assert(typeof UnauthorizedResourceAccessException$ === "object");
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
