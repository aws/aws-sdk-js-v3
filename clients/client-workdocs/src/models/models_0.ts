// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { WorkDocsServiceException as __BaseException } from "./WorkDocsServiceException";

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

/**
 * <p>The resource hierarchy is changing.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource does not exist.</p>
 */
export class EntityNotExistsException extends __BaseException {
  readonly name: "EntityNotExistsException" = "EntityNotExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The IDs of the non-existent resources.</p>
   */
  EntityIds?: string[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotExistsException, __BaseException>) {
    super({
      name: "EntityNotExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotExistsException.prototype);
    this.Message = opts.Message;
    this.EntityIds = opts.EntityIds;
  }
}

/**
 * <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 */
export class FailedDependencyException extends __BaseException {
  readonly name: "FailedDependencyException" = "FailedDependencyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyException, __BaseException>) {
    super({
      name: "FailedDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified document version is not in the INITIALIZED state.</p>
 */
export class ProhibitedStateException extends __BaseException {
  readonly name: "ProhibitedStateException" = "ProhibitedStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProhibitedStateException, __BaseException>) {
    super({
      name: "ProhibitedStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProhibitedStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the dependencies is unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation is not permitted.</p>
 */
export class UnauthorizedOperationException extends __BaseException {
  readonly name: "UnauthorizedOperationException" = "UnauthorizedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperationException, __BaseException>) {
    super({
      name: "UnauthorizedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperationException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>The caller does not have access to perform the action on the resource.</p>
 */
export class UnauthorizedResourceAccessException extends __BaseException {
  readonly name: "UnauthorizedResourceAccessException" = "UnauthorizedResourceAccessException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedResourceAccessException, __BaseException>) {
    super({
      name: "UnauthorizedResourceAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedResourceAccessException.prototype);
    this.Message = opts.Message;
  }
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

export interface ActivateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
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

export interface AddResourcePermissionsResponse {
  /**
   * <p>The share results.</p>
   */
  ShareResults?: ShareResult[];
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

export interface CreateCommentResponse {
  /**
   * <p>The comment that has been created.</p>
   */
  Comment?: Comment;
}

/**
 * <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 */
export class DocumentLockedForCommentsException extends __BaseException {
  readonly name: "DocumentLockedForCommentsException" = "DocumentLockedForCommentsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DocumentLockedForCommentsException, __BaseException>) {
    super({
      name: "DocumentLockedForCommentsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DocumentLockedForCommentsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not allowed on the specified comment object.</p>
 */
export class InvalidCommentOperationException extends __BaseException {
  readonly name: "InvalidCommentOperationException" = "InvalidCommentOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCommentOperationException, __BaseException>) {
    super({
      name: "InvalidCommentOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCommentOperationException.prototype);
    this.Message = opts.Message;
  }
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
  CustomMetadata: Record<string, string> | undefined;
}

export interface CreateCustomMetadataResponse {}

/**
 * <p>The limit has been reached on the number of custom properties for the specified
 *             resource.</p>
 */
export class CustomMetadataLimitExceededException extends __BaseException {
  readonly name: "CustomMetadataLimitExceededException" = "CustomMetadataLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomMetadataLimitExceededException, __BaseException>) {
    super({
      name: "CustomMetadataLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomMetadataLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 */
export class ConflictingOperationException extends __BaseException {
  readonly name: "ConflictingOperationException" = "ConflictingOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingOperationException, __BaseException>) {
    super({
      name: "ConflictingOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingOperationException.prototype);
    this.Message = opts.Message;
  }
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

export interface CreateFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;
}

/**
 * <p>The resource already exists.</p>
 */
export class EntityAlreadyExistsException extends __BaseException {
  readonly name: "EntityAlreadyExistsException" = "EntityAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
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

export interface CreateLabelsResponse {}

/**
 * <p>The limit has been reached on the number of labels for the specified
 *             resource.</p>
 */
export class TooManyLabelsException extends __BaseException {
  readonly name: "TooManyLabelsException" = "TooManyLabelsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLabelsException, __BaseException>) {
    super({
      name: "TooManyLabelsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLabelsException.prototype);
    this.Message = opts.Message;
  }
}

export enum SubscriptionProtocolType {
  HTTPS = "HTTPS",
  SQS = "SQS",
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

export interface CreateNotificationSubscriptionResponse {
  /**
   * <p>The subscription.</p>
   */
  Subscription?: Subscription;
}

/**
 * <p>The pagination marker or limit fields are not valid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
 */
export class TooManySubscriptionsException extends __BaseException {
  readonly name: "TooManySubscriptionsException" = "TooManySubscriptionsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManySubscriptionsException, __BaseException>) {
    super({
      name: "TooManySubscriptionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManySubscriptionsException.prototype);
    this.Message = opts.Message;
  }
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

export interface CreateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
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

export interface DeleteCustomMetadataResponse {}

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

export interface DeleteDocumentVersionRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of a document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The version ID of a document.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>When set to <code>TRUE</code>, deletes the specified version and <i>all prior versions</i> of a document.</p>
   */
  DeletePriorVersions: boolean | undefined;
}

/**
 * <p>The operation is invalid.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
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

export interface DeleteLabelsResponse {}

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
  Thumbnail?: Record<string, string>;

  /**
   * <p>The source of the document.</p>
   */
  Source?: Record<string, string>;
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

/**
 * <p>The password is invalid.</p>
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>A query to filter users by user name. Remember the following about the <code>Userids</code> and <code>Query</code> parameters:</p>
   *         <ul>
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

/**
 * <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
 */
export class RequestedEntityTooLargeException extends __BaseException {
  readonly name: "RequestedEntityTooLargeException" = "RequestedEntityTooLargeException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestedEntityTooLargeException, __BaseException>) {
    super({
      name: "RequestedEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestedEntityTooLargeException.prototype);
    this.Message = opts.Message;
  }
}

export interface GetCurrentUserRequest {
  /**
   * <p>Amazon WorkDocs authentication token.</p>
   */
  AuthenticationToken: string | undefined;
}

export interface GetCurrentUserResponse {
  /**
   * <p>Metadata of the user.</p>
   */
  User?: User;
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

export interface GetDocumentResponse {
  /**
   * <p>The metadata details of the document.</p>
   */
  Metadata?: DocumentMetadata;

  /**
   * <p>The custom metadata on the document.</p>
   */
  CustomMetadata?: Record<string, string>;
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

/**
 * <p>Describes the path information of a resource.</p>
 */
export interface ResourcePath {
  /**
   * <p>The components of the resource path.</p>
   */
  Components?: ResourcePathComponent[];
}

export interface GetDocumentPathResponse {
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
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

export interface GetDocumentVersionResponse {
  /**
   * <p>The version metadata.</p>
   */
  Metadata?: DocumentVersionMetadata;

  /**
   * <p>The custom metadata on the document version.</p>
   */
  CustomMetadata?: Record<string, string>;
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

export interface GetFolderResponse {
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;

  /**
   * <p>The custom metadata on the folder.</p>
   */
  CustomMetadata?: Record<string, string>;
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

export interface GetFolderPathResponse {
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
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

/**
 * <p>This exception is thrown when a valid checkout ID is not presented on document
 *             version upload calls for a document that has been checked out from Web client.</p>
 */
export class DraftUploadOutOfSyncException extends __BaseException {
  readonly name: "DraftUploadOutOfSyncException" = "DraftUploadOutOfSyncException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DraftUploadOutOfSyncException, __BaseException>) {
    super({
      name: "DraftUploadOutOfSyncException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DraftUploadOutOfSyncException.prototype);
    this.Message = opts.Message;
  }
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
  ParentFolderId?: string;
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
  SignedHeaders?: Record<string, string>;
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

/**
 * <p>The resource is already checked out.</p>
 */
export class ResourceAlreadyCheckedOutException extends __BaseException {
  readonly name: "ResourceAlreadyCheckedOutException" = "ResourceAlreadyCheckedOutException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyCheckedOutException, __BaseException>) {
    super({
      name: "ResourceAlreadyCheckedOutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyCheckedOutException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The storage limit has been exceeded.</p>
 */
export class StorageLimitExceededException extends __BaseException {
  readonly name: "StorageLimitExceededException" = "StorageLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageLimitExceededException, __BaseException>) {
    super({
      name: "StorageLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The storage limit will be exceeded.</p>
 */
export class StorageLimitWillExceedException extends __BaseException {
  readonly name: "StorageLimitWillExceedException" = "StorageLimitWillExceedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StorageLimitWillExceedException, __BaseException>) {
    super({
      name: "StorageLimitWillExceedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StorageLimitWillExceedException.prototype);
    this.Message = opts.Message;
  }
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

export interface RestoreDocumentVersionsRequest {
  /**
   * <p>Amazon WorkDocs authentication token. Not required when using AWS administrator credentials to access the API.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;
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

/**
 * <p>The last user in the organization is being deactivated.</p>
 */
export class DeactivatingLastSystemUserException extends __BaseException {
  readonly name: "DeactivatingLastSystemUserException" = "DeactivatingLastSystemUserException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeactivatingLastSystemUserException, __BaseException>) {
    super({
      name: "DeactivatingLastSystemUserException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeactivatingLastSystemUserException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>The user is undergoing transfer of ownership.</p>
 */
export class IllegalUserStateException extends __BaseException {
  readonly name: "IllegalUserStateException" = "IllegalUserStateException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalUserStateException, __BaseException>) {
    super({
      name: "IllegalUserStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalUserStateException.prototype);
    this.Message = opts.Message;
  }
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

export interface UpdateUserResponse {
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

/**
 * @internal
 */
export const AbortDocumentVersionUploadRequestFilterSensitiveLog = (obj: AbortDocumentVersionUploadRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivateUserRequestFilterSensitiveLog = (obj: ActivateUserRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StorageRuleTypeFilterSensitiveLog = (obj: StorageRuleType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserStorageMetadataFilterSensitiveLog = (obj: UserStorageMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActivateUserResponseFilterSensitiveLog = (obj: ActivateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const CommentMetadataFilterSensitiveLog = (obj: CommentMetadata): any => ({
  ...obj,
  ...(obj.Contributor && { Contributor: UserFilterSensitiveLog(obj.Contributor) }),
});

/**
 * @internal
 */
export const UserMetadataFilterSensitiveLog = (obj: UserMetadata): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResourceMetadataFilterSensitiveLog = (obj: ResourceMetadata): any => ({
  ...obj,
  ...(obj.Owner && { Owner: UserMetadataFilterSensitiveLog(obj.Owner) }),
});

/**
 * @internal
 */
export const GroupMetadataFilterSensitiveLog = (obj: GroupMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParticipantsFilterSensitiveLog = (obj: Participants): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserMetadataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ActivityFilterSensitiveLog = (obj: Activity): any => ({
  ...obj,
  ...(obj.Initiator && { Initiator: UserMetadataFilterSensitiveLog(obj.Initiator) }),
  ...(obj.Participants && { Participants: ParticipantsFilterSensitiveLog(obj.Participants) }),
  ...(obj.ResourceMetadata && { ResourceMetadata: ResourceMetadataFilterSensitiveLog(obj.ResourceMetadata) }),
  ...(obj.OriginalParent && { OriginalParent: ResourceMetadataFilterSensitiveLog(obj.OriginalParent) }),
  ...(obj.CommentMetadata && { CommentMetadata: CommentMetadataFilterSensitiveLog(obj.CommentMetadata) }),
});

/**
 * @internal
 */
export const NotificationOptionsFilterSensitiveLog = (obj: NotificationOptions): any => ({
  ...obj,
  ...(obj.EmailMessage && { EmailMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SharePrincipalFilterSensitiveLog = (obj: SharePrincipal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddResourcePermissionsRequestFilterSensitiveLog = (obj: AddResourcePermissionsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  ...(obj.NotificationOptions && {
    NotificationOptions: NotificationOptionsFilterSensitiveLog(obj.NotificationOptions),
  }),
});

/**
 * @internal
 */
export const ShareResultFilterSensitiveLog = (obj: ShareResult): any => ({
  ...obj,
  ...(obj.StatusMessage && { StatusMessage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AddResourcePermissionsResponseFilterSensitiveLog = (obj: AddResourcePermissionsResponse): any => ({
  ...obj,
  ...(obj.ShareResults && { ShareResults: obj.ShareResults.map((item) => ShareResultFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateCommentRequestFilterSensitiveLog = (obj: CreateCommentRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  ...(obj.Text && { Text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CommentFilterSensitiveLog = (obj: Comment): any => ({
  ...obj,
  ...(obj.Text && { Text: SENSITIVE_STRING }),
  ...(obj.Contributor && { Contributor: UserFilterSensitiveLog(obj.Contributor) }),
});

/**
 * @internal
 */
export const CreateCommentResponseFilterSensitiveLog = (obj: CreateCommentResponse): any => ({
  ...obj,
  ...(obj.Comment && { Comment: CommentFilterSensitiveLog(obj.Comment) }),
});

/**
 * @internal
 */
export const CreateCustomMetadataRequestFilterSensitiveLog = (obj: CreateCustomMetadataRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateCustomMetadataResponseFilterSensitiveLog = (obj: CreateCustomMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderRequestFilterSensitiveLog = (obj: CreateFolderRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FolderMetadataFilterSensitiveLog = (obj: FolderMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFolderResponseFilterSensitiveLog = (obj: CreateFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelsRequestFilterSensitiveLog = (obj: CreateLabelsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateLabelsResponseFilterSensitiveLog = (obj: CreateLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotificationSubscriptionRequestFilterSensitiveLog = (
  obj: CreateNotificationSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubscriptionFilterSensitiveLog = (obj: Subscription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNotificationSubscriptionResponseFilterSensitiveLog = (
  obj: CreateNotificationSubscriptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const DeactivateUserRequestFilterSensitiveLog = (obj: DeactivateUserRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteCommentRequestFilterSensitiveLog = (obj: DeleteCommentRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteCustomMetadataRequestFilterSensitiveLog = (obj: DeleteCustomMetadataRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteCustomMetadataResponseFilterSensitiveLog = (obj: DeleteCustomMetadataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDocumentRequestFilterSensitiveLog = (obj: DeleteDocumentRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteDocumentVersionRequestFilterSensitiveLog = (obj: DeleteDocumentVersionRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteFolderRequestFilterSensitiveLog = (obj: DeleteFolderRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteFolderContentsRequestFilterSensitiveLog = (obj: DeleteFolderContentsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteLabelsRequestFilterSensitiveLog = (obj: DeleteLabelsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteLabelsResponseFilterSensitiveLog = (obj: DeleteLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotificationSubscriptionRequestFilterSensitiveLog = (
  obj: DeleteNotificationSubscriptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeActivitiesRequestFilterSensitiveLog = (obj: DescribeActivitiesRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeActivitiesResponseFilterSensitiveLog = (obj: DescribeActivitiesResponse): any => ({
  ...obj,
  ...(obj.UserActivities && { UserActivities: obj.UserActivities.map((item) => ActivityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeCommentsRequestFilterSensitiveLog = (obj: DescribeCommentsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeCommentsResponseFilterSensitiveLog = (obj: DescribeCommentsResponse): any => ({
  ...obj,
  ...(obj.Comments && { Comments: obj.Comments.map((item) => CommentFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeDocumentVersionsRequestFilterSensitiveLog = (obj: DescribeDocumentVersionsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DocumentVersionMetadataFilterSensitiveLog = (obj: DocumentVersionMetadata): any => ({
  ...obj,
  ...(obj.Thumbnail && { Thumbnail: SENSITIVE_STRING }),
  ...(obj.Source && { Source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeDocumentVersionsResponseFilterSensitiveLog = (obj: DescribeDocumentVersionsResponse): any => ({
  ...obj,
  ...(obj.DocumentVersions && {
    DocumentVersions: obj.DocumentVersions.map((item) => DocumentVersionMetadataFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeFolderContentsRequestFilterSensitiveLog = (obj: DescribeFolderContentsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DocumentMetadataFilterSensitiveLog = (obj: DocumentMetadata): any => ({
  ...obj,
  ...(obj.LatestVersionMetadata && {
    LatestVersionMetadata: DocumentVersionMetadataFilterSensitiveLog(obj.LatestVersionMetadata),
  }),
});

/**
 * @internal
 */
export const DescribeFolderContentsResponseFilterSensitiveLog = (obj: DescribeFolderContentsResponse): any => ({
  ...obj,
  ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const DescribeGroupsRequestFilterSensitiveLog = (obj: DescribeGroupsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  ...(obj.SearchQuery && { SearchQuery: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeGroupsResponseFilterSensitiveLog = (obj: DescribeGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationSubscriptionsRequestFilterSensitiveLog = (
  obj: DescribeNotificationSubscriptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationSubscriptionsResponseFilterSensitiveLog = (
  obj: DescribeNotificationSubscriptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePermissionsRequestFilterSensitiveLog = (obj: DescribeResourcePermissionsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PermissionInfoFilterSensitiveLog = (obj: PermissionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrincipalFilterSensitiveLog = (obj: Principal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePermissionsResponseFilterSensitiveLog = (
  obj: DescribeResourcePermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRootFoldersRequestFilterSensitiveLog = (obj: DescribeRootFoldersRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeRootFoldersResponseFilterSensitiveLog = (obj: DescribeRootFoldersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUsersRequestFilterSensitiveLog = (obj: DescribeUsersRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
  ...(obj.Query && { Query: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeUsersResponseFilterSensitiveLog = (obj: DescribeUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetCurrentUserRequestFilterSensitiveLog = (obj: GetCurrentUserRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCurrentUserResponseFilterSensitiveLog = (obj: GetCurrentUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const GetDocumentRequestFilterSensitiveLog = (obj: GetDocumentRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDocumentResponseFilterSensitiveLog = (obj: GetDocumentResponse): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: DocumentMetadataFilterSensitiveLog(obj.Metadata) }),
});

/**
 * @internal
 */
export const GetDocumentPathRequestFilterSensitiveLog = (obj: GetDocumentPathRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResourcePathComponentFilterSensitiveLog = (obj: ResourcePathComponent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcePathFilterSensitiveLog = (obj: ResourcePath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDocumentPathResponseFilterSensitiveLog = (obj: GetDocumentPathResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDocumentVersionRequestFilterSensitiveLog = (obj: GetDocumentVersionRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDocumentVersionResponseFilterSensitiveLog = (obj: GetDocumentVersionResponse): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: DocumentVersionMetadataFilterSensitiveLog(obj.Metadata) }),
});

/**
 * @internal
 */
export const GetFolderRequestFilterSensitiveLog = (obj: GetFolderRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFolderResponseFilterSensitiveLog = (obj: GetFolderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFolderPathRequestFilterSensitiveLog = (obj: GetFolderPathRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFolderPathResponseFilterSensitiveLog = (obj: GetFolderPathResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcesRequestFilterSensitiveLog = (obj: GetResourcesRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetResourcesResponseFilterSensitiveLog = (obj: GetResourcesResponse): any => ({
  ...obj,
  ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const InitiateDocumentVersionUploadRequestFilterSensitiveLog = (
  obj: InitiateDocumentVersionUploadRequest
): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UploadMetadataFilterSensitiveLog = (obj: UploadMetadata): any => ({
  ...obj,
  ...(obj.UploadUrl && { UploadUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateDocumentVersionUploadResponseFilterSensitiveLog = (
  obj: InitiateDocumentVersionUploadResponse
): any => ({
  ...obj,
  ...(obj.Metadata && { Metadata: DocumentMetadataFilterSensitiveLog(obj.Metadata) }),
  ...(obj.UploadMetadata && { UploadMetadata: UploadMetadataFilterSensitiveLog(obj.UploadMetadata) }),
});

/**
 * @internal
 */
export const RemoveAllResourcePermissionsRequestFilterSensitiveLog = (
  obj: RemoveAllResourcePermissionsRequest
): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RemoveResourcePermissionRequestFilterSensitiveLog = (obj: RemoveResourcePermissionRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RestoreDocumentVersionsRequestFilterSensitiveLog = (obj: RestoreDocumentVersionsRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDocumentRequestFilterSensitiveLog = (obj: UpdateDocumentRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDocumentVersionRequestFilterSensitiveLog = (obj: UpdateDocumentVersionRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateFolderRequestFilterSensitiveLog = (obj: UpdateFolderRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserRequestFilterSensitiveLog = (obj: UpdateUserRequest): any => ({
  ...obj,
  ...(obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserResponseFilterSensitiveLog = (obj: UpdateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});
