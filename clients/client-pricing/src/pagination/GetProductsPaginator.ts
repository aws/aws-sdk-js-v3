// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetProductsCommand, GetProductsCommandInput, GetProductsCommandOutput } from "../commands/GetProductsCommand";
import { PricingClient } from "../PricingClient";
import { PricingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetProducts: (
  config: PricingPaginationConfiguration,
  input: GetProductsCommandInput,
  ...rest: any[]
) => Paginator<GetProductsCommandOutput> = createPaginator<
  PricingPaginationConfiguration,
  GetProductsCommandInput,
  GetProductsCommandOutput
>(PricingClient, GetProductsCommand, "NextToken", "NextToken", "MaxResults");
