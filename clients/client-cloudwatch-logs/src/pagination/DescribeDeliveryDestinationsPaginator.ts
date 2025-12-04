// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDeliveryDestinationsCommand,
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "../commands/DescribeDeliveryDestinationsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDeliveryDestinations: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDeliveryDestinationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDeliveryDestinationsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput
>(CloudWatchLogsClient, DescribeDeliveryDestinationsCommand, "nextToken", "nextToken", "limit");
