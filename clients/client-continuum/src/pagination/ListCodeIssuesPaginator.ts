// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeIssuesCommand,
  ListCodeIssuesCommandInput,
  ListCodeIssuesCommandOutput,
} from "../commands/ListCodeIssuesCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeIssues: (
  config: ContinuumPaginationConfiguration,
  input: ListCodeIssuesCommandInput,
  ...rest: any[]
) => Paginator<ListCodeIssuesCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListCodeIssuesCommandInput,
  ListCodeIssuesCommandOutput
>(ContinuumClient, ListCodeIssuesCommand, "nextToken", "nextToken", "maxResults");
