import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AbortDocumentVersionUploadRequest {
  __type?: "AbortDocumentVersionUploadRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is AbortDocumentVersionUploadRequest {
    return __isa(o, "AbortDocumentVersionUploadRequest");
  }
}

export interface ActivateUserRequest {
  __type?: "ActivateUserRequest";
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

export namespace ActivateUserRequest {
  export function isa(o: any): o is ActivateUserRequest {
    return __isa(o, "ActivateUserRequest");
  }
}

export interface ActivateUserResponse {
  __type?: "ActivateUserResponse";
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace ActivateUserResponse {
  export function isa(o: any): o is ActivateUserResponse {
    return __isa(o, "ActivateUserResponse");
  }
}

/**
 * <p>Describes the activity information.</p>
 */
export interface Activity {
  __type?: "Activity";
  /**
   * <p>Metadata of the commenting activity. This is an optional field and is filled for
   *             commenting activities.</p>
   */
  CommentMetadata?: CommentMetadata;

  /**
   * <p>The user who performed the action.</p>
   */
  Initiator?: UserMetadata;

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
   * <p>The original parent of the resource. This is an optional field and is filled for
   *             move activities.</p>
   */
  OriginalParent?: ResourceMetadata;

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
   * <p>The timestamp when the action was performed.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The activity type.</p>
   */
  Type?: ActivityType | string;
}

export namespace Activity {
  export function isa(o: any): o is Activity {
    return __isa(o, "Activity");
  }
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
  FOLDER_UNSHARED = "FOLDER_UNSHARED"
}

export interface AddResourcePermissionsRequest {
  __type?: "AddResourcePermissionsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The notification options.</p>
   */
  NotificationOptions?: NotificationOptions;

  /**
   * <p>The users, groups, or organization being granted permission.</p>
   */
  Principals: Array<SharePrincipal> | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace AddResourcePermissionsRequest {
  export function isa(o: any): o is AddResourcePermissionsRequest {
    return __isa(o, "AddResourcePermissionsRequest");
  }
}

export interface AddResourcePermissionsResponse {
  __type?: "AddResourcePermissionsResponse";
  /**
   * <p>The share results.</p>
   */
  ShareResults?: Array<ShareResult>;
}

export namespace AddResourcePermissionsResponse {
  export function isa(o: any): o is AddResourcePermissionsResponse {
    return __isa(o, "AddResourcePermissionsResponse");
  }
}

export enum BooleanEnumType {
  FALSE = "FALSE",
  TRUE = "TRUE"
}

/**
 * <p>Describes a comment.</p>
 */
export interface Comment {
  __type?: "Comment";
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId: string | undefined;

  /**
   * <p>The details of the user who made the comment.</p>
   */
  Contributor?: User;

  /**
   * <p>The time that the comment was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the parent comment.</p>
   */
  ParentId?: string;

  /**
   * <p>If the comment is a reply to another user's comment, this field contains the user
   *             ID of the user being replied to.</p>
   */
  RecipientId?: string;

  /**
   * <p>The status of the comment.</p>
   */
  Status?: CommentStatusType | string;

  /**
   * <p>The text of the comment.</p>
   */
  Text?: string;

  /**
   * <p>The ID of the root comment in the thread.</p>
   */
  ThreadId?: string;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   */
  Visibility?: CommentVisibilityType | string;
}

export namespace Comment {
  export function isa(o: any): o is Comment {
    return __isa(o, "Comment");
  }
}

/**
 * <p>Describes the metadata of a comment.</p>
 */
export interface CommentMetadata {
  __type?: "CommentMetadata";
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId?: string;

  /**
   * <p>The status of the comment.</p>
   */
  CommentStatus?: CommentStatusType | string;

  /**
   * <p>The user who made the comment.</p>
   */
  Contributor?: User;

  /**
   * <p>The timestamp that the comment was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the user being replied to.</p>
   */
  RecipientId?: string;
}

export namespace CommentMetadata {
  export function isa(o: any): o is CommentMetadata {
    return __isa(o, "CommentMetadata");
  }
}

export enum CommentStatusType {
  DELETED = "DELETED",
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED"
}

export enum CommentVisibilityType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC"
}

/**
 * <p>The resource hierarchy is changing.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
}

/**
 * <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
 */
export interface ConflictingOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConflictingOperationException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictingOperationException {
  export function isa(o: any): o is ConflictingOperationException {
    return __isa(o, "ConflictingOperationException");
  }
}

export interface CreateCommentRequest {
  __type?: "CreateCommentRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>Set this parameter to TRUE to send an email out to the document collaborators after
   *             the comment is created.</p>
   */
  NotifyCollaborators?: boolean;

  /**
   * <p>The ID of the parent comment.</p>
   */
  ParentId?: string;

  /**
   * <p>The text of the comment.</p>
   */
  Text: string | undefined;

