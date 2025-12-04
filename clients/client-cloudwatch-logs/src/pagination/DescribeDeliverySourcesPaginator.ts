// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliverySourcesCommand,
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "../commands/DescribeDeliverySourcesCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDeliverySources: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliverySourcesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDeliverySourcesCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput
>(CloudWatchLogsClient, DescribeDeliverySourcesCommand, "nextToken", "nextToken", "limit");
