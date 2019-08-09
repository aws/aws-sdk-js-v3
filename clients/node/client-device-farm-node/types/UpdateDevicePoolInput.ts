import { _Rule } from "./_Rule";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to the update device pool operation.</p>
 */
export interface UpdateDevicePoolInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Device Farm device pool you wish to update.</p>
   */
  arn: string;

  /**
   * <p>A string representing the name of the device pool you wish to update.</p>
   */
  name?: string;

  /**
   * <p>A description of the device pool you wish to update.</p>
   */
  description?: string;

  /**
   * <p>Represents the rules you wish to modify for the device pool. Updating rules is optional; however, if you choose to update rules for your request, the update will replace the existing rules.</p>
   */
  rules?: Array<_Rule> | Iterable<_Rule>;

  /**
   * <p>The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and that meet the criteria that you assign for the <code>rules</code> parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.</p> <p>By specifying the maximum number of devices, you can control the costs that you incur by running tests.</p> <p>If you use this parameter in your request, you cannot use the <code>clearMaxDevices</code> parameter in the same request.</p>
   */
  maxDevices?: number;

  /**
   * <p>Sets whether the <code>maxDevices</code> parameter applies to your device pool. If you set this parameter to <code>true</code>, the <code>maxDevices</code> parameter does not apply, and Device Farm does not limit the number of devices that it adds to your device pool. In this case, Device Farm adds all available devices that meet the criteria that are specified for the <code>rules</code> parameter.</p> <p>If you use this parameter in your request, you cannot use the <code>maxDevices</code> parameter in the same request.</p>
   */
  clearMaxDevices?: boolean;

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
