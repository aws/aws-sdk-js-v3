import { _ResourceIdentifier } from "./_ResourceIdentifier";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAuditFindingsInput shape
 */
export interface ListAuditFindingsInput {
  /**
   * <p>A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.</p>
   */
  taskId?: string;

  /**
   * <p>A filter to limit results to the findings for the specified audit check.</p>
   */
  checkName?: string;

  /**
   * <p>Information identifying the noncompliant resource.</p>
   */
  resourceIdentifier?: _ResourceIdentifier;

  /**
   * <p>The maximum number of results to return at one time. The default is 25.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both.</p>
   */
  endTime?: Date | string | number;

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
