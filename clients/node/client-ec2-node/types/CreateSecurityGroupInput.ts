import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecurityGroupInput shape
 */
export interface CreateSecurityGroupInput {
  /**
   * <p>A description for the security group. This is informational only.</p> <p>Constraints: Up to 255 characters in length</p> <p>Constraints for EC2-Classic: ASCII characters</p> <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&amp;;{}!$*</p>
   */
  Description: string;

  /**
   * <p>The name of the security group.</p> <p>Constraints: Up to 255 characters in length. Cannot start with <code>sg-</code>.</p> <p>Constraints for EC2-Classic: ASCII characters</p> <p>Constraints for EC2-VPC: a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=&amp;;{}!$*</p>
   */
  GroupName: string;

  /**
   * <p>[EC2-VPC] The ID of the VPC. Required for EC2-VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
