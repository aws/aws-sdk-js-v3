// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { SsmSapClient } from "../SsmSapClient";
import { SsmSapPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatabases: (
  config: SsmSapPaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListDatabasesCommandOutput> = createPaginator<
  SsmSapPaginationConfiguration,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput
>(SsmSapClient, ListDatabasesCommand, "NextToken", "NextToken", "MaxResults");
