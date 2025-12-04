// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositoriesInDomain: (
  config: CodeartifactPaginationConfiguration,
  input: ListRepositoriesInDomainCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoriesInDomainCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput
>(CodeartifactClient, ListRepositoriesInDomainCommand, "nextToken", "nextToken", "maxResults");
