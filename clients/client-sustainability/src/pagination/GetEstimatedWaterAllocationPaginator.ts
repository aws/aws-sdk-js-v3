// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEstimatedWaterAllocationCommand,
  GetEstimatedWaterAllocationCommandInput,
  GetEstimatedWaterAllocationCommandOutput,
} from "../commands/GetEstimatedWaterAllocationCommand";
import { SustainabilityClient } from "../SustainabilityClient";
import type { SustainabilityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEstimatedWaterAllocation: (
  config: SustainabilityPaginationConfiguration,
  input: GetEstimatedWaterAllocationCommandInput,
  ...rest: any[]
) => Paginator<GetEstimatedWaterAllocationCommandOutput> = createPaginator<
  SustainabilityPaginationConfiguration,
  GetEstimatedWaterAllocationCommandInput,
  GetEstimatedWaterAllocationCommandOutput
>(SustainabilityClient, GetEstimatedWaterAllocationCommand, "NextToken", "NextToken", "MaxResults");
