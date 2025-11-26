// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingsInThingGroupCommand,
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
} from "../commands/ListThingsInThingGroupCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingsInThingGroup: (
  config: IoTPaginationConfiguration,
  input: ListThingsInThingGroupCommandInput,
  ...rest: any[]
) => Paginator<ListThingsInThingGroupCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput
>(IoTClient, ListThingsInThingGroupCommand, "nextToken", "nextToken", "maxResults");
