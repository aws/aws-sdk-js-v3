// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLocationsCommand,
  ListLocationsCommandInput,
  ListLocationsCommandOutput,
} from "../commands/ListLocationsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLocations: (
  config: DataSyncPaginationConfiguration,
  input: ListLocationsCommandInput,
  ...rest: any[]
) => Paginator<ListLocationsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListLocationsCommandInput,
  ListLocationsCommandOutput
>(DataSyncClient, ListLocationsCommand, "NextToken", "NextToken", "MaxResults");
