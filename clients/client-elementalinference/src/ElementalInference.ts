// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AssociateFeedCommandInput,
  type AssociateFeedCommandOutput,
  AssociateFeedCommand,
} from "./commands/AssociateFeedCommand";
import {
  type CreateDictionaryCommandInput,
  type CreateDictionaryCommandOutput,
  CreateDictionaryCommand,
} from "./commands/CreateDictionaryCommand";
import {
  type CreateFeedCommandInput,
  type CreateFeedCommandOutput,
  CreateFeedCommand,
} from "./commands/CreateFeedCommand";
import {
  type DeleteDictionaryCommandInput,
  type DeleteDictionaryCommandOutput,
  DeleteDictionaryCommand,
} from "./commands/DeleteDictionaryCommand";
import {
  type DeleteFeedCommandInput,
  type DeleteFeedCommandOutput,
  DeleteFeedCommand,
} from "./commands/DeleteFeedCommand";
import {
  type DisassociateFeedCommandInput,
  type DisassociateFeedCommandOutput,
  DisassociateFeedCommand,
} from "./commands/DisassociateFeedCommand";
import {
  type ExportDictionaryEntriesCommandInput,
  type ExportDictionaryEntriesCommandOutput,
  ExportDictionaryEntriesCommand,
} from "./commands/ExportDictionaryEntriesCommand";
import {
  type GetDictionaryCommandInput,
  type GetDictionaryCommandOutput,
  GetDictionaryCommand,
} from "./commands/GetDictionaryCommand";
import { type GetFeedCommandInput, type GetFeedCommandOutput, GetFeedCommand } from "./commands/GetFeedCommand";
import {
  type ListDictionariesCommandInput,
  type ListDictionariesCommandOutput,
  ListDictionariesCommand,
} from "./commands/ListDictionariesCommand";
import { type ListFeedsCommandInput, type ListFeedsCommandOutput, ListFeedsCommand } from "./commands/ListFeedsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDictionaryCommandInput,
  type UpdateDictionaryCommandOutput,
  UpdateDictionaryCommand,
} from "./commands/UpdateDictionaryCommand";
import {
  type UpdateFeedCommandInput,
  type UpdateFeedCommandOutput,
  UpdateFeedCommand,
} from "./commands/UpdateFeedCommand";
import { ElementalInferenceClient } from "./ElementalInferenceClient";
import type { ElementalInferenceServiceException } from "./models/ElementalInferenceServiceException";
import type { ResourceNotFoundException } from "./models/errors";
import { paginateListDictionaries } from "./pagination/ListDictionariesPaginator";
import { paginateListFeeds } from "./pagination/ListFeedsPaginator";
import { waitUntilFeedDeleted } from "./waiters/waitForFeedDeleted";

const commands = {
  AssociateFeedCommand,
  CreateDictionaryCommand,
  CreateFeedCommand,
  DeleteDictionaryCommand,
  DeleteFeedCommand,
  DisassociateFeedCommand,
  ExportDictionaryEntriesCommand,
  GetDictionaryCommand,
  GetFeedCommand,
  ListDictionariesCommand,
  ListFeedsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDictionaryCommand,
  UpdateFeedCommand,
};
const paginators = {
  paginateListDictionaries,
  paginateListFeeds,
};
const waiters = {
  waitUntilFeedDeleted,
};

