// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetAggregateConfigRuleComplianceSummaryCommand,
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput,
} from "../commands/GetAggregateConfigRuleComplianceSummaryCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAggregateConfigRuleComplianceSummary: (
  config: ConfigServicePaginationConfiguration,
  input: GetAggregateConfigRuleComplianceSummaryCommandInput,
  ...rest: any[]
) => Paginator<GetAggregateConfigRuleComplianceSummaryCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  GetAggregateConfigRuleComplianceSummaryCommandInput,
  GetAggregateConfigRuleComplianceSummaryCommandOutput
>(ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand, "NextToken", "NextToken", "Limit");
