// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "../commands/DescribeAggregateComplianceByConformancePacksCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAggregateComplianceByConformancePacks: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  ...rest: any[]
) => Paginator<DescribeAggregateComplianceByConformancePacksCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput
>(ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand, "NextToken", "NextToken", "Limit");