  /**
   * <p>The ID of the root comment in the thread.</p>
   */
  ThreadId?: string;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is
   *             visible only to the comment author and document owner and co-owners, or PUBLIC, where
   *             the comment is visible to document owners, co-owners, and contributors.</p>
   */
  Visibility?: CommentVisibilityType | string;
}

export namespace CreateCommentRequest {
  export function isa(o: any): o is CreateCommentRequest {
    return __isa(o, "CreateCommentRequest");
  }
}

export interface CreateCommentResponse {
  __type?: "CreateCommentResponse";
  /**
   * <p>The comment that has been created.</p>
   */
  Comment?: Comment;
}

export namespace CreateCommentResponse {
  export function isa(o: any): o is CreateCommentResponse {
    return __isa(o, "CreateCommentResponse");
  }
}

export interface CreateCustomMetadataRequest {
  __type?: "CreateCustomMetadataRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>Custom metadata in the form of name-value pairs.</p>
   */
  CustomMetadata: { [key: string]: string } | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being added to a document
   *             version.</p>
   */
  VersionId?: string;
}

export namespace CreateCustomMetadataRequest {
  export function isa(o: any): o is CreateCustomMetadataRequest {
    return __isa(o, "CreateCustomMetadataRequest");
  }
}

export interface CreateCustomMetadataResponse {
  __type?: "CreateCustomMetadataResponse";
}

export namespace CreateCustomMetadataResponse {
  export function isa(o: any): o is CreateCustomMetadataResponse {
    return __isa(o, "CreateCustomMetadataResponse");
  }
}

export interface CreateFolderRequest {
  __type?: "CreateFolderRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is CreateFolderRequest {
    return __isa(o, "CreateFolderRequest");
  }
}

export interface CreateFolderResponse {
  __type?: "CreateFolderResponse";
  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;
}

export namespace CreateFolderResponse {
  export function isa(o: any): o is CreateFolderResponse {
    return __isa(o, "CreateFolderResponse");
  }
}

export interface CreateLabelsRequest {
  __type?: "CreateLabelsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>List of labels to add to the resource.</p>
   */
  Labels: Array<string> | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace CreateLabelsRequest {
  export function isa(o: any): o is CreateLabelsRequest {
    return __isa(o, "CreateLabelsRequest");
  }
}

export interface CreateLabelsResponse {
  __type?: "CreateLabelsResponse";
}

export namespace CreateLabelsResponse {
  export function isa(o: any): o is CreateLabelsResponse {
    return __isa(o, "CreateLabelsResponse");
  }
}

export interface CreateNotificationSubscriptionRequest {
  __type?: "CreateNotificationSubscriptionRequest";
  /**
   * <p>The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint
   *             is a URL that begins with <code>https</code>.</p>
   */
  Endpoint: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;

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
  export function isa(o: any): o is CreateNotificationSubscriptionRequest {
    return __isa(o, "CreateNotificationSubscriptionRequest");
  }
}

export interface CreateNotificationSubscriptionResponse {
  __type?: "CreateNotificationSubscriptionResponse";
  /**
   * <p>The subscription.</p>
   */
  Subscription?: Subscription;
}

export namespace CreateNotificationSubscriptionResponse {
  export function isa(o: any): o is CreateNotificationSubscriptionResponse {
    return __isa(o, "CreateNotificationSubscriptionResponse");
  }
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName: string | undefined;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The password of the user.</p>
   */
  Password: string | undefined;

  /**
   * <p>The amount of storage for the user.</p>
   */
  StorageRule?: StorageRuleType;

  /**
   * <p>The surname of the user.</p>
   */
  Surname: string | undefined;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The login name of the user.</p>
   */
  Username: string | undefined;
}

export namespace CreateUserRequest {
  export function isa(o: any): o is CreateUserRequest {
    return __isa(o, "CreateUserRequest");
  }
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export function isa(o: any): o is CreateUserResponse {
    return __isa(o, "CreateUserResponse");
  }
}

/**
 * <p>The limit has been reached on the number of custom properties for the specified
 *             resource.</p>
 */
export interface CustomMetadataLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomMetadataLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace CustomMetadataLimitExceededException {
  export function isa(o: any): o is CustomMetadataLimitExceededException {
    return __isa(o, "CustomMetadataLimitExceededException");
  }
}

export interface DeactivateUserRequest {
  __type?: "DeactivateUserRequest";
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

export namespace DeactivateUserRequest {
  export function isa(o: any): o is DeactivateUserRequest {
    return __isa(o, "DeactivateUserRequest");
  }
}

/**
 * <p>The last user in the organization is being deactivated.</p>
 */
export interface DeactivatingLastSystemUserException
  extends __SmithyException,
    $MetadataBearer {
  name: "DeactivatingLastSystemUserException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace DeactivatingLastSystemUserException {
  export function isa(o: any): o is DeactivatingLastSystemUserException {
    return __isa(o, "DeactivatingLastSystemUserException");
  }
}

export interface DeleteCommentRequest {
  __type?: "DeleteCommentRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the comment.</p>
   */
  CommentId: string | undefined;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;
}

export namespace DeleteCommentRequest {
  export function isa(o: any): o is DeleteCommentRequest {
    return __isa(o, "DeleteCommentRequest");
  }
}

export interface DeleteCustomMetadataRequest {
  __type?: "DeleteCustomMetadataRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>Flag to indicate removal of all custom metadata properties from the specified
   *             resource.</p>
   */
  DeleteAll?: boolean;

  /**
   * <p>List of properties to remove.</p>
   */
  Keys?: Array<string>;

  /**
   * <p>The ID of the resource, either a document or folder.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The ID of the version, if the custom metadata is being deleted from a document
   *             version.</p>
   */
  VersionId?: string;
}

export namespace DeleteCustomMetadataRequest {
  export function isa(o: any): o is DeleteCustomMetadataRequest {
    return __isa(o, "DeleteCustomMetadataRequest");
  }
}

export interface DeleteCustomMetadataResponse {
  __type?: "DeleteCustomMetadataResponse";
}

export namespace DeleteCustomMetadataResponse {
  export function isa(o: any): o is DeleteCustomMetadataResponse {
    return __isa(o, "DeleteCustomMetadataResponse");
  }
}

export interface DeleteDocumentRequest {
  __type?: "DeleteDocumentRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;
}

export namespace DeleteDocumentRequest {
  export function isa(o: any): o is DeleteDocumentRequest {
    return __isa(o, "DeleteDocumentRequest");
  }
}

export interface DeleteFolderContentsRequest {
  __type?: "DeleteFolderContentsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export namespace DeleteFolderContentsRequest {
  export function isa(o: any): o is DeleteFolderContentsRequest {
    return __isa(o, "DeleteFolderContentsRequest");
  }
}

export interface DeleteFolderRequest {
  __type?: "DeleteFolderRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;
}

export namespace DeleteFolderRequest {
  export function isa(o: any): o is DeleteFolderRequest {
    return __isa(o, "DeleteFolderRequest");
  }
}

export interface DeleteLabelsRequest {
  __type?: "DeleteLabelsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>Flag to request removal of all labels from the specified resource.</p>
   */
  DeleteAll?: boolean;

  /**
   * <p>List of labels to delete from the resource.</p>
   */
  Labels?: Array<string>;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace DeleteLabelsRequest {
  export function isa(o: any): o is DeleteLabelsRequest {
    return __isa(o, "DeleteLabelsRequest");
  }
}

export interface DeleteLabelsResponse {
  __type?: "DeleteLabelsResponse";
}

export namespace DeleteLabelsResponse {
  export function isa(o: any): o is DeleteLabelsResponse {
    return __isa(o, "DeleteLabelsResponse");
  }
}

export interface DeleteNotificationSubscriptionRequest {
  __type?: "DeleteNotificationSubscriptionRequest";
  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;

