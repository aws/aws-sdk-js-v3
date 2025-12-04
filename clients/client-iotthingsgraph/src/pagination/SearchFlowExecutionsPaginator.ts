// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchFlowExecutionsCommand,
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "../commands/SearchFlowExecutionsCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFlowExecutions: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchFlowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<SearchFlowExecutionsCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput
>(IoTThingsGraphClient, SearchFlowExecutionsCommand, "nextToken", "nextToken", "maxResults");
