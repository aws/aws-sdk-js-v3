/**
 * <p>Defines the real-time status of a Snowball's data transfer while the device is at AWS. This data is only available while a job has a <code>JobState</code> value of <code>InProgress</code>, for both import and export jobs.</p>
 */
export interface _DataTransfer {
  /**
   * <p>The number of bytes transferred between a Snowball and Amazon S3.</p>
   */
  BytesTransferred?: number;

  /**
   * <p>The number of objects transferred between a Snowball and Amazon S3.</p>
   */
  ObjectsTransferred?: number;

  /**
   * <p>The total bytes of data for a transfer between a Snowball and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   */
  TotalBytes?: number;

  /**
   * <p>The total number of objects for a transfer between a Snowball and Amazon S3. This value is set to 0 (zero) until all the keys that will be transferred have been listed.</p>
   */
  TotalObjects?: number;
}

export type _UnmarshalledDataTransfer = _DataTransfer;
