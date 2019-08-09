import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateSMBFileShareInput</p>
 */
export interface CreateSMBFileShareInput {
  /**
   * <p>A unique string value that you supply that is used by file gateway to ensure idempotent file share creation.</p>
   */
  ClientToken: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file share.</p>
   */
  GatewayARN: string;

  /**
   * <p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>
   */
  KMSEncrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. </p>
   */
  Role: string;

  /**
   * <p>The ARN of the backed storage used for storing file data. </p>
   */
  LocationARN: string;

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
   * <p>Set this value to "true to enable ACL (access control list) on the SMB file share. Set it to "false" to map file and directory permissions to the POSIX permissions.</p> <p>For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/smb-acl.html in the Storage Gateway User Guide.</p>
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
   * <p>The authentication method that users use to access the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>
   */
  Authentication?: string;

  /**
   * <p>A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for a tag's value is 256.</p> </note>
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
