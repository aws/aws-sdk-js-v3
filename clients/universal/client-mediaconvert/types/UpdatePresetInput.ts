import { _PresetSettings } from "./_PresetSettings";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePresetInput shape
 */
export interface UpdatePresetInput {
  /**
   * The new category for the preset, if you are changing it.
   */
  Category?: string;

  /**
   * The new description for the preset, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the preset you are modifying.
   */
  Name: string;

  /**
   * Settings for preset
   */
  Settings?: _PresetSettings;

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
