// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateParallelDataCommandInput,
  type CreateParallelDataCommandOutput,
  CreateParallelDataCommand,
} from "./commands/CreateParallelDataCommand";
import {
  type DeleteParallelDataCommandInput,
  type DeleteParallelDataCommandOutput,
  DeleteParallelDataCommand,
} from "./commands/DeleteParallelDataCommand";
import {
  type DeleteTerminologyCommandInput,
  type DeleteTerminologyCommandOutput,
  DeleteTerminologyCommand,
} from "./commands/DeleteTerminologyCommand";
import {
  type DescribeTextTranslationJobCommandInput,
  type DescribeTextTranslationJobCommandOutput,
  DescribeTextTranslationJobCommand,
} from "./commands/DescribeTextTranslationJobCommand";
import {
  type GetParallelDataCommandInput,
  type GetParallelDataCommandOutput,
  GetParallelDataCommand,
} from "./commands/GetParallelDataCommand";
import {
  type GetTerminologyCommandInput,
  type GetTerminologyCommandOutput,
  GetTerminologyCommand,
} from "./commands/GetTerminologyCommand";
import {
  type ImportTerminologyCommandInput,
  type ImportTerminologyCommandOutput,
  ImportTerminologyCommand,
} from "./commands/ImportTerminologyCommand";
import {
  type ListLanguagesCommandInput,
  type ListLanguagesCommandOutput,
  ListLanguagesCommand,
} from "./commands/ListLanguagesCommand";
import {
  type ListParallelDataCommandInput,
  type ListParallelDataCommandOutput,
  ListParallelDataCommand,
} from "./commands/ListParallelDataCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTerminologiesCommandInput,
  type ListTerminologiesCommandOutput,
  ListTerminologiesCommand,
} from "./commands/ListTerminologiesCommand";
import {
  type ListTextTranslationJobsCommandInput,
  type ListTextTranslationJobsCommandOutput,
  ListTextTranslationJobsCommand,
} from "./commands/ListTextTranslationJobsCommand";
import {
  type StartTextTranslationJobCommandInput,
  type StartTextTranslationJobCommandOutput,
  StartTextTranslationJobCommand,
} from "./commands/StartTextTranslationJobCommand";
import {
  type StopTextTranslationJobCommandInput,
  type StopTextTranslationJobCommandOutput,
  StopTextTranslationJobCommand,
} from "./commands/StopTextTranslationJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TranslateDocumentCommandInput,
  type TranslateDocumentCommandOutput,
  TranslateDocumentCommand,
} from "./commands/TranslateDocumentCommand";
import {
  type TranslateTextCommandInput,
  type TranslateTextCommandOutput,
  TranslateTextCommand,
} from "./commands/TranslateTextCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateParallelDataCommandInput,
  type UpdateParallelDataCommandOutput,
  UpdateParallelDataCommand,
} from "./commands/UpdateParallelDataCommand";
import { paginateListLanguages } from "./pagination/ListLanguagesPaginator";
import { paginateListParallelData } from "./pagination/ListParallelDataPaginator";
import { paginateListTerminologies } from "./pagination/ListTerminologiesPaginator";
import { paginateListTextTranslationJobs } from "./pagination/ListTextTranslationJobsPaginator";
import { TranslateClient } from "./TranslateClient";

const commands = {
  CreateParallelDataCommand,
  DeleteParallelDataCommand,
  DeleteTerminologyCommand,
  DescribeTextTranslationJobCommand,
  GetParallelDataCommand,
  GetTerminologyCommand,
  ImportTerminologyCommand,
  ListLanguagesCommand,
  ListParallelDataCommand,
  ListTagsForResourceCommand,
  ListTerminologiesCommand,
  ListTextTranslationJobsCommand,
  StartTextTranslationJobCommand,
  StopTextTranslationJobCommand,
  TagResourceCommand,
  TranslateDocumentCommand,
  TranslateTextCommand,
  UntagResourceCommand,
  UpdateParallelDataCommand,
};
const paginators = {
  paginateListLanguages,
  paginateListParallelData,
  paginateListTerminologies,
  paginateListTextTranslationJobs,
};

