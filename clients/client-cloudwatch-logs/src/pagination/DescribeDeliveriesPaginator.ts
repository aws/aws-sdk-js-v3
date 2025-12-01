// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliveriesCommand,
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput,
} from "../commands/DescribeDeliveriesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDeliveries: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliveriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDeliveriesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput
>(CloudWatchLogsClient, DescribeDeliveriesCommand, "nextToken", "nextToken", "limit");
