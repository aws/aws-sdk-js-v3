/**
 * <p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>
 */
export interface _TapeArchive {
  /**
   * <p>The Amazon Resource Name (ARN) of an archived virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies the archived virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date | string | number;

  /**
   * <p>The size, in bytes, of the archived virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The time that the archiving of the virtual tape was completed.</p> <p>The default time stamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  CompletionTime?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to.</p> <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>
   */
  RetrievedTo?: string;

  /**
   * <p>The current state of the archived virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>
   */
  TapeUsedInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that was used to archive the tape. The tapes in this pool are archived in the S3 storage class that is associated with the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;
}

export interface _UnmarshalledTapeArchive extends _TapeArchive {
  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;

  /**
   * <p>The time that the archiving of the virtual tape was completed.</p> <p>The default time stamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>
   */
  CompletionTime?: Date;
}
