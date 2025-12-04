// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTrafficDistributionGroupUsersCommand,
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput,
} from "../commands/ListTrafficDistributionGroupUsersCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrafficDistributionGroupUsers: (
  config: ConnectPaginationConfiguration,
  input: ListTrafficDistributionGroupUsersCommandInput,
  ...rest: any[]
) => Paginator<ListTrafficDistributionGroupUsersCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListTrafficDistributionGroupUsersCommandInput,
  ListTrafficDistributionGroupUsersCommandOutput
>(ConnectClient, ListTrafficDistributionGroupUsersCommand, "NextToken", "NextToken", "MaxResults");
