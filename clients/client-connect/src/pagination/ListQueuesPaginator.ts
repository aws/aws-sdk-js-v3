// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: ConnectPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(ConnectClient, ListQueuesCommand, "NextToken", "NextToken", "MaxResults");
