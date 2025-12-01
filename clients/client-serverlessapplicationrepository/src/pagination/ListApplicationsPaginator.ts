// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { ServerlessApplicationRepositoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: ServerlessApplicationRepositoryPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  ServerlessApplicationRepositoryPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(ServerlessApplicationRepositoryClient, ListApplicationsCommand, "NextToken", "NextToken", "MaxItems");
