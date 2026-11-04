// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ListRealtimeContactAnalysisSegmentsCommandInput,
  type ListRealtimeContactAnalysisSegmentsCommandOutput,
  ListRealtimeContactAnalysisSegmentsCommand,
} from "./commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensClient } from "./ConnectContactLensClient";
import { paginateListRealtimeContactAnalysisSegments } from "./pagination/ListRealtimeContactAnalysisSegmentsPaginator";

const commands = {
  ListRealtimeContactAnalysisSegmentsCommand,
};
const paginators = {
  paginateListRealtimeContactAnalysisSegments,
};

/**
 * @public
 */
export interface ConnectContactLensRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ConnectContactLens {
  /**
   * @see {@link ListRealtimeContactAnalysisSegmentsCommand}
   */
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options?: ConnectContactLensRequestOptions
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput>;
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options: ConnectContactLensRequestOptions,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRealtimeContactAnalysisSegmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRealtimeContactAnalysisSegmentsCommandOutput}.
   */
  paginateListRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRealtimeContactAnalysisSegmentsCommandOutput>;
}

/**
 * - [Contact Lens actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Contact_Lens.html)
 * - [Contact Lens data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Contact_Lens.html)
 *
 * Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.
 *
 * Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent conversations. For more information, see [Analyze conversations using speech analytics](https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html) in the *Amazon Connect Administrator Guide*.
 *
 * @public
 */
export class ConnectContactLens extends ConnectContactLensClient implements ConnectContactLens {}
createAggregatedClient(commands, ConnectContactLens, { paginators });
