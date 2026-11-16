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
  type BatchGetEventCommandInput,
  type BatchGetEventCommandOutput,
  BatchGetEventCommand,
} from "./commands/BatchGetEventCommand";
import {
  type CreateEventCommandInput,
  type CreateEventCommandOutput,
  CreateEventCommand,
} from "./commands/CreateEventCommand";
import {
  type CreateMemoryCommandInput,
  type CreateMemoryCommandOutput,
  CreateMemoryCommand,
} from "./commands/CreateMemoryCommand";
import {
  type CreateSpaceCommandInput,
  type CreateSpaceCommandOutput,
  CreateSpaceCommand,
} from "./commands/CreateSpaceCommand";
import {
  type DeleteEventCommandInput,
  type DeleteEventCommandOutput,
  DeleteEventCommand,
} from "./commands/DeleteEventCommand";
import {
  type DeleteMemoryCommandInput,
  type DeleteMemoryCommandOutput,
  DeleteMemoryCommand,
} from "./commands/DeleteMemoryCommand";
import {
  type DeleteSpaceCommandInput,
  type DeleteSpaceCommandOutput,
  DeleteSpaceCommand,
} from "./commands/DeleteSpaceCommand";
import { type GetEventCommandInput, type GetEventCommandOutput, GetEventCommand } from "./commands/GetEventCommand";
import { type GetMemoryCommandInput, type GetMemoryCommandOutput, GetMemoryCommand } from "./commands/GetMemoryCommand";
import { type GetSpaceCommandInput, type GetSpaceCommandOutput, GetSpaceCommand } from "./commands/GetSpaceCommand";
import {
  type ListEventsCommandInput,
  type ListEventsCommandOutput,
  ListEventsCommand,
} from "./commands/ListEventsCommand";
import {
  type ListMemoriesCommandInput,
  type ListMemoriesCommandOutput,
  ListMemoriesCommand,
} from "./commands/ListMemoriesCommand";
import {
  type ListSpacesCommandInput,
  type ListSpacesCommandOutput,
  ListSpacesCommand,
} from "./commands/ListSpacesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type SearchEventsCommandInput,
  type SearchEventsCommandOutput,
  SearchEventsCommand,
} from "./commands/SearchEventsCommand";
import {
  type SearchMemoriesCommandInput,
  type SearchMemoriesCommandOutput,
  SearchMemoriesCommand,
} from "./commands/SearchMemoriesCommand";
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
  type UpdateMemoryCommandInput,
  type UpdateMemoryCommandOutput,
  UpdateMemoryCommand,
} from "./commands/UpdateMemoryCommand";
import {
  type UpdateSpaceCommandInput,
  type UpdateSpaceCommandOutput,
  UpdateSpaceCommand,
} from "./commands/UpdateSpaceCommand";
import type { ResourceNotFoundException } from "./models/errors";
import type { OpenSearchMemoryServiceException } from "./models/OpenSearchMemoryServiceException";
import { OpenSearchMemoryClient } from "./OpenSearchMemoryClient";
import { paginateListEvents } from "./pagination/ListEventsPaginator";
import { paginateListMemories } from "./pagination/ListMemoriesPaginator";
import { paginateListSpaces } from "./pagination/ListSpacesPaginator";
import { paginateSearchEvents } from "./pagination/SearchEventsPaginator";
import { paginateSearchMemories } from "./pagination/SearchMemoriesPaginator";
import { waitUntilSpaceActive } from "./waiters/waitForSpaceActive";
import { waitUntilSpaceDeleted } from "./waiters/waitForSpaceDeleted";

const commands = {
  BatchGetEventCommand,
  CreateEventCommand,
  CreateMemoryCommand,
  CreateSpaceCommand,
  DeleteEventCommand,
  DeleteMemoryCommand,
  DeleteSpaceCommand,
  GetEventCommand,
  GetMemoryCommand,
  GetSpaceCommand,
  ListEventsCommand,
  ListMemoriesCommand,
  ListSpacesCommand,
  ListTagsForResourceCommand,
  SearchEventsCommand,
  SearchMemoriesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMemoryCommand,
  UpdateSpaceCommand,
};
const paginators = {
  paginateListEvents,
  paginateListMemories,
  paginateListSpaces,
  paginateSearchEvents,
  paginateSearchMemories,
};
const waiters = {
  waitUntilSpaceActive,
  waitUntilSpaceDeleted,
};

/**
 * @public
 */
