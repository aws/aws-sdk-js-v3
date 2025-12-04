// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentsCommand,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
} from "../commands/ListAssessmentsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssessments: (
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentsCommandInput,
  ...rest: any[]
) => Paginator<ListAssessmentsCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput
>(AuditManagerClient, ListAssessmentsCommand, "nextToken", "nextToken", "maxResults");
