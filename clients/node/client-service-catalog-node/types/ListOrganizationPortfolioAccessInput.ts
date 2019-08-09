import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListOrganizationPortfolioAccessInput shape
 */
export interface ListOrganizationPortfolioAccessInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier. For example, <code>port-2abcdext3y5fk</code>.</p>
   */
  PortfolioId: string;

  /**
   * <p>The organization node type that will be returned in the output.</p> <ul> <li> <p> <code>ORGANIZATION</code> - Organization that has access to the portfolio. </p> </li> <li> <p> <code>ORGANIZATIONAL_UNIT</code> - Organizational unit that has access to the portfolio within your organization.</p> </li> <li> <p> <code>ACCOUNT</code> - Account that has access to the portfolio within your organization.</p> </li> </ul>
   */
  OrganizationNodeType:
    | "ORGANIZATION"
    | "ORGANIZATIONAL_UNIT"
    | "ACCOUNT"
    | string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

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
