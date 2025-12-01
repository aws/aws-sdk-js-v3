// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentFrameworks: (
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentFrameworksCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentFrameworksCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput
>(AuditManagerClient, ListAssessmentFrameworksCommand, "nextToken", "nextToken", "maxResults");
