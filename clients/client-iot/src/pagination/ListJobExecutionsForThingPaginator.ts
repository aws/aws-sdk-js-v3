// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobExecutionsForThingCommand,
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput,
} from "../commands/ListJobExecutionsForThingCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobExecutionsForThing: (
  config: IoTPaginationConfiguration,
  input: ListJobExecutionsForThingCommandInput,
  ...rest: any[]
) => Paginator<ListJobExecutionsForThingCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListJobExecutionsForThingCommandInput,
  ListJobExecutionsForThingCommandOutput
>(IoTClient, ListJobExecutionsForThingCommand, "nextToken", "nextToken", "maxResults");
