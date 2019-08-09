import { _UserMetadata, _UnmarshalledUserMetadata } from "./_UserMetadata";
import { _Participants, _UnmarshalledParticipants } from "./_Participants";
import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import {
  _CommentMetadata,
  _UnmarshalledCommentMetadata
} from "./_CommentMetadata";

/**
 * <p>Describes the activity information.</p>
 */
export interface _Activity {
  /**
   * <p>The activity type.</p>
   */
  Type?:
    | "DOCUMENT_CHECKED_IN"
    | "DOCUMENT_CHECKED_OUT"
    | "DOCUMENT_RENAMED"
    | "DOCUMENT_VERSION_UPLOADED"
    | "DOCUMENT_VERSION_DELETED"
    | "DOCUMENT_VERSION_VIEWED"
    | "DOCUMENT_VERSION_DOWNLOADED"
    | "DOCUMENT_RECYCLED"
    | "DOCUMENT_RESTORED"
    | "DOCUMENT_REVERTED"
    | "DOCUMENT_SHARED"
    | "DOCUMENT_UNSHARED"
    | "DOCUMENT_SHARE_PERMISSION_CHANGED"
    | "DOCUMENT_SHAREABLE_LINK_CREATED"
    | "DOCUMENT_SHAREABLE_LINK_REMOVED"
    | "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED"
    | "DOCUMENT_MOVED"
    | "DOCUMENT_COMMENT_ADDED"
    | "DOCUMENT_COMMENT_DELETED"
    | "DOCUMENT_ANNOTATION_ADDED"
    | "DOCUMENT_ANNOTATION_DELETED"
    | "FOLDER_CREATED"
    | "FOLDER_DELETED"
    | "FOLDER_RENAMED"
    | "FOLDER_RECYCLED"
    | "FOLDER_RESTORED"
    | "FOLDER_SHARED"
    | "FOLDER_UNSHARED"
    | "FOLDER_SHARE_PERMISSION_CHANGED"
    | "FOLDER_SHAREABLE_LINK_CREATED"
    | "FOLDER_SHAREABLE_LINK_REMOVED"
    | "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED"
    | "FOLDER_MOVED"
    | string;

  /**
   * <p>The timestamp when the action was performed.</p>
   */
  TimeStamp?: Date | string | number;

  /**
   * <p>Indicates whether an activity is indirect or direct. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity).</p>
   */
  IsIndirectActivity?: boolean;

  /**
   * <p>The ID of the organization.</p>
   */
  OrganizationId?: string;

  /**
   * <p>The user who performed the action.</p>
   */
  Initiator?: _UserMetadata;

  /**
   * <p>The list of users or groups impacted by this action. This is an optional field and is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.</p>
   */
  Participants?: _Participants;

  /**
   * <p>The metadata of the resource involved in the user action.</p>
   */
  ResourceMetadata?: _ResourceMetadata;

  /**
   * <p>The original parent of the resource. This is an optional field and is filled for move activities.</p>
   */
  OriginalParent?: _ResourceMetadata;

  /**
   * <p>Metadata of the commenting activity. This is an optional field and is filled for commenting activities.</p>
   */
  CommentMetadata?: _CommentMetadata;
}

export interface _UnmarshalledActivity extends _Activity {
  /**
   * <p>The timestamp when the action was performed.</p>
   */
  TimeStamp?: Date;

  /**
   * <p>The user who performed the action.</p>
   */
  Initiator?: _UnmarshalledUserMetadata;

  /**
   * <p>The list of users or groups impacted by this action. This is an optional field and is filled for the following sharing activities: DOCUMENT_SHARED, DOCUMENT_SHARED, DOCUMENT_UNSHARED, FOLDER_SHARED, FOLDER_UNSHARED.</p>
   */
  Participants?: _UnmarshalledParticipants;

  /**
   * <p>The metadata of the resource involved in the user action.</p>
   */
  ResourceMetadata?: _UnmarshalledResourceMetadata;

  /**
   * <p>The original parent of the resource. This is an optional field and is filled for move activities.</p>
   */
  OriginalParent?: _UnmarshalledResourceMetadata;

  /**
   * <p>Metadata of the commenting activity. This is an optional field and is filled for commenting activities.</p>
   */
  CommentMetadata?: _UnmarshalledCommentMetadata;
}
