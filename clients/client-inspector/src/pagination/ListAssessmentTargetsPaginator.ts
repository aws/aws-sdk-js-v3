// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "../commands/ListAssessmentTargetsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentTargets: (
  config: InspectorPaginationConfiguration,
  input: ListAssessmentTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentTargetsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput
>(InspectorClient, ListAssessmentTargetsCommand, "nextToken", "nextToken", "maxResults");
