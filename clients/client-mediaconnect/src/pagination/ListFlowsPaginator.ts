// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlows: (
  config: MediaConnectPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListFlowsCommandInput,
  ListFlowsCommandOutput
>(MediaConnectClient, ListFlowsCommand, "NextToken", "NextToken", "MaxResults");
