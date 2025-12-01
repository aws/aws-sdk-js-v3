// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventSubscriptions: (
  config: DocDBPaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventSubscriptionsCommandOutput> = createPaginator<
  DocDBPaginationConfiguration,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput
>(DocDBClient, DescribeEventSubscriptionsCommand, "Marker", "Marker", "MaxRecords");
