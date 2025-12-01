// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchFlowTemplatesCommand,
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "../commands/SearchFlowTemplatesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFlowTemplates: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchFlowTemplatesCommandInput,
  ...rest: any[]
) => Paginator<SearchFlowTemplatesCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput
>(IoTThingsGraphClient, SearchFlowTemplatesCommand, "nextToken", "nextToken", "maxResults");
