import { _IPDialIn } from "./_IPDialIn";
import { _PSTNDialIn } from "./_PSTNDialIn";
import { _MeetingSetting } from "./_MeetingSetting";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateConferenceProviderInput shape
 */
export interface UpdateConferenceProviderInput {
  /**
   * <p>The ARN of the conference provider.</p>
   */
  ConferenceProviderArn: string;

  /**
   * <p>The type of the conference provider.</p>
   */
  ConferenceProviderType:
    | "CHIME"
    | "BLUEJEANS"
    | "FUZE"
    | "GOOGLE_HANGOUTS"
    | "POLYCOM"
    | "RINGCENTRAL"
    | "SKYPE_FOR_BUSINESS"
    | "WEBEX"
    | "ZOOM"
    | "CUSTOM"
    | string;

  /**
   * <p>The IP endpoint and protocol for calling.</p>
   */
  IPDialIn?: _IPDialIn;

  /**
   * <p>The information for PSTN conferencing.</p>
   */
  PSTNDialIn?: _PSTNDialIn;

  /**
   * <p>The meeting settings for the conference provider.</p>
   */
  MeetingSetting: _MeetingSetting;

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
