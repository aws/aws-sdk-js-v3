// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataIntegrationFlowExecutionsCommand,
  ListDataIntegrationFlowExecutionsCommandInput,
  ListDataIntegrationFlowExecutionsCommandOutput,
} from "../commands/ListDataIntegrationFlowExecutionsCommand";
import { SupplyChainClient } from "../SupplyChainClient";
import { SupplyChainPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataIntegrationFlowExecutions: (
  config: SupplyChainPaginationConfiguration,
  input: ListDataIntegrationFlowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListDataIntegrationFlowExecutionsCommandOutput> = createPaginator<
  SupplyChainPaginationConfiguration,
  ListDataIntegrationFlowExecutionsCommandInput,
  ListDataIntegrationFlowExecutionsCommandOutput
>(SupplyChainClient, ListDataIntegrationFlowExecutionsCommand, "nextToken", "nextToken", "maxResults");
