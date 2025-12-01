// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListPullRequestsCommand,
  ListPullRequestsCommandInput,
  ListPullRequestsCommandOutput,
} from "../commands/ListPullRequestsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPullRequests: (
  config: CodeCommitPaginationConfiguration,
  input: ListPullRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListPullRequestsCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListPullRequestsCommandInput,
  ListPullRequestsCommandOutput
>(CodeCommitClient, ListPullRequestsCommand, "nextToken", "nextToken", "maxResults");
