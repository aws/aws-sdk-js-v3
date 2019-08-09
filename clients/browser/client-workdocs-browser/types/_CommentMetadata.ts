import { _User, _UnmarshalledUser } from "./_User";

/**
 * <p>Describes the metadata of a comment.</p>
 */
export interface _CommentMetadata {
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId?: string;

  /**
   * <p>The user who made the comment.</p>
   */
  Contributor?: _User;

  /**
   * <p>The timestamp that the comment was created.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The status of the comment.</p>
   */
  CommentStatus?: "DRAFT" | "PUBLISHED" | "DELETED" | string;

  /**
   * <p>The ID of the user being replied to.</p>
   */
  RecipientId?: string;
}

export interface _UnmarshalledCommentMetadata extends _CommentMetadata {
  /**
   * <p>The user who made the comment.</p>
   */
  Contributor?: _UnmarshalledUser;

  /**
   * <p>The timestamp that the comment was created.</p>
   */
  CreatedTimestamp?: Date;
}
