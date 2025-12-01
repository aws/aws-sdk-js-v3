// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
} from "../commands/DescribeTrafficMirrorFiltersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrafficMirrorFilters: (
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorFiltersCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrafficMirrorFiltersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput
>(EC2Client, DescribeTrafficMirrorFiltersCommand, "NextToken", "NextToken", "MaxResults");
