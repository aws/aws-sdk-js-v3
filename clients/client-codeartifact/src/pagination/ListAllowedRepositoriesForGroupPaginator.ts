// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListAllowedRepositoriesForGroupCommand,
  ListAllowedRepositoriesForGroupCommandInput,
  ListAllowedRepositoriesForGroupCommandOutput,
} from "../commands/ListAllowedRepositoriesForGroupCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAllowedRepositoriesForGroup: (
  config: CodeartifactPaginationConfiguration,
  input: ListAllowedRepositoriesForGroupCommandInput,
  ...rest: any[]
) => Paginator<ListAllowedRepositoriesForGroupCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListAllowedRepositoriesForGroupCommandInput,
  ListAllowedRepositoriesForGroupCommandOutput
>(CodeartifactClient, ListAllowedRepositoriesForGroupCommand, "nextToken", "nextToken", "maxResults");
