// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";
import type { IoTDataPlanePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubscriptions: (
  config: IoTDataPlanePaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...rest: any[]
) => Paginator<ListSubscriptionsCommandOutput> = createPaginator<
  IoTDataPlanePaginationConfiguration,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput
>(IoTDataPlaneClient, ListSubscriptionsCommand, "nextToken", "nextToken", "maxResults");
