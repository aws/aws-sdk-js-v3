import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendSSHPublicKeyInput shape
 */
export interface SendSSHPublicKeyInput {
  /**
   * <p>The EC2 instance you wish to publish the SSH key to.</p>
   */
  InstanceId: string;

  /**
   * <p>The OS user on the EC2 instance whom the key may be used to authenticate as.</p>
   */
  InstanceOSUser: string;

  /**
   * <p>The public key to be published to the instance. To use it after publication you must have the matching private key.</p>
   */
  SSHPublicKey: string;

  /**
   * <p>The availability zone the EC2 instance was launched in.</p>
   */
  AvailabilityZone: string;

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
