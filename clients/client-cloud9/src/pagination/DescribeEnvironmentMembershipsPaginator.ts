// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { Cloud9Client } from "../Cloud9Client";
import {
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "../commands/DescribeEnvironmentMembershipsCommand";
import { Cloud9PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEnvironmentMemberships: (
  config: Cloud9PaginationConfiguration,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...rest: any[]
) => Paginator<DescribeEnvironmentMembershipsCommandOutput> = createPaginator<
  Cloud9PaginationConfiguration,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput
>(Cloud9Client, DescribeEnvironmentMembershipsCommand, "nextToken", "nextToken", "maxResults");
