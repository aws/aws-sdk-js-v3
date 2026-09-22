// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
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
  type DeleteFeedPolicyCommandInput,
  type DeleteFeedPolicyCommandOutput,
  DeleteFeedPolicyCommand,
} from "./commands/DeleteFeedPolicyCommand";
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
  type GetFeedPolicyCommandInput,
  type GetFeedPolicyCommandOutput,
  GetFeedPolicyCommand,
} from "./commands/GetFeedPolicyCommand";
import {
  type GetFixtureCommandInput,
  type GetFixtureCommandOutput,
  GetFixtureCommand,
} from "./commands/GetFixtureCommand";
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
  type PutFeedPolicyCommandInput,
  type PutFeedPolicyCommandOutput,
  PutFeedPolicyCommand,
} from "./commands/PutFeedPolicyCommand";
import {
  type SearchFixturesCommandInput,
  type SearchFixturesCommandOutput,
  SearchFixturesCommand,
} from "./commands/SearchFixturesCommand";
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
import { paginateSearchFixtures } from "./pagination/SearchFixturesPaginator";
import { waitUntilFeedDeleted } from "./waiters/waitForFeedDeleted";

const commands = {
  AssociateFeedCommand,
  CreateDictionaryCommand,
  CreateFeedCommand,
  DeleteDictionaryCommand,
  DeleteFeedCommand,
  DeleteFeedPolicyCommand,
  DisassociateFeedCommand,
  ExportDictionaryEntriesCommand,
  GetDictionaryCommand,
  GetFeedCommand,
  GetFeedPolicyCommand,
  GetFixtureCommand,
  ListDictionariesCommand,
  ListFeedsCommand,
  ListTagsForResourceCommand,
  PutFeedPolicyCommand,
  SearchFixturesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDictionaryCommand,
  UpdateFeedCommand,
};
const paginators = {
  paginateListDictionaries,
  paginateListFeeds,
  paginateSearchFixtures,
};
const waiters = {
  waitUntilFeedDeleted,
};

/**
 * @public
 */
