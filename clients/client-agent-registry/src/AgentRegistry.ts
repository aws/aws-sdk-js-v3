// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { AgentRegistryClient } from "./AgentRegistryClient";
import {
  type BatchGetDiscoverableRegistryRecordCommandInput,
  type BatchGetDiscoverableRegistryRecordCommandOutput,
  BatchGetDiscoverableRegistryRecordCommand,
} from "./commands/BatchGetDiscoverableRegistryRecordCommand";
import {
  type ListDiscoverableRegistryRecordsCommandInput,
  type ListDiscoverableRegistryRecordsCommandOutput,
  ListDiscoverableRegistryRecordsCommand,
} from "./commands/ListDiscoverableRegistryRecordsCommand";
import {
  type SearchDiscoverableRegistryRecordsCommandInput,
  type SearchDiscoverableRegistryRecordsCommandOutput,
  SearchDiscoverableRegistryRecordsCommand,
} from "./commands/SearchDiscoverableRegistryRecordsCommand";
import { paginateListDiscoverableRegistryRecords } from "./pagination/ListDiscoverableRegistryRecordsPaginator";

const commands = {
  BatchGetDiscoverableRegistryRecordCommand,
  ListDiscoverableRegistryRecordsCommand,
  SearchDiscoverableRegistryRecordsCommand,
};
const paginators = {
  paginateListDiscoverableRegistryRecords,
};

export interface AgentRegistry {
  /**
   * @see {@link BatchGetDiscoverableRegistryRecordCommand}
   */
  batchGetDiscoverableRegistryRecord(
    args: BatchGetDiscoverableRegistryRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDiscoverableRegistryRecordCommandOutput>;
  batchGetDiscoverableRegistryRecord(
    args: BatchGetDiscoverableRegistryRecordCommandInput,
    cb: (err: any, data?: BatchGetDiscoverableRegistryRecordCommandOutput) => void
  ): void;
  batchGetDiscoverableRegistryRecord(
    args: BatchGetDiscoverableRegistryRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDiscoverableRegistryRecordCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoverableRegistryRecordsCommand}
   */
  listDiscoverableRegistryRecords(
    args: ListDiscoverableRegistryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoverableRegistryRecordsCommandOutput>;
  listDiscoverableRegistryRecords(
    args: ListDiscoverableRegistryRecordsCommandInput,
    cb: (err: any, data?: ListDiscoverableRegistryRecordsCommandOutput) => void
  ): void;
  listDiscoverableRegistryRecords(
    args: ListDiscoverableRegistryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoverableRegistryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDiscoverableRegistryRecordsCommand}
   */
  searchDiscoverableRegistryRecords(
    args: SearchDiscoverableRegistryRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDiscoverableRegistryRecordsCommandOutput>;
  searchDiscoverableRegistryRecords(
    args: SearchDiscoverableRegistryRecordsCommandInput,
    cb: (err: any, data?: SearchDiscoverableRegistryRecordsCommandOutput) => void
  ): void;
  searchDiscoverableRegistryRecords(
    args: SearchDiscoverableRegistryRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDiscoverableRegistryRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoverableRegistryRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDiscoverableRegistryRecordsCommandOutput}.
   */
  paginateListDiscoverableRegistryRecords(
    args: ListDiscoverableRegistryRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDiscoverableRegistryRecordsCommandOutput>;
}

/**
 * Agent Registry lets callers discover, list, and retrieve approved records published to a registry.
 * @public
 */
export class AgentRegistry extends AgentRegistryClient implements AgentRegistry {}
createAggregatedClient(commands, AgentRegistry, { paginators });
