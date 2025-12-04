// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListSubPackageGroupsCommand,
  ListSubPackageGroupsCommandInput,
  ListSubPackageGroupsCommandOutput,
} from "../commands/ListSubPackageGroupsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSubPackageGroups: (
  config: CodeartifactPaginationConfiguration,
  input: ListSubPackageGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListSubPackageGroupsCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListSubPackageGroupsCommandInput,
  ListSubPackageGroupsCommandOutput
>(CodeartifactClient, ListSubPackageGroupsCommand, "nextToken", "nextToken", "maxResults");
