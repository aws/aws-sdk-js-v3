// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentControlInsightsByControlDomainCommand,
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput,
} from "../commands/ListAssessmentControlInsightsByControlDomainCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessmentControlInsightsByControlDomain: (
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentControlInsightsByControlDomainCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentControlInsightsByControlDomainCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput
>(AuditManagerClient, ListAssessmentControlInsightsByControlDomainCommand, "nextToken", "nextToken", "maxResults");
