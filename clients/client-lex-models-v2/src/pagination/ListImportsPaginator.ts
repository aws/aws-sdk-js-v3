// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImports: (
  config: LexModelsV2PaginationConfiguration,
  input: ListImportsCommandInput,
  ...rest: any[]
) => Paginator<ListImportsCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListImportsCommandInput,
  ListImportsCommandOutput
>(LexModelsV2Client, ListImportsCommand, "nextToken", "nextToken", "maxResults");
