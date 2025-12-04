// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatabases: (
  config: TimestreamWritePaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListDatabasesCommandOutput> = createPaginator<
  TimestreamWritePaginationConfiguration,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput
>(TimestreamWriteClient, ListDatabasesCommand, "NextToken", "NextToken", "MaxResults");
