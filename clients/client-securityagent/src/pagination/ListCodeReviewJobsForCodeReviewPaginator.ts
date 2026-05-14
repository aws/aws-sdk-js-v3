// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeReviewJobsForCodeReviewCommand,
  ListCodeReviewJobsForCodeReviewCommandInput,
  ListCodeReviewJobsForCodeReviewCommandOutput,
} from "../commands/ListCodeReviewJobsForCodeReviewCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeReviewJobsForCodeReview: (
  config: SecurityAgentPaginationConfiguration,
  input: ListCodeReviewJobsForCodeReviewCommandInput,
  ...rest: any[]
) => Paginator<ListCodeReviewJobsForCodeReviewCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListCodeReviewJobsForCodeReviewCommandInput,
  ListCodeReviewJobsForCodeReviewCommandOutput
>(SecurityAgentClient, ListCodeReviewJobsForCodeReviewCommand, "nextToken", "nextToken", "maxResults");
