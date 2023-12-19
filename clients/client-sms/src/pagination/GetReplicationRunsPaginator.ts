// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetReplicationRunsCommand,
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput,
} from "../commands/GetReplicationRunsCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetReplicationRuns: (
  config: SMSPaginationConfiguration,
  input: GetReplicationRunsCommandInput,
  ...rest: any[]
) => Paginator<GetReplicationRunsCommandOutput> = createPaginator<
  SMSPaginationConfiguration,
  GetReplicationRunsCommandInput,
  GetReplicationRunsCommandOutput
>(SMSClient, GetReplicationRunsCommand, "nextToken", "nextToken", "maxResults");
