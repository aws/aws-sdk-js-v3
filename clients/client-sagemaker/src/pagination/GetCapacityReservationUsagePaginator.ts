// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCapacityReservationUsageCommand,
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput,
} from "../commands/GetCapacityReservationUsageCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCapacityReservationUsage: (
  config: SageMakerPaginationConfiguration,
  input: GetCapacityReservationUsageCommandInput,
  ...rest: any[]
) => Paginator<GetCapacityReservationUsageCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  GetCapacityReservationUsageCommandInput,
  GetCapacityReservationUsageCommandOutput
>(SageMakerClient, GetCapacityReservationUsageCommand, "NextToken", "NextToken", "MaxResults");
