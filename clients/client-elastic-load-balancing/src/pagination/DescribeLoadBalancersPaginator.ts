// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "../commands/DescribeLoadBalancersCommand";
import { ElasticLoadBalancingClient } from "../ElasticLoadBalancingClient";
import { ElasticLoadBalancingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLoadBalancers: (
  config: ElasticLoadBalancingPaginationConfiguration,
  input: DescribeLoadBalancersCommandInput,
  ...rest: any[]
) => Paginator<DescribeLoadBalancersCommandOutput> = createPaginator<
  ElasticLoadBalancingPaginationConfiguration,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput
>(ElasticLoadBalancingClient, DescribeLoadBalancersCommand, "Marker", "NextMarker", "");
