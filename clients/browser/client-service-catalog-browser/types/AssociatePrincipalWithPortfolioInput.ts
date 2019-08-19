import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociatePrincipalWithPortfolioInput shape
 */
export interface AssociatePrincipalWithPortfolioInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string;

  /**
   * <p>The ARN of the principal (IAM user, role, or group).</p>
   */
  PrincipalARN: string;

  /**
   * <p>The principal type. The supported value is <code>IAM</code>.</p>
   */
  PrincipalType: "IAM" | string;

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
