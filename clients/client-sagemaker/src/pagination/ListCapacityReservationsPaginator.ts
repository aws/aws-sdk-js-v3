// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCapacityReservationsCommand,
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "../commands/ListCapacityReservationsCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapacityReservations: (
  config: SageMakerPaginationConfiguration,
  input: ListCapacityReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListCapacityReservationsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput
>(SageMakerClient, ListCapacityReservationsCommand, "NextToken", "NextToken", "MaxResults");
