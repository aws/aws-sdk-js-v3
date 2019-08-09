import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchProductsAsAdminInput shape
 */
export interface SearchProductsAsAdminInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The portfolio identifier.</p>
   */
  PortfolioId?: string;

  /**
   * <p>The search filters. If no search filters are specified, the output includes all products to which the administrator has access.</p>
   */
  Filters?:
    | {
        [key in
          | "FullTextSearch"
          | "Owner"
          | "ProductType"
          | "SourceProductId"
          | string]: Array<string> | Iterable<string>
      }
    | Iterable<
        [

            | "FullTextSearch"
            | "Owner"
            | "ProductType"
            | "SourceProductId"
            | string,
          Array<string> | Iterable<string>
        ]
      >;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted.</p>
   */
  SortBy?: "Title" | "VersionCount" | "CreationDate" | string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: "ASCENDING" | "DESCENDING" | string;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>Access level of the source of the product.</p>
   */
  ProductSource?: "ACCOUNT" | string;

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
