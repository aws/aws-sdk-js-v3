// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { NeptuneGraphClient } from "../NeptuneGraphClient";
import { NeptuneGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGraphs: (
  config: NeptuneGraphPaginationConfiguration,
  input: ListGraphsCommandInput,
  ...rest: any[]
) => Paginator<ListGraphsCommandOutput> = createPaginator<
  NeptuneGraphPaginationConfiguration,
  ListGraphsCommandInput,
  ListGraphsCommandOutput
>(NeptuneGraphClient, ListGraphsCommand, "nextToken", "nextToken", "maxResults");
