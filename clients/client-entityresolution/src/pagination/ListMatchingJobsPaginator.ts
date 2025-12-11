// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMatchingJobsCommand,
  ListMatchingJobsCommandInput,
  ListMatchingJobsCommandOutput,
} from "../commands/ListMatchingJobsCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMatchingJobs: (
  config: EntityResolutionPaginationConfiguration,
  input: ListMatchingJobsCommandInput,
  ...rest: any[]
) => Paginator<ListMatchingJobsCommandOutput> = createPaginator<
  EntityResolutionPaginationConfiguration,
  ListMatchingJobsCommandInput,
  ListMatchingJobsCommandOutput
>(EntityResolutionClient, ListMatchingJobsCommand, "nextToken", "nextToken", "maxResults");
