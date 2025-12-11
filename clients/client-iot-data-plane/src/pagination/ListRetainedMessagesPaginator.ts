// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRetainedMessagesCommand,
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput,
} from "../commands/ListRetainedMessagesCommand";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";
import { IoTDataPlanePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRetainedMessages: (
  config: IoTDataPlanePaginationConfiguration,
  input: ListRetainedMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListRetainedMessagesCommandOutput> = createPaginator<
  IoTDataPlanePaginationConfiguration,
  ListRetainedMessagesCommandInput,
  ListRetainedMessagesCommandOutput
>(IoTDataPlaneClient, ListRetainedMessagesCommand, "nextToken", "nextToken", "maxResults");
