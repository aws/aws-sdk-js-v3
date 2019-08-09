import { _UpdateFileSystemWindowsConfiguration } from "./_UpdateFileSystemWindowsConfiguration";
import { _UpdateFileSystemLustreConfiguration } from "./_UpdateFileSystemLustreConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request object for the <code>UpdateFileSystem</code> operation.</p>
 */
export interface UpdateFileSystemInput {
  /**
   * <p>The globally unique ID of the file system, assigned by Amazon FSx.</p>
   */
  FileSystemId: string;

  /**
   * <p>(Optional) A string of up to 64 ASCII characters that Amazon FSx uses to ensure idempotent updates. This string is automatically filled on your behalf when you use the AWS Command Line Interface (AWS CLI) or an AWS SDK.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The configuration update for this Microsoft Windows file system. The only supported options are for backup and maintenance and for self-managed Active Directory configuration.</p>
   */
  WindowsConfiguration?: _UpdateFileSystemWindowsConfiguration;

  /**
   * <p>The configuration object for Amazon FSx for Lustre file systems used in the <code>UpdateFileSystem</code> operation.</p>
   */
  LustreConfiguration?: _UpdateFileSystemLustreConfiguration;

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
