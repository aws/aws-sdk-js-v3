// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListFlowOperationsCommand,
  ListFlowOperationsCommandInput,
  ListFlowOperationsCommandOutput,
} from "../commands/ListFlowOperationsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowOperations: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListFlowOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowOperationsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListFlowOperationsCommandInput,
  ListFlowOperationsCommandOutput
>(NetworkFirewallClient, ListFlowOperationsCommand, "NextToken", "NextToken", "MaxResults");