export interface ElementalInference {
  /**
   * @see {@link AssociateFeedCommand}
   */
  associateFeed(
    args: AssociateFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFeedCommandOutput>;
  associateFeed(
    args: AssociateFeedCommandInput,
    cb: (err: any, data?: AssociateFeedCommandOutput) => void
  ): void;
  associateFeed(
    args: AssociateFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDictionaryCommand}
   */
  createDictionary(
    args: CreateDictionaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDictionaryCommandOutput>;
  createDictionary(
    args: CreateDictionaryCommandInput,
    cb: (err: any, data?: CreateDictionaryCommandOutput) => void
  ): void;
  createDictionary(
    args: CreateDictionaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeedCommand}
   */
  createFeed(
    args: CreateFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFeedCommandOutput>;
  createFeed(
    args: CreateFeedCommandInput,
    cb: (err: any, data?: CreateFeedCommandOutput) => void
  ): void;
  createFeed(
    args: CreateFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDictionaryCommand}
   */
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDictionaryCommandOutput>;
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    cb: (err: any, data?: DeleteDictionaryCommandOutput) => void
  ): void;
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFeedCommand}
   */
  deleteFeed(
    args: DeleteFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFeedCommandOutput>;
  deleteFeed(
    args: DeleteFeedCommandInput,
    cb: (err: any, data?: DeleteFeedCommandOutput) => void
  ): void;
  deleteFeed(
    args: DeleteFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFeedCommand}
   */
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFeedCommandOutput>;
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    cb: (err: any, data?: DisassociateFeedCommandOutput) => void
  ): void;
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportDictionaryEntriesCommand}
   */
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportDictionaryEntriesCommandOutput>;
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    cb: (err: any, data?: ExportDictionaryEntriesCommandOutput) => void
  ): void;
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportDictionaryEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDictionaryCommand}
   */
  getDictionary(
    args: GetDictionaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDictionaryCommandOutput>;
  getDictionary(
    args: GetDictionaryCommandInput,
    cb: (err: any, data?: GetDictionaryCommandOutput) => void
  ): void;
  getDictionary(
    args: GetDictionaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFeedCommand}
   */
  getFeed(
    args: GetFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFeedCommandOutput>;
  getFeed(
    args: GetFeedCommandInput,
    cb: (err: any, data?: GetFeedCommandOutput) => void
  ): void;
  getFeed(
    args: GetFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDictionariesCommand}
   */
  listDictionaries(): Promise<ListDictionariesCommandOutput>;
  listDictionaries(
    args: ListDictionariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDictionariesCommandOutput>;
  listDictionaries(
    args: ListDictionariesCommandInput,
    cb: (err: any, data?: ListDictionariesCommandOutput) => void
  ): void;
  listDictionaries(
    args: ListDictionariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDictionariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeedsCommand}
   */
  listFeeds(): Promise<ListFeedsCommandOutput>;
  listFeeds(
    args: ListFeedsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFeedsCommandOutput>;
  listFeeds(
    args: ListFeedsCommandInput,
    cb: (err: any, data?: ListFeedsCommandOutput) => void
  ): void;
  listFeeds(
    args: ListFeedsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFeedsCommandOutput) => void
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
   * @see {@link UpdateDictionaryCommand}
   */
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDictionaryCommandOutput>;
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    cb: (err: any, data?: UpdateDictionaryCommandOutput) => void
  ): void;
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeedCommand}
   */
  updateFeed(
    args: UpdateFeedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFeedCommandOutput>;
  updateFeed(
    args: UpdateFeedCommandInput,
    cb: (err: any, data?: UpdateFeedCommandOutput) => void
  ): void;
  updateFeed(
    args: UpdateFeedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDictionariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDictionariesCommandOutput}.
   */
  paginateListDictionaries(
    args?: ListDictionariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDictionariesCommandOutput>;

  /**
   * @see {@link ListFeedsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFeedsCommandOutput}.
   */
  paginateListFeeds(
    args?: ListFeedsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFeedsCommandOutput>;

  /**
   * @see {@link GetFeedCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFeedDeleted(
    args: GetFeedCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ElementalInference>, "client">
  ): Promise<WaiterResult<GetFeedCommandOutput | ResourceNotFoundException>>;
}

/**
 * <p>This is the AWS Elemental Inference REST API Reference. It provides information on the URL, request contents, and response contents of each AWS Elemental Inference REST operation. </p> <p>We assume that you have the IAM permissions that you need to use AWS Elemental Inference via the REST API. We also assume that you are familiar with the features and operations of AWS Elemental Inference as described in <i>AWS Elemental Inference User Guide</i>. </p>
 * @public
 */
export class ElementalInference extends ElementalInferenceClient implements ElementalInference {}
createAggregatedClient(commands, ElementalInference, { paginators, waiters });
