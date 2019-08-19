import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeCasesInput {
  /**
   * <p>A list of ID numbers of the support cases you want returned. The maximum number of cases is 100.</p>
   */
  caseIdList?: Array<string> | Iterable<string>;

  /**
   * <p>The ID displayed for a case in the AWS Support Center user interface.</p>
   */
  displayId?: string;

  /**
   * <p>The start date for a filtered date search on support case communications. Case communications are available for 12 months after creation.</p>
   */
  afterTime?: string;

  /**
   * <p>The end date for a filtered date search on support case communications. Case communications are available for 12 months after creation.</p>
   */
  beforeTime?: string;

  /**
   * <p>Specifies whether resolved support cases should be included in the <a>DescribeCases</a> results. The default is <i>false</i>.</p>
   */
  includeResolvedCases?: boolean;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return before paginating.</p>
   */
  maxResults?: number;

  /**
   * <p>The ISO 639-1 code for the language in which AWS provides support. AWS Support currently supports English ("en") and Japanese ("ja"). Language parameters must be passed explicitly for operations that take them.</p>
   */
  language?: string;

  /**
   * <p>Specifies whether communications should be included in the <a>DescribeCases</a> results. The default is <i>true</i>.</p>
   */
  includeCommunications?: boolean;

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
