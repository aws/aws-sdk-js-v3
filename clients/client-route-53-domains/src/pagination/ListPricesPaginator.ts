// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPricesCommand, ListPricesCommandInput, ListPricesCommandOutput } from "../commands/ListPricesCommand";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrices: (
  config: Route53DomainsPaginationConfiguration,
  input: ListPricesCommandInput,
  ...rest: any[]
) => Paginator<ListPricesCommandOutput> = createPaginator<
  Route53DomainsPaginationConfiguration,
  ListPricesCommandInput,
  ListPricesCommandOutput
>(Route53DomainsClient, ListPricesCommand, "Marker", "NextPageMarker", "MaxItems");
