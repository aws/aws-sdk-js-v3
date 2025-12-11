// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlowOperationResultsCommand,
  ListFlowOperationResultsCommandInput,
  ListFlowOperationResultsCommandOutput,
} from "../commands/ListFlowOperationResultsCommand";
import { NetworkFirewallClient } from "../NetworkFirewallClient";
import { NetworkFirewallPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowOperationResults: (
  config: NetworkFirewallPaginationConfiguration,
  input: ListFlowOperationResultsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowOperationResultsCommandOutput> = createPaginator<
  NetworkFirewallPaginationConfiguration,
  ListFlowOperationResultsCommandInput,
  ListFlowOperationResultsCommandOutput
>(NetworkFirewallClient, ListFlowOperationResultsCommand, "NextToken", "NextToken", "MaxResults");
