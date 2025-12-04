// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLogSourcesCommand,
  ListLogSourcesCommandInput,
  ListLogSourcesCommandOutput,
} from "../commands/ListLogSourcesCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogSources: (
  config: SecurityLakePaginationConfiguration,
  input: ListLogSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListLogSourcesCommandOutput> = createPaginator<
  SecurityLakePaginationConfiguration,
  ListLogSourcesCommandInput,
  ListLogSourcesCommandOutput
>(SecurityLakeClient, ListLogSourcesCommand, "nextToken", "nextToken", "maxResults");
