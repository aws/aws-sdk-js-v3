// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListLogPatternsCommand,
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput,
} from "../commands/ListLogPatternsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogPatterns: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternsCommandInput,
  ...rest: any[]
) => Paginator<ListLogPatternsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListLogPatternsCommandInput,
  ListLogPatternsCommandOutput
>(ApplicationInsightsClient, ListLogPatternsCommand, "NextToken", "NextToken", "MaxResults");
