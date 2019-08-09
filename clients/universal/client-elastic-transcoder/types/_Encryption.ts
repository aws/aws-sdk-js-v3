/**
 * <p>The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.</p>
 */
export interface _Encryption {
  /**
   * <p>The specific server-side encryption mode that you want Elastic Transcoder to use when decrypting your input files or encrypting your output files. Elastic Transcoder supports the following options:</p> <ul> <li> <p> <b>s3:</b> Amazon S3 creates and manages the keys used for encrypting your files.</p> </li> <li> <p> <b>s3-aws-kms:</b> Amazon S3 calls the Amazon Key Management Service, which creates and manages the keys that are used for encrypting your files. If you specify <code>s3-aws-kms</code> and you don't want to use the default key, you must add the AWS-KMS key that you want to use to your pipeline.</p> </li> <li> <p> <b>aes-cbc-pkcs7:</b> A padded cipher-block mode of operation originally used for HLS files.</p> </li> <li> <p> <b>aes-ctr:</b> AES Counter Mode.</p> </li> <li> <p> <b>aes-gcm:</b> AES Galois Counter Mode, a mode of operation that is an authenticated encryption format, meaning that a file, key, or initialization vector that has been tampered with fails the decryption process.</p> </li> </ul> <p>For all three AES options, you must provide the following settings, which must be base64-encoded:</p> <ul> <li> <p> <b>Key</b> </p> </li> <li> <p> <b>Key MD5</b> </p> </li> <li> <p> <b>Initialization Vector</b> </p> </li> </ul> <important> <p>For the AES modes, your private encryption keys and your unencrypted data are never stored by AWS; therefore, it is important that you safely manage your encryption keys. If you lose them, you won't be able to unencrypt your data.</p> </important>
   */
  Mode?: string;

  /**
   * <p>The data encryption key that you want Elastic Transcoder to use to encrypt your output file, or that was used to encrypt your input file. The key must be base64-encoded and it must be one of the following bit lengths before being base64-encoded:</p> <p> <code>128</code>, <code>192</code>, or <code>256</code>. </p> <p>The key must also be encrypted by using the Amazon Key Management Service.</p>
   */
  Key?: string;

  /**
   * <p>The MD5 digest of the key that you used to encrypt your input file, or that you want Elastic Transcoder to use to encrypt your output file. Elastic Transcoder uses the key digest as a checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes long before being base64-encoded.</p>
   */
  KeyMd5?: string;

  /**
   * <p>The series of random bits created by a random bit generator, unique for every encryption operation, that you used to encrypt your input files or that you want Elastic Transcoder to use to encrypt your output files. The initialization vector must be base64-encoded, and it must be exactly 16 bytes long before being base64-encoded.</p>
   */
  InitializationVector?: string;
}

export type _UnmarshalledEncryption = _Encryption;
