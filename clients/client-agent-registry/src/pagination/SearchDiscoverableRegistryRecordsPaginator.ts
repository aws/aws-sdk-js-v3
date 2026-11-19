// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryClient } from "../AgentRegistryClient";
import {
  SearchDiscoverableRegistryRecordsCommand,
  SearchDiscoverableRegistryRecordsCommandInput,
  SearchDiscoverableRegistryRecordsCommandOutput,
} from "../commands/SearchDiscoverableRegistryRecordsCommand";
import type { AgentRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchDiscoverableRegistryRecords: (
  config: AgentRegistryPaginationConfiguration,
  input: SearchDiscoverableRegistryRecordsCommandInput,
  ...rest: any[]
) => Paginator<SearchDiscoverableRegistryRecordsCommandOutput> = createPaginator<
  AgentRegistryPaginationConfiguration,
  SearchDiscoverableRegistryRecordsCommandInput,
  SearchDiscoverableRegistryRecordsCommandOutput
>(AgentRegistryClient, SearchDiscoverableRegistryRecordsCommand, "nextToken", "nextToken", "maxResults");
