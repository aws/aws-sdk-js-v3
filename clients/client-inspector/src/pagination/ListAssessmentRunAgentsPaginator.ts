// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "../commands/ListAssessmentRunAgentsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentRunAgents: (
  config: InspectorPaginationConfiguration,
  input: ListAssessmentRunAgentsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentRunAgentsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput
>(InspectorClient, ListAssessmentRunAgentsCommand, "nextToken", "nextToken", "maxResults");
