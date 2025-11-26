// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataIntegrationFlowsCommand,
  ListDataIntegrationFlowsCommandInput,
  ListDataIntegrationFlowsCommandOutput,
} from "../commands/ListDataIntegrationFlowsCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIntegrationFlows: (
  config: SupplyChainPaginationConfiguration,
  input: ListDataIntegrationFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIntegrationFlowsCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListDataIntegrationFlowsCommandInput,
  ListDataIntegrationFlowsCommandOutput
>(SupplyChainClient, ListDataIntegrationFlowsCommand, "nextToken", "nextToken", "maxResults");
