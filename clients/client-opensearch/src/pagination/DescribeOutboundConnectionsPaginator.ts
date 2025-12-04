// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOutboundConnectionsCommand,
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
} from "../commands/DescribeOutboundConnectionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOutboundConnections: (
  config: OpenSearchPaginationConfiguration,
  input: DescribeOutboundConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOutboundConnectionsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput
>(OpenSearchClient, DescribeOutboundConnectionsCommand, "NextToken", "NextToken", "MaxResults");
