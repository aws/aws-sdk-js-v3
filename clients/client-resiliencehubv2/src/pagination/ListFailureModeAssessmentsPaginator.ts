// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFailureModeAssessmentsCommand,
  ListFailureModeAssessmentsCommandInput,
  ListFailureModeAssessmentsCommandOutput,
} from "../commands/ListFailureModeAssessmentsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFailureModeAssessments: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListFailureModeAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListFailureModeAssessmentsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListFailureModeAssessmentsCommandInput,
  ListFailureModeAssessmentsCommandOutput
>(Resiliencehubv2Client, ListFailureModeAssessmentsCommand, "nextToken", "nextToken", "maxResults");
