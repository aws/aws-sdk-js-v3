import {
  _DocumentVersionMetadata,
  _UnmarshalledDocumentVersionMetadata
} from "./_DocumentVersionMetadata";

/**
 * <p>Describes the document.</p>
 */
export interface _DocumentMetadata {
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
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The time when the document was updated.</p>
   */
  ModifiedTimestamp?: Date | string | number;

  /**
   * <p>The latest version of the document.</p>
   */
  LatestVersionMetadata?: _DocumentVersionMetadata;

  /**
   * <p>The resource state.</p>
   */
  ResourceState?: "ACTIVE" | "RESTORING" | "RECYCLING" | "RECYCLED" | string;

  /**
   * <p>List of labels on the document.</p>
   */
  Labels?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDocumentMetadata extends _DocumentMetadata {
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
  LatestVersionMetadata?: _UnmarshalledDocumentVersionMetadata;

  /**
   * <p>List of labels on the document.</p>
   */
  Labels?: Array<string>;
}
