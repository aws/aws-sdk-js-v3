// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnomalousLogGroupsCommand,
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput,
} from "../commands/ListAnomalousLogGroupsCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnomalousLogGroups: (
  config: DevOpsGuruPaginationConfiguration,
  input: ListAnomalousLogGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListAnomalousLogGroupsCommandOutput> = createPaginator<
  DevOpsGuruPaginationConfiguration,
  ListAnomalousLogGroupsCommandInput,
  ListAnomalousLogGroupsCommandOutput
>(DevOpsGuruClient, ListAnomalousLogGroupsCommand, "NextToken", "NextToken", "MaxResults");
