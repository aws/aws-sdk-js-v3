// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  SearchAgentStatusesCommand,
  SearchAgentStatusesCommandInput,
  SearchAgentStatusesCommandOutput,
} from "../commands/SearchAgentStatusesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAgentStatuses: (
  config: ConnectPaginationConfiguration,
  input: SearchAgentStatusesCommandInput,
  ...rest: any[]
) => Paginator<SearchAgentStatusesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchAgentStatusesCommandInput,
  SearchAgentStatusesCommandOutput
>(ConnectClient, SearchAgentStatusesCommand, "NextToken", "NextToken", "MaxResults");
