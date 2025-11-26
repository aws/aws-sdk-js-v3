// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingsInBillingGroupCommand,
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput,
} from "../commands/ListThingsInBillingGroupCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingsInBillingGroup: (
  config: IoTPaginationConfiguration,
  input: ListThingsInBillingGroupCommandInput,
  ...rest: any[]
) => Paginator<ListThingsInBillingGroupCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingsInBillingGroupCommandInput,
  ListThingsInBillingGroupCommandOutput
>(IoTClient, ListThingsInBillingGroupCommand, "nextToken", "nextToken", "maxResults");
