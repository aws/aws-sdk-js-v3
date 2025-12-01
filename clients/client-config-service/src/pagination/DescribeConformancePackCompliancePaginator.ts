// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeConformancePackComplianceCommand,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput,
} from "../commands/DescribeConformancePackComplianceCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConformancePackCompliance: (
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePackComplianceCommandInput,
  ...rest: any[]
) => Paginator<DescribeConformancePackComplianceCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  DescribeConformancePackComplianceCommandInput,
  DescribeConformancePackComplianceCommandOutput
>(ConfigServiceClient, DescribeConformancePackComplianceCommand, "NextToken", "NextToken", "Limit");
