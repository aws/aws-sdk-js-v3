// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetReplicationJobsCommand,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput,
} from "../commands/GetReplicationJobsCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReplicationJobs: (
  config: SMSPaginationConfiguration,
  input: GetReplicationJobsCommandInput,
  ...rest: any[]
) => Paginator<GetReplicationJobsCommandOutput> = createPaginator<
  SMSPaginationConfiguration,
  GetReplicationJobsCommandInput,
  GetReplicationJobsCommandOutput
>(SMSClient, GetReplicationJobsCommand, "nextToken", "nextToken", "maxResults");
