import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPhoneNumbersInput shape
 */
export interface ListPhoneNumbersInput {
  /**
   * <p>The phone number status.</p>
   */
  Status?:
    | "AcquireInProgress"
    | "AcquireFailed"
    | "Unassigned"
    | "Assigned"
    | "ReleaseInProgress"
    | "DeleteInProgress"
    | "ReleaseFailed"
    | "DeleteFailed"
    | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: "BusinessCalling" | "VoiceConnector" | string;

  /**
   * <p>The filter to use to limit the number of results.</p>
   */
  FilterName?: "AccountId" | "UserId" | "VoiceConnectorId" | string;

  /**
   * <p>The value to use for the filter.</p>
   */
  FilterValue?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

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
