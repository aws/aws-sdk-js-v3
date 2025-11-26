// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResources: (
  config: RAMPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListResourcesCommandInput,
  ListResourcesCommandOutput
>(RAMClient, ListResourcesCommand, "nextToken", "nextToken", "maxResults");
