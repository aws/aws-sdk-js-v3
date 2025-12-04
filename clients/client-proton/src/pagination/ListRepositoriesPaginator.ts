// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositories: (
  config: ProtonPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoriesCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput
>(ProtonClient, ListRepositoriesCommand, "nextToken", "nextToken", "maxResults");
