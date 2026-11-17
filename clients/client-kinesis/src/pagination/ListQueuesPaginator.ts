// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { KinesisClient } from "../KinesisClient";
import type { KinesisPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQueues: (
  config: KinesisPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...rest: any[]
) => Paginator<ListQueuesCommandOutput> = createPaginator<
  KinesisPaginationConfiguration,
  ListQueuesCommandInput,
  ListQueuesCommandOutput
>(KinesisClient, ListQueuesCommand, "NextToken", "NextToken", "MaxResults");
