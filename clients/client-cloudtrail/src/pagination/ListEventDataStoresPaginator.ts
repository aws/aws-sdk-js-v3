// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListEventDataStoresCommand,
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "../commands/ListEventDataStoresCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventDataStores: (
  config: CloudTrailPaginationConfiguration,
  input: ListEventDataStoresCommandInput,
  ...rest: any[]
) => Paginator<ListEventDataStoresCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput
>(CloudTrailClient, ListEventDataStoresCommand, "NextToken", "NextToken", "MaxResults");
