import { _SamplingStrategy } from "./_SamplingStrategy";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTraceSummariesInput shape
 */
export interface GetTraceSummariesInput {
  /**
   * <p>The start of the time frame for which to retrieve traces.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The end of the time frame for which to retrieve traces.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>A parameter to indicate whether to query trace summaries by TraceId or Event time.</p>
   */
  TimeRangeType?: "TraceId" | "Event" | string;

  /**
   * <p>Set to <code>true</code> to get summaries for only a subset of available traces.</p>
   */
  Sampling?: boolean;

  /**
   * <p>A paramater to indicate whether to enable sampling on trace summaries. Input parameters are Name and Value.</p>
   */
  SamplingStrategy?: _SamplingStrategy;

  /**
   * <p>Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements.</p>
   */
  FilterExpression?: string;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of results.</p>
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
