// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  DescribePullRequestEventsCommand,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput,
} from "../commands/DescribePullRequestEventsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePullRequestEvents: (
  config: CodeCommitPaginationConfiguration,
  input: DescribePullRequestEventsCommandInput,
  ...rest: any[]
) => Paginator<DescribePullRequestEventsCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  DescribePullRequestEventsCommandInput,
  DescribePullRequestEventsCommandOutput
>(CodeCommitClient, DescribePullRequestEventsCommand, "nextToken", "nextToken", "maxResults");
