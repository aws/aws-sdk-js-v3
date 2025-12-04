// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSources: (
  config: QBusinessPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourcesCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
>(QBusinessClient, ListDataSourcesCommand, "nextToken", "nextToken", "maxResults");