  /**
   * <p>The ID of the subscription.</p>
   */
  SubscriptionId: string | undefined;
}

export namespace DeleteNotificationSubscriptionRequest {
  export function isa(o: any): o is DeleteNotificationSubscriptionRequest {
    return __isa(o, "DeleteNotificationSubscriptionRequest");
  }
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
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
  export function isa(o: any): o is DeleteUserRequest {
    return __isa(o, "DeleteUserRequest");
  }
}

export interface DescribeActivitiesRequest {
  __type?: "DescribeActivitiesRequest";
  /**
   * <p>Specifies which activity types to include in the response. If this field is left
   *             empty, all activity types are returned.</p>
   */
  ActivityTypes?: string;

  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The timestamp that determines the end time of the activities. The response includes
   *             the activities performed before the specified timestamp.</p>
   */
  EndTime?: Date;

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

  /**
   * <p>The ID of the organization. This is a mandatory parameter when using administrative
   *             API (SigV4) requests.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The document or folder ID for which to describe activity types.</p>
   */
  ResourceId?: string;

  /**
   * <p>The timestamp that determines the starting time of the activities. The response
   *             includes the activities performed after the specified timestamp.</p>
   */
  StartTime?: Date;

  /**
   * <p>The ID of the user who performed the action. The response includes activities
   *             pertaining to this user. This is an optional parameter and is only applicable for
   *             administrative API (SigV4) requests.</p>
   */
  UserId?: string;
}

export namespace DescribeActivitiesRequest {
  export function isa(o: any): o is DescribeActivitiesRequest {
    return __isa(o, "DescribeActivitiesRequest");
  }
}

export interface DescribeActivitiesResponse {
  __type?: "DescribeActivitiesResponse";
  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;

  /**
   * <p>The list of activities for the specified user and time period.</p>
   */
  UserActivities?: Array<Activity>;
}

export namespace DescribeActivitiesResponse {
  export function isa(o: any): o is DescribeActivitiesResponse {
    return __isa(o, "DescribeActivitiesResponse");
  }
}

export interface DescribeCommentsRequest {
  __type?: "DescribeCommentsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the document version.</p>
   */
  VersionId: string | undefined;
}

export namespace DescribeCommentsRequest {
  export function isa(o: any): o is DescribeCommentsRequest {
    return __isa(o, "DescribeCommentsRequest");
  }
}

export interface DescribeCommentsResponse {
  __type?: "DescribeCommentsResponse";
  /**
   * <p>The list of comments for the specified document version.</p>
   */
  Comments?: Array<Comment>;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous
   *             call.</p>
   */
  Marker?: string;
}

export namespace DescribeCommentsResponse {
  export function isa(o: any): o is DescribeCommentsResponse {
    return __isa(o, "DescribeCommentsResponse");
  }
}

export interface DescribeDocumentVersionsRequest {
  __type?: "DescribeDocumentVersionsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>Specify "SOURCE" to include initialized versions and a URL for the source
   *             document.</p>
   */
  Fields?: string;

  /**
   * <p>A comma-separated list of values. Specify "INITIALIZED" to include incomplete
   *             versions.</p>
   */
  Include?: string;

  /**
   * <p>The maximum number of versions to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;
}

export namespace DescribeDocumentVersionsRequest {
  export function isa(o: any): o is DescribeDocumentVersionsRequest {
    return __isa(o, "DescribeDocumentVersionsRequest");
  }
}

export interface DescribeDocumentVersionsResponse {
  __type?: "DescribeDocumentVersionsResponse";
  /**
   * <p>The document versions.</p>
   */
  DocumentVersions?: Array<DocumentVersionMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeDocumentVersionsResponse {
  export function isa(o: any): o is DescribeDocumentVersionsResponse {
    return __isa(o, "DescribeDocumentVersionsResponse");
  }
}

export interface DescribeFolderContentsRequest {
  __type?: "DescribeFolderContentsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The contents to include. Specify "INITIALIZED" to include initialized
   *             documents.</p>
   */
  Include?: string;

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
   * <p>The order for the contents of the folder.</p>
   */
  Order?: OrderType | string;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: ResourceSortType | string;

  /**
   * <p>The type of items.</p>
   */
  Type?: FolderContentType | string;
}

export namespace DescribeFolderContentsRequest {
  export function isa(o: any): o is DescribeFolderContentsRequest {
    return __isa(o, "DescribeFolderContentsRequest");
  }
}

export interface DescribeFolderContentsResponse {
  __type?: "DescribeFolderContentsResponse";
  /**
   * <p>The documents in the specified folder.</p>
   */
  Documents?: Array<DocumentMetadata>;

  /**
   * <p>The subfolders in the specified folder.</p>
   */
  Folders?: Array<FolderMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeFolderContentsResponse {
  export function isa(o: any): o is DescribeFolderContentsResponse {
    return __isa(o, "DescribeFolderContentsResponse");
  }
}

export interface DescribeGroupsRequest {
  __type?: "DescribeGroupsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using administrative
   *             API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>A query to describe groups by group name.</p>
   */
  SearchQuery: string | undefined;
}

export namespace DescribeGroupsRequest {
  export function isa(o: any): o is DescribeGroupsRequest {
    return __isa(o, "DescribeGroupsRequest");
  }
}

export interface DescribeGroupsResponse {
  __type?: "DescribeGroupsResponse";
  /**
   * <p>The list of groups.</p>
   */
  Groups?: Array<GroupMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional
   *             results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace DescribeGroupsResponse {
  export function isa(o: any): o is DescribeGroupsResponse {
    return __isa(o, "DescribeGroupsResponse");
  }
}

export interface DescribeNotificationSubscriptionsRequest {
  __type?: "DescribeNotificationSubscriptionsRequest";
  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId: string | undefined;
}

export namespace DescribeNotificationSubscriptionsRequest {
  export function isa(o: any): o is DescribeNotificationSubscriptionsRequest {
    return __isa(o, "DescribeNotificationSubscriptionsRequest");
  }
}

export interface DescribeNotificationSubscriptionsResponse {
  __type?: "DescribeNotificationSubscriptionsResponse";
  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * <p>The subscriptions.</p>
   */
  Subscriptions?: Array<Subscription>;
}

export namespace DescribeNotificationSubscriptionsResponse {
  export function isa(o: any): o is DescribeNotificationSubscriptionsResponse {
    return __isa(o, "DescribeNotificationSubscriptionsResponse");
  }
}

export interface DescribeResourcePermissionsRequest {
  __type?: "DescribeResourcePermissionsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call)</p>
   */
  Marker?: string;

