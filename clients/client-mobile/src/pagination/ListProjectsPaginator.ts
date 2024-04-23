// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { MobileClient } from "../MobileClient";
import { MobilePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: MobilePaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  MobilePaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(MobileClient, ListProjectsCommand, "nextToken", "nextToken", "maxResults");
