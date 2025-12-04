// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "../commands/ListAccessPreviewFindingsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessPreviewFindings: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAccessPreviewFindingsCommandInput,
  ...rest: any[]
) => Paginator<ListAccessPreviewFindingsCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput
>(AccessAnalyzerClient, ListAccessPreviewFindingsCommand, "nextToken", "nextToken", "maxResults");
