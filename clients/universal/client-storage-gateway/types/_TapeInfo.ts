/**
 * <p>Describes a virtual tape.</p>
 */
export interface _TapeInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of a virtual tape.</p>
   */
  TapeARN?: string;

  /**
   * <p>The barcode that identifies a specific virtual tape.</p>
   */
  TapeBarcode?: string;

  /**
   * <p>The size, in bytes, of a virtual tape.</p>
   */
  TapeSizeInBytes?: number;

  /**
   * <p>The status of the tape.</p>
   */
  TapeStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;
}

export type _UnmarshalledTapeInfo = _TapeInfo;
