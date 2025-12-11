// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAppAssessmentComplianceDriftsCommand,
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput,
} from "../commands/ListAppAssessmentComplianceDriftsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppAssessmentComplianceDrifts: (
  config: ResiliencehubPaginationConfiguration,
  input: ListAppAssessmentComplianceDriftsCommandInput,
  ...rest: any[]
) => Paginator<ListAppAssessmentComplianceDriftsCommandOutput> = createPaginator<
  ResiliencehubPaginationConfiguration,
  ListAppAssessmentComplianceDriftsCommandInput,
  ListAppAssessmentComplianceDriftsCommandOutput
>(ResiliencehubClient, ListAppAssessmentComplianceDriftsCommand, "nextToken", "nextToken", "maxResults");
