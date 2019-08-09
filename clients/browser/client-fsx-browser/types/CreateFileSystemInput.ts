import { _Tag } from "./_Tag";
import { _CreateFileSystemWindowsConfiguration } from "./_CreateFileSystemWindowsConfiguration";
import { _CreateFileSystemLustreConfiguration } from "./_CreateFileSystemLustreConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request object used to create a new Amazon FSx file system.</p>
 */
export interface CreateFileSystemInput {
  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The type of Amazon FSx file system to create.</p>
   */
  FileSystemType: "WINDOWS" | "LUSTRE" | string;

  /**
   * <p>The storage capacity of the file system being created.</p> <p>For Windows file systems, the storage capacity has a minimum of 300 GiB, and a maximum of 65,536 GiB.</p> <p>For Lustre file systems, the storage capacity has a minimum of 3,600 GiB. Storage capacity is provisioned in increments of 3,600 GiB.</p>
   */
  StorageCapacity: number;

  /**
   * <p>The IDs of the subnets that the file system will be accessible from. File systems support only one subnet. The file server is also launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;

  /**
   * <p>A list of IDs specifying the security groups to apply to all network interfaces created for file system access. This list isn't returned in later requests to describe the file system.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The tags to apply to the file system being created. The key value of the <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The ID of your AWS Key Management Service (AWS KMS) key. This ID is used to encrypt the data in your file system at rest. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html">Encrypt</a> in the <i>AWS Key Management Service API Reference</i>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Microsoft Windows configuration for the file system being created. This value is required if <code>FileSystemType</code> is set to <code>WINDOWS</code>.</p>
   */
  WindowsConfiguration?: _CreateFileSystemWindowsConfiguration;

  /**
   * <p>The Lustre configuration for the file system being created. This value is required if <code>FileSystemType</code> is set to <code>LUSTRE</code>.</p>
   */
  LustreConfiguration?: _CreateFileSystemLustreConfiguration;

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
