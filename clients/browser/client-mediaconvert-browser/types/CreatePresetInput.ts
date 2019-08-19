import { _PresetSettings } from "./_PresetSettings";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePresetInput shape
 */
export interface CreatePresetInput {
  /**
   * Optional. A category for the preset you are creating.
   */
  Category?: string;

  /**
   * Optional. A description of the preset you are creating.
   */
  Description?: string;

  /**
   * The name of the preset you are creating.
   */
  Name: string;

  /**
   * Settings for preset
   */
  Settings: _PresetSettings;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
