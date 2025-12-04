// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingGroupsCommand,
  ListThingGroupsCommandInput,
  ListThingGroupsCommandOutput,
} from "../commands/ListThingGroupsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingGroups: (
  config: IoTPaginationConfiguration,
  input: ListThingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListThingGroupsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingGroupsCommandInput,
  ListThingGroupsCommandOutput
>(IoTClient, ListThingGroupsCommand, "nextToken", "nextToken", "maxResults");
