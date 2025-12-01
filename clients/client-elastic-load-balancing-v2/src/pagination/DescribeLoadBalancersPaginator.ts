// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLoadBalancers: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...rest: any[]
) => Paginator<DescribeLoadBalancersCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
>(ElasticLoadBalancingV2Client, DescribeLoadBalancersCommand, "Marker", "NextMarker", "");
