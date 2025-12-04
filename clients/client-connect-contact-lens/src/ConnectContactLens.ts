// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "./commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensClient } from "./ConnectContactLensClient";

const commands = {
  ListRealtimeContactAnalysisSegmentsCommand,
};

export interface ConnectContactLens {
  /**
   * @see {@link ListRealtimeContactAnalysisSegmentsCommand}
   */
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput>;
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;
  listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;
}

/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Contact_Lens.html">Contact Lens actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Contact_Lens.html">Contact Lens data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Contact Lens enables you to analyze conversations between customer and agents, by using
 *             speech transcription, natural language processing, and intelligent search capabilities.
 *             It performs sentiment analysis, detects issues, and enables you to automatically
 *             categorize contacts.</p>
 *          <p>Amazon Connect Contact Lens provides both real-time and post-call analytics of customer-agent
 *             conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations
 *                 using speech analytics</a> in the <i>Amazon Connect Administrator
 *             Guide</i>. </p>
 * @public
 */
export class ConnectContactLens extends ConnectContactLensClient implements ConnectContactLens {}
createAggregatedClient(commands, ConnectContactLens);
