// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchEntitiesCommand,
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput,
} from "../commands/SearchEntitiesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchEntities: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchEntitiesCommandInput,
  ...rest: any[]
) => Paginator<SearchEntitiesCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput
>(IoTThingsGraphClient, SearchEntitiesCommand, "nextToken", "nextToken", "maxResults");
