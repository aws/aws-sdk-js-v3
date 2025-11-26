// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPriceListsCommand,
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput,
} from "../commands/ListPriceListsCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPriceLists: (
  config: PricingPaginationConfiguration,
  input: ListPriceListsCommandInput,
  ...rest: any[]
) => Paginator<ListPriceListsCommandOutput> = createPaginator<
  PricingPaginationConfiguration,
  ListPriceListsCommandInput,
  ListPriceListsCommandOutput
>(PricingClient, ListPriceListsCommand, "NextToken", "NextToken", "MaxResults");
