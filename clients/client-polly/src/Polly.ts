// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type DeleteLexiconCommandInput,
  type DeleteLexiconCommandOutput,
  DeleteLexiconCommand,
} from "./commands/DeleteLexiconCommand";
import {
  type DescribeVoicesCommandInput,
  type DescribeVoicesCommandOutput,
  DescribeVoicesCommand,
} from "./commands/DescribeVoicesCommand";
import {
  type GetLexiconCommandInput,
  type GetLexiconCommandOutput,
  GetLexiconCommand,
} from "./commands/GetLexiconCommand";
import {
  type GetSpeechSynthesisTaskCommandInput,
  type GetSpeechSynthesisTaskCommandOutput,
  GetSpeechSynthesisTaskCommand,
} from "./commands/GetSpeechSynthesisTaskCommand";
import {
  type ListLexiconsCommandInput,
  type ListLexiconsCommandOutput,
  ListLexiconsCommand,
} from "./commands/ListLexiconsCommand";
import {
  type ListSpeechSynthesisTasksCommandInput,
  type ListSpeechSynthesisTasksCommandOutput,
  ListSpeechSynthesisTasksCommand,
} from "./commands/ListSpeechSynthesisTasksCommand";
import {
  type PutLexiconCommandInput,
  type PutLexiconCommandOutput,
  PutLexiconCommand,
} from "./commands/PutLexiconCommand";
import {
  type StartSpeechSynthesisStreamCommandInput,
  type StartSpeechSynthesisStreamCommandOutput,
  StartSpeechSynthesisStreamCommand,
} from "./commands/StartSpeechSynthesisStreamCommand";
import {
  type StartSpeechSynthesisTaskCommandInput,
  type StartSpeechSynthesisTaskCommandOutput,
  StartSpeechSynthesisTaskCommand,
} from "./commands/StartSpeechSynthesisTaskCommand";
import {
  type SynthesizeSpeechCommandInput,
  type SynthesizeSpeechCommandOutput,
  SynthesizeSpeechCommand,
} from "./commands/SynthesizeSpeechCommand";
import { paginateListSpeechSynthesisTasks } from "./pagination/ListSpeechSynthesisTasksPaginator";
import { PollyClient } from "./PollyClient";

const commands = {
  DeleteLexiconCommand,
  DescribeVoicesCommand,
  GetLexiconCommand,
  GetSpeechSynthesisTaskCommand,
  ListLexiconsCommand,
  ListSpeechSynthesisTasksCommand,
  PutLexiconCommand,
  StartSpeechSynthesisStreamCommand,
  StartSpeechSynthesisTaskCommand,
  SynthesizeSpeechCommand,
};
const paginators = {
  paginateListSpeechSynthesisTasks,
};

/**
 * @public
 */
