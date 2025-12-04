// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAgentStatusesCommand,
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput,
} from "../commands/ListAgentStatusesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentStatuses: (
  config: ConnectPaginationConfiguration,
  input: ListAgentStatusesCommandInput,
  ...rest: any[]
) => Paginator<ListAgentStatusesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput
>(ConnectClient, ListAgentStatusesCommand, "NextToken", "NextToken", "MaxResults");
