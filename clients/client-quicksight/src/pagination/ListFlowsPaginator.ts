// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlows: (
  config: QuickSightPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListFlowsCommandInput,
  ListFlowsCommandOutput
>(QuickSightClient, ListFlowsCommand, "NextToken", "NextToken", "MaxResults");
