// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListPolicyPreviewJobsCommand,
  ListPolicyPreviewJobsCommandInput,
  ListPolicyPreviewJobsCommandOutput,
} from "../commands/ListPolicyPreviewJobsCommand";
import type { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyPreviewJobs: (
  config: AccessAnalyzerPaginationConfiguration,
  input: ListPolicyPreviewJobsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyPreviewJobsCommandOutput> = createPaginator<
  AccessAnalyzerPaginationConfiguration,
  ListPolicyPreviewJobsCommandInput,
  ListPolicyPreviewJobsCommandOutput
>(AccessAnalyzerClient, ListPolicyPreviewJobsCommand, "nextToken", "nextToken", "maxResults");
