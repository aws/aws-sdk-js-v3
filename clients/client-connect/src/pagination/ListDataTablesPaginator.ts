// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataTablesCommand,
  ListDataTablesCommandInput,
  ListDataTablesCommandOutput,
} from "../commands/ListDataTablesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTables: (
  config: ConnectPaginationConfiguration,
  input: ListDataTablesCommandInput,
  ...rest: any[]
) => Paginator<ListDataTablesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListDataTablesCommandInput,
  ListDataTablesCommandOutput
>(ConnectClient, ListDataTablesCommand, "NextToken", "NextToken", "MaxResults");
