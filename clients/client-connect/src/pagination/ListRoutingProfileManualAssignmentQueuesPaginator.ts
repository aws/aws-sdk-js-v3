// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoutingProfileManualAssignmentQueuesCommand,
  ListRoutingProfileManualAssignmentQueuesCommandInput,
  ListRoutingProfileManualAssignmentQueuesCommandOutput,
} from "../commands/ListRoutingProfileManualAssignmentQueuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingProfileManualAssignmentQueues: (
  config: ConnectPaginationConfiguration,
  input: ListRoutingProfileManualAssignmentQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingProfileManualAssignmentQueuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListRoutingProfileManualAssignmentQueuesCommandInput,
  ListRoutingProfileManualAssignmentQueuesCommandOutput
>(ConnectClient, ListRoutingProfileManualAssignmentQueuesCommand, "NextToken", "NextToken", "MaxResults");
