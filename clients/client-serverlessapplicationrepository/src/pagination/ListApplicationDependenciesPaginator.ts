// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationDependenciesCommand,
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "../commands/ListApplicationDependenciesCommand";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationDependencies: (
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationDependenciesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationDependenciesCommandOutput> = createPaginator<
  ServerlessApplicationRepositoryPaginationConfiguration,
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput
>(ServerlessApplicationRepositoryClient, ListApplicationDependenciesCommand, "NextToken", "NextToken", "MaxItems");
