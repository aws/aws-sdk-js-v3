// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeListenersCommand,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput,
} from "../commands/DescribeListenersCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeListeners: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeListenersCommandInput,
  ...rest: any[]
) => Paginator<DescribeListenersCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput
>(ElasticLoadBalancingV2Client, DescribeListenersCommand, "Marker", "NextMarker", "");