export interface OpenSearchMemoryRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface OpenSearchMemory {
  /**
   * @see {@link BatchGetEventCommand}
   */
  batchGetEvent(
    args: BatchGetEventCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<BatchGetEventCommandOutput>;
  batchGetEvent(
    args: BatchGetEventCommandInput,
    cb: (err: any, data?: BatchGetEventCommandOutput) => void
  ): void;
  batchGetEvent(
    args: BatchGetEventCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: BatchGetEventCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEventCommand}
   */
  createEvent(
    args: CreateEventCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<CreateEventCommandOutput>;
  createEvent(
    args: CreateEventCommandInput,
    cb: (err: any, data?: CreateEventCommandOutput) => void
  ): void;
  createEvent(
    args: CreateEventCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: CreateEventCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMemoryCommand}
   */
  createMemory(
    args: CreateMemoryCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<CreateMemoryCommandOutput>;
  createMemory(
    args: CreateMemoryCommandInput,
    cb: (err: any, data?: CreateMemoryCommandOutput) => void
  ): void;
  createMemory(
    args: CreateMemoryCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: CreateMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpaceCommand}
   */
  createSpace(
    args: CreateSpaceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<CreateSpaceCommandOutput>;
  createSpace(
    args: CreateSpaceCommandInput,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;
  createSpace(
    args: CreateSpaceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventCommand}
   */
  deleteEvent(
    args: DeleteEventCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<DeleteEventCommandOutput>;
  deleteEvent(
    args: DeleteEventCommandInput,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;
  deleteEvent(
    args: DeleteEventCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: DeleteEventCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemoryCommand}
   */
  deleteMemory(
    args: DeleteMemoryCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<DeleteMemoryCommandOutput>;
  deleteMemory(
    args: DeleteMemoryCommandInput,
    cb: (err: any, data?: DeleteMemoryCommandOutput) => void
  ): void;
  deleteMemory(
    args: DeleteMemoryCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: DeleteMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventCommand}
   */
  getEvent(
    args: GetEventCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<GetEventCommandOutput>;
  getEvent(
    args: GetEventCommandInput,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;
  getEvent(
    args: GetEventCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: GetEventCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemoryCommand}
   */
  getMemory(
    args: GetMemoryCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<GetMemoryCommandOutput>;
  getMemory(
    args: GetMemoryCommandInput,
    cb: (err: any, data?: GetMemoryCommandOutput) => void
  ): void;
  getMemory(
    args: GetMemoryCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: GetMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpaceCommand}
   */
  getSpace(
    args: GetSpaceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<GetSpaceCommandOutput>;
  getSpace(
    args: GetSpaceCommandInput,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;
  getSpace(
    args: GetSpaceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: GetSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventsCommand}
   */
  listEvents(
    args: ListEventsCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<ListEventsCommandOutput>;
  listEvents(
    args: ListEventsCommandInput,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;
  listEvents(
    args: ListEventsCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: ListEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemoriesCommand}
   */
  listMemories(
    args: ListMemoriesCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<ListMemoriesCommandOutput>;
  listMemories(
    args: ListMemoriesCommandInput,
    cb: (err: any, data?: ListMemoriesCommandOutput) => void
  ): void;
  listMemories(
    args: ListMemoriesCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: ListMemoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<ListSpacesCommandOutput>;
  listSpaces(
    args: ListSpacesCommandInput,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchEventsCommand}
   */
  searchEvents(
    args: SearchEventsCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<SearchEventsCommandOutput>;
  searchEvents(
    args: SearchEventsCommandInput,
    cb: (err: any, data?: SearchEventsCommandOutput) => void
  ): void;
  searchEvents(
    args: SearchEventsCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: SearchEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchMemoriesCommand}
   */
  searchMemories(
    args: SearchMemoriesCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<SearchMemoriesCommandOutput>;
  searchMemories(
    args: SearchMemoriesCommandInput,
    cb: (err: any, data?: SearchMemoriesCommandOutput) => void
  ): void;
  searchMemories(
    args: SearchMemoriesCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: SearchMemoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMemoryCommand}
   */
  updateMemory(
    args: UpdateMemoryCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<UpdateMemoryCommandOutput>;
  updateMemory(
    args: UpdateMemoryCommandInput,
    cb: (err: any, data?: UpdateMemoryCommandOutput) => void
  ): void;
  updateMemory(
    args: UpdateMemoryCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: UpdateMemoryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(
    args: UpdateSpaceCommandInput,
    options?: OpenSearchMemoryRequestOptions
  ): Promise<UpdateSpaceCommandOutput>;
  updateSpace(
    args: UpdateSpaceCommandInput,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: OpenSearchMemoryRequestOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEventsCommandOutput}.
   */
  paginateListEvents(
    args: ListEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEventsCommandOutput>;

  /**
   * @see {@link ListMemoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMemoriesCommandOutput}.
   */
  paginateListMemories(
    args: ListMemoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMemoriesCommandOutput>;

  /**
   * @see {@link ListSpacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSpacesCommandOutput}.
   */
  paginateListSpaces(
    args?: ListSpacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSpacesCommandOutput>;

  /**
   * @see {@link SearchEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchEventsCommandOutput}.
   */
  paginateSearchEvents(
    args: SearchEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchEventsCommandOutput>;

  /**
   * @see {@link SearchMemoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchMemoriesCommandOutput}.
   */
  paginateSearchMemories(
    args: SearchMemoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchMemoriesCommandOutput>;

  /**
   * @see {@link GetSpaceCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSpaceActive(
    args: GetSpaceCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<OpenSearchMemory>, "client">
  ): Promise<WaiterResult<GetSpaceCommandOutput>>;

  /**
   * @see {@link GetSpaceCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilSpaceDeleted(
    args: GetSpaceCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<OpenSearchMemory>, "client">
  ): Promise<WaiterResult<GetSpaceCommandOutput | ResourceNotFoundException>>;
}

/**
 * <p>Amazon OpenSearch Memory lets your AI agents and applications recall facts and summaries across sessions. Your agents send events, such as conversation turns, and search the memories derived from them.</p> <p>A space groups related events and memories, and holds the memory strategies that you configure for them. Use the space operations to create, get, list, update, and delete spaces. Use the event and memory operations to write, read, list, search, update, and delete a space's events and memories.</p>
 * @public
 */
export class OpenSearchMemory extends OpenSearchMemoryClient implements OpenSearchMemory {}
createAggregatedClient(commands, OpenSearchMemory, { paginators, waiters });
