import { _S3Encryption, _UnmarshalledS3Encryption } from "./_S3Encryption";
import {
  _CloudWatchEncryption,
  _UnmarshalledCloudWatchEncryption
} from "./_CloudWatchEncryption";
import {
  _JobBookmarksEncryption,
  _UnmarshalledJobBookmarksEncryption
} from "./_JobBookmarksEncryption";

/**
 * <p>Specifies an encryption configuration.</p>
 */
export interface _EncryptionConfiguration {
  /**
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  S3Encryption?: Array<_S3Encryption> | Iterable<_S3Encryption>;

  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   */
  CloudWatchEncryption?: _CloudWatchEncryption;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   */
  JobBookmarksEncryption?: _JobBookmarksEncryption;
}

export interface _UnmarshalledEncryptionConfiguration
  extends _EncryptionConfiguration {
  /**
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  S3Encryption?: Array<_UnmarshalledS3Encryption>;

  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   */
  CloudWatchEncryption?: _UnmarshalledCloudWatchEncryption;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   */
  JobBookmarksEncryption?: _UnmarshalledJobBookmarksEncryption;
}
