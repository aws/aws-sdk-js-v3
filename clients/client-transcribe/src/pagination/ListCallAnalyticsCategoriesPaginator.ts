// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCallAnalyticsCategoriesCommand,
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput,
} from "../commands/ListCallAnalyticsCategoriesCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCallAnalyticsCategories: (
  config: TranscribePaginationConfiguration,
  input: ListCallAnalyticsCategoriesCommandInput,
  ...rest: any[]
) => Paginator<ListCallAnalyticsCategoriesCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListCallAnalyticsCategoriesCommandInput,
  ListCallAnalyticsCategoriesCommandOutput
>(TranscribeClient, ListCallAnalyticsCategoriesCommand, "NextToken", "NextToken", "MaxResults");
