// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeReviewJobTasksCommand,
  ListCodeReviewJobTasksCommandInput,
  ListCodeReviewJobTasksCommandOutput,
} from "../commands/ListCodeReviewJobTasksCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeReviewJobTasks: (
  config: SecurityAgentPaginationConfiguration,
  input: ListCodeReviewJobTasksCommandInput,
  ...rest: any[]
) => Paginator<ListCodeReviewJobTasksCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListCodeReviewJobTasksCommandInput,
  ListCodeReviewJobTasksCommandOutput
>(SecurityAgentClient, ListCodeReviewJobTasksCommand, "nextToken", "nextToken", "maxResults");
