// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "../commands/SearchResourcesCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchResources: (
  config: Macie2PaginationConfiguration,
  input: SearchResourcesCommandInput,
  ...rest: any[]
) => Paginator<SearchResourcesCommandOutput> = createPaginator<
  Macie2PaginationConfiguration,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput
>(Macie2Client, SearchResourcesCommand, "nextToken", "nextToken", "maxResults");
