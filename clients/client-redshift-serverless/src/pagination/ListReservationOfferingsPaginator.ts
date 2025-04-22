// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListReservationOfferingsCommand,
  ListReservationOfferingsCommandInput,
  ListReservationOfferingsCommandOutput,
} from "../commands/ListReservationOfferingsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReservationOfferings: (
  config: RedshiftServerlessPaginationConfiguration,
  input: ListReservationOfferingsCommandInput,
  ...rest: any[]
) => Paginator<ListReservationOfferingsCommandOutput> = createPaginator<
  RedshiftServerlessPaginationConfiguration,
  ListReservationOfferingsCommandInput,
  ListReservationOfferingsCommandOutput
>(RedshiftServerlessClient, ListReservationOfferingsCommand, "nextToken", "nextToken", "maxResults");
