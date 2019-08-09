import { _SMSMfaSettingsType } from "./_SMSMfaSettingsType";
import { _SoftwareTokenMfaSettingsType } from "./_SoftwareTokenMfaSettingsType";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetUserMFAPreferenceInput shape
 */
export interface SetUserMFAPreferenceInput {
  /**
   * <p>The SMS text message multi-factor authentication (MFA) settings.</p>
   */
  SMSMfaSettings?: _SMSMfaSettingsType;

  /**
   * <p>The time-based one-time password software token MFA settings.</p>
   */
  SoftwareTokenMfaSettings?: _SoftwareTokenMfaSettingsType;

  /**
   * <p>The access token.</p>
   */
  AccessToken: string;

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
