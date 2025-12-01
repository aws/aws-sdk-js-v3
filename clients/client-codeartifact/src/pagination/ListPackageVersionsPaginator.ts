// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackageVersions: (
  config: CodeartifactPaginationConfiguration,
  input: ListPackageVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPackageVersionsCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput
>(CodeartifactClient, ListPackageVersionsCommand, "nextToken", "nextToken", "maxResults");
