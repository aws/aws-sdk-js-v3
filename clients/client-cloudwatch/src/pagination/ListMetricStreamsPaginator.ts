// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListMetricStreamsCommand,
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput,
} from "../commands/ListMetricStreamsCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMetricStreams: (
  config: CloudWatchPaginationConfiguration,
  input: ListMetricStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListMetricStreamsCommandOutput> = createPaginator<
  CloudWatchPaginationConfiguration,
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput
>(CloudWatchClient, ListMetricStreamsCommand, "NextToken", "NextToken", "MaxResults");