  /**
   * <p>The ID of the principal to filter permissions by.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeResourcePermissionsRequest {
  export function isa(o: any): o is DescribeResourcePermissionsRequest {
    return __isa(o, "DescribeResourcePermissionsRequest");
  }
}

export interface DescribeResourcePermissionsResponse {
  __type?: "DescribeResourcePermissionsResponse";
  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * <p>The principals.</p>
   */
  Principals?: Array<Principal>;
}

export namespace DescribeResourcePermissionsResponse {
  export function isa(o: any): o is DescribeResourcePermissionsResponse {
    return __isa(o, "DescribeResourcePermissionsResponse");
  }
}

export interface DescribeRootFoldersRequest {
  __type?: "DescribeRootFoldersRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is DescribeRootFoldersRequest {
    return __isa(o, "DescribeRootFoldersRequest");
  }
}

export interface DescribeRootFoldersResponse {
  __type?: "DescribeRootFoldersResponse";
  /**
   * <p>The user's special folders.</p>
   */
  Folders?: Array<FolderMetadata>;

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;
}

export namespace DescribeRootFoldersResponse {
  export function isa(o: any): o is DescribeRootFoldersResponse {
    return __isa(o, "DescribeRootFoldersResponse");
  }
}

export interface DescribeUsersRequest {
  __type?: "DescribeUsersRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>A comma-separated list of values. Specify "STORAGE_METADATA" to include the user
   *             storage quota and utilization information.</p>
   */
  Fields?: string;

  /**
   * <p>The state of the users. Specify "ALL" to include inactive users.</p>
   */
  Include?: UserFilterType | string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous
   *             call.)</p>
   */
  Marker?: string;

  /**
   * <p>The order for the results.</p>
   */
  Order?: OrderType | string;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>A query to filter users by user name.</p>
   */
  Query?: string;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: UserSortType | string;

  /**
   * <p>The IDs of the users.</p>
   */
  UserIds?: string;
}

export namespace DescribeUsersRequest {
  export function isa(o: any): o is DescribeUsersRequest {
    return __isa(o, "DescribeUsersRequest");
  }
}

export interface DescribeUsersResponse {
  __type?: "DescribeUsersResponse";
  /**
   * <p>The marker to use when requesting the next set of results. If there are no
   *             additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * <p>The total number of users included in the results.</p>
   */
  TotalNumberOfUsers?: number;

  /**
   * <p>The users.</p>
   */
  Users?: Array<User>;
}

export namespace DescribeUsersResponse {
  export function isa(o: any): o is DescribeUsersResponse {
    return __isa(o, "DescribeUsersResponse");
  }
}

/**
 * <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 */
export interface DocumentLockedForCommentsException
  extends __SmithyException,
    $MetadataBearer {
  name: "DocumentLockedForCommentsException";
  $fault: "client";
  Message?: string;
}

export namespace DocumentLockedForCommentsException {
  export function isa(o: any): o is DocumentLockedForCommentsException {
    return __isa(o, "DocumentLockedForCommentsException");
  }
}

/**
 * <p>Describes the document.</p>
 */
export interface DocumentMetadata {
  __type?: "DocumentMetadata";
  /**
   * <p>The time when the document was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The ID of the document.</p>
   */
  Id?: string;

  /**
   * <p>List of labels on the document.</p>
   */
  Labels?: Array<string>;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersionMetadata?: DocumentVersionMetadata;

  /**
   * <p>The time when the document was updated.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

  /**
   * <p>The resource state.</p>
   */
  ResourceState?: ResourceStateType | string;
}

export namespace DocumentMetadata {
  export function isa(o: any): o is DocumentMetadata {
    return __isa(o, "DocumentMetadata");
  }
}

export enum DocumentSourceType {
  ORIGINAL = "ORIGINAL",
  WITH_COMMENTS = "WITH_COMMENTS"
}

export enum DocumentStatusType {
  ACTIVE = "ACTIVE",
  INITIALIZED = "INITIALIZED"
}

export enum DocumentThumbnailType {
  LARGE = "LARGE",
  SMALL = "SMALL",
  SMALL_HQ = "SMALL_HQ"
}

/**
 * <p>Describes a version of a document.</p>
 */
export interface DocumentVersionMetadata {
  __type?: "DocumentVersionMetadata";
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
   * <p>The timestamp when the document was first uploaded.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The ID of the version.</p>
   */
  Id?: string;

  /**
   * <p>The timestamp when the document was last uploaded.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The name of the version.</p>
   */
  Name?: string;

  /**
   * <p>The signature of the document.</p>
   */
  Signature?: string;

  /**
   * <p>The size of the document, in bytes.</p>
   */
  Size?: number;

  /**
   * <p>The source of the document.</p>
   */
  Source?: { [key: string]: string };

  /**
   * <p>The status of the document.</p>
   */
  Status?: DocumentStatusType | string;

