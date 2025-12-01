// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "../commands/GetUpgradeHistoryCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUpgradeHistory: (
  config: OpenSearchPaginationConfiguration,
  input: GetUpgradeHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetUpgradeHistoryCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput
>(OpenSearchClient, GetUpgradeHistoryCommand, "NextToken", "NextToken", "MaxResults");
