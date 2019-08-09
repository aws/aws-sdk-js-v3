import { _ExportFilter } from "./_ExportFilter";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartExportTaskInput shape
 */
export interface StartExportTaskInput {
  /**
   * <p>The file format for the returned export data. Default value is <code>CSV</code>. <b>Note:</b> <i>The</i> <code>GRAPHML</code> <i>option has been deprecated.</i> </p>
   */
  exportDataFormat?:
    | Array<"CSV" | "GRAPHML" | string>
    | Iterable<"CSV" | "GRAPHML" | string>;

  /**
   * <p>If a filter is present, it selects the single <code>agentId</code> of the Application Discovery Agent for which data is exported. The <code>agentId</code> can be found in the results of the <code>DescribeAgents</code> API or CLI. If no filter is present, <code>startTime</code> and <code>endTime</code> are ignored and exported data includes both Agentless Discovery Connector data and summary data from Application Discovery agents. </p>
   */
  filters?: Array<_ExportFilter> | Iterable<_ExportFilter>;

  /**
   * <p>The start timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, data is exported starting from the first data collected by the agent.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>The end timestamp for exported data from the single Application Discovery Agent selected in the filters. If no value is specified, exported data includes the most recent data collected by the agent.</p>
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
