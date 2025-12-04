// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingGroupsForThingCommand,
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput,
} from "../commands/ListThingGroupsForThingCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingGroupsForThing: (
  config: IoTPaginationConfiguration,
  input: ListThingGroupsForThingCommandInput,
  ...rest: any[]
) => Paginator<ListThingGroupsForThingCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingGroupsForThingCommandInput,
  ListThingGroupsForThingCommandOutput
>(IoTClient, ListThingGroupsForThingCommand, "nextToken", "nextToken", "maxResults");
