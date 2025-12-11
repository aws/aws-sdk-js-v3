// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReservations: (
  config: MediaConnectPaginationConfiguration,
  input: ListReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListReservationsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListReservationsCommandInput,
  ListReservationsCommandOutput
>(MediaConnectClient, ListReservationsCommand, "NextToken", "NextToken", "MaxResults");
