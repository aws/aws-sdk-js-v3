// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEventAggregatesCommand,
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput,
} from "../commands/DescribeEventAggregatesCommand";
import { HealthClient } from "../HealthClient";
import { HealthPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEventAggregates: (
  config: HealthPaginationConfiguration,
  input: DescribeEventAggregatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeEventAggregatesCommandOutput> = createPaginator<
  HealthPaginationConfiguration,
  DescribeEventAggregatesCommandInput,
  DescribeEventAggregatesCommandOutput
>(HealthClient, DescribeEventAggregatesCommand, "nextToken", "nextToken", "maxResults");
