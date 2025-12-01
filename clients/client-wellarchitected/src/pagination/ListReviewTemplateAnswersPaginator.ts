// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReviewTemplateAnswersCommand,
  ListReviewTemplateAnswersCommandInput,
  ListReviewTemplateAnswersCommandOutput,
} from "../commands/ListReviewTemplateAnswersCommand";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReviewTemplateAnswers: (
  config: WellArchitectedPaginationConfiguration,
  input: ListReviewTemplateAnswersCommandInput,
  ...rest: any[]
) => Paginator<ListReviewTemplateAnswersCommandOutput> = createPaginator<
  WellArchitectedPaginationConfiguration,
  ListReviewTemplateAnswersCommandInput,
  ListReviewTemplateAnswersCommandOutput
>(WellArchitectedClient, ListReviewTemplateAnswersCommand, "NextToken", "NextToken", "MaxResults");
