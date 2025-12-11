// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: DataBrewPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(DataBrewClient, ListProjectsCommand, "NextToken", "NextToken", "MaxResults");
