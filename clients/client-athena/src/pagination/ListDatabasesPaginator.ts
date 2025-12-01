// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatabases: (
  config: AthenaPaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListDatabasesCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput
>(AthenaClient, ListDatabasesCommand, "NextToken", "NextToken", "MaxResults");
