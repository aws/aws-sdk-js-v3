// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListJobsByConsumableResourceCommand,
  ListJobsByConsumableResourceCommandInput,
  ListJobsByConsumableResourceCommandOutput,
} from "../commands/ListJobsByConsumableResourceCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobsByConsumableResource: (
  config: BatchPaginationConfiguration,
  input: ListJobsByConsumableResourceCommandInput,
  ...rest: any[]
) => Paginator<ListJobsByConsumableResourceCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListJobsByConsumableResourceCommandInput,
  ListJobsByConsumableResourceCommandOutput
>(BatchClient, ListJobsByConsumableResourceCommand, "nextToken", "nextToken", "maxResults");
