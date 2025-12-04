// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventsDetectionJobsCommand,
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput,
} from "../commands/ListEventsDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventsDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListEventsDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEventsDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListEventsDetectionJobsCommandInput,
  ListEventsDetectionJobsCommandOutput
>(ComprehendClient, ListEventsDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
