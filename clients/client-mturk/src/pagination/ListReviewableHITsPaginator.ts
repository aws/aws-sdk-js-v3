// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReviewableHITsCommand,
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
} from "../commands/ListReviewableHITsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReviewableHITs: (
  config: MTurkPaginationConfiguration,
  input: ListReviewableHITsCommandInput,
  ...rest: any[]
) => Paginator<ListReviewableHITsCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput
>(MTurkClient, ListReviewableHITsCommand, "NextToken", "NextToken", "MaxResults");
