// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccountLimits: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeAccountLimitsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAccountLimitsCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
>(ElasticLoadBalancingV2Client, DescribeAccountLimitsCommand, "Marker", "NextMarker", "");
