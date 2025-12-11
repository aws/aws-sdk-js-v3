// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPiiEntitiesDetectionJobsCommand,
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
} from "../commands/ListPiiEntitiesDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPiiEntitiesDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListPiiEntitiesDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListPiiEntitiesDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput
>(ComprehendClient, ListPiiEntitiesDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
