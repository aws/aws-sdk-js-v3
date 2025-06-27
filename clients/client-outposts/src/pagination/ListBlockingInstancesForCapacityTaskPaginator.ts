// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListBlockingInstancesForCapacityTaskCommand,
  ListBlockingInstancesForCapacityTaskCommandInput,
  ListBlockingInstancesForCapacityTaskCommandOutput,
} from "../commands/ListBlockingInstancesForCapacityTaskCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBlockingInstancesForCapacityTask: (
  config: OutpostsPaginationConfiguration,
  input: ListBlockingInstancesForCapacityTaskCommandInput,
  ...rest: any[]
) => Paginator<ListBlockingInstancesForCapacityTaskCommandOutput> = createPaginator<
  OutpostsPaginationConfiguration,
  ListBlockingInstancesForCapacityTaskCommandInput,
  ListBlockingInstancesForCapacityTaskCommandOutput
>(OutpostsClient, ListBlockingInstancesForCapacityTaskCommand, "NextToken", "NextToken", "MaxResults");
