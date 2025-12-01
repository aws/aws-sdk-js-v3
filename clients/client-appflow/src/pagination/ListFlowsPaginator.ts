// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlows: (
  config: AppflowPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowsCommandOutput> = createPaginator<
  AppflowPaginationConfiguration,
  ListFlowsCommandInput,
  ListFlowsCommandOutput
>(AppflowClient, ListFlowsCommand, "nextToken", "nextToken", "maxResults");
