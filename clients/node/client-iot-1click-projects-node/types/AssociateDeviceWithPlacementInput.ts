import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateDeviceWithPlacementInput shape
 */
export interface AssociateDeviceWithPlacementInput {
  /**
   * <p>The name of the project containing the placement in which to associate the device.</p>
   */
  projectName: string;

  /**
   * <p>The name of the placement in which to associate the device.</p>
   */
  placementName: string;

  /**
   * <p>The ID of the physical device to be associated with the given placement in the project. Note that a mandatory 4 character prefix is required for all <code>deviceId</code> values.</p>
   */
  deviceId: string;

  /**
   * <p>The device template name to associate with the device ID.</p>
   */
  deviceTemplateName: string;

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
