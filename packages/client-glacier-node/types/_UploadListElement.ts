/**
 * <p>A list of in-progress multipart uploads for a vault.</p>
 */
export interface _UploadListElement {
  /**
   * <p>The ID of a multipart upload.</p>
   */
  MultipartUploadId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the vault that contains the archive.</p>
   */
  VaultARN?: string;

  /**
   * <p>The description of the archive that was specified in the Initiate Multipart Upload request.</p>
   */
  ArchiveDescription?: string;

  /**
   * <p>The part size, in bytes, specified in the Initiate Multipart Upload request. This is the size of all the parts in the upload except the last part, which may be smaller than this size.</p>
   */
  PartSizeInBytes?: number;

  /**
   * <p>The UTC time at which the multipart upload was initiated.</p>
   */
  CreationDate?: string;
}

export type _UnmarshalledUploadListElement = _UploadListElement;
