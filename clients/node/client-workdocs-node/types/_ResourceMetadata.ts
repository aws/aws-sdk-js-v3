import { _UserMetadata, _UnmarshalledUserMetadata } from "./_UserMetadata";

/**
 * <p>Describes the metadata of a resource.</p>
 */
export interface _ResourceMetadata {
  /**
   * <p>The type of resource.</p>
   */
  Type?: "FOLDER" | "DOCUMENT" | string;

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
   * <p>The version ID of the resource. This is an optional field and is filled for action on document version.</p>
   */
  VersionId?: string;

  /**
   * <p>The owner of the resource.</p>
   */
  Owner?: _UserMetadata;

  /**
   * <p>The parent ID of the resource before a rename operation.</p>
   */
  ParentId?: string;
}

export interface _UnmarshalledResourceMetadata extends _ResourceMetadata {
  /**
   * <p>The owner of the resource.</p>
   */
  Owner?: _UnmarshalledUserMetadata;
}
