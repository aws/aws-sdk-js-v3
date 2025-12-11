// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobRuns: (
  config: EMRContainersPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...rest: any[]
) => Paginator<ListJobRunsCommandOutput> = createPaginator<
  EMRContainersPaginationConfiguration,
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput
>(EMRContainersClient, ListJobRunsCommand, "nextToken", "nextToken", "maxResults");
