// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppAssessmentResourceDriftsCommand,
  ListAppAssessmentResourceDriftsCommandInput,
  ListAppAssessmentResourceDriftsCommandOutput,
} from "../commands/ListAppAssessmentResourceDriftsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppAssessmentResourceDrifts: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppAssessmentResourceDriftsCommandInput,
  ...rest: any[]
) => Paginator<ListAppAssessmentResourceDriftsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppAssessmentResourceDriftsCommandInput,
  ListAppAssessmentResourceDriftsCommandOutput
>(ResiliencehubClient, ListAppAssessmentResourceDriftsCommand, "nextToken", "nextToken", "maxResults");
