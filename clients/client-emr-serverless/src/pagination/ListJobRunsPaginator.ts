// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { EMRServerlessClient } from "../EMRServerlessClient";
import { EMRServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobRuns: (
  config: EMRServerlessPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...rest: any[]
) => Paginator<ListJobRunsCommandOutput> = createPaginator<
  EMRServerlessPaginationConfiguration,
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput
>(EMRServerlessClient, ListJobRunsCommand, "nextToken", "nextToken", "maxResults");
