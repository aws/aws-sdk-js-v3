// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImports: (
  config: MgnPaginationConfiguration,
  input: ListImportsCommandInput,
  ...rest: any[]
) => Paginator<ListImportsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListImportsCommandInput,
  ListImportsCommandOutput
>(MgnClient, ListImportsCommand, "nextToken", "nextToken", "maxResults");
