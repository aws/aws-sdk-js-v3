// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryControlClient } from "../AgentRegistryControlClient";
import {
  ListRegistryRecordsCommand,
  ListRegistryRecordsCommandInput,
  ListRegistryRecordsCommandOutput,
} from "../commands/ListRegistryRecordsCommand";
import type { AgentRegistryControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistryRecords: (
  config: AgentRegistryControlPaginationConfiguration,
  input: ListRegistryRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListRegistryRecordsCommandOutput> = createPaginator<
  AgentRegistryControlPaginationConfiguration,
  ListRegistryRecordsCommandInput,
  ListRegistryRecordsCommandOutput
>(AgentRegistryControlClient, ListRegistryRecordsCommand, "nextToken", "nextToken", "maxResults");
