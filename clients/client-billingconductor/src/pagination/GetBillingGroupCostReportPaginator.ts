// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BillingconductorClient } from "../BillingconductorClient";
import {
  GetBillingGroupCostReportCommand,
  GetBillingGroupCostReportCommandInput,
  GetBillingGroupCostReportCommandOutput,
} from "../commands/GetBillingGroupCostReportCommand";
import { BillingconductorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBillingGroupCostReport: (
  config: BillingconductorPaginationConfiguration,
  input: GetBillingGroupCostReportCommandInput,
  ...rest: any[]
) => Paginator<GetBillingGroupCostReportCommandOutput> = createPaginator<
  BillingconductorPaginationConfiguration,
  GetBillingGroupCostReportCommandInput,
  GetBillingGroupCostReportCommandOutput
>(BillingconductorClient, GetBillingGroupCostReportCommand, "NextToken", "NextToken", "MaxResults");
