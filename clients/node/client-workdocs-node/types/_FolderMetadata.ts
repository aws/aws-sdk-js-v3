/**
 * <p>Describes a folder.</p>
 */
export interface _FolderMetadata {
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
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The time when the folder was updated.</p>
   */
  ModifiedTimestamp?: Date | string | number;

  /**
   * <p>The resource state of the folder.</p>
   */
  ResourceState?: "ACTIVE" | "RESTORING" | "RECYCLING" | "RECYCLED" | string;

  /**
   * <p>The unique identifier created from the subfolders and documents of the folder.</p>
   */
  Signature?: string;

  /**
   * <p>List of labels on the folder.</p>
   */
  Labels?: Array<string> | Iterable<string>;

  /**
   * <p>The size of the folder metadata.</p>
   */
  Size?: number;

  /**
   * <p>The size of the latest version of the folder metadata.</p>
   */
  LatestVersionSize?: number;
}

export interface _UnmarshalledFolderMetadata extends _FolderMetadata {
  /**
   * <p>The time when the folder was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time when the folder was updated.</p>
   */
  ModifiedTimestamp?: Date;

  /**
   * <p>List of labels on the folder.</p>
   */
  Labels?: Array<string>;
}
