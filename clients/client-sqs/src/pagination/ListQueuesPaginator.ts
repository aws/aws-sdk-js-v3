// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { SQSClient } from "../SQSClient";
import { SQSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: SQSPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  SQSPaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(SQSClient, ListQueuesCommand, "NextToken", "NextToken", "MaxResults");
