// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { AgentDiscoveryClient } from "./AgentDiscoveryClient";
import {
  type SearchPublicRecordsCommandInput,
  type SearchPublicRecordsCommandOutput,
  SearchPublicRecordsCommand,
} from "./commands/SearchPublicRecordsCommand";
import { paginateSearchPublicRecords } from "./pagination/SearchPublicRecordsPaginator";

const commands = {
  SearchPublicRecordsCommand,
};
const paginators = {
  paginateSearchPublicRecords,
};

/**
 * @public
 */
export interface AgentDiscoveryRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface AgentDiscovery {
  /**
   * @see {@link SearchPublicRecordsCommand}
   */
  searchPublicRecords(): Promise<SearchPublicRecordsCommandOutput>;
  searchPublicRecords(
    args: SearchPublicRecordsCommandInput,
    options?: AgentDiscoveryRequestOptions
  ): Promise<SearchPublicRecordsCommandOutput>;
  searchPublicRecords(
    args: SearchPublicRecordsCommandInput,
    cb: (err: any, data?: SearchPublicRecordsCommandOutput) => void
  ): void;
  searchPublicRecords(
    args: SearchPublicRecordsCommandInput,
    options: AgentDiscoveryRequestOptions,
    cb: (err: any, data?: SearchPublicRecordsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchPublicRecordsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchPublicRecordsCommandOutput}.
   */
  paginateSearchPublicRecords(
    args?: SearchPublicRecordsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchPublicRecordsCommandOutput>;
}

/**
 * Agent Discovery lets you search public records for AI agents, tools, skills, and other resources
 * that their publishers have made discoverable.
 * @public
 */
export class AgentDiscovery extends AgentDiscoveryClient implements AgentDiscovery {}
createAggregatedClient(commands, AgentDiscovery, { paginators });
