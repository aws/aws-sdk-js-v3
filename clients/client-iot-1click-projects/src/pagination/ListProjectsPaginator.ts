// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient";
import { IoT1ClickProjectsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: IoT1ClickProjectsPaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  IoT1ClickProjectsPaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(IoT1ClickProjectsClient, ListProjectsCommand, "nextToken", "nextToken", "maxResults");
