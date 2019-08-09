import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The Windows file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported for file gateways.</p>
 */
export interface _SMBFileShareInfo {
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
   * <p>True to use Amazon S3 server-side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. </p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The file share path used by the SMB client to identify the mount point.</p>
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
   * <p>If this value is set to "true", indicates that ACL (access control list) is enabled on the SMB file share. If it is set to "false", it indicates that file and directory permissions are mapped to the POSIX permission.</p> <p>For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the Storage Gateway User Guide.</p>
   */
  SMBACLEnabled?: boolean;

  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: Array<string> | Iterable<string>;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: Array<string> | Iterable<string>;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: Array<string> | Iterable<string>;

  /**
   * <p>The authentication method of the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>
   */
  Authentication?: string;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledSMBFileShareInfo extends _SMBFileShareInfo {
  /**
   * <p>A list of users or groups in the Active Directory that have administrator rights to the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  AdminUserList?: Array<string>;

  /**
   * <p>A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  ValidUserList?: Array<string>;

  /**
   * <p>A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>
   */
  InvalidUserList?: Array<string>;

  /**
   * <p>A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the <code>ListTagsForResource</code> API operation.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
