// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppAssessmentsCommand,
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput,
} from "../commands/ListAppAssessmentsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppAssessments: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAppAssessmentsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppAssessmentsCommandInput,
  ListAppAssessmentsCommandOutput
>(ResiliencehubClient, ListAppAssessmentsCommand, "nextToken", "nextToken", "maxResults");
