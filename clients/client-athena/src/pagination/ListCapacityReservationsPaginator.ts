// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListCapacityReservationsCommand,
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "../commands/ListCapacityReservationsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCapacityReservations: (
  config: AthenaPaginationConfiguration,
  input: ListCapacityReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListCapacityReservationsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput
>(AthenaClient, ListCapacityReservationsCommand, "NextToken", "NextToken", "MaxResults");
