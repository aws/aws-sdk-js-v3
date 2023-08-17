// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteLexiconCommand,
  DeleteLexiconCommandInput,
  DeleteLexiconCommandOutput,
} from "./commands/DeleteLexiconCommand";
import {
  DescribeVoicesCommand,
  DescribeVoicesCommandInput,
  DescribeVoicesCommandOutput,
} from "./commands/DescribeVoicesCommand";
import { GetLexiconCommand, GetLexiconCommandInput, GetLexiconCommandOutput } from "./commands/GetLexiconCommand";
import {
  GetSpeechSynthesisTaskCommand,
  GetSpeechSynthesisTaskCommandInput,
  GetSpeechSynthesisTaskCommandOutput,
} from "./commands/GetSpeechSynthesisTaskCommand";
import {
  ListLexiconsCommand,
  ListLexiconsCommandInput,
  ListLexiconsCommandOutput,
} from "./commands/ListLexiconsCommand";
import {
  ListSpeechSynthesisTasksCommand,
  ListSpeechSynthesisTasksCommandInput,
  ListSpeechSynthesisTasksCommandOutput,
} from "./commands/ListSpeechSynthesisTasksCommand";
import { PutLexiconCommand, PutLexiconCommandInput, PutLexiconCommandOutput } from "./commands/PutLexiconCommand";
import {
  StartSpeechSynthesisTaskCommand,
  StartSpeechSynthesisTaskCommandInput,
  StartSpeechSynthesisTaskCommandOutput,
} from "./commands/StartSpeechSynthesisTaskCommand";
import {
  SynthesizeSpeechCommand,
  SynthesizeSpeechCommandInput,
  SynthesizeSpeechCommandOutput,
} from "./commands/SynthesizeSpeechCommand";
import { PollyClient, PollyClientConfig } from "./PollyClient";

const commands = {
  DeleteLexiconCommand,
  DescribeVoicesCommand,
  GetLexiconCommand,
  GetSpeechSynthesisTaskCommand,
  ListLexiconsCommand,
  ListSpeechSynthesisTasksCommand,
  PutLexiconCommand,
  StartSpeechSynthesisTaskCommand,
  SynthesizeSpeechCommand,
};

export interface Polly {
  /**
   * @see {@link DeleteLexiconCommand}
   */
  deleteLexicon(args: DeleteLexiconCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLexiconCommandOutput>;
  deleteLexicon(args: DeleteLexiconCommandInput, cb: (err: any, data?: DeleteLexiconCommandOutput) => void): void;
  deleteLexicon(
    args: DeleteLexiconCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVoicesCommand}
   */
  describeVoices(
    args: DescribeVoicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVoicesCommandOutput>;
  describeVoices(args: DescribeVoicesCommandInput, cb: (err: any, data?: DescribeVoicesCommandOutput) => void): void;
  describeVoices(
    args: DescribeVoicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVoicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLexiconCommand}
   */
  getLexicon(args: GetLexiconCommandInput, options?: __HttpHandlerOptions): Promise<GetLexiconCommandOutput>;
  getLexicon(args: GetLexiconCommandInput, cb: (err: any, data?: GetLexiconCommandOutput) => void): void;
  getLexicon(
    args: GetLexiconCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpeechSynthesisTaskCommand}
   */
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSpeechSynthesisTaskCommandOutput>;
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    cb: (err: any, data?: GetSpeechSynthesisTaskCommandOutput) => void
  ): void;
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpeechSynthesisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLexiconsCommand}
   */
  listLexicons(args: ListLexiconsCommandInput, options?: __HttpHandlerOptions): Promise<ListLexiconsCommandOutput>;
  listLexicons(args: ListLexiconsCommandInput, cb: (err: any, data?: ListLexiconsCommandOutput) => void): void;
  listLexicons(
    args: ListLexiconsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLexiconsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpeechSynthesisTasksCommand}
   */
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSpeechSynthesisTasksCommandOutput>;
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    cb: (err: any, data?: ListSpeechSynthesisTasksCommandOutput) => void
  ): void;
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpeechSynthesisTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLexiconCommand}
   */
  putLexicon(args: PutLexiconCommandInput, options?: __HttpHandlerOptions): Promise<PutLexiconCommandOutput>;
  putLexicon(args: PutLexiconCommandInput, cb: (err: any, data?: PutLexiconCommandOutput) => void): void;
  putLexicon(
    args: PutLexiconCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSpeechSynthesisTaskCommand}
   */
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeechSynthesisTaskCommandOutput>;
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    cb: (err: any, data?: StartSpeechSynthesisTaskCommandOutput) => void
  ): void;
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeechSynthesisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link SynthesizeSpeechCommand}
   */
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SynthesizeSpeechCommandOutput>;
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    cb: (err: any, data?: SynthesizeSpeechCommandOutput) => void
  ): void;
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SynthesizeSpeechCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Polly is a web service that makes it easy to synthesize speech from
 *       text.</p>
 *          <p>The Amazon Polly service provides API operations for synthesizing
 *       high-quality speech from plain text and Speech Synthesis Markup Language
 *       (SSML), along with managing pronunciations lexicons that enable you to get
 *       the best results for your application domain.</p>
 */
export class Polly extends PollyClient implements Polly {}
createAggregatedClient(commands, Polly);
