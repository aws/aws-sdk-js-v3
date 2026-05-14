// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "../commands/ListCodeReviewsCommand";
import { SecurityAgentClient } from "../SecurityAgentClient";
import type { SecurityAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeReviews: (
  config: SecurityAgentPaginationConfiguration,
  input: ListCodeReviewsCommandInput,
  ...rest: any[]
) => Paginator<ListCodeReviewsCommandOutput> = createPaginator<
  SecurityAgentPaginationConfiguration,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput
>(SecurityAgentClient, ListCodeReviewsCommand, "nextToken", "nextToken", "maxResults");
