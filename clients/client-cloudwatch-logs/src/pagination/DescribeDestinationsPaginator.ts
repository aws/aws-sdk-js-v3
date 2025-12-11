// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeDestinationsCommand,
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDestinations: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeDestinationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDestinationsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput
>(CloudWatchLogsClient, DescribeDestinationsCommand, "nextToken", "nextToken", "limit");
