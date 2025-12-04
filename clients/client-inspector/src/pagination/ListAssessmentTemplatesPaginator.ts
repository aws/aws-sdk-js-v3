// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "../commands/ListAssessmentTemplatesCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentTemplates: (
  config: InspectorPaginationConfiguration,
  input: ListAssessmentTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentTemplatesCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput
>(InspectorClient, ListAssessmentTemplatesCommand, "nextToken", "nextToken", "maxResults");
