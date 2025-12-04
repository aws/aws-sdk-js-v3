// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentReportsCommand,
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "../commands/ListAssessmentReportsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentReports: (
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentReportsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentReportsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput
>(AuditManagerClient, ListAssessmentReportsCommand, "nextToken", "nextToken", "maxResults");
