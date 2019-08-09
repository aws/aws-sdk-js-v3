import { _EncryptionKey, _UnmarshalledEncryptionKey } from "./_EncryptionKey";

/**
 * <p>The Amazon S3 bucket where artifacts are stored for the pipeline.</p>
 */
export interface _ArtifactStore {
  /**
   * <p>The type of the artifact store, such as S3.</p>
   */
  type: "S3" | string;

  /**
   * <p>The Amazon S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder within the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any Amazon S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.</p>
   */
  location: string;

  /**
   * <p>The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used.</p>
   */
  encryptionKey?: _EncryptionKey;
}

export interface _UnmarshalledArtifactStore extends _ArtifactStore {
  /**
   * <p>The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used.</p>
   */
  encryptionKey?: _UnmarshalledEncryptionKey;
}
