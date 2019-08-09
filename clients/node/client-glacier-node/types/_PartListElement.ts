/**
 * <p>A list of the part sizes of the multipart upload.</p>
 */
export interface _PartListElement {
  /**
   * <p>The byte range of a part, inclusive of the upper value of the range.</p>
   */
  RangeInBytes?: string;

  /**
   * <p>The SHA256 tree hash value that Amazon S3 Glacier calculated for the part. This field is never <code>null</code>.</p>
   */
  SHA256TreeHash?: string;
}

export type _UnmarshalledPartListElement = _PartListElement;
