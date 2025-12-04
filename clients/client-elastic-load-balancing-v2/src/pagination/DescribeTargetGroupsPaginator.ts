// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "../commands/DescribeTargetGroupsCommand";
import { ElasticLoadBalancingV2Client } from "../ElasticLoadBalancingV2Client";
import { ElasticLoadBalancingV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTargetGroups: (
  config: ElasticLoadBalancingV2PaginationConfiguration,
  input: DescribeTargetGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTargetGroupsCommandOutput> = createPaginator<
  ElasticLoadBalancingV2PaginationConfiguration,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput
>(ElasticLoadBalancingV2Client, DescribeTargetGroupsCommand, "Marker", "NextMarker", "");
