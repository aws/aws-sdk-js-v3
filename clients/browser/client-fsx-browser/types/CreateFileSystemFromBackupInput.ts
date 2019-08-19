import { _Tag } from "./_Tag";
import { _CreateFileSystemWindowsConfiguration } from "./_CreateFileSystemWindowsConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request object for the <code>CreateFileSystemFromBackup</code> operation.</p>
 */
export interface CreateFileSystemFromBackupInput {
  /**
   * <p>The ID of the backup. Specifies the backup to use if you're creating a file system from an existing backup.</p>
   */
  BackupId: string;

  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent creation. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A list of IDs for the subnets that the file system will be accessible from. Currently, you can specify only one subnet. The file server is also launched in that subnet's Availability Zone.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;

  /**
   * <p>A list of IDs for the security groups that apply to the specified network interfaces created for file system access. These security groups apply to all network interfaces. This value isn't returned in later describe requests.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The tags to be applied to the file system at file system creation. The key value of the <code>Name</code> tag appears in the console as the file system name.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The configuration for this Microsoft Windows file system.</p>
   */
  WindowsConfiguration?: _CreateFileSystemWindowsConfiguration;

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
