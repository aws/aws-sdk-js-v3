// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeOutboundCrossClusterSearchConnectionsCommand,
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeOutboundCrossClusterSearchConnections: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput
>(ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand, "NextToken", "NextToken", "MaxResults");
