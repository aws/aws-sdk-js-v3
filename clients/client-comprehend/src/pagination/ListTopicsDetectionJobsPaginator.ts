// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTopicsDetectionJobsCommand,
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput,
} from "../commands/ListTopicsDetectionJobsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTopicsDetectionJobs: (
  config: ComprehendPaginationConfiguration,
  input: ListTopicsDetectionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTopicsDetectionJobsCommandOutput> = createPaginator<
  ComprehendPaginationConfiguration,
  ListTopicsDetectionJobsCommandInput,
  ListTopicsDetectionJobsCommandOutput
>(ComprehendClient, ListTopicsDetectionJobsCommand, "NextToken", "NextToken", "MaxResults");
