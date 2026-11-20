// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { TextractClient } from "../TextractClient";
import type { TextractPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: TextractPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  TextractPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(TextractClient, ListProjectsCommand, "NextToken", "NextToken", "MaxResults");