  /**
   * <p>The thumbnail of the document.</p>
   */
  Thumbnail?: { [key: string]: string };
}

export namespace DocumentVersionMetadata {
  export function isa(o: any): o is DocumentVersionMetadata {
    return __isa(o, "DocumentVersionMetadata");
  }
}

export enum DocumentVersionStatus {
  ACTIVE = "ACTIVE"
}

/**
 * <p>This exception is thrown when a valid checkout ID is not presented on document
 *             version upload calls for a document that has been checked out from Web client.</p>
 */
export interface DraftUploadOutOfSyncException
  extends __SmithyException,
    $MetadataBearer {
  name: "DraftUploadOutOfSyncException";
  $fault: "client";
  Message?: string;
}

export namespace DraftUploadOutOfSyncException {
  export function isa(o: any): o is DraftUploadOutOfSyncException {
    return __isa(o, "DraftUploadOutOfSyncException");
  }
}

/**
 * <p>The resource already exists.</p>
 */
export interface EntityAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace EntityAlreadyExistsException {
  export function isa(o: any): o is EntityAlreadyExistsException {
    return __isa(o, "EntityAlreadyExistsException");
  }
}

/**
 * <p>The resource does not exist.</p>
 */
export interface EntityNotExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityNotExistsException";
  $fault: "client";
  EntityIds?: Array<string>;
  Message?: string;
}

export namespace EntityNotExistsException {
  export function isa(o: any): o is EntityNotExistsException {
    return __isa(o, "EntityNotExistsException");
  }
}

/**
 * <p>The AWS Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 */
export interface FailedDependencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "FailedDependencyException";
  $fault: "client";
  Message?: string;
}

export namespace FailedDependencyException {
  export function isa(o: any): o is FailedDependencyException {
    return __isa(o, "FailedDependencyException");
  }
}

export enum FolderContentType {
  ALL = "ALL",
  DOCUMENT = "DOCUMENT",
  FOLDER = "FOLDER"
}

/**
 * <p>Describes a folder.</p>
 */
export interface FolderMetadata {
  __type?: "FolderMetadata";
  /**
   * <p>The time when the folder was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  Id?: string;

  /**
   * <p>List of labels on the folder.</p>
   */
  Labels?: Array<string>;

  /**
   * <p>The size of the latest version of the folder metadata.</p>
   */
  LatestVersionSize?: number;

  /**
   * <p>The time when the folder was updated.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The name of the folder.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId?: string;

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
   * <p>The size of the folder metadata.</p>
   */
  Size?: number;
}

export namespace FolderMetadata {
  export function isa(o: any): o is FolderMetadata {
    return __isa(o, "FolderMetadata");
  }
}

export interface GetCurrentUserRequest {
  __type?: "GetCurrentUserRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken: string | undefined;
}

export namespace GetCurrentUserRequest {
  export function isa(o: any): o is GetCurrentUserRequest {
    return __isa(o, "GetCurrentUserRequest");
  }
}

export interface GetCurrentUserResponse {
  __type?: "GetCurrentUserResponse";
  /**
   * <p>Metadata of the user.</p>
   */
  User?: User;
}

export namespace GetCurrentUserResponse {
  export function isa(o: any): o is GetCurrentUserResponse {
    return __isa(o, "GetCurrentUserResponse");
  }
}

export interface GetDocumentPathRequest {
  __type?: "GetDocumentPathRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>A comma-separated list of values. Specify <code>NAME</code> to include the names of
   *             the parent folders.</p>
   */
  Fields?: string;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   */
  Limit?: number;

  /**
   * <p>This value is not supported.</p>
   */
  Marker?: string;
}

export namespace GetDocumentPathRequest {
  export function isa(o: any): o is GetDocumentPathRequest {
    return __isa(o, "GetDocumentPathRequest");
  }
}

export interface GetDocumentPathResponse {
  __type?: "GetDocumentPathResponse";
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
}

export namespace GetDocumentPathResponse {
  export function isa(o: any): o is GetDocumentPathResponse {
    return __isa(o, "GetDocumentPathResponse");
  }
}

export interface GetDocumentRequest {
  __type?: "GetDocumentRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is GetDocumentRequest {
    return __isa(o, "GetDocumentRequest");
  }
}

export interface GetDocumentResponse {
  __type?: "GetDocumentResponse";
  /**
   * <p>The custom metadata on the document.</p>
   */
  CustomMetadata?: { [key: string]: string };

  /**
   * <p>The metadata details of the document.</p>
   */
  Metadata?: DocumentMetadata;
}

export namespace GetDocumentResponse {
  export function isa(o: any): o is GetDocumentResponse {
    return __isa(o, "GetDocumentResponse");
  }
}

export interface GetDocumentVersionRequest {
  __type?: "GetDocumentVersionRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string | undefined;

  /**
   * <p>A comma-separated list of values. Specify "SOURCE" to include a URL for the source
   *             document.</p>
   */
  Fields?: string;

  /**
   * <p>Set this to TRUE to include custom metadata in the response.</p>
   */
  IncludeCustomMetadata?: boolean;

  /**
   * <p>The version ID of the document.</p>
   */
  VersionId: string | undefined;
}

export namespace GetDocumentVersionRequest {
  export function isa(o: any): o is GetDocumentVersionRequest {
    return __isa(o, "GetDocumentVersionRequest");
  }
}

export interface GetDocumentVersionResponse {
  __type?: "GetDocumentVersionResponse";
  /**
   * <p>The custom metadata on the document version.</p>
   */
  CustomMetadata?: { [key: string]: string };

  /**
   * <p>The version metadata.</p>
   */
  Metadata?: DocumentVersionMetadata;
}

export namespace GetDocumentVersionResponse {
  export function isa(o: any): o is GetDocumentVersionResponse {
    return __isa(o, "GetDocumentVersionResponse");
  }
}

export interface GetFolderPathRequest {
  __type?: "GetFolderPathRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>A comma-separated list of values. Specify "NAME" to include the names of the parent
   *             folders.</p>
   */
  Fields?: string;

  /**
   * <p>The ID of the folder.</p>
   */
  FolderId: string | undefined;

  /**
   * <p>The maximum number of levels in the hierarchy to return.</p>
   */
  Limit?: number;

  /**
   * <p>This value is not supported.</p>
   */
  Marker?: string;
}

export namespace GetFolderPathRequest {
  export function isa(o: any): o is GetFolderPathRequest {
    return __isa(o, "GetFolderPathRequest");
  }
}

export interface GetFolderPathResponse {
  __type?: "GetFolderPathResponse";
  /**
   * <p>The path information.</p>
   */
  Path?: ResourcePath;
}

export namespace GetFolderPathResponse {
  export function isa(o: any): o is GetFolderPathResponse {
    return __isa(o, "GetFolderPathResponse");
  }
}

export interface GetFolderRequest {
  __type?: "GetFolderRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is GetFolderRequest {
    return __isa(o, "GetFolderRequest");
  }
}

export interface GetFolderResponse {
  __type?: "GetFolderResponse";
  /**
   * <p>The custom metadata on the folder.</p>
   */
  CustomMetadata?: { [key: string]: string };

