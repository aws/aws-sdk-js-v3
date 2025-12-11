// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInboundConnectionsCommand,
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
} from "../commands/DescribeInboundConnectionsCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInboundConnections: (
  config: OpenSearchPaginationConfiguration,
  input: DescribeInboundConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInboundConnectionsCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput
>(OpenSearchClient, DescribeInboundConnectionsCommand, "NextToken", "NextToken", "MaxResults");