export interface Translate {
  /**
   * @see {@link CreateParallelDataCommand}
   */
  createParallelData(
    args: CreateParallelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParallelDataCommandOutput>;
  createParallelData(
    args: CreateParallelDataCommandInput,
    cb: (err: any, data?: CreateParallelDataCommandOutput) => void
  ): void;
  createParallelData(
    args: CreateParallelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParallelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParallelDataCommand}
   */
  deleteParallelData(
    args: DeleteParallelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParallelDataCommandOutput>;
  deleteParallelData(
    args: DeleteParallelDataCommandInput,
    cb: (err: any, data?: DeleteParallelDataCommandOutput) => void
  ): void;
  deleteParallelData(
    args: DeleteParallelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParallelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTerminologyCommand}
   */
  deleteTerminology(
    args: DeleteTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTerminologyCommandOutput>;
  deleteTerminology(
    args: DeleteTerminologyCommandInput,
    cb: (err: any, data?: DeleteTerminologyCommandOutput) => void
  ): void;
  deleteTerminology(
    args: DeleteTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTerminologyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTextTranslationJobCommand}
   */
  describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTextTranslationJobCommandOutput>;
  describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    cb: (err: any, data?: DescribeTextTranslationJobCommandOutput) => void
  ): void;
  describeTextTranslationJob(
    args: DescribeTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTextTranslationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParallelDataCommand}
   */
  getParallelData(
    args: GetParallelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParallelDataCommandOutput>;
  getParallelData(
    args: GetParallelDataCommandInput,
    cb: (err: any, data?: GetParallelDataCommandOutput) => void
  ): void;
  getParallelData(
    args: GetParallelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParallelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTerminologyCommand}
   */
  getTerminology(
    args: GetTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTerminologyCommandOutput>;
  getTerminology(
    args: GetTerminologyCommandInput,
    cb: (err: any, data?: GetTerminologyCommandOutput) => void
  ): void;
  getTerminology(
    args: GetTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTerminologyCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportTerminologyCommand}
   */
  importTerminology(
    args: ImportTerminologyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportTerminologyCommandOutput>;
  importTerminology(
    args: ImportTerminologyCommandInput,
    cb: (err: any, data?: ImportTerminologyCommandOutput) => void
  ): void;
  importTerminology(
    args: ImportTerminologyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportTerminologyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLanguagesCommand}
   */
  listLanguages(): Promise<ListLanguagesCommandOutput>;
  listLanguages(
    args: ListLanguagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLanguagesCommandOutput>;
  listLanguages(
    args: ListLanguagesCommandInput,
    cb: (err: any, data?: ListLanguagesCommandOutput) => void
  ): void;
  listLanguages(
    args: ListLanguagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLanguagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParallelDataCommand}
   */
  listParallelData(): Promise<ListParallelDataCommandOutput>;
  listParallelData(
    args: ListParallelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParallelDataCommandOutput>;
  listParallelData(
    args: ListParallelDataCommandInput,
    cb: (err: any, data?: ListParallelDataCommandOutput) => void
  ): void;
  listParallelData(
    args: ListParallelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParallelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTerminologiesCommand}
   */
  listTerminologies(): Promise<ListTerminologiesCommandOutput>;
  listTerminologies(
    args: ListTerminologiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTerminologiesCommandOutput>;
  listTerminologies(
    args: ListTerminologiesCommandInput,
    cb: (err: any, data?: ListTerminologiesCommandOutput) => void
  ): void;
  listTerminologies(
    args: ListTerminologiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTerminologiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTextTranslationJobsCommand}
   */
  listTextTranslationJobs(): Promise<ListTextTranslationJobsCommandOutput>;
  listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTextTranslationJobsCommandOutput>;
  listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    cb: (err: any, data?: ListTextTranslationJobsCommandOutput) => void
  ): void;
  listTextTranslationJobs(
    args: ListTextTranslationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTextTranslationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTextTranslationJobCommand}
   */
  startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTextTranslationJobCommandOutput>;
  startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    cb: (err: any, data?: StartTextTranslationJobCommandOutput) => void
  ): void;
  startTextTranslationJob(
    args: StartTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTextTranslationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTextTranslationJobCommand}
   */
  stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTextTranslationJobCommandOutput>;
  stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    cb: (err: any, data?: StopTextTranslationJobCommandOutput) => void
  ): void;
  stopTextTranslationJob(
    args: StopTextTranslationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTextTranslationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TranslateDocumentCommand}
   */
  translateDocument(
    args: TranslateDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TranslateDocumentCommandOutput>;
  translateDocument(
    args: TranslateDocumentCommandInput,
    cb: (err: any, data?: TranslateDocumentCommandOutput) => void
  ): void;
  translateDocument(
    args: TranslateDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TranslateDocumentCommandOutput) => void
  ): void;

  /**
   * @see {@link TranslateTextCommand}
   */
  translateText(
    args: TranslateTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TranslateTextCommandOutput>;
  translateText(
    args: TranslateTextCommandInput,
    cb: (err: any, data?: TranslateTextCommandOutput) => void
  ): void;
  translateText(
    args: TranslateTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TranslateTextCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParallelDataCommand}
   */
  updateParallelData(
    args: UpdateParallelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParallelDataCommandOutput>;
  updateParallelData(
    args: UpdateParallelDataCommandInput,
    cb: (err: any, data?: UpdateParallelDataCommandOutput) => void
  ): void;
  updateParallelData(
    args: UpdateParallelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParallelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLanguagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLanguagesCommandOutput}.
   */
  paginateListLanguages(
    args?: ListLanguagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLanguagesCommandOutput>;

  /**
   * @see {@link ListParallelDataCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListParallelDataCommandOutput}.
   */
  paginateListParallelData(
    args?: ListParallelDataCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListParallelDataCommandOutput>;

  /**
   * @see {@link ListTerminologiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTerminologiesCommandOutput}.
   */
  paginateListTerminologies(
    args?: ListTerminologiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTerminologiesCommandOutput>;

  /**
   * @see {@link ListTextTranslationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTextTranslationJobsCommandOutput}.
   */
  paginateListTextTranslationJobs(
    args?: ListTextTranslationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTextTranslationJobsCommandOutput>;
}

/**
 * <p>Provides translation of the input content from the source language to the target language.</p>
 * @public
 */
export class Translate extends TranslateClient implements Translate {}
createAggregatedClient(commands, Translate, { paginators });
