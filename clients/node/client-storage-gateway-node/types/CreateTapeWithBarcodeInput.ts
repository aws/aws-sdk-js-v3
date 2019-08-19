import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateTapeWithBarcodeInput</p>
 */
export interface CreateTapeWithBarcodeInput {
  /**
   * <p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tape with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN: string;

  /**
   * <p>The size, in bytes, of the virtual tape that you want to create.</p> <note> <p>The size must be aligned by gigabyte (1024*1024*1024 byte).</p> </note>
   */
  TapeSizeInBytes: number;

  /**
   * <p>The barcode that you want to assign to the tape.</p> <note> <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted.</p> </note>
   */
  TapeBarcode: string;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS Key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ID of the pool that you want to add your tape to for archiving. The tape in this pool is archived in the S3 storage class that is associated with the pool. When you use your backup application to eject the tape, the tape is archived directly into the storage class (Glacier or Deep Archive) that corresponds to the pool.</p> <p>Valid values: "GLACIER", "DEEP_ARCHIVE"</p>
   */
  PoolId?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to a virtual tape that has a barcode. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
