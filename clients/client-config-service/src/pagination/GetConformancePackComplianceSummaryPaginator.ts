// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetConformancePackComplianceSummaryCommand,
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput,
} from "../commands/GetConformancePackComplianceSummaryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetConformancePackComplianceSummary: (
  config: ConfigServicePaginationConfiguration,
  input: GetConformancePackComplianceSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetConformancePackComplianceSummaryCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetConformancePackComplianceSummaryCommandInput,
  GetConformancePackComplianceSummaryCommandOutput
>(ConfigServiceClient, GetConformancePackComplianceSummaryCommand, "NextToken", "NextToken", "Limit");
