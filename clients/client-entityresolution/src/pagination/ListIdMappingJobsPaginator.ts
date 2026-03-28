// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListIdMappingJobsCommand,
  ListIdMappingJobsCommandInput,
  ListIdMappingJobsCommandOutput,
} from "../commands/ListIdMappingJobsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import type { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdMappingJobs: (
  config: EntityResolutionPaginationConfiguration,
  input: ListIdMappingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListIdMappingJobsCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListIdMappingJobsCommandInput,
  ListIdMappingJobsCommandOutput
>(EntityResolutionClient, ListIdMappingJobsCommand, "nextToken", "nextToken", "maxResults");
