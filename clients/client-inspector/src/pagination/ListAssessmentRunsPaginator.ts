// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentRunsCommand,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
} from "../commands/ListAssessmentRunsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentRuns: (
  config: InspectorPaginationConfiguration,
  input: ListAssessmentRunsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentRunsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput
>(InspectorClient, ListAssessmentRunsCommand, "nextToken", "nextToken", "maxResults");
