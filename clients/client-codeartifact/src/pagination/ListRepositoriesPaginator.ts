// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositories: (
  config: CodeartifactPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoriesCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput
>(CodeartifactClient, ListRepositoriesCommand, "nextToken", "nextToken", "maxResults");
