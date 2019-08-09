import { _AccessLevelFilter } from "./_AccessLevelFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchProvisionedProductsInput shape
 */
export interface SearchProvisionedProductsInput {
  /**
   * <p>The language code.</p> <ul> <li> <p> <code>en</code> - English (default)</p> </li> <li> <p> <code>jp</code> - Japanese</p> </li> <li> <p> <code>zh</code> - Chinese</p> </li> </ul>
   */
  AcceptLanguage?: string;

  /**
   * <p>The access level to use to obtain results. The default is <code>User</code>.</p>
   */
  AccessLevelFilter?: _AccessLevelFilter;

  /**
   * <p>The search filters.</p> <p>When the key is <code>SearchQuery</code>, the searchable fields are <code>arn</code>, <code>createdTime</code>, <code>id</code>, <code>lastRecordId</code>, <code>idempotencyToken</code>, <code>name</code>, <code>physicalId</code>, <code>productId</code>, <code>provisioningArtifact</code>, <code>type</code>, <code>status</code>, <code>tags</code>, <code>userArn</code>, and <code>userArnSession</code>.</p> <p>Example: <code>"SearchQuery":["status:AVAILABLE"]</code> </p>
   */
  Filters?:
    | { [key in "SearchQuery" | string]: Array<string> | Iterable<string> }
    | Iterable<["SearchQuery" | string, Array<string> | Iterable<string>]>;

  /**
   * <p>The sort field. If no value is specified, the results are not sorted. The valid values are <code>arn</code>, <code>id</code>, <code>name</code>, and <code>lastRecordId</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>The sort order. If no value is specified, the results are not sorted.</p>
   */
  SortOrder?: "ASCENDING" | "DESCENDING" | string;

  /**
   * <p>The maximum number of items to return with this call.</p>
   */
  PageSize?: number;

  /**
   * <p>The page token for the next set of results. To retrieve the first set of results, use null.</p>
   */
  PageToken?: string;

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
