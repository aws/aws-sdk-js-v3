// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLongTermPricingCommand,
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
} from "../commands/ListLongTermPricingCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLongTermPricing: (
  config: SnowballPaginationConfiguration,
  input: ListLongTermPricingCommandInput,
  ...rest: any[]
) => Paginator<ListLongTermPricingCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput
>(SnowballClient, ListLongTermPricingCommand, "NextToken", "NextToken", "MaxResults");
