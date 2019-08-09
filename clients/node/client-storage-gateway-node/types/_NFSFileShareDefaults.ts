/**
 * <p>Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways.</p>
 */
export interface _NFSFileShareDefaults {
  /**
   * <p>The Unix file mode in the form "nnnn". For example, "0666" represents the default file mode inside the file share. The default value is 0666. </p>
   */
  FileMode?: string;

  /**
   * <p>The Unix directory mode in the form "nnnn". For example, "0666" represents the default access mode for all directories inside the file share. The default value is 0777.</p>
   */
  DirectoryMode?: string;

  /**
   * <p>The default group ID for the file share (unless the files have another group ID specified). The default value is nfsnobody. </p>
   */
  GroupId?: number;

  /**
   * <p>The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is nfsnobody. </p>
   */
  OwnerId?: number;
}

export type _UnmarshalledNFSFileShareDefaults = _NFSFileShareDefaults;
