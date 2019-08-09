/**
 * <p>A key and value pair that identifies the location of an attachment to a document.</p>
 */
export interface _AttachmentsSource {
  /**
   * <p>The key of a key and value pair that identifies the location of an attachment to a document.</p>
   */
  Key?: "SourceUrl" | string;

  /**
   * <p>The URL of the location of a document attachment, such as the URL of an Amazon S3 bucket.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAttachmentsSource extends _AttachmentsSource {
  /**
   * <p>The URL of the location of a document attachment, such as the URL of an Amazon S3 bucket.</p>
   */
  Values?: Array<string>;
}
