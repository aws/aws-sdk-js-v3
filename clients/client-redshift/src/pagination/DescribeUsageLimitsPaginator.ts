// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "../commands/DescribeUsageLimitsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeUsageLimits: (
  config: RedshiftPaginationConfiguration,
  input: DescribeUsageLimitsCommandInput,
  ...rest: any[]
) => Paginator<DescribeUsageLimitsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput
>(RedshiftClient, DescribeUsageLimitsCommand, "Marker", "Marker", "MaxRecords");
