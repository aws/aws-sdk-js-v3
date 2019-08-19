import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopInstanceInput shape
 */
export interface StopInstanceInput {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId: string;

  /**
   * <p>Specifies whether to force an instance to stop. If the instance's root device type is <code>ebs</code>, or EBS-backed, adding the <code>Force</code> parameter to the <code>StopInstances</code> API call disassociates the AWS OpsWorks Stacks instance from EC2, and forces deletion of <i>only</i> the OpsWorks Stacks instance. You must also delete the formerly-associated instance in EC2 after troubleshooting and replacing the AWS OpsWorks Stacks instance with a new one.</p>
   */
  Force?: boolean;

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
