// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetEstimatedWaterAllocationDimensionValuesCommand,
  GetEstimatedWaterAllocationDimensionValuesCommandInput,
  GetEstimatedWaterAllocationDimensionValuesCommandOutput,
} from "../commands/GetEstimatedWaterAllocationDimensionValuesCommand";
import { SustainabilityClient } from "../SustainabilityClient";
import type { SustainabilityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEstimatedWaterAllocationDimensionValues: (
  config: SustainabilityPaginationConfiguration,
  input: GetEstimatedWaterAllocationDimensionValuesCommandInput,
  ...rest: any[]
) => Paginator<GetEstimatedWaterAllocationDimensionValuesCommandOutput> = createPaginator<
  SustainabilityPaginationConfiguration,
  GetEstimatedWaterAllocationDimensionValuesCommandInput,
  GetEstimatedWaterAllocationDimensionValuesCommandOutput
>(SustainabilityClient, GetEstimatedWaterAllocationDimensionValuesCommand, "NextToken", "NextToken", "MaxResults");
