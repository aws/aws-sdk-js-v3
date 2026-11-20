// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AgentRegistryControlClient } from "../AgentRegistryControlClient";
import {
  ListPublisherAssociationsCommand,
  ListPublisherAssociationsCommandInput,
  ListPublisherAssociationsCommandOutput,
} from "../commands/ListPublisherAssociationsCommand";
import type { AgentRegistryControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublisherAssociations: (
  config: AgentRegistryControlPaginationConfiguration,
  input: ListPublisherAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListPublisherAssociationsCommandOutput> = createPaginator<
  AgentRegistryControlPaginationConfiguration,
  ListPublisherAssociationsCommandInput,
  ListPublisherAssociationsCommandOutput
>(AgentRegistryControlClient, ListPublisherAssociationsCommand, "nextToken", "nextToken", "maxResults");
