// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatabases: (
  config: RedshiftDataPaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListDatabasesCommandOutput> = createPaginator<
  RedshiftDataPaginationConfiguration,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput
>(RedshiftDataClient, ListDatabasesCommand, "NextToken", "NextToken", "MaxResults");
