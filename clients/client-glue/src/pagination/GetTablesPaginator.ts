// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetTablesCommand, GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTables: (
  config: GluePaginationConfiguration,
  input: GetTablesCommandInput,
  ...rest: any[]
) => Paginator<GetTablesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetTablesCommandInput,
  GetTablesCommandOutput
>(GlueClient, GetTablesCommand, "NextToken", "NextToken", "MaxResults");