  /**
   * <p>The metadata of the folder.</p>
   */
  Metadata?: FolderMetadata;
}

export namespace GetFolderResponse {
  export function isa(o: any): o is GetFolderResponse {
    return __isa(o, "GetFolderResponse");
  }
}

export interface GetResourcesRequest {
  __type?: "GetResourcesRequest";
  /**
   * <p>The Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API operation using AWS
   *             credentials.</p>
   */
  AuthenticationToken?: string;

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

  /**
   * <p>The user ID for the resource collection. This is a required field for accessing the
   *             API operation using IAM credentials.</p>
   */
  UserId?: string;
}

export namespace GetResourcesRequest {
  export function isa(o: any): o is GetResourcesRequest {
    return __isa(o, "GetResourcesRequest");
  }
}

export interface GetResourcesResponse {
  __type?: "GetResourcesResponse";
  /**
   * <p>The documents in the specified collection.</p>
   */
  Documents?: Array<DocumentMetadata>;

  /**
   * <p>The folders in the specified folder.</p>
   */
  Folders?: Array<FolderMetadata>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;
}

export namespace GetResourcesResponse {
  export function isa(o: any): o is GetResourcesResponse {
    return __isa(o, "GetResourcesResponse");
  }
}

/**
 * <p>Describes the metadata of a user group.</p>
 */
export interface GroupMetadata {
  __type?: "GroupMetadata";
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
  export function isa(o: any): o is GroupMetadata {
    return __isa(o, "GroupMetadata");
  }
}

/**
 * <p>The user is undergoing transfer of ownership.</p>
 */
export interface IllegalUserStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "IllegalUserStateException";
  $fault: "client";
  Message?: string;
}

export namespace IllegalUserStateException {
  export function isa(o: any): o is IllegalUserStateException {
    return __isa(o, "IllegalUserStateException");
  }
}

export interface InitiateDocumentVersionUploadRequest {
  __type?: "InitiateDocumentVersionUploadRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

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
   * <p>The ID of the document.</p>
   */
  Id?: string;

  /**
   * <p>The name of the document.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the parent folder.</p>
   */
  ParentFolderId: string | undefined;
}

export namespace InitiateDocumentVersionUploadRequest {
  export function isa(o: any): o is InitiateDocumentVersionUploadRequest {
    return __isa(o, "InitiateDocumentVersionUploadRequest");
  }
}

export interface InitiateDocumentVersionUploadResponse {
  __type?: "InitiateDocumentVersionUploadResponse";
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
  export function isa(o: any): o is InitiateDocumentVersionUploadResponse {
    return __isa(o, "InitiateDocumentVersionUploadResponse");
  }
}

/**
 * <p>The pagination marker or limit fields are not valid.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export function isa(o: any): o is InvalidArgumentException {
    return __isa(o, "InvalidArgumentException");
  }
}

/**
 * <p>The requested operation is not allowed on the specified comment object.</p>
 */
export interface InvalidCommentOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCommentOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidCommentOperationException {
  export function isa(o: any): o is InvalidCommentOperationException {
    return __isa(o, "InvalidCommentOperationException");
  }
}

/**
 * <p>The operation is invalid.</p>
 */
export interface InvalidOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  export function isa(o: any): o is InvalidOperationException {
    return __isa(o, "InvalidOperationException");
  }
}

/**
 * <p>The password is invalid.</p>
 */
export interface InvalidPasswordException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidPasswordException {
  export function isa(o: any): o is InvalidPasswordException {
    return __isa(o, "InvalidPasswordException");
  }
}

/**
 * <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
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
  ZH_TW = "zh_TW"
}

/**
 * <p>Set of options which defines notification preferences of given action.</p>
 */
export interface NotificationOptions {
  __type?: "NotificationOptions";
  /**
   * <p>Text value to be included in the email body.</p>
   */
  EmailMessage?: string;

  /**
   * <p>Boolean value to indicate an email notification should be sent to the
   *             receipients.</p>
   */
  SendEmail?: boolean;
}

export namespace NotificationOptions {
  export function isa(o: any): o is NotificationOptions {
    return __isa(o, "NotificationOptions");
  }
}

export enum OrderType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

/**
 * <p>Describes the users or user groups.</p>
 */
export interface Participants {
  __type?: "Participants";
  /**
   * <p>The list of user groups.</p>
   */
  Groups?: Array<GroupMetadata>;

  /**
   * <p>The list of users.</p>
   */
  Users?: Array<UserMetadata>;
}

export namespace Participants {
  export function isa(o: any): o is Participants {
    return __isa(o, "Participants");
  }
}

/**
 * <p>Describes the permissions.</p>
 */
export interface PermissionInfo {
  __type?: "PermissionInfo";
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
  export function isa(o: any): o is PermissionInfo {
    return __isa(o, "PermissionInfo");
  }
}

/**
 * <p>Describes a resource.</p>
 */
export interface Principal {
  __type?: "Principal";
  /**
   * <p>The ID of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The permission information for the resource.</p>
   */
  Roles?: Array<PermissionInfo>;

  /**
   * <p>The type of resource.</p>
   */
  Type?: PrincipalType | string;
}

export namespace Principal {
  export function isa(o: any): o is Principal {
    return __isa(o, "Principal");
  }
}

export enum PrincipalType {
  ANONYMOUS = "ANONYMOUS",
  GROUP = "GROUP",
  INVITE = "INVITE",
  ORGANIZATION = "ORGANIZATION",
  USER = "USER"
}

/**
 * <p>The specified document version is not in the INITIALIZED state.</p>
 */
export interface ProhibitedStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ProhibitedStateException";
  $fault: "client";
  Message?: string;
}

export namespace ProhibitedStateException {
  export function isa(o: any): o is ProhibitedStateException {
    return __isa(o, "ProhibitedStateException");
  }
}

export interface RemoveAllResourcePermissionsRequest {
  __type?: "RemoveAllResourcePermissionsRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace RemoveAllResourcePermissionsRequest {
  export function isa(o: any): o is RemoveAllResourcePermissionsRequest {
    return __isa(o, "RemoveAllResourcePermissionsRequest");
  }
}

