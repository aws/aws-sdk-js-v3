// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeadLetterSourceQueuesCommand,
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
} from "../commands/ListDeadLetterSourceQueuesCommand";
import { SQSClient } from "../SQSClient";
import { SQSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeadLetterSourceQueues: (
  config: SQSPaginationConfiguration,
  input: ListDeadLetterSourceQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListDeadLetterSourceQueuesCommandOutput> = createPaginator<
  SQSPaginationConfiguration,
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput
>(SQSClient, ListDeadLetterSourceQueuesCommand, "NextToken", "NextToken", "MaxResults");
