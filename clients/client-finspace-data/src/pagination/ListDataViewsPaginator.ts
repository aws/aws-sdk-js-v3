// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataViewsCommand,
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
} from "../commands/ListDataViewsCommand";
import { FinspaceDataClient } from "../FinspaceDataClient";
import { FinspaceDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataViews: (
  config: FinspaceDataPaginationConfiguration,
  input: ListDataViewsCommandInput,
  ...rest: any[]
) => Paginator<ListDataViewsCommandOutput> = createPaginator<
  FinspaceDataPaginationConfiguration,
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput
>(FinspaceDataClient, ListDataViewsCommand, "nextToken", "nextToken", "maxResults");