export interface RemoveResourcePermissionRequest {
  __type?: "RemoveResourcePermissionRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The principal ID of the resource.</p>
   */
  PrincipalId: string | undefined;

  /**
   * <p>The principal type of the resource.</p>
   */
  PrincipalType?: PrincipalType | string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string | undefined;
}

export namespace RemoveResourcePermissionRequest {
  export function isa(o: any): o is RemoveResourcePermissionRequest {
    return __isa(o, "RemoveResourcePermissionRequest");
  }
}

/**
 * <p>The response is too large to return. The request must include a filter to reduce the size of the response.</p>
 */
export interface RequestedEntityTooLargeException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestedEntityTooLargeException";
  $fault: "client";
  Message?: string;
}

export namespace RequestedEntityTooLargeException {
  export function isa(o: any): o is RequestedEntityTooLargeException {
    return __isa(o, "RequestedEntityTooLargeException");
  }
}

/**
 * <p>The resource is already checked out.</p>
 */
export interface ResourceAlreadyCheckedOutException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyCheckedOutException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyCheckedOutException {
  export function isa(o: any): o is ResourceAlreadyCheckedOutException {
    return __isa(o, "ResourceAlreadyCheckedOutException");
  }
}

export enum ResourceCollectionType {
  SHARED_WITH_ME = "SHARED_WITH_ME"
}

/**
 * <p>Describes the metadata of a resource.</p>
 */
export interface ResourceMetadata {
  __type?: "ResourceMetadata";
  /**
   * <p>The ID of the resource.</p>
   */
  Id?: string;

  /**
   * <p>The name of the resource.</p>
   */
  Name?: string;

  /**
   * <p>The original name of the resource before a rename operation.</p>
   */
  OriginalName?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  Owner?: UserMetadata;

  /**
   * <p>The parent ID of the resource before a rename operation.</p>
   */
  ParentId?: string;

  /**
   * <p>The type of resource.</p>
   */
  Type?: ResourceType | string;

  /**
   * <p>The version ID of the resource. This is an optional field and is filled for action
   *             on document version.</p>
   */
  VersionId?: string;
}

export namespace ResourceMetadata {
  export function isa(o: any): o is ResourceMetadata {
    return __isa(o, "ResourceMetadata");
  }
}

/**
 * <p>Describes the path information of a resource.</p>
 */
export interface ResourcePath {
  __type?: "ResourcePath";
  /**
   * <p>The components of the resource path.</p>
   */
  Components?: Array<ResourcePathComponent>;
}

export namespace ResourcePath {
  export function isa(o: any): o is ResourcePath {
    return __isa(o, "ResourcePath");
  }
}

/**
 * <p>Describes the resource path.</p>
 */
export interface ResourcePathComponent {
  __type?: "ResourcePathComponent";
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
  export function isa(o: any): o is ResourcePathComponent {
    return __isa(o, "ResourcePathComponent");
  }
}

export enum ResourceSortType {
  DATE = "DATE",
  NAME = "NAME"
}

export enum ResourceStateType {
  ACTIVE = "ACTIVE",
  RECYCLED = "RECYCLED",
  RECYCLING = "RECYCLING",
  RESTORING = "RESTORING"
}

export enum ResourceType {
  DOCUMENT = "DOCUMENT",
  FOLDER = "FOLDER"
}

export enum RolePermissionType {
  DIRECT = "DIRECT",
  INHERITED = "INHERITED"
}

export enum RoleType {
  CONTRIBUTOR = "CONTRIBUTOR",
  COOWNER = "COOWNER",
  OWNER = "OWNER",
  VIEWER = "VIEWER"
}

/**
 * <p>One or more of the dependencies is unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>Describes the recipient type and ID, if available.</p>
 */
export interface SharePrincipal {
  __type?: "SharePrincipal";
  /**
   * <p>The ID of the recipient.</p>
   */
  Id: string | undefined;

  /**
   * <p>The role of the recipient.</p>
   */
  Role: RoleType | string | undefined;

  /**
   * <p>The type of the recipient.</p>
   */
  Type: PrincipalType | string | undefined;
}

export namespace SharePrincipal {
  export function isa(o: any): o is SharePrincipal {
    return __isa(o, "SharePrincipal");
  }
}

/**
 * <p>Describes the share results of a resource.</p>
 */
export interface ShareResult {
  __type?: "ShareResult";
  /**
   * <p>The ID of the invited user.</p>
   */
  InviteePrincipalId?: string;

  /**
   * <p>The ID of the principal.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The role.</p>
   */
  Role?: RoleType | string;

  /**
   * <p>The ID of the resource that was shared.</p>
   */
  ShareId?: string;

  /**
   * <p>The status.</p>
   */
  Status?: ShareStatusType | string;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
}

export namespace ShareResult {
  export function isa(o: any): o is ShareResult {
    return __isa(o, "ShareResult");
  }
}

export enum ShareStatusType {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS"
}

/**
 * <p>The storage limit has been exceeded.</p>
 */
export interface StorageLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace StorageLimitExceededException {
  export function isa(o: any): o is StorageLimitExceededException {
    return __isa(o, "StorageLimitExceededException");
  }
}

/**
 * <p>The storage limit will be exceeded.</p>
 */
export interface StorageLimitWillExceedException
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageLimitWillExceedException";
  $fault: "client";
  Message?: string;
}

export namespace StorageLimitWillExceedException {
  export function isa(o: any): o is StorageLimitWillExceedException {
    return __isa(o, "StorageLimitWillExceedException");
  }
}

/**
 * <p>Describes the storage for a user.</p>
 */
export interface StorageRuleType {
  __type?: "StorageRuleType";
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
  export function isa(o: any): o is StorageRuleType {
    return __isa(o, "StorageRuleType");
  }
}

export enum StorageType {
  QUOTA = "QUOTA",
  UNLIMITED = "UNLIMITED"
}

/**
 * <p>Describes a subscription.</p>
 */
export interface Subscription {
  __type?: "Subscription";
  /**
   * <p>The endpoint of the subscription.</p>
   */
  EndPoint?: string;

  /**
   * <p>The protocol of the subscription.</p>
   */
  Protocol?: SubscriptionProtocolType | string;

