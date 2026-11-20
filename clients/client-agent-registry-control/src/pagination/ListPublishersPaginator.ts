// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryControlClient } from "../AgentRegistryControlClient";
import {
  ListPublishersCommand,
  ListPublishersCommandInput,
  ListPublishersCommandOutput,
} from "../commands/ListPublishersCommand";
import type { AgentRegistryControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublishers: (
  config: AgentRegistryControlPaginationConfiguration,
  input: ListPublishersCommandInput,
  ...rest: any[]
) => Paginator<ListPublishersCommandOutput> = createPaginator<
  AgentRegistryControlPaginationConfiguration,
  ListPublishersCommandInput,
  ListPublishersCommandOutput
>(AgentRegistryControlClient, ListPublishersCommand, "nextToken", "nextToken", "maxResults");
