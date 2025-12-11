// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "../commands/ListProjectsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProjects: (
  config: DataZonePaginationConfiguration,
  input: ListProjectsCommandInput,
  ...rest: any[]
) => Paginator<ListProjectsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListProjectsCommandInput,
  ListProjectsCommandOutput
>(DataZoneClient, ListProjectsCommand, "nextToken", "nextToken", "maxResults");
