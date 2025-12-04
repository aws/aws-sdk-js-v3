// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFindingHistoryCommand,
  GetFindingHistoryCommandInput,
  GetFindingHistoryCommandOutput,
} from "../commands/GetFindingHistoryCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindingHistory: (
  config: SecurityHubPaginationConfiguration,
  input: GetFindingHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetFindingHistoryCommandOutput> = createPaginator<
  SecurityHubPaginationConfiguration,
  GetFindingHistoryCommandInput,
  GetFindingHistoryCommandOutput
>(SecurityHubClient, GetFindingHistoryCommand, "NextToken", "NextToken", "MaxResults");
