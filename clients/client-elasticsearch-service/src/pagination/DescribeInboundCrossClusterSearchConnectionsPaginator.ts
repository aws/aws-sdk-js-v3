// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInboundCrossClusterSearchConnectionsCommand,
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInboundCrossClusterSearchConnections: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeInboundCrossClusterSearchConnectionsCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput
>(ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand, "NextToken", "NextToken", "MaxResults");
