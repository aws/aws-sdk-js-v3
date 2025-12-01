// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAggregateConformancePackComplianceSummaryCommand,
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConformancePackComplianceSummaryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAggregateConformancePackComplianceSummary: (
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateConformancePackComplianceSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetAggregateConformancePackComplianceSummaryCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetAggregateConformancePackComplianceSummaryCommandInput,
  GetAggregateConformancePackComplianceSummaryCommandOutput
>(ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand, "NextToken", "NextToken", "Limit");
