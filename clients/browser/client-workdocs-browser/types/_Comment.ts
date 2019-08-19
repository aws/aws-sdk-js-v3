import { _User, _UnmarshalledUser } from "./_User";

/**
 * <p>Describes a comment.</p>
 */
export interface _Comment {
  /**
   * <p>The ID of the comment.</p>
   */
  CommentId: string;

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
  Contributor?: _User;

  /**
   * <p>The time that the comment was created.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The status of the comment.</p>
   */
  Status?: "DRAFT" | "PUBLISHED" | "DELETED" | string;

  /**
   * <p>The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors.</p>
   */
  Visibility?: "PUBLIC" | "PRIVATE" | string;

  /**
   * <p>If the comment is a reply to another user's comment, this field contains the user ID of the user being replied to.</p>
   */
  RecipientId?: string;
}

export interface _UnmarshalledComment extends _Comment {
  /**
   * <p>The details of the user who made the comment.</p>
   */
  Contributor?: _UnmarshalledUser;

  /**
   * <p>The time that the comment was created.</p>
   */
  CreatedTimestamp?: Date;
}
