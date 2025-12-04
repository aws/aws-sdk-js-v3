// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingRegistrationTasksCommand,
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput,
} from "../commands/ListThingRegistrationTasksCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingRegistrationTasks: (
  config: IoTPaginationConfiguration,
  input: ListThingRegistrationTasksCommandInput,
  ...rest: any[]
) => Paginator<ListThingRegistrationTasksCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingRegistrationTasksCommandInput,
  ListThingRegistrationTasksCommandOutput
>(IoTClient, ListThingRegistrationTasksCommand, "nextToken", "nextToken", "maxResults");
