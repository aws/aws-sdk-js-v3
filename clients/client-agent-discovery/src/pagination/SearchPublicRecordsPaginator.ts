// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentDiscoveryClient } from "../AgentDiscoveryClient";
import {
  SearchPublicRecordsCommand,
  SearchPublicRecordsCommandInput,
  SearchPublicRecordsCommandOutput,
} from "../commands/SearchPublicRecordsCommand";
import type { AgentDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchPublicRecords: (
  config: AgentDiscoveryPaginationConfiguration,
  input: SearchPublicRecordsCommandInput,
  ...rest: any[]
) => Paginator<SearchPublicRecordsCommandOutput> = createPaginator<
  AgentDiscoveryPaginationConfiguration,
  SearchPublicRecordsCommandInput,
  SearchPublicRecordsCommandOutput
>(AgentDiscoveryClient, SearchPublicRecordsCommand, "nextToken", "nextToken", "maxResults");
