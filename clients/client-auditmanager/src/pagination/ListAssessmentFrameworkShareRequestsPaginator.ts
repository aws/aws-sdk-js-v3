// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
} from "../commands/ListAssessmentFrameworkShareRequestsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentFrameworkShareRequests: (
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentFrameworkShareRequestsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput
>(AuditManagerClient, ListAssessmentFrameworkShareRequestsCommand, "nextToken", "nextToken", "maxResults");
