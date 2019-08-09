/**
 * <p>Describes a version of a document.</p>
 */
export interface _DocumentVersionMetadata {
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
  Status?: "INITIALIZED" | "ACTIVE" | string;

  /**
   * <p>The timestamp when the document was first uploaded.</p>
   */
  CreatedTimestamp?: Date | string | number;

  /**
   * <p>The timestamp when the document was last uploaded.</p>
   */
  ModifiedTimestamp?: Date | string | number;

  /**
   * <p>The timestamp when the content of the document was originally created.</p>
   */
  ContentCreatedTimestamp?: Date | string | number;

  /**
   * <p>The timestamp when the content of the document was modified.</p>
   */
  ContentModifiedTimestamp?: Date | string | number;

  /**
   * <p>The ID of the creator.</p>
   */
  CreatorId?: string;

  /**
   * <p>The thumbnail of the document.</p>
   */
  Thumbnail?:
    | { [key in "SMALL" | "SMALL_HQ" | "LARGE" | string]: string }
    | Iterable<["SMALL" | "SMALL_HQ" | "LARGE" | string, string]>;

  /**
   * <p>The source of the document.</p>
   */
  Source?:
    | { [key in "ORIGINAL" | "WITH_COMMENTS" | string]: string }
    | Iterable<["ORIGINAL" | "WITH_COMMENTS" | string, string]>;
}

export interface _UnmarshalledDocumentVersionMetadata
  extends _DocumentVersionMetadata {
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
   * <p>The thumbnail of the document.</p>
   */
  Thumbnail?: { [key in "SMALL" | "SMALL_HQ" | "LARGE" | string]: string };

  /**
   * <p>The source of the document.</p>
   */
  Source?: { [key in "ORIGINAL" | "WITH_COMMENTS" | string]: string };
}
