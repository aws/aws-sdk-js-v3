// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "../commands/SearchResourcesCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchResources: (
  config: WorkDocsPaginationConfiguration,
  input: SearchResourcesCommandInput,
  ...rest: any[]
) => Paginator<SearchResourcesCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput
>(WorkDocsClient, SearchResourcesCommand, "Marker", "Marker", "Limit");
