// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchThingsCommand,
  SearchThingsCommandInput,
  SearchThingsCommandOutput,
} from "../commands/SearchThingsCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchThings: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchThingsCommandInput,
  ...rest: any[]
) => Paginator<SearchThingsCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchThingsCommandInput,
  SearchThingsCommandOutput
>(IoTThingsGraphClient, SearchThingsCommand, "nextToken", "nextToken", "maxResults");
