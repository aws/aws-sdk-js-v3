// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListLogPatternSetsCommand,
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput,
} from "../commands/ListLogPatternSetsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLogPatternSets: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListLogPatternSetsCommandInput,
  ...rest: any[]
) => Paginator<ListLogPatternSetsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListLogPatternSetsCommandInput,
  ListLogPatternSetsCommandOutput
>(ApplicationInsightsClient, ListLogPatternSetsCommand, "NextToken", "NextToken", "MaxResults");
