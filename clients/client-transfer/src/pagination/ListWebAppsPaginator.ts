// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListWebAppsCommand, ListWebAppsCommandInput, ListWebAppsCommandOutput } from "../commands/ListWebAppsCommand";
import { TransferClient } from "../TransferClient";
import { TransferPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWebApps: (
  config: TransferPaginationConfiguration,
  input: ListWebAppsCommandInput,
  ...rest: any[]
) => Paginator<ListWebAppsCommandOutput> = createPaginator<
  TransferPaginationConfiguration,
  ListWebAppsCommandInput,
  ListWebAppsCommandOutput
>(TransferClient, ListWebAppsCommand, "NextToken", "NextToken", "MaxResults");
