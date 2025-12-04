// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentsForPullRequestCommand,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
} from "../commands/GetCommentsForPullRequestCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCommentsForPullRequest: (
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForPullRequestCommandInput,
  ...rest: any[]
) => Paginator<GetCommentsForPullRequestCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput
>(CodeCommitClient, GetCommentsForPullRequestCommand, "nextToken", "nextToken", "maxResults");
