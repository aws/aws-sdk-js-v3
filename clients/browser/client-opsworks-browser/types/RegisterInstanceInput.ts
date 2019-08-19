import { _InstanceIdentity } from "./_InstanceIdentity";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterInstanceInput shape
 */
export interface RegisterInstanceInput {
  /**
   * <p>The ID of the stack that the instance is to be registered with.</p>
   */
  StackId: string;

  /**
   * <p>The instance's hostname.</p>
   */
  Hostname?: string;

  /**
   * <p>The instance's public IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The instance's private IP address.</p>
   */
  PrivateIp?: string;

  /**
   * <p>The instances public RSA key. This key is used to encrypt communication between the instance and the service.</p>
   */
  RsaPublicKey?: string;

  /**
   * <p>The instances public RSA key fingerprint.</p>
   */
  RsaPublicKeyFingerprint?: string;

  /**
   * <p>An InstanceIdentity object that contains the instance's identity.</p>
   */
  InstanceIdentity?: _InstanceIdentity;

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
