// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import {
  ListCodeReviewsCommand,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput,
} from "../commands/ListCodeReviewsCommand";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeReviews: (
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListCodeReviewsCommandInput,
  ...rest: any[]
) => Paginator<ListCodeReviewsCommandOutput> = createPaginator<
  CodeGuruReviewerPaginationConfiguration,
  ListCodeReviewsCommandInput,
  ListCodeReviewsCommandOutput
>(CodeGuruReviewerClient, ListCodeReviewsCommand, "NextToken", "NextToken", "MaxResults");