export interface ElementalInferenceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ElementalInference {
  /**
   * @see {@link AssociateFeedCommand}
   */
  associateFeed(
    args: AssociateFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<AssociateFeedCommandOutput>;
  associateFeed(
    args: AssociateFeedCommandInput,
    cb: (err: any, data?: AssociateFeedCommandOutput) => void
  ): void;
  associateFeed(
    args: AssociateFeedCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: AssociateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDictionaryCommand}
   */
  createDictionary(
    args: CreateDictionaryCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<CreateDictionaryCommandOutput>;
  createDictionary(
    args: CreateDictionaryCommandInput,
    cb: (err: any, data?: CreateDictionaryCommandOutput) => void
  ): void;
  createDictionary(
    args: CreateDictionaryCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: CreateDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeedCommand}
   */
  createFeed(
    args: CreateFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<CreateFeedCommandOutput>;
  createFeed(
    args: CreateFeedCommandInput,
    cb: (err: any, data?: CreateFeedCommandOutput) => void
  ): void;
  createFeed(
    args: CreateFeedCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: CreateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDictionaryCommand}
   */
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<DeleteDictionaryCommandOutput>;
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    cb: (err: any, data?: DeleteDictionaryCommandOutput) => void
  ): void;
  deleteDictionary(
    args: DeleteDictionaryCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: DeleteDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFeedCommand}
   */
  deleteFeed(
    args: DeleteFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<DeleteFeedCommandOutput>;
  deleteFeed(
    args: DeleteFeedCommandInput,
    cb: (err: any, data?: DeleteFeedCommandOutput) => void
  ): void;
  deleteFeed(
    args: DeleteFeedCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: DeleteFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFeedPolicyCommand}
   */
  deleteFeedPolicy(
    args: DeleteFeedPolicyCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<DeleteFeedPolicyCommandOutput>;
  deleteFeedPolicy(
    args: DeleteFeedPolicyCommandInput,
    cb: (err: any, data?: DeleteFeedPolicyCommandOutput) => void
  ): void;
  deleteFeedPolicy(
    args: DeleteFeedPolicyCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: DeleteFeedPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFeedCommand}
   */
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<DisassociateFeedCommandOutput>;
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    cb: (err: any, data?: DisassociateFeedCommandOutput) => void
  ): void;
  disassociateFeed(
    args: DisassociateFeedCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: DisassociateFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportDictionaryEntriesCommand}
   */
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<ExportDictionaryEntriesCommandOutput>;
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    cb: (err: any, data?: ExportDictionaryEntriesCommandOutput) => void
  ): void;
  exportDictionaryEntries(
    args: ExportDictionaryEntriesCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: ExportDictionaryEntriesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDictionaryCommand}
   */
  getDictionary(
    args: GetDictionaryCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<GetDictionaryCommandOutput>;
  getDictionary(
    args: GetDictionaryCommandInput,
    cb: (err: any, data?: GetDictionaryCommandOutput) => void
  ): void;
  getDictionary(
    args: GetDictionaryCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: GetDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFeedCommand}
   */
  getFeed(
    args: GetFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<GetFeedCommandOutput>;
  getFeed(
    args: GetFeedCommandInput,
    cb: (err: any, data?: GetFeedCommandOutput) => void
  ): void;
  getFeed(
    args: GetFeedCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: GetFeedCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFeedPolicyCommand}
   */
  getFeedPolicy(
    args: GetFeedPolicyCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<GetFeedPolicyCommandOutput>;
  getFeedPolicy(
    args: GetFeedPolicyCommandInput,
    cb: (err: any, data?: GetFeedPolicyCommandOutput) => void
  ): void;
  getFeedPolicy(
    args: GetFeedPolicyCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: GetFeedPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFixtureCommand}
   */
  getFixture(
    args: GetFixtureCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<GetFixtureCommandOutput>;
  getFixture(
    args: GetFixtureCommandInput,
    cb: (err: any, data?: GetFixtureCommandOutput) => void
  ): void;
  getFixture(
    args: GetFixtureCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: GetFixtureCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDictionariesCommand}
   */
  listDictionaries(): Promise<ListDictionariesCommandOutput>;
  listDictionaries(
    args: ListDictionariesCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<ListDictionariesCommandOutput>;
  listDictionaries(
    args: ListDictionariesCommandInput,
    cb: (err: any, data?: ListDictionariesCommandOutput) => void
  ): void;
  listDictionaries(
    args: ListDictionariesCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: ListDictionariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeedsCommand}
   */
  listFeeds(): Promise<ListFeedsCommandOutput>;
  listFeeds(
    args: ListFeedsCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<ListFeedsCommandOutput>;
  listFeeds(
    args: ListFeedsCommandInput,
    cb: (err: any, data?: ListFeedsCommandOutput) => void
  ): void;
  listFeeds(
    args: ListFeedsCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: ListFeedsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFeedPolicyCommand}
   */
  putFeedPolicy(
    args: PutFeedPolicyCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<PutFeedPolicyCommandOutput>;
  putFeedPolicy(
    args: PutFeedPolicyCommandInput,
    cb: (err: any, data?: PutFeedPolicyCommandOutput) => void
  ): void;
  putFeedPolicy(
    args: PutFeedPolicyCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: PutFeedPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchFixturesCommand}
   */
  searchFixtures(
    args: SearchFixturesCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<SearchFixturesCommandOutput>;
  searchFixtures(
    args: SearchFixturesCommandInput,
    cb: (err: any, data?: SearchFixturesCommandOutput) => void
  ): void;
  searchFixtures(
    args: SearchFixturesCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: SearchFixturesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDictionaryCommand}
   */
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<UpdateDictionaryCommandOutput>;
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    cb: (err: any, data?: UpdateDictionaryCommandOutput) => void
  ): void;
  updateDictionary(
    args: UpdateDictionaryCommandInput,
    options: ElementalInferenceRequestOptions,
    cb: (err: any, data?: UpdateDictionaryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeedCommand}
   */
  updateFeed(
    args: UpdateFeedCommandInput,
    options?: ElementalInferenceRequestOptions
  ): Promise<UpdateFeedCommandOutput>;
  updateFeed(
    args: UpdateFeedCommandInput,
    cb: (err: any, data?: UpdateFeedCommandOutput) => void
  ): void;
  updateFeed(
    args: UpdateFeedCommandInput,
    options: ElementalInferenceRequestOptions,
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
   * @see {@link SearchFixturesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchFixturesCommandOutput}.
   */
  paginateSearchFixtures(
    args: SearchFixturesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchFixturesCommandOutput>;

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
