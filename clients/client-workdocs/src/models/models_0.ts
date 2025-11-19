// smithy-typescript generated code
import {
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
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the version.</p>
   * @public
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface ActivateUserRequest {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * <p>Describes the storage for a user.</p>
 * @public
 */
export interface StorageRuleType {
  /**
   * <p>The amount of storage allocated, in bytes.</p>
   * @public
   */
  StorageAllocatedInBytes?: number | undefined;

  /**
   * <p>The type of storage.</p>
   * @public
   */
  StorageType?: StorageType | undefined;
}

/**
 * <p>Describes the storage for a user.</p>
 * @public
 */
export interface UserStorageMetadata {
  /**
   * <p>The amount of storage used, in bytes.</p>
   * @public
   */
  StorageUtilizedInBytes?: number | undefined;

  /**
   * <p>The storage for a user.</p>
   * @public
   */
  StorageRule?: StorageRuleType | undefined;
}

/**
 * <p>Describes a user.</p>
 * @public
 */
export interface User {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The login name of the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The given name of the user.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The surname of the user.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The ID of the root folder.</p>
   * @public
   */
  RootFolderId?: string | undefined;

  /**
   * <p>The ID of the recycle bin folder.</p>
   * @public
   */
  RecycleBinFolderId?: string | undefined;

  /**
   * <p>The status of the user.</p>
   * @public
   */
  Status?: UserStatusType | undefined;

  /**
   * <p>The type of user.</p>
   * @public
   */
  Type?: UserType | undefined;

  /**
   * <p>The time when the user was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time when the user was modified.</p>
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * <p>The time zone ID of the user.</p>
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * <p>The locale of the user.</p>
   * @public
   */
  Locale?: LocaleType | undefined;

  /**
   * <p>The storage for the user.</p>
   * @public
   */
  Storage?: UserStorageMetadata | undefined;
}

/**
 * @public
 */
export interface ActivateUserResponse {
  /**
   * <p>The user information.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * <p>Describes the metadata of a comment.</p>
 * @public
 */
export interface CommentMetadata {
  /**
   * <p>The ID of the comment.</p>
   * @public
   */
  CommentId?: string | undefined;

  /**
   * <p>The user who made the comment.</p>
   * @public
   */
  Contributor?: User | undefined;

  /**
   * <p>The timestamp that the comment was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The status of the comment.</p>
   * @public
   */
  CommentStatus?: CommentStatusType | undefined;

  /**
   * <p>The ID of the user being replied to.</p>
   * @public
   */
  RecipientId?: string | undefined;

  /**
   * <p>The ID of the user who made the comment.</p>
   * @public
   */
  ContributorId?: string | undefined;
}

/**
 * <p>Describes the metadata of the user.</p>
 * @public
 */
export interface UserMetadata {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The given name of the user before a rename operation.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The surname of the user.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  EmailAddress?: string | undefined;
}

/**
 * <p>Describes the metadata of a resource.</p>
 * @public
 */
export interface ResourceMetadata {
  /**
   * <p>The type of resource.</p>
   * @public
   */
  Type?: ResourceType | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The original name of the resource before a rename operation.</p>
   * @public
   */
  OriginalName?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The version ID of the resource. This is an optional field and is filled for action
   *             on document version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The owner of the resource.</p>
   * @public
   */
  Owner?: UserMetadata | undefined;

  /**
   * <p>The parent ID of the resource before a rename operation.</p>
   * @public
   */
  ParentId?: string | undefined;
}

/**
 * <p>Describes the metadata of a user group.</p>
 * @public
 */
export interface GroupMetadata {
  /**
   * <p>The ID of the user group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the users or user groups.</p>
 * @public
 */
export interface Participants {
  /**
   * <p>The list of users.</p>
   * @public
   */
  Users?: UserMetadata[] | undefined;

  /**
   * <p>The list of user groups.</p>
   * @public
   */
  Groups?: GroupMetadata[] | undefined;
}

/**
 * <p>Describes the activity information.</p>
 * @public
 */
export interface Activity {
  /**
   * <p>The activity type.</p>
   * @public
   */
  Type?: ActivityType | undefined;

  /**
   * <p>The timestamp when the action was performed.</p>
   * @public
   */
  TimeStamp?: Date | undefined;

  /**
   * <p>Indicates whether an activity is indirect or direct. An indirect activity results
   *             from a direct activity performed on a parent resource. For example, sharing a parent
   *             folder (the direct activity) shares all of the subfolders and documents within the
   *             parent folder (the indirect activity).</p>
   * @public
   */
  IsIndirectActivity?: boolean | undefined;

  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The user who performed the action.</p>
   * @public
   */
  Initiator?: UserMetadata | undefined;

  /**
   * <p>The list of users or groups impacted by this action. This is an optional field and
   *             is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED,
   *             DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.</p>
   * @public
   */
  Participants?: Participants | undefined;

  /**
   * <p>The metadata of the resource involved in the user action.</p>
   * @public
   */
  ResourceMetadata?: ResourceMetadata | undefined;

  /**
   * <p>The original parent of the resource. This is an optional field and is filled for
   *             move activities.</p>
   * @public
   */
  OriginalParent?: ResourceMetadata | undefined;

  /**
   * <p>Metadata of the commenting activity. This is an optional field and is filled for
   *             commenting activities.</p>
   * @public
   */
  CommentMetadata?: CommentMetadata | undefined;
}

/**
 * <p>Set of options which defines notification preferences of given action.</p>
 * @public
 */
export interface NotificationOptions {
  /**
   * <p>Boolean value to indicate an email notification should be sent to the
   *             recipients.</p>
   * @public
   */
  SendEmail?: boolean | undefined;

  /**
   * <p>Text value to be included in the email body.</p>
   * @public
   */
  EmailMessage?: string | undefined;
}

/**
 * <p>Describes the recipient type and ID, if available.</p>
 * @public
 */
export interface SharePrincipal {
  /**
   * <p>The ID of the recipient.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The type of the recipient.</p>
   * @public
   */
  Type: PrincipalType | undefined;

  /**
   * <p>The role of the recipient.</p>
   * @public
   */
  Role: RoleType | undefined;
}

/**
 * @public
 */
export interface AddResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The users, groups, or organization being granted permission.</p>
   * @public
   */
  Principals: SharePrincipal[] | undefined;

  /**
   * <p>The notification options.</p>
   * @public
   */
  NotificationOptions?: NotificationOptions | undefined;
}

/**
 * <p>Describes the share results of a resource.</p>
 * @public
 */
export interface ShareResult {
  /**
   * <p>The ID of the principal.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The ID of the invited user.</p>
   * @public
   */
  InviteePrincipalId?: string | undefined;

  /**
   * <p>The role.</p>
   * @public
   */
  Role?: RoleType | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  Status?: ShareStatusType | undefined;

  /**
   * <p>The ID of the resource that was shared.</p>
   * @public
   */
  ShareId?: string | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface AddResourcePermissionsResponse {
  /**
   * <p>The share results.</p>
   * @public
   */
  ShareResults?: ShareResult[] | undefined;
}

/**
 * @public
 */
export interface CreateCommentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>The ID of the parent comment.</p>
   * @public
   */
  ParentId?: string | undefined;

  /**
   * <p>The ID of the root comment in the thread.</p>
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * <p>The text of the comment.</p>
   * @public
   */
  Text: string | undefined;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   * @public
   */
  Visibility?: CommentVisibilityType | undefined;

  /**
   * <p>Set this parameter to TRUE to send an email out to the document collaborators after
   *             the comment is created.</p>
   * @public
   */
  NotifyCollaborators?: boolean | undefined;
}

/**
 * <p>Describes a comment.</p>
 * @public
 */
export interface Comment {
  /**
   * <p>The ID of the comment.</p>
   * @public
   */
  CommentId: string | undefined;

  /**
   * <p>The ID of the parent comment.</p>
   * @public
   */
  ParentId?: string | undefined;

  /**
   * <p>The ID of the root comment in the thread.</p>
   * @public
   */
  ThreadId?: string | undefined;

  /**
   * <p>The text of the comment.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The details of the user who made the comment.</p>
   * @public
   */
  Contributor?: User | undefined;

  /**
   * <p>The time that the comment was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The status of the comment.</p>
   * @public
   */
  Status?: CommentStatusType | undefined;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   * @public
   */
  Visibility?: CommentVisibilityType | undefined;

  /**
   * <p>If the comment is a reply to another user's comment, this field contains the user
   *             ID of the user being replied to.</p>
   * @public
   */
  RecipientId?: string | undefined;
}

/**
 * @public
 */
export interface CreateCommentResponse {
  /**
   * <p>The comment that has been created.</p>
   * @public
   */
  Comment?: Comment | undefined;
}

/**
 * @public
 */
export interface CreateCustomMetadataRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being added to a document
   *             version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>Custom metadata in the form of name-value pairs.</p>
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
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The name of the new folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId: string | undefined;
}

/**
 * <p>Describes a folder.</p>
 * @public
 */
export interface FolderMetadata {
  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the creator.</p>
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * <p>The time when the folder was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time when the folder was updated.</p>
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * <p>The resource state of the folder.</p>
   * @public
   */
  ResourceState?: ResourceStateType | undefined;

  /**
   * <p>The unique identifier created from the subfolders and documents of the
   *             folder.</p>
   * @public
   */
  Signature?: string | undefined;

  /**
   * <p>List of labels on the folder.</p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>The size of the folder metadata.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The size of the latest version of the folder metadata.</p>
   * @public
   */
  LatestVersionSize?: number | undefined;
}

/**
 * @public
 */
export interface CreateFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   * @public
   */
  Metadata?: FolderMetadata | undefined;
}

/**
 * @public
 */
export interface CreateLabelsRequest {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>List of labels to add to the resource.</p>
   * @public
   */
  Labels: string[] | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
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
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint
   *             is a URL that begins with <code>https</code>.</p>
   * @public
   */
  Endpoint: string | undefined;

  /**
   * <p>The protocol to use. The supported value is https, which delivers JSON-encoded
   *             messages using HTTPS POST.</p>
   * @public
   */
  Protocol: SubscriptionProtocolType | undefined;

  /**
   * <p>The notification type.</p>
   * @public
   */
  SubscriptionType: SubscriptionType | undefined;
}

/**
 * <p>Describes a subscription.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  SubscriptionId?: string | undefined;

  /**
   * <p>The endpoint of the subscription.</p>
   * @public
   */
  EndPoint?: string | undefined;

  /**
   * <p>The protocol of the subscription.</p>
   * @public
   */
  Protocol?: SubscriptionProtocolType | undefined;
}

