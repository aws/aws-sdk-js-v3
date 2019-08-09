import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateMountTargetInput {
  /**
   * <p>The ID of the file system for which to create the mount target.</p>
   */
  FileSystemId: string;

  /**
   * <p>The ID of the subnet to add the mount target in.</p>
   */
  SubnetId: string;

  /**
   * <p>Valid IPv4 address within the address range of the specified subnet.</p>
   */
  IpAddress?: string;

  /**
   * <p>Up to five VPC security group IDs, of the form <code>sg-xxxxxxxx</code>. These must be for the same VPC as subnet specified.</p>
   */
  SecurityGroups?: Array<string> | Iterable<string>;

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
