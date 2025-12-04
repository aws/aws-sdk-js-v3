// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEntitiesDetectionJobsCommand,
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "../commands/ListEntitiesDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEntitiesDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListEntitiesDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEntitiesDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput
>(ComprehendClient, ListEntitiesDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
