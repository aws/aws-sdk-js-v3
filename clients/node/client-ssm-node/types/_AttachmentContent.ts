/**
 * <p>A structure that includes attributes that describe a document attachment.</p>
 */
export interface _AttachmentContent {
  /**
   * <p>The name of an attachment.</p>
   */
  Name?: string;

  /**
   * <p>The size of an attachment in bytes.</p>
   */
  Size?: number;

  /**
   * <p>The cryptographic hash value of the document content.</p>
   */
  Hash?: string;

  /**
   * <p>The hash algorithm used to calculate the hash value.</p>
   */
  HashType?: "Sha256" | string;

  /**
   * <p>The URL location of the attachment content.</p>
   */
  Url?: string;
}

export type _UnmarshalledAttachmentContent = _AttachmentContent;
