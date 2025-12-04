// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
} from "../commands/ListContributorInsightsCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContributorInsights: (
  config: DynamoDBPaginationConfiguration,
  input: ListContributorInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListContributorInsightsCommandOutput> = createPaginator<
  DynamoDBPaginationConfiguration,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput
>(DynamoDBClient, ListContributorInsightsCommand, "NextToken", "NextToken", "MaxResults");
