// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListActsCommand, ListActsCommandInput, ListActsCommandOutput } from "../commands/ListActsCommand";
import { NovaActClient } from "../NovaActClient";
import { NovaActPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActs: (
  config: NovaActPaginationConfiguration,
  input: ListActsCommandInput,
  ...rest: any[]
) => Paginator<ListActsCommandOutput> = createPaginator<
  NovaActPaginationConfiguration,
  ListActsCommandInput,
  ListActsCommandOutput
>(NovaActClient, ListActsCommand, "nextToken", "nextToken", "maxResults");
