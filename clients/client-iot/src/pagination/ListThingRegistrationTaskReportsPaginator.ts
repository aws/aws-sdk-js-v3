// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "../commands/ListThingRegistrationTaskReportsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingRegistrationTaskReports: (
  config: IoTPaginationConfiguration,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...rest: any[]
) => Paginator<ListThingRegistrationTaskReportsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput
>(IoTClient, ListThingRegistrationTaskReportsCommand, "nextToken", "nextToken", "maxResults");
