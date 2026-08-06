// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryClient } from "../AgentRegistryClient";
import {
  ListDiscoverableRegistryRecordsCommand,
  ListDiscoverableRegistryRecordsCommandInput,
  ListDiscoverableRegistryRecordsCommandOutput,
} from "../commands/ListDiscoverableRegistryRecordsCommand";
import type { AgentRegistryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDiscoverableRegistryRecords: (
  config: AgentRegistryPaginationConfiguration,
  input: ListDiscoverableRegistryRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListDiscoverableRegistryRecordsCommandOutput> = createPaginator<
  AgentRegistryPaginationConfiguration,
  ListDiscoverableRegistryRecordsCommandInput,
  ListDiscoverableRegistryRecordsCommandOutput
>(AgentRegistryClient, ListDiscoverableRegistryRecordsCommand, "nextToken", "nextToken", "maxResults");
