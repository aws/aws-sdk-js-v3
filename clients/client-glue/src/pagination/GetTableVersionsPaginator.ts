// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTableVersionsCommand,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput,
} from "../commands/GetTableVersionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTableVersions: (
  config: GluePaginationConfiguration,
  input: GetTableVersionsCommandInput,
  ...rest: any[]
) => Paginator<GetTableVersionsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput
>(GlueClient, GetTableVersionsCommand, "NextToken", "NextToken", "MaxResults");
