// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeStorageSystemResourcesCommand,
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput,
} from "../commands/DescribeStorageSystemResourcesCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeStorageSystemResources: (
  config: DataSyncPaginationConfiguration,
  input: DescribeStorageSystemResourcesCommandInput,
  ...rest: any[]
) => Paginator<DescribeStorageSystemResourcesCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  DescribeStorageSystemResourcesCommandInput,
  DescribeStorageSystemResourcesCommandOutput
>(DataSyncClient, DescribeStorageSystemResourcesCommand, "NextToken", "NextToken", "MaxResults");
