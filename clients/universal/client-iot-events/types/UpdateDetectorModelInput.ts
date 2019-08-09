import { _DetectorModelDefinition } from "./_DetectorModelDefinition";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDetectorModelInput shape
 */
export interface UpdateDetectorModelInput {
  /**
   * <p>The name of the detector model that is updated.</p>
   */
  detectorModelName: string;

  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition: _DetectorModelDefinition;

  /**
   * <p>A brief description of the detector model.</p>
   */
  detectorModelDescription?: string;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Events to perform its operations.</p>
   */
  roleArn: string;

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
