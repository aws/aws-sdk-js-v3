// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConformancePacksCommand,
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput,
} from "../commands/DescribeConformancePacksCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConformancePacks: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePacksCommandInput,
  ...rest: any[]
) => Paginator<DescribeConformancePacksCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConformancePacksCommandInput,
  DescribeConformancePacksCommandOutput
>(ConfigServiceClient, DescribeConformancePacksCommand, "NextToken", "NextToken", "Limit");
