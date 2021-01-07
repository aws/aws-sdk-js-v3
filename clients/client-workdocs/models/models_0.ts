import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AbortDocumentVersionUploadRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the version.</p>
   */
  VersionId: string | undefined;
}

export namespace AbortDocumentVersionUploadRequest {
  export const filterSensitiveLog = (obj: AbortDocumentVersionUploadRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The resource does not exist.</p>
 */
export interface EntityNotExistsException extends __SmithyException, $MetadataBearer {
  name: "EntityNotExistsException";
  $fault: "client";
  Message?: string;
  EntityIds?: string[];
}

export namespace EntityNotExistsException {
  export const filterSensitiveLog = (obj: EntityNotExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 */
export interface FailedDependencyException extends __SmithyException, $MetadataBearer {
  name: "FailedDependencyException";
  $fault: "client";
  Message?: string;
}

export namespace FailedDependencyException {
  export const filterSensitiveLog = (obj: FailedDependencyException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified document version is not in the INITIALIZED state.</p>
 */
export interface ProhibitedStateException extends __SmithyException, $MetadataBearer {
  name: "ProhibitedStateException";
  $fault: "client";
  Message?: string;
}

export namespace ProhibitedStateException {
  export const filterSensitiveLog = (obj: ProhibitedStateException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the dependencies is unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The operation is not permitted.</p>
 */
export interface UnauthorizedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedOperationException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace UnauthorizedOperationException {
  export const filterSensitiveLog = (obj: UnauthorizedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>The caller does not have access to perform the action on the resource.</p>
 */
export interface UnauthorizedResourceAccessException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedResourceAccessException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedResourceAccessException {
  export const filterSensitiveLog = (obj: UnauthorizedResourceAccessException): any => ({
    ...obj,
  });
}

export interface ActivateUserRequest {
  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;
}

export namespace ActivateUserRequest {
  export const filterSensitiveLog = (obj: ActivateUserRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export enum LocaleType {
  DE = "de",
  DEFAULT = "default",
  EN = "en",
  ES = "es",
  FR = "fr",
  JA = "ja",
  KO = "ko",
  PT_BR = "pt_BR",
  RU = "ru",
  ZH_CN = "zh_CN",
  ZH_TW = "zh_TW",
}

export enum UserStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING",
}

export enum StorageType {
  QUOTA = "QUOTA",
  UNLIMITED = "UNLIMITED",
}

/**
 * <p>Describes the storage for a user.</p>
 */
export interface StorageRuleType {
  /**
   * <p>The amount of storage allocated, in bytes.</p>
   */
  StorageAllocatedInBytes?: number;

  /**
   * <p>The type of storage.</p>
   */
  StorageType?: StorageType | string;
}

export namespace StorageRuleType {
  export const filterSensitiveLog = (obj: StorageRuleType): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the storage for a user.</p>
 */
export interface UserStorageMetadata {
  /**
   * <p>The amount of storage used, in bytes.</p>
   */
  StorageUtilizedInBytes?: number;

  /**
   * <p>The storage for a user.</p>
   */
  StorageRule?: StorageRuleType;
}

export namespace UserStorageMetadata {
  export const filterSensitiveLog = (obj: UserStorageMetadata): any => ({
    ...obj,
  });
}

export enum UserType {
  ADMIN = "ADMIN",
  MINIMALUSER = "MINIMALUSER",
  POWERUSER = "POWERUSER",
  USER = "USER",
  WORKSPACESUSER = "WORKSPACESUSER",
}

/**
 * <p>Describes a user.</p>
 */
export interface User {
  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The login name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The ID of the root folder.</p>
   */
  RootFolderId?: string;

  /**
   * <p>The ID of the recycle bin folder.</p>
   */
  RecycleBinFolderId?: string;

  /**
   * <p>The status of the user.</p>
   */
  Status?: UserStatusType | string;

  /**
   * <p>The type of user.</p>
   */
  Type?: UserType | string;

  /**
   * <p>The time when the user was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time when the user was modified.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?: LocaleType | string;

  /**
   * <p>The storage for the user.</p>
   */
  Storage?: UserStorageMetadata;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export interface ActivateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace ActivateUserResponse {
  export const filterSensitiveLog = (obj: ActivateUserResponse): any => ({
    ...obj,
  });
}

export enum CommentStatusType {
  DELETED = "DELETED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

/**
 * <p>Describes the metadata of a comment.</p>
 */
export interface CommentMetadata {
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId?: string;

  /**
   * <p>The user who made the comment.</p>
   */
  Contributor?: User;

  /**
   * <p>The timestamp that the comment was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The status of the comment.</p>
   */
  CommentStatus?: CommentStatusType | string;

  /**
   * <p>The ID of the user being replied to.</p>
   */
  RecipientId?: string;
}

export namespace CommentMetadata {
  export const filterSensitiveLog = (obj: CommentMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the metadata of the user.</p>
 */
export interface UserMetadata {
  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;

  /**
   * <p>The given name of the user before a rename operation.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;
}

export namespace UserMetadata {
  export const filterSensitiveLog = (obj: UserMetadata): any => ({
    ...obj,
  });
}

export enum ResourceType {
  DOCUMENT = "DOCUMENT",
  FOLDER = "FOLDER",
}

/**
 * <p>Describes the metadata of a resource.</p>
 */
export interface ResourceMetadata {
  /**
   * <p>The type of resource.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The original name of the resource before a rename operation.</p>
   */
  OriginalName?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The version ID of the resource. This is an optional field and is filled for action
   *             on document version.</p>
   */
  VersionId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  Owner?: UserMetadata;

  /**
   * <p>The parent ID of the resource before a rename operation.</p>
   */
  ParentId?: string;
}

export namespace ResourceMetadata {
  export const filterSensitiveLog = (obj: ResourceMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the metadata of a user group.</p>
 */
export interface GroupMetadata {
  /**
   * <p>The ID of the user group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the group.</p>
   */
  Name?: string;
}

export namespace GroupMetadata {
  export const filterSensitiveLog = (obj: GroupMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the users or user groups.</p>
 */
export interface Participants {
  /**
   * <p>The list of users.</p>
   */
  Users?: UserMetadata[];

  /**
   * <p>The list of user groups.</p>
   */
  Groups?: GroupMetadata[];
}

export namespace Participants {
  export const filterSensitiveLog = (obj: Participants): any => ({
    ...obj,
  });
}

export enum ActivityType {
  DOCUMENT_ANNOTATION_ADDED = "DOCUMENT_ANNOTATION_ADDED",
  DOCUMENT_ANNOTATION_DELETED = "DOCUMENT_ANNOTATION_DELETED",
  DOCUMENT_CHECKED_IN = "DOCUMENT_CHECKED_IN",
  DOCUMENT_CHECKED_OUT = "DOCUMENT_CHECKED_OUT",
  DOCUMENT_COMMENT_ADDED = "DOCUMENT_COMMENT_ADDED",
  DOCUMENT_COMMENT_DELETED = "DOCUMENT_COMMENT_DELETED",
  DOCUMENT_MOVED = "DOCUMENT_MOVED",
  DOCUMENT_RECYCLED = "DOCUMENT_RECYCLED",
  DOCUMENT_RENAMED = "DOCUMENT_RENAMED",
  DOCUMENT_RESTORED = "DOCUMENT_RESTORED",
  DOCUMENT_REVERTED = "DOCUMENT_REVERTED",
  DOCUMENT_SHAREABLE_LINK_CREATED = "DOCUMENT_SHAREABLE_LINK_CREATED",
  DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED = "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED",
  DOCUMENT_SHAREABLE_LINK_REMOVED = "DOCUMENT_SHAREABLE_LINK_REMOVED",
  DOCUMENT_SHARED = "DOCUMENT_SHARED",
  DOCUMENT_SHARE_PERMISSION_CHANGED = "DOCUMENT_SHARE_PERMISSION_CHANGED",
  DOCUMENT_UNSHARED = "DOCUMENT_UNSHARED",
  DOCUMENT_VERSION_DELETED = "DOCUMENT_VERSION_DELETED",
  DOCUMENT_VERSION_DOWNLOADED = "DOCUMENT_VERSION_DOWNLOADED",
  DOCUMENT_VERSION_UPLOADED = "DOCUMENT_VERSION_UPLOADED",
  DOCUMENT_VERSION_VIEWED = "DOCUMENT_VERSION_VIEWED",
  FOLDER_CREATED = "FOLDER_CREATED",
  FOLDER_DELETED = "FOLDER_DELETED",
  FOLDER_MOVED = "FOLDER_MOVED",
  FOLDER_RECYCLED = "FOLDER_RECYCLED",
  FOLDER_RENAMED = "FOLDER_RENAMED",
  FOLDER_RESTORED = "FOLDER_RESTORED",
  FOLDER_SHAREABLE_LINK_CREATED = "FOLDER_SHAREABLE_LINK_CREATED",
  FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED = "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED",
  FOLDER_SHAREABLE_LINK_REMOVED = "FOLDER_SHAREABLE_LINK_REMOVED",
  FOLDER_SHARED = "FOLDER_SHARED",
  FOLDER_SHARE_PERMISSION_CHANGED = "FOLDER_SHARE_PERMISSION_CHANGED",
  FOLDER_UNSHARED = "FOLDER_UNSHARED",
}

/**
 * <p>Describes the activity information.</p>
 */
export interface Activity {
  /**
   * <p>The activity type.</p>
   */
  Type?: ActivityType | string;

  /**
   * <p>The timestamp when the action was performed.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>Indicates whether an activity is indirect or direct. An indirect activity results
   *             from a direct activity performed on a parent resource. For example, sharing a parent
   *             folder (the direct activity) shares all of the subfolders and documents within the
   *             parent folder (the indirect activity).</p>
   */
  IsIndirectActivity?: boolean;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The user who performed the action.</p>
   */
  Initiator?: UserMetadata;

  /**
   * <p>The list of users or groups impacted by this action. This is an optional field and
   *             is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED,
   *             DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.</p>
   */
  Participants?: Participants;

  /**
   * <p>The metadata of the resource involved in the user action.</p>
   */
  ResourceMetadata?: ResourceMetadata;

  /**
   * <p>The original parent of the resource. This is an optional field and is filled for
   *             move activities.</p>
   */
  OriginalParent?: ResourceMetadata;

  /**
   * <p>Metadata of the commenting activity. This is an optional field and is filled for
   *             commenting activities.</p>
   */
  CommentMetadata?: CommentMetadata;
}

export namespace Activity {
  export const filterSensitiveLog = (obj: Activity): any => ({
    ...obj,
  });
}

/**
 * <p>Set of options which defines notification preferences of given action.</p>
 */
export interface NotificationOptions {
  /**
   * <p>Boolean value to indicate an email notification should be sent to the
   *             receipients.</p>
   */
  SendEmail?: boolean;

  /**
   * <p>Text value to be included in the email body.</p>
   */
  EmailMessage?: string;
}

export namespace NotificationOptions {
  export const filterSensitiveLog = (obj: NotificationOptions): any => ({
    ...obj,
    ...(obj.EmailMessage && { EmailMessage: SENSITIVE_STRING }),
  });
}

export enum RoleType {
  CONTRIBUTOR = "CONTRIBUTOR",
  COOWNER = "COOWNER",
  OWNER = "OWNER",
  VIEWER = "VIEWER",
}

export enum PrincipalType {
  ANONYMOUS = "ANONYMOUS",
  GROUP = "GROUP",
  INVITE = "INVITE",
  ORGANIZATION = "ORGANIZATION",
  USER = "USER",
}

/**
 * <p>Describes the recipient type and ID, if available.</p>
 */
export interface SharePrincipal {
  /**
   * <p>The ID of the recipient.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of the recipient.</p>
   */
  Type: PrincipalType | string | undefined;

  /**
   * <p>The role of the recipient.</p>
   */
  Role: RoleType | string | undefined;
}

export namespace SharePrincipal {
  export const filterSensitiveLog = (obj: SharePrincipal): any => ({
    ...obj,
  });
}

export interface AddResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The users, groups, or organization being granted permission.</p>
   */
  Principals: SharePrincipal[] | undefined;

  /**
   * <p>The notification options.</p>
   */
  NotificationOptions?: NotificationOptions;
}

export namespace AddResourcePermissionsRequest {
  export const filterSensitiveLog = (obj: AddResourcePermissionsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
    ...(obj.NotificationOptions && {
      NotificationOptions: NotificationOptions.filterSensitiveLog(obj.NotificationOptions),
    }),
  });
}

export enum ShareStatusType {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Describes the share results of a resource.</p>
 */
export interface ShareResult {
  /**
   * <p>The ID of the principal.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The ID of the invited user.</p>
   */
  InviteePrincipalId?: string;

  /**
   * <p>The role.</p>
   */
  Role?: RoleType | string;

  /**
   * <p>The status.</p>
   */
  Status?: ShareStatusType | string;

  /**
   * <p>The ID of the resource that was shared.</p>
   */
  ShareId?: string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
}

export namespace ShareResult {
  export const filterSensitiveLog = (obj: ShareResult): any => ({
    ...obj,
    ...(obj.StatusMessage && { StatusMessage: SENSITIVE_STRING }),
  });
}

export interface AddResourcePermissionsResponse {
  /**
   * <p>The share results.</p>
   */
  ShareResults?: ShareResult[];
}

export namespace AddResourcePermissionsResponse {
  export const filterSensitiveLog = (obj: AddResourcePermissionsResponse): any => ({
    ...obj,
    ...(obj.ShareResults && { ShareResults: obj.ShareResults.map((item) => ShareResult.filterSensitiveLog(item)) }),
  });
}

export enum CommentVisibilityType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

export interface CreateCommentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The ID of the parent comment.</p>
   */
  ParentId?: string;

  /**
   * <p>The ID of the root comment in the thread.</p>
   */
  ThreadId?: string;

  /**
   * <p>The text of the comment.</p>
   */
  Text: string | undefined;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   */
  Visibility?: CommentVisibilityType | string;

  /**
   * <p>Set this parameter to TRUE to send an email out to the document collaborators after
   *             the comment is created.</p>
   */
  NotifyCollaborators?: boolean;
}

export namespace CreateCommentRequest {
  export const filterSensitiveLog = (obj: CreateCommentRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a comment.</p>
 */
export interface Comment {
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId: string | undefined;

  /**
   * <p>The ID of the parent comment.</p>
   */
  ParentId?: string;

  /**
   * <p>The ID of the root comment in the thread.</p>
   */
  ThreadId?: string;

  /**
   * <p>The text of the comment.</p>
   */
  Text?: string;

  /**
   * <p>The details of the user who made the comment.</p>
   */
  Contributor?: User;

  /**
   * <p>The time that the comment was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The status of the comment.</p>
   */
  Status?: CommentStatusType | string;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   */
  Visibility?: CommentVisibilityType | string;

  /**
   * <p>If the comment is a reply to another user's comment, this field contains the user
   *             ID of the user being replied to.</p>
   */
  RecipientId?: string;
}

export namespace Comment {
  export const filterSensitiveLog = (obj: Comment): any => ({
    ...obj,
    ...(obj.Text && { Text: SENSITIVE_STRING }),
  });
}

export interface CreateCommentResponse {
  /**
   * <p>The comment that has been created.</p>
   */
  Comment?: Comment;
}

export namespace CreateCommentResponse {
  export const filterSensitiveLog = (obj: CreateCommentResponse): any => ({
    ...obj,
    ...(obj.Comment && { Comment: Comment.filterSensitiveLog(obj.Comment) }),
  });
}

/**
 * <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 */
export interface DocumentLockedForCommentsException extends __SmithyException, $MetadataBearer {
  name: "DocumentLockedForCommentsException";
  $fault: "client";
  Message?: string;
}

export namespace DocumentLockedForCommentsException {
  export const filterSensitiveLog = (obj: DocumentLockedForCommentsException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation is not allowed on the specified comment object.</p>
 */
export interface InvalidCommentOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidCommentOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidCommentOperationException {
  export const filterSensitiveLog = (obj: InvalidCommentOperationException): any => ({
    ...obj,
  });
}

export interface CreateCustomMetadataRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being added to a document
   *             version.</p>
   */
  VersionId?: string;

  /**
   * <p>Custom metadata in the form of name-value pairs.</p>
   */
  CustomMetadata: { [key: string]: string } | undefined;
}

export namespace CreateCustomMetadataRequest {
  export const filterSensitiveLog = (obj: CreateCustomMetadataRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface CreateCustomMetadataResponse {}

export namespace CreateCustomMetadataResponse {
  export const filterSensitiveLog = (obj: CreateCustomMetadataResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The limit has been reached on the number of custom properties for the specified
 *             resource.</p>
 */
export interface CustomMetadataLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "CustomMetadataLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace CustomMetadataLimitExceededException {
  export const filterSensitiveLog = (obj: CustomMetadataLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 */
export interface ConflictingOperationException extends __SmithyException, $MetadataBearer {
  name: "ConflictingOperationException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictingOperationException {
  export const filterSensitiveLog = (obj: ConflictingOperationException): any => ({
    ...obj,
  });
}

export interface CreateFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The name of the new folder.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId: string | undefined;
}

export namespace CreateFolderRequest {
  export const filterSensitiveLog = (obj: CreateFolderRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export enum ResourceStateType {
  ACTIVE = "ACTIVE",
  RECYCLED = "RECYCLED",
  RECYCLING = "RECYCLING",
  RESTORING = "RESTORING",
}

/**
 * <p>Describes a folder.</p>
 */
export interface FolderMetadata {
  /**
   * <p>The ID of the folder.</p>
   */
  Id?: string;

  /**
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

  /**
   * <p>The time when the folder was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time when the folder was updated.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The resource state of the folder.</p>
   */
  ResourceState?: ResourceStateType | string;

  /**
   * <p>The unique identifier created from the subfolders and documents of the
   *             folder.</p>
   */
  Signature?: string;

  /**
   * <p>List of labels on the folder.</p>
   */
  Labels?: string[];

  /**
   * <p>The size of the folder metadata.</p>
   */
  Size?: number;

  /**
   * <p>The size of the latest version of the folder metadata.</p>
   */
  LatestVersionSize?: number;
}

export namespace FolderMetadata {
  export const filterSensitiveLog = (obj: FolderMetadata): any => ({
    ...obj,
  });
}

export interface CreateFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;
}

export namespace CreateFolderResponse {
  export const filterSensitiveLog = (obj: CreateFolderResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface EntityAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace EntityAlreadyExistsException {
  export const filterSensitiveLog = (obj: EntityAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export interface CreateLabelsRequest {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>List of labels to add to the resource.</p>
   */
  Labels: string[] | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;
}

export namespace CreateLabelsRequest {
  export const filterSensitiveLog = (obj: CreateLabelsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface CreateLabelsResponse {}

export namespace CreateLabelsResponse {
  export const filterSensitiveLog = (obj: CreateLabelsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The limit has been reached on the number of labels for the specified
 *             resource.</p>
 */
export interface TooManyLabelsException extends __SmithyException, $MetadataBearer {
  name: "TooManyLabelsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLabelsException {
  export const filterSensitiveLog = (obj: TooManyLabelsException): any => ({
    ...obj,
  });
}

export enum SubscriptionProtocolType {
  HTTPS = "HTTPS",
}

export enum SubscriptionType {
  ALL = "ALL",
}

export interface CreateNotificationSubscriptionRequest {
  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint
   *             is a URL that begins with <code>https</code>.</p>
   */
  Endpoint: string | undefined;

  /**
   * <p>The protocol to use. The supported value is https, which delivers JSON-encoded
   *             messages using HTTPS POST.</p>
   */
  Protocol: SubscriptionProtocolType | string | undefined;

  /**
   * <p>The notification type.</p>
   */
  SubscriptionType: SubscriptionType | string | undefined;
}

export namespace CreateNotificationSubscriptionRequest {
  export const filterSensitiveLog = (obj: CreateNotificationSubscriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subscription.</p>
 */
export interface Subscription {
  /**
   * <p>The ID of the subscription.</p>
   */
  SubscriptionId?: string;

  /**
   * <p>The endpoint of the subscription.</p>
   */
  EndPoint?: string;

  /**
   * <p>The protocol of the subscription.</p>
   */
  Protocol?: SubscriptionProtocolType | string;
}

export namespace Subscription {
  export const filterSensitiveLog = (obj: Subscription): any => ({
    ...obj,
  });
}

export interface CreateNotificationSubscriptionResponse {
  /**
   * <p>The subscription.</p>
   */
  Subscription?: Subscription;
}

export namespace CreateNotificationSubscriptionResponse {
  export const filterSensitiveLog = (obj: CreateNotificationSubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
 */
export interface TooManySubscriptionsException extends __SmithyException, $MetadataBearer {
  name: "TooManySubscriptionsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManySubscriptionsException {
  export const filterSensitiveLog = (obj: TooManySubscriptionsException): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The login name of the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName: string | undefined;

  /**
   * <p>The surname of the user.</p>
   */
  Surname: string | undefined;

  /**
   * <p>The password of the user.</p>
   */
  Password: string | undefined;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The amount of storage for the user.</p>
   */
  StorageRule?: StorageRuleType;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface CreateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

export interface DeactivateUserRequest {
  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;
}

export namespace DeactivateUserRequest {
  export const filterSensitiveLog = (obj: DeactivateUserRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteCommentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The ID of the comment.</p>
   */
  CommentId: string | undefined;
}

export namespace DeleteCommentRequest {
  export const filterSensitiveLog = (obj: DeleteCommentRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteCustomMetadataRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource, either a document or folder.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being deleted from a document
   *             version.</p>
   */
  VersionId?: string;

  /**
   * <p>List of properties to remove.</p>
   */
  Keys?: string[];

  /**
   * <p>Flag to indicate removal of all custom metadata properties from the specified
   *             resource.</p>
   */
  DeleteAll?: boolean;
}

export namespace DeleteCustomMetadataRequest {
  export const filterSensitiveLog = (obj: DeleteCustomMetadataRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteCustomMetadataResponse {}

export namespace DeleteCustomMetadataResponse {
  export const filterSensitiveLog = (obj: DeleteCustomMetadataResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource hierarchy is changing.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export interface DeleteDocumentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;
}

export namespace DeleteDocumentRequest {
  export const filterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export namespace DeleteFolderRequest {
  export const filterSensitiveLog = (obj: DeleteFolderRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteFolderContentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export namespace DeleteFolderContentsRequest {
  export const filterSensitiveLog = (obj: DeleteFolderContentsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteLabelsRequest {
  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>List of labels to delete from the resource.</p>
   */
  Labels?: string[];

  /**
   * <p>Flag to request removal of all labels from the specified resource.</p>
   */
  DeleteAll?: boolean;
}

export namespace DeleteLabelsRequest {
  export const filterSensitiveLog = (obj: DeleteLabelsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DeleteLabelsResponse {}

export namespace DeleteLabelsResponse {
  export const filterSensitiveLog = (obj: DeleteLabelsResponse): any => ({
    ...obj,
  });
}

export interface DeleteNotificationSubscriptionRequest {
  /**
   * <p>The ID of the subscription.</p>
   */
  SubscriptionId: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DeleteNotificationSubscriptionRequest {
  export const filterSensitiveLog = (obj: DeleteNotificationSubscriptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DescribeActivitiesRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The timestamp that determines the starting time of the activities. The response
   *             includes the activities performed after the specified timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>The timestamp that determines the end time of the activities. The response includes
   *             the activities performed before the specified timestamp.</p>
   */
  EndTime?: Date;

  /**
   * <p>The ID of the organization. This is a mandatory parameter when using administrative
   *             API (SigV4) requests.</p>
   */
  OrganizationId?: string;

  /**
   * <p>Specifies which activity types to include in the response. If this field is left
   *             empty, all activity types are returned.</p>
   */
  ActivityTypes?: string;

  /**
   * <p>The document or folder ID for which to describe activity types.</p>
   */
  ResourceId?: string;

  /**
   * <p>The ID of the user who performed the action. The response includes activities
   *             pertaining to this user. This is an optional parameter and is only applicable for
   *             administrative API (SigV4) requests.</p>
   */
  UserId?: string;

  /**
   * <p>Includes indirect activities. An indirect activity results from a direct activity
   *             performed on a parent resource. For example, sharing a parent folder (the direct
   *             activity) shares all of the subfolders and documents within the parent folder (the
   *             indirect activity).</p>
   */
  IncludeIndirectActivities?: boolean;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;
}

export namespace DescribeActivitiesRequest {
  export const filterSensitiveLog = (obj: DescribeActivitiesRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DescribeActivitiesResponse {
  /**
   * <p>The list of activities for the specified user and time period.</p>
   */
  UserActivities?: Activity[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;
}

export namespace DescribeActivitiesResponse {
  export const filterSensitiveLog = (obj: DescribeActivitiesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The pagination marker or limit fields are not valid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
}

export interface DescribeCommentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   */
  Marker?: string;
}

export namespace DescribeCommentsRequest {
  export const filterSensitiveLog = (obj: DescribeCommentsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DescribeCommentsResponse {
  /**
   * <p>The list of comments for the specified document version.</p>
   */
  Comments?: Comment[];

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   */
  Marker?: string;
}

export namespace DescribeCommentsResponse {
  export const filterSensitiveLog = (obj: DescribeCommentsResponse): any => ({
    ...obj,
    ...(obj.Comments && { Comments: obj.Comments.map((item) => Comment.filterSensitiveLog(item)) }),
  });
}

export interface DescribeDocumentVersionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of versions to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>A comma-separated list of values. Specify "INITIALIZED" to include incomplete
   *             versions.</p>
   */
  Include?: string;

  /**
   * <p>Specify "SOURCE" to include initialized versions and a URL for the source
   *             document.</p>
   */
  Fields?: string;
}

export namespace DescribeDocumentVersionsRequest {
  export const filterSensitiveLog = (obj: DescribeDocumentVersionsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export enum DocumentSourceType {
  ORIGINAL = "ORIGINAL",
  WITH_COMMENTS = "WITH_COMMENTS",
}

export enum DocumentStatusType {
  ACTIVE = "ACTIVE",
  INITIALIZED = "INITIALIZED",
}

export enum DocumentThumbnailType {
  LARGE = "LARGE",
  SMALL = "SMALL",
  SMALL_HQ = "SMALL_HQ",
}

/**
 * <p>Describes a version of a document.</p>
 */
export interface DocumentVersionMetadata {
  /**
   * <p>The ID of the version.</p>
   */
  Id?: string;

  /**
   * <p>The name of the version.</p>
   */
  Name?: string;

  /**
   * <p>The content type of the document.</p>
   */
  ContentType?: string;

  /**
   * <p>The size of the document, in bytes.</p>
   */
  Size?: number;

  /**
   * <p>The signature of the document.</p>
   */
  Signature?: string;

  /**
   * <p>The status of the document.</p>
   */
  Status?: DocumentStatusType | string;

  /**
   * <p>The timestamp when the document was first uploaded.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The timestamp when the document was last uploaded.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The timestamp when the content of the document was originally created.</p>
   */
  ContentCreatedTimestamp?: Date;

  /**
   * <p>The timestamp when the content of the document was modified.</p>
   */
  ContentModifiedTimestamp?: Date;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The thumbnail of the document.</p>
   */
  Thumbnail?: { [key: string]: string };

  /**
   * <p>The source of the document.</p>
   */
  Source?: { [key: string]: string };
}

export namespace DocumentVersionMetadata {
  export const filterSensitiveLog = (obj: DocumentVersionMetadata): any => ({
    ...obj,
    ...(obj.Thumbnail && { Thumbnail: SENSITIVE_STRING }),
    ...(obj.Source && { Source: SENSITIVE_STRING }),
  });
}

export interface DescribeDocumentVersionsResponse {
  /**
   * <p>The document versions.</p>
   */
  DocumentVersions?: DocumentVersionMetadata[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeDocumentVersionsResponse {
  export const filterSensitiveLog = (obj: DescribeDocumentVersionsResponse): any => ({
    ...obj,
    ...(obj.DocumentVersions && {
      DocumentVersions: obj.DocumentVersions.map((item) => DocumentVersionMetadata.filterSensitiveLog(item)),
    }),
  });
}

export enum OrderType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum ResourceSortType {
  DATE = "DATE",
  NAME = "NAME",
}

export enum FolderContentType {
  ALL = "ALL",
  DOCUMENT = "DOCUMENT",
  FOLDER = "FOLDER",
}

export interface DescribeFolderContentsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: ResourceSortType | string;

  /**
   * <p>The order for the contents of the folder.</p>
   */
  Order?: OrderType | string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   */
  Marker?: string;

  /**
   * <p>The type of items.</p>
   */
  Type?: FolderContentType | string;

  /**
   * <p>The contents to include. Specify "INITIALIZED" to include initialized
   *             documents.</p>
   */
  Include?: string;
}

export namespace DescribeFolderContentsRequest {
  export const filterSensitiveLog = (obj: DescribeFolderContentsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the document.</p>
 */
export interface DocumentMetadata {
  /**
   * <p>The ID of the document.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

  /**
   * <p>The time when the document was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time when the document was updated.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersionMetadata?: DocumentVersionMetadata;

  /**
   * <p>The resource state.</p>
   */
  ResourceState?: ResourceStateType | string;

  /**
   * <p>List of labels on the document.</p>
   */
  Labels?: string[];
}

export namespace DocumentMetadata {
  export const filterSensitiveLog = (obj: DocumentMetadata): any => ({
    ...obj,
    ...(obj.LatestVersionMetadata && {
      LatestVersionMetadata: DocumentVersionMetadata.filterSensitiveLog(obj.LatestVersionMetadata),
    }),
  });
}

export interface DescribeFolderContentsResponse {
  /**
   * <p>The subfolders in the specified folder.</p>
   */
  Folders?: FolderMetadata[];

  /**
   * <p>The documents in the specified folder.</p>
   */
  Documents?: DocumentMetadata[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeFolderContentsResponse {
  export const filterSensitiveLog = (obj: DescribeFolderContentsResponse): any => ({
    ...obj,
    ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadata.filterSensitiveLog(item)) }),
  });
}

export interface DescribeGroupsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>A query to describe groups by group name.</p>
   */
  SearchQuery: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;
}

export namespace DescribeGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeGroupsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
    ...(obj.SearchQuery && { SearchQuery: SENSITIVE_STRING }),
  });
}

export interface DescribeGroupsResponse {
  /**
   * <p>The list of groups.</p>
   */
  Groups?: GroupMetadata[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional
   *             results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeGroupsResponse): any => ({
    ...obj,
  });
}

export interface DescribeNotificationSubscriptionsRequest {
  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;
}

export namespace DescribeNotificationSubscriptionsRequest {
  export const filterSensitiveLog = (obj: DescribeNotificationSubscriptionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeNotificationSubscriptionsResponse {
  /**
   * <p>The subscriptions.</p>
   */
  Subscriptions?: Subscription[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeNotificationSubscriptionsResponse {
  export const filterSensitiveLog = (obj: DescribeNotificationSubscriptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the principal to filter permissions by.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call)</p>
   */
  Marker?: string;
}

export namespace DescribeResourcePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeResourcePermissionsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export enum RolePermissionType {
  DIRECT = "DIRECT",
  INHERITED = "INHERITED",
}

/**
 * <p>Describes the permissions.</p>
 */
export interface PermissionInfo {
  /**
   * <p>The role of the user.</p>
   */
  Role?: RoleType | string;

  /**
   * <p>The type of permissions.</p>
   */
  Type?: RolePermissionType | string;
}

export namespace PermissionInfo {
  export const filterSensitiveLog = (obj: PermissionInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a resource.</p>
 */
export interface Principal {
  /**
   * <p>The ID of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The type of resource.</p>
   */
  Type?: PrincipalType | string;

  /**
   * <p>The permission information for the resource.</p>
   */
  Roles?: PermissionInfo[];
}

export namespace Principal {
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
}

export interface DescribeResourcePermissionsResponse {
  /**
   * <p>The principals.</p>
   */
  Principals?: Principal[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeResourcePermissionsResponse {
  export const filterSensitiveLog = (obj: DescribeResourcePermissionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeRootFoldersRequest {
  /**
   * <p>Amazon WorkDocs authentication token.</p>
   */
  AuthenticationToken: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;
}

export namespace DescribeRootFoldersRequest {
  export const filterSensitiveLog = (obj: DescribeRootFoldersRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface DescribeRootFoldersResponse {
  /**
   * <p>The user's special folders.</p>
   */
  Folders?: FolderMetadata[];

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;
}

export namespace DescribeRootFoldersResponse {
  export const filterSensitiveLog = (obj: DescribeRootFoldersResponse): any => ({
    ...obj,
  });
}

export enum UserFilterType {
  ACTIVE_PENDING = "ACTIVE_PENDING",
  ALL = "ALL",
}

export enum UserSortType {
  FULL_NAME = "FULL_NAME",
  STORAGE_LIMIT = "STORAGE_LIMIT",
  STORAGE_USED = "STORAGE_USED",
  USER_NAME = "USER_NAME",
  USER_STATUS = "USER_STATUS",
}

export interface DescribeUsersRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The IDs of the users.</p>
   */
  UserIds?: string;

  /**
   * <p>A query to filter users by user name.</p>
   */
  Query?: string;

  /**
   * <p>The state of the users. Specify "ALL" to include inactive users.</p>
   */
  Include?: UserFilterType | string;

  /**
   * <p>The order for the results.</p>
   */
  Order?: OrderType | string;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: UserSortType | string;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>A comma-separated list of values. Specify "STORAGE_METADATA" to include the user
   *             storage quota and utilization information.</p>
   */
  Fields?: string;
}

export namespace DescribeUsersRequest {
  export const filterSensitiveLog = (obj: DescribeUsersRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
    ...(obj.Query && { Query: SENSITIVE_STRING }),
  });
}

export interface DescribeUsersResponse {
  /**
   * <p>The users.</p>
   */
  Users?: User[];

  /**
   * @deprecated
   *
   * <p>The total number of users included in the results.</p>
   */
  TotalNumberOfUsers?: number;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeUsersResponse {
  export const filterSensitiveLog = (obj: DescribeUsersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
 */
export interface RequestedEntityTooLargeException extends __SmithyException, $MetadataBearer {
  name: "RequestedEntityTooLargeException";
  $fault: "client";
  Message?: string;
}

export namespace RequestedEntityTooLargeException {
  export const filterSensitiveLog = (obj: RequestedEntityTooLargeException): any => ({
    ...obj,
  });
}

export interface GetCurrentUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token.</p>
   */
  AuthenticationToken: string | undefined;
}

export namespace GetCurrentUserRequest {
  export const filterSensitiveLog = (obj: GetCurrentUserRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetCurrentUserResponse {
  /**
   * <p>Metadata of the user.</p>
   */
  User?: User;
}

export namespace GetCurrentUserResponse {
  export const filterSensitiveLog = (obj: GetCurrentUserResponse): any => ({
    ...obj,
  });
}

export interface GetDocumentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>Set this to <code>TRUE</code> to include custom metadata in the response.</p>
   */
  IncludeCustomMetadata?: boolean;
}

export namespace GetDocumentRequest {
  export const filterSensitiveLog = (obj: GetDocumentRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetDocumentResponse {
  /**
   * <p>The metadata details of the document.</p>
   */
  Metadata?: DocumentMetadata;

  /**
   * <p>The custom metadata on the document.</p>
   */
  CustomMetadata?: { [key: string]: string };
}

export namespace GetDocumentResponse {
  export const filterSensitiveLog = (obj: GetDocumentResponse): any => ({
    ...obj,
    ...(obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) }),
  });
}

/**
 * <p>The password is invalid.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPasswordException {
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj,
  });
}

export interface GetDocumentPathRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   */
  Limit?: number;

  /**
   * <p>A comma-separated list of values. Specify <code>NAME</code> to include the names of
   *             the parent folders.</p>
   */
  Fields?: string;

  /**
   * <p>This value is not supported.</p>
   */
  Marker?: string;
}

export namespace GetDocumentPathRequest {
  export const filterSensitiveLog = (obj: GetDocumentPathRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the resource path.</p>
 */
export interface ResourcePathComponent {
  /**
   * <p>The ID of the resource path.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource path.</p>
   */
  Name?: string;
}

export namespace ResourcePathComponent {
  export const filterSensitiveLog = (obj: ResourcePathComponent): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the path information of a resource.</p>
 */
export interface ResourcePath {
  /**
   * <p>The components of the resource path.</p>
   */
  Components?: ResourcePathComponent[];
}

export namespace ResourcePath {
  export const filterSensitiveLog = (obj: ResourcePath): any => ({
    ...obj,
  });
}

export interface GetDocumentPathResponse {
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
}

export namespace GetDocumentPathResponse {
  export const filterSensitiveLog = (obj: GetDocumentPathResponse): any => ({
    ...obj,
  });
}

export interface GetDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The version ID of the document.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>A comma-separated list of values. Specify "SOURCE" to include a URL for the source
   *             document.</p>
   */
  Fields?: string;

  /**
   * <p>Set this to TRUE to include custom metadata in the response.</p>
   */
  IncludeCustomMetadata?: boolean;
}

export namespace GetDocumentVersionRequest {
  export const filterSensitiveLog = (obj: GetDocumentVersionRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetDocumentVersionResponse {
  /**
   * <p>The version metadata.</p>
   */
  Metadata?: DocumentVersionMetadata;

  /**
   * <p>The custom metadata on the document version.</p>
   */
  CustomMetadata?: { [key: string]: string };
}

export namespace GetDocumentVersionResponse {
  export const filterSensitiveLog = (obj: GetDocumentVersionResponse): any => ({
    ...obj,
    ...(obj.Metadata && { Metadata: DocumentVersionMetadata.filterSensitiveLog(obj.Metadata) }),
  });
}

export interface GetFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>Set to TRUE to include custom metadata in the response.</p>
   */
  IncludeCustomMetadata?: boolean;
}

export namespace GetFolderRequest {
  export const filterSensitiveLog = (obj: GetFolderRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;

  /**
   * <p>The custom metadata on the folder.</p>
   */
  CustomMetadata?: { [key: string]: string };
}

export namespace GetFolderResponse {
  export const filterSensitiveLog = (obj: GetFolderResponse): any => ({
    ...obj,
  });
}

export interface GetFolderPathRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   */
  Limit?: number;

  /**
   * <p>A comma-separated list of values. Specify "NAME" to include the names of the parent
   *             folders.</p>
   */
  Fields?: string;

  /**
   * <p>This value is not supported.</p>
   */
  Marker?: string;
}

export namespace GetFolderPathRequest {
  export const filterSensitiveLog = (obj: GetFolderPathRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetFolderPathResponse {
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
}

export namespace GetFolderPathResponse {
  export const filterSensitiveLog = (obj: GetFolderPathResponse): any => ({
    ...obj,
  });
}

export enum ResourceCollectionType {
  SHARED_WITH_ME = "SHARED_WITH_ME",
}

export interface GetResourcesRequest {
  /**
   * <p>The Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The user ID for the resource collection. This is a required field for accessing the
   *             API operation using IAM credentials.</p>
   */
  UserId?: string;

  /**
   * <p>The collection type.</p>
   */
  CollectionType?: ResourceCollectionType | string;

  /**
   * <p>The maximum number of resources to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous call.</p>
   */
  Marker?: string;
}

export namespace GetResourcesRequest {
  export const filterSensitiveLog = (obj: GetResourcesRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface GetResourcesResponse {
  /**
   * <p>The folders in the specified folder.</p>
   */
  Folders?: FolderMetadata[];

  /**
   * <p>The documents in the specified collection.</p>
   */
  Documents?: DocumentMetadata[];

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace GetResourcesResponse {
  export const filterSensitiveLog = (obj: GetResourcesResponse): any => ({
    ...obj,
    ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadata.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>This exception is thrown when a valid checkout ID is not presented on document
 *             version upload calls for a document that has been checked out from Web client.</p>
 */
export interface DraftUploadOutOfSyncException extends __SmithyException, $MetadataBearer {
  name: "DraftUploadOutOfSyncException";
  $fault: "client";
  Message?: string;
}

export namespace DraftUploadOutOfSyncException {
  export const filterSensitiveLog = (obj: DraftUploadOutOfSyncException): any => ({
    ...obj,
  });
}

export interface InitiateDocumentVersionUploadRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  Id?: string;

  /**
   * <p>The name of the document.</p>
   */
  Name?: string;

  /**
   * <p>The timestamp when the content of the document was originally created.</p>
   */
  ContentCreatedTimestamp?: Date;

  /**
   * <p>The timestamp when the content of the document was modified.</p>
   */
  ContentModifiedTimestamp?: Date;

  /**
   * <p>The content type of the document.</p>
   */
  ContentType?: string;

  /**
   * <p>The size of the document, in bytes.</p>
   */
  DocumentSizeInBytes?: number;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId: string | undefined;
}

export namespace InitiateDocumentVersionUploadRequest {
  export const filterSensitiveLog = (obj: InitiateDocumentVersionUploadRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes the upload.</p>
 */
export interface UploadMetadata {
  /**
   * <p>The URL of the upload.</p>
   */
  UploadUrl?: string;

  /**
   * <p>The signed headers.</p>
   */
  SignedHeaders?: { [key: string]: string };
}

export namespace UploadMetadata {
  export const filterSensitiveLog = (obj: UploadMetadata): any => ({
    ...obj,
    ...(obj.UploadUrl && { UploadUrl: SENSITIVE_STRING }),
  });
}

export interface InitiateDocumentVersionUploadResponse {
  /**
   * <p>The document metadata.</p>
   */
  Metadata?: DocumentMetadata;

  /**
   * <p>The upload metadata.</p>
   */
  UploadMetadata?: UploadMetadata;
}

export namespace InitiateDocumentVersionUploadResponse {
  export const filterSensitiveLog = (obj: InitiateDocumentVersionUploadResponse): any => ({
    ...obj,
    ...(obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) }),
    ...(obj.UploadMetadata && { UploadMetadata: UploadMetadata.filterSensitiveLog(obj.UploadMetadata) }),
  });
}

/**
 * <p>The resource is already checked out.</p>
 */
export interface ResourceAlreadyCheckedOutException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyCheckedOutException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyCheckedOutException {
  export const filterSensitiveLog = (obj: ResourceAlreadyCheckedOutException): any => ({
    ...obj,
  });
}

/**
 * <p>The storage limit has been exceeded.</p>
 */
export interface StorageLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "StorageLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace StorageLimitExceededException {
  export const filterSensitiveLog = (obj: StorageLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The storage limit will be exceeded.</p>
 */
export interface StorageLimitWillExceedException extends __SmithyException, $MetadataBearer {
  name: "StorageLimitWillExceedException";
  $fault: "client";
  Message?: string;
}

export namespace StorageLimitWillExceedException {
  export const filterSensitiveLog = (obj: StorageLimitWillExceedException): any => ({
    ...obj,
  });
}

export interface RemoveAllResourcePermissionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace RemoveAllResourcePermissionsRequest {
  export const filterSensitiveLog = (obj: RemoveAllResourcePermissionsRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface RemoveResourcePermissionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The principal ID of the resource.</p>
   */
  PrincipalId: string | undefined;

  /**
   * <p>The principal type of the resource.</p>
   */
  PrincipalType?: PrincipalType | string;
}

export namespace RemoveResourcePermissionRequest {
  export const filterSensitiveLog = (obj: RemoveResourcePermissionRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface UpdateDocumentRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The name of the document.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

  /**
   * <p>The resource state of the document. Only ACTIVE and RECYCLED are
   *             supported.</p>
   */
  ResourceState?: ResourceStateType | string;
}

export namespace UpdateDocumentRequest {
  export const filterSensitiveLog = (obj: UpdateDocumentRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The operation is invalid.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

export enum DocumentVersionStatus {
  ACTIVE = "ACTIVE",
}

export interface UpdateDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The version ID of the document.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The status of the version.</p>
   */
  VersionStatus?: DocumentVersionStatus | string;
}

export namespace UpdateDocumentVersionRequest {
  export const filterSensitiveLog = (obj: UpdateDocumentVersionRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface UpdateFolderRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

  /**
   * <p>The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from
   *             the API.</p>
   */
  ResourceState?: ResourceStateType | string;
}

export namespace UpdateFolderRequest {
  export const filterSensitiveLog = (obj: UpdateFolderRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The last user in the organization is being deactivated.</p>
 */
export interface DeactivatingLastSystemUserException extends __SmithyException, $MetadataBearer {
  name: "DeactivatingLastSystemUserException";
  $fault: "client";
  Message?: string;
  Code?: string;
}

export namespace DeactivatingLastSystemUserException {
  export const filterSensitiveLog = (obj: DeactivatingLastSystemUserException): any => ({
    ...obj,
  });
}

/**
 * <p>The user is undergoing transfer of ownership.</p>
 */
export interface IllegalUserStateException extends __SmithyException, $MetadataBearer {
  name: "IllegalUserStateException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalUserStateException {
  export const filterSensitiveLog = (obj: IllegalUserStateException): any => ({
    ...obj,
  });
}

export enum BooleanEnumType {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export interface UpdateUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The type of the user.</p>
   */
  Type?: UserType | string;

  /**
   * <p>The amount of storage for the user.</p>
   */
  StorageRule?: StorageRuleType;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?: LocaleType | string;

  /**
   * <p>Boolean value to determine whether the user is granted Poweruser privileges.</p>
   */
  GrantPoweruserPrivileges?: BooleanEnumType | string;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
    ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
