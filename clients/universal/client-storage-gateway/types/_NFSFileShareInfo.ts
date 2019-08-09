import {
  _NFSFileShareDefaults,
  _UnmarshalledNFSFileShareDefaults
} from "./_NFSFileShareDefaults";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The Unix file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported in file gateways.</p>
 */
export interface _NFSFileShareInfo {
  /**
   * <p>Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways.</p>
   */
  NFSFileShareDefaults?: _NFSFileShareDefaults;

  /**
   * <p>The Amazon Resource Name (ARN) of the file share. </p>
   */
  FileShareARN?: string;

  /**
   * <p>The ID of the file share. </p>
   */
  FileShareId?: string;

  /**
   * <p>The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>
   */
  FileShareStatus?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The file share path used by the NFS client to identify the mount point. </p>
   */
  Path?: string;

  /**
   * <p>The ARN of the IAM role that file gateway assumes when it accesses the underlying storage. </p>
   */
  Role?: string;

  /**
   * <p>The ARN of the backend storage used for storing file data. </p>
   */
  LocationARN?: string;

  /**
   * <p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>
   */
  DefaultStorageClass?: string;

  /**
   * <p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is "private".</p>
   */
  ObjectACL?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | "aws-exec-read"
    | string;

  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. </p>
   */
  ClientList?: Array<string> | Iterable<string>;

  /**
   * <p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>
   */
  Squash?: string;

  /**
   * <p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>
   */
  ReadOnly?: boolean;

  /**
   * <p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>
   */
  GuessMIMETypeEnabled?: boolean;

  /**
   * <p>A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket. If this value is set to true, the requester pays the costs. Otherwise the S3 bucket owner pays. However, the S3 bucket owner always pays the cost of storing data.</p> <note> <p> <code>RequesterPays</code> is a configuration for the S3 bucket that backs the file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration.</p> </note>
   */
  RequesterPays?: boolean;

  /**
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledNFSFileShareInfo extends _NFSFileShareInfo {
  /**
   * <p>Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways.</p>
   */
  NFSFileShareDefaults?: _UnmarshalledNFSFileShareDefaults;

  /**
   * <p>The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. </p>
   */
  ClientList?: Array<string>;

  /**
   * <p>A list of up to 50 tags assigned to the NFS file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
