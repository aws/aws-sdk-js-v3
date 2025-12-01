// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
} from "../commands/ListContactFlowsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactFlows: (
  config: ConnectPaginationConfiguration,
  input: ListContactFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListContactFlowsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput
>(ConnectClient, ListContactFlowsCommand, "NextToken", "NextToken", "MaxResults");
