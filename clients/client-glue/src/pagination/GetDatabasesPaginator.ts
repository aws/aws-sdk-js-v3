// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetDatabasesCommand,
  GetDatabasesCommandInput,
  GetDatabasesCommandOutput,
} from "../commands/GetDatabasesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetDatabases: (
  config: GluePaginationConfiguration,
  input: GetDatabasesCommandInput,
  ...rest: any[]
) => Paginator<GetDatabasesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetDatabasesCommandInput,
  GetDatabasesCommandOutput
>(GlueClient, GetDatabasesCommand, "NextToken", "NextToken", "MaxResults");
