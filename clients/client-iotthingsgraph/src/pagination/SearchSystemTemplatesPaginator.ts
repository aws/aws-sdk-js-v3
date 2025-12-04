// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchSystemTemplatesCommand,
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "../commands/SearchSystemTemplatesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchSystemTemplates: (
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemTemplatesCommandInput,
  ...rest: any[]
) => Paginator<SearchSystemTemplatesCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput
>(IoTThingsGraphClient, SearchSystemTemplatesCommand, "nextToken", "nextToken", "maxResults");
