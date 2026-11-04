// smithy-typescript generated code
import type {
  ActivityType,
  AdditionalResponseFieldType,
  BooleanEnumType,
  CommentStatusType,
  CommentVisibilityType,
  ContentCategoryType,
  DocumentSourceType,
  DocumentStatusType,
  DocumentThumbnailType,
  DocumentVersionStatus,
  FolderContentType,
  LanguageCodeType,
  LocaleType,
  OrderByFieldType,
  OrderType,
  PrincipalRoleType,
  PrincipalType,
  ResourceCollectionType,
  ResourceSortType,
  ResourceStateType,
  ResourceType,
  ResponseItemType,
  RolePermissionType,
  RoleType,
  SearchCollectionType,
  SearchQueryScopeType,
  SearchResourceType,
  ShareStatusType,
  SortOrder,
  StorageType,
  SubscriptionProtocolType,
  SubscriptionType,
  UserFilterType,
  UserSortType,
  UserStatusType,
  UserType,
} from "./enums";

/**
 * @public
 */
export interface AbortDocumentVersionUploadRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The ID of the version.
   *
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface ActivateUserRequest {
  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * Describes the storage for a user.
 *
 * @public
 */
export interface StorageRuleType {
  /**
   * The amount of storage allocated, in bytes.
   *
   * @public
   */
  StorageAllocatedInBytes?: number | undefined;

  /**
   * The type of storage.
   *
   * @public
   */
  StorageType?: StorageType | undefined;
}

/**
 * Describes the storage for a user.
 *
 * @public
 */
export interface UserStorageMetadata {
  /**
   * The amount of storage used, in bytes.
   *
   * @public
   */
  StorageUtilizedInBytes?: number | undefined;

  /**
   * The storage for a user.
   *
   * @public
   */
  StorageRule?: StorageRuleType | undefined;
}

/**
 * Describes a user.
 *
 * @public
 */
export interface User {
  /**
   * The ID of the user.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The login name of the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The given name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The surname of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The ID of the root folder.
   *
   * @public
   */
  RootFolderId?: string | undefined;

  /**
   * The ID of the recycle bin folder.
   *
   * @public
   */
  RecycleBinFolderId?: string | undefined;

  /**
   * The status of the user.
   *
   * @public
   */
  Status?: UserStatusType | undefined;

  /**
   * The type of user.
   *
   * @public
   */
  Type?: UserType | undefined;

  /**
   * The time when the user was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time when the user was modified.
   *
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * The time zone ID of the user.
   *
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * The locale of the user.
   *
   * @public
   */
  Locale?: LocaleType | undefined;

  /**
   * The storage for the user.
   *
   * @public
   */
  Storage?: UserStorageMetadata | undefined;
}

/**
 * @public
 */
export interface ActivateUserResponse {
  /**
   * The user information.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * Describes the metadata of a comment.
 *
 * @public
 */
export interface CommentMetadata {
  /**
   * The ID of the comment.
   *
   * @public
   */
  CommentId?: string | undefined;

  /**
   * The user who made the comment.
   *
   * @public
   */
  Contributor?: User | undefined;

  /**
   * The timestamp that the comment was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The status of the comment.
   *
   * @public
   */
  CommentStatus?: CommentStatusType | undefined;

  /**
   * The ID of the user being replied to.
   *
   * @public
   */
  RecipientId?: string | undefined;

  /**
   * The ID of the user who made the comment.
   *
   * @public
   */
  ContributorId?: string | undefined;
}

/**
 * Describes the metadata of the user.
 *
 * @public
 */
export interface UserMetadata {
  /**
   * The ID of the user.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the user.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The given name of the user before a rename operation.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The surname of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * Describes the metadata of a resource.
 *
 * @public
 */
export interface ResourceMetadata {
  /**
   * The type of resource.
   *
   * @public
   */
  Type?: ResourceType | undefined;

  /**
   * The name of the resource.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The original name of the resource before a rename operation.
   *
   * @public
   */
  OriginalName?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The version ID of the resource. This is an optional field and is filled for action on document version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The owner of the resource.
   *
   * @public
   */
  Owner?: UserMetadata | undefined;

  /**
   * The parent ID of the resource before a rename operation.
   *
   * @public
   */
  ParentId?: string | undefined;
}

/**
 * Describes the metadata of a user group.
 *
 * @public
 */
export interface GroupMetadata {
  /**
   * The ID of the user group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the users or user groups.
 *
 * @public
 */
export interface Participants {
  /**
   * The list of users.
   *
   * @public
   */
  Users?: UserMetadata[] | undefined;

  /**
   * The list of user groups.
   *
   * @public
   */
  Groups?: GroupMetadata[] | undefined;
}

/**
 * Describes the activity information.
 *
 * @public
 */
export interface Activity {
  /**
   * The activity type.
   *
   * @public
   */
  Type?: ActivityType | undefined;

  /**
   * The timestamp when the action was performed.
   *
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * Indicates whether an activity is indirect or direct. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).
   *
   * @public
   */
  IsIndirectActivity?: boolean | undefined;

  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The user who performed the action.
   *
   * @public
   */
  Initiator?: UserMetadata | undefined;

  /**
   * The list of users or groups impacted by this action. This is an optional field and is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.
   *
   * @public
   */
  Participants?: Participants | undefined;

  /**
   * The metadata of the resource involved in the user action.
   *
   * @public
   */
  ResourceMetadata?: ResourceMetadata | undefined;

  /**
   * The original parent of the resource. This is an optional field and is filled for move activities.
   *
   * @public
   */
  OriginalParent?: ResourceMetadata | undefined;

  /**
   * Metadata of the commenting activity. This is an optional field and is filled for commenting activities.
   *
   * @public
   */
  CommentMetadata?: CommentMetadata | undefined;
}

/**
 * Set of options which defines notification preferences of given action.
 *
 * @public
 */
export interface NotificationOptions {
  /**
   * Boolean value to indicate an email notification should be sent to the recipients.
   *
   * @public
   */
  SendEmail?: boolean | undefined;

  /**
   * Text value to be included in the email body.
   *
   * @public
   */
  EmailMessage?: string | undefined;
}

/**
 * Describes the recipient type and ID, if available.
 *
 * @public
 */
export interface SharePrincipal {
  /**
   * The ID of the recipient.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of the recipient.
   *
   * @public
   */
  Type: PrincipalType | undefined;

  /**
   * The role of the recipient.
   *
   * @public
   */
  Role: RoleType | undefined;
}

/**
 * @public
 */
export interface AddResourcePermissionsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The users, groups, or organization being granted permission.
   *
   * @public
   */
  Principals: SharePrincipal[] | undefined;

  /**
   * The notification options.
   *
   * @public
   */
  NotificationOptions?: NotificationOptions | undefined;
}

/**
 * Describes the share results of a resource.
 *
 * @public
 */
export interface ShareResult {
  /**
   * The ID of the principal.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The ID of the invited user.
   *
   * @public
   */
  InviteePrincipalId?: string | undefined;

  /**
   * The role.
   *
   * @public
   */
  Role?: RoleType | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: ShareStatusType | undefined;

  /**
   * The ID of the resource that was shared.
   *
   * @public
   */
  ShareId?: string | undefined;

  /**
   * The status message.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AddResourcePermissionsResponse {
  /**
   * The share results.
   *
   * @public
   */
  ShareResults?: ShareResult[] | undefined;
}

/**
 * @public
 */
export interface CreateCommentRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The ID of the document version.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * The ID of the parent comment.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * The ID of the root comment in the thread.
   *
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * The text of the comment.
   *
   * @public
   */
  Text: string | undefined;

  /**
   * The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.
   *
   * @public
   */
  Visibility?: CommentVisibilityType | undefined;

  /**
   * Set this parameter to TRUE to send an email out to the document collaborators after the comment is created.
   *
   * @public
   */
  NotifyCollaborators?: boolean | undefined;
}

/**
 * Describes a comment.
 *
 * @public
 */
export interface Comment {
  /**
   * The ID of the comment.
   *
   * @public
   */
  CommentId: string | undefined;

  /**
   * The ID of the parent comment.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * The ID of the root comment in the thread.
   *
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * The text of the comment.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The details of the user who made the comment.
   *
   * @public
   */
  Contributor?: User | undefined;

  /**
   * The time that the comment was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The status of the comment.
   *
   * @public
   */
  Status?: CommentStatusType | undefined;

  /**
   * The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.
   *
   * @public
   */
  Visibility?: CommentVisibilityType | undefined;

  /**
   * If the comment is a reply to another user's comment, this field contains the user ID of the user being replied to.
   *
   * @public
   */
  RecipientId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCommentResponse {
  /**
   * The comment that has been created.
   *
   * @public
   */
  Comment?: Comment | undefined;
}

/**
 * @public
 */
export interface CreateCustomMetadataRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The ID of the version, if the custom metadata is being added to a document version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Custom metadata in the form of name-value pairs.
   *
   * @public
   */
  CustomMetadata: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCustomMetadataResponse {}

/**
 * @public
 */
export interface CreateFolderRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The name of the new folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId: string | undefined;
}

/**
 * Describes a folder.
 *
 * @public
 */
export interface FolderMetadata {
  /**
   * The ID of the folder.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the creator.
   *
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * The time when the folder was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time when the folder was updated.
   *
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * The resource state of the folder.
   *
   * @public
   */
  ResourceState?: ResourceStateType | undefined;

  /**
   * The unique identifier created from the subfolders and documents of the folder.
   *
   * @public
   */
  Signature?: string | undefined;

  /**
   * List of labels on the folder.
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * The size of the folder metadata.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The size of the latest version of the folder metadata.
   *
   * @public
   */
  LatestVersionSize?: number | undefined;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * The metadata of the folder.
   *
   * @public
   */
  Metadata?: FolderMetadata | undefined;
}

/**
 * @public
 */
export interface CreateLabelsRequest {
  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * List of labels to add to the resource.
   *
   * @public
   */
  Labels: string[] | undefined;

  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLabelsResponse {}

/**
 * @public
 */
export interface CreateNotificationSubscriptionRequest {
  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with `https`.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST.
   *
   * @public
   */
  Protocol: SubscriptionProtocolType | undefined;

  /**
   * The notification type.
   *
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;
}

/**
 * Describes a subscription.
 *
 * @public
 */
export interface Subscription {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * The endpoint of the subscription.
   *
   * @public
   */
  EndPoint?: string | undefined;

  /**
   * The protocol of the subscription.
   *
   * @public
   */
  Protocol?: SubscriptionProtocolType | undefined;
}

/**
 * @public
 */
export interface CreateNotificationSubscriptionResponse {
  /**
   * The subscription.
   *
   * @public
   */
  Subscription?: Subscription | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The login name of the user.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The given name of the user.
   *
   * @public
   */
  GivenName: string | undefined;

  /**
   * The surname of the user.
   *
   * @public
   */
  Surname: string | undefined;

  /**
   * The password of the user.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * The time zone ID of the user.
   *
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * The amount of storage for the user.
   *
   * @public
   */
  StorageRule?: StorageRuleType | undefined;

  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * The user information.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeactivateUserRequest {
  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommentRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The ID of the document version.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * The ID of the comment.
   *
   * @public
   */
  CommentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomMetadataRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource, either a document or folder.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The ID of the version, if the custom metadata is being deleted from a document version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * List of properties to remove.
   *
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * Flag to indicate removal of all custom metadata properties from the specified resource.
   *
   * @public
   */
  DeleteAll?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteCustomMetadataResponse {}

/**
 * @public
 */
export interface DeleteDocumentRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentVersionRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document associated with the version being deleted.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The ID of the version being deleted.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * Deletes all versions of a document prior to the current version.
   *
   * @public
   */
  DeletePriorVersions: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFolderRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderContentsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelsRequest {
  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * List of labels to delete from the resource.
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * Flag to request removal of all labels from the specified resource.
   *
   * @public
   */
  DeleteAll?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteLabelsResponse {}

/**
 * @public
 */
export interface DeleteNotificationSubscriptionRequest {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  SubscriptionId: string | undefined;

  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using Amazon Web Services credentials.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivitiesRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * Specifies which activity types to include in the response. If this field is left empty, all activity types are returned.
   *
   * @public
   */
  ActivityTypes?: string | undefined;

  /**
   * The document or folder ID for which to describe activity types.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).
   *
   * @public
   */
  IncludeIndirectActivities?: boolean | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivitiesResponse {
  /**
   * The list of activities for the specified user and time period.
   *
   * @public
   */
  UserActivities?: Activity[] | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommentsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The ID of the document version.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results. This marker was received from a previous call.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommentsResponse {
  /**
   * The list of comments for the specified document version.
   *
   * @public
   */
  Comments?: Comment[] | undefined;

  /**
   * The marker for the next set of results. This marker was received from a previous call.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentVersionsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of versions to return with this call.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.
   *
   * @public
   */
  Include?: string | undefined;

  /**
   * Specify "SOURCE" to include initialized versions and a URL for the source document.
   *
   * @public
   */
  Fields?: string | undefined;
}

/**
 * Describes a version of a document.
 *
 * @public
 */
export interface DocumentVersionMetadata {
  /**
   * The ID of the version.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the version.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The content type of the document.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The size of the document, in bytes.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The signature of the document.
   *
   * @public
   */
  Signature?: string | undefined;

  /**
   * The status of the document.
   *
   * @public
   */
  Status?: DocumentStatusType | undefined;

  /**
   * The timestamp when the document was first uploaded.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp when the document was last uploaded.
   *
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * The timestamp when the content of the document was originally created.
   *
   * @public
   */
  ContentCreatedTimestamp?: Date | undefined;

  /**
   * The timestamp when the content of the document was modified.
   *
   * @public
   */
  ContentModifiedTimestamp?: Date | undefined;

  /**
   * The ID of the creator.
   *
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * The thumbnail of the document.
   *
   * @public
   */
  Thumbnail?: Partial<Record<DocumentThumbnailType, string>> | undefined;

  /**
   * The source of the document.
   *
   * @public
   */
  Source?: Partial<Record<DocumentSourceType, string>> | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentVersionsResponse {
  /**
   * The document versions.
   *
   * @public
   */
  DocumentVersions?: DocumentVersionMetadata[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderContentsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The sorting criteria.
   *
   * @public
   */
  Sort?: ResourceSortType | undefined;

  /**
   * The order for the contents of the folder.
   *
   * @public
   */
  Order?: OrderType | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results. This marker was received from a previous call.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The type of items.
   *
   * @public
   */
  Type?: FolderContentType | undefined;

  /**
   * The contents to include. Specify "INITIALIZED" to include initialized documents.
   *
   * @public
   */
  Include?: string | undefined;
}

/**
 * Describes the document.
 *
 * @public
 */
export interface DocumentMetadata {
  /**
   * The ID of the document.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The ID of the creator.
   *
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * The time when the document was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time when the document was updated.
   *
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * The latest version of the document.
   *
   * @public
   */
  LatestVersionMetadata?: DocumentVersionMetadata | undefined;

  /**
   * The resource state.
   *
   * @public
   */
  ResourceState?: ResourceStateType | undefined;

  /**
   * List of labels on the document.
   *
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFolderContentsResponse {
  /**
   * The subfolders in the specified folder.
   *
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * The documents in the specified folder.
   *
   * @public
   */
  Documents?: DocumentMetadata[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * A query to describe groups by group name.
   *
   * @public
   */
  SearchQuery: string | undefined;

  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeGroupsResponse {
  /**
   * The list of groups.
   *
   * @public
   */
  Groups?: GroupMetadata[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationSubscriptionsRequest {
  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationSubscriptionsResponse {
  /**
   * The subscriptions.
   *
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePermissionsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The ID of the principal to filter permissions by.
   *
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * The maximum number of items to return with this call.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call)
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes the permissions.
 *
 * @public
 */
export interface PermissionInfo {
  /**
   * The role of the user.
   *
   * @public
   */
  Role?: RoleType | undefined;

  /**
   * The type of permissions.
   *
   * @public
   */
  Type?: RolePermissionType | undefined;
}

/**
 * Describes a resource.
 *
 * @public
 */
export interface Principal {
  /**
   * The ID of the resource.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  Type?: PrincipalType | undefined;

  /**
   * The permission information for the resource.
   *
   * @public
   */
  Roles?: PermissionInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePermissionsResponse {
  /**
   * The principals.
   *
   * @public
   */
  Principals?: Principal[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRootFoldersRequest {
  /**
   * Amazon WorkDocs authentication token.
   *
   * @public
   */
  AuthenticationToken: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRootFoldersResponse {
  /**
   * The user's special folders.
   *
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the organization.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * The IDs of the users.
   *
   * @public
   */
  UserIds?: string | undefined;

  /**
   * A query to filter users by user name. Remember the following about the `Userids` and `Query` parameters:
   *
   * - If you don't use either parameter, the API returns a paginated list of all users on the site.
   * - If you use both parameters, the API ignores the `Query` parameter.
   * - The `Userid` parameter only returns user names that match a corresponding user ID.
   * - The `Query` parameter runs a "prefix" search for users by the `GivenName`, `SurName`, or `UserName` fields included in a [CreateUser](https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html) API call. For example, querying on `Ma` returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on `Ma J` only returns Mateo Jackson.
   *
   * @public
   */
  Query?: string | undefined;

  /**
   * The state of the users. Specify "ALL" to include inactive users.
   *
   * @public
   */
  Include?: UserFilterType | undefined;

  /**
   * The order for the results.
   *
   * @public
   */
  Order?: OrderType | undefined;

  /**
   * The sorting criteria.
   *
   * @public
   */
  Sort?: UserSortType | undefined;

  /**
   * The marker for the next set of results. (You received this marker from a previous call.)
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.
   *
   * @public
   */
  Fields?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * The users.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * The total number of users included in the results.
   *
   * @deprecated deprecated.
   * @public
   */
  TotalNumberOfUsers?: number | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserRequest {
  /**
   * Amazon WorkDocs authentication token.
   *
   * @public
   */
  AuthenticationToken: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserResponse {
  /**
   * Metadata of the user.
   *
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface GetDocumentRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * Set this to `TRUE` to include custom metadata in the response.
   *
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDocumentResponse {
  /**
   * The metadata details of the document.
   *
   * @public
   */
  Metadata?: DocumentMetadata | undefined;

  /**
   * The custom metadata on the document.
   *
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDocumentPathRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The maximum number of levels in the hierarchy to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A comma-separated list of values. Specify `NAME` to include the names of the parent folders.
   *
   * @public
   */
  Fields?: string | undefined;

  /**
   * This value is not supported.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Describes the resource path.
 *
 * @public
 */
export interface ResourcePathComponent {
  /**
   * The ID of the resource path.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the resource path.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the path information of a resource.
 *
 * @public
 */
export interface ResourcePath {
  /**
   * The components of the resource path.
   *
   * @public
   */
  Components?: ResourcePathComponent[] | undefined;
}

/**
 * @public
 */
export interface GetDocumentPathResponse {
  /**
   * The path information.
   *
   * @public
   */
  Path?: ResourcePath | undefined;
}

/**
 * @public
 */
export interface GetDocumentVersionRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The version ID of the document.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * A comma-separated list of values. Specify "SOURCE" to include a URL for the source document.
   *
   * @public
   */
  Fields?: string | undefined;

  /**
   * Set this to TRUE to include custom metadata in the response.
   *
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDocumentVersionResponse {
  /**
   * The version metadata.
   *
   * @public
   */
  Metadata?: DocumentVersionMetadata | undefined;

  /**
   * The custom metadata on the document version.
   *
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFolderRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * Set to TRUE to include custom metadata in the response.
   *
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetFolderResponse {
  /**
   * The metadata of the folder.
   *
   * @public
   */
  Metadata?: FolderMetadata | undefined;

  /**
   * The custom metadata on the folder.
   *
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFolderPathRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The maximum number of levels in the hierarchy to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A comma-separated list of values. Specify "NAME" to include the names of the parent folders.
   *
   * @public
   */
  Fields?: string | undefined;

  /**
   * This value is not supported.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetFolderPathResponse {
  /**
   * The path information.
   *
   * @public
   */
  Path?: ResourcePath | undefined;
}

/**
 * @public
 */
export interface GetResourcesRequest {
  /**
   * The Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The collection type.
   *
   * @public
   */
  CollectionType?: ResourceCollectionType | undefined;

  /**
   * The maximum number of resources to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results. This marker was received from a previous call.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcesResponse {
  /**
   * The folders in the specified folder.
   *
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * The documents in the specified collection.
   *
   * @public
   */
  Documents?: DocumentMetadata[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface InitiateDocumentVersionUploadRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The timestamp when the content of the document was originally created.
   *
   * @public
   */
  ContentCreatedTimestamp?: Date | undefined;

  /**
   * The timestamp when the content of the document was modified.
   *
   * @public
   */
  ContentModifiedTimestamp?: Date | undefined;

  /**
   * The content type of the document.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The size of the document, in bytes.
   *
   * @public
   */
  DocumentSizeInBytes?: number | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId?: string | undefined;
}

/**
 * Describes the upload.
 *
 * @public
 */
export interface UploadMetadata {
  /**
   * The URL of the upload.
   *
   * @public
   */
  UploadUrl?: string | undefined;

  /**
   * The signed headers.
   *
   * @public
   */
  SignedHeaders?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface InitiateDocumentVersionUploadResponse {
  /**
   * The document metadata.
   *
   * @public
   */
  Metadata?: DocumentMetadata | undefined;

  /**
   * The upload metadata.
   *
   * @public
   */
  UploadMetadata?: UploadMetadata | undefined;
}

/**
 * @public
 */
export interface RemoveAllResourcePermissionsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface RemoveResourcePermissionRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The principal ID of the resource.
   *
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * The principal type of the resource.
   *
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
}

/**
 * @public
 */
export interface RestoreDocumentVersionsRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;
}

/**
 * Filters results based on timestamp range (in epochs).
 *
 * @public
 */
export interface DateRangeType {
  /**
   * Timestamp range start value (in epochs)
   *
   * @public
   */
  StartValue?: Date | undefined;

  /**
   * Timestamp range end value (in epochs).
   *
   * @public
   */
  EndValue?: Date | undefined;
}

/**
 * Filter based on UserIds or GroupIds.
 *
 * @public
 */
export interface SearchPrincipalType {
  /**
   * UserIds or GroupIds.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Role of a User or Group.
   *
   * @public
   */
  Roles?: PrincipalRoleType[] | undefined;
}

/**
 * Filter based on size (in bytes).
 *
 * @public
 */
export interface LongRangeType {
  /**
   * The size start range (in bytes).
   *
   * @public
   */
  StartValue?: number | undefined;

  /**
   * The size end range (in bytes).
   *
   * @public
   */
  EndValue?: number | undefined;
}

/**
 * Filters results based on entity metadata.
 *
 * @public
 */
export interface Filters {
  /**
   * Filters by the locale of the content or comment.
   *
   * @public
   */
  TextLocales?: LanguageCodeType[] | undefined;

  /**
   * Filters by content category.
   *
   * @public
   */
  ContentCategories?: ContentCategoryType[] | undefined;

  /**
   * Filters based on entity type.
   *
   * @public
   */
  ResourceTypes?: SearchResourceType[] | undefined;

  /**
   * Filter by labels using exact match.
   *
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * Filter based on UserIds or GroupIds.
   *
   * @public
   */
  Principals?: SearchPrincipalType[] | undefined;

  /**
   * Filter based on resource’s path.
   *
   * @public
   */
  AncestorIds?: string[] | undefined;

  /**
   * Filter based on file groupings.
   *
   * @public
   */
  SearchCollectionTypes?: SearchCollectionType[] | undefined;

  /**
   * Filter based on size (in bytes).
   *
   * @public
   */
  SizeRange?: LongRangeType | undefined;

  /**
   * Filter based on resource’s creation timestamp.
   *
   * @public
   */
  CreatedRange?: DateRangeType | undefined;

  /**
   * Filter based on resource’s modified timestamp.
   *
   * @public
   */
  ModifiedRange?: DateRangeType | undefined;
}

/**
 * The result of the sort operation.
 *
 * @public
 */
export interface SearchSortResult {
  /**
   * Sort search results based on this field name.
   *
   * @public
   */
  Field?: OrderByFieldType | undefined;

  /**
   * Sort direction.
   *
   * @public
   */
  Order?: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchResourcesRequest {
  /**
   * WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.
   *
   * @public
   */
  QueryText?: string | undefined;

  /**
   * Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content
   *
   * @public
   */
  QueryScopes?: SearchQueryScopeType[] | undefined;

  /**
   * Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.
   *
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response.
   *
   * @public
   */
  AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined;

  /**
   * Filters results based on entity metadata.
   *
   * @public
   */
  Filters?: Filters | undefined;

  /**
   * Order by results in one or more categories.
   *
   * @public
   */
  OrderBy?: SearchSortResult[] | undefined;

  /**
   * Max results count per page.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * The marker for the next set of results.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * List of Documents, Folders, Comments, and Document Versions matching the query.
 *
 * @public
 */
export interface ResponseItem {
  /**
   * The type of item being returned.
   *
   * @public
   */
  ResourceType?: ResponseItemType | undefined;

  /**
   * The webUrl of the item being returned.
   *
   * @public
   */
  WebUrl?: string | undefined;

  /**
   * The document that matches the query.
   *
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * The folder that matches the query.
   *
   * @public
   */
  FolderMetadata?: FolderMetadata | undefined;

  /**
   * The comment that matches the query.
   *
   * @public
   */
  CommentMetadata?: CommentMetadata | undefined;

  /**
   * The document version that matches the metadata.
   *
   * @public
   */
  DocumentVersionMetadata?: DocumentVersionMetadata | undefined;
}

/**
 * @public
 */
export interface SearchResourcesResponse {
  /**
   * List of Documents, Folders, Comments, and Document Versions matching the query.
   *
   * @public
   */
  Items?: ResponseItem[] | undefined;

  /**
   * The marker to use when requesting the next set of results. If there are no additional results, the string is empty.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The name of the document.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * The resource state of the document. Only ACTIVE and RECYCLED are supported.
   *
   * @public
   */
  ResourceState?: ResourceStateType | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentVersionRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the document.
   *
   * @public
   */
  DocumentId: string | undefined;

  /**
   * The version ID of the document.
   *
   * @public
   */
  VersionId: string | undefined;

  /**
   * The status of the version.
   *
   * @public
   */
  VersionStatus?: DocumentVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFolderRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the folder.
   *
   * @public
   */
  FolderId: string | undefined;

  /**
   * The name of the folder.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the parent folder.
   *
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API.
   *
   * @public
   */
  ResourceState?: ResourceStateType | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
   *
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * The ID of the user.
   *
   * @public
   */
  UserId: string | undefined;

  /**
   * The given name of the user.
   *
   * @public
   */
  GivenName?: string | undefined;

  /**
   * The surname of the user.
   *
   * @public
   */
  Surname?: string | undefined;

  /**
   * The type of the user.
   *
   * @public
   */
  Type?: UserType | undefined;

  /**
   * The amount of storage for the user.
   *
   * @public
   */
  StorageRule?: StorageRuleType | undefined;

  /**
   * The time zone ID of the user.
   *
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * The locale of the user.
   *
   * @public
   */
  Locale?: LocaleType | undefined;

  /**
   * Boolean value to determine whether the user is granted Power user privileges.
   *
   * @public
   */
  GrantPoweruserPrivileges?: BooleanEnumType | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The user information.
   *
   * @public
   */
  User?: User | undefined;
}
