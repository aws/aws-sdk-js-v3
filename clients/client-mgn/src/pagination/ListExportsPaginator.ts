// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExports: (
  config: MgnPaginationConfiguration,
  input: ListExportsCommandInput,
  ...rest: any[]
) => Paginator<ListExportsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListExportsCommandInput,
  ListExportsCommandOutput
>(MgnClient, ListExportsCommand, "nextToken", "nextToken", "maxResults");