export interface PollyRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Polly {
  /**
   * @see {@link DeleteLexiconCommand}
   */
  deleteLexicon(
    args: DeleteLexiconCommandInput,
    options?: PollyRequestOptions
  ): Promise<DeleteLexiconCommandOutput>;
  deleteLexicon(
    args: DeleteLexiconCommandInput,
    cb: (err: any, data?: DeleteLexiconCommandOutput) => void
  ): void;
  deleteLexicon(
    args: DeleteLexiconCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: DeleteLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVoicesCommand}
   */
  describeVoices(): Promise<DescribeVoicesCommandOutput>;
  describeVoices(
    args: DescribeVoicesCommandInput,
    options?: PollyRequestOptions
  ): Promise<DescribeVoicesCommandOutput>;
  describeVoices(
    args: DescribeVoicesCommandInput,
    cb: (err: any, data?: DescribeVoicesCommandOutput) => void
  ): void;
  describeVoices(
    args: DescribeVoicesCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: DescribeVoicesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLexiconCommand}
   */
  getLexicon(
    args: GetLexiconCommandInput,
    options?: PollyRequestOptions
  ): Promise<GetLexiconCommandOutput>;
  getLexicon(
    args: GetLexiconCommandInput,
    cb: (err: any, data?: GetLexiconCommandOutput) => void
  ): void;
  getLexicon(
    args: GetLexiconCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: GetLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpeechSynthesisTaskCommand}
   */
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    options?: PollyRequestOptions
  ): Promise<GetSpeechSynthesisTaskCommandOutput>;
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    cb: (err: any, data?: GetSpeechSynthesisTaskCommandOutput) => void
  ): void;
  getSpeechSynthesisTask(
    args: GetSpeechSynthesisTaskCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: GetSpeechSynthesisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLexiconsCommand}
   */
  listLexicons(): Promise<ListLexiconsCommandOutput>;
  listLexicons(
    args: ListLexiconsCommandInput,
    options?: PollyRequestOptions
  ): Promise<ListLexiconsCommandOutput>;
  listLexicons(
    args: ListLexiconsCommandInput,
    cb: (err: any, data?: ListLexiconsCommandOutput) => void
  ): void;
  listLexicons(
    args: ListLexiconsCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: ListLexiconsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpeechSynthesisTasksCommand}
   */
  listSpeechSynthesisTasks(): Promise<ListSpeechSynthesisTasksCommandOutput>;
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    options?: PollyRequestOptions
  ): Promise<ListSpeechSynthesisTasksCommandOutput>;
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    cb: (err: any, data?: ListSpeechSynthesisTasksCommandOutput) => void
  ): void;
  listSpeechSynthesisTasks(
    args: ListSpeechSynthesisTasksCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: ListSpeechSynthesisTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLexiconCommand}
   */
  putLexicon(
    args: PutLexiconCommandInput,
    options?: PollyRequestOptions
  ): Promise<PutLexiconCommandOutput>;
  putLexicon(
    args: PutLexiconCommandInput,
    cb: (err: any, data?: PutLexiconCommandOutput) => void
  ): void;
  putLexicon(
    args: PutLexiconCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: PutLexiconCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSpeechSynthesisStreamCommand}
   */
  startSpeechSynthesisStream(
    args: StartSpeechSynthesisStreamCommandInput,
    options?: PollyRequestOptions
  ): Promise<StartSpeechSynthesisStreamCommandOutput>;
  startSpeechSynthesisStream(
    args: StartSpeechSynthesisStreamCommandInput,
    cb: (err: any, data?: StartSpeechSynthesisStreamCommandOutput) => void
  ): void;
  startSpeechSynthesisStream(
    args: StartSpeechSynthesisStreamCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: StartSpeechSynthesisStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSpeechSynthesisTaskCommand}
   */
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    options?: PollyRequestOptions
  ): Promise<StartSpeechSynthesisTaskCommandOutput>;
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    cb: (err: any, data?: StartSpeechSynthesisTaskCommandOutput) => void
  ): void;
  startSpeechSynthesisTask(
    args: StartSpeechSynthesisTaskCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: StartSpeechSynthesisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link SynthesizeSpeechCommand}
   */
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    options?: PollyRequestOptions
  ): Promise<SynthesizeSpeechCommandOutput>;
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    cb: (err: any, data?: SynthesizeSpeechCommandOutput) => void
  ): void;
  synthesizeSpeech(
    args: SynthesizeSpeechCommandInput,
    options: PollyRequestOptions,
    cb: (err: any, data?: SynthesizeSpeechCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpeechSynthesisTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSpeechSynthesisTasksCommandOutput}.
   */
  paginateListSpeechSynthesisTasks(
    args?: ListSpeechSynthesisTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSpeechSynthesisTasksCommandOutput>;
}

/**
 * <p>Amazon Polly is a web service that makes it easy to synthesize speech from
 *       text.</p>
 *          <p>The Amazon Polly service provides API operations for synthesizing
 *       high-quality speech from plain text and Speech Synthesis Markup Language
 *       (SSML), along with managing pronunciations lexicons that enable you to get
 *       the best results for your application domain.</p>
 * @public
 */
export class Polly extends PollyClient implements Polly {}
createAggregatedClient(commands, Polly, { paginators });
