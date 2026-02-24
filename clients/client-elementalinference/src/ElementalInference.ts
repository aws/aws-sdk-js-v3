// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  AssociateFeedCommand,
  AssociateFeedCommandInput,
  AssociateFeedCommandOutput,
} from "./commands/AssociateFeedCommand";
import { CreateFeedCommand, CreateFeedCommandInput, CreateFeedCommandOutput } from "./commands/CreateFeedCommand";
import { DeleteFeedCommand, DeleteFeedCommandInput, DeleteFeedCommandOutput } from "./commands/DeleteFeedCommand";
import {
  DisassociateFeedCommand,
  DisassociateFeedCommandInput,
  DisassociateFeedCommandOutput,
} from "./commands/DisassociateFeedCommand";
import { GetFeedCommand, GetFeedCommandInput, GetFeedCommandOutput } from "./commands/GetFeedCommand";
import { ListFeedsCommand, ListFeedsCommandInput, ListFeedsCommandOutput } from "./commands/ListFeedsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateFeedCommand, UpdateFeedCommandInput, UpdateFeedCommandOutput } from "./commands/UpdateFeedCommand";
import { ElementalInferenceClient } from "./ElementalInferenceClient";
import { paginateListFeeds } from "./pagination/ListFeedsPaginator";
import { waitUntilFeedDeleted } from "./waiters/waitForFeedDeleted";

const commands = {
  AssociateFeedCommand,
  CreateFeedCommand,
  DeleteFeedCommand,
  DisassociateFeedCommand,
  GetFeedCommand,
  ListFeedsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateFeedCommand,
};
const paginators = {
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
  ): Promise<WaiterResult>;
}

/**
 * <p>This is the AWS Elemental Inference REST API Reference. It provides information on the URL, request contents, and response contents of each AWS Elemental Inference REST operation. </p> <p>We assume that you have the IAM permissions that you need to use AWS Elemental Inference via the REST API. We also assume that you are familiar with the features and operations of AWS Elemental Inference as described in <i>AWS Elemental Inference User Guide</i>. </p>
 * @public
 */
export class ElementalInference extends ElementalInferenceClient implements ElementalInference {}
createAggregatedClient(commands, ElementalInference, { paginators, waiters });
