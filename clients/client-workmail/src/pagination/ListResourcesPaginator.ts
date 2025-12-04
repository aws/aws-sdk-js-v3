// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResources: (
  config: WorkMailPaginationConfiguration,
  input: ListResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourcesCommandOutput> = createPaginator<
  WorkMailPaginationConfiguration,
  ListResourcesCommandInput,
  ListResourcesCommandOutput
>(WorkMailClient, ListResourcesCommand, "NextToken", "NextToken", "MaxResults");
