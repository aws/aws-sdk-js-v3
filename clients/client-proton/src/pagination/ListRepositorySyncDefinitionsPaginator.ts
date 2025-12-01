// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "../commands/ListRepositorySyncDefinitionsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositorySyncDefinitions: (
  config: ProtonPaginationConfiguration,
  input: ListRepositorySyncDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListRepositorySyncDefinitionsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput
>(ProtonClient, ListRepositorySyncDefinitionsCommand, "nextToken", "nextToken", "");
