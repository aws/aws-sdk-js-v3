// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { HoneycodeClient } from "../HoneycodeClient";
import { HoneycodePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTables: (
  config: HoneycodePaginationConfiguration,
  input: ListTablesCommandInput,
  ...rest: any[]
) => Paginator<ListTablesCommandOutput> = createPaginator<
  HoneycodePaginationConfiguration,
  ListTablesCommandInput,
  ListTablesCommandOutput
>(HoneycodeClient, ListTablesCommand, "nextToken", "nextToken", "maxResults");
