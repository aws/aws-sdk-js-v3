import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateDeviceFromPlacementInput shape
 */
export interface DisassociateDeviceFromPlacementInput {
  /**
   * <p>The name of the project that contains the placement.</p>
   */
  projectName: string;

  /**
   * <p>The name of the placement that the device should be removed from.</p>
   */
  placementName: string;

  /**
   * <p>The device ID that should be removed from the placement.</p>
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
