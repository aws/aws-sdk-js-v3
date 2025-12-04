// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { PCSClient } from "../PCSClient";
import { PCSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: PCSPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  PCSPaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(PCSClient, ListQueuesCommand, "nextToken", "nextToken", "maxResults");
