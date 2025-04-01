// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListConsumableResourcesCommand,
  ListConsumableResourcesCommandInput,
  ListConsumableResourcesCommandOutput,
} from "../commands/ListConsumableResourcesCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConsumableResources: (
  config: BatchPaginationConfiguration,
  input: ListConsumableResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListConsumableResourcesCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListConsumableResourcesCommandInput,
  ListConsumableResourcesCommandOutput
>(BatchClient, ListConsumableResourcesCommand, "nextToken", "nextToken", "maxResults");
