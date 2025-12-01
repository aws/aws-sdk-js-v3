// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "../commands/GetEvidenceByEvidenceFolderCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetEvidenceByEvidenceFolder: (
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceByEvidenceFolderCommandInput,
  ...rest: any[]
) => Paginator<GetEvidenceByEvidenceFolderCommandOutput> = createPaginator<
  AuditManagerPaginationConfiguration,
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput
>(AuditManagerClient, GetEvidenceByEvidenceFolderCommand, "nextToken", "nextToken", "maxResults");
