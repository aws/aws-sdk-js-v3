// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCodeIssueArtifactsCommand,
  ListCodeIssueArtifactsCommandInput,
  ListCodeIssueArtifactsCommandOutput,
} from "../commands/ListCodeIssueArtifactsCommand";
import { ContinuumClient } from "../ContinuumClient";
import type { ContinuumPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeIssueArtifacts: (
  config: ContinuumPaginationConfiguration,
  input: ListCodeIssueArtifactsCommandInput,
  ...rest: any[]
) => Paginator<ListCodeIssueArtifactsCommandOutput> = createPaginator<
  ContinuumPaginationConfiguration,
  ListCodeIssueArtifactsCommandInput,
  ListCodeIssueArtifactsCommandOutput
>(ContinuumClient, ListCodeIssueArtifactsCommand, "nextToken", "nextToken", "maxResults");
