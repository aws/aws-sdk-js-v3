// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import type { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: BedrockPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(BedrockClient, ListProjectsCommand, "nextToken", "nextToken", "maxResults");
