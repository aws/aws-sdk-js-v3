import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePortfolioInput shape
 */
export interface UpdatePortfolioInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  Id: string;

  /**
   * <p>The name to use for display purposes.</p>
   */
  DisplayName?: string;

  /**
   * <p>The updated description of the portfolio.</p>
   */
  Description?: string;

  /**
   * <p>The updated name of the portfolio provider.</p>
   */
  ProviderName?: string;

  /**
   * <p>The tags to add.</p>
   */
  AddTags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The tags to remove.</p>
   */
  RemoveTags?: Array<string> | Iterable<string>;

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