  /**
   * <p>The ID of the subscription.</p>
   */
  SubscriptionId?: string;
}

export namespace Subscription {
  export function isa(o: any): o is Subscription {
    return __isa(o, "Subscription");
  }
}

export enum SubscriptionProtocolType {
  HTTPS = "HTTPS"
}

export enum SubscriptionType {
  ALL = "ALL"
}

/**
 * <p>The limit has been reached on the number of labels for the specified
 *             resource.</p>
 */
export interface TooManyLabelsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyLabelsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLabelsException {
  export function isa(o: any): o is TooManyLabelsException {
    return __isa(o, "TooManyLabelsException");
  }
}

/**
 * <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
 */
export interface TooManySubscriptionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManySubscriptionsException";
  $fault: "client";
  Message?: string;
}

export namespace TooManySubscriptionsException {
  export function isa(o: any): o is TooManySubscriptionsException {
    return __isa(o, "TooManySubscriptionsException");
  }
}

/**
 * <p>The operation is not permitted.</p>
 */
export interface UnauthorizedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedOperationException";
  $fault: "client";
  Code?: string;
  Message?: string;
}

export namespace UnauthorizedOperationException {
  export function isa(o: any): o is UnauthorizedOperationException {
    return __isa(o, "UnauthorizedOperationException");
  }
}

/**
 * <p>The caller does not have access to perform the action on the resource.</p>
 */
export interface UnauthorizedResourceAccessException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedResourceAccessException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedResourceAccessException {
  export function isa(o: any): o is UnauthorizedResourceAccessException {
    return __isa(o, "UnauthorizedResourceAccessException");
  }
}

export interface UpdateDocumentRequest {
  __type?: "UpdateDocumentRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is UpdateDocumentRequest {
    return __isa(o, "UpdateDocumentRequest");
  }
}

export interface UpdateDocumentVersionRequest {
  __type?: "UpdateDocumentVersionRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is UpdateDocumentVersionRequest {
    return __isa(o, "UpdateDocumentVersionRequest");
  }
}

export interface UpdateFolderRequest {
  __type?: "UpdateFolderRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
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
  export function isa(o: any): o is UpdateFolderRequest {
    return __isa(o, "UpdateFolderRequest");
  }
}

export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using
   *             administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>Boolean value to determine whether the user is granted Poweruser privileges.</p>
   */
  GrantPoweruserPrivileges?: BooleanEnumType | string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?: LocaleType | string;

  /**
   * <p>The amount of storage for the user.</p>
   */
  StorageRule?: StorageRuleType;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The type of the user.</p>
   */
  Type?: UserType | string;

  /**
   * <p>The ID of the user.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserRequest {
  export function isa(o: any): o is UpdateUserRequest {
    return __isa(o, "UpdateUserRequest");
  }
}

export interface UpdateUserResponse {
  __type?: "UpdateUserResponse";
  /**
   * <p>The user information.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  export function isa(o: any): o is UpdateUserResponse {
    return __isa(o, "UpdateUserResponse");
  }
}

/**
 * <p>Describes the upload.</p>
 */
export interface UploadMetadata {
  __type?: "UploadMetadata";
  /**
   * <p>The signed headers.</p>
   */
  SignedHeaders?: { [key: string]: string };

  /**
   * <p>The URL of the upload.</p>
   */
  UploadUrl?: string;
}

export namespace UploadMetadata {
  export function isa(o: any): o is UploadMetadata {
    return __isa(o, "UploadMetadata");
  }
}

/**
 * <p>Describes a user.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The time when the user was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user.</p>
   */
  GivenName?: string;

  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The locale of the user.</p>
   */
  Locale?: LocaleType | string;

  /**
   * <p>The time when the user was modified.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The ID of the recycle bin folder.</p>
   */
  RecycleBinFolderId?: string;

  /**
   * <p>The ID of the root folder.</p>
   */
  RootFolderId?: string;

  /**
   * <p>The status of the user.</p>
   */
  Status?: UserStatusType | string;

  /**
   * <p>The storage for the user.</p>
   */
  Storage?: UserStorageMetadata;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The time zone ID of the user.</p>
   */
  TimeZoneId?: string;

  /**
   * <p>The type of user.</p>
   */
  Type?: UserType | string;

  /**
   * <p>The login name of the user.</p>
   */
  Username?: string;
}

export namespace User {
  export function isa(o: any): o is User {
    return __isa(o, "User");
  }
}

export enum UserFilterType {
  ACTIVE_PENDING = "ACTIVE_PENDING",
  ALL = "ALL"
}

/**
 * <p>Describes the metadata of the user.</p>
 */
export interface UserMetadata {
  __type?: "UserMetadata";
  /**
   * <p>The email address of the user.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The given name of the user before a rename operation.</p>
   */
  GivenName?: string;

  /**
   * <p>The ID of the user.</p>
   */
  Id?: string;

  /**
   * <p>The surname of the user.</p>
   */
  Surname?: string;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;
}

export namespace UserMetadata {
  export function isa(o: any): o is UserMetadata {
    return __isa(o, "UserMetadata");
  }
}

export enum UserSortType {
  FULL_NAME = "FULL_NAME",
  STORAGE_LIMIT = "STORAGE_LIMIT",
  STORAGE_USED = "STORAGE_USED",
  USER_NAME = "USER_NAME",
  USER_STATUS = "USER_STATUS"
}

export enum UserStatusType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PENDING = "PENDING"
}

/**
 * <p>Describes the storage for a user.</p>
 */
export interface UserStorageMetadata {
  __type?: "UserStorageMetadata";
  /**
   * <p>The storage for a user.</p>
   */
  StorageRule?: StorageRuleType;

  /**
   * <p>The amount of storage used, in bytes.</p>
   */
  StorageUtilizedInBytes?: number;
}

export namespace UserStorageMetadata {
  export function isa(o: any): o is UserStorageMetadata {
    return __isa(o, "UserStorageMetadata");
  }
}

export enum UserType {
  ADMIN = "ADMIN",
  MINIMALUSER = "MINIMALUSER",
  POWERUSER = "POWERUSER",
  USER = "USER",
  WORKSPACESUSER = "WORKSPACESUSER"
}
