/**
 * <p>Describes a virtual tape object.</p>
 */
export interface _Tape {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date | string | number;

  /**
   * <p>The size, in bytes, of the virtual tape capacity.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The current state of the virtual tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The virtual tape library (VTL) device that the virtual tape is associated with.</p>
   */
  VTLDevice?: string;

  /**
   * <p>For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete.</p> <p>Range: 0 (not started) to 100 (complete).</p>
   */
  Progress?: number;

  /**
   * <p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>
   */
  TapeUsedInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that contains tapes that will be archived. The tapes in this pool are archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;
}

export interface _UnmarshalledTape extends _Tape {
  /**
   * <p>The date the virtual tape was created.</p>
   */
  TapeCreatedDate?: Date;
}
