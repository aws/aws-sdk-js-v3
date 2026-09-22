// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type DeleteSessionCommandInput,
  type DeleteSessionCommandOutput,
  DeleteSessionCommand,
} from "./commands/DeleteSessionCommand";
import {
  type GetSessionCommandInput,
  type GetSessionCommandOutput,
  GetSessionCommand,
} from "./commands/GetSessionCommand";
import {
  type PutSessionCommandInput,
  type PutSessionCommandOutput,
  PutSessionCommand,
} from "./commands/PutSessionCommand";
import {
  type RecognizeTextCommandInput,
  type RecognizeTextCommandOutput,
  RecognizeTextCommand,
} from "./commands/RecognizeTextCommand";
import {
  type RecognizeUtteranceCommandInput,
  type RecognizeUtteranceCommandOutput,
  RecognizeUtteranceCommand,
} from "./commands/RecognizeUtteranceCommand";
import {
  type StartConversationCommandInput,
  type StartConversationCommandOutput,
  StartConversationCommand,
} from "./commands/StartConversationCommand";
import { LexRuntimeV2Client } from "./LexRuntimeV2Client";

const commands = {
  DeleteSessionCommand,
  GetSessionCommand,
  PutSessionCommand,
  RecognizeTextCommand,
  RecognizeUtteranceCommand,
  StartConversationCommand,
};

/**
 * @public
 */
export interface LexRuntimeV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface LexRuntimeV2 {
  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(
    args: DeleteSessionCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<DeleteSessionCommandOutput>;
  deleteSession(
    args: DeleteSessionCommandInput,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(
    args: GetSessionCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<GetSessionCommandOutput>;
  getSession(
    args: GetSessionCommandInput,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  getSession(
    args: GetSessionCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSessionCommand}
   */
  putSession(
    args: PutSessionCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<PutSessionCommandOutput>;
  putSession(
    args: PutSessionCommandInput,
    cb: (err: any, data?: PutSessionCommandOutput) => void
  ): void;
  putSession(
    args: PutSessionCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: PutSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeTextCommand}
   */
  recognizeText(
    args: RecognizeTextCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<RecognizeTextCommandOutput>;
  recognizeText(
    args: RecognizeTextCommandInput,
    cb: (err: any, data?: RecognizeTextCommandOutput) => void
  ): void;
  recognizeText(
    args: RecognizeTextCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: RecognizeTextCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeUtteranceCommand}
   */
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<RecognizeUtteranceCommandOutput>;
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConversationCommand}
   */
  startConversation(
    args: StartConversationCommandInput,
    options?: LexRuntimeV2RequestOptions
  ): Promise<StartConversationCommandOutput>;
  startConversation(
    args: StartConversationCommandInput,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
  startConversation(
    args: StartConversationCommandInput,
    options: LexRuntimeV2RequestOptions,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
}

/**
 * <p>This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.</p>
 * @public
 */
export class LexRuntimeV2 extends LexRuntimeV2Client implements LexRuntimeV2 {}
createAggregatedClient(commands, LexRuntimeV2);
