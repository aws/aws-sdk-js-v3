// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventSubscriptions: (
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventSubscriptionsCommandOutput> = createPaginator<
  DatabaseMigrationServicePaginationConfiguration,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
>(DatabaseMigrationServiceClient, DescribeEventSubscriptionsCommand, "Marker", "Marker", "MaxRecords");
