import { _OrganizationNode } from "./_OrganizationNode";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePortfolioShareInput shape
 */
export interface CreatePortfolioShareInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId: string;

  /**
   * <p>The AWS account ID. For example, <code>123456789012</code>.</p>
   */
  AccountId?: string;

  /**
   * <p>The organization node to whom you are going to share. If <code>OrganizationNode</code> is passed in, <code>PortfolioShare</code> will be created for the node and its children (when applies), and a <code>PortfolioShareToken</code> will be returned in the output in order for the administrator to monitor the status of the <code>PortfolioShare</code> creation process.</p>
   */
  OrganizationNode?: _OrganizationNode;

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
