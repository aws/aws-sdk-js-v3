// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchQueuesCommand,
  SearchQueuesCommandInput,
  SearchQueuesCommandOutput,
} from "../commands/SearchQueuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchQueues: (
  config: ConnectPaginationConfiguration,
  input: SearchQueuesCommandInput,
  ...rest: any[]
) => Paginator<SearchQueuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchQueuesCommandInput,
  SearchQueuesCommandOutput
>(ConnectClient, SearchQueuesCommand, "NextToken", "NextToken", "MaxResults");
