// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationInsightsClient } from "../ApplicationInsightsClient";
import {
  ListProblemsCommand,
  ListProblemsCommandInput,
  ListProblemsCommandOutput,
} from "../commands/ListProblemsCommand";
import { ApplicationInsightsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProblems: (
  config: ApplicationInsightsPaginationConfiguration,
  input: ListProblemsCommandInput,
  ...rest: any[]
) => Paginator<ListProblemsCommandOutput> = createPaginator<
  ApplicationInsightsPaginationConfiguration,
  ListProblemsCommandInput,
  ListProblemsCommandOutput
>(ApplicationInsightsClient, ListProblemsCommand, "NextToken", "NextToken", "MaxResults");
