// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetNamesCommand,
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput,
} from "../commands/ListFacetNamesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFacetNames: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetNamesCommandInput,
  ...rest: any[]
) => Paginator<ListFacetNamesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput
>(CloudDirectoryClient, ListFacetNamesCommand, "NextToken", "NextToken", "MaxResults");
