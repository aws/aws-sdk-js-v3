// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "../commands/ListEngineVersionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEngineVersions: (
  config: M2PaginationConfiguration,
  input: ListEngineVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListEngineVersionsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput
>(M2Client, ListEngineVersionsCommand, "nextToken", "nextToken", "maxResults");
