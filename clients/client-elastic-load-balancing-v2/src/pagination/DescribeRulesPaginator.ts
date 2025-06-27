// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeRulesCommand,
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput,
} from "../commands/DescribeRulesCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeRules: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeRulesCommandInput,
  ...rest: any[]
) => Paginator<DescribeRulesCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput
>(ElasticLoadBalancingV2Client, DescribeRulesCommand, "Marker", "NextMarker", "");
