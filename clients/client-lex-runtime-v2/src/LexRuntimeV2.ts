// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteSessionCommand,
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
} from "./commands/DeleteSessionCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { PutSessionCommand, PutSessionCommandInput, PutSessionCommandOutput } from "./commands/PutSessionCommand";
import {
  RecognizeTextCommand,
  RecognizeTextCommandInput,
  RecognizeTextCommandOutput,
} from "./commands/RecognizeTextCommand";
import {
  RecognizeUtteranceCommand,
  RecognizeUtteranceCommandInput,
  RecognizeUtteranceCommandOutput,
} from "./commands/RecognizeUtteranceCommand";
import {
  StartConversationCommand,
  StartConversationCommandInput,
  StartConversationCommandOutput,
} from "./commands/StartConversationCommand";
import { LexRuntimeV2Client, LexRuntimeV2ClientConfig } from "./LexRuntimeV2Client";

const commands = {
  DeleteSessionCommand,
  GetSessionCommand,
  PutSessionCommand,
  RecognizeTextCommand,
  RecognizeUtteranceCommand,
  StartConversationCommand,
};

export interface LexRuntimeV2 {
  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(args: DeleteSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSessionCommandOutput>;
  deleteSession(args: DeleteSessionCommandInput, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSessionCommand}
   */
  putSession(args: PutSessionCommandInput, options?: __HttpHandlerOptions): Promise<PutSessionCommandOutput>;
  putSession(args: PutSessionCommandInput, cb: (err: any, data?: PutSessionCommandOutput) => void): void;
  putSession(
    args: PutSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeTextCommand}
   */
  recognizeText(args: RecognizeTextCommandInput, options?: __HttpHandlerOptions): Promise<RecognizeTextCommandOutput>;
  recognizeText(args: RecognizeTextCommandInput, cb: (err: any, data?: RecognizeTextCommandOutput) => void): void;
  recognizeText(
    args: RecognizeTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecognizeTextCommandOutput) => void
  ): void;

  /**
   * @see {@link RecognizeUtteranceCommand}
   */
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecognizeUtteranceCommandOutput>;
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;
  recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConversationCommand}
   */
  startConversation(
    args: StartConversationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConversationCommandOutput>;
  startConversation(
    args: StartConversationCommandInput,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
  startConversation(
    args: StartConversationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This section contains documentation for the Amazon Lex V2 Runtime V2 API operations.</p>
 */
export class LexRuntimeV2 extends LexRuntimeV2Client implements LexRuntimeV2 {}
createAggregatedClient(commands, LexRuntimeV2);
