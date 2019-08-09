import { _MFAOptionType } from "./_MFAOptionType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to set user settings.</p>
 */
export interface SetUserSettingsInput {
  /**
   * <p>The access token for the set user settings request.</p>
   */
  AccessToken: string;

  /**
   * <p>Specifies the options for MFA (e.g., email or phone number).</p>
   */
  MFAOptions: Array<_MFAOptionType> | Iterable<_MFAOptionType>;

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
