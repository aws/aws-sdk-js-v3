// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetReservedNodeExchangeOfferingsCommand,
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput,
} from "../commands/GetReservedNodeExchangeOfferingsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReservedNodeExchangeOfferings: (
  config: RedshiftPaginationConfiguration,
  input: GetReservedNodeExchangeOfferingsCommandInput,
  ...rest: any[]
) => Paginator<GetReservedNodeExchangeOfferingsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  GetReservedNodeExchangeOfferingsCommandInput,
  GetReservedNodeExchangeOfferingsCommandOutput
>(RedshiftClient, GetReservedNodeExchangeOfferingsCommand, "Marker", "Marker", "MaxRecords");
