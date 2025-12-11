// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKxDatabasesCommand,
  ListKxDatabasesCommandInput,
  ListKxDatabasesCommandOutput,
} from "../commands/ListKxDatabasesCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKxDatabases: (
  config: FinspacePaginationConfiguration,
  input: ListKxDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListKxDatabasesCommandOutput> = createPaginator<
  FinspacePaginationConfiguration,
  ListKxDatabasesCommandInput,
  ListKxDatabasesCommandOutput
>(FinspaceClient, ListKxDatabasesCommand, "nextToken", "nextToken", "maxResults");
