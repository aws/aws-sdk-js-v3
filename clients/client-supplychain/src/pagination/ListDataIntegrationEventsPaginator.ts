// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataIntegrationEventsCommand,
  ListDataIntegrationEventsCommandInput,
  ListDataIntegrationEventsCommandOutput,
} from "../commands/ListDataIntegrationEventsCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIntegrationEvents: (
  config: SupplyChainPaginationConfiguration,
  input: ListDataIntegrationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIntegrationEventsCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListDataIntegrationEventsCommandInput,
  ListDataIntegrationEventsCommandOutput
>(SupplyChainClient, ListDataIntegrationEventsCommand, "nextToken", "nextToken", "maxResults");
