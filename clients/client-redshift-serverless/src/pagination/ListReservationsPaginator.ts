// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReservations: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListReservationsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListReservationsCommandInput,
  ListReservationsCommandOutput
>(RedshiftServerlessClient, ListReservationsCommand, "nextToken", "nextToken", "maxResults");
