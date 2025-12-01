// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFlowExecutionMessagesCommand,
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "../commands/ListFlowExecutionMessagesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowExecutionMessages: (
  config: IoTThingsGraphPaginationConfiguration,
  input: ListFlowExecutionMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListFlowExecutionMessagesCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput
>(IoTThingsGraphClient, ListFlowExecutionMessagesCommand, "nextToken", "nextToken", "maxResults");
