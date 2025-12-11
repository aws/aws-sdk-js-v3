// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSoftwareSetsCommand,
  ListSoftwareSetsCommandInput,
  ListSoftwareSetsCommandOutput,
} from "../commands/ListSoftwareSetsCommand";
import { WorkSpacesThinClientClient } from "../WorkSpacesThinClientClient";
import { WorkSpacesThinClientPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSoftwareSets: (
  config: WorkSpacesThinClientPaginationConfiguration,
  input: ListSoftwareSetsCommandInput,
  ...rest: any[]
) => Paginator<ListSoftwareSetsCommandOutput> = createPaginator<
  WorkSpacesThinClientPaginationConfiguration,
  ListSoftwareSetsCommandInput,
  ListSoftwareSetsCommandOutput
>(WorkSpacesThinClientClient, ListSoftwareSetsCommand, "nextToken", "nextToken", "maxResults");
