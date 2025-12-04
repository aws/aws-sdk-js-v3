// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlDomainInsightsByAssessmentCommand,
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput,
} from "../commands/ListControlDomainInsightsByAssessmentCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListControlDomainInsightsByAssessment: (
  config: AuditManagerPaginationConfiguration,
  input: ListControlDomainInsightsByAssessmentCommandInput,
  ...rest: any[]
) => Paginator<ListControlDomainInsightsByAssessmentCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput
>(AuditManagerClient, ListControlDomainInsightsByAssessmentCommand, "nextToken", "nextToken", "maxResults");
