// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  DescribeLogStreamsCommand,
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "../commands/DescribeLogStreamsCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLogStreams: (
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeLogStreamsCommandInput,
  ...rest: any[]
) => Paginator<DescribeLogStreamsCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput
>(CloudWatchLogsClient, DescribeLogStreamsCommand, "nextToken", "nextToken", "limit");
