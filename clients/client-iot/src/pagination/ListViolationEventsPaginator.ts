// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListViolationEventsCommand,
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput,
} from "../commands/ListViolationEventsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListViolationEvents: (
  config: IoTPaginationConfiguration,
  input: ListViolationEventsCommandInput,
  ...rest: any[]
) => Paginator<ListViolationEventsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListViolationEventsCommandInput,
  ListViolationEventsCommandOutput
>(IoTClient, ListViolationEventsCommand, "nextToken", "nextToken", "maxResults");
