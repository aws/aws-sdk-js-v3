/**
 * <p>Directory structure that includes the directory name and directory ARN.</p>
 */
export interface _Directory {
  /**
   * <p>The name of the directory.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the directory. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn?: string;

  /**
   * <p>The state of the directory. Can be either <code>Enabled</code>, <code>Disabled</code>, or <code>Deleted</code>.</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date | string | number;
}

export interface _UnmarshalledDirectory extends _Directory {
  /**
   * <p>The date and time when the directory was created.</p>
   */
  CreationDateTime?: Date;
}
