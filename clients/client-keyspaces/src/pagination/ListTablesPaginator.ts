// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: KeyspacesPaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  KeyspacesPaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(KeyspacesClient, ListTablesCommand, "nextToken", "nextToken", "maxResults");
