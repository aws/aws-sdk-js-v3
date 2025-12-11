// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrafficDistributionGroupsCommand,
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
} from "../commands/ListTrafficDistributionGroupsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrafficDistributionGroups: (
  config: ConnectPaginationConfiguration,
  input: ListTrafficDistributionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListTrafficDistributionGroupsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput
>(ConnectClient, ListTrafficDistributionGroupsCommand, "NextToken", "NextToken", "MaxResults");
