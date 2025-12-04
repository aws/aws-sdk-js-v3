// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoutingProfileQueuesCommand,
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput,
} from "../commands/ListRoutingProfileQueuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingProfileQueues: (
  config: ConnectPaginationConfiguration,
  input: ListRoutingProfileQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingProfileQueuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListRoutingProfileQueuesCommandInput,
  ListRoutingProfileQueuesCommandOutput
>(ConnectClient, ListRoutingProfileQueuesCommand, "NextToken", "NextToken", "MaxResults");
