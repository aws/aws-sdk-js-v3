// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "./commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLensClient } from "./ConnectContactLensClient";

/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents,
 *       by using speech transcription, natural language processing, and intelligent search
 *       capabilities. It performs sentiment analysis, detects issues, and enables you to automatically
 *       categorize contacts.</p>
 *          <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent
 *       conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using
 *         Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 */
export class ConnectContactLens extends ConnectContactLensClient {
  /**
   * <p>Provides a list of analysis segments for a real-time analysis session.</p>
   */
  public listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput>;
  public listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;
  public listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): void;
  public listRealtimeContactAnalysisSegments(
    args: ListRealtimeContactAnalysisSegmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void),
    cb?: (err: any, data?: ListRealtimeContactAnalysisSegmentsCommandOutput) => void
  ): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> | void {
    const command = new ListRealtimeContactAnalysisSegmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
