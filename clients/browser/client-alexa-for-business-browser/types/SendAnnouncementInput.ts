import { _Filter } from "./_Filter";
import { _Content } from "./_Content";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendAnnouncementInput shape
 */
export interface SendAnnouncementInput {
  /**
   * <p>The filters to use to send an announcement to a specified list of rooms. The supported filter keys are RoomName, ProfileName, RoomArn, and ProfileArn. To send to all rooms, specify an empty RoomFilters list.</p>
   */
  RoomFilters: Array<_Filter> | Iterable<_Filter>;

  /**
   * <p>The announcement content. This can contain only one of the three possible announcement types (text, SSML or audio).</p>
   */
  Content: _Content;

  /**
   * <p>The time to live for an announcement. Default is 300. If delivery doesn't occur within this time, the announcement is not delivered.</p>
   */
  TimeToLiveInSeconds?: number;

  /**
   * <p>The unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken: string;

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
