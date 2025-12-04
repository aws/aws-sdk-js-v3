// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConformancePackStatusCommand,
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "../commands/DescribeConformancePackStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConformancePackStatus: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePackStatusCommandInput,
  ...rest: any[]
) => Paginator<DescribeConformancePackStatusCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput
>(ConfigServiceClient, DescribeConformancePackStatusCommand, "NextToken", "NextToken", "Limit");
