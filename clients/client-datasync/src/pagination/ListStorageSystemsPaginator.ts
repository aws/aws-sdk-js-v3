// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListStorageSystemsCommand,
  ListStorageSystemsCommandInput,
  ListStorageSystemsCommandOutput,
} from "../commands/ListStorageSystemsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStorageSystems: (
  config: DataSyncPaginationConfiguration,
  input: ListStorageSystemsCommandInput,
  ...rest: any[]
) => Paginator<ListStorageSystemsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListStorageSystemsCommandInput,
  ListStorageSystemsCommandOutput
>(DataSyncClient, ListStorageSystemsCommand, "NextToken", "NextToken", "MaxResults");
