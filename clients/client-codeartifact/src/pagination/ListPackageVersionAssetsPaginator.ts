// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackageVersionAssetsCommand,
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "../commands/ListPackageVersionAssetsCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackageVersionAssets: (
  config: CodeartifactPaginationConfiguration,
  input: ListPackageVersionAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListPackageVersionAssetsCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput
>(CodeartifactClient, ListPackageVersionAssetsCommand, "nextToken", "nextToken", "maxResults");
