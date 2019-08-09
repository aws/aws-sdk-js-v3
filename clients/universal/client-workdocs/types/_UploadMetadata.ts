/**
 * <p>Describes the upload.</p>
 */
export interface _UploadMetadata {
  /**
   * <p>The URL of the upload.</p>
   */
  UploadUrl?: string;

  /**
   * <p>The signed headers.</p>
   */
  SignedHeaders?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledUploadMetadata extends _UploadMetadata {
  /**
   * <p>The signed headers.</p>
   */
  SignedHeaders?: { [key: string]: string };
}
