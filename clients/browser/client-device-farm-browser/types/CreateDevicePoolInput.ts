import { _Rule } from "./_Rule";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the create device pool operation.</p>
 */
export interface CreateDevicePoolInput {
  /**
   * <p>The ARN of the project for the device pool.</p>
   */
  projectArn: string;

  /**
   * <p>The device pool's name.</p>
   */
  name: string;

  /**
   * <p>The device pool's description.</p>
   */
  description?: string;

  /**
   * <p>The device pool's rules.</p>
   */
  rules: Array<_Rule> | Iterable<_Rule>;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p>
   */
  maxDevices?: number;

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
