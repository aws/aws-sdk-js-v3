// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEvidenceFoldersByAssessment: (
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentCommandInput,
  ...rest: any[]
) => Paginator<GetEvidenceFoldersByAssessmentCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput
>(AuditManagerClient, GetEvidenceFoldersByAssessmentCommand, "nextToken", "nextToken", "maxResults");
