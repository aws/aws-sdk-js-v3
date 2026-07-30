// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { PricingPlanManagerClient } from "../PricingPlanManagerClient";
import type { PricingPlanManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptions: (
  config: PricingPlanManagerPaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsCommandOutput> = createPaginator<
  PricingPlanManagerPaginationConfiguration,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
>(PricingPlanManagerClient, ListSubscriptionsCommand, "nextToken", "nextToken", "");
