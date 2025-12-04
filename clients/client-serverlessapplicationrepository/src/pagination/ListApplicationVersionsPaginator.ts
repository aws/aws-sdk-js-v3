// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationVersionsCommand,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationVersions: (
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationVersionsCommandOutput> = createPaginator<
  ServerlessApplicationRepositoryPaginationConfiguration,
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput
>(ServerlessApplicationRepositoryClient, ListApplicationVersionsCommand, "NextToken", "NextToken", "MaxItems");
