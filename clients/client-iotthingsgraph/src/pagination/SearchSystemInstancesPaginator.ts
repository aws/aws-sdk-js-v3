// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSystemInstancesCommand,
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "../commands/SearchSystemInstancesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSystemInstances: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemInstancesCommandInput,
  ...rest: any[]
) => Paginator<SearchSystemInstancesCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput
>(IoTThingsGraphClient, SearchSystemInstancesCommand, "nextToken", "nextToken", "maxResults");
