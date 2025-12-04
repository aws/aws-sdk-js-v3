// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackageGroupsCommand,
  ListPackageGroupsCommandInput,
  ListPackageGroupsCommandOutput,
} from "../commands/ListPackageGroupsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackageGroups: (
  config: CodeartifactPaginationConfiguration,
  input: ListPackageGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListPackageGroupsCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListPackageGroupsCommandInput,
  ListPackageGroupsCommandOutput
>(CodeartifactClient, ListPackageGroupsCommand, "nextToken", "nextToken", "maxResults");
