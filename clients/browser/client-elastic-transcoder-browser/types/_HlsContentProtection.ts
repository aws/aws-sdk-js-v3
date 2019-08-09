/**
 * <p>The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.</p>
 */
export interface _HlsContentProtection {
  /**
   * <p>The content protection method for your output. The only valid value is: <code>aes-128</code>.</p> <p>This value is written into the method attribute of the <code>EXT-X-KEY</code> metadata tag in the output playlist.</p>
   */
  Method?: string;

  /**
   * <p>If you want Elastic Transcoder to generate a key for you, leave this field blank.</p> <p>If you choose to supply your own key, you must encrypt the key by using AWS KMS. The key must be base64-encoded, and it must be one of the following bit lengths before being base64-encoded:</p> <p> <code>128</code>, <code>192</code>, or <code>256</code>. </p>
   */
  Key?: string;

  /**
   * <p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p> <p>The MD5 digest of the key that you want Elastic Transcoder to use to encrypt your output file, and that you want Elastic Transcoder to use as a checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes before being base64- encoded.</p>
   */
  KeyMd5?: string;

  /**
   * <p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p> <p>The series of random bits created by a random bit generator, unique for every encryption operation, that you want Elastic Transcoder to use to encrypt your output files. The initialization vector must be base64-encoded, and it must be exactly 16 bytes before being base64-encoded.</p>
   */
  InitializationVector?: string;

  /**
   * <p>The location of the license key required to decrypt your HLS playlist. The URL must be an absolute path, and is referenced in the URI attribute of the EXT-X-KEY metadata tag in the playlist file.</p>
   */
  LicenseAcquisitionUrl?: string;

  /**
   * <p>Specify whether you want Elastic Transcoder to write your HLS license key to an Amazon S3 bucket. If you choose <code>WithVariantPlaylists</code>, <code>LicenseAcquisitionUrl</code> must be left blank and Elastic Transcoder writes your data key into the same bucket as the associated playlist.</p>
   */
  KeyStoragePolicy?: string;
}

export type _UnmarshalledHlsContentProtection = _HlsContentProtection;