/**
 * @public
 */
export interface CreateNotificationSubscriptionResponse {
  /**
   * <p>The subscription.</p>
   * @public
   */
  Subscription?: Subscription | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The login name of the user.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The given name of the user.</p>
   * @public
   */
  GivenName: string | undefined;

  /**
   * <p>The surname of the user.</p>
   * @public
   */
  Surname: string | undefined;

  /**
   * <p>The password of the user.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>The time zone ID of the user.</p>
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * <p>The amount of storage for the user.</p>
   * @public
   */
  StorageRule?: StorageRuleType | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The user information.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DeactivateUserRequest {
  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCommentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>The ID of the comment.</p>
   * @public
   */
  CommentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomMetadataRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource, either a document or folder.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being deleted from a document
   *             version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>List of properties to remove.</p>
   * @public
   */
  Keys?: string[] | undefined;

  /**
   * <p>Flag to indicate removal of all custom metadata properties from the specified
   *             resource.</p>
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
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document associated with the version being deleted.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the version being deleted.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>Deletes all versions of a document prior to the current version.</p>
   * @public
   */
  DeletePriorVersions: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFolderContentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelsRequest {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>List of labels to delete from the resource.</p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>Flag to request removal of all labels from the specified resource.</p>
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
   * <p>The ID of the subscription.</p>
   * @public
   */
  SubscriptionId: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using Amazon Web Services credentials.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivitiesRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The timestamp that determines the starting time of the activities. The response
   *             includes the activities performed after the specified timestamp.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp that determines the end time of the activities. The response includes
   *             the activities performed before the specified timestamp.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The ID of the organization. This is a mandatory parameter when using administrative
   *             API (SigV4) requests.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>Specifies which activity types to include in the response. If this field is left
   *             empty, all activity types are returned.</p>
   * @public
   */
  ActivityTypes?: string | undefined;

  /**
   * <p>The document or folder ID for which to describe activity types.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The ID of the user who performed the action. The response includes activities
   *             pertaining to this user. This is an optional parameter and is only applicable for
   *             administrative API (SigV4) requests.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>Includes indirect activities. An indirect activity results from a direct activity
   *             performed on a parent resource. For example, sharing a parent folder (the direct
   *             activity) shares all of the subfolders and documents within the parent folder (the
   *             indirect activity).</p>
   * @public
   */
  IncludeIndirectActivities?: boolean | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeActivitiesResponse {
  /**
   * <p>The list of activities for the specified user and time period.</p>
   * @public
   */
  UserActivities?: Activity[] | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCommentsResponse {
  /**
   * <p>The list of comments for the specified document version.</p>
   * @public
   */
  Comments?: Comment[] | undefined;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentVersionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of versions to return with this call.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A comma-separated list of values. Specify "INITIALIZED" to include incomplete
   *             versions.</p>
   * @public
   */
  Include?: string | undefined;

  /**
   * <p>Specify "SOURCE" to include initialized versions and a URL for the source
   *             document.</p>
   * @public
   */
  Fields?: string | undefined;
}

/**
 * <p>Describes a version of a document.</p>
 * @public
 */
export interface DocumentVersionMetadata {
  /**
   * <p>The ID of the version.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the version.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The content type of the document.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The size of the document, in bytes.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The signature of the document.</p>
   * @public
   */
  Signature?: string | undefined;

  /**
   * <p>The status of the document.</p>
   * @public
   */
  Status?: DocumentStatusType | undefined;

  /**
   * <p>The timestamp when the document was first uploaded.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the document was last uploaded.</p>
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the content of the document was originally created.</p>
   * @public
   */
  ContentCreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the content of the document was modified.</p>
   * @public
   */
  ContentModifiedTimestamp?: Date | undefined;

  /**
   * <p>The ID of the creator.</p>
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * <p>The thumbnail of the document.</p>
   * @public
   */
  Thumbnail?: Partial<Record<DocumentThumbnailType, string>> | undefined;

  /**
   * <p>The source of the document.</p>
   * @public
   */
  Source?: Partial<Record<DocumentSourceType, string>> | undefined;
}

/**
 * @public
 */
export interface DescribeDocumentVersionsResponse {
  /**
   * <p>The document versions.</p>
   * @public
   */
  DocumentVersions?: DocumentVersionMetadata[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeFolderContentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The sorting criteria.</p>
   * @public
   */
  Sort?: ResourceSortType | undefined;

  /**
   * <p>The order for the contents of the folder.</p>
   * @public
   */
  Order?: OrderType | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The type of items.</p>
   * @public
   */
  Type?: FolderContentType | undefined;

  /**
   * <p>The contents to include. Specify "INITIALIZED" to include initialized
   *             documents.</p>
   * @public
   */
  Include?: string | undefined;
}

/**
 * <p>Describes the document.</p>
 * @public
 */
export interface DocumentMetadata {
  /**
   * <p>The ID of the document.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the creator.</p>
   * @public
   */
  CreatorId?: string | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * <p>The time when the document was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time when the document was updated.</p>
   * @public
   */
  ModifiedTimestamp?: Date | undefined;

  /**
   * <p>The latest version of the document.</p>
   * @public
   */
  LatestVersionMetadata?: DocumentVersionMetadata | undefined;

  /**
   * <p>The resource state.</p>
   * @public
   */
  ResourceState?: ResourceStateType | undefined;

  /**
   * <p>List of labels on the document.</p>
   * @public
   */
  Labels?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeFolderContentsResponse {
  /**
   * <p>The subfolders in the specified folder.</p>
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * <p>The documents in the specified folder.</p>
   * @public
   */
  Documents?: DocumentMetadata[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGroupsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>A query to describe groups by group name.</p>
   * @public
   */
  SearchQuery: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeGroupsResponse {
  /**
   * <p>The list of groups.</p>
   * @public
   */
  Groups?: GroupMetadata[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional
   *             results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationSubscriptionsRequest {
  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId: string | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationSubscriptionsResponse {
  /**
   * <p>The subscriptions.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the principal to filter permissions by.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The maximum number of items to return with this call.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call)</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes the permissions.</p>
 * @public
 */
export interface PermissionInfo {
  /**
   * <p>The role of the user.</p>
   * @public
   */
  Role?: RoleType | undefined;

  /**
   * <p>The type of permissions.</p>
   * @public
   */
  Type?: RolePermissionType | undefined;
}

/**
 * <p>Describes a resource.</p>
 * @public
 */
export interface Principal {
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  Type?: PrincipalType | undefined;

  /**
   * <p>The permission information for the resource.</p>
   * @public
   */
  Roles?: PermissionInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePermissionsResponse {
  /**
   * <p>The principals.</p>
   * @public
   */
  Principals?: Principal[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRootFoldersRequest {
  /**
   * <p>Amazon WorkDocs authentication token.</p>
   * @public
   */
  AuthenticationToken: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRootFoldersResponse {
  /**
   * <p>The user's special folders.</p>
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>The IDs of the users.</p>
   * @public
   */
  UserIds?: string | undefined;

  /**
   * <p>A query to filter users by user name. Remember the following about the <code>Userids</code> and <code>Query</code> parameters:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't use either parameter, the API returns a paginated list of all users on the site.</p>
   *             </li>
   *             <li>
   *                <p>If you use both parameters, the API ignores the <code>Query</code> parameter.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Userid</code> parameter only returns user names that match a corresponding user ID.</p>
   *             </li>
   *             <li>
   *                <p>The <code>Query</code> parameter runs a "prefix" search for users by the <code>GivenName</code>, <code>SurName</code>, or <code>UserName</code> fields included in a
   *                 <a href="https://docs.aws.amazon.com/workdocs/latest/APIReference/API_CreateUser.html">CreateUser</a> API call. For example, querying on
   *                 <code>Ma</code> returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on <code>Ma J</code> only
   *                 returns Mateo Jackson.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Query?: string | undefined;

  /**
   * <p>The state of the users. Specify "ALL" to include inactive users.</p>
   * @public
   */
  Include?: UserFilterType | undefined;

  /**
   * <p>The order for the results.</p>
   * @public
   */
  Order?: OrderType | undefined;

  /**
   * <p>The sorting criteria.</p>
   * @public
   */
  Sort?: UserSortType | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A comma-separated list of values. Specify "STORAGE_METADATA" to include the user
   *             storage quota and utilization information.</p>
   * @public
   */
  Fields?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsersResponse {
  /**
   * <p>The users.</p>
   * @public
   */
  Users?: User[] | undefined;

  /**
   * <p>The total number of users included in the results.</p>
   *
   * @deprecated deprecated
   * @public
   */
  TotalNumberOfUsers?: number | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token.</p>
   * @public
   */
  AuthenticationToken: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserResponse {
  /**
   * <p>Metadata of the user.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface GetDocumentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>Set this to <code>TRUE</code> to include custom metadata in the response.</p>
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDocumentResponse {
  /**
   * <p>The metadata details of the document.</p>
   * @public
   */
  Metadata?: DocumentMetadata | undefined;

  /**
   * <p>The custom metadata on the document.</p>
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDocumentPathRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A comma-separated list of values. Specify <code>NAME</code> to include the names of
   *             the parent folders.</p>
   * @public
   */
  Fields?: string | undefined;

  /**
   * <p>This value is not supported.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes the resource path.</p>
 * @public
 */
export interface ResourcePathComponent {
  /**
   * <p>The ID of the resource path.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the resource path.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Describes the path information of a resource.</p>
 * @public
 */
export interface ResourcePath {
  /**
   * <p>The components of the resource path.</p>
   * @public
   */
  Components?: ResourcePathComponent[] | undefined;
}

/**
 * @public
 */
export interface GetDocumentPathResponse {
  /**
   * <p>The path information.</p>
   * @public
   */
  Path?: ResourcePath | undefined;
}

/**
 * @public
 */
export interface GetDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The version ID of the document.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>A comma-separated list of values. Specify "SOURCE" to include a URL for the source
   *             document.</p>
   * @public
   */
  Fields?: string | undefined;

  /**
   * <p>Set this to TRUE to include custom metadata in the response.</p>
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetDocumentVersionResponse {
  /**
   * <p>The version metadata.</p>
   * @public
   */
  Metadata?: DocumentVersionMetadata | undefined;

  /**
   * <p>The custom metadata on the document version.</p>
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>Set to TRUE to include custom metadata in the response.</p>
   * @public
   */
  IncludeCustomMetadata?: boolean | undefined;
}

/**
 * @public
 */
export interface GetFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   * @public
   */
  Metadata?: FolderMetadata | undefined;

  /**
   * <p>The custom metadata on the folder.</p>
   * @public
   */
  CustomMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFolderPathRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>A comma-separated list of values. Specify "NAME" to include the names of the parent
   *             folders.</p>
   * @public
   */
  Fields?: string | undefined;

  /**
   * <p>This value is not supported.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetFolderPathResponse {
  /**
   * <p>The path information.</p>
   * @public
   */
  Path?: ResourcePath | undefined;
}

/**
 * @public
 */
export interface GetResourcesRequest {
  /**
   * <p>The Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The user ID for the resource collection. This is a required field for accessing the
   *             API operation using IAM credentials.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The collection type.</p>
   * @public
   */
  CollectionType?: ResourceCollectionType | undefined;

  /**
   * <p>The maximum number of resources to return.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous call.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcesResponse {
  /**
   * <p>The folders in the specified folder.</p>
   * @public
   */
  Folders?: FolderMetadata[] | undefined;

  /**
   * <p>The documents in the specified collection.</p>
   * @public
   */
  Documents?: DocumentMetadata[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface InitiateDocumentVersionUploadRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when the content of the document was originally created.</p>
   * @public
   */
  ContentCreatedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the content of the document was modified.</p>
   * @public
   */
  ContentModifiedTimestamp?: Date | undefined;

  /**
   * <p>The content type of the document.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The size of the document, in bytes.</p>
   * @public
   */
  DocumentSizeInBytes?: number | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId?: string | undefined;
}

/**
 * <p>Describes the upload.</p>
 * @public
 */
export interface UploadMetadata {
  /**
   * <p>The URL of the upload.</p>
   * @public
   */
  UploadUrl?: string | undefined;

  /**
   * <p>The signed headers.</p>
   * @public
   */
  SignedHeaders?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface InitiateDocumentVersionUploadResponse {
  /**
   * <p>The document metadata.</p>
   * @public
   */
  Metadata?: DocumentMetadata | undefined;

  /**
   * <p>The upload metadata.</p>
   * @public
   */
  UploadMetadata?: UploadMetadata | undefined;
}

/**
 * @public
 */
export interface RemoveAllResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface RemoveResourcePermissionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The principal ID of the resource.</p>
   * @public
   */
  PrincipalId: string | undefined;

  /**
   * <p>The principal type of the resource.</p>
   * @public
   */
  PrincipalType?: PrincipalType | undefined;
}

/**
 * @public
 */
export interface RestoreDocumentVersionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;
}

/**
 * <p>Filters results based on timestamp range (in epochs).</p>
 * @public
 */
export interface DateRangeType {
  /**
   * <p>Timestamp range start value (in epochs)</p>
   * @public
   */
  StartValue?: Date | undefined;

  /**
   * <p>Timestamp range end value (in epochs).</p>
   * @public
   */
  EndValue?: Date | undefined;
}

/**
 * <p>Filter based on UserIds or GroupIds.</p>
 * @public
 */
export interface SearchPrincipalType {
  /**
   * <p>UserIds or GroupIds.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Role of a User or Group.</p>
   * @public
   */
  Roles?: PrincipalRoleType[] | undefined;
}

/**
 * <p>Filter based on size (in bytes).</p>
 * @public
 */
export interface LongRangeType {
  /**
   * <p>The size start range (in bytes).</p>
   * @public
   */
  StartValue?: number | undefined;

  /**
   * <p>The size end range (in bytes).</p>
   * @public
   */
  EndValue?: number | undefined;
}

/**
 * <p>Filters results based on entity metadata.</p>
 * @public
 */
export interface Filters {
  /**
   * <p>Filters by the locale of the content or comment.</p>
   * @public
   */
  TextLocales?: LanguageCodeType[] | undefined;

  /**
   * <p>Filters by content category.</p>
   * @public
   */
  ContentCategories?: ContentCategoryType[] | undefined;

  /**
   * <p>Filters based on entity type.</p>
   * @public
   */
  ResourceTypes?: SearchResourceType[] | undefined;

  /**
   * <p>Filter by labels using exact match.</p>
   * @public
   */
  Labels?: string[] | undefined;

  /**
   * <p>Filter based on UserIds or GroupIds.</p>
   * @public
   */
  Principals?: SearchPrincipalType[] | undefined;

  /**
   * <p>Filter based on resource’s path.</p>
   * @public
   */
  AncestorIds?: string[] | undefined;

  /**
   * <p>Filter based on file groupings.</p>
   * @public
   */
  SearchCollectionTypes?: SearchCollectionType[] | undefined;

  /**
   * <p>Filter based on size (in bytes).</p>
   * @public
   */
  SizeRange?: LongRangeType | undefined;

  /**
   * <p>Filter based on resource’s creation timestamp.</p>
   * @public
   */
  CreatedRange?: DateRangeType | undefined;

  /**
   * <p>Filter based on resource’s modified timestamp.</p>
   * @public
   */
  ModifiedRange?: DateRangeType | undefined;
}

/**
 * <p>The result of the sort operation.</p>
 * @public
 */
export interface SearchSortResult {
  /**
   * <p>Sort search results based on this field name.</p>
   * @public
   */
  Field?: OrderByFieldType | undefined;

  /**
   * <p>Sort direction.</p>
   * @public
   */
  Order?: SortOrder | undefined;
}

/**
 * @public
 */
export interface SearchResourcesRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches.</p>
   * @public
   */
  QueryText?: string | undefined;

  /**
   * <p>Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content</p>
   * @public
   */
  QueryScopes?: SearchQueryScopeType[] | undefined;

  /**
   * <p>Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials.</p>
   * @public
   */
  OrganizationId?: string | undefined;

  /**
   * <p>A list of attributes to include in the response. Used to request fields that are not normally
   *             returned in a standard response.</p>
   * @public
   */
  AdditionalResponseFields?: AdditionalResponseFieldType[] | undefined;

  /**
   * <p>Filters results based on entity metadata.</p>
   * @public
   */
  Filters?: Filters | undefined;

  /**
   * <p>Order by results in one or more categories.</p>
   * @public
   */
  OrderBy?: SearchSortResult[] | undefined;

  /**
   * <p>Max results count per page.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>The marker for the next set of results.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>List of Documents, Folders, Comments, and Document Versions matching the query.</p>
 * @public
 */
export interface ResponseItem {
  /**
   * <p>The type of item being returned.</p>
   * @public
   */
  ResourceType?: ResponseItemType | undefined;

  /**
   * <p>The webUrl of the item being returned.</p>
   * @public
   */
  WebUrl?: string | undefined;

  /**
   * <p>The document that matches the query.</p>
   * @public
   */
  DocumentMetadata?: DocumentMetadata | undefined;

  /**
   * <p>The folder that matches the query.</p>
   * @public
   */
  FolderMetadata?: FolderMetadata | undefined;

  /**
   * <p>The comment that matches the query.</p>
   * @public
   */
  CommentMetadata?: CommentMetadata | undefined;

  /**
   * <p>The document version that matches the metadata.</p>
   * @public
   */
  DocumentVersionMetadata?: DocumentVersionMetadata | undefined;
}

/**
 * @public
 */
export interface SearchResourcesResponse {
  /**
   * <p>List of Documents, Folders, Comments, and Document Versions matching the query.</p>
   * @public
   */
  Items?: ResponseItem[] | undefined;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The name of the document.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * <p>The resource state of the document. Only ACTIVE and RECYCLED are
   *             supported.</p>
   * @public
   */
  ResourceState?: ResourceStateType | undefined;
}

/**
 * @public
 */
export interface UpdateDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the document.</p>
   * @public
   */
  DocumentId: string | undefined;

  /**
   * <p>The version ID of the document.</p>
   * @public
   */
  VersionId: string | undefined;

  /**
   * <p>The status of the version.</p>
   * @public
   */
  VersionStatus?: DocumentVersionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the folder.</p>
   * @public
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the parent folder.</p>
   * @public
   */
  ParentFolderId?: string | undefined;

  /**
   * <p>The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from
   *             the API.</p>
   * @public
   */
  ResourceState?: ResourceStateType | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</p>
   * @public
   */
  AuthenticationToken?: string | undefined;

  /**
   * <p>The ID of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The given name of the user.</p>
   * @public
   */
  GivenName?: string | undefined;

  /**
   * <p>The surname of the user.</p>
   * @public
   */
  Surname?: string | undefined;

  /**
   * <p>The type of the user.</p>
   * @public
   */
  Type?: UserType | undefined;

  /**
   * <p>The amount of storage for the user.</p>
   * @public
   */
  StorageRule?: StorageRuleType | undefined;

  /**
   * <p>The time zone ID of the user.</p>
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * <p>The locale of the user.</p>
   * @public
   */
  Locale?: LocaleType | undefined;

  /**
   * <p>Boolean value to determine whether the user is granted Power user privileges.</p>
   * @public
   */
  GrantPoweruserPrivileges?: BooleanEnumType | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The user information.</p>
   * @public
   */
  User?: User | undefined;
}
