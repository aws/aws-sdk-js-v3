// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetEvidenceFoldersByAssessmentControlCommand,
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentControlCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEvidenceFoldersByAssessmentControl: (
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentControlCommandInput,
  ...rest: any[]
) => Paginator<GetEvidenceFoldersByAssessmentControlCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput
>(AuditManagerClient, GetEvidenceFoldersByAssessmentControlCommand, "nextToken", "nextToken", "maxResults");
