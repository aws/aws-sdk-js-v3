import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInsightInput shape
 */
export interface CreateInsightInput {
  /**
   * <p>The name of the custom insight to create.</p>
   */
  Name: string;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. Only findings that match the criteria defined in the filters are included in the insight.</p>
   */
  Filters: _AwsSecurityFindingFilters;

  /**
   * <p>The attribute used as the aggregator to group related findings for the insight.</p>
   */
  GroupByAttribute: string;

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
