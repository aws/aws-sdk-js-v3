// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReviewPolicyResultsForHITCommand,
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "../commands/ListReviewPolicyResultsForHITCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReviewPolicyResultsForHIT: (
  config: MTurkPaginationConfiguration,
  input: ListReviewPolicyResultsForHITCommandInput,
  ...rest: any[]
) => Paginator<ListReviewPolicyResultsForHITCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput
>(MTurkClient, ListReviewPolicyResultsForHITCommand, "NextToken", "NextToken", "MaxResults");
