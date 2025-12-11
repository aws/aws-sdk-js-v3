// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationVersions: (
  config: M2PaginationConfiguration,
  input: ListApplicationVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationVersionsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput
>(M2Client, ListApplicationVersionsCommand, "nextToken", "nextToken", "maxResults");
