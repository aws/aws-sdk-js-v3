// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "../commands/GetUpgradeHistoryCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetUpgradeHistory: (
  config: ElasticsearchServicePaginationConfiguration,
  input: GetUpgradeHistoryCommandInput,
  ...rest: any[]
) => Paginator<GetUpgradeHistoryCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput
>(ElasticsearchServiceClient, GetUpgradeHistoryCommand, "NextToken", "NextToken", "MaxResults");
