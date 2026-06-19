// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchAssetsCommand,
  SearchAssetsCommandInput,
  SearchAssetsCommandOutput,
} from "../commands/SearchAssetsCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAssets: (
  config: GluePaginationConfiguration,
  input: SearchAssetsCommandInput,
  ...rest: any[]
) => Paginator<SearchAssetsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  SearchAssetsCommandInput,
  SearchAssetsCommandOutput
>(GlueClient, SearchAssetsCommand, "NextToken", "NextToken", "MaxResults");
